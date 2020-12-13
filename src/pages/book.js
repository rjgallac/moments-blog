import React from "react"
import Layout from "../components/layout"

const BookPage = ({ data, location }) => 
{
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <main>
                <h2>Book</h2>
                <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html}} />

                
            </main>
        </Layout>
    )
}

export default BookPage

export const bookPageQuery = graphql`
  query BookPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter:{frontmatter:{templateKey:{eq:"book-page"}}}) {
      edges {
      
        node {
          id,
          frontmatter{
            templateKey,
            title
          }
          html
        }
      }
    }
    
  }
`