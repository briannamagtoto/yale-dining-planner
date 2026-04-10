# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

I'm not sure what the stuff above is from but the stuff below is the template:

# React App Created with Vite

This README exemplifies all the sections that are expected in the code `README.md` file for Assignment 5. This file can be used as a template for the assignment: students are suggested to keep the sections, but change their content as needed.

## How to install dependencies, build and run the project

The application was originally created with Vite 8, as shown below:

```bash
npm create vite@latest my-vite-app
```

To build and run the application, within the source dir:

```bash
npm install
npm run dev  # run the application on localhost
```

## Project concept and tasks

This section should describe the project concept: what is the problem space and the intended users? what solution is proposed for the problem? how is this solution novel?

### Problem Space: 

We are addressing student difficulties with dining hall meal plan optimization. Often, students have trouble managing their dining points and/or meal swipes, leaving them with leftover points/swipes at the end of the semester that go to waste, or leaving them with none left at the end of the semester/quarter/year (wasted money or hunger). They may also encounter other related issues, like not enough meal swipes to get through the week or wasting meal swipes in a certain week. It is difficult to track off the top of a student's head, or by other means, how many swipes/points they have used.

### Solution Space: 

Our website will provide a user a simple interface for viewing their dining habits over time.

On a high level, the user will be able to view dining analytics created for them in visual graphs. Or, if desired, they get a more granular, current week view, where they can click on each individual day to see what money was spent that day. They can add their own meals for the day in which they ate them to track their meals and money spent on them over time.

The landing page on our website has two tabs for Logging Weekly Meals (Budget Planning) and Analyzing Spending (Budget Analytics) in addition to a tab for seeing the Yale dining menus for the day. Broadly, the budget planning tab supports task 1 while the budget analytics tab supports task 2. 

In the budget planning tab, one can see the current meal plan usage and there exists a calendar to plan out weekly meal usage. The calendar view allows students to account for their schedule and set a budget for the week as well as see their usage through the week as they proceed. By clicking on each date from the calendar view, students can input and plan the meals for the week. This directly helps support task 1 we discussed above as students are able to determine their balance and make a plan for the week.

In the budget analytics tab, one can see the overall meal plan usage for the week and for the semester in terms of pie charts and bar charts showing the overall usage for the week, which allows students to analyze their current spending for the week and make changes accordingly. This aids students meet the requirements for task 2 discussed above.

### How is the solution unique:

Currently there are no existing solutions on campus which allow students to view their meal point balance and optimize/plan for their meal plans. The reason why our solution is better than 3rd party applications is because it is personalized to Yale students. Particularly, students will have a single platform to support their meal plan planning including viewing meals, adding their weekly usage as well as analyzing their meal plan usage using summary statistics. We believe that the summary statistics tab along with the personalization makes our solution better particularly for Yale students. 


### Task 1

Task 1: Students want to determine their weekly budget based on their current dining points and meal swipes balance.

Steps involved in Task 1:

1. Check current balance:
   The student checks their current dining points and meal swipe balance (e.g., by swiping, making a small purchase at a dining hall or retail location, or by checking on Yale Hospitality).

3. Plan points over time:
   The student considers how many points they have left and divides them across the remaining time period (e.g., per week or per day).

4. Account for schedule and habits:
   The student factors in their academic schedule, time availability, usual eating patterns (breakfast/lunch/dinner), and typical food cravings.

5. Set a meal budget:
   Based on the plan, the student determines how many points they can spend on the current meal.

### Task 2

Task 2: Students want to analyse their budget on a larger-scale, seeing how they maintained their budget and making habitual changes as needed.

Steps involved in Task 2:

1. Review overall dining usage:
   Students look at their total meal swipes and dining points used over a longer period (e.g., weekly or monthly), rather than per meal.

2. Compare spending pace to time remaining:
   Students analyze whether their current rate of spending aligns with how much of the semester remains, identifying under- or over-spending patterns.

3. Evaluate habits and patterns:
   Students reflect on when, where, and why they tend to spend more or less (schedule constraints, cravings, convenience, or repeated choices).

4. Adjust future budget allocations:
   Based on this analysis, students redistribute points and swipes across upcoming weeks or meals, adding leftover points or compensating for overspending.

5. Set updated spending goals:
   Students define new weekly or per-meal targets that better reflect their habits and long-term budget goals.

6. Track progress and iterate:
   Students continue monitoring their usage over time, making gradual, habitual changes rather than reactive, one-off decisions.

## How the team members used AI

Was AI used? If yes, indicate what AI model/interface was used, for what purpose, how the model was prompted, etc.

Pranay Raj Kapoor: I used Claude Code and ChatGPT. I used ChatGPT to set up the landing pages while Claude Code was prompted to create the budget analytics pages and also create the context variables for dyanmically updating the website state when users added meals. I provided Claude Code with a picture of the Budget Analytics Figma prototypes and had it implement the Budget Analytics pages. I also prompted Claude Code to update the Semester and Weekly Balances based on user input in the Meal Distributions sections.

Liya Fasil: I used Gemini's chatbot, similar to how we did in class, to turn our figma sketch into a few of our website pages. I had it generate the code given a sketch of the page and instructions to turn the style from the image into css styling, and made changes as necessary to ensure things were working as expected. The purpose was to find the right libraries that would create the desired visual effect for the webpages I was particularly working on.

## Link to the team’s GitHub repo

[Link to Github Repo](https://github.com/briannamagtoto/yale-dining-planner)

## Collaboration record

For each team member, explain what they contributed to the code prototype

Pranay Raj Kapoor: I helped with the design and implementation of the landing page and the majority of the Budget Analytics tabs for semester and weekly balance. I also supported the team ensuring the state variables from logging meals in Meal Distribution reflected changes in the Budget Analytics section.

Liya Fasil: I added the meal distribution calendar page and the individual day page, including their css styling, buttons functionality, routing, etc. I helped my team scope out roles and communicate.
