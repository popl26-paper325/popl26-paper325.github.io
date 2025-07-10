import runtime from "./Runtime.mjs";
import Runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
import Rendering from "./Rendering.mjs";
import EvaluationResultItem from "./EvaluationResultItem.mjs";
import PrintResultItem from "./PrintResultItem.mjs";
import ResultItem from "./ResultItem.mjs";
import Tabs from "./Tabs.mjs";
import inspect from "inspect";
let Execution1;
(class Execution {
  static {
    Execution1 = Execution;
  }
  static execute(sourceCode, compiledCode) {
    let print, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2, lambda3, lambda4;
    print = Predef.print;
    lambda = (undefined, function (...args) {
      let text, tmp6, tmp7, tmp8, tmp9, tmp10, lambda5;
      tmp6 = globalThis.console.log("print", args);
      lambda5 = (undefined, function (x) {
        return runtime.safeCall(Rendering.render(x))
      });
      tmp7 = runtime.safeCall(args.map(lambda5));
      tmp8 = runtime.safeCall(tmp7.join(" "));
      text = tmp8;
      tmp9 = PrintResultItem.create(text);
      tmp10 = runtime.safeCall(Tabs.execution.print.appendChild(tmp9));
      return runtime.Unit
    });
    tmp = lambda;
    Predef.print = tmp;
    tmp1 = new globalThis.AsyncFunction(compiledCode);
    lambda1 = (undefined, function (result, start, end) {
      let expression, scrut, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
      scrut = result == Runtime.Unit;
      if (scrut === true) {
        return runtime.Unit
      } else {
        if (globalThis.Number.isInteger(start)) {
          if (globalThis.Number.isInteger(end)) {
            tmp6 = sourceCode.substring(start, end);
          } else {
            tmp6 = "Unknown location";
          }
        } else {
          tmp6 = "Unknown location";
        }
        expression = tmp6;
        tmp7 = "Expression: " + expression;
        tmp8 = tmp7 + " = ";
        tmp9 = tmp8 + result;
        tmp10 = tmp9 + " from ";
        tmp11 = tmp10 + start;
        tmp12 = tmp11 + " to ";
        tmp13 = tmp12 + end;
        tmp14 = runtime.safeCall(globalThis.console.log(tmp13));
        tmp15 = runtime.safeCall(inspect(result, {
        "indent": 2
        }));
        tmp16 = EvaluationResultItem.create(expression, tmp15);
        return runtime.safeCall(Tabs.execution.items.appendChild(tmp16))
      }
    });
    tmp2 = lambda1;
    tmp3 = runtime.safeCall(tmp1.call({
    "__logPureExpression": tmp2
    }));
    lambda2 = (undefined, function () {
      return runtime.safeCall(globalThis.console.log("Execution completed"))
    });
    tmp4 = runtime.safeCall(tmp3.then(lambda2));
    lambda3 = (undefined, function (error) {
      let tmp6;
      tmp6 = ResultItem.error(error.name, error.message, error.stack);
      return runtime.safeCall(Tabs.execution.items.appendChild(tmp6))
    });
    tmp5 = runtime.safeCall(tmp4.catch(lambda3));
    lambda4 = (undefined, function () {
      Predef.print = print;
      return runtime.Unit
    });
    return runtime.safeCall(tmp5.finally(lambda4))
  }
  static toString() { return "Execution"; }
});
let Execution = Execution1; export default Execution;
