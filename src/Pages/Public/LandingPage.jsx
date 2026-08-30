import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

function LandingPage() {
  const features = [
    {
      icon: "🔎",
      title: "Find Schools",
      text: "Search and discover schools based on your preferred location, school level and other requirements.",
    },
    {
      icon: "📍",
      title: "Search by Location",
      text: "Find schools in your preferred county, city, town or neighbourhood.",
    },
    {
      icon: "🪑",
      title: "View Vacancies",
      text: "Easily find available student spaces and school job opportunities.",
    },
    {
      icon: "💰",
      title: "Compare Fees",
      text: "View school fee structures and important information before making your decision.",
    },
    {
      icon: "📅",
      title: "Book a Visit",
      text: "Book a school visit or admission appointment directly through the platform.",
    },
    {
      icon: "🏫",
      title: "For Schools",
      text: "Schools can create profiles, post vacancies and manage applications and bookings.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto flex min-h-[650px] max-w-[1400px] items-center justify-between gap-16 px-[5%] py-20 lg:px-[7%] lg:py-[85px]">

          
          <div className="max-w-[600px]">
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-2 text-xs font-bold text-blue-600">
              <span>✦</span>
              Find your perfect school
            </div>

            <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-[-1.8px] text-slate-900 sm:text-[52px] lg:text-[57px]">
              Find the right school.
              <span className="mt-2 block text-blue-600">
                Find the right opportunity.
              </span>
            </h1>

            <p className="mt-6 max-w-[530px] text-[17px] leading-7 text-slate-500">
              Discover schools, student vacancies, job opportunities,
              fee structures and more — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-2.5 rounded-[9px] bg-blue-600 px-[22px] py-[13px] text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Get Started
                <span>→</span>
              </Link>

              <a
                href="#how-it-works"
                className="rounded-[9px] border border-slate-200 bg-white px-[22px] py-[13px] text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                Learn More
              </a>
            </div>

         
            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <strong className="block text-[22px] font-extrabold">
                  500+
                </strong>
                <small className="mt-1 block text-xs text-slate-500">
                  Schools
                </small>
              </div>

              <div>
                <strong className="block text-[22px] font-extrabold">
                  2,000+
                </strong>
                <small className="mt-1 block text-xs text-slate-500">
                  Vacancies
                </small>
              </div>

              <div>
                <strong className="block text-[22px] font-extrabold">
                  10K+
                </strong>
                <small className="mt-1 block text-xs text-slate-500">
                  Users
                </small>
              </div>
            </div>
          </div>

       
          <div className="relative hidden h-[450px] w-[470px] shrink-0 lg:block">

          
            <div className="absolute left-[70px] top-[45px] w-[330px] overflow-hidden rounded-[18px] bg-white shadow-[0_20px_50px_rgba(35,65,110,0.13)]">
              
              <div className="flex h-[205px] items-center justify-center bg-blue-100 text-[80px]">
                🏫
              </div>

              <div className="p-[22px]">
                <span className="text-[11px] font-bold text-green-600">
                  ✓ Verified School
                </span>

                <h3 className="mt-2.5 text-[19px] font-bold text-slate-900">
                  Green Valley Academy
                </h3>

                <p className="mt-2 text-xs text-slate-500">
                  📍 Westlands, Nairobi
                </p>

                <div className="mt-[18px] flex justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <span>🪑 12 vacancies</span>
                  <span>⭐ 4.8</span>
                </div>
              </div>
            </div>

            
            <div className="absolute right-0 top-5 flex items-center gap-2.5 rounded-xl bg-white p-3.5 shadow-[0_12px_35px_rgba(35,65,110,0.14)]">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-blue-50">
                🎓
              </div>

              <div>
                <strong className="block text-xs text-slate-900">
                  12 Vacancies
                </strong>

                <small className="mt-1 block text-[10px] text-slate-500">
                  Available now
                </small>
              </div>
            </div>

           
            <div className="absolute bottom-[35px] left-[5px] flex items-center gap-2.5 rounded-xl bg-white p-3.5 shadow-[0_12px_35px_rgba(35,65,110,0.14)]">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-blue-50">
                📍
              </div>

              <div>
                <strong className="block text-xs text-slate-900">
                  Search by location
                </strong>

                <small className="mt-1 block text-[10px] text-slate-500">
                  Find schools near you
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section
        id="how-it-works"
        className="bg-white px-[5%] py-[90px] lg:px-[7%]"
      >
        <div className="mx-auto max-w-[1150px]">

          <div className="mx-auto mb-14 max-w-[650px] text-center">
            <span className="text-xs font-extrabold tracking-[1.2px] text-blue-600">
              EVERYTHING IN ONE PLACE
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Making school discovery easier
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              Everything parents, students and schools need to connect
              and make better decisions.
            </p>
          </div>

          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[15px] border border-slate-100 bg-white p-[30px] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(30,55,90,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[11px] bg-blue-50 text-[23px]">
                  {feature.icon}
                </div>

                <h3 className="mt-[18px] text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-slate-500">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section
        id="about"
        className="bg-slate-50 px-[5%] py-[100px] lg:px-[7%]"
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">

          <div>
            <span className="text-xs font-extrabold tracking-[1.2px] text-blue-600">
              FOR PARENTS & STUDENTS
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900">
              Your search for the right school starts here.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-500">
              SchoolFind brings school information, vacancies, fees and
              applications together in one convenient platform.
            </p>

            <div className="mt-6 space-y-3.5 text-sm font-medium text-slate-700">
              <p>✓ Discover schools based on location</p>
              <p>✓ Check available student vacancies</p>
              <p>✓ View school information and fees</p>
              <p>✓ Apply or book a school visit</p>
            </div>

            <Link
              to="/register"
              className="mt-7 inline-flex items-center gap-2.5 rounded-[9px] bg-blue-600 px-[22px] py-[13px] text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Start Exploring
              <span>→</span>
            </Link>
          </div>

          <div className="rounded-[22px] bg-slate-900 p-10 text-white shadow-2xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl">
              🏫
            </div>

            <h3 className="mt-8 text-3xl font-extrabold">
              One platform.
            </h3>

            <h3 className="text-3xl font-extrabold text-blue-400">
              Many opportunities.
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              Connecting students, parents and schools through easier
              access to information and opportunities.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-2xl">📍</div>
                <p className="mt-2 text-sm text-slate-300">
                  Location Search
                </p>
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-2xl">📅</div>
                <p className="mt-2 text-sm text-slate-300">
                  Easy Booking
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      
      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Ready to find your next opportunity?
        </h2>

        <p className="mt-3 text-blue-100">
          Join SchoolFind and make school discovery simpler.
        </p>

        <Link
          to="/register"
          className="mt-7 inline-flex rounded-[9px] bg-white px-6 py-3.5 font-bold text-blue-600 transition hover:bg-blue-50"
        >
          Create Your Account →
        </Link>
      </section>

      
      <footer className="bg-slate-950 px-[5%] py-8 text-slate-400 lg:px-[7%]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-extrabold text-white">
              Skool<span className="text-blue-500">ify</span>
            </p>

            <p className="mt-1.5 text-xs">
              Connecting students, parents and schools.
            </p>
          </div>

          <p className="text-xs">
            © 2026 Skoolify. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;