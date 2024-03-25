// Write your code here

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <>
          <div className="cartsum">
            <h1 className="ordertotal">
              <span className="orderlabel">Order Total:</span>Rs {total}{" "}/-
            </h1>
            <p className="totalitems">{cartList.length} Items in cart</p>
            <button type="button" className="checkoutbtn">Checkout</button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
