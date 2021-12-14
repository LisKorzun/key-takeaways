import { graphql } from 'gatsby';

export const postFields = graphql`
  fragment postFields on Mdx {
    id
    slug
    timeToRead
    frontmatter {
      title
      tags
      level
      date(formatString: "MMM DD, YYYY")
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
