import runtime from "./Runtime.mjs";
import Str from "./Str.mjs";
import Iter from "./Iter.mjs";
import XML from "./XML.mjs";
import Option from "./Option.mjs";
import Runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
import MutMap from "./MutMap.mjs";
import Rendering from "./Rendering.mjs";
import Examples from "./Examples.mjs";
import MLscript from "./MLscript.mjs";
import RuntimeJS from "./RuntimeJS.mjs";
import Editor from "./Editor.mjs";
import EvaluationResultItem from "./EvaluationResultItem.mjs";
import PrintResultItem from "./PrintResultItem.mjs";
import ResultItem from "./ResultItem.mjs";
import ErrorDisplay from "./ErrorDisplay.mjs";
import CollapsibleTree from "./CollapsibleTree.mjs";
import Tabs from "./Tabs.mjs";
import Execution from "./Execution.mjs";
import StackTrace from "./StackTrace.mjs";
import inspect from "inspect";
let Main1;
(class Main {
  static #selector;
  static #newFileButton;
  static #compileButton;
  static #outputPanel;
  static #compileTimeReport;
  static {
    Main1 = Main;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, lambda, lambda1, lambda2, lambda3;
    tmp = runtime.safeCall(globalThis.document.querySelector("select#example"));
    Main.#selector = tmp;
    tmp1 = runtime.safeCall(globalThis.document.querySelector("button#new-file"));
    Main.#newFileButton = tmp1;
    tmp2 = runtime.safeCall(globalThis.document.querySelector("button#compile-file"));
    Main.#compileButton = tmp2;
    tmp3 = runtime.safeCall(globalThis.document.querySelector("#output"));
    Main.#outputPanel = tmp3;
    tmp4 = runtime.safeCall(globalThis.document.querySelector(".compile-time-report"));
    Main.#compileTimeReport = tmp4;
    tmp5 = runtime.safeCall(globalThis.document.querySelector("#editor"));
    tmp6 = Editor.create(tmp5, {
    "setup": "mlscript"
    });
    this.inputEditorView = tmp6;
    tmp7 = runtime.safeCall(globalThis.document.querySelector("#js-readonly-editor"));
    tmp8 = Editor.create(tmp7, {
    "setup": "javascript"
    });
    this.outputEditorView = tmp8;
    lambda = (undefined, function (caseScrut) {
      let first1, first0, key, examples, optionGroup, tmp16, tmp17, tmp18, lambda4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        key = first0;
        examples = first1;
        tmp16 = runtime.safeCall(globalThis.document.createElement("optgroup"));
        optionGroup = tmp16;
        optionGroup.label = key;
        lambda4 = (undefined, function (caseScrut1) {
          let first11, first01, id, example, option, scrut, from, insert, tmp19, tmp20;
          if (globalThis.Array.isArray(caseScrut1) && caseScrut1.length === 2) {
            first01 = caseScrut1[0];
            first11 = caseScrut1[1];
            id = first01;
            example = first11;
            tmp19 = runtime.safeCall(globalThis.document.createElement("option"));
            option = tmp19;
            option.value = id;
            option.textContent = example.name;
            tmp20 = runtime.safeCall(optionGroup.appendChild(option));
            scrut = Main.inputEditorView.state.doc.length;
            if (scrut === 0) {
              from = 0;
              insert = example.source;
              return runtime.safeCall(Main.inputEditorView.dispatch({
              "changes": {
                "from": from, "insert": insert
                }
              }))
            } else {
              return runtime.Unit
            }
          } else {
            throw new globalThis.Error("match error");
          }
        });
        tmp17 = lambda4;
        tmp18 = Iter.each(examples, tmp17);
        return runtime.safeCall(Main.#selector.appendChild(optionGroup))
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp9 = lambda;
    tmp10 = Iter.each(Examples.grouped, tmp9);
    lambda1 = (undefined, function (event) {
      let scrut, param0, example, from, to, insert, tmp16, tmp17, tmp18;
      tmp16 = MutMap.get(Main.#selector.value);
      scrut = Predef.pipeInto(Examples.examples, tmp16);
      if (scrut instanceof Option.Some.class) {
        param0 = scrut.value;
        example = param0;
        from = 0;
        to = Main.inputEditorView.state.doc.length;
        insert = example.source;
        return runtime.safeCall(Main.inputEditorView.dispatch({
        "changes": {
          "from": from, "to": to, "insert": insert
          }
        }))
      } else if (scrut instanceof Option.None.class) {
        tmp17 = "Example \"" + Main.#selector.value;
        tmp18 = tmp17 + "\" not found";
        throw new globalThis.Error(tmp18);
      } else {
        return runtime.Unit
      }
    });
    tmp11 = lambda1;
    tmp12 = Main.#selector.addEventListener("change", tmp11);
    lambda2 = (undefined, function (event) {
      let from, to, insert;
      Main.#selector.value = "none";
      from = 0;
      to = Main.inputEditorView.state.doc.length;
      insert = "";
      return runtime.safeCall(Main.inputEditorView.dispatch({
      "changes": {
        "from": from, "to": to, "insert": insert
        }
      }))
    });
    tmp13 = lambda2;
    tmp14 = Main.#newFileButton.addEventListener("click", tmp13);
    lambda3 = (undefined, function (event) {
      let tmp16, lambda4, lambda5;
      lambda4 = (undefined, function () {
        let startTime, sourceCode, res, elapsedSeconds, problematicStages, compiledCode, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, lambda6;
        tmp17 = Tabs.clear();
        tmp18 = runtime.safeCall(globalThis.Date.now());
        startTime = tmp18;
        tmp19 = runtime.safeCall(Main.inputEditorView.state.doc.toString());
        sourceCode = tmp19;
        tmp20 = MLscript.compile(sourceCode, {
        "traces": runtime.Unit
        });
        res = tmp20;
        tmp21 = runtime.safeCall(globalThis.Date.now());
        tmp22 = tmp21 - startTime;
        tmp23 = tmp22 / 1000;
        tmp24 = runtime.safeCall(tmp23.toPrecision(3));
        elapsedSeconds = tmp24;
        tmp25 = "Compilation took " + elapsedSeconds;
        tmp26 = tmp25 + " seconds.";
        tmp27 = runtime.safeCall(globalThis.console.log(tmp26));
        tmp28 = runtime.safeCall(globalThis.console.log(res));
        problematicStages = res.problematicStages;
        Tabs.parser.traces.innerHTML = res.parser.traces;
        tmp29 = Main.showDiagnostics(Tabs.parser.diagnostics, [
          ...res.lexer.diagnostics,
          ...res.parser.diagnostics
        ], problematicStages);
        Tabs.parser.trees.innerHTML = "";
        lambda6 = (undefined, function (tree) {
          let tmp44;
          tmp44 = CollapsibleTree.create(tree);
          return runtime.safeCall(Tabs.parser.trees.appendChild(tmp44))
        });
        tmp30 = Iter.each(res.parser.trees, lambda6);
        Tabs.elaborator.traces.innerHTML = res.elaborator.traces;
        Tabs.elaborator.tree.innerHTML = "";
        tmp31 = CollapsibleTree.create(res.elaborator.tree);
        tmp32 = runtime.safeCall(Tabs.elaborator.tree.appendChild(tmp31));
        tmp33 = Main.showDiagnostics(Tabs.elaborator.diagnostics, res.elaborator.diagnostics, problematicStages);
        Tabs.resolver.traces.innerHTML = res.resolver.traces;
        Tabs.resolver.tree.innerHTML = "";
        tmp34 = CollapsibleTree.create(res.resolver.tree);
        tmp35 = runtime.safeCall(Tabs.resolver.tree.appendChild(tmp34));
        tmp36 = Main.showDiagnostics(Tabs.resolver.diagnostics, res.resolver.diagnostics, problematicStages);
        Tabs.lowering.traces.innerHTML = res.lowering.traces;
        Tabs.lowering.tree.innerHTML = "";
        tmp37 = Main.showDiagnostics(Tabs.lowering.diagnostics, res.lowering.diagnostics, problematicStages);
        tmp38 = runtime.safeCall(res.codeGeneration.vars.trim());
        tmp39 = tmp38 + "\n";
        tmp40 = runtime.safeCall(res.codeGeneration.code.trim());
        tmp41 = tmp39 + tmp40;
        compiledCode = tmp41;
        tmp42 = Main.renderGeneratedCode(compiledCode);
        tmp43 = Main.showDiagnostics(Tabs.codegen.diagnostics, res.codeGeneration.diagnostics, problematicStages);
        return Execution.execute(sourceCode, compiledCode)
      });
      tmp16 = lambda4;
      lambda5 = (undefined, function (error) {
        let tmp17;
        tmp17 = runtime.safeCall(globalThis.console.log(error));
        return Tabs.errorDisplay.show(error)
      });
      return Runtime.try_catch(tmp16, lambda5)
    });
    tmp15 = Main.#compileButton.addEventListener("click", lambda3);
  }
  static showDiagnostics(elems, diagnostics, problematicStages) {
    let doTemp, doTemp1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (globalThis.Array.isArray(diagnostics) && diagnostics.length === 0) {
      elems.radio.dataset.error = "false";
      doTemp = runtime.Unit;
      elems.output.innerHTML = "";
      doTemp1 = runtime.Unit;
      if (globalThis.Array.isArray(problematicStages) && problematicStages.length === 0) {
        elems.text.innerHTML = "<em>Everything went smoothly, without any problems.</em>";
        return runtime.Unit
      } else {
        tmp = "<em>There is no issue with this stage, " + "but there are problems in the following stage";
        scrut = problematicStages.length > 1;
        if (scrut === true) {
          tmp1 = "s";
        } else {
          tmp1 = "";
        }
        tmp2 = tmp + tmp1;
        tmp3 = tmp2 + ": ";
        tmp4 = Iter.joined(problematicStages, ", ");
        tmp5 = tmp3 + tmp4;
        tmp6 = tmp5 + ".</em>";
        elems.text.innerHTML = tmp6;
        return runtime.Unit
      }
    } else {
      elems.radio.dataset.error = "true";
      tmp7 = runtime.safeCall(diagnostics.join("\n"));
      elems.output.innerHTML = tmp7;
      elems.text.innerHTML = "";
      return runtime.Unit
    }
  } 
  static renderGeneratedCode(code) {
    let from, to, insert;
    from = 0;
    to = Main.outputEditorView.state.doc.length;
    insert = code;
    return runtime.safeCall(Main.outputEditorView.dispatch({
    "changes": {
      "from": from, "to": to, "insert": insert
      }
    }))
  }
  static toString() { return "Main"; }
});