import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"Total"} text2={"Panier"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Total</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Livraison Gratuite</p>
          <p>
            {currency} {delivery_fee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;