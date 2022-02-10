/// <reference types="react" />
import { PageProps } from '@patternfly/react-core';
export declare type HubOfHubsHeaderProps = {
    route: HubOfHubsRoute;
} & Omit<PageProps, 'sidebar'> & Omit<PageProps, 'header'>;
export declare enum HubOfHubsRoute {
    Welcome = "/multicloud/welcome",
    Clusters = "/multicloud/hierarchy-clusters",
    Governance = "/multicloud/policies",
    Credentials = "/multicloud/credentials",
    Automation = "/multicloud/ansible-automations"
}
export declare function HubOfHubsHeader(props: HubOfHubsHeaderProps): JSX.Element;
