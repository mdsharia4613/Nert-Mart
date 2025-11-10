import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const handleSignup = (e) => {
        e.preventDefault();
        toast.success("🎉 Account created successfully!", {
            position: "top-center",
            autoClose: 2000,
        });
        e.target.reset();
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md w-[380px]">
            <ToastContainer />
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Create an Account</h2>

            <form onSubmit={handleSignup} className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="border px-4 py-2 w-full rounded focus:outline-none focus:border-green-500"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border px-4 py-2 w-full rounded focus:outline-none focus:border-green-500"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border px-4 py-2 w-full rounded focus:outline-none focus:border-green-500"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border px-4 py-2 w-full rounded focus:outline-none focus:border-green-500"
                    required
                />
                <button
                    className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition"
                >
                    Sign Up
                </button>
            </form>

            <p className="text-sm text-center mt-4 text-gray-600">
                Already have an account?{" "}
                <Link
                    to="/auth/login"
                    className="text-green-600 font-semibold hover:underline"
                >
                    Login here
                </Link>
            </p>
        </div>
    );
};

export default Signup;
