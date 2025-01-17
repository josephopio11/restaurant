import Price from "@/components/home/Price";
import { singleProduct } from "@/lib/data";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className="flex h-screen flex-col justify-around p-4 text-red-500 md:flex-row md:items-center md:gap-8 lg:px-20 xl:px-40">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative h-1/2 w-full md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="flex h-1/2 flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
