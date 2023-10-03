const { I } = inject();

class userListPage {
  title: string;
  grid: string;
  gridRows: string;
  rowSelectorTemplat: string;
  rowDeleteMenuItem: string;
  rowActionsMenuItem: string;
  rowActionsDetailsMenuItem: string;

  constructor() {
    //insert your locators
    // this.button = '#button'
    this.title = "#title";
    this.grid = '//div[@data-testid="users-grid"]';
    this.gridRows = `//div[@data-testid="users-grid"]//div[contains(@class,"MuiDataGrid-row")]`;
    this.rowSelectorTemplat =
      '//div[@data-testid="users-grid"]//div[contains(@class,"MuiDataGrid-row")][{{rowIndex}}]';
    this.rowDeleteMenuItem = `${this.rowSelectorTemplat}//div[@data-field="Actions"]//button[1]`;
    this.rowActionsMenuItem = `${this.rowSelectorTemplat}//div[@data-field="Actions"]//button[2]`;
    this.rowActionsDetailsMenuItem = `//li[@role="menuitem"][contains(text(),"Details")]`;
  }
  // insert your methods here

  getRowSelector(index: number) {
    return this.rowSelectorTemplat.replace("{{index}}", index.toString());
  }
}

// For inheritance
module.exports = new userListPage();
export = userListPage;
