<template lang="pug">
  <ComponentExample title="Base with back link and subtitle" id="base_with_back_link_subtitle" :tabs="exampleTabs" padding="0">
    chi-main(backlink='Back link' title='Page title' subtitle='Page subtitle' slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      div(slot="footer")
        div(v-html="footers.lumen" v-if="['lumen', 'portal'].includes($store.state.themes.theme)")
        div(v-html="footers.centurylink" v-if="$store.state.themes.theme === 'centurylink'")
        div(v-html="footers.brightspeed" v-if="$store.state.themes.theme === 'brightspeed'")

    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Use the <code>subtitle=""</code> attribute to display a subtitle next to the title of the application layout.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  generateAllExampleFooters,
  generateExampleFooter
} from '~/pages/templates-wip/app-layout/examples/_footer.vue';

declare const chi: any;

@Component({
  data: () => {
    return {
      footers: generateAllExampleFooters('back-link-subtitle-language-dropdown-button'),
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: '',
        htmlblueprint: ''
      }
    };
  }
})
export default class BackLinkSubtitle extends Vue {
  mounted() {
    const languageDropdown = document.getElementById('back-link-subtitle-language-dropdown-button');

    if (languageDropdown) {
      chi.dropdown(languageDropdown);
    }

    this._setCodeSnippets();
  }

  updated() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    const footerTemplate = generateExampleFooter(this.$store.state.themes.theme);

    this.$data.codeSnippets.webcomponent = `<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <!-- Page content goes here -->
  ${footerTemplate}
</chi-main>

${this.$store.state.themes.theme === 'centurylink' ? '' : `<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`}`;
    this.$data.codeSnippets.htmlblueprint = `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs" aria-hidden="true"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page title</div>
        <div class="chi-main__title-subheading">Page subtitle</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${footerTemplate}
</div>

${this.$store.state.themes.theme === 'centurylink' ? '' : `<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`}`;
  }
}
</script>
