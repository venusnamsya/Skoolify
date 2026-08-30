import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  Bookmark,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  LogOut,
  MapPin,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../Firebase";

function Dashboard() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  // --------------------------------------------------
  // GET CURRENT FIREBASE USER
  // --------------------------------------------------

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setCurrentUser(null);
        setUserProfile(null);
        setLoadingUser(false);

        navigate("/login");
        return;
      }

      setCurrentUser(user);

      try {
        const userRef = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userRef);

        if (userSnapshot.exists()) {
          setUserProfile(userSnapshot.data());
        } else {
          // Fallback if the Firestore profile doesn't exist
          setUserProfile({
            email: user.email,
            role: "parent",
          });
        }
      } catch (error) {
        console.error("Error loading user profile:", error);

        setUserProfile({
          email: user.email,
          role: "parent",
        });
      } finally {
        setLoadingUser(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // --------------------------------------------------
  // LOGOUT
  // --------------------------------------------------

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // --------------------------------------------------
  // USER NAME
  // --------------------------------------------------

  const getUserName = () => {
    if (!userProfile) return "User";

    if (userProfile.role === "school") {
      return userProfile.institutionName || "School";
    }

    if (userProfile.firstName) {
      return userProfile.firstName;
    }

    return "User";
  };

  const getFullName = () => {
    if (!userProfile) return "User";

    if (userProfile.role === "school") {
      return userProfile.institutionName || "School";
    }

    const firstName = userProfile.firstName || "";
    const lastName = userProfile.lastName || "";

    return `${firstName} ${lastName}`.trim() || "User";
  };

  const getRole = () => {
    if (userProfile?.role === "school") {
      return "School";
    }

    return "Parent / Student";
  };

  const userName = getUserName();
  const fullName = getFullName();
  const role = getRole();

  // --------------------------------------------------
  // SCHOOL DATA
  // --------------------------------------------------

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
    },
  ];

  // --------------------------------------------------
  // SEARCH / FILTER
  // --------------------------------------------------

  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(search.toLowerCase()) ||
      school.location.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "" ||
      school.location.toLowerCase().includes(location.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  // --------------------------------------------------
  // LOADING
  // --------------------------------------------------

  if (loadingUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
            <GraduationCap size={25} />
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // DASHBOARD
  // --------------------------------------------------

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">

        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-[5%]">

          {/* LOGO */}

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

          {/* SEARCH */}

          <div className="mx-8 hidden max-w-md flex-1 md:block">

            <div className="relative">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search schools..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />

            </div>

          </div>

          {/* RIGHT NAV */}

          <div className="flex items-center gap-3">

            {/* NOTIFICATIONS */}

            <button
              type="button"
              title="Notifications"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >

              <Bell size={19} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600" />

            </button>

            {/* PROFILE */}

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="hidden items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-50 sm:flex"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                {userName.charAt(0).toUpperCase()}
              </div>

              <div className="text-left">

                <p className="text-sm font-bold text-slate-800">
                  {fullName}
                </p>

                <p className="text-xs text-slate-400">
                  {role}
                </p>

              </div>

            </button>

            {/* SETTINGS */}

            <button
              type="button"
              onClick={() => navigate("/settings")}
              title="Settings"
              className="hidden h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600 md:flex"
            >
              <Settings size={18} />
            </button>

            {/* LOGOUT */}

            <button
              type="button"
              onClick={handleLogout}
              title="Logout"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition hover:bg-red-50 hover:text-red-600"
            >
              <LogOut size={18} />
            </button>

          </div>

        </div>

      </header>

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <main className="mx-auto max-w-[1400px] px-[5%] py-8">

        {/* WELCOME */}

        <section className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            DASHBOARD
          </p>

          <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Hello, {userName} 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Find schools and opportunities that match what you're looking
            for.
          </p>

        </section>

        {/* ==================================================
            QUICK STATS
        ================================================== */}

        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* SCHOOLS */}

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <GraduationCap size={20} />
              </div>

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

          {/* VACANCIES */}

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users size={20} />
              </div>

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

          {/* SAVED */}

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                <Bookmark size={20} />
              </div>

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

          {/* BOOKINGS */}

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <CalendarDays size={20} />
              </div>

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

        {/* ==================================================
            SEARCH PANEL
        ================================================== */}

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

            {/* SEARCH */}

            <div className="relative">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a school..."
                className="w-full rounded-xl bg-white px-4 py-3.5 pl-11 text-sm outline-none"
              />

            </div>

            {/* LOCATION */}

            <div className="relative">

              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none rounded-xl bg-white px-4 py-3.5 pl-11 text-sm outline-none"
              >

                <option value="">
                  All locations
                </option>

                <option value="Nairobi">
                  Nairobi
                </option>

                <option value="Mombasa">
                  Mombasa
                </option>

                <option value="Kisumu">
                  Kisumu
                </option>

                <option value="Nakuru">
                  Nakuru
                </option>

                <option value="Kiambu">
                  Kiambu
                </option>

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

        {/* ==================================================
            SCHOOL LIST
        ================================================== */}

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

            <button
              type="button"
              className="text-sm font-bold text-blue-600"
            >
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

                <div className="relative flex h-48 items-center justify-center bg-blue-50">

                  <GraduationCap
                    size={75}
                    strokeWidth={1.3}
                    className="text-blue-300"
                  />

                  <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-green-600 shadow-sm">

                    <CheckCircle2 size={13} />

                    Verified

                  </span>

                  <button
                    type="button"
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition hover:text-blue-600"
                  >
                    <Bookmark size={17} />
                  </button>

                </div>

                {/* DETAILS */}

                <div className="p-5">

                  <div className="mb-2 flex items-center justify-between">

                    <span className="rounded-md bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-600">
                      {school.type}
                    </span>

                    <span className="text-xs font-semibold text-slate-500">
                      ★ {school.rating}
                    </span>

                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {school.name}
                  </h3>

                  <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">

                    <MapPin size={15} />

                    {school.location}

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

              <Search
                size={40}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-4 font-bold text-slate-800">
                No schools found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try searching for another school or location.
              </p>

            </div>

          )}

        </section>

        {/* ==================================================
            UPCOMING BOOKINGS
        ================================================== */}

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

            <button
              type="button"
              className="text-sm font-bold text-blue-600"
            >
              View all
            </button>

          </div>

          <div className="mt-6 flex items-center gap-4 rounded-xl bg-slate-50 p-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <CalendarDays size={21} />
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