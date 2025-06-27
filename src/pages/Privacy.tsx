
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-200">
              Your privacy and data security are our top priorities
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-600 mb-2"><strong>Last Updated:</strong> December 2024</p>
              <p className="text-gray-700">
                At ZyberNetSolutions, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contact information (name, email address, phone number, business address)</li>
                <li>Business information (company name, role, industry)</li>
                <li>Technical information about your IT systems (for service delivery purposes)</li>
                <li>Communication records (emails, support tickets, call logs)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Information</h3>
              <p className="text-gray-700 mb-4">When providing IT services, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>System configurations and specifications</li>
                <li>Network information and logs</li>
                <li>Performance and diagnostic data</li>
                <li>Security incident reports</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <div className="mb-8">
              <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Providing IT support and services</li>
                <li>Communicating about your service requests</li>
                <li>Improving our services and support</li>
                <li>Sending important service updates and security notifications</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection and Security</h2>
            <div className="mb-8">
              <p className="text-gray-700 mb-4">We implement comprehensive security measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security audits and assessments</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response procedures</li>
                <li>Compliance with industry security standards</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <div className="mb-8">
              <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information. We may share your data only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With your explicit consent</li>
                <li>With trusted service providers who assist in delivering our services</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety, or that of others</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, 
                comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Customer service records: 7 years after service completion</li>
                <li>Technical logs and diagnostic data: 2 years</li>
                <li>Marketing communications: Until you opt out</li>
                <li>Legal and compliance records: As required by applicable law</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <div className="mb-8">
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access: Request information about the data we hold about you</li>
                <li>Correction: Request correction of inaccurate or incomplete data</li>
                <li>Deletion: Request deletion of your personal data (subject to legal obligations)</li>
                <li>Portability: Request a copy of your data in a structured format</li>
                <li>Opt-out: Unsubscribe from marketing communications</li>
                <li>Restriction: Request limitation of processing in certain circumstances</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                Our website uses cookies and similar technologies to improve your browsing experience and analyze website usage. 
                You can control cookie settings through your browser preferences.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                We may use third-party services for analytics, customer support, and other business functions. 
                These providers are contractually obligated to protect your data and use it only for specified purposes.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <div className="mb-8">
              <p className="text-gray-700">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                We will notify you of significant changes through our website or direct communication.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>ZyberNetSolutions</strong></p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@zybernetsolutions.com" className="text-blue-600 hover:underline">privacy@zybernetsolutions.com</a></p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">(123) 456-7890</a></p>
                <p className="text-gray-700">Address: 123 Tech Street, Business District, City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
