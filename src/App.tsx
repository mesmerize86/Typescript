import "./styles.css";
import MenuList from "./MenuList";
import { MenuOption, Tab } from "./Types";

export default function App() {
  const editOption: MenuOption = {
    uid: 1,
    name: "Edit",
    age: 10
  };

  const deleteOption: MenuOption = {
    uid: 2,
    name: "Delete",
    age: 50
  };

  const groupOne = [
    {
      uid: 1,
      name: "Group 1",
      age: 11
    },
    {
      uid: 2,
      name: "Gropu 1",
      age: 12
    }
  ];

  const groupTwo = [
    {
      uid: 1,
      name: "Group 2",
      age: 11
    },
    {
      uid: 1,
      name: "Gropu 2",
      age: 12
    }
  ];

  const lists = [editOption, deleteOption];
  const groupOptions = [groupOne, groupTwo];

  const TabOne: Tab<MenuOption[]> = {
    id: 2,
    label: "Single Object Tab",
    menuOptions: lists
  };

  const TabTwo: Tab<Array<MenuOption[]>> = {
    id: 1,
    label: "Group Option Tab",
    menuOptions: groupOptions
  };

  return (
    <div className="App">
      <p>Tab ID: {TabTwo.id}</p>
      <p>Tab Label: {TabTwo.label}</p>
      {TabTwo.menuOptions.map((menuOption) => {
        return <MenuList menuOptions={menuOption} />;
      })}

      <p>Tab ID: {TabOne.id}</p>
      <p>Tab Label: {TabOne.label}</p>
      <MenuList menuOptions={lists} />
    </div>
  );
}
