import { test, expect } from "@playwright/test";
import { getUrl, IDENTIFIERS } from "@src/utils";

test.describe("test posts page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(getUrl(IDENTIFIERS.BLOG));
  });

  test("has heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "List of articles" })
    ).toBeVisible();
    await expect(page).toHaveScreenshot("BlogListView.png", {
      fullPage: true,
      mask: [page.locator(".blog-item__wrapper")],
    });
  });
});
