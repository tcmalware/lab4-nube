const {Router} = require('express');
const router = Router();

const clientes = [
    {
        id: 1,
        name: "Genaro",
        lastname: "Valqui",
    },
    {
        id: 2,
        name: "Gabriel",
        lastname: "Herrera",
    },
    {
        id: 3,
        name: "Fabian",
        lastname: "Fernandez",
    },
];

router.get('/clientes', (req, res) => {
    res.send(clientes);
});

module.exports = router;