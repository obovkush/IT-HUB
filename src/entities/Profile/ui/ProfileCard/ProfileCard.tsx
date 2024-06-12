import {ToggleFeatures} from '@/shared/lib/features';

import {ProfileCardProps} from '../../model/types/profileCard';
import {ProfileCardDeprecated, ProfileCardDeprecatedError, ProfileCardDeprecatedLoader} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {ProfileCardRedesigned, ProfileCardRedesignedError, ProfileCardRedesignedSkeleton} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export const ProfileCard = (props: ProfileCardProps) => {
    const {isLoading, error} = props;

    if (isLoading) {
        return <ToggleFeatures feature='isAppRedesigned' on={<ProfileCardRedesignedSkeleton />} off={<ProfileCardDeprecatedLoader />} />;
    }

    if (error) {
        return <ToggleFeatures feature='isAppRedesigned' on={<ProfileCardRedesignedError />} off={<ProfileCardDeprecatedError />} />;
    }

    return <ToggleFeatures feature='isAppRedesigned' on={<ProfileCardRedesigned {...props} />} off={<ProfileCardDeprecated {...props} />} />;
};
