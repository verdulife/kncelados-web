import { STORE_ENDPOINTS } from '@/lib/consts';

const headers = {
  'Content-Type': 'application/json',
  'X-API-KEY': import.meta.env.SECRET_STORE
};

function getPrice(id: string) {
  return fetch(STORE_ENDPOINTS.GET_PRICE(id), { method: 'GET', headers });
}

export async function getStore() {
  const res = await fetch(STORE_ENDPOINTS.GET_STORE, {
    method: 'GET', headers: {
      'X-API-KEY': import.meta.env.SECRET_STORE
    }
  });
  const store = await res.json();
  const { products } = store;
  const productList = products.map(async (product: any) => {
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
    const res = await getPrice(id);
    const price = await res.json();

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
      price
    };
  });

  return await Promise.all(productList);
}