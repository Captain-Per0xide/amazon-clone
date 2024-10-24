import Image from "next/image";
import React from "react";
import Ratings from "./shared/Ratings";

import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  return (
    <div className="cursor-pointer" onClick={()=>{
      router.push(`/product/${product.id}`)
    }}>
      <div className="bg-zinc-300 flex items-center justify-center rounded-md h-fit overflow-hidden">
        <Image
        className="mix-blend-multiply p-6 "
          src={product.image}
          alt={product.title}
          width={200}
          height={300}
        />
      </div>
        <h1 className="font-bold mb-3">{product.title}</h1>
        <p className="text-wrap">{`${product.description.substring(0,40)}`}...</p>
        <p className="font-bold">${`${product.price}`}</p>
        <Ratings ratings={product.rating} />
    </div>
  );
};

export default ProductCard;
