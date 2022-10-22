import { expect, test, type Page } from '@playwright/test';

async function fuzzyToBe(page: Page, selector: string, expected: string) {
	function fuzzify(text: string) {
		return text.replace(/\s+/g, ' ').trim().toLowerCase();
	}
	const text = fuzzify(await page.textContent(selector));
	expected = fuzzify(expected);
	expect(text).toBe(expected);
}

async function allow_cookies(page: Page) {
	await page.click('button:has(p:has-text("Alle Akzeptieren"))');
}

async function set_developement_flag(page: Page) {
	await page.context().addCookies([
		{
			name: 'developement_flag',
			value: 'true',
			url: page.url()
		}
	]);
}

test('test', async ({ page }) => {
	await page.goto('/');
	await allow_cookies(page);
	await set_developement_flag(page);
	await fuzzyToBe(page, 'h2:near(h1)', 'Bei Vermittlung über TAGARO zusätzlich mit € 20 Bonus.');
	await page.click('button[title="*Vertragsinformationen aufklappen"]');
	await expect(page.locator('h3:has-text("Wählbare Pakete und Kombinationen:")')).toHaveCount(1);
	await page.click('button[title="*Vertragsinformationen"]');
	await expect(page.locator('h3:has-text("Wählbare Pakete und Kombinationen:")')).toHaveCount(0);
	await page.click('a:has(img[alt="sport"])');
	await expect(page.locator('h2:has-text("Sport Paket - Der beste Live-Sport.")')).toHaveCount(1);
	await page.click('a[title="Startseite öffnen"]');
	await page.click('button:has(p:has-text("Jetzt Bestellen"))'), { timeout: 40000 };
	await expect(page.locator('h1:has-text("Einfach ausfüllen")')).toHaveCount(1, { timeout: 15000 });
});
