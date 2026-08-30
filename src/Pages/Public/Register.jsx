import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  Check,
  GraduationCap,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { auth } from "../../../Firebase";

function Register() {
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState("parent");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      const profile = {
        uid: userCredential.user.uid,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        accountType,
      };

      localStorage.setItem("skoolifyUser", JSON.stringify(profile));

      navigate("/onboarding/required");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        setError("This email already exists. Please login instead.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (error.code === "auth/weak-password") {
        setError("Your password is too weak. Use at least 6 characters.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Left information panel */}
      <div className="hidden lg:flex lg:w-[42%] bg-slate-900 text-white p-12">
        <div className="flex flex-col justify-between w-full">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-xl">
              S
            </div>

            <span className="text-2xl font-bold">
              School<span className="text-blue-400">Find</span>
            </span>
          </Link>

          {/* Information */}
          <div>

            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
              <Sparkles size={30} />
            </div>

            <h1 className="text-4xl font-bold leading-tight mb-5">
              One platform for every school opportunity.
            </h1>

            <p className="text-slate-400 leading-7">
              Find schools, explore vacancies, compare fees and connect
              with schools from one convenient platform.
            </p>

            <div className="mt-10 space-y-4 text-sm text-slate-300">

              <p className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                Search schools by location
              </p>

              <p className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                Discover available vacancies
              </p>

              <p className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                View school fees and information
              </p>

              <p className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                Book school visits
              </p>

            </div>
          </div>

          <p className="text-slate-500 text-sm">
            SchoolFind ©️ 2026
          </p>

        </div>
      </div>

      {/* Registration form */}
      <div className="w-full lg:w-[58%] flex items-center justify-center p-6 sm:p-12">

        <div className="w-full max-w-xl">

          {/* Mobile logo */}
          <Link
            to="/"
            className="lg:hidden flex items-center gap-2 mb-10 text-xl font-bold text-slate-800"
          >
            <span className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center">
              S
            </span>

            School<span className="text-blue-600">Find</span>
          </Link>

          {/* Heading */}
          <div className="mb-8">

            <p className="text-blue-600 font-semibold text-sm mb-2">
              GET STARTED
            </p>

            <h2 className="text-3xl font-bold text-slate-900">
              Create your account
            </h2>

            <p className="text-slate-500 mt-2">
              Tell us who you are so we can personalize your experience.
            </p>

          </div>

          {/* Firebase error */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}

              {error.includes("already exists") && (
                <Link
                  to="/login"
                  className="ml-1 font-bold underline"
                >
                  Login
                </Link>
              )}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleRegister} className="space-y-5">

            {/* Account type */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-3">
                I am registering as
              </label>

              <div className="grid grid-cols-2 gap-3">

                {/* Parent / Student */}
                <button
                  type="button"
                  onClick={() => setAccountType("parent")}
                  className={`p-4 rounded-xl border text-left transition ${
                    accountType === "parent"
                      ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                      : "border-slate-200 bg-white"
                  }`}
                >

                  <div className="text-blue-600 mb-2">
                    <UsersRound size={28} />
                  </div>

                  <p className="font-semibold text-slate-800">
                    Parent / Student
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Find schools and opportunities
                  </p>

                </button>

                {/* School */}
                <button
                  type="button"
                  onClick={() => setAccountType("school")}
                  className={`p-4 rounded-xl border text-left transition ${
                    accountType === "school"
                      ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                      : "border-slate-200 bg-white"
                  }`}
                >

                  <div className="text-blue-600 mb-2">
                    <GraduationCap size={28} />
                  </div>

                  <p className="font-semibold text-slate-800">
                    School
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Post vacancies and manage applications
                  </p>

                </button>

              </div>
            </div>

            {/* First and Last name */}
            <div className="grid sm:grid-cols-2 gap-4">

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  First name
                </label>

                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Last name
                </label>

                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

            </div>

            {/* Email */}
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
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />

            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />

              <p className="mt-1.5 text-xs text-slate-400">
                Password must contain at least 6 characters.
              </p>

            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-slate-600">

              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 accent-blue-600"
              />

              <span>
                I agree to the platform's terms and privacy policy.
              </span>

            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3.5 rounded-xl font-semibold transition"
            >
              {loading
                ? "Creating Account..."
                : "Create Account →"}
            </button>

          </form>

          {/* Login */}
          <p className="text-center text-sm text-slate-600 mt-7">
            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;