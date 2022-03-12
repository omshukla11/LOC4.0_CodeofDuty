import React from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import {url} from "../url";

export default function ForgotPassword() {
  const { uidb64, token } = useParams();
  const hist = useHistory();
  console.log(uidb64);
  console.log(token);
  async function verify() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `${url}account/password-reset/${uidb64}/${token}/`,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        Swal.fire({
          title: "Add new password",
          inputLabel: "Password",
          input: "text",
          inputValidator: async (num) => {
            console.log(num);
            if (!num) {
              return "You need to write something!";
            } else if (num) {
              var FormData = require("form-data");
              var mail = new FormData();
              mail.append("password", num);
              mail.append("token",token)
              mail.append("uidb64",uidb64)
              var config2 = {
                method: "patch",
                url: url+"account/password-reset-complete/",
                data: mail,
              };
              axios(config2).then(function (response) {
                console.log(JSON.stringify(response.data));
                Swal.fire({
                  title: "Password is reset",
                  icon: "success",
                });
                hist.push('/login');
              });
            }
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <center style={{ margin: "100px" }}>
      <h2>To verify your Email click on below button</h2>
      <Button variant="contained" onClick={verify} component={Link}>
        Verify
      </Button>
    </center>
  );
}
