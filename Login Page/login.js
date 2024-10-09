const container = document.getElementById('container');
const togglregisterButton = document.getElementById('register');
const togglloginButton = document.getElementById('login');


togglregisterButton.addEventListener('click', ()=>{
    container.classList.add('active');
});

togglloginButton.addEventListener('click', ()=>{
    container.classList.remove('active')
});




togglloginButton.addEventListener('click', function(){
    document.title = "Welcome | Login";
})

togglregisterButton.addEventListener('click', function(){
    document.title = "Welcome | Register";
})

