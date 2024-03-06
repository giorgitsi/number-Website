let numberMimateba= document.querySelector(".number-gazrda")
let numberShemcireba  = document.querySelector(".number-shemcireba")
let numberBox = document.querySelector(".number-box")
let resetBox = document.querySelector(".number-reset")


let num = Number(numberBox.textContent)

resetBox.addEventListener("click", function (){
    num = 0
    numberBox.textContent = num
    numberBox.style.color = "black"
    
})

numberMimateba.addEventListener("click", function (){
    num += 1
    numberBox.textContent = num
    numberBox.style.color = "Green" 

    funcColorCheck()

})


numberShemcireba.addEventListener("click", function (){
    num -= 1
    numberBox.textContent = num

    
    funcColorCheck()
    
})

function funcColorCheck(){
    if (num<0){
        numberBox.style.color = "Red"
    }else if(num===0){
        numberBox.style.color = "rgb(34, 34, 34)"
    }else if(num>0){
        numberBox.style.color = "Green"
    }
}

