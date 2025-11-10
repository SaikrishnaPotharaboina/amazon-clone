# Amazon Clone (HTML + CSS + JavaScript)

This project is a **fully functional Amazon clone** built using **JavaScript**, **HTML**, and **CSS**, and it uses the **SuperSimple.dev backend API** for product data, cart logic, and order processing.

---

## 🚀 Features

| Feature          | Description                                              |
| ---------------- | -------------------------------------------------------- |
| Product Listing  | Displays real products from SuperSimple.dev API          |
| Add to Cart      | Add, remove, and update item quantities in cart          |
| Checkout Page    | Shows order summary with dynamic pricing                 |
| Order Storage    | Orders are stored using the backend API and localStorage |
| Orders Page      | Displays previous orders placed by the user              |
| Order Tracking   | Tracks order delivery status with dynamic timeline       |
| Fully Responsive | Works on desktop and mobile                              |

---

## 🧰 Tech Stack

* **HTML** – Structure
* **CSS** – Layout & design (including responsive layout)
* **JavaScript (ES Modules)** – App logic & dynamic UI
* **SuperSimple.dev API** – Backend data

---

## 🔗 API Used

Base URL:

```
https://supersimplebackend.dev
```

Common Endpoints:

```
GET /products       → Fetch all products
POST /cart          → Store cart data
POST /orders        → Place orders
GET /orders         → Fetch past orders
GET /tracking       → Fetch order tracking status
```

> Your project uses these endpoints through `fetch()` inside your `javascript/*.js` files.

---

## 📂 Project Structure

```
project/
├─ index.html           # Home page (Product Listing)
├─ checkout.html        # Checkout Page
├─ orders.html          # Orders List Page
├─ tracking.html        # Order Tracking Page
├─ javascript/
│   ├─ amazon.js        # Loads products & manages cart actions
│   ├─ checkout.js      # Renders checkout summary
│   ├─ deliveryOrders.js# Loads past orders
│   ├─ tracking.js      # Displays tracking progress
├─ styles/
│   ├─ shared/          # Shared reusable styles
│   └─ pages/           # Page‑specific styles
└─ images/              # Icons & logos
```

---

## 💡 How It Works

### 1. **Product Display**

`index.html` loads products from the API and displays them.

### 2. **Cart System**

Cart data is stored in `localStorage` so it remains after page refresh.

### 3. **Checkout**

`checkout.html` calculates total price dynamically based on cart.

### 4. **Orders**

When checkout completes, the order is stored via API.

### 5. **Order Tracking**

`tracking.html` shows live delivery progress using orderId.

---

## 🏃 How to Run Locally

### Option 1 — Open directly

Just open `index.html` in your browser.

### Option 2 — If CORS blocks requests

Run a local server:

```
python -m http.server 8000
```

Then open:

```
http://localhost:8000
```

---

## 📦 Deployment

You can host this for free on:

* **Netlify**
* **Vercel**
* **GitHub Pages**

No build step required. Upload and run.

---

## ✅ Future Improvements

* Add Login / Authentication
* Add Payment Gateway UI
* Improve mobile UI layout

---

## 📝 License

This project is for learning and educational purposes.

---

### 🙌 Credits

* Frontend from your code implementation
* Backend API: **[https://supersimplebackend.dev](https://supersimplebackend.dev)**

## 🧪 Testing (Jasmine Framework) (full Testing was not done)

This project includes unit tests written using the **Jasmine** testing framework.

### Folder Structure

```
javascript/
  ...source files...
spec/
  ...test files (Jasmine)...
spec-runner.html  # Opens Jasmine test runner in the browser
```

### How to Run Tests

1. Open **spec-runner.html** in your browser.
2. The **Jasmine Test Runner UI** will load and display all test results.
3. Any failing tests will be clearly highlighted.

### Writing New Tests

* Create new test files inside the `spec/` directory.
* Use Jasmine methods:

```js
describe('Feature Name', () => {
  it('should do something', () => {
    expect(actualValue).toEqual(expectedValue);
  });
});
```

---

## 📄 License

This template is provided for educational/demo purposes. Remove Amazon branding if deploying publicly.
### NOTE 
This project contains some minor issues or incomplete parts, especially in certain interactions and edge cases. These do not affect the main project functionality. They are kept intentionally as part of the learning process, to understand how the logic works step‑by‑step and improve over time.

Feel free to experiment, debug, and refine — this project is meant for learning and practice, not a production deployment.
