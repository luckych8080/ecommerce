"use client";

import UserAddresses from "../user/UserAddresses";
import Link from "next/link";

const Profile = ({ addresses }) => {
  return (
    <>
      <figure>
        <div>
          <img />
        </div>
        <figcaption>
          <h5>user.name</h5>
          <p>
            <b>Email:</b> user.email | <b>Joined On:</b>
          </p>
        </figcaption>
      </figure>

      <hr />

      {/* <UserAddresses /> */}

      <Link href="/address/home">
        <button>
          <i>Add new address</i>
        </button>
      </Link>

      <hr />
    </>
  );
};
