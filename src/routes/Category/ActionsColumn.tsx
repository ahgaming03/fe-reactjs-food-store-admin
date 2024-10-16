import { useState } from "react";
import { Row } from "@tanstack/react-table";

import { ICategory } from "@/lib/types";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Edit from "./Edit";
import Delete from "./Delete";

export const ActionsColumn = ({ row }: { row: Row<ICategory> }) => {
  const id = row.original._id;
  const name = row.original.name;
  const category = row.original;

  const [isDelete, setIsDelete] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

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
            <Edit
              data={category}
              isOpen={openEditDialog}
              setOpen={setOpenEditDialog}
            />
          )}

          <Delete
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
