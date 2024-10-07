import { ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/states/store";
import { toggle } from "@/states/sidebar/sidebarSlice";

import { AiFillDashboard } from "react-icons/ai";
import { IoIosAlert, IoMdClose } from "react-icons/io";
import { FaCircleArrowLeft, FaSquarePhoneFlip } from "react-icons/fa6";
import { GiRoastChicken } from "react-icons/gi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLink: { name: string; path: string; icon: ReactNode }[] = [
  { name: "Dashboard", path: "/", icon: <AiFillDashboard /> },
  { name: "Products", path: "/products", icon: <GiRoastChicken /> },
  { name: "Categories", path: "/categories", icon: <BiSolidCategoryAlt /> },
  { name: "About-us", path: "/about", icon: <IoIosAlert /> },
  { name: "Contact", path: "/contact", icon: <FaSquarePhoneFlip /> },
];

export default function Sidebar() {
  const isOpen = useSelector((state: RootState) => state.sidebarToggle.isOpen);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(toggle());
  };

  return (
    <>
      <aside
        className="select-none bg-blue-600 px-2 pt-4 max-md:hidden"
        translate="no"
      >
        <nav>
          <ul className="space-y-2">
            {navLink.map((item, index) => (
              <li
                key={index}
                className="rounded-md bg-blue-500 px-2 py-1 text-gray-50 hover:bg-blue-800 hover:text-white"
              >
                <Link to={item.path} className="flex items-center gap-2">
                  <span className="text-3xl">{item.icon}</span>
                  {isOpen && (
                    <span className="text-xl font-semibold">{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
            <hr />
            <li className="flex justify-center pt-2">
              <FaCircleArrowLeft
                onClick={handleOpen}
                className={clsx(
                  "cursor-pointer text-4xl text-white opacity-80 hover:opacity-100",
                  { "rotate-180": !isOpen },
                )}
              />
            </li>
          </ul>
        </nav>
        <div
          className={clsx(
            "mt-10 flex items-center justify-around text-3xl text-white",
            { "flex-col gap-4": !isOpen },
          )}
        >
          <Link
            to={"https://github.com/ahgaming03"}
            className="opacity-80 hover:opacity-100"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/huy-nguyen-918415313/"}
            className="opacity-80 hover:opacity-100"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </div>
      </aside>

      {/* mobile */}
      <aside
        className={clsx(
          "fixed right-0 top-0 z-40 h-screen overflow-y-auto bg-blue-600 p-4 transition-transform md:hidden",
          { "translate-x-full": !isOpen },
          { "transform-none": isOpen },
        )}
      >
        <nav>
          <div className="text-end">
            <button
              onClick={handleOpen}
              className="mb-2 rounded-md bg-gray-100 p-1 text-lg font-semibold hover:bg-blue-700 hover:text-white"
            >
              <IoMdClose />
            </button>
          </div>
          <ul className="space-y-2">
            {navLink.map((item, index) => (
              <li
                key={index}
                className="rounded-md bg-blue-500 px-2 py-1 text-gray-50 hover:bg-blue-800 hover:text-white"
              >
                <Link to={item.path} className="flex items-center gap-2">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xl font-semibold">{item.name}</span>
                </Link>
              </li>
            ))}
            <hr />
          </ul>
        </nav>
        <div
          className={clsx(
            "mt-10 flex items-center justify-around text-3xl text-white",
          )}
        >
          <Link
            to={"https://github.com/ahgaming03"}
            className="opacity-80 hover:opacity-100"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/huy-nguyen-918415313/"}
            className="opacity-80 hover:opacity-100"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </div>
      </aside>
      {/* backdrop */}
      {isOpen && (
        <div
          onClick={handleOpen}
          className="fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80 md:hidden"
        ></div>
      )}
    </>
  );
}
