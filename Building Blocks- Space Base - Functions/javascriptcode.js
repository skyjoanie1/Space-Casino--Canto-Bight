//Skylar Baumgartner
//Enhance the cose to make it better
function displayWelcome () {
    //This write the welcome message to the page! 
    document.write("<h2> Welcome to Canto Bight! Best Casino in the whole galaxy!")
}
function displayInstructions () {
    //This displays the instructions of the game on the page.
    document.write("<br/><h1>Instructions...</h1>")
    document.write("<p> Refresh the page for the dice to re-roll! If you get a 7 or 11, you LOSE. If you get Doubles, You WIN. If you Tie, you have to Roll Again!</p>")
}
//This is the main function that runs the game!
//This function is what "rolls" the dice and displays the results!
function play () {
    //This rolls the first die and uses a random number
    //generator to get a number between 1 and 6
    var Die1 = Math.ceil(Math.random() * 6);
    //This rolls the second die and uses a random number
    //generator to get a number between 1 and 6
    var Die2 = Math.ceil(Math.random() * 6);
    //This write the rsults to the page
    //This adds the two dice together for your winning or losing total.
    var sum = Die1 + Die2
    document.write("Die1 = " + Die1)
    document.write("<br/>")
    document.write("Die2 = " + Die2)
    document.write("<br/>")
    document.write("sum = " + sum)
    document.write("<br/>")
    //This checks to see if the user won, lost, or tied!
    //Here the user lost :( very sad
    document.write("<br></br>")
    if (sum == 7 || sum == 11) {
        document.write(" You Lose! Give me your money! ")
        document.write("<br/>")
    }
    //Here the user won! Very fun :)
    else if (Die1 == Die2 && Die1 % 2 == 0) {
        document.write("DOUBLES!!! Awe Shoot! You won!")
        document.write("<br/>")
    }
    //Here, the User tied- they didnt win nor lose. 
    else {
        document.write("<h2> Roll Again to win something! My pockets need more of your money!</h2>")
        document.write("<br/>")
    }
    
}