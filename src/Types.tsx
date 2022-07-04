export type MenuOption = {
  uid: number;
  name: string;
  age: number;
};

export type Tab<T> = {
  id: number;
  label: string;
  menuOptions: T;
};
