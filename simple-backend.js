const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;
const JWT_SECRET = 'your-jwt-secret-key';

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('Body:', req.body);
  }
  next();
});

// Mock data
const users = [];
let userIdCounter = 1;

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Bloggy API is running!' });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'bloggy-api',
  });
});

app.post('/auth/register', (req, res) => {
  try {
    console.log('Register request body:', req.body);
    const { username, email, password } = req.body;
    
    // Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({ 
        message: 'Username, email, and password are required',
        received: { username: !!username, email: !!email, password: !!password }
      });
    }
    
    // Validate field lengths
    if (username.length < 3) {
      return res.status(400).json({ message: 'Username must be at least 3 characters' });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }
    
    // Check if user exists
    const existingUser = users.find(u => u.email === email || u.username === username);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create user
    const user = {
      id: userIdCounter++,
      username,
      email,
      password, // In real app, hash this
    };
    users.push(user);
    
    console.log('User created:', { id: user.id, username: user.username, email: user.email });
    
    // Generate token
    const token = jwt.sign({ sub: user.id, username: user.username }, JWT_SECRET);
    
    res.json({
      user: { id: user.id, username: user.username, email: user.email },
      token,
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

app.post('/auth/login', (req, res) => {
  try {
    console.log('Login request body:', req.body);
    const { identifier, password } = req.body;
    
    // Validate required fields
    if (!identifier || !password) {
      return res.status(400).json({ 
        message: 'Email/username and password are required',
        received: { identifier: !!identifier, password: !!password }
      });
    }
    
    console.log('Looking for user with identifier:', identifier);
    console.log('Current users:', users.map(u => ({ id: u.id, username: u.username, email: u.email })));
    
    // Find user
    const user = users.find(u => 
      u.email === identifier || u.username === identifier
    );
    
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    if (user.password !== password) {
      console.log('Password mismatch');
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    console.log('Login successful for user:', user.username);
    
    // Generate token
    const token = jwt.sign({ sub: user.id, username: user.username }, JWT_SECRET);
    
    res.json({
      user: { id: user.id, username: user.username, email: user.email },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
});

app.get('/feed', (req, res) => {
  const mockFeed = {
    data: [
      {
        type: 'post',
        data: {
          id: '1',
          title: 'Welcome to Bloggy!',
          content: 'This is your first blog post. Start writing amazing content!',
          slug: 'welcome-to-bloggy',
          author: {
            id: '1',
            username: 'admin',
            profile: { photoUrl: null }
          },
          likesCount: 5,
          commentsCount: 2,
          isLiked: false,
          createdAt: new Date().toISOString(),
        }
      }
    ],
    meta: {
      page: 1,
      limit: 10,
      total: 1,
      totalPages: 1,
    },
  };
  
  res.json(mockFeed);
});

// Error handling
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Simple backend server running on http://localhost:${PORT}`);
});

module.exports = app;