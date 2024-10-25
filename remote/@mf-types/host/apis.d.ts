
    export type RemoteKeys = 'host/test';
    type PackageType<T> = T extends 'host/test' ? typeof import('host/test') :any;