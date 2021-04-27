import React, { useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Clipboard from "react-clipboard.js"
import ReactTooltip from "react-tooltip"

import generateLightColorHex from "../helpers/util"

const EmojiCard = ({ item }) => {
  // const color = useRef(generateLightColorHex())

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
            <div className=" tile" data-tip="gimme">
              <ReactTooltip />
              <a href={image.images.fallback.src} download>
                <GatsbyImage image={image} alt={item.code} />
              </a>
            </div>
          </div>
          <div className="emoji--description--wrapper px-2">
            <ReactTooltip />
            <Clipboard data-clipboard-text={item.code}>
              <h6
                className=" text-center emoji-code pt-2"
                data-tip="copy to clipboard"
              >
                {item.code}
              </h6>
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
