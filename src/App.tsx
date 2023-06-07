import MobileView from "./pages/mobileView";
import WebView from "./pages/webView";
import ResponsiveView from "./responsiveView";


function App() {
  return (
    <>
<ResponsiveView mobileView={<MobileView />} webView={<WebView />} />
    </>
  );
}

export default App;
