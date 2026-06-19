# Stopwatch Web App

A fast, minimalist stopwatch built with vanilla HTML, CSS, and JavaScript for accurate timing down to the millisecond.

## Live Interface Preview

![Demo Screenshot 1](images/Stopwatch_Website_Demo_Image1.png)

![Demo Screenshot 2](images/Stopwatch_Website_Demo_Image2.png)

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
Main Author: Dragoman23

GitHub: [@Dragoman23](https://github.com/Dragoman23)

I used the HackClub tutorial by [@faisalsayed10](https://github.com/faisalsayed10) to create intial website, upon which I experimented and expanded upon.

## AI Usage

Some AI was used to help with minimal amounts of debugging and helping me understand how to write proper CSS style file

Used Vercel Bot to help integrate Vercel Analytics

## License

This project is open source and available under the [MIT License](LICENSE).





