import {Flex, FlexProps} from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>
/**
 * Устарел, новые компоненты в каталоге redesigned
 * @deprecated
 */
export const HStack = (props: HStackProps) => (
    <Flex direction="row" {...props} />
);
