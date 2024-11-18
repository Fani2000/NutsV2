import { useEffect } from "react";
import { OrderDialog } from "../../components/Management/Orders/OrderDialog";
import { useOrderContext } from "../../context/OrderContext";
import { useGetOrdersApiQuery } from "../../gql/graphql";
import { order } from "../../types/order";
import { OrderTable } from "../../components/Management/Orders/OrderTable";

const Orders = () => {
  const { data, loading } = useGetOrdersApiQuery();
  const { initializeOrders, orders } = useOrderContext();

  useEffect(() => {
    if (!loading) handleGetOrders();
  }, [loading]);

  useEffect(() => {
    console.log(orders)
  }, [orders]);
  const handleGetOrders = () => {
    const orders_: order[] = [];
    data?.orders?.nodes?.map((x) => {
      const o:order = {
        id: x.orderId,
        name: x.orderItems[0].product.name,
        price: x.totalAmount,
        invoiceDate: x.orderDate.split("T")[0],
        status: x.status ?? "",
        customerName: x.customer.name,
      }
      orders_.push(o);
    });
    
    initializeOrders(orders_)
  };

  return (
    <div className="flex flex-col gap-2">
      <OrderDialog />
      {loading ? <div>Loading</div> : <OrderTable />}
    </div>
  );
};

export default Orders;
