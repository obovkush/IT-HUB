import {StoryFn} from '@storybook/react';
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice';
import {profileReducer} from 'features/editableProfileCard/model/slice/profileSlice';
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice';
import {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {addCommentFormReducer} from 'features/addCommentForm/model/slices/addCommentFormSlice';
import {articleDetailsPageReducer} from 'pages/ArticleDetailsPage/model/slices';

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
