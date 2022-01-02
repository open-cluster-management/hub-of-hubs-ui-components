/// <reference types="react" />
import { SVGIconProps } from '@patternfly/react-icons/dist/js/createIcon';
export declare enum AcmIconVariant {
    template = "template",
    visibilityon = "visibilityon",
    visibilityoff = "visibilityoff",
    brokenlink = "brokenlink",
    redhat = "redhat",
    aws = "aws",
    gcp = "gcp",
    azure = "azure",
    ocp = "ocp",
    ibm = "ibm",
    ibmlogo = "ibmlogo",
    baremetal = "baremetal",
    vmware = "vmware",
    cloud = "cloud",
    openCurrentTab = "opencurrenttab",
    openNewTab = "opennewtab",
    ansible = "ansible",
    hybrid = "hybrid"
}
export declare function AcmIcon(props: {
    icon: AcmIconVariant;
} & SVGIconProps): JSX.Element;
