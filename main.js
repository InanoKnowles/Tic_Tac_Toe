console.log("test link to html")
// ------------------------------------------------------------------------------------------------------------------------------------------
var allBoxes =  document.querySelectorAll('.box')
    console.log(allBoxes[0])

var click = 1
for (let i = 0; i < allBoxes.length; i++) {  
allBoxes[i].addEventListener('click', function (event) {
    event.preventDefault
    
    if (click % 2 === 0 && allBoxes[i].textContent === " ") {
        allBoxes[i].textContent="O"
        click++
    } else if (allBoxes[i].textContent === " ") {
        allBoxes[i].textContent="X"
        click++
    }
  
    console.log(allBoxes[0].textContent)
    // There are 8 winning conditions:
    if (document.querySelector('#box1').textContent !== " " && document.querySelector('#box1').textContent === document.querySelector('#box2').textContent && document.querySelector('#box3').textContent === document.querySelector('#box1').textContent) {
        console.log(document.querySelector('#box1').textContent + " YOU WON!!!")
        document.querySelector('#box1').style.backgroundColor = "Green"
        document.querySelector('#box2').style.backgroundColor = "Green"
        document.querySelector('#box3').style.backgroundColor = "Green"
       document.querySelector('.playerOne').style.color="green"
       document.querySelector('.playerOne').textContent ="PLAYER ONE WINS!"
       document.querySelector('.playerTwo').style.color="red"
       document.querySelector('.playerTwo').textContent ="PLAYER TWO LOSES HAHA!"
        // Win Condition: 1,2,3 (ABOVE THIS LINE)
        
    } else if (document.querySelector('#box4').textContent != " " && document.querySelector('#box4').textContent === document.querySelector('#box5').textContent && document.querySelector('#box6').textContent === document.querySelector('#box4').textContent) {
        console.log(document.querySelector('#box4').textContent + " YOU WON!!!")
        // Win Condition: 4,5,6 (ABOVE THIS LINE)
    } else if (document.querySelector('#box7').textContent != " " && document.querySelector('#box7').textContent === document.querySelector('#box8').textContent && document.querySelector('#box9').textContent === document.querySelector('#box7').textContent) {
        console.log(document.querySelector('#box7').textContent + " YOU WON!!!")
        // Win Condition: 7,8,9 (ABOVE THIS LINE)
    }  else if (document.querySelector('#box1').textContent != " " && document.querySelector('#box1').textContent === document.querySelector('#box4').textContent && document.querySelector('#box7').textContent === document.querySelector('#box1').textContent) {
        console.log(document.querySelector('#box1').textContent + " YOU WON!!!")
         // Win Condition: 1,4,7 (ABOVE THIS LINE)
    }  else if (document.querySelector('#box2').textContent != " " && document.querySelector('#box2').textContent === document.querySelector('#box5').textContent && document.querySelector('#box8').textContent === document.querySelector('#box2').textContent) {
        console.log(document.querySelector('#box2').textContent + " YOU WON!!!")
        // Win Condition: 2,5,8 (ABOVE THIS LINE)
    } else if (document.querySelector('#box3').textContent != " " && document.querySelector('#box3').textContent === document.querySelector('#box6').textContent && document.querySelector('#box9').textContent === document.querySelector('#box3').textContent) {
        console.log(document.querySelector('#box3').textContent + " YOU WON!!!")
        // Win Condition:3, 6, 9 (ABOVE THIS LINE)
    }  else if (document.querySelector('#box1').textContent != " " && document.querySelector('#box1').textContent === document.querySelector('#box5').textContent && document.querySelector('#box9').textContent === document.querySelector('#box1').textContent) {
        console.log(document.querySelector('#box1').textContent + " YOU WON!!!")
        // Win Condition: 1,5,9(ABOVE THIS LINE)
    } else if (document.querySelector('#box3').textContent != " " && document.querySelector('#box3').textContent === document.querySelector('#box5').textContent && document.querySelector('#box7').textContent === document.querySelector('#box3').textContent) {
        console.log(document.querySelector('#box3').textContent + " YOU WON!!!")
        // Win Condition: 3, 5, 7 (ABOVE THIS LINE)
    } else if (allBoxes[0].textContent !== " "
    && allBoxes[1].textContent !== " "
    && allBoxes[2].textContent !== " "
    && allBoxes[3].textContent !== " "
    && allBoxes[4].textContent !== " "
    && allBoxes[5].textContent !== " "
    && allBoxes[6].textContent !== " "
    && allBoxes[7].textContent !== " "
    && allBoxes[8].textContent !== " ") {
       console.log("This round is a DRAW - Good Game")
    } 
})
}





// Make who wins visually noticable using DOM 
// Make who loses visually noticable using DOM