import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
  Check,
  GraduationCap,
  School,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { auth, db } from "../../../Firebase";

function Register() {
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState("parent");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institutionName, setInstitutionName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // Create Firebase Authentication account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Data saved to Firestore
      const userData =
        accountType === "school"
          ? {
              uid: user.uid,
              institutionName: institutionName,
              email: email,
              role: "school",
              createdAt: new Date(),
            }
          : {
              uid: user.uid,
              firstName: firstName,
              lastName: lastName,
              email: email,
              role: "parent",
              createdAt: new Date(),
            };

      // Save user profile
      await setDoc(doc(db, "users", user.uid), userData);

      // Send to correct dashboard
      if (accountType === "school") {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Registration error:", error);

      if (error.code === "auth/email-already-in-use") {
        setError("An account with this email already exists.");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (error.code === "permission-denied") {
        setError(
          "Account created, but your profile could not be saved. Check Firestore permissions."
        );
      } else {
        setError(error.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
    setError("");

    // Clear the fields that don't belong to the selected account
    setFirstName("");
    setLastName("");
    setInstitutionName("");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* LEFT PANEL */}
      <div className="hidden lg:flex lg:w-[42%] bg-[#172554] text-white p-12">
        <div className="flex flex-col justify-between w-full">

          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#F9736B] flex items-center justify-center">
              <School size={23} />
            </div>

            <span className="text-2xl font-bold">
              Skool<span className="text-[#F9736B]">ify</span>
            </span>
          </Link>
          
           <button
             type="button"
               onClick={() => navigate("/landing-page")}
                 className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#172554] transition-colors duration-200 hover:text-[#F47C68]"
            >
                    <span className="text-lg">←</span>
                 Back to Home
            </button>

          <div>

            <div className="w-16 h-16 bg-[#F9736B] rounded-2xl flex items-center justify-center mb-8">
              <Sparkles size={32} />
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
                <Check size={17} className="text-[#F9736B]" />
                Search schools by location
              </p>

              <p className="flex items-center gap-2">
                <Check size={17} className="text-[#F9736B]" />
                Discover available vacancies
              </p>

              <p className="flex items-center gap-2">
                <Check size={17} className="text-[#F9736B]" />
                View school fees and information
              </p>

              <p className="flex items-center gap-2">
                <Check size={17} className="text-[#F9736B]" />
                Book school visits
              </p>

            </div>

          </div>

          <p className="text-slate-500 text-sm">
            Skoolify ©️ 2026
          </p>

        </div>
      </div>

      {/* FORM */}
      <div className="w-full lg:w-[58%] flex items-center justify-center p-6 sm:p-12">

        <div className="w-full max-w-xl">

          {/* MOBILE LOGO */}
          <Link
            to="/"
            className="lg:hidden flex items-center gap-2 mb-10 text-xl font-bold text-slate-800"
          >
            <span className="w-9 h-9 bg-[#F9736B] text-white rounded-lg flex items-center justify-center">
              <School size={18} />
            </span>

            Skool<span className="text-[#F9736B]">ify</span>
          </Link>

          <div className="mb-8">

            <p className="text-[#F9736B] font-semibold text-sm mb-2">
              GET STARTED
            </p>

            <h2 className="text-3xl font-bold text-slate-900">
              Create your account
            </h2>

            <p className="text-slate-500 mt-2">
              Tell us who you are so we can personalize your experience.
            </p>

          </div>

          <form onSubmit={handleRegister} className="space-y-5">

            {/* ACCOUNT TYPE */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-3">
                I am registering as
              </label>

              <div className="grid grid-cols-2 gap-3">

                {/* PARENT / STUDENT */}
                <button
                  type="button"
                  onClick={() => handleAccountTypeChange("parent")}
                  className={`p-4 rounded-xl border text-left transition ${
                    accountType === "parent"
                      ? "border-[#F9736B] bg-[#FFF1EF] ring-1 ring-[#F9736B]"
                      : "border-slate-200 bg-white hover:border-[#FBC4BF]"
                  }`}
                >

                  <UsersRound
                    size={27}
                    className={
                      accountType === "parent"
                        ? "text-[#F9736B]"
                        : "text-slate-500"
                    }
                  />

                  <p className="font-semibold text-slate-800 mt-3">
                    Parent / Student
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Find schools and opportunities
                  </p>

                </button>

                {/* SCHOOL */}
                <button
                  type="button"
                  onClick={() => handleAccountTypeChange("school")}
                  className={`p-4 rounded-xl border text-left transition ${
                    accountType === "school"
                      ? "border-[#F9736B] bg-[#FFF1EF] ring-1 ring-[#F9736B]"
                      : "border-slate-200 bg-white hover:border-[#FBC4BF]"
                  }`}
                >

                  <GraduationCap
                    size={27}
                    className={
                      accountType === "school"
                        ? "text-[#F9736B]"
                        : "text-slate-500"
                    }
                  />

                  <p className="font-semibold text-slate-800 mt-3">
                    School
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Manage vacancies and applications
                  </p>

                </button>

              </div>

            </div>

            {/* PARENT / STUDENT FIELDS */}
            {accountType === "parent" && (
              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First name
                  </label>

                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    required
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F9736B] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last name
                  </label>

                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    required
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F9736B] bg-white"
                  />
                </div>

              </div>
            )}

            {/* SCHOOL FIELD */}
            {accountType === "school" && (
              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Institution name
                </label>

                <input
                  type="text"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  placeholder="Enter school / institution name"
                  required
                  className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F9736B] bg-white"
                />

              </div>
            )}

            {/* EMAIL */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F9736B] bg-white"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                minLength={6}
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F9736B] bg-white"
              />

            </div>

            {/* TERMS */}
            <label className="flex items-start gap-3 text-sm text-slate-600">

              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 accent-[#F9736B]"
              />

              <span>
                I agree to the platform's terms and privacy policy.
              </span>

            </label>

            {/* ERROR */}
            {error && (
              <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F9736B] hover:bg-[#E85D55] disabled:bg-[#F9A6A0] text-white py-3.5 rounded-xl font-semibold transition"
            >
              {loading ? "Creating account..." : "Create Account →"}
            </button>

          </form>

          <p className="text-center text-sm text-slate-600 mt-7">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-[#F9736B] font-semibold hover:underline"
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