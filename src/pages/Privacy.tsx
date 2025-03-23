
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-base text-foreground/80 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to SnapPaste. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. The Data We Collect</h2>
          <p>When you use SnapPaste:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>We <strong>do not</strong> store any images you paste or upload. They are processed entirely within your browser.</li>
            <li>We <strong>do not</strong> require you to create an account or provide any personal information.</li>
            <li>We <strong>do</strong> collect anonymous usage data such as page visits and feature usage to help us improve our service.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Cookies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
          <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Analytics</h2>
          <p>We may use third-party Service Providers to monitor and analyze the use of our Service:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Google Analytics:</strong> A web analytics service offered by Google that tracks and reports website traffic.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Advertising</h2>
          <p>We display advertisements on our website to keep our service free. These ads may use cookies to collect information about your browsing history to provide personalized advertising.</p>
          <p>We work with the following advertising partners:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Google Adsense</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Data Protection Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and the right to withdraw consent.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.</p>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>By email: privacy@snappaste.com</li>
          </ul>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
