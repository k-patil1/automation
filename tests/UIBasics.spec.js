const {test} = require('@playwright/test');
const { only } = require('node:test');

test.only('first playwrite test', async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   await page.locator('#username').fill('rahulshettyacademy');
   await page.locator('input#password').fill('learning');
    await page.locator('input#signInBtn').click();
    await page.locator('output#signInBtn').click();

})
