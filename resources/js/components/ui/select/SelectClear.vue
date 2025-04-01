<script setup>
import { Button } from '@/components/ui/button/index.js';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip/index.js';

import { X } from 'lucide-vue-next';

const props = defineProps({
    tooltip: {
        type: String,
        required: false,
        default: 'Clear',
    },
});

const emit = defineEmits(['click']);


</script>
<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger as-child>
                <Button variant="ghost" size="icon" class=" h-5 w-5" @click="emit('click')">
                    <X class="h-4 w-4" />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{{ tooltip }}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>
