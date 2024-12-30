
let currId = 1;
const apiUrl = 'https://api.adviceslip.com/advice';
const button = document.getElementById("bttn");

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("text");

  // Function to fetch and display advice by ID
  const fetchAdvice = (id) => {
    fetch(`${apiUrl}/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {

      // Extract the advice text and its unique ID from the API response object
      const adviceText = data.slip.advice; // Gets the actual advice content
      const adviceId = data.slip.id; // Gets the unique ID associated with the advice


        // This clear the previous advice and append new advice.
          container.innerHTML = ""; // Clear previous content

          // Create a new element
          const newElement1 = document.createElement("h6");
          const newElement2 = document.createElement("p");

          newElement1.innerHTML = `Advice # ${adviceId}`;
          newElement2.innerHTML = `"${adviceText}"`;

           // Append the new element to an existing container
          container.appendChild(newElement1);
          container.appendChild(newElement2);
      })
      .catch(error => console.error('Error occurred:', error));
  };

  // Fetch advice on page load "Which is going to be advice one"
  fetchAdvice(currId);

  // Fetch advice on button click
  if (button) {
    button.addEventListener("click", ()=>{
      currId++; // Increment the ID
      fetchAdvice(currId);  
    });
  } 
});
