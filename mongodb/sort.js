// Building the database
db.inventory.insertMany(
    [{ item: "canvas", qty: 10, tags: ["wool"], size: { h: 28, w: 25.5, uom: "cm" } },
    { item: "canvas", qty: 20, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas", qty: 30, tags: ["cot"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas", qty: 40, tags: ["con"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas", qty: 50, tags: ["ton"], size: { h: 28, w: 35.5, uom: "cm" } }]
    )

db.inventory.find().sort({qty:1}) // sort by qty ascending
db.inventory.find().sort({qty:-1}) // sort by qty descending

db.inventory.find().skip(1) // skip first document
db.inventory.find().skip(1).limit(2) // skip first document and limit to 2 documents
db.inventory.find().skip(1).limit(2).sort({qty:1}) // skip first document, limit to 2 documents, and sort by qty ascending

db.inventory.find().limit(1)

// Pagination using MongoDB find and lmit
1 to 10
no = 8
skip = (no - 1) * 10
limitPages = 10
pageno = 1 // 1 to 10
db.blogs.find().skip(skip).limit(limitPages)
pageno = 2 // 11 to 20
db.blogs.find().skip(skip+10).limit(limitPages)