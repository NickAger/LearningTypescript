import { createElement } from "./tools/jsxFactory"
import { Order } from "./data/entities"

export class Header {
    // @ts-expect-error Property 'props' has no initializer and is not definitely assigned in the constructor.
    props: {
        order: Order,
        submitCallback: () => void
    }

    getContent(): HTMLElement {
        let count = this.props.order.productCount
        // @ts-expect-error Type 'Element' is missing the following properties from type 'HTMLElement': accessKey, accessKeyLabel, autocapitalize, dir, and 233 more.
        return <div className="p-1 bg-secondary text-white text-right">
            { count === 0 ? "(No Selection)" : `${ count } product(2), $${this.props.order.total.toFixed(2)}`}
            <button className="btn btn-sm btn-primary m-1"
                onclick={this.props.submitCallback }>
                Submit Order
            </button>
        </div>
    }
}