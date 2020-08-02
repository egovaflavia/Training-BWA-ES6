// Pada ES5 kita menggunakan var sbg deklarasi variabel
// Diamana var dapat di ganti isi variabel ny

// Sedangkan di ES6 kita menggunakan const / let bisa di ubah tp td bsa di ubah di luar func
// Diamana tidak dapat di rubah nilai nya

const skillsHolder = document.getElementById('data');

//ES5
// const user_logged = 'Egova';
// user_place.innerHTML = "Hi, " + user_logged + " Apa Kabar";

//ES6
// user_logged = 'Egova';
// user_place.innerHTML = `Hi, ${user_logged} Apa Kabar?`

// function addCart(name, category) {
//     return {
//         category
//     }
//         name,
// }
// var getProduct = addCart('BMW', 'Mobil')
// // cart_items.innerHTML(getProduct.name)
// cart_items.innerHTML = `Name : ${getProduct.name} <br> Category : ${getProduct.category}`

// Perulangan Pada ES6
const yourSkills = ['Makan', 'Tidur', 'Nethink'];

// yourSkills.push('Eeq');

// let parent = '<ul>';
// yourSkills.forEach((skill) => {
//     parent += `<li> ${skill}</li>`;
//     console.log(`${skill}`);
// })
// parent += '</ul>';

// skillsHolder.innerHTML = parent

// Perulangna menggunakan map (lebih cepat)

// const printSkills = yourSkills.map(skill => {
//     return skill;
// })

// skillsHolder.innerHTML = printSkills

//// Menggunakan fungsi filter

// const printFilter = yourSkills.filter(skill => {
//     return skill !== 'Nethink'
// });

// skillsHolder.innerHTML = printFilter;

// // Classes
class Siswa {
    constructor(username, nama, password) {
        this.username = username;
        this.nama = nama;
        this.password = password;
    }
    gabung() {
        console.log(`${this.username} Telah Bergabung dengan Nama ${this.nama} dan Password ${this.password}`);
    }
}

// let tambahSiswa = new Siswa('egovaflavia', 'Egova', 'asdasd12');
// tambahSiswa.gabung();

// Inheritance / Kelas turunan

class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    addLangganan() {
        console.log(`Hi ${this.username} Terimakasih sudah berlangganan paket ${this.paket}`);
    }
}

let tambah = new Langganan();
tambah.addLangganan('Egova Riva Gustino', 'Full Service');