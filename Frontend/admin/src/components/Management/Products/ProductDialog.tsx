import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useProductContext } from "../../../context/ProductContext";

export const ProductDialog = () => {
  const { isAddDialogVisible: isOpen, toggleAddDialog } = useProductContext();

  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    url: "",
    price: 0,
    stock: 0,
    description: ""
  });

  const handleClose = () => {
    toggleAddDialog();
    // Reset form values when dialog is closed
    setFormValues({
      name: "",
      category: "",
      url: "",
      price: 0,
      stock: 0,
      description: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    // Handle submit logic here (e.g., add product to context or call an API)
    console.log("Product Details:", formValues);
    handleClose();
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
          <DialogHeader placeholder={""} className="">
            New Product
          </DialogHeader>
          <DialogBody placeholder={""} className="flex-1">
            <form onSubmit={e => e.preventDefault()}>
              <div className="p-0 flex flex-wrap gap-x-1 w-full">
                <div className="mb-4.5 w-[30%] sm:w-[49.5%]">
                  <input
                      type="text"
                      name="name"
                      placeholder="Enter the product name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                  />
                </div>
                <div className="mb-4.5 w-[30%] sm:w-[49.5%]">
                  <input
                      type="text"
                      name="category"
                      placeholder="Category"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formValues.category}
                      onChange={handleChange}
                      required
                  />
                </div>

                <div className="flex gap-2 w-full">
                  <div className="mb-4.5 flex-1">
                    <input
                        type="text"
                        name="url"
                        placeholder="Enter product URL"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        value={formValues.url}
                        onChange={handleChange}
                        required
                    />
                  </div>

                  <div className="mb-5.5 flex-1">
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter product price"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        value={formValues.price}
                        onChange={handleChange}
                        required
                    />
                  </div>

                  <div className="mb-4.5 flex-1">
                    <input
                        type="number"
                        name="stock"
                        placeholder="Enter the stock quantity"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        value={formValues.stock}
                        onChange={handleChange}
                        required
                    />
                  </div>
                </div>

                <div className="mb-5.5 w-[100%]">
                <textarea
                    name="description"
                    rows={8}
                    placeholder="Enter description"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={formValues.description}
                    onChange={handleChange}
                    required
                ></textarea>
                </div>
              </div>
            </form>
          </DialogBody>
          <DialogFooter placeholder={""}>
                    <Button
                        placeholder={''}
                        variant="text"
                        color="red"
                        onClick={toggleAddDialog}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        placeholder={''}
                        variant="gradient"
                        color="green"
                        onClick={handleSubmit}
                    >
                        <span>Confirm</span>
                    </Button>
          </DialogFooter>
        </Dialog>
      </>
  );
};