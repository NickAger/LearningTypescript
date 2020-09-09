// import React, {Component} from 'react';
import React, {FunctionComponent, useState} from "react"
import {Product, Order} from './data/entities'
import {ProductList} from './productList'

let testData: Product[] = [1, 2, 3, 4, 5].map(num => ({
  id: num, name: `Prod${num}`, category: `Cat${num %2}`,
  description: `Product ${num}`, price: 100 + (num * 10)}))

interface Props {
  // no props required
}

const App: FunctionComponent<Props> = () => {
  const [order, setOrder] = useState<Order>(new Order())

      return <div className="App">
      <ProductList products={testData}
        categories={[...new Set(testData.map(p=>p.category))]}
        order={order}
        addToOrder={(product: Product, quantity: number) => {

          // this is a hack to ensure we have a new object which can cause a rerender
          // see: 
          // * https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render
          // * https://stackoverflow.com/questions/58784464/usestate-not-rerendering-when-update-function-is-called-inside-onclick-function
          // * https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/
          let orderCopy = Object.create(order) // shallow copy
          orderCopy.addProduct(product, quantity)
        }}
      />
    </div>
}

// class version

// interface Props {
//   // no props required
// }

// interface State {
//   order: Order
// }

// class App extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props)
//     this.state = {
//       order: new Order()
//     }
//   }

//   render = () => 
//       <div className="App">
//        <ProductList products={testData}
//         categories={[...new Set(testData.map(p=>p.category))]}
//         order={this.state.order}
//         addToOrder={this.addToOrder}
//        />
//       </div>

//   addToOrder = (product: Product, quantity: number) => {
//     this.state.order.addProduct(product, quantity)
//     this.setState(this.state)
//   }
// }

export default App;
