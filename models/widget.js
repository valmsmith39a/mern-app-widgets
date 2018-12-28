const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for widget
const WidgetSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The widget text field is required']
  }
})

//create model for widget
const widget = mongoose.model('widget', WidgetSchema);

module.exports = widget;