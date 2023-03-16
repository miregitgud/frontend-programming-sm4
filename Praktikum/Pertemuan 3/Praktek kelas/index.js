// Destructing object based on label/key
const req = {
    body: {
        name: "aufa",
        age: 20,
        major: "Informatics",
        tinggi: 200,
    },
};

const { name, age, major, tinggi = 170} = req.body;

// Rest parameters

function sum(...numbers) {
    let nilaiHasil = 0; // 6;
    for (let i = 0; i < numbers.length; i++) {
        nilaiHasil = nilaiHasil + numbers[i];
    };
    
    console.log(nilaiHasil);
}

sum(1, 2, 3, 4, 5);

// spread syntax : ...
const family = ["Michael", "Hannah"];
const newFamily = [...family, "Jonas", "Martha"];

// object: spread
const user = {
     name: "Aufa",
     age: 20,
};

const newUser = {
    ...user,
    major: "Informatics"
};

console.log(newUser);

// method forEach: untuk looping array

const names = ["Michael", "Hannah", "Jonas"];

names.forEach(function (nama) {
    console.log(nama);
});

// method map: untuk format data, tambahkan mr/mrs

const formattedName = names.map(function (nama) {
    return `Mr/Mrs ${nama}`;
});

console.log(formattedName);


// promise + then

function download() {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve("Download");
        }, 3000);
    });
}

function verify() {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve("Verify");
        }, 2000);
    });
}

function show() {
    console.log("Complete")
}

function main() {
    download().then(function (result) {
        console.log(result);
        return verify();
    }).then(function (result) {
        console.log(result);
        show();
    });
}

main();

