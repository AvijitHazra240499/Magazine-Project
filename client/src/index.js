import reactdom from "react-dom/client"
import App from "./App"

const _root=reactdom.createRoot(document.getElementById("root"))
_root.render(
    <App/>
)