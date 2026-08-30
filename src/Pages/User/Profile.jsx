import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  Mail,
  Save,
  School,
  User,
} from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../Firebase";

function Profile() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institutionName, setInstitutionName] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setLoading(false);
        return;
      }

      setUser(currentUser);

      try {
        const userRef = doc(db, "users", currentUser.uid);
        const snapshot = await getDoc(userRef);

        if (snapshot.exists()) {
          const data = snapshot.data();

          setProfile(data);
          setFirstName(data.firstName || "");
          setLastName(data.lastName || "");
          setInstitutionName(data.institutionName || "");
        }
      } catch (err) {
        console.error("Error loading profile:", err);
        setError("Could not load your profile.");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();

    if (!user) return;

    setSaving(true);
    setMessage("");
    setError("");

    try {
      const userRef = doc(db, "users", user.uid);

      if (profile?.role === "school") {
        await updateDoc(userRef, {
          institutionName,
        });
      } else {
        await updateDoc(userRef, {
          firstName,
          lastName,
        });
      }

      setMessage("Profile updated successfully.");
    } catch (err) {
      console.error("Profile update error:", err);
      setError("Could not update your profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <GraduationCap
            size={40}
            className="mx-auto text-blue-600"
          />

          <p className="mt-3 text-sm font-semibold text-slate-500">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  const isSchool = profile?.role === "school";

  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1100px] items-center justify-between px-[5%]">

          <Link
            to="/dashboard"
            className="flex items-center gap-2.5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <GraduationCap size={22} />
            </span>

            <span className="text-xl font-extrabold text-slate-900">
              Skool<span className="text-blue-600">ify</span>
            </span>
          </Link>

          <Link
            to={isSchool ? "/admin-dashboard" : "/dashboard"}
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </Link>

        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-[900px] px-[5%] py-10">

        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            ACCOUNT
          </p>

          <h1 className="mt-1 text-3xl font-extrabold text-slate-900">
            Profile Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your personal account information.
          </p>

        </div>

        {/* PROFILE CARD */}
        <section className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

          {/* PROFILE HEADER */}
          <div className="bg-blue-600 px-6 py-8 sm:px-8">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-extrabold text-blue-600">
                {isSchool
                  ? (institutionName || "S").charAt(0).toUpperCase()
                  : (firstName || "U").charAt(0).toUpperCase()}
              </div>

              <div>

                <h2 className="text-xl font-extrabold text-white">
                  {isSchool
                    ? institutionName || "Your Institution"
                    : `${firstName} ${lastName}`.trim() || "Your Profile"}
                </h2>

                <p className="mt-1 text-sm text-blue-100">
                  {isSchool ? "School Account" : "Parent / Student Account"}
                </p>

              </div>

            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSave}
            className="p-6 sm:p-8"
          >

            {/* ACCOUNT TYPE */}
            <div className="mb-7 rounded-xl bg-slate-50 p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  {isSchool ? (
                    <School size={19} />
                  ) : (
                    <User size={19} />
                  )}
                </div>

                <div>

                  <p className="text-xs font-semibold text-slate-400">
                    ACCOUNT TYPE
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-800">
                    {isSchool ? "School" : "Parent / Student"}
                  </p>

                </div>

                <CheckCircle2
                  size={19}
                  className="ml-auto text-green-500"
                />

              </div>

            </div>

            {/* SCHOOL */}
            {isSchool ? (
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Institution Name
                </label>

                <div className="relative">

                  <School
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    value={institutionName}
                    onChange={(e) =>
                      setInstitutionName(e.target.value)
                    }
                    placeholder="Institution name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

              </div>
            ) : (
              /* PARENT / STUDENT */
              <div className="grid gap-4 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) =>
                      setFirstName(e.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) =>
                      setLastName(e.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

              </div>
            )}

            {/* EMAIL */}
            <div className="mt-5">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-500"
                />

              </div>

              <p className="mt-2 text-xs text-slate-400">
                Your email address cannot be changed here.
              </p>

            </div>

            {/* MESSAGE */}
            {message && (
              <div className="mt-5 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-medium text-green-600">
                {message}
              </div>
            )}

            {error && (
              <div className="mt-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* SAVE */}
            <div className="mt-7 flex justify-end">

              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
              >

                <Save size={17} />

                {saving ? "Saving..." : "Save Changes"}

              </button>

            </div>

          </form>

        </section>

      </main>
    </div>
  );
}

export default Profile;