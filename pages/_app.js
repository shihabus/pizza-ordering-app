import "styles/normalize.css";
import "styles/globals.css";
import { OrderContextProvider } from "hooks/orderContext";

function MyApp({ Component, pageProps }) {
  return (
    <OrderContextProvider>
      <Component {...pageProps} />
    </OrderContextProvider>
  );
}

export default MyApp;
