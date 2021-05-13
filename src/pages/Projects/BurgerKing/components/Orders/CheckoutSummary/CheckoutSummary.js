import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it taste well!</h1>
            <div style={{width: '100%', margin: 'auto'}}></div>
            <Burger ingredients={props.ingredients}/>
            <Button 
                btnType='Danger'
                clicked>CANCEL</Button>
            <Button 
                btnType='Success'
                clicked>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;

