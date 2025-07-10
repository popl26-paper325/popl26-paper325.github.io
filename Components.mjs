import runtime from "./Runtime.mjs";
import utils from "./utils.mjs";
import Predef from "./Predef.mjs";
let Components1;
(class Components {
  static {
    Components1 = Components;
    let tmp, tmp1, tmp2, lambda;
    tmp = runtime.safeCall(globalThis.document.querySelector("button#show-tutorial"));
    this.showTutorialButton = tmp;
    lambda = (undefined, function (_, _1) {
      return runtime.safeCall(Components.TutorialDialog.element.showModal())
    });
    tmp1 = Components.showTutorialButton.addEventListener("click", lambda);
    tmp2 = runtime.safeCall(globalThis.document.querySelector(".tabs#output"));
    this.tabs = tmp2;
    (class parser {
      static {
        Components.parser = parser;
        let tmp3, tmp4;
        tmp3 = runtime.safeCall(globalThis.document.querySelector("#tab-parser"));
        this.el = tmp3;
        tmp4 = runtime.safeCall(parser.el.querySelector(".trees"));
        this.trees = tmp4;
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
        Components.elaborator = elaborator;
        let tmp3, tmp4;
        tmp3 = runtime.safeCall(globalThis.document.querySelector("#tab-elaborator"));
        this.el = tmp3;
        tmp4 = runtime.safeCall(elaborator.el.querySelector(".tree"));
        this.tree = tmp4;
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
        Components.resolver = resolver;
        let tmp3, tmp4;
        tmp3 = runtime.safeCall(globalThis.document.querySelector("#tab-resolver"));
        this.el = tmp3;
        tmp4 = runtime.safeCall(resolver.el.querySelector(".tree"));
        this.tree = tmp4;
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
        Components.lowering = lowering;
        let tmp3, tmp4;
        tmp3 = runtime.safeCall(globalThis.document.querySelector("#tab-lowering"));
        this.el = tmp3;
        tmp4 = runtime.safeCall(lowering.el.querySelector(".tree"));
        this.tree = tmp4;
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
        Components.codegen = codegen;
        let tmp3, tmp4;
        tmp3 = runtime.safeCall(globalThis.document.querySelector("#tab-code-generation"));
        this.el = tmp3;
        tmp4 = runtime.safeCall(codegen.el.querySelector(".js"));
        this.output = tmp4;
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
        Components.execution = execution;
        let tmp3, tmp4, tmp5;
        tmp3 = runtime.safeCall(globalThis.document.querySelector("#tab-execution"));
        this.el = tmp3;
        tmp4 = runtime.safeCall(execution.el.querySelector("#evaluation-result-items"));
        this.items = tmp4;
        tmp5 = runtime.safeCall(execution.el.querySelector("#print-result-items"));
        this.print = tmp5;
      }
      static toString() { return "execution"; }
    });
    (class errorDisplay {
      static #closeButton;
      static {
        Components.errorDisplay = errorDisplay;
        let tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda1;
        tmp3 = runtime.safeCall(Components.tabs.querySelector("dialog#error-display"));
        this.dialog = tmp3;
        tmp4 = runtime.safeCall(errorDisplay.dialog.querySelector(".error-type"));
        this.errorType = tmp4;
        tmp5 = runtime.safeCall(errorDisplay.dialog.querySelector(".error-message"));
        this.errorMessage = tmp5;
        tmp6 = runtime.safeCall(errorDisplay.dialog.querySelector("stack-trace"));
        this.stackTrace = tmp6;
        tmp7 = runtime.safeCall(errorDisplay.dialog.querySelector("#close-error-display"));
        errorDisplay.#closeButton = tmp7;
        lambda1 = (undefined, function (_, _1) {
          return runtime.safeCall(errorDisplay.dialog.close())
        });
        tmp8 = errorDisplay.#closeButton.addEventListener("click", lambda1);
      }
      static show(error) {
        errorDisplay.errorType.textContent = error.name;
        errorDisplay.errorMessage.textContent = error.message;
        errorDisplay.stackTrace.dataset.stackTrace = error.stack;
        return runtime.safeCall(errorDisplay.dialog.showModal())
      }
      static toString() { return "errorDisplay"; }
    });
    (class TutorialDialog {
      static {
        Components.TutorialDialog = TutorialDialog;
        let tmp3, tmp4, lambda1;
        tmp3 = runtime.safeCall(globalThis.document.querySelector("dialog#tutorial"));
        this.element = tmp3;
        tmp4 = runtime.safeCall(TutorialDialog.element.querySelector("button#close"));
        this.closeButton = tmp4;
        lambda1 = (undefined, function (_, _1) {
          return runtime.safeCall(TutorialDialog.element.close())
        });
        TutorialDialog.closeButton.addEventListener("click", lambda1)
      }
      static show() {
        return runtime.safeCall(TutorialDialog.element.showModal())
      }
      static toString() { return "TutorialDialog"; }
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
    Components1.execution.items.innerHTML = "";
    Components1.execution.print.innerHTML = "";
    tmp = Components.clearTab(Components1.parser.diagnostics);
    tmp1 = Components.clearTab(Components1.elaborator.diagnostics);
    tmp2 = Components.clearTab(Components1.resolver.diagnostics);
    tmp3 = Components.clearTab(Components1.lowering.diagnostics);
    return Components.clearTab(Components1.codegen.diagnostics)
  }
  static toString() { return "Components"; }
});
let Components = Components1; export default Components;
