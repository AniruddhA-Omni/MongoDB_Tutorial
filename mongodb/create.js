// Create
// insertOne() method
db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )

// insertMany() method
 db.inventory.insertMany(
    [{ item: "canvas", qty: 10, tags: ["wool"], size: { h: 28, w: 25.5, uom: "cm" } },
    { item: "canvas", qty: 20, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas", qty: 30, tags: ["cot"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas", qty: 40, tags: ["con"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas", qty: 50, tags: ["ton"], size: { h: 28, w: 35.5, uom: "cm" } }]
 )

