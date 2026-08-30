import { useEffect, useState } from "react";
import {
  Bell,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  LogOut,
  MapPin,
  Plus,
  Settings,
  UserCircle,
  Users,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../../Firebase";

function AdminDashboard() {
  const navigate = useNavigate();

  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get the currently logged-in school
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
          const data = userDoc.data();

          // Make sure this is a school account
          if (data.role !== "school") {
            navigate("/dashboard");
            return;
          }

          setSchool({
            ...data,
            uid: user.uid,
          });
        } else {
          setSchool({
            institutionName: "Your Institution",
            email: user.email,
            role: "school",
            uid: user.uid,
          });
        }
      } catch (error) {
        console.error("Error loading school profile:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Loading screen
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Building2 size={24} />
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-600">
            Loading your school dashboard...
          </p>
        </div>
      </div>
    );
  }

  const institutionName =
    school?.institutionName || "Your Institution";

  const institutionInitial = institutionName
    .trim()
    .charAt(0)
    .toUpperCase();

  const location = school?.location || "Location not added yet";

  const stats = [
    {
      title: "Student Vacancies",
      value: "12",
      icon: GraduationCap,
      iconStyle: "bg-blue-50 text-blue-600",
    },
    {
      title: "Job Vacancies",
      value: "5",
      icon: BriefcaseBusiness,
      iconStyle: "bg-purple-50 text-purple-600",
    },
    {
      title: "Applications",
      value: "28",
      icon: ClipboardList,
      iconStyle: "bg-green-50 text-green-600",
    },
    {
      title: "Visit Requests",
      value: "8",
      icon: Users,
      iconStyle: "bg-orange-50 text-orange-600",
    },
  ];

  // Prototype applications for now
  const recentApplications = [
    {
      name: "Mary Wanjiku",
      type: "Student Admission",
      date: "Today",
      status: "Pending",
    },
    {
      name: "James Otieno",
      type: "Mathematics Teacher",
      date: "Yesterday",
      status: "Reviewing",
    },
    {
      name: "Amina Hassan",
      type: "Grade 7 Admission",
      date: "2 days ago",
      status: "Pending",
    },
  ];

 
  const vacancies = [
    {
      title: "Mathematics Teacher",
      type: "Job",
      applications: 6,
      status: "Active",
    },
    {
      title: "ICT Teacher",
      type: "Job",
      applications: 4,
      status: "Active",
    },
    {
      title: "Grade 7 Admission",
      type: "Student",
      applications: 10,
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-[5%]">

         
          <Link
            to="/admin-dashboard"
            className="flex items-center gap-2.5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-extrabold text-white">
              S
            </span>

            <span className="text-xl font-extrabold text-slate-900">
              Skool<span className="text-blue-600">ify</span>
            </span>
          </Link>

          {/* NAV ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Notifications */}
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-blue-600"
            >
              <Bell size={19} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600" />
            </button>

           
            <Link
              to="/admin-profile"
              className="hidden h-10 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 sm:flex"
            >
              <UserCircle size={19} />
              Profile
            </Link>

           
            <Link
              to="/admin-settings"
              className="hidden h-10 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 md:flex"
            >
              <Settings size={18} />
              Settings
            </Link>

           
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
              {institutionInitial}
            </div>

          
            <button
              type="button"
              onClick={handleLogout}
              title="Logout"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-red-50 hover:text-red-600"
            >
              <LogOut size={18} />
            </button>

          </div>
        </div>
      </header>

      {/* PAGE */}
      <main className="mx-auto max-w-[1400px] px-[5%] py-8">

        {/* WELCOME */}
        <section className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>

            <p className="text-sm font-semibold text-blue-600">
              SCHOOL ADMINISTRATION
            </p>

            <h1 className="mt-1 text-3xl font-extrabold text-slate-900">
              Welcome, {institutionName} 👋
            </h1>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">

              <MapPin
                size={16}
                className="text-blue-600"
              />

              {location}

              <span className="ml-1 flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-600">
                <CheckCircle2 size={13} />
                Verification Pending
              </span>

            </div>

          </div>

          <Link
            to="/admin-vacancy"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            <Plus size={18} />
            Post Vacancy
          </Link>

        </section>

       
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconStyle}`}
                >
                  <Icon size={21} />
                </div>

                <p className="mt-4 text-xs font-semibold text-slate-400">
                  {stat.title.toUpperCase()}
                </p>

                <p className="mt-1 text-2xl font-extrabold text-slate-900">
                  {stat.value}
                </p>

              </div>
            );
          })}

        </section>

     
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">

          {/* LEFT */}
          <div className="space-y-6">

            
            <section className="rounded-2xl border border-slate-100 bg-white shadow-sm">

              <div className="flex items-center justify-between border-b border-slate-100 p-6">

                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    Recent Applications
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Review recent applications received by your school.
                  </p>
                </div>

                <Link
                  to="/admin/applications"
                  className="text-sm font-bold text-blue-600 hover:underline"
                >
                  View all
                </Link>

              </div>

              <div className="divide-y divide-slate-100">

                {recentApplications.map((application) => (

                  <div
                    key={application.name}
                    className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600">
                        {application.name.charAt(0)}
                      </div>

                      <div>

                        <p className="text-sm font-bold text-slate-800">
                          {application.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {application.type}
                        </p>

                      </div>

                    </div>

                    <div className="flex items-center gap-4">

                      <span className="text-xs text-slate-400">
                        {application.date}
                      </span>

                      <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-600">
                        {application.status}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </section>

            
            <section className="rounded-2xl border border-slate-100 bg-white shadow-sm">

              <div className="flex items-center justify-between border-b border-slate-100 p-6">

                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    Your Vacancies
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Manage vacancies currently posted by your school.
                  </p>
                </div>

                <Link
                  to="/admin/vacancies"
                  className="text-sm font-bold text-blue-600 hover:underline"
                >
                  Manage
                </Link>

              </div>

              <div className="divide-y divide-slate-100">

                {vacancies.map((vacancy) => (

                  <div
                    key={vacancy.title}
                    className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-blue-600">

                      {vacancy.type === "Job" ? (
                        <BriefcaseBusiness size={20} />
                      ) : (
                        <GraduationCap size={20} />
                      )}

                    </div>

                    <div className="flex-1">

                      <h3 className="text-sm font-bold text-slate-800">
                        {vacancy.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {vacancy.type} vacancy ·{" "}
                        {vacancy.applications} applications
                      </p>

                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
                      {vacancy.status}
                    </span>

                  </div>

                ))}

              </div>

            </section>

          </div>

       
          <aside className="space-y-6">

            
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Building2 size={23} />
                </div>

                <div className="min-w-0">

                  <h2 className="truncate font-extrabold text-slate-900">
                    {institutionName}
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    School Profile
                  </p>

                </div>

              </div>

              <div className="mt-5 space-y-3 text-sm">

                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin
                    size={16}
                    className="shrink-0 text-blue-600"
                  />

                  <span>
                    {location}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-500">
                  <Building2
                    size={16}
                    className="shrink-0 text-blue-600"
                  />

                  <span className="break-all">
                    {school?.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-orange-600">
                  <CheckCircle2 size={16} />
                  Verification pending
                </div>

              </div>

              <Link
                to="/admin/profile"
                className="mt-5 block w-full rounded-xl border border-slate-200 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                Edit School Profile
              </Link>

            </section>

            
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <CheckCircle2 size={21} />
                </div>

                <div>

                  <h2 className="font-extrabold text-slate-900">
                    Verification
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    School verification status
                  </p>

                </div>

              </div>

              <div className="mt-5 rounded-xl bg-orange-50 p-4">

                <p className="text-sm font-bold text-orange-700">
                  Verification Pending
                </p>

                <p className="mt-1 text-xs leading-5 text-orange-600">
                  Your school can use the platform while verification
                  is pending.
                </p>

              </div>

              <p className="mt-4 text-xs leading-5 text-slate-400">
                A future administrator verification system can review
                school documents and approve verified school profiles.
              </p>

            </section>

            
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              <h2 className="font-extrabold text-slate-900">
                Quick Actions
              </h2>

              <div className="mt-4 space-y-2">

                <Link
                  to="/admin-vacancy"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <Plus size={18} />
                  Post a Vacancy
                </Link>

                <Link
                  to="/admin-applications"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <ClipboardList size={18} />
                  View Applications
                </Link>

                <Link
                  to="/admin-profile"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <UserCircle size={18} />
                  School Profile
                </Link>

                <Link
                  to="/admin-settings"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <Settings size={18} />
                  Settings
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-xl bg-red-50 p-3.5 text-left text-sm font-semibold text-red-600 transition hover:bg-red-100"
                >
                  <LogOut size={18} />
                  Logout
                </button>

              </div>

            </section>

          </aside>

        </div>

      </main>
    </div>
  );
}

export default AdminDashboard;