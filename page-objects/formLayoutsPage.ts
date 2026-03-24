import { Locator, Page } from '@playwright/test';
import { HelperBase } from './helperBase';


export class FormLayoutsPage extends HelperBase {

    // readonly page: Page;
    readonly usingTheGridForm: Locator;
    readonly usingInlineForm: Locator;


    constructor(page: Page) {
        super(page);
        // this.page = page;
        this.usingTheGridForm = page.locator('nb-card', { hasText: 'Using the Grid' });
        this.usingInlineForm = page.locator('nb-card', { hasText: 'Inline Form' });

    }

    async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string,password: string,option: string) {

        const emailInput = this.usingTheGridForm.getByRole('textbox', { name: 'Email' });
        const passwordInput = this.usingTheGridForm.getByRole('textbox', { name: 'Password' });
        const optionRadio = this.usingTheGridForm.getByRole('radio', { name: "Option 1" });
        const submitButton = this.usingTheGridForm.getByRole('button');

        await emailInput.fill(email);
        await passwordInput.fill(password);
        await optionRadio.check({ force: true });
        await submitButton.click();
    }


    /**
     * This method fills out the inline form with the provided name, email, and rememberMe checkbox value, and then submits the form.
     * @param name - should be first and last name
     * @param email  - valid email address of the user
     * @param rememberMe  - true if the "Remember Me" checkbox should be checked, false otherwise
     */

    async submitInlineFormWithNameEmailAndCheckbox (name: string, email: string, rememberMe: boolean) {
        await this.usingInlineForm.getByRole('textbox', { name: 'Jane Doe' }).fill(name);
        await this.usingInlineForm.getByRole('textbox', { name: 'Email' }).fill(email);
        if(rememberMe){
            await this.usingInlineForm.getByRole('checkbox').check({ force: true });
        }
        await this.usingInlineForm.getByRole('button').click();
    }
}