<template lang="pug">
  div
    h2 Examples
    <client-only placeholder="loading...">
      <Base />
      <States />
      <StateIcon />
      <NoStep />
      <Bordered />
      <FreeMode />
      <CustomMode />
    </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import States from './_states.vue';
import StateIcon from './_state_icon.vue';
import NoStep from './_no-step.vue';
import Bordered from './_bordered.vue';
import FreeMode from './_free-mode.vue';
import CustomMode from './_custom-mode.vue';

@Component({
  components: {
    Base,
    States,
    StateIcon,
    NoStep,
    Bordered,
    FreeMode,
    CustomMode,
  }
})
export default class Examples extends Vue {}
</script>
