import React, { StrictMode, useEffect, useState } from "react";
import axios from 'axios'
import Product from "./Product";
import Recomended from "./Recomended";
import Statistics from "./Statistics";
import "./Content.css"

const baseContent={ 
    min_price_product:{
        id :"6",
        productURL:"",
        imageURL:"",
        name:"",
        price: 0
    },
    max_price_product:{
        id :"7",
        productURL:"",
        imageURL:"",
        name:"",
        price: 0
    },
    min_price : 0,
    max_price : 0,
    avg_price : 0,
    items_looked_up :0,
    other_recommendations:[{
        id :"8",
        productURL:"",
        imageURL:"",
        name:"",
        price: 0
    },
    {
        id :"9",
        productURL:"",
        imageURL:"",
        name:"",
        price: 0
    },
    {
        id :"10",
        productURL:"",
        imageURL:"",
        name:"",
        price: 0
    },]

}

const cont={
         min_price_product:{
        id :"4",
        productURL:"https://www.mymarket.ge/ka/pr/28718984/teqnika/kompiuterebi-aqsesuarebi/Laptop-kompiuterebi/DELL-i7-6-Taoba-8GB-DDR4--128GB-SSD--2-videokartiT?OfferType=SuperVip",
        imageURL:"https://static.my.ge/mymarket/photos/large/0527/28718984_1.jpg?v=1",
        name:"DELL i7, 6 თაობა/ 8GB DDR4/ 128GB SSD/ 2 ვიდეოკარტით",
        price:500
    },
    max_price_product:{
        id :"5",
        productURL:"https://www.mymarket.ge/ka/pr/28718984/teqnika/kompiuterebi-aqsesuarebi/Laptop-kompiuterebi/DELL-i7-6-Taoba-8GB-DDR4--128GB-SSD--2-videokartiT?OfferType=SuperVip",
        imageURL:"https://static.my.ge/mymarket/photos/large/0527/28718984_1.jpg?v=1",
        name:"DELL i7, 6 თაობა/ 8GB DDR4/ 128GB SSD/ 2 ვიდეოკარტით",
        price:500
    },
    min_price : 0,
    max_price : 0,
    avg_price : 0,
    items_looked_up :0,
    other_recommendations:[{
        id :"1",
        productURL:"https://www.mymarket.ge/ka/pr/28718984/teqnika/kompiuterebi-aqsesuarebi/Laptop-kompiuterebi/DELL-i7-6-Taoba-8GB-DDR4--128GB-SSD--2-videokartiT?OfferType=SuperVip",
        imageURL:"https://static.my.ge/mymarket/photos/large/0527/28718984_1.jpg?v=1",
        name:"DELL i7, 6 თაობა/ 8GB DDR4/ 128GB SSD/ 2 ვიდეოკარტით",
        price:500
    },
    {
        id :"2",
        productURL:"https://www.mymarket.ge/ka/pr/28718984/teqnika/kompiuterebi-aqsesuarebi/Laptop-kompiuterebi/DELL-i7-6-Taoba-8GB-DDR4--128GB-SSD--2-videokartiT?OfferType=SuperVip",
        imageURL:"https://static.my.ge/mymarket/photos/large/0527/28718984_1.jpg?v=1",
        name:"DELL i7, 6 თაობა/ 8GB DDR4/ 128GB SSD/ 2 ვიდეოკარტით",
        price:500
    },
    {
        id :"3",
        productURL:"https://www.mymarket.ge/ka/pr/28718984/teqnika/kompiuterebi-aqsesuarebi/Laptop-kompiuterebi/DELL-i7-6-Taoba-8GB-DDR4--128GB-SSD--2-videokartiT?OfferType=SuperVip",
        imageURL:"https://static.my.ge/mymarket/photos/large/0527/28718984_1.jpg?v=1",
        name:"DELL i7, 6 თაობა/ 8GB DDR4/ 128GB SSD/ 2 ვიდეოკარტით",
        price:500
    }]
}
type product={}
type props={
    search:string
}
export default function(props:props){
    const [content,setContent]=useState(baseContent)
    useEffect(()=>{
        axios.get("http://127.0.0.1:5000/")
        .then(res=>{setContent(res.data),
            console.log(res)
        }).catch(err=>console.log(err))
    },[])    
    
    if(props.search==""){
        return <div></div> 
    }
    return <div className="content"> 
    <div className="mm">
        <Product id={content.min_price_product.id} productURL={content.min_price_product.productURL} 
        name={content.min_price_product.name} price={content.min_price_product.price} 
        imageURL={content.min_price_product.imageURL} ></Product>

        <Product id={content.max_price_product.id} productURL={content.max_price_product.productURL} 
        name={content.max_price_product.name} price={content.max_price_product.price} 
        imageURL={content.max_price_product.imageURL} ></Product>
    </div>
    <Statistics min={content.min_price} max={content.max_price} avarage={content.avg_price} n={content.items_looked_up}></Statistics>
    <Recomended products={[ new Product(content.other_recommendations[0]),
                            new Product(content.other_recommendations[1]),
                            new Product(content.other_recommendations[2])
                        ]}></Recomended> 
    </div>
        
            
    
}
