<!-- components/CharacterCard.vue -->
<template>
    <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col">
        <!-- Header -->
        <div class="text-center">
            <p class="text-gray-500 text-sm">{{ modelValue.role }}</p>
            <h4 class="text-2xl font-bold text-gray-800">{{ modelValue.name }}</h4>
        </div>

        <!-- Traits -->
        <div class="characters__traits mt-3 space-y-1">
            <p>
                <strong>外在風格:</strong>
                <template v-for="(k, idx) in outerCombo" :key="'outer-'+idx">
                    <span class="font-bold" :style="{ color: DISC_MAP[k].color }">
                        {{ DISC_MAP[k].label }}
                    </span>
                    <span v-if="idx < outerCombo.length - 1"> / </span>
                </template>
            </p>

            <p>
                <strong>內在風格:</strong>
                <template v-for="(k, idx) in innerCombo" :key="'inner-'+idx">
                    <span class="font-bold" :style="{ color: DISC_MAP[k].color }">
                        {{ DISC_MAP[k].label }}
                    </span>
                    <span v-if="idx < innerCombo.length - 1"> / </span>
                </template>
            </p>
        </div>

        <!-- Description -->
        <p class="text-gray-600 text-center flex-grow mt-3">
            <slot name="description">
                {{ modelValue.description }}
            </slot>
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ICharacter } from '~/types/discCard';

export type DISCKey = 'D' | 'I' | 'S' | 'C'

const props = defineProps<{
    /** v-model */
    modelValue: ICharacter
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', v: ICharacter): void
}>()

/** 內建 DISC 標籤與顏色 */
const DISC_MAP: Record<DISCKey, { label: string; color: string }> = {
    D: { label: '支配型', color: 'rgb(34, 197, 94)' },   // green-500
    I: { label: '影響型', color: 'rgb(249, 115, 22)' },   // orange-500
    S: { label: '穩健型', color: 'rgb(59, 130, 246)' },   // blue-500
    C: { label: '謹慎型', color: 'rgb(234, 179, 8)' }     // amber-500
}

/** "CD" → ["C","D"]; 過濾非 D/I/S/C、去重、保留輸入順序；若為空給預設 S */
function normalizeCombo(input: string): DISCKey[] {
    const letters = (input ?? '')
        .toUpperCase()
        .replace(/\s+/g, '')
        .split('')
    const out: DISCKey[] = []
    for (const ch of letters) {
        if ((['D', 'I', 'S', 'C'] as const).includes(ch as DISCKey) && !out.includes(ch as DISCKey)) {
            out.push(ch as DISCKey)
        }
    }
    return out.length ? out : (['S'] as DISCKey[])
}

const outerCombo = computed(() => normalizeCombo(props.modelValue.outer))
const innerCombo = computed(() => normalizeCombo(props.modelValue.inner))

/* 若未來要在卡片內編輯並回寫：
function updateTitle(next: string) {
  emit('update:modelValue', { ...props.modelValue, name: next })
}
*/
</script>

<style lang="scss" scoped>
.characters__traits {
    margin: 1rem 0px;
    text-align: center;

    strong {
        margin-right: 4px;
    }
}
</style>
