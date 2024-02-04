import { useState } from "react";
import Cart from "./Cart";
import Img from './img/shopping-cart.png';
import logo from './img/react.png'
import './app.css'

const items = [
  { id: 1, name: "Camera", price: 10, img: "https://www.instaxcanada.ca/wp-content/uploads/2022/09/CNY_PR34666_mini11_PURPLE_FRONT_sRGB_V1b_for-web.png", description:"Description about this product." },
  { id: 2, name: "Phone", price: 20, img: "https://motorolauk.vtexassets.com/arquivos/ids/159187/T2.png?v=638073285343370000", description:"Description about this product." },
  { id: 3, name: "Headphones", price: 30, img: "https://mi-srbija.rs/storage/product/images/c0/0f/redmi-buds-4-pro-4615.png", description:"Description about this product." },
  { id: 4, name: "Tags", price: 40, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104_FMT_WHH?wid=532&hei=582&fmt=png-alpha&.v=1617761673000", description:"Description about this product." },
  { id: 5, name: "TV", price: 50, img: "https://images.samsung.com/is/image/samsung/rs-hd-t4300-ue32t4302akxxh-frontblack-229517272?$650_519_PNG$", description:"Description about this product." },
  { id: 6, name: "Speakers", price: 60, img: "https://assets.bosecreative.com/transform/f574ddcc-222b-4dd5-be1f-fa5f0ce781bc/SLF_product-silo_black_bundle_1200x1022?io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit", description:"Description about this product." },
  { id: 7, name: "Chargers", price: 70, img: "https://images.samsung.com/is/image/samsung/p6pim/ph/ep-ta800nbtgtw/gallery/ph-wall-charger-for-super-fast-charging-25w-366003-ep-ta800nbtgtw-359192176?$650_519_PNG$", description:"Description about this product." },
  { id: 8, name: "Power banks", price: 80, img: "https://mi-srbija.rs/storage/product/images/65/78/20000-mah-redmi-power-bank-329-5438.png", description:"Description about this product." },

];

function App() {
  const [cartVisibility, setCartVisibiity] = useState(false);
  const [itemsCart, setItemsCart] = useState([]);
  const addItemCart = (item) => {
    const newItem = {...item, count: 1}
    setItemsCart([...itemsCart, newItem])
  }
  const onQuantity = (itemId, count) => {
    setItemsCart(itemsCart.map((item) => {
      if(item.id === itemId) {
        return {...item, count}
      }
      return item
    }))}
  const onItemRemove = (itemId) => {
    setItemsCart(itemsCart.filter((item) => item.id !== itemId))
  }
  return (
    <div className="App">
      <Cart visibility = {cartVisibility} item={itemsCart} 
      onClose={() => setCartVisibiity(false)}
      onQuantity={onQuantity} onItemRemove={onItemRemove}/>
      <nav className="nav">
        <img className="logo" src={ logo } />
        <h1>Shopping cart</h1>
        <button className="cartBtn" onClick={() => setCartVisibiity(true)}><img className="cartBtnImg" src={Img}/>
        {itemsCart.length > 0 && <span className="cartNumber">{itemsCart.length}</span>}
        </button>
      </nav>
      <div className="store">
        <h2>Items</h2>
        <div className="items">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <img className="img" src={item.img} alt={item.name} />
              <div className="itemInfo">
              <h3 className="name">{item.name}</h3>
              <p className="desc">{item.description}</p>
              <p className="price">{item.price}$</p>
              <button className="addToCartBtn" onClick={() => addItemCart(item)}>Add to cart</button>
              </div>
            </div>))}
        </div>
      </div>
    </div>
  );
}

export default App;
