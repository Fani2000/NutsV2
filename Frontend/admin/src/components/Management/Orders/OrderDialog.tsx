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
import { useAddOrderMutation, useGetCustomerQuery } from "../../../gql/graphql";

export const OrderDialog = () => {
    const [formValues, setFormValues] = useState<Partial<order>>({
        name: "",
        price: 0,
        invoiceDate: "",
        status: "",
        customerName: ""
    });

    // prettier-ignore
    const { isAddOrderDialogVisible: open, toggleAddOrderDialog: handleOpen} = useOrderContext();

    const [addOrder] = useAddOrderMutation();

    const {data: customerInfo} = useGetCustomerQuery({
        variables: {
            name: formValues!.customerName!
        }
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async () => {
        console.log("Form Values:", formValues);

        try {
            if (customerInfo) {
                console.log("Customer: ", customerInfo);

                const result = await addOrder({
                    variables: {
                        input: {
                            customerId: customerInfo.customers?.nodes![0].customerId,
                            orderDate: new Date(formValues.invoiceDate!),
                            status: formValues.status!,
                            totalAmount: formValues.price!,
                        }
                    }
                });

                console.log("Order Result:", result);
            } else {
                console.error("Customer not found!");
            }
        } catch (error) {
            console.error("Error during order submission:", error);
        }

        handleOpen();
    };

    return (
        <Dialog placeholder={''} open={open} handler={handleOpen}>
            <DialogHeader placeholder={''}>Create a new order</DialogHeader>
            <DialogBody placeholder={''}>
                <form>
                    {[
                        { type: "text", name: "name", label: "Product Name" },
                        { type: "number", name: "price", label: "Price" },
                        { type: "date", name: "invoiceDate", label: "Invoice Date" },
                        { type: "text", name: "status", label: "Status" },
                        { type: "text", name: "customerName", label: "Customer Name" }
                    ].map(({ type, name, label }) => (
                        <div key={name} className="my-3">
                            <Input
                                placeholder={''}
                                type={type}
                                name={name}
                                label={label}
                                value={formValues[name as keyof typeof formValues]}
                                onChange={handleChange}
                                required
                                crossOrigin={''}
                            />
                        </div>
                    ))}
                </form>
            </DialogBody>
            <DialogFooter
                placeholder={''}
            >
                <Button
                    placeholder={''}
                    variant="text" color="red" onClick={handleOpen} className="mr-1">
                    <span>Cancel</span>
                </Button>
                <Button
                    placeholder={''}
                    variant="gradient" color="green" onClick={handleSubmit}>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
};