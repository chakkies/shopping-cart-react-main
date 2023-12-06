// api.js

let fetchedData; // Declare a variable to store the fetched data


export function fetchData(apiUrl, apiKey) {
    return fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Set the exported variable with the fetched data
            fetchedData = data;
            return data;
        });
}

export function getFetchedData() {
    // Return the exported variable
    return fetchedData;
}
