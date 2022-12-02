import { useSelector } from "react-redux";
import { Cart } from "./Components/Cart/Cart";
import { EmptyCart } from "./Components/EmptyCart/EmptyCart";

function App() {
  const cartData = useSelector((data)=>data.cart);
  return (
    <div className="App">
      {
        cartData.length > 0 ? <Cart/> : <EmptyCart/>
      }
    </div>
  );
}

export default App;
