import { graphql } from 'gatsby';

export const postFields = graphql`
  fragment postFields on Mdx {
    frontmatter {
      title
      tags
      level
      topic
      date(formatString: "MMMM DD, YYYY")
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
