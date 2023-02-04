window.addEventListener("load", function() {
    const input = document.querySelector("#input");
  
    input.addEventListener("keyup", function(event) {
      let char = event.key;
      if (!/^[a-zA-Z]$/i.test(char)) {
        event.preventDefault();
      }
    });
  });
  