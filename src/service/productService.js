const cache = new Map();

const fetchFromApi = async (url) => {
  if (cache.has(url)) {
    return cache.get(url);
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    cache.set(url, data);
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return null;
  }
};

const URL_PRODUCTS = "https://api.escuelajs.co/api/v1/products";
const URL_CATEGORIES = "https://api.escuelajs.co/api/v1/categories";

export const fetchProducts = () => fetchFromApi(URL_PRODUCTS);
export const fetchCategories = () => fetchFromApi(URL_CATEGORIES);

