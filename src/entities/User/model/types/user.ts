import {FeatureFlags} from '@/shared/types/featureFlags';

import {JsonSettings} from './jsonSettings';
import {UserRole} from '../consts/userConsts';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
