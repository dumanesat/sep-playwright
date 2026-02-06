import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("User is on enrollment page", async function () {
   await startApplicationPage.login();
});

Then("Program Start Date is displayed", async function () {
    await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then("Refund Date is displayed", async function () {
   await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then("Program start date is correct", async function () {
  const ACTUAL_START_DATE= await startApplicationPage.programStartDate.innerText();
  const EXPECTED_START_DATE=productInfo.startDate;
  expect(ACTUAL_START_DATE).toEqual(EXPECTED_START_DATE);
});

Then("Refund date is correct", async function () {
    const ACTUAL_REFUND_DATE=await startApplicationPage.refundEndDate.innerText();
    const EXPECTED_REFUND_DATE= productInfo.refundDate;
    expect(ACTUAL_REFUND_DATE).toEqual(EXPECTED_REFUND_DATE);
});
