// ? Function to send an email using EmailJS

function sendEmail() {
  // ? Creating an object that holds the email data
  const Data = {
    to_email: "heshamflex3033@gmail.com",
    from_name: document.getElementById("name").value,
    from_email: "heshamflex3033@gmail.com",
    subject: "Support",
    // ? Email message body
    message: `
    name : ${document.getElementById("name").value}
    email : ${document.getElementById("email").value}
    phone : ${document.getElementById("phone").value}
    message : ${document.getElementById("message").value}
    `,
  };
  // ? Sending the email using EmailJS API
  emailjs

    .send("YOUR_SERVICES_ID", "YOUR_TEMPLATE_ID", Data)
    .then((response) => {
      alert("success"); // ? Show success alert when the email is sent
    })
    .catch((error) => {
      alert("فشل الاتصال" + error); // ! Show error alert if the email fails
    });
}
// * Adding an event listener to the button to trigger the sendEmail function when clicked
document.getElementById("btn").addEventListener("click", () => {
  sendEmail();
});
