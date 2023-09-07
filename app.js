const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Set your desired port number

// Serve static files from a directory (e.g., 'public')
app.use(express.static('.'));

// Define your routes and other application logic here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
