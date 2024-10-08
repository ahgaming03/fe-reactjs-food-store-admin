import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IProduct } from "@/lib/types";

import imageDefault from "@/assets/images/default-image.png";

import { Title } from "@/components/Title";
import Money from "@/components/Money";
import { Spinner } from "@/components/Spinner";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch product by id
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios
          .get(`/api/products/${id}`)
          .then((res) => res.data);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <Title>Product Detail</Title>
      <Link
        to={"/products"}
        className="flex items-center gap-1 text-blue-600 hover:font-semibold hover:underline"
      >
        <FaArrowLeft />
        <span>Back</span>
      </Link>
      {loading && <Spinner />}
      {product === null && !loading && (
        <div className="text-2xl">
          <strong>Invalid product id: </strong>
          <span className="text-red-500">{id}</span>
        </div>
      )}
      {product && (
        <div className="mt-3 max-w-screen-sm space-y-4">
          <div className="flex flex-col gap-2">
            <img src={imageDefault} id="img-preview" alt="Image preview" />
          </div>

          <div className="text-xl">
            <span className="font-bold">Name: </span>
            <span>{product?.name}</span>
          </div>
          <div className="text-xl">
            <span className="font-bold">Price: </span>
            <span>{product?.price && <Money amount={product.price} />}</span>
          </div>
          <div className="text-xl">
            <span className="font-bold">Category: </span>
            <span>{product?.category.name}</span>
          </div>
          <div className="text-xl">
            <span className="font-bold">Description: </span>
            <div className="border p-2">{product?.description}</div>
          </div>
        </div>
      )}
    </>
  );
}
