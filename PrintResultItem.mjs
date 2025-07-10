import runtime from "./Runtime.mjs";
let PrintResultItem2;
(class PrintResultItem {
  static {
    PrintResultItem2 = PrintResultItem;
    let tmp;
    this.PrintResultItem = class PrintResultItem1 extends globalThis.HTMLElement {
      #template;
      #templateContent;
      #shadowRoot;
      #resultElement;
      constructor() {
        super();
        let tmp1, tmp2, tmp3, tmp4, tmp5;
        tmp1 = runtime.safeCall(globalThis.document.getElementById("print-result-item"));
        this.#template = tmp1;
        this.#templateContent = this.#template.content;
        tmp2 = runtime.safeCall(this.attachShadow({
        "mode": "open"
        }));
        this.#shadowRoot = tmp2;
        tmp3 = runtime.safeCall(this.#templateContent.cloneNode(true));
        tmp4 = runtime.safeCall(this.#shadowRoot.appendChild(tmp3));
        tmp5 = runtime.safeCall(this.#shadowRoot.querySelector("#result"));
        this.#resultElement = tmp5;
      }
      setResult(result) {
        this.#resultElement.textContent = result;
        return runtime.Unit
      } 
      connectedCallback() {
        let tmp1;
        tmp1 = globalThis.console.log("connectedCallback", this.dataset);
        return this.setResult(this.dataset.result)
      }
      toString() { return "PrintResultItem"; }
    };
    tmp = globalThis.customElements.define("print-result-item", PrintResultItem.PrintResultItem);
  }
  static create(result) {
    let item, tmp;
    tmp = runtime.safeCall(globalThis.document.createElement("print-result-item"));
    item = tmp;
    item.dataset.result = result;
    return item
  }
  static toString() { return "PrintResultItem"; }
});
let PrintResultItem = PrintResultItem2; export default PrintResultItem;
