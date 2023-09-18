export const getAllRestaurants = () => {
    return `
      allRestaurants {
        edges {
          node {
            id
            address
            geoPosition
          }
        }
      }
    `;
}