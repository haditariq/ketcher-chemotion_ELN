/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import React from 'react';
import { MenuItem } from './menuItem';
import { SubMenu } from './subMenu';
import { IMenuContext, MenuContext } from '../../contexts';
import { Divider, MenuLayout, StyledGroup, VerticalDivider } from './styles';
import { GroupProps, MenuProps } from './types';

const Group = ({
  children,
  divider = false,
  isHorizontal,
}: React.PropsWithChildren<GroupProps>) => {
  const subComponents = React.Children.map(
    children as JSX.Element[],
    (child) => {
      return child;
    },
  );

  return (
    <>
      <StyledGroup isHorizontal={isHorizontal}>
        {subComponents.map((component) => component)}
      </StyledGroup>
      {divider && (isHorizontal ? <VerticalDivider /> : <Divider />)}
    </>
  );
};

const Menu = ({
  children,
  onItemClick,
  activeMenuItems,
  testId,
  isHorizontal,
}: React.PropsWithChildren<MenuProps>) => {
  const context = React.useMemo<IMenuContext>(
    () => ({
      isActive: (itemKey) =>
        activeMenuItems ? activeMenuItems.includes(itemKey) : false,
      activate: (itemKey) => {
        onItemClick(itemKey);
      },
    }),
    [activeMenuItems, onItemClick],
  );

  const subComponents = React.Children.map(
    children as JSX.Element[],
    (child) => {
      return child.type === Group ? child : null;
    },
  );

  return (
    <MenuContext.Provider value={context}>
      <MenuLayout data-testid={testId} isHorizontal={isHorizontal}>
        {subComponents.map((component) => component)}
      </MenuLayout>
    </MenuContext.Provider>
  );
};

Menu.Group = Group;
Menu.Item = MenuItem;
Menu.Submenu = SubMenu;

export { Menu, MenuContext };
