import { STORE_ENDPOINTS } from '@/lib/consts';

const headers = {
  'Content-Type': 'application/json',
  'X-API-KEY': import.meta.env.SECRET_STORE
};

export async function getPrice(id: string, country = "ES", currency = 'EUR') {
  try {
    const res = await fetch(STORE_ENDPOINTS.GET_PRICE(id, country, currency), { method: 'GET', headers });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(id: string) {
  const res = await fetch(STORE_ENDPOINTS.GET_PRODUCT(id), { method: 'GET', headers });
  const product = await res.json();
  return product;
}

export async function getStore() {
  const res = await fetch(STORE_ENDPOINTS.GET_STORE, { method: 'GET', headers });
  const store = await res.json();
  const { products } = store;

  return products.map((product: any) => {
    const {
      id,
      title,
      description,
      previewUrl,
      createdAt,
      updatedAt,
      category,
      variants,
      productVariantsOptions,
      metadata,
    } = product;

    return {
      id,
      title,
      description,
      previewUrl,
      createdAt,
      updatedAt,
      category,
      variants,
      productVariantsOptions,
      metadata,
    };
  });
}