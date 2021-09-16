const mongoose = require('mongoose');
const Package = require('../package.json');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true, }, function (error) {
    if (!error) {
        console.log('\nMogoDb Connected Successfuly at 27017 with Database Name South Fitted Wardrobes & Kitchen\n');
        console.log('Your App Has the Following Dependicies\n');
        for (dependencies in Package.dependencies) {
            console.log(dependencies);
        }
    }
    else { console.log('Error: Not Connected to the MongoDb' + error); }
});