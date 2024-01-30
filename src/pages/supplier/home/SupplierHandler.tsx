import React, { useEffect, useState } from 'react'
import SupplierHome from './SupplierHome'
import { getProductsForSupplier } from '../api/getProducts'
import { Product } from '../../products/types'
import { Spinner } from 'react-bootstrap'

const SupplierHandler = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const response = await getProductsForSupplier(
                localStorage.getItem("registration_id") ?? "",
            )
            response?.products && setProducts(response?.products);
            setLoading(false);
        }
        catch {
            setLoading(false);
        }
    }

    useEffect(() => { },
        []);

    return (
        <div>
            {loading ? (<Spinner animation="border" variant="primary" />) :
                <>
                    {products.length > 0 ? (
                        <SupplierHome />) : (
                        <button>Add More Products</button>)
                    }
                </>
            }
        </div>
    )
}

export default SupplierHandler
