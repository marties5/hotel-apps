import React from "react";
import ServiceCard from "@/components/Card/ServiceCard";

const DataRooms: any[] = [
  {
    id: 1,
    imageSrc: "/image.png",
    imageAlt: "",
    classes: "kelas Utama",
    title: "Sweet Rooms",
    price: "200000",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat incidunt cupiditate fuga mollitia quae.",
  },
  {
    id: 2,
    imageSrc: "/image.png",
    imageAlt: "",
    classes: "kelas Deluxe",
    title: "Luxury Suite",
    price: "350000",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam velit illum voluptas culpa tempora.",
  },
  {
    id: 3,
    imageSrc: "/image.png",
    imageAlt: "",
    classes: "kelas Premium",
    title: "Executive Penthouse",
    price: "500000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum incidunt ad cumque rem quia.",
  },
];

const service = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold my-10">Selamat datang di Undefined Hotel</h1>
      <div className="grid grid-cols-3 halo">
        {DataRooms.map((rooms: any) => (
          <ServiceCard item={rooms} key={rooms.id} />
        ))}
      </div>
    </div>
  );
};

export default service;
