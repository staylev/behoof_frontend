import {gql} from "@apollo/client";

export const getFood = gql`
query MyQuery {
  allFoods(first: 5) {
    edges {
      node {
        id
        price
        title
        weight
        preview
      }
    }
  }
}
`