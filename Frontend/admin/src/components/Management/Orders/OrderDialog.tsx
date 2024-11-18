import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";
import { order } from "../../../types/order";
import { useOrderContext } from '../../../context/OrderContext';

export const OrderDialog = ()=> {
    const {isAddOrderDialogVisible:open, toggleAddOrderDialog: handleOpen} = useOrderContext()
    const [formValues, setFormValues] = useState<Partial<order>>({
        name: "",
        price: 0,
        invoiceDate: "",
        status: "",
        customerName: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = () => {
        // Handle submit logic here
        console.log("Form Values:", formValues);
        handleOpen();
    };

    return (
        <>
            <Dialog placeholder={''} open={open} handler={handleOpen}>
                <DialogHeader placeholder={''}>Create a new order</DialogHeader>
                <DialogBody placeholder={''}>
                    <form>
                        <div className="my-3">
                            <Input
                                placeholder={''}
                                crossOrigin={''}
                                type="text"
                                name="name"
                                label="Product Name"
                                value={formValues.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="my-3">
                            <Input
                                type="number"
                                placeholder={''}
                                crossOrigin={''}
                                name="price"
                                label="Price"
                                value={formValues.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="my-3">
                            <Input
                                placeholder={''}
                                crossOrigin={''}
                                type="date"
                                name="invoiceDate"
                                label="Invoice Date"
                                value={formValues.invoiceDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="my-3">
                            <Input
                                placeholder={''}
                                crossOrigin={''}
                                type="text"
                                name="status"
                                label="Status"
                                value={formValues.status}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="my-3">
                            <Input
                                type="text"
                                name="customerName"
                                placeholder={''}
                                crossOrigin={''}
                                label="Customer Name"
                                value={formValues.customerName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </form>
                </DialogBody>
                <DialogFooter placeholder={''}>
                    <Button
                        placeholder={''}
                        variant="text"
                        color="red"
                        onClick={handleOpen}
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
}