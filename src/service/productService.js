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
  return (await fetchData("https://api.escuelajs.co/api/v1/products")) || [];
};

export const fetchProductById = async (id) => {
  return await fetchData(`https://api.escuelajs.co/api/v1/products/${id}`);
};