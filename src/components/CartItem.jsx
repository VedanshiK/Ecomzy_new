
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return (
    <div className="gap-6 m-4 h-fit w-[80%]">
  <div className="flex gap-6 flex-col sm:flex-row items-center m-5">
    <div className="w-full sm:w-1/2">
      <img src={item.image} className="w-full" />
    </div>

    <div className="w-full sm:w-1/2">
      <h1 className="text-[20px] font-semibold mb-3">{item.title}</h1>
      <h1>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
      <div className="flex justify-between">
        <p className="text-green-600 font-semibold">${item.price}</p>
        <div 
          onClick={removeFromCart} 
          className="w-[20px] h-[20px] rounded-full flex justify-center items-center cursor-pointer"
        >
          <MdDelete />
        </div>
      </div>
    </div>
  </div>
  <hr className="w-full my-4 border-t-2 border-gray-400" />
</div>
   
  );
};

export default CartItem;
