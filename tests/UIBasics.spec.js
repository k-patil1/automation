const { test, expect } = require('@playwright/test');
const ENV = require('../config/env'); 

test('first playwrite test', async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();
    await page.goto(ENV.baseURL);
        await page.locator('#username').fill(ENV.username);
        await page.locator('input#password').fill(ENV.password);
        await page.locator('#signInBtn').click();
        

       // await expect(page).toHaveURL(/shop/);


})



