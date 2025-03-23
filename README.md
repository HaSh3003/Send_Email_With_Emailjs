# EmailJS - Send Emails with JavaScript

## Description

A practical project using **EmailJS** with **JavaScript** to send emails without the need for a backend server. It relies on the EmailJS API, making email sending easy and fast within your web applications.

---

## Features

- **Send emails directly from the frontend.**
- **No need for SMTP setup or a backend server.**
- **Quick and easy integration using the EmailJS API.**
- **Clean and well-structured code for easy modification.**

---

## How to Use

### 1. Install EmailJS

You don't need to install any library, just create an account on [EmailJS](https://www.emailjs.com/) and get your **Service ID, Template ID, and Public Key**.

### 2. Connect Project to EmailJS

```javascript
emailjs
  .send("service_XXXXXXX", "template_XXXXXXX", {-- Data --})
  .then((response) => {
    alert("success");
  })
  .catch((error) => {
    alert("Connection failed" + error);
  });
```

---

## Using SweetAlert Instead of Alerts

To enhance the user experience, you can replace default JavaScript `alert` messages with **SweetAlert** for a more modern and visually appealing notification system.

### Install SweetAlert

You can include SweetAlert in your project by adding the following script in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```

### Update Alert Messages

Replace the default `alert` with SweetAlert like this:

```javascript
emailjs
  .send("service_XXXXXXX", "template_XXXXXXX", {-- Data --})
  .then((response) => {
    Swal.fire({
      title: "Success!",
      text: "Your email has been sent successfully.",
      icon: "success",
    });
  })
  .catch((error) => {
    Swal.fire({
      title: "Error!",
      text: "Connection failed: " + error,
      icon: "error",
    });
  });
```

Using **SweetAlert** improves the UI and provides better feedback to users.

## المساهمة (Contributing)

مرحب بأي مساهمات أو تحسينات على الكود! إذا كان لديك أي اقتراحات أو إضافات، يمكنك فتح **Pull Request** أو إنشاء **Issue** على المستودع.

Contributions and improvements are welcome! If you have any suggestions, feel free to open a **Pull Request** or create an **Issue** in the repository.

---

## روابط مهمة (Important Links)

- 🔗 **GitHub Repository:** [https://github.com/HaSh3003/Send_Email_With_Emailjs]
- 🌐 **EmailJS Website:** [https://www.emailjs.com/](https://www.emailjs.com/)
- 📺 **YouTube Tutorial:** [https://www.youtube.com/watch?v=5hFTT8GX1fU&ab_channel=Perfecto_Code]
- 📩 Email: [perfecto.dev@programmer.net](mailto:perfecto.dev@programmer.net)\
- 🐦 Twitter: [@HaSh_Perfecto](https://x.com/HaSh_Perfecto)\
- 💻 GitHub: [HaSh3003](https://github.com/HaSh3003)
