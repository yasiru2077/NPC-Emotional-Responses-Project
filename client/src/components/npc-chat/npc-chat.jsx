import React from "react";
import "./npc-chat.css";

function NpcChat() {
  return (
    <section className="chat-bot-container">
      <div className="chat-bot">
        <h1>Maren the fishermen v1.0</h1>
        <div className="chat-function-container">
          <div className="text-showcase">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
          <div>
            <form onSubmit="" className="user-responses-form">
              <div className="">
                <input
                  type="text"
                  className=""
                  placeholder="ENTER MESSAGE..."
                />
                <button type="submit" className="">
                  Enter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NpcChat;
