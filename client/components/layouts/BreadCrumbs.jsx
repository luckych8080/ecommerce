"use client";

import AuthContext from "@/context/AuthContext";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useContext } from "react";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <aside>
      <ul>
        {user?.role === "admin" && (
          <>
            <li>
              {" "}
              <Link href="/admin/products/new">
                New Product <span>(Admin)</span>
              </Link>
            </li>

            <li>
              {" "}
              <Link href="/admin/products">
                All Products <span>(Admin)</span>
              </Link>
            </li>

            <li>
              {" "}
              <Link href="/admin/orders">
                All Orders <span>(Admin)</span>
              </Link>
            </li>

            <li>
              {" "}
              <Link href="/admin/users">
                All Users <span>(Admin)</span>
              </Link>
            </li>

            <hr />
          </>
        )}

        <li>
          {" "}
          <Link href="/me">Your Profile</Link>
        </li>
        <li>
          {" "}
          <Link href="/me/orders">Orders</Link>
        </li>
        <li>
          {" "}
          <Link href="/me/update">Update Profile</Link>
        </li>
        <li>
          {" "}
          <Link href="/me/update_password">Update Password</Link>
        </li>

        <li>
          {" "}
          <a onClick={logoutHandler}>Logout</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
