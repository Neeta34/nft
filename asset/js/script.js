// const togglepasswordButton = document.querySelector('.password-icon');
// const ClosedEyeIcon = document.querySelector('#closed-eye');
// const openEyeIcon  = document.querySelector('#open-eye');
// let isPasswordVisible = false;




// togglepasswordButton.addEventListener('click', function() {
// if (!isPasswordVisible){
//     // make password visible
//     ClosedEyeIcon.classList.add('hide');
//     openEyeIcon.classList.remove('hide');
// } else{
// // make password hidden
// ClosedEyeIcon.classList.remove('hide');
// openEyeIcon.classList.add('hide');
// }
// isPasswordVisible = !isPasswordVisible;

// });
let emptremove = document.getElementById('closed-eye')
let omo = document.getElementsByClassName('openeye')[0]


const togglePassword = document.querySelector("#closed-eye");
const password = document.querySelector("#exampleInputPassword1");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") == "password" ? "text" : "password" ;
    password.setAttribute("type", type);
    
    // toggle the icon
    // this.classList.toggle("fa-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

emptremove.addEventListener("click", () => {
    omo.style =` display:block; `;
    emptremove.style =`display:none `;
    });
    
    omo.addEventListener("click", () => {
        emptremove.style =` display:block; `;
        omo.style =` display:none; `;
    });

    