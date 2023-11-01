function scuberGreetingForFeet(x){
  let result
  if (x <= 400) {
    result = 'This one is on me!';
    return result
  } else if (400 < x && x < 2000) { 
    result = 'That will be twenty bucks.';
    return result
  }
    else if (x > 2000 && x < 2500) {
      result = 'I will gladly take your thirty bucks.';
      return result
    }
    else if (x > 2500){
      result = 'No can do.';
      return result
    }
}


function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tipGood){
  switch(tipGood){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
        default:
          return 'Bye.'
  } 
}