import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  IconCheckCircleFill,
  IconPlus,
  IconStar,
  IconSettings,
  IconAlipay,
  IconWechat,
  IconAndroidFill,
  IconAppleFill,
} from '@arco-iconbox/react-growingio';
import {
  Divider,
  Input,
  Message,
  Switch,
  Typography,
  Grid,
} from '@arco-design/web-react';
import Space from '../../space';
import Tag from '..';
import BadgeTag from '../BadgeTag';
import AvatarTag from '../AvatarTag';
import COLORS from '../../_core/colors';

const { Row, Col } = Grid;

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Base/Tag',
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Basic: Story = {
  args: {
    children: <FormattedMessage id="default" />,
  },
  render: (args) => (
    <Space size="large">
      <Tag {...args} />
      <Tag {...args} icon={<IconCheckCircleFill />} />
    </Space>
  ),
};

export const Close: Story = {
  args: {
    children: <FormattedMessage id="tag" />,
    closable: true,
  },
  render: (args) => {
    const [visible, setVisible] = React.useState(true);

    function onClose() {
      setVisible(!visible);
    }

    return (
      <Space size="large" direction="vertical">
        <Space>
          <Tag {...args} visible={visible} onClose={onClose} />
          <Tag
            {...args}
            icon={<IconStar />}
            visible={visible}
            onClose={onClose}
          />
        </Space>
        <Space size="small">
          <Switch size="small" checked={visible} onChange={onClose} />
          <Typography.Text>
            <FormattedMessage id="toggle" />
          </Typography.Text>
        </Space>
      </Space>
    );
  },
};

export const Check: Story = {
  args: {
    ...Basic.args,
    checkable: true,
  },
  render: (args) => (
    <Space size="large">
      <Tag {...args} />
      <Tag {...args} defaultChecked color="red" />
      <Tag {...args} defaultChecked color="blue" />
    </Space>
  ),
};

export const Type: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => (
    <>
      <Row gutter={[0, 36]} justify="center">
        <Col span={3}>Normal</Col>
        <Col span={3}>
          <Tag {...args} type="normal" status="not-started" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="normal" status="success" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="normal" status="warning" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="normal" status="danger" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="normal" status="doing" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="normal" status="done" />
        </Col>
      </Row>
      <Row gutter={[0, 36]} justify="center">
        <Col span={3}>Highlighted</Col>
        <Col span={3}>
          <Tag {...args} type="highlighted" status="not-started" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="highlighted" status="success" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="highlighted" status="warning" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="highlighted" status="danger" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="highlighted" status="doing" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="highlighted" status="done" />
        </Col>
      </Row>
      <Row gutter={[0, 36]} justify="center">
        <Col span={3}>Outline</Col>
        <Col span={3}>
          <Tag {...args} type="outline" status="not-started" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="outline" status="success" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="outline" status="warning" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="outline" status="danger" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="outline" status="doing" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="outline" status="done" />
        </Col>
      </Row>
      <Row gutter={[0, 36]} justify="center">
        <Col span={3}>Light outline</Col>
        <Col span={3}>
          <Tag {...args} type="light-outline" status="not-started" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="light-outline" status="success" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="light-outline" status="warning" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="light-outline" status="danger" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="light-outline" status="doing" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="light-outline" status="done" />
        </Col>
      </Row>
      <Row gutter={[0, 36]} justify="center">
        <Col span={3} offset={3}>
          <Typography.Text bold>
            <FormattedMessage id="tag-status-not-started" />
          </Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text bold>
            <FormattedMessage id="tag-status-success" />
          </Typography.Text>
        </Col>
        <Col span={3}>
          <Typography.Text bold>
            <FormattedMessage id="tag-status-warning" />
          </Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text bold>
            <FormattedMessage id="tag-status-danger" />
          </Typography.Text>
        </Col>
        <Col span={3}>
          <Typography.Text bold>
            <FormattedMessage id="tag-status-doing" />
          </Typography.Text>
        </Col>
        <Col span={3}>
          <Typography.Text bold>
            <FormattedMessage id="tag-status-done" />
          </Typography.Text>
        </Col>
      </Row>
    </>
  ),
};

export const Disabled: Story = {
  args: {
    ...Type.args,
    disabled: true,
  },
  render: Type.render,
};

export const Color: Story = {
  args: {
    closable: true,
  },
  render: (args) => {
    const CUSTOM_COLORS = [
      '#f53f3f',
      '#7816ff',
      '#00b42a',
      '#165dff',
      '#ff7d00',
      '#eb0aa4',
      '#7bc616',
      '#86909c',
      '#b71de8',
      '#0fc6c2',
      '#ffb400',
      '#168cff',
      '#ff5722',
    ];

    return (
      <Space size="large" direction="vertical" style={{ maxWidth: 958 }}>
        <Space wrap>
          {COLORS.map((color) => (
            <Tag {...args} key={color} color={color}>
              {color}
            </Tag>
          ))}
        </Space>
        <Divider>
          <FormattedMessage id="tag-color-custom" />
        </Divider>
        <Space wrap>
          {CUSTOM_COLORS.map((color) => (
            <Tag {...args} key={color} color={color}>
              {color}
            </Tag>
          ))}
        </Space>
      </Space>
    );
  },
};

export const Active: Story = {
  args: {},
  render: (args) => {
    const [tags, setTags] = React.useState(['Tag 1', 'Tag 2', 'Tag 3']);
    const [showInput, setShowInput] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    function addTag() {
      if (inputValue) {
        tags.push(inputValue);
        setTags(tags);
        setInputValue('');
      }

      setShowInput(false);
    }

    function removeTag(removeTag) {
      const newTags = tags.filter((tag) => tag !== removeTag);
      setTags(newTags);
    }

    return (
      <Space size="large">
        {tags.map((tag, index) => (
          <Tag
            {...args}
            key={tag}
            closable={index !== 0}
            onClose={() => removeTag(tag)}
          >
            {tag}
          </Tag>
        ))}
        {showInput ? (
          <Input
            autoFocus
            size="mini"
            value={inputValue}
            style={{ width: 84 }}
            onPressEnter={addTag}
            onBlur={addTag}
            onChange={setInputValue}
          />
        ) : (
          <Tag
            icon={<IconPlus />}
            style={{
              width: 84,
              backgroundColor: 'var(--color-fill-2)',
              border: '1px dashed var(--color-fill-3)',
              cursor: 'pointer',
            }}
            className="add-tag"
            tabIndex={0}
            onClick={() => setShowInput(true)}
            onKeyDown={(e) => {
              const keyCode = e.keyCode || e.which;
              if (keyCode === 13) {
                setShowInput(true);
              }
            }}
          >
            <FormattedMessage id="tag-active-add-tag" />
          </Tag>
        )}
      </Space>
    );
  },
};

export const Size: Story = {
  args: {
    closable: true,
  },
  render: (args) => (
    <Space size="large" align="start">
      <Tag {...args} size="large">
        <FormattedMessage id="large" />
      </Tag>
      <Tag {...args} size="medium">
        <FormattedMessage id="medium" />
      </Tag>
      <Tag {...args} size="small">
        <FormattedMessage id="small" />
      </Tag>
      <Tag {...args} size="mini">
        <FormattedMessage id="mini" />
      </Tag>
    </Space>
  ),
};

export const CloseAsync: Story = {
  args: {},
  render: (args) => (
    <Tag
      {...args}
      closable
      onClose={() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() >= 0.5) {
              resolve(0);
            } else {
              Message.error({
                content: <FormattedMessage id="tag-close-failure" />,
              });
              reject();
            }
          }, 3000);
        });
      }}
    >
      <FormattedMessage id="tag" />
    </Tag>
  ),
};

export const Icon: Story = {
  args: {},
  render: (args) => (
    <Space size="large">
      <Tag {...args} icon={<IconAndroidFill />}>
        Android
      </Tag>
      <Tag {...args} color="gray" icon={<IconAppleFill />}>
        iOS
      </Tag>
      <Tag {...args} color="blue" icon={<IconAlipay />}>
        Alipay
      </Tag>
      <Tag {...args} color="green" icon={<IconWechat />}>
        Wechat
      </Tag>
    </Space>
  ),
};

export const Bordered: Story = {
  args: {
    bordered: true,
  },
  render: (args) => (
    <Space wrap>
      <Tag {...args}>
        <FormattedMessage id="default" />
      </Tag>
      {COLORS.map((color) => (
        <Tag {...args} key={color} color={color}>
          {color}
        </Tag>
      ))}
    </Space>
  ),
};

type BadgeTagStory = StoryObj<typeof BadgeTag>;

export const BadgeTagBasic: BadgeTagStory = {
  name: 'Badge Tag',
  args: {
    title: <FormattedMessage id="tag-badge-title" />,
    content: <FormattedMessage id="tag-badge-content" />,
  },
  render: (args) => (
    <Grid.Row gutter={[0, 24]}>
      <Grid.Col span={6}>
        <BadgeTag {...args} size="large" />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} size="medium" />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} size="mini" />
      </Grid.Col>

      <Grid.Col span={6}>
        <BadgeTag {...args} icon={<IconSettings />} size="large" />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} icon={<IconSettings />} size="medium" />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} icon={<IconSettings />} size="small" />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} icon={<IconSettings />} size="mini" />
      </Grid.Col>
    </Grid.Row>
  ),
};

export const BadgeTagColor: BadgeTagStory = {
  args: {
    title: <FormattedMessage id="tag-badge-title" />,
  },
  render: (args) => (
    <Space wrap>
      {COLORS.map((color) => (
        <BadgeTag {...args} content={color} contentColor={color} />
      ))}
    </Space>
  ),
};

type AvatarTagStory = StoryObj<typeof AvatarTag>;

export const AvatarTagBasic: AvatarTagStory = {
  args: {
    imageSrc: '/demos/avatar.png',
    label: <FormattedMessage id="tag" />,
  },
  name: 'Avatar Tag',
  render: (args) => (
    <Grid.Row gutter={[0, 24]}>
      <Grid.Col span={6}>
        <AvatarTag {...args} size="large" />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} size="medium" />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} size="mini" />
      </Grid.Col>

      <Grid.Col span={6}>
        <AvatarTag {...args} mode="dark" size="large" />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} mode="dark" size="medium" />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} mode="dark" size="small" />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} mode="dark" size="mini" />
      </Grid.Col>
    </Grid.Row>
  ),
};
