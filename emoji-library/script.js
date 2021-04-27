const fs = require("fs")
const path = require("path")

const relativePathToPngImage = path.relative(
  __dirname,
  "emoji\\emoji-library\\src\\images\\png"
)
const pngImagePath = path.join(__dirname, relativePathToPngImage)

const emojiDir = pngImagePath

const emojiPngDir = "../images/png"
const emojiSvgDir = "../images/svg"

const getEmojiNameFromDir = async pathName => {
  let namesArray = []
  const files = await fs.promises.readdir(pathName)
  for (const file of files) {
    const holdEmojiName = path.basename(file, ".png")
    const emojiName = holdEmojiName.slice(0, -2)
    const emojiNameWithout = emojiName.substring(5).replace(/[^a-zA-Z ]/g, "")

    namesArray.push({
      name: emojiName,
      code: `:${emojiNameWithout}:`,
    })
  }
  return namesArray
}

const relativePathToJson = path.relative(
  __dirname,
  "emoji\\emoji-library\\src\\data\\emojiData.json"
)
const jsonDataPath = path.join(__dirname, relativePathToJson)

let emojiNames = getEmojiNameFromDir(emojiDir)

emojiNames
  .then(emoji => {
    let data = []
    emoji.map(om => {
      data.push(
        Object.assign(
          om,
          {
            url: "https://github.com/openessdev/emoji",
            labels: " ",
            color: "",
            source: "Sarah Kim",
            size: "201x201",
            license: "optional, unless it's under a different license",
          },
          {
            openess_images: {
              png: emojiPngDir,
              svg: emojiSvgDir,
            },
          }
        )
      )
    })
    return JSON.stringify(data)
  })
  .then(o => {
    fs.writeFile(jsonDataPath, o, err => {
      if (err) throw err
      console.log("The file has been saved!")
    })
  })
