console.log("test link to html")
// ----------------------------------------------------------------------------------------------------------------------------------------------------
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

    // if (filled) {
    //     no touchies
    // } 
    // console.log(allBoxes[i].textContent)
    // console.log(click)
    if (click % 2 === 0 && allBoxes[i].textContent === " ") {
        allBoxes[i].textContent="O"
        click++
    } else if (allBoxes[i].textContent === " ") {
        allBoxes[i].textContent="X"
        click++
    }

    // Step 1 -  what coding structure? if statement
    // Step 2 -  what condition - all the divs called box need to have a value
    // Step 3 do what - if all filled declare this round a draw so we bumped into a bug in the draw condition when I get 3 'X's to line up it will say draw and x wins

    // console.log(allBoxes[0].textContent)
    // console.log(allBoxes[1].textContent)
    // console.log(allBoxes[2].textContent)
    // console.log(allBoxes[3].textContent)
    // console.log(allBoxes[4].textContent)
    // console.log(allBoxes[5].textContent)
    // console.log(allBoxes[6].textContent)
    // console.log(allBoxes[7].textContent)
    // console.log(allBoxes[8].textContent)

  

    // win condition first - when I put my draw condition below the win condition it doesnt work anymore -_-
    // then draw condition
    // remove alerts and find a more suitable way to do it 

    // if (document.querySelectorAll('.box').textContent !== " ") {
     
    //     console.log("This round was a draw - Good Game!")
    // }
    console.log(allBoxes[0].textContent)
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
       alert("This round is a DRAW - Good Game")
    } 
})
}





