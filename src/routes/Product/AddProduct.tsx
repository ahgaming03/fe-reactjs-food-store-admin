import { SubmitHandler, useForm } from "react-hook-form";

import imageDefault from "@/assets/images/default-image.png";

import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormField = {
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: File;
};

export default function AddProduct() {
  const { register, handleSubmit } = useForm<FormField>({});

  const onSubmit: SubmitHandler<FormField> = (data) => {
    console.log(data.image);
    // console.log(data);
  };

  return (
    <>
      <DialogContent className="overflow-y-scroll sm:max-h-svh">
        <DialogHeader>
          <DialogTitle>Add a product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <img src={imageDefault} alt="Image preview" />

              <Label htmlFor="image">Image</Label>
              <span className="block text-sm text-gray-500">
                Image should be less than 1MB
              </span>
              <Input
                {...register("image")}
                type="file"
                name="image"
                id="image"
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...register("name")}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product name"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  {...register("price")}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Product price"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="category">Category</Label>
              <select
                {...register("category")}
                name="category"
                id="category"
                className="rounded-md border border-gray-300 p-2"
              >
                <option value="">Select category</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
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
          <DialogFooter className="mt-4 flex justify-end gap-4">
            <DialogClose asChild>
              <button className="rounded-md border border-gray-600 bg-gray-200 px-4 text-gray-600 hover:bg-gray-500 hover:text-gray-100">
                Cancel
              </button>
            </DialogClose>
            <button
              type="reset"
              className="rounded-md border border-blue-600 bg-blue-200 px-4 py-2 text-blue-600 hover:bg-blue-500 hover:text-blue-100"
            >
              Reset
            </button>
            <button
              type="submit"
              className="rounded-md border border-green-600 bg-green-200 px-4 py-2 text-green-600 hover:bg-green-500 hover:text-green-100"
            >
              Add
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
}
