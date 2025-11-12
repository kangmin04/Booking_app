import './product.scss' 
import Single from '../single/Single'
import { singleProduct } from '../../data'
const Product = () => {

    return (
        <div className="Product">  
        <p>this is a single product page</p>
            <Single {...singleProduct}/>
        </div>
        
    )
}

export default Product; 