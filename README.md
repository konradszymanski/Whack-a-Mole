# Whack-a-Mole
Generation.org project - reaction testing. 

Reaction Testing\
Write an HTML/JavaScript 'Whack a Mole'/'Reaction testing'  game\
Have a 'mole' pop out of a (random) hole (on a 10 by 10 grid)\
Measure the time it takes to whack the mole (click on it)\
HINT: t = performance.now();\
You might also want to look at setTimeOut()\
and the onclick attribute/event of your 'mole'\
CSS Position:absolute , left and top  may also be helpful\
Allow 1 second between, 10 turns\
End by displaying the sum and average of the reaction times\
(the time the mole was visible but not clicked)
\
\
\
// HTML & CSS
1. create a square grid layout\
2. name each element of the grid same class='notActive', but different id's (id's has to be numbers) \
3. style default class in CSS - layout and grid
4. style 'mole' class in CSS - targets
// JS 
-take all the id's from html grid and store them in to an array
-give all the grid elements dafault value: false
-use Mathrandom() to pick random grid id 
-set setTimeout() e.g every 1 second to call a random number
-called random number will change className to class='active' of particullar grid square and change boolean to true
-after some time (.5 second) it will change boolean to false and will became default not active class 

HIT SYSTEM
 if a mole element on grid will became 'active', the click event will be true, clickmouse on that element will turn that element again to false, and give one point. 
  if (active element will be clicked) {
      points++;
    randomElement =  false;
  } else (if player will click somewhere else){
      randomElement =  false;
  }
