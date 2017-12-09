

// for(let i = 0; i < 10; i++){
//   if (i%2===0){
//     console.log( createCharacters(i, " ") );
//     console.log( createCharacters(i, "*") );
//   } else {
//     console.log( createCharacters(i, " ") );
//     console.log( createCharacters(i, "-") );
//   } 
// }

// function createCharacters(length, definedChar){
//   let chars = "";
//   for(let i = 1; i <= length; i++){
//     chars += definedChar + definedChar;
//   }
//   return chars;
// }
// function pyramids(char, height, numberOfPyramids){
//   let row = char;
//   let pyramidsByLine = "";
//   for(let j = 0; j < height; j++){
//     for (let i = 0, spaceLength = height; i < numberOfPyramids; i++, spaceLength--) {
//       pyramidsByLine += pyramidByLine(char, spaceLength);
//     }
//     pyramidsByLine = pyramidsByLine + "\n";
//   }
  
//   return pyramidsByLine;
// }

function pyramidByLine(char, spaceLength, charLength){
  let spaces = "";
  let chars = "";
  for(let k = 0; k < spaceLength; k++){
    spaces += " ";
  }
  for(let i = 0; i < charLength; i++){
    chars += char;
  }
  return spaces + chars + chars + spaces;
}

//1 pyramid
console.log(pyramidByLine("*", 3, 1));
console.log(pyramidByLine("*", 2, 2));
console.log(pyramidByLine("*", 1, 3));

function pyramidsByLine(char, spaceLength, charLength, amountOfPyramids){
  let linePyramids = "";
  for (let i = 0; i < amountOfPyramids; i++) {
    linePyramids += pyramidByLine(char, spaceLength, charLength);
  }
  return linePyramids; //of spaces chars chars spaces
}

//multiple pyramids
console.log(pyramidsByLine("*", 3, 1, 3));
console.log(pyramidsByLine("*", 2, 2, 3));
console.log(pyramidsByLine("*", 1, 3, 3));

function popByLine(height, amountOfPyramids, pyramidSpaces, amountOfPops, popSpaces){
  let spaces = "";
  let pyrOfPyrSpaces = "";
  let pyramids = "";
  for (var i = 0; i < pyramidSpaces; i++) {
    spaces += " ";
  }
  for (var i = 0; i < popSpaces; i++) {
    pyrOfPyrSpaces += " ";
  }


  //this for-loop needs to be extracted away
  for (let i = 1, j = height; i <= height; i++, j--) {
    let pop = "";
    for (let k = 0; k < amountOfPops; k++) {
      if(k==0){
        pop += pyrOfPyrSpaces + spaces + pyramidsByLine("*", j, i, amountOfPyramids) + spaces; 
      }
      else{
        pop += spaces + pyramidsByLine("*", j, i, amountOfPyramids) + spaces; 
      }
    }
    console.log(pop);
  }
}

//pyramids of pyramids
popByLine(10, 1, (10+1)*2, 1); //one pyramid
popByLine(10, 2, (10+1), 1); //two pyramids
popByLine(10, 3, 0, 1); //three pyramids


pyramidOfPyramids(3, 3);

//pyramids of pyramids of pyramids
popByLine(10, 1, (10+1)*2, 1, 66); //one pyramid
popByLine(10, 2, (10+1), 1, 66); //two pyramids
popByLine(10, 3, 0, 1, 66); //three pyramids
popByLine(10, 1, (10+1)*2, 2, 33); //one pyramid
popByLine(10, 2, (10+1), 2, 33); //two pyramids
popByLine(10, 3, 0, 2, 33); //three pyramids
popByLine(10, 1, (10+1)*2, 3, 0); //one pyramid
popByLine(10, 2, (10+1), 3, 0); //two pyramids
popByLine(10, 3, 0, 3, 0); //three pyramids

function pyramidOfPyramids(pyramidHeight, popHeight){
  for (let i = 0, j = popHeight; i < popHeight; i++, j--) {
    const pyramidSpaces = (pyramidHeight + 1) * (j-1);
    const amountOfPyramidsForLine = i + 1;
    popByLine(pyramidHeight, amountOfPyramidsForLine, pyramidSpaces, 3);
  }
}

// function pyramid(star, length, row){
//   let result = "";
//   for (let i = 0, j = length; i < length; i++, j--) {
//     let spaces = "";
//    // const spaceLength = Math.floor(j/2);
//     for(let k = 0; k < j; k++){
//       spaces += "  ";
//     } 
//     pyramidCreation = spaces + row + row + spaces;
//     row += star + star;
//     result += "\n" + pyramidCreation;
//   }
//   return result;
// }


// console.log(pyramids("❤", 10, 1));




//   *  
//  *** 
// *****
// -----
// ******
// -------

// ********
// ---------