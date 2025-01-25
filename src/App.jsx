import Ecommerce from "./components/Ecommerce";
import { EcommerceProvider } from "./features/commerce";
import "./index.css";

function App() {
  return (
    <div>
      <EcommerceProvider>
        <Ecommerce />
      </EcommerceProvider>
    </div>
  );
}

export default App;
