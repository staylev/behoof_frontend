export const getAllFoods = () => {
    return `
      allFoods (first: $firstAllFoods) {
        edges {
          node {
            id
            price
            title
            weight
            preview
            previewDescription
          }
        }
      }
    `;
}

export const getFood = () => {
    return `
      food (id: $foodId) {
        id
        title
        preview
        composition
        description
        price
        proteins
        carbohydrates
        fats
        kilocalories
        weight
      }
    `;
}