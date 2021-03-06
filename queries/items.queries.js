const Item = require("../database/models/item.model");

exports.createItem = (data) => {
  return new Item({
    sku: data.sku,
    name: data.name,
    description: data.description,
    sale_price: data.sale_price,
    image_url: data.image_url,
    brand: data.brand,
  }).save();
};

exports.readItems = () => {
  return Item.find({}).collation({ locale: "fr_CA" }).sort({ name: 1 });
};

exports.readItem = (sku) => {
  return Item.findOne({ sku: sku });
};

exports.deleteItem = (sku) => {
  return Item.deleteOne({ sku: sku });
};

exports.updateItem = (data) => {
  return Item.findOneAndUpdate(
    { sku: data.sku },
    {
      $set: {
        sale_price: data.sale_price,
        image_url: data.image_url,
        name: data.name,
        description: data.description,
        brand: data.brand,
        updatedAt: new Date().now,
      },
    },
    { runValidators: true, new: true }
  );
};
