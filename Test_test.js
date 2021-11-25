//const { image } = require("faker");

Feature('Create Account Cermati');

// Scenario('test something', ({ I }) => {
//     I.amOnPage('https://google.com')
 
//     I.seeElement('.lnXdpd');
  
// });
// Scenario('Create Account Sukses', ({ I }) => {
//     I.amOnPage('https://www.cermati.com/gabung-v2?')
//     I.fillField('email','panduputra.ilham@gmail.com')
//     I.fillField('password','Cermati123');
//     I.fillField('confirmPassword','Cermati123')
//     I.fillField('firstName','Ilham')
//     I.fillField('lastName','Putra')
//     I.fillField('mobilePhone','085777641438')
//     I.fillField('residenceCity','Jakarta Selatan')
//     I.click('.btn')
//     I.wait(2)
// });

// Scenario('Check require Wajib Isi', ({ I }) => {
//     I.amOnPage('https://www.cermati.com/gabung-v2?')
//     I.click('.btn')
//     I.see('Input ini wajib diisi.')
//     I.wait(20)
  
// });
//test
Scenario('Check require Email', ({ I }) => {
    I.amOnPage('https://www.cermati.com/gabung-v2?')
    I.fillField('email','panduputra. ilham@gmail.com')
    I.click('.text-header')
    I.see('Format email tidak valid.')
    I.fillField('email','panduputra.ilhamgmail.com')
    I.fillField('email','panduputra.ilhamgmail.co.id')
    I.click('.text-header')
    I.see('Format email tidak valid.')
    I.click('.text-header')
    I.see('Format email tidak valid.')
    I.fillField('email','panduputra.ilham@gmail.')
    I.click('.text-header')
    I.see('Format email tidak valid.')
    I.fillField('email','panduputra.ilham@ gmail.co.id')
    I.click('.text-header')
    I.see('Format email tidak valid.')
    I.fillField('email','panduputra.ilham@gmail.co.id')
    I.click('.text-header')
    I.dontSee('Format email tidak valid.')
  
});
Scenario('Check require password', ({ I }) => {
    I.amOnPage('https://www.cermati.com/gabung-v2?')
  let a = I.fillField('password','CERMATI')
    I.click('.text-header')
    I.see('Format email tidak valid.')
    
});
Scenario('Check require password 2', ({ I }) => {
    I.amOnPage('https://www.cermati.com/gabung-v2?')
  let a = I.fillField('password','CERMATI')
    I.click('.text-header')
    I.see('Format email tidak valid.')
    
});
Scenario('Check require Nama', ({ I }) => {
    //Nama hanya dapat diisi dengan karakter alfabet, titik (.), petik ('), koma (,), strip (-) dan spasi.
    I.amOnPage('https://www.cermati.com/gabung-v2?')
  let a = I.fillField('password','CERMATI')
    I.click('.text-header')
    I.see('Format email tidak valid.')
    //Kabupaten/Kota tidak tersedia di dalam pilihan yang ada.
//nomor hanya dapat diisi angka dan panjang min 10
});
// Q1.
// A.create Gist
// 1.click +
// 2.fillfield Gist description (indodana)
// 3.fillField extension (.js,)
// 4.filltexbox 
// 5.click arrow bottom choose public
// 6.click button create
// B.Edit Existing gist
// 1.click photo pojok kanan
// 2.pilih your gist
// 3.pilih gist yang ingin diubah dan click
// 4.click button edit
// 5.lalu edit
// 6.bila selesai click button update public gist
// C.delete Existing gist
// 1.click photo pojol kanan
// 2.pilih your gist
// 3.click gist yang dihapus
// 4.lalu click button delete
// 5. bila terdapat prompt'Are you positive you want to delete this Gist?' click yes
// Q2.(input leaving change after calculate 1d 5h 30m not 24/1d(use input field hours is 24/1d and checkbox am/pm, 
//     calculate wrong valet parking 1d 4h 0m=36.00(30.00))
//     valet parking 
//     2 d 5 h 0 m = 54.00//bugs
//     short term 
//     0 d 1 h 30 m= 3.00
//     1 d 0 h 30 m = 25.00
//     long-term g
//     0 d 1 h 0 m = 2.00
//     1 d 0 h 0 m = 12.00
//     7 d 0 h 0 m= 72.00
//     long-term s
//     7 d 0 h 0 m = 60.00
//     economy 
//     7 d 0 h 0 m = 54.00
//     design pada UI terdapat input jam dan boolan am / pm tpi pada input di isi 24 jam bukan 12 jam
    
//     Q3.
//     1.25
