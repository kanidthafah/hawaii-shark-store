import { ShopContext } from "@/context/ShopContext";
import React, { FC, useContext } from "react";

const CartTotal: FC = () => {
  const { currency , delivery_fee, get_cart_amount } = useContext(ShopContext);
  return (
    <div className="w-full gap-3">
      <h3 className="text-lg md:text-xl lg:text-2xl uppercase font-semibold text-font2 my-3 text-center">
        Cart total
      </h3>
      <div className="flex flex-col gap-3 mt-2 text-sm">
        <div className="flex justify-between text-font">
          <p>Subtotal</p>
          <p>
            {currency} {get_cart_amount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between text-font">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between text-font2 font-semibold">
          <p>Total</p>
          <p>
            {currency}
            {get_cart_amount() === 0 ? 0 : get_cart_amount() + delivery_fee}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
