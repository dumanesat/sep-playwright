import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page, startApplicationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then("the next button is disabled by deafult", async function () {
await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
});

When("user selects upfront payment plan", async function () {
    await paymentPlanPage.selectPaymentPlan('Upfront');
});

Then("the next button is enabled", async function () {
    await expect(paymentPlanPage.activeNextButton).toBeEnabled();
    await paymentPlanPage.page.waitForTimeout(2000);
});

Then("the step1 stepper circle is green", async function () {
    await expect (startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color","rgb(172, 245, 138)");
});

Then("the step2 stepper circle is blue", async function () {
   await expect(paymentPlanPage.step2).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)"
    );
});

When("user clicks the next button on playment plan page", async function () {
    await paymentPlanPage.clickNextButton();
});

Then("the step3 stepper circle is blue", async function () {
    await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)"
    );
});

Then("the step2 stepper circle is green", async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)"
    );
});

Then("the upfront payment summary is displayed", async function () {await expect(paymentPlanPage.basePriceAmountUnderUpfront).toBeVisible();
await expect(paymentPlanPage.upfrontDiscountTextUnderUpfront).toBeVisible();
await expect(paymentPlanPage.subtotalAmountUnderUpfront).toBeVisible();});

When("user selects installments payment plan", async function () {
    await paymentPlanPage.selectPaymentPlan("installments");});

Then("the installment payment summary is displayed", async function () {
    await expect(
      paymentPlanPage.basePriceAmountUnderInstallments,
    ).toBeVisible();
    await expect(
      paymentPlanPage.installmentsNumberUnderInstallments,
    ).toBeVisible();
    await expect(
      paymentPlanPage.pricePerInstallmentsAmountUnderInstallments,
    ).toBeVisible();
    await expect(
      paymentPlanPage.firstMonthPaymentAmountUnderInstallments,
    ).toBeVisible();

});

Then("the back button is displayed", async function () {
   await expect(paymentPlanPage.backButton).toBeVisible(); 
});

When("user clicks the back button on payment plan page", async function () {
    await paymentPlanPage.backButton.click();
});

When("the step1 stepper circle is blue", async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)",
    );
});
