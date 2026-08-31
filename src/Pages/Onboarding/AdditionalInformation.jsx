import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdditionalInfo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    schoolLevel: "",
    preferredLocation: "",
    schoolType: "",
    interests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "skoolifyProfile",
      JSON.stringify(formData)
    );

    navigate("/dashboard");
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-2xl">

        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F172A] font-bold text-white">
              S
            </div>

            <span className="text-xl font-extrabold text-[#0F172A]">
              Skool<span className="text-[#FF6B5F]">ify</span>
            </span>
          </div>

          <span className="text-sm text-slate-400">
            Step 2 of 2
          </span>
        </div>

        {/* PROGRESS */}
        <div className="mb-8 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-full rounded-full bg-[#FF6B5F]" />
        </div>

        {/* HEADING */}
        <div className="mb-8">
          <p className="text-xs font-extrabold tracking-[1.5px] text-[#FF6B5F]">
            ALMOST THERE
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-[#0F172A] sm:text-4xl">
            Tell us a little more
          </h1>

          <p className="mt-3 max-w-xl leading-7 text-slate-500">
            This information helps us personalize your Skoolify
            experience and show you more relevant schools and
            opportunities.
          </p>
        </div>

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
        >

          {/* SCHOOL LEVEL */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              What are you looking for?
            </label>

            <select
              name="schoolLevel"
              value={formData.schoolLevel}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#FF6B5F] focus:bg-white focus:ring-2 focus:ring-[#FFE2DF]"
            >
              <option value="">Select an option</option>
              <option value="primary">Primary School</option>
              <option value="secondary">Secondary School</option>
              <option value="college">College</option>
              <option value="university">University</option>
              <option value="job">School Job Opportunity</option>
            </select>
          </div>

          {/* LOCATION */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Preferred school location
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                📍
              </span>

              <input
                type="text"
                name="preferredLocation"
                value={formData.preferredLocation}
                onChange={handleChange}
                placeholder="e.g. Nairobi, Mombasa, Kisumu..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#FF6B5F] focus:bg-white focus:ring-2 focus:ring-[#FFE2DF]"
              />
            </div>

            <p className="mt-2 text-xs text-slate-400">
              You can change this later when searching for schools.
            </p>
          </div>

          {/* SCHOOL TYPE */}
          <div className="mb-6">
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Preferred school type
            </label>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Public", "Private", "International", "Any"].map(
                (type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        schoolType: type,
                      })
                    }
                    className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                      formData.schoolType === type
                        ? "border-[#FF6B5F] bg-[#FFF0EE] text-[#FF6B5F] ring-1 ring-[#FF6B5F]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-[#FFB8B1]"
                    }`}
                  >
                    {type}
                  </button>
                )
              )}
            </div>
          </div>

          {/* INTERESTS */}
          <div className="mb-7">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Anything else you'd like us to know?
              <span className="ml-2 font-normal text-slate-400">
                Optional
              </span>
            </label>

            <textarea
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your interests, preferred courses, special requirements..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#FF6B5F] focus:bg-white focus:ring-2 focus:ring-[#FFE2DF]"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

            <button
              type="button"
              onClick={handleSkip}
              className="rounded-xl px-6 py-3.5 text-sm font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-700"
            >
              Skip for now
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#FF6B5F] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF6B5F]/20 transition hover:-translate-y-0.5 hover:bg-[#E85A50]"
            >
              Continue to Dashboard →
            </button>

          </div>
        </form>

        {/* FOOTER NOTE */}
        <p className="mt-6 text-center text-xs text-slate-400">
          You can update these preferences anytime from your profile.
        </p>

      </div>
    </div>
  );
}

export default AdditionalInfo;