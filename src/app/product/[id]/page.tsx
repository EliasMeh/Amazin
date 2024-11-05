// app/product/[id]/page.tsx
'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Product {
  Id: number;
  Nom: string;
  description: string;
  prix: number;
  NomDuVendeur: string;
}

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Failed to fetch product:', error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.Nom}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.prix}</p>
      <p>Seller: {product.NomDuVendeur}</p>
    </div>
  );
};

export default ProductDetails;