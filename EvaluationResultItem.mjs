import runtime from "./Runtime.mjs";
let EvaluationResultItem2;
(class EvaluationResultItem {
  static {
    EvaluationResultItem2 = EvaluationResultItem;
    let tmp;
    this.EvaluationResultItem = class EvaluationResultItem1 extends globalThis.HTMLElement {
      #template;
      #templateContent;
      #shadowRoot;
      #expressionElement;
      #resultElement;
      constructor() {
        super();
        let tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
        tmp1 = runtime.safeCall(globalThis.document.getElementById("evaluation-result-item"));
        this.#template = tmp1;
        this.#templateContent = this.#template.content;
        tmp2 = runtime.safeCall(this.attachShadow({
        "mode": "open"
        }));
        this.#shadowRoot = tmp2;
        tmp3 = runtime.safeCall(this.#templateContent.cloneNode(true));
        tmp4 = runtime.safeCall(this.#shadowRoot.appendChild(tmp3));
        tmp5 = runtime.safeCall(this.#shadowRoot.querySelector("#expression"));
        this.#expressionElement = tmp5;
        tmp6 = runtime.safeCall(this.#shadowRoot.querySelector("#result"));
        this.#resultElement = tmp6;
      }
      setExpression(expression) {
        this.#expressionElement.textContent = expression;
        return runtime.Unit
      } 
      setResult(result) {
        this.#resultElement.textContent = result;
        return runtime.Unit
      } 
      connectedCallback() {
        let tmp1;
        tmp1 = this.setExpression(this.dataset.expression);
        return this.setResult(this.dataset.result)
      }
      toString() { return "EvaluationResultItem"; }
    };
    tmp = globalThis.customElements.define("evaluation-result-item", EvaluationResultItem.EvaluationResultItem);
  }
  static create(expression, result) {
    let item, tmp;
    tmp = runtime.safeCall(globalThis.document.createElement("evaluation-result-item"));
    item = tmp;
    item.dataset.expression = expression;
    item.dataset.result = result;
    return item
  }
  static toString() { return "EvaluationResultItem"; }
});
let EvaluationResultItem = EvaluationResultItem2; export default EvaluationResultItem;
