import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {USER_LOCALSTORAGE_KEY} from '@/shared/const/localstorage';
import {setFeatureFlags} from '@/shared/lib/features';

import {saveJsonSettings} from '../services/saveJsonSettings';
import {JsonSettings} from '../types/jsonSettings';
import {UserSchema, User} from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(saveJsonSettings.fulfilled, (state, {payload}: PayloadAction<JsonSettings>) => {
            if (state.authData) {
                state.authData.jsonSettings = payload;
            }
        });
    },
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                const json = JSON.parse(user) as User;
                state.authData = json;
                setFeatureFlags(json.features);
            }
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

// Action creators are generated for each case reducer function
export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
