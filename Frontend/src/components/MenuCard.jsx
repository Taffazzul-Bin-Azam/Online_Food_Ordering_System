import { useCart } from '../context/CartContext';

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow rounded p-4">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
      <p className="text-gray-600 mb-2">₹{item.price}</p>
      <button
        onClick={() => addToCart(item._id)}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MenuCard;
