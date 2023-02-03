import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

    static targets = [ "name", "output" ]

    connect(){
      console.log("hello from scan qr controller")
    }
  
    greet() {
      let result = this.nameTarget.value
      console.log(result)

     // window.location.assign("http://localhost:3000/produits/");

      const baseUrl = "http://localhost:3000/produits/" // remplacer par variable

      const parameter = encodeURIComponent(result);
      window.location.assign(baseUrl + parameter);


    

    }
    
 
}