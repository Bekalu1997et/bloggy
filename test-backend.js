const axios = require('axios');

async function testBackend() {
  try {
    console.log('Testing backend connection...');
    
    // Test health endpoint
    const healthResponse = await axios.get('http://localhost:3001/health');
    console.log('✅ Health check:', healthResponse.data);
    
    // Test register endpoint
    const registerData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123'
    };
    
    const registerResponse = await axios.post('http://localhost:3001/auth/register', registerData);
    console.log('✅ Register test:', registerResponse.data);
    
    console.log('🎉 Backend is working correctly!');
  } catch (error) {
    console.error('❌ Backend test failed:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

testBackend();