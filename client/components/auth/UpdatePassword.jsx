"use client";

import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <>
      <div>
        <form>
          <h2>Update Password</h2>

          <div>
            <label> Current Password </label>
            <input
              type="password"
              placeholder="Type your password"
              minLength={6}
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div>
            <label> New Password </label>
            <input
              type="password"
              placeholder="Type your password"
              minLength={6}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default UpdatePassword;
