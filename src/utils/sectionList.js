import navDocs from "../../content/docs/nav.yml"

const sectionListDocs = navDocs.map(item => ({
  ...item,
  directory: "docs",
}))

export { sectionListDocs }
