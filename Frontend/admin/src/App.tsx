import { useOrdersQuery, useProductsQuery } from './gql/graphql'

const App = () => {
  const { data: orders } = useOrdersQuery()
  const { data: products } = useProductsQuery()
  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-red-300">
        Hello world!
      </h1>
      <div>Orders:
        {orders?.orders?.nodes?.map(x => {
          return <div>Order: {x.orderId} - {x.createdAt} - {x.status}</div>
        })}
      </div>
      <div>Products:
        {products?.products?.nodes?.map(x => {
          return <div>Product: {x.name} - {x.description} - {x.price}</div>
        })}
      </div>
    </div>
  )
}

export default App;