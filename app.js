const express = require("express");
const app = express();
 // require('dotenv').config();

const PORT = process.env.PORT || 3030; // 2eza 2deret l2et file .env fiya kelmet port sta3mel al value taba3a wa 2ela sta3mel 303  // fa hala2 ne7na metel ka2anno sma7na la render.com y7et howeh men 3endo file .env w y7et l port yalli bado yeh
// console.log(process.env.wael);
  app.get('/', function (req, res) {
   res.send('Hello World')   
})


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});