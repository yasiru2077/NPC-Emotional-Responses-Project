import React from "react";
import demoImg from "../../assets/Thumbnail.png";
import npcFishermen from "../../assets/Fisherman_fish3 (1).gif";
import "./demo.css";

function Demo() {
  return (
    <section className="npc-demo">
      <div>
        <img src={demoImg} alt="npc-demo-bg-image" />
        <img
          src={npcFishermen}
          className="fishermen"
          alt="fishermen npc animation"
        />
      </div>
    </section>
  );
}

export default Demo;
