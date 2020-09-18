// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault()
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let alertNotifications = 0
      //Individual alerts for each field type commented out in place of alert from assignment screenshot
      if (pilotNameInput.value === "" || copilotInput.value === ""||fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         alertNotifications += 1
      }
      if(isNaN(pilotNameInput.value)=== false){
         //alert("Pilot Name should be a string value")
         alertNotifications += 1
      }
      if (isNaN(copilotInput.value)=== false){
         //alert("Co-Pilot Name should be a string value")
         alertNotifications += 1
         
      }
      if (isNaN(fuelLevelInput.value)=== true){
         //alert("Fuel level should be a number")
         alertNotifications += 1
      }
      if (isNaN(cargoMassInput.value)=== true){
         //alert("Cargo mass should be a number")
         alertNotifications += 1
      }
      //console.log(alertNotifications)
      if(alertNotifications>0){
         alert(`Make sure to enter valid information for each field`)
      // stop the form submission
      //console.log(alertNotifications);
      //alert(`We are preventing submission`)
      //event.preventDefault()
      }
      //this alert was used to ensure if blocks were executing
      //alert("we got here to check values")
      console.log(Number(fuelLevelInput.value));
      if (Number(fuelLevelInput.value)<10000){
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
         document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
         }
      if (Number(cargoMassInput.value)>10000){
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
         document.getElementById("cargoStatus").innerHTML = `Cargo mass is too high for launch`;
         }

      if (Number(fuelLevelInput.value)>10000){
         document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
         }
      if (Number(cargoMassInput.value)<10000){
         document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
         }

      if (typeof(String(pilotNameInput.value) === 'string')){
         document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value}`;
      }
      if (typeof(String(pilotNameInput.value)) === 'string'){
         document.getElementById("copilotStatus").innerHTML = `${copilotInput.value}`;
      }
      if (Number(fuelLevelInput.value)>10000&&Number(cargoMassInput.value)<10000){
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
         document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
         document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
      }
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function(json) {
            // for (i =0;i<json.length;i++){
            const div = document.getElementById("missionTarget");
            // console.log(json[4].image)
            div.innerHTML += `
                <h2>Mission Destination</h2>        
                    <ol>
                        <li>Name: ${json[4].name}</li>
                        <li>Diameter: ${json[4].diameter}</li>
                        <li>Star: ${json[4].star}</li>
                        <li>Distance from Earth: ${json[4].distance}</li>
                        <li>Number of Moons: ${json[4].moons}</li>
                    </ol>
                </div>
                    <img class="avatar" src="${json[4].image}">
                </div>
            `;
            // }
         });
      });
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

// function checkInputStatus(){
//    let pilotNameInput = document.querySelector("input[name=pilotName]");
//       let copilotInput = document.querySelector("input[name=copilotName]");
//       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
//       let cargoMassInput = document.querySelector("input[name=cargoMass]");
//       let alertNotifications = 0;
//       if (pilotNameInput.value === "" || copilotInput.value === ""||fuelLevelInput.value === "" || cargoMassInput.value === "") {
//          alert("All fields are required!");
//          alertNotifications += 1
//       }
//       if(isNaN(pilotNameInput.value)=== false){
//          alert("Pilot Name should be a string value")
//          alertNotifications += 1
//       }
//       if (isNaN(copilotInput.value)=== false){
//          alert("Co-Pilot Name should be a string value")
//          alertNotifications += 1
         
//       }
//       if (isNaN(fuelLevelInput.value)=== true){
//          alert("Fuel-Level should be a number")
//          alertNotifications += 1
//       }
//       if (isNaN(cargoMassInput.value)=== true){
//          alert("Cargo mass should be a number")
//          alertNotifications += 1
//       }
//       if(alertNotifications>0){
//       // stop the form submission
//       console.log(alertNotifications);
//       alert(`We are preventing submission`)
//          event.preventDefault()
//       }
// return 
      
// }

// if (String(pilotNameInput.value) === string){
//    div.getElementById("pilotStatus").innerHTML += `${pilotNameInput.value}`;
// }

// if (String(pilotNameInput.value) === string){
//    div.getElementById("copilotStatus").innerHTML += `${copilotInput.value}`;
// }
