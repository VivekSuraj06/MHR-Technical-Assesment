# Age Calculator

## Overview
Age Calculator is a simple TypeScript program that calculates a user's age based on their date of birth and provides a suitable message. The program takes user input in `YYYY/MM/DD` format, validates it, and returns an age-related message.

## Features
- Validates date input format.
- Calculates age based on the current date.
- Provides a message with special handling for centenarians.
- Wishes the user a Happy Birthday if the input matches today's date.
- Handles future dates with a humorous message.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)

## Installation
1. Clone this repository or download the source code.
2. Navigate to the project directory
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
Run the program using the following command:
```sh
npm start
```

The program will prompt you to enter your date of birth in `YYYY/MM/DD` format. Once entered, it will display your age along with a relevant message.

## File Structure
- `AgeCalculator.ts` - Contains the `AgeCalculator` class that performs date validation and age calculations.
- `main.ts` - The main entry point, handling user input and displaying results.

## Example Output
```
Please enter your date of birth in YYYY/MM/DD format: 1994/12/16

==========================================================

You are 30 years old.

==========================================================
```

If it's the user's birthday:
```
You are 34 years old.
Happy Birthday!
```

If the input date is in the future:
```
You are not born yet, but you already know how to program!
```

## Author
Vivek Suraj

