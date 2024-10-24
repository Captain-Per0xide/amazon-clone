import React from "react";
import rating from "@/public/star-icon.png";
import Image from "next/image";

const Ratings = ({ ratings }: { ratings: string }) => {
    const parsedRatings = JSON.parse(ratings);

  return (
    <div className="flex">
      {
        Array(5).fill(1).map((_, index) => (
          <Image key={index} src={rating} alt="rating" width={20} height={20} />
        ))
      }
      <h1 className=" ml-2 font-medium text-[#007185] hover:text-[#ED9335]">{parsedRatings.count} ratings</h1>
    </div>
  );
};

export default Ratings;
