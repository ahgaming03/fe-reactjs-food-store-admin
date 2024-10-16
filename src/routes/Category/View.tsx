import { ICategory } from "@/lib/types";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ViewProps {
  data: ICategory;
}

export default function View({ data }: ViewProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="line-clamp-2 cursor-pointer font-semibold">
            {data.name}
          </div>
        </DialogTrigger>
        <DialogContent className="max-h-svh overflow-y-scroll">
          <DialogHeader className="border-b-2">
            <DialogTitle className="text-3xl font-bold uppercase">
              Information
            </DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <div>
            <strong>Name: </strong>
            {data.name}
          </div>
          <div>
            <div>
              <strong>Description:</strong>
            </div>
            {data.description}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
