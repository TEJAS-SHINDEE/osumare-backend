const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

app.use('/tasks', taskRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.get("/", (req,res) => {
    res.status(500)
    .json({
        status:"success",
        message:"this is res"
    });
})

const PORT = 3000;
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`) 
});
