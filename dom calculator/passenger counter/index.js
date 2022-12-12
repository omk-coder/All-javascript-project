let countEl = document.getElementById("count-el");

let count = 0;
function increment(){
    count = count + 1;
    countEl.innerText = count;
    if(count === 10){
        saveEl.innerText = "heyy heyy";
    }else{
        saveEl.innerText +=  countstr;
    }
    
}
function decrement(){
    count = count -1;
    countEl.innerText = count;
}
let saveEl = document.getElementById("save-el");
function save(){
   let countstr = count + "-";
   saveEl.innerText += countstr;

}
let refreshEl = document.getElementById("save-el");
function refresh(){
    countEl.innerText = 0;
    refreshEl.textContent = "Previous Entry: " + "0";
}

