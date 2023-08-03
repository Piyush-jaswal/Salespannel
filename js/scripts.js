/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
/*Piyush*/
function integrateSalespanel() {
    // Get the email address from the user.
    const email = document.getElementById("emailAddress").value;
  
    // Create a new lead in Salespanel.
    const lead = {
      email: email,
    };
  
    // Send the lead to Salespanel.
    fetch("https://salespanel.io/api/v1/", {
      method: "POST",
      headers: {
        "Authorization": "64e719f3b712832283f2509d57ec45006926ac73",
      },
      body: JSON.stringify(lead),
    });
    console.log(email);
  }
  console.log("Hi");
  // Add an event listener to the submit button.
  document.getElementById("submitButton").addEventListener("click", integrateSalespanel);