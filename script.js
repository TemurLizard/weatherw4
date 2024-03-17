const endpoint = "https://weatherapp-five-chi.vercel.app/2428271/api"


fetch(endpoint)

     .then(response => response.json())
     .then(response => {

          console.log(response)

         
          let pressure = response.pressure
          let current_time = response.current_time


          document.getElementById("weather__city").innerHTML = "Sheffield"
          document.getElementById("time").innerHTML = current_time
          document.getElementById("pressure").innerHTML = `${pressure.toFixed(0)} hPa`


     })
     .catch(err => {
          console.log(err)
     })