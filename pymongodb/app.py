import pymongo
from flask import Flask, jsonify, request

client = pymongo.MongoClient("mongodb+srv://ani123:MongoDB123@dmo.dfwdvje.mongodb.net/")
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
        
def get_routes():
    return collection.find()
if __name__ == "__main__":
    print("Hello World!")
    print("Database Name: ", db.name)
    print("Collection Name: ", collection.name)
    