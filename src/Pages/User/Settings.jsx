import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  ChevronRight,
  GraduationCap,
  Lock,
  UserRound,
} from "lucide-react";

function Settings() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1100px] items-center justify-between px-[5%]">

          <Link
            to="/dashboard"
            className="flex items-center gap-2.5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F172A] text-white">
              <GraduationCap size={22} />
            </span>

            <span className="text-xl font-extrabold text-[#0F172A]">
              Skool<span className="text-[#FF6B5A]">ify</span>
            </span>
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#FF6B5A]"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </Link>

        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-[900px] px-[5%] py-10">

        <div className="mb-8">

          <p className="text-sm font-semibold text-[#FF6B5A]">
            ACCOUNT
          </p>

          <h1 className="mt-1 text-3xl font-extrabold text-[#0F172A]">
            Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your account and application preferences.
          </p>

        </div>

        <div className="space-y-4">

          {/* PROFILE */}

          <Link
            to="/profile"
            className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#FF6B5A]/30 hover:shadow-md"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0ED] text-[#FF6B5A]">
              <UserRound size={21} />
            </div>

            <div className="flex-1">

              <h2 className="font-bold text-[#0F172A]">
                Profile Settings
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Update your name and account information.
              </p>

            </div>

            <ChevronRight
              size={20}
              className="text-slate-400"
            />

          </Link>

          {/* NOTIFICATIONS */}

          <button
            type="button"
            className="flex w-full items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#FF6B5A]/30 hover:shadow-md"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0ED] text-[#FF6B5A]">
              <Bell size={21} />
            </div>

            <div className="flex-1">

              <h2 className="font-bold text-[#0F172A]">
                Notifications
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage booking and application notifications.
              </p>

            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
              Coming soon
            </span>

          </button>

          {/* SECURITY */}

          <button
            type="button"
            className="flex w-full items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#FF6B5A]/30 hover:shadow-md"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0ED] text-[#FF6B5A]">
              <Lock size={21} />
            </div>

            <div className="flex-1">

              <h2 className="font-bold text-[#0F172A]">
                Security
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Password and account security settings.
              </p>

            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
              Coming soon
            </span>

          </button>

        </div>

      </main>

    </div>
  );
}

export default Settings;