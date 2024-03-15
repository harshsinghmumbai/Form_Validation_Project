import { useFormik } from "formik";
import signupSchema from "./Schema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const App = () => {
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });
  // console.log(formik);
  return (
    <>
      <div
        id="container"
        className="border-2 border-black rounded-3xl lg:flex lg:justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-3">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign up
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account
                <a
                  href="#"
                  title=""
                  className="font-medium text-black transition-all duration-200 hover:underline px-2"
                >
                  Sign In
                </a>
              </p>
              <form
                action="#"
                method="POST"
                onSubmit={handleSubmit}
                className="mt-8"
              >
                <div className="space-y-5">
                  <div id="Name_field">
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 "
                        name="name"
                        autoComplete="off"
                        type="text"
                        id="name"
                        placeholder="Enter Full Name"
                        value={values.name} // updated value//
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.name && touched.name ? (
                        <p className="text-xs text-red-700 font-semibold font-mono">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div id="Email_field">
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400"
                        name="email"
                        autoComplete="off"
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        value={values.email} //updated value//
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.email && touched.email ? (
                        <p className="text-xs text-red-700 font-semibold font-mono">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div id="password_field">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-gray-900"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 "
                        name="password"
                        autoComplete="off"
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        value={values.password} //updated value//
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.password && touched.password ? (
                        <p className="text-xs text-red-700 font-semibold font-mono">
                          {errors.password}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div id="confirm_password_filed">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="Confirm_Password"
                        className="text-base font-medium text-gray-900"
                      >
                        Confirm Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 "
                        name="confirm_password"
                        autoComplete="off"
                        type="password"
                        id="password"
                        placeholder="Enter Confirm Password" //updated values//
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.confirm_password && touched.confirm_password ? (
                        <p className="text-xs text-red-700 font-semibold font-mono">
                          {errors.confirm_password}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div id="submit_button ">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="image" className="p-2 mt-5">
            <img
              className="mx-auto h-[550px] w-[620px] rounded-md object-cover hidden lg:block"
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
