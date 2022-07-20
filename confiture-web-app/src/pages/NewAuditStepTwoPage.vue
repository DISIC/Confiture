<script lang="ts" setup>
import { ref, nextTick } from "vue";
import router from "../router";

const auditTypes = [
  { label: "Rapide", value: "fast", badge: "25 critères" },
  { label: "Complémentaire", value: "complementary", badge: "50 critères" },
  { label: "Complet", value: "full", badge: "106 critères" },
];

const pages = ref([
  {
    name: "",
    url: "",
  },
]);

const pageNameRefs = ref<HTMLInputElement[]>([]);

/**
 * Create a new page and focus its name
 */
async function addPage() {
  pages.value.push({ name: "", url: "" });
  await nextTick();
  const lastInput = pageNameRefs.value[pageNameRefs.value.length - 1];
  lastInput.focus();
}

/**
 * Delete page at index and focus previous or first name field.
 * @param {number} i
 */
async function deletePage(i: number) {
  pages.value.splice(i, 1);
  await nextTick();
  const previousInput =
    i === 0 ? pageNameRefs.value[0] : pageNameRefs.value[i - 1];
  previousInput.focus();
}

function submitStepTwo() {
  console.log("submit step 2!");
}

function toStepOne() {
  console.log("to step 1!");
  router.push({ name: "new-audit-step-one" });
}
</script>

<template>
  <div class="fr-stepper">
    <h2 class="fr-stepper__title">
      <span class="fr-stepper__state">Étape 2 sur 2</span>
      Paramètres de l’audit
    </h2>
    <div
      class="fr-stepper__steps"
      data-fr-current-step="2"
      data-fr-steps="2"
    ></div>
  </div>
  <form @submit.prevent="submitStepTwo">
    <h1 class="fr-mb-3v">📄 Informations sur l’audit</h1>
    <p class="fr-text--sm mandatory-notice">
      Sauf mention contraire, tous les champs sont obligatoires.
    </p>

    <h2 class="fr-h4">Type d’audit</h2>

    <div class="fr-form-group">
      <fieldset class="fr-fieldset">
        <legend id="radio-rich-legend" class="fr-fieldset__legend">
          Légende pour l’ensemble de champs
        </legend>
        <div class="fr-fieldset__content">
          <div
            v-for="type in auditTypes"
            :key="type.value"
            class="fr-radio-group fr-radio-rich"
          >
            <p class="fr-badge fr-badge--sm fr-badge--purple-glycine">
              {{ type.badge }}
            </p>
            <input
              :id="`audit-type-${type.value}`"
              type="radio"
              name="audit-type"
            />
            <label
              class="fr-label fr-text--xl fr-text--bold"
              :for="`audit-type-${type.value}`"
            >
              {{ type.label }}
            </label>
          </div>
        </div>
      </fieldset>
    </div>

    <div class="content">
      <h2 class="fr-h4">Les outils d’audit</h2>
      <h2 class="fr-h4">Les environnements de test</h2>
      <h2 class="fr-h4">Les pages et URL à auditer</h2>

      <fieldset
        v-for="(page, i) in pages"
        :key="i"
        class="fr-fieldset fr-mt-4w"
      >
        <div class="fr-mb-2w page-header">
          <legend>
            <h3 class="fr-text--lg fr-mb-0">Page {{ i + 1 }}</h3>
          </legend>

          <button
            class="fr-link"
            type="button"
            :disabled="pages.length === 1"
            @click="deletePage(i)"
          >
            Supprimer
          </button>
        </div>

        <div class="fr-input-group">
          <label class="fr-label" :for="`page-name-${i + 1}`">
            Nom de la page
          </label>
          <input
            :id="`page-name-${i + 1}`"
            ref="pageNameRefs"
            v-model="page.name"
            class="fr-input"
          />
        </div>

        <div class="fr-input-group">
          <label class="fr-label" :for="`page-url-${i + 1}`">
            URL de la page
          </label>
          <input
            :id="`page-url-${i + 1}`"
            v-model="page.url"
            class="fr-input"
            type="url"
            required
            placeholder="http://"
          />
        </div>
      </fieldset>
    </div>
    <button
      class="fr-link fr-mt-4w fr-link--icon-left fr-icon-add-line"
      type="button"
      @click="addPage"
    >
      Ajouter page
    </button>

    <div class="fr-mt-6w">
      <button
        class="fr-btn fr-btn--secondary fr-mr-2w"
        type="button"
        @click="toStepOne"
      >
        Précédent
      </button>
      <button class="fr-btn" type="submit">Suivant</button>
    </div>
  </form>
</template>

<style scoped>
.content {
  max-width: 792px;
}

.mandatory-notice {
  color: var(--text-mention-grey);
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
