# Playwright OpenCart Automation

This repository contains automated end-to-end tests for [OpenCart](https://www.opencart.com/), a free, open-source e-commerce platform, built using [Playwright](https://playwright.dev/).

> **Note:** This project is not affiliated with or endorsed by OpenCart. OpenCart is used here solely as a sample application for automation testing practice. OpenCart is licensed under [GPLv3](https://github.com/opencart/opencart/blob/master/LICENSE.md).

---

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [PHP >= 8.0](https://www.php.net/) and a local web server (e.g. XAMPP, WAMP, or Docker) to run OpenCart
- [Git](https://git-scm.com/)

---

## Step 1: Download and Install OpenCart Locally

Since OpenCart is open source, you'll need a local instance running before any test cases can be executed against it.

1. **Download OpenCart**

   Go to the official download page and get the latest release:
   👉 [https://www.opencart.com/index.php?route=cms/download](https://www.opencart.com/index.php?route=cms/download)

2. **Unzip the downloaded file**

   Extract the contents to your local server directory (e.g. `htdocs` for XAMPP, `www` for WAMP, or wherever your local server serves files from).

3. **Follow OpenCart's installation guide**

   Inside the extracted folder, you'll find:
   - `INSTALL.md` — step-by-step installation instructions
   - `README.md` — general project overview and additional setup notes

   Follow `INSTALL.md` carefully to complete the installation (this includes setting up a database, running the web installer, and configuring your `config.php` files).

4. **Verify OpenCart is running**

   Once installed, confirm you can access the storefront (typically at `http://localhost/`) and log in with a valid account before proceeding to the next step.

> ⚠️ **Important:** The local server (Apache/Nginx + PHP) and database (MySQL) must be running at all times while executing the test cases. If OpenCart is not accessible in your browser, the automated tests will fail or time out.

---

## Step 2: Clone This Automation Repository

Once OpenCart is installed and running locally, clone this repository to a separate directory:

```bash
git clone https://github.com/sandesh2059/Playwright-opencart-automation.git
cd Playwright-opencart-automation
```

---

## Step 3: Install Project Dependencies

Install the required Node packages and Playwright browsers:

```bash
npm install
npx playwright install
```

---

## Step 4: Run the Test Automation Suite

> ✅ **Before running any tests, make sure your local OpenCart server and database are up and running.** The tests navigate to `http://localhost/index.php` and will fail if the application isn't reachable.

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/Add_to_cart.spec.js
```

Run tests in headed mode (visible browser window):

```bash
npx playwright test --headed
```

View the HTML test report after a run:

```bash
npx playwright show-report
```

---

## Project Structure

```
Playwright-opencart-automation/
├── .github/                    # GitHub Actions / CI configuration (if applicable)
├── tests/
│   ├── Add_to_cart.spec.js     # Add to cart test cases
│   ├── example.spec.js         # Default Playwright example test
│   ├── Login_test.spec.js      # Login functionality test cases
│   ├── Logout_test.spec.js     # Logout functionality test cases
│   ├── my_first_test.spec.js   # Initial practice test
│   ├── Register_test.spec.js   # User registration test cases
│   └── Search_test.spec.js     # Product search test cases
├── playwright-report/          # Auto-generated HTML report (after test runs)
├── test-results/               # Auto-generated test artifacts (screenshots, traces, videos)
├── playwright.config.js        # Playwright configuration
├── package.json
├── package-lock.json
└── README.md
```

---

## License

This automation project is provided as-is for testing and learning purposes. OpenCart itself is licensed separately under [GPLv3](https://github.com/opencart/opencart/blob/master/LICENSE.md).