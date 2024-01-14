import React, { useState } from "react";
import { MenuItem } from "../models/MenuItem";
import { IoMdArrowDropright } from "react-icons/io";
import StyledMenu, { StyledMenuItem } from "./Menu.styles";

interface MenuProps {
  items: MenuItem[];
  depth?: number;
  show: boolean;
}

const MenuWithStyle: React.FC<MenuProps> = ({ items, depth = 0, show = true }) => {
  const [isSubMenuItemsShow, setIsSubMenuItemsShow] = useState(true);

  function menuItemClickHandler(event: React.MouseEvent<HTMLElement>, title: string): void {
    event.stopPropagation();
    setIsSubMenuItemsShow((current) => !current);
    console.log("clicked", title);
  }

  return (
    <StyledMenu depth={depth} show={show}>
      {items.map((item) => {
        return item.subItems ? (
          <StyledMenuItem key={item.id} onClick={(event) => menuItemClickHandler(event, item.title)}>
            {item.title}
            {item.subItems && <IoMdArrowDropright />}
            {item.subItems && <MenuWithStyle items={item.subItems} depth={depth + 1} show={isSubMenuItemsShow} />}
          </StyledMenuItem>
        ) : (
          <StyledMenuItem key={item.id} onClick={(event) => event.stopPropagation()}>
            {item.title}
          </StyledMenuItem>
        );
      })}
    </StyledMenu>
  );
};

export default MenuWithStyle;
