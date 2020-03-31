const Event = require('./../models/event.model');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content should not be empty"
        });
    }
    const event = new Event({
        name: req.body.name,
        date: req.body.date,
        created_at: new Date()
    });

    Event.create(event, (err,data) =>{
        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Event."
        });
      else res.send(data);
    });
}

exports.findAll = (req, res) => {
    Event.findAll( (err, data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Event."
        });
      else res.send(data);
    });
}

