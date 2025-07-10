import runtime from "./Runtime.mjs";
import Iter from "./Iter.mjs";
import XML from "./XML.mjs";
let CollapsibleTree2;
(class CollapsibleTree {
  static #indentRegex;
  static {
    CollapsibleTree2 = CollapsibleTree;
    let tmp;
    tmp = new globalThis.RegExp("^(\\s*)");
    CollapsibleTree.#indentRegex = tmp;
    this.CollapsibleTree = class CollapsibleTree1 extends globalThis.HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        let rawText, treeData, treeElement, tmp1, tmp2;
        rawText = this.textContent;
        this.textContent = "";
        tmp1 = CollapsibleTree.parseIndentedText(rawText);
        treeData = tmp1;
        tmp2 = this.createDetailsTree(treeData, 0);
        treeElement = tmp2;
        return runtime.safeCall(this.appendChild(treeElement))
      } 
      createDetailsTree(nodes, depth) {
        let fragment, tmp1, tmp2, tmp3, lambda;
        tmp1 = runtime.safeCall(globalThis.document.createDocumentFragment());
        fragment = tmp1;
        const this$CollapsibleTree = this;
        lambda = (undefined, function (node) {
          let details, scrut, summary, scrut1, rule, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
          tmp4 = runtime.safeCall(globalThis.document.createElement("details"));
          details = tmp4;
          scrut = depth < 2;
          if (scrut === true) {
            tmp5 = details.setAttribute("open", "");
          } else {
            tmp5 = runtime.Unit;
          }
          tmp6 = runtime.safeCall(globalThis.document.createElement("summary"));
          summary = tmp6;
          summary.textContent = node.text;
          tmp7 = runtime.safeCall(details.appendChild(summary));
          scrut1 = node.children.length > 0;
          if (scrut1 === true) {
            tmp8 = depth + 1;
            tmp9 = this$CollapsibleTree.createDetailsTree(node.children, tmp8);
            tmp10 = runtime.safeCall(details.appendChild(tmp9));
          } else {
            tmp10 = details.setAttribute("leaf", "");
          }
          tmp11 = runtime.safeCall(fragment.appendChild(details));
          tmp12 = runtime.safeCall(globalThis.document.createElement("rule"));
          rule = tmp12;
          tmp13 = runtime.safeCall(rule.classList.add("rule"));
          return runtime.safeCall(fragment.appendChild(rule))
        });
        tmp2 = lambda;
        tmp3 = Iter.each(nodes, tmp2);
        return fragment
      }
      toString() { return "CollapsibleTree"; }
    };
    globalThis.customElements.define("collapsible-tree", CollapsibleTree.CollapsibleTree)
  }
  static parseIndentedText(text) {
    let root, text1, children, stack, node, indent, tmp, tmp1, tmp2, tmp3, tmp4, lambda, lambda1;
    text1 = "";
    children = [];
    root = {
    "text": text1, "children": children
    };
    node = root;
    tmp = - 1;
    indent = tmp;
    stack = [
      {
      "node": node, "indent": indent
      }
    ];
    tmp1 = runtime.safeCall(text.split("\n"));
    lambda = (undefined, function (line) {
      let tmp5;
      tmp5 = runtime.safeCall(line.trim());
      return tmp5.length > 0
    });
    tmp2 = Iter.filtering(tmp1, lambda);
    lambda1 = (undefined, function (line) {
      let indent1, text2, scrut, newNode, text3, children1, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
      tmp5 = runtime.safeCall(line.match(CollapsibleTree.#indentRegex));
      indent1 = tmp5[1].length;
      tmp6 = runtime.safeCall(line.substring(indent1));
      text2 = tmp6;
      tmp11: while (true) {
        tmp7 = stack.length - 1;
        scrut = indent1 <= stack[tmp7].indent;
        if (scrut === true) {
          tmp8 = runtime.safeCall(stack.pop());
          continue tmp11;
        } else {
          tmp8 = runtime.Unit;
        }
        break;
      }
      text3 = text2;
      children1 = [];
      newNode = {
      "text": text3, "children": children1
      };
      tmp9 = stack.length - 1;
      tmp10 = runtime.safeCall(stack[tmp9].node.children.push(newNode));
      return runtime.safeCall(stack.push({
      "node": newNode, "indent": indent1
      }))
    });
    tmp3 = lambda1;
    tmp4 = Iter.each(tmp2, tmp3);
    return root.children
  } 
  static create(tree) {
    let collapsibleTree, tmp;
    tmp = runtime.safeCall(globalThis.document.createElement("collapsible-tree"));
    collapsibleTree = tmp;
    collapsibleTree.textContent = tree;
    return collapsibleTree
  }
  static toString() { return "CollapsibleTree"; }
});
let CollapsibleTree = CollapsibleTree2; export default CollapsibleTree;
