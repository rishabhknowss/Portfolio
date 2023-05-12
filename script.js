document.addEventListener('DOMContentLoaded', function() {
    // Get the input element
    var inputElement = document.getElementById('input-text');
  
    // Get the icon element
    var iconElement = document.getElementById('icon');
  
    // Add event listener for Enter key press
    inputElement.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        generateResponse(inputElement.value);
      }
    });
  
    // Add event listener for icon click
    iconElement.addEventListener('click', function() {
      generateResponse(inputElement.value);
    });
  
    // Function to generate response based on input
    function generateResponse(text) {
      if (text.trim() !== '') {
        var response = "Hi, what do you wanna know?";
        document.getElementById('response-text').textContent = response;
      }
    }
  });
  