import React, {FunctionComponent, useState} from "react"
import {Header} from "./header"
import {ProductItem} from "./productItem"
import {CategoryList} from "./categoryList"
import {Product, Order} from "./data/entities"

interface Props {
    products: Product[],
    categories: string[],
    order: Order,
    addToOrder: (product: Product, quantity: number) => void
}

interface State {
    selectedCategory: string
}

export const ProductList: FunctionComponent<Props> = (props) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    return <div>
        <Header order={props.order} />
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryList 
                    categories={props.categories} 
                    selected={selectedCategory} 
                    selectCategory={(cat) => setSelectedCategory(cat)} 
                    />
                </div>
                <div className="col-9 p-2">
                    {filteredProducts(props.products, selectedCategory).map(p=>
                    <ProductItem 
                        key={p.id} 
                        product={p}
                        callback={props.addToOrder} />)
                    }
                </div>
            </div>
        </div>
    </div>
}

function filteredProducts(products: Product[], selectedCategory: string): Product[] {
    return products.filter(p => 
        selectedCategory === "All" || p.category === selectedCategory
    )
}
