// pages/admin/login.js
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaLock, FaRobot } from "react-icons/fa6";
import { hasValidSession } from "@/lib/adminAuth";

export async function getServerSideProps({ req, query }) {
  if (hasValidSession(req)) {
    return {
      redirect: { destination: query.next || "/admin/trends", permanent: false },
    };
  }
  return { props: {} };
}

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed.");
      const next = router.query.next || "/admin/trends";
      router.push(Array.isArray(next) ? next[0] : next);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login | SIB Infotech</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="login-shell">
        <form className="login-card" onSubmit={handleSubmit}>
          <div className="login-icon">
            <FaRobot />
          </div>
          <h1>AI Trends Newsroom</h1>
          <p>Sign in to access the content intelligence dashboard.</p>

          <label htmlFor="password">
            <FaLock className="me-2" /> Admin Password
          </label>
          <input
            id="password"
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div className="login-error">{error}</div>}

          <button type="submit" disabled={loading || !password}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .login-shell {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          padding: 1.5rem;
        }
        .login-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          width: 100%;
          max-width: 380px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          text-align: center;
        }
        .login-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }
        h1 {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.4rem;
        }
        p {
          color: #64748b;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }
        label {
          display: block;
          text-align: left;
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
          margin-bottom: 0.4rem;
        }
        input {
          width: 100%;
          padding: 0.7rem 0.9rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }
        .login-error {
          background: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fecaca;
          border-radius: 8px;
          padding: 0.5rem 0.75rem;
          font-size: 0.8rem;
          margin-bottom: 1rem;
          text-align: left;
        }
        button {
          width: 100%;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #fff;
          border: none;
          padding: 0.75rem;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}
