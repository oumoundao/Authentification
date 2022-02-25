const router = require("express").Router();
const {
  MyItem,
  MyItems,
  editItem,
  addItem,
  deleteItem,
  getItemsPerPage,
} = require("../controllers/items.controller");
//const { itemsList, saleList } = require("../controllers/sales.controller");

const multer = require("multer");
const upload = multer({ dest: "uploads/" }).single("image_url");
//const { v4: uuidv4 } = require("uuid");

router.get("/", MyItems);

router.get("/:page", getItemsPerPage);

router.get("/delete/:sku", deleteItem);

router.get("/:sku/produit", MyItem);

router.post("/add", /*upload,*/ addItem);

router.post("/update/:sku", upload, editItem);

module.exports = router;
