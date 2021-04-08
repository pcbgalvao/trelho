import React from "react";

import Menu from "./Menu";
import BoardSidebar from "./BoardSidebar";
import PlayGround from "./PlayGround";

const LandingPage = (props) => {
    return (
    <div>
        <Menu />
        <BoardSidebar />
        <PlayGround />
    </div>);
}
export default LandingPage;

