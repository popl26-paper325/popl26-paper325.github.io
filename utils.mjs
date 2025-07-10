import runtime from "./Runtime.mjs";
let utils1;
(class utils {
  static #stackTraceHead;
  static #stackTraceLine;
  static {
    utils1 = utils;
    let tmp, tmp1;
    tmp = new globalThis.RegExp("^[$_\\p{ID_Start}][$_\\.\\u200C\\u200D\\p{ID_Continue}]*(?:: .+)?$", "u");
    utils.#stackTraceHead = tmp;
    tmp1 = new globalThis.RegExp("^\\s*at(?:(?:\\s+(?<name>[$_\\p{ID_Start}][$_\\.\\u200C\\u200D\\p{ID_Continue}]*))?(?:\\s+\\((?<file>[^\\)]+)\\))?|\\s*(?<file>[^\\)]+))$", "u");
    utils.#stackTraceLine = tmp1;
  }
  static parseStackTrace(stackTrace) {
    let stackTraceLines, scrut, scrut1, tmp, tmp1, tmp2, lambda;
    tmp = runtime.safeCall(stackTrace.split("\n"));
    stackTraceLines = tmp;
    scrut = stackTraceLines.length > 0;
    if (scrut === true) {
      scrut1 = runtime.safeCall(utils.#stackTraceHead.test(stackTraceLines[0]));
      if (scrut1 === true) {
        tmp1 = runtime.safeCall(stackTraceLines.shift());
      } else {
        tmp1 = runtime.Unit;
      }
    } else {
      tmp1 = runtime.Unit;
    }
    lambda = (undefined, function (line, _, _1) {
      let scrut2, result, name, file, line1, tmp3;
      scrut2 = runtime.safeCall(line.match(utils.#stackTraceLine));
      if (scrut2 === null) {
        line1 = line;
        return {
        "line": line1
        }
      } else {
        result = scrut2;
        tmp3 = runtime.safeCall(globalThis.console.log(result));
        name = result.groups.name;
        file = result.groups.file;
        return {
        "name": name, "file": file
        }
      }
    });
    tmp2 = lambda;
    return runtime.safeCall(stackTraceLines.map(tmp2))
  }
  static toString() { return "utils"; }
});
let utils = utils1; export default utils;
