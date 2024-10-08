import { ColumnDef } from "@tanstack/react-table";

import defaultImage from "@/assets/images/default-image.png";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Link } from "react-router-dom";
import Money from "@/components/Money";
import { ActionsColumn } from "./ActionsColumn";
import { DisplayImage } from "@/components/DisplayImage";
import { IProduct } from "@/lib/types";

export const productCols: ColumnDef<IProduct>[] = [
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
      const id = row.original.image?.id;
      return (
        <div className="flex h-20 w-20 items-center gap-2">
          {id ? (
            <DisplayImage imageId={id} className="rounded-md object-cover" />
          ) : (
            <img
              src={defaultImage}
              alt={row.getValue("name")}
              className="rounded-md object-cover"
            />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const id = row.original._id;
      return (
        <Link to={`/products/${id}`}>
          <div className="line-clamp-2 font-semibold">
            {row.getValue("name")}
          </div>
        </Link>
      );
    },
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

      return (
        <div className="font-semibold">
          <Money amount={amount} />
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <ActionsColumn row={row} />;
    },
  },
];
