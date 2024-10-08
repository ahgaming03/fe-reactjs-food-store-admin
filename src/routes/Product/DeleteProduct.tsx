import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AiOutlineLoading } from "react-icons/ai";
import clsx from "clsx";
import axios from "axios";

type FormField = {
  name: string;
};

interface DeleteProductProps {
  id: string;
  name: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  setDeleted: (isDeleted: boolean) => void;
}

export default function DeleteProduct({
  id,
  name,
  isOpen,
  setOpen,
  setDeleted,
}: DeleteProductProps) {
  const { toast } = useToast();
  const {
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({});

  const onSubmit: SubmitHandler<FormField> = async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.delete(`/api/products/${id}`).then((res) => {
        return res.data;
      });

      toast({
        variant: "success",
        title: "Product deleted",
        description: response.message,
      });
      setDeleted(true);
      setOpen(false);
    } catch (error) {
      setError("root", { message: `${error}` });
      toast({
        variant: "destructive",
        title: "Failed to delete product",
        description: "Please try again later",
      });
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="max-h-svh overflow-y-scroll">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold uppercase">
              Delete a product
            </DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.root && (
              <div className="text-sm text-red-500">{errors.root.message}</div>
            )}
            <span className="text-xl">
              <span>Do you want to delete</span>{" "}
              <span className="font-bold">"{name}"</span>?
            </span>

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
                type="submit"
                className={clsx(
                  "rounded-md border border-red-600 bg-red-200 px-4 py-2 text-red-600",
                  { "hover:bg-red-500 hover:text-red-100": !isSubmitting },
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="flex items-center gap-2">
                      <AiOutlineLoading className="animate-spin" />
                      <span>Deleting...</span>
                    </div>
                  </>
                ) : (
                  "Delete"
                )}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
