import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

import imageDefault from "@/assets/images/default-image.png";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineLoading } from "react-icons/ai";
import clsx from "clsx";
import { fetchCategory } from "@/api/apiService";

type FormField = {
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: FileList | null;
};

export default function AddProduct() {
  const { toast } = useToast();
  const defaultValues = {
    name: "",
    price: 0,
    category: "",
    description: "",
    image: null,
  };
  const {
    register,
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    defaultValues: defaultValues,
  });
  const [category, setCategory] = useState<{ _id: string; name: string }[]>([]);

  const changeImage = (image: string) => {
    const img = document.getElementById("img-preview") as HTMLImageElement;
    img.src = image;
  };

  const imagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        changeImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      changeImage(imageDefault);
    }
  };

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", `${data.price}`);
      formData.append("category", data.category);
      formData.append("description", data.description || "");
      formData.append("image", data.image ? data.image[0] : "");

      const response = await axios
        .post("/api/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data);

      toast({
        variant: "success",
        title: "Product added",
        description: response.message,
      });

      handleReset();
    } catch (error) {
      setError("root", { message: `${error}` });
      toast({
        variant: "destructive",
        title: "Failed to add product",
        description: "Please try again later",
      });
    }
  };

  const handleReset = () => {
    reset(defaultValues);
    changeImage(imageDefault);
  };

  useEffect(() => {
    fetchCategory().then((data) =>
      setCategory(data as { _id: string; name: string }[]),
    );
  }, []);

  return (
    <>
      <DialogContent className="max-h-svh overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="font-bold uppercase">
            Add a product
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <img src={imageDefault} id="img-preview" alt="Image preview" />

              <Label htmlFor="image">Image</Label>
              <span className="block text-sm text-gray-500">
                Image should be less than 1MB
              </span>
              <Input
                {...register("image", {
                  required: "Image is required",
                  validate: {
                    lessThan1MB: (value) =>
                      (value && value[0].size <= 1024 * 1024) ||
                      "Image should be less than 1MB",
                  },
                })}
                onChange={imagePreview}
                type="file"
                name="image"
                id="image"
                className="rounded-md border border-gray-300 p-2"
              />
              {errors.image && (
                <span className="text-sm text-red-500">
                  {errors.image.message}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product name"
                  className="rounded-md border border-gray-300 p-2"
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  {...register("price", {
                    required: "Price is required",
                    valueAsNumber: true,
                    min: { value: 0, message: "Price must be >= 0" },
                  })}
                  type="number"
                  name="price"
                  id="price"
                  min={0}
                  placeholder="Product price"
                  className="rounded-md border border-gray-300 p-2"
                />
                {errors.price && (
                  <span className="text-sm text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="category">Category</Label>
              <select
                {...register("category", {
                  required: "Category is required",
                })}
                name="category"
                id="category"
                className="rounded-md border border-gray-300 p-2"
              >
                <option value="">Select category</option>
                {category.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span className="text-sm text-red-500">
                  {errors.category.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                {...register("description")}
                name="description"
                id="description"
                placeholder="Product description"
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>
          {errors.root && (
            <span className="text-sm text-red-500">{errors.root.message}</span>
          )}
          <DialogFooter className="mt-4 flex justify-end gap-4">
            <DialogClose asChild>
              <button
                disabled={isSubmitting}
                className={clsx(
                  "rounded-md border border-gray-600 bg-gray-200 px-4 py-2 text-gray-600",
                  { "hover:bg-gray-500 hover:text-gray-100": !isSubmitting },
                )}
              >
                Cancel
              </button>
            </DialogClose>
            <button
              disabled={isSubmitting}
              onClick={handleReset}
              type="button"
              className={clsx(
                "rounded-md border border-blue-600 bg-blue-200 px-4 py-2 text-blue-600",
                { "hover:bg-blue-500 hover:text-blue-100": !isSubmitting },
              )}
            >
              Reset
            </button>
            <button
              disabled={isSubmitting}
              type="submit"
              className={clsx(
                "rounded-md border border-green-600 bg-green-200 px-4 py-2 text-green-600",
                { "hover:bg-green-500 hover:text-green-100": !isSubmitting },
              )}
            >
              {isSubmitting ? (
                <>
                  <div className="flex items-center gap-2">
                    <AiOutlineLoading className="animate-spin" />
                    <span>Adding...</span>
                  </div>
                </>
              ) : (
                "Add"
              )}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
}
