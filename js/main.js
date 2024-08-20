function verify_code(code) {
  if (code === "3931") {
    Swal.fire({
        imageUrl: "images/lock.gif",
        imageWidth: 100,
        text: "Key #1"
      });
  }else if (code === "6745") {
    Swal.fire({
        imageUrl: "images/lock.gif",
        imageWidth: 100,
        text: "Key #2"
      });
  } else if (code === "2484") {
    Swal.fire({
        imageUrl: "images/lock.gif",
        imageWidth: 100,
        text: "Key #3"
      });
  } else if (code === "3177") {
    Swal.fire({
        imageUrl: "images/lock.gif",
        imageWidth: 100,
        text: "Key #4"
      });
  } else {
    Swal.fire({
        icon: "error",
        title: "Passcode is incorrect",
        text: "Some number might be wrong!",
        footer: 'Please try again!'
      });
  }
}

// Main
const inputCode = document.getElementById("code");
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    const code = inputCode.value;
    verify_code(code);
    inputCode.value = "";
});