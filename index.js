


function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Please Enter your name");
      return false;
    }
    
    let email = document.forms["myForm"]["email"].value;
    if (email == "") {
        alert("Please enter your email");
        return false;
    }
    
    let submit = document.forms["myForm"]["submit"].checked
    submit = true;
    if (x !== "" && email !== "") {
        alert("thanks for reaching out, we will get back to you as soon as possible");
        return true;
    }

}

function resetField() {
    document.getElementById('name').reset()
   

}



var typed = new Typed('.type', {
    strings: ['Designer', 'Web Developer', 'Freelancer', 'Writer'],
      typespeed: 60,
      backspeed: 60,
      loop: true,

    });