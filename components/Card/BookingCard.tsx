import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const BookingCard = ({ item }: any) => {
  return (
    <>
      <Card className="max-w-xs mr-4 mb-4">
        <Image
          src={item.imageSrc}
          alt={item.imageSrc}
          width={200}
          height={200}
          className="w-full h-44 object-cover"
        />
        <div className="p-4">
          <article>
            <Badge>{item.classes}</Badge>
            <h1 className="text-4xl font-medium line-clamp-2 h-20">
              {item.title}
            </h1>
            <h2 className="text-xl py-4">Price Rp.{item.price}/Night</h2>
            <p className="text-slate-400 h-16 line-clamp-3 leading-5 tracking-wide ">
              {item.description}
            </p>
          </article>
          <Button className="w-full mt-5">Detail</Button>
        </div>
      </Card>
    </>
  );
};

export default BookingCard;
