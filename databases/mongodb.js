// MongoDB Shell Commands
// =====================================

// Show all databases
show dbs;

// Switch to a specific database (or create one)
use <database-name>;

// Drop the current database
db.dropDatabase();

// Show all collections in the database
show collections;

// Create a new collection
db.createCollection('<collection-name>');

// Drop a specific collection
db.<collection-name>.drop();


// Basic CRUD Operations
// =====================================

// Insert Documents
db.<collection-name>.insertOne({ field1: value1, field2: value2 });
db.<collection-name>.insertMany([
  { field1: value1, field2: value2 },
  { field1: value3, field2: value4 }
]);

// Querying Documents
db.collection.find({});  // Find all
db.collection.find({ field: value });  // Conditional find
db.collection.find({ field: value }, { field1: 1, field2: 1 });  // Projection (include fields)
db.collection.find().sort({ field1: 1, field2: -1 }).limit(5).skip(5);  // Sort, limit, skip

// Update and Delete
db.collection.updateOne({ field: value }, { $set: { fieldToUpdate: newValue } });
db.collection.updateMany({ field: value }, { $set: { fieldToUpdate: newValue } });
db.collection.deleteOne({ field: value });
db.collection.deleteMany({ field: value });


// Advanced Queries
// =====================================

// Comparison and Logical Operators
db.collection.find({ age: { $gte: 18, $lte: 30 } });  // Range query
db.collection.find({ $or: [{ field1: value1 }, { field2: value2 }] });  // OR condition

// Array Operations
db.collection.find({ tags: "tagValue" });  // Array contains value
db.collection.find({ scores: { $elemMatch: { $gt: 80 } } });  // Array element match

// Field Existence Check
db.collection.find({ field: { $exists: true } });  // Field existence

// Aggregation
db.collection.aggregate([
  { $group: { _id: "$category", total: { $sum: "$price" } } }  // Group by field and sum
]);

// Text Search
db.collection.find({ $text: { $search: "text to search" } });


// Insert with Order Control
// =====================================

db.<collection-name>.insertMany([doc1, doc2, ...]);  // Ordered (default, stops on first error)
db.<collection-name>.insertMany([doc1, doc2, ...], { ordered: false });  // Unordered, continues after errors


// Important Notes
// =====================================
// 1. Use quotes if a field name has special characters, spaces, or is a reserved keyword.
// 2. MongoDB is case-sensitive for collections and fields.


1. $lookup:
Description: The $lookup stage in MongoDB's aggregation pipeline is used to perform a left outer join between two collections. It combines documents from the source collection with documents from a target collection based on a field.
db.orders.aggregate([
  {
    $lookup: {
      from: "products",       // Target collection
      localField: "productId", // Field in the source collection
      foreignField: "_id",    // Field in the target collection
      as: "productDetails"    // Alias for the joined data
    }
  }
]);

2. $bucket:
Description: The $bucket stage is used for grouping documents into "buckets" based on a specified range. This is useful for creating histograms or categorizing data.
Copy code
db.sales.aggregate([
  {
    $bucket: {
      groupBy: "$amount",           // Field to group by
      boundaries: [0, 50, 100, 200], // Range of bucket boundaries
      default: "Other",            // Default bucket for out-of-range values
      output: {
        count: { $sum: 1 },         // Count of documents in each bucket
        totalSales: { $sum: "$amount" } // Sum of 'amount' in each bucket
      }
    }
  }
]);

3. $project:
Description: The $project stage in the aggregation pipeline is used to include, exclude, or modify fields in the documents. You can reshape documents by adding new fields or transforming existing ones.
db.orders.aggregate([
  {
    $project: {
      productName: 1,         // Include 'productName' field
      totalAmount: { $multiply: ["$quantity", "$price"] } // New calculated field
    }
  }
]);