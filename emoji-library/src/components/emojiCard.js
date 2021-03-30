import React from "react"

const EmojiCard = ({ emoji, annotation }) => {
  return (
    <>
      <div className="col-sm">
        <div className="card-wrapper">
          <header className="emoji--image">
            <button>A</button>
          </header>
          <div className="code--text">
            <button>
              <code>:T:</code>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmojiCard
