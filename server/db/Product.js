const conn = require('./conn');
const { STRING, INTEGER, UUID, UUIDV4 } = conn.Sequelize;

const Product = conn.define('product', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price:{
    type: FLOAT,  
    allowNull: false
  },
  imgUrl:{
    type: TEXT,
    allowNull: false,
    defaultValue: "",
  },
  breed: {
    type: STRING,
    allowNull: false,
  },
  description:{
    type: TEXT,
  },
  age:{
    type: INTEGER,
  },

});

module.exports = Product;
