import React from "react";
import "./Product.css"
type Prop={
    id : string;
    productURL:string;
    name: string;
    price:number;
    imageURL: string
    }

export default class Product extends React.Component<Prop> {
    props : Prop;
    constructor(props : Prop){
        super(props);
        this.props=props;



    }

    render(){
        
           return <div className="product">
                <a href={this.props.productURL}>
                    <img src={this.props.imageURL} alt={name+" photo"} />
                    {/*<span>{this.props.id}</span>*/}
                    <span>{this.props.name.slice(0,8).concat("...")}</span> 
                    <span>ფასი {this.props.price}&#8382;</span>
                </a>
            </div>;
            
    }
}