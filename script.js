function fetchAPOD() {
    var apiKey = "kJtofOI1QjwZLtxOKVJmazUr2xlcBcX6d949NfzF";
    var url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
  
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        displayAPOD(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  function displayAPOD(apod) {
    var apodContainer = document.getElementById("apodContainer");
  
    var title = "<h2>" + apod.title + "</h2>";
    var image = "<img src='" + apod.url + "' alt='" + apod.title + "'>";
    var explanation = "<p>" + apod.explanation + "</p>";
  
    var apodElement = "<div>" + title + image + explanation + "</div>";
    apodContainer.innerHTML = apodElement;
  }
  
  fetchAPOD();
  