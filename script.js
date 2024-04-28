let login = prompt('Enter your login:');

if (login === "Admin") {
  let password = prompt("Enter your password");
  if (password === null || password === "") {
    alert('Canceled');
  } else if (password === "master") {
    alert("You're welcome!");
  } else {
    alert("wrong password");
  }
}
else if (login === null || login === "") {
  alert("Canceled");
}
else {
  alert("I don't know you");
}