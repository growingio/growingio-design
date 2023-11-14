import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Divider, Space, Grid } from "@arco-design/web-react";
import {
  IconDelete,
  IconPlus,
  IconLeft,
  IconRight,
  IconStar,
  IconSettings,
  IconDown,
  IconMore,
  IconMessage,
} from "@arco-design/web-react/icon";
import { withIntl } from "../../.storybook/preview";
import Button from "../../components/button";
import "../../components/button/style";
import { useIntl } from "react-intl";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "General/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const BasicButtons: Story = {
  render: (args) =>
    withIntl((intl) => (
      <Space size="large">
        <Button {...args} type="primary">
          {intl.formatMessage({ id: "button-primary" })}
        </Button>
        <Button {...args} type="default">
          {intl.formatMessage({
            id: "button-default",
          })}
        </Button>
        <Button {...args} type="dashed">
          {intl.formatMessage({
            id: "button-dashed",
          })}
        </Button>
        <Button {...args} type="outline">
          {intl.formatMessage({
            id: "button-outline",
          })}
        </Button>
        <Button {...args} type="text">
          {intl.formatMessage({
            id: "button-text",
          })}
        </Button>
      </Space>
    )),
};

export const IconButtons: Story = {
  render: (args) =>
    withIntl((intl) => (
      <Space size="large">
        <Button {...args} type="primary" icon={<IconDelete />}>
          {intl.formatMessage({
            id: "button-delete",
          })}
        </Button>
        <Button {...args} type="primary" icon={<IconPlus />} />
        <Button {...args} type="primary">
          {intl.formatMessage({
            id: "button-delete",
          })}
          <IconDelete />
        </Button>
      </Space>
    )),
};

export const ButtonShapes: Story = {
  render: (args) =>
    withIntl((intl) => (
      <Space size="large">
        <Button {...args} type="primary" icon={<IconPlus />} />
        <Button {...args} shape="circle" type="primary" icon={<IconPlus />} />
        <Button {...args} shape="round" type="primary">
          {intl.formatMessage({ id: "button-round" })}
        </Button>
        <Button {...args} shape="square" type="primary">
          {intl.formatMessage({ id: "button-square" })}
        </Button>
      </Space>
    )),
};

export const ButtonSizes: Story = {
  render: (args) =>
    withIntl((intl) => (
      <Space size="large" align="start">
        <Button {...args} size="mini" type="primary">
          {intl.formatMessage({ id: "button-mini" })}
        </Button>
        <Button {...args} size="small" type="primary">
          {intl.formatMessage({ id: "button-small" })}
        </Button>
        <Button {...args} size="medium" type="primary">
          {intl.formatMessage({ id: "button-medium" })}
        </Button>
        <Button {...args} size="large" type="primary">
          {intl.formatMessage({ id: "button-large" })}
        </Button>
      </Space>
    )),
};

export const ButtonStatus: Story = {
  render: (args) =>
    withIntl((intl) => (
      <Space size="large" direction="vertical">
        <Space size="large">
          <Button {...args} type="primary" status="primary">
            {intl.formatMessage({ id: "button-primary" })}
          </Button>
          <Button {...args} type="dashed" status="primary">
            {intl.formatMessage({ id: "button-primary" })}
          </Button>
          <Button {...args} type="outline" status="primary">
            {intl.formatMessage({ id: "button-primary" })}
          </Button>
          <Button {...args} type="text" status="primary">
            {intl.formatMessage({ id: "button-primary" })}
          </Button>
        </Space>
        <Space size="large">
          <Button {...args} type="primary" status="default">
            {intl.formatMessage({ id: "button-default" })}
          </Button>
          <Button {...args} type="dashed" status="default">
            {intl.formatMessage({ id: "button-default" })}
          </Button>
          <Button {...args} type="outline" status="default">
            {intl.formatMessage({ id: "button-default" })}
          </Button>
          <Button {...args} type="text" status="default">
            {intl.formatMessage({ id: "button-default" })}
          </Button>
        </Space>
        <Space size="large">
          <Button {...args} type="primary" status="warning">
            {intl.formatMessage({ id: "button-warning" })}
          </Button>
          <Button {...args} type="dashed" status="warning">
            {intl.formatMessage({ id: "button-warning" })}
          </Button>
          <Button {...args} type="outline" status="warning">
            {intl.formatMessage({ id: "button-warning" })}
          </Button>
          <Button {...args} type="text" status="warning">
            {intl.formatMessage({ id: "button-warning" })}
          </Button>
        </Space>
        <Space size="large">
          <Button {...args} type="primary" status="danger">
            {intl.formatMessage({ id: "button-danger" })}
          </Button>
          <Button {...args} type="dashed" status="danger">
            {intl.formatMessage({ id: "button-danger" })}
          </Button>
          <Button {...args} type="outline" status="danger">
            {intl.formatMessage({ id: "button-danger" })}
          </Button>
          <Button {...args} type="text" status="danger">
            {intl.formatMessage({ id: "button-danger" })}
          </Button>
        </Space>
        <Space size="large">
          <Button {...args} type="primary" status="success">
            {intl.formatMessage({ id: "button-success" })}
          </Button>
          <Button {...args} type="dashed" status="success">
            {intl.formatMessage({ id: "button-success" })}
          </Button>
          <Button {...args} type="outline" status="success">
            {intl.formatMessage({ id: "button-success" })}
          </Button>
          <Button {...args} type="text" status="success">
            {intl.formatMessage({ id: "button-success" })}
          </Button>
        </Space>
      </Space>
    )),
};

export const DisabledButtons: Story = {
  ...ButtonStatus,
  args: {
    ...ButtonStatus.args,
    disabled: true,
  },
};

export const LoadingButtons: Story = {
  render: (args) => {
    const { formatMessage } = useIntl();
    const [buttonLoading, setButtonLoading] = React.useState(false);
    const [iconButtonLoading, setIconButtonLoading] = React.useState(false);
    const [fixedWidthLoading, setFixedWidthLoading] = React.useState(false);

    function onClickButton() {
      setButtonLoading(true);
      setTimeout(() => {
        setButtonLoading(false);
      }, 4000);
    }

    function onClickIconButton() {
      setIconButtonLoading(true);
      setTimeout(() => {
        setIconButtonLoading(false);
      }, 4000);
    }

    function onClickFixedWith() {
      setFixedWidthLoading(true);
      setTimeout(() => {
        setFixedWidthLoading(false);
      }, 4000);
    }

    return (
      <>
        <Grid.Row gutter={[24, 12]}>
          <Grid.Col span={8}>
            <Button type="primary" loading>
              {formatMessage({ id: "button-loading" })}
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button type="default" loading>
              {formatMessage({ id: "button-loading" })}
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button type="dashed" loading>
              {formatMessage({ id: "button-loading" })}
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button type="primary" shape="circle" loading />
          </Grid.Col>
          <Grid.Col span={8}>
            <Button type="default" shape="circle" loading />
          </Grid.Col>
          <Grid.Col span={8}>
            <Button type="dashed" shape="circle" loading />
          </Grid.Col>
          <Grid.Col span={8}>
            <Button
              type="primary"
              loading={buttonLoading}
              onClick={onClickButton}
            >
              {formatMessage({ id: "button-click-me" })}
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button
              type="primary"
              loading={iconButtonLoading}
              onClick={onClickIconButton}
            >
              {!iconButtonLoading && <IconPlus />}
              {formatMessage({ id: "button-click-me" })}
            </Button>
          </Grid.Col>
        </Grid.Row>

        <Divider style={{ width: 440, minWidth: 440 }}>
          {formatMessage({ id: "button-loading-fixed-width" })}
        </Divider>

        <Grid.Row gutter={[24, 12]}>
          <Grid.Col span={8}>
            <Button
              type="primary"
              loadingFixedWidth
              loading={fixedWidthLoading}
              onClick={onClickFixedWith}
            >
              {formatMessage({ id: "button-click-me" })}
            </Button>
          </Grid.Col>
        </Grid.Row>
      </>
    );
  },
};

export const ButtonGroups: Story = {
  render: (args) =>
    withIntl((intl) => (
      <Space size="large" direction="vertical">
        <Space size="large">
          <Button.Group>
            <Button>{intl.formatMessage({ id: "button-publish" })}</Button>
            <Button icon={<IconDown />} />
          </Button.Group>
          <Button.Group>
            <Button type="default">
              {intl.formatMessage({ id: "button-publish" })}
            </Button>
            <Button type="default" icon={<IconMore />} />
          </Button.Group>
        </Space>
        <Button.Group>
          <Button type="primary">
            {intl.formatMessage({ id: "button-publish" })}
          </Button>
          <Button type="primary" icon={<IconDown />} />
        </Button.Group>
        <Space size="large">
          <Button.Group>
            <Button
              type="primary"
              icon={<IconLeft />}
              shape="round"
              style={{ padding: "0 8px" }}
            >
              {intl.formatMessage({ id: "button-prev" })}
            </Button>
            <Button type="primary" shape="round" style={{ padding: "0 8px" }}>
              {intl.formatMessage({ id: "button-next" })}
              <IconRight />
            </Button>
          </Button.Group>
          <Button.Group>
            <Button type="primary" icon={<IconStar />} />
            <Button type="primary" icon={<IconMessage />} />
            <Button type="primary" icon={<IconSettings />} />
          </Button.Group>
          <Button.Group>
            <Button type="primary" icon={<IconStar />}>
              {intl.formatMessage({ id: "button-favorite" })}
            </Button>
            <Button type="primary" icon={<IconSettings />}>
              {intl.formatMessage({ id: "button-setting" })}
            </Button>
          </Button.Group>
        </Space>
      </Space>
    )),
};

export const LongButtons: Story = {
  render: (args) =>
    withIntl((intl) => (
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
        <Button {...args} type="primary" long>
          {intl.formatMessage({ id: "button-primary" })}
        </Button>
        <Button {...args} type="default" long>
          {intl.formatMessage({
            id: "button-default",
          })}
        </Button>
        <Button {...args} type="dashed" long>
          {intl.formatMessage({
            id: "button-dashed",
          })}
        </Button>
        <Button {...args} type="outline" long>
          {intl.formatMessage({
            id: "button-outline",
          })}
        </Button>
        <Button {...args} type="text" long>
          {intl.formatMessage({
            id: "button-text",
          })}
        </Button>
      </Space>
    )),
};
