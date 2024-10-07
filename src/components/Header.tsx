import defaultImage from "@/assets/images/default-image.png";
import { AppDispatch } from "@/states/store";
import { toggle } from "@/states/sidebar/sidebarSlice";

import { FaGripLines } from "react-icons/fa";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <header className="flex select-none items-center justify-between border-b border-b-blue-500 bg-blue-600 px-4 py-2 shadow">
        <div className="">
          <img
            src={defaultImage}
            alt="avatar"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
        <ul className="flex items-center gap-4">
          <li className="max-md:hidden">
            <img
              src={defaultImage}
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
          </li>
          <li className="md:hidden">
            <button
              onClick={() => dispatch(toggle())}
              className="rounded-md bg-blue-300 p-2 text-white hover:bg-blue-700"
            >
              <FaGripLines />
            </button>
          </li>
        </ul>
      </header>
    </>
  );
}
