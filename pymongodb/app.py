import pymongo
from flask import Flask, jsonify, request
from secrets import secret

connection_url = secret.get("url")
client = pymongo.MongoClient(secret)
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
    

if __name__ == "__main__":
    print("Hello World!")
    print("Database Name: ", db.name)
    print("Collection Name: ", collection.name)
    