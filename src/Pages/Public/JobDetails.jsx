import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function JobDetails() {
  const { id } = useParams();
  const [showApplication, setShowApplication] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Prototype job data
  const job = {
    title: "Mathematics Teacher",
    school: "Green Valley Academy",
    location: "Westlands, Nairobi, Kenya",
    type: "Full Time",
    category: "Teaching",
    posted: "2 days ago",
    deadline: "30 September 2026",

    description:
      "Green Valley Academy is looking for a passionate and qualified Mathematics Teacher to join our teaching team. The successful candidate will be responsible for delivering engaging mathematics lessons and supporting students in achieving their academic goals.",

    responsibilities: [
      "Prepare and deliver mathematics lessons.",
      "Assess student progress and maintain academic records.",
      "Support students with different learning needs.",
      "Participate in school activities and departmental meetings.",
      "Work closely with parents and other teachers.",
    ],

    requirements: [
      "Bachelor's degree in Education or a related field.",
      "Relevant teaching experience.",
      "Strong communication and classroom management skills.",
      "Ability to work well with students and other staff.",
    ],

    phone: "+254 700 000 000",
    email: "info@greenvalleyacademy.com",
  };

  const handleApplication = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    job.location
  )}`;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-[5%]">

          <Link
            to="/dashboard"
            className="flex items-center gap-2.5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-extrabold text-white">
              S
            </span>

            <span className="text-xl font-extrabold text-slate-900">
              Skool<span className="text-blue-600">ify</span>
            </span>
          </Link>

          <Link
            to={`/schools/${id}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Back to school
          </Link>

        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1100px] px-[5%] py-8">

        {/* JOB HEADER */}
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

            <div className="flex gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <BriefcaseBusiness size={27} />
              </div>

              <div>

                <span className="inline-flex rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
                  {job.type}
                </span>

                <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  {job.title}
                </h1>

                <div className="mt-3 space-y-2 text-sm text-slate-500">

                  <p className="flex items-center gap-2">
                    <Building2
                      size={17}
                      className="text-blue-600"
                    />
                    {job.school}
                  </p>

                  <p className="flex items-center gap-2">
                    <MapPin
                      size={17}
                      className="text-blue-600"
                    />
                    {job.location}
                  </p>

                </div>

              </div>

            </div>

            <button
              type="button"
              onClick={() => setShowApplication(true)}
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <Send size={18} />
              Apply Now
            </button>

          </div>

          {/* JOB META */}
          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-3">

            <div className="rounded-xl bg-slate-50 p-4">

              <p className="text-[10px] font-bold text-slate-400">
                CATEGORY
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                {job.category}
              </p>

            </div>

            <div className="rounded-xl bg-slate-50 p-4">

              <p className="text-[10px] font-bold text-slate-400">
                POSTED
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                {job.posted}
              </p>

            </div>

            <div className="rounded-xl bg-slate-50 p-4">

              <p className="text-[10px] font-bold text-slate-400">
                APPLICATION DEADLINE
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                {job.deadline}
              </p>

            </div>

          </div>

        </section>

        {/* CONTENT */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_330px]">

          {/* LEFT */}
          <div className="space-y-6">

            {/* DESCRIPTION */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">

              <h2 className="text-xl font-extrabold text-slate-900">
                Job Description
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {job.description}
              </p>

            </section>

            {/* RESPONSIBILITIES */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">

              <h2 className="text-xl font-extrabold text-slate-900">
                Responsibilities
              </h2>

              <div className="mt-5 space-y-3">

                {job.responsibilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-blue-600"
                    />
                    {item}
                  </div>
                ))}

              </div>

            </section>

            {/* REQUIREMENTS */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">

              <h2 className="text-xl font-extrabold text-slate-900">
                Requirements
              </h2>

              <div className="mt-5 space-y-3">

                {job.requirements.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-green-600"
                    />
                    {item}
                  </div>
                ))}

              </div>

            </section>

          </div>

          {/* RIGHT */}
          <aside className="space-y-6">

            {/* SCHOOL */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-extrabold text-slate-900">
                About the School
              </h2>

              <div className="mt-5 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Building2 size={20} />
                </div>

                <div>

                  <p className="text-sm font-bold text-slate-800">
                    {job.school}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {job.location}
                  </p>

                </div>

              </div>

              <Link
                to={`/schools/${id}`}
                className="mt-5 block w-full rounded-xl border border-slate-200 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                View School Profile
              </Link>

            </section>

            {/* LOCATION */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-extrabold text-slate-900">
                Job Location
              </h2>

              <div className="mt-4 rounded-xl bg-slate-100 p-4">

                <div className="flex items-start gap-3">

                  <MapPin
                    size={20}
                    className="shrink-0 text-blue-600"
                  />

                  <p className="text-sm font-semibold text-slate-700">
                    {job.location}
                  </p>

                </div>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  <MapPin size={17} />
                  Open in Google Maps
                </a>

              </div>

            </section>

            {/* CONTACT */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-extrabold text-slate-900">
                Contact School
              </h2>

              <div className="mt-5 space-y-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-blue-600">
                    <Phone size={17} />
                  </div>

                  <div>

                    <p className="text-[10px] font-bold text-slate-400">
                      PHONE
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {job.phone}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-blue-600">
                    <Mail size={17} />
                  </div>

                  <div>

                    <p className="text-[10px] font-bold text-slate-400">
                      EMAIL
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-slate-700">
                      {job.email}
                    </p>

                  </div>

                </div>

              </div>

            </section>

          </aside>

        </div>

      </main>

      {/* APPLICATION MODAL */}
      {showApplication && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4">

          <div className="max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl bg-white shadow-2xl">

            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-slate-100 p-5">

              <div>

                <p className="text-xs font-bold text-blue-600">
                  {job.school}
                </p>

                <h2 className="mt-1 text-xl font-extrabold text-slate-900">
                  Apply for {job.title}
                </h2>

              </div>

              <button
                type="button"
                onClick={() => setShowApplication(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900"
              >
                <X size={20} />
              </button>

            </div>

            {!submitted ? (

              <form
                onSubmit={handleApplication}
                className="space-y-5 p-5"
              >

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="+254 7XX XXX XXX"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Cover Message
                  </label>

                  <textarea
                    rows="4"
                    required
                    placeholder="Tell the school briefly why you are interested in this position..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  <Send size={17} />
                  Submit Application
                </button>

              </form>

            ) : (

              <div className="p-8 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={34} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                  Application Submitted!
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Your application has been submitted successfully.
                  The school can review your application and contact you
                  using the details provided.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setShowApplication(false);
                    setSubmitted(false);
                  }}
                  className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700"
                >
                  Done
                </button>

              </div>

            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default JobDetails;