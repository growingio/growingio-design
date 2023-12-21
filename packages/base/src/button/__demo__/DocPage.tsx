import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Canvas } from '@storybook/blocks';
import { Typography } from '../..';
import * as ButtonStories from './index.stories';

const { Title, Paragraph } = Typography;

export default function DocPage() {
  return (
    <>
      <Title>
        <FormattedMessage id="button-docs-title" defaultMessage="按钮 Button" />
      </Title>
      <Paragraph>
        <FormattedMessage
          id="button-docs-desc"
          defaultMessage="按钮是一种命令组件，可发起一个即时操作。"
        />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage id="stories" defaultMessage="示例" />
      </Title>

      <Title heading={3} id="basic-buttons">
        <FormattedMessage
          id="button-docs-basic-title"
          defaultMessage="基本用法"
        />
      </Title>
      <Paragraph>
        <FormattedMessage
          id="button-docs-basic-desc"
          defaultMessage="按钮分为主要按钮、默认按钮、虚线按钮、线形按钮和文本按钮五种。"
        />
      </Paragraph>
      <Canvas of={ButtonStories.BasicButtons} />

      <Title heading={3} id="icon-buttons">
        <FormattedMessage
          id="button-docs-icon-title"
          defaultMessage="图标按钮"
        />
      </Title>
      <Paragraph>
        <FormattedMessage
          id="button-docs-icon-desc"
          defaultMessage="按钮可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等。"
        />
      </Paragraph>
      <Canvas of={ButtonStories.IconButtons} />

      <Title heading={3} id="button-shapes">
        <FormattedMessage
          id="button-docs-shape-title"
          defaultMessage="按钮形状"
        />
      </Title>
      <Paragraph>
        <FormattedMessage
          id="button-docs-shape-desc"
          defaultMessage="按钮有多种形状，square - 长方形 (默认)，circle - 圆形，round - 全圆角。"
        />
      </Paragraph>
      <Canvas of={ButtonStories.ButtonShapes} />

      <Title heading={3} id="button-sizes">
        <FormattedMessage
          id="button-docs-size-title"
          defaultMessage="按钮尺寸"
        />
      </Title>
      <Paragraph>
        <FormattedMessage
          id="button-docs-size-desc"
          defaultMessage="按钮分为：迷你、小、中、大，四种尺寸。高度分别为：24px/28px/32px/36px。推荐及默认为尺寸「中」。可在不同场景及不同业务需求选择适合尺寸。"
        />
      </Paragraph>
      <Canvas of={ButtonStories.ButtonSizes} />

      <Title heading={3} id="button-status">
        <FormattedMessage
          id="button-docs-status-title"
          defaultMessage="按钮状态"
        />
      </Title>
      <Paragraph>
        <FormattedMessage
          id="button-docs-status-desc"
          defaultMessage="按钮状态分为主要、默认、警告、危险和成功五种，可以与按钮类型同时生效，优先级高于按钮类型。"
        />
      </Paragraph>
      <Canvas of={ButtonStories.ButtonStatus} />

      <Title heading={3} id="disabled">
        <FormattedMessage
          id="button-docs-disabled-title"
          defaultMessage="禁用状态"
        />
      </Title>
      <Paragraph>
        <FormattedMessage
          id="button-docs-disabled-desc"
          defaultMessage="按钮的禁用状态。"
        />
      </Paragraph>
      <Canvas of={ButtonStories.DisabledButtons} />

      <Title heading={3} id="loading-buttons">
        <FormattedMessage
          id="button-docs-loading-title"
          defaultMessage="加载中"
        />
      </Title>
      <Paragraph>
        <FormattedMessage
          id="button-docs-loading-desc"
          defaultMessage="通过设置 loading 可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件。"
        />
      </Paragraph>
      <Canvas of={ButtonStories.LoadingButtons} />

      <Title heading={3} id="button-groups">
        <FormattedMessage
          id="button-docs-group-title"
          defaultMessage="组合按钮"
        />
      </Title>
      <Paragraph>
        <FormattedMessage
          id="button-docs-group-desc"
          defaultMessage="可用在同级多项操作，以按钮组合方式出现。"
        />
      </Paragraph>
      <Canvas of={ButtonStories.ButtonGroups} />

      <Title heading={3} id="long-buttons">
        <FormattedMessage id="button-docs-long-title" defaultMessage="长按钮" />
      </Title>
      <Paragraph>
        <FormattedMessage
          id="button-docs-long-desc"
          defaultMessage="按钮宽度随着容器宽度进行适配。"
        />
      </Paragraph>
      <Canvas of={ButtonStories.LongButtons} />

      <Title heading={2}>
        <FormattedMessage id="usage" defaultMessage="用法" />
      </Title>
    </>
  );
}
