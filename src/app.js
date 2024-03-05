const express = require('express') ;
const morgan = require('morgan');
const {default:helmet} = require('helmet');
const compression = require('compression') ;
const app = express() ;


// init middleware
app.use(morgan('tiny'));
app.use(helmet());
app.use(compression());
// init db

// handler error


// init router
app.get('/',(req,res)=>{
    const sCompression = "Hello I'm fine I'm OK "
    res.status(500).json({
        message:"Respond successful",
        metadata:sCompression.repeat(10000)
    })
})

module.exports = app ;