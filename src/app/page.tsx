'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CardHeader, CardFooter, CardBody, Avatar } from '@nextui-org/react';

interface Product {
  Id: number;
  Nom: string;
  description: string;
  prix: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <main className='mt-32'>
        <h1 className="text-gray-400">Site de E-commerce</h1>
        <div className="products">
          {products.map((product) => (
            <div key={product.Id} className="product">
              <h2>{product.Nom}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.prix}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

