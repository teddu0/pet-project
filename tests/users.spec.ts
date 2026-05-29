import { test, expect } from "@playwright/test";
import * as allure from "allure-js-commons";

test.describe("Users tests", () => {
  const baseUrl: string = "https://petstore.swagger.io/v2";

  test("Create user", async ({ request }) => {
    await allure.owner("Konstantin Volkov");

    const body = await allure.step(
      "Prepare body for creating user",
      async () => {
        return {
          id: 3,
          username: "test-user",
          firstName: "Konstantin",
          lastName: "Volkov",
          email: "konstantin.test@test.com",
          password: "strong",
          phone: "+79999999999",
          userStatus: 1,
        };
      },
    );

    await allure.step("Create user", async () => {
      const responseData = await request.post(`${baseUrl}/user`, {
        data: body,
      });
      expect(responseData.status()).toBe(200);
    });
  });

  test("Get user by username", async ({ request }) => {
    await allure.owner("Konstantin Volkov");
    await allure.step("Get user by username", async () => {
      const responseData = await request.get(`${baseUrl}/user/test-user`);
      expect(responseData.status()).toBe(200);
    });
  });
});
