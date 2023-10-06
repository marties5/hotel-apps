import React from "react";
import BookingCard from "@/components/Card/BookingCard";
import { Button } from "../../components/ui/button";

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
  {
    id: 4,
    imageSrc: "/image.png",
    imageAlt: "",
    classes: "kelas VIP",
    title: "Presidential Suite",
    price: "800000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi asperiores explicabo nemo, accusamus reiciendis voluptatibus!",
  },
  {
    id: 5,
    imageSrc: "/image.png",
    imageAlt: "",
    classes: "kelas Deluxe",
    title: "Luxury Room",
    price: "400000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas animi dolorem fugiat deserunt reprehenderit!",
  },
  {
    id: 6,
    imageSrc: "/image.png",
    imageAlt: "",
    classes: "kelas Standard",
    title: "Standard Room",
    price: "250000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aspernatur quis saepe aut perspiciatis dolorem.",
  },
  {
    id: 7,
    imageSrc: "/image.png",
    imageAlt: "",
    classes: "kelas Suite",
    title: "Classic Suite",
    price: "350000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam vel cum excepturi odio mollitia?",
  },
  {
    id: 8,
    imageSrc: "/image.png",
    imageAlt: "",
    classes: "kelas Family",
    title: "Family Room",
    price: "300000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore harum dolor aut iste eligendi.",
  },
  {
    id: 9,
    imageSrc: "/image.png",
    imageAlt: "",
    classes: "kelas Superior",
    title: "Superior Room",
    price: "280000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum culpa voluptate atque explicabo facilis.",
  },
  {
    id: 10,
    imageSrc: "/image.png",
    imageAlt: "",
    classes: "kelas Economy",
    title: "Economy Room",
    price: "200000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, odio doloribus quo ea veritatis laudantium.",
  },
];

const booking = () => {
  return (
    <div>
      <div className="flex w-full  my-4">
        <h1 className="text-5xl font-semibold">Best Room For Your sleep</h1>
        <div className="h-12 flex gap-4 w-full ">
          <input
            type="text"
            placeholder="Find the most comfortable Rooms."
            className=" w-full px-4 max-w-lg h-12 focus:outline-none border"
          />
          <Button className="h-full w-24">Seacrh</Button>
        </div>
      </div>

      <div className="grid grid-cols-4 h-[75vh]  overflow-y-scroll ">
        {DataRooms.map((rooms: any) => (
          <BookingCard item={rooms} key={rooms.id} />
        ))}
      </div>
    </div>
  );
};

export default booking;
