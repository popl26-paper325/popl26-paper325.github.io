import runtime from "./Runtime.mjs";
import utils from "./utils.mjs";
import Predef from "./Predef.mjs";
let Tabs1;
(class Tabs {
  static {
    Tabs1 = Tabs;
    let tmp;
    tmp = runtime.safeCall(globalThis.document.querySelector(".tabs#output"));
    this.tabs = tmp;
    (class parser {
      static {
        Tabs.parser = parser;
        let tmp1, tmp2, tmp3, tmp4;
        tmp1 = runtime.safeCall(globalThis.document.querySelector("#tab-parser"));
        this.el = tmp1;
        tmp2 = runtime.safeCall(parser.el.querySelector("code.traces"));
        this.traces = tmp2;
        tmp3 = runtime.safeCall(parser.el.querySelector("div.trees"));
        this.trees = tmp3;
        tmp4 = runtime.safeCall(parser.el.querySelector("#show-traces"));
        this.showTraces = tmp4;
        const diagnostics$class = class diagnostics {
          constructor() {
            let tmp5, tmp6, tmp7, tmp8;
            tmp5 = runtime.safeCall(globalThis.document.querySelector("#radio-parser"));
            this.radio = tmp5;
            tmp6 = runtime.safeCall(parser.el.querySelector(".diagnostics"));
            this.elem = tmp6;
            tmp7 = runtime.safeCall(this.elem.querySelector(".output"));
            this.output = tmp7;
            tmp8 = runtime.safeCall(this.elem.querySelector(".text"));
            this.text = tmp8;
          }
          toString() { return "diagnostics"; }
        };
        this.diagnostics = new diagnostics$class;
        this.diagnostics.class = diagnostics$class;
      }
      static toString() { return "parser"; }
    });
    (class elaborator {
      static {
        Tabs.elaborator = elaborator;
        let tmp1, tmp2, tmp3, tmp4;
        tmp1 = runtime.safeCall(globalThis.document.querySelector("#tab-elaborator"));
        this.el = tmp1;
        tmp2 = runtime.safeCall(elaborator.el.querySelector("code.traces"));
        this.traces = tmp2;
        tmp3 = runtime.safeCall(elaborator.el.querySelector("div.tree"));
        this.tree = tmp3;
        tmp4 = runtime.safeCall(elaborator.el.querySelector("#show-traces"));
        this.showTraces = tmp4;
        const diagnostics$class = class diagnostics1 {
          constructor() {
            let tmp5, tmp6, tmp7, tmp8;
            tmp5 = runtime.safeCall(globalThis.document.querySelector("#radio-elaborator"));
            this.radio = tmp5;
            tmp6 = runtime.safeCall(elaborator.el.querySelector(".diagnostics"));
            this.elem = tmp6;
            tmp7 = runtime.safeCall(this.elem.querySelector(".output"));
            this.output = tmp7;
            tmp8 = runtime.safeCall(this.elem.querySelector(".text"));
            this.text = tmp8;
          }
          toString() { return "diagnostics"; }
        };
        this.diagnostics = new diagnostics$class;
        this.diagnostics.class = diagnostics$class;
      }
      static toString() { return "elaborator"; }
    });
    (class resolver {
      static {
        Tabs.resolver = resolver;
        let tmp1, tmp2, tmp3, tmp4;
        tmp1 = runtime.safeCall(globalThis.document.querySelector("#tab-resolver"));
        this.el = tmp1;
        tmp2 = runtime.safeCall(resolver.el.querySelector("code.traces"));
        this.traces = tmp2;
        tmp3 = runtime.safeCall(resolver.el.querySelector("div.tree"));
        this.tree = tmp3;
        tmp4 = runtime.safeCall(resolver.el.querySelector("#show-traces"));
        this.showTraces = tmp4;
        const diagnostics$class = class diagnostics2 {
          constructor() {
            let tmp5, tmp6, tmp7, tmp8;
            tmp5 = runtime.safeCall(globalThis.document.querySelector("#radio-resolver"));
            this.radio = tmp5;
            tmp6 = runtime.safeCall(resolver.el.querySelector(".diagnostics"));
            this.elem = tmp6;
            tmp7 = runtime.safeCall(this.elem.querySelector(".output"));
            this.output = tmp7;
            tmp8 = runtime.safeCall(this.elem.querySelector(".text"));
            this.text = tmp8;
          }
          toString() { return "diagnostics"; }
        };
        this.diagnostics = new diagnostics$class;
        this.diagnostics.class = diagnostics$class;
      }
      static toString() { return "resolver"; }
    });
    (class lowering {
      static {
        Tabs.lowering = lowering;
        let tmp1, tmp2, tmp3, tmp4;
        tmp1 = runtime.safeCall(globalThis.document.querySelector("#tab-lowering"));
        this.el = tmp1;
        tmp2 = runtime.safeCall(lowering.el.querySelector("code.traces"));
        this.traces = tmp2;
        tmp3 = runtime.safeCall(lowering.el.querySelector("div.tree"));
        this.tree = tmp3;
        tmp4 = runtime.safeCall(lowering.el.querySelector("#show-traces"));
        this.showTraces = tmp4;
        const diagnostics$class = class diagnostics3 {
          constructor() {
            let tmp5, tmp6, tmp7, tmp8;
            tmp5 = runtime.safeCall(globalThis.document.querySelector("#radio-lowering"));
            this.radio = tmp5;
            tmp6 = runtime.safeCall(lowering.el.querySelector(".diagnostics"));
            this.elem = tmp6;
            tmp7 = runtime.safeCall(this.elem.querySelector(".output"));
            this.output = tmp7;
            tmp8 = runtime.safeCall(this.elem.querySelector(".text"));
            this.text = tmp8;
          }
          toString() { return "diagnostics"; }
        };
        this.diagnostics = new diagnostics$class;
        this.diagnostics.class = diagnostics$class;
      }
      static toString() { return "lowering"; }
    });
    (class codegen {
      static {
        Tabs.codegen = codegen;
        let tmp1, tmp2, tmp3, tmp4;
        tmp1 = runtime.safeCall(globalThis.document.querySelector("#tab-code-generation"));
        this.el = tmp1;
        tmp2 = runtime.safeCall(codegen.el.querySelector(".js"));
        this.output = tmp2;
        tmp3 = runtime.safeCall(codegen.el.querySelector("code.traces"));
        this.traces = tmp3;
        tmp4 = runtime.safeCall(codegen.el.querySelector("#show-traces"));
        this.showTraces = tmp4;
        const diagnostics$class = class diagnostics4 {
          constructor() {
            let tmp5, tmp6, tmp7, tmp8;
            tmp5 = runtime.safeCall(globalThis.document.querySelector("#radio-code-generation"));
            this.radio = tmp5;
            tmp6 = runtime.safeCall(codegen.el.querySelector(".diagnostics"));
            this.elem = tmp6;
            tmp7 = runtime.safeCall(this.elem.querySelector(".output"));
            this.output = tmp7;
            tmp8 = runtime.safeCall(this.elem.querySelector(".text"));
            this.text = tmp8;
          }
          toString() { return "diagnostics"; }
        };
        this.diagnostics = new diagnostics$class;
        this.diagnostics.class = diagnostics$class;
      }
      static toString() { return "codegen"; }
    });
    (class execution {
      static {
        Tabs.execution = execution;
        let tmp1, tmp2, tmp3;
        tmp1 = runtime.safeCall(globalThis.document.querySelector("#tab-execution"));
        this.el = tmp1;
        tmp2 = runtime.safeCall(execution.el.querySelector("#evaluation-result-items"));
        this.items = tmp2;
        tmp3 = runtime.safeCall(execution.el.querySelector("#print-result-items"));
        this.print = tmp3;
      }
      static toString() { return "execution"; }
    });
    (class errorDisplay {
      static #closeButton;
      static {
        Tabs.errorDisplay = errorDisplay;
        let tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda;
        tmp1 = runtime.safeCall(Tabs.tabs.querySelector("dialog#error-display"));
        this.dialog = tmp1;
        tmp2 = runtime.safeCall(errorDisplay.dialog.querySelector(".error-type"));
        this.errorType = tmp2;
        tmp3 = runtime.safeCall(errorDisplay.dialog.querySelector(".error-message"));
        this.errorMessage = tmp3;
        tmp4 = runtime.safeCall(errorDisplay.dialog.querySelector("stack-trace"));
        this.stackTrace = tmp4;
        tmp5 = runtime.safeCall(errorDisplay.dialog.querySelector("#close-error-display"));
        errorDisplay.#closeButton = tmp5;
        lambda = (undefined, function (_, _1) {
          return runtime.safeCall(errorDisplay.dialog.close())
        });
        tmp6 = errorDisplay.#closeButton.addEventListener("click", lambda);
      }
      static show(error) {
        errorDisplay.errorType.textContent = error.name;
        errorDisplay.errorMessage.textContent = error.message;
        errorDisplay.stackTrace.dataset.stackTrace = error.stack;
        return runtime.safeCall(errorDisplay.dialog.showModal())
      }
      static toString() { return "errorDisplay"; }
    });
  }
  static clearTab(elems) {
    elems.radio.dataset.error = "false";
    elems.output.innerHTML = "";
    elems.text.innerHTML = "";
    return runtime.Unit
  } 
  static clear() {
    let tmp, tmp1, tmp2, tmp3;
    Tabs1.execution.items.innerHTML = "";
    Tabs1.execution.print.innerHTML = "";
    tmp = Tabs.clearTab(Tabs1.parser.diagnostics);
    tmp1 = Tabs.clearTab(Tabs1.elaborator.diagnostics);
    tmp2 = Tabs.clearTab(Tabs1.resolver.diagnostics);
    tmp3 = Tabs.clearTab(Tabs1.lowering.diagnostics);
    return Tabs.clearTab(Tabs1.codegen.diagnostics)
  }
  static toString() { return "Tabs"; }
});
let Tabs = Tabs1; export default Tabs;
