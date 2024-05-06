const express = require('express');
const {getData, save} = require('./utils/functions');
const {v4: uuidv4} = require('uuid');
const app = express();
const PORT = 3000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
app.use(express.json());
app.use(express.static('public'));

let items = getData('./database/items.json');

// get all items
app.get('/api/v1/items', (req, res) => {
    res.json({message: "Getting items...", items: items})
});

// create item
app.post('/api/v1/items', (req, res) => {
    // destructuring
    const {name, price} = req.body;
    // create the new item
    let newItem = {
        id: uuidv4(),
        name: name,
        price: price
    };
    // add the new item to the items array
    items.push(newItem);
    //save item to file
    save('./database/items.json', items);
    // response
    res.json({message: "Item created successfully", item: newItem});
});

// get one item
app.get('/api/v1/items/:id', (req, res) => { 
    let id = req.params.id;
    let item = items.find(item => item.id === id);
    if (item != undefined) {
        res.json({message: "Item one found", item: item});
    } else {
        res.status(404).send({message: "Item not found"});
    }
});

// delete item
app.delete('/api/v1/items/:id', (req, res) => { 
    let id = req.params.id;
    let index = items.findIndex(item => item.id === id);
    if (index != -1) {
        items.splice(index, 1);
        save('./database/items.json', items);
        res.json({message: "Item deleted successfully"});
    } else {
        res.status(404).send({message: "Item not found"});
    }
});

// update item
app.put('/api/v1/items/:id', (req, res) => { 
    let id = req.params.id;
    let index = items.findIndex(item => item.id === id);
    if (index != -1) {
       let item = items[index];
       item.name = req.body.name;
       item.price = req.body.price;
       save('./database/items.json', items);
       res.json({message: "Item updated successfully", item: item});
    } else {
        res.status(404).send({message: "Item not found"});
    }
});