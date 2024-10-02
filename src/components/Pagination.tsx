import clsx from "clsx";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface PaginationProps {
  totalItems: number;
  limit: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  limit,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / limit);

  const getPaginationNumbers = () => {
    const paginationNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) {
        paginationNumbers.push(i);
      }
    } else {
      paginationNumbers.push(1);

      if (currentPage > 3) {
        paginationNumbers.push("...");
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        paginationNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        paginationNumbers.push("...");
      }

      paginationNumbers.push(totalPages);
    }

    return paginationNumbers;
  };

  const getDisplayRange = () => {
    const start = (currentPage - 1) * limit + 1;
    const end = Math.min(currentPage * limit, totalItems);

    return { start, end };
  };

  const { start, end } = getDisplayRange();

  return (
    <>
      <nav className="flex items-center justify-between px-4">
        <div className="space-x-2 text-lg">
          <span>Showing</span>
          <span className="font-bold">
            {start}-{end}
          </span>
          <span>of</span>
          <span className="font-bold">{totalItems}</span>
        </div>
        {totalItems > 10 && (
          <div className="flex h-10 items-center -space-x-px text-base">
            {/* Previous button */}
            <button
              className={clsx(
                "ms-0 flex h-10 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-gray-700 px-4 text-gray-50",
                currentPage === 1
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer hover:bg-gray-500 hover:text-gray-100",
              )}
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaArrowLeft />
              <span className="sr-only">Previous</span>
            </button>

            {/* Pagination numbers */}

            {getPaginationNumbers().map((page, idx) => (
              <button
                key={idx}
                className={clsx(
                  "h-10 items-center justify-center border border-e-0 border-gray-300 bg-gray-700 px-4 text-gray-50",
                  currentPage === page || page === "..."
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer hover:bg-gray-500 hover:text-gray-100",
                )}
                onClick={() => typeof page === "number" && onPageChange(page)}
                disabled={page === "..." || currentPage === page}
              >
                {page}
              </button>
            ))}

            {/* Next button */}
            <button
              className={clsx(
                "ms-0 flex h-10 items-center justify-center rounded-e-lg border border-gray-300 bg-gray-700 px-4 text-gray-50",
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer hover:bg-gray-500 hover:text-gray-100",
              )}
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </nav>
    </>
  );
};
