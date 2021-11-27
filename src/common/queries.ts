import { graphql } from 'gatsby';

export const postFields = graphql`
  fragment postFields on Mdx {
    frontmatter {
      title
      tags
      level
      topic
      date(formatString: "MMM DD, YYYY")
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    id
    slug
    
  }
`;
