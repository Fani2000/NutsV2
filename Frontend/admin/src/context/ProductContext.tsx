import { createContext, FC, useContext, useState } from "react";
import { type Product } from "../types/product";

type ProductContextTypes = {
  products?: Product[];
  showAddDialog: boolean;
  showEditDialog: boolean;
  selectedProduct: Product | null;
  initializeProducts: (proudcts: Product[]) => void;
  toggleAddDialog:() => void;
  toggleEditDialog:() => void;
  AddProduct: (product: Product) => void;
};

export const ProductContext = createContext<ProductContextTypes | null>(null);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error(
      "useProductContext must be used within a ProductContext.Provider"
    );
  }
  return context;
};

export const ProductProvider: FC<any> = (props) => {
  const [products, setProducts] = useState<Product[] >([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedProduct, setProduct] = useState(null);

  function initializeProducts(products: any[]) {
    setProducts(products);
  }

  function toggleAddDialog() {
    setShowAddDialog(!showAddDialog);
  }

  function toggleEditDialog() {
    setShowEditDialog(!showEditDialog);
  }

  function AddProduct(product: any) {
    setProducts([...products, product]);
  }

  function removeProduct(product: any) {
    // Logic to remove the product
    return product;
  }
  function updateProduct(product: any) {
    // this.products?.push(product);
    // Logic to update the product
    return product;
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        showAddDialog,
        showEditDialog,
        selectedProduct,
        initializeProducts,
        toggleAddDialog,
        toggleEditDialog,
        AddProduct
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

