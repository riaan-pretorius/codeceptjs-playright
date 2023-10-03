/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type userListPage = typeof import('./pages/UserList');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, userListPage: userListPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
