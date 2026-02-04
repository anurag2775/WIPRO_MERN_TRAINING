import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/ProductContext";

function AddProductForm() {
  const { addProduct } = useContext(ProductContext);

  const formik = useFormik({
    initialValues: { name: "", price: "", category: "" },

    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      category: Yup.string().required("Required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      const res = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      addProduct(data);
      resetForm();
    },
  });

  return (
    <div className="container mt-4">
      <h3>Add Product</h3>

      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <br />

        <input
          name="price"
          placeholder="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        <br />

        <input
          name="category"
          placeholder="Category"
          value={formik.values.category}
          onChange={formik.handleChange}
        />
        <br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProductForm;



