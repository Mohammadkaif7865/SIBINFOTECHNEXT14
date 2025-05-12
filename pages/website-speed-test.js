import { useState } from 'react'
import axios from 'axios'
import * as CONSTANTS from "../constants/constants";
import {
    CircularProgressbar,
    buildStyles
  } from 'react-circular-progressbar'
  import 'react-circular-progressbar/dist/styles.css'
export default function WebsiteSpeedTest() {
  const [url, setUrl] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const apiKey = CONSTANTS.NEXT_PUBLIC_PAGESPEED_API_KEY; // store this in .env.local

  const fetchSpeedTest = async () => {
    if (!url) return

    setLoading(true)
    setError('')
    setData(null)

    try {
      const mobile = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          url
        )}&strategy=mobile&key=${apiKey}`
      )
      const desktop = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          url
        )}&strategy=desktop&key=${apiKey}`
      )

      setData({
        mobile: mobile.data,
        desktop: desktop.data,
      })
    } catch (err) {
      setError('Failed to fetch PageSpeed data. Please check the URL or try again later.')
    }

    setLoading(false)
  }
  const renderScoreCard = (title, score, details) => (
    <div className="col-md-6 mb-4 d-flex">
      <div className="card shadow-sm border-0 w-100">
        <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
          <h5 className="card-title mb-3">{title}</h5>
  
          <div style={{ width: 120 }} className="mb-3">
            <CircularProgressbar
              value={score}
              text={`${score}`}
              styles={buildStyles({
                textColor: '#111',
                pathColor:
                  score >= 90 ? '#28a745' : score >= 50 ? '#ffc107' : '#dc3545',
                trailColor: '#eee',
                textSize: '18px',
                pathTransitionDuration: 0.5,
              })}
            />
          </div>
  
          <h6 className="fw-bold mt-2">Core Web Vitals</h6>
          <div className="w-100 mt-3">
            <ul className="list-unstyled small text-start mx-auto" style={{ maxWidth: 240 }}>
              {[
                'first-contentful-paint',
                'largest-contentful-paint',
                'speed-index',
                'total-blocking-time',
                'cumulative-layout-shift'
              ].map((key) => (
                <li key={key} className="mb-1">
                  <strong className="text-capitalize">
                    {key.replace(/-/g, ' ')}:
                  </strong>{' '}
                  {details[key]?.displayValue || 'N/A'}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
  
  

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🚀 Website Speed Test</h1>
      <p className="text-center text-muted">
        Get real-time performance metrics powered by Google PageSpeed. Fast websites = better UX + more conversions.
      </p>

      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="url"
              placeholder="https://example.com"
              className="form-control"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button
              className="btn btn-primary"
              onClick={fetchSpeedTest}
              disabled={loading || !url}
            >
              {loading ? 'Testing...' : 'Run Test'}
            </button>
          </div>
        </div>
      </div>

      {error && <div className="alert alert-danger text-center">{error}</div>}

      {data && (
        <div className="row">
          {renderScoreCard(
            '📱 Mobile Performance',
            Math.round(data.mobile.lighthouseResult.categories.performance.score * 100),
            data.mobile.lighthouseResult.audits
          )}
          {renderScoreCard(
            '💻 Desktop Performance',
            Math.round(data.desktop.lighthouseResult.categories.performance.score * 100),
            data.desktop.lighthouseResult.audits
          )}
        </div>
      )}

      {/* CTA section */}
      <div className="text-center mt-5 p-4 bg-light border rounded">
        <h2 className="fw-bold">Is your site underperforming?</h2>
        <p className="mb-4">
          Our team at <strong>YourAgencyName</strong> can optimize your website for blazing-fast performance.
        </p>
        <a href="/contact" className="btn btn-danger btn-lg">🔥 Let us fix it</a>
      </div>
    </div>
  )
}
