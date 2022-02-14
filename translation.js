window.onload = function () {
    var closeclose = document.getElementById("nysds-close");
      if(closeclose){
        closeclose.addEventListener("click", closestatic);
        function closestatic () {
        document.getElementById("translation-disclaimer").style.display = "none";
        }
        }
    }