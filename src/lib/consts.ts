const STORE_ID = "02b4e3ee-b56f-4d7d-a145-59cb3d73df74";

export const STORE_ENDPOINTS = {
  GET_STORE: `https://ecommerce.gelatoapis.com/v1/stores/${STORE_ID}/products`,
  GET_PRODUCT: (id: string) => `https://ecommerce.gelatoapis.com/v1/stores/${STORE_ID}/products/${id}`,
  GET_PRICE: (id: string, country: string, currency: string) => `https://product.gelatoapis.com/v3/products/${id}/prices?country=${country}&currency=${currency}`,
};