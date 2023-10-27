Certainly! Here's the formatted version of the README file for your bug tracker MERN stack project:

---

# Bug Tracker App

## Overview

Bug Tracker App is a web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to track bugs, manage their descriptions, priorities, and associated users. Users can easily switch between adding a new bug and viewing all existing bugs.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Bug Schema Fields:**
  - **Name:** The name of the bug.
  - **Description:** Detailed information about the bug.
  - **Priority:** Priority level of the bug.
  - **User:** A reference to the user who reported the bug. (Currently includes only user name, to be updated)

## Features

- **Add Bug:**
  - Users can add a new bug by providing bug name, description, priority, and their name as the reporter.
- **View All Bugs:**
  - Users can view a list of all bugs, along with their descriptions and priorities.
- **User Switching:**
  - Two buttons allow users to switch between "Add Bug" and "View All Bugs" modes for easy interaction.

## How to Use

1. **Add Bug:**
   - Click on the "Add Bug" button.
   - Fill out the bug details form, including bug name, description, priority, and user name.
   - Click "Submit" to add the bug to the tracker.

2. **View All Bugs:**
   - Click on the "View All Bugs" button.
   - Browse through the list of bugs to view their descriptions and priorities.

## Setup Instructions

1. **Clone the Repository:**
   ```
   git clone <repository-url>
   cd bug-tracker-app
   ```

2. **Install Dependencies:**
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Set Up MongoDB:**
   - Create a MongoDB database and update the connection string in `backend/config/db.js`.

4. **Start the Application:**
   - Start the frontend and backend servers separately:
     ```
     cd frontend
     npm start

     cd ../backend
     npm start
     ```

5. **Access the App:**
   - Open your browser and go to `http://localhost:3000` to use the Bug Tracker App.

## Future Updates

- **User Model Enhancement:**
  - The user model will be updated to include more details besides just the name.
- **Additional Bug Details:**
  - More fields and features related to bug tracking will be added in future updates.

---

Feel free to modify the instructions, add deployment details, or include any other relevant information to fit your project's specific requirements.