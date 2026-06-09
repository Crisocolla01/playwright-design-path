import { test, expect } from '@playwright/test'

test("product name is displayed on page", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    const productLink = await page.getByRole("link", { name: "Combination Pliers" })
    await expect(productLink).toBeVisible()
})


test("mocked product name is displayed on page", async ({ page }) => {
    const data = {
        "current_page": 1,
        "data": [
            {
                "id": "01KTH9JQD0P2JPB832D02PY8RW",
                "name": "Combination Pliers",
                "description": "Versatile combination pliers",
                "price": 14.15,
                "is_location_offer": false,
                "is_rental": false,
                "co2_rating": "D",
                "in_stock": true,
                "is_eco_friendly": false,
                "product_image": {
                    "id": "01KTH9JQCAVBG08Y60VKHHGXD5",
                    "by_name": "Helinton Fantin",
                    "by_url": "https://unsplash.com/@fantin",
                    "source_name": "Unsplash",
                    "source_url": "https://unsplash.com/photos/W8BNwvOvW4M",
                    "file_name": "pliers01.avif",
                    "title": "Combination pliers"
                }
            }
        ],
        "from": 1,
        "last_page": 5,
        "per_page": 9,
        "to": 9,
        "total": 45
    };

    await page.route('**/products?between=price,1,100&page=1', route => route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(data)
    }));



    await page.goto("https://practicesoftwaretesting.com/");
    const productLink = await page.getByRole("link", { name: "Combination Pliers" })
    await expect(productLink).toBeVisible()
})
