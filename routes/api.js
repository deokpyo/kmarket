var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

// GET route to find all
router.get('/:resource', function (req, res, next) {
    var resource = req.params.resource
    var controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }

    controller.find(req.query, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    })
})

// GET route to find by id
router.get('/:resource/:id', function (req, res, next) {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }

    controller.findById(id, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: 'Not Found'
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    })
})

// DELETE route to delete by id
router.delete('/:resource/:id', function (req, res, next) {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }

    controller.delete(id, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: 'id not found: ' + id
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    })
})

// PUT route to update by id
router.put('/:resource/:id', function (req, res, next) {

    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }

    controller.update(id, req.body, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: 'Not Found'
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    })
})

// POST route to create a new employee
router.post('/:resource', function (req, res, next) {

    var resource = req.params.resource;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }

    controller.create(req.body, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    })
})

module.exports = router;