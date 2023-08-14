// Read
db.inventory.find() // show all documents in collection

db.inventory.find({ qty: 100 }) // show all documents where qty = 100

// Relational operators
db.inventory.find({ qty: { $gt: 100 } }) // show all documents where qty > 100

db.inventory.find({ qty: { $gte: 100 } }) // show all documents where qty >= 100

db.inventory.find({ qty: { $lt: 100 } }) // show all documents where qty < 100

db.inventory.find({ qty: { $lte: 100 } }) // show all documents where qty <= 100

db.inventory.find({ qty: { $ne: 100 } }) // show all documents where qty != 100

db.inventory.find({ qty: { $in: [100, 20] } }) // show all documents where qty = 100 or qty = 20

db.inventory.find({ qty: { $nin: [100, 20] } }) // show all documents where qty != 100 and qty != 20

// Logical operators
db.inventory.find({ qty: { $exists: true } }) // show all documents where qty exists

db.inventory.find({ qty: { $exists: false } }) // show all documents where qty does not exist

db.inventory.find({ qty: { $exists: true, $nin: [100, 20] } }) // show all documents where qty exists and qty != 100 and qty != 20

db.inventory.find({ qty: { $exists: true, $nin: [100, 20] } }, { qty: 1 }) // show all documents where qty exists and qty != 100 and qty != 20, but only show qty field

db.inventory.find({ qty: { $exists: true, $nin: [100, 20] } }, { qty: 0 }) // show all documents where qty exists and qty != 100 and qty != 20, but do not show qty field

db.inventory.find({ qty: { $exists: true, $nin: [100, 20] } }, { qty: 0, _id: 0 }) // show all documents where qty exists and qty != 100 and qty != 20, but do not show qty field or _id field


db.inventory.find({ labels: { $all: ["red", "blank"] } }) // show all documents where labels array contains both "red" and "blank"

// logical operators
db.inventory.find({ $or: [{qty:{$gte: 30}}, {tags:{$in:["cotton"]}}] }) // show all documents where qty >= 30 or tags array contains "cotton"

db.inventory.find({ $and: [{qty:{$gte: 30}}, {tags:{$in:["cotton"]}}] }) // show all documents where qty >= 30 and tags array contains "cotton"

db.inventory.find({ $and: [{qty:{$gte: 30}}, {tags:{$in:["cotton"]}}] }).sort({qty:1}) // show all documents where qty >= 30 and tags array contains "cotton", and sort by qty ascending
