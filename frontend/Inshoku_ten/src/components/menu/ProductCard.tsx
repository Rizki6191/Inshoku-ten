import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-japan-200 group">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-japan-600 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-japan-500">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-japan-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-japan-600 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            + Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;