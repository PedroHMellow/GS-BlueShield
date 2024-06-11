const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;


app.use(express.json());


const users = [];


const JWT_SECRET = 'your_jwt_secret';


app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }
    
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    
    users.push({ username, password: hashedPassword });
    
    res.status(201).json({ message: 'User registered successfully' });
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username);
    
    if (!user) {
        return res.status(400).json({ error: 'Invalid username or password' });
    }
    
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid username or password' });
    }
    
    
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    
    res.json({ token });
});


app.get('/validate', (req, res) => {
    const token = req.headers['authorization'];
    
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        
        res.json({ message: 'Token is valid', username: decoded.username });
    });
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
