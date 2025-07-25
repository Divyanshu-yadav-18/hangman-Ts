# Hangman Game (React + TypeScript)

A simple and interactive implementation of the classic Hangman game using React, TypeScript, and Vite.

## Features

- **Play Hangman:** Try to guess the hidden word by selecting letters. Incorrect guesses reveal parts of the hangman drawing.
- **Random Words:** Each game uses a randomly selected word from a JSON word list.
- **Keyboard Support:** You can guess letters using your physical keyboard or the on-screen keyboard.
- **Win/Lose Detection:** The game automatically detects when you win or lose.
- **Responsive UI:** Styled for a clean and modern look, with dynamic coloring for correct/incorrect guesses.

## Tech Stack

- **React** (with Hooks)
- **TypeScript**
- **Vite** (for fast development and bundling)
- **CSS Modules** (for component styling)
- **ESLint** (with TypeScript, React, and recommended configs)

## Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Divyanshu-yadav-18/hangman-Ts.git
   cd hangman-Ts
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to play!

### Controls

- Use your keyboard or click on letters to guess.
- Press **Enter** to start a new game after winning or losing.

## Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── App.tsx             # Main game logic and state
│   ├── hangmandrawing.tsx  # Hangman drawing component
│   ├── hangmanLetter.tsx   # Word display and reveal logic
│   ├── keyboard.tsx        # On-screen keyboard
│   ├── wordlist.json       # Word list for random selection
│   ├── index.css           # Global styles
│   ├── keyboard.module.css # Keyboard styles
│   └── main.tsx            # React entry point
├── vite.config.ts          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── package.json
```

## How It Works

- The game randomly picks a word from `wordlist.json`.
- Your guesses are tracked; incorrect guesses reveal parts of the hangman.
- You win by guessing all letters before 6 incorrect guesses.
- The UI updates to show win/lose status and disables input appropriately.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Author

- [Divyanshu Yadav](https://github.com/Divyanshu-yadav-18)
