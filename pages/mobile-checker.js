import { useState } from 'react'

export default function MobileChecker() {
  const [url, setUrl] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')

  const handleCheck = () => {
    if (!url.startsWith('http')) {
      alert('Please enter a valid URL starting with https://')
      return
    }
    setPreviewUrl(url)
  }

  const devices = [
    { label: 'Mobile (375x667)', width: 375, height: 667 },
    { label: 'Tablet (768x1024)', width: 768, height: 1024 },
    { label: 'Laptop (1440x900)', width: 1440, height: 900 },
  ]

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">📱 Mobile Responsiveness Checker</h1>
      <p className="text-center text-muted mb-4">
        Enter a website URL and see how it looks on different device sizes.
      </p>

      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="url"
              className="form-control"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleCheck}>
              Check Responsiveness
            </button>
          </div>
        </div>
      </div>

      {previewUrl && (
        <div className="row g-4">
          {devices.map((device, i) => (
            <div className="col-md-4" key={i}>
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">{device.label}</h5>
                  <div
                    style={{
                      width: device.width / 2 + 'px',
                      height: device.height / 2 + 'px',
                      border: '1px solid #ccc',
                      overflow: 'hidden',
                      margin: '0 auto',
                    }}
                  >
                    <iframe
                      title={device.label}
                      src={previewUrl}
                      style={{
                        width: device.width + 'px',
                        height: device.height + 'px',
                        transform: 'scale(0.5)',
                        transformOrigin: 'top left',
                        border: 'none',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
