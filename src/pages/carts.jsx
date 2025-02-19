import { useDispatch, useSelector } from "react-redux";
import { removeTocart } from "../redux/features/cartSlice";

const CartPage = () => {
  const { cart } = useSelector((state) => state.AllCarts);
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white shadow-lg rounded-lg p-4"
          >
            <img
              src={item.postImage}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>

            <button
              onClick={() => dispatch(removeTocart(item._id))}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
