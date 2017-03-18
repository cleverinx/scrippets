load script to head after page load

function load_script() {
      var script = document.createElement("script");
      // This script has a callback function that will run when the script has
      // finished loading.
      script.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";
      script.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(script);
  }

window.onload = load_script;
