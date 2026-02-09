import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup.js";
import { productInfo } from "../utilities/qa-data-reader.js";

Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});
Given("user already completed the start application page", async function () {
  await startApplicationPage.enterFirstName(faker.person.firstName());
  await startApplicationPage.enterLastName(faker.person.lastName());
  await startApplicationPage.enterEmail(faker.internet.email());
  await startApplicationPage.enterPhoneNumber(faker.string.numeric(10));
  await startApplicationPage.clickNextButton();
  await startApplicationPage.page.waitForTimeout(3000);
});
