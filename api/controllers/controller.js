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

// const AWS = require('aws-sdk');

// AWS.config.update({
//   region: 'us-east-1'
// })

// const DynamoDB = new AWS.DynamoDB();

// const createTable = () => {
//   const params = {
//     TableName: 'Plans',
//     KeySchema: [{AttributeName: 'email', KeyType: 'HASH'}],
//     AttributeDefinitions: [{AttributeName: 'name', AttributeType: 'S'}],
//     ProvisionedThroughput: {
//       ReadCapacityUnits: 10,
//       WriteCapacityUnits: 10
//     }
//   }

//   DynamoDB.createTable(params, (err, data) => {
//     if(err) {
//       console.error('Unable to create table', err)
//     } else {
//       console.log('Created table, data');
//     }
//   });
// }

// const addPlan = () => {
//   const params = {
//     TableName: 'Plans',
//     Item: {
//       email: { S: email },
//       planName: { S: planName },
//       startDate: { D: startDate }
//     }
//   }

//   DynamoDB.putItem(params, err => err
//     ? console.error('Unable to add plan', err)
//     : console.log(`Added ${planName} for ${email} with start date ${startDate}`))
// }

// const getAllPlans = () => {
//   const params = {
//     TableName: 'Plans'
//   }

//   DynamoDB.scan(params, (err, data) => err
//     ? console.error("Unable to find plans", err)
//     : data.Items);
// }

// module.exports = {
//   createTable,
//   addPlan,
//   getAllPlans
// }