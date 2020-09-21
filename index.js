let button = document.querySelector("#running-btn");
console.log(Math.floor(Math.random()*window.innerWidth).toString());
let escapes = document.querySelector("#escapes");
let escapeCount = 0;

colors = ["yellow","green","pink","darkslategray","brown"]
button.addEventListener("mouseover",()=>{
    if(escapeCount<10){
        button.style.left = (Math.random()*(window.innerWidth-100)) + "px"
        button.style.top = (Math.random()*(window.innerHeight-100)) + "px"
        document.querySelector("body").style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
        escapeCount += 1
        escapes.innerText = escapeCount
    }
})

button.addEventListener("click",()=>{window.open("https://www.linkedin.com/in/kesihain-selvarajoo-47a189143/")});