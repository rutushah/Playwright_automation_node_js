import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class DatePickPage extends HelperBase {
    // readonly page: Page;

    constructor(page: Page) {
        super(page);
        // this.page = page;
    }

    async selectCommonDatePickerDateFromToday(numberOfDaysFromToday: number) {
        const calendarInputField = this.page.getByPlaceholder('Form Picker');
        await calendarInputField.click();

        const dateToAssert = await this.selectDateInCalendar(numberOfDaysFromToday);
        await expect(calendarInputField).toHaveValue(dateToAssert);
    }

    async selectDatePickerWithRangeFromToday(startDateToday:number,endDateFromToday:number){
        const calendarInputField = this.page.getByPlaceholder('Range Picker');
        await calendarInputField.click();

        const dateToAssertStart = await this.selectDateInCalendar(startDateToday);
        const dateToAssertEnd = await this.selectDateInCalendar(endDateFromToday);

        const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`;
        await expect(calendarInputField).toHaveValue(dateToAssert);
    }


    private async selectDateInCalendar(numberOfDaysFromToday: number){
        const date = new Date();
        date.setDate(date.getDate() + numberOfDaysFromToday);

        const expectedDate = date.getDate().toString();
        const expectedMonthShort = date.toLocaleString('en-US', { month: 'short' });
        const expectedMonthLong = date.toLocaleString('en-US', { month: 'long' });
        const expectedYear = date.getFullYear();
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;

        let calendarMonthAndYear =
            (await this.page.locator('nb-calendar-view-mode').textContent()) ?? '';

        while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
            await this.page
                .locator('nb-calendar-pageable-navigation [data-name="chevron-right"]')
                .click();

            calendarMonthAndYear =
                (await this.page.locator('nb-calendar-view-mode').textContent()) ?? '';
        }

        await this.page.locator('.day-cell').getByText(expectedDate, { exact: true }).click();  
        return dateToAssert;
    }
}