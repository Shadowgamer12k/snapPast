
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-base text-foreground/80 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to SnapPaste. By using our website, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Acceptance of Terms</h2>
          <p>By accessing or using SnapPaste, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Use License</h2>
          <p>Permission is granted to temporarily use SnapPaste for personal, non-commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on SnapPaste</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. User Content</h2>
          <p>SnapPaste processes images that users paste or upload. By using our service, you agree that:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>You will not paste or upload any image that violates any copyright, trademark, intellectual property rights, or other rights of any person or entity.</li>
            <li>You will not paste or upload any image that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
            <li>You take full responsibility for any image you paste or upload.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Disclaimer</h2>
          <p>The materials on SnapPaste are provided on an 'as is' basis. SnapPaste makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. Limitations</h2>
          <p>In no event shall SnapPaste or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use SnapPaste, even if SnapPaste or a SnapPaste authorized representative has been notified orally or in writing of the possibility of such damage.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">7. Accuracy of Materials</h2>
          <p>The materials appearing on SnapPaste could include technical, typographical, or photographic errors. SnapPaste does not warrant that any of the materials on its website are accurate, complete, or current. SnapPaste may make changes to the materials contained on its website at any time without notice.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">8. Links</h2>
          <p>SnapPaste has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SnapPaste of the site. Use of any such linked website is at the user's own risk.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">9. Modifications</h2>
          <p>SnapPaste may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">10. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">11. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>By email: terms@snappaste.com</li>
          </ul>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
