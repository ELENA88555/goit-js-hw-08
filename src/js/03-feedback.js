import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector('input[name="email"]')
const messageText = document.querySelector('textarea[name = "message"]')



form.addEventListener("submit", handleSubmitForm)


function handleSubmitForm (event) {
event.preventDefault()
event.currentTarget.reset()
localStorage.removeItem("feedback-form-state")

if (inputEmail.value === "" || messageText.value === "" ) {
return alert("Всі поля мають бути заповнені")
}
}

textareaMessage()
let formData = {}

form.addEventListener("input", throttle(handleInputTextarea, 500))

function handleInputTextarea (event) {
  formData[event.target.name] = event.target.value
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
console.log( formData[event.target.value])
}


function textareaMessage () {
  const savedMessage = JSON.parse(localStorage.getItem("feedback-form-state"))
  if (savedMessage) {
inputEmail.value = savedMessage.email 
messageText.value = savedMessage.message
console.log(inputEmail.value);
console.log(messageText.value);
  }
}


