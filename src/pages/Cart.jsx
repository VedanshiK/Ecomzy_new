import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex justify-center items-center  ">
      <div className="w-[70%] mt-4 p-4 mb-6">
      {cart.length > 0 ? (
        <div className="flex gap-6 ">
          <div className="w-[60%] grid grid-cols-1 ">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
            
          </div>

          <div className="flex flex-col justify-between  w-[47%]">
            <div className="flex flex-col gap-1">
              <div className="text-green-700 font-semibold text-[20px]">Your Cart</div>
              <div className="text-green-800 text-[30px] font-bold">Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col">
              <span className="">Total Amount: <span className="font-semibold">${totalAmount}</span> </span>
              <button className="bg-green-600 text-white rounded-md w-fit p-[7px] mb-2 mt-2">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-y-hidden">
          <div className="flex flex-col justify-center items-center h-screen ">
          <h1 className="mb-2 font-semibold">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-blue-950 rounded-2xl p-2 text-white "> Shop Now</button>
          </Link>
        </div>
          </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
