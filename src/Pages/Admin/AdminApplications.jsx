import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Search,
  User,
  XCircle,
} from "lucide-react";

function AdminApplications() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Mary Wanjiku",
      email: "mary@example.com",
      type: "Student Admission",
      vacancy: "Grade 7 Admission",
      date: "Today",
      status: "Pending",
    },
    {
      id: 2,
      name: "James Otieno",
      email: "james@example.com",
      type: "Job Application",
      vacancy: "Mathematics Teacher",
      date: "Yesterday",
      status: "Reviewing",
    },
    {
      id: 3,
      name: "Amina Hassan",
      email: "amina@example.com",
      type: "Student Admission",
      vacancy: "Grade 7 Admission",
      date: "2 days ago",
      status: "Pending",
    },
    {
      id: 4,
      name: "David Mwangi",
      email: "david@example.com",
      type: "Job Application",
      vacancy: "ICT Teacher",
      date: "3 days ago",
      status: "Accepted",
    },
    {
      id: 5,
      name: "Brian Kamau",
      email: "brian@example.com",
      type: "Student Admission",
      vacancy: "Grade 7 Admission",
      date: "4 days ago",
      status: "Rejected",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setApplications((currentApplications) =>
      currentApplications.map((application) =>
        application.id === id
          ? { ...application, status: newStatus }
          : application
      )
    );
  };

  const filteredApplications = applications.filter((application) => {
    const matchesSearch =
      application.name.toLowerCase().includes(search.toLowerCase()) ||
      application.email.toLowerCase().includes(search.toLowerCase()) ||
      application.vacancy.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || application.status === filter;

    return matchesSearch && matchesFilter;
  });

  const getStatusStyle = (status) => {
    if (status === "Accepted") {
      return "bg-green-50 text-green-600";
    }

    if (status === "Rejected") {
      return "bg-red-50 text-red-600";
    }

    if (status === "Reviewing") {
      return "bg-blue-50 text-blue-600";
    }

    return "bg-orange-50 text-orange-600";
  };

  return (
    <div className="min-h-screen bg-slate-50">

      
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

      
      <main className="mx-auto max-w-[1400px] px-[5%] py-8">

        
        <Link
          to="/admin-dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to dashboard
        </Link>

        
        <section className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            SCHOOL ADMINISTRATION
          </p>

          <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Applications
          </h1>

          <p className="mt-2 text-slate-500">
            Review and manage applications received by your school.
          </p>

        </section>

        {/* STATS */}
        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ClipboardList size={21} />
            </div>

            <p className="mt-4 text-xs font-semibold text-slate-400">
              TOTAL APPLICATIONS
            </p>

            <p className="mt-1 text-2xl font-extrabold text-slate-900">
              {applications.length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <User size={21} />
            </div>

            <p className="mt-4 text-xs font-semibold text-slate-400">
              PENDING
            </p>

            <p className="mt-1 text-2xl font-extrabold text-slate-900">
              {applications.filter((a) => a.status === "Pending").length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <CheckCircle2 size={21} />
            </div>

            <p className="mt-4 text-xs font-semibold text-slate-400">
              ACCEPTED
            </p>

            <p className="mt-1 text-2xl font-extrabold text-slate-900">
              {applications.filter((a) => a.status === "Accepted").length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <XCircle size={21} />
            </div>

            <p className="mt-4 text-xs font-semibold text-slate-400">
              REJECTED
            </p>

            <p className="mt-1 text-2xl font-extrabold text-slate-900">
              {applications.filter((a) => a.status === "Rejected").length}
            </p>
          </div>

        </section>

        <section className="rounded-2xl border border-slate-100 bg-white shadow-sm">

      }
          <div className="flex flex-col gap-4 border-b border-slate-100 p-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="text-xl font-extrabold text-slate-900">
                All Applications
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Review applicants and update their application status.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              {/* SEARCH */}
              <div className="relative">

                <Search
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search applications..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:bg-white sm:w-64"
                />

              </div>

             
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              >
                <option value="All">All statuses</option>
                <option value="Pending">Pending</option>
                <option value="Reviewing">Reviewing</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>

            </div>

          </div>

          <div className="divide-y divide-slate-100">

            {filteredApplications.map((application) => (

              <div
                key={application.id}
                className="p-6 transition hover:bg-slate-50/50"
              >

                <div className="flex flex-col gap-5 xl:flex-row xl:items-center">

                  
                  <div className="flex flex-1 items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600">
                      {application.name.charAt(0)}
                    </div>

                    <div>

                      <h3 className="font-bold text-slate-800">
                        {application.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {application.email}
                      </p>

                    </div>

                  </div>

                 }
                  <div className="flex items-center gap-3 xl:w-52">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-blue-600">

                      {application.type === "Job Application" ? (
                        <BriefcaseBusiness size={19} />
                      ) : (
                        <GraduationCap size={19} />
                      )}

                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        APPLICATION
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-700">
                        {application.type}
                      </p>
                    </div>

                  </div>

                  <div className="xl:w-56">

                    <p className="text-xs text-slate-400">
                      APPLIED FOR
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-700">
                      {application.vacancy}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {application.date}
                    </p>

                  </div>

                  {/* STATUS + ACTIONS */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center xl:w-auto">

                    <span
                      className={`w-fit rounded-full px-3 py-1.5 text-xs font-bold ${getStatusStyle(
                        application.status
                      )}`}
                    >
                      {application.status}
                    </span>

                    {application.status !== "Accepted" &&
                      application.status !== "Rejected" && (
                        <div className="flex gap-2">

                          <button
                            type="button"
                            onClick={() =>
                              updateStatus(application.id, "Accepted")
                            }
                            className="rounded-lg bg-green-50 px-3 py-2 text-xs font-bold text-green-600 hover:bg-green-100"
                          >
                            Accept
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              updateStatus(application.id, "Rejected")
                            }
                            className="rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-100"
                          >
                            Reject
                          </button>

                        </div>
                      )}

                    {application.status === "Accepted" && (
                      <button
                        type="button"
                        onClick={() =>
                          updateStatus(application.id, "Reviewing")
                        }
                        className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-600 hover:bg-blue-100"
                      >
                        Reopen
                      </button>
                    )}

                    {application.status === "Rejected" && (
                      <button
                        type="button"
                        onClick={() =>
                          updateStatus(application.id, "Reviewing")
                        }
                        className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-600 hover:bg-blue-100"
                      >
                        Review Again
                      </button>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* NO RESULTS */}
          {filteredApplications.length === 0 && (
            <div className="px-6 py-16 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
                <Search size={24} />
              </div>

              <h3 className="mt-4 font-bold text-slate-800">
                No applications found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or status filter.
              </p>

            </div>
          )}

        </section>

      </main>
    </div>
  );
}

export default AdminApplications;