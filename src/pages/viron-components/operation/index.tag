viron-components-page-operation.ComponentsPage_Operation
  .ComponentsPage_Operation__head
    .ComponentsPage_Operation__title { title }
    .ComponentsPage_Operation__cancel(onTap="{ handleCancelTap }") キャンセル
  .ComponentsPage_Operation__body
    viron-parameters(val="{ val }" parameterObjects="{ opts.operationObject.parameters }" primary="{ opts.primary }" onChange="{ handleParametersChange }")
  .ComponentsPage_Operation__tail
    .ComponentsPage_Operation__submit(class="ComponentsPage_Operation__submit--{ submitModifier }" onTap="{ handleSubmitTap }") { submitLabel }

  script.
    import '../../../components/viron-parameters/index.tag';
    import script from './index';
    this.external(script);
