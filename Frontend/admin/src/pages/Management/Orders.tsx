import { useEffect, useState } from "react";
import OrdersTable from "../../components/Tables/TableThree";
import { useGetOrdersApiQuery } from "../../gql/graphql";
import { Package } from "../../types/package";
import Buttons from "../UiElements/Buttons";
import { Link } from "react-router-dom";

const Orders = () => {
  const { data, refetch, loading, error } = useGetOrdersApiQuery();
  const [orders, setOrders] = useState<Package[]>([]);
  //   console.log("ORders: ", data);

  useEffect(() => {
    if (!loading) handleGetOrders();
  }, [loading]);

  const handleGetOrders = async () => {
    const orders_: Package[] = [];
    data?.orders?.nodes?.map((x) => {
      orders_.push({
        name: x.orderItems[0].product.name,
        price: x.totalAmount,
        invoiceDate: x.orderDate.split("T")[0],
        status: x.status ?? "",
        customerName: x.customer.name,
      });
    });

    setOrders(orders_);
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl text-bold">Management | Orders </h3>
      <div className="flex justify-end">
        <Link
          to="#"
          className="inline-flex items-center justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title></title>{" "}
                <g id="Complete">
                  {" "}
                  <g data-name="add" id="add-2">
                    {" "}
                    <g>
                      {" "}
                      <line
                        fill="none"
                        stroke="#ffffff"
                        x1="12"
                        x2="12"
                        y1="19"
                        y2="5"
                      ></line>{" "}
                      <line
                        fill="none"
                        stroke="#ffffff"
                        x1="5"
                        x2="19"
                        y1="12"
                        y2="12"
                      ></line>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </span>
          Add Order
        </Link>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <OrdersTable packages={orders} key={Date.now()} />
      )}
    </div>
  );
};

export default Orders;
