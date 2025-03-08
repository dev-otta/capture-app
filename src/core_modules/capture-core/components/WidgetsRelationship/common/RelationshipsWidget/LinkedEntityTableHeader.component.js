// @flow
import React from 'react';
import {
    DataTableHead,
    DataTableRow,
    DataTableColumnHeader,
} from '@dhis2/ui';
import type { Props } from './linkedEntityTableHeader.types';

export const LinkedEntityTableHeader = ({ columns, context }: Props) => (
    <DataTableHead>
        <DataTableRow>
            {
                columns
                    .map(({ id, displayName, displayFormName }) => (
                        <DataTableColumnHeader
                            key={id}
                        >
                            {displayFormName || displayName}
                        </DataTableColumnHeader>
                    ))
            }
            {context.display.showDeleteButton && (
                <DataTableColumnHeader />
            )}
        </DataTableRow>
    </DataTableHead>
);
