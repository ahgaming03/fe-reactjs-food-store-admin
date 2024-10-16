import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

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
import { AiOutlineLoading } from "react-icons/ai";
import clsx from "clsx";
import { createCategory } from "@/api/apiService";

type FormField = {
  name: string;
  description?: string;
};
export default function Create() {
  const { toast } = useToast();
  const defaultValues = {
    name: "",
    description: "",
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

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      const formData = new URLSearchParams();
      formData.append("name", data.name);
      if (data.description) formData.append("description", data.description);
      await createCategory(formData).then((response) => {
        toast({
          variant: "success",
          title: "Category added",
          description: `${response}`,
        });
      });

      handleReset();
    } catch (error) {
      setError("root", { message: `${error}` });
      toast({
        variant: "destructive",
        title: "Failed to add category",
        description: "Please try again later",
      });
    }
  };

  const handleReset = () => {
    reset(defaultValues);
  };

  return (
    <>
      <DialogContent className="max-h-svh overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="font-bold uppercase">
            Add a category
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name", {
                  required: "Name is required",
                  maxLength: { value: 50, message: "Max 50 characters" },
                })}
                type="text"
                name="name"
                id="name"
                placeholder="Category name"
                className="rounded-md border border-gray-300 p-2"
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                {...register("description")}
                name="description"
                id="description"
                placeholder="Category description"
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
