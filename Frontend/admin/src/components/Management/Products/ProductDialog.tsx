import { FC } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useProductContext } from "../../../context/ProductContext";


export const ProductDialog = () => {
  const { showAddDialog: isOpen, toggleAddDialog } = useProductContext()!;


  const handleClose = () => {
    // setIsOpen(false);
    toggleAddDialog()
    console.log("IsOpen: ", isOpen);
  };


  return (
    <>
      <Dialog
        placeholder={""}
        open={isOpen}
        handler={handleClose}
        size="lg"
        style={{ width: "80vw", height: "80vh" }}
        className="flex flex-col"
      >
        <DialogHeader placeholder={""} className="px-4 py-2">
          New Product
        </DialogHeader>
        <DialogBody placeholder={""} className="flex-1 py-2">
          <form action="#">
            <div className="p-0 flex flex-wrap gap-x-1 w-full">
              <div className="mb-4.5 w-[30%] sm:w-[49.5%]">
                <input
                  type="text"
                  placeholder="Enter the product name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5 w-[30%] sm:w-[49.5%]">
                <input
                  type="text"
                  placeholder="category"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="flex gap-2 w-full">
                <div className="mb-4.5 flex-1">
                  <input
                    type="text"
                    placeholder="Enter product url"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-5.5 flex-1">
                  <input
                    type="number"
                    placeholder="Enter product price"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5 flex-1">
                  <input
                    type="number"
                    placeholder="Enter the stock quantity"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-5.5 w-[100%]">
                <textarea
                  rows={8}
                  placeholder="Enter description"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>
            </div>
          </form>
        </DialogBody>
        <DialogFooter placeholder={""}>
          <Button
            placeholder={""}
            variant="gradient"
            color="blue"
            onClick={handleClose}
          >
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
