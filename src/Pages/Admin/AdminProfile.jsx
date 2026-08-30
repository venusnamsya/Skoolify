import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Mail,
  Phone,
  Save,
} from "lucide-react";

function AdminProfile() {
  const [schoolName, setSchoolName] = useState("Green Valley Academy");
  const [location, setLocation] = useState("Westlands, Nairobi");
  const [email, setEmail] = useState("school@example.com");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState(
    "A school committed to providing quality education and opportunities for students."
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("School profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-[5%]">

          <Link to="/admin-dashboard" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-extrabold text-white">
              S
            </span>

            <span className="text-xl font-extrabold text-slate-900">
              Skool<span className="text-blue-600">ify</span>
            </span>
          </Link>

          <Link
            to="/admin-dashboard"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </Link>

        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-4xl px-[5%] py-10">

        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            SCHOOL PROFILE
          </p>

          <h1 className="mt-1 text-3xl font-extrabold text-slate-900">
            School Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage the information displayed about your school.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* BASIC INFORMATION */}
          <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Building2 size={21} />
              </div>

              <div>
                <h2 className="font-extrabold text-slate-900">
                  School Information
                </h2>

                <p className="text-xs text-slate-500">
                  Basic information about your institution
                </p>
              </div>

            </div>

            <div className="mt-6 space-y-5">

              {/* SCHOOL NAME */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  School Name
                </label>

                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Location
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    required
                  />
                </div>
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  School Description
                </label>

                <textarea
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

            </div>

          </section>

          {/* CONTACT */}
          <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Mail size={21} />
              </div>

              <div>
                <h2 className="font-extrabold text-slate-900">
                  Contact Information
                </h2>

                <p className="text-xs text-slate-500">
                  How parents and students can contact your school
                </p>
              </div>

            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  School Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+254..."
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

            </div>

          </section>

          {/* SAVE */}
          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <Save size={18} />
              Save Changes
            </button>

          </div>

        </form>

      </main>

    </div>
  );
}

export default AdminProfile;