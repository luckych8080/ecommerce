"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { parseCallbackUrl } from "../helper/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>

        <p>
          Don't have an account?
          <Link href="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
