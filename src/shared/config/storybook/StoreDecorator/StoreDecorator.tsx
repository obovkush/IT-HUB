import {StoryFn} from '@storybook/react';

import {StateSchema, StoreProvider} from '@/app/providers/StoreProvider';
import {articleDetailsReducer} from '@/entities/Article/testing';
import {addCommentFormReducer} from '@/features/addCommentForm/testing';
import {loginReducer} from '@/features/AuthByUsername/testing';
import {profileReducer} from '@/features/editableProfileCard/testing';
import {articleDetailsPageReducer} from '@/pages/ArticleDetailsPage/testing';
import {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
);
