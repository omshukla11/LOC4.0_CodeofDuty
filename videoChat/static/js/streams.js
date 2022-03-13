const APP_ID='943240068a7a4570ba10d8b478fb2b7d'
const TOKEN = sessionStorage.getItem('token')
const CHANNEL = sessionStorage.getItem('room')
let UID = sessionStorage.getItem('UID')
let NAME = sessionStorage.getItem('name')


const client = AgoraRTC.createClient({mode:'rtc',codec:'vp8'})
// two required parameters one is mode: it can either be RTC or live...just specifies the optimization algo that will be used
// and other is codec is encoding method that our browser is going to use

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {

    document.getElementById('room-name').innerText = CHANNEL

    client.on('user-published',handleUserJoined)
    client.on('user-left',handleUserLeft)

    try{
        UID = await client.join(APP_ID, CHANNEL, TOKEN, UID)
    }
    catch(error){
        console.error(error)
        window.open('/video/','_self')
    }


    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let member = await createMember()
    console.log(member)
    let player = `<div  class="video-container" id="user-container-${UID}">
                    <div class="video-player" id="user-${UID}"></div>
                    <div class="username-wrapper"><span class="user-name">${member}</span></div>
                    </div>`

    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)
    localTracks[1].play(`user-${UID}`) //this play function will create a video tag an html element and will play our video inside that tag

    await client.publish([localTracks[0],localTracks[1]]) //now all in that room can also see the video and audio since we published it

}

let handleUserJoined = async (user, mediaType) =>{
    remoteUsers[user.uid] = user
    await client.subscribe(user,mediaType)
    if(mediaType === 'video')
    {
        let player = document.getElementById(`user-container-${user.uid}`)
        if(player != null)
        {
            player.remove()
        }

        let member = await getMember(user)

        player = `<div  class="video-container" id="user-container-${user.uid}">
                    <div class="video-player" id="user-${user.uid}"></div>
                    <div class="username-wrapper"><span class="user-name">${member}</span></div>
                    </div>`

        document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)
        user.videoTrack.play(`user-${user.uid}`)
    }
    if(mediaType ==='audio'){
        user.audioTrack.play()
    }
}

let handleUserLeft = async (user) => {
    delete remoteUsers[user.uid]
    document.getElementById(`user-container-${user.uid}`).remove()
}

let leaveAndRemoveLocalStream = async () => {
    for(let i = 0; localTracks.length>i;i++){
        localTracks[i].stop()
        localTracks[i].close()
    }

    await client.leave()
    deleteMember()
    window.open('/video/','_self')
}

let toggleCamera = async (e) => {
    console.log('TOGGLE CAMERA TRIGGERED')
    if(localTracks[1].muted){
        await localTracks[1].setMuted(false)
        e.target.style.backgroundColor = '#fff'
    }else{
        await localTracks[1].setMuted(true)
        e.target.style.backgroundColor = 'rgb(255, 80, 80, 1)'
    }
}

let toggleMic = async (e) => {
    console.log('TOGGLE MIC TRIGGERED')
    if(localTracks[0].muted){
        await localTracks[0].setMuted(false)
        e.target.style.backgroundColor = '#fff'
    }else{
        await localTracks[0].setMuted(true)
        e.target.style.backgroundColor = 'rgb(255, 80, 80, 1)'
    }
}

let createMember = async () => {
     let response = await fetch(`https://2c70-2409-4040-d89-2d86-184-c948-9c4-d769.ngrok.io//video/create_member/?name=${NAME}&uid=${UID}&room_name=${CHANNEL}`)
    //  ,{
    //     method:'',
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({'name':NAME,'room_name':CHANNEL,'UID':UID}) 
    //  })
    let member = await response.json()
    return member
}

let getMember = async (user) => {
    let response = await fetch(`https://2c70-2409-4040-d89-2d86-184-c948-9c4-d769.ngrok.io//video/get_member/?uid=${user.uid}&room_name=${CHANNEL}`)
    let member = await response.json()
    return member
}

let deleteMember = async () => {
    let response = await fetch(`https://2c70-2409-4040-d89-2d86-184-c948-9c4-d769.ngrok.io//video/delete_member/?uid=${UID}&room_name=${CHANNEL}`)
    //  {
    //     method:'DELETE',
    //     headers: {
    //         'Content-Type':'application/json'
    //     },
    // })
    let member = await response.json()
    return member
}
window.addEventListener("beforeunload",deleteMember);

joinAndDisplayLocalStream()

document.getElementById('leave-btn').addEventListener('click', leaveAndRemoveLocalStream)
document.getElementById('camera-btn').addEventListener('click', toggleCamera)
document.getElementById('mic-btn').addEventListener('click', toggleMic)