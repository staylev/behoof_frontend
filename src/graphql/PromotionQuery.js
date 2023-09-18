export const getAllPromotions = () => {
    return `
      allPromotions (
        first: $firstAllPromotions,
        after: $afterAllPromotions,
      ) {
        edges {
          node {
            id
            title
            preview
            endTime
            description
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    `;
}