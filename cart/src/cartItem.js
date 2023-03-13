import React from 'react';

class CartItem extends React.Component {
    

    // increaseQty = () => {
    //     // this.state.qty  += 1; 
        
    //     // setState first form
    //     // this.setState({
    //     //     qty: this.state.qty + 1,
    //     // });
        

    //     // setState from 2
    //     this.setState((prevState) =>{
    //         return {
    //             qty : prevState.qty +1,
    //         }
    //     });
    // }

    // decreaseQty = () => {
    //     const { qty } = this.props.product.qty;
    //     if(qty==0){
    //         return;
    //     }
    //     this.setState((prevState) =>{
    //         return {
    //             qty : prevState.qty -1,
    //         }
    //     });
    // }

    // testing () {
    //     const promise = new Promise((resolve, reject) =>{
    //          setTimeout(() =>{
    //             resolve('done');
    //          }, 1000);
    //     });
    //     promise.then(() => {
    //         this.setState({qty : this.state.qty + 10 });

    //         console.log('state 1', this.state);
    //     });
    // }
    render (){
        console.log("this.props", this.props.product);

        const {price, title, qty, img} = this.props.product;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img  style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={ { fontSize : 25} }>{title}</div>
                    <div style={ { color : '#777'} }>{price}</div>
                    <div style={ { color : '#777'} }>{qty}</div>
                    <div className='cart-item-action'>
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            onClick={this.increaseQty} 
                        />
                        <img onClick={this.decreaseQty} alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/542/542724.png" />

                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        backgroundColor : '#ccc'
    }
}

export default CartItem;