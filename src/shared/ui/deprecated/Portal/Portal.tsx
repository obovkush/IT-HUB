import {ReactNode} from 'react';

import {createPortal} from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}
/**
 * Устарел, новые компоненты в каталоге redesigned
 * @deprecated
 */
export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
