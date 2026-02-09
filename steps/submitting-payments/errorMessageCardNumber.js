import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { faker } from "@faker-js/faker";

When("user enters wrong card number", async function () {
  await reviewPaymentPage.enterCardNumber(faker.string.numeric(16));
});

When("user clicks terms and conditions checkbox", async function () {
  await reviewPaymentPage.clickTermsAndConditionsCheckbox();
});

Then("the card error message {string} is displayed", async function (string) {
  await expect(reviewPaymentPage.cardNumberErrorMessage).toHaveText(string);
});

When("user enters incomplete card number", async function () {
  await reviewPaymentPage.enterCardNumber(faker.string.numeric(10));
});
