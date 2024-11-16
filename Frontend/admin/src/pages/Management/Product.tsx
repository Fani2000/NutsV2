import { Link } from "react-router-dom";
import TableTwo from "../../components/Tables/TableTwo";
import { useProductsQuery } from "../../gql/graphql";

const Product = () => {
  const { data, refetch, loading, error } = useProductsQuery();

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl text-bold">Management | Products </h3>
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
          Add Product
        </Link>
      </div>
      {loading ? <div>Loading</div> : <TableTwo key={Date.now()} />}
    </div>
  );
};

export default Product;
