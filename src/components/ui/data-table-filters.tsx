import { Input } from "./input";
import { Table } from "@tanstack/react-table";

interface DataTableColumnFiltersProps<TData> {
  table: Table<TData>;
}

export default function DataTableFilters<TData>({
  table,
}: DataTableColumnFiltersProps<TData>) {
  return (
    <>
      <div className="flex items-center">
        <Input
          placeholder="Search..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-xs rounded-md border p-2"
        />
      </div>
    </>
  );
}
