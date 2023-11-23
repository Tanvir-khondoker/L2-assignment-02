const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  

  }





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })