import {Locator, Page} from '@playwright/test';
import { group } from 'console';

export class NavigationPage {

    readonly page: Page;
    readonly formLayoutsMenuItem : Locator;
    readonly datepickerMenuItem : Locator;
    readonly toasterMenuItem : Locator;
    readonly smartTableMenuItem : Locator;
    readonly tooltipMenuItem : Locator;
    readonly chartsMenuItem : Locator;
    readonly echarts : Locator;

    constructor(page: Page){
       this.page = page;
       this.formLayoutsMenuItem = page.getByText('Form Layouts');
       this.datepickerMenuItem = page.getByText('Datepicker');
       this.toasterMenuItem = page.getByText('Toastr');
       this.smartTableMenuItem = page.getByText('Smart Table');
       this.tooltipMenuItem = page.getByText('Tooltip');   
       this.chartsMenuItem = page.getByRole('link', { name: 'Charts', exact: true });
       this.echarts = page.getByText('Echarts'); 
    }

    async formLayoutsPage(){
        // await this.page.getByText('Forms').click();
        await this.selectGroupMenu('Forms');
        await this.formLayoutsMenuItem.click();
    }

    async datepickerPage(){
        // await this.page.getByText('Forms').click();
        await this.selectGroupMenu('Forms');
        await this.page.waitForTimeout(1000);
        await this.datepickerMenuItem.click();
    }

    async toasterPage(){
        await this.page.getByText('Modal & Overlays').click();
        await this.toasterMenuItem.click();
    }

    async smartTablePage(){
        await this.page.getByText('Tables & Data').click();
        await this.smartTableMenuItem.click();
    }    

    async tooltipPage(){
        await this.page.getByText('Modal & Overlays').click();
        await this.tooltipMenuItem.click();
    }

    async chartsPage(){
        await this.chartsMenuItem.click();
        await this.echarts.click();
    }

    private async selectGroupMenu(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle);
        const expandedState = await groupMenuItem.getAttribute('aria-expanded');
        if(expandedState === 'false'){
            await groupMenuItem.click();
        }
    }

}

// export default NavigationPage;