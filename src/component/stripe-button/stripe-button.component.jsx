import React from 'react'

import './stripe-button.styles.scss'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51KAWW5SH8wo4i4KS8iFnoC9MLb4Fe724CqX70UtKywt96eE2E2D9JPDAoIOOQeAMeiPtDfl0qV6s6k9syMkkYzjQ00MZ3oCEXk'

const onToken = token =>{
    console.log(token)
    alert('payment is sucessfull!!')
}
    return (
        <div>
        <StripeCheckout
        className ='size'
        label = 'Pay Now'
        name = 'CRWN Clothing Ltd'
        billingAddress
        shippingAddress
        image ='https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey ={publishableKey}
        />
        </div>
    )
}

export default StripeCheckoutButton