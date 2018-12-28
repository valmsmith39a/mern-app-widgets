const express = require ('express');
const router = express.Router();
const Widget = require('../models/widget');

router.get('/widgets', (req, res, next) => {
  // this will return all the data, exposing only the id and action field to the client
  Widget.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/widgets', (req, res, next) => {
  
  if(req.body.action){
    Widget.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/widgets/:id', (req, res, next) => {
  Widget.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;
