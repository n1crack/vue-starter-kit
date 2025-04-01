import type { route as routeFn } from 'ziggy-js';
import { RouteParams, Router } from 'ziggy-js';

declare global {
    const route: typeof routeFn;

    function route(): Router;
    function route(name: string, params?: RouteParams<typeof name> | undefined, absolute?: boolean): Router | string;
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        route: routeFn;
    }
}
