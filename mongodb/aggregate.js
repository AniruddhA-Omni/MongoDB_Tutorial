// Aggregation Pipeline
db.orders.aggregate([
    {
        $match: {
            status: "A"
        }
    },
    {
        $group: {
            _id: "$cust_id",
            total: {
                $sum: "$amount"
            }
        }
    }
])