import { featuredProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-primary">
      {/* WRAPPER */}
      <div className="flex w-max">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="flex h-[60vh] w-screen flex-col items-center justify-around p-4 transition-all duration-300 hover:bg-fuchsia-50 md:w-[50vw] xl:h-[90vh] xl:w-[33vw]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative w-full flex-1 transition-all duration-500 ease-in-out hover:rotate-[6deg]">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">
                {formatCurrency(item.price)}
              </span>
              <Button>Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
