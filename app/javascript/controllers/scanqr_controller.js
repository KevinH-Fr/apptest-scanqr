import { Controller } from "@hotwired/stimulus"
import QRScanner from '@js-soft/qr-code-scanner'

// Scanner le qr code
window.ScanQr=()=>{
  QRScanner.initiate({
    onResult: (result) => { 
      console.log(result); 

// Extraire l'index du produit
      let result2 = result.split('produits/')[1]; // supprimer avant et produits/
      let result3 = result2.split('?')[0]; // supprimer ? et apres
      console.log(result3); // index produit seulement 

// Envoyer index sur la vue
      document.getElementById("qr-result-input").value = result3;

// Si index existe rediriger vers la page du produit
      if (typeof result3 !== 'undefined') {
        console.log("test id existe")
        const baseUrl = "http://localhost:3000/produits/" // remplacer par variable
        const parameter = encodeURIComponent(result3);
        window.location.assign(baseUrl + parameter);
        console.log(baseUrl + parameter)
      }
    },
    timeout: 10000,
  }); 
}

// Connecté via data-controller="scanqr"
export default class extends Controller {

    static targets = [ "name", "output" ]

    connect(){
      console.log("hello from scan qr controller")
    }
  
   /*  greet() {
      let result = this.nameTarget.value
      console.log(result)

     // window.location.assign("http://localhost:3000/produits/");

      const baseUrl = "http://localhost:3000/produits/" // remplacer par variable

      const parameter = encodeURIComponent(result);
      window.location.assign(baseUrl + parameter);

    } */
}