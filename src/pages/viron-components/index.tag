viron-components-page.ComponentsPage
  .ComponentsPage__name { name }
  .ComponentsPage__container
    viron-components-page-card(each="{ component in components }" def="{ component }")

  script.
    import './card/index.tag';
    import script from './index';
    this.external(script);
