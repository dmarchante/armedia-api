'use strict';

exports.names = (req, res, next) => {
  res.json({
    "items": [{
      "id": 1,
      "name": "Tony",
    }, {
      "id": 2,
      "name": "Lisa",
    }, {
      "id": 3,
      "name": "Michael",
    }, {
      "id": 4,
      "name": "Ginger",
    }, {
      "id": 5,
      "name": "Food"
    }]});
}