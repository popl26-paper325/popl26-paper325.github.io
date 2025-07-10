import runtime from "./Runtime.mjs";
import Iter from "./Iter.mjs";
import XML from "./XML.mjs";
import Option from "./Option.mjs";
let ErrorDisplay2;
(class ErrorDisplay {
  static #errorDisplayStyle;
  static {
    ErrorDisplay2 = ErrorDisplay;
    let tmp;
    ErrorDisplay.#errorDisplayStyle = "\n.error-container {\n  background-color: #fdd;\n  padding: 0.375rem 0.75rem 0.5rem;\n  font-family: var(--monospace);\n  color: #991b1bff;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.error-message {\n  margin: 0;\n  font-weight: bold;\n  font-size: 1.125rem;\n}\n.stack-trace {\n  font-size: 0.875rem;\n  margin: 0;\n  list-style-type: none;\n  padding-left: 0.5rem;\n}";
    this.ErrorDisplay = class ErrorDisplay1 extends globalThis.HTMLElement {
      #_error;
      constructor() {
        super();
        let tmp1;
        tmp1 = runtime.safeCall(this.attachShadow({
        "mode": "open"
        }));
        this.#_error = Option.None;
      }
      connectedCallback() {
        return runtime.safeCall(this.render())
      } 
      setError(value) {
        let tmp1;
        tmp1 = runtime.safeCall(Option.Some(value));
        this.#_error = tmp1;
        return runtime.safeCall(this.render())
      } 
      render() {
        let scrut, param0, error, stackLines, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, lambda;
        scrut = this.#_error;
        if (scrut instanceof Option.Some.class) {
          param0 = scrut.value;
          error = param0;
          tmp1 = runtime.safeCall(error.stack.split("\n"));
          stackLines = tmp1;
          scrut1 = runtime.safeCall(stackLines[0].startsWith(error.name));
          if (scrut1 === true) {
            tmp2 = runtime.safeCall(stackLines.shift());
          } else {
            tmp2 = runtime.Unit;
          }
          tmp3 = XML.elem("div", {
          "class": "error-container"
          });
          tmp4 = XML.elem("h3", {
          "class": "error-message"
          });
          tmp5 = error.name + ": ";
          tmp6 = tmp5 + error.message;
          tmp7 = runtime.safeCall(tmp4(tmp6));
          tmp8 = XML.elem("ul", {
          "class": "stack-trace"
          });
          lambda = (undefined, function (line) {
            let tmp16, tmp17;
            tmp16 = XML.elem("li");
            tmp17 = runtime.safeCall(line.trim());
            return runtime.safeCall(tmp16(tmp17))
          });
          tmp9 = lambda;
          tmp10 = Iter.mapping(stackLines, tmp9);
          tmp11 = Iter.joined(tmp10, "");
          tmp12 = runtime.safeCall(tmp8(tmp11));
          tmp13 = XML.elem("style");
          tmp14 = runtime.safeCall(tmp13(ErrorDisplay.#errorDisplayStyle));
          tmp15 = runtime.safeCall(tmp3(tmp7, tmp12, tmp14));
          this.shadowRoot.innerHTML = tmp15;
          return runtime.Unit
        } else {
          return runtime.Unit
        }
      }
      toString() { return "ErrorDisplay"; }
    };
    tmp = globalThis.customElements.define("error-display", ErrorDisplay.ErrorDisplay);
  }
  static create(error) {
    let errorDisplay, tmp;
    tmp = runtime.safeCall(globalThis.document.createElement("error-display"));
    errorDisplay = tmp;
    errorDisplay.error = error;
    return errorDisplay
  }
  static toString() { return "ErrorDisplay"; }
});
let ErrorDisplay = ErrorDisplay2; export default ErrorDisplay;
