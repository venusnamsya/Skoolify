import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  Lock,
  Settings as SettingsIcon,
  LogOut,
} from "lucide-react";

function AdminSettings() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-[5%]">

          <Link to="/admin-dashboard" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F172A] font-extrabold text-white">
              S
            </span>

            <span className="text-xl font-extrabold text-[#0F172A]">
              Skool<span className="text-[#FF6B5F]">ify</span>
            </span>
          </Link>

          <Link
            to="/admin-dashboard"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-[#FF6B5F]"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </Link>

        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-4xl px-[5%] py-10">

        <div className="mb-8">
          <p className="text-sm font-semibold text-[#FF6B5F]">
            ADMINISTRATION
          </p>

          <h1 className="mt-1 text-3xl font-extrabold text-[#0F172A]">
            Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your school administrator account and preferences.
          </p>
        </div>

        <div className="space-y-5">

          {/* ACCOUNT */}
          <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0EE] text-[#FF6B5F]">
                <SettingsIcon size={22} />
              </div>

              <div>
                <h2 className="font-extrabold text-[#0F172A]">
                  Account Settings
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Manage your administrator account.
                </p>
              </div>

            </div>

            <div className="mt-5 divide-y divide-slate-100">

              <button className="flex w-full items-center justify-between py-4 text-left transition hover:text-[#FF6B5F]">
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Change Password
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Update your account password
                  </p>
                </div>

                <Lock size={18} />
              </button>

            </div>

          </section>

          {/* NOTIFICATIONS */}
          <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0EE] text-[#FF6B5F]">
                <Bell size={22} />
              </div>

              <div>
                <h2 className="font-extrabold text-[#0F172A]">
                  Notifications
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Control how you receive school updates.
                </p>
              </div>

            </div>

            <div className="mt-5 space-y-4">

              <label className="flex cursor-pointer items-center justify-between rounded-xl bg-slate-50 p-4">

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    New Applications
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Receive notifications when someone applies.
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-[#FF6B5F]"
                />

              </label>

              <label className="flex cursor-pointer items-center justify-between rounded-xl bg-slate-50 p-4">

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Visit Requests
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Receive notifications for school visit requests.
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-[#FF6B5F]"
                />

              </label>

            </div>

          </section>

          {/* FUTURE */}
          <section className="rounded-2xl border border-[#FFD6D2] bg-[#FFF0EE] p-6">

            <h2 className="font-extrabold text-[#0F172A]">
              More settings coming soon
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#B84F47]">
              Future versions can include school verification documents,
              administrator roles, email preferences, privacy controls and
              other school management settings.
            </p>

          </section>

          {/* LOGOUT */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#FFD6D2] bg-white py-3.5 text-sm font-bold text-[#FF6B5F] transition hover:bg-[#FFF0EE]"
          >
            <LogOut size={18} />
            Log Out
          </button>

        </div>

      </main>

    </div>
  );
}

export default AdminSettings;