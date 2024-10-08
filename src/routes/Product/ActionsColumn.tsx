import { useState } from "react";
import { Row } from "@tanstack/react-table";

import { IProduct } from "@/lib/types";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export const ActionsColumn = ({ row }: { row: Row<IProduct> }) => {
  const id = row.original._id;
  const name = row.original.name;
  const product = row.original;

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleEdit = () => {
    setOpenEditDialog(true);
  };

  const handleDelete = () => {
    setOpenDeleteDialog(true);
  };
  return (
    <>
      {isDelete ? (
        <span className="font-semibold text-red-600">Deleted</span>
      ) : (
        <div className="flex gap-3 text-2xl">
          <button
            onClick={handleEdit}
            className="text-blue-600 hover:text-blue-500"
          >
            <FaPencilAlt />
          </button>

          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-400"
          >
            <FaTrashAlt />
          </button>

          {openEditDialog && (
            <EditProduct
              product={product}
              id={id}
              isOpen={openEditDialog}
              setOpen={setOpenEditDialog}
            />
          )}

          <DeleteProduct
            id={id}
            name={name}
            isOpen={openDeleteDialog}
            setOpen={setOpenDeleteDialog}
            setDeleted={setIsDelete}
          />
        </div>
      )}
    </>
  );
};
