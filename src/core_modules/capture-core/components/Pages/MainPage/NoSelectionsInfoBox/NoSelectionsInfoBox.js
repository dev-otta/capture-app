// @flow
import React from 'react';
import i18n from '@dhis2/d2-i18n';
import { IncompleteSelectionsMessage } from '../../../IncompleteSelectionsMessage';

export const NoSelectionsInfoBox = () => (
    <IncompleteSelectionsMessage dataTest="no-selections-info-box">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'center' }}>
            <span>
                <strong>{i18n.t('Report data')}</strong>
                {i18n.t(': choose a registering unit and program, then click the New button.')}
            </span>
            <span>
                <strong>{i18n.t('Search for something')}</strong>
                {i18n.t(': click the Search button. Choose a program to only search in that program.')}
            </span>
            <span>
                <strong>{i18n.t('See existing data')}</strong>
                {i18n.t(': choose a registering unit and program.')}
            </span>
        </div>
    </IncompleteSelectionsMessage>
);
