
const toyGunToFind = 4

const toyGuns = [
  {
    id: 1,
    name:"Blaster",
    type: "water gun",
    maker: "Hasbro",
    weight: 2,
    color: "green",
    recommendedAge: 3,
    dangerous: false 
  },
  {
    id: 2,
    name: "SemiAuto",
    type: "nerf gun",
    maker : "Nerf",
    weight: 2.5,
    color: "yellow orange",
    recommendedAge: 4,
    dangerous: false
  },
  {
    id: 3,
    name: "Ouch",
    type: "bebe gun",
    maker: "Bandai Namco",
    weight: 3,
    color: "black",
    recommendedAge: 10,
    dagerous: true
  }
]

// console.log(toyGuns);

// for (const toyGun of toyGuns) {
//   console.log(toyGun)
// }

// for (const toyGun of toyGuns) {
//      console.log(toyGun.recommendedAge)
// }

// for (const toyGun of toyGuns) {
//   console.log(`The recommended age for ${toyGun.name} is ${toyGun.recommendedAge}.`)
// }

// Define a new toy
const popGun = {
    id: 4,
    name: "Pop",
    type: "pop gun",
    maker: "Bandai Namco",
    weight: 0.75,
    color: "red",
    recommendedAge: 5,
    dangerous: false
}

toyGuns.push(popGun)

// for (const toyGun of toyGuns) {
//   console.log(`The recommended age for ${toyGun.name} is ${toyGun.recommendedAge}.`)
// }

const dartGun = {
  id: 5,
  name: "Darty",
  type: "Dart gun",
  maker: "Maaco",
  weight: 5.25,
  color: "yellow",
  recommendedAge: 15,
  dangerous: true
}

const laserGun = {
  id: 6,
  name: "Beam",
  type: "Laser gun",
  maker: "Hasbro",
  weight: 7.8,
  color: "pink",
  recommendedAge: 12,
  dangerous: false
}

toyGuns.push(dartGun, laserGun)

// for (const toyGun of toyGuns) {
//   console.log(`The recommended age for ${toyGun.name} is ${toyGun.recommendedAge}.`)
// }

// step through the array 
for (toyGun of toyGuns) {
//   // add 1.25 to the weight of each toy
  toyGun.weight = toyGun.weight + 1.25

//   console.log(`The maker ${toyGun.maker} has a line of ${toyGun.type} named ${toyGun.name}. ${toyGun.name} has a weight of ${toyGun.weight}grams and is ${toyGun.color}. Recommended for ages older than ${toyGun.recommendedAge}.`)
// }

// for (const toyGun of toyGuns) {
//   // increase age recommendation by 2 years of age
//   toyGun.recommendedAge = toyGun.recommendedAge + 2

//   console.log(`The maker ${toyGun.maker} has a line of ${toyGun.type} named ${toyGun.name}. ${toyGun.name} has a weight of ${toyGun.weight}grams and is ${toyGun.color}. Recommended for ages older than ${toyGun.recommendedAge}.`)
}

for (const toyGun of toyGuns) {
  // only one toyGun will cause the condition below to evaluate to true
  if (toyGun.id === toyGunToFind) {
    
  // increase age recommendation by 2 years of age
    toyGun.recommendedAge = toyGun.recommendedAge + 2

    console.log(`The maker ${toyGun.maker} has a line of ${toyGun.type} named ${toyGun.name}. ${toyGun.name} has a weight of ${toyGun.weight}grams and is ${toyGun.color}. Recommended for ages older than ${toyGun.recommendedAge}.`)
  }
}

const air = {
  name: "Air Head",
  type: "Air gun",
  maker: "Gunny",
  weight: 19.8,
  color: "purple",
  recommendedAge: 21,
  dangerous: true
}

// function to add new items to array with incremental ID
const addToyGunToInventory = (toyGunObject) => {
  /*
        Step 1: Get maximum id current in array
    */
    // Get index of last item in array
  const lastIndex = toyGuns.length -1

  // Get the last object in the array
  const currentToyGun = toyGuns[lastIndex]

  // Get id property value of last toy
  const maxID = currentToyGun.id

 /*
        Step 2: Increase the current max id by 1
    */
  const idForNewToyGun = maxID + 1

   /*
        Step 3: Add the id property to the phone object
    */
  toyGunObject.id = idForNewToyGun

  /*
        Step 4: Add the phone object to the array
    */
  toyGuns.push(toyGunObject)
}

/*
    Now that the function is defined, you can invoke it
    and put a value in the parenthesis (a.k.a. the argument).
    The object will be stored in the `phoneObject`
    parameter for use in the function.
*/

addToyGunToInventory(air)

// display all the toyGuns

for (const toyGun of toyGuns) {
  console.log(`The maker ${toyGun.maker} has a line of ${toyGun.type} named ${toyGun.name}. ${toyGun.name} has a weight of ${toyGun.weight}grams and is ${toyGun.color}. Recommended for ages older than ${toyGun.recommendedAge}.`)
}

console.log(toyGuns)