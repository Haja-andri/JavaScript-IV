/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


// create the GameObject constructor object
class GameObject {
    constructor (game) {
        this.createdAt = game.createdAt;
        this.name = game.name;
        this.dimensions = game.dimensions;    
    }
  // Prototyping methode destroy for GameObject
  destroy(){
        return `${this.name} was removed from the game.`;
    }
  };


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// create the constructor object
class CharacterStats extends GameObject{
    constructor(stats){
        super(stats); // Inherit all properties fron GameObject
        this.healthPoints = stats.healthPoints; // specific property fot CharactersStats
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
  };
  

//   const test = new CharacterStats({createdAt: 'May 2019', name: 'Haja', dimensions: 'big', healthPoints:'1234'});
//   console.log(test.takeDamage());