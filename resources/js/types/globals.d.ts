import type { route as routeFn } from 'ziggy-js';
import { Page, PageProps as InertiaPageProps } from '@inertiajs/core';
import { SharedData as AppPageProps } from './';

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {};
}

declare global {
    const $page: Page;
    const route: typeof routeFn;
}

// Extend ImportMeta interface for Vite...
declare module 'vite/client' {
    interface ImportMetaEnv {
        readonly VITE_APP_NAME: string;

        [key: string]: string | boolean | undefined;
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
        readonly glob: <T>(pattern: string) => Record<string, () => Promise<T>>;
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $page: Page;
    }
}

