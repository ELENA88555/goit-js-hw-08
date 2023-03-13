import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector('input[name="email"]')
const messageText = document.querySelector('textarea[name = "message"]')

textareaMessage()
let formData = {}


form.addEventListener("input", throttle(handleInputTextarea, 500))

function handleInputTextarea (event) {
  formData[event.target.name] = event.target.value
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))

}

function textareaMessage () {
  const savedMessage = JSON.parse(localStorage.getItem("feedback-form-state"))
  if (savedMessage) {
inputEmail.value = savedMessage.email 
messageText.value = savedMessage.message

  }


console.log("email", inputEmail.value);
 console.log("message", messageText.value);
}


form.addEventListener("submit", handleSubmitForm)

function handleSubmitForm (event) {
event.preventDefault()

if (inputEmail.value === "" || messageText.value === "" ) {
  return alert("Всі поля мають бути заповнені")
  } localStorage.removeItem("feedback-form-state")
  event.currentTarget.reset()
}




