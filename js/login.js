document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('lobby__form');

  loginForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      try {
          const response = await fetch('http://localhost:4000/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, password })
          });

          if (!response.ok) {
              throw new Error('Authentication failed');
          }

          const data = await response.json();
          // Store the JWT token in local storage or session storage
          localStorage.setItem('accessToken', data.accessToken);

          // Redirect to another page or do other operations
          window.location.href = '../lobby.html'; // Redirect to a different page
      } catch (error) {
          console.error('Authentication error:', error);
          // Handle authentication error (e.g., display error message)
      }
  });
});
