const express = require("express");

const { Auth } = require("two-step-auth");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

var otpToVerify;

async function login(emailId) {
  const res = await Auth(emailId, "Thoughtworks");
  console.log(res);
  console.log(res.mail);
  console.log(res.OTP);
  console.log(res.success);

  otpToVerify = res.OTP;
}

app.post('/login', (req,res) => {
  const email = req.body.email
  login(email);
})

app.post('/verify', (req,res) => {
  const otp = req.body.otp
  if(otpToVerify == otp) {
    console.log("go to home");
  }
})



app. listen(3001, () => {
  console.log("running server");
});