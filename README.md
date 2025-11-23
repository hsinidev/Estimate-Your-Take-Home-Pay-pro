<div align="center">
  <img src="https://img.shields.io/badge/Status-Maintained-green?style=for-the-badge" alt="Status" />
  <br /><br />
  <h1 align="center" style="border-bottom: none;">💰 Paycheck Calculator (Gross to Net)</h1>
  <p align="center" style="font-size: 1.2rem;">
    A professional, privacy-first financial tool for estimating net income.
    <br />
    <strong>Accurate. Private. Modern.</strong>
  </p>

  <p align="center">
    <a href="https://PaycheckCalculator.doodax.com" target="_blank">
      <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-PaycheckCalculator.doodax.com-indigo?style=for-the-badge&logo=rocket" alt="Live Demo" height="40">
    </a>
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.3+-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  </p>
</div>

---

## 📖 About The Project

The **Paycheck Calculator** is a sophisticated single-page application (SPA) designed to demystify payroll for employees. Unlike complex government forms, this tool offers a streamlined, user-friendly interface to instantly convert a gross annual salary into a realistic "take-home" pay estimate.

It features a high-performance, client-side calculation engine, ensuring that **zero user data** is ever transmitted to a server. This commitment to privacy makes it a trusted tool for financial planning. The application is wrapped in a stunning, immersive galaxy-themed UI that provides a unique and engaging user experience.

### ✨ Key Features

-   **⚡ Instant Real-Time Calculation**: See results update immediately as you adjust salary, tax rates, or deductions.
-   **🔒 100% Privacy Focused**: All logic runs in the browser. No API calls send financial data externally.
-   **📱 Fully Responsive Design**: Flawless experience on mobile, tablet, and desktop devices.
-   **📊 Detailed Breakdown**: Visualizes Gross Pay, Tax Withholdings (Federal/State/FICA), and Pre-Tax Deductions clearly.
-   **🎨 Immersive UX**: Features a custom parallax starfield background and modern glassmorphism UI elements.
-   **🔍 SEO Optimized**: Built with semantic HTML, JSON-LD Schema, and meta tags for maximum search engine visibility.
-   **📚 Educational Content**: Includes a comprehensive built-in guide on understanding paychecks and budgeting.

---

## 🛠️ Tech Stack

This project is built with a focus on performance, type safety, and maintainability.

-   **Framework**: [React](https://reactjs.org/) (v18+) with Hooks for state management.
-   **Language**: [TypeScript](https://www.typescriptlang.org/) for robust, error-free code.
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first, responsive design.
-   **Build Tooling**: Vite/CRA (implied standard structure).
-   **Icons**: SVG Icons (Heroicons style).

---

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg          # Application icon
│   ├── robots.txt           # SEO crawler directives
│   └── sitemap.xml          # Site map for search engines
├── src/
│   ├── components/
│   │   ├── PaycheckCalculatorTool.tsx   # Core calculator logic & UI
│   │   └── ThemeLayout.tsx              # Main layout, Modal system, Footer
│   ├── utils/
│   │   ├── FinancialMath.ts             # Pure functions for tax/salary math
│   │   └── SeoArticle.tsx               # Long-form SEO content component
│   ├── App.tsx                          # Root component
│   ├── index.tsx                        # Entry point
│   └── types.ts                         # TypeScript interfaces
├── README.md                            # Documentation
└── package.json                         # Dependencies
```

---

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repo**
    ```sh
    git clone https://github.com/hsinidev/paycheck-calculator.git
    ```
2.  **Install NPM packages**
    ```sh
    npm install
    ```
3.  **Run development server**
    ```sh
    npm start
    ```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 👤 Author

**HSINI MOHAMED**

-   Website: [doodax.com](https://doodax.com)
-   GitHub: [@hsinidev](https://github.com/hsinidev)
-   Email: hsini.web@gmail.com

---

<div align="center">
  <p>Made with ❤️ for financial literacy.</p>
</div>
