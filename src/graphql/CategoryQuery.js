export const getAllCategories = () => {
    return `
      allCategories   {
        edges {
          node {
            id
            title
          }
        }
      }
    `;
}