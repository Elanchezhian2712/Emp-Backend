const mongoose = require('mongoose');
const { DB_URL } = process.env;

// Define a function to establish database connection
const dbConnection = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database Connection Successful'))
    .catch(err => {
        console.error('Failed To Connect With Database');
        console.error(err.message);
        process.exit(1); // Exit the process if connection fails
    });
}

// Export the function for use in other modules
module.exports = dbConnection;
