"use client";

import axios from "axios";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import BreadCrumbs from "../layouts/BreadCrumbs";

const Shipping = ({ addresses }) => {
  const [shippingInfo, setShippinInfo] = useState("");

  const setShippingAddress = (address) => {
    setShippinInfo(address._id);
  };

  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Cart", url: "/cart" },
    { name: "Order", url: "" },
  ];

  return (
    <div>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section>
        <div>
          <div>
            <main>
              <article>
                <h2>Shipping information</h2>

                <div>
                  {addresses?.map((address) => (
                    <label onClick={() => setShippingAddress(address)}>
                      <span>
                        <input name="shipping" type="radio" />
                      </span>
                      <p>
                        <span>{address.street}</span>
                        <small>
                          {address.city}, {address.state}, {address.zipCode}
                          <br />
                          {address.country}
                          <br />
                          {address.phoneNo}
                        </small>
                      </p>
                    </label>
                  ))}
                </div>

                <Link href="/address/new">
                  <i></i> Add new address
                </Link>

                <div>
                  <Link href="/cart">Back</Link>
                  <a onClick={checkoutHandler}>Checkout</a>
                </div>
              </article>
            </main>
            <aside>
              <article>
                <h2>Summary</h2>
                <ul>
                  <li>
                    <span>Amount:</span>
                    <span>${cart?.checkoutInfo?.amount}</span>
                  </li>
                  <li>
                    <span>Est TAX:</span>
                    <span>${cart?.checkoutInfo?.tax}</span>
                  </li>
                  <li>
                    <span>Total Amount:</span>
                    <span>${cart?.checkoutInfo?.totalAmount}</span>
                  </li>
                </ul>

                <hr />

                <h2>Items in cart</h2>

                {cart?.cartItems?.map((item) => (
                  <figure>
                    <div>
                      <div>
                        <img
                          width="50"
                          height="50"
                          src={item.image}
                          alt="Title"
                        />
                        <span>{item.quantity}</span>
                      </div>
                    </div>
                    <figcaption>
                      <p>{item.name.substring(0, 50)}</p>
                      <p>Total: ${item.quantity * item.price}</p>
                    </figcaption>
                  </figure>
                ))}
              </article>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
