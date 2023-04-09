import { useState } from "react";
import Home from "./Pages/Home";
import { Helmet } from "react-helmet";
import { GiGamepadCross } from "react-icons/all";
import { renderToString } from "react-dom/server";

function App() {
  const [count, setCount] = useState(0);
  const StyledCartIcon = () => (
    <GiGamepadCross size={25} style={{ color: "#2CBCE9" }} />
  );

  // Convert the styled icon to a base64 string
  const cartIconString = renderToString(<StyledCartIcon />);
  const cartIconBase64 = btoa(cartIconString);

  return (
    <div className="App  ">
      {/* its buggy  */}
      <Helmet>
        <title className="italic">Game On</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`data:image/svg+xml;base64,${cartIconBase64}`}
        />

        <meta name="description" content="This is a description" />
      </Helmet>

      <Home />
    </div>
  );
}

export default App;
