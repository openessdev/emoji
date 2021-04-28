import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Clipboard from "react-clipboard.js"
import { OutboundLink } from "gatsby-plugin-gtag"

import generateLightColorHex from "../helpers/util"

const EmojiCard = ({ item }) => {
  const image = getImage(item.openess_images.color.png)
  return (
    <>
      <div className=" emoji-tile-wrapper col-sm-3">
        <div className="emoji-tile">
          <div
            className="emoji--frame"
            style={{
              backgroundColor: `${generateLightColorHex()}`,
            }}
          >
            <div className=" tile tooltips">
              <span className="tooltiptext">gimme</span>
              <OutboundLink href={image.images.fallback.src} download>
                <GatsbyImage className="emoji" image={image} alt={item.code} />
              </OutboundLink>
            </div>
          </div>
          <div className="emoji--description--wrapper px-2 ">
            <Clipboard className="tooltips" data-clipboard-text={item.code}>
              <span className="tooltiptext">copy to clipboard</span>
              <h6 className=" text-center emoji-code pt-2">{item.code}</h6>
            </Clipboard>
            <h6 className=" text-center emoji--description">
              {item.description}
            </h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmojiCard