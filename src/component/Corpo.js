import Esquerda from "./Esquerda.js";
import SideBar from "./SideBar.js";

export default function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />,
            <SideBar />
        </div>
    );
}