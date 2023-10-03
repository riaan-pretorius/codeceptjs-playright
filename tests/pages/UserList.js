const { I } = inject();

module.exports = {
  // insert your locators and methods here
  title: '//h4[@data-testid="title"]',
  grid: '//div[@data-testid="users-grid"]',
  gridRows: `//div[@data-testid="users-grid"]//div[contains(@class,"MuiDataGrid-row")]`,
  rowSelectorTemplate:
    '//div[@data-testid="users-grid"]//div[contains(@class,"MuiDataGrid-row")][{{rowIndex}}]',
  rowDeleteMenuItemTemplate: `//div[@data-testid="users-grid"]//div[contains(@class,"MuiDataGrid-row")][{{rowIndex}}]//div[@data-field="Actions"]//button[1]`,
  rowActionsMenuItemTemplate: `//div[@data-testid="users-grid"]//div[contains(@class,"MuiDataGrid-row")][{{rowIndex}}]//div[@data-field="Actions"]//button[2]`,
  rowActionsDetailsMenuItemTemplate: `//li[@role="menuitem"][contains(text(),"Details")]`,

  getRowSelector(index) {
    return this.rowSelectorTemplate.replace("{{rowIndex}}", index.toString());
  },

  getRowDeleteSelector(index) {
    return this.rowDeleteMenuItemTemplate.replace(
      "{{rowIndex}}",
      index.toString()
    );
  },

  getRowActionsSelector(index) {
    return this.rowActionsMenuItemTemplate.replace(
      "{{rowIndex}}",
      index.toString()
    );
  },

  getRowActionsDetailsSelector(index) {
    return this.rowActionsDetailsMenuItemTemplate.replace(
      "{{rowIndex}}",
      index.toString()
    );
  },
};
