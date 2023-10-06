"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import * as React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ListAres, ListCustomer } from "./data";
import Avatars from "../Avatars";
import LogoutButton from "../LogoutButton";

type Role = "admin" | "customer" | "resepsionis";
const role: Role = "customer";

const List: any = role === "customer" ? ListCustomer : ListAres;

interface Props {
  children: React.ReactNode;
}
const Sidebar = ({ children }: Props) => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const paths = window.location.pathname;
  const [path, setPath] = React.useState(paths);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setSidebarOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen flex w-full">
      {/* Sidebar */}
      <Transition
        show={sidebarOpen}
        enter="transform transition duration-300 ease-in-out"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition duration-300 ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className="bg-slate-900 w-64 text-white fixed top-0 left-0 h-full z-50 md:block"
      >
        <div className="h-full py-4 px-4">
          {/* Close button for mobile */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white focus:outline-none"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>
          {/* list item sidebar-content */}
          <div className="flex flex-col justify-between lg:h-full h-[90vh] ">
            <div className="flex flex-col gap-4 flex-grow mb-auto">
              {List.map((item: any) => (
                <>
                  <Link
                    key={item.id}
                    href={item.urlTo}
                    onClick={() => setPath(item.urlTo)}
                    className={`${
                      path === item.urlTo &&
                      "bg-slate-200 rounded-lg text-slate-900"
                    } p-4`}
                  >
                    {item.name}
                  </Link>
                </>
              ))}
            </div>
            <LogoutButton />
          </div>

          {/* Sidebar Content */}
          <div className="hidden md:block h-full">
            {/* Profile Icon */}
            {windowWidth < 768 && (
              <div className="bg-slate-900 py-1 px-4 mb-4">
                <Avatars image role={role} name={role} />
              </div>
            )}
          </div>
        </div>
      </Transition>

      <div className="flex w-full flex-col min-w-full">
        <div className="overflow-auto focus:outline-none relative w-full">
          {/* Mobile Header */}
          <header className="bg-slate-50 py-4 px-6 flex justify-between items-center md:hidden shadow-lg">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white focus:outline-none"
            >
              <FiMenu className="h-6 w-6 text-black" />
            </button>
          </header>

          <div
            className={`hidden md:flex items-center justify-end px-4 bg-slate-50 h-16 ${
              sidebarOpen ? "ml-64" : ""
            }`}
          >
            <Avatars image role={role} name={role} />
          </div>
        </div>
        <main className="md:ml-64 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
