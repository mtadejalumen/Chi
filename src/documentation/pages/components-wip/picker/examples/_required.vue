<template lang="pug">
  <ComponentExample titleSize="h4" title="Required" id="required" :tabs="exampleTabs" padding="-p--4">
    p.-text(slot="example-description")
      | Use the <code>required</code> boolean attribute to indicate which pickers must be completed before submitting a form.
    fieldset(slot="example")
      legend.chi-label
        | Select options
        abbr.chi-label__required(aria-label="Required field") *
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-mre`, id=`unique-id-mre${i}`, required=(i === 1))
          label(for=`unique-id-mre${i}`)
            = 'Option ' + `${i}`
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">
    Select options
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mre" type="checkbox" id="unique-id-mre1" required>
    <label for="unique-id-mre1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mre" type="checkbox" id="unique-id-mre2">
    <label for="unique-id-mre2">Option 2</label>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Required extends Vue {}
</script>
