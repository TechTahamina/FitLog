# FitLog 🏋️

A dark-themed workout companion for picking your lifts, building today's plan, and tracking what you finish.

**Live demo:** https://fitlogggg.netlify.app

## About

FitLog is a gym companion. Browse a library of lifts covering every major muscle group, add the ones you want to today's plan, save others for later, and mark each one done as you go. The plan page keeps a running total of exercises, minutes, and calories.

## Technologies Used

- *Next.js 16* (App Router, Turbopack)
- *React* with *TypeScript*
- *Tailwind CSS v4* and *daisyUI 5* for styling
- *React Context API* for plan and saved-workout state
- *react-toastify* for toast notifications
- *Lucide React* and **Font Awesome** for icons
- *Netlify* for deployment

## Key Features

1. *Workout Library:* browse twelve lifts as cards showing equipment, duration, calories, and rating, with a "Browse Workouts" button that scrolls straight to the library.
2. *Workout Details:* each lift has its own page (`/workouts/[id]`) with Add to Today's Plan and Save for Later buttons.
3. *My Plan Dashboard:* switch between Today's Plan and Saved tabs, with live totals for exercises, minutes, and calories.
4. *Mark as Done:* complete a lift with one click. The button disables itself and a toast confirms which workout you finished.
5. *Polished UX:* responsive navbar with a mobile hamburger menu, loading spinner while data loads, toast feedback on actions, and a custom 404 page.