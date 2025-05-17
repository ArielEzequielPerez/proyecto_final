let cachedProducts = null;
const URL = "https://api.escuelajs.co/api/v1/products"
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

  const products = await fetchData(URL);
  if (products) {
    cachedProducts = products;
  }
  return products || [];
};

