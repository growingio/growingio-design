import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import InputNumber from '..';
import { Space, Radio } from '../..';
import { SizeType } from '../../_core/types';

const meta: Meta<typeof InputNumber> = {
  component: InputNumber,
  title: 'Base/InputNumber',
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Basic: Story = {
  args: {
    defaultValue: 500,
    style: { width: 160 },
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space size="large">
        <InputNumber
          {...args}
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
        <InputNumber {...args} disabled />
      </Space>
    );
  },
};

export const Button: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    mode: 'button',
  },
};

export const Size: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const intl = useIntl();
    const [size, setSize] = useState<SizeType>('default');
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
          <InputNumber
            {...args}
            size={size}
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
          <InputNumber
            {...args}
            size={size}
            mode="button"
            placeholder={intl.formatMessage({ id: 'please-enter' })}
          />
        </Space>
      </Space>
    );
  },
};

export const PrecisionAndStep: Story = {
  args: {
    ...Basic.args,
    min: 0,
    max: 10,
    defaultValue: 3.5,
    step: 0.1,
    precision: 1,
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <InputNumber
        {...args}
        placeholder={intl.formatMessage({ id: 'please-enter' })}
      />
    );
  },
};

export const Formatter: Story = {
  args: {
    ...Basic.args,
    min: 0,
    max: 100_000_000,
    step: 1_000,
    prefix: <FormattedMessage id="input-currency-unit" />,
    parser: (value) => value.replace(/,/g, ''),
  },
  render: (args) => {
    const intl = useIntl();
    const [value, setValue] = useState(12000);
    const [delayValue, setDelayValue] = useState(12000);
    return (
      <Space size="large">
        <InputNumber
          {...args}
          value={value}
          onChange={setValue}
          formatter={(value) => `${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')}
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
        <InputNumber
          {...args}
          value={delayValue}
          onChange={setDelayValue}
          formatter={(value, { userTyping, input }) =>
            userTyping ? input : `${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')
          }
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
      </Space>
    );
  },
};

export const PrefixAndSuffix: Story = {
  args: {
    ...Basic.args,
    min: 0,
  },
  render: (args) => {
    const intl = useIntl();
    return (
      <Space wrap size="large">
        <InputNumber
          {...args}
          prefix={<FormattedMessage id="input-currency-unit" />}
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
        <InputNumber
          {...args}
          suffix={<FormattedMessage id="input-currency-unit" />}
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
        <InputNumber
          {...args}
          mode="button"
          prefix={<FormattedMessage id="input-currency-unit" />}
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
        <InputNumber
          {...args}
          mode="button"
          suffix={<FormattedMessage id="input-currency-unit" />}
          placeholder={intl.formatMessage({ id: 'please-enter' })}
        />
      </Space>
    );
  },
};

export const StrictMode: Story = {
  ...PrecisionAndStep,
  args: {
    strictMode: true,
    style: { width: 480 },
    mode: 'button',
    defaultValue: 1e20,
    step: 1e19,
    min: 0,
  },
};
