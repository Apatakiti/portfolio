(function () { 
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    }) 
})(); 

//  const input1 = document.querySelector('form')[0]
//  const input2 = document.querySelector('form')[1]
//  const message = document.querySelector('form')[2]
//  const submit = document.querySelector('.submit-btn')

//   submit.addEventListener( 'submit', (e) => { 
//       e.preventDefault()
//       input1.value = ''
//       input2.value = ''
//       message.value =  ''
//   })
