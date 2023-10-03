Feature("user");

Scenario("List visible", ({ I, userListPage }) => {
  I.amOnPage("/user");
  I.wait(5);
  I.see("People", userListPage.title);
  I.seeElement(userListPage.gridRows);
  I.seeElement(userListPage.getRowDeleteSelector(2));
  I.seeElement(userListPage.getRowActionsSelector(2));
  I.click(userListPage.getRowActionsSelector(2));
  I.wait(5);
  I.seeElement(userListPage.getRowActionsDetailsSelector(2));
  I.click(userListPage.getRowActionsDetailsSelector(2));
  I.wait(5);
  I.seeInCurrentUrl("/user/");
  I.wait(5);
  I.saveScreenshot("screenshots/navigated_user_detal.png");
});
