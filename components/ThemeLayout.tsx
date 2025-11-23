import React, { useState, ReactNode } from 'react';

const StarIcon = () => (
    <svg className="w-6 h-6 mr-2 text-yellow-400 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col transform transition-all scale-100">
                <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-gray-900/50 rounded-t-xl">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors text-3xl leading-none">&times;</button>
                </div>
                <div className="p-8 text-gray-300 overflow-y-auto leading-relaxed space-y-4">
                    {children}
                </div>
                 <div className="p-6 border-t border-gray-700 bg-gray-900/50 rounded-b-xl text-right">
                    <button onClick={onClose} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-lg">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};


const ThemeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const navLinks = ["About", "Guide", "Contact", "Privacy Policy", "Terms of Service", "DMCA"];
    
    const getModalContent = (modalName: string) => {
        switch(modalName) {
            case "About": return (
                <div className="space-y-4">
                    <p className="font-semibold text-lg text-white">Welcome to the Doodax Paycheck Calculator.</p>
                    <p>This state-of-the-art financial tool was meticulously designed and developed by <strong>HSINI MOHAMED</strong>. Our mission is to democratize financial clarity, allowing individuals to instantly understand the difference between their gross earnings and their actual take-home pay.</p>
                    <p>Built using the latest web technologies including React 18, TypeScript, and Tailwind CSS, this application ensures specific accuracy and high performance. Unlike many other calculators, <strong>we prioritize your privacy</strong>. All calculations are performed 100% on your local device (client-side), meaning your sensitive salary data never leaves your browser.</p>
                    <p>Whether you are negotiating a new salary, planning a budget, or just curious about where your money goes, this tool provides the transparency you need.</p>
                </div>
            );
            case "Contact": return (
                <div className="space-y-4">
                    <p className="font-semibold text-lg text-white">We'd love to hear from you.</p>
                    <p>If you have questions, suggestions for improvement, or business inquiries, please do not hesitate to reach out. We are committed to providing the best user experience possible.</p>
                    <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                        <p className="mb-2"><span className="text-indigo-400 font-bold">Developer:</span> HSINI MOHAMED</p>
                        <p className="mb-2"><span className="text-indigo-400 font-bold">Email:</span> <a href="mailto:hsini.web@gmail.com" className="hover:text-white underline">hsini.web@gmail.com</a></p>
                        <p><span className="text-indigo-400 font-bold">Website:</span> <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">doodax.com</a></p>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">We typically respond to inquiries within 24-48 business hours.</p>
                </div>
            );
            case "Guide": return (
                <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white">How to Use the Paycheck Calculator</h4>
                    <p>Getting an accurate estimate of your net income is simple. Follow these steps:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li><strong>Enter Gross Annual Salary:</strong> Input your total yearly earnings before any taxes or deductions.</li>
                        <li><strong>Select Pay Frequency:</strong> Choose how often you get paid (Weekly, Bi-Weekly, or Monthly). This helps us break down the calculations to match your pay stub.</li>
                        <li><strong>Estimated Tax Rate:</strong> Enter a combined percentage for Federal, State, and Local taxes. If you are unsure, 22-25% is a common average for many earners, but this varies significantly by location and income level.</li>
                        <li><strong>Pre-Tax Deductions:</strong> Enter the amount deducted from each paycheck for things like 401(k), Health Insurance, or HSA contributions.</li>
                        <li><strong>Calculate:</strong> Click the button to see your results immediately.</li>
                    </ol>
                    <p className="mt-4 text-yellow-400 italic">Note: This tool provides an estimate. Actual tax liabilities depend on filing status, dependents, and specific tax laws in your jurisdiction.</p>
                </div>
            );
            case "Privacy Policy": return (
                <div className="space-y-4 text-sm">
                    <p><strong>Last Updated: October 27, 2023</strong></p>
                    <p>At Doodax Paycheck Calculator ("we", "us", "our"), accessible from https://PaycheckCalculator.doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
                    
                    <h5 className="font-bold text-white text-base">1. Data Collection and Usage</h5>
                    <p>We believe in privacy by design. <strong>We do not collect, store, or transmit any personal financial data you enter into the calculator.</strong> All calculations are performed locally on your device using JavaScript. Your salary, tax rates, and deduction information remain strictly in your browser's memory and are cleared when you close or refresh the page.</p>

                    <h5 className="font-bold text-white text-base">2. Log Files</h5>
                    <p>Like many other Web sites, we may make use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.</p>

                    <h5 className="font-bold text-white text-base">3. Cookies and Web Beacons</h5>
                    <p>We do not use cookies to track your personal calculator usage. However, third-party vendors, including Google, may use cookies to serve ads based on a user's prior visits to your website or other websites.</p>

                    <h5 className="font-bold text-white text-base">4. Third Party Privacy Policies</h5>
                    <p>Our Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.</p>

                    <h5 className="font-bold text-white text-base">5. Consent</h5>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                </div>
            );
            case "Terms of Service": return (
                <div className="space-y-4 text-sm">
                     <p><strong>Last Updated: October 27, 2023</strong></p>
                    <h5 className="font-bold text-white text-base">1. Terms</h5>
                    <p>By accessing this Website, accessible from https://PaycheckCalculator.doodax.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.</p>

                    <h5 className="font-bold text-white text-base">2. Disclaimer</h5>
                    <p>All the materials on Doodax Paycheck Calculator’s Website are provided "as is". We make no warranties, may it be expressed or implied, therefore negating all other warranties. Furthermore, we do not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
                    <p className="bg-red-900/30 p-2 border border-red-800 rounded"><strong>Financial Disclaimer:</strong> The results provided by this calculator are for estimation and informational purposes only. They do not constitute financial, tax, or legal advice. You should consult with a qualified professional (CPA or Financial Advisor) before making any financial decisions.</p>

                    <h5 className="font-bold text-white text-base">3. Limitations</h5>
                    <p>In no event shall Doodax Paycheck Calculator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our Website.</p>
                </div>
            );
            case "DMCA": return (
                <div className="space-y-4">
                    <p>If you believe that any content posted on the Doodax Paycheck Calculator Website infringes copyright, you may send us a notification in accordance with the Digital Millennium Copyright Act (DMCA). Policy requires that you be the copyright owner or authorized to act on behalf of the copyright owner.</p>
                    <p><strong>To file a notice of infringement with us, you must provide a written communication that sets forth the items specified below:</strong></p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Identify in sufficient detail the copyrighted work that you believe has been infringed upon.</li>
                        <li>Identify the material that you claim is infringing the copyrighted work listed in item #1 above.</li>
                        <li>Provide information reasonably sufficient to permit us to contact you (email address is preferred).</li>
                        <li>Include the following statement: "I have a good faith belief that use of the copyrighted materials described above as allegedly infringing is not authorized by the copyright owner, its agent, or the law."</li>
                        <li>Include the following statement: "I swear, under penalty of perjury, that the information in the notification is accurate and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed."</li>
                    </ul>
                    <p>Please send all notices to: <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a></p>
                </div>
            );
            default: return null;
        }
    }

    return (
        <div className="relative min-h-screen bg-gray-900 text-white font-sans overflow-hidden selection:bg-indigo-500 selection:text-white">
            {/* Enhanced Galaxy Background */}
            <style jsx global>{`
              body {
                background-color: #0c0d21;
              }
              
              /* Custom Scrollbar */
              ::-webkit-scrollbar {
                width: 10px;
              }
              ::-webkit-scrollbar-track {
                background: #1f2937;
              }
              ::-webkit-scrollbar-thumb {
                background: #4b5563;
                border-radius: 5px;
              }
              ::-webkit-scrollbar-thumb:hover {
                background: #6b7280;
              }

              @keyframes moveStars {
                from { transform: translateY(0px); }
                to { transform: translateY(-2000px); }
              }

              .stars {
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                width: 100%; height: 100%;
                display: block;
                background: transparent;
              }

              .stars-sm {
                width: 1px; height: 1px;
                background: white;
                opacity: 0.8;
                box-shadow: 792px 1438px #FFF, 1514px 1195px #FFF, 1534px 57px #FFF, 1438px 1282px #FFF, 219px 1210px #FFF, 1039px 1018px #FFF, 1074px 1793px #FFF, 1535px 102px #FFF, 893px 1290px #FFF, 1912px 1475px #FFF, 1378px 1113px #FFF, 1050px 186px #FFF, 1432px 1560px #FFF, 258px 1655px #FFF, 1683px 1817px #FFF, 34px 1850px #FFF, 1195px 678px #FFF, 1019px 1978px #FFF, 109px 1054px #FFF, 1870px 155px #FFF;
                animation: moveStars 120s linear infinite;
              }

              .stars-md {
                width: 2px; height: 2px;
                background: white;
                opacity: 0.6;
                box-shadow: 1324px 1828px #FFF, 1265px 1779px #FFF, 213px 158px #FFF, 1109px 1495px #FFF, 1804px 1292px #FFF, 1553px 1738px #FFF, 1323px 1813px #FFF, 1093px 1853px #FFF, 915px 1238px #FFF, 321px 40px #FFF;
                animation: moveStars 80s linear infinite;
              }
              
              @keyframes fade-in {
                  from { opacity: 0; }
                  to { opacity: 1; }
              }
              .animate-fade-in {
                  animation: fade-in 0.2s ease-out forwards;
              }
            `}</style>
            
            {/* Background Layers */}
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0c0d21] via-[#11133a] to-[#0c0d21]"></div>
            <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
              <div className="stars"><div className="stars-sm"></div></div>
              <div className="stars"><div className="stars-md"></div></div>
            </div>
            
            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-40 transition-all duration-300">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                            <div className="transform group-hover:rotate-12 transition-transform duration-300">
                                <StarIcon />
                            </div>
                            <h1 className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all">
                                Paycheck<span className="text-indigo-400">Calculator</span>
                            </h1>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            {navLinks.map(link => (
                                <button key={link} onClick={() => setActiveModal(link)} className="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 uppercase tracking-widest">{link}</button>
                            ))}
                        </nav>
                        <div className="md:hidden">
                            <select onChange={(e) => setActiveModal(e.target.value)} className="bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                                <option value="">Menu</option>
                                {navLinks.map(link => (
                                    <option key={link} value={link}>{link}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </header>

                <main className="flex-grow flex flex-col items-center justify-start pt-8 pb-16">
                    {children}
                </main>

                <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900/90 backdrop-blur-md border-t border-gray-800 text-center text-gray-400 z-40">
                    <div className="container mx-auto max-w-4xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
                            <div className="flex flex-col items-center md:items-start space-y-2">
                                <h4 className="font-bold text-white uppercase tracking-wider mb-2">Legal</h4>
                                <button onClick={() => setActiveModal("Privacy Policy")} className="hover:text-indigo-400 transition-colors">Privacy Policy</button>
                                <button onClick={() => setActiveModal("Terms of Service")} className="hover:text-indigo-400 transition-colors">Terms of Service</button>
                                <button onClick={() => setActiveModal("DMCA")} className="hover:text-indigo-400 transition-colors">DMCA</button>
                            </div>
                            <div className="flex flex-col items-center md:items-center space-y-2">
                                <h4 className="font-bold text-white uppercase tracking-wider mb-2">Connect</h4>
                                <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">doodax.com</a>
                                <a href="mailto:hsini.web@gmail.com" className="hover:text-indigo-400 transition-colors">hsini.web@gmail.com</a>
                            </div>
                             <div className="flex flex-col items-center md:items-end space-y-2">
                                <h4 className="font-bold text-white uppercase tracking-wider mb-2">Resources</h4>
                                <button onClick={() => setActiveModal("About")} className="hover:text-indigo-400 transition-colors">About Us</button>
                                <button onClick={() => setActiveModal("Guide")} className="hover:text-indigo-400 transition-colors">User Guide</button>
                            </div>
                        </div>
                        
                        <div className="pt-6 border-t border-gray-800 flex flex-col items-center">
                             <p className="mb-2 text-gray-500 text-xs">
                                &copy; {new Date().getFullYear()} Doodax Paycheck Calculator. All rights reserved.
                            </p>
                            <p className="flex items-center justify-center text-sm font-medium">
                                <span className="text-gray-400 mr-1">Powered by</span>
                                <a 
                                    href="https://github.com/hsinidev" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-300 hover:to-purple-300 font-bold transition-all duration-300"
                                >
                                    HSINI MOHAMED
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
            
            <Modal isOpen={!!activeModal} onClose={() => setActiveModal(null)} title={activeModal || ''}>
                {activeModal && getModalContent(activeModal)}
            </Modal>
        </div>
    );
};

export default ThemeLayout;