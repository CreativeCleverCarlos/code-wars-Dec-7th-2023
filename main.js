/**
 A rectangle can be split up into a grid of 1x1 squares, the amount of which being equal to the product of the two dimensions of the rectangle. Depending on the size of the rectangle, that grid of 1x1 squares can also be split up into larger squares, for example a 3x2 rectangle has a total of 8 squares, as there are 6 distinct 1x1 squares, and two possible 2x2 squares. A 4x3 rectangle contains 20 squares.

Your task is to write a function `findSquares` that returns the total number of squares for any given rectangle, the dimensions of which being given as two integers with the first always being equal to or greater than the second.
**/

//P.R.E.P

//Parameter - 2 numbers will be given, no string. 

//return - a number to the console

//example - (3,2), 8);

//Psuedo code

function findSquares(x,y){
    // I know for sure that x is going to have to be multipled by y to get the minimum aount of squares
    return x*y;

    //but what is the formula to get the remaining larger squares 
    //i know that a square has to have equal length and width. in this case that would be the number of smaller squares have to be equal (example (4,3) has 2,2 in 4 places, and 3,3 in 4 places) 
  }

  //ill come back tot he more difficult one later, didn't have time for it today

  /**
   All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
**/

function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
