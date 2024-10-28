/*
Task 2

Given the array with a list of people below:
*/

const users = [
  {
    name: "Petra Morin",
    address: {
      delivery: {
        street: "371-7636 Nulla Road",
        zip: "83-315",
        country: "Germany",
      },
      billing: {
        street: "123-999 Fake Street",
        zip: "12345",
        country: "Germany",
      },
    },
    hobbies: ["drums", "skating", "comics"],
    languages: [
      {
        name: "German",
        level: 5,
      },
      {
        name: "English",
        level: 4,
      },
      {
        name: "Spanish",
        level: 2,
      },
    ],
  },
  {
    name: "Abel Ashley",
    address: {
      delivery: {
        street: "9977 Aliquam Avenue",
        zip: "920134",
        country: "Mexico",
      },
      billing: {
        street: "123 Lorem Square",
        zip: "912098",
        country: "Mexico",
      },
    },
    hobbies: ["reading books", "wood working"],
    languages: [
      {
        name: "Spanish",
        level: 5,
      },
      {
        name: "English",
        level: 5,
      },
      {
        name: "Italian",
        level: 3,
      },
    ],
  },
  {
    name: "Aaron Cardenas",
    address: {
      delivery: {
        street: "987 Ipsum",
        zip: "129-234",
        country: "France",
      },
      billing: {
        street: "123 Etwas Plaza",
        zip: "912098",
        country: "Spain",
      },
    },
    hobbies: ["painting", "singing", "hiking"],
    languages: [
      {
        name: "French",
        level: 5,
      },
      {
        name: "Spanish",
        level: 5,
      },
      {
        name: "German",
        level: 1,
      },
    ],
  },
  {
    name: "Felix Moreno",
    address: {
      delivery: {
        street: "320-7871 Nec, Av.",
        zip: "59156",
        country: "New Zealand",
      },
      billing: {
        street: "921 Nullae Aliquam",
        zip: "912098",
        country: "New Zealand",
      },
    },
    hobbies: ["jogging", "coffee", "bird watching"],
    languages: [
      {
        name: "English",
        level: 5,
      },
      {
        name: "Italian",
        level: 3,
      },
    ],
  },
  {
    name: "Skyler May",
    address: {
      delivery: {
        street: "Ap #854-6462 Consectetuer Ave",
        zip: "00608",
        country: "Singapore",
      },
      billing: {
        street: "Ap #854-6462 Consectetuer Ave",
        zip: "00608",
        country: "Singapore",
      },
    },
    hobbies: ["cycling", "soccer", "bouldering"],
    languages: [
      {
        name: "Malay",
        level: 5,
      },
      {
        name: "English",
        level: 5,
      },
      {
        name: "Mandarin",
        level: 4,
      },
      {
        name: "French",
        level: 2,
      },
    ],
  },
];

/*
Task 2.1

Print the name and hobbies separated by commas from the last 
person on the list

Expected output:
Skyler May
Hobbies: cycling, soccer, bouldering
*/

console.log("\nLast person:");

console.log(`${users[users.length -1].name}\nHobbies: ${users[users.length -1].hobbies.join(', ')}`);



/*
Task 2.2

Print the name and information about the billing address of 
the second person on the list

Expected output:
Abel Ashley

Billing address:
Street: 123 Lorem Square
Zip: 912098
Country: Mexico
*/

console.log("\nSecond person:");
console.log(`${users[1].name}`);
console.log('');
console.log('');


function converteKey(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

for(let key of Object.keys(users[1].address.delivery)){
  console.log(`${converteKey(key)}: ${users[1].address.delivery[key]}`);
}
/*
Task 2.3

Using loops, print all the names of the people on the list. 

For each name, print also an index that starts at 1.

Expected output:
1. Petra Morin
2. Abel Ashley
3. Aaron Cardenas
4. Felix Moreno
5. Skyler May
*/

console.log("\nUsers:");

for(let i = 0; i < users.length; i++){
  console.log(`${i +1}. ${users[i].name}`);
}

/*
Task 2.4

Using loops, print a message for each person with a message 
showing the name, the delivery country and the first hobby in the list.

Expected output:
Petra Morin lives in Germany and their favourite hobby is: drums.

Abel Ashley lives in Mexico and their favourite hobby is: reading books.

Aaron Cardenas lives in France and their favourite hobby is: painting.

Felix Moreno lives in New Zealand and their favourite hobby is: jogging.

Skyler May lives in Singapore and their favourite hobby is: cycling.
*/

for(let user of users){
  console.log(`${user.name} lives in ${user.address.delivery.country} and their favourite hobby is: ${user.hobbies[0]}\n`);
}


/*
Task 2.5

Using loops, print each name and every language they know 
with a level greater than or equal to 4.

Expected output:
Petra Morin speaks fluently:
- German
- English

Abel Ashley speaks fluently:
- Spanish
- English

...
*/

for(let user of users){
  console.log(user.name);
  
  for(let lang of user.languages){
    if(lang.level >= 4){
      console.log(`- ${lang.name}: ${lang.level}`);
     
    }
  }
  console.log('');
}