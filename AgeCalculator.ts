const DOB_FORMAT_REGEX = /^\d{4}\/\d{1,2}\/\d{1,2}$/;

/**
 * Utility class to generate a message based on the calculated age.
 */
export class AgeCalculator {
    private currentDate: Date;

    constructor() {
        const _date = new Date();
        this.currentDate = new Date(`${_date.getFullYear()}/${_date.getMonth() + 1}/${_date.getDate()}`);
    }

    /**
     * Returns a suitable message based on the calculated age.
     *
     * @param dateString Date of birth in YYYY/MM/DD format.
     * @returns A message based on the calculated age.
     *
     * @throws Error if the provided date format is incorrect or invalid.
     */
    getAgeMessage(dateString: string): string {
        if (!DOB_FORMAT_REGEX.test(dateString)) {
            throw new Error("Invalid date format. Please use YYYY/MM/DD.");
        }

        // Parse input date
        const [year, month, date] = dateString.split("/").map(Number);
        const dateOfBirth = this.parseDate(year, month, date);
        if (!dateOfBirth) {
            throw new Error("Invalid date or non-existent date. Please use YYYY/MM/DD.");
        }

        // Comparison
        if (dateOfBirth > this.currentDate) {
            return "You are not born yet, but you already know how to program!";
        } else if (this.currentDate > dateOfBirth) {
            const age = this.calculateAge(dateOfBirth);
            let message = `You are ${age} years old.`;
            if (age >= 100) {
                message += " Wow! You are a centenarian!";
            }
            if (this.isBirthdayToday(dateOfBirth)) {
                message += "\nHappy Birthday!";
            }
            return message;
        } else {
            return "Are you sure you were born today?";
        }
    }

    /**
     * Forms a date object from the given year, month, and day numbers.
     *
     * @param year Year number.
     * @param month Month number.
     * @param date Day number.
     * @returns A parsed Date object or null if invalid.
     */
    private parseDate(year: number, month: number, date: number): Date | null {
        const dob = new Date(`${year}/${month}/${date}`);
        return dob.getFullYear() === year && dob.getMonth() === month - 1 && dob.getDate() === date ? dob : null;
    }

    /**
     * Calculates the age based on the date of birth.
     *
     * @param dob Date of birth as a Date object.
     * @returns The calculated age.
     */
    private calculateAge(dob: Date): number {
        let age = this.currentDate.getFullYear() - dob.getFullYear();
        const monthDiff = this.currentDate.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && this.currentDate.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }

    /**
     * Checks if the given date of birth is today.
     *
     * @param dob Date of birth as a Date object.
     * @returns True if today is the user's birthday, otherwise false.
     */
    private isBirthdayToday(dob: Date): boolean {
        return dob.getMonth() === this.currentDate.getMonth() && dob.getDate() === this.currentDate.getDate();
    }
}
