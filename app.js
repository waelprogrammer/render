const express = require("express");
const app = express();
const xlsx = require('xlsx');
let wb = xlsx.readFile('excel.xlsx');
let ws = wb.Sheets['names'];
let data = xlsx.utils.sheet_to_json(ws);
 // require('dotenv').config();

const PORT = process.env.PORT || 3030; // 2eza 2deret l2et file .env fiya kelmet port sta3mel al value taba3a wa 2ela sta3mel 303  // fa hala2 ne7na metel ka2anno sma7na la render.com y7et howeh men 3endo file .env w y7et l port yalli bado yeh
// console.log(process.env.wael);
  app.get('/', function (req, res) {
   res.send('Ali 2enta 5ara ')   
})
app.get('/students', function (req, res) {
    // let data = [
    //     {id:1,name:'Mohammad'},
    //     {id:2,name:'Wael'},
    //     {id:3,name:'ALi'},
    //     {id:4,name:'Brahim'}
    // ]
    res.send(data); 
 })

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});