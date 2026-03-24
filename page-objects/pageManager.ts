import {Page, expect} from "@playwright/test";
import {NavigationPage} from './navigationPage';
import {FormLayoutsPage} from './formLayoutsPage';    
import {DatePickPage} from './datePickPage';

export class PageManager{
    private readonly page: Page;
    private readonly navigationPage: NavigationPage;
    private readonly formLayoutsPage: FormLayoutsPage;
    private readonly datePickPage: DatePickPage;

    constructor(page: Page){
        this.page = page;
        this.navigationPage = new NavigationPage(this.page);
        this.formLayoutsPage = new FormLayoutsPage(this.page);
        this.datePickPage = new DatePickPage(this.page);
    }

    navigateTo(){
        return this.navigationPage;
    }

    onFormlayoutsPage(){
        return this.formLayoutsPage;
    }

    onDatePickPage(){
        return this.datePickPage;
    }


}