const App = () => {
  return (
    <>
      <div
        id="container"
        className="border-2 border-black rounded-3xl lg:flex lg:justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign up
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account
                <a
                  href="#"
                  title=""
                  className="font-medium text-black transition-all duration-200 hover:underline"
                >
                  Sign In
                </a>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 "
                        type="text"
                        placeholder="Full Name"
                        id="name"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400"
                        type="email"
                        placeholder="Email"
                        id="email"
                      ></input>
                    </div>
                  </div>
                  <div>
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
                        type="password"
                        placeholder="Password"
                        id="password"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
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
              className="mx-auto h-[540px] w-[620px] rounded-md object-cover hidden lg:block"
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
