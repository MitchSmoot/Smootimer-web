export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} Has already been LoadedRouterConfig. Import Core modules in AppModule only`);
    }
}
