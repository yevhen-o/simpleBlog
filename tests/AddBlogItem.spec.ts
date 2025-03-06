// import { test, expect } from "@playwright/test";
// import { getUrl, IDENTIFIERS } from "@src/utils";

// test.describe("test add posts page", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(getUrl(IDENTIFIERS.BLOG_ADD));
//   });

//   // test("can add post", async ({ page }) => {
//   //   await expect(
//   //     page.getByRole("heading", { name: "Add new post" })
//   //   ).toBeVisible();
//   //   await expect(page).toHaveScreenshot("EmptyFormView.png", {
//   //     fullPage: true,
//   //   });

//   //   await page.getByRole("button", { name: "submit" }).click();
//   //   await expect(page).toHaveScreenshot("ValidationErrorsFormView.png", {
//   //     fullPage: true,
//   //   });
//   //   await page.locator("[name='title']").fill("New blog post");
//   //   await page
//   //     .locator("[name='content']")
//   //     .fill(
//   //       "Some awesome content maybe few lines. Some awesome content maybe few lines. Some awesome content maybe few lines. Some awesome content maybe few lines. "
//   //     );
//   //   await page.locator("[name='author']").fill("Author");
//   //   await page.locator("[name='tags']").fill("some awesome tags");
//   //   await expect(page).toHaveScreenshot("FilledFormView.png", {
//   //     fullPage: true,
//   //   });
//   //   await page.route("**/blogs", async (route) => {
//   //     const request = route.request();
//   //     const requestBody = await request.postDataJSON();
//   //     route.fulfill({
//   //       status: 201,
//   //       contentType: "application/json",
//   //       json: { ...requestBody, id: "123" },
//   //     });
//   //   });
//   //   await page.getByRole("button", { name: "submit" }).click();
//   //   await expect(async () => {
//   //     await expect(page).toHaveURL(/\/blog$/);
//   //   }).toPass();
//   // });
//   //TODO: add check add post back
// });
