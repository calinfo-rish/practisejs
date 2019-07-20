var fstName='calinfo'
console.log(fstName);
var age ;
console.log(age);

// Using Prompt Function With O/p at Console.
var fstName =prompt('what is Your First name?');
var lstName =prompt('what is Your last name?');


console.log(fstName + ' ' + lstName);

// typeof Operator tell you the type of the operator 
// O/p at console.
console.log(typeof fstName); 
 
var YearBirth = prompt('what is Your Birth year?');
console.log( Calcage() ); 
// Loops
// If else statement with Boolen Logic
if (fstName === 'rishabh' && lstName=='agg')
console.log('Hello' +  ' ' + fstName + ' ' + lstName);

else{
console.log('Hello Stranger');
}
console.log(fstName + ' ' + lstName + ' your age ' + age ); 

// Ternary Operator
age >=18 ? console.log('Its Beer Time') : console.log ('Have Juice');


// Switch statement
var job =prompt('what is Your job?');
var job ='teacher';
switch (job){
    
    case 'teacher': console.log(fstName +' ' + 'Teaching time');
    break;
    
    case 'driver': console.log(fstName + 'Driving Time');
    break;
    
    default: console.log('no job');
    }
// *********
// JS Functions
function Calcage(){
      age = 2019 - (YearBirth); 
      console.log('Your Age is' + ' ' + age);
console.log('Your Year birth is' + ' ' + YearBirth);
 }

 document.querySelector('#heads').innerHTML =  Dice;


