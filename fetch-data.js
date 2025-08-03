// Asynchronous function to fetch and display user data
async function fetchUserData() {
    // API endpoint URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Get the container element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        // Parse the JSON response
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create a list element
        const userList = document.createElement('ul');
        
        // Loop through each user and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the list to the container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle any errors that occur during fetching
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);