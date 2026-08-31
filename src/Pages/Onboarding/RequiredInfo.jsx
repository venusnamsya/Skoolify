import { useNavigate } from "react-router-dom";

function RequiredInfo() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/onboarding/additional");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">

        <div className="text-center mb-8">
          <div className="inline-flex w-12 h-12 bg-[#F9736B] text-white rounded-xl items-center justify-center font-bold text-xl mb-4">
            S
          </div>

          <p className="text-[#F9736B] font-semibold text-sm">
            STEP 1 OF 2
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mt-2">
            Complete your profile
          </h1>

          <p className="text-slate-500 mt-2">
            These details are required to create your profile.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                ID / Identification Number
              </label>

              <input
                type="text"
                placeholder="Enter ID number"
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F9736B]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+254 7XX XXX XXX"
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F9736B]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Address
              </label>

              <input
                type="text"
                placeholder="Enter your physical address"
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F9736B]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Postal Code
              </label>

              <input
                type="text"
                placeholder="e.g. 00100"
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F9736B]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                City
              </label>

              <input
                type="text"
                placeholder="e.g. Nairobi"
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F9736B]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                County
              </label>

              <select
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F9736B] bg-white"
              >
                <option value="">Select your county</option>
                <option>Nairobi</option>
                <option>Mombasa</option>
                <option>Kisumu</option>
                <option>Nakuru</option>
                <option>Uasin Gishu</option>
                <option>Kiambu</option>
                <option>Kilifi</option>
                <option>Machakos</option>
                <option>Other</option>
              </select>
            </div>

          </div>

          <button
            type="submit"
            className="w-full mt-7 bg-[#F9736B] hover:bg-[#E85D55] text-white py-3.5 rounded-xl font-semibold transition"
          >
            Continue →
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-5">
          Your information would be securely stored and protected in
          the full version of the platform.
        </p>

      </div>
    </div>
  );
}

export default RequiredInfo;