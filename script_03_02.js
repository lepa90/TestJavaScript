// Kamil Przylepa

function pomnoz(x, y) {
    return x * y;
  }




function przyklad_001(){
    pro = document.querySelector('#produkt').selectedOptions[0].value;
    iloscS = document.getElementById('iloscSztuk').value;
    wynik = pomnoz(iloscS, pro);
    suma = document.getElementById("sumaPln").innerHTML = "Suma: "+ wynik;
    
      console.log("Wynik: ", wynik);
      console.log("ilosc sztuk: ", iloscS)
    
    if (iloscS.var=Number.isInteger) {
        console.log("Wybrano liczbe");
        } else {
        console.log("Nie wybrano liczby");
        }
        if (pro=='niedostepny') {
            console.log("produkt niedotepny");
            } 
        
    
      }
function przyklad_002(){
    
    
    alert('Wybrałeś '+iloscS+'x'+pro+'koszt to '+ suma + 'zł')
    
}
