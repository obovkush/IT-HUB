import {Suspense, useEffect} from 'react';

import {StoryContext, StoryFn} from '@storybook/react';
import {I18nextProvider} from 'react-i18next';

import i18n from '../../i18n/i18nForTests';

// Wrap your stories in the I18nextProvider component
export const LocaleDecorator = (Story: StoryFn, context: StoryContext) => {
    const {globals: {locale}} = context;

    // When the locale global changes
    // Set the new locale in i18n
    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);
    return (
    // This catches the suspense from components not yet ready (still loading translations)
    // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        </Suspense>
    );
};
