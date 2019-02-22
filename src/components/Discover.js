import React, {Component} from "react";
import Product from "./Product";

class Discover extends Component{
    render() {
        return(
            <div className="container">
                <div className="search_filter">
                    <div className="search_area">
                        <form>
                            <div className="input-group mb-3">
                                <input aria-describedby="button-addon2" className="form-control" type="search" placeholder="Search" />    
                                <div class="input-group-append">
                                    <button className="btn btn-info btn-md" type="button" id="button-addon2">Search</button>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="search-category">
                        <div className="row">
                            <div className="col-md-1">
                                <b>Categories</b>
                            </div>
                            <div className="col-md-8">    
                                <ul>
                                    <li>Furniture</li>
                                    <li>Appliance</li>
                                    <li>Books</li>
                                    <li>Clothings</li>
                                    <li>Entertainment</li>
                                </ul>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <Product image="http://www.sparkawards.com/wp-content/uploads/2011/05/Product_Lg_Type-1024x791.jpg" title="first product" detail="hello, this is our first product!" />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <Product image="http://www.sparkawards.com/wp-content/uploads/2011/05/Product_Lg_Type-1024x791.jpg" title="first product" detail="hello, this is our first product!" />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <Product image="http://www.sparkawards.com/wp-content/uploads/2011/05/Product_Lg_Type-1024x791.jpg" title="first product" detail="hello, this is our first product!" />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <Product image="http://www.sparkawards.com/wp-content/uploads/2011/05/Product_Lg_Type-1024x791.jpg" title="first product" detail="hello, this is our first product!" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Discover;