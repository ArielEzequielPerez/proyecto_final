export const orderByOptions = {
  PRECIO_ASC: "De menor a mayor",
  PRECIO_DESC: "De mayor a menor",
  TITLE_A_Z: "Alfabéticamente ascendente",
  TITLE_Z_A: "Alfabéticamente descendente",
};

const comparators = {
  PRECIO_ASC: (a, b) => a.price - b.price,
  PRECIO_DESC: (a, b) => b.price - a.price,
  TITLE_A_Z: (a, b) => a.title.localeCompare(b.title),
  TITLE_Z_A: (a, b) => b.title.localeCompare(a.title),
};


export function sortProducts(products, selectedOrder) {
    const comparator = comparators[selectedOrder];
    return comparator ? [...products].sort(comparator) : [...products];
  }

export function filterProducts(products, searchTerm, selectedCategory) {
  return products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" ||
      product.category.id === parseInt(selectedCategory);
    return matchesSearch && matchesCategory;
  });
}
