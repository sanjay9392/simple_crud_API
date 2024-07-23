const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route.js')
const app = express()

//middleware
app.use(express.json())

//routes
app.use('/api/products',productRoute)

app.get('/', (req, res) => {
    res.send("Hello from Node API")
})

//Get all Products
/*app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find(req.body)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})*/

//Get Product By Id
/*app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})*/

//Add Products
/*app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})*/

//Update the Product
/*app.put('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)

        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        const updatedProduct = await Product.findById(req.params.id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})*/

//Delete the Product
/*app.delete('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.status(200).json({ message: "Product deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})*/
mongoose.connect("mongodb+srv://sanjayvasireddy4:sanjay9392@crudapi.fho2zrl.mongodb.net/Crud-API?retryWrites=true&w=majority&appName=CrudAPI")
    .then(() => {
        console.log("Connected to database")
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection failed")
    })

