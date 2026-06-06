# Stopwatch Web App

A fast, minimalist stopwatch built with vanilla HTML, CSS, and JavaScript for accurate timing down to the millisecond.

## Screenshot of Stopwatch

<img width="1920" height="958" alt="Screenshot 2026-06-06 at 01-30-55 Stopwatch Website" src="https://github.com/user-attachments/assets/2a724903-3fae-4495-a749-bfd7a4e3487f" />

## Demo URL

Website Link: [Stopwatch Web App](https://stopwatch-website-sage.vercel.app/)

## Features

1. Start, Pause, and Reset stopwatch  
2. Millisecond-level timing accuracy  
3. Clean, centered UI with dark theme  
4. Responsive layout for both mobile and desktop  
5. Real-time updates using `setInterval()`  
6. Start button becomes a resume button after stop is pressed  

## Built With

- HTML5 - structure
- CSS3 - styling and layout
- JavaScript - stopwatch logic and timing functionality

## How It Works

The stopwatch uses JavaScript `setInterval()` function to repeatedly update the display at fixed intervals of approximately 10 milliseconds. 

It tracks elapsed time by incrementing milliseconds, seconds, minutes, and hours over time. 

Each tick (interval) updates the DOM, which keeps the display in sync with the interval counters.

The app simulates a stopwatch by incrementing values at fixed intervals.

## Run locally

Clone the repository:

```bash
git clone https://github.com/Dragoman23/Stopwatch_Website.git
```

Open the folder:

```bash
cd Stopwatch_Website
```

Then open `index.html` in your browser.

No installation required.

## Project structure

```text
Stopwatch_Website/
│
├── index.html   # Structure
├── style.css    # Styling
└── script.js    # Stopwatch logic
```

## Author

GitHub: [@Dragoman23](https://github.com/Dragoman23)

## License

This project is open source and available under the [MIT License](LICENSE).





