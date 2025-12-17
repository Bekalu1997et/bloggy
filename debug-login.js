// Run this in browser console to test login directly
async function debugLogin() {
  try {
    console.log('Testing direct login...');
    
    const response = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: 'testuser',
        password: 'password123'
      })
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    const data = await response.json();
    console.log('Response data:', data);
    
    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      console.log('Stored in localStorage');
      console.log('Token:', localStorage.getItem('token'));
      console.log('User:', localStorage.getItem('user'));
    }
    
  } catch (error) {
    console.error('Debug login error:', error);
  }
}

// Call the function
debugLogin();