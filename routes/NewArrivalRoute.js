import express from "express"
import newArrivalData from "../utils/WomenClothe.js"

const newArrival = express.Router()

newArrival.get("/", (req, res) => {
    res.status(200).send({status: 200, message: "Success", data: newArrivalData})
})

newArrival.get("/:id", (req, res) => {
    let {id} = req.params
    let findId = newArrivalData.find((item) => item.id == id)

    if (!findId) {
        res.status(404).send({status: 404, message: "Data Not Found", data: []})
    }
    res.status(200).send({status: 200, message: "Success", data: findId})
})

newArrival.get("/categories/:category", (req, res) => {
    let {category} = req.params
    let filterCategory = newArrivalData.filter((item) => item.category == category)

    if (!filterCategory) {
        res.status(404).send({status: 404, message: "Data Not Found", data: []})
    }
    res.status(200).send({status: 200, message: "Success", data: filterCategory})
})

newArrival.get("/fabrics/:fabric", (req, res) => {
    let {fabric} = req.params
    let filterfabric = newArrivalData.filter((item) => item.fabric == fabric)

    if (!filterfabric) {
        res.status(404).send({status: 404, message: "Data Not Found", data: []})
    }
    res.status(200).send({status: 200, message: "Success", data: filterfabric})
})

export default newArrival