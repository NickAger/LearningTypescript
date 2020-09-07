import { createElement } from "./tools/jsxFactory"

export class Summary {
    // @ts-expect-error Property 'props' has no initializer and is not definitely assigned in the constructor.
    props: {
        orderId: number,
        callback: () => void
    }

    getContent(): HTMLElement {
        // @ts-expect-error Type 'Element' is missing the following properties from type 'HTMLElement': accessKey, accessKeyLabel, autocapitalize, dir, and 233 more.
        return <div className="m-2 text-center">
            <h2>Thanks!</h2>
            <p>Thanks for placing your order.</p>
            <p>Your order is #{ this.props.orderId }</p>
            <p>We'll ship your goods as soon as possible.</p>
            <button className="btn btn-primary" onclick={ this.props.callback }>OK</button>
        </div>
    }
}