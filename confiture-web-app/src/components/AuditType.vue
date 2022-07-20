<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  label: string;
  badge: string;
  value: string | undefined;
}>();
</script>

<template>
  <div class="fr-p-3w container">
    <p class="fr-badge fr-badge--sm fr-badge--purple-glycine fr-mb-2w">
      {{ badge }}
    </p>
    <div class="fr-radio-group">
      <input
        :id="`audit-type-${value}`"
        type="radio"
        name="audit-type"
        :value="value"
      />
      <label
        class="fr-label fr-text--xl fr-text--bold"
        :for="`audit-type-${value}`"
        >{{ label }}</label
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid var(--border-default-grey);
}
</style>
