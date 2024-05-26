let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
  });
}
const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light Mode";
  } else {
    modeText.innerText = "Dark Mode";
  }
});

const container = document.querySelector(".container"),
      pwshowHide = document.querySelectorAll(".showHidePw"),
      PwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

      // js code to show/hide password and change icon
      pwshowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            PwFields.forEach(PwField =>{
                if(PwField.type ==="password"){
                    PwField.type = "text";

                    pwshowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    PwField.type = "password";

                    pwshowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })
        })
      })

      // js code to appear signup and loin form
      signUp.addEventListener("click", ()=>{
        container.classList.add("active");
      });

      login.addEventListener("click", ()=>{
        container.classList.remove("active");
      });