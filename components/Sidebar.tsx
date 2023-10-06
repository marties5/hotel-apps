"use client";

import { Transition } from "@headlessui/react";
import * as React from "react";
import { FiMenu, FiUser, FiX } from "react-icons/fi";

interface Props {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Props) => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

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
        <div className="h-full py-4 px-6">
          {/* Close button for mobile */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white focus:outline-none"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="hidden md:block">
            {/* Profile Icon */}
            {windowWidth < 768 && (
              <div className="bg-slate-900 py-1 px-4 mb-4">
                <FiUser className="text-white h-6 w-6" />
              </div>
            )}
          </div>
        </div>
      </Transition>

      <div className="flex flex-col min-w-full">
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
            className={`hidden md:flex items-center bg-slate-50 h-16 ${
              sidebarOpen ? "ml-64" : ""
            }`}
          >
            <FiUser className="text-white h-6 w-6" />
          </div>
        </div>
        <main className="md:ml-64 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
