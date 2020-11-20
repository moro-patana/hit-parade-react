import React from "react"
function Cart() {
    return (
        <div>
            <i class="ri-delete-bin-line"></i>
            <div className="song">
              <h3>{song.title}</h3>
              <span>{song.artist}</span>
            </div>
            <p>0 Ar</p>
            <p className="totalPrice">Total:</p>
            <button className="buy">Buy</button>
        </div>

    )
}
export default Cart;