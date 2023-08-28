
// TODO : RUN THE SERVER HERE

const crossoverRoutes = require('./routes/crossoverRoutes');









const PORT = 5000;

// Routes
app.use('/api', crossoverRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
