import {createContext, useContext, useState, FC, ReactNode, useEffect} from 'react';
import { type order } from '../types/order';

type OrderContextType = {
  isAddOrderDialogVisible: boolean;
  orders: order[];
  addOrder: (order: order) => void;
  updateOrder: (id: string, status: 'pending' | 'shipped' | 'delivered') => void;
  initializeOrders: (orders: order[]) => void;
  toggleAddOrderDialog: () => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const OrderProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [isAddOrderDialogVisible, setAddOrderDialogVisible] = useState<boolean>(false);
  const [orders, setOrders] = useState<order[]>([]);

  useEffect(() => {
    setOrders([
      {
        id: "1",
        customerName: "John Doe",
        price: 10,
        name: "Welcome",
        invoiceDate: Date.now().toString(),
        status: "pending"
      }
    ])
  }, [setOrders])

  const addOrder = (order: order) => {
    setOrders([...orders, order]);
  };

  const updateOrder = (id: string, status: 'pending' | 'shipped' | 'delivered') => {
    setOrders(orders.map(order => order.id === id ? { ...order, status } : order));
  };

  const initializeOrders = (o: order[]) => {
    setOrders(prev => [...prev, ...o]);
  };

  const toggleAddOrderDialog = () => {
    setAddOrderDialogVisible(prev => !prev);
  };

  return (
      <OrderContext.Provider value={{ orders, addOrder, updateOrder, initializeOrders, isAddOrderDialogVisible, toggleAddOrderDialog }}>
        {children}
      </OrderContext.Provider>
  );
};

const useOrderContext = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrderContext must be used within an OrderProvider');
  }
  return context;
};

export { OrderProvider, useOrderContext };
