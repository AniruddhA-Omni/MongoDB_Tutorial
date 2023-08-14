// Update
db.inventory.updateOne(
    { item: "canvas" },
    {
        $set: {"size.uom": "cm", status: "P", "tags": ["blank", "red"]},
        $currentDate: { lastModified: true }
    }
)