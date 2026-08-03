"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [regData, setRegData] = useState({
    firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "", password: "",
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem("patientEmail");
    if (loggedIn) router.push("/portal");
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!loginData.email || !loginData.password) { setError("Please fill in all fields"); return; }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("patientEmail", loginData.email);
      localStorage.setItem("patientName", loginData.email.split("@")[0]);
      router.push("/portal");
    }, 800);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!regData.firstName || !regData.lastName || !regData.email || !regData.password) { setError("Please fill in all required fields"); return; }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("patientEmail", regData.email);
      localStorage.setItem("patientName", `${regData.firstName} ${regData.lastName}`);
      router.push("/portal");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-900 to-brand-700 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-brand-900 text-white px-6 py-8 text-center">
          <h1 className="text-2xl font-bold">Patient Portal</h1>
          <p className="text-brand-200 text-sm mt-2">Access your dental records and appointments</p>
        </div>

        <div className="flex border-b border-gray-200">
          <button onClick={() => setMode("login")} className={`flex-1 py-3 font-medium text-sm transition-colors ${mode === "login" ? "text-brand-600 border-b-2 border-brand-600 bg-brand-50" : "text-gray-500 hover:text-gray-700"}`}>
            Login
          </button>
          <button onClick={() => setMode("register")} className={`flex-1 py-3 font-medium text-sm transition-colors ${mode === "register" ? "text-brand-600 border-b-2 border-brand-600 bg-brand-50" : "text-gray-500 hover:text-gray-700"}`}>
            Register
          </button>
        </div>

        <div className="p-6">
          {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">{error}</div>}

          {mode === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" value={loginData.email} onChange={e => setLoginData({...loginData, email: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" placeholder="••••••••" />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-brand-600 hover:bg-brand-500 text-white py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50">
                {loading ? "Signing in..." : "Sign In"}
              </button>
              <p className="text-center text-sm text-gray-500 hover:text-brand-600 cursor-pointer">Forgot Password?</p>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First Name *" value={regData.firstName} onChange={e => setRegData({...regData, firstName: e.target.value})}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
                <input type="text" placeholder="Last Name *" value={regData.lastName} onChange={e => setRegData({...regData, lastName: e.target.value})}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
              </div>
              <input type="email" placeholder="Email *" value={regData.email} onChange={e => setRegData({...regData, email: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
              <input type="tel" placeholder="Phone" value={regData.phone} onChange={e => setRegData({...regData, phone: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
              <input type="date" placeholder="Date of Birth" value={regData.dateOfBirth} onChange={e => setRegData({...regData, dateOfBirth: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
              <input type="password" placeholder="Create Password *" value={regData.password} onChange={e => setRegData({...regData, password: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none" />
              <button type="submit" disabled={loading} className="w-full bg-brand-600 hover:bg-brand-500 text-white py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50">
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
