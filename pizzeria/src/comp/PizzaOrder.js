import React from 'react';
import axios from 'axios';
// import red from './red.png';
// import green from './green.png';
import './PizzaOrder.css'

export default class PizzaOrder extends React.Component {
    
        constructor(){
        super();
        this.state={
            pizza:[]
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:3001/YourOrder")
        .then((response)=> this.setState({
            pizza: response.data
            
        })).catch(err=>console.log(err))
   
    }

    addtocart(name){
      
        alert(name+' added to the cart successfully!');

    }

    render() {
        return (
            <div class = "container">
                {this.state.pizza.map((data)=>
                    {
                        return(  
                        <div class="col-lg-6 col-sm-12 col-md-12 card " id="c-style">

                                <div class="col-md-3 col-lg-3">
                                    <div class="row">
                                        <b>{data.name}</b>
                                    </div>
                                    <br/>
                                    <div class="row">
                                        <img src={data.type} alt="imgType" />
                                    </div><br/>
                                    <div class="row">
                                        <b>₹&nbsp;{data.price}</b>
                                    </div>                                   
                                </div>
                                   
                                <div class="col-md-7 col-lg-7">
                                    <div class="row">
                                        {data.description}
                                    </div><br/>
                                    <div class="row">
                                         <b>Ingredients : </b>
                                         {data.ingredients.join(', ')}
                                    </div>
                                    <br/>
                                    <div class="row">
                                        <b>Toppings : </b>
                                        {data.topping.join(', ')}
                                    </div>
                                </div>
                                <div class="col-md-2 col-lg-2">
                                    <div class="row">
                                    <img src={data.image} height="100px" width="100px" alt="pizza" />
                                    </div>
                                    <br></br>
                                    <div class="row">
                                    <button class="btn btn-warning" onClick={() => this.addtocart(data.name)} >Add to cart</button>
                                    </div>
                                </div>
                        </div>
                        )    
                })}
                <div class="copyright text-center">
                    <p>Copyrights @ 2021 Pizzeria. All rights reserved</p>
                </div>
            </div>
        )
    }
}