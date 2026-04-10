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

# Example React App Created with Vite

This README exemplifies all the sections that are expected in the code `README.md` file for Assignment 5. This file can be used as a template for the assignment: students are suggested to keep the sections, but change their content as needed.

## How to install dependencies, build and run the project

The application was originally created with Vite 8, as shown below:

```bash
npm create vite@latest my-vite-app
```

To build and run the application:

```bash
npm install
npm run dev  # run the application on localhost
```

## Project concept and tasks

This section should describe the project concept: what is the problem space and the intended users? what solution is proposed for the problem? how is this solution novel?

We are addressing student difficulties with dining hall meal plan optimization. Often, students have trouble managing their dining points and/or meal swipes, leaving them with leftover points/swipes at the end of the semester that go to waste, or leaving them with none left at the end of the semester/quarter/year (wasted money or hunger). They may also encounter other related issues, like not enough meal swipes to get through the week or wasting meal swipes in a certain week. It is difficult to track off the top of a student's head, or by other means, how many swipes/points they have used.

### Task 1

Task 1: Students want to determine their weekly budget based on their current dining points and meal swipes balance.

Steps involved in Task 1:

1. Check current balance
   The student checks their current dining points and meal swipe balance (e.g., by swiping, making a small purchase at a dining hall or retail location, or by checking on Yale Hospitality).

3. Plan points over time
   The student considers how many points they have left and divides them across the remaining time period (e.g., per week or per day).

4. Account for schedule and habits
   The student factors in their academic schedule, time availability, usual eating patterns (breakfast/lunch/dinner), and typical food cravings.

5. Set a meal budget
   Based on the plan, the student determines how many points they can spend on the current meal.

### Task 2

Task 2: Students want to analyse their budget on a larger-scale, seeing how they maintained their budget and making habitual changes as needed.

Steps involved in Task 2:

1. Review overall dining usage
   Students look at their total meal swipes and dining points used over a longer period (e.g., weekly or monthly), rather than per meal.

2. Compare spending pace to time remaining
   Students analyze whether their current rate of spending aligns with how much of the semester remains, identifying under- or over-spending patterns.

3. Evaluate habits and patterns
   Students reflect on when, where, and why they tend to spend more or less (schedule constraints, cravings, convenience, or repeated choices).

4. Adjust future budget allocations
   Based on this analysis, students redistribute points and swipes across upcoming weeks or meals, adding leftover points or compensating for overspending.

5. Set updated spending goals
   Students define new weekly or per-meal targets that better reflect their habits and long-term budget goals.

6. Track progress and iterate
   Students continue monitoring their usage over time, making gradual, habitual changes rather than reactive, one-off decisions.

## How the team members used AI

Was AI used? If yes, indicate what AI model/interface was used, for what purpose, how the model was prompted, etc.

Pranay Raj Kapoor: I used Claude Code and ChatGPT. I used ChatGPT to set up the landing pages while Claude Code was prompted to create the budget analytics pages and also create the context variables for dyanmically updating the website state when users added meals. I provided Claude Code with a picture of the Budget Analytics Figma prototypes and had it implement the Budget Analytics pages. I also prompted Claude Code to update the Semester and Weekly Balances based on user input in the Meal Distributions sections.

## Link to the team’s GitHub repo

[Link to Github Repo](https://github.com/briannamagtoto/yale-dining-planner)

## Collaboration record

For each team member, explain what they contributed to the code prototype

Pranay Raj Kapoor: I helped with the design and implementation of the landing page and the majority of the Budget Analytics tabs for semester and weekly balance. I also supported the team ensuring the state variables from logging meals in Meal Distribution reflected changes in the Budget Analytics section.
