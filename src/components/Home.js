import React, { useState } from "react";

export default function Home() {
  let loggedIn = localStorage.getItem('status');
  console.log(loggedIn);
  var destination = this.props.router.location.query.destinationPath;
  console.log(destination)
  return (
    <h1>Home</h1>
  );
}