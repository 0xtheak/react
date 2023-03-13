import React from 'react';
import CartItem from "./cartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state  = {
            products : [
                {
                    price : 999,
                    title: 'Iphone',
                    qty : 1,
                    img : '',
                    id : 1
                },
                {
                    price : 999,
                    title: 'Laptop',
                    qty : 2,
                    img : '',
                    id : 2
                }
            ]
        }

        // this.testing();
    }
    
    render () {
        const { products } = this.state;
        return (
            <div className='cart'>
                {products.map((product)=>{
                   return < CartItem product={product} key={product.id} />
                })}
                
            </div>
        );
        
    }
}



export default Cart;