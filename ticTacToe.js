console.log("test link to html")
//----------------------------------------------------------------------------------------------------------------------------------------------------
var allBoxes =  document.querySelectorAll('.box')
    console.log(allBoxes[0])
// [div.box, div.box, div.box, div.box, div.box, div.box, div.box, div.box, div.box]
var click = 1
for (let i = 0; i < allBoxes.length; i++) {  
allBoxes[i].addEventListener('click', function (event) {
    event.preventDefault
    // 4. Check that each box responds when clicked
    // console.log(allBoxes[i] + "meow")
    // 5. Now we need to make it so that when clicked an X appears
    // allBoxes[i].textContent="X"
    // 6. Now we need to make it so that when clicked an O appears
    // allBoxes[i].textContent="O"
    // ! Issue with both X and O on click only one is accepted and that is O
    // 7. We need to be able to tell which click is X and which click is O - How can we do that? My thoughts:
    // - create 2 variables and assign each variable with an X or an O then we could create a rule that if X clicks then its O's turn to click (if)
    
    console.log(click)
    if (click % 2 === 0){
        allBoxes[i].textContent="O"
        click++
    } else {
        allBoxes[i].textContent="X"
        click++
    }
    // We used modulus 2 because that will give us remainder 0 for every even number and if its an odd number it gives remainder 1
    // There are 8 winning conditions:
    if (document.querySelector('#box1').textContent !== " " && document.querySelector('#box1').textContent === document.querySelector('#box2').textContent && document.querySelector('#box3').textContent === document.querySelector('#box1').textContent) {
        alert(document.querySelector('#box1').textContent + " YOU WON!!!")
        // Win Condition: 1,2,3 (ABOVE THIS LINE)
    } else if (document.querySelector('#box4').textContent != " " && document.querySelector('#box4').textContent === document.querySelector('#box5').textContent && document.querySelector('#box6').textContent === document.querySelector('#box4').textContent) {
        alert(document.querySelector('#box4').textContent + " YOU WON!!!")
        // Win Condition: 4,5,6 (ABOVE THIS LINE)
    } else if (document.querySelector('#box7').textContent != " " && document.querySelector('#box7').textContent === document.querySelector('#box8').textContent && document.querySelector('#box9').textContent === document.querySelector('#box7').textContent) {
        alert(document.querySelector('#box7').textContent + " YOU WON!!!")
        // Win Condition: 7,8,9 (ABOVE THIS LINE)
    }  else if (document.querySelector('#box1').textContent != " " && document.querySelector('#box1').textContent === document.querySelector('#box4').textContent && document.querySelector('#box7').textContent === document.querySelector('#box1').textContent) {
        alert(document.querySelector('#box1').textContent + " YOU WON!!!")
         // Win Condition: 1,4,7 (ABOVE THIS LINE)
    }  else if (document.querySelector('#box2').textContent != " " && document.querySelector('#box2').textContent === document.querySelector('#box5').textContent && document.querySelector('#box8').textContent === document.querySelector('#box2').textContent) {
        alert(document.querySelector('#box2').textContent + " YOU WON!!!")
        // Win Condition: 2,5,8 (ABOVE THIS LINE)
    } else if (document.querySelector('#box3').textContent != " " && document.querySelector('#box3').textContent === document.querySelector('#box6').textContent && document.querySelector('#box9').textContent === document.querySelector('#box3').textContent) {
        alert(document.querySelector('#box3').textContent + " YOU WON!!!")
        // Win Condition:3, 6, 9 (ABOVE THIS LINE)
    }  else if (document.querySelector('#box1').textContent != " " && document.querySelector('#box1').textContent === document.querySelector('#box5').textContent && document.querySelector('#box9').textContent === document.querySelector('#box1').textContent) {
        alert(document.querySelector('#box1').textContent + " YOU WON!!!")
        // Win Condition: 1,5,9(ABOVE THIS LINE)
    } else if (document.querySelector('#box3').textContent != " " && document.querySelector('#box3').textContent === document.querySelector('#box5').textContent && document.querySelector('#box7').textContent === document.querySelector('#box3').textContent) {
        alert(document.querySelector('#box3').textContent + " YOU WON!!!")
        // Win Condition: (ABOVE THIS LINE)
    }
})
}

