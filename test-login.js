const axios = require('axios');

async function testLogin() {
  try {
    console.log('Testing login flow...');
    
    // First register a user
    const registerData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123'
    };
    
    console.log('1. Registering user...');
    const registerResponse = await axios.post('http://localhost:3001/auth/register', registerData);
    console.log('✅ Register successful:', registerResponse.data);
    
    // Then try to login
    const loginData = {
      identifier: 'testuser', // Can use username or email
      password: 'password123'
    };
    
    console.log('2. Logging in...');
    const loginResponse = await axios.post('http://localhost:3001/auth/login', loginData);
    console.log('✅ Login successful:', loginResponse.data);
    
    // Test feed endpoint with token
    const token = loginResponse.data.token;
    console.log('3. Testing feed endpoint...');
    const feedResponse = await axios.get('http://localhost:3001/feed', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('✅ Feed data:', feedResponse.data);
    
    console.log('🎉 All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

testLogin();