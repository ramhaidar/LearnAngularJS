# Single Page Web Applications with AngularJS - Coding Assignments

This repository contains all coding assignments for the Coursera course **Single Page Web Applications with AngularJS**. Below are the detailed instructions for each module's assignment.

---

## Table of Contents

1. [Module 1 - Lunch Check](#module-1---lunch-check)
2. [Module 2 - Shopping List Check Off](#module-2---shopping-list-check-off)
3. [Module 3 - Narrow Down Menu](#module-3---narrow-down-menu)
4. [Module 4 - Restaurant Menu App](#module-4---restaurant-menu-app)
5. [Module 5 - Newsletter Signup & My Info](#module-5---newsletter-signup--my-info)

---

## Module 1 - Lunch Check

The objective of this assignment is to create a front-end application that checks if the user’s lunch is "Too much" or "Enjoyable" based on the number of items entered.

### Features
- Input comma-separated items for lunch.
- Check if the list contains:
  - 3 or fewer items: Display "Enjoy!"
  - More than 3 items: Display "Too much!"
  - Empty input: Display "Please enter data first."

[View Full Instructions](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment1/Assignment-1.md)

---

## Module 2 - Shopping List Check Off

Create a shopping list application that allows users to move items from a "To Buy" list to an "Already Bought" list.

### Features
- Pre-populated "To Buy" list with item names and quantities.
- Move items to "Already Bought" list using the "Bought" button.
- Dynamic empty list messages:
  - "Nothing bought yet" for the "Already Bought" list.
  - "Everything is bought!" when the "To Buy" list is empty.

[View Full Instructions](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment2/Assignment-2.md)

---

## Module 3 - Narrow Down Menu

Develop an application that retrieves menu items from a REST API and narrows down the list based on user search input.

### Features
- Search menu item descriptions using a textbox and button.
- Display results or show "Nothing found" if no matches are found.
- Allow users to remove items from the results with a "Don't want this one!" button.

[View Full Instructions](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment3/Assignment-3.md)

---

## Module 4 - Restaurant Menu App

Build a master/detail view application to browse categories and items from a restaurant menu.

### Features
- Three views:
  1. **Home View**: Displays a welcome message.
  2. **Categories View**: Lists all menu categories.
  3. **Items View**: Lists items for a selected category.
- Navigate seamlessly between views.
- Use REST API to fetch categories and items.

[View Full Instructions](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment4/Assignment-4.md)

---

## Module 5 - Newsletter Signup & My Info

Create a sign-up and profile page for a newsletter subscription.

### Features
1. **Sign Up Page**:
   - Collect user information (name, email, phone, and favorite menu item).
   - Validate inputs and fetch the favorite menu item from the REST API.
   - Display validation errors or success messages.
2. **My Info Page**:
   - Show user’s saved information, including a picture and description of their favorite menu item.
   - Display "Not Signed Up Yet. Sign up Now!" if no information is saved.

[View Full Instructions](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment5/Assignment-5.md)

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/ramhaidar/LearnAngularJS
   ```
2. Navigate to the folder of the desired module:
   ```bash
   cd mod1_solution
   ```
3. Start a Python webserver:
   - For Python 3:
     ```python -m http.server```
   - For Python 2:
     ```python -m SimpleHTTPServer```

4. Open your browser and navigate to:
   ```http://localhost:8000```

5. Ensure the AngularJS application is properly linked in your `index.html`. The page should now be served from the Python webserver.

---

## Live Demos

- [Module 1 Assignment Demo](https://ramhaidar.github.io/LearnAngularJS/mod1_solution/)
- [Module 2 Assignment Demo](https://ramhaidar.github.io/LearnAngularJS/mod2_solution/)
- [Module 3 Assignment Demo](https://ramhaidar.github.io/LearnAngularJS/mod3_solution/)
- [Module 4 Assignment Demo](https://ramhaidar.github.io/LearnAngularJS/mod4_solution/)
- [Module 5 Assignment Demo](https://ramhaidar.github.io/LearnAngularJS/mod5_solution/)

---

## License

This repository is licensed under the MIT License. See the LICENSE file for details.
