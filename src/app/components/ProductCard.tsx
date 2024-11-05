'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ProductData {
  id: number;
  title: string;
  description: string;
  price: string;
  seller: string;
}

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = "https://images.unsplash.com/photo-1590935217856-51bb2c0f53d4";
  e.currentTarget.alt = "Product image unavailable";
};

const ProductCard: React.FC<ProductData> = ({ id, title, description, price, seller }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <Image
        src="/assets/teslaphoto.jpg" // Use the static image
        alt={title}
        width={150}
        height={150}
        onError={handleImageError}
        className="rounded-full"
      />
      <div className="ml-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{description}</p>
        <p className="text-lg font-bold">{price}</p>
        <p>Seller: {seller}</p>
      </div>
    </div>
  );
};

export default ProductCard;