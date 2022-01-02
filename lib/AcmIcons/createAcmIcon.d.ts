import { SVGIconProps } from '@patternfly/react-icons/dist/js/createIcon';
import { ReactNode } from 'react';
export declare function createAcmIcon(iconDefinition: {
    name?: string;
    width: number;
    height: number;
    xOffset?: number;
    yOffset?: number;
    svgPaths: ReactNode;
}): (props: SVGIconProps) => JSX.Element;
