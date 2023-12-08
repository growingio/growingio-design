import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider, Space, Grid } from '@arco-design/web-react';
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
} from '@arco-design/web-react/icon';
import { FormattedMessage } from 'react-intl';
import Button from '..';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Base/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const BasicButtons: Story = {
  args: {},
  render: (args) => (
    <Space size="large">
      <Button {...args} type="primary">
        <FormattedMessage id="primary" />
      </Button>
      <Button {...args} type="default">
        <FormattedMessage id="default" />
      </Button>
      <Button {...args} type="dashed">
        <FormattedMessage id="dashed" />
      </Button>
      <Button {...args} type="outline">
        <FormattedMessage id="outline" />
      </Button>
      <Button {...args} type="text">
        <FormattedMessage id="text" />
      </Button>
    </Space>
  ),
};

export const IconButtons: Story = {
  args: {
    type: 'primary',
  },
  render: (args) => (
    <Space size="large">
      <Button {...args} icon={<IconDelete />}>
        <FormattedMessage id="delete" />
      </Button>
      <Button {...args} icon={<IconPlus />} />
      <Button {...args}>
        <FormattedMessage id="delete" />
        <IconDelete />
      </Button>
    </Space>
  ),
};

export const ButtonShapes: Story = {
  render: (args) => (
    <Space size="large">
      <Button {...args} type="primary" icon={<IconPlus />} />
      <Button {...args} shape="circle" type="primary" icon={<IconPlus />} />
      <Button {...args} shape="round" type="primary">
        <FormattedMessage id="round" />
      </Button>
      <Button {...args} shape="square" type="primary">
        <FormattedMessage id="square" />
      </Button>
    </Space>
  ),
};

export const ButtonSizes: Story = {
  args: {
    type: 'primary',
  },
  render: (args) => (
    <Space size="large" align="start">
      <Button {...args} size="large">
        <FormattedMessage id="large" />
      </Button>
      <Button {...args} size="medium">
        <FormattedMessage id="medium" />
      </Button>
      <Button {...args} size="small">
        <FormattedMessage id="small" />
      </Button>
      <Button {...args} size="mini">
        <FormattedMessage id="mini" />
      </Button>
    </Space>
  ),
};

export const ButtonStatus: Story = {
  render: (args) => (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Button {...args} type="primary" status="primary">
          <FormattedMessage id="primary" />
        </Button>
        <Button {...args} type="dashed" status="primary">
          <FormattedMessage id="primary" />
        </Button>
        <Button {...args} type="outline" status="primary">
          <FormattedMessage id="primary" />
        </Button>
        <Button {...args} type="text" status="primary">
          <FormattedMessage id="primary" />
        </Button>
      </Space>
      <Space size="large">
        <Button {...args} type="primary" status="default">
          <FormattedMessage id="default" />
        </Button>
        <Button {...args} type="dashed" status="default">
          <FormattedMessage id="default" />
        </Button>
        <Button {...args} type="outline" status="default">
          <FormattedMessage id="default" />
        </Button>
        <Button {...args} type="text" status="default">
          <FormattedMessage id="default" />
        </Button>
      </Space>
      <Space size="large">
        <Button {...args} type="primary" status="warning">
          <FormattedMessage id="warning" />
        </Button>
        <Button {...args} type="dashed" status="warning">
          <FormattedMessage id="warning" />
        </Button>
        <Button {...args} type="outline" status="warning">
          <FormattedMessage id="warning" />
        </Button>
        <Button {...args} type="text" status="warning">
          <FormattedMessage id="warning" />
        </Button>
      </Space>
      <Space size="large">
        <Button {...args} type="primary" status="danger">
          <FormattedMessage id="danger" />
        </Button>
        <Button {...args} type="dashed" status="danger">
          <FormattedMessage id="danger" />
        </Button>
        <Button {...args} type="outline" status="danger">
          <FormattedMessage id="danger" />
        </Button>
        <Button {...args} type="text" status="danger">
          <FormattedMessage id="danger" />
        </Button>
      </Space>
      <Space size="large">
        <Button {...args} type="primary" status="success">
          <FormattedMessage id="success" />
        </Button>
        <Button {...args} type="dashed" status="success">
          <FormattedMessage id="success" />
        </Button>
        <Button {...args} type="outline" status="success">
          <FormattedMessage id="success" />
        </Button>
        <Button {...args} type="text" status="success">
          <FormattedMessage id="success" />
        </Button>
      </Space>
    </Space>
  ),
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
            <Button {...args} type="primary" loading>
              <FormattedMessage id="button-loading" />
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button {...args} type="default" loading>
              <FormattedMessage id="button-loading" />
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button {...args} type="dashed" loading>
              <FormattedMessage id="button-loading" />
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button {...args} type="primary" shape="circle" loading />
          </Grid.Col>
          <Grid.Col span={8}>
            <Button {...args} type="default" shape="circle" loading />
          </Grid.Col>
          <Grid.Col span={8}>
            <Button {...args} type="dashed" shape="circle" loading />
          </Grid.Col>
          <Grid.Col span={8}>
            <Button
              {...args}
              type="primary"
              loading={buttonLoading}
              onClick={onClickButton}
            >
              <FormattedMessage id="button-click-me" />
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button
              {...args}
              type="primary"
              loading={iconButtonLoading}
              onClick={onClickIconButton}
            >
              {!iconButtonLoading && <IconPlus />}
              <FormattedMessage id="button-click-me" />
            </Button>
          </Grid.Col>
        </Grid.Row>

        <Divider style={{ width: 440, minWidth: 440 }}>
          <FormattedMessage id="button-loading-fixed-width" />
        </Divider>

        <Grid.Row gutter={[24, 12]}>
          <Grid.Col span={8}>
            <Button
              {...args}
              type="primary"
              loadingFixedWidth
              loading={fixedWidthLoading}
              onClick={onClickFixedWith}
            >
              <FormattedMessage id="button-click-me" />
            </Button>
          </Grid.Col>
        </Grid.Row>
      </>
    );
  },
};

export const ButtonGroups: Story = {
  render: (args) => (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Button.Group>
          <Button {...args}>
            <FormattedMessage id="button-publish" />
          </Button>
          <Button icon={<IconDown />} />
        </Button.Group>
        <Button.Group>
          <Button {...args} type="default">
            <FormattedMessage id="button-publish" />
          </Button>
          <Button {...args} type="default" icon={<IconMore />} />
        </Button.Group>
      </Space>
      <Button.Group>
        <Button {...args} type="primary">
          <FormattedMessage id="button-publish" />
        </Button>
        <Button {...args} type="primary" icon={<IconDown />} />
      </Button.Group>
      <Space size="large">
        <Button.Group>
          <Button
            {...args}
            type="primary"
            icon={<IconLeft />}
            shape="round"
            style={{ padding: '0 8px' }}
          >
            <FormattedMessage id="button-prev" />
          </Button>
          <Button
            {...args}
            type="primary"
            shape="round"
            style={{ padding: '0 8px' }}
          >
            <FormattedMessage id="button-next" />

            <IconRight />
          </Button>
        </Button.Group>
        <Button.Group>
          <Button {...args} type="primary" icon={<IconStar />} />
          <Button {...args} type="primary" icon={<IconMessage />} />
          <Button {...args} type="primary" icon={<IconSettings />} />
        </Button.Group>
        <Button.Group>
          <Button {...args} type="primary" icon={<IconStar />}>
            <FormattedMessage id="button-favorite" />
          </Button>
          <Button {...args} type="primary" icon={<IconSettings />}>
            <FormattedMessage id="button-setting" />
          </Button>
        </Button.Group>
      </Space>
    </Space>
  ),
};

export const LongButtons: Story = {
  render: (args) => (
    <Space
      style={{
        width: 360,
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        padding: 20,
      }}
      direction="vertical"
      size="large"
    >
      <Button {...args} type="primary" long>
        <FormattedMessage id="primary" />
      </Button>
      <Button {...args} type="default" long>
        <FormattedMessage id="default" />
      </Button>
      <Button {...args} type="dashed" long>
        <FormattedMessage id="dashed" />
      </Button>
      <Button {...args} type="outline" long>
        <FormattedMessage id="outline" />
      </Button>
      <Button {...args} type="text" long>
        <FormattedMessage id="text" />
      </Button>
    </Space>
  ),
};
