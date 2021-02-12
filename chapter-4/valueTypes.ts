// value types are even narrower than primitive types (i.e. string)

type Order = {
  id: number;
  // our type can include specific value types instead of simply 'number' or 'string'
  // => the allowed value can be any of these. it makes the possible types much more specific, so options are much more limited and accurate
  status: 'processing' | 'complete' | 'failed' | 'returned';
}

// our orders object
const orders: Order[] = [
  {
    id: 1,
    status: 'complete'
  },
  {
    id: 2,
    status: 'returned'
  }
]

// lets get the status of a specific order
const getOrderStatus = (orderId: number) => {
  const order = orders.filter(order => order.id === orderId)
  if (order.length > 0) {
    return order[0].status
  }

  throw Error('Could not find an order with that ID')
}

// hover over the below const to see the different allowed values
const orderStatus = getOrderStatus(1)

console.log('orderStatus', orderStatus)

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
