import express from "express";
import dotenv from "dotenv";
import newArrival from "./routes/NewArrivalRoute.js";
import menWear from "./routes/MenWearRoute.js";
import cors from "cors"

const app = express()
dotenv.config()
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send("Welcome To DevDocket API")
})

// New Arrival MiddleWare
app.use("/womenclothes", newArrival)
app.use("/womenclothes/:id", newArrival)
app.use("/womenclothes/categories/:category", newArrival)
app.use("/womenclothes/fabrics/:fabric", newArrival)

// Men Wear MiddleWare
app.use("/menclothes", menWear)
app.use("/menclothes/:id", menWear)
app.use("/menclothes/categories/:category", menWear)
app.use("/menclothes/fabrics/:fabric", menWear)


app.get("*", (req, res) => {
    res.status(400).send("Something Went Wrong")
})

const PORT = process.env.PORT || 7080

app.listen(PORT, (req, res) => {
    console.log(`Server is Working on Port: ${PORT}`);
})