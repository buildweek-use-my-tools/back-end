const router = require('express').Router();
const db = require('../database/db-config');

const Tools = require('./tool-model');

router.get('/', (req, res) => {
    // db('tools as t').join('users as u', 'u.id', 't.ownerId').select('t.name', 't.price', 'ttoolImg', 'u.username', 'u.location')
    db.select('t.name as Name', 't.price as Price', 't.toolImg as Image', 'u.username as Owner', 'u.location as Location')
    .from('tools as t')
    .join('users as u', 'u.id', '=', 't.ownerId')
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ error: "Could not find a user with that ID" }))
})

router.get('/:id', (req, res) => {
    Tools.findUserTools(req.params.id)
    .then(tools => res.status(200).json({ tools }))
    .catch(err => res.status(500).json({ error: "Could not find a user with that ID" }))
})

router.put('/:id', (req, res) => {
    const changes = req.body;

    Tools.findById(req.params.id).update(changes)
    .then(tool => res.status(200).json(tool))
    .catch(err => res.status(500).json({ error: "Could not update that tool" }))
})



module.exports = router;