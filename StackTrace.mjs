import runtime from "./Runtime.mjs";
import utils from "./utils.mjs";
import Predef from "./Predef.mjs";
let StackTrace2;
(class StackTrace {
  static #nameAndFileTraceTemplate;
  static #nameAndFileTraceContent;
  static #fileOnlyTraceTemplate;
  static #fileOnlyTraceContent;
  static {
    StackTrace2 = StackTrace;
    let tmp, tmp1;
    tmp = runtime.safeCall(globalThis.document.getElementById("stack-trace-name-and-file"));
    StackTrace.#nameAndFileTraceTemplate = tmp;
    StackTrace.#nameAndFileTraceContent = StackTrace.#nameAndFileTraceTemplate.content;
    tmp1 = runtime.safeCall(globalThis.document.getElementById("stack-trace-file-only"));
    StackTrace.#fileOnlyTraceTemplate = tmp1;
    StackTrace.#fileOnlyTraceContent = StackTrace.#fileOnlyTraceTemplate.content;
    this.StackTrace = class StackTrace1 extends globalThis.HTMLElement {
      #template;
      #templateContent;
      #shadowRoot;
      #list;
      constructor() {
        super();
        let tmp2, tmp3, tmp4, tmp5, tmp6;
        tmp2 = runtime.safeCall(globalThis.document.getElementById("stack-trace"));
        this.#template = tmp2;
        this.#templateContent = this.#template.content;
        tmp3 = runtime.safeCall(this.attachShadow({
        "mode": "open"
        }));
        this.#shadowRoot = tmp3;
        tmp4 = runtime.safeCall(this.#templateContent.cloneNode(true));
        tmp5 = runtime.safeCall(this.#shadowRoot.appendChild(tmp4));
        tmp6 = runtime.safeCall(this.#shadowRoot.querySelector("ul"));
        this.#list = tmp6;
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "data-stack-trace") {
          return this.update(newValue)
        } else {
          return runtime.Unit
        }
      } 
      createTextTrace(content) {
        let li, pre, code, tmp2, tmp3, tmp4, tmp5, tmp6;
        tmp2 = runtime.safeCall(globalThis.document.createElement("li"));
        li = tmp2;
        tmp3 = runtime.safeCall(globalThis.document.createElement("pre"));
        pre = tmp3;
        tmp4 = runtime.safeCall(globalThis.document.createElement("code"));
        code = tmp4;
        code.textContent = content;
        tmp5 = runtime.safeCall(pre.appendChild(code));
        tmp6 = runtime.safeCall(li.appendChild(pre));
        return li
      } 
      createFileOnlyTrace(file) {
        let element, anchor, segments, tmp2, tmp3, tmp4, tmp5, tmp6;
        tmp2 = runtime.safeCall(StackTrace.#fileOnlyTraceContent.cloneNode(true));
        element = tmp2;
        tmp3 = runtime.safeCall(element.querySelector("a"));
        anchor = tmp3;
        anchor.href = file;
        tmp4 = runtime.safeCall(file.split("/"));
        segments = tmp4;
        tmp5 = - 1;
        tmp6 = runtime.safeCall(segments.at(tmp5));
        anchor.textContent = tmp6;
        return element
      } 
      createNameAndFileTrace(name1, file1) {
        let element, code, anchor, segments, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
        tmp2 = runtime.safeCall(StackTrace.#nameAndFileTraceContent.cloneNode(true));
        element = tmp2;
        tmp3 = runtime.safeCall(element.querySelector("code"));
        code = tmp3;
        code.textContent = name1;
        tmp4 = runtime.safeCall(element.querySelector("a"));
        anchor = tmp4;
        anchor.href = file1;
        tmp5 = runtime.safeCall(file1.split("/"));
        segments = tmp5;
        tmp6 = - 1;
        tmp7 = runtime.safeCall(segments.at(tmp6));
        anchor.textContent = tmp7;
        return element
      } 
      update(stackTrace) {
        let tmp2, tmp3, lambda;
        this.#list.innerHTML = "";
        if (stackTrace === null) {
          return runtime.Unit
        } else if (stackTrace === "") {
          return runtime.Unit
        } else {
          tmp2 = utils.parseStackTrace(stackTrace);
          const this$StackTrace = this;
          lambda = (undefined, function (caseScrut) {
            let otherwise, fieldfile, fieldname, name2, file2, scrut, fieldline, line, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20;
            if (caseScrut instanceof Object) {
              if ("line" in caseScrut) {
                fieldline = caseScrut.line;
                line = fieldline;
                tmp4 = this$StackTrace.createTextTrace(line);
                return runtime.safeCall(this$StackTrace.#list.appendChild(tmp4))
              } else if (caseScrut instanceof Object) {
                if ("name" in caseScrut) {
                  fieldname = caseScrut.name;
                  if ("file" in caseScrut) {
                    fieldfile = caseScrut.file;
                    name2 = fieldname;
                    file2 = fieldfile;
                    scrut = name2 === globalThis.Unit;
                    if (scrut === true) {
                      tmp5 = this$StackTrace.createFileOnlyTrace(file2);
                      return runtime.safeCall(this$StackTrace.#list.appendChild(tmp5))
                    } else {
                      tmp6 = this$StackTrace.createNameAndFileTrace(name2, file2);
                      return runtime.safeCall(this$StackTrace.#list.appendChild(tmp6))
                    }
                  } else {
                    otherwise = caseScrut;
                    tmp7 = globalThis.String(otherwise);
                    tmp8 = this$StackTrace.createTextTrace(tmp7);
                    return runtime.safeCall(this$StackTrace.#list.appendChild(tmp8))
                  }
                } else {
                  otherwise = caseScrut;
                  tmp9 = globalThis.String(otherwise);
                  tmp10 = this$StackTrace.createTextTrace(tmp9);
                  return runtime.safeCall(this$StackTrace.#list.appendChild(tmp10))
                }
              } else {
                otherwise = caseScrut;
                tmp11 = globalThis.String(otherwise);
                tmp12 = this$StackTrace.createTextTrace(tmp11);
                return runtime.safeCall(this$StackTrace.#list.appendChild(tmp12))
              }
            } else if (caseScrut instanceof Object) {
              if ("name" in caseScrut) {
                fieldname = caseScrut.name;
                if ("file" in caseScrut) {
                  fieldfile = caseScrut.file;
                  name2 = fieldname;
                  file2 = fieldfile;
                  scrut = name2 === globalThis.Unit;
                  if (scrut === true) {
                    tmp13 = this$StackTrace.createFileOnlyTrace(file2);
                    return runtime.safeCall(this$StackTrace.#list.appendChild(tmp13))
                  } else {
                    tmp14 = this$StackTrace.createNameAndFileTrace(name2, file2);
                    return runtime.safeCall(this$StackTrace.#list.appendChild(tmp14))
                  }
                } else {
                  otherwise = caseScrut;
                  tmp15 = globalThis.String(otherwise);
                  tmp16 = this$StackTrace.createTextTrace(tmp15);
                  return runtime.safeCall(this$StackTrace.#list.appendChild(tmp16))
                }
              } else {
                otherwise = caseScrut;
                tmp17 = globalThis.String(otherwise);
                tmp18 = this$StackTrace.createTextTrace(tmp17);
                return runtime.safeCall(this$StackTrace.#list.appendChild(tmp18))
              }
            } else {
              otherwise = caseScrut;
              tmp19 = globalThis.String(otherwise);
              tmp20 = this$StackTrace.createTextTrace(tmp19);
              return runtime.safeCall(this$StackTrace.#list.appendChild(tmp20))
            }
          });
          tmp3 = lambda;
          return runtime.safeCall(tmp2.forEach(tmp3))
        }
      } 
      connectedCallback() {
        return this.update(this.dataset.stackTrace)
      }
      toString() { return "StackTrace"; }
    };
    StackTrace.StackTrace.observedAttributes = [
      "data-stack-trace"
    ];
    globalThis.customElements.define("stack-trace", StackTrace.StackTrace)
  }
  static toString() { return "StackTrace"; }
});
let StackTrace = StackTrace2; export default StackTrace;
