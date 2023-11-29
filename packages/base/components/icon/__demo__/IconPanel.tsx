import * as React from 'react';
import { IconGallery, IconItem } from '@storybook/blocks';
import { FormattedMessage } from 'react-intl';
import * as Icon from '..';
import { Radio } from '../..';

export default function () {
  const [iconType, setIconType] = React.useState('outlined');
  return (
    <div>
      <div style={{ display: 'flex', marginTop: 48, marginBottom: 24 }}>
        <Radio.Group type="button" value={iconType} onChange={setIconType}>
          <Radio value="outlined">
            <FormattedMessage id="icon-outlined" />
          </Radio>
          <Radio value="filled">
            <FormattedMessage id="icon-filled" />
          </Radio>
        </Radio.Group>
      </div>
      <IconGallery>
        {Object.keys(Icon)
          .filter((name) => {
            if (iconType === 'filled') {
              return name.endsWith('Fill');
            }
            return !name.endsWith('Fill');
          })
          .map((name) => (
            <IconItem name={name}>{React.createElement(Icon[name])}</IconItem>
          ))}
      </IconGallery>
    </div>
  );
}
