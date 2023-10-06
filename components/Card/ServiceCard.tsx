import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const ServiceCard = ({ item }: any) => {
  return (
    <>
      <Card className="max-w-xs mr-4 mb-4">
        <div className="p-4">
          <article>
            <h1 className="text-4xl font-medium line-clamp-2 h-20">
              {item.title}
            </h1>
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

export default ServiceCard;
