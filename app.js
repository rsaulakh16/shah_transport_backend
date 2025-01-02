const express = require('express');
const dotenv = require('dotenv');
const driverRoutes = require('./routes/DeiverRoutes');
const userRoutes = require('./routes/userRoutes');
const { sequelize } = require('./models'); // Import Sequelize instance

dotenv.config();

const app = express();

app.use(express.json());

// Test database connection
const checkDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the process if the database connection fails
  }
};

// Initialize server
const startServer = async () => {
  await checkDatabaseConnection(); // Ensure database is connected before starting the server

  const PORT = process.env.PORT || 3000;
  app.use('/api/driver', driverRoutes);
  app.use('/api/user', userRoutes);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

// Start the application
startServer();
