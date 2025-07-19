const fetchFromApi = async (url) => {
 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
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

export const updateProduct = async (id, productData) => {
  try {
    const response = await fetch(`${URL_PRODUCTS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update product: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error.message);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${URL_PRODUCTS}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete product: ${response.status} ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error.message);
    throw error;
  }
}

export const addProduct = async (productData) => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error(`Failed to add product: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding product:", error.message);
    throw error;
  }
};