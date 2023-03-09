const nilai = 50;

if (nilai > 90) {
    console.log("Nilai anda A");
}
else if (nilai > 70) {
    console.log("Nilai anda B")
}
else if (nilai > 50) {
    console.log("Nilai anda C");
}
else if (nilai >= 0) {
    console.log("Nilai anda F");
}

const age = 30;
age > 21 ? console.log("Dewasa") : 
age > 15 ? console.log("Remaja") : 
age >= 1 ? console.log("Anak-anak") : 
console.log ("Data tidak sesuai ketentuan");

for (let i = 1;i <= 10; i++){
    console.log(i)
};

let i = 1;
while (i <= 10) {
    console.log(`Looping to ${i}`);
    i++;
}

function getUmur(birthYear) {
    const year = 2023;
    const age = `Your age is ${2023 - birthYear}`;

    return age;
}

console.log(getUmur(1970));

const getUmur2 = (birthYear = 2023) => {
   return `Your age is ${2023 - birthYear}`;
}

console.log(getUmur2());

const animals = ["Ikan","Kucing","Anjing"];
for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
};

const animals2 = ["Ikan","Kucing","Anjing"];
for (const animal of animals2){
    console.log(`Hewan: ${animal}`);
};

const user1 = {
    name : "ayas",
    age : 20,
    major : "Technology Informatics"
}

for (const key in user1) {
    console.log(user1[key])
}

for (const key in user1) {
    console.log(`${key}: ${user1[key]}`);
}