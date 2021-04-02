import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Clipboard from "react-clipboard.js"
import generateLightColorHex from "../helpers/util"

const EmojiCard = ({ item, column }) => {
  const image = getImage(item.openess_images.color.png)

  return (
    <>
      <div
        className={`col-sm-6 col-md-4 ${
          column === false ? "col-lg-3" : "col-lg-4"
        }`}
      >
        <div className="card-wrapper">
          <div className={`${column === false ? false : "horizontal__layout"}`}>
            <div
              className={`emoji--image ${
                column === false ? false : "emoji--image__modified"
              }`}
              style={{
                backgroundColor: `${generateLightColorHex()}`,
              }}
            >
              <span>
                <GatsbyImage
                  image={image}
                  alt={item.code}
                  style={{
                    width: `${column === false ? false : "50%"}`,
                  }}
                />
              </span>
            </div>
            <div
              className={`code--text text-white px-1 ${
                column === false ? false : "code--text__modified "
              }`}
            >
              <span className="">
                <Clipboard data-clipboard-text={item.code}>
                  {item.code}
                </Clipboard>
                <div className="description">{item.name}</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmojiCard
