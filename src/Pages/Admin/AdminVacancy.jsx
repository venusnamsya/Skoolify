import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Plus,
} from "lucide-react";

function AdminVacancy() {
  const navigate = useNavigate();

  const [type, setType] = useState("job");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [vacancies, setVacancies] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prototype submission
    alert("Vacancy posted successfully!");

    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-[5%]">

          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-extrabold text-white">
              S
            </span>

            <span className="text-xl font-extrabold text-slate-900">
              Skool<span className="text-blue-600">ify</span>
            </span>
          </Link>

          <Link
            to="/admin-dashboard"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            Admin Dashboard
          </Link>

        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-4xl px-[5%] py-8">

        {/* BACK */}
        <Link
          to="/admin-dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to dashboard
        </Link>

        {/* HEADER */}
        <section className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            SCHOOL ADMINISTRATION
          </p>

          <h1 className="mt-1 text-3xl font-extrabold text-slate-900">
            Post a Vacancy
          </h1>

          <p className="mt-2 text-slate-500">
            Create a new opportunity for students or job seekers.
          </p>
        </section>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
        >

          {/* TYPE */}
          <div className="mb-7">

            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Vacancy type
            </label>

            <div className="grid gap-3 sm:grid-cols-2">

              <button
                type="button"
                onClick={() => setType("job")}
                className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                  type === "job"
                    ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                    : "border-slate-200 hover:border-blue-200"
                }`}
              >
                <BriefcaseBusiness
                  size={23}
                  className={
                    type === "job"
                      ? "text-blue-600"
                      : "text-slate-500"
                  }
                />

                <div>
                  <p className="font-bold text-slate-800">
                    Job Vacancy
                  </p>

                  <p className="text-xs text-slate-500">
                    Find staff for your school
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setType("student")}
                className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                  type === "student"
                    ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                    : "border-slate-200 hover:border-blue-200"
                }`}
              >
                <GraduationCap
                  size={23}
                  className={
                    type === "student"
                      ? "text-blue-600"
                      : "text-slate-500"
                  }
                />

                <div>
                  <p className="font-bold text-slate-800">
                    Student Vacancy
                  </p>

                  <p className="text-xs text-slate-500">
                    Accept new students
                  </p>
                </div>
              </button>

            </div>
          </div>

          {/* TITLE */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Vacancy title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={
                type === "job"
                  ? "e.g. Mathematics Teacher"
                  : "e.g. Grade 7 Admission"
              }
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* LOCATION */}
          <div className="mb-5">
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
                placeholder="e.g. Westlands, Nairobi"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pl-11 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* NUMBER */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Number of vacancies
            </label>

            <input
              type="number"
              min="1"
              value={vacancies}
              onChange={(e) => setVacancies(e.target.value)}
              placeholder="e.g. 5"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the opportunity..."
              rows="5"
              required
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* DEADLINE */}
          <div className="mb-7">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Application deadline
            </label>

            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <Link
              to="/admin-dashboard"
              className="rounded-xl border border-slate-200 px-6 py-3 text-center text-sm font-bold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <Plus size={18} />
              Post Vacancy
            </button>

          </div>

        </form>

      </main>
    </div>
  );
}

export default AdminVacancy;