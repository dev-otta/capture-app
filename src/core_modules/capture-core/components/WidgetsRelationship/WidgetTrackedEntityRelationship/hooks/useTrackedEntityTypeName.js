// @flow
import { useMemo } from 'react';
import { useApiDataQuery } from '../../../../utils/reactQueryHelpers';

type TrackedEntityTypeData = {
    displayName: string,
    displayFormName?: string,
};

export const useTrackedEntityTypeName = (tetId: string) => {
    const query = useMemo(() => ({
        resource: 'trackedEntityTypes',
        id: tetId,
        params: {
            fields: 'displayName,displayFormName',
        },
    }), [tetId]);

    const { data, isLoading, error } = useApiDataQuery<?TrackedEntityTypeData>(
        ['trackedEntityTypeName', tetId],
        query,
        {
            enabled: !!tetId,
            select: ({ displayName, displayFormName }: any) => ({
                displayName,
                displayFormName,
            }),
        });

    return {
        data,
        isLoading,
        error,
    };
};
