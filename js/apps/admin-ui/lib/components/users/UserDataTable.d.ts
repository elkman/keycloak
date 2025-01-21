export type UserFilter = {
    exact: boolean;
    userAttribute: UserAttribute[];
};
export type UserAttribute = {
    name: string;
    displayName: string;
    value: string;
};
export declare function UserDataTable(): import("react/jsx-runtime").JSX.Element;
