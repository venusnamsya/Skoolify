import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  const schools = [
    {
      id: 1,
      name: "Green Valley Academy",
      location: "Westlands, Nairobi",
      type: "Private",
      level: "Secondary",
      vacancies: 12,
      fee: "KES 85,000 / term",
      rating: "4.8",
      image: "🏫",
    },
    {
      id: 2,
      name: "Bright Future School",
      location: "Kilimani, Nairobi",
      type: "Private",
      level: "Primary",
      vacancies: 8,
      fee: "KES 65,000 / term",
      rating: "4.6",
      image: "🎓",
    },
    {
      id: 3,
      name: "Coastal International School",
      location: "Nyali, Mombasa",
      type: "International",
      level: "Secondary",
      vacancies: 15,
      fee: "KES 120,000 / term",
      rating: "4.9",
      image: "🏛️",
    },
  ];

  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(search.toLowerCase()) ||
      school.location.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "" ||
      school.location.toLowerCase().includes(location.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-[5%]">

          {/* Logo */}
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

          {/* Search */}
          <div className="mx-8 hidden max-w-md flex-1 md:block">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                🔎
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search schools..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* User */}
          <div className="flex items-center gap-4">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-lg">
              🔔
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-600" />
            </button>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                U
              </div>

              <div>
                <p className="text-sm font-bold text-slate-800">
                  User
                </p>

                <p className="text-xs text-slate-400">
                  Parent / Student
                </p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-[1400px] px-[5%] py-8">

        {/* WELCOME */}
        <section className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            DASHBOARD
          </p>

          <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Hello, User 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Find schools and opportunities that match what you're looking for.
          </p>
        </section>

        {/* QUICK STATS */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🏫</span>
              <span className="text-xs font-semibold text-green-600">
                Available
              </span>
            </div>

            <p className="mt-5 text-2xl font-extrabold text-slate-900">
              500+
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Schools listed
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🪑</span>
              <span className="text-xs font-semibold text-blue-600">
                Updated
              </span>
            </div>

            <p className="mt-5 text-2xl font-extrabold text-slate-900">
              2,000+
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Vacancies
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-2xl">❤️</span>
              <span className="text-xs font-semibold text-slate-400">
                Your list
              </span>
            </div>

            <p className="mt-5 text-2xl font-extrabold text-slate-900">
              6
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Saved schools
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-2xl">📅</span>
              <span className="text-xs font-semibold text-orange-500">
                Upcoming
              </span>
            </div>

            <p className="mt-5 text-2xl font-extrabold text-slate-900">
              2
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Bookings
            </p>
          </div>

        </section>

        {/* SEARCH PANEL */}
        <section className="mb-10 rounded-2xl bg-blue-600 p-6 shadow-lg shadow-blue-600/10 sm:p-8">

          <div className="mb-5">
            <h2 className="text-xl font-extrabold text-white">
              Find your school
            </h2>

            <p className="mt-1 text-sm text-blue-100">
              Search by school name or filter by location.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-[1fr_250px_auto]">

            {/* Search */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                🔎
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a school..."
                className="w-full rounded-xl bg-white px-4 py-3.5 pl-11 text-sm outline-none"
              />
            </div>

            {/* Location */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                📍
              </span>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none rounded-xl bg-white px-4 py-3.5 pl-11 text-sm outline-none"
              >
                <option value="">All locations</option>
                <option value="Nairobi">Nairobi</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Kisumu">Kisumu</option>
                <option value="Nakuru">Nakuru</option>
                <option value="Kiambu">Kiambu</option>
              </select>
            </div>

            <button
              type="button"
              className="rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Search
            </button>

          </div>
        </section>

        {/* SCHOOL LIST HEADER */}
        <section id="schools">

          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Schools for you
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Explore schools with available opportunities.
              </p>
            </div>

            <button className="text-sm font-bold text-blue-600">
              View all →
            </button>
          </div>

          {/* SCHOOL CARDS */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {filteredSchools.map((school) => (
              <div
                key={school.id}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
              >

                {/* IMAGE */}
                <div className="relative flex h-48 items-center justify-center bg-blue-50 text-7xl">
                  {school.image}

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-green-600 shadow-sm">
                    ✓ Verified
                  </span>

                  <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                    ♡
                  </button>
                </div>

                {/* DETAILS */}
                <div className="p-5">

                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-md bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-600">
                      {school.type}
                    </span>

                    <span className="text-xs font-semibold text-slate-500">
                      ⭐ {school.rating}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {school.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    📍 {school.location}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">

                    <div>
                      <p className="text-[11px] text-slate-400">
                        VACANCIES
                      </p>

                      <p className="mt-1 text-sm font-bold text-blue-600">
                        {school.vacancies} available
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] text-slate-400">
                        FEES
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-700">
                        {school.fee}
                      </p>
                    </div>

                  </div>

                  <Link
                    to={`/schools/${school.id}`}
                    className="mt-5 block w-full rounded-xl bg-slate-900 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-600"
                  >
                    View School
                  </Link>

                </div>
              </div>
            ))}

          </div>

          {/* NO RESULTS */}
          {filteredSchools.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
              <div className="text-4xl">🔎</div>

              <h3 className="mt-4 font-bold text-slate-800">
                No schools found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try searching for another school or location.
              </p>
            </div>
          )}

        </section>

        {/* UPCOMING BOOKINGS */}
        <section className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">
                Your upcoming bookings
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Keep track of your school visits.
              </p>
            </div>

            <button className="text-sm font-bold text-blue-600">
              View all
            </button>
          </div>

          <div className="mt-6 flex items-center gap-4 rounded-xl bg-slate-50 p-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
              📅
            </div>

            <div className="flex-1">
              <p className="font-bold text-slate-800">
                Green Valley Academy
              </p>

              <p className="mt-1 text-xs text-slate-500">
                School visit • Saturday, 12 September
              </p>
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
              Confirmed
            </span>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;