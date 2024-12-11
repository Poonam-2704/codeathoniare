// Fetching data from HackerRank API
async function fetchProfileData() {
    const username = document.getElementById('username').value;
    const apiUrl = `https://www.hackerrank.com/rest/partner/kernels/user_profile?username=${username}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('User not found or an error occurred');
        }
        const data = await response.json();
        
        // Check if the API response has expected data
        if (data.data) {
            updateDOMWithProfileData(data);
        } else {
            displayError('User not found or API returned unexpected data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        displayError('An error occurred while fetching data. Please try again later.');
    }
}

// Display error message to the user
function displayError(message) {
    const resultsTable = document.getElementById('results-table').getElementsByTagName('tbody')[0];
    resultsTable.innerHTML = ''; // Clear any previous results
    const row = resultsTable.insertRow();
    const errorCell = row.insertCell(0);
    errorCell.colSpan = 4; // Adjust the colspan to cover all table columns
    errorCell.textContent = message;
    showResults(); // Show the results table
}
