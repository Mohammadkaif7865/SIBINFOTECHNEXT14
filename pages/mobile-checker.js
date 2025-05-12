import { useState } from 'react'

const devices = [
  { name: 'iPhone 14 Pro (430×932)', width: 430, height: 932 },
  { name: 'iPhone SE (375×667)', width: 375, height: 667 },
  { name: 'Pixel 7 (412×915)', width: 412, height: 915 },
  { name: 'Samsung Galaxy S22 (360×800)', width: 360, height: 800 },
  { name: 'iPad Air (820×1180)', width: 820, height: 1180 },
  { name: 'Surface Pro 9 (912×1368)', width: 912, height: 1368 },
  { name: 'Foldable (768×1536)', width: 768, height: 1536 },
  { name: 'MacBook Air 13” (1280×832)', width: 1280, height: 832 },
  { name: 'MacBook Pro 14” (1512×982)', width: 1512, height: 982 },
  { name: 'Desktop Full HD (1920×1080)', width: 1920, height: 1080 }
]

export default function MobileChecker() {
  const [url, setUrl] = useState('')
  const [selectedDevice, setSelectedDevice] = useState(devices[0])
  const [previewUrl, setPreviewUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCheck = () => {
    if (!url.startsWith('http')) {
      alert('Please enter a valid URL starting with https://')
      return
    }
    setLoading(true)
    setPreviewUrl(url)
  }

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-3">Responsive Website Preview Tool</h1>
      <p className="text-center text-muted mb-4">
        View your site on popular devices and screen sizes. Instantly visualize mobile responsiveness.
      </p>

      <div className="row justify-content-center mb-4">
        <div className="col-md-10">
          <div className="card shadow-sm p-4">
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <select
                  className="form-select"
                  value={selectedDevice.name}
                  onChange={(e) =>
                    setSelectedDevice(devices.find((d) => d.name === e.target.value))
                  }
                >
                  {devices.map((device, i) => (
                    <option key={i} value={device.name}>
                      {device.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-2 d-grid">
                <button className="btn btn-primary" onClick={handleCheck}>
                  {loading ? 'Loading...' : 'Preview'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {previewUrl && (
        <div className="text-center">
          <h5 className="mb-3 fw-semibold">{selectedDevice.name}</h5>
          <div
            style={{
              width: selectedDevice.width / 2,
              height: selectedDevice.height / 2,
              margin: '0 auto',
              border: '2px solid #ddd',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}
          >
            <iframe
              title="Responsive Preview"
              src={previewUrl}
              onLoad={() => setLoading(false)}
              style={{
                width: selectedDevice.width,
                height: selectedDevice.height,
                transform: 'scale(0.5)',
                transformOrigin: 'top left',
                border: 'none'
              }}
            />
          </div>
        </div>
      )}

      {previewUrl && !loading && (
        <div className="text-center mt-5">
          <h4 className="fw-bold">Not satisfied with how your site looks?</h4>
          <p className="text-muted mb-3">
            Let our team optimize your site across all devices — from mobile to desktop.
          </p>
          <a href="/contact" className="btn btn-danger btn-lg">
            💡 Let's Make It Responsive
          </a>
        </div>
      )}
    </div>
  )
}
