// Delete

db.inventory.deleteOne({ qty: { $gte: 30 } }) // delete first document where qty >= 30

db.inventory.deleteMany({ qty: { $gte: 30 } }) // delete all documents where qty >= 30

db.inventory.deleteMany({}) // delete all documents in collection

db.inventory.drop() // delete collection

db.dropDatabase() // delete database

db.inventory.remove({ qty: { $gte: 30 } }) // delete all documents where qty >= 30

db.inventory.deleteMany({ status: "A" }) // delete all documents where status = "A"

// delete all documents where status = "A" and return number of documents deleted
db.inventory.deleteMany({ status: "A" }, { writeConcern: { w: "majority", wtimeout: 5000 } })
