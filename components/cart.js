import React, { useContext, useState } from "react"
import { Contexts } from "../useContext";
function Cart() {
    const { cartItem, emptyCart, deleteItem } = useContext(Contexts)
	const [buyBtnText, setBuyBtnText] = useState("Buy")
	// const displayTotalPrice = totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})
        const totalItemCount = cartItem.reduce((total, item) => {
            return total = total + item.price;
        }, 0);
    
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
            <i className="ri-delete-bin-line" onClick={() => deleteItem(item.id)}></i>
            <div className="song">
              <h3>{item.title}</h3>
              <span>{item.artist}</span>
            </div>
            <p className="price">{item.price}</p>
        </div>
        ))}
        <p className="totalPrice">Total: {totalItemCount} Ar</p>
        {cartItem.length > 0 
				? <button className="buy" onClick={buy}>{buyBtnText}</button>
				: <p>You have no item in your cart</p>
			}
    </div>

</>
    )
}
export default Cart;