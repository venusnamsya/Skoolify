import {
  ArrowLeft,
  Bookmark,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
  BriefcaseBusiness,
  X,
  ExternalLink,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function SchoolDetails() {
  const { id } = useParams();
  const [showFees, setShowFees] = useState(false);

  // Prototype school data
  const school = {
    name: "Green Valley Academy",
    location: "Westlands, Nairobi, Kenya",
    type: "Private School",
    level: "Primary & Secondary",
    rating: "4.8",
    reviews: "126 reviews",

    vacancies: 12,

    phone: "+254 700 000 000",
    email: "info@greenvalleyacademy.com",

    description:
      "Green Valley Academy is a modern learning institution focused on academic excellence, personal development and preparing students for future opportunities.",

    facilities: [
      "Science Laboratories",
      "Library",
      "Computer Laboratory",
      "Sports Facilities",
      "School Transport",
      "Boarding Facilities",
    ],

    // Prototype fee structure
    fees: [
      {
        className: "Grade 1",
        term1: "KES 25,000",
        term2: "KES 20,000",
        term3: "KES 20,000",
      },
      {
        className: "Grade 2",
        term1: "KES 25,000",
        term2: "KES 20,000",
        term3: "KES 20,000",
      },
      {
        className: "Grade 3",
        term1: "KES 27,000",
        term2: "KES 22,000",
        term3: "KES 22,000",
      },
      {
        className: "Grade 4",
        term1: "KES 30,000",
        term2: "KES 25,000",
        term3: "KES 25,000",
      },
      {
        className: "Grade 5",
        term1: "KES 32,000",
        term2: "KES 27,000",
        term3: "KES 27,000",
      },
      {
        className: "Grade 6",
        term1: "KES 35,000",
        term2: "KES 30,000",
        term3: "KES 30,000",
      },
      {
        className: "Grade 7",
        term1: "KES 38,000",
        term2: "KES 32,000",
        term3: "KES 32,000",
      },
      {
        className: "Grade 8",
        term1: "KES 40,000",
        term2: "KES 35,000",
        term3: "KES 35,000",
      },
      {
        className: "Grade 9",
        term1: "KES 42,000",
        term2: "KES 36,000",
        term3: "KES 36,000",
      },
    ],

    studentVacancies: [
      {
        title: "Grade 4 Admission",
        description:
          "Places available for students joining Grade 4 during the current academic year.",
        spaces: 4,
      },
      {
        title: "Grade 7 Admission",
        description:
          "Limited spaces available for students joining Junior Secondary.",
        spaces: 5,
      },
      {
        title: "Form 1 Admission",
        description:
          "Applications are currently open for Form 1 students.",
        spaces: 3,
      },
    ],

    jobVacancies: [
      {
        title: "Mathematics Teacher",
        type: "Full Time",
      },
      {
        title: "ICT Teacher",
        type: "Full Time",
      },
    ],
  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    school.location
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
            to="/dashboard"
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Back to schools
          </Link>

        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1200px] px-[5%] py-8">

        {/* HERO SCHOOL CARD */}
        <section className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

          {/* SCHOOL IMAGE */}
          <div className="relative flex h-[280px] items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 sm:h-[330px]">

            <div className="text-[100px] sm:text-[120px]">
              🏫
            </div>

            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-green-600 shadow-sm">
              <CheckCircle2 size={15} />
              Verified School
            </div>

            <button
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition hover:text-blue-600"
              type="button"
              aria-label="Save school"
            >
              <Bookmark size={19} />
            </button>

          </div>

          {/* SCHOOL INFORMATION */}
          <div className="p-6 sm:p-8">

            <div className="flex flex-col justify-between gap-6 md:flex-row">

              <div>

                <div className="mb-3 flex flex-wrap items-center gap-2">

                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">
                    {school.type}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500">
                    {school.level}
                  </span>

                </div>

                <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  {school.name}
                </h1>

                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">

                  <span className="flex items-center gap-1.5">
                    <MapPin
                      size={17}
                      className="text-blue-600"
                    />
                    {school.location}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Star
                      size={17}
                      className="fill-current text-yellow-500"
                    />
                    {school.rating} ({school.reviews})
                  </span>

                </div>

              </div>

              {/* BOOK BUTTON */}
              <div className="shrink-0">

                <Link
                  to={`/schools/${id}/booking`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  <CalendarDays size={18} />
                  Book a Visit
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* QUICK INFORMATION */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* STUDENT VACANCIES */}
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users size={20} />
            </div>

            <p className="mt-4 text-xs font-semibold text-slate-400">
              STUDENT VACANCIES
            </p>

            <p className="mt-1 text-xl font-extrabold text-slate-900">
              {school.vacancies} Available
            </p>

          </div>

          {/* SCHOOL LEVEL */}
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <GraduationCap size={20} />
            </div>

            <p className="mt-4 text-xs font-semibold text-slate-400">
              SCHOOL LEVEL
            </p>

            <p className="mt-1 text-xl font-extrabold text-slate-900">
              {school.level}
            </p>

          </div>

          {/* ADMISSION */}
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <Clock3 size={20} />
            </div>

            <p className="mt-4 text-xs font-semibold text-slate-400">
              ADMISSION
            </p>

            <p className="mt-1 text-xl font-extrabold text-slate-900">
              Currently Open
            </p>

          </div>

          {/* RATING */}
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Star size={20} />
            </div>

            <p className="mt-4 text-xs font-semibold text-slate-400">
              SCHOOL RATING
            </p>

            <p className="mt-1 text-xl font-extrabold text-slate-900">
              {school.rating} / 5
            </p>

          </div>

        </section>

        {/* CONTENT */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_350px]">

          {/* LEFT */}
          <div className="space-y-6">

            {/* ABOUT */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">

              <h2 className="text-xl font-extrabold text-slate-900">
                About the School
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {school.description}
              </p>

            </section>

            {/* FACILITIES */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">

              <h2 className="text-xl font-extrabold text-slate-900">
                Facilities & Services
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                {school.facilities.map((facility) => (
                  <div
                    key={facility}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5 text-sm font-medium text-slate-600"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-blue-600"
                    />

                    {facility}

                  </div>
                ))}

              </div>

            </section>

            {/* STUDENT VACANCIES */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">

              <div className="flex items-center justify-between gap-4">

                <div>

                  <h2 className="text-xl font-extrabold text-slate-900">
                    Student Vacancies
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Current admission opportunities at this school.
                  </p>

                </div>

                <span className="whitespace-nowrap rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
                  {school.vacancies} Available
                </span>

              </div>

              <div className="mt-5 space-y-3">

                {school.studentVacancies.map((vacancy) => (

                  <div
                    key={vacancy.title}
                    className="rounded-xl border border-slate-100 p-4"
                  >

                    <div className="flex items-start gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <GraduationCap size={20} />
                      </div>

                      <div className="flex-1">

                        <div className="flex flex-wrap items-center justify-between gap-2">

                          <h3 className="font-bold text-slate-800">
                            {vacancy.title}
                          </h3>

                          <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
                            {vacancy.spaces} spaces
                          </span>

                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {vacancy.description}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </section>

            {/* JOB VACANCIES */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">

              <div>

                <h2 className="text-xl font-extrabold text-slate-900">
                  Job Vacancies
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Employment opportunities posted by the school.
                </p>

              </div>

              <div className="mt-5 space-y-3">

                {school.jobVacancies.map((job) => (

                  <div
                    key={job.title}
                    className="flex items-center gap-4 rounded-xl border border-slate-100 p-4"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                      <BriefcaseBusiness size={20} />
                    </div>

                    <div className="flex-1">

                      <h3 className="font-bold text-slate-800">
                        {job.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {job.type}
                      </p>

                    </div>

                    
                        <Link
                         to={`/schools/${id}/jobs/${job.title
                           .toLowerCase()
                           .replace(/\s+/g, "-")}`}
                           className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-600 transition hover:bg-blue-100"
                        >
                          View
                        </Link>

                  </div>

                ))}

              </div>

            </section>

          </div>

          {/* RIGHT */}
          <aside className="space-y-6">

            {/* FEES */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-extrabold text-slate-900">
                Fee Structure
              </h2>

              <div className="mt-5 rounded-xl bg-blue-50 p-5">

                <p className="text-xs font-semibold text-blue-600">
                  ESTIMATED SCHOOL FEES
                </p>

                <p className="mt-2 text-2xl font-extrabold text-slate-900">
                  KES 85,000
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  estimated annual cost
                </p>

              </div>

              <button
                type="button"
                onClick={() => setShowFees(true)}
                className="mt-4 w-full rounded-xl border border-slate-200 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                View Full Fee Structure
              </button>

            </section>

            {/* CONTACT */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-extrabold text-slate-900">
                Contact School
              </h2>

              <div className="mt-5 space-y-4">

                {/* PHONE */}
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-blue-600">
                    <Phone size={18} />
                  </div>

                  <div>

                    <p className="text-[10px] font-semibold text-slate-400">
                      PHONE
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {school.phone}
                    </p>

                  </div>

                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-blue-600">
                    <Mail size={18} />
                  </div>

                  <div>

                    <p className="text-[10px] font-semibold text-slate-400">
                      EMAIL
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-slate-700">
                      {school.email}
                    </p>

                  </div>

                </div>

              </div>

            </section>

            {/* LOCATION */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-extrabold text-slate-900">
                School Location
              </h2>

              <div className="mt-4 rounded-xl bg-slate-100 p-5">

                <div className="flex items-start gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <MapPin size={20} />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-800">
                      {school.location}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Find the school's exact location and directions using
                      Google Maps.
                    </p>

                  </div>

                </div>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  <MapPin size={17} />
                  View on Google Maps
                  <ExternalLink size={15} />
                </a>

              </div>

            </section>

          </aside>

        </div>

      </main>

      {/* FULL FEE STRUCTURE MODAL */}
      {showFees && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4">

          <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">

              <div>

                <p className="text-xs font-bold text-blue-600">
                  {school.name}
                </p>

                <h2 className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Full Fee Structure
                </h2>

              </div>

              <button
                type="button"
                onClick={() => setShowFees(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
                aria-label="Close fee structure"
              >
                <X size={20} />
              </button>

            </div>

            {/* FEE TABLE */}
            <div className="max-h-[65vh] overflow-auto p-5 sm:p-6">

              <div className="overflow-x-auto rounded-xl border border-slate-200">

                <table className="w-full min-w-[650px] text-left">

                  <thead className="bg-slate-50">

                    <tr>

                      <th className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                        Class
                      </th>

                      <th className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                        Term 1
                      </th>

                      <th className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                        Term 2
                      </th>

                      <th className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                        Term 3
                      </th>

                    </tr>

                  </thead>

                  <tbody className="divide-y divide-slate-100">

                    {school.fees.map((fee) => (

                      <tr
                        key={fee.className}
                        className="transition hover:bg-slate-50"
                      >

                        <td className="px-4 py-4 text-sm font-bold text-slate-800">
                          {fee.className}
                        </td>

                        <td className="px-4 py-4 text-sm font-medium text-slate-600">
                          {fee.term1}
                        </td>

                        <td className="px-4 py-4 text-sm font-medium text-slate-600">
                          {fee.term2}
                        </td>

                        <td className="px-4 py-4 text-sm font-medium text-slate-600">
                          {fee.term3}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

              <div className="mt-4 rounded-xl bg-yellow-50 p-4">

                <p className="text-xs leading-5 text-yellow-800">
                  <strong>Note:</strong> The fee structure displayed is
                  prototype information. Actual fees, additional charges and
                  payment requirements will be provided and managed by the
                  school.
                </p>

              </div>

            </div>

            {/* MODAL FOOTER */}
            <div className="border-t border-slate-100 p-4 sm:p-5">

              <button
                type="button"
                onClick={() => setShowFees(false)}
                className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Close Fee Structure
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default SchoolDetails;