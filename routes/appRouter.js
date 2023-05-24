const express = require('express');
const router = express.Router();

router.route('/item/:id')
    .get((req, res) => {
        res.send(`Showing Item: ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Updating Item: ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Deleting Item: ${req.params.id}`);
    });

module.exports = router;