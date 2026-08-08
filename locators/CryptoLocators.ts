export const CryptoLocators = {

    // Navigation
    cryptoMenu: "role=link[name='Crypto']",

    // Tabs
    buySellTab: "role=button[name='Buy & Sell']",
    convertTab: "role=button[name='Convert']",

    // Buy / Sell Toggle
    buyButton: "//button[normalize-space()='buy']",
    sellButton: "//button[normalize-space()='sell']",

    // Amount Fields
    youPayInput: "(//input[@placeholder='0.00'])[1]",
    youReceiveInput: "(//input[@placeholder='0.00'])[2]",

    // Currency Selectors
    payCurrencyDropdown: "text=NGNX",
    receiveCurrencyDropdown: "text=USDT",


    // Quote
    getQuoteButton: "role=button[name='Get Quote']",

    // Purchase Confirmation Modal
    confirmPurchaseHeading: "role=heading[name='Confirm Purchase']",
    confirmPurchaseButton: "role=button[name='Confirm Purchase']",
    cancelPurchaseButton: "role=button[name='Cancel']",

    // Transaction PIN
    pinModalHeading: "role=heading[name='Enter PIN']",
    // PIN Inputs
     pinDigit1: "//input[@aria-label='Digit 1 of 4']",
     pinDigit2: "//input[@aria-label='Digit 2 of 4']",
     pinDigit3: "//input[@aria-label='Digit 3 of 4']",
     pinDigit4: "//input[@aria-label='Digit 4 of 4']",
     //confirm transaction button
    confirmTransactionButton: "role=button[name='Confirm Transaction']",
    // Success Modal
    purchaseSuccessfulHeading: "//h3[normalize-space()='Purchase successful!']",
    doneButton: "//button[normalize-space()='Done']",
    buyAgainButton: "//button[normalize-space()='Buy again']",
    viewReceiptButton: "//button[normalize-space()='View Receipt']",

    // Receipt
    receiptHeading: "text=Transaction Receipt",
    closeReceiptButton: "role=button[name='Close']",

    // Toast Notification
    successToast: "text=Purchase Successful",

    // Right Panel
    recentTransactionHeading: "text=Recent Transaction",

    // Transaction History
    transactionHistoryItem: "text=Completed",

    // Bottom Section
    howToBuyHeading: "text=How to buy crypto on Xbanka"

};