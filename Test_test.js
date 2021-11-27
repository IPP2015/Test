Feature('Create Account Cermati');
// Scenario('Create Account Sukses', ({ I }) => {
//     I.amOnPage('https://www.cermati.com/gabung-v2?')
//     I.fillField('email','panduputra.ilham@gmail.com')
//     I.fillField('password','Cermati123');
//     I.fillField('confirmPassword','Cermati123')
//     I.fillField('firstName','Ilham')
//     I.fillField('lastName','Putra')
//     I.fillField('mobilePhone','085777641438')
//     I.fillField('residenceCity','KOTA JAKARTA SELATAN')
//     I.click('.btn')
//     I.wait(2)
// });

// Scenario('Check require Wajib Isi', ({ I }) => {
//     I.amOnPage('https://www.cermati.com/gabung-v2?')
//     var b = I.click('.btn')
//     var a=0
//     var c = I.see('Input ini wajib diisi.')
//     if(b=true){
//         a++
//         c
//         console.log(a);

//     }
// });
//
// Scenario('Check require Email', ({ I }) => {
//     I.amOnPage('https://www.cermati.com/gabung-v2?')
//     I.fillField('email','panduputra. ilham@gmail.com')
//     I.click('.text-header')
//     I.see('Format email tidak valid.')
//     I.fillField('email','panduputra.ilhamgmail.com')
//     I.fillField('email','panduputra.ilhamgmail.co.id')
//     I.click('.text-header')
//     I.see('Format email tidak valid.')
//     I.click('.text-header')
//     I.see('Format email tidak valid.')
//     I.fillField('email','panduputra.ilham@gmail.')
//     I.click('.text-header')
//     I.see('Format email tidak valid.')
//     I.fillField('email','panduputra.ilham@ gmail.co.id')
//     I.click('.text-header')
//     I.see('Format email tidak valid.')
//     I.fillField('email','panduputra.ilham@gmail.co.id')
//     I.click('.text-header')
//     I.dontSee('Format email tidak valid.')

// });
// Scenario('Check require password', ({ I }) => {
//     var a = 'CERmati1'
//     var req2='Kata Sandi tidak sama dengan Konfirmasi Kata Sandi'
//     var req1='Kata Sandi harus memiliki panjang antara 8 - 50 karakter dan mengandung minimal 1 huruf besar, 1 huruf kecil, dan 1 angka.'
//     I.amOnPage('https://www.cermati.com/gabung-v2?')
//     I.fillField('email','panduputra.ilham@gmail.co.id')
//     I.click('.text-header')
//     I.dontSee('Format email tidak valid.')
//     I.fillField('password','CERMATI')
//     I.click('.text-header')
//     I.see(req1)
//     I.fillField('password','cermati')
//     I.click('.text-header')
//     I.see(req1)
//     I.fillField('password','Cermati')
//     I.click('.text-header')
//     I.see(req1)
//     I.fillField('password','CERmai1')
//     I.click('.text-header')
//     I.see(req1)
//     I.fillField('password',a)
//     I.click('.text-header')
//     var b = I.dontSee(req1)
//     b
//     if(b = true){
//     I.fillField('confirmPassword',a)
//     I.click('.text-header')
//     I.dontSee(req2)
//     console.log('true');
//     }else{
//         I.fillField('confirmPassword','CERmai1')
//     I.click('.text-header')
//     I.see(req2)
//     console.log('false');
//     }
// });


// Scenario('Check require Nama', ({ I }) => {
//     var req1='Input ini wajib diisi.'
//     let req2="Nama hanya dapat diisi dengan karakter alfabet, titik (.), petik ('), koma (,), strip (-) dan spasi."
//     I.amOnPage('https://www.cermati.com/gabung-v2?')
//     I.fillField('email','panduputra.ilham@gmail.co.id')
//     I.fillField('password','cehDiide2')
//     I.fillField('confirmPassword','cehDiide2')
//     I.click('.btn')
//     I.click('.text-header')
//     I.see(req1)
//     I.fillField('firstName','CERMATI1')
//     I.click('.text-header')
//     I.see(req2)
//     I.fillField('firstName',"C.', -")
//     I.click('.text-header')
//     I.fillField('lastName','CERMATI1')
//     I.click('.text-header')
//     I.see(req2)
//     I.fillField('lastName',"C.', -")
//     I.click('.text-header')
//     I.dontSee(req1)
//     I.dontSee(req2)
// });
Scenario('Check No Telpon', ({ I }) => {
    I.amOnPage('https://www.cermati.com/gabung-v2?')
    I.fillField('email', 'panduputra.ilham@gmail.co.id')
    I.fillField('password', 'cehDiide2')
    I.fillField('confirmPassword', 'cehDiide2')
    I.fillField('firstName', "C.', -")
    I.fillField('lastName', "C.', -")
    I.click('.btn')
    I.see('Input ini wajib diisi.')
    I.fillField('mobilePhone', '080576576464')
    I.click('.text-header')
    I.see('Nomor telepon tidak valid.')
    I.fillField('mobilePhone', '080576579')
    I.click('.text-header')
    I.see('Nomor telepon tidak valid.')
    I.fillField('mobilePhone', '0815576579')
    I.click('.text-header')
    I.dontSee('Nomor telepon tidak valid.')
    I.fillField('residenceCity', 'jalan')
    I.click('.text-header')
    I.see('Kabupaten/Kota tidak tersedia di dalam pilihan yang ada.')
    I.clearField('residenceCity','jalan')
    I.click('.text-header')
    I.fillField('residenceCity', 'KOTA JAKARTA UTARA')
    I.click('.text-header')
    I.dontSee('Kabupaten/Kota tidak tersedia di dalam pilihan yang ada.')
    
    I.checkOption('Saya menyetujui');
    I.click('.btn')
    I.see('Maaf, akun Anda sudah terdaftar.')
})