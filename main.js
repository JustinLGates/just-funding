console.log("hello world");

function requestForContact(event) {
  event.preventDefault();
  let form = event.target;
  let display = document.getElementById("firstCard");
  let firstName = form.firstName.value;
  let lastName = form.lastName.value;
  let phoneNum = form.phone.value;
  let eMail = form.eMail.value;
  display.innerHTML = `<h2 class="pl-4">Thank you for getting in touch ${firstName} ${lastName}, We hope you have a great day. </h2><p class="pl-4"> We will be reaching out to you at ${eMail} if we do not get a responce we will give you a call at ${phoneNum}
  </p>`;

  console.log("submited form");
}

`<h2 class="pl-4">funding your orgonization</h2>
<p class="pl-4">
</p>
</div>`;
