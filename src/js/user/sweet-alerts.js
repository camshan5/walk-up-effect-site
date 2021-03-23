import swal from "sweetalert"

let form = document.getElementById("contact-form")

async function handleSubmit(event) {
  event.preventDefault()

  let data = new FormData(event.target)

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      swal({
        title: "Thanks!",
        text:
          "Your information has been submitted to the Walk Up team. Someone will be in touch with you shortly.",
        icon: "success",
      })
      form.reset()
    })
    .catch((error) => {
      swal({
        title: "Something went wrong!",
        text: "Make sure you fill out the entire form before submitting.",
        icon: "error",
      })
    })
}
form.addEventListener("submit", handleSubmit)
