import { useWindowSize } from "usehooks-ts";
const ResponsiveView = ({ mobileView, webView }) => {

    const width = useWindowSize();
    const isMobile = width.width <= 990

    return isMobile ? mobileView : webView
}

export default ResponsiveView