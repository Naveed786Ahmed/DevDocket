import express from "express"
import menClothData from "../MenClothes.js"

const menWear = express.Router()

menWear.get("/", (req, res) => {
    res.status(200).send({status: 200, message: "Success", data: menClothData})
})

menWear.get("/:id", (req, res) => {
    let {id} = req.params
    let findId = menClothData.find((item) => item.id == id)

    if (!findId) {
        res.status(404).send({status: 404, message: "Data Not Found", data: []})
    }
    res.status(200).send({status: 200, message: "Success", data: findId})
})

menWear.get("/categories/:category", (req, res) => {
    let {category} = req.params
    let filterCategory = menClothData.filter((item) => item.category == category)

    if (!filterCategory) {
        res.status(404).send({status: 404, message: "Data Not Found", data: []})
    }
    res.status(200).send({status: 200, message: "Success", data: filterCategory})
})

menWear.get("/fabrics/:fabric", (req, res) => {
    let {fabric} = req.params
    let filterfabric = menClothData.filter((item) => item.fabric == fabric)

    if (!filterfabric) {
        res.status(404).send({status: 404, message: "Data Not Found", data: []})
    }
    res.status(200).send({status: 200, message: "Success", data: filterfabric})
})

export default menWear