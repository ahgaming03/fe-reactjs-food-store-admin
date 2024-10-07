import { ColumnDef } from "@tanstack/react-table";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import defaultImage from "@/assets/images/default-image.png";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

export type ProductType = {
  _id: string;
  name: string;
  price: number;
  image?: string;
  category: {
    _id: string;
    name: string;
  };
};

export const productCols: ColumnDef<ProductType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="bg-white"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <img
            // src={row.getValue("image")}
            src={defaultImage}
            alt={row.getValue("name")}
            className="h-16 w-16 rounded-md object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },

  {
    accessorKey: "category.name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
      }).format(amount);

      return <div className="font-semibold">{formatted}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const id = row.original._id;

      const handleEdit = () => [console.log("Edit", id)];

      const handleDelete = () => [console.log("Delete", id)];

      return (
        <>
          <div className="flex gap-3 text-2xl">
            <button
              onClick={handleEdit}
              data-product-id={`${id}`}
              className="text-blue-800 hover:text-blue-500"
            >
              <FaPencilAlt />
            </button>
            <button
              onClick={handleDelete}
              data-product-id={`${id}`}
              className="text-red-700 hover:text-red-400"
            >
              <FaTrashAlt />
            </button>
          </div>
        </>
      );
    },
  },
];
