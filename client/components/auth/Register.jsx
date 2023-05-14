"use client";

import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <h2>Register Account</h2>

        <div>
          <label> Full Name </label>
          <input
            type="text"
            placeholder="Type your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label> Email </label>
          <input
            type="text"
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label> Password </label>
          <input
            type="password"
            placeholder="Type your password"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>

        <hr />

        <p>
          Already have an account?
          <Link href="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
