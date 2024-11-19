import { useEffect } from "react";
import { useProductsQuery } from "../../gql/graphql";
import { ProductDialog } from "../../components/Management/Products/ProductDialog";
import { ProductTable } from "../../components/Management/Products/ProductTable";
import { type Product } from "../../types/product";
import ProductOne from "../../images/product/product-01.png";
import { useProductContext } from "../../context/ProductContext";

const Product = () => {
  const { data } = useProductsQuery();
  const { initializeProducts } = useProductContext()!;

  const mapProducts = (nodes: any[]): Product[] => {
    console.log(nodes)
    return nodes.map(node => ({
      id: node.productId,
      image: node.image ?? ProductOne, 
      name: node.name,
      category: node.category,
      price: node.price,
      sold: node.numberOfSold,
      profit: 0, 
    }));
  };

  const handleInitializeProducts = () => {
    if (data?.products?.nodes) {
      const fetchedProducts: Product[] = mapProducts(data.products.nodes);
      initializeProducts(fetchedProducts);
    }
  };

  useEffect(() => {
    handleInitializeProducts();
  }, [data]);

  return (
      <div className="flex flex-col gap-1">
        <ProductDialog />
        <ProductTable />
      </div>
  );
};

export default Product;