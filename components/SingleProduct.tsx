import Image from "next/image";
import React from "react";
import Ratings from "./shared/Ratings";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="mt-20">
        {singleProduct?.map((product: any) => {
          return (
            <div className="flex">
                <Image
                  className="p-6 "
                  key={product.id}
                  src={product.image}
                  alt="product"
                  width={300}
                  height={400}
                />
              
              <div className="ml-20">
                <h1 className="font-bold text-lg">{product.title}</h1>
                <p className="text-wrap">{product.description}</p>
                <Ratings ratings={product.rating} />
                <h1 className="font-bold">{`$${product.price}`}</h1>
                <div>
                    <h1>About this item</h1>
                    <li></li>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
