const { test, expect } = require('@playwright/test');

test('first playwrite test', async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await page.locator('#username').fill('rahulshettyacademy');
        await page.locator('input#password').fill('learning');
        await page.locator('#signInBtn').click();

       // await expect(page).toHaveURL(/shop/);


})



