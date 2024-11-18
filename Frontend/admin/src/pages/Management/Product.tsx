import { useContext, useEffect, useState } from "react";
import { useProductsQuery } from "../../gql/graphql";
import { ProductDialog } from "../../components/Management/Products/ProductDialog";
import { ProductTable } from "../../components/Management/Products/ProductTable";
import  { type Product } from "../../types/product";
import ProductOne from "../../images/product/product-01.png";
import ProductTwo from "../../images/product/product-02.png";
import ProductThree from "../../images/product/product-03.png";
import ProductFour from "../../images/product/product-04.png";
import { ProductContext, useProductContext } from "../../context/ProductContext";

const productData: Product[] = [
  {
    id: "2fdfdf",
    image: ProductOne,
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    id: "2fdfdf",
    image: ProductTwo,
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    id: "2fdfdf",
    image: ProductThree,
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    id: "2fdfdf",
    image: ProductFour,
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
];

const Product = () => {
  const { data, refetch, loading, error } = useProductsQuery();
  const context  = useProductContext()

  console.log(data)

  useEffect(() => {
    context?.initializeProducts(productData)
  }, [context?.products])

  return (
    <div className="flex flex-col gap-1">
      <ProductDialog  />
      <ProductTable  />
    </div>
  );
};

export default Product;
