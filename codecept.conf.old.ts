require("ts-node/register");

import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: any = {
  tests: "./src/tests/*_test.ts",
  output: "./output",
  helpers: {
    Playwright: {
      url: "http://localhost",
      show: false,
      browser: "chromium",
      waitForNavigation: "load",
      waitForTimeout: 30_000,
    },
  },
  include: {
    I: "./steps_file.ts",
  },
  name: "my-app",
  require: ["ts-node/register"],
};
