import React from "react";
import Image from "next/image";
import imager from "../public/image.png";
const Avatars = ({ image, role, name }: any) => {
  return (
    <>
      <div className="flex flex-row font-medium gap-4 w-fit bg-zinc-100 p-1 px-4 rounded-lg items-center">
        <article>
          <p className="-mb-2">{name}</p>
          <p>
            <i className="font-normal text-sm">{role}</i>
          </p>
        </article>
        <Image
          src={imager}
          width={32}
          height={32}
          alt="image"
          className="bg-zinc-600 rounded-full"
        />
      </div>
    </>
  );
};

export default Avatars;
