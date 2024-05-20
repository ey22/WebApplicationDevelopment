//imports the "readline" module which provides an interface for reading data.
const readline = require('node:readline');
//Imports "stdin" and "stdout" from "process" module and assigns them to "input" and "output" variables.
const { stdin: input, stdout: output } = require('node:process');
//This line takes the input and output properties and creates an interface to read the input from the user.
const rl = readline.createInterface({ input, output });
//Creates a function to find the prime factorization.
function primeFactorization(){
//Receives an input from the user.
rl.question('Please enter a number: ', (number) => {
    //Converts input to float data type.
    number = parseFloat(number);
    //Assigns a variable to avoid losing the original number.
    var orgNumber = number;
    //Creates a map.
    var map = new Map();
    //Converts to integer and calculate square root.
    var newNumber = parseInt(Math.sqrt(number));
    //Determines the numbers to be checked for prime with a for loop.
    for(var i=2; i<=newNumber; i++){
        var order = 1;
        //Checks prime numbers.
        if (isPrime(i)){
            //Applies the while loop for the cases where the number is divisible by i.
            while(number%i == 0){
                //Adds values in the map.
                map.set(i,order);
                //Calculates and changes number value.
                number = number/i;
                //Increases the order by one
                order++;
            }
        }   
    }
    //Finds the last prime number.
    if (number != 1) {
        map.set(number,1);
    }
    //Edits the output to make it understandable.
    var string = `${orgNumber} = `;
    //New variable definitions
    var counter = 1;
    //Accesses each key-value pair and performs certain operations.
    map.forEach((value, key) => {
        //signs such as + and ^ are added for a regular and understandable output
        if (counter != 1) {
            string = string + ` + `
        }
        string = string + `${key}^${value}`
        counter++;
    });
    //Prints output.
    console.log(string);
    //Closes the readline interface.
    rl.close();
})
}
//Creates a function that checks for prime numbers.
function isPrime(number){
    //Some cases are checked with if loop.
    if(number < 2){
        return false;
    }else if (number==2 || number == 3){
        return true;
    }else{
        //Takes square root of number.
        number = Math.sqrt(number);
        //Prime number test with for loop
        for(var i=2; i<number; i++){
            if (number%i == 0){
                return false;
            }
            else{
                return true;

            }
    }
}
}

primeFactorization();