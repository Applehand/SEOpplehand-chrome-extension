// Get the URL of the JSON file
const jsonUrl = chrome.runtime.getURL('../data.json');

// Initialize a variable to store the tooltip data
let tooltipData;

// Fetch the JSON data and store it in the tooltipData variable
fetch(jsonUrl)
  .then(response => response.json())
  .then(data => {
    tooltipData = data
  });

// This function is triggered when the mouse enters a tooltip
export function mouseEnterTooltip(event) {
  console.log('mouseenter event triggered!');
  let term = event.target.textContent; // Get the term associated with the tooltip
  const tooltipText = tooltipData[term].text; // Get the tooltip text from the tooltipData object
  const p = document.createElement('p'); // Create a new <p> element
  p.classList = 'created-tooltip'; // Set the class of the new element to 'created-tooltip'
  p.innerHTML = tooltipText; // Set the innerHTML of the new element to the tooltip text
  p.addEventListener('mouseenter', mouseEnterTooltip); // Add a mouseenter event listener to the new element
  p.addEventListener('mouseout', mouseOutTooltip); // Add a mouseout event listener to the new element
  document.lastElementChild.appendChild(p); // Append the new element to the last child of the document
}

// This function is triggered when the mouse leaves a tooltip
export function mouseOutTooltip(event) {
  console.log('mouseout event triggered!')
  let createdTooltips = document.getElementsByClassName('created-tooltip'); // Get all the elements with class 'created-tooltip'
  Array.from(createdTooltips).forEach(function(tooltip) {
    tooltip.remove(); // Remove each of the 'created-tooltip' elements
  });
}

// // This function is triggered when a tooltip is clicked
export function clickTooltip(event) {
//   let toolTips = document.getElementsByClassName('tooltip'); // Get all the elements with class 'created-tooltip'
//   Array.from(toolTips).forEach(function(tooltip) {
//     tooltip.removeEventListener('mouseout', mouseOutTooltip); // Remove the mouseout event listener from each of the 'tooltip' elements
//   });
}
