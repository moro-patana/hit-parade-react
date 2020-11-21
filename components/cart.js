import React, { useContext } from "react"
import { Contexts } from "../useContext";
function Cart() {
    const { cartItem } = useContext(Contexts)
    return (
        <>
        <div>
        {cartItem.map(item => (
        <div class="song-list"  key={item.id}>
            <i class="ri-delete-bin-line"></i>
            <div className="song">
              <h3>{item.title}</h3>
              <span>{item.artist}</span>
            </div>
            <p className="price">{item.price}</p>
        </div>
        ))}
        <p className="totalPrice">Total:</p>
        <button className="buy">Buy</button>
    </div>

</>
    )
}
export default Cart;