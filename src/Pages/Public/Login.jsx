import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { School } from "lucide-react";

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

    if (loading) return;

    setError("");
    setLoading(true);

    try {
      // 1. SIGN IN WITH FIREBASE AUTHENTICATION
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      const user = userCredential.user;

      // 2. GET USER PROFILE FROM FIRESTORE
      // We use a timeout so Firestore cannot keep the login
      // process stuck forever.
      let userData = null;

      try {
        const userDocPromise = getDoc(
          doc(db, "users", user.uid)
        );

        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("Firestore timeout")),
            5000
          )
        );

        const userDoc = await Promise.race([
          userDocPromise,
          timeoutPromise,
        ]);

        if (userDoc.exists()) {
          userData = userDoc.data();
        }
      } catch (firestoreError) {
        console.error(
          "Could not load Firestore profile:",
          firestoreError
        );
      }

      // 3. GO TO CORRECT DASHBOARD
      if (userData?.role === "school") {
        navigate("/admin-dashboard", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }

    } catch (err) {
      console.error("LOGIN ERROR:", err);

      if (err.code === "auth/invalid-credential") {
        setError("Incorrect email or password.");
      } else if (err.code === "auth/user-not-found") {
        setError("No account was found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/too-many-requests") {
        setError(
          "Too many login attempts. Please wait a moment and try again."
        );
      } else if (err.code === "auth/network-request-failed") {
        setError(
          "Network error. Please check your internet connection."
        );
      } else if (err.code === "permission-denied") {
        setError(
          "Firebase denied access to your account information."
        );
      } else {
        setError(
          err.message ||
            "Something went wrong. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#172554] text-white p-12 relative overflow-hidden">

        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#172554] rounded-full opacity-50" />

        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-[#E76F51] rounded-full opacity-50" />

        <div className="relative z-10 flex flex-col justify-between w-full">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-xl bg-white text-[#E76F51] flex items-center justify-center font-bold text-xl">
              S
            </div>

            <span className="text-2xl font-bold">
              Skool<span className="text-[#E76F51]">ify</span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => navigate("/landing-page")}
            className="mb-6 flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#F47C68]"
          >
            <span className="text-lg">←</span>
            Back to Home
          </button>

          <div className="max-w-lg">

            <div className="mb-8 text-[#E76F51]">
              <School size={64} strokeWidth={1.8} />
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
            <span className="w-9 h-9 bg-[#E76F51] text-white rounded-lg flex items-center justify-center">
              S
            </span>

            Skool<span className="text-[#E76F51]">ify</span>
          </Link>

          {/* HEADING */}
          <div className="mb-8">

            <p className="text-[#E76F51] font-semibold text-sm mb-2">
              WELCOME BACK
            </p>

            <h2 className="text-3xl font-bold text-slate-900">
              Sign in to your account
            </h2>

            <p className="text-slate-500 mt-2">
              Access your schools, applications and bookings.
            </p>

          </div>

          {/* ERROR */}
          {error && (
            <div className="mb-5 rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* FORM */}
          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* EMAIL */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
                disabled={loading}
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#E76F51] focus:border-transparent bg-white disabled:bg-slate-100"
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
                  className="text-sm text-[#E76F51] font-medium"
                >
                  Forgot password?
                </button>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
                disabled={loading}
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#E76F51] focus:border-transparent bg-white disabled:bg-slate-100"
              />

            </div>

            {/* REMEMBER ME */}
            <label className="flex items-center gap-3 text-sm text-slate-600">

              <input
                type="checkbox"
                className="w-4 h-4 accent-[#E76F51]"
              />

              Remember me

            </label>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E76F51] hover:bg-[#d95f43] disabled:bg-[#e99a87] text-white py-3.5 rounded-xl font-semibold transition"
            >
              {loading
                ? "Signing in..."
                : "Sign In →"}
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
              className="text-[#E76F51] font-semibold hover:underline"
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