export const fetchProducts = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error.message);
      return [];
    }
  };