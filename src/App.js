import { useEffect } from "react";
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);
  return <h1 className="font-loader">Hello</h1>;
}

export default App;
