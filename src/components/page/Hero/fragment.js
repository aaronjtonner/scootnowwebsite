module.exports = () => {
  return `
    title
    subheader
    description
    image {
        localFile {
            childImageSharp {
                fluid {
                    src
                }
            }
        }
    }
    `
}
