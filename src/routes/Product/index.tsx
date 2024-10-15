import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import clsx from "clsx";

import { productCols } from "./columns";

import { Title } from "@/components/Title";
import { FaPlus } from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";

// ui
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddProduct from "./AddProduct";
import { DataTable } from "@/components/ui/data-table";
import { fetchProducts } from "@/api/apiService";
import { IProduct } from "@/lib/types";

export default function Product() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleFetchData = async () => {
    setIsLoading(true);
    // Simulate fetching data
    fetchProducts()
      .then((data) => {
        setProducts(data as IProduct[]);
        toast({
          variant: "success",
          title: "Success fetch data",
          description: "Data fetched successfully",
        });
      })
      .catch((error) => {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Error fetch data",
          description: "Failed to fetch data",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <Title>Products</Title>
      <div className="my-4 flex gap-4">
        <button
          disabled={isLoading}
          onClick={() => !isLoading && handleFetchData()}
          className={clsx(
            "flex items-center gap-2 rounded-md border border-blue-600 bg-blue-200 px-4 py-2 text-blue-600",
            { "hover:bg-blue-500 hover:text-green-100": !isLoading },
          )}
        >
          {isLoading ? (
            <>
              <ImSpinner11 className="animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <ImSpinner11 />
              <span>Refresh</span>
            </>
          )}
        </button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 rounded-md border border-green-600 bg-green-200 px-4 py-2 text-green-600 hover:bg-green-500 hover:text-green-100">
              <FaPlus />
              <span>Add</span>
            </Button>
          </DialogTrigger>
          <AddProduct />
        </Dialog>
      </div>
      <div className="container mx-auto pb-10">
        <DataTable
          isLoading={isLoading}
          columns={productCols}
          data={products}
        />
      </div>
    </>
  );
}
