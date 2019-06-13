var mongoose = require('mongoose');
// var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({
    name: { 
        type: String, 
        required: true
    }, 
    price: {
        required: true,
        type: String,
    }, 
    description: {
        required: true,
        type: String        
    },
    cover: {
        required: true,
        type: String        
    }

});

// schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Book', schema);