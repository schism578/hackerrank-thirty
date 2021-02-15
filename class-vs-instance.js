function person(initialAge){
    // Add some more code to run some checks on initialAge
    let age = initialAge;
    if(initialAge < 0) {
        initialAge = 0;
        console.log('Age is not valid, setting age to 0.');
    }
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
   if(initialAge < 13) {
       console.log('You are young.')
   } else if(initialAge >= 13 && initialAge < 18) {
       console.log('You are a teenager.')
   } else {
       console.log('You are old.')
   }

  };
   this.yearPasses=function(){
          // Increment the age of the person in here
          initialAge = initialAge + 1;
   };
}

console.log(person(42));