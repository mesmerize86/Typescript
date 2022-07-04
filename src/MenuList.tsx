import { MenuOption } from "./Types";

type MenuOptionProps = {
  menuOptions: MenuOption[];
};

const MenuList = ({ menuOptions }: MenuOptionProps) => (
  <>
    {menuOptions.length > 0 &&
      menuOptions.map((menuOption: MenuOption) => (
        <div key={menuOption.uid}>
          <span>{menuOption.name}</span> &nbsp;
          <span>{menuOption.age}</span>
        </div>
      ))}
  </>
);

export default MenuList;
