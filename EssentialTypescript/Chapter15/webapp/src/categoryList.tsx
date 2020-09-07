import { createElement } from "./tools/jsxFactory"

export class CategoryList {
    //@ts-ignore: Property 'props' has no initializer and is not definitely assigned in the constructor.
    props: {
        categories: string[],
        selectedCategory: string,
        callback: (selected: string) => void
    }

    getContent(): HTMLElement {
        //@ts-ignore: Type 'Element' is missing the following properties from type 'HTMLElement': accessKey, accessKeyLabel, autocapitalize, dir, and 233 more.
        return <div>
            { ["All", ...this.props.categories].map(c => this.getCategoryButton(c))}
        </div>
    }


    getCategoryButton(cat?: string): HTMLElement {
        let selected = this.props.selectedCategory === undefined ? "All" : this.props.selectedCategory
        let btnClass = selected === cat ? "btn-primary" : "btn-secondary"
        //@ts-ignore: Type 'Element' is not assignable to type 'HTMLElement'.
        return <button className={ `btn btn-block ${btnClass}`} onclick={ () => this.props.callback(cat)}>
            {cat}
        </button>
    }
}