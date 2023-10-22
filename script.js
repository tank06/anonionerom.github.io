function searchTechnique() {
    var query = document.getElementById("search-bar").value.toLowerCase();
    var results = [];
    var mitreData = {
        "TA0006": "credential_access/lazagne_cred_dump.yml",
        "TA0011": "command_and_control/win_telegram_api.yml",
        // Add more entries with subdirectories as needed
    };

    for (var technique in mitreData) {
        if (technique.toLowerCase().includes(query)) {
            results.push({ technique: technique, yamlFile: mitreData[technique] });
        }
    }

    displayResults(results);
}

function displayResults(results) {
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = "No results found.";
    } else {
        results.forEach(function (result) {
            var resultDiv = document.createElement("div");
            resultDiv.innerHTML = "<b>" + result.technique + "</b>: " + result.yamlFile;
            resultsDiv.appendChild(resultDiv);
        });
    }
}