import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AddBasketInput = {
  customerId: Scalars['UUID']['input'];
};

export type AddBasketPayload = {
  __typename?: 'AddBasketPayload';
  basket?: Maybe<Basket>;
};

export type AddCustomerInput = {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type AddCustomerPayload = {
  __typename?: 'AddCustomerPayload';
  customer?: Maybe<Customer>;
};

export type AddOrderInput = {
  customerId: Scalars['UUID']['input'];
  orderDate: Scalars['DateTime']['input'];
  orderItems: Array<OrderItemInput>;
  status: Scalars['String']['input'];
  totalAmount: Scalars['Decimal']['input'];
};

export type AddOrderPayload = {
  __typename?: 'AddOrderPayload';
  order?: Maybe<Order>;
};

export type AddProductInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Decimal']['input'];
  stockQuantity: Scalars['Int']['input'];
};

export type AddProductPayload = {
  __typename?: 'AddProductPayload';
  product?: Maybe<Product>;
};

/** A connection to a list of items. */
export type AllDiscountsConnection = {
  __typename?: 'AllDiscountsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AllDiscountsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Discount>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AllDiscountsEdge = {
  __typename?: 'AllDiscountsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Discount;
};

export type Basket = {
  __typename?: 'Basket';
  basketId: Scalars['UUID']['output'];
  basketItems: Array<BasketItem>;
  createdAt: Scalars['DateTime']['output'];
  customer: Customer;
  customerId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BasketFilterInput = {
  and?: InputMaybe<Array<BasketFilterInput>>;
  basketId?: InputMaybe<UuidOperationFilterInput>;
  basketItems?: InputMaybe<ListFilterInputTypeOfBasketItemFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  customer?: InputMaybe<CustomerFilterInput>;
  customerId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<BasketFilterInput>>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type BasketInput = {
  basketId: Scalars['UUID']['input'];
  basketItems: Array<BasketItemInput>;
  createdAt: Scalars['DateTime']['input'];
  customer: CustomerInput;
  customerId: Scalars['UUID']['input'];
  updatedAt: Scalars['DateTime']['input'];
};

export type BasketItem = {
  __typename?: 'BasketItem';
  basket: Basket;
  basketId: Scalars['UUID']['output'];
  basketItemId: Scalars['UUID']['output'];
  createdAt: Scalars['DateTime']['output'];
  product: Product;
  productId: Scalars['UUID']['output'];
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BasketItemFilterInput = {
  and?: InputMaybe<Array<BasketItemFilterInput>>;
  basket?: InputMaybe<BasketFilterInput>;
  basketId?: InputMaybe<UuidOperationFilterInput>;
  basketItemId?: InputMaybe<UuidOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  or?: InputMaybe<Array<BasketItemFilterInput>>;
  product?: InputMaybe<ProductFilterInput>;
  productId?: InputMaybe<UuidOperationFilterInput>;
  quantity?: InputMaybe<IntOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type BasketItemInput = {
  basket: BasketInput;
  basketId: Scalars['UUID']['input'];
  basketItemId: Scalars['UUID']['input'];
  createdAt: Scalars['DateTime']['input'];
  product: ProductInput;
  productId: Scalars['UUID']['input'];
  quantity: Scalars['Int']['input'];
  updatedAt: Scalars['DateTime']['input'];
};

export type BasketSortInput = {
  basketId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  customer?: InputMaybe<CustomerSortInput>;
  customerId?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type Customer = {
  __typename?: 'Customer';
  address: Scalars['String']['output'];
  basket: Basket;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['UUID']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orders: Array<Order>;
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CustomerFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<CustomerFilterInput>>;
  basket?: InputMaybe<BasketFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  customerId?: InputMaybe<UuidOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CustomerFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
  password?: InputMaybe<StringOperationFilterInput>;
  phoneNumber?: InputMaybe<StringOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type CustomerInput = {
  address: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  customerId: Scalars['UUID']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  orders: Array<OrderInput>;
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  updatedAt: Scalars['DateTime']['input'];
};

export type CustomerSortInput = {
  address?: InputMaybe<SortEnumType>;
  basket?: InputMaybe<BasketSortInput>;
  createdAt?: InputMaybe<SortEnumType>;
  customerId?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  password?: InputMaybe<SortEnumType>;
  phoneNumber?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type CustomersConnection = {
  __typename?: 'CustomersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CustomersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Customer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CustomersEdge = {
  __typename?: 'CustomersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Customer;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DeleteBasketInput = {
  basketId: Scalars['UUID']['input'];
};

export type DeleteBasketPayload = {
  __typename?: 'DeleteBasketPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteCustomerInput = {
  customerId: Scalars['UUID']['input'];
};

export type DeleteCustomerPayload = {
  __typename?: 'DeleteCustomerPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteOrderInput = {
  orderId: Scalars['UUID']['input'];
};

export type DeleteOrderPayload = {
  __typename?: 'DeleteOrderPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteProductInput = {
  productId: Scalars['Int']['input'];
};

export type DeleteProductPayload = {
  __typename?: 'DeleteProductPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
};

export type Discount = {
  __typename?: 'Discount';
  createdAt: Scalars['DateTime']['output'];
  discountId: Scalars['UUID']['output'];
  discountPercentage: Scalars['Decimal']['output'];
  endDate: Scalars['DateTime']['output'];
  product: Product;
  productId: Scalars['UUID']['output'];
  startDate: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DiscountFilterInput = {
  and?: InputMaybe<Array<DiscountFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  discountId?: InputMaybe<UuidOperationFilterInput>;
  discountPercentage?: InputMaybe<DecimalOperationFilterInput>;
  endDate?: InputMaybe<DateTimeOperationFilterInput>;
  or?: InputMaybe<Array<DiscountFilterInput>>;
  product?: InputMaybe<ProductFilterInput>;
  productId?: InputMaybe<UuidOperationFilterInput>;
  startDate?: InputMaybe<DateTimeOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type DiscountInput = {
  createdAt: Scalars['DateTime']['input'];
  discountId: Scalars['UUID']['input'];
  discountPercentage: Scalars['Decimal']['input'];
  endDate: Scalars['DateTime']['input'];
  product: ProductInput;
  productId: Scalars['UUID']['input'];
  startDate: Scalars['DateTime']['input'];
  updatedAt: Scalars['DateTime']['input'];
};

export type DiscountSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  discountId?: InputMaybe<SortEnumType>;
  discountPercentage?: InputMaybe<SortEnumType>;
  endDate?: InputMaybe<SortEnumType>;
  product?: InputMaybe<ProductSortInput>;
  productId?: InputMaybe<SortEnumType>;
  startDate?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfBasketItemFilterInput = {
  all?: InputMaybe<BasketItemFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<BasketItemFilterInput>;
  some?: InputMaybe<BasketItemFilterInput>;
};

export type ListFilterInputTypeOfDiscountFilterInput = {
  all?: InputMaybe<DiscountFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<DiscountFilterInput>;
  some?: InputMaybe<DiscountFilterInput>;
};

export type ListFilterInputTypeOfOrderFilterInput = {
  all?: InputMaybe<OrderFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<OrderFilterInput>;
  some?: InputMaybe<OrderFilterInput>;
};

export type ListFilterInputTypeOfOrderItemFilterInput = {
  all?: InputMaybe<OrderItemFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<OrderItemFilterInput>;
  some?: InputMaybe<OrderItemFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBasket: AddBasketPayload;
  addCustomer: AddCustomerPayload;
  addOrder: AddOrderPayload;
  addProduct: AddProductPayload;
  deleteBasket: DeleteBasketPayload;
  deleteCustomer: DeleteCustomerPayload;
  deleteOrder: DeleteOrderPayload;
  deleteProduct: DeleteProductPayload;
  updateBasket: UpdateBasketPayload;
  updateCustomer: UpdateCustomerPayload;
  updateOrder: UpdateOrderPayload;
  updateProduct: UpdateProductPayload;
};


export type MutationAddBasketArgs = {
  input: AddBasketInput;
};


export type MutationAddCustomerArgs = {
  input: AddCustomerInput;
};


export type MutationAddOrderArgs = {
  input: AddOrderInput;
};


export type MutationAddProductArgs = {
  input: AddProductInput;
};


export type MutationDeleteBasketArgs = {
  input: DeleteBasketInput;
};


export type MutationDeleteCustomerArgs = {
  input: DeleteCustomerInput;
};


export type MutationDeleteOrderArgs = {
  input: DeleteOrderInput;
};


export type MutationDeleteProductArgs = {
  input: DeleteProductInput;
};


export type MutationUpdateBasketArgs = {
  input: UpdateBasketInput;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime']['output'];
  customer: Customer;
  customerId: Scalars['UUID']['output'];
  orderDate: Scalars['DateTime']['output'];
  orderId: Scalars['UUID']['output'];
  orderItems: Array<OrderItem>;
  status: Scalars['String']['output'];
  totalAmount: Scalars['Decimal']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderFilterInput = {
  and?: InputMaybe<Array<OrderFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  customer?: InputMaybe<CustomerFilterInput>;
  customerId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<OrderFilterInput>>;
  orderDate?: InputMaybe<DateTimeOperationFilterInput>;
  orderId?: InputMaybe<UuidOperationFilterInput>;
  orderItems?: InputMaybe<ListFilterInputTypeOfOrderItemFilterInput>;
  status?: InputMaybe<StringOperationFilterInput>;
  totalAmount?: InputMaybe<DecimalOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type OrderInput = {
  createdAt: Scalars['DateTime']['input'];
  customer: CustomerInput;
  customerId: Scalars['UUID']['input'];
  orderDate: Scalars['DateTime']['input'];
  orderId: Scalars['UUID']['input'];
  orderItems: Array<OrderItemInput>;
  status: Scalars['String']['input'];
  totalAmount: Scalars['Decimal']['input'];
  updatedAt: Scalars['DateTime']['input'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime']['output'];
  image?: Maybe<Scalars['String']['output']>;
  order: Order;
  orderId: Scalars['UUID']['output'];
  orderItemId: Scalars['UUID']['output'];
  price: Scalars['Decimal']['output'];
  product: Product;
  productId: Scalars['UUID']['output'];
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** A connection to a list of items. */
export type OrderItemConnection = {
  __typename?: 'OrderItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrderItemEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<OrderItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrderItemEdge = {
  __typename?: 'OrderItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrderItem;
};

export type OrderItemFilterInput = {
  and?: InputMaybe<Array<OrderItemFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<OrderItemFilterInput>>;
  order?: InputMaybe<OrderFilterInput>;
  orderId?: InputMaybe<UuidOperationFilterInput>;
  orderItemId?: InputMaybe<UuidOperationFilterInput>;
  price?: InputMaybe<DecimalOperationFilterInput>;
  product?: InputMaybe<ProductFilterInput>;
  productId?: InputMaybe<UuidOperationFilterInput>;
  quantity?: InputMaybe<IntOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type OrderItemInput = {
  createdAt: Scalars['DateTime']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  order: OrderInput;
  orderId: Scalars['UUID']['input'];
  orderItemId: Scalars['UUID']['input'];
  price: Scalars['Decimal']['input'];
  product: ProductInput;
  productId: Scalars['UUID']['input'];
  quantity: Scalars['Int']['input'];
  updatedAt: Scalars['DateTime']['input'];
};

export type OrderItemSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  image?: InputMaybe<SortEnumType>;
  order?: InputMaybe<OrderSortInput>;
  orderId?: InputMaybe<SortEnumType>;
  orderItemId?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
  product?: InputMaybe<ProductSortInput>;
  productId?: InputMaybe<SortEnumType>;
  quantity?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type OrderSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  customer?: InputMaybe<CustomerSortInput>;
  customerId?: InputMaybe<SortEnumType>;
  orderDate?: InputMaybe<SortEnumType>;
  orderId?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  totalAmount?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrdersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Order>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrdersEdge = {
  __typename?: 'OrdersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  basketItems: Array<BasketItem>;
  category: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  discounts: Array<Discount>;
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orderItems: Array<OrderItem>;
  price: Scalars['Decimal']['output'];
  productId: Scalars['UUID']['output'];
  stockQuantity: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductFilterInput = {
  and?: InputMaybe<Array<ProductFilterInput>>;
  basketItems?: InputMaybe<ListFilterInputTypeOfBasketItemFilterInput>;
  category?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  discounts?: InputMaybe<ListFilterInputTypeOfDiscountFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductFilterInput>>;
  orderItems?: InputMaybe<ListFilterInputTypeOfOrderItemFilterInput>;
  price?: InputMaybe<DecimalOperationFilterInput>;
  productId?: InputMaybe<UuidOperationFilterInput>;
  stockQuantity?: InputMaybe<IntOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ProductInput = {
  basketItems: Array<BasketItemInput>;
  category: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  discounts: Array<DiscountInput>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  orderItems: Array<OrderItemInput>;
  price: Scalars['Decimal']['input'];
  productId: Scalars['UUID']['input'];
  stockQuantity: Scalars['Int']['input'];
  updatedAt: Scalars['DateTime']['input'];
};

export type ProductSortInput = {
  category?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  image?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
  productId?: InputMaybe<SortEnumType>;
  stockQuantity?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

export type Query = {
  __typename?: 'Query';
  allDiscounts?: Maybe<AllDiscountsConnection>;
  customers?: Maybe<CustomersConnection>;
  orderItem?: Maybe<OrderItemConnection>;
  orders?: Maybe<OrdersConnection>;
  products?: Maybe<ProductsConnection>;
};


export type QueryAllDiscountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<DiscountSortInput>>;
  where?: InputMaybe<DiscountFilterInput>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<CustomerSortInput>>;
  where?: InputMaybe<CustomerFilterInput>;
};


export type QueryOrderItemArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderItemSortInput>>;
  where?: InputMaybe<OrderItemFilterInput>;
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderSortInput>>;
  where?: InputMaybe<OrderFilterInput>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductSortInput>>;
  where?: InputMaybe<ProductFilterInput>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBasketInput = {
  basketId: Scalars['UUID']['input'];
  basketItems: Array<BasketItemInput>;
};

export type UpdateBasketPayload = {
  __typename?: 'UpdateBasketPayload';
  basket?: Maybe<Basket>;
};

export type UpdateCustomerInput = {
  address: Scalars['String']['input'];
  customerId: Scalars['UUID']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type UpdateCustomerPayload = {
  __typename?: 'UpdateCustomerPayload';
  customer?: Maybe<Customer>;
};

export type UpdateOrderInput = {
  customerId?: InputMaybe<Scalars['UUID']['input']>;
  orderDate?: InputMaybe<Scalars['DateTime']['input']>;
  orderId: Scalars['UUID']['input'];
  orderItems: Array<OrderItemInput>;
  status: Scalars['String']['input'];
  totalAmount?: InputMaybe<Scalars['Decimal']['input']>;
};

export type UpdateOrderPayload = {
  __typename?: 'UpdateOrderPayload';
  order?: Maybe<Order>;
};

export type UpdateProductInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Decimal']['input']>;
  productId: Scalars['UUID']['input'];
  stockQuantity?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateProductPayload = {
  __typename?: 'UpdateProductPayload';
  product?: Maybe<Product>;
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
  ngt?: InputMaybe<Scalars['UUID']['input']>;
  ngte?: InputMaybe<Scalars['UUID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  nlt?: InputMaybe<Scalars['UUID']['input']>;
  nlte?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type OrdersQuery = { __typename?: 'Query', orders?: { __typename?: 'OrdersConnection', nodes?: Array<{ __typename?: 'Order', createdAt: any, customerId: any, orderDate: any, orderId: any, status: string, totalAmount: any, updatedAt: any }> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null }, edges?: Array<{ __typename?: 'OrdersEdge', cursor: string }> | null } | null };

export type GetOrdersApiQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrdersApiQuery = { __typename?: 'Query', orders?: { __typename?: 'OrdersConnection', nodes?: Array<{ __typename?: 'Order', orderDate: any, orderId: any, status: string, totalAmount: any, updatedAt: any, orderItems: Array<{ __typename?: 'OrderItem', product: { __typename?: 'Product', name: string } }>, customer: { __typename?: 'Customer', name: string } }> | null } | null };

export type AddProductMutationVariables = Exact<{
  input: AddProductInput;
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'AddProductPayload', product?: { __typename?: 'Product', category: string, createdAt: any, description: string, image: string, name: string, price: any, productId: any, stockQuantity: number, updatedAt: any } | null } };

export type UpdateProductMutationVariables = Exact<{
  input: UpdateProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'UpdateProductPayload', product?: { __typename?: 'Product', category: string, createdAt: any, description: string, image: string, name: string, price: any, productId: any, stockQuantity: number, updatedAt: any } | null } };

export type DeleteProductMutationVariables = Exact<{
  input: DeleteProductInput;
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'DeleteProductPayload', boolean?: boolean | null } };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductsConnection', nodes?: Array<{ __typename?: 'Product', category: string, createdAt: any, description: string, image: string, name: string, price: any, productId: any, stockQuantity: number, updatedAt: any }> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null }, edges?: Array<{ __typename?: 'ProductsEdge', cursor: string }> | null } | null };


export const OrdersDocument = gql`
    query Orders {
  orders {
    nodes {
      createdAt
      customerId
      orderDate
      orderId
      status
      totalAmount
      updatedAt
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    edges {
      cursor
    }
  }
}
    `;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrdersQuery(baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export function useOrdersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersSuspenseQueryHookResult = ReturnType<typeof useOrdersSuspenseQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const GetOrdersApiDocument = gql`
    query GetOrdersApi {
  orders {
    nodes {
      orderDate
      orderId
      orderItems {
        product {
          name
        }
      }
      status
      totalAmount
      updatedAt
      customer {
        name
      }
    }
  }
}
    `;

/**
 * __useGetOrdersApiQuery__
 *
 * To run a query within a React component, call `useGetOrdersApiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersApiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersApiQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersApiQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdersApiQuery, GetOrdersApiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersApiQuery, GetOrdersApiQueryVariables>(GetOrdersApiDocument, options);
      }
export function useGetOrdersApiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersApiQuery, GetOrdersApiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersApiQuery, GetOrdersApiQueryVariables>(GetOrdersApiDocument, options);
        }
export function useGetOrdersApiSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOrdersApiQuery, GetOrdersApiQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrdersApiQuery, GetOrdersApiQueryVariables>(GetOrdersApiDocument, options);
        }
export type GetOrdersApiQueryHookResult = ReturnType<typeof useGetOrdersApiQuery>;
export type GetOrdersApiLazyQueryHookResult = ReturnType<typeof useGetOrdersApiLazyQuery>;
export type GetOrdersApiSuspenseQueryHookResult = ReturnType<typeof useGetOrdersApiSuspenseQuery>;
export type GetOrdersApiQueryResult = Apollo.QueryResult<GetOrdersApiQuery, GetOrdersApiQueryVariables>;
export const AddProductDocument = gql`
    mutation AddProduct($input: AddProductInput!) {
  addProduct(input: $input) {
    product {
      category
      createdAt
      description
      image
      name
      price
      productId
      stockQuantity
      updatedAt
    }
  }
}
    `;
export type AddProductMutationFn = Apollo.MutationFunction<AddProductMutation, AddProductMutationVariables>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProductMutation(baseOptions?: Apollo.MutationHookOptions<AddProductMutation, AddProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument, options);
      }
export type AddProductMutationHookResult = ReturnType<typeof useAddProductMutation>;
export type AddProductMutationResult = Apollo.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = Apollo.BaseMutationOptions<AddProductMutation, AddProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    product {
      category
      createdAt
      description
      image
      name
      price
      productId
      stockQuantity
      updatedAt
    }
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
    boolean
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    nodes {
      category
      createdAt
      description
      image
      name
      price
      productId
      stockQuantity
      updatedAt
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    edges {
      cursor
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;