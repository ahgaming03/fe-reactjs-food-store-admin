import axios from "axios";

export const fetchImage = (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/views/images/${id}`)
      .then((res) => {
        const response = res.data;
        const data = response.data;
        const base64Image = data.base64Image;
        resolve(base64Image);
      })
      .catch((error) => {
        reject("Error fetching image" + error);
      });
  });
};

// List of categories
export const fetchCategories = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/categories`)
      .then((res) => {
        const response = res.data;
        resolve(response.data);
      })
      .catch((error) => {
        reject("Error fetching category" + error);
      });
  });
};

// Fetch single category
export const fetchCategory = (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/categories/${id}`)
      .then((res) => {
        const response = res.data;
        resolve(response.data);
      })
      .catch((error) => {
        reject("Error fetching category" + error);
      });
  });
};

// Create a new category
export const createCategory = (data: URLSearchParams) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/api/categories`, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        const response = res.data;
        resolve(response.message);
      })
      .catch((error) => {
        const errorMessage = error.response.data.error;
        reject("Error creating a category: " + errorMessage);
      });
  });
};

// Update a category
export const updateCategory = (id: string, data: URLSearchParams) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`/api/categories/${id}`, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        const response = res.data;
        resolve(response.message);
      })
      .catch((error) => {
        const errorMessage = error.response.data.error;
        reject("Error updating category: " + errorMessage);
      });
  });
};

// Delete a category
export const deleteCategory = (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`/api/categories/${id}`)
      .then((res) => {
        const response = res.data;
        resolve(response.message);
      })
      .catch((error) => {
        reject("Error deleting category: " + error);
      });
  });
};

// List of products
export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/products`)
      .then((res) => {
        const response = res.data;
        resolve(response.products);
      })
      .catch((error) => {
        reject("Error fetching products" + error);
      });
  });
};

// Fetch single product
export const fetchProduct = (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => {
        const response = res.data;
        resolve(response.product);
      })
      .catch((error) => {
        reject("Error fetching product" + error);
      });
  });
};

// Create a new product
export const createProduct = async (data: FormData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/api/products`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const response = res.data;
        resolve(response.message);
      })
      .catch((error) => {
        reject("Error creating a product:" + error);
      });
  });
};

// Update a product
export const updateProduct = (id: string, data: FormData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`/api/products/${id}`, data)
      .then((res) => {
        const response = res.data;
        resolve(response.message);
      })
      .catch((error) => {
        reject("Error updating product: " + error);
      });
  });
};

// Delete a product
export const deleteProduct = (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`/api/products/${id}`)
      .then((res) => {
        const response = res.data;
        resolve(response.message);
      })
      .catch((error) => {
        reject("Error deleting product: " + error);
      });
  });
};
