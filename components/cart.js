import React, { useContext, useState } from "react"
import { Contexts } from "../useContext";
function Cart() {
    const { cartItem } = useContext(Contexts)
	const [buyBtnText, setBuyBtnText] = useState("Buy")
	// const displayTotalPrice = totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})
    // const calculateTotal = () => {
    //     const totalItemCount = cartItem.reduce((total, item) => {
    //         return total + item.price;
    //     }, 0);
    
    //     setTotalItemCount(totalItemCount);
    // }
    function buy() {
		setBuyBtnText("ordering...")
            setTimeout(() => {
                console.log("order placed");
				emptyCart()
				setBuyBtnText("Buy")
            }, 3000)    
        }

    return (
        <>
        <div>
        {cartItem.map(item => (
        <div className="song-list"  key={item.id}>
            <i className="ri-delete-bin-line"></i>
            <div className="song">
              <h3>{item.title}</h3>
              <span>{item.artist}</span>
            </div>
            <p className="price">{item.price}</p>
        </div>
        ))}
        <p className="totalPrice">Total:</p>
        {cartItem.length > 0 
				? <button className="buy" onClick={buy}>{buyBtnText}</button>
				: <p>You have no item in your cart</p>
			}
    </div>

</>
    )
}
export default Cart;