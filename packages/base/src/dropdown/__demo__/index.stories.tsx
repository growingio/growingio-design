import type { Meta, StoryObj } from '@storybook/react';
import React, { ReactElement, ReactNode, useState, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import Dropdown from '..';
import { Button, Divider, Menu, Space, Tooltip } from '../..';
import { IconDown } from '@arco-iconbox/react-growingio';
import { DropdownPositionType } from '../../_core/types';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Base/Dropdown',
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const menuItems = [
  <Menu.Item key="beijing">Beijing</Menu.Item>,
  <Menu.Item key="shanghai">Shanghai</Menu.Item>,
  <Menu.Item key="guangzhou">Guangzhou</Menu.Item>,
];

const droplist = <Menu>{...menuItems}</Menu>;

const hoverableChild = (
  <Button type="text">
    <FormattedMessage id="hover" /> <IconDown />
  </Button>
);

const clickableChild = (
  <Button type="text">
    <FormattedMessage id="click" /> <IconDown />
  </Button>
);

export const Basic: Story = {
  args: {
    position: 'bl',
    droplist,
    children: hoverableChild,
  },
  render: (args) => (
    <Space size="large">
      <Dropdown {...args} />
      <Dropdown {...args} disabled />
    </Space>
  ),
};

const postions: { name: ReactNode; position: DropdownPositionType }[] = [
  {
    name: <FormattedMessage id="dropdown-position-tl" />,
    position: 'tl',
  },
  {
    name: <FormattedMessage id="dropdown-position-top" />,
    position: 'top',
  },
  {
    name: <FormattedMessage id="dropdown-position-tr" />,
    position: 'tr',
  },
  {
    name: <FormattedMessage id="dropdown-position-bl" />,
    position: 'bl',
  },
  {
    name: <FormattedMessage id="dropdown-position-bottom" />,
    position: 'bottom',
  },
  {
    name: <FormattedMessage id="dropdown-position-br" />,
    position: 'br',
  },
];
export const Position: Story = {
  args: {
    droplist,
  },
  render: (args) => (
    <Space wrap style={{ padding: '150px 0' }}>
      {postions.map(({ name, position }) => (
        <Dropdown {...args} key={position} position={position}>
          <Button>{name}</Button>
        </Dropdown>
      ))}
    </Space>
  ),
};

export const Extra: Story = {
  args: {
    droplist: (
      <Menu>
        {...menuItems}
        <Divider style={{ margin: '4px 0' }} />
        <Menu.Item key="shenzhen" disabled>
          Shenzhen
        </Menu.Item>
      </Menu>
    ),
    children: hoverableChild,
  },
  render: (args) => <Dropdown {...args} />,
};

export const Trigger: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => (
    <Space size="large">
      <Dropdown {...args} trigger="hover">
        {hoverableChild}
      </Dropdown>
      <Dropdown {...args} trigger="click">
        {clickableChild}
      </Dropdown>
    </Space>
  ),
};

type DropdownButtonStory = StoryObj<typeof Dropdown.Button>;
export const DropdownButton: DropdownButtonStory = {
  args: {
    droplist,
  },
  render: (args) => (
    <Space size="large">
      <Dropdown.Button type="secondary" {...args}>
        <FormattedMessage id="button-publish" />
      </Dropdown.Button>
      <Dropdown.Button type="secondary" {...args} disabled>
        <FormattedMessage id="button-docs-disabled-title" />
      </Dropdown.Button>
      <Dropdown.Button type="primary" {...args} icon={<IconDown />}>
        <FormattedMessage id="dropdown-button-with-icon" />
      </Dropdown.Button>
      <Dropdown.Button
        type="primary"
        {...args}
        buttonsRender={([leftButton, rightButton]) => [
          <Tooltip content="Tooltip">{leftButton}</Tooltip>,
          React.cloneElement(rightButton as ReactElement, {
            loading: true,
          }),
        ]}
      >
        <FormattedMessage id="dropdown-button-with-tooltip" />
      </Dropdown.Button>
    </Space>
  ),
};

const subMenuData = [
  ['Beijing', ['Haidian', 'Chaoyang', 'Daxing']],
  ['Shanghai', ['Pudong', 'Huangpu', 'Xuhui']],
  ['Guangzhou', ['Baiyun', 'Tianhe', 'Fanyu']],
  ['Shenzhen', ['Futian', 'Luohu', 'Nanshan']],
];
export const SubMenu: Story = {
  ...Extra,
  args: {
    droplist: (
      <Menu>
        {subMenuData.map((city) => (
          <Menu.SubMenu key={city[0] as string} title={city[0]}>
            {(city[1] as string[]).map((area) => (
              <Menu.Item key={`${city[0]}-${area}`}>{area}</Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    ),
    children: hoverableChild,
  },
};

export const GroupMenu: Story = {
  ...SubMenu,
  args: {
    ...SubMenu.args,
    droplist: (
      <Menu>
        {subMenuData.map((city) => (
          <Menu.ItemGroup key={city[0] as string} title={city[0]}>
            {(city[1] as string[]).map((area) => (
              <Menu.Item key={`${city[0]}-${area}`}>{area}</Menu.Item>
            ))}
          </Menu.ItemGroup>
        ))}
      </Menu>
    ),
  },
};

export const RightClickMenu: Story = {
  args: {
    trigger: 'contextMenu',
    droplist,
  },
  render: (args) => (
    <Dropdown {...args}>
      <div
        style={{
          display: 'flex',
          width: 320,
          height: 160,
          backgroundColor: 'var(--color-fill-2)',
          color: 'var(--color-text-1)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>
          <FormattedMessage id="right-click" />
        </span>
      </div>
    </Dropdown>
  ),
};

export const ControlledVisible: Story = {
  args: {
    children: clickableChild,
    trigger: 'click',
  },
  render: (args) => {
    const [visible, setVisible] = useState(false);
    const refMenuItemClicked = useRef(null);

    return (
      <Dropdown
        {...args}
        droplist={
          <Menu
            onClickMenuItem={(key) => {
              refMenuItemClicked.current = key;
            }}
          >
            <Menu.Item key="not-closed">
              <FormattedMessage id="dropdown-controlled-visible-not-closed" />
            </Menu.Item>
            <Menu.Item key="closed">
              <FormattedMessage id="dropdown-controlled-visible-closed" />
            </Menu.Item>
          </Menu>
        }
        popupVisible={visible}
        onVisibleChange={(v) => {
          if (
            refMenuItemClicked.current === null ||
            refMenuItemClicked.current === 'closed'
          ) {
            setVisible(v);
          }

          refMenuItemClicked.current = null;
        }}
      />
    );
  },
};
