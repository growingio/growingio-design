import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Space } from "@arco-design/web-react";
import {
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconPlus,
  IconLeft,
  IconRight,
  IconStar,
  IconSettings,
  IconDown,
} from "@arco-design/web-react/icon";
import Button from "../../components/button";
import "../../components/button/style";

const meta: Meta<typeof Button> = {
  args: {
    className: undefined,
    style: undefined,
    children: "Button Text",
    htmlType: "button",
    type: "default",
    shape: "square",
    status: undefined,
    size: undefined,
    disabled: false,
    long: false,
  },
  argTypes: {
    status: {
      control: {
        type: "select",
      },
      description: "按钮状态",
      defaultValue: "default",
      options: ["primary", "default"],
      table: {
        type: {
          summary: "primary | default | success | warning | danger",
        },
      },
    },
  },
  component: Button,
  title: "通用/Button 按钮",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const BasicButtons: Story = {
  name: "基础按钮",
  render: (args) => (
    <Space size="large">
      <Button {...args} type="primary">
        主要按钮
      </Button>
      <Button {...args} type="secondary">
        默认按钮
      </Button>
      <Button {...args} type="dashed">
        虚线按钮
      </Button>
      <Button {...args} type="outline">
        线框按钮
      </Button>
      <Button {...args} type="text">
        文字按钮
      </Button>
    </Space>
  ),
};

export const IconButtons: Story = {
  name: "图标按钮",
  render: (args) => (
    <Space size="large">
      <Button {...args} type="primary" icon={<IconPlus />} />
      <Button {...args} type="primary" icon={<IconPlus />} />
      <Button {...args} type="primary">
        {args.children}
        <IconPlus />
      </Button>
    </Space>
  ),
};

export const ButtonShapes: Story = {
  name: "按钮形状",
  render: (args) => (
    <Space size="large">
      <Button type="primary" icon={<IconPlus />} />
      <Button shape="circle" type="primary" icon={<IconPlus />} />
      <Button {...args} type="primary" />
      <Button {...args} shape="round" type="primary" />
    </Space>
  ),
};

export const ButtonSizes: Story = {
  name: "按钮尺寸",
  render: (args) => (
    <Space size="large" align="start">
      <Button {...args} size="mini" type="primary">
        Mini
      </Button>
      <Button {...args} size="small" type="primary">
        Small
      </Button>
      <Button {...args} size="default" type="primary">
        Default
      </Button>
      <Button {...args} size="large" type="primary">
        Large
      </Button>
    </Space>
  ),
};

export const ButtonStatus: Story = {
  name: "按钮状态",
  render: (args) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 100px)",
        gridRowGap: 24,
        gridColumnGap: 24,
      }}
    >
      <Button {...args} type="primary" status="danger">
        Button Text
      </Button>
      <Button {...args} type="dashed" status="danger">
        Button Text
      </Button>
      <Button {...args} type="outline" status="danger">
        Button Text
      </Button>
      <Button {...args} type="text" status="danger">
        Button Text
      </Button>

      <Button {...args} type="primary" status="warning">
        Button Text
      </Button>
      <Button {...args} type="dashed" status="warning">
        Button Text
      </Button>
      <Button {...args} type="outline" status="warning">
        Button Text
      </Button>
      <Button {...args} type="text" status="warning">
        Button Text
      </Button>

      <Button {...args} type="primary" status="success">
        Button Text
      </Button>
      <Button {...args} type="dashed" status="success">
        Button Text
      </Button>
      <Button {...args} type="outline" status="success">
        Button Text
      </Button>
      <Button {...args} type="text" status="success">
        Button Text
      </Button>

      <Button {...args} type="primary" status="primary">
        Button Text
      </Button>
      <Button {...args} type="dashed" status="primary">
        Button Text
      </Button>
      <Button {...args} type="outline" status="primary">
        Button Text
      </Button>
      <Button {...args} type="text" status="primary">
        Button Text
      </Button>
    </div>
  ),
};

export const DisabledButtons: Story = {
  name: "禁用状态",
  render: (args) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 100px)",
        gridRowGap: 24,
        gridColumnGap: 24,
      }}
    >
      <Button {...args} disabled type="primary" status="danger">
        Button Text
      </Button>
      <Button {...args} disabled type="dashed" status="danger">
        Button Text
      </Button>
      <Button {...args} disabled type="outline" status="danger">
        Button Text
      </Button>
      <Button {...args} disabled type="text" status="danger">
        Button Text
      </Button>

      <Button {...args} disabled type="primary" status="warning">
        Button Text
      </Button>
      <Button {...args} disabled type="dashed" status="warning">
        Button Text
      </Button>
      <Button {...args} disabled type="outline" status="warning">
        Button Text
      </Button>
      <Button {...args} disabled type="text" status="warning">
        Button Text
      </Button>

      <Button {...args} disabled type="primary" status="success">
        Button Text
      </Button>
      <Button {...args} disabled type="dashed" status="success">
        Button Text
      </Button>
      <Button {...args} disabled type="outline" status="success">
        Button Text
      </Button>
      <Button {...args} disabled type="text" status="success">
        Button Text
      </Button>

      <Button {...args} disabled type="primary" status="primary">
        Button Text
      </Button>
      <Button {...args} disabled type="dashed" status="primary">
        Button Text
      </Button>
      <Button {...args} disabled type="outline" status="primary">
        Button Text
      </Button>
      <Button {...args} disabled type="text" status="primary">
        Button Text
      </Button>
    </div>
  ),
};

const ButtonGroupsTemplate = (props: { disabled?: boolean }) => {
  const { disabled = false } = props;
  return (
    <Space size="large">
      <Button.Group>
        <Button disabled={disabled} type="primary">
          Button Text
        </Button>
        <Button disabled={disabled} type="primary" icon={<IconDown />} />
      </Button.Group>
      <Button.Group>
        <Button disabled={disabled}>Button Text</Button>
        <Button disabled={disabled} icon={<IconDown />} />
      </Button.Group>
      <Button.Group>
        <Button type="primary" icon={<IconLeft />} shape="round">
          Prev
        </Button>
        <Button type="primary" disabled={disabled} shape="round">
          Next
          <IconRight />
        </Button>
      </Button.Group>
      <Button.Group>
        <Button type="primary" icon={<IconAlignLeft />} />
        <Button type="primary" disabled={disabled} icon={<IconAlignCenter />} />
        <Button type="primary" icon={<IconAlignRight />} />
      </Button.Group>
      <Button.Group>
        <Button type="primary" icon={<IconStar />}>
          喜欢
        </Button>
        <Button type="primary" disabled={disabled} icon={<IconSettings />}>
          设置
        </Button>
      </Button.Group>
    </Space>
  );
};

export const ButtonGroups: Story = {
  name: "组合按钮",
  render: () => (
    <Space size="large" direction="vertical">
      <ButtonGroupsTemplate />
      <ButtonGroupsTemplate disabled />
    </Space>
  ),
};

export const LongButtons: Story = {
  name: "长按钮",
  render: () => (
    <Space
      style={{
        width: 360,
        border: "1px solid var(--color-border)",
        borderRadius: 4,
        padding: 20,
      }}
      direction="vertical"
      size="large"
    >
      <Button type="primary" long>
        主要按钮
      </Button>
      <Button type="secondary" long>
        默认按钮
      </Button>
      <Button type="dashed" long>
        虚线按钮
      </Button>
      <Button type="outline" long>
        线框按钮
      </Button>
      <Button type="text" long>
        文字按钮
      </Button>
    </Space>
  ),
};
