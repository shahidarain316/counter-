document.addEventListener('DOMContentLoaded', function() {
    const counterDisplay = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn'); // Add reset button
  
    let count = 0;
  
    // Update the counter display
    function updateCounter() {
      counterDisplay.textContent = count;
    }
  
    // Event listener for the increment button
    incrementBtn.addEventListener('click', function() {
      count++;
      updateCounter();
    });
  
    // Event listener for the decrement button
    decrementBtn.addEventListener('click', function() {
      count--;
      updateCounter();
    });
  
    // Event listener for the reset button
    resetBtn.addEventListener('click', function() {
      count = 0;
      updateCounter();
    });
  });
  
