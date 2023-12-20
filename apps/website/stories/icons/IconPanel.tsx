import React from 'react';
import { IconGallery, IconItem } from '@storybook/blocks';
import { FormattedMessage } from 'react-intl';
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

const renderIcons = (icons: string[], messageId: string) => (
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
      <FormattedMessage id={messageId} values={{ count: icons.length }} />
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

  const content = () => {
    if (iconType === 'filled') {
      return <div>{renderIcons(FILLED_ICONS, 'icon-filled-all')}</div>;
    }
    return (
      <div>
        <div>{renderIcons(GENERAL_ICONS, 'icon-outlined-general')}</div>
        <div>{renderIcons(USER_ICONS, 'icon-outlined-user')}</div>
        <div>{renderIcons(DATA_ICONS, 'icon-outlined-data')}</div>
        <div>{renderIcons(DIRECTION_ICONS, 'icon-outlined-direction')}</div>
        <div>{renderIcons(TIPS_ICONS, 'icon-outlined-tips')}</div>
        <div>
          {renderIcons(PLATFORM_DEVICE_ICONS, 'icon-outlined-platform-device')}
        </div>
        <div>{renderIcons(EDIT_ICONS, 'icon-outlined-edit')}</div>
        <div>{renderIcons(MEDIA_ICONS, 'icon-outlined-media')}</div>
      </div>
    );
  };
  return (
    <div>
      <div style={{ display: 'flex', marginTop: 48, marginBottom: 24 }}>
        <Radio.Group type="button" value={iconType} onChange={setIconType}>
          <Radio value="outlined">
            <FormattedMessage id="icon-outlined" defaultMessage="线性图标" />
          </Radio>
          <Radio value="filled">
            <FormattedMessage id="icon-filled" defaultMessage="面性图标" />
          </Radio>
        </Radio.Group>
      </div>
      {content()}
    </div>
  );
}
