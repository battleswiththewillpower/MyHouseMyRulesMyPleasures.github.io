const mongoose = require('mongoose')

//change the password before you upload on github
mongoose.connect('mongodb+srv://root:rootroot@winwinwinwin.xt3iovb.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));