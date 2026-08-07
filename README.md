# Xbanka Playwright Automation Framework

A robust end-to-end test automation framework built with **Playwright** and **TypeScript**, following the **Page Object Model (POM)** design pattern to ensure maintainability, scalability, and reusability.

---

## Project Overview

This framework automates key user journeys within the Xbanka web application, including authentication, dashboard navigation, wallet operations, cryptocurrency transactions, and market overview functionality.

The project is structured using reusable Page Objects, centralized locators, fixtures, and modular test suites.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Playwright Fixtures
- Dotenv
- Git & GitHub

---

## Project Structure

```
xbanka-playwright
│
├── components/
│   └── Reusable UI components
│
├── fixtures/
│   ├── baseFixtures.ts
│   └── authFixtures.ts
│
├── locators/
│   ├── LoginLocators.ts
│   ├── DashboardLocators.ts
│   ├── WalletLocators.ts
│   ├── CryptoLocators.ts
│   └── MarketOverviewLocators.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── WalletPage.ts
│   ├── CryptoPage.ts
│   └── MarketOverviewPage.ts
│
├── tests/
│   ├── auth/
│   ├── dashboard/
│   ├── wallet/
│   ├── crypto/
│   └── marketoverview/
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Automated Features

### Authentication

- User Login
- User Logout

### Dashboard

- Dashboard loads successfully
- Dashboard widgets verification

### Wallet

- Navigate to Wallet
- Fiat Wallet
- Crypto Wallet
- Transaction History

### Crypto

- Buy & Sell Page
- Convert
- Buy/Sell Toggle
- Get Quote
- Purchase Confirmation
- Transaction PIN
- Purchase Success
- View Receipt
- Buy Again
- Done
- Success Toast
- Transaction History Verification

### Market Overview

- Open Market Overview
- Favorites Tab
- Spot Tab
- Futures Tab
- Search Coin
- Search BTC
- Search ETH
- Trade Navigation
- Market Table Verification

---

## Framework Design

The framework follows the **Page Object Model (POM)**.

- **Locators**
  - Contains element selectors only.

- **Pages**
  - Contains reusable actions and assertions.

- **Fixtures**
  - Handles authentication and reusable page instances.

- **Components**
  - Contains reusable UI components such as dialogs and modals.

- **Tests**
  - Contains business scenarios only.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/xbanka-playwright.git
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```env
EMAIL=your-email@example.com
PASSWORD=your-password
```

---

## Running Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/auth/login.spec.ts
```

Run in headed mode

```bash
npx playwright test --headed
```

Run with Playwright UI

```bash
npx playwright test --ui
```

Debug tests

```bash
npx playwright test --debug
```

---

## Reports

Generate HTML Report

```bash
npx playwright show-report
```

---

## Best Practices

- Page Object Model
- Centralized Locators
- Reusable Fixtures
- Feature-based Test Organization
- Independent Test Cases
- Dynamic Assertions
- Clean Code Principles

---

## Future Enhancements

- API Testing
- CI/CD with GitHub Actions
- Cross-browser Execution
- Parallel Execution Optimization
- Allure Reporting
- Visual Regression Testing

---

## Author

**Ayodeji Adebayo**

Senior Software Development Engineer in Test (SDET)

Specializing in:

- Test Automation
- Playwright
- Selenium
- Cypress
- API Testing
- DevOps