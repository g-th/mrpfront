#!/usr/bin/env python
# encoding: utf-8
import json
from flask import Flask, jsonify
from flask_cors import CORS,cross_origin
app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
    return jsonify({
         "min_price_product":{
        "id":"4",
        "productURL":"https://www.mymarket.ge/ka/pr/28718984/teqnika/kompiuterebi-aqsesuarebi/Laptop-kompiuterebi/DELL-i7-6-Taoba-8GB-DDR4--128GB-SSD--2-videokartiT?OfferType=SuperVip",
        "imageURL":"https://static.my.ge/mymarket/photos/large/0527/28718984_1.jpg?v=1",
        "name":"DELL i7, 6 თაობა/ 8GB DDR4/ 128GB SSD/ 2 ვიდეოკარტით",
        "price":500
    },
    "max_price_product":{
        "id" :"5",
        "productURL":"https://www.mymarket.ge/ka/pr/28718984/teqnika/kompiuterebi-aqsesuarebi/Laptop-kompiuterebi/DELL-i7-6-Taoba-8GB-DDR4--128GB-SSD--2-videokartiT?OfferType=SuperVip",
        "imageURL":"https://static.my.ge/mymarket/photos/large/0527/28718984_1.jpg?v=1",
        "name":"DELL i7, 6 თაობა/ 8GB DDR4/ 128GB SSD/ 2 ვიდეოკარტით",
        "price":500
    },
    "min_price" : 0,
    "max_price" : 0,
    "avg_price" : 0,
    "items_looked_up" :0,
    "other_recommendations":[{
        "id" :"1",
        "productURL":"https://www.mymarket.ge/ka/pr/28718984/teqnika/kompiuterebi-aqsesuarebi/Laptop-kompiuterebi/DELL-i7-6-Taoba-8GB-DDR4--128GB-SSD--2-videokartiT?OfferType=SuperVip",
        "imageURL":"https://static.my.ge/mymarket/photos/large/0527/28718984_1.jpg?v=1",
        "name":"DELL i7, 6 თაობა/ 8GB DDR4/ 128GB SSD/ 2 ვიდეოკარტით",
        "price":500
    },
    {
        "id" :"2",
        "productURL":"https://www.mymarket.ge/ka/pr/28718984/teqnika/kompiuterebi-aqsesuarebi/Laptop-kompiuterebi/DELL-i7-6-Taoba-8GB-DDR4--128GB-SSD--2-videokartiT?OfferType=SuperVip",
        "imageURL":"https://static.my.ge/mymarket/photos/large/0527/28718984_1.jpg?v=1",
        "name":"DELL i7, 6 თაობა/ 8GB DDR4/ 128GB SSD/ 2 ვიდეოკარტით",
        "price":500
    },
    {
        "id" :"3",
        "productURL":"https://www.mymarket.ge/ka/pr/28718984/teqnika/kompiuterebi-aqsesuarebi/Laptop-kompiuterebi/DELL-i7-6-Taoba-8GB-DDR4--128GB-SSD--2-videokartiT?OfferType=SuperVip",
        "imageURL":"https://static.my.ge/mymarket/photos/large/0527/28718984_1.jpg?v=1",
        "name":"DELL i7, 6 თაობა/ 8GB DDR4/ 128GB SSD/ 2 ვიდეოკარტით",
        "price":500
    }]
})
app.run()