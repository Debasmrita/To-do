const inputBox= document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("Write Something Up!");
    }else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);

        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();


}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){

        const wasChecked = e.target.classList.contains("checked");

        e.target.classList.toggle("checked");
        saveData();

        // 🎊 Launch confetti with sound
        if(!wasChecked){
        launchConfetti();
        const sound= document.getElementById("complete-sound");
        sound.currentTime=0;
        sound.play();
        }
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();

function clearAll() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    localStorage.removeItem("data");
    listContainer.innerHTML = "";
  }
}



//Confetti function
function launchConfetti() {
  confetti({
    particleCount: 1200,
    spread: 180,
    origin: { y: 0.6 },
    colors: ['#ff4da6', '#f9d5ec', '#b388eb'], // Barbie pinks & purples 💅
  });
}

