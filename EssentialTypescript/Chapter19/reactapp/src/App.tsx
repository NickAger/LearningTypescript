// import React, {Component} from 'react';
import React, {FunctionComponent, useState} from "react"
// import {Product, Order} from './data/entities'
// import {ProductList} from './productList'
import { dataStore } from "./data/dataStore"
import { Provider } from 'react-redux'
import { HttpHandler } from "./data/httpHandler"
import { addProduct } from "./data/actionCreators"
import { ConnectedProductList } from "./data/productListConnector"
import { Switch, Route, Redirect, BrowserRouter, RouteComponentProps } from "react-router-dom"
import { OrderDetails } from "./orderDetails"
import { Summary } from "./summary"


// Note: no need to define an empty `Props` if there are no properties required
const App: FunctionComponent = () => {
  const [httpHandler] = useState<HttpHandler>(()=>{
    const handler = new HttpHandler()
    handler.loadProducts(data => {
      console.log("Downloaded data")      
      dataStore.dispatch(addProduct(...data))
    })
    return handler   
  })

  const submitCallback = (routeProps: RouteComponentProps) => {
    httpHandler.storeOrder(dataStore.getState().order, id => routeProps.history.push(`/summary${id}`))
  }


  return <div className="App">
    <Provider store={dataStore}>
      <BrowserRouter>
        <Switch>
          <Route path="/products" component={ConnectedProductList} />
          <Route path="/order" render={(routeProps) =>
            <OrderDetails { ...routeProps} submitCallback={ () => submitCallback(routeProps)}/>
          }/>
          <Route path="/summary/:id" component={Summary} />
          <Redirect to="/products" />
        </Switch>
      </BrowserRouter>
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
