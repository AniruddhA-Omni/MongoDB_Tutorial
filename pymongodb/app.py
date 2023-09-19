import pymongo
from flask import Flask, jsonify, request
from secrets import secret
import urllib

connection_url = secret.get("url")
client = pymongo.MongoClient(urllib.parse.quote_plus(connection_url))
db = client["sample_training"]
collection = db["routes"]

def post_routes(route, num):
    if num == 1:
        collection.insert_one(route)
        return
    elif num > 1:
        collection.insert_many(route)
        return
    return
        
def get_routes(query):
    collection.find(query)
    
def sample():
    s = collection.find().limit(5)
    for i in s:
        print(i)

if __name__ == "__main__":
    print("Hello World!")
    print("Database Name: ", db.name)
    print("Collection Name: ", collection.name)
    # print("Number of Documents: ", collection.count_documents({}))
    # print("Number of Documents: ", collection.count_documents({"airplane": {"$exists": True}}))
    print("Total databases: ", client.list_database_names())