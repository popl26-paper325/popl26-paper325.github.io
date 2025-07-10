import runtime from "./Runtime.mjs";
import utils from "./utils.mjs";
let ResultItem1;
(class ResultItem {
  static #stackTraceHead;
  static {
    ResultItem1 = ResultItem;
    let tmp, tmp1;
    this.ErrorResultItem = class ErrorResultItem extends globalThis.HTMLElement {
      #template;
      #templateContent;
      #shadowRoot;
      #errorTypeElement;
      #errorMessageElement;
      #stackTraceElement;
      constructor() {
        super();
        let tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
        tmp2 = runtime.safeCall(globalThis.document.getElementById("error-result-item"));
        this.#template = tmp2;
        this.#templateContent = this.#template.content;
        tmp3 = runtime.safeCall(this.attachShadow({
        "mode": "open"
        }));
        this.#shadowRoot = tmp3;
        tmp4 = runtime.safeCall(this.#templateContent.cloneNode(true));
        tmp5 = runtime.safeCall(this.#shadowRoot.appendChild(tmp4));
        tmp6 = runtime.safeCall(this.#shadowRoot.querySelector("#error-type"));
        this.#errorTypeElement = tmp6;
        tmp7 = runtime.safeCall(this.#shadowRoot.querySelector("#error-message"));
        this.#errorMessageElement = tmp7;
        tmp8 = runtime.safeCall(this.#shadowRoot.querySelector("#stack-trace"));
        this.#stackTraceElement = tmp8;
      }
      setErrorType(errorType) {
        this.#errorTypeElement.textContent = errorType;
        return runtime.Unit
      } 
      setErrorMessage(errorMessage) {
        this.#errorMessageElement.textContent = errorMessage;
        return runtime.Unit
      } 
      setStackTrace(stackTrace) {
        let tmp2, tmp3, lambda;
        tmp2 = runtime.safeCall(stackTrace.split("\n"));
        const this$ErrorResultItem = this;
        lambda = (undefined, function (line, _, _1) {
          let li, pre, code, tmp4, tmp5, tmp6, tmp7, tmp8;
          tmp4 = runtime.safeCall(globalThis.document.createElement("li"));
          li = tmp4;
          tmp5 = runtime.safeCall(globalThis.document.createElement("pre"));
          pre = tmp5;
          tmp6 = runtime.safeCall(globalThis.document.createElement("code"));
          code = tmp6;
          code.textContent = line;
          tmp7 = runtime.safeCall(pre.appendChild(code));
          tmp8 = runtime.safeCall(li.appendChild(pre));
          return runtime.safeCall(this$ErrorResultItem.#stackTraceElement.appendChild(li))
        });
        tmp3 = lambda;
        return runtime.safeCall(tmp2.forEach(tmp3))
      } 
      connectedCallback() {
        let tmp2, tmp3, tmp4;
        tmp2 = globalThis.console.log("connectedCallback", this.dataset);
        tmp3 = this.setErrorType(this.dataset.errorType);
        tmp4 = this.setErrorMessage(this.dataset.errorMessage);
        return this.setStackTrace(this.dataset.stackTrace)
      }
      toString() { return "ErrorResultItem"; }
    };
    tmp = globalThis.customElements.define("error-result-item", ResultItem.ErrorResultItem);
    tmp1 = new globalThis.RegExp("^\\w+: .+$");
    ResultItem.#stackTraceHead = tmp1;
  }
  static error(errorType, errorMessage, stackTrace) {
    let item, tmp, tmp1, tmp2;
    tmp = runtime.safeCall(globalThis.document.createElement("error-result-item"));
    item = tmp;
    item.dataset.errorType = errorType;
    item.dataset.errorMessage = errorMessage;
    tmp1 = utils.parseStackTrace(stackTrace);
    tmp2 = runtime.safeCall(tmp1.join("\n"));
    item.dataset.stackTrace = tmp2;
    return item
  }
  static toString() { return "ResultItem"; }
});
let ResultItem = ResultItem1; export default ResultItem;
