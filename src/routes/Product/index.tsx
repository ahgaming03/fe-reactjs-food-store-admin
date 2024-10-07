import axios from "axios";
import { useEffect, useState } from "react";
import { productCols, ProductType } from "./columns";

import { Title } from "@/components/Title";
import { FaPlus } from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";

// ui
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddProduct from "./AddProduct";
import { DataTable } from "@/components/ui/data-table";

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/products`).then((res) => res.data);

      // setProducts(response?.products); // Access responseData directly
      setProducts([
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam ",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f9663a16e68e7f59bfece0",
          name: "Com Tam",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f9666916e68e7f59bfece3",
          name: "Bun bo",
          price: 20.5,
          category: {
            _id: "66f965da16e68e7f59bfecd5",
            name: "Food",
          },
        },
        {
          _id: "66f966b716e68e7f59bfece6",
          name: "Pepsi 330ml",
          price: 20.5,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
        {
          _id: "66f966f216e68e7f59bfece9",
          name: "Coke 0.5ml",
          price: 20.55,
          category: {
            _id: "66f965ca16e68e7f59bfecd3",
            name: "Drink",
          },
        },
      ]); // Access responseData directly
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
    console.log("loading", loading);
  }, []);

  return (
    <>
      <Title>Products</Title>
      <div className="my-4 flex gap-4">
        <button
          onClick={handleFetchData}
          className="flex items-center gap-2 rounded-md border border-blue-600 bg-blue-200 px-4 py-2 text-blue-600 hover:bg-blue-500 hover:text-green-100"
        >
          <ImSpinner11 />
          <span>Refresh</span>
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
        <DataTable columns={productCols} data={products} />
      </div>
    </>
  );
}
