// import React, {Component} from 'react';
import React, {FunctionComponent, useEffect} from "react"
// import {Product, Order} from './data/entities'
// import {ProductList} from './productList'
import { dataStore } from "./data/dataStore"
import { Provider } from 'react-redux'
import { HttpHandler } from "./data/httpHandler"
import { addProduct } from "./data/actionCreators"
import { ConnectedProductList } from "./data/productListConnector"


// Note: no need to define an empty `Props` if there are no properties required
const App: FunctionComponent = () => {
  useEffect(()=>{
    console.log("About to download data")
    const handler = new HttpHandler()
    handler.loadProducts(data => {
      console.log("Downloaded data")      
      dataStore.dispatch(addProduct(...data))
    })
  })

  return <div className="App">
    <Provider store={ dataStore }>
      <ConnectedProductList />
    </Provider>
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
