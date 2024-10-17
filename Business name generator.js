/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/


//Adjective
function adjectives() {
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";
    let ran = Math.floor(Math.random()*3);
    console.log(ran);

    switch (ran) {
        case 0:
            return a;
            
        case 1:
            return b;
            
        case 2:
            return c;
            
    
        default:
            console.log("Sorry no more number or values are exists");
    }
}

//Shop Name
function Shop_name() {
    let a = "Engine";
    let b = "Foods";
    let c = "Garments";
    let ran = Math.floor(Math.random()*3);
    console.log(ran);

    switch (ran) {
        case 0:
            return a;
            
        case 1:
            return b;
            
        case 2:
            return c;
            
    
        default:
            console.log("Sorry no more number or values are exists");
    }
}
//Another Word
function Another_words() {
    let a = "Bros";
    let b = "Limited";
    let c = "Hub";
    let ran = Math.floor(Math.random()*3);
    console.log(ran);

    switch (ran) {
        case 0:
            return a; 
            
        case 1:
            return b;

        case 2:
            return c;
            
    
        default:
            console.log("Sorry no more number or values are exists");
    }
}

//Combination of all funtion 
console.log(`The new business name is : ${adjectives() } ${Shop_name() } ${Another_words()}`);