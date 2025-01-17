"use client";

import { formatCurrency } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  console.log(id);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price),
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{formatCurrency(total)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] rounded-md p-2 ring-1 ring-red-400"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex items-center justify-between">
        {/* QUANTITY */}
        <div className="flex w-full justify-between p-1 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </Button>
            <span>{quantity}</span>
            <Button
              onClick={() => setQuantity((prev) => (prev < 15 ? prev + 1 : 15))}
            >
              {">"}
            </Button>
          </div>
        </div>
        {/* CART BUTTON */}
        <Button className="w-56 rounded-none bg-red-500 p-4 uppercase text-white ring-1 ring-red-500">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Price;
