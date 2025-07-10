import runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
let Editor1;
(class Editor {
  static #basicSetup;
  static #EditorState;
  static #EditorView;
  static #javascript;
  static #query;
  static #selector;
  static #parseButton;
  static #outputPanel;
  static #compileTimeReport;
  static #setups;
  static {
    Editor1 = Editor;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    Editor.#basicSetup = globalThis.codemirror.basicSetup;
    Editor.#EditorState = globalThis.codemirror.EditorState;
    Editor.#EditorView = globalThis.codemirror.EditorView;
    Editor.#javascript = globalThis.codemirror.languages.javascript;
    tmp = runtime.safeCall(globalThis.document.querySelector.bind(globalThis.document));
    Editor.#query = tmp;
    tmp1 = runtime.safeCall(Editor.#query("select#example"));
    Editor.#selector = tmp1;
    tmp2 = runtime.safeCall(Editor.#query("button#parse"));
    Editor.#parseButton = tmp2;
    tmp3 = runtime.safeCall(Editor.#query("#output"));
    Editor.#outputPanel = tmp3;
    tmp4 = runtime.safeCall(Editor.#query(".compile-time-report"));
    Editor.#compileTimeReport = tmp4;
    tmp5 = Predef.tuple(Editor.#basicSetup);
    tmp6 = runtime.safeCall(Editor.#javascript());
    tmp7 = runtime.safeCall(Editor.#EditorState.readOnly.of(true));
    tmp8 = Predef.tuple(Editor.#basicSetup, tmp6, tmp7);
    tmp9 = runtime.safeCall(globalThis.Object.freeze({
    "mlscript": tmp5, "javascript": tmp8
    }));
    Editor.#setups = tmp9;
  }
  static create(parent, options) {
    let parent1, doc, extensions, tmp, tmp1;
    tmp = "Creating editor with setup: " + options.setup;
    tmp1 = runtime.safeCall(globalThis.console.log(tmp));
    parent1 = parent;
    doc = "";
    extensions = Editor.#setups[options.setup];
    return new Editor.#EditorView({
    "parent": parent1, "doc": doc, "extensions": extensions
    })
  }
  static toString() { return "Editor"; }
});
let Editor = Editor1; export default Editor;
