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