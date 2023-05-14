"use client";

import React, { useContext } from "react";

import CartContext from "@/context/CartContext";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <section>
        <div>
          <h2>{cart?.cartItems?.length || 0} Item(s) in Cart</h2>
        </div>
      </section>

      {cart?.cartItems?.length > 0 && (
        <section>
          <div>
            <div>
              <main>
                <article>
                  {cart?.cartItems?.map((cartItem) => (
                    <div>
                      <div>
                        <div>
                          <figure>
                            <div>
                              <div>
                                <img src={cartItem.image} alt={cartItem.name} />
                              </div>
                            </div>
                            <figcaption>
                              <p>
                                <a href="#">{cartItem.name}</a>
                              </p>
                              <p> Seller: {cartItem.seller}</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div>
                          <div>
                            <button data-action="decrement">
                              <span>−</span>
                            </button>
                            <input
                              type="number"
                              name="custom-input-number"
                              value={cartItem.quantity}
                              readOnly
                            ></input>
                            <button data-action="increment">
                              <span>+</span>
                            </button>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p>
                              ${cartItem.price * cartItem.quantity.toFixed(2)}
                            </p>
                            <small> ${cartItem.price} / per item </small>
                          </div>
                        </div>
                        <div>
                          <div>
                            <a>Remove</a>
                          </div>
                        </div>
                      </div>

                      <hr />
                    </div>
                  ))}
                </article>
              </main>
              <aside>
                <article>
                  <ul>
                    <li>
                      <span>Amount before Tax:</span>
                      <span>${amountWithoutTax}</span>
                    </li>
                    <li>
                      <span>Total Units:</span>
                      <span>
                        {cart?.cartItems?.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        )}{" "}
                        (Units)
                      </span>
                    </li>
                    <li>
                      <span>TAX:</span>
                      <span>${taxAmount}</span>
                    </li>
                    <li>
                      <span>Total price:</span>
                      <span>${totalAmount}</span>
                    </li>
                  </ul>

                  <a>Continue</a>

                  <Link href="/">Back to shop</Link>
                </article>
              </aside>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
