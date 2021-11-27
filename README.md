# Test
untuk run nya : npx codeceptjs run Test_test.js
bila terdapat error seperti ini saat run:
Error: Cannot find module '@codeceptjs/configure'
Require stack:
- C:\Users\userprofile\Downloads\Test-master\codecept.conf.js
- C:\Users\userprofile\AppData\Local\npm-cache\_npx\9bb2bd9fa07a0a83\node_modules\codeceptjs\lib\codecept.js
- C:\Users\userprofile\AppData\Local\npm-cache\_npx\9bb2bd9fa07a0a83\node_modules\codeceptjs\bin\codecept.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.<anonymous> (C:\Users\Elitebook 840\Downloads\Test-master\codecept.conf.js:1:29)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    
    run:npm audit fix --force
    
    dan bila setelah itu masih ada error seperti ini:
    Cannot find module '@codeceptjs/configure'
Require stack:
- C:\Users\userprofile\Downloads\Test-master\codecept.conf.js
- C:\Users\userprofile\Downloads\Test-master\node_modules\codeceptjs\lib\config.js
- C:\Users\userprofile\Downloads\Test-master\node_modules\codeceptjs\bin\codecept.js

    run lagi:npm audit fix --force
