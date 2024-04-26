const express = require('express');
const api = express();
const port = 9999;

const employees = [
  { empID: 1, name: 'Ken V' },
  { empID: 2, name: 'Ken V'},
  { empID: 3, name: 'Ken V' },
];

api.get('/api/employees', (req, res) => {
  res.json(employees);
});

api.listen(port, () => {
    console.log(`API is live at http://localhost:${port}`);
});