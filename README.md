<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [Project Name] 🎯

## Basic Details

### Team Name: [Name]

### Team Members
- Member 1: Nahma tv - Albertian institute of science and technology
- Member 2: Nakshathra ks - albertian institute of science and technology

### Hosted Project Link
https://deep-logic-three.vercel.app/login.html

### Project Description
A web-based college canteen self-ordering system that allows students to view food availability in real time, place orders in advance, and pick them up without standing in queues. The system reduces food wastage and improves canteen efficiency.

### The Problem statement
College canteens often face issues such as long queues, food items running out without prior notice, and poor order management. Students waste time waiting, and canteen staff struggle to predict demand, leading to food wastage or shortages.

### The Solution
Our solution is a self-ordering web application where students can log in, check real-time food availability, place orders, and receive a pickup time. This helps students plan better and helps canteen staff manage stock efficiently.

## Technical Details
Languages used: HTML, CSS, JavaScript
Libraries used: Firebase SDK

### Technologies/Components Used

**For Software:**
- Languages used: [e.g., JavaScript, Python, Java]
- Frameworks used: [e.g., React, Django, Spring Boot]
- Libraries used: [e.g., axios, pandas, JUnit]
- Tools used: [e.g., VS Code, Git, Docker]

**For Hardware:**


---

## Features

- Feature 1: Students can create accounts or log in using Firebase Authentication.
- Feature 2: Displays food items with categories like "Snacks," "Cool Drinks," "Veg," and "Non-Veg".
- Feature 3: Shows whether items are available or "Out of Stock".
- Feature 4: Allows users to add items to a cart, view a total price, and receive an "Order ID" and estimated pickup time upon checkout.
- Feature 5: Canteen workers can manage orders and track progress.
---

## Implementation

### For Software:

#### Installation
1. Clone the Repository:
    ```
    git clone https://github.com/nakshathrakanadi-eng/deep-logic.git
    cd deep-logic
    ```
2. Firebase Setup:
The project uses Firebase. Ensure you have a Firebase project created at console.firebase.google.com. The current configuration is already pointed to deep-logic-9025b.

3. Local Server:
Since this is a frontend-heavy project, you can run it using any static server (like Live Server in VS Code) or simply open login.html in your browser.

#### Run
If using Node.js http-server:
```
npx http-server .
``

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

https://drive.google.com/drive/folders/1d1pPrRh65UAZAk1jWjpLQgCE09pLrJ9P?usp=sharing

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**

![Workflow](docs/workflow.png)
*Add caption explaining your workflow*

---

## Additional Documentation  API DOCUMENTATION https://deep-logic-api.vercel.app

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://deep-logic-three.vercel.app/login.html

##### Endpoints

**GET /api/endpoint**
- **Description:** Retrieves all saved logic models for the authenticated user.
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** Submits a logic configuration for server-side processing.
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

## Project Demo

### Video
https://drive.google.com/drive/folders/1d1pPrRh65UAZAk1jWjpLQgCE09pLrJ9P?usp=sharing



### Additional Demos
API DOCUM

## AI Tools Used (Optional - For Transparency Bonus)
chatgpt

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

**Purpose:** 
Debugging frontend logic

Improving UI structure

Code review and optimization

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

Nahma tv: Frontend development, Firebase authentication, deployment

Nakshathra KS: UI design, testing, documentation, workflow design

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub