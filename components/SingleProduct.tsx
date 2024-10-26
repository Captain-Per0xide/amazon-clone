import Image from "next/image";
import React from "react";
import Ratings from "./shared/Ratings";
import AddToCartContainer from "./AddToCartContainer";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="mt-20 flex justify-between ">
        <div>
          {singleProduct?.map((product: any) => {
            return (
              <div className="flex">
                <Image
                  className="p-6 "
                  key={product.id}
                  src={product.image}
                  alt="product"
                  width={300}
                  height={200}
                />

                <div className="ml-20 w-[70%]">
                  <h1 className="font-bold text-lg">{product.title}</h1>
                  <p className="text-wrap">{product.description}</p>
                  <Ratings ratings={product.rating} />
                  <h1 className="font-bold">{`$${product.price}`}</h1>
                </div>
              </div>
            );
          })}
        </div>
      <AddToCartContainer singleProduct={singleProduct} />
      </div>
    </div>
  );
};

export default SingleProduct;
