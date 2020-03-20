import slugify from "slugify"

export default (contentId, directory) => {
  const [content, hash] = contentId.split("#")
  const filename = slugify(content) + ".html" + (hash ? `#${hash}` : "")

  return directory ? `/${directory}/${filename}` : filename
}
