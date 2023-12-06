import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Space, Table, TableColumnProps } from '@arco-design/web-react';
import { IconExclamation } from '@arco-design/web-react/icon';
import Empty from '..';
import Button from '../../button';

const meta: Meta<typeof Empty> = {
  component: Empty,
  title: 'Base/Empty',
};

export default meta;

type Story = StoryObj<typeof Empty>;

export const Basic: Story = {
  render: (args) => <Empty {...args} />,
};

export const IconDesc: Story = {
  render: (args) => (
    <Empty
      {...args}
      icon={
        <div
          style={{
            background: '#f2994b',
            display: 'inline-flex',
            borderRadius: '50%',
            width: 50,
            height: 50,
            fontSize: 30,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}
        >
          <IconExclamation />
        </div>
      }
      description={<FormattedMessage id="empty-icon-desc" />}
    />
  ),
};

export const Image: Story = {
  render: (args) => (
    <Empty
      {...args}
      imgSrc="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a0082b7754fbdb2d98a5c18d0b0edd25.png~tplv-uwbnlip3yd-webp.webp"
      description={
        <Button type="primary">
          <FormattedMessage id="refresh" />
        </Button>
      }
    />
  ),
};

const LargeBoard = (args) => (
  <Empty
    {...args}
    size="large"
    icon={<Empty.Board />}
    description={
      <Space size="small" direction="vertical">
        <FormattedMessage id="empty-styles-board-large" />
        <Space>
          <Button>
            <FormattedMessage id="default" />
          </Button>
          <Button type="primary">
            <FormattedMessage id="primary" />
          </Button>
        </Space>
      </Space>
    }
  />
);
const SmallBoard = (args) => (
  <Empty
    {...args}
    size="small"
    icon={<Empty.Board />}
    description={
      <Space size="small" direction="vertical">
        <FormattedMessage id="empty-styles-board-small" />
        <Space>
          <Button size="mini">
            <FormattedMessage id="default" />
          </Button>
          <Button size="mini" type="primary">
            <FormattedMessage id="primary" />
          </Button>
        </Space>
      </Space>
    }
  />
);

export const Sizes: Story = {
  args: {},
  render: (args) => (
    <Space size="large" align="end">
      {LargeBoard(args)}
      {SmallBoard(args)}
    </Space>
  ),
};

export const Styles: Story = {
  args: {},
  render: (args) => {
    const { Forbidden, NoContent, NoFile, NoResource, NotFound, NotSearched } =
      Empty;
    const intl = useIntl();
    const demo = (type: string, size: 'small' | 'large') => {
      const id = `empty-styles-${type}-${size}`;
      switch (type) {
        case 'board':
          return size === 'large' ? LargeBoard(args) : SmallBoard(args);
        case 'forbidden':
          return (
            <Empty
              {...args}
              size={size}
              icon={<Forbidden />}
              description={intl.formatMessage({ id })}
            />
          );
        case 'no-content':
          return (
            <Empty
              {...args}
              size={size}
              icon={<NoContent />}
              description={intl.formatMessage({ id })}
            />
          );
        case 'no-file':
          return (
            <Empty
              {...args}
              size={size}
              icon={<NoFile />}
              description={intl.formatMessage({ id })}
            />
          );
        case 'no-resource':
          return (
            <Empty
              {...args}
              size={size}
              icon={<NoResource />}
              description={intl.formatMessage({ id })}
            />
          );
        case 'not-found':
          return (
            <Empty
              {...args}
              size={size}
              icon={<NotFound />}
              description={intl.formatMessage({ id })}
            />
          );
        case 'not-searched':
          return (
            <Empty
              {...args}
              size={size}
              icon={<NotSearched />}
              description={intl.formatMessage({ id })}
            />
          );
      }
    };
    const columns: TableColumnProps[] = [
      {
        title: intl.formatMessage({ id: 'empty-styles-name' }),
        dataIndex: 'name',
      },
      {
        title: intl.formatMessage({ id: 'empty-styles-large' }),
        dataIndex: 'type',
        render: (col) => demo(col, 'large'),
      },
      {
        title: intl.formatMessage({ id: 'empty-styles-small' }),
        dataIndex: 'type',
        render: (col) => demo(col, 'small'),
      },
    ];
    const data = [
      {
        name: intl.formatMessage({ id: 'empty-styles-forbidden' }),
        type: 'forbidden',
      },
      {
        name: intl.formatMessage({ id: 'empty-styles-not-found' }),
        type: 'not-found',
      },
      {
        name: intl.formatMessage({ id: 'empty-styles-no-content' }),
        type: 'no-content',
      },
      {
        name: intl.formatMessage({ id: 'empty-styles-not-searched' }),
        type: 'not-searched',
      },
      {
        name: intl.formatMessage({ id: 'empty-styles-board' }),
        type: 'board',
      },
      {
        name: intl.formatMessage({ id: 'empty-styles-no-resource' }),
        type: 'no-resource',
      },
      {
        name: intl.formatMessage({ id: 'empty-styles-no-file' }),
        type: 'no-file',
      },
    ];
    return (
      <Table
        borderCell
        columns={columns}
        data={data}
        pagination={{ hideOnSinglePage: true }}
      />
    );
  },
};
