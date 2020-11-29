const express = require('express');
const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({ extended: false }))


const Person = require('../models/Person');

router.get('/people', function(req, res) {
    Person.find({}, function(err, people) {
        console.log(people);
        res.send(people);
    })
})

router.post('/person', function(req, res) {
    let p1 = new Person({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    })
    
    p1.save()
    res.end()
})

router.put('/person/:id', function(req, res) {
    console.log(req.params.id);
    Person.findById(`${req.params.id}`, function(err, person) {
        person.age = 80;
        person.save();
        console.log(person);
    })
    res.end();
})

router.delete('/person', function(req, res) {
    Person.find({}, function(err, person) {
    person.forEach(p => p.remove())
    })
    console.log('clear');
    res.end();
})


module.exports = router;