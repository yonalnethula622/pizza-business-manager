/* =========================================
   CEYLON CRUST PIZZA
   APPLICATION JAVASCRIPT
========================================= */

// TEMPORARY DEVELOPMENT LOGIN
// Replace with Firebase Authentication later.

const DEMO_PASSWORD = "2009";


// =========================================
// APPLICATION ELEMENTS
// =========================================

const loginScreen = document.getElementById("loginScreen");
const app = document.getElementById("app");

const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("passwordInput");
const loginError = document.getElementById("loginError");

const logoutButton = document.getElementById("logoutButton");


// =========================================
// LOGIN FUNCTION
// =========================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const enteredPassword = passwordInput.value;

    if (enteredPassword === DEMO_PASSWORD) {

        loginScreen.classList.add("hidden");
        app.classList.remove("hidden");

        loginError.textContent = "";
        passwordInput.value = "";

        updateDate();

    } else {

        loginError.textContent = "Incorrect password. Please try again.";

        passwordInput.value = "";
        passwordInput.focus();

    }

});


// =========================================
// LOGOUT FUNCTION
// =========================================

logoutButton.addEventListener("click", function () {

    const confirmation = confirm(
        "Are you sure you want to logout?"
    );

    if (confirmation) {

        app.classList.add("hidden");
        loginScreen.classList.remove("hidden");

        passwordInput.value = "";
        loginError.textContent = "";

    }

});


// =========================================
// PAGE NAVIGATION
// =========================================

const navigationButtons = document.querySelectorAll(".nav-item[data-page]");

const pageTitle = document.getElementById("pageTitle");

const pageNames = {

    dashboard: "Dashboard",

    "create-invoice": "Create Invoice",

    invoices: "All Invoices",

    customers: "Customers",

    products: "Pizza & Pricing",

    reports: "Sales Reports",

    settings: "Settings"

};


function navigateTo(pageName) {

    const selectedPage = document.getElementById(pageName);

    if (!selectedPage) {
        return;
    }

    // Hide all pages

    document.querySelectorAll(".page").forEach(function (page) {

        page.classList.remove("active-page");

    });


    // Show selected page

    selectedPage.classList.add("active-page");


    // Update sidebar navigation

    navigationButtons.forEach(function (button) {

        button.classList.remove("active");

        if (button.dataset.page === pageName) {

            button.classList.add("active");

        }

    });


    // Update topbar title

    pageTitle.textContent = pageNames[pageName] || "Dashboard";


    // Return to top

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// Navigation button events

navigationButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        navigateTo(button.dataset.page);

    });

});


// =========================================
// AUTOMATIC DATE
// =========================================

function updateDate() {

    const dateElement = document.getElementById("currentDate");

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-AE", {

        weekday: "long",

        day: "2-digit",

        month: "long",

        year: "numeric"

    });

    dateElement.textContent = formattedDate;

}


// =========================================
// DASHBOARD STATISTICS
// =========================================

function updateDashboard() {

    // These are placeholders until invoice storage
    // and Firebase are connected.

    document.getElementById("todayOrders").textContent = "0";

    document.getElementById("todaySales").textContent = "AED 0.00";

    document.getElementById("totalInvoices").textContent = "0";

    document.getElementById("pendingPayments").textContent = "AED 0.00";

}


// =========================================
// INITIALIZE APPLICATION
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    updateDate();

    updateDashboard();

    console.log("Ceylon Crust Pizza application loaded.");

});
