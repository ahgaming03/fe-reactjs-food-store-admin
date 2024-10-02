import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="self-center text-center">
        <div className="mx-auto text-9xl font-bold" data-text="404">
          404
        </div>
        <p className="mb-5 text-gray-800">Page Not Found</p>
        <p className="mb-0 text-gray-500">
          It looks like you found a glitch in the matrix...
        </p>
        <Link
          to="/"
          className="flex items-center justify-center gap-2 text-blue-500 hover:text-blue-800 hover:underline"
        >
          <FaArrowLeft />
          <span>Back to Dashboard</span>
        </Link>
      </div>
    </>
  );
}
