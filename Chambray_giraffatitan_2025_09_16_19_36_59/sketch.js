class Animal {
  // special function that takes incoming parameters
  constructor(breed = "human", name = "nobody", language = "silence") {
    // personal properties
    this.breed = breed;
    this.name = name;
    this.language = language;
  }

  // personal function
  talk() {
    print(this.language);
  }

  expressYourself() {
    print("Hello, I'm " + this.breed + ", I say " + this.language);
  
    // print(`Hello, I'm ${this.breed}, I say ${this.language}`);
  }
}

function setup() {
  createCanvas(400, 400); 
  background(200);

  // create Black Cat
  let blackCat = new Animal("cat", "Blacky", "mewww");

  // let them talk
  blackCat.talk();
  blackCat.expressYourself();
}
