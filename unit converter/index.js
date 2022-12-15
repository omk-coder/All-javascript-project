    // let input = document.getElementById("number").nodeValue
    // let parA = document.getElementById("p-el")
    // let parB = document.getElementById("p2-el")
    // let parC =document.getElementById("p3-el")
    // // let length = 3.28084
    // let volume = 0.264172
    // let mass = 2.20462

    let btnEl =document.getElementById("btn")
    btnEl.addEventListener("click", function(){
        let input = document.getElementById("number").value
        document.getElementById("p-el").textContent = "Metrics: " + input *3.28084 
        document.getElementById("p2-el").textContent = "Liters: " + input * 0.264172
        document.getElementById("p3-el").textContent = "Kilograms: " + input * 2.20462
    })


//  function renderAns(){
    
// //    length()
//        let ans1 = parseInt(input) *  3.28084
//      parA.textContent ="Metrics: " + ans1
//      let ans2 = parseInt(input) * 0.264172
//      parB.textContent = "litres" + ans2
//      let ans3 = parseInt(input) * 2.20462
//      parC.textContent = "kilograms" + ans3
//  }

// function length(){
    
//     let ans1 = parseInt(input) *  3.28084
//     parA.textContent ="Metrics: " + ans1
   
//     console
// }
// function renderIn(){
//     if(input === "meters"){
//        let input1 = parseInt(input.innerHTML) * 3.28084
      
//     }
//     return input1
   
// }
// parA.textContent = input1 
