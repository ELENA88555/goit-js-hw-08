import throttle from 'lodash.throttle';


const LOCAL_STORAGE_KEY = "feedback-form-state";

let formData = {};
const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(handleInput, 500))

function handleInput (event) {
  formData[event.target.name] = event.target.value
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData))

}

textareaMessage();

function textareaMessage () {
  const savedMessage = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!savedMessage) {
    return


  } 
  try {
  formData = JSON.parse(savedMessage)
  Object.entries(formData).forEach(([name, value]) => {
  form.elements[name].value = value;

})
  } catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // Unexpected token W in JSON at position 0
  };

  }


form.addEventListener("submit", handleSubmitForm)

function handleSubmitForm (event) {
event.preventDefault()
console.log(formData);
localStorage.removeItem(LOCAL_STORAGE_KEY)
  event.currentTarget.reset()
  formData = {}
}

