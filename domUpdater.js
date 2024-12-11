// Updating DOM with the fetched data
function updateDOMWithProfileData(data) {
    const resultsTable = document.getElementById('results-table').getElementsByTagName('tbody')[0];
    resultsTable.innerHTML = ''; // Clear previous results

    const row = resultsTable.insertRow();
    const profilePicCell = row.insertCell(0);
    const usernameCell = row.insertCell(1);
    const overallRankCell = row.insertCell(2);
    const problemsSolvedCell = row.insertCell(3);
    const badgesCell = row.insertCell(4);
    const leaderboardRankCell = row.insertCell(5);
    const lastSubmissionDateCell = row.insertCell(6);

    // Assuming the data structure from the HackerRank API
    profilePicCell.innerHTML = `<img src="${data.data.avatar}" alt="${data.data.username}">`;
    usernameCell.textContent = data.data.username;
    overallRankCell.textContent = data.data.global_rank;
    problemsSolvedCell.textContent = data.data.total_problems_solved;
    badgesCell.textContent = data.data.badges;
    leaderboardRankCell.textContent = data.data.leaderboard_rank;
    lastSubmissionDateCell.textContent = data.data.last_submission_date;

    showResults(); // Show the results table
}

// Function to toggle visibility of the results table
function showResults() {
    document.getElementById('results-table').style.display = 'table';
}
