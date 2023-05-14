"use client";

const NewProduct = () => {
  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Sports",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  return (
    <>
      <section>
        <h1>Create New Product</h1>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Product name"
              required
            ></input>
          </div>
          <div>
            <label>Description</label>
            <textarea
              type="text"
              name="description"
              placeholder="Product description"
              required
            ></textarea>
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              name="price"
              placeholder="Product Price"
              required
            ></input>
          </div>
          <div>
            <label>Seller</label>
            <input
              type="text"
              name="seller"
              placeholder="Product seller"
              required
            ></input>
          </div>
          <div>
            <label>Stock</label>
            <input
              type="text"
              name="stock"
              placeholder="Product stock"
              required
            ></input>
          </div>
          <div>
            <label>Category</label>
            <div>
              <select name="category" required>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewProduct;
