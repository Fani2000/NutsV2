import {
  MagnifyingGlassIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import { useProductContext } from "../../../context/ProductContext";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Popular",
    value: "popular",
  },
  {
    label: "Unpopular",
    value: "unpopular",
  },
];

const TABLE_HEAD = [
  "Product Name",
  "Category",
  "Price",
  "Sold",
  "Profit",
  "Actions",
];

export const ProductTable = () => {
  const context = useProductContext();
  const { toggleAddDialog, products } = context!;

  return (
    <Card placeholder={null} className="h-full w-full">
      <CardHeader
        placeholder={null}
        floated={false}
        shadow={false}
        className="rounded-none"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <Typography placeholder={null} variant="h5" color="blue-gray">
              Product list
            </Typography>
            <Typography
              placeholder={null}
              color="gray"
              className="mt-1 font-normal"
            >
              See information about all products
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {/* <Button variant="outlined" size="sm">
              view all
            </Button> */}
            <Button
              placeholder={null}
              className="flex items-center gap-3"
              size="sm"
              onClick={() => toggleAddDialog()}
            >
              <PlusIcon strokeWidth={2} className="h-4 w-4" /> Product
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader placeholder={null}>
              {TABS.map(({ label, value }) => (
                <Tab placeholder={""} key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              placeholder="search"
              crossOrigin={""}
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody placeholder={null} className="md:overflow-hidden px-0 py-2">
        <table className="mt-4 w-full min-w-max table-auto text-left overflow-hidden">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y flex-1 border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    placeholder={null}
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products?.map(
              ({ name, image, category, price, sold, profit }, index) => {
                const isLast = index === products.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="col-span-3 flex items-center">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <div className="h-12.5 w-15 rounded-md">
                              <img src={image} alt="Product" />
                            </div>
                            <p className="text-sm text-black dark:text-white">
                              {name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="col-span-2 hidden items-center sm:flex">
                        <p className="text-sm text-black dark:text-white">
                          {category}
                        </p>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black dark:text-white">
                          R {price.toFixed(2)}
                        </p>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        placeholder={null}
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {sold}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        placeholder={null}
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        R {profit.toFixed(2)}
                      </Typography>
                    </td>
                    <td className={classes + ' w-[115px]'}>
                      <Tooltip content="Edit product">
                        <IconButton placeholder={null} variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete">
                        <IconButton placeholder={null} variant="text">
                          <TrashIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter
        placeholder={null}
        className="flex items-center justify-between border-t border-blue-gray-50 p-4"
      >
        <Typography
          placeholder={null}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button placeholder={null} variant="outlined" size="sm">
            Previous
          </Button>
          <Button placeholder={null} variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
