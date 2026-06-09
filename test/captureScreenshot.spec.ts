import { test, expect } from '@playwright/test';
import prettier from 'prettier';

// test("capture screenshot", async ({ page }) => {
//     await page.goto("https://practicesoftwaretesting.com/");
//     await expect(page).toHaveScreenshot("homepage.png", { fullPage: true });
// })

async function sanitizeHTML(html: string): Promise<string> {
    const cleaned = html.replace(/_ngcontent-[^=]+="[^"]*"/g, '');
    const formatted = prettier.format(cleaned, { parser: "html", singleAttributePerLine: false });
    return formatted;
}


test("snapshot of top menu", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");

    const html = await page.locator("#navbarSupportedContent").innerHTML();
    const sanitizedHtml = await sanitizeHTML(html);

    expect(sanitizedHtml).toMatchSnapshot("top-menu.html");
})
