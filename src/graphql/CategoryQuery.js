export const getAllCategories = () => {
    return `
      allCategories (first: $firstAllCategories)  {
        edges {
          node {
            id
            title
          }
        }
      }
    `;
}