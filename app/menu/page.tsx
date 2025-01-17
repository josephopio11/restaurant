import { Button } from "@/components/ui/button";
import { menu } from "@/lib/data";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col items-center p-4 md:h-[calc(100vh-9rem)] md:flex-row lg:px-20 xl:px-40">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="h-1/3 w-full bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="text-3xl font-bold uppercase">{category.title}</h1>
            <p className="my-8 text-sm">{category.desc}</p>
            <Button
              variant={"secondary"}
              // className={`hidden sm:block bg-${category.color} text-${category.color === "black" ? "white" : "primary"} rounded-md px-4 py-2`}
            >
              Explore
            </Button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
