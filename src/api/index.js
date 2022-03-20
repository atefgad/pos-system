export const category = {
  pizza: "pizza",
  burger: "burger",
  drinks: "drinks",
  dessert: "dessert",
};

const Api = {
  getProductsList: (type, params) => {
    const filtered = params.filter((product) => product.category === type);
    return filtered;
  },
};

export default Api;
