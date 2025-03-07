// @flow
import React from 'react';
import i18n from '@dhis2/d2-i18n';
import {
    Button,
    ButtonStrip,
    DataTable,
    DataTableBody,
    DataTableCell,
    DataTableFoot,
    DataTableRow,
    Modal,
    ModalActions,
    ModalContent,
    ModalTitle,
    Pagination,
} from '@dhis2/ui';
import { ChangelogFilterBar } from '../ChangelogFilterBar';
import { ChangelogTableHeader, ChangelogTableRow } from '../ChangelogTable';
import type { ChangelogProps } from './Changelog.types';

export const ChangelogComponent = ({
    isOpen,
    close,
    records,
    pager,
    columnToSortBy,
    setColumnToSortBy,
    attributeToFilterBy,
    setAttributeToFilterBy,
    supportsChangelogV2,
    entityType,
    filterValue,
    setFilterValue,
    setPage,
    setPageSize,
    sortDirection,
    setSortDirection,
    dataItemDefinitions,
}: ChangelogProps) => (
    <Modal
        large
        hide={!isOpen}
        dataTest={'changelog-modal'}
        onClose={close}
    >
        <ModalTitle>{i18n.t('Changelog')}</ModalTitle>
        <ModalContent>
            {supportsChangelogV2 && (
                <ChangelogFilterBar
                    attributeToFilterBy={attributeToFilterBy}
                    setAttributeToFilterBy={setAttributeToFilterBy}
                    filterValue={filterValue}
                    setFilterValue={setFilterValue}
                    dataItemDefinitions={dataItemDefinitions}
                    entityType={entityType}
                />
            )}
            <DataTable dataTest={'changelog-data-table'} layout={'fixed'}>
                <ChangelogTableHeader
                    columnToSortBy={columnToSortBy}
                    setColumnToSortBy={setColumnToSortBy}
                    sortDirection={sortDirection}
                    setSortDirection={setSortDirection}
                    entityType={entityType}
                    supportsChangelogV2={supportsChangelogV2}
                />
                {records && records.length > 0 ? (
                    <DataTableBody dataTest={'changelog-data-table-body'}>
                        {records.map(record => (
                            <ChangelogTableRow key={record.reactKey} record={record} />
                        ))}
                    </DataTableBody>
                ) : (
                    <DataTableBody>
                        <DataTableRow>
                            <DataTableCell align={'center'} colSpan="4">
                                {i18n.t('No changes to display')}
                            </DataTableCell>
                        </DataTableRow>
                    </DataTableBody>
                )}
                {pager && (
                    <DataTableFoot>
                        <DataTableRow>
                            <DataTableCell colSpan="5">
                                <Pagination
                                    page={pager.page}
                                    pageSize={pager.pageSize}
                                    onPageChange={setPage}
                                    onPageSizeChange={setPageSize}
                                    isLastPage={!pager.nextPage}
                                    dataTest={'changelog-pagination'}
                                />
                            </DataTableCell>
                        </DataTableRow>
                    </DataTableFoot>
                )}
            </DataTable>
        </ModalContent>

        <ModalActions>
            <ButtonStrip>
                <Button onClick={close} secondary>
                    {i18n.t('Close')}
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
);
