import React from "react";

function Home() {
    var img2 = "https://specifications-pro.com/wp-content/uploads/2020/06/Xiaomi-Redmi-9C-600x600.jpg"
    return (
        <>
         
            <header>
                <div>Web logo</div>
                <div> <img src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/40C057/external-add-to-cart-essential-collection-bearicons-gradient-bearicons.png"/> <span>55</span></div>
            </header>


          <div className="container">
          <div className="card">
                <div className="image-wrapper item">
                    <img src="https://5.imimg.com/data5/PX/WQ/MN/SELLER-38271709/mobile-500x500.png" alt="pimg" />
                </div>
                <div className="pinfo">
                    <h4>Samsung</h4>
                    <h4>$100</h4>
                </div>
                <div className="add_to_cart">
                    <button type="button" className="btn">add to cart</button>
                </div>
            </div>
          <div className="card">
                <div className="image-wrapper item">
                    <img src={img2}/>
                </div>
                <div className="pinfo">
                    <h4>Redmi</h4>
                    <h4>$1200</h4>
                </div>
                <div className="add_to_cart">
                    <button type="button" className="btn">add to cart</button>
                </div>
            </div>
          </div>
        
        </>
    )
}
export default Home;