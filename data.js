const nama = "Riki Septian";
let usia = 0; 

function generatedBiodata() {
    let silsilah; 

    if (usia > 11 && usia < 18 ) {
        silsilah = "silsilah muda";
    } 
    else if (usia > 18 && usia < 25) {
        silsilah = "silsilah tua";
    }
    else if (usia > 25) {   
        silsilah = "Anda melebihi usia 25";
    }   
    else if (usia < 8 && usia > 1) {
        silsilah = "anda masih balita";
    }
    else {
        silsilah = "Anda masih piyik";
    }

    return console.log('silsilah saya adalah', silsilah);
}

console.log(nama);
console.log(usia);

generatedBiodata();