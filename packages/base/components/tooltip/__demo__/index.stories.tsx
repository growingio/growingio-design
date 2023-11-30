import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@arco-design/web-react';
import { Button, Link, Space } from '../..';
import Tooltip from '..';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Base/Tooltip',
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    children: (
      <Typography.Text>
        <FormattedMessage id="tooltip-basic-child" />
      </Typography.Text>
    ),
    content: <FormattedMessage id="tooltip-basic-content" />,
  },
  render: (args) => (
    <Space size="large">
      <Tooltip {...args} />
      <Tooltip
        {...args}
        content={<FormattedMessage id="tooltip-basic-multipe-lines" />}
      />
    </Space>
  ),
};

export const Mini: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => <Tooltip {...args} mini content="123456789" />,
};

function getStyle(top, left) {
  return {
    position: 'absolute',
    width: 80,
    top,
    left,
  } as React.CSSProperties;
}
export const Position: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => (
    <div
      style={{
        position: 'relative',
        width: 600,
        height: 280,
      }}
    >
      <Tooltip {...args} position="tl">
        <Button style={getStyle(0, 220)}>TL</Button>
      </Tooltip>
      <Tooltip {...args} position="top">
        <Button style={getStyle(0, 330)}>Top</Button>
      </Tooltip>
      <Tooltip {...args} position="tr">
        <Button style={getStyle(0, 440)}>TR</Button>
      </Tooltip>
      <Tooltip {...args} position="lt">
        <Button style={getStyle(60, 160)}>LT</Button>
      </Tooltip>
      <Tooltip {...args} position="left">
        <Button style={getStyle(120, 160)}>Left</Button>
      </Tooltip>
      <Tooltip {...args} position="lb">
        <Button style={getStyle(180, 160)}>LB</Button>
      </Tooltip>
      <Tooltip {...args} position="rt">
        <Button style={getStyle(60, 500)}>RT</Button>
      </Tooltip>
      <Tooltip {...args} position="right">
        <Button style={getStyle(120, 500)}>Right</Button>
      </Tooltip>
      <Tooltip {...args} position="rb">
        <Button style={getStyle(180, 500)}>RB</Button>
      </Tooltip>
      <Tooltip {...args} position="bl">
        <Button style={getStyle(240, 220)}>BL</Button>
      </Tooltip>
      <Tooltip {...args} position="bottom">
        <Button style={getStyle(240, 330)}>Bottom</Button>
      </Tooltip>
      <Tooltip {...args} position="br">
        <Button style={getStyle(240, 440)}>BR</Button>
      </Tooltip>
    </div>
  ),
};

export const Color: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const colors = ['#3491FA', '#165DFF', '#722ED1'];
    return (
      <Space size="large">
        {colors.map((color) => (
          <Tooltip {...args} key={color} color={color}>
            <Button style={{ backgroundColor: color, color: '#fff' }}>
              {color}
            </Button>
          </Tooltip>
        ))}
      </Space>
    );
  },
};

export const WithLink: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => (
    <Space size="large" wrap>
      <Tooltip
        {...args}
        content={
          <Space>
            <span>Tooltip</span>
            <Link>Link</Link>
          </Space>
        }
      />
      <Tooltip
        {...args}
        content={
          <>
            <span style={{ wordWrap: 'break-word', marginRight: 8 }}>
              TooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltip
            </span>
            <Link>Link</Link>
          </>
        }
      />
    </Space>
  ),
};
