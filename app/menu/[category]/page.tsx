import { Button } from "@/components/ui/button";
import { pizzas } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-primary">
      {pizzas.map((pizza) => (
        <Link
          href={`/product/${pizza.id}`}
          key={pizza.id}
          className="group flex h-[60vh] w-full flex-col justify-between border-b-2 border-r-2 border-primary p-4 even:bg-fuchsia-50 sm:w-1/2 lg:w-1/3"
        >
          {pizza.img && (
            <div className="relative h-[80%]">
              <Image
                src={pizza.img}
                fill
                alt=""
                className="object-contain transition-all duration-300 ease-in-out hover:rotate-[6deg]"
              />
            </div>
          )}
          <div className="flex items-center justify-between">
            <h1 className="p-2 text-2xl font-bold uppercase">{pizza.title}</h1>
            <h2 className="text-xl font-bold group-hover:hidden">
              {formatCurrency(pizza.price)}
            </h2>
            <Button className="hidden group-hover:block">Add to Cart</Button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
