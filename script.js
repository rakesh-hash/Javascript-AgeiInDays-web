function ageInDays() {
  var presentyear = prompt("From whic year do you want to know your age?");
  var birthyear = prompt("Which year were you born?");
  var age = (presentyear - birthyear) * 365;
  console.log(age);
  var h1 = document.createElement("h1");
  var text = document.createTextNode("You are  " + age + "days old");
  h1.setAttribute("id", "ageInDays");
  h1.append(text);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
