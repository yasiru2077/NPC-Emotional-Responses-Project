import React from "react";
import Demo from "../../components/demo/demo";
import "./home-page.css"
import NpcChat from "../../components/npc-chat/npc-chat";

function HomePage() {
  return <div className="home-page">
    <Demo/>
    <NpcChat/>
  </div>;
}

export default HomePage;
