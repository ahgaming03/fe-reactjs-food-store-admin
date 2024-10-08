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

export const fetchCategories = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/categories?sort=name&order=asc`)
      .then((res) => {
        const response = res.data;
        resolve(response.data);
      })
      .catch((error) => {
        reject("Error fetching category" + error);
      });
  });
};

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

export const createCategory = (data: FormData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/api/categories`, data)
      .then((res) => {
        const response = res.data;
        resolve(response.message);
      })
      .catch((error) => {
        reject("Error creating category" + error);
      });
  });
};

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
        reject("Error creating product" + error);
      });
  });
};

export const updateProduct = (id: string, data: FormData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`/api/products/${id}`, data)
      .then((res) => {
        const response = res.data;
        resolve(response.message);
      })
      .catch((error) => {
        reject("Error updating product" + error);
      });
  });
};
