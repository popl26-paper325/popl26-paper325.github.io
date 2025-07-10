import runtime from "Runtime.mjs";
let Rendering1;
(class Rendering {
  static {
    Rendering1 = Rendering;
  }
  static pass1(f) {
    return (...xs) => {
      return runtime.safeCall(f(xs[0]))
    }
  } 
  static pass2(f1) {
    return (...xs) => {
      return runtime.safeCall(f1(xs[0], xs[1]))
    }
  } 
  static pass3(f2) {
    return (...xs) => {
      return runtime.safeCall(f2(xs[0], xs[1], xs[2]))
    }
  } 
  static passing(f3, ...args) {
    return f3.bind(null, ...args)
  } 
  static map(f4) {
    return (...xs) => {
      let tmp;
      tmp = Rendering.pass1(f4);
      return runtime.safeCall(xs.map(tmp))
    }
  } 
  static fold(f5) {
    return (init, ...rest) => {
      let i, len, scrut, tmp, tmp1, tmp2, tmp3;
      i = 0;
      len = rest.length;
      tmp4: while (true) {
        scrut = i < len;
        if (scrut === true) {
          tmp = runtime.safeCall(rest.at(i));
          tmp1 = runtime.safeCall(f5(init, tmp));
          init = tmp1;
          tmp2 = i + 1;
          i = tmp2;
          tmp3 = runtime.Unit;
          continue tmp4;
        } else {
          tmp3 = runtime.Unit;
        }
        break;
      }
      return init
    }
  } 
  static interleave(sep) {
    return (...args1) => {
      let res, len, i, scrut, idx, scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
      scrut2 = args1.length === 0;
      if (scrut2 === true) {
        return []
      } else {
        tmp = args1.length * 2;
        tmp1 = tmp - 1;
        tmp2 = globalThis.Array(tmp1);
        res = tmp2;
        len = args1.length;
        i = 0;
        tmp8: while (true) {
          scrut = i < len;
          if (scrut === true) {
            tmp3 = i * 2;
            idx = tmp3;
            res[idx] = args1[i];
            tmp4 = i + 1;
            i = tmp4;
            scrut1 = i < len;
            if (scrut1 === true) {
              tmp5 = idx + 1;
              res[tmp5] = sep;
              tmp6 = runtime.Unit;
            } else {
              tmp6 = runtime.Unit;
            }
            tmp7 = tmp6;
            continue tmp8;
          } else {
            tmp7 = runtime.Unit;
          }
          break;
        }
        return res
      }
    }
  } 
  static render(target) {
    let go, circularCounter, visitingObjects, visitedObjects, tmp, tmp1;
    go = function go(arg) {
      let doTemp, rendered, ts, ts1, scrut, es, p, scrut1, scrut2, scrut3, nme, prefix, scrut4, scrut5, index, result, doTemp1, scrut6, doTemp2, scrut7, scrut8, index1, index2, scrut9, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6;
      if (arg === undefined) {
        return "undefined"
      } else if (arg === null) {
        return "null"
      } else if (typeof arg === 'string') {
        return runtime.safeCall(globalThis.JSON.stringify(arg))
      } else if (arg instanceof globalThis.BigInt) {
        tmp2 = runtime.safeCall(arg.toString());
        return tmp2 + "n"
      } else if (typeof arg === 'number') {
        return runtime.safeCall(arg.toString())
      } else if (arg === true) {
        return "true"
      } else if (arg === false) {
        return "false"
      } else {
        scrut9 = runtime.safeCall(visitedObjects.has(arg));
        if (scrut9 === true) {
          return runtime.safeCall(visitedObjects.get(arg))
        } else {
          scrut7 = runtime.safeCall(visitingObjects.has(arg));
          if (scrut7 === true) {
            scrut8 = runtime.safeCall(visitingObjects.get(arg));
            if (globalThis.Number.isInteger(scrut8)) {
              index2 = scrut8;
              tmp3 = "[Circular *" + index2;
              return tmp3 + "]"
            } else {
              index1 = circularCounter;
              tmp4 = circularCounter + 1;
              circularCounter = tmp4;
              tmp5 = visitingObjects.set(arg, index1);
              tmp6 = "[Circular *" + index1;
              return tmp6 + "]"
            }
          } else {
            doTemp = visitingObjects.set(arg, null);
            if (arg instanceof globalThis.Array) {
              lambda = (undefined, function (arg1, arg2) {
                return arg1 + arg2
              });
              tmp7 = Rendering.fold(lambda);
              tmp8 = Rendering.interleave(", ");
              tmp9 = Rendering.map(go);
              tmp10 = runtime.safeCall(tmp9(...arg));
              tmp11 = runtime.safeCall(tmp8(...tmp10));
              tmp12 = runtime.safeCall(tmp7("[", ...tmp11, "]"));
            } else if (arg instanceof globalThis.Set) {
              lambda1 = (undefined, function (arg1, arg2) {
                return arg1 + arg2
              });
              tmp13 = Rendering.fold(lambda1);
              tmp14 = Rendering.interleave(", ");
              tmp15 = Rendering.map(go);
              tmp16 = runtime.safeCall(tmp15(...arg));
              tmp17 = runtime.safeCall(tmp14(...tmp16));
              tmp12 = runtime.safeCall(tmp13("Set{", ...tmp17, "}"));
            } else if (arg instanceof globalThis.Map) {
              lambda2 = (undefined, function (arg1, arg2) {
                return arg1 + arg2
              });
              tmp18 = Rendering.fold(lambda2);
              tmp19 = Rendering.interleave(", ");
              tmp20 = Rendering.map(go);
              tmp21 = runtime.safeCall(tmp20(...arg));
              tmp22 = runtime.safeCall(tmp19(...tmp21));
              tmp12 = runtime.safeCall(tmp18("Map{", ...tmp22, "}"));
            } else if (arg instanceof globalThis.Function) {
              p = globalThis.Object.getOwnPropertyDescriptor(arg, "prototype");
              if (p instanceof globalThis.Object) {
                scrut1 = p["writable"];
                if (scrut1 === true) {
                  tmp23 = true;
                } else {
                  tmp23 = false;
                }
              } else {
                tmp23 = false;
              }
              if (p === undefined) {
                tmp24 = true;
              } else {
                tmp24 = false;
              }
              scrut2 = tmp23 || tmp24;
              if (scrut2 === true) {
                scrut3 = arg.name;
                if (scrut3 === "") {
                  tmp25 = "";
                } else {
                  nme = scrut3;
                  tmp25 = " " + nme;
                }
                tmp26 = "[function" + tmp25;
                tmp12 = tmp26 + "]";
              } else {
                if (arg instanceof globalThis.Object) {
                  scrut = arg.constructor.name;
                  if (scrut === "Object") {
                    tmp27 = runtime.safeCall(globalThis.Object.entries(arg));
                    es = tmp27;
                    lambda3 = (undefined, function (arg1, arg2) {
                      return arg1 + arg2
                    });
                    tmp28 = Rendering.fold(lambda3);
                    tmp29 = Rendering.interleave(", ");
                    lambda4 = (undefined, function (caseScrut) {
                      let first1, first0, k, v, tmp50, tmp51;
                      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
                        first0 = caseScrut[0];
                        first1 = caseScrut[1];
                        k = first0;
                        v = first1;
                        tmp50 = k + ": ";
                        tmp51 = go(v);
                        return tmp50 + tmp51
                      } else {
                        throw new globalThis.Error("match error");
                      }
                    });
                    tmp30 = lambda4;
                    tmp31 = Rendering.map(tmp30);
                    tmp32 = runtime.safeCall(tmp31(...es));
                    tmp33 = runtime.safeCall(tmp29(...tmp32));
                    tmp34 = runtime.safeCall(tmp28("{", ...tmp33, "}"));
                  } else {
                    tmp34 = globalThis.String(arg);
                  }
                  tmp12 = tmp34;
                } else {
                  ts = arg["toString"];
                  ts1 = arg;
                  tmp35 = typeof arg;
                  tmp36 = "[" + tmp35;
                  tmp12 = tmp36 + "]";
                }
              }
            } else if (arg instanceof globalThis.Object) {
              scrut = arg.constructor.name;
              if (scrut === "Object") {
                tmp37 = runtime.safeCall(globalThis.Object.entries(arg));
                es = tmp37;
                lambda5 = (undefined, function (arg1, arg2) {
                  return arg1 + arg2
                });
                tmp38 = Rendering.fold(lambda5);
                tmp39 = Rendering.interleave(", ");
                lambda6 = (undefined, function (caseScrut) {
                  let first1, first0, k, v, tmp50, tmp51;
                  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
                    first0 = caseScrut[0];
                    first1 = caseScrut[1];
                    k = first0;
                    v = first1;
                    tmp50 = k + ": ";
                    tmp51 = go(v);
                    return tmp50 + tmp51
                  } else {
                    throw new globalThis.Error("match error");
                  }
                });
                tmp40 = lambda6;
                tmp41 = Rendering.map(tmp40);
                tmp42 = runtime.safeCall(tmp41(...es));
                tmp43 = runtime.safeCall(tmp39(...tmp42));
                tmp44 = runtime.safeCall(tmp38("{", ...tmp43, "}"));
              } else {
                tmp44 = globalThis.String(arg);
              }
              tmp12 = tmp44;
            } else {
              ts = arg["toString"];
              ts1 = arg;
              tmp45 = typeof arg;
              tmp46 = "[" + tmp45;
              tmp12 = tmp46 + "]";
            }
            rendered = tmp12;
            scrut4 = runtime.safeCall(visitingObjects.has(arg));
            if (scrut4 === true) {
              scrut5 = runtime.safeCall(visitingObjects.get(arg));
              if (globalThis.Number.isInteger(scrut5)) {
                index = scrut5;
                tmp47 = "<ref *" + index;
                tmp48 = tmp47 + "> ";
              } else {
                tmp48 = "";
              }
            } else {
              throw new globalThis.Error("match error");
            }
            prefix = tmp48;
            result = prefix + rendered;
            scrut6 = prefix.length > 0;
            if (scrut6 === true) {
              tmp49 = visitedObjects.set(arg, result);
            } else {
              tmp49 = runtime.Unit;
            }
            doTemp1 = tmp49;
            doTemp2 = runtime.safeCall(visitingObjects.delete(arg));
            return result
          }
        }
      }
    };
    circularCounter = 1;
    tmp = new globalThis.WeakMap();
    visitingObjects = tmp;
    tmp1 = new globalThis.WeakMap();
    visitedObjects = tmp1;
    return go(target)
  }
  static toString() { return "Rendering"; }
});
let Rendering = Rendering1; export default Rendering;
