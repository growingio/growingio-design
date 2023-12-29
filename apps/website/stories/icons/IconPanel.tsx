import React from 'react';
import { IconGallery, IconItem } from '@storybook/blocks';
import { FormattedMessage, useIntl } from 'react-intl';
import * as Icon from '@arco-iconbox/react-growingio';
import { Radio } from 'growingio-design/src';
import {
  GENERAL_ICONS,
  USER_ICONS,
  DATA_ICONS,
  DIRECTION_ICONS,
  TIPS_ICONS,
  PLATFORM_DEVICE_ICONS,
  EDIT_ICONS,
  MEDIA_ICONS,
  FILLED_ICONS,
} from './Icons';

const renderIcons = (icons: string[], title: string) => (
  <div
    style={{
      marginTop: 40,
      border: '1px solid var(--color-border)',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        padding: 12,
        fontSize: 16,
        fontWeight: 500,
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg-2)',
      }}
    >
      {title}
    </div>
    <div style={{ padding: '12px 12px 0px 12px' }}>
      <IconGallery>
        {icons.map((name) => {
          const iconElement = `Icon${name}`;
          if (!Icon[iconElement]) {
            console.info('[*] icon: ', name);
          }
          return (
            <IconItem key={name} name={name}>
              {React.createElement(Icon[iconElement])}
            </IconItem>
          );
        })}
      </IconGallery>
    </div>
  </div>
);

export default function () {
  const [iconType, setIconType] = React.useState('outlined');
  const { formatMessage } = useIntl();

  const content = () => {
    if (iconType === 'filled') {
      return (
        <div>
          {renderIcons(
            FILLED_ICONS,
            formatMessage(
              { defaultMessage: '面性图标（{count}）' },
              { count: FILLED_ICONS.length },
            ),
          )}
        </div>
      );
    }
    return (
      <div>
        <div>
          {renderIcons(
            GENERAL_ICONS,
            formatMessage(
              { defaultMessage: '通用类图标（{count}）' },
              { count: GENERAL_ICONS.length },
            ),
          )}
        </div>
        <div>
          {renderIcons(
            USER_ICONS,
            formatMessage(
              { defaultMessage: '用户图标（{count}）' },
              { count: USER_ICONS.length },
            ),
          )}
        </div>
        <div>
          {renderIcons(
            DATA_ICONS,
            formatMessage(
              { defaultMessage: '数据、业务图标（{count}）' },
              { count: DATA_ICONS.length },
            ),
          )}
        </div>
        <div>
          {renderIcons(
            DIRECTION_ICONS,
            formatMessage(
              { defaultMessage: '方向指示图标（{count}）' },
              { count: DIRECTION_ICONS.length },
            ),
          )}
        </div>
        <div>
          {renderIcons(
            TIPS_ICONS,
            formatMessage(
              { defaultMessage: '提示建议类图标（{count}）' },
              { count: TIPS_ICONS.length },
            ),
          )}
        </div>
        <div>
          {renderIcons(
            PLATFORM_DEVICE_ICONS,
            formatMessage(
              { defaultMessage: '平台和设备图标（{count}）' },
              { count: PLATFORM_DEVICE_ICONS.length },
            ),
          )}
        </div>
        <div>
          {renderIcons(
            EDIT_ICONS,
            formatMessage(
              { defaultMessage: '编辑类图标（{count}）' },
              { count: EDIT_ICONS.length },
            ),
          )}
        </div>
        <div>
          {renderIcons(
            MEDIA_ICONS,
            formatMessage(
              { defaultMessage: '影音类图标（{count}）' },
              { count: MEDIA_ICONS.length },
            ),
          )}
        </div>
      </div>
    );
  };
  return (
    <>
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <Radio.Group type="button" value={iconType} onChange={setIconType}>
          <Radio value="outlined">
            <FormattedMessage defaultMessage="线性图标" />
          </Radio>
          <Radio value="filled">
            <FormattedMessage defaultMessage="面性图标" />
          </Radio>
        </Radio.Group>
      </div>
      {content()}
    </>
  );
}
