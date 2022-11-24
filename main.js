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

    function roundResult (win1, win2, win3) {
        console.log(document.querySelector(win1).textContent + " YOU WON!!!")
        document.querySelector(win1).style.backgroundColor = "green"
        document.querySelector(win2).style.backgroundColor = "green"
        document.querySelector(win3).style.backgroundColor = "green"
        document.querySelector('.playerOne').style.color="green"
        document.querySelector('.playerOne').textContent ="PLAYER ONE WINS!"
        document.querySelector('.playerTwo').style.color="red"
        document.querySelector('.playerTwo').textContent ="PLAYER TWO LOSES HAHA!"
    }

    console.log(allBoxes[0].textContent)
    // Below is the 8 WIN conditions:
    if (document.querySelector('#box1').textContent !== " " && document.querySelector('#box1').textContent === document.querySelector('#box2').textContent && document.querySelector('#box3').textContent === document.querySelector('#box1').textContent) {
       roundResult('#box1', '#box2', '#box3')
        // Win Condition: 1,2,3 (ABOVE THIS LINE)

    } else if (document.querySelector('#box4').textContent != " " && document.querySelector('#box4').textContent === document.querySelector('#box5').textContent && document.querySelector('#box6').textContent === document.querySelector('#box4').textContent) {
        roundResult('#box4', '#box5', '#box6')
        // Win Condition: 4,5,6 (ABOVE THIS LINE)

    } else if (document.querySelector('#box7').textContent != " " && document.querySelector('#box7').textContent === document.querySelector('#box8').textContent && document.querySelector('#box9').textContent === document.querySelector('#box7').textContent) {
        roundResult('#box7', '#box8', '#box9')
        // Win Condition: 7,8,9 (ABOVE THIS LINE)

    }  else if (document.querySelector('#box1').textContent != " " && document.querySelector('#box1').textContent === document.querySelector('#box4').textContent && document.querySelector('#box7').textContent === document.querySelector('#box1').textContent) {
        roundResult('#box1', '#box4', '#box7')
         // Win Condition: 1,4,7 (ABOVE THIS LINE)

    }  else if (document.querySelector('#box2').textContent != " " && document.querySelector('#box2').textContent === document.querySelector('#box5').textContent && document.querySelector('#box8').textContent === document.querySelector('#box2').textContent) {
        roundResult('#box2', '#box5', '#box8')
        // Win Condition: 2,5,8 (ABOVE THIS LINE)

    } else if (document.querySelector('#box3').textContent != " " && document.querySelector('#box3').textContent === document.querySelector('#box6').textContent && document.querySelector('#box9').textContent === document.querySelector('#box3').textContent) {
        roundResult('#box3', '#box6', '#box9')
        // Win Condition:3, 6, 9 (ABOVE THIS LINE)

    }  else if (document.querySelector('#box1').textContent != " " && document.querySelector('#box1').textContent === document.querySelector('#box5').textContent && document.querySelector('#box9').textContent === document.querySelector('#box1').textContent) {
        roundResult('#box1', '#box5', '#box9')
        // Win Condition: 1,5,9(ABOVE THIS LINE)

    } else if (document.querySelector('#box3').textContent != " " && document.querySelector('#box3').textContent === document.querySelector('#box5').textContent && document.querySelector('#box7').textContent === document.querySelector('#box3').textContent) {
        roundResult('#box3', '#box5', '#box7')
        // Win Condition: 3, 5, 7 (ABOVE THIS LINE)
        //BELOW "else if" is the DRAW Condition:
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
       document.querySelector('.drawPlayers').style.color="red"
       document.querySelector('.drawPlayers').textContent="THAT WAS A DRAW, BOTH PLAYERS SUCK!"
    } 
})
}





