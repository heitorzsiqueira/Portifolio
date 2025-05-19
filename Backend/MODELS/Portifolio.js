const mongoose = require('mongoose');
const slugify = require('slugify')


const portfolioSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
    unique : true
  },
  slug:{
    type:String,
    required:true,
    default:function(){return slugify(this.titulo)},
    unique: true
  },
  descricao: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
