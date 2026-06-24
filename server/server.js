const express = require("express")
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")


const app = express();
const port = 3000;

app.use(express.json())
connectDB();
app.use("/api", authRoutes)

app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
});