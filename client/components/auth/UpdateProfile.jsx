"use client";

import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/images/default.png");

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("image", avatar);

    updateProfile(formData);
  };

  const onChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };

    setAvatar(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <h2>Update Profile</h2>

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
            <label> Avatar </label>
            <div>
              <div>
                <img src={avatarPreview} />
              </div>
              <div>
                <input type="file" id="formFile" onChange={onChange} />
              </div>
            </div>
          </div>

          <button type="submit" disabled={loading ? true : false}>
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
