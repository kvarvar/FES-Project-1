// template_q2q3sei
// service_xhs4peb
// pr1xc52OEieIK2e0x

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_xhs4peb",
      "template_q2q3sei",
      event.target,
      "pr1xc52OEieIK2e0x",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "the email service is temporarily unavailable. Please contact me directly on katherine.adjodha@gmail.com",
      );
    });
}
