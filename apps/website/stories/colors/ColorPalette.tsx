import React from 'react';
import { ColorPalette, ColorItem, Title } from '@storybook/blocks';
import { useIntl } from 'react-intl';
import colors from 'growingio-design/src/_core/colors';

export default function () {
  const { formatMessage } = useIntl();

  const colorMessages = {
    gioorange: formatMessage({
      id: 'color-gioorange',
      defaultMessage: 'GrowingIO 橙',
    }),
    primary: formatMessage({
      id: 'color-primary',
      defaultMessage: 'GrowingIO 蓝',
    }),
    blue: formatMessage({
      id: 'color-blue',
      defaultMessage: '蓝色',
    }),
    green: formatMessage({
      id: 'color-green',
      defaultMessage: '绿色',
    }),
    orange: formatMessage({
      id: 'color-orange',
      defaultMessage: '橙色',
    }),
    gold: formatMessage({
      id: 'color-gold',
      defaultMessage: '金色',
    }),
    skyblue: formatMessage({
      id: 'color-skyblue',
      defaultMessage: '天空蓝',
    }),
    purple: formatMessage({
      id: 'color-purple',
      defaultMessage: '紫色',
    }),
    magenta: formatMessage({
      id: 'color-magenta',
      defaultMessage: '品红',
    }),
    red: formatMessage({
      id: 'color-red',
      defaultMessage: '红色',
    }),
    lime: formatMessage({
      id: 'color-lime',
      defaultMessage: '新生绿',
    }),
    cyan: formatMessage({
      id: 'color-cyan',
      defaultMessage: '青色',
    }),
    gray: formatMessage({
      id: 'color-gray',
      defaultMessage: '灰色',
    }),
  };

  return (
    <>
      <Title>
        {formatMessage({
          id: 'color-docs-title',
          defaultMessage: '颜色 Colors',
        })}
      </Title>
      <p>
        {formatMessage({
          id: 'color-docs-desc',
          defaultMessage:
            '组件库内置了一套基于动态梯度的色彩算法。色板中包含了 13 个常见的颜色，每个颜色分为 10 个梯度。通常，我们把 6 号色作为色板中的主色。',
        })}
      </p>
      <ColorPalette>
        {colors.map((color) => {
          return (
            <>
              <ColorItem
                title={colorMessages[color]}
                subtitle={color}
                colors={{ [`${color}`]: `rgb(var(--${color}-6))` }}
              />
              <ColorItem
                title=""
                subtitle=""
                colors={Array.from(Array(5).keys()).reduce((acc, cur) => {
                  const i = cur + 1;
                  acc[`${color}-${i}`] = `rgb(var(--${color}-${i}))`;
                  return acc;
                }, {})}
              />
              <ColorItem
                title=""
                subtitle=""
                colors={Array.from(Array(5).keys()).reduce((acc, cur) => {
                  const i = cur + 6;
                  acc[`${color}-${i}`] = `rgb(var(--${color}-${i}))`;
                  return acc;
                }, {})}
              />
            </>
          );
        })}
      </ColorPalette>
    </>
  );
}
