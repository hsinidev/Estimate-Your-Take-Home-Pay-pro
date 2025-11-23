import React, { useState } from 'react';

const JsonLdSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://PaycheckCalculator.doodax.com/#website",
        "url": "https://PaycheckCalculator.doodax.com/",
        "name": "Paycheck Calculator | Gross to Net Income Estimator",
        "description": "Calculate your true take-home pay instantly. Private, secure, and free.",
        "publisher": {
          "@type": "Person",
          "name": "HSINI MOHAMED",
          "url": "https://doodax.com"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Paycheck Calculator",
        "operatingSystem": "Web",
        "applicationCategory": "FinanceApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "author": {
            "@type": "Person",
            "name": "HSINI MOHAMED",
            "url": "https://github.com/hsinidev"
        }
      },
      {
        "@type": "Article",
        "@id": "https://PaycheckCalculator.doodax.com/#article",
        "headline": "The Ultimate Guide to Understanding Your Paycheck: Gross vs. Net, Taxes, and Smart Financial Planning",
        "description": "Unlock financial clarity by understanding your paycheck. This comprehensive guide breaks down gross vs. net pay, taxes, deductions, and provides actionable tips for budgeting.",
        "image": "https://PaycheckCalculator.doodax.com/social-preview.png",
        "author": {
          "@type": "Person",
          "name": "HSINI MOHAMED",
          "url": "https://github.com/hsinidev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Doodax",
          "logo": {
            "@type": "ImageObject",
            "url": "https://PaycheckCalculator.doodax.com/favicon.svg"
          }
        },
        "datePublished": "2023-10-27T08:00:00+08:00",
        "dateModified": "2023-10-27T09:00:00+08:00",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://PaycheckCalculator.doodax.com/"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between gross and net pay?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gross pay is your total earnings before any taxes or deductions are taken out. Net pay, or take-home pay, is the amount you actually receive after all taxes, benefits, and other contributions have been subtracted."
            }
          },
          {
            "@type": "Question",
            "name": "How is federal withholding calculated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Federal withholding is calculated based on your filing status, the number of dependents you claim on your W-4 form, and your income bracket. The US uses a progressive tax system, meaning higher income portions are taxed at higher rates."
            }
          },
          {
            "@type": "Question",
            "name": "What are FICA taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FICA stands for Federal Insurance Contributions Act. It is a mandatory payroll tax that funds Social Security (6.2%) and Medicare (1.45%). Both employees and employers contribute to these funds."
            }
          },
          {
            "@type": "Question",
            "name": "Does this calculator save my data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. This calculator is 100% client-side, meaning all processing happens in your web browser. No data is sent to any server, ensuring complete privacy."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};


export const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    // h-20 approximates 2-3 lines of text with standard leading
    return (
        <div className="max-w-4xl mx-auto bg-gray-800/60 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-gray-700/50 shadow-xl transition-all duration-500">
            <JsonLdSchema />
            
            <div className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${isExpanded ? 'max-h-[20000px]' : 'max-h-24'}`}>
                <article className="prose prose-invert lg:prose-lg max-w-none text-gray-300">
                    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
                        The Ultimate Guide to Your Paycheck: Gross vs. Net, Taxes, and Wealth Building
                    </h2>
                    
                    <p className="lead text-lg leading-relaxed text-gray-200">
                        Understanding your paycheck is the single most important step in taking control of your financial destiny. 
                        It is not just a piece of paper or a direct deposit notification; it is the fuel for your life's goals. 
                        However, the gap between the salary you negotiated (Gross Pay) and the amount that hits your bank account (Net Pay) can be shocking. 
                        This comprehensive guide explores the anatomy of a paycheck, decoding every tax, deduction, and withholding to help you budget smarter and build wealth faster.
                    </p>

                    <div className="bg-gray-900/50 p-6 rounded-xl border-l-4 border-indigo-500 my-8">
                        <h3 className="text-xl font-bold text-white mt-0">Table of Contents</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 list-none pl-0">
                            <li><a href="#section-1" className="text-indigo-400 hover:text-white transition-colors flex items-center"><span className="mr-2">1.</span> Gross vs. Net Pay Explained</a></li>
                            <li><a href="#section-2" className="text-indigo-400 hover:text-white transition-colors flex items-center"><span className="mr-2">2.</span> The Truth About Taxes</a></li>
                            <li><a href="#section-3" className="text-indigo-400 hover:text-white transition-colors flex items-center"><span className="mr-2">3.</span> Pre-Tax vs. Post-Tax Deductions</a></li>
                            <li><a href="#section-4" className="text-indigo-400 hover:text-white transition-colors flex items-center"><span className="mr-2">4.</span> Mastering the 50/30/20 Rule</a></li>
                            <li><a href="#section-5" className="text-indigo-400 hover:text-white transition-colors flex items-center"><span className="mr-2">5.</span> Frequently Asked Questions</a></li>
                        </ul>
                    </div>

                    <h3 id="section-1" className="text-2xl font-bold text-white mt-12 mb-4">1. Gross Pay vs. Net Pay: The Critical Distinction</h3>
                    <p>
                        The most common financial mistake people make is budgeting based on their gross income. 
                        <strong>Gross Pay</strong> is the "sticker price" of your labor—the $60,000 or $100,000 salary you agreed to in your offer letter. 
                        It represents your total earnings before the government and your employer take their share.
                    </p>
                    <p>
                        <strong>Net Pay</strong>, colloquially known as "take-home pay," is the reality. It is the amount remaining after federal and state taxes, 
                        Social Security, Medicare, health insurance, and retirement contributions are subtracted. 
                        When you use our <em>Paycheck Calculator</em>, you are converting the theoretical Gross Pay into the practical Net Pay that you can actually spend.
                    </p>

                    <h3 id="section-2" className="text-2xl font-bold text-white mt-12 mb-4">2. The Truth About Taxes: Where Does the Money Go?</h3>
                    <p>
                        Taxes are typically the largest deduction from your paycheck. In the United States, the tax system is multi-layered.
                    </p>
                    <h4 className="text-xl text-yellow-400 font-semibold mt-6">Federal Income Tax</h4>
                    <p>
                        This is a progressive tax, meaning as you earn more, you are taxed at higher rates on the <em>incremental</em> dollars. 
                        There are seven tax brackets, ranging from 10% to 37%. Your employer estimates how much to withhold based on the information you provide on your W-4 form.
                    </p>
                    <h4 className="text-xl text-yellow-400 font-semibold mt-6">FICA Taxes (The Flat Taxes)</h4>
                    <p>
                        Regardless of your tax bracket, almost every employee pays FICA taxes. These are flat-rate taxes mandated by the Federal Insurance Contributions Act:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Social Security:</strong> 6.2% of your gross income (up to an annual wage base limit). This funds retirement and disability benefits for millions of Americans.</li>
                        <li><strong>Medicare:</strong> 1.45% of <em>all</em> your gross income, with no cap. High earners may pay an additional 0.9% surtax. This funds healthcare for the elderly.</li>
                    </ul>
                    <p>
                        <em>Fun Fact:</em> Your employer also pays these same amounts on your behalf, doubling the total contribution to the system.
                    </p>

                    <h3 id="section-3" className="text-2xl font-bold text-white mt-12 mb-4">3. Decoding Deductions: Pre-Tax vs. Post-Tax</h3>
                    <p>
                        Not all deductions are bad. In fact, some are essential tools for wealth building and tax avoidance.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
                            <h5 className="text-lg font-bold text-green-400 mb-2">Pre-Tax Deductions</h5>
                            <p className="text-sm">These are subtracted from your gross pay <em>before</em> taxes are calculated.</p>
                            <ul className="list-disc pl-5 mt-3 text-sm space-y-1">
                                <li><strong>401(k) / 403(b):</strong> Lowers taxable income now; taxed upon withdrawal in retirement.</li>
                                <li><strong>Health Insurance:</strong> Premiums paid for medical, dental, and vision.</li>
                                <li><strong>HSA / FSA:</strong> Funds for medical expenses.</li>
                            </ul>
                            <p className="mt-3 text-xs text-gray-400 italic">Benefit: You pay less in income taxes today.</p>
                        </div>
                        <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
                            <h5 className="text-lg font-bold text-blue-400 mb-2">Post-Tax Deductions</h5>
                            <p className="text-sm">These are subtracted <em>after</em> taxes have been withheld.</p>
                            <ul className="list-disc pl-5 mt-3 text-sm space-y-1">
                                <li><strong>Roth 401(k):</strong> Taxed now; tax-free withdrawals in retirement.</li>
                                <li><strong>Garnishments:</strong> Court-ordered payments (child support, unpaid debts).</li>
                                <li><strong>Union Dues:</strong> Fees for union membership (in some cases).</li>
                            </ul>
                            <p className="mt-3 text-xs text-gray-400 italic">Benefit: Tax advantages in the future (Roth).</p>
                        </div>
                    </div>

                    <h3 id="section-4" className="text-2xl font-bold text-white mt-12 mb-4">4. Strategic Budgeting: The 50/30/20 Rule</h3>
                    <p>
                        Once you have used our calculator to determine your Net Pay, the next step is assigning every dollar a job. 
                        The 50/30/20 rule, popularized by Senator Elizabeth Warren, is the gold standard for simple budgeting.
                    </p>
                    <ul className="space-y-4 mt-4">
                        <li className="flex items-start">
                            <span className="flex-shrink-0 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">50%</span>
                            <div>
                                <strong className="text-white block mb-1">Needs (Essentials)</strong>
                                <p>Rent/Mortgage, groceries, utilities, transportation, and minimum debt payments. If your needs exceed 50% of your net pay, you may need to downsize or increase income.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">30%</span>
                            <div>
                                <strong className="text-white block mb-1">Wants (Lifestyle)</strong>
                                <p>Dining out, streaming services, hobbies, and travel. This is the fun part of life, but it must be capped to ensure financial health.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">20%</span>
                            <div>
                                <strong className="text-white block mb-1">Savings & Debt (Future)</strong>
                                <p>Emergency fund contributions, extra debt payments, and retirement investing. This is the category that builds wealth.</p>
                            </div>
                        </li>
                    </ul>

                    <h3 id="section-5" className="text-2xl font-bold text-white mt-12 mb-4">5. Frequently Asked Questions (FAQ)</h3>
                    
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-bold text-yellow-400">Why did my paycheck go down?</h4>
                            <p>Several factors can cause a decrease: tax rates may have changed, you may have crossed into a higher tax bracket due to a raise (though only the extra income is taxed higher), insurance premiums may have increased, or you may have hit the Social Security wage base limit earlier in the year and the new year reset the deduction.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-yellow-400">Are bonuses taxed differently?</h4>
                            <p>Yes and no. Bonuses are "supplemental wages." The IRS often requires employers to withhold a flat 22% for federal taxes on bonuses. This might be higher or lower than your actual effective tax rate, which gets reconciled when you file your tax return in April.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-yellow-400">How accurate is this calculator?</h4>
                            <p>This calculator provides a high-quality estimate based on standard tax rates and the data you input. However, it cannot account for specific local tax nuances, complex deductions, or dual-income household adjustments without more data. Always consult a CPA for exact figures.</p>
                        </div>
                    </div>
                    
                    <hr className="border-gray-700 my-10" />
                    
                    <p className="text-center text-gray-400 italic text-sm">
                        Disclaimer: This article and the accompanying calculator are for educational purposes only and do not constitute professional financial or tax advice.
                    </p>
                </article>
                
                {!isExpanded && (
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent flex items-end justify-center pb-2 pointer-events-none">
                    </div>
                )}
            </div>
            
             <div className="flex justify-center mt-2 relative z-10">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                    {isExpanded ? 'Collapse Article' : 'Read Full Guide'}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};