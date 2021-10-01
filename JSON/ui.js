

class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Guaruja";
  }


  populateUI(data) {
    //de-structure vars
    var celsius= 273.15;
var kelvin_Max = data.main.temp_max;
var kelvin_Min = data.main.temp_min;
var tempe = data.main.temp;
var tempe = Math.round(tempe - celsius);
var TempMax =Math.round(kelvin_Max - celsius);
var TempMin =Math.round(kelvin_Min - celsius);
var desc = data.weather[0].description;
var casa = document.getElementById("casa");

        console.log(desc);
        
        switch (desc) {
          case 'broken clouds':
            desc="Nublado";
            console.log('Oranges are $0.59 a pound.');
            casa.src="../imagens/nublado.png";
          
            break;
         
           case 'clear sky':
           console.log('Oranges.');
           desc="Ceu Limpo";
           casa.src="../imagens/sol1.png";
           break;

           case'few clouds':
           console.log('Nuvens.');
           desc="Poucas Nuvens";
           casa.src="../imagens/sol.jpg";
           break;

           case'scattered clouds':
           console.log('Nuvens dissipadas.');
           desc="nuvens dispersas";
           casa.src="../imagens/nuvens-dispensas.png";
           break;

           case'overcast clouds':
           console.log('Nuvens.');
           desc="Céu Nublado";
           casa.src="../imagens/nublado.png";

           break;

           case'haze':
           console.log('Neblina.');
           desc="Neblina";
           casa.src="../imagens/4131461.png";
           break;

           case'light rain':
           console.log('light rain');
           desc="chuviscando";
           casa.src="../imagens/chuviscando.png";
           break;

           case'thunderstorm with rain':
           console.log('thanos chegou');
           desc='chuva com raios';
           casa.src="../imagens/chuva_raios.png";
           break;



           

          default:
            console.log(`Sorry, we are out of .`);
        } 



    //add them to inner HTML
    

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <p style="font-size:2em;">Temperatura: ${tempe}ºC</p>
                <h6 class="card-subtitle mb-2 text-muted">Maxima de:<i style="color:red";> ${TempMax}ºC</i> Min:  <i style="color:blue";> ${TempMin}ºC</i></h6>
                <p class="card-text ">Condição do tempo: ${desc}</p>
                 
                
                
            </div>
        </div>
        
        
        `;
        if(data.cod == "404"){
          this.uiContainer.innerHTML = `erro`;
          
        }
            

         
        
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
