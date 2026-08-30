import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../Firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // 1. Login through Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 2. Get the user's information from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (!userDoc.exists()) {
        throw new Error("Your account information could not be found.");
      }

      const userData = userDoc.data();

      // 3. Check the account type
      if (userData.role === "school") {
        // School → Admin Dashboard
        navigate("/admin-dashboard");
      } else if (
        userData.role === "parent" ||
        userData.role === "student"
      ) {
        // Parent/Student → Main Dashboard
        navigate("/dashboard");
      } else {
        throw new Error("Account type not recognised.");
      }
    } catch (err) {
      console.error("Login error:", err);

      if (err.code === "auth/invalid-credential") {
        setError("Incorrect email or password.");
      } else if (err.code === "auth/user-not-found") {
        setError("No account was found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError(err.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 text-white p-12 relative overflow-hidden">

        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500 rounded-full opacity-50" />

        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-blue-700 rounded-full opacity-50" />

        <div className="relative z-10 flex flex-col justify-between w-full">

          <Link to="/" className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-white text-blue-600 flex items-center justify-center font-bold text-xl">
              S
            </div>

            <span className="text-2xl font-bold">
              School<span className="text-blue-200">Find</span>
            </span>

          </Link>

          <div className="max-w-lg">

            <div className="text-6xl mb-8">
              🏫
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Your school search starts here.
            </h1>

            <p className="text-blue-100 text-lg leading-8">
              Discover schools, vacancies, fees and opportunities
              based on what matters most to you.
            </p>

          </div>

          <p className="text-blue-200 text-sm">
            Connecting students, parents and schools.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">

        <div className="w-full max-w-md">

          {/* MOBILE LOGO */}
          <Link
            to="/"
            className="lg:hidden flex items-center gap-2 mb-12 text-xl font-bold text-slate-800"
          >

            <span className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center">
              S
            </span>

            School<span className="text-blue-600">Find</span>

          </Link>

          {/* HEADING */}
          <div className="mb-8">

            <p className="text-blue-600 font-semibold text-sm mb-2">
              WELCOME BACK
            </p>

            <h2 className="text-3xl font-bold text-slate-900">
              Sign in to your account
            </h2>

            <p className="text-slate-500 mt-2">
              Access your schools, applications and bookings.
            </p>

          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="mb-5 rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* EMAIL */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <div className="flex justify-between items-center mb-2">

                <label className="block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-blue-600 font-medium"
                >
                  Forgot password?
                </button>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />

            </div>

            {/* REMEMBER ME */}
            <label className="flex items-center gap-3 text-sm text-slate-600">

              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />

              Remember me

            </label>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3.5 rounded-xl font-semibold transition"
            >
              {loading ? "Signing in..." : "Sign In →"}
            </button>

          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-7">

            <div className="h-px bg-slate-200 flex-1" />

            <span className="text-xs text-slate-400">
              OR
            </span>

            <div className="h-px bg-slate-200 flex-1" />

          </div>

          {/* REGISTER */}
          <p className="text-center text-sm text-slate-600">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create one
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;