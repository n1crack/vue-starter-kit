<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <main
    :class="cn(
      'relative flex min-h-svh w-full flex-col bg-background ',
      'md:w-[calc(100%-var(--sidebar-width))] group-has-data-[collapsible=icon]/sidebar-wrapper:w-[calc(100%-var(--sidebar-width-icon))] group-has-data-[collapsible=offcanvas]/sidebar-wrapper:w-full',
      'peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm',
      props.class,
    )"
  >
    <slot />
  </main>
</template>
