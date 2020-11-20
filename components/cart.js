import React from "react"
function Cart() {
    return (
        <div>
            <div class="song-list">
                <i class="ri-delete-bin-line"></i>
                <div className="song">
                  <h3>Title</h3>
                  <span>Artist</span>
                </div>
                <p>0 Ar</p>
            </div>
            <p className="totalPrice">Total:</p>
            <button className="buy">Buy</button>
        </div>

    )
}
export default Cart;