import React, { FC, ChangeEvent } from 'react';
import { css } from 'emotion';
import { FieldSet, Field, Switch } from '@grafana/ui';
import { ConnectionSettingsProps } from './types';
import { DruidBasicAuthSettings } from './';

export const DruidAuthSettings: FC<ConnectionSettingsProps> = (props: ConnectionSettingsProps) => {
  const { options, onOptionsChange } = props;
  const { settings } = options;

  const onSettingChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'basicAuth':
        settings.basicAuth = event!.currentTarget.checked;
        break;
      case 'skipTls':
        settings.skipTls = event!.currentTarget.checked;
        break;
    }
    onOptionsChange({ ...options, settings: settings });
  };

  return (
    <>
      <FieldSet
        label="Authentication"
        className={css`
          width: 300px;
        `}
      >
        <Field horizontal label="With basic authentication" description="Enable HTTP Basic authentication">
          <Switch value={settings.basicAuth} name="basicAuth" onChange={onSettingChange} />
        </Field>
        <Field horizontal label="Skip TLS Verify" description="Skip TLS Verification">
          <Switch value={settings.skipTls} name="skipTls" onChange={onSettingChange} />
        </Field>{' '}
      </FieldSet>
      {settings.basicAuth && (
        <>
          <DruidBasicAuthSettings {...props} />
        </>
      )}
    </>
  );
};
