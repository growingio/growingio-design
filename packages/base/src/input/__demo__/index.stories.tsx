import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  IconClockCircle,
  IconInfoCircle,
  IconSearch,
  IconUser,
  IconMinus,
} from '@arco-iconbox/react-growingio';
import Input from '..';
import { Space, Radio, Select, Typography, Divider } from '../..';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Base/Input',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    style: { width: 350 },
    allowClear: true,
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Input
        {...args}
        placeholder={intl.formatMessage({ id: 'please-enter' })}
      />
    );
  },
};

export const Status: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space wrap>
        <Input
          {...args}
          error
          placeholder={intl.formatMessage({ id: 'input-status-error' })}
        />
        <Input
          {...args}
          disabled
          placeholder={intl.formatMessage({ id: 'input-status-disabled' })}
        />
      </Space>
    );
  },
};

export const Size: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const intl = useIntl();
    const [size, setSize] = useState<'mini' | 'small' | 'default' | 'large'>(
      'default',
    );
    const sizeOptions = [
      {
        name: intl.formatMessage({ id: 'mini' }),
        value: 'mini',
      },
      {
        name: intl.formatMessage({ id: 'small' }),
        value: 'small',
      },
      {
        name: intl.formatMessage({ id: 'medium' }),
        value: 'default',
      },
      {
        name: intl.formatMessage({ id: 'large' }),
        value: 'large',
      },
    ];
    return (
      <Space direction="vertical" size="large">
        <Radio.Group
          type="button"
          mode="fill"
          name="size"
          value={size}
          onChange={setSize}
        >
          {sizeOptions.map(({ name, value }) => {
            return (
              <Radio key={value} value={value}>
                {name}
              </Radio>
            );
          })}
        </Radio.Group>
        <Space>
          <Input
            {...args}
            size={size}
            prefix={<IconClockCircle />}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
          <Input
            {...args}
            size={size}
            suffix={<IconInfoCircle />}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
        </Space>
        <Space>
          <Input
            {...args}
            size={size}
            addAfter={intl.formatMessage({
              id: 'input-currency-unit',
            })}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
          <Input
            {...args}
            size={size}
            addBefore={intl.formatMessage({
              id: 'input-calling-code',
            })}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
        </Space>
        <Space>
          <Input
            {...args}
            size={size}
            addBefore={intl.formatMessage({
              id: 'input-calling-code',
            })}
            addAfter={<IconSearch />}
            prefix={<IconClockCircle />}
            suffix={<IconInfoCircle />}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
          <Input.Search
            {...args}
            size={size}
            searchButton
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
        </Space>
      </Space>
    );
  },
};

export const Label: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space direction="vertical">
        <Space wrap>
          <Input
            {...args}
            addBefore={<FormattedMessage id="input-calling-code" />}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
          <Input
            {...args}
            addAfter={<FormattedMessage id="input-currency-unit" />}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
        </Space>
        <Space wrap>
          <Input
            {...args}
            addBefore="http://"
            addAfter={
              <Select defaultValue=".com" showSearch style={{ width: 80 }}>
                <Select.Option value=".com">.com</Select.Option>
                <Select.Option value=".cn">.cn</Select.Option>
                <Select.Option value=".net">.net</Select.Option>
                <Select.Option value=".org">.org</Select.Option>
              </Select>
            }
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
          <Input
            {...args}
            addBefore={
              <Select defaultValue="www." showSearch style={{ width: 80 }}>
                <Select.Option value="www.">www.</Select.Option>
                <Select.Option value="portal.">portal.</Select.Option>
                <Select.Option value="home.">home.</Select.Option>
              </Select>
            }
            addAfter=".com"
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
        </Space>
      </Space>
    );
  },
};

export const PrefixSuffix: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space direction="vertical">
        <Space wrap>
          <Input
            {...args}
            prefix={<IconUser />}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
          <Input
            {...args}
            suffix={<IconInfoCircle />}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
        </Space>
        <Space wrap>
          <Input
            {...args}
            prefix={<IconUser />}
            suffix={<IconInfoCircle />}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
          <Input
            {...args}
            addBefore={<FormattedMessage id="input-calling-code" />}
            addAfter={<IconSearch />}
            prefix={<IconUser />}
            suffix={<IconInfoCircle />}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
        </Space>
      </Space>
    );
  },
};

type SearchStory = StoryObj<typeof Input.Search>;

export const Search: SearchStory = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space wrap>
        <Input.Search
          {...args}
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
        <Input.Search
          searchButton
          {...args}
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
        <Input.Search
          searchButton={intl.formatMessage({ id: 'search' })}
          {...args}
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
      </Space>
    );
  },
};

export const SearchWithLoading: SearchStory = {
  ...Search,
  args: {
    ...Search.args,
    loading: true,
  },
};

export const InputGroup: Story = {
  args: {
    style: { width: 240 },
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space direction="vertical" size="large">
        <Space size="large">
          <Input.Group compact>
            <Select defaultValue="Beijing" showSearch style={{ width: 100 }}>
              <Select.Option value="Beijing">Beijing</Select.Option>
              <Select.Option value="Tianjin">Tianjin</Select.Option>
              <Select.Option value="Shanghai">Shanghai</Select.Option>
            </Select>
            <Input
              {...args}
              placeholder={intl.formatMessage({ id: 'please-enter' })}
            />
          </Input.Group>
          <Input.Group compact>
            <Input.Search
              {...args}
              placeholder={intl.formatMessage({ id: 'please-enter' })}
            />
            <Select defaultValue="Beijing" showSearch style={{ width: 100 }}>
              <Select.Option value="Beijing">Beijing</Select.Option>
              <Select.Option value="Tianjin">Tianjin</Select.Option>
              <Select.Option value="Shanghai">Shanghai</Select.Option>
            </Select>
          </Input.Group>
        </Space>
        <Space size="large">
          <Input.Group>
            <Input
              {...args}
              style={{ width: 60, marginRight: 8 }}
              value="010"
              readOnly
            />
            <Input
              {...args}
              placeholder={intl.formatMessage({ id: 'please-enter' })}
            />
          </Input.Group>
          <Input.Group>
            <Input
              {...args}
              style={{ width: 60, marginRight: 8 }}
              value="010"
              readOnly
            />
            <IconMinus
              style={{ color: 'var(--color-text-1)', marginRight: 8 }}
            />
            <Input
              {...args}
              defaultValue="8899887"
              placeholder={intl.formatMessage({ id: 'please-enter' })}
            />
          </Input.Group>
        </Space>
      </Space>
    );
  },
};

export const Length: Story | TextAreaStory = {
  args: {
    showWordLimit: true,
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space direction="vertical">
        <Space align="start" size={24}>
          <Input
            {...args}
            maxLength={10}
            placeholder={intl.formatMessage(
              { id: 'input-length-no-more-count-letters' },
              { count: 10 },
            )}
            style={{ width: 300 }}
          />
          <Input.TextArea
            {...args}
            maxLength={50}
            placeholder={intl.formatMessage(
              { id: 'input-length-no-more-count-letters' },
              { count: 50 },
            )}
            wrapperStyle={{ width: 300 }}
          />
        </Space>

        <Space align="start" size={24}>
          <Input
            {...args}
            maxLength={{ length: 10, errorOnly: true }}
            defaultValue={intl.formatMessage(
              { id: 'input-length-more-count-letters' },
              { count: 10 },
            )}
            style={{ width: 300 }}
          />
          <Input.TextArea
            {...args}
            maxLength={{ length: 50, errorOnly: true }}
            placeholder={intl.formatMessage(
              { id: 'input-length-more-count-letters' },
              { count: 50 },
            )}
            wrapperStyle={{ width: 300 }}
          />
        </Space>
      </Space>
    );
  },
};

type TextAreaStory = StoryObj<typeof Input.TextArea>;

export const TextArea: TextAreaStory = {
  args: {
    style: { minHeight: 64, width: 350 },
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space wrap>
        <Input.TextArea
          {...args}
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
        <Input.TextArea
          {...args}
          defaultValue={intl.formatMessage({ id: 'input-status-disabled' })}
          disabled
        />
      </Space>
    );
  },
};

export const AutoSizeTextArea: TextAreaStory = {
  args: {
    style: { width: 350 },
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space wrap align="start">
        <Input.TextArea
          {...args}
          defaultValue={intl.formatMessage({ id: 'input-text-area-value' })}
          autoSize
        />
        <Input.TextArea
          {...args}
          autoSize={{ minRows: 2, maxRows: 6 }}
          defaultValue={intl.formatMessage({ id: 'input-text-area-rows' })}
        />
      </Space>
    );
  },
};

type PasswordStory = StoryObj<typeof Input.Password>;

export const Password: PasswordStory = {
  args: {
    defaultValue: 'password',
    style: { width: 350 },
  },
  render: (args) => (
    <Space wrap>
      <Input.Password {...args} />
      <Input.Password {...args} defaultVisibility={true} />
    </Space>
  ),
};

export const NormalizeValue: Story = {
  args: {
    ...Basic.args,
    normalize: (v) => (v ? v.trim() : v),
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space size="large">
        <Space direction="vertical">
          <Typography.Paragraph>
            <FormattedMessage id="input-normalize-value-on-blur" />
          </Typography.Paragraph>
          <Input
            {...args}
            normalizeTrigger={['onBlur']}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
        </Space>
        <Space direction="vertical">
          <Typography.Paragraph>
            <FormattedMessage id="input-normalize-value-on-press-enter" />
          </Typography.Paragraph>
          <Input
            {...args}
            normalizeTrigger={['onPressEnter']}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
        </Space>
      </Space>
    );
  },
};

export const AutoWidth: Story = {
  args: {
    autoWidth: { minWidth: 300, maxWidth: 500 },
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space direction="vertical" style={{ width: '100%' }}>
        <Divider>
          <Typography.Text code>
            {JSON.stringify(AutoWidth.args.autoWidth)}
          </Typography.Text>
        </Divider>
        <Input
          {...args}
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
        <Input
          {...args}
          prefix="Prefix"
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
        <Input
          {...args}
          prefix="Prefix"
          addBefore="Before"
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
      </Space>
    );
  },
};
