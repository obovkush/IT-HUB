import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};
// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>,
    // eslint-disable-next-line react/display-name
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,) => (StoryComponent: StoryFn) => (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);


// import { Story } from '@storybook/react';
// import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
// import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';




// export const StoreDecorator = (
//     state: DeepPartial<StateSchema>,
//     asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
// ) => (StoryComponent: Story) => (
//     <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
//         <StoryComponent />
//     </StoreProvider>
// );
