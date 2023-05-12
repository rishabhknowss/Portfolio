document.addEventListener('DOMContentLoaded', function() {
    // Get the input element
    var inputElement = document.getElementById('input-text');
  
    // Get the icon element
    var iconElement = document.getElementById('icon');
  
    // Add event listener for Enter key press
    inputElement.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        generateResponse(inputElement.value);
        inputElement.value = ''; // Clear the input text
      }
    });
  
    // Add event listener for icon click
    iconElement.addEventListener('click', function() {
      generateResponse(inputElement.value);
      inputElement.value = ''; // Clear the input text
    });
  
    // Function to generate response based on input
    function generateResponse(text) {
      if (text.trim() !== '') {
        var response = "Hi, what do you wanna know?";
        animateTyping(response, 'response-text');
      }
    }
  
    // Function to animate typing effect
    function animateTyping(text, elementId) {
      var element = document.getElementById(elementId);
      element.textContent = ''; // Clear previous content
  
      var i = 0;
      var typingEffect = setInterval(function() {
        element.textContent += text.charAt(i);
        i++;
  
        if (i >= text.length) {
          clearInterval(typingEffect);
        }
      }, 50); // Adjust typing speed here (milliseconds)
    }
  });ok
  