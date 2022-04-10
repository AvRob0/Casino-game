
//The function initiate the dice roll when the spin button is pushed.
function play() {
    var die1 = 5
    //The 2 variables telling the browser what each dice equals
    var die2 = 2
    //The variable sum is telling the browser how to calculate to get the sum.
    var sum = die1+die2
    //The document write is telling the browser how to write the arguments when the button is pushed
    document.write("Die 1 = " + die1)
    document.write("<br/>")//The document write -br- is telling the browser to make a line break.
    document.write("Die 2 = " + die2)//The document write is telling the browser how to write the arguments when the button is pushed
    document.write("<br/>")//The document write -br- is telling the browser to make a line break.
    document.write("Sum = " + sum)//The document write is telling the browser how to write the arguments when the button is pushed
    document.write("<br/>")//The document write -br- is telling the browser to make a line break.
    if (sum == 7 || sum == 11)//This is telling the browser if the sum equals 7 or 11 you craps out.
    { document.write("CRAPS - you lose")//This document write is telling the browser to write Craps you lose if you roll 7 or 11.
    document.write("<br/>")//The document write -br- is telling the browser to make a line break.
    }
    else if (die1== die2 && die1%2 == 0)
    {//This is tell the browser that if the dice1 or dice2 doubles you win and this statement goes for both the top argument and the bottom document write.
    document.write("DOUBLES - you win")
    document.write("<br/>")//The document write -br- is telling the browser to make a line break.
    }
    
    }
    document.write("Simple Craps")//This document write tell the browser to write simple craps on thee browser.
    document.write("<br/>")//The document write -br- is telling the browser to make a line break.
     play() 
