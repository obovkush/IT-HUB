import {StoryFn} from '@storybook/react';
import {StateSchema, StoreProvider} from '@/app/providers/StoreProvider';
// eslint-disable-next-line import-module/public-api-imports
import {loginReducer} from '@/features/AuthByUsername/model/slice/loginSlice';
// eslint-disable-next-line import-module/public-api-imports
import {profileReducer} from '@/features/editableProfileCard/model/slice/profileSlice';
// eslint-disable-next-line import-module/public-api-imports
import {articleDetailsReducer} from '@/entities/Article/model/slice/articleDetailsSlice';
import {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line import-module/public-api-imports
import {addCommentFormReducer} from '@/features/addCommentForm/model/slices/addCommentFormSlice';
// eslint-disable-next-line import-module/public-api-imports
import {articleDetailsPageReducer} from '@/pages/ArticleDetailsPage/model/slices';

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
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
