import { createElement } from "./tools/jsxFactory"
import { Product } from "./data/entities"
import { ProductItem } from "./productItem"
import { CategoryList } from "./categoryList"
import { addClass } from "./decorators"

export class ProductList {
    // @ts-expect-error Property 'props' has no initializer and is not definitely assigned in the constructor.
    props: {
        products: Product[],
        categories: string[],
        selectedCategory: string,
        addToOrderCallback?: (product: Product, quantity: number) => void,
        filterCallback?: (category: string) => void
    }

    @addClass("select", "bg-info", "m-1")
    getContent() : HTMLElement {
        //@ts-expect-error: Type 'Element' is missing the following properties from type 'HTMLElement': accessKey, accessKeyLabel, autocapitalize, dir, and 233 more.
        return <div className="container-fluid">
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryList categories={this.props.categories} selectedCategory={this.props.selectedCategory} callback={this.props.filterCallback} />
                </div>
                <div className="col-9 p-2">
                    { this.props.products.map(p =>
                        <ProductItem product={ p } callback={this.props.addToOrderCallback } />
                        )}
                </div>
            </div>
        </div>
    }
}