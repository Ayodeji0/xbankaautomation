export const WalletLocators = {

    // Sidebar
     walletMenu: 'role=link[name="Wallet"]',

    // Headings
    myWalletHeading: "//h1[normalize-space()='My Wallets']",
    transactionHistoryHeading: "//h3[normalize-space()='Transaction History']",
    myHoldingsHeading: 'text=My Holdings',

    // Wallet Tabs
    totalValueTab: "//button[normalize-space()='Total Value']",
    fiatTab: "//button[normalize-space()='Fiat']",
    cryptoTab: "//button[normalize-space()='Crypto']",

    // Cards
    totalPortfolioValue: "//span[normalize-space()='Total Portfolio Value']",
    availableBalance: 'text=Available Balance',
    totalCryptoValue: 'text=Total Crypto Value',

    // Fiat Buttons
    addFundButton: 'button:has-text("Add Fund")',
    sendButton: 'button:has-text("Send")',

    // Crypto Buttons
    depositButton: 'button:has-text("Deposit")',
    convertButton: 'button:has-text("Convert")',

    // Transaction History
    allTab: "//button[contains(text(),'All')]",
    pendingTab: "//button[normalize-space()='Pending']",
    completedTab: "//button[normalize-space()='Completed']",
    inProgressTab: "//button[normalize-space()='In Progress']",
    failedTab: "//button[normalize-space()='Failed']",
    searchBox: "//input[@placeholder='Search by reference id or amount']",
    filterDropdown: 'button:has-text("All")',

};