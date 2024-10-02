import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

import { AiFillDashboard } from "react-icons/ai";
import { IoIosAlert } from "react-icons/io";
import { FaCircleArrowLeft, FaSquarePhoneFlip } from "react-icons/fa6";
import { GiRoastChicken } from "react-icons/gi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import clsx from "clsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLink: { name: string; path: string; icon: ReactNode }[] = [
  { name: "Dashboard", path: "/", icon: <AiFillDashboard /> },
  { name: "Products", path: "/products", icon: <GiRoastChicken /> },
  { name: "Categories", path: "/categories", icon: <BiSolidCategoryAlt /> },
  { name: "About-us", path: "/about", icon: <IoIosAlert /> },
  { name: "Contact", path: "/contact", icon: <FaSquarePhoneFlip /> },
];

export default function Sidebar() {
  const [isColaped, setIsColaped] = useState(false);

  const handleColapse = () => {
    setIsColaped(!isColaped);
  };

  return (
    <>
      <aside className="g select-none bg-blue-600 px-2 pt-4" translate="no">
        <nav className="">
          <ul className="space-y-2">
            {navLink.map((item, index) => (
              <li
                key={index}
                className="rounded-md bg-blue-500 px-2 py-1 text-gray-50 hover:bg-blue-800 hover:text-white"
              >
                <Link to={item.path} className="flex items-center gap-2">
                  <span className="text-3xl">{item.icon}</span>
                  {!isColaped && (
                    <span className="text-xl font-semibold">{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
            <hr />
            <li className="flex justify-center pt-2">
              <FaCircleArrowLeft
                onClick={handleColapse}
                className={clsx(
                  "cursor-pointer text-4xl text-white opacity-80 hover:opacity-100",
                  { "rotate-180": isColaped },
                )}
              />
            </li>
          </ul>
        </nav>
        <div
          className={clsx(
            "mt-10 flex items-center justify-around text-3xl text-white",
            { "flex-col gap-4": isColaped },
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
    </>
  );
}
