import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PPCManagement = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our PPC Management Services in India</h2>
      
      <div className="row">
        {/* Google Ads Management */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">1. Google Ads Management</h5>
              <p className="card-text">
                As a Google Premier Partner, we specialize in creating and managing Google Ads campaigns, ensuring your ads appear on Google Search, Display Network, YouTube, and beyond. We help you achieve a high-quality score for maximum reach at the lowest cost per click.
              </p>
              <ul>
                <li><strong>Search Ads:</strong> Target high-intent keywords to capture leads actively looking for your offerings.</li>
                <li><strong>Display Ads:</strong> Build brand awareness with visually engaging ads across Google’s network of websites.</li>
                <li><strong>Video Ads:</strong> Leverage YouTube’s vast user base to connect with your audience through video.</li>
                <li><strong>Shopping Ads:</strong> Boost e-commerce sales by showcasing your products directly on Google search results.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bing Ads Management */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">2. Bing Ads Management</h5>
              <p className="card-text">
                While Google dominates search, Bing Ads offers access to a different, often more affordable audience. We help businesses expand their reach by optimizing Bing Ads campaigns for better ROI.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Advertising */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">3. Social Media Advertising</h5>
              <p className="card-text">
                PPC isn’t limited to search engines. Our team also manages ads on social media platforms, including:
              </p>
              <ul>
                <li><strong>Facebook & Instagram Ads:</strong> Connect with highly targeted audiences based on interests, behaviors, and demographics.</li>
                <li><strong>LinkedIn Ads:</strong> Perfect for B2B businesses, LinkedIn Ads help you reach decision-makers in specific industries.</li>
                <li><strong>Twitter & Pinterest Ads:</strong> Engage with niche audiences through targeted advertising on these platforms.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Yandex Ads Management */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">4. Yandex Ads Management</h5>
              <p className="card-text">
                If your business is targeting the Russian or CIS markets, we manage Yandex ads to reach a large, Russian-speaking audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPCManagement;

