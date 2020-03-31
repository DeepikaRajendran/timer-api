const sql = require('./db');
const Event = function(event) {
    console.log(event)
    this.name = event.name;
    this.event_date = event.date;
    this.created_at = event.created_at;
  };
  
  Event.create = (newEvent, result) => {
      //newEvent.event_date = new Date(newEvent.event_date);
    sql.query("INSERT INTO event SET ?", newEvent, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created event: ", { id: res.insertId, ...newEvent });
      result(null, { id: res.insertId, ...newEvent });
    });
  };

  Event.findAll = result => {
    sql.query("SELECT * FROM event ORDER BY created_at desc", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      result(null, res);
    });
  };

  module.exports = Event;