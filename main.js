const reg_name = /^[a-zA-Z ,.'-]{3,30}$/;
const reg_phone = /[(+]*[0-9]+[()+ .-]*/;
const reg_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const reg_zip = /^[/d]{3,10}$/;
const reg_sentence = /^[\w ,.'-]{8,80}$/;
const reg_link = /https?:\/\/[^\s]+/;

function validateHandle(e, reg) {
  const label = e.target.nextSibling.nextSibling;
  const email = document.querySelector("input[name='email']");
  const reemail = document.querySelector("input[name='reemail']");

  e.target.value
  ? label.classList.add('label-up')
  : label.classList.remove('label-up')

  !reg.test(e.target.value)
  ? label.classList.add('invalid')
  : label.classList.remove('invalid')

  // matching emails
  !(email.value === reemail.value)
  ? reemail.nextSibling.nextSibling.classList.add('invalid')
  : reemail.nextSibling.nextSibling.classList.remove('invalid')
}
