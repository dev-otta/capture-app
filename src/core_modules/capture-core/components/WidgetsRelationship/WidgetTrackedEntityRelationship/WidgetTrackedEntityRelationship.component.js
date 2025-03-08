// @flow
import React, { useMemo } from 'react';
import i18n from '@dhis2/d2-i18n';
import type { WidgetTrackedEntityRelationshipProps } from './WidgetTrackedEntityRelationship.types';
import { RelationshipsWidget } from '../common/RelationshipsWidget';
import { RelationshipSearchEntities, useRelationships } from '../common/useRelationships';
import { NewTrackedEntityRelationship } from './NewTrackedEntityRelationship';
import { useTrackedEntityTypeName } from './hooks/useTrackedEntityTypeName';
import { useRelationshipTypes } from '../common/RelationshipsWidget/useRelationshipTypes';

export const WidgetTrackedEntityRelationship = ({
    relationshipTypes: cachedRelationshipTypes,
    teiId,
    trackedEntityTypeId,
    programId,
    orgUnitId,
    addRelationshipRenderElement,
    onLinkedRecordClick,
    onOpenAddRelationship,
    onCloseAddRelationship,
    onSelectFindMode,
    renderTrackedEntitySearch,
    renderTrackedEntityRegistration,
}: WidgetTrackedEntityRelationshipProps) => {
    const { data: relationshipTypes } = useRelationshipTypes(cachedRelationshipTypes);
    const { data: trackedEntityTypeData, isLoading: isLoadingTEType } = useTrackedEntityTypeName(trackedEntityTypeId);
    const {
        data: relationships,
        isError,
        isLoading: isLoadingRelationships,
    } = useRelationships({
        entityId: teiId,
        searchMode: RelationshipSearchEntities.TRACKED_ENTITY,
        relationshipTypes,
    });

    const isLoading = useMemo(() => isLoadingRelationships || isLoadingTEType,
        [isLoadingRelationships, isLoadingTEType],
    );

    // Extract the fallback logic for trackedEntityTypeName
    const trackedEntityTypeDisplayName = useMemo(() => {
        if (!trackedEntityTypeData) return '';
        return trackedEntityTypeData.displayFormName || trackedEntityTypeData.displayName || '';
    }, [trackedEntityTypeData]);

    if (isError) {
        return (
            <div>
                {i18n.t('Something went wrong while loading relationships. Please try again later.')}
            </div>
        );
    }

    if (!relationshipTypes?.length) {
        return null;
    }

    return (
        <RelationshipsWidget
            title={i18n.t('{{trackedEntityTypeName}} relationships', {
                trackedEntityTypeName: trackedEntityTypeDisplayName,
                interpolation: { escapeValue: false },
            })}
            isLoading={isLoading}
            relationships={relationships}
            relationshipTypes={relationshipTypes}
            sourceId={teiId}
            onLinkedRecordClick={onLinkedRecordClick}
        >
            <NewTrackedEntityRelationship
                teiId={teiId}
                renderElement={addRelationshipRenderElement}
                trackedEntityTypeName={trackedEntityTypeData?.displayName || ''}
                relationshipTypes={relationshipTypes}
                trackedEntityTypeId={trackedEntityTypeId}
                programId={programId}
                orgUnitId={orgUnitId}
                onOpenAddRelationship={onOpenAddRelationship}
                onCloseAddRelationship={onCloseAddRelationship}
                onSelectFindMode={onSelectFindMode}
                renderTrackedEntitySearch={renderTrackedEntitySearch}
                renderTrackedEntityRegistration={renderTrackedEntityRegistration}
            />
        </RelationshipsWidget>
    );
};
