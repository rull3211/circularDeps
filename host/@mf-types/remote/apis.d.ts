
    export type RemoteKeys = 'remote/test';
    type PackageType<T> = T extends 'remote/test' ? typeof import('remote/test') :any;