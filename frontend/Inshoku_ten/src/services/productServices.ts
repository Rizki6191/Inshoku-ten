export interface Product {
    id: number;
    category_id: number;
    name: string;
    description: string;
    price: number;
    image?: string;
}

async function ProductServices() {
    const response = await fetch("http://127.0.0.1:8000/api/products");
    const data = await response.json()
    return data
}

export default ProductServices