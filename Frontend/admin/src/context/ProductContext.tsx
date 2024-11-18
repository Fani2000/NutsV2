import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { type Product } from "../types/product";

type ProductContextType = {
  products?: Product[];
  isAddDialogVisible: boolean;
  isEditDialogVisible: boolean;
  selectedProduct: Product | null;
  initializeProducts: (products: Product[]) => void;
  toggleAddDialog: () => void;
  toggleEditDialog: () => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  updateProduct: (product: Product) => void;
  selectProduct: (product: Product) => void;
};

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error(
      "useProductContext must be used within a ProductContext.Provider"
    );
  }
  return context;
};

export const ProductProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isAddDialogVisible, setAddDialogVisible] = useState(false);
  const [isEditDialogVisible, setEditDialogVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {})

  const initializeProducts = (products: any[]) => {
    setProducts(products);
  };

  const toggleAddDialog = () => {
    setAddDialogVisible(!isAddDialogVisible);
  };

  const toggleEditDialog = () => {
    setEditDialogVisible(!isEditDialogVisible);
  };
  
  const addProduct = (product: Product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };
  
  const removeProduct = (id: string) => {
    setProducts(prevProducts => prevProducts.filter(p => p.id !== id));
  };
  const updateProduct = (updatedProduct: Product) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };
  const selectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <ProductContext.Provider
      value={{
        isAddDialogVisible,
        isEditDialogVisible,
        selectedProduct,
        products,
        initializeProducts,
        toggleAddDialog,
        toggleEditDialog,
        addProduct,
        removeProduct,
      updateProduct,
      selectProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
