import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { IconFaceSmileFill } from '@arco-iconbox/react-growingio';
import { Space, Button, Link } from '../..';
import Result from '..';

const meta: Meta<typeof Result> = {
  component: Result,
  title: 'Base/Result',
};

export default meta;
type Story = StoryObj<typeof Result>;

export const Success: Story = {
  args: {
    status: 'success',
    title: <FormattedMessage id="result-success-title" />,
    subTitle: <FormattedMessage id="result-success-subtitle" />,
    extra: (
      <Space>
        <Button>
          <FormattedMessage id="result-again" />
        </Button>
        <Button type="primary">
          <FormattedMessage id="result-back" />
        </Button>
      </Space>
    ),
  },
  render: (args) => <Result {...args} />,
};

export const Info: Story = {
  ...Success,
  args: {
    ...Success.args,
    status: 'info',
    title: <FormattedMessage id="result-info-title" />,
    subTitle: undefined,
    extra: (
      <Button type="primary">
        <FormattedMessage id="result-back" />
      </Button>
    ),
  },
};

export const Warning: Story = {
  ...Info,
  args: {
    ...Info.args,
    status: 'warning',
    title: <FormattedMessage id="result-warning-title" />,
  },
};

export const Error: Story = {
  ...Success,
  args: {
    ...Success.args,
    status: 'error',
    title: <FormattedMessage id="result-error-title" />,
    subTitle: <FormattedMessage id="result-error-subtitle" />,
  },
};

export const Forbidden: Story = {
  ...Success,
  args: {
    status: '403',
    title: <FormattedMessage id="result-forbidden-title" />,
    subTitle: (
      <>
        <span style={{ marginRight: 8 }}>
          <FormattedMessage id="result-forbidden-subtitle" />
        </span>
        <Link href="#">
          <FormattedMessage id="result-forbidden-subtitle-link" />
        </Link>
      </>
    ),
    extra: (
      <Space>
        <Button>
          <FormattedMessage id="result-secondary-operation" />
        </Button>
        <Button type="primary">
          <FormattedMessage id="result-primary-operation" />
        </Button>
      </Space>
    ),
  },
};

export const NoResource: Story = {
  ...Success,
  args: {
    status: 'no-resource',
    title: <FormattedMessage id="result-no-resource-title" />,
    subTitle: undefined,
    extra: (
      <Space>
        <Button>
          <FormattedMessage id="result-404-secondary-operation" />
        </Button>
        <Button type="primary">
          <FormattedMessage id="result-primary-operation" />
        </Button>
      </Space>
    ),
  },
};

export const NotFound: Story = {
  ...NoResource,
  args: {
    ...NoResource.args,
    status: '404',
    title: <FormattedMessage id="result-404-title" />,
  },
};

export const InternalServerError: Story = {
  ...Forbidden,
  args: {
    status: '500',
    title: <FormattedMessage id="result-500-title" />,
    subTitle: undefined,
    extra: (
      <Button type="primary">
        <FormattedMessage id="result-back" />
      </Button>
    ),
  },
};

export const Unauthorized: Story = {
  ...Success,
  args: {
    status: '401',
    title: <FormattedMessage id="result-401-title" />,
    subTitle: <FormattedMessage id="result-401-subtitle" />,
    extra: (
      <Space>
        <Button>
          <FormattedMessage id="result-401-secondary-operation" />
        </Button>
        <Button type="primary">
          <FormattedMessage id="result-primary-operation" />
        </Button>
      </Space>
    ),
  },
};

export const Ok: Story = {
  ...Unauthorized,
  args: {
    ...Unauthorized.args,
    status: '200',
    title: <FormattedMessage id="result-200-title" />,
    subTitle: <FormattedMessage id="result-200-subtitle" />,
  },
};

export const Icon: Story = {
  ...Success,
  args: {
    ...Info.args,
    status: null,
    icon: <IconFaceSmileFill style={{ color: 'rgb(var(--arcoblue-6))' }} />,
  },
};
