'use client'
import { useEffect, useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

interface Product {
  Id: number;
  Nom: string;
  description: string;
  prix: number;
  NomDuVendeur: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <main className='mt-32'>
        <h1 className="text-gray-400">Site de E-commerce</h1>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.Id}
              id={product.Id}
              title={product.Nom}
              description={product.description}
              price={`$${product.prix}`}
              seller={product.NomDuVendeur}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

