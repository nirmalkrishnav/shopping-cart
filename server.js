require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortId = require('shortid');

const port = process.env.PORT || 27000;

const mongoUrl = process.env.DB_URL;

var app = express();
app.use(bodyParser.json());

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    userCreateIndex: true,
    useUnifiedTopology: true
})

const Product = mongoose.model('products', new mongoose.Schema(
    {
        _id: { type:String, default: shortId.generate },
        title: String,
        image: String,
        desc: String,
        sizes: [String],
        price: Number,
    }
));


app.get('/api/products', async (req, res) => {
    const products = await Product.find({})
    res.send(products);
});

app.post('/api/products/create', async (req, res) => {
    const newProduct = new Product(req.body);
    const result = await newProduct.save();
    res.send(result);
});


app.get('/api/product/:id', async (req, res) => {
    const id = req.params.id;
    const prod = await Product.findById(id);
    res.send(prod);
});

app.delete('/api/product/:id', async (req, res) => {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.send(deletedProduct);
});

app.listen(port, () => console.log(`Server is active at 127.0.0.1:${port}`));