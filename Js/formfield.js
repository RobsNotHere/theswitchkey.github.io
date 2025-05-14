var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  var valid = true;
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    let nextBtn = document.getElementById("nextBtn");
    nextBtn.innerHTML = "Submit";
    nextBtn.onclick = function () {
      // 從 sessionStorage 獲取資料
      var password = document.getElementsByName("password");
      var confirmPassword = document.getElementsByName("confirmPassword");
      if (password !== undefined && confirmPassword !== undefined) {
        if (confirmPassword[0].value !== password[0].value) {
          console.log("password & confirmPassword are not same.");
          for (var i = 0; i < confirmPassword.length; i++) {
            confirmPassword[i].style.backgroundColor = "#ffebeb";
          }
          valid = false;
        } else {
          sessionStorage.setItem("password", password[0].value);
          valid = true;
        }
      }

      if (valid) {
        const formData = {
          firstName: sessionStorage.getItem("firstName"),
          lastName: sessionStorage.getItem("lastName"),
          email: sessionStorage.getItem("email"),
          location: sessionStorage.getItem("location"),
          password: sessionStorage.getItem("password"),
        };
        // 使用 fetch 發送資料到伺服器
        fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log("資料提交成功");
            window.location.href = "../Sign In/sign-in.html";
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    };
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.querySelectorAll("regForm,signInForm,signUpForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;

  var firstName = document.getElementsByName("firstName")[0].value;
  var lastName = document.getElementsByName("lastName")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var location = document.getElementsByName("location")[0].value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  if (!emailPattern.test(email)) {
    var emailElement = document.getElementsByName("email");
    for (var i = 0; i < emailElement.length; i++) {
      emailElement[i].style.backgroundColor = "#ffebeb";
    }
    valid = false;
    console.log("email is not correct patten.");
  }

  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("location", location);
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  if (x[n] !== undefined) {
    x[n].className += " active";
  }
}
