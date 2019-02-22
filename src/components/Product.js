import React, {Component} from "react";

class Product extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {image, title, detail } = this.props;

        return(
            <div className="card">
                <img src={image} class="card-img-top" alt="product" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{detail}</p>
                </div>
            </div>
        );
    }
}

export default Product;