window.onload = function () {
    var closeclose = document.getElementById("nysds-close");
      if(closeclose){
        closeclose.addEventListener("click", closestatic);
        function closestatic () {
        document.getElementById("nysds-hide-this").style.display = "none";
        }
        }
    }