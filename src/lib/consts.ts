export const STORE_ENDPOINTS = {
  GET_STORE: "https://ecommerce.gelatoapis.com/v1/stores/02b4e3ee-b56f-4d7d-a145-59cb3d73df74/products",
  GET_PRICE: (id: string) => `https://product.gelatoapis.com/v3/products/${id}/prices`
};