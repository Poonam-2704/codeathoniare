// Importing functions from fetchProfiles.js and domUpdater.js
import { fetchProfileData } from './js/fetchProfiles.js';
import { updateDOMWithProfileData, showResults, displayError } from './js/domUpdater.js';

// Function to initialize event listeners and set up the app
function initializeApp() {
    // Event listener for the Analyze button
    document.getElementById('analyze-btn').addEventListener('click', () => {
        fetchProfileData();
    });

    // Fetch profile data on page load for demo purposes
    document.addEventListener('DOMContentLoaded', () => {
        // You may call this function with a default username or a specific one for testing
        fetchProfileData();
    });
}

// Call the initializeApp function to set everything up
initializeApp();
