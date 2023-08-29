import {gql} from "@apollo/client";

export const getAllCategory = gql`
query allCategories {
  allCategories {
    edges {
      node {
        id
        title
      }
    }
  }
}`