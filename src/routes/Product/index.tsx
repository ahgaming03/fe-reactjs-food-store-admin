import { DisplayImage } from "@/components/DisplayImage";
import { Pagination } from "@/components/Pagination";
import { Spinner } from "@/components/Spinner";
import { Title } from "@/components/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";

interface IproductProps {
  _id: string;
  name: string;
  price: number;
  category: {
    name: string;
  };
}

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IproductProps[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Delete", e.currentTarget.dataset.productId);
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Edit", e.currentTarget.dataset.productId);
  };

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/products`);
      const responseData = response.data;

      setProducts(responseData?.data); // Access responseData directly
      setTotalProducts(responseData?.total); // Access responseData directly
      setLimit(responseData?.limit); // Access responseData directly
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <Title>Products</Title>
      <button
        onClick={handleFetchData}
        className="my-4 flex items-center gap-2 rounded-md border border-green-600 bg-green-200 px-4 py-2 text-green-600 hover:bg-green-500 hover:text-green-100"
      >
        <ImSpinner11 className="animate-spin" />
        <span>Refresh</span>
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-lg">
          <thead className="bg-gray-600 text-sm uppercase text-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                <input
                  id="check-all"
                  type="checkbox"
                  className="text- h-4 w-4 rounded border-gray-300 bg-gray-100"
                />
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading && (
              <tr>
                <td colSpan={6} className="">
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading &&
              products.map((item, idx) => (
                <tr key={idx} className="border-b bg-white hover:bg-gray-50">
                  <td scope="row" className="px-6 py-4">
                    <input
                      id="check-1"
                      type="checkbox"
                      className="text- h-4 w-4 rounded border-gray-300 bg-gray-100"
                    />
                  </td>
                  <td scope="row" className="px-6 py-4">
                    <DisplayImage id="" className="h-16 w-16 object-cover" />
                  </td>
                  <td scope="row" className="px-6 py-4">
                    {item.name}
                  </td>
                  <td scope="row" className="px-6 py-4">
                    {item.category.name}
                  </td>
                  <td scope="row" className="px-6 py-4">
                    ${item.price}
                  </td>
                  <td scope="row" className="px-6 py-4">
                    <div className="flex gap-3 text-2xl">
                      <button
                        onClick={handleEdit}
                        data-product-id={`${item._id}`}
                        className="text-blue-800 hover:text-blue-500"
                      >
                        <FaPencilAlt />
                      </button>
                      <button
                        onClick={handleDelete}
                        data-product-id={`${item._id}`}
                        className="text-red-700 hover:text-red-400"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <DisplayImage
        id="528A04CEDA4283D5!s1310a45a903547a1a44a85df88631789"
        className="h-16 w-16 object-cover"
      />
      <div className="pt-4">
        {!loading && (
          <Pagination
            totalItems={totalProducts}
            limit={limit}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
}
