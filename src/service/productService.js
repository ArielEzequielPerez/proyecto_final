let cachedProducts = null;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return null;
  }
};

export const fetchProducts = async () => {
  if (cachedProducts) {
    return cachedProducts;
  }

  const products = await fetchData("https://api.escuelajs.co/api/v1/products");
  if (products) {
    cachedProducts = products;
  }
  return products || [];
};

export const fetchProductById = async (id) => {
  const products = await fetchProducts();
  return products.find((product) => product.id === parseInt(id)) || null;
};