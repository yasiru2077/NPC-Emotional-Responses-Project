import React from 'react'
import "./npc-chat.css"

function NpcChat() {
  return (
    <section className='chat-bot-container'>
        <div className='chat-bot'>
            <h1>Maren the fishermen v1.0</h1>
            <div>
            <form onSubmit="">
            <div className="">
              <input
                type="text"
                className=""
                placeholder="ENTER MESSAGE..."
              />
              <button 
                type="submit"
                className=""
              >
                SEND
              </button>
            </div>
          </form>
            </div>
        </div>
    </section>
  )
}

export default NpcChat