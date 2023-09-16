export const getAllPromotions = () => {
    return `
      allPromotions (first: $firstAllPromotions) {
        edges {
          node {
            id
            title
            preview
            endTime
            description
          }
        }
      }
    `;
}