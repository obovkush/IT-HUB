import {StoryFn} from '@storybook/react';
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice';
import {profileReducer} from 'entities/Profile';
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice';
import {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsCommentsReducer} from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import {addCommentFormReducer} from 'features/addCommentForm/model/slices/addCommentFormSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
