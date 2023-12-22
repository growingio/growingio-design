import React from 'react';
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl';
import { Canvas, Unstyled, Source } from '@storybook/blocks';
import PropsTable, {
  type PropsTableData,
} from 'website/components/props-table';
import { Typography } from '../..';
import * as EmptyStories from './index.stories';

const { Title, Paragraph } = Typography;

function DocPage({ intl: { formatMessage } }: { intl: IntlShape }) {
  const data: PropsTableData[] = [
    {
      name: 'imgSrc',
      description: formatMessage({ defaultMessage: '将图标替换为图片。' }),
      type: 'string',
    },
    {
      name: 'description',
      description: formatMessage({ defaultMessage: '显示文案。' }),
      type: 'ReactNode',
    },
    {
      name: 'icon',
      description: formatMessage({ defaultMessage: '自定义显示图案。' }),
      type: 'ReactNode',
    },
    {
      name: 'size',
      description: formatMessage({ defaultMessage: '组件尺寸。' }),
      type: "'small' | 'large'",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage id="empty-docs-title" />
      </Title>
      <Paragraph>
        <FormattedMessage id="empty-docs-desc" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>
      <Title id="basic" heading={3}>
        <FormattedMessage id="empty-docs-basic-title" />
      </Title>
      <Paragraph>
        <FormattedMessage id="empty-docs-basic-desc" />
      </Paragraph>
      <Canvas of={EmptyStories.Basic} />

      <Title id="icon-desc" heading={3}>
        <FormattedMessage id="empty-docs-icon-desc-title" />
      </Title>
      <Paragraph>
        <FormattedMessage id="empty-docs-icon-desc-desc" />
      </Paragraph>
      <Canvas of={EmptyStories.IconDesc} />

      <Title id="image" heading={3}>
        <FormattedMessage id="empty-docs-image-title" />
      </Title>
      <Paragraph>
        <FormattedMessage id="empty-docs-image-desc" />
      </Paragraph>
      <Canvas of={EmptyStories.Image} />

      <Title id="sizes" heading={3}>
        <FormattedMessage id="empty-docs-sizes-title" />
      </Title>
      <Paragraph>
        <FormattedMessage id="empty-docs-sizes-desc" />
      </Paragraph>
      <Canvas of={EmptyStories.Sizes} />

      <Title id="styles" heading={3}>
        <FormattedMessage id="empty-docs-styles-title" />
      </Title>
      <Canvas of={EmptyStories.Styles} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source
        code={`import { Empty, type EmptyProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="button-props" heading={3}>
        EmptyProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
