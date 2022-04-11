const {Router} = require('express');
const router = Router();

const productos = [
    {
        id: 1,
        name: "Laptop Toshiba",
        Precio: 1500,
        stock: 50,
    },
    {
        id: 2,
        name: "MacBook",
        Precio: 2500,
        stock: 20,
    },
    {
        id: 3,
        name: "Mouse",
        Precio: 150,
        stock: 80,
    },
];

router.get('/productos', (req, res) => {
    res.send(productos);
});

module.exports = router;