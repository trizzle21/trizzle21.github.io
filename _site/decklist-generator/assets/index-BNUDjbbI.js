(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === "childList")
        for (const s of u.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function i(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = t(a);
    fetch(a.href, u);
  }
})();
function Wg(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var pf = { exports: {} },
  na = {},
  vf = { exports: {} },
  nt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gh;
function qg() {
  if (Gh) return nt;
  Gh = 1;
  var r = Symbol.for("react.element"),
    e = Symbol.for("react.portal"),
    t = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    s = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    d = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    m = Symbol.iterator;
  function x(j) {
    return j === null || typeof j != "object"
      ? null
      : ((j = (m && j[m]) || j["@@iterator"]),
        typeof j == "function" ? j : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    F = Object.assign,
    E = {};
  function R(j, J, Pe) {
    (this.props = j),
      (this.context = J),
      (this.refs = E),
      (this.updater = Pe || w);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (j, J) {
      if (typeof j != "object" && typeof j != "function" && j != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, j, J, "setState");
    }),
    (R.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, "forceUpdate");
    });
  function D() {}
  D.prototype = R.prototype;
  function L(j, J, Pe) {
    (this.props = j),
      (this.context = J),
      (this.refs = E),
      (this.updater = Pe || w);
  }
  var N = (L.prototype = new D());
  (N.constructor = L), F(N, R.prototype), (N.isPureReactComponent = !0);
  var q = Array.isArray,
    K = Object.prototype.hasOwnProperty,
    M = { current: null },
    U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(j, J, Pe) {
    var Re,
      Be = {},
      Ee = null,
      Ie = null;
    if (J != null)
      for (Re in (J.ref !== void 0 && (Ie = J.ref),
      J.key !== void 0 && (Ee = "" + J.key),
      J))
        K.call(J, Re) && !U.hasOwnProperty(Re) && (Be[Re] = J[Re]);
    var we = arguments.length - 2;
    if (we === 1) Be.children = Pe;
    else if (1 < we) {
      for (var Je = Array(we), mt = 0; mt < we; mt++)
        Je[mt] = arguments[mt + 2];
      Be.children = Je;
    }
    if (j && j.defaultProps)
      for (Re in ((we = j.defaultProps), we))
        Be[Re] === void 0 && (Be[Re] = we[Re]);
    return {
      $$typeof: r,
      type: j,
      key: Ee,
      ref: Ie,
      props: Be,
      _owner: M.current,
    };
  }
  function te(j, J) {
    return {
      $$typeof: r,
      type: j.type,
      key: J,
      ref: j.ref,
      props: j.props,
      _owner: j._owner,
    };
  }
  function ee(j) {
    return typeof j == "object" && j !== null && j.$$typeof === r;
  }
  function ie(j) {
    var J = { "=": "=0", ":": "=2" };
    return (
      "$" +
      j.replace(/[=:]/g, function (Pe) {
        return J[Pe];
      })
    );
  }
  var ce = /\/+/g;
  function Y(j, J) {
    return typeof j == "object" && j !== null && j.key != null
      ? ie("" + j.key)
      : J.toString(36);
  }
  function xe(j, J, Pe, Re, Be) {
    var Ee = typeof j;
    (Ee === "undefined" || Ee === "boolean") && (j = null);
    var Ie = !1;
    if (j === null) Ie = !0;
    else
      switch (Ee) {
        case "string":
        case "number":
          Ie = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case r:
            case e:
              Ie = !0;
          }
      }
    if (Ie)
      return (
        (Ie = j),
        (Be = Be(Ie)),
        (j = Re === "" ? "." + Y(Ie, 0) : Re),
        q(Be)
          ? ((Pe = ""),
            j != null && (Pe = j.replace(ce, "$&/") + "/"),
            xe(Be, J, Pe, "", function (mt) {
              return mt;
            }))
          : Be != null &&
            (ee(Be) &&
              (Be = te(
                Be,
                Pe +
                  (!Be.key || (Ie && Ie.key === Be.key)
                    ? ""
                    : ("" + Be.key).replace(ce, "$&/") + "/") +
                  j
              )),
            J.push(Be)),
        1
      );
    if (((Ie = 0), (Re = Re === "" ? "." : Re + ":"), q(j)))
      for (var we = 0; we < j.length; we++) {
        Ee = j[we];
        var Je = Re + Y(Ee, we);
        Ie += xe(Ee, J, Pe, Je, Be);
      }
    else if (((Je = x(j)), typeof Je == "function"))
      for (j = Je.call(j), we = 0; !(Ee = j.next()).done; )
        (Ee = Ee.value), (Je = Re + Y(Ee, we++)), (Ie += xe(Ee, J, Pe, Je, Be));
    else if (Ee === "object")
      throw (
        ((J = String(j)),
        Error(
          "Objects are not valid as a React child (found: " +
            (J === "[object Object]"
              ? "object with keys {" + Object.keys(j).join(", ") + "}"
              : J) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Ie;
  }
  function Se(j, J, Pe) {
    if (j == null) return j;
    var Re = [],
      Be = 0;
    return (
      xe(j, Re, "", "", function (Ee) {
        return J.call(Pe, Ee, Be++);
      }),
      Re
    );
  }
  function de(j) {
    if (j._status === -1) {
      var J = j._result;
      (J = J()),
        J.then(
          function (Pe) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 1), (j._result = Pe));
          },
          function (Pe) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 2), (j._result = Pe));
          }
        ),
        j._status === -1 && ((j._status = 0), (j._result = J));
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var le = { current: null },
    re = { transition: null },
    ge = {
      ReactCurrentDispatcher: le,
      ReactCurrentBatchConfig: re,
      ReactCurrentOwner: M,
    };
  function me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (nt.Children = {
      map: Se,
      forEach: function (j, J, Pe) {
        Se(
          j,
          function () {
            J.apply(this, arguments);
          },
          Pe
        );
      },
      count: function (j) {
        var J = 0;
        return (
          Se(j, function () {
            J++;
          }),
          J
        );
      },
      toArray: function (j) {
        return (
          Se(j, function (J) {
            return J;
          }) || []
        );
      },
      only: function (j) {
        if (!ee(j))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return j;
      },
    }),
    (nt.Component = R),
    (nt.Fragment = t),
    (nt.Profiler = a),
    (nt.PureComponent = L),
    (nt.StrictMode = i),
    (nt.Suspense = d),
    (nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge),
    (nt.act = me),
    (nt.cloneElement = function (j, J, Pe) {
      if (j == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            j +
            "."
        );
      var Re = F({}, j.props),
        Be = j.key,
        Ee = j.ref,
        Ie = j._owner;
      if (J != null) {
        if (
          (J.ref !== void 0 && ((Ee = J.ref), (Ie = M.current)),
          J.key !== void 0 && (Be = "" + J.key),
          j.type && j.type.defaultProps)
        )
          var we = j.type.defaultProps;
        for (Je in J)
          K.call(J, Je) &&
            !U.hasOwnProperty(Je) &&
            (Re[Je] = J[Je] === void 0 && we !== void 0 ? we[Je] : J[Je]);
      }
      var Je = arguments.length - 2;
      if (Je === 1) Re.children = Pe;
      else if (1 < Je) {
        we = Array(Je);
        for (var mt = 0; mt < Je; mt++) we[mt] = arguments[mt + 2];
        Re.children = we;
      }
      return {
        $$typeof: r,
        type: j.type,
        key: Be,
        ref: Ee,
        props: Re,
        _owner: Ie,
      };
    }),
    (nt.createContext = function (j) {
      return (
        (j = {
          $$typeof: s,
          _currentValue: j,
          _currentValue2: j,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (j.Provider = { $$typeof: u, _context: j }),
        (j.Consumer = j)
      );
    }),
    (nt.createElement = _),
    (nt.createFactory = function (j) {
      var J = _.bind(null, j);
      return (J.type = j), J;
    }),
    (nt.createRef = function () {
      return { current: null };
    }),
    (nt.forwardRef = function (j) {
      return { $$typeof: c, render: j };
    }),
    (nt.isValidElement = ee),
    (nt.lazy = function (j) {
      return { $$typeof: y, _payload: { _status: -1, _result: j }, _init: de };
    }),
    (nt.memo = function (j, J) {
      return { $$typeof: h, type: j, compare: J === void 0 ? null : J };
    }),
    (nt.startTransition = function (j) {
      var J = re.transition;
      re.transition = {};
      try {
        j();
      } finally {
        re.transition = J;
      }
    }),
    (nt.unstable_act = me),
    (nt.useCallback = function (j, J) {
      return le.current.useCallback(j, J);
    }),
    (nt.useContext = function (j) {
      return le.current.useContext(j);
    }),
    (nt.useDebugValue = function () {}),
    (nt.useDeferredValue = function (j) {
      return le.current.useDeferredValue(j);
    }),
    (nt.useEffect = function (j, J) {
      return le.current.useEffect(j, J);
    }),
    (nt.useId = function () {
      return le.current.useId();
    }),
    (nt.useImperativeHandle = function (j, J, Pe) {
      return le.current.useImperativeHandle(j, J, Pe);
    }),
    (nt.useInsertionEffect = function (j, J) {
      return le.current.useInsertionEffect(j, J);
    }),
    (nt.useLayoutEffect = function (j, J) {
      return le.current.useLayoutEffect(j, J);
    }),
    (nt.useMemo = function (j, J) {
      return le.current.useMemo(j, J);
    }),
    (nt.useReducer = function (j, J, Pe) {
      return le.current.useReducer(j, J, Pe);
    }),
    (nt.useRef = function (j) {
      return le.current.useRef(j);
    }),
    (nt.useState = function (j) {
      return le.current.useState(j);
    }),
    (nt.useSyncExternalStore = function (j, J, Pe) {
      return le.current.useSyncExternalStore(j, J, Pe);
    }),
    (nt.useTransition = function () {
      return le.current.useTransition();
    }),
    (nt.version = "18.3.1"),
    nt
  );
}
var Xh;
function Gf() {
  return Xh || ((Xh = 1), (vf.exports = qg())), vf.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zh;
function Kg() {
  if (Zh) return na;
  Zh = 1;
  var r = Gf(),
    e = Symbol.for("react.element"),
    t = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, d, h) {
    var y,
      m = {},
      x = null,
      w = null;
    h !== void 0 && (x = "" + h),
      d.key !== void 0 && (x = "" + d.key),
      d.ref !== void 0 && (w = d.ref);
    for (y in d) i.call(d, y) && !u.hasOwnProperty(y) && (m[y] = d[y]);
    if (c && c.defaultProps)
      for (y in ((d = c.defaultProps), d)) m[y] === void 0 && (m[y] = d[y]);
    return {
      $$typeof: e,
      type: c,
      key: x,
      ref: w,
      props: m,
      _owner: a.current,
    };
  }
  return (na.Fragment = t), (na.jsx = s), (na.jsxs = s), na;
}
var Yh;
function Hg() {
  return Yh || ((Yh = 1), (pf.exports = Kg())), pf.exports;
}
var Xe = Hg(),
  Xf = Gf(),
  Uu = {},
  gf = { exports: {} },
  Pr = {},
  yf = { exports: {} },
  mf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qh;
function Gg() {
  return (
    Qh ||
      ((Qh = 1),
      (function (r) {
        function e(re, ge) {
          var me = re.length;
          re.push(ge);
          e: for (; 0 < me; ) {
            var j = (me - 1) >>> 1,
              J = re[j];
            if (0 < a(J, ge)) (re[j] = ge), (re[me] = J), (me = j);
            else break e;
          }
        }
        function t(re) {
          return re.length === 0 ? null : re[0];
        }
        function i(re) {
          if (re.length === 0) return null;
          var ge = re[0],
            me = re.pop();
          if (me !== ge) {
            re[0] = me;
            e: for (var j = 0, J = re.length, Pe = J >>> 1; j < Pe; ) {
              var Re = 2 * (j + 1) - 1,
                Be = re[Re],
                Ee = Re + 1,
                Ie = re[Ee];
              if (0 > a(Be, me))
                Ee < J && 0 > a(Ie, Be)
                  ? ((re[j] = Ie), (re[Ee] = me), (j = Ee))
                  : ((re[j] = Be), (re[Re] = me), (j = Re));
              else if (Ee < J && 0 > a(Ie, me))
                (re[j] = Ie), (re[Ee] = me), (j = Ee);
              else break e;
            }
          }
          return ge;
        }
        function a(re, ge) {
          var me = re.sortIndex - ge.sortIndex;
          return me !== 0 ? me : re.id - ge.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          r.unstable_now = function () {
            return u.now();
          };
        } else {
          var s = Date,
            c = s.now();
          r.unstable_now = function () {
            return s.now() - c;
          };
        }
        var d = [],
          h = [],
          y = 1,
          m = null,
          x = 3,
          w = !1,
          F = !1,
          E = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          D = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function N(re) {
          for (var ge = t(h); ge !== null; ) {
            if (ge.callback === null) i(h);
            else if (ge.startTime <= re)
              i(h), (ge.sortIndex = ge.expirationTime), e(d, ge);
            else break;
            ge = t(h);
          }
        }
        function q(re) {
          if (((E = !1), N(re), !F))
            if (t(d) !== null) (F = !0), de(K);
            else {
              var ge = t(h);
              ge !== null && le(q, ge.startTime - re);
            }
        }
        function K(re, ge) {
          (F = !1), E && ((E = !1), D(_), (_ = -1)), (w = !0);
          var me = x;
          try {
            for (
              N(ge), m = t(d);
              m !== null && (!(m.expirationTime > ge) || (re && !ie()));

            ) {
              var j = m.callback;
              if (typeof j == "function") {
                (m.callback = null), (x = m.priorityLevel);
                var J = j(m.expirationTime <= ge);
                (ge = r.unstable_now()),
                  typeof J == "function"
                    ? (m.callback = J)
                    : m === t(d) && i(d),
                  N(ge);
              } else i(d);
              m = t(d);
            }
            if (m !== null) var Pe = !0;
            else {
              var Re = t(h);
              Re !== null && le(q, Re.startTime - ge), (Pe = !1);
            }
            return Pe;
          } finally {
            (m = null), (x = me), (w = !1);
          }
        }
        var M = !1,
          U = null,
          _ = -1,
          te = 5,
          ee = -1;
        function ie() {
          return !(r.unstable_now() - ee < te);
        }
        function ce() {
          if (U !== null) {
            var re = r.unstable_now();
            ee = re;
            var ge = !0;
            try {
              ge = U(!0, re);
            } finally {
              ge ? Y() : ((M = !1), (U = null));
            }
          } else M = !1;
        }
        var Y;
        if (typeof L == "function")
          Y = function () {
            L(ce);
          };
        else if (typeof MessageChannel < "u") {
          var xe = new MessageChannel(),
            Se = xe.port2;
          (xe.port1.onmessage = ce),
            (Y = function () {
              Se.postMessage(null);
            });
        } else
          Y = function () {
            R(ce, 0);
          };
        function de(re) {
          (U = re), M || ((M = !0), Y());
        }
        function le(re, ge) {
          _ = R(function () {
            re(r.unstable_now());
          }, ge);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (re) {
            re.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            F || w || ((F = !0), de(K));
          }),
          (r.unstable_forceFrameRate = function (re) {
            0 > re || 125 < re
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (te = 0 < re ? Math.floor(1e3 / re) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return t(d);
          }),
          (r.unstable_next = function (re) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var ge = 3;
                break;
              default:
                ge = x;
            }
            var me = x;
            x = ge;
            try {
              return re();
            } finally {
              x = me;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (re, ge) {
            switch (re) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                re = 3;
            }
            var me = x;
            x = re;
            try {
              return ge();
            } finally {
              x = me;
            }
          }),
          (r.unstable_scheduleCallback = function (re, ge, me) {
            var j = r.unstable_now();
            switch (
              (typeof me == "object" && me !== null
                ? ((me = me.delay),
                  (me = typeof me == "number" && 0 < me ? j + me : j))
                : (me = j),
              re)
            ) {
              case 1:
                var J = -1;
                break;
              case 2:
                J = 250;
                break;
              case 5:
                J = 1073741823;
                break;
              case 4:
                J = 1e4;
                break;
              default:
                J = 5e3;
            }
            return (
              (J = me + J),
              (re = {
                id: y++,
                callback: ge,
                priorityLevel: re,
                startTime: me,
                expirationTime: J,
                sortIndex: -1,
              }),
              me > j
                ? ((re.sortIndex = me),
                  e(h, re),
                  t(d) === null &&
                    re === t(h) &&
                    (E ? (D(_), (_ = -1)) : (E = !0), le(q, me - j)))
                : ((re.sortIndex = J), e(d, re), F || w || ((F = !0), de(K))),
              re
            );
          }),
          (r.unstable_shouldYield = ie),
          (r.unstable_wrapCallback = function (re) {
            var ge = x;
            return function () {
              var me = x;
              x = ge;
              try {
                return re.apply(this, arguments);
              } finally {
                x = me;
              }
            };
          });
      })(mf)),
    mf
  );
}
var Jh;
function Xg() {
  return Jh || ((Jh = 1), (yf.exports = Gg())), yf.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _h;
function Zg() {
  if (_h) return Pr;
  _h = 1;
  var r = Gf(),
    e = Xg();
  function t(n) {
    for (
      var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + n,
        l = 1;
      l < arguments.length;
      l++
    )
      o += "&args[]=" + encodeURIComponent(arguments[l]);
    return (
      "Minified React error #" +
      n +
      "; visit " +
      o +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var i = new Set(),
    a = {};
  function u(n, o) {
    s(n, o), s(n + "Capture", o);
  }
  function s(n, o) {
    for (a[n] = o, n = 0; n < o.length; n++) i.add(o[n]);
  }
  var c = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    d = Object.prototype.hasOwnProperty,
    h =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    m = {};
  function x(n) {
    return d.call(m, n)
      ? !0
      : d.call(y, n)
      ? !1
      : h.test(n)
      ? (m[n] = !0)
      : ((y[n] = !0), !1);
  }
  function w(n, o, l, f) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof o) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f
          ? !1
          : l !== null
          ? !l.acceptsBooleans
          : ((n = n.toLowerCase().slice(0, 5)), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function F(n, o, l, f) {
    if (o === null || typeof o > "u" || w(n, o, l, f)) return !0;
    if (f) return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !o;
        case 4:
          return o === !1;
        case 5:
          return isNaN(o);
        case 6:
          return isNaN(o) || 1 > o;
      }
    return !1;
  }
  function E(n, o, l, f, p, g, S) {
    (this.acceptsBooleans = o === 2 || o === 3 || o === 4),
      (this.attributeName = f),
      (this.attributeNamespace = p),
      (this.mustUseProperty = l),
      (this.propertyName = n),
      (this.type = o),
      (this.sanitizeURL = g),
      (this.removeEmptyString = S);
  }
  var R = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (n) {
      R[n] = new E(n, 0, !1, n, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (n) {
      var o = n[0];
      R[o] = new E(o, 1, !1, n[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      n
    ) {
      R[n] = new E(n, 2, !1, n.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (n) {
      R[n] = new E(n, 2, !1, n, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (n) {
        R[n] = new E(n, 3, !1, n.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (n) {
      R[n] = new E(n, 3, !0, n, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (n) {
      R[n] = new E(n, 4, !1, n, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (n) {
      R[n] = new E(n, 6, !1, n, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (n) {
      R[n] = new E(n, 5, !1, n.toLowerCase(), null, !1, !1);
    });
  var D = /[\-:]([a-z])/g;
  function L(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (n) {
      var o = n.replace(D, L);
      R[o] = new E(o, 1, !1, n, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (n) {
        var o = n.replace(D, L);
        R[o] = new E(o, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
      var o = n.replace(D, L);
      R[o] = new E(o, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (n) {
      R[n] = new E(n, 1, !1, n.toLowerCase(), null, !1, !1);
    }),
    (R.xlinkHref = new E(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (n) {
      R[n] = new E(n, 1, !1, n.toLowerCase(), null, !0, !0);
    });
  function N(n, o, l, f) {
    var p = R.hasOwnProperty(o) ? R[o] : null;
    (p !== null
      ? p.type !== 0
      : f ||
        !(2 < o.length) ||
        (o[0] !== "o" && o[0] !== "O") ||
        (o[1] !== "n" && o[1] !== "N")) &&
      (F(o, l, p, f) && (l = null),
      f || p === null
        ? x(o) &&
          (l === null ? n.removeAttribute(o) : n.setAttribute(o, "" + l))
        : p.mustUseProperty
        ? (n[p.propertyName] = l === null ? (p.type === 3 ? !1 : "") : l)
        : ((o = p.attributeName),
          (f = p.attributeNamespace),
          l === null
            ? n.removeAttribute(o)
            : ((p = p.type),
              (l = p === 3 || (p === 4 && l === !0) ? "" : "" + l),
              f ? n.setAttributeNS(f, o, l) : n.setAttribute(o, l))));
  }
  var q = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    K = Symbol.for("react.element"),
    M = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    te = Symbol.for("react.profiler"),
    ee = Symbol.for("react.provider"),
    ie = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    Y = Symbol.for("react.suspense"),
    xe = Symbol.for("react.suspense_list"),
    Se = Symbol.for("react.memo"),
    de = Symbol.for("react.lazy"),
    le = Symbol.for("react.offscreen"),
    re = Symbol.iterator;
  function ge(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (re && n[re]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var me = Object.assign,
    j;
  function J(n) {
    if (j === void 0)
      try {
        throw Error();
      } catch (l) {
        var o = l.stack.trim().match(/\n( *(at )?)/);
        j = (o && o[1]) || "";
      }
    return (
      `
` +
      j +
      n
    );
  }
  var Pe = !1;
  function Re(n, o) {
    if (!n || Pe) return "";
    Pe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (o)
        if (
          ((o = function () {
            throw Error();
          }),
          Object.defineProperty(o.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(o, []);
          } catch (Z) {
            var f = Z;
          }
          Reflect.construct(n, [], o);
        } else {
          try {
            o.call();
          } catch (Z) {
            f = Z;
          }
          n.call(o.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Z) {
          f = Z;
        }
        n();
      }
    } catch (Z) {
      if (Z && f && typeof Z.stack == "string") {
        for (
          var p = Z.stack.split(`
`),
            g = f.stack.split(`
`),
            S = p.length - 1,
            O = g.length - 1;
          1 <= S && 0 <= O && p[S] !== g[O];

        )
          O--;
        for (; 1 <= S && 0 <= O; S--, O--)
          if (p[S] !== g[O]) {
            if (S !== 1 || O !== 1)
              do
                if ((S--, O--, 0 > O || p[S] !== g[O])) {
                  var z =
                    `
` + p[S].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", n.displayName)),
                    z
                  );
                }
              while (1 <= S && 0 <= O);
            break;
          }
      }
    } finally {
      (Pe = !1), (Error.prepareStackTrace = l);
    }
    return (n = n ? n.displayName || n.name : "") ? J(n) : "";
  }
  function Be(n) {
    switch (n.tag) {
      case 5:
        return J(n.type);
      case 16:
        return J("Lazy");
      case 13:
        return J("Suspense");
      case 19:
        return J("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (n = Re(n.type, !1)), n;
      case 11:
        return (n = Re(n.type.render, !1)), n;
      case 1:
        return (n = Re(n.type, !0)), n;
      default:
        return "";
    }
  }
  function Ee(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case U:
        return "Fragment";
      case M:
        return "Portal";
      case te:
        return "Profiler";
      case _:
        return "StrictMode";
      case Y:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ie:
          return (n.displayName || "Context") + ".Consumer";
        case ee:
          return (n._context.displayName || "Context") + ".Provider";
        case ce:
          var o = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = o.displayName || o.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case Se:
          return (
            (o = n.displayName || null), o !== null ? o : Ee(n.type) || "Memo"
          );
        case de:
          (o = n._payload), (n = n._init);
          try {
            return Ee(n(o));
          } catch {}
      }
    return null;
  }
  function Ie(n) {
    var o = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (o.displayName || "Context") + ".Consumer";
      case 10:
        return (o._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (n = o.render),
          (n = n.displayName || n.name || ""),
          o.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return o;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ee(o);
      case 8:
        return o === _ ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof o == "function") return o.displayName || o.name || null;
        if (typeof o == "string") return o;
    }
    return null;
  }
  function we(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Je(n) {
    var o = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (o === "checkbox" || o === "radio")
    );
  }
  function mt(n) {
    var o = Je(n) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(n.constructor.prototype, o),
      f = "" + n[o];
    if (
      !n.hasOwnProperty(o) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var p = l.get,
        g = l.set;
      return (
        Object.defineProperty(n, o, {
          configurable: !0,
          get: function () {
            return p.call(this);
          },
          set: function (S) {
            (f = "" + S), g.call(this, S);
          },
        }),
        Object.defineProperty(n, o, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return f;
          },
          setValue: function (S) {
            f = "" + S;
          },
          stopTracking: function () {
            (n._valueTracker = null), delete n[o];
          },
        }
      );
    }
  }
  function _t(n) {
    n._valueTracker || (n._valueTracker = mt(n));
  }
  function ht(n) {
    if (!n) return !1;
    var o = n._valueTracker;
    if (!o) return !0;
    var l = o.getValue(),
      f = "";
    return (
      n && (f = Je(n) ? (n.checked ? "true" : "false") : n.value),
      (n = f),
      n !== l ? (o.setValue(n), !0) : !1
    );
  }
  function Ut(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rn(n, o) {
    var l = o.checked;
    return me({}, o, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: l ?? n._wrapperState.initialChecked,
    });
  }
  function dr(n, o) {
    var l = o.defaultValue == null ? "" : o.defaultValue,
      f = o.checked != null ? o.checked : o.defaultChecked;
    (l = we(o.value != null ? o.value : l)),
      (n._wrapperState = {
        initialChecked: f,
        initialValue: l,
        controlled:
          o.type === "checkbox" || o.type === "radio"
            ? o.checked != null
            : o.value != null,
      });
  }
  function ir(n, o) {
    (o = o.checked), o != null && N(n, "checked", o, !1);
  }
  function St(n, o) {
    ir(n, o);
    var l = we(o.value),
      f = o.type;
    if (l != null)
      f === "number"
        ? ((l === 0 && n.value === "") || n.value != l) && (n.value = "" + l)
        : n.value !== "" + l && (n.value = "" + l);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    o.hasOwnProperty("value")
      ? or(n, o.type, l)
      : o.hasOwnProperty("defaultValue") && or(n, o.type, we(o.defaultValue)),
      o.checked == null &&
        o.defaultChecked != null &&
        (n.defaultChecked = !!o.defaultChecked);
  }
  function tt(n, o, l) {
    if (o.hasOwnProperty("value") || o.hasOwnProperty("defaultValue")) {
      var f = o.type;
      if (
        !(
          (f !== "submit" && f !== "reset") ||
          (o.value !== void 0 && o.value !== null)
        )
      )
        return;
      (o = "" + n._wrapperState.initialValue),
        l || o === n.value || (n.value = o),
        (n.defaultValue = o);
    }
    (l = n.name),
      l !== "" && (n.name = ""),
      (n.defaultChecked = !!n._wrapperState.initialChecked),
      l !== "" && (n.name = l);
  }
  function or(n, o, l) {
    (o !== "number" || Ut(n.ownerDocument) !== n) &&
      (l == null
        ? (n.defaultValue = "" + n._wrapperState.initialValue)
        : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Mr = Array.isArray;
  function hr(n, o, l, f) {
    if (((n = n.options), o)) {
      o = {};
      for (var p = 0; p < l.length; p++) o["$" + l[p]] = !0;
      for (l = 0; l < n.length; l++)
        (p = o.hasOwnProperty("$" + n[l].value)),
          n[l].selected !== p && (n[l].selected = p),
          p && f && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + we(l), o = null, p = 0; p < n.length; p++) {
        if (n[p].value === l) {
          (n[p].selected = !0), f && (n[p].defaultSelected = !0);
          return;
        }
        o !== null || n[p].disabled || (o = n[p]);
      }
      o !== null && (o.selected = !0);
    }
  }
  function ar(n, o) {
    if (o.dangerouslySetInnerHTML != null) throw Error(t(91));
    return me({}, o, {
      value: void 0,
      defaultValue: void 0,
      children: "" + n._wrapperState.initialValue,
    });
  }
  function kn(n, o) {
    var l = o.value;
    if (l == null) {
      if (((l = o.children), (o = o.defaultValue), l != null)) {
        if (o != null) throw Error(t(92));
        if (Mr(l)) {
          if (1 < l.length) throw Error(t(93));
          l = l[0];
        }
        o = l;
      }
      o == null && (o = ""), (l = o);
    }
    n._wrapperState = { initialValue: we(l) };
  }
  function nn(n, o) {
    var l = we(o.value),
      f = we(o.defaultValue);
    l != null &&
      ((l = "" + l),
      l !== n.value && (n.value = l),
      o.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)),
      f != null && (n.defaultValue = "" + f);
  }
  function xr(n) {
    var o = n.textContent;
    o === n._wrapperState.initialValue &&
      o !== "" &&
      o !== null &&
      (n.value = o);
  }
  function Fn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ur(n, o) {
    return n == null || n === "http://www.w3.org/1999/xhtml"
      ? Fn(o)
      : n === "http://www.w3.org/2000/svg" && o === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : n;
  }
  var zt,
    Tr = (function (n) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (o, l, f, p) {
            MSApp.execUnsafeLocalFunction(function () {
              return n(o, l, f, p);
            });
          }
        : n;
    })(function (n, o) {
      if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
        n.innerHTML = o;
      else {
        for (
          zt = zt || document.createElement("div"),
            zt.innerHTML = "<svg>" + o.valueOf().toString() + "</svg>",
            o = zt.firstChild;
          n.firstChild;

        )
          n.removeChild(n.firstChild);
        for (; o.firstChild; ) n.appendChild(o.firstChild);
      }
    });
  function Lr(n, o) {
    if (o) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = o;
        return;
      }
    }
    n.textContent = o;
  }
  var C = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    oe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(C).forEach(function (n) {
    oe.forEach(function (o) {
      (o = o + n.charAt(0).toUpperCase() + n.substring(1)), (C[o] = C[n]);
    });
  });
  function he(n, o, l) {
    return o == null || typeof o == "boolean" || o === ""
      ? ""
      : l || typeof o != "number" || o === 0 || (C.hasOwnProperty(n) && C[n])
      ? ("" + o).trim()
      : o + "px";
  }
  function Ce(n, o) {
    n = n.style;
    for (var l in o)
      if (o.hasOwnProperty(l)) {
        var f = l.indexOf("--") === 0,
          p = he(l, o[l], f);
        l === "float" && (l = "cssFloat"), f ? n.setProperty(l, p) : (n[l] = p);
      }
  }
  var I = me(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function $(n, o) {
    if (o) {
      if (I[n] && (o.children != null || o.dangerouslySetInnerHTML != null))
        throw Error(t(137, n));
      if (o.dangerouslySetInnerHTML != null) {
        if (o.children != null) throw Error(t(60));
        if (
          typeof o.dangerouslySetInnerHTML != "object" ||
          !("__html" in o.dangerouslySetInnerHTML)
        )
          throw Error(t(61));
      }
      if (o.style != null && typeof o.style != "object") throw Error(t(62));
    }
  }
  function b(n, o) {
    if (n.indexOf("-") === -1) return typeof o.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ne = null;
  function Me(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var v = null,
    X = null,
    Q = null;
  function k(n) {
    if ((n = Wo(n))) {
      if (typeof v != "function") throw Error(t(280));
      var o = n.stateNode;
      o && ((o = eu(o)), v(n.stateNode, n.type, o));
    }
  }
  function A(n) {
    X ? (Q ? Q.push(n) : (Q = [n])) : (X = n);
  }
  function G() {
    if (X) {
      var n = X,
        o = Q;
      if (((Q = X = null), k(n), o)) for (n = 0; n < o.length; n++) k(o[n]);
    }
  }
  function Ae(n, o) {
    return n(o);
  }
  function be() {}
  var ke = !1;
  function it(n, o, l) {
    if (ke) return n(o, l);
    ke = !0;
    try {
      return Ae(n, o, l);
    } finally {
      (ke = !1), (X !== null || Q !== null) && (be(), G());
    }
  }
  function pr(n, o) {
    var l = n.stateNode;
    if (l === null) return null;
    var f = eu(l);
    if (f === null) return null;
    l = f[o];
    e: switch (o) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (f = !f.disabled) ||
          ((n = n.type),
          (f = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !f);
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(t(231, o, typeof l));
    return l;
  }
  var bt = !1;
  if (c)
    try {
      var rt = {};
      Object.defineProperty(rt, "passive", {
        get: function () {
          bt = !0;
        },
      }),
        window.addEventListener("test", rt, rt),
        window.removeEventListener("test", rt, rt);
    } catch {
      bt = !1;
    }
  function Nt(n, o, l, f, p, g, S, O, z) {
    var Z = Array.prototype.slice.call(arguments, 3);
    try {
      o.apply(l, Z);
    } catch (se) {
      this.onError(se);
    }
  }
  var Dt = !1,
    Lt = null,
    Cn = !1,
    Ln = null,
    Ot = {
      onError: function (n) {
        (Dt = !0), (Lt = n);
      },
    };
  function wr(n, o, l, f, p, g, S, O, z) {
    (Dt = !1), (Lt = null), Nt.apply(Ot, arguments);
  }
  function Vt(n, o, l, f, p, g, S, O, z) {
    if ((wr.apply(this, arguments), Dt)) {
      if (Dt) {
        var Z = Lt;
        (Dt = !1), (Lt = null);
      } else throw Error(t(198));
      Cn || ((Cn = !0), (Ln = Z));
    }
  }
  function $t(n) {
    var o = n,
      l = n;
    if (n.alternate) for (; o.return; ) o = o.return;
    else {
      n = o;
      do (o = n), o.flags & 4098 && (l = o.return), (n = o.return);
      while (n);
    }
    return o.tag === 3 ? l : null;
  }
  function Rr(n) {
    if (n.tag === 13) {
      var o = n.memoizedState;
      if (
        (o === null && ((n = n.alternate), n !== null && (o = n.memoizedState)),
        o !== null)
      )
        return o.dehydrated;
    }
    return null;
  }
  function ko(n) {
    if ($t(n) !== n) throw Error(t(188));
  }
  function $p(n) {
    var o = n.alternate;
    if (!o) {
      if (((o = $t(n)), o === null)) throw Error(t(188));
      return o !== n ? null : n;
    }
    for (var l = n, f = o; ; ) {
      var p = l.return;
      if (p === null) break;
      var g = p.alternate;
      if (g === null) {
        if (((f = p.return), f !== null)) {
          l = f;
          continue;
        }
        break;
      }
      if (p.child === g.child) {
        for (g = p.child; g; ) {
          if (g === l) return ko(p), n;
          if (g === f) return ko(p), o;
          g = g.sibling;
        }
        throw Error(t(188));
      }
      if (l.return !== f.return) (l = p), (f = g);
      else {
        for (var S = !1, O = p.child; O; ) {
          if (O === l) {
            (S = !0), (l = p), (f = g);
            break;
          }
          if (O === f) {
            (S = !0), (f = p), (l = g);
            break;
          }
          O = O.sibling;
        }
        if (!S) {
          for (O = g.child; O; ) {
            if (O === l) {
              (S = !0), (l = g), (f = p);
              break;
            }
            if (O === f) {
              (S = !0), (f = g), (l = p);
              break;
            }
            O = O.sibling;
          }
          if (!S) throw Error(t(189));
        }
      }
      if (l.alternate !== f) throw Error(t(190));
    }
    if (l.tag !== 3) throw Error(t(188));
    return l.stateNode.current === l ? n : o;
  }
  function yc(n) {
    return (n = $p(n)), n !== null ? mc(n) : null;
  }
  function mc(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var o = mc(n);
      if (o !== null) return o;
      n = n.sibling;
    }
    return null;
  }
  var xc = e.unstable_scheduleCallback,
    wc = e.unstable_cancelCallback,
    ev = e.unstable_shouldYield,
    tv = e.unstable_requestPaint,
    jt = e.unstable_now,
    rv = e.unstable_getCurrentPriorityLevel,
    zl = e.unstable_ImmediatePriority,
    Sc = e.unstable_UserBlockingPriority,
    Na = e.unstable_NormalPriority,
    nv = e.unstable_LowPriority,
    bc = e.unstable_IdlePriority,
    ja = null,
    gn = null;
  function iv(n) {
    if (gn && typeof gn.onCommitFiberRoot == "function")
      try {
        gn.onCommitFiberRoot(ja, n, void 0, (n.current.flags & 128) === 128);
      } catch {}
  }
  var on = Math.clz32 ? Math.clz32 : uv,
    ov = Math.log,
    av = Math.LN2;
  function uv(n) {
    return (n >>>= 0), n === 0 ? 32 : (31 - ((ov(n) / av) | 0)) | 0;
  }
  var Ba = 64,
    Ia = 4194304;
  function Fo(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ma(n, o) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var f = 0,
      p = n.suspendedLanes,
      g = n.pingedLanes,
      S = l & 268435455;
    if (S !== 0) {
      var O = S & ~p;
      O !== 0 ? (f = Fo(O)) : ((g &= S), g !== 0 && (f = Fo(g)));
    } else (S = l & ~p), S !== 0 ? (f = Fo(S)) : g !== 0 && (f = Fo(g));
    if (f === 0) return 0;
    if (
      o !== 0 &&
      o !== f &&
      !(o & p) &&
      ((p = f & -f), (g = o & -o), p >= g || (p === 16 && (g & 4194240) !== 0))
    )
      return o;
    if ((f & 4 && (f |= l & 16), (o = n.entangledLanes), o !== 0))
      for (n = n.entanglements, o &= f; 0 < o; )
        (l = 31 - on(o)), (p = 1 << l), (f |= n[l]), (o &= ~p);
    return f;
  }
  function lv(n, o) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return o + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return o + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function sv(n, o) {
    for (
      var l = n.suspendedLanes,
        f = n.pingedLanes,
        p = n.expirationTimes,
        g = n.pendingLanes;
      0 < g;

    ) {
      var S = 31 - on(g),
        O = 1 << S,
        z = p[S];
      z === -1
        ? (!(O & l) || O & f) && (p[S] = lv(O, o))
        : z <= o && (n.expiredLanes |= O),
        (g &= ~O);
    }
  }
  function Nl(n) {
    return (
      (n = n.pendingLanes & -1073741825),
      n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    );
  }
  function kc() {
    var n = Ba;
    return (Ba <<= 1), !(Ba & 4194240) && (Ba = 64), n;
  }
  function jl(n) {
    for (var o = [], l = 0; 31 > l; l++) o.push(n);
    return o;
  }
  function Co(n, o, l) {
    (n.pendingLanes |= o),
      o !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
      (n = n.eventTimes),
      (o = 31 - on(o)),
      (n[o] = l);
  }
  function fv(n, o) {
    var l = n.pendingLanes & ~o;
    (n.pendingLanes = o),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.expiredLanes &= o),
      (n.mutableReadLanes &= o),
      (n.entangledLanes &= o),
      (o = n.entanglements);
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var p = 31 - on(l),
        g = 1 << p;
      (o[p] = 0), (f[p] = -1), (n[p] = -1), (l &= ~g);
    }
  }
  function Bl(n, o) {
    var l = (n.entangledLanes |= o);
    for (n = n.entanglements; l; ) {
      var f = 31 - on(l),
        p = 1 << f;
      (p & o) | (n[f] & o) && (n[f] |= o), (l &= ~p);
    }
  }
  var xt = 0;
  function Fc(n) {
    return (
      (n &= -n), 1 < n ? (4 < n ? (n & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Cc,
    Il,
    Pc,
    Ec,
    Tc,
    Ml = !1,
    Ua = [],
    Vn = null,
    Wn = null,
    qn = null,
    Po = new Map(),
    Eo = new Map(),
    Kn = [],
    cv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Rc(n, o) {
    switch (n) {
      case "focusin":
      case "focusout":
        Vn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wn = null;
        break;
      case "mouseover":
      case "mouseout":
        qn = null;
        break;
      case "pointerover":
      case "pointerout":
        Po.delete(o.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Eo.delete(o.pointerId);
    }
  }
  function To(n, o, l, f, p, g) {
    return n === null || n.nativeEvent !== g
      ? ((n = {
          blockedOn: o,
          domEventName: l,
          eventSystemFlags: f,
          nativeEvent: g,
          targetContainers: [p],
        }),
        o !== null && ((o = Wo(o)), o !== null && Il(o)),
        n)
      : ((n.eventSystemFlags |= f),
        (o = n.targetContainers),
        p !== null && o.indexOf(p) === -1 && o.push(p),
        n);
  }
  function dv(n, o, l, f, p) {
    switch (o) {
      case "focusin":
        return (Vn = To(Vn, n, o, l, f, p)), !0;
      case "dragenter":
        return (Wn = To(Wn, n, o, l, f, p)), !0;
      case "mouseover":
        return (qn = To(qn, n, o, l, f, p)), !0;
      case "pointerover":
        var g = p.pointerId;
        return Po.set(g, To(Po.get(g) || null, n, o, l, f, p)), !0;
      case "gotpointercapture":
        return (
          (g = p.pointerId), Eo.set(g, To(Eo.get(g) || null, n, o, l, f, p)), !0
        );
    }
    return !1;
  }
  function Dc(n) {
    var o = mi(n.target);
    if (o !== null) {
      var l = $t(o);
      if (l !== null) {
        if (((o = l.tag), o === 13)) {
          if (((o = Rr(l)), o !== null)) {
            (n.blockedOn = o),
              Tc(n.priority, function () {
                Pc(l);
              });
            return;
          }
        } else if (o === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function La(n) {
    if (n.blockedOn !== null) return !1;
    for (var o = n.targetContainers; 0 < o.length; ) {
      var l = Ll(n.domEventName, n.eventSystemFlags, o[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var f = new l.constructor(l.type, l);
        (ne = f), l.target.dispatchEvent(f), (ne = null);
      } else return (o = Wo(l)), o !== null && Il(o), (n.blockedOn = l), !1;
      o.shift();
    }
    return !0;
  }
  function Oc(n, o, l) {
    La(n) && l.delete(o);
  }
  function hv() {
    (Ml = !1),
      Vn !== null && La(Vn) && (Vn = null),
      Wn !== null && La(Wn) && (Wn = null),
      qn !== null && La(qn) && (qn = null),
      Po.forEach(Oc),
      Eo.forEach(Oc);
  }
  function Ro(n, o) {
    n.blockedOn === o &&
      ((n.blockedOn = null),
      Ml ||
        ((Ml = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, hv)));
  }
  function Do(n) {
    function o(p) {
      return Ro(p, n);
    }
    if (0 < Ua.length) {
      Ro(Ua[0], n);
      for (var l = 1; l < Ua.length; l++) {
        var f = Ua[l];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (
      Vn !== null && Ro(Vn, n),
        Wn !== null && Ro(Wn, n),
        qn !== null && Ro(qn, n),
        Po.forEach(o),
        Eo.forEach(o),
        l = 0;
      l < Kn.length;
      l++
    )
      (f = Kn[l]), f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Kn.length && ((l = Kn[0]), l.blockedOn === null); )
      Dc(l), l.blockedOn === null && Kn.shift();
  }
  var Mi = q.ReactCurrentBatchConfig,
    Va = !0;
  function pv(n, o, l, f) {
    var p = xt,
      g = Mi.transition;
    Mi.transition = null;
    try {
      (xt = 1), Ul(n, o, l, f);
    } finally {
      (xt = p), (Mi.transition = g);
    }
  }
  function vv(n, o, l, f) {
    var p = xt,
      g = Mi.transition;
    Mi.transition = null;
    try {
      (xt = 4), Ul(n, o, l, f);
    } finally {
      (xt = p), (Mi.transition = g);
    }
  }
  function Ul(n, o, l, f) {
    if (Va) {
      var p = Ll(n, o, l, f);
      if (p === null) ns(n, o, f, Wa, l), Rc(n, f);
      else if (dv(p, n, o, l, f)) f.stopPropagation();
      else if ((Rc(n, f), o & 4 && -1 < cv.indexOf(n))) {
        for (; p !== null; ) {
          var g = Wo(p);
          if (
            (g !== null && Cc(g),
            (g = Ll(n, o, l, f)),
            g === null && ns(n, o, f, Wa, l),
            g === p)
          )
            break;
          p = g;
        }
        p !== null && f.stopPropagation();
      } else ns(n, o, f, null, l);
    }
  }
  var Wa = null;
  function Ll(n, o, l, f) {
    if (((Wa = null), (n = Me(f)), (n = mi(n)), n !== null))
      if (((o = $t(n)), o === null)) n = null;
      else if (((l = o.tag), l === 13)) {
        if (((n = Rr(o)), n !== null)) return n;
        n = null;
      } else if (l === 3) {
        if (o.stateNode.current.memoizedState.isDehydrated)
          return o.tag === 3 ? o.stateNode.containerInfo : null;
        n = null;
      } else o !== n && (n = null);
    return (Wa = n), null;
  }
  function Ac(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (rv()) {
          case zl:
            return 1;
          case Sc:
            return 4;
          case Na:
          case nv:
            return 16;
          case bc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Hn = null,
    Vl = null,
    qa = null;
  function zc() {
    if (qa) return qa;
    var n,
      o = Vl,
      l = o.length,
      f,
      p = "value" in Hn ? Hn.value : Hn.textContent,
      g = p.length;
    for (n = 0; n < l && o[n] === p[n]; n++);
    var S = l - n;
    for (f = 1; f <= S && o[l - f] === p[g - f]; f++);
    return (qa = p.slice(n, 1 < f ? 1 - f : void 0));
  }
  function Ka(n) {
    var o = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && o === 13 && (n = 13))
        : (n = o),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function Ha() {
    return !0;
  }
  function Nc() {
    return !1;
  }
  function Dr(n) {
    function o(l, f, p, g, S) {
      (this._reactName = l),
        (this._targetInst = p),
        (this.type = f),
        (this.nativeEvent = g),
        (this.target = S),
        (this.currentTarget = null);
      for (var O in n)
        n.hasOwnProperty(O) && ((l = n[O]), (this[O] = l ? l(g) : g[O]));
      return (
        (this.isDefaultPrevented = (
          g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1
        )
          ? Ha
          : Nc),
        (this.isPropagationStopped = Nc),
        this
      );
    }
    return (
      me(o.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Ha));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Ha));
        },
        persist: function () {},
        isPersistent: Ha,
      }),
      o
    );
  }
  var Ui = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wl = Dr(Ui),
    Oo = me({}, Ui, { view: 0, detail: 0 }),
    gv = Dr(Oo),
    ql,
    Kl,
    Ao,
    Ga = me({}, Oo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Gl,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== Ao &&
              (Ao && n.type === "mousemove"
                ? ((ql = n.screenX - Ao.screenX), (Kl = n.screenY - Ao.screenY))
                : (Kl = ql = 0),
              (Ao = n)),
            ql);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : Kl;
      },
    }),
    jc = Dr(Ga),
    yv = me({}, Ga, { dataTransfer: 0 }),
    mv = Dr(yv),
    xv = me({}, Oo, { relatedTarget: 0 }),
    Hl = Dr(xv),
    wv = me({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sv = Dr(wv),
    bv = me({}, Ui, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    kv = Dr(bv),
    Fv = me({}, Ui, { data: 0 }),
    Bc = Dr(Fv),
    Cv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Pv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Ev = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Tv(n) {
    var o = this.nativeEvent;
    return o.getModifierState
      ? o.getModifierState(n)
      : (n = Ev[n])
      ? !!o[n]
      : !1;
  }
  function Gl() {
    return Tv;
  }
  var Rv = me({}, Oo, {
      key: function (n) {
        if (n.key) {
          var o = Cv[n.key] || n.key;
          if (o !== "Unidentified") return o;
        }
        return n.type === "keypress"
          ? ((n = Ka(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
          ? Pv[n.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gl,
      charCode: function (n) {
        return n.type === "keypress" ? Ka(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? Ka(n)
          : n.type === "keydown" || n.type === "keyup"
          ? n.keyCode
          : 0;
      },
    }),
    Dv = Dr(Rv),
    Ov = me({}, Ga, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ic = Dr(Ov),
    Av = me({}, Oo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gl,
    }),
    zv = Dr(Av),
    Nv = me({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jv = Dr(Nv),
    Bv = me({}, Ga, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
          ? -n.wheelDeltaX
          : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
          ? -n.wheelDeltaY
          : "wheelDelta" in n
          ? -n.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Iv = Dr(Bv),
    Mv = [9, 13, 27, 32],
    Xl = c && "CompositionEvent" in window,
    zo = null;
  c && "documentMode" in document && (zo = document.documentMode);
  var Uv = c && "TextEvent" in window && !zo,
    Mc = c && (!Xl || (zo && 8 < zo && 11 >= zo)),
    Uc = " ",
    Lc = !1;
  function Vc(n, o) {
    switch (n) {
      case "keyup":
        return Mv.indexOf(o.keyCode) !== -1;
      case "keydown":
        return o.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wc(n) {
    return (n = n.detail), typeof n == "object" && "data" in n ? n.data : null;
  }
  var Li = !1;
  function Lv(n, o) {
    switch (n) {
      case "compositionend":
        return Wc(o);
      case "keypress":
        return o.which !== 32 ? null : ((Lc = !0), Uc);
      case "textInput":
        return (n = o.data), n === Uc && Lc ? null : n;
      default:
        return null;
    }
  }
  function Vv(n, o) {
    if (Li)
      return n === "compositionend" || (!Xl && Vc(n, o))
        ? ((n = zc()), (qa = Vl = Hn = null), (Li = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(o.ctrlKey || o.altKey || o.metaKey) || (o.ctrlKey && o.altKey)) {
          if (o.char && 1 < o.char.length) return o.char;
          if (o.which) return String.fromCharCode(o.which);
        }
        return null;
      case "compositionend":
        return Mc && o.locale !== "ko" ? null : o.data;
      default:
        return null;
    }
  }
  var Wv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function qc(n) {
    var o = n && n.nodeName && n.nodeName.toLowerCase();
    return o === "input" ? !!Wv[n.type] : o === "textarea";
  }
  function Kc(n, o, l, f) {
    A(f),
      (o = Ja(o, "onChange")),
      0 < o.length &&
        ((l = new Wl("onChange", "change", null, l, f)),
        n.push({ event: l, listeners: o }));
  }
  var No = null,
    jo = null;
  function qv(n) {
    ld(n, 0);
  }
  function Xa(n) {
    var o = Hi(n);
    if (ht(o)) return n;
  }
  function Kv(n, o) {
    if (n === "change") return o;
  }
  var Hc = !1;
  if (c) {
    var Zl;
    if (c) {
      var Yl = "oninput" in document;
      if (!Yl) {
        var Gc = document.createElement("div");
        Gc.setAttribute("oninput", "return;"),
          (Yl = typeof Gc.oninput == "function");
      }
      Zl = Yl;
    } else Zl = !1;
    Hc = Zl && (!document.documentMode || 9 < document.documentMode);
  }
  function Xc() {
    No && (No.detachEvent("onpropertychange", Zc), (jo = No = null));
  }
  function Zc(n) {
    if (n.propertyName === "value" && Xa(jo)) {
      var o = [];
      Kc(o, jo, n, Me(n)), it(qv, o);
    }
  }
  function Hv(n, o, l) {
    n === "focusin"
      ? (Xc(), (No = o), (jo = l), No.attachEvent("onpropertychange", Zc))
      : n === "focusout" && Xc();
  }
  function Gv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Xa(jo);
  }
  function Xv(n, o) {
    if (n === "click") return Xa(o);
  }
  function Zv(n, o) {
    if (n === "input" || n === "change") return Xa(o);
  }
  function Yv(n, o) {
    return (n === o && (n !== 0 || 1 / n === 1 / o)) || (n !== n && o !== o);
  }
  var an = typeof Object.is == "function" ? Object.is : Yv;
  function Bo(n, o) {
    if (an(n, o)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof o != "object" ||
      o === null
    )
      return !1;
    var l = Object.keys(n),
      f = Object.keys(o);
    if (l.length !== f.length) return !1;
    for (f = 0; f < l.length; f++) {
      var p = l[f];
      if (!d.call(o, p) || !an(n[p], o[p])) return !1;
    }
    return !0;
  }
  function Yc(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Qc(n, o) {
    var l = Yc(n);
    n = 0;
    for (var f; l; ) {
      if (l.nodeType === 3) {
        if (((f = n + l.textContent.length), n <= o && f >= o))
          return { node: l, offset: o - n };
        n = f;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Yc(l);
    }
  }
  function Jc(n, o) {
    return n && o
      ? n === o
        ? !0
        : n && n.nodeType === 3
        ? !1
        : o && o.nodeType === 3
        ? Jc(n, o.parentNode)
        : "contains" in n
        ? n.contains(o)
        : n.compareDocumentPosition
        ? !!(n.compareDocumentPosition(o) & 16)
        : !1
      : !1;
  }
  function _c() {
    for (var n = window, o = Ut(); o instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof o.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = o.contentWindow;
      else break;
      o = Ut(n.document);
    }
    return o;
  }
  function Ql(n) {
    var o = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      o &&
      ((o === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        o === "textarea" ||
        n.contentEditable === "true")
    );
  }
  function Qv(n) {
    var o = _c(),
      l = n.focusedElem,
      f = n.selectionRange;
    if (
      o !== l &&
      l &&
      l.ownerDocument &&
      Jc(l.ownerDocument.documentElement, l)
    ) {
      if (f !== null && Ql(l)) {
        if (
          ((o = f.start),
          (n = f.end),
          n === void 0 && (n = o),
          "selectionStart" in l)
        )
          (l.selectionStart = o),
            (l.selectionEnd = Math.min(n, l.value.length));
        else if (
          ((n = ((o = l.ownerDocument || document) && o.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var p = l.textContent.length,
            g = Math.min(f.start, p);
          (f = f.end === void 0 ? g : Math.min(f.end, p)),
            !n.extend && g > f && ((p = f), (f = g), (g = p)),
            (p = Qc(l, g));
          var S = Qc(l, f);
          p &&
            S &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== p.node ||
              n.anchorOffset !== p.offset ||
              n.focusNode !== S.node ||
              n.focusOffset !== S.offset) &&
            ((o = o.createRange()),
            o.setStart(p.node, p.offset),
            n.removeAllRanges(),
            g > f
              ? (n.addRange(o), n.extend(S.node, S.offset))
              : (o.setEnd(S.node, S.offset), n.addRange(o)));
        }
      }
      for (o = [], n = l; (n = n.parentNode); )
        n.nodeType === 1 &&
          o.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < o.length; l++)
        (n = o[l]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var Jv = c && "documentMode" in document && 11 >= document.documentMode,
    Vi = null,
    Jl = null,
    Io = null,
    _l = !1;
  function $c(n, o, l) {
    var f =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    _l ||
      Vi == null ||
      Vi !== Ut(f) ||
      ((f = Vi),
      "selectionStart" in f && Ql(f)
        ? (f = { start: f.selectionStart, end: f.selectionEnd })
        : ((f = (
            (f.ownerDocument && f.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (f = {
            anchorNode: f.anchorNode,
            anchorOffset: f.anchorOffset,
            focusNode: f.focusNode,
            focusOffset: f.focusOffset,
          })),
      (Io && Bo(Io, f)) ||
        ((Io = f),
        (f = Ja(Jl, "onSelect")),
        0 < f.length &&
          ((o = new Wl("onSelect", "select", null, o, l)),
          n.push({ event: o, listeners: f }),
          (o.target = Vi))));
  }
  function Za(n, o) {
    var l = {};
    return (
      (l[n.toLowerCase()] = o.toLowerCase()),
      (l["Webkit" + n] = "webkit" + o),
      (l["Moz" + n] = "moz" + o),
      l
    );
  }
  var Wi = {
      animationend: Za("Animation", "AnimationEnd"),
      animationiteration: Za("Animation", "AnimationIteration"),
      animationstart: Za("Animation", "AnimationStart"),
      transitionend: Za("Transition", "TransitionEnd"),
    },
    $l = {},
    ed = {};
  c &&
    ((ed = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Wi.animationend.animation,
      delete Wi.animationiteration.animation,
      delete Wi.animationstart.animation),
    "TransitionEvent" in window || delete Wi.transitionend.transition);
  function Ya(n) {
    if ($l[n]) return $l[n];
    if (!Wi[n]) return n;
    var o = Wi[n],
      l;
    for (l in o) if (o.hasOwnProperty(l) && l in ed) return ($l[n] = o[l]);
    return n;
  }
  var td = Ya("animationend"),
    rd = Ya("animationiteration"),
    nd = Ya("animationstart"),
    id = Ya("transitionend"),
    od = new Map(),
    ad =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Gn(n, o) {
    od.set(n, o), u(o, [n]);
  }
  for (var es = 0; es < ad.length; es++) {
    var ts = ad[es],
      _v = ts.toLowerCase(),
      $v = ts[0].toUpperCase() + ts.slice(1);
    Gn(_v, "on" + $v);
  }
  Gn(td, "onAnimationEnd"),
    Gn(rd, "onAnimationIteration"),
    Gn(nd, "onAnimationStart"),
    Gn("dblclick", "onDoubleClick"),
    Gn("focusin", "onFocus"),
    Gn("focusout", "onBlur"),
    Gn(id, "onTransitionEnd"),
    s("onMouseEnter", ["mouseout", "mouseover"]),
    s("onMouseLeave", ["mouseout", "mouseover"]),
    s("onPointerEnter", ["pointerout", "pointerover"]),
    s("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Mo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    eg = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Mo)
    );
  function ud(n, o, l) {
    var f = n.type || "unknown-event";
    (n.currentTarget = l), Vt(f, o, void 0, n), (n.currentTarget = null);
  }
  function ld(n, o) {
    o = (o & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var f = n[l],
        p = f.event;
      f = f.listeners;
      e: {
        var g = void 0;
        if (o)
          for (var S = f.length - 1; 0 <= S; S--) {
            var O = f[S],
              z = O.instance,
              Z = O.currentTarget;
            if (((O = O.listener), z !== g && p.isPropagationStopped()))
              break e;
            ud(p, O, Z), (g = z);
          }
        else
          for (S = 0; S < f.length; S++) {
            if (
              ((O = f[S]),
              (z = O.instance),
              (Z = O.currentTarget),
              (O = O.listener),
              z !== g && p.isPropagationStopped())
            )
              break e;
            ud(p, O, Z), (g = z);
          }
      }
    }
    if (Cn) throw ((n = Ln), (Cn = !1), (Ln = null), n);
  }
  function Ft(n, o) {
    var l = o[ss];
    l === void 0 && (l = o[ss] = new Set());
    var f = n + "__bubble";
    l.has(f) || (sd(o, n, 2, !1), l.add(f));
  }
  function rs(n, o, l) {
    var f = 0;
    o && (f |= 4), sd(l, n, f, o);
  }
  var Qa = "_reactListening" + Math.random().toString(36).slice(2);
  function Uo(n) {
    if (!n[Qa]) {
      (n[Qa] = !0),
        i.forEach(function (l) {
          l !== "selectionchange" && (eg.has(l) || rs(l, !1, n), rs(l, !0, n));
        });
      var o = n.nodeType === 9 ? n : n.ownerDocument;
      o === null || o[Qa] || ((o[Qa] = !0), rs("selectionchange", !1, o));
    }
  }
  function sd(n, o, l, f) {
    switch (Ac(o)) {
      case 1:
        var p = pv;
        break;
      case 4:
        p = vv;
        break;
      default:
        p = Ul;
    }
    (l = p.bind(null, o, l, n)),
      (p = void 0),
      !bt ||
        (o !== "touchstart" && o !== "touchmove" && o !== "wheel") ||
        (p = !0),
      f
        ? p !== void 0
          ? n.addEventListener(o, l, { capture: !0, passive: p })
          : n.addEventListener(o, l, !0)
        : p !== void 0
        ? n.addEventListener(o, l, { passive: p })
        : n.addEventListener(o, l, !1);
  }
  function ns(n, o, l, f, p) {
    var g = f;
    if (!(o & 1) && !(o & 2) && f !== null)
      e: for (;;) {
        if (f === null) return;
        var S = f.tag;
        if (S === 3 || S === 4) {
          var O = f.stateNode.containerInfo;
          if (O === p || (O.nodeType === 8 && O.parentNode === p)) break;
          if (S === 4)
            for (S = f.return; S !== null; ) {
              var z = S.tag;
              if (
                (z === 3 || z === 4) &&
                ((z = S.stateNode.containerInfo),
                z === p || (z.nodeType === 8 && z.parentNode === p))
              )
                return;
              S = S.return;
            }
          for (; O !== null; ) {
            if (((S = mi(O)), S === null)) return;
            if (((z = S.tag), z === 5 || z === 6)) {
              f = g = S;
              continue e;
            }
            O = O.parentNode;
          }
        }
        f = f.return;
      }
    it(function () {
      var Z = g,
        se = Me(l),
        fe = [];
      e: {
        var ae = od.get(n);
        if (ae !== void 0) {
          var Fe = Wl,
            De = n;
          switch (n) {
            case "keypress":
              if (Ka(l) === 0) break e;
            case "keydown":
            case "keyup":
              Fe = Dv;
              break;
            case "focusin":
              (De = "focus"), (Fe = Hl);
              break;
            case "focusout":
              (De = "blur"), (Fe = Hl);
              break;
            case "beforeblur":
            case "afterblur":
              Fe = Hl;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Fe = jc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Fe = mv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Fe = zv;
              break;
            case td:
            case rd:
            case nd:
              Fe = Sv;
              break;
            case id:
              Fe = jv;
              break;
            case "scroll":
              Fe = gv;
              break;
            case "wheel":
              Fe = Iv;
              break;
            case "copy":
            case "cut":
            case "paste":
              Fe = kv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Fe = Ic;
          }
          var Oe = (o & 4) !== 0,
            Bt = !Oe && n === "scroll",
            W = Oe ? (ae !== null ? ae + "Capture" : null) : ae;
          Oe = [];
          for (var B = Z, H; B !== null; ) {
            H = B;
            var ye = H.stateNode;
            if (
              (H.tag === 5 &&
                ye !== null &&
                ((H = ye),
                W !== null &&
                  ((ye = pr(B, W)), ye != null && Oe.push(Lo(B, ye, H)))),
              Bt)
            )
              break;
            B = B.return;
          }
          0 < Oe.length &&
            ((ae = new Fe(ae, De, null, l, se)),
            fe.push({ event: ae, listeners: Oe }));
        }
      }
      if (!(o & 7)) {
        e: {
          if (
            ((ae = n === "mouseover" || n === "pointerover"),
            (Fe = n === "mouseout" || n === "pointerout"),
            ae &&
              l !== ne &&
              (De = l.relatedTarget || l.fromElement) &&
              (mi(De) || De[Pn]))
          )
            break e;
          if (
            (Fe || ae) &&
            ((ae =
              se.window === se
                ? se
                : (ae = se.ownerDocument)
                ? ae.defaultView || ae.parentWindow
                : window),
            Fe
              ? ((De = l.relatedTarget || l.toElement),
                (Fe = Z),
                (De = De ? mi(De) : null),
                De !== null &&
                  ((Bt = $t(De)),
                  De !== Bt || (De.tag !== 5 && De.tag !== 6)) &&
                  (De = null))
              : ((Fe = null), (De = Z)),
            Fe !== De)
          ) {
            if (
              ((Oe = jc),
              (ye = "onMouseLeave"),
              (W = "onMouseEnter"),
              (B = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((Oe = Ic),
                (ye = "onPointerLeave"),
                (W = "onPointerEnter"),
                (B = "pointer")),
              (Bt = Fe == null ? ae : Hi(Fe)),
              (H = De == null ? ae : Hi(De)),
              (ae = new Oe(ye, B + "leave", Fe, l, se)),
              (ae.target = Bt),
              (ae.relatedTarget = H),
              (ye = null),
              mi(se) === Z &&
                ((Oe = new Oe(W, B + "enter", De, l, se)),
                (Oe.target = H),
                (Oe.relatedTarget = Bt),
                (ye = Oe)),
              (Bt = ye),
              Fe && De)
            )
              t: {
                for (Oe = Fe, W = De, B = 0, H = Oe; H; H = qi(H)) B++;
                for (H = 0, ye = W; ye; ye = qi(ye)) H++;
                for (; 0 < B - H; ) (Oe = qi(Oe)), B--;
                for (; 0 < H - B; ) (W = qi(W)), H--;
                for (; B--; ) {
                  if (Oe === W || (W !== null && Oe === W.alternate)) break t;
                  (Oe = qi(Oe)), (W = qi(W));
                }
                Oe = null;
              }
            else Oe = null;
            Fe !== null && fd(fe, ae, Fe, Oe, !1),
              De !== null && Bt !== null && fd(fe, Bt, De, Oe, !0);
          }
        }
        e: {
          if (
            ((ae = Z ? Hi(Z) : window),
            (Fe = ae.nodeName && ae.nodeName.toLowerCase()),
            Fe === "select" || (Fe === "input" && ae.type === "file"))
          )
            var ze = Kv;
          else if (qc(ae))
            if (Hc) ze = Zv;
            else {
              ze = Gv;
              var Ue = Hv;
            }
          else
            (Fe = ae.nodeName) &&
              Fe.toLowerCase() === "input" &&
              (ae.type === "checkbox" || ae.type === "radio") &&
              (ze = Xv);
          if (ze && (ze = ze(n, Z))) {
            Kc(fe, ze, l, se);
            break e;
          }
          Ue && Ue(n, ae, Z),
            n === "focusout" &&
              (Ue = ae._wrapperState) &&
              Ue.controlled &&
              ae.type === "number" &&
              or(ae, "number", ae.value);
        }
        switch (((Ue = Z ? Hi(Z) : window), n)) {
          case "focusin":
            (qc(Ue) || Ue.contentEditable === "true") &&
              ((Vi = Ue), (Jl = Z), (Io = null));
            break;
          case "focusout":
            Io = Jl = Vi = null;
            break;
          case "mousedown":
            _l = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (_l = !1), $c(fe, l, se);
            break;
          case "selectionchange":
            if (Jv) break;
          case "keydown":
          case "keyup":
            $c(fe, l, se);
        }
        var Le;
        if (Xl)
          e: {
            switch (n) {
              case "compositionstart":
                var He = "onCompositionStart";
                break e;
              case "compositionend":
                He = "onCompositionEnd";
                break e;
              case "compositionupdate":
                He = "onCompositionUpdate";
                break e;
            }
            He = void 0;
          }
        else
          Li
            ? Vc(n, l) && (He = "onCompositionEnd")
            : n === "keydown" &&
              l.keyCode === 229 &&
              (He = "onCompositionStart");
        He &&
          (Mc &&
            l.locale !== "ko" &&
            (Li || He !== "onCompositionStart"
              ? He === "onCompositionEnd" && Li && (Le = zc())
              : ((Hn = se),
                (Vl = "value" in Hn ? Hn.value : Hn.textContent),
                (Li = !0))),
          (Ue = Ja(Z, He)),
          0 < Ue.length &&
            ((He = new Bc(He, n, null, l, se)),
            fe.push({ event: He, listeners: Ue }),
            Le
              ? (He.data = Le)
              : ((Le = Wc(l)), Le !== null && (He.data = Le)))),
          (Le = Uv ? Lv(n, l) : Vv(n, l)) &&
            ((Z = Ja(Z, "onBeforeInput")),
            0 < Z.length &&
              ((se = new Bc("onBeforeInput", "beforeinput", null, l, se)),
              fe.push({ event: se, listeners: Z }),
              (se.data = Le)));
      }
      ld(fe, o);
    });
  }
  function Lo(n, o, l) {
    return { instance: n, listener: o, currentTarget: l };
  }
  function Ja(n, o) {
    for (var l = o + "Capture", f = []; n !== null; ) {
      var p = n,
        g = p.stateNode;
      p.tag === 5 &&
        g !== null &&
        ((p = g),
        (g = pr(n, l)),
        g != null && f.unshift(Lo(n, g, p)),
        (g = pr(n, o)),
        g != null && f.push(Lo(n, g, p))),
        (n = n.return);
    }
    return f;
  }
  function qi(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function fd(n, o, l, f, p) {
    for (var g = o._reactName, S = []; l !== null && l !== f; ) {
      var O = l,
        z = O.alternate,
        Z = O.stateNode;
      if (z !== null && z === f) break;
      O.tag === 5 &&
        Z !== null &&
        ((O = Z),
        p
          ? ((z = pr(l, g)), z != null && S.unshift(Lo(l, z, O)))
          : p || ((z = pr(l, g)), z != null && S.push(Lo(l, z, O)))),
        (l = l.return);
    }
    S.length !== 0 && n.push({ event: o, listeners: S });
  }
  var tg = /\r\n?/g,
    rg = /\u0000|\uFFFD/g;
  function cd(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        tg,
        `
`
      )
      .replace(rg, "");
  }
  function _a(n, o, l) {
    if (((o = cd(o)), cd(n) !== o && l)) throw Error(t(425));
  }
  function $a() {}
  var is = null,
    os = null;
  function as(n, o) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof o.children == "string" ||
      typeof o.children == "number" ||
      (typeof o.dangerouslySetInnerHTML == "object" &&
        o.dangerouslySetInnerHTML !== null &&
        o.dangerouslySetInnerHTML.__html != null)
    );
  }
  var us = typeof setTimeout == "function" ? setTimeout : void 0,
    ng = typeof clearTimeout == "function" ? clearTimeout : void 0,
    dd = typeof Promise == "function" ? Promise : void 0,
    ig =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof dd < "u"
        ? function (n) {
            return dd.resolve(null).then(n).catch(og);
          }
        : us;
  function og(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function ls(n, o) {
    var l = o,
      f = 0;
    do {
      var p = l.nextSibling;
      if ((n.removeChild(l), p && p.nodeType === 8))
        if (((l = p.data), l === "/$")) {
          if (f === 0) {
            n.removeChild(p), Do(o);
            return;
          }
          f--;
        } else (l !== "$" && l !== "$?" && l !== "$!") || f++;
      l = p;
    } while (l);
    Do(o);
  }
  function Xn(n) {
    for (; n != null; n = n.nextSibling) {
      var o = n.nodeType;
      if (o === 1 || o === 3) break;
      if (o === 8) {
        if (((o = n.data), o === "$" || o === "$!" || o === "$?")) break;
        if (o === "/$") return null;
      }
    }
    return n;
  }
  function hd(n) {
    n = n.previousSibling;
    for (var o = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (o === 0) return n;
          o--;
        } else l === "/$" && o++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ki = Math.random().toString(36).slice(2),
    yn = "__reactFiber$" + Ki,
    Vo = "__reactProps$" + Ki,
    Pn = "__reactContainer$" + Ki,
    ss = "__reactEvents$" + Ki,
    ag = "__reactListeners$" + Ki,
    ug = "__reactHandles$" + Ki;
  function mi(n) {
    var o = n[yn];
    if (o) return o;
    for (var l = n.parentNode; l; ) {
      if ((o = l[Pn] || l[yn])) {
        if (
          ((l = o.alternate),
          o.child !== null || (l !== null && l.child !== null))
        )
          for (n = hd(n); n !== null; ) {
            if ((l = n[yn])) return l;
            n = hd(n);
          }
        return o;
      }
      (n = l), (l = n.parentNode);
    }
    return null;
  }
  function Wo(n) {
    return (
      (n = n[yn] || n[Pn]),
      !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3)
        ? null
        : n
    );
  }
  function Hi(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(t(33));
  }
  function eu(n) {
    return n[Vo] || null;
  }
  var fs = [],
    Gi = -1;
  function Zn(n) {
    return { current: n };
  }
  function Ct(n) {
    0 > Gi || ((n.current = fs[Gi]), (fs[Gi] = null), Gi--);
  }
  function kt(n, o) {
    Gi++, (fs[Gi] = n.current), (n.current = o);
  }
  var Yn = {},
    ur = Zn(Yn),
    Sr = Zn(!1),
    xi = Yn;
  function Xi(n, o) {
    var l = n.type.contextTypes;
    if (!l) return Yn;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === o)
      return f.__reactInternalMemoizedMaskedChildContext;
    var p = {},
      g;
    for (g in l) p[g] = o[g];
    return (
      f &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = o),
        (n.__reactInternalMemoizedMaskedChildContext = p)),
      p
    );
  }
  function br(n) {
    return (n = n.childContextTypes), n != null;
  }
  function tu() {
    Ct(Sr), Ct(ur);
  }
  function pd(n, o, l) {
    if (ur.current !== Yn) throw Error(t(168));
    kt(ur, o), kt(Sr, l);
  }
  function vd(n, o, l) {
    var f = n.stateNode;
    if (((o = o.childContextTypes), typeof f.getChildContext != "function"))
      return l;
    f = f.getChildContext();
    for (var p in f) if (!(p in o)) throw Error(t(108, Ie(n) || "Unknown", p));
    return me({}, l, f);
  }
  function ru(n) {
    return (
      (n =
        ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) ||
        Yn),
      (xi = ur.current),
      kt(ur, n),
      kt(Sr, Sr.current),
      !0
    );
  }
  function gd(n, o, l) {
    var f = n.stateNode;
    if (!f) throw Error(t(169));
    l
      ? ((n = vd(n, o, xi)),
        (f.__reactInternalMemoizedMergedChildContext = n),
        Ct(Sr),
        Ct(ur),
        kt(ur, n))
      : Ct(Sr),
      kt(Sr, l);
  }
  var En = null,
    nu = !1,
    cs = !1;
  function yd(n) {
    En === null ? (En = [n]) : En.push(n);
  }
  function lg(n) {
    (nu = !0), yd(n);
  }
  function Qn() {
    if (!cs && En !== null) {
      cs = !0;
      var n = 0,
        o = xt;
      try {
        var l = En;
        for (xt = 1; n < l.length; n++) {
          var f = l[n];
          do f = f(!0);
          while (f !== null);
        }
        (En = null), (nu = !1);
      } catch (p) {
        throw (En !== null && (En = En.slice(n + 1)), xc(zl, Qn), p);
      } finally {
        (xt = o), (cs = !1);
      }
    }
    return null;
  }
  var Zi = [],
    Yi = 0,
    iu = null,
    ou = 0,
    Vr = [],
    Wr = 0,
    wi = null,
    Tn = 1,
    Rn = "";
  function Si(n, o) {
    (Zi[Yi++] = ou), (Zi[Yi++] = iu), (iu = n), (ou = o);
  }
  function md(n, o, l) {
    (Vr[Wr++] = Tn), (Vr[Wr++] = Rn), (Vr[Wr++] = wi), (wi = n);
    var f = Tn;
    n = Rn;
    var p = 32 - on(f) - 1;
    (f &= ~(1 << p)), (l += 1);
    var g = 32 - on(o) + p;
    if (30 < g) {
      var S = p - (p % 5);
      (g = (f & ((1 << S) - 1)).toString(32)),
        (f >>= S),
        (p -= S),
        (Tn = (1 << (32 - on(o) + p)) | (l << p) | f),
        (Rn = g + n);
    } else (Tn = (1 << g) | (l << p) | f), (Rn = n);
  }
  function ds(n) {
    n.return !== null && (Si(n, 1), md(n, 1, 0));
  }
  function hs(n) {
    for (; n === iu; )
      (iu = Zi[--Yi]), (Zi[Yi] = null), (ou = Zi[--Yi]), (Zi[Yi] = null);
    for (; n === wi; )
      (wi = Vr[--Wr]),
        (Vr[Wr] = null),
        (Rn = Vr[--Wr]),
        (Vr[Wr] = null),
        (Tn = Vr[--Wr]),
        (Vr[Wr] = null);
  }
  var Or = null,
    Ar = null,
    Pt = !1,
    un = null;
  function xd(n, o) {
    var l = Gr(5, null, null, 0);
    (l.elementType = "DELETED"),
      (l.stateNode = o),
      (l.return = n),
      (o = n.deletions),
      o === null ? ((n.deletions = [l]), (n.flags |= 16)) : o.push(l);
  }
  function wd(n, o) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return (
          (o =
            o.nodeType !== 1 || l.toLowerCase() !== o.nodeName.toLowerCase()
              ? null
              : o),
          o !== null
            ? ((n.stateNode = o), (Or = n), (Ar = Xn(o.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (o = n.pendingProps === "" || o.nodeType !== 3 ? null : o),
          o !== null ? ((n.stateNode = o), (Or = n), (Ar = null), !0) : !1
        );
      case 13:
        return (
          (o = o.nodeType !== 8 ? null : o),
          o !== null
            ? ((l = wi !== null ? { id: Tn, overflow: Rn } : null),
              (n.memoizedState = {
                dehydrated: o,
                treeContext: l,
                retryLane: 1073741824,
              }),
              (l = Gr(18, null, null, 0)),
              (l.stateNode = o),
              (l.return = n),
              (n.child = l),
              (Or = n),
              (Ar = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ps(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function vs(n) {
    if (Pt) {
      var o = Ar;
      if (o) {
        var l = o;
        if (!wd(n, o)) {
          if (ps(n)) throw Error(t(418));
          o = Xn(l.nextSibling);
          var f = Or;
          o && wd(n, o)
            ? xd(f, l)
            : ((n.flags = (n.flags & -4097) | 2), (Pt = !1), (Or = n));
        }
      } else {
        if (ps(n)) throw Error(t(418));
        (n.flags = (n.flags & -4097) | 2), (Pt = !1), (Or = n);
      }
    }
  }
  function Sd(n) {
    for (
      n = n.return;
      n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;

    )
      n = n.return;
    Or = n;
  }
  function au(n) {
    if (n !== Or) return !1;
    if (!Pt) return Sd(n), (Pt = !0), !1;
    var o;
    if (
      ((o = n.tag !== 3) &&
        !(o = n.tag !== 5) &&
        ((o = n.type),
        (o = o !== "head" && o !== "body" && !as(n.type, n.memoizedProps))),
      o && (o = Ar))
    ) {
      if (ps(n)) throw (bd(), Error(t(418)));
      for (; o; ) xd(n, o), (o = Xn(o.nextSibling));
    }
    if ((Sd(n), n.tag === 13)) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(t(317));
      e: {
        for (n = n.nextSibling, o = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (o === 0) {
                Ar = Xn(n.nextSibling);
                break e;
              }
              o--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || o++;
          }
          n = n.nextSibling;
        }
        Ar = null;
      }
    } else Ar = Or ? Xn(n.stateNode.nextSibling) : null;
    return !0;
  }
  function bd() {
    for (var n = Ar; n; ) n = Xn(n.nextSibling);
  }
  function Qi() {
    (Ar = Or = null), (Pt = !1);
  }
  function gs(n) {
    un === null ? (un = [n]) : un.push(n);
  }
  var sg = q.ReactCurrentBatchConfig;
  function qo(n, o, l) {
    if (
      ((n = l.ref),
      n !== null && typeof n != "function" && typeof n != "object")
    ) {
      if (l._owner) {
        if (((l = l._owner), l)) {
          if (l.tag !== 1) throw Error(t(309));
          var f = l.stateNode;
        }
        if (!f) throw Error(t(147, n));
        var p = f,
          g = "" + n;
        return o !== null &&
          o.ref !== null &&
          typeof o.ref == "function" &&
          o.ref._stringRef === g
          ? o.ref
          : ((o = function (S) {
              var O = p.refs;
              S === null ? delete O[g] : (O[g] = S);
            }),
            (o._stringRef = g),
            o);
      }
      if (typeof n != "string") throw Error(t(284));
      if (!l._owner) throw Error(t(290, n));
    }
    return n;
  }
  function uu(n, o) {
    throw (
      ((n = Object.prototype.toString.call(o)),
      Error(
        t(
          31,
          n === "[object Object]"
            ? "object with keys {" + Object.keys(o).join(", ") + "}"
            : n
        )
      ))
    );
  }
  function kd(n) {
    var o = n._init;
    return o(n._payload);
  }
  function Fd(n) {
    function o(W, B) {
      if (n) {
        var H = W.deletions;
        H === null ? ((W.deletions = [B]), (W.flags |= 16)) : H.push(B);
      }
    }
    function l(W, B) {
      if (!n) return null;
      for (; B !== null; ) o(W, B), (B = B.sibling);
      return null;
    }
    function f(W, B) {
      for (W = new Map(); B !== null; )
        B.key !== null ? W.set(B.key, B) : W.set(B.index, B), (B = B.sibling);
      return W;
    }
    function p(W, B) {
      return (W = ii(W, B)), (W.index = 0), (W.sibling = null), W;
    }
    function g(W, B, H) {
      return (
        (W.index = H),
        n
          ? ((H = W.alternate),
            H !== null
              ? ((H = H.index), H < B ? ((W.flags |= 2), B) : H)
              : ((W.flags |= 2), B))
          : ((W.flags |= 1048576), B)
      );
    }
    function S(W) {
      return n && W.alternate === null && (W.flags |= 2), W;
    }
    function O(W, B, H, ye) {
      return B === null || B.tag !== 6
        ? ((B = lf(H, W.mode, ye)), (B.return = W), B)
        : ((B = p(B, H)), (B.return = W), B);
    }
    function z(W, B, H, ye) {
      var ze = H.type;
      return ze === U
        ? se(W, B, H.props.children, ye, H.key)
        : B !== null &&
          (B.elementType === ze ||
            (typeof ze == "object" &&
              ze !== null &&
              ze.$$typeof === de &&
              kd(ze) === B.type))
        ? ((ye = p(B, H.props)), (ye.ref = qo(W, B, H)), (ye.return = W), ye)
        : ((ye = Ou(H.type, H.key, H.props, null, W.mode, ye)),
          (ye.ref = qo(W, B, H)),
          (ye.return = W),
          ye);
    }
    function Z(W, B, H, ye) {
      return B === null ||
        B.tag !== 4 ||
        B.stateNode.containerInfo !== H.containerInfo ||
        B.stateNode.implementation !== H.implementation
        ? ((B = sf(H, W.mode, ye)), (B.return = W), B)
        : ((B = p(B, H.children || [])), (B.return = W), B);
    }
    function se(W, B, H, ye, ze) {
      return B === null || B.tag !== 7
        ? ((B = Ri(H, W.mode, ye, ze)), (B.return = W), B)
        : ((B = p(B, H)), (B.return = W), B);
    }
    function fe(W, B, H) {
      if ((typeof B == "string" && B !== "") || typeof B == "number")
        return (B = lf("" + B, W.mode, H)), (B.return = W), B;
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case K:
            return (
              (H = Ou(B.type, B.key, B.props, null, W.mode, H)),
              (H.ref = qo(W, null, B)),
              (H.return = W),
              H
            );
          case M:
            return (B = sf(B, W.mode, H)), (B.return = W), B;
          case de:
            var ye = B._init;
            return fe(W, ye(B._payload), H);
        }
        if (Mr(B) || ge(B))
          return (B = Ri(B, W.mode, H, null)), (B.return = W), B;
        uu(W, B);
      }
      return null;
    }
    function ae(W, B, H, ye) {
      var ze = B !== null ? B.key : null;
      if ((typeof H == "string" && H !== "") || typeof H == "number")
        return ze !== null ? null : O(W, B, "" + H, ye);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case K:
            return H.key === ze ? z(W, B, H, ye) : null;
          case M:
            return H.key === ze ? Z(W, B, H, ye) : null;
          case de:
            return (ze = H._init), ae(W, B, ze(H._payload), ye);
        }
        if (Mr(H) || ge(H)) return ze !== null ? null : se(W, B, H, ye, null);
        uu(W, H);
      }
      return null;
    }
    function Fe(W, B, H, ye, ze) {
      if ((typeof ye == "string" && ye !== "") || typeof ye == "number")
        return (W = W.get(H) || null), O(B, W, "" + ye, ze);
      if (typeof ye == "object" && ye !== null) {
        switch (ye.$$typeof) {
          case K:
            return (
              (W = W.get(ye.key === null ? H : ye.key) || null), z(B, W, ye, ze)
            );
          case M:
            return (
              (W = W.get(ye.key === null ? H : ye.key) || null), Z(B, W, ye, ze)
            );
          case de:
            var Ue = ye._init;
            return Fe(W, B, H, Ue(ye._payload), ze);
        }
        if (Mr(ye) || ge(ye))
          return (W = W.get(H) || null), se(B, W, ye, ze, null);
        uu(B, ye);
      }
      return null;
    }
    function De(W, B, H, ye) {
      for (
        var ze = null, Ue = null, Le = B, He = (B = 0), Qt = null;
        Le !== null && He < H.length;
        He++
      ) {
        Le.index > He ? ((Qt = Le), (Le = null)) : (Qt = Le.sibling);
        var dt = ae(W, Le, H[He], ye);
        if (dt === null) {
          Le === null && (Le = Qt);
          break;
        }
        n && Le && dt.alternate === null && o(W, Le),
          (B = g(dt, B, He)),
          Ue === null ? (ze = dt) : (Ue.sibling = dt),
          (Ue = dt),
          (Le = Qt);
      }
      if (He === H.length) return l(W, Le), Pt && Si(W, He), ze;
      if (Le === null) {
        for (; He < H.length; He++)
          (Le = fe(W, H[He], ye)),
            Le !== null &&
              ((B = g(Le, B, He)),
              Ue === null ? (ze = Le) : (Ue.sibling = Le),
              (Ue = Le));
        return Pt && Si(W, He), ze;
      }
      for (Le = f(W, Le); He < H.length; He++)
        (Qt = Fe(Le, W, He, H[He], ye)),
          Qt !== null &&
            (n &&
              Qt.alternate !== null &&
              Le.delete(Qt.key === null ? He : Qt.key),
            (B = g(Qt, B, He)),
            Ue === null ? (ze = Qt) : (Ue.sibling = Qt),
            (Ue = Qt));
      return (
        n &&
          Le.forEach(function (oi) {
            return o(W, oi);
          }),
        Pt && Si(W, He),
        ze
      );
    }
    function Oe(W, B, H, ye) {
      var ze = ge(H);
      if (typeof ze != "function") throw Error(t(150));
      if (((H = ze.call(H)), H == null)) throw Error(t(151));
      for (
        var Ue = (ze = null), Le = B, He = (B = 0), Qt = null, dt = H.next();
        Le !== null && !dt.done;
        He++, dt = H.next()
      ) {
        Le.index > He ? ((Qt = Le), (Le = null)) : (Qt = Le.sibling);
        var oi = ae(W, Le, dt.value, ye);
        if (oi === null) {
          Le === null && (Le = Qt);
          break;
        }
        n && Le && oi.alternate === null && o(W, Le),
          (B = g(oi, B, He)),
          Ue === null ? (ze = oi) : (Ue.sibling = oi),
          (Ue = oi),
          (Le = Qt);
      }
      if (dt.done) return l(W, Le), Pt && Si(W, He), ze;
      if (Le === null) {
        for (; !dt.done; He++, dt = H.next())
          (dt = fe(W, dt.value, ye)),
            dt !== null &&
              ((B = g(dt, B, He)),
              Ue === null ? (ze = dt) : (Ue.sibling = dt),
              (Ue = dt));
        return Pt && Si(W, He), ze;
      }
      for (Le = f(W, Le); !dt.done; He++, dt = H.next())
        (dt = Fe(Le, W, He, dt.value, ye)),
          dt !== null &&
            (n &&
              dt.alternate !== null &&
              Le.delete(dt.key === null ? He : dt.key),
            (B = g(dt, B, He)),
            Ue === null ? (ze = dt) : (Ue.sibling = dt),
            (Ue = dt));
      return (
        n &&
          Le.forEach(function (Vg) {
            return o(W, Vg);
          }),
        Pt && Si(W, He),
        ze
      );
    }
    function Bt(W, B, H, ye) {
      if (
        (typeof H == "object" &&
          H !== null &&
          H.type === U &&
          H.key === null &&
          (H = H.props.children),
        typeof H == "object" && H !== null)
      ) {
        switch (H.$$typeof) {
          case K:
            e: {
              for (var ze = H.key, Ue = B; Ue !== null; ) {
                if (Ue.key === ze) {
                  if (((ze = H.type), ze === U)) {
                    if (Ue.tag === 7) {
                      l(W, Ue.sibling),
                        (B = p(Ue, H.props.children)),
                        (B.return = W),
                        (W = B);
                      break e;
                    }
                  } else if (
                    Ue.elementType === ze ||
                    (typeof ze == "object" &&
                      ze !== null &&
                      ze.$$typeof === de &&
                      kd(ze) === Ue.type)
                  ) {
                    l(W, Ue.sibling),
                      (B = p(Ue, H.props)),
                      (B.ref = qo(W, Ue, H)),
                      (B.return = W),
                      (W = B);
                    break e;
                  }
                  l(W, Ue);
                  break;
                } else o(W, Ue);
                Ue = Ue.sibling;
              }
              H.type === U
                ? ((B = Ri(H.props.children, W.mode, ye, H.key)),
                  (B.return = W),
                  (W = B))
                : ((ye = Ou(H.type, H.key, H.props, null, W.mode, ye)),
                  (ye.ref = qo(W, B, H)),
                  (ye.return = W),
                  (W = ye));
            }
            return S(W);
          case M:
            e: {
              for (Ue = H.key; B !== null; ) {
                if (B.key === Ue)
                  if (
                    B.tag === 4 &&
                    B.stateNode.containerInfo === H.containerInfo &&
                    B.stateNode.implementation === H.implementation
                  ) {
                    l(W, B.sibling),
                      (B = p(B, H.children || [])),
                      (B.return = W),
                      (W = B);
                    break e;
                  } else {
                    l(W, B);
                    break;
                  }
                else o(W, B);
                B = B.sibling;
              }
              (B = sf(H, W.mode, ye)), (B.return = W), (W = B);
            }
            return S(W);
          case de:
            return (Ue = H._init), Bt(W, B, Ue(H._payload), ye);
        }
        if (Mr(H)) return De(W, B, H, ye);
        if (ge(H)) return Oe(W, B, H, ye);
        uu(W, H);
      }
      return (typeof H == "string" && H !== "") || typeof H == "number"
        ? ((H = "" + H),
          B !== null && B.tag === 6
            ? (l(W, B.sibling), (B = p(B, H)), (B.return = W), (W = B))
            : (l(W, B), (B = lf(H, W.mode, ye)), (B.return = W), (W = B)),
          S(W))
        : l(W, B);
    }
    return Bt;
  }
  var Ji = Fd(!0),
    Cd = Fd(!1),
    lu = Zn(null),
    su = null,
    _i = null,
    ys = null;
  function ms() {
    ys = _i = su = null;
  }
  function xs(n) {
    var o = lu.current;
    Ct(lu), (n._currentValue = o);
  }
  function ws(n, o, l) {
    for (; n !== null; ) {
      var f = n.alternate;
      if (
        ((n.childLanes & o) !== o
          ? ((n.childLanes |= o), f !== null && (f.childLanes |= o))
          : f !== null && (f.childLanes & o) !== o && (f.childLanes |= o),
        n === l)
      )
        break;
      n = n.return;
    }
  }
  function $i(n, o) {
    (su = n),
      (ys = _i = null),
      (n = n.dependencies),
      n !== null &&
        n.firstContext !== null &&
        (n.lanes & o && (kr = !0), (n.firstContext = null));
  }
  function qr(n) {
    var o = n._currentValue;
    if (ys !== n)
      if (((n = { context: n, memoizedValue: o, next: null }), _i === null)) {
        if (su === null) throw Error(t(308));
        (_i = n), (su.dependencies = { lanes: 0, firstContext: n });
      } else _i = _i.next = n;
    return o;
  }
  var bi = null;
  function Ss(n) {
    bi === null ? (bi = [n]) : bi.push(n);
  }
  function Pd(n, o, l, f) {
    var p = o.interleaved;
    return (
      p === null ? ((l.next = l), Ss(o)) : ((l.next = p.next), (p.next = l)),
      (o.interleaved = l),
      Dn(n, f)
    );
  }
  function Dn(n, o) {
    n.lanes |= o;
    var l = n.alternate;
    for (l !== null && (l.lanes |= o), l = n, n = n.return; n !== null; )
      (n.childLanes |= o),
        (l = n.alternate),
        l !== null && (l.childLanes |= o),
        (l = n),
        (n = n.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var Jn = !1;
  function bs(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ed(n, o) {
    (n = n.updateQueue),
      o.updateQueue === n &&
        (o.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          effects: n.effects,
        });
  }
  function On(n, o) {
    return {
      eventTime: n,
      lane: o,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function _n(n, o, l) {
    var f = n.updateQueue;
    if (f === null) return null;
    if (((f = f.shared), ft & 2)) {
      var p = f.pending;
      return (
        p === null ? (o.next = o) : ((o.next = p.next), (p.next = o)),
        (f.pending = o),
        Dn(n, l)
      );
    }
    return (
      (p = f.interleaved),
      p === null ? ((o.next = o), Ss(f)) : ((o.next = p.next), (p.next = o)),
      (f.interleaved = o),
      Dn(n, l)
    );
  }
  function fu(n, o, l) {
    if (
      ((o = o.updateQueue), o !== null && ((o = o.shared), (l & 4194240) !== 0))
    ) {
      var f = o.lanes;
      (f &= n.pendingLanes), (l |= f), (o.lanes = l), Bl(n, l);
    }
  }
  function Td(n, o) {
    var l = n.updateQueue,
      f = n.alternate;
    if (f !== null && ((f = f.updateQueue), l === f)) {
      var p = null,
        g = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var S = {
            eventTime: l.eventTime,
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          };
          g === null ? (p = g = S) : (g = g.next = S), (l = l.next);
        } while (l !== null);
        g === null ? (p = g = o) : (g = g.next = o);
      } else p = g = o;
      (l = {
        baseState: f.baseState,
        firstBaseUpdate: p,
        lastBaseUpdate: g,
        shared: f.shared,
        effects: f.effects,
      }),
        (n.updateQueue = l);
      return;
    }
    (n = l.lastBaseUpdate),
      n === null ? (l.firstBaseUpdate = o) : (n.next = o),
      (l.lastBaseUpdate = o);
  }
  function cu(n, o, l, f) {
    var p = n.updateQueue;
    Jn = !1;
    var g = p.firstBaseUpdate,
      S = p.lastBaseUpdate,
      O = p.shared.pending;
    if (O !== null) {
      p.shared.pending = null;
      var z = O,
        Z = z.next;
      (z.next = null), S === null ? (g = Z) : (S.next = Z), (S = z);
      var se = n.alternate;
      se !== null &&
        ((se = se.updateQueue),
        (O = se.lastBaseUpdate),
        O !== S &&
          (O === null ? (se.firstBaseUpdate = Z) : (O.next = Z),
          (se.lastBaseUpdate = z)));
    }
    if (g !== null) {
      var fe = p.baseState;
      (S = 0), (se = Z = z = null), (O = g);
      do {
        var ae = O.lane,
          Fe = O.eventTime;
        if ((f & ae) === ae) {
          se !== null &&
            (se = se.next =
              {
                eventTime: Fe,
                lane: 0,
                tag: O.tag,
                payload: O.payload,
                callback: O.callback,
                next: null,
              });
          e: {
            var De = n,
              Oe = O;
            switch (((ae = o), (Fe = l), Oe.tag)) {
              case 1:
                if (((De = Oe.payload), typeof De == "function")) {
                  fe = De.call(Fe, fe, ae);
                  break e;
                }
                fe = De;
                break e;
              case 3:
                De.flags = (De.flags & -65537) | 128;
              case 0:
                if (
                  ((De = Oe.payload),
                  (ae = typeof De == "function" ? De.call(Fe, fe, ae) : De),
                  ae == null)
                )
                  break e;
                fe = me({}, fe, ae);
                break e;
              case 2:
                Jn = !0;
            }
          }
          O.callback !== null &&
            O.lane !== 0 &&
            ((n.flags |= 64),
            (ae = p.effects),
            ae === null ? (p.effects = [O]) : ae.push(O));
        } else
          (Fe = {
            eventTime: Fe,
            lane: ae,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null,
          }),
            se === null ? ((Z = se = Fe), (z = fe)) : (se = se.next = Fe),
            (S |= ae);
        if (((O = O.next), O === null)) {
          if (((O = p.shared.pending), O === null)) break;
          (ae = O),
            (O = ae.next),
            (ae.next = null),
            (p.lastBaseUpdate = ae),
            (p.shared.pending = null);
        }
      } while (!0);
      if (
        (se === null && (z = fe),
        (p.baseState = z),
        (p.firstBaseUpdate = Z),
        (p.lastBaseUpdate = se),
        (o = p.shared.interleaved),
        o !== null)
      ) {
        p = o;
        do (S |= p.lane), (p = p.next);
        while (p !== o);
      } else g === null && (p.shared.lanes = 0);
      (Ci |= S), (n.lanes = S), (n.memoizedState = fe);
    }
  }
  function Rd(n, o, l) {
    if (((n = o.effects), (o.effects = null), n !== null))
      for (o = 0; o < n.length; o++) {
        var f = n[o],
          p = f.callback;
        if (p !== null) {
          if (((f.callback = null), (f = l), typeof p != "function"))
            throw Error(t(191, p));
          p.call(f);
        }
      }
  }
  var Ko = {},
    mn = Zn(Ko),
    Ho = Zn(Ko),
    Go = Zn(Ko);
  function ki(n) {
    if (n === Ko) throw Error(t(174));
    return n;
  }
  function ks(n, o) {
    switch ((kt(Go, o), kt(Ho, n), kt(mn, Ko), (n = o.nodeType), n)) {
      case 9:
      case 11:
        o = (o = o.documentElement) ? o.namespaceURI : Ur(null, "");
        break;
      default:
        (n = n === 8 ? o.parentNode : o),
          (o = n.namespaceURI || null),
          (n = n.tagName),
          (o = Ur(o, n));
    }
    Ct(mn), kt(mn, o);
  }
  function eo() {
    Ct(mn), Ct(Ho), Ct(Go);
  }
  function Dd(n) {
    ki(Go.current);
    var o = ki(mn.current),
      l = Ur(o, n.type);
    o !== l && (kt(Ho, n), kt(mn, l));
  }
  function Fs(n) {
    Ho.current === n && (Ct(mn), Ct(Ho));
  }
  var Et = Zn(0);
  function du(n) {
    for (var o = n; o !== null; ) {
      if (o.tag === 13) {
        var l = o.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || l.data === "$!")
        )
          return o;
      } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
        if (o.flags & 128) return o;
      } else if (o.child !== null) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === n) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === n) return null;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
    return null;
  }
  var Cs = [];
  function Ps() {
    for (var n = 0; n < Cs.length; n++)
      Cs[n]._workInProgressVersionPrimary = null;
    Cs.length = 0;
  }
  var hu = q.ReactCurrentDispatcher,
    Es = q.ReactCurrentBatchConfig,
    Fi = 0,
    Tt = null,
    Wt = null,
    Zt = null,
    pu = !1,
    Xo = !1,
    Zo = 0,
    fg = 0;
  function lr() {
    throw Error(t(321));
  }
  function Ts(n, o) {
    if (o === null) return !1;
    for (var l = 0; l < o.length && l < n.length; l++)
      if (!an(n[l], o[l])) return !1;
    return !0;
  }
  function Rs(n, o, l, f, p, g) {
    if (
      ((Fi = g),
      (Tt = o),
      (o.memoizedState = null),
      (o.updateQueue = null),
      (o.lanes = 0),
      (hu.current = n === null || n.memoizedState === null ? pg : vg),
      (n = l(f, p)),
      Xo)
    ) {
      g = 0;
      do {
        if (((Xo = !1), (Zo = 0), 25 <= g)) throw Error(t(301));
        (g += 1),
          (Zt = Wt = null),
          (o.updateQueue = null),
          (hu.current = gg),
          (n = l(f, p));
      } while (Xo);
    }
    if (
      ((hu.current = yu),
      (o = Wt !== null && Wt.next !== null),
      (Fi = 0),
      (Zt = Wt = Tt = null),
      (pu = !1),
      o)
    )
      throw Error(t(300));
    return n;
  }
  function Ds() {
    var n = Zo !== 0;
    return (Zo = 0), n;
  }
  function xn() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Zt === null ? (Tt.memoizedState = Zt = n) : (Zt = Zt.next = n), Zt;
  }
  function Kr() {
    if (Wt === null) {
      var n = Tt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Wt.next;
    var o = Zt === null ? Tt.memoizedState : Zt.next;
    if (o !== null) (Zt = o), (Wt = n);
    else {
      if (n === null) throw Error(t(310));
      (Wt = n),
        (n = {
          memoizedState: Wt.memoizedState,
          baseState: Wt.baseState,
          baseQueue: Wt.baseQueue,
          queue: Wt.queue,
          next: null,
        }),
        Zt === null ? (Tt.memoizedState = Zt = n) : (Zt = Zt.next = n);
    }
    return Zt;
  }
  function Yo(n, o) {
    return typeof o == "function" ? o(n) : o;
  }
  function Os(n) {
    var o = Kr(),
      l = o.queue;
    if (l === null) throw Error(t(311));
    l.lastRenderedReducer = n;
    var f = Wt,
      p = f.baseQueue,
      g = l.pending;
    if (g !== null) {
      if (p !== null) {
        var S = p.next;
        (p.next = g.next), (g.next = S);
      }
      (f.baseQueue = p = g), (l.pending = null);
    }
    if (p !== null) {
      (g = p.next), (f = f.baseState);
      var O = (S = null),
        z = null,
        Z = g;
      do {
        var se = Z.lane;
        if ((Fi & se) === se)
          z !== null &&
            (z = z.next =
              {
                lane: 0,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null,
              }),
            (f = Z.hasEagerState ? Z.eagerState : n(f, Z.action));
        else {
          var fe = {
            lane: se,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null,
          };
          z === null ? ((O = z = fe), (S = f)) : (z = z.next = fe),
            (Tt.lanes |= se),
            (Ci |= se);
        }
        Z = Z.next;
      } while (Z !== null && Z !== g);
      z === null ? (S = f) : (z.next = O),
        an(f, o.memoizedState) || (kr = !0),
        (o.memoizedState = f),
        (o.baseState = S),
        (o.baseQueue = z),
        (l.lastRenderedState = f);
    }
    if (((n = l.interleaved), n !== null)) {
      p = n;
      do (g = p.lane), (Tt.lanes |= g), (Ci |= g), (p = p.next);
      while (p !== n);
    } else p === null && (l.lanes = 0);
    return [o.memoizedState, l.dispatch];
  }
  function As(n) {
    var o = Kr(),
      l = o.queue;
    if (l === null) throw Error(t(311));
    l.lastRenderedReducer = n;
    var f = l.dispatch,
      p = l.pending,
      g = o.memoizedState;
    if (p !== null) {
      l.pending = null;
      var S = (p = p.next);
      do (g = n(g, S.action)), (S = S.next);
      while (S !== p);
      an(g, o.memoizedState) || (kr = !0),
        (o.memoizedState = g),
        o.baseQueue === null && (o.baseState = g),
        (l.lastRenderedState = g);
    }
    return [g, f];
  }
  function Od() {}
  function Ad(n, o) {
    var l = Tt,
      f = Kr(),
      p = o(),
      g = !an(f.memoizedState, p);
    if (
      (g && ((f.memoizedState = p), (kr = !0)),
      (f = f.queue),
      zs(jd.bind(null, l, f, n), [n]),
      f.getSnapshot !== o || g || (Zt !== null && Zt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Qo(9, Nd.bind(null, l, f, p, o), void 0, null),
        Yt === null)
      )
        throw Error(t(349));
      Fi & 30 || zd(l, o, p);
    }
    return p;
  }
  function zd(n, o, l) {
    (n.flags |= 16384),
      (n = { getSnapshot: o, value: l }),
      (o = Tt.updateQueue),
      o === null
        ? ((o = { lastEffect: null, stores: null }),
          (Tt.updateQueue = o),
          (o.stores = [n]))
        : ((l = o.stores), l === null ? (o.stores = [n]) : l.push(n));
  }
  function Nd(n, o, l, f) {
    (o.value = l), (o.getSnapshot = f), Bd(o) && Id(n);
  }
  function jd(n, o, l) {
    return l(function () {
      Bd(o) && Id(n);
    });
  }
  function Bd(n) {
    var o = n.getSnapshot;
    n = n.value;
    try {
      var l = o();
      return !an(n, l);
    } catch {
      return !0;
    }
  }
  function Id(n) {
    var o = Dn(n, 1);
    o !== null && cn(o, n, 1, -1);
  }
  function Md(n) {
    var o = xn();
    return (
      typeof n == "function" && (n = n()),
      (o.memoizedState = o.baseState = n),
      (n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yo,
        lastRenderedState: n,
      }),
      (o.queue = n),
      (n = n.dispatch = hg.bind(null, Tt, n)),
      [o.memoizedState, n]
    );
  }
  function Qo(n, o, l, f) {
    return (
      (n = { tag: n, create: o, destroy: l, deps: f, next: null }),
      (o = Tt.updateQueue),
      o === null
        ? ((o = { lastEffect: null, stores: null }),
          (Tt.updateQueue = o),
          (o.lastEffect = n.next = n))
        : ((l = o.lastEffect),
          l === null
            ? (o.lastEffect = n.next = n)
            : ((f = l.next), (l.next = n), (n.next = f), (o.lastEffect = n))),
      n
    );
  }
  function Ud() {
    return Kr().memoizedState;
  }
  function vu(n, o, l, f) {
    var p = xn();
    (Tt.flags |= n),
      (p.memoizedState = Qo(1 | o, l, void 0, f === void 0 ? null : f));
  }
  function gu(n, o, l, f) {
    var p = Kr();
    f = f === void 0 ? null : f;
    var g = void 0;
    if (Wt !== null) {
      var S = Wt.memoizedState;
      if (((g = S.destroy), f !== null && Ts(f, S.deps))) {
        p.memoizedState = Qo(o, l, g, f);
        return;
      }
    }
    (Tt.flags |= n), (p.memoizedState = Qo(1 | o, l, g, f));
  }
  function Ld(n, o) {
    return vu(8390656, 8, n, o);
  }
  function zs(n, o) {
    return gu(2048, 8, n, o);
  }
  function Vd(n, o) {
    return gu(4, 2, n, o);
  }
  function Wd(n, o) {
    return gu(4, 4, n, o);
  }
  function qd(n, o) {
    if (typeof o == "function")
      return (
        (n = n()),
        o(n),
        function () {
          o(null);
        }
      );
    if (o != null)
      return (
        (n = n()),
        (o.current = n),
        function () {
          o.current = null;
        }
      );
  }
  function Kd(n, o, l) {
    return (
      (l = l != null ? l.concat([n]) : null), gu(4, 4, qd.bind(null, o, n), l)
    );
  }
  function Ns() {}
  function Hd(n, o) {
    var l = Kr();
    o = o === void 0 ? null : o;
    var f = l.memoizedState;
    return f !== null && o !== null && Ts(o, f[1])
      ? f[0]
      : ((l.memoizedState = [n, o]), n);
  }
  function Gd(n, o) {
    var l = Kr();
    o = o === void 0 ? null : o;
    var f = l.memoizedState;
    return f !== null && o !== null && Ts(o, f[1])
      ? f[0]
      : ((n = n()), (l.memoizedState = [n, o]), n);
  }
  function Xd(n, o, l) {
    return Fi & 21
      ? (an(l, o) ||
          ((l = kc()), (Tt.lanes |= l), (Ci |= l), (n.baseState = !0)),
        o)
      : (n.baseState && ((n.baseState = !1), (kr = !0)), (n.memoizedState = l));
  }
  function cg(n, o) {
    var l = xt;
    (xt = l !== 0 && 4 > l ? l : 4), n(!0);
    var f = Es.transition;
    Es.transition = {};
    try {
      n(!1), o();
    } finally {
      (xt = l), (Es.transition = f);
    }
  }
  function Zd() {
    return Kr().memoizedState;
  }
  function dg(n, o, l) {
    var f = ri(n);
    if (
      ((l = {
        lane: f,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Yd(n))
    )
      Qd(o, l);
    else if (((l = Pd(n, o, l, f)), l !== null)) {
      var p = gr();
      cn(l, n, f, p), Jd(l, o, f);
    }
  }
  function hg(n, o, l) {
    var f = ri(n),
      p = {
        lane: f,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Yd(n)) Qd(o, p);
    else {
      var g = n.alternate;
      if (
        n.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = o.lastRenderedReducer), g !== null)
      )
        try {
          var S = o.lastRenderedState,
            O = g(S, l);
          if (((p.hasEagerState = !0), (p.eagerState = O), an(O, S))) {
            var z = o.interleaved;
            z === null
              ? ((p.next = p), Ss(o))
              : ((p.next = z.next), (z.next = p)),
              (o.interleaved = p);
            return;
          }
        } catch {
        } finally {
        }
      (l = Pd(n, o, p, f)),
        l !== null && ((p = gr()), cn(l, n, f, p), Jd(l, o, f));
    }
  }
  function Yd(n) {
    var o = n.alternate;
    return n === Tt || (o !== null && o === Tt);
  }
  function Qd(n, o) {
    Xo = pu = !0;
    var l = n.pending;
    l === null ? (o.next = o) : ((o.next = l.next), (l.next = o)),
      (n.pending = o);
  }
  function Jd(n, o, l) {
    if (l & 4194240) {
      var f = o.lanes;
      (f &= n.pendingLanes), (l |= f), (o.lanes = l), Bl(n, l);
    }
  }
  var yu = {
      readContext: qr,
      useCallback: lr,
      useContext: lr,
      useEffect: lr,
      useImperativeHandle: lr,
      useInsertionEffect: lr,
      useLayoutEffect: lr,
      useMemo: lr,
      useReducer: lr,
      useRef: lr,
      useState: lr,
      useDebugValue: lr,
      useDeferredValue: lr,
      useTransition: lr,
      useMutableSource: lr,
      useSyncExternalStore: lr,
      useId: lr,
      unstable_isNewReconciler: !1,
    },
    pg = {
      readContext: qr,
      useCallback: function (n, o) {
        return (xn().memoizedState = [n, o === void 0 ? null : o]), n;
      },
      useContext: qr,
      useEffect: Ld,
      useImperativeHandle: function (n, o, l) {
        return (
          (l = l != null ? l.concat([n]) : null),
          vu(4194308, 4, qd.bind(null, o, n), l)
        );
      },
      useLayoutEffect: function (n, o) {
        return vu(4194308, 4, n, o);
      },
      useInsertionEffect: function (n, o) {
        return vu(4, 2, n, o);
      },
      useMemo: function (n, o) {
        var l = xn();
        return (
          (o = o === void 0 ? null : o),
          (n = n()),
          (l.memoizedState = [n, o]),
          n
        );
      },
      useReducer: function (n, o, l) {
        var f = xn();
        return (
          (o = l !== void 0 ? l(o) : o),
          (f.memoizedState = f.baseState = o),
          (n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: o,
          }),
          (f.queue = n),
          (n = n.dispatch = dg.bind(null, Tt, n)),
          [f.memoizedState, n]
        );
      },
      useRef: function (n) {
        var o = xn();
        return (n = { current: n }), (o.memoizedState = n);
      },
      useState: Md,
      useDebugValue: Ns,
      useDeferredValue: function (n) {
        return (xn().memoizedState = n);
      },
      useTransition: function () {
        var n = Md(!1),
          o = n[0];
        return (n = cg.bind(null, n[1])), (xn().memoizedState = n), [o, n];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (n, o, l) {
        var f = Tt,
          p = xn();
        if (Pt) {
          if (l === void 0) throw Error(t(407));
          l = l();
        } else {
          if (((l = o()), Yt === null)) throw Error(t(349));
          Fi & 30 || zd(f, o, l);
        }
        p.memoizedState = l;
        var g = { value: l, getSnapshot: o };
        return (
          (p.queue = g),
          Ld(jd.bind(null, f, g, n), [n]),
          (f.flags |= 2048),
          Qo(9, Nd.bind(null, f, g, l, o), void 0, null),
          l
        );
      },
      useId: function () {
        var n = xn(),
          o = Yt.identifierPrefix;
        if (Pt) {
          var l = Rn,
            f = Tn;
          (l = (f & ~(1 << (32 - on(f) - 1))).toString(32) + l),
            (o = ":" + o + "R" + l),
            (l = Zo++),
            0 < l && (o += "H" + l.toString(32)),
            (o += ":");
        } else (l = fg++), (o = ":" + o + "r" + l.toString(32) + ":");
        return (n.memoizedState = o);
      },
      unstable_isNewReconciler: !1,
    },
    vg = {
      readContext: qr,
      useCallback: Hd,
      useContext: qr,
      useEffect: zs,
      useImperativeHandle: Kd,
      useInsertionEffect: Vd,
      useLayoutEffect: Wd,
      useMemo: Gd,
      useReducer: Os,
      useRef: Ud,
      useState: function () {
        return Os(Yo);
      },
      useDebugValue: Ns,
      useDeferredValue: function (n) {
        var o = Kr();
        return Xd(o, Wt.memoizedState, n);
      },
      useTransition: function () {
        var n = Os(Yo)[0],
          o = Kr().memoizedState;
        return [n, o];
      },
      useMutableSource: Od,
      useSyncExternalStore: Ad,
      useId: Zd,
      unstable_isNewReconciler: !1,
    },
    gg = {
      readContext: qr,
      useCallback: Hd,
      useContext: qr,
      useEffect: zs,
      useImperativeHandle: Kd,
      useInsertionEffect: Vd,
      useLayoutEffect: Wd,
      useMemo: Gd,
      useReducer: As,
      useRef: Ud,
      useState: function () {
        return As(Yo);
      },
      useDebugValue: Ns,
      useDeferredValue: function (n) {
        var o = Kr();
        return Wt === null ? (o.memoizedState = n) : Xd(o, Wt.memoizedState, n);
      },
      useTransition: function () {
        var n = As(Yo)[0],
          o = Kr().memoizedState;
        return [n, o];
      },
      useMutableSource: Od,
      useSyncExternalStore: Ad,
      useId: Zd,
      unstable_isNewReconciler: !1,
    };
  function ln(n, o) {
    if (n && n.defaultProps) {
      (o = me({}, o)), (n = n.defaultProps);
      for (var l in n) o[l] === void 0 && (o[l] = n[l]);
      return o;
    }
    return o;
  }
  function js(n, o, l, f) {
    (o = n.memoizedState),
      (l = l(f, o)),
      (l = l == null ? o : me({}, o, l)),
      (n.memoizedState = l),
      n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var mu = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? $t(n) === n : !1;
    },
    enqueueSetState: function (n, o, l) {
      n = n._reactInternals;
      var f = gr(),
        p = ri(n),
        g = On(f, p);
      (g.payload = o),
        l != null && (g.callback = l),
        (o = _n(n, g, p)),
        o !== null && (cn(o, n, p, f), fu(o, n, p));
    },
    enqueueReplaceState: function (n, o, l) {
      n = n._reactInternals;
      var f = gr(),
        p = ri(n),
        g = On(f, p);
      (g.tag = 1),
        (g.payload = o),
        l != null && (g.callback = l),
        (o = _n(n, g, p)),
        o !== null && (cn(o, n, p, f), fu(o, n, p));
    },
    enqueueForceUpdate: function (n, o) {
      n = n._reactInternals;
      var l = gr(),
        f = ri(n),
        p = On(l, f);
      (p.tag = 2),
        o != null && (p.callback = o),
        (o = _n(n, p, f)),
        o !== null && (cn(o, n, f, l), fu(o, n, f));
    },
  };
  function _d(n, o, l, f, p, g, S) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(f, g, S)
        : o.prototype && o.prototype.isPureReactComponent
        ? !Bo(l, f) || !Bo(p, g)
        : !0
    );
  }
  function $d(n, o, l) {
    var f = !1,
      p = Yn,
      g = o.contextType;
    return (
      typeof g == "object" && g !== null
        ? (g = qr(g))
        : ((p = br(o) ? xi : ur.current),
          (f = o.contextTypes),
          (g = (f = f != null) ? Xi(n, p) : Yn)),
      (o = new o(l, g)),
      (n.memoizedState =
        o.state !== null && o.state !== void 0 ? o.state : null),
      (o.updater = mu),
      (n.stateNode = o),
      (o._reactInternals = n),
      f &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = p),
        (n.__reactInternalMemoizedMaskedChildContext = g)),
      o
    );
  }
  function eh(n, o, l, f) {
    (n = o.state),
      typeof o.componentWillReceiveProps == "function" &&
        o.componentWillReceiveProps(l, f),
      typeof o.UNSAFE_componentWillReceiveProps == "function" &&
        o.UNSAFE_componentWillReceiveProps(l, f),
      o.state !== n && mu.enqueueReplaceState(o, o.state, null);
  }
  function Bs(n, o, l, f) {
    var p = n.stateNode;
    (p.props = l), (p.state = n.memoizedState), (p.refs = {}), bs(n);
    var g = o.contextType;
    typeof g == "object" && g !== null
      ? (p.context = qr(g))
      : ((g = br(o) ? xi : ur.current), (p.context = Xi(n, g))),
      (p.state = n.memoizedState),
      (g = o.getDerivedStateFromProps),
      typeof g == "function" && (js(n, o, g, l), (p.state = n.memoizedState)),
      typeof o.getDerivedStateFromProps == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function" ||
        (typeof p.UNSAFE_componentWillMount != "function" &&
          typeof p.componentWillMount != "function") ||
        ((o = p.state),
        typeof p.componentWillMount == "function" && p.componentWillMount(),
        typeof p.UNSAFE_componentWillMount == "function" &&
          p.UNSAFE_componentWillMount(),
        o !== p.state && mu.enqueueReplaceState(p, p.state, null),
        cu(n, l, p, f),
        (p.state = n.memoizedState)),
      typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function to(n, o) {
    try {
      var l = "",
        f = o;
      do (l += Be(f)), (f = f.return);
      while (f);
      var p = l;
    } catch (g) {
      p =
        `
Error generating stack: ` +
        g.message +
        `
` +
        g.stack;
    }
    return { value: n, source: o, stack: p, digest: null };
  }
  function Is(n, o, l) {
    return { value: n, source: null, stack: l ?? null, digest: o ?? null };
  }
  function Ms(n, o) {
    try {
      console.error(o.value);
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  var yg = typeof WeakMap == "function" ? WeakMap : Map;
  function th(n, o, l) {
    (l = On(-1, l)), (l.tag = 3), (l.payload = { element: null });
    var f = o.value;
    return (
      (l.callback = function () {
        Cu || ((Cu = !0), ($s = f)), Ms(n, o);
      }),
      l
    );
  }
  function rh(n, o, l) {
    (l = On(-1, l)), (l.tag = 3);
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var p = o.value;
      (l.payload = function () {
        return f(p);
      }),
        (l.callback = function () {
          Ms(n, o);
        });
    }
    var g = n.stateNode;
    return (
      g !== null &&
        typeof g.componentDidCatch == "function" &&
        (l.callback = function () {
          Ms(n, o),
            typeof f != "function" &&
              (ei === null ? (ei = new Set([this])) : ei.add(this));
          var S = o.stack;
          this.componentDidCatch(o.value, {
            componentStack: S !== null ? S : "",
          });
        }),
      l
    );
  }
  function nh(n, o, l) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new yg();
      var p = new Set();
      f.set(o, p);
    } else (p = f.get(o)), p === void 0 && ((p = new Set()), f.set(o, p));
    p.has(l) || (p.add(l), (n = Og.bind(null, n, o, l)), o.then(n, n));
  }
  function ih(n) {
    do {
      var o;
      if (
        ((o = n.tag === 13) &&
          ((o = n.memoizedState),
          (o = o !== null ? o.dehydrated !== null : !0)),
        o)
      )
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function oh(n, o, l, f, p) {
    return n.mode & 1
      ? ((n.flags |= 65536), (n.lanes = p), n)
      : (n === o
          ? (n.flags |= 65536)
          : ((n.flags |= 128),
            (l.flags |= 131072),
            (l.flags &= -52805),
            l.tag === 1 &&
              (l.alternate === null
                ? (l.tag = 17)
                : ((o = On(-1, 1)), (o.tag = 2), _n(l, o, 1))),
            (l.lanes |= 1)),
        n);
  }
  var mg = q.ReactCurrentOwner,
    kr = !1;
  function vr(n, o, l, f) {
    o.child = n === null ? Cd(o, null, l, f) : Ji(o, n.child, l, f);
  }
  function ah(n, o, l, f, p) {
    l = l.render;
    var g = o.ref;
    return (
      $i(o, p),
      (f = Rs(n, o, l, f, g, p)),
      (l = Ds()),
      n !== null && !kr
        ? ((o.updateQueue = n.updateQueue),
          (o.flags &= -2053),
          (n.lanes &= ~p),
          An(n, o, p))
        : (Pt && l && ds(o), (o.flags |= 1), vr(n, o, f, p), o.child)
    );
  }
  function uh(n, o, l, f, p) {
    if (n === null) {
      var g = l.type;
      return typeof g == "function" &&
        !uf(g) &&
        g.defaultProps === void 0 &&
        l.compare === null &&
        l.defaultProps === void 0
        ? ((o.tag = 15), (o.type = g), lh(n, o, g, f, p))
        : ((n = Ou(l.type, null, f, o, o.mode, p)),
          (n.ref = o.ref),
          (n.return = o),
          (o.child = n));
    }
    if (((g = n.child), !(n.lanes & p))) {
      var S = g.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Bo), l(S, f) && n.ref === o.ref)
      )
        return An(n, o, p);
    }
    return (
      (o.flags |= 1),
      (n = ii(g, f)),
      (n.ref = o.ref),
      (n.return = o),
      (o.child = n)
    );
  }
  function lh(n, o, l, f, p) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (Bo(g, f) && n.ref === o.ref)
        if (((kr = !1), (o.pendingProps = f = g), (n.lanes & p) !== 0))
          n.flags & 131072 && (kr = !0);
        else return (o.lanes = n.lanes), An(n, o, p);
    }
    return Us(n, o, l, f, p);
  }
  function sh(n, o, l) {
    var f = o.pendingProps,
      p = f.children,
      g = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden")
      if (!(o.mode & 1))
        (o.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          kt(no, zr),
          (zr |= l);
      else {
        if (!(l & 1073741824))
          return (
            (n = g !== null ? g.baseLanes | l : l),
            (o.lanes = o.childLanes = 1073741824),
            (o.memoizedState = {
              baseLanes: n,
              cachePool: null,
              transitions: null,
            }),
            (o.updateQueue = null),
            kt(no, zr),
            (zr |= n),
            null
          );
        (o.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (f = g !== null ? g.baseLanes : l),
          kt(no, zr),
          (zr |= f);
      }
    else
      g !== null ? ((f = g.baseLanes | l), (o.memoizedState = null)) : (f = l),
        kt(no, zr),
        (zr |= f);
    return vr(n, o, p, l), o.child;
  }
  function fh(n, o) {
    var l = o.ref;
    ((n === null && l !== null) || (n !== null && n.ref !== l)) &&
      ((o.flags |= 512), (o.flags |= 2097152));
  }
  function Us(n, o, l, f, p) {
    var g = br(l) ? xi : ur.current;
    return (
      (g = Xi(o, g)),
      $i(o, p),
      (l = Rs(n, o, l, f, g, p)),
      (f = Ds()),
      n !== null && !kr
        ? ((o.updateQueue = n.updateQueue),
          (o.flags &= -2053),
          (n.lanes &= ~p),
          An(n, o, p))
        : (Pt && f && ds(o), (o.flags |= 1), vr(n, o, l, p), o.child)
    );
  }
  function ch(n, o, l, f, p) {
    if (br(l)) {
      var g = !0;
      ru(o);
    } else g = !1;
    if (($i(o, p), o.stateNode === null))
      wu(n, o), $d(o, l, f), Bs(o, l, f, p), (f = !0);
    else if (n === null) {
      var S = o.stateNode,
        O = o.memoizedProps;
      S.props = O;
      var z = S.context,
        Z = l.contextType;
      typeof Z == "object" && Z !== null
        ? (Z = qr(Z))
        : ((Z = br(l) ? xi : ur.current), (Z = Xi(o, Z)));
      var se = l.getDerivedStateFromProps,
        fe =
          typeof se == "function" ||
          typeof S.getSnapshotBeforeUpdate == "function";
      fe ||
        (typeof S.UNSAFE_componentWillReceiveProps != "function" &&
          typeof S.componentWillReceiveProps != "function") ||
        ((O !== f || z !== Z) && eh(o, S, f, Z)),
        (Jn = !1);
      var ae = o.memoizedState;
      (S.state = ae),
        cu(o, f, S, p),
        (z = o.memoizedState),
        O !== f || ae !== z || Sr.current || Jn
          ? (typeof se == "function" &&
              (js(o, l, se, f), (z = o.memoizedState)),
            (O = Jn || _d(o, l, O, f, ae, z, Z))
              ? (fe ||
                  (typeof S.UNSAFE_componentWillMount != "function" &&
                    typeof S.componentWillMount != "function") ||
                  (typeof S.componentWillMount == "function" &&
                    S.componentWillMount(),
                  typeof S.UNSAFE_componentWillMount == "function" &&
                    S.UNSAFE_componentWillMount()),
                typeof S.componentDidMount == "function" &&
                  (o.flags |= 4194308))
              : (typeof S.componentDidMount == "function" &&
                  (o.flags |= 4194308),
                (o.memoizedProps = f),
                (o.memoizedState = z)),
            (S.props = f),
            (S.state = z),
            (S.context = Z),
            (f = O))
          : (typeof S.componentDidMount == "function" && (o.flags |= 4194308),
            (f = !1));
    } else {
      (S = o.stateNode),
        Ed(n, o),
        (O = o.memoizedProps),
        (Z = o.type === o.elementType ? O : ln(o.type, O)),
        (S.props = Z),
        (fe = o.pendingProps),
        (ae = S.context),
        (z = l.contextType),
        typeof z == "object" && z !== null
          ? (z = qr(z))
          : ((z = br(l) ? xi : ur.current), (z = Xi(o, z)));
      var Fe = l.getDerivedStateFromProps;
      (se =
        typeof Fe == "function" ||
        typeof S.getSnapshotBeforeUpdate == "function") ||
        (typeof S.UNSAFE_componentWillReceiveProps != "function" &&
          typeof S.componentWillReceiveProps != "function") ||
        ((O !== fe || ae !== z) && eh(o, S, f, z)),
        (Jn = !1),
        (ae = o.memoizedState),
        (S.state = ae),
        cu(o, f, S, p);
      var De = o.memoizedState;
      O !== fe || ae !== De || Sr.current || Jn
        ? (typeof Fe == "function" && (js(o, l, Fe, f), (De = o.memoizedState)),
          (Z = Jn || _d(o, l, Z, f, ae, De, z) || !1)
            ? (se ||
                (typeof S.UNSAFE_componentWillUpdate != "function" &&
                  typeof S.componentWillUpdate != "function") ||
                (typeof S.componentWillUpdate == "function" &&
                  S.componentWillUpdate(f, De, z),
                typeof S.UNSAFE_componentWillUpdate == "function" &&
                  S.UNSAFE_componentWillUpdate(f, De, z)),
              typeof S.componentDidUpdate == "function" && (o.flags |= 4),
              typeof S.getSnapshotBeforeUpdate == "function" &&
                (o.flags |= 1024))
            : (typeof S.componentDidUpdate != "function" ||
                (O === n.memoizedProps && ae === n.memoizedState) ||
                (o.flags |= 4),
              typeof S.getSnapshotBeforeUpdate != "function" ||
                (O === n.memoizedProps && ae === n.memoizedState) ||
                (o.flags |= 1024),
              (o.memoizedProps = f),
              (o.memoizedState = De)),
          (S.props = f),
          (S.state = De),
          (S.context = z),
          (f = Z))
        : (typeof S.componentDidUpdate != "function" ||
            (O === n.memoizedProps && ae === n.memoizedState) ||
            (o.flags |= 4),
          typeof S.getSnapshotBeforeUpdate != "function" ||
            (O === n.memoizedProps && ae === n.memoizedState) ||
            (o.flags |= 1024),
          (f = !1));
    }
    return Ls(n, o, l, f, g, p);
  }
  function Ls(n, o, l, f, p, g) {
    fh(n, o);
    var S = (o.flags & 128) !== 0;
    if (!f && !S) return p && gd(o, l, !1), An(n, o, g);
    (f = o.stateNode), (mg.current = o);
    var O =
      S && typeof l.getDerivedStateFromError != "function" ? null : f.render();
    return (
      (o.flags |= 1),
      n !== null && S
        ? ((o.child = Ji(o, n.child, null, g)), (o.child = Ji(o, null, O, g)))
        : vr(n, o, O, g),
      (o.memoizedState = f.state),
      p && gd(o, l, !0),
      o.child
    );
  }
  function dh(n) {
    var o = n.stateNode;
    o.pendingContext
      ? pd(n, o.pendingContext, o.pendingContext !== o.context)
      : o.context && pd(n, o.context, !1),
      ks(n, o.containerInfo);
  }
  function hh(n, o, l, f, p) {
    return Qi(), gs(p), (o.flags |= 256), vr(n, o, l, f), o.child;
  }
  var Vs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ws(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ph(n, o, l) {
    var f = o.pendingProps,
      p = Et.current,
      g = !1,
      S = (o.flags & 128) !== 0,
      O;
    if (
      ((O = S) ||
        (O = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0),
      O
        ? ((g = !0), (o.flags &= -129))
        : (n === null || n.memoizedState !== null) && (p |= 1),
      kt(Et, p & 1),
      n === null)
    )
      return (
        vs(o),
        (n = o.memoizedState),
        n !== null && ((n = n.dehydrated), n !== null)
          ? (o.mode & 1
              ? n.data === "$!"
                ? (o.lanes = 8)
                : (o.lanes = 1073741824)
              : (o.lanes = 1),
            null)
          : ((S = f.children),
            (n = f.fallback),
            g
              ? ((f = o.mode),
                (g = o.child),
                (S = { mode: "hidden", children: S }),
                !(f & 1) && g !== null
                  ? ((g.childLanes = 0), (g.pendingProps = S))
                  : (g = Au(S, f, 0, null)),
                (n = Ri(n, f, l, null)),
                (g.return = o),
                (n.return = o),
                (g.sibling = n),
                (o.child = g),
                (o.child.memoizedState = Ws(l)),
                (o.memoizedState = Vs),
                n)
              : qs(o, S))
      );
    if (((p = n.memoizedState), p !== null && ((O = p.dehydrated), O !== null)))
      return xg(n, o, S, f, O, p, l);
    if (g) {
      (g = f.fallback), (S = o.mode), (p = n.child), (O = p.sibling);
      var z = { mode: "hidden", children: f.children };
      return (
        !(S & 1) && o.child !== p
          ? ((f = o.child),
            (f.childLanes = 0),
            (f.pendingProps = z),
            (o.deletions = null))
          : ((f = ii(p, z)), (f.subtreeFlags = p.subtreeFlags & 14680064)),
        O !== null ? (g = ii(O, g)) : ((g = Ri(g, S, l, null)), (g.flags |= 2)),
        (g.return = o),
        (f.return = o),
        (f.sibling = g),
        (o.child = f),
        (f = g),
        (g = o.child),
        (S = n.child.memoizedState),
        (S =
          S === null
            ? Ws(l)
            : {
                baseLanes: S.baseLanes | l,
                cachePool: null,
                transitions: S.transitions,
              }),
        (g.memoizedState = S),
        (g.childLanes = n.childLanes & ~l),
        (o.memoizedState = Vs),
        f
      );
    }
    return (
      (g = n.child),
      (n = g.sibling),
      (f = ii(g, { mode: "visible", children: f.children })),
      !(o.mode & 1) && (f.lanes = l),
      (f.return = o),
      (f.sibling = null),
      n !== null &&
        ((l = o.deletions),
        l === null ? ((o.deletions = [n]), (o.flags |= 16)) : l.push(n)),
      (o.child = f),
      (o.memoizedState = null),
      f
    );
  }
  function qs(n, o) {
    return (
      (o = Au({ mode: "visible", children: o }, n.mode, 0, null)),
      (o.return = n),
      (n.child = o)
    );
  }
  function xu(n, o, l, f) {
    return (
      f !== null && gs(f),
      Ji(o, n.child, null, l),
      (n = qs(o, o.pendingProps.children)),
      (n.flags |= 2),
      (o.memoizedState = null),
      n
    );
  }
  function xg(n, o, l, f, p, g, S) {
    if (l)
      return o.flags & 256
        ? ((o.flags &= -257), (f = Is(Error(t(422)))), xu(n, o, S, f))
        : o.memoizedState !== null
        ? ((o.child = n.child), (o.flags |= 128), null)
        : ((g = f.fallback),
          (p = o.mode),
          (f = Au({ mode: "visible", children: f.children }, p, 0, null)),
          (g = Ri(g, p, S, null)),
          (g.flags |= 2),
          (f.return = o),
          (g.return = o),
          (f.sibling = g),
          (o.child = f),
          o.mode & 1 && Ji(o, n.child, null, S),
          (o.child.memoizedState = Ws(S)),
          (o.memoizedState = Vs),
          g);
    if (!(o.mode & 1)) return xu(n, o, S, null);
    if (p.data === "$!") {
      if (((f = p.nextSibling && p.nextSibling.dataset), f)) var O = f.dgst;
      return (
        (f = O), (g = Error(t(419))), (f = Is(g, f, void 0)), xu(n, o, S, f)
      );
    }
    if (((O = (S & n.childLanes) !== 0), kr || O)) {
      if (((f = Yt), f !== null)) {
        switch (S & -S) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        (p = p & (f.suspendedLanes | S) ? 0 : p),
          p !== 0 &&
            p !== g.retryLane &&
            ((g.retryLane = p), Dn(n, p), cn(f, n, p, -1));
      }
      return af(), (f = Is(Error(t(421)))), xu(n, o, S, f);
    }
    return p.data === "$?"
      ? ((o.flags |= 128),
        (o.child = n.child),
        (o = Ag.bind(null, n)),
        (p._reactRetry = o),
        null)
      : ((n = g.treeContext),
        (Ar = Xn(p.nextSibling)),
        (Or = o),
        (Pt = !0),
        (un = null),
        n !== null &&
          ((Vr[Wr++] = Tn),
          (Vr[Wr++] = Rn),
          (Vr[Wr++] = wi),
          (Tn = n.id),
          (Rn = n.overflow),
          (wi = o)),
        (o = qs(o, f.children)),
        (o.flags |= 4096),
        o);
  }
  function vh(n, o, l) {
    n.lanes |= o;
    var f = n.alternate;
    f !== null && (f.lanes |= o), ws(n.return, o, l);
  }
  function Ks(n, o, l, f, p) {
    var g = n.memoizedState;
    g === null
      ? (n.memoizedState = {
          isBackwards: o,
          rendering: null,
          renderingStartTime: 0,
          last: f,
          tail: l,
          tailMode: p,
        })
      : ((g.isBackwards = o),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = f),
        (g.tail = l),
        (g.tailMode = p));
  }
  function gh(n, o, l) {
    var f = o.pendingProps,
      p = f.revealOrder,
      g = f.tail;
    if ((vr(n, o, f.children, l), (f = Et.current), f & 2))
      (f = (f & 1) | 2), (o.flags |= 128);
    else {
      if (n !== null && n.flags & 128)
        e: for (n = o.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && vh(n, l, o);
          else if (n.tag === 19) vh(n, l, o);
          else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === o) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === o) break e;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      f &= 1;
    }
    if ((kt(Et, f), !(o.mode & 1))) o.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (l = o.child, p = null; l !== null; )
            (n = l.alternate),
              n !== null && du(n) === null && (p = l),
              (l = l.sibling);
          (l = p),
            l === null
              ? ((p = o.child), (o.child = null))
              : ((p = l.sibling), (l.sibling = null)),
            Ks(o, !1, p, l, g);
          break;
        case "backwards":
          for (l = null, p = o.child, o.child = null; p !== null; ) {
            if (((n = p.alternate), n !== null && du(n) === null)) {
              o.child = p;
              break;
            }
            (n = p.sibling), (p.sibling = l), (l = p), (p = n);
          }
          Ks(o, !0, l, null, g);
          break;
        case "together":
          Ks(o, !1, null, null, void 0);
          break;
        default:
          o.memoizedState = null;
      }
    return o.child;
  }
  function wu(n, o) {
    !(o.mode & 1) &&
      n !== null &&
      ((n.alternate = null), (o.alternate = null), (o.flags |= 2));
  }
  function An(n, o, l) {
    if (
      (n !== null && (o.dependencies = n.dependencies),
      (Ci |= o.lanes),
      !(l & o.childLanes))
    )
      return null;
    if (n !== null && o.child !== n.child) throw Error(t(153));
    if (o.child !== null) {
      for (
        n = o.child, l = ii(n, n.pendingProps), o.child = l, l.return = o;
        n.sibling !== null;

      )
        (n = n.sibling),
          (l = l.sibling = ii(n, n.pendingProps)),
          (l.return = o);
      l.sibling = null;
    }
    return o.child;
  }
  function wg(n, o, l) {
    switch (o.tag) {
      case 3:
        dh(o), Qi();
        break;
      case 5:
        Dd(o);
        break;
      case 1:
        br(o.type) && ru(o);
        break;
      case 4:
        ks(o, o.stateNode.containerInfo);
        break;
      case 10:
        var f = o.type._context,
          p = o.memoizedProps.value;
        kt(lu, f._currentValue), (f._currentValue = p);
        break;
      case 13:
        if (((f = o.memoizedState), f !== null))
          return f.dehydrated !== null
            ? (kt(Et, Et.current & 1), (o.flags |= 128), null)
            : l & o.child.childLanes
            ? ph(n, o, l)
            : (kt(Et, Et.current & 1),
              (n = An(n, o, l)),
              n !== null ? n.sibling : null);
        kt(Et, Et.current & 1);
        break;
      case 19:
        if (((f = (l & o.childLanes) !== 0), n.flags & 128)) {
          if (f) return gh(n, o, l);
          o.flags |= 128;
        }
        if (
          ((p = o.memoizedState),
          p !== null &&
            ((p.rendering = null), (p.tail = null), (p.lastEffect = null)),
          kt(Et, Et.current),
          f)
        )
          break;
        return null;
      case 22:
      case 23:
        return (o.lanes = 0), sh(n, o, l);
    }
    return An(n, o, l);
  }
  var yh, Hs, mh, xh;
  (yh = function (n, o) {
    for (var l = o.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        (l.child.return = l), (l = l.child);
        continue;
      }
      if (l === o) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === o) return;
        l = l.return;
      }
      (l.sibling.return = l.return), (l = l.sibling);
    }
  }),
    (Hs = function () {}),
    (mh = function (n, o, l, f) {
      var p = n.memoizedProps;
      if (p !== f) {
        (n = o.stateNode), ki(mn.current);
        var g = null;
        switch (l) {
          case "input":
            (p = rn(n, p)), (f = rn(n, f)), (g = []);
            break;
          case "select":
            (p = me({}, p, { value: void 0 })),
              (f = me({}, f, { value: void 0 })),
              (g = []);
            break;
          case "textarea":
            (p = ar(n, p)), (f = ar(n, f)), (g = []);
            break;
          default:
            typeof p.onClick != "function" &&
              typeof f.onClick == "function" &&
              (n.onclick = $a);
        }
        $(l, f);
        var S;
        l = null;
        for (Z in p)
          if (!f.hasOwnProperty(Z) && p.hasOwnProperty(Z) && p[Z] != null)
            if (Z === "style") {
              var O = p[Z];
              for (S in O) O.hasOwnProperty(S) && (l || (l = {}), (l[S] = ""));
            } else
              Z !== "dangerouslySetInnerHTML" &&
                Z !== "children" &&
                Z !== "suppressContentEditableWarning" &&
                Z !== "suppressHydrationWarning" &&
                Z !== "autoFocus" &&
                (a.hasOwnProperty(Z)
                  ? g || (g = [])
                  : (g = g || []).push(Z, null));
        for (Z in f) {
          var z = f[Z];
          if (
            ((O = p != null ? p[Z] : void 0),
            f.hasOwnProperty(Z) && z !== O && (z != null || O != null))
          )
            if (Z === "style")
              if (O) {
                for (S in O)
                  !O.hasOwnProperty(S) ||
                    (z && z.hasOwnProperty(S)) ||
                    (l || (l = {}), (l[S] = ""));
                for (S in z)
                  z.hasOwnProperty(S) &&
                    O[S] !== z[S] &&
                    (l || (l = {}), (l[S] = z[S]));
              } else l || (g || (g = []), g.push(Z, l)), (l = z);
            else
              Z === "dangerouslySetInnerHTML"
                ? ((z = z ? z.__html : void 0),
                  (O = O ? O.__html : void 0),
                  z != null && O !== z && (g = g || []).push(Z, z))
                : Z === "children"
                ? (typeof z != "string" && typeof z != "number") ||
                  (g = g || []).push(Z, "" + z)
                : Z !== "suppressContentEditableWarning" &&
                  Z !== "suppressHydrationWarning" &&
                  (a.hasOwnProperty(Z)
                    ? (z != null && Z === "onScroll" && Ft("scroll", n),
                      g || O === z || (g = []))
                    : (g = g || []).push(Z, z));
        }
        l && (g = g || []).push("style", l);
        var Z = g;
        (o.updateQueue = Z) && (o.flags |= 4);
      }
    }),
    (xh = function (n, o, l, f) {
      l !== f && (o.flags |= 4);
    });
  function Jo(n, o) {
    if (!Pt)
      switch (n.tailMode) {
        case "hidden":
          o = n.tail;
          for (var l = null; o !== null; )
            o.alternate !== null && (l = o), (o = o.sibling);
          l === null ? (n.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = n.tail;
          for (var f = null; l !== null; )
            l.alternate !== null && (f = l), (l = l.sibling);
          f === null
            ? o || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (f.sibling = null);
      }
  }
  function sr(n) {
    var o = n.alternate !== null && n.alternate.child === n.child,
      l = 0,
      f = 0;
    if (o)
      for (var p = n.child; p !== null; )
        (l |= p.lanes | p.childLanes),
          (f |= p.subtreeFlags & 14680064),
          (f |= p.flags & 14680064),
          (p.return = n),
          (p = p.sibling);
    else
      for (p = n.child; p !== null; )
        (l |= p.lanes | p.childLanes),
          (f |= p.subtreeFlags),
          (f |= p.flags),
          (p.return = n),
          (p = p.sibling);
    return (n.subtreeFlags |= f), (n.childLanes = l), o;
  }
  function Sg(n, o, l) {
    var f = o.pendingProps;
    switch ((hs(o), o.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return sr(o), null;
      case 1:
        return br(o.type) && tu(), sr(o), null;
      case 3:
        return (
          (f = o.stateNode),
          eo(),
          Ct(Sr),
          Ct(ur),
          Ps(),
          f.pendingContext &&
            ((f.context = f.pendingContext), (f.pendingContext = null)),
          (n === null || n.child === null) &&
            (au(o)
              ? (o.flags |= 4)
              : n === null ||
                (n.memoizedState.isDehydrated && !(o.flags & 256)) ||
                ((o.flags |= 1024), un !== null && (rf(un), (un = null)))),
          Hs(n, o),
          sr(o),
          null
        );
      case 5:
        Fs(o);
        var p = ki(Go.current);
        if (((l = o.type), n !== null && o.stateNode != null))
          mh(n, o, l, f, p),
            n.ref !== o.ref && ((o.flags |= 512), (o.flags |= 2097152));
        else {
          if (!f) {
            if (o.stateNode === null) throw Error(t(166));
            return sr(o), null;
          }
          if (((n = ki(mn.current)), au(o))) {
            (f = o.stateNode), (l = o.type);
            var g = o.memoizedProps;
            switch (((f[yn] = o), (f[Vo] = g), (n = (o.mode & 1) !== 0), l)) {
              case "dialog":
                Ft("cancel", f), Ft("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ft("load", f);
                break;
              case "video":
              case "audio":
                for (p = 0; p < Mo.length; p++) Ft(Mo[p], f);
                break;
              case "source":
                Ft("error", f);
                break;
              case "img":
              case "image":
              case "link":
                Ft("error", f), Ft("load", f);
                break;
              case "details":
                Ft("toggle", f);
                break;
              case "input":
                dr(f, g), Ft("invalid", f);
                break;
              case "select":
                (f._wrapperState = { wasMultiple: !!g.multiple }),
                  Ft("invalid", f);
                break;
              case "textarea":
                kn(f, g), Ft("invalid", f);
            }
            $(l, g), (p = null);
            for (var S in g)
              if (g.hasOwnProperty(S)) {
                var O = g[S];
                S === "children"
                  ? typeof O == "string"
                    ? f.textContent !== O &&
                      (g.suppressHydrationWarning !== !0 &&
                        _a(f.textContent, O, n),
                      (p = ["children", O]))
                    : typeof O == "number" &&
                      f.textContent !== "" + O &&
                      (g.suppressHydrationWarning !== !0 &&
                        _a(f.textContent, O, n),
                      (p = ["children", "" + O]))
                  : a.hasOwnProperty(S) &&
                    O != null &&
                    S === "onScroll" &&
                    Ft("scroll", f);
              }
            switch (l) {
              case "input":
                _t(f), tt(f, g, !0);
                break;
              case "textarea":
                _t(f), xr(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (f.onclick = $a);
            }
            (f = p), (o.updateQueue = f), f !== null && (o.flags |= 4);
          } else {
            (S = p.nodeType === 9 ? p : p.ownerDocument),
              n === "http://www.w3.org/1999/xhtml" && (n = Fn(l)),
              n === "http://www.w3.org/1999/xhtml"
                ? l === "script"
                  ? ((n = S.createElement("div")),
                    (n.innerHTML = "<script></script>"),
                    (n = n.removeChild(n.firstChild)))
                  : typeof f.is == "string"
                  ? (n = S.createElement(l, { is: f.is }))
                  : ((n = S.createElement(l)),
                    l === "select" &&
                      ((S = n),
                      f.multiple
                        ? (S.multiple = !0)
                        : f.size && (S.size = f.size)))
                : (n = S.createElementNS(n, l)),
              (n[yn] = o),
              (n[Vo] = f),
              yh(n, o, !1, !1),
              (o.stateNode = n);
            e: {
              switch (((S = b(l, f)), l)) {
                case "dialog":
                  Ft("cancel", n), Ft("close", n), (p = f);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ft("load", n), (p = f);
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < Mo.length; p++) Ft(Mo[p], n);
                  p = f;
                  break;
                case "source":
                  Ft("error", n), (p = f);
                  break;
                case "img":
                case "image":
                case "link":
                  Ft("error", n), Ft("load", n), (p = f);
                  break;
                case "details":
                  Ft("toggle", n), (p = f);
                  break;
                case "input":
                  dr(n, f), (p = rn(n, f)), Ft("invalid", n);
                  break;
                case "option":
                  p = f;
                  break;
                case "select":
                  (n._wrapperState = { wasMultiple: !!f.multiple }),
                    (p = me({}, f, { value: void 0 })),
                    Ft("invalid", n);
                  break;
                case "textarea":
                  kn(n, f), (p = ar(n, f)), Ft("invalid", n);
                  break;
                default:
                  p = f;
              }
              $(l, p), (O = p);
              for (g in O)
                if (O.hasOwnProperty(g)) {
                  var z = O[g];
                  g === "style"
                    ? Ce(n, z)
                    : g === "dangerouslySetInnerHTML"
                    ? ((z = z ? z.__html : void 0), z != null && Tr(n, z))
                    : g === "children"
                    ? typeof z == "string"
                      ? (l !== "textarea" || z !== "") && Lr(n, z)
                      : typeof z == "number" && Lr(n, "" + z)
                    : g !== "suppressContentEditableWarning" &&
                      g !== "suppressHydrationWarning" &&
                      g !== "autoFocus" &&
                      (a.hasOwnProperty(g)
                        ? z != null && g === "onScroll" && Ft("scroll", n)
                        : z != null && N(n, g, z, S));
                }
              switch (l) {
                case "input":
                  _t(n), tt(n, f, !1);
                  break;
                case "textarea":
                  _t(n), xr(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + we(f.value));
                  break;
                case "select":
                  (n.multiple = !!f.multiple),
                    (g = f.value),
                    g != null
                      ? hr(n, !!f.multiple, g, !1)
                      : f.defaultValue != null &&
                        hr(n, !!f.multiple, f.defaultValue, !0);
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = $a);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break e;
                case "img":
                  f = !0;
                  break e;
                default:
                  f = !1;
              }
            }
            f && (o.flags |= 4);
          }
          o.ref !== null && ((o.flags |= 512), (o.flags |= 2097152));
        }
        return sr(o), null;
      case 6:
        if (n && o.stateNode != null) xh(n, o, n.memoizedProps, f);
        else {
          if (typeof f != "string" && o.stateNode === null) throw Error(t(166));
          if (((l = ki(Go.current)), ki(mn.current), au(o))) {
            if (
              ((f = o.stateNode),
              (l = o.memoizedProps),
              (f[yn] = o),
              (g = f.nodeValue !== l) && ((n = Or), n !== null))
            )
              switch (n.tag) {
                case 3:
                  _a(f.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 &&
                    _a(f.nodeValue, l, (n.mode & 1) !== 0);
              }
            g && (o.flags |= 4);
          } else
            (f = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(f)),
              (f[yn] = o),
              (o.stateNode = f);
        }
        return sr(o), null;
      case 13:
        if (
          (Ct(Et),
          (f = o.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (Pt && Ar !== null && o.mode & 1 && !(o.flags & 128))
            bd(), Qi(), (o.flags |= 98560), (g = !1);
          else if (((g = au(o)), f !== null && f.dehydrated !== null)) {
            if (n === null) {
              if (!g) throw Error(t(318));
              if (
                ((g = o.memoizedState),
                (g = g !== null ? g.dehydrated : null),
                !g)
              )
                throw Error(t(317));
              g[yn] = o;
            } else
              Qi(),
                !(o.flags & 128) && (o.memoizedState = null),
                (o.flags |= 4);
            sr(o), (g = !1);
          } else un !== null && (rf(un), (un = null)), (g = !0);
          if (!g) return o.flags & 65536 ? o : null;
        }
        return o.flags & 128
          ? ((o.lanes = l), o)
          : ((f = f !== null),
            f !== (n !== null && n.memoizedState !== null) &&
              f &&
              ((o.child.flags |= 8192),
              o.mode & 1 &&
                (n === null || Et.current & 1 ? qt === 0 && (qt = 3) : af())),
            o.updateQueue !== null && (o.flags |= 4),
            sr(o),
            null);
      case 4:
        return (
          eo(),
          Hs(n, o),
          n === null && Uo(o.stateNode.containerInfo),
          sr(o),
          null
        );
      case 10:
        return xs(o.type._context), sr(o), null;
      case 17:
        return br(o.type) && tu(), sr(o), null;
      case 19:
        if ((Ct(Et), (g = o.memoizedState), g === null)) return sr(o), null;
        if (((f = (o.flags & 128) !== 0), (S = g.rendering), S === null))
          if (f) Jo(g, !1);
          else {
            if (qt !== 0 || (n !== null && n.flags & 128))
              for (n = o.child; n !== null; ) {
                if (((S = du(n)), S !== null)) {
                  for (
                    o.flags |= 128,
                      Jo(g, !1),
                      f = S.updateQueue,
                      f !== null && ((o.updateQueue = f), (o.flags |= 4)),
                      o.subtreeFlags = 0,
                      f = l,
                      l = o.child;
                    l !== null;

                  )
                    (g = l),
                      (n = f),
                      (g.flags &= 14680066),
                      (S = g.alternate),
                      S === null
                        ? ((g.childLanes = 0),
                          (g.lanes = n),
                          (g.child = null),
                          (g.subtreeFlags = 0),
                          (g.memoizedProps = null),
                          (g.memoizedState = null),
                          (g.updateQueue = null),
                          (g.dependencies = null),
                          (g.stateNode = null))
                        : ((g.childLanes = S.childLanes),
                          (g.lanes = S.lanes),
                          (g.child = S.child),
                          (g.subtreeFlags = 0),
                          (g.deletions = null),
                          (g.memoizedProps = S.memoizedProps),
                          (g.memoizedState = S.memoizedState),
                          (g.updateQueue = S.updateQueue),
                          (g.type = S.type),
                          (n = S.dependencies),
                          (g.dependencies =
                            n === null
                              ? null
                              : {
                                  lanes: n.lanes,
                                  firstContext: n.firstContext,
                                })),
                      (l = l.sibling);
                  return kt(Et, (Et.current & 1) | 2), o.child;
                }
                n = n.sibling;
              }
            g.tail !== null &&
              jt() > io &&
              ((o.flags |= 128), (f = !0), Jo(g, !1), (o.lanes = 4194304));
          }
        else {
          if (!f)
            if (((n = du(S)), n !== null)) {
              if (
                ((o.flags |= 128),
                (f = !0),
                (l = n.updateQueue),
                l !== null && ((o.updateQueue = l), (o.flags |= 4)),
                Jo(g, !0),
                g.tail === null &&
                  g.tailMode === "hidden" &&
                  !S.alternate &&
                  !Pt)
              )
                return sr(o), null;
            } else
              2 * jt() - g.renderingStartTime > io &&
                l !== 1073741824 &&
                ((o.flags |= 128), (f = !0), Jo(g, !1), (o.lanes = 4194304));
          g.isBackwards
            ? ((S.sibling = o.child), (o.child = S))
            : ((l = g.last),
              l !== null ? (l.sibling = S) : (o.child = S),
              (g.last = S));
        }
        return g.tail !== null
          ? ((o = g.tail),
            (g.rendering = o),
            (g.tail = o.sibling),
            (g.renderingStartTime = jt()),
            (o.sibling = null),
            (l = Et.current),
            kt(Et, f ? (l & 1) | 2 : l & 1),
            o)
          : (sr(o), null);
      case 22:
      case 23:
        return (
          of(),
          (f = o.memoizedState !== null),
          n !== null && (n.memoizedState !== null) !== f && (o.flags |= 8192),
          f && o.mode & 1
            ? zr & 1073741824 &&
              (sr(o), o.subtreeFlags & 6 && (o.flags |= 8192))
            : sr(o),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(t(156, o.tag));
  }
  function bg(n, o) {
    switch ((hs(o), o.tag)) {
      case 1:
        return (
          br(o.type) && tu(),
          (n = o.flags),
          n & 65536 ? ((o.flags = (n & -65537) | 128), o) : null
        );
      case 3:
        return (
          eo(),
          Ct(Sr),
          Ct(ur),
          Ps(),
          (n = o.flags),
          n & 65536 && !(n & 128) ? ((o.flags = (n & -65537) | 128), o) : null
        );
      case 5:
        return Fs(o), null;
      case 13:
        if (
          (Ct(Et), (n = o.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (o.alternate === null) throw Error(t(340));
          Qi();
        }
        return (
          (n = o.flags), n & 65536 ? ((o.flags = (n & -65537) | 128), o) : null
        );
      case 19:
        return Ct(Et), null;
      case 4:
        return eo(), null;
      case 10:
        return xs(o.type._context), null;
      case 22:
      case 23:
        return of(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Su = !1,
    fr = !1,
    kg = typeof WeakSet == "function" ? WeakSet : Set,
    Te = null;
  function ro(n, o) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (f) {
          At(n, o, f);
        }
      else l.current = null;
  }
  function Gs(n, o, l) {
    try {
      l();
    } catch (f) {
      At(n, o, f);
    }
  }
  var wh = !1;
  function Fg(n, o) {
    if (((is = Va), (n = _c()), Ql(n))) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = ((l = n.ownerDocument) && l.defaultView) || window;
          var f = l.getSelection && l.getSelection();
          if (f && f.rangeCount !== 0) {
            l = f.anchorNode;
            var p = f.anchorOffset,
              g = f.focusNode;
            f = f.focusOffset;
            try {
              l.nodeType, g.nodeType;
            } catch {
              l = null;
              break e;
            }
            var S = 0,
              O = -1,
              z = -1,
              Z = 0,
              se = 0,
              fe = n,
              ae = null;
            t: for (;;) {
              for (
                var Fe;
                fe !== l || (p !== 0 && fe.nodeType !== 3) || (O = S + p),
                  fe !== g || (f !== 0 && fe.nodeType !== 3) || (z = S + f),
                  fe.nodeType === 3 && (S += fe.nodeValue.length),
                  (Fe = fe.firstChild) !== null;

              )
                (ae = fe), (fe = Fe);
              for (;;) {
                if (fe === n) break t;
                if (
                  (ae === l && ++Z === p && (O = S),
                  ae === g && ++se === f && (z = S),
                  (Fe = fe.nextSibling) !== null)
                )
                  break;
                (fe = ae), (ae = fe.parentNode);
              }
              fe = Fe;
            }
            l = O === -1 || z === -1 ? null : { start: O, end: z };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      os = { focusedElem: n, selectionRange: l }, Va = !1, Te = o;
      Te !== null;

    )
      if (
        ((o = Te), (n = o.child), (o.subtreeFlags & 1028) !== 0 && n !== null)
      )
        (n.return = o), (Te = n);
      else
        for (; Te !== null; ) {
          o = Te;
          try {
            var De = o.alternate;
            if (o.flags & 1024)
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (De !== null) {
                    var Oe = De.memoizedProps,
                      Bt = De.memoizedState,
                      W = o.stateNode,
                      B = W.getSnapshotBeforeUpdate(
                        o.elementType === o.type ? Oe : ln(o.type, Oe),
                        Bt
                      );
                    W.__reactInternalSnapshotBeforeUpdate = B;
                  }
                  break;
                case 3:
                  var H = o.stateNode.containerInfo;
                  H.nodeType === 1
                    ? (H.textContent = "")
                    : H.nodeType === 9 &&
                      H.documentElement &&
                      H.removeChild(H.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(t(163));
              }
          } catch (ye) {
            At(o, o.return, ye);
          }
          if (((n = o.sibling), n !== null)) {
            (n.return = o.return), (Te = n);
            break;
          }
          Te = o.return;
        }
    return (De = wh), (wh = !1), De;
  }
  function _o(n, o, l) {
    var f = o.updateQueue;
    if (((f = f !== null ? f.lastEffect : null), f !== null)) {
      var p = (f = f.next);
      do {
        if ((p.tag & n) === n) {
          var g = p.destroy;
          (p.destroy = void 0), g !== void 0 && Gs(o, l, g);
        }
        p = p.next;
      } while (p !== f);
    }
  }
  function bu(n, o) {
    if (
      ((o = o.updateQueue), (o = o !== null ? o.lastEffect : null), o !== null)
    ) {
      var l = (o = o.next);
      do {
        if ((l.tag & n) === n) {
          var f = l.create;
          l.destroy = f();
        }
        l = l.next;
      } while (l !== o);
    }
  }
  function Xs(n) {
    var o = n.ref;
    if (o !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof o == "function" ? o(n) : (o.current = n);
    }
  }
  function Sh(n) {
    var o = n.alternate;
    o !== null && ((n.alternate = null), Sh(o)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 &&
        ((o = n.stateNode),
        o !== null &&
          (delete o[yn],
          delete o[Vo],
          delete o[ss],
          delete o[ag],
          delete o[ug])),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null);
  }
  function bh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function kh(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || bh(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        (n.child.return = n), (n = n.child);
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Zs(n, o, l) {
    var f = n.tag;
    if (f === 5 || f === 6)
      (n = n.stateNode),
        o
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(n, o)
            : l.insertBefore(n, o)
          : (l.nodeType === 8
              ? ((o = l.parentNode), o.insertBefore(n, l))
              : ((o = l), o.appendChild(n)),
            (l = l._reactRootContainer),
            l != null || o.onclick !== null || (o.onclick = $a));
    else if (f !== 4 && ((n = n.child), n !== null))
      for (Zs(n, o, l), n = n.sibling; n !== null; )
        Zs(n, o, l), (n = n.sibling);
  }
  function Ys(n, o, l) {
    var f = n.tag;
    if (f === 5 || f === 6)
      (n = n.stateNode), o ? l.insertBefore(n, o) : l.appendChild(n);
    else if (f !== 4 && ((n = n.child), n !== null))
      for (Ys(n, o, l), n = n.sibling; n !== null; )
        Ys(n, o, l), (n = n.sibling);
  }
  var er = null,
    sn = !1;
  function $n(n, o, l) {
    for (l = l.child; l !== null; ) Fh(n, o, l), (l = l.sibling);
  }
  function Fh(n, o, l) {
    if (gn && typeof gn.onCommitFiberUnmount == "function")
      try {
        gn.onCommitFiberUnmount(ja, l);
      } catch {}
    switch (l.tag) {
      case 5:
        fr || ro(l, o);
      case 6:
        var f = er,
          p = sn;
        (er = null),
          $n(n, o, l),
          (er = f),
          (sn = p),
          er !== null &&
            (sn
              ? ((n = er),
                (l = l.stateNode),
                n.nodeType === 8
                  ? n.parentNode.removeChild(l)
                  : n.removeChild(l))
              : er.removeChild(l.stateNode));
        break;
      case 18:
        er !== null &&
          (sn
            ? ((n = er),
              (l = l.stateNode),
              n.nodeType === 8
                ? ls(n.parentNode, l)
                : n.nodeType === 1 && ls(n, l),
              Do(n))
            : ls(er, l.stateNode));
        break;
      case 4:
        (f = er),
          (p = sn),
          (er = l.stateNode.containerInfo),
          (sn = !0),
          $n(n, o, l),
          (er = f),
          (sn = p);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !fr &&
          ((f = l.updateQueue), f !== null && ((f = f.lastEffect), f !== null))
        ) {
          p = f = f.next;
          do {
            var g = p,
              S = g.destroy;
            (g = g.tag),
              S !== void 0 && (g & 2 || g & 4) && Gs(l, o, S),
              (p = p.next);
          } while (p !== f);
        }
        $n(n, o, l);
        break;
      case 1:
        if (
          !fr &&
          (ro(l, o),
          (f = l.stateNode),
          typeof f.componentWillUnmount == "function")
        )
          try {
            (f.props = l.memoizedProps),
              (f.state = l.memoizedState),
              f.componentWillUnmount();
          } catch (O) {
            At(l, o, O);
          }
        $n(n, o, l);
        break;
      case 21:
        $n(n, o, l);
        break;
      case 22:
        l.mode & 1
          ? ((fr = (f = fr) || l.memoizedState !== null), $n(n, o, l), (fr = f))
          : $n(n, o, l);
        break;
      default:
        $n(n, o, l);
    }
  }
  function Ch(n) {
    var o = n.updateQueue;
    if (o !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new kg()),
        o.forEach(function (f) {
          var p = zg.bind(null, n, f);
          l.has(f) || (l.add(f), f.then(p, p));
        });
    }
  }
  function fn(n, o) {
    var l = o.deletions;
    if (l !== null)
      for (var f = 0; f < l.length; f++) {
        var p = l[f];
        try {
          var g = n,
            S = o,
            O = S;
          e: for (; O !== null; ) {
            switch (O.tag) {
              case 5:
                (er = O.stateNode), (sn = !1);
                break e;
              case 3:
                (er = O.stateNode.containerInfo), (sn = !0);
                break e;
              case 4:
                (er = O.stateNode.containerInfo), (sn = !0);
                break e;
            }
            O = O.return;
          }
          if (er === null) throw Error(t(160));
          Fh(g, S, p), (er = null), (sn = !1);
          var z = p.alternate;
          z !== null && (z.return = null), (p.return = null);
        } catch (Z) {
          At(p, o, Z);
        }
      }
    if (o.subtreeFlags & 12854)
      for (o = o.child; o !== null; ) Ph(o, n), (o = o.sibling);
  }
  function Ph(n, o) {
    var l = n.alternate,
      f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((fn(o, n), wn(n), f & 4)) {
          try {
            _o(3, n, n.return), bu(3, n);
          } catch (Oe) {
            At(n, n.return, Oe);
          }
          try {
            _o(5, n, n.return);
          } catch (Oe) {
            At(n, n.return, Oe);
          }
        }
        break;
      case 1:
        fn(o, n), wn(n), f & 512 && l !== null && ro(l, l.return);
        break;
      case 5:
        if (
          (fn(o, n),
          wn(n),
          f & 512 && l !== null && ro(l, l.return),
          n.flags & 32)
        ) {
          var p = n.stateNode;
          try {
            Lr(p, "");
          } catch (Oe) {
            At(n, n.return, Oe);
          }
        }
        if (f & 4 && ((p = n.stateNode), p != null)) {
          var g = n.memoizedProps,
            S = l !== null ? l.memoizedProps : g,
            O = n.type,
            z = n.updateQueue;
          if (((n.updateQueue = null), z !== null))
            try {
              O === "input" && g.type === "radio" && g.name != null && ir(p, g),
                b(O, S);
              var Z = b(O, g);
              for (S = 0; S < z.length; S += 2) {
                var se = z[S],
                  fe = z[S + 1];
                se === "style"
                  ? Ce(p, fe)
                  : se === "dangerouslySetInnerHTML"
                  ? Tr(p, fe)
                  : se === "children"
                  ? Lr(p, fe)
                  : N(p, se, fe, Z);
              }
              switch (O) {
                case "input":
                  St(p, g);
                  break;
                case "textarea":
                  nn(p, g);
                  break;
                case "select":
                  var ae = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!g.multiple;
                  var Fe = g.value;
                  Fe != null
                    ? hr(p, !!g.multiple, Fe, !1)
                    : ae !== !!g.multiple &&
                      (g.defaultValue != null
                        ? hr(p, !!g.multiple, g.defaultValue, !0)
                        : hr(p, !!g.multiple, g.multiple ? [] : "", !1));
              }
              p[Vo] = g;
            } catch (Oe) {
              At(n, n.return, Oe);
            }
        }
        break;
      case 6:
        if ((fn(o, n), wn(n), f & 4)) {
          if (n.stateNode === null) throw Error(t(162));
          (p = n.stateNode), (g = n.memoizedProps);
          try {
            p.nodeValue = g;
          } catch (Oe) {
            At(n, n.return, Oe);
          }
        }
        break;
      case 3:
        if (
          (fn(o, n), wn(n), f & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Do(o.containerInfo);
          } catch (Oe) {
            At(n, n.return, Oe);
          }
        break;
      case 4:
        fn(o, n), wn(n);
        break;
      case 13:
        fn(o, n),
          wn(n),
          (p = n.child),
          p.flags & 8192 &&
            ((g = p.memoizedState !== null),
            (p.stateNode.isHidden = g),
            !g ||
              (p.alternate !== null && p.alternate.memoizedState !== null) ||
              (_s = jt())),
          f & 4 && Ch(n);
        break;
      case 22:
        if (
          ((se = l !== null && l.memoizedState !== null),
          n.mode & 1 ? ((fr = (Z = fr) || se), fn(o, n), (fr = Z)) : fn(o, n),
          wn(n),
          f & 8192)
        ) {
          if (
            ((Z = n.memoizedState !== null),
            (n.stateNode.isHidden = Z) && !se && n.mode & 1)
          )
            for (Te = n, se = n.child; se !== null; ) {
              for (fe = Te = se; Te !== null; ) {
                switch (((ae = Te), (Fe = ae.child), ae.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _o(4, ae, ae.return);
                    break;
                  case 1:
                    ro(ae, ae.return);
                    var De = ae.stateNode;
                    if (typeof De.componentWillUnmount == "function") {
                      (f = ae), (l = ae.return);
                      try {
                        (o = f),
                          (De.props = o.memoizedProps),
                          (De.state = o.memoizedState),
                          De.componentWillUnmount();
                      } catch (Oe) {
                        At(f, l, Oe);
                      }
                    }
                    break;
                  case 5:
                    ro(ae, ae.return);
                    break;
                  case 22:
                    if (ae.memoizedState !== null) {
                      Rh(fe);
                      continue;
                    }
                }
                Fe !== null ? ((Fe.return = ae), (Te = Fe)) : Rh(fe);
              }
              se = se.sibling;
            }
          e: for (se = null, fe = n; ; ) {
            if (fe.tag === 5) {
              if (se === null) {
                se = fe;
                try {
                  (p = fe.stateNode),
                    Z
                      ? ((g = p.style),
                        typeof g.setProperty == "function"
                          ? g.setProperty("display", "none", "important")
                          : (g.display = "none"))
                      : ((O = fe.stateNode),
                        (z = fe.memoizedProps.style),
                        (S =
                          z != null && z.hasOwnProperty("display")
                            ? z.display
                            : null),
                        (O.style.display = he("display", S)));
                } catch (Oe) {
                  At(n, n.return, Oe);
                }
              }
            } else if (fe.tag === 6) {
              if (se === null)
                try {
                  fe.stateNode.nodeValue = Z ? "" : fe.memoizedProps;
                } catch (Oe) {
                  At(n, n.return, Oe);
                }
            } else if (
              ((fe.tag !== 22 && fe.tag !== 23) ||
                fe.memoizedState === null ||
                fe === n) &&
              fe.child !== null
            ) {
              (fe.child.return = fe), (fe = fe.child);
              continue;
            }
            if (fe === n) break e;
            for (; fe.sibling === null; ) {
              if (fe.return === null || fe.return === n) break e;
              se === fe && (se = null), (fe = fe.return);
            }
            se === fe && (se = null),
              (fe.sibling.return = fe.return),
              (fe = fe.sibling);
          }
        }
        break;
      case 19:
        fn(o, n), wn(n), f & 4 && Ch(n);
        break;
      case 21:
        break;
      default:
        fn(o, n), wn(n);
    }
  }
  function wn(n) {
    var o = n.flags;
    if (o & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (bh(l)) {
              var f = l;
              break e;
            }
            l = l.return;
          }
          throw Error(t(160));
        }
        switch (f.tag) {
          case 5:
            var p = f.stateNode;
            f.flags & 32 && (Lr(p, ""), (f.flags &= -33));
            var g = kh(n);
            Ys(n, g, p);
            break;
          case 3:
          case 4:
            var S = f.stateNode.containerInfo,
              O = kh(n);
            Zs(n, O, S);
            break;
          default:
            throw Error(t(161));
        }
      } catch (z) {
        At(n, n.return, z);
      }
      n.flags &= -3;
    }
    o & 4096 && (n.flags &= -4097);
  }
  function Cg(n, o, l) {
    (Te = n), Eh(n);
  }
  function Eh(n, o, l) {
    for (var f = (n.mode & 1) !== 0; Te !== null; ) {
      var p = Te,
        g = p.child;
      if (p.tag === 22 && f) {
        var S = p.memoizedState !== null || Su;
        if (!S) {
          var O = p.alternate,
            z = (O !== null && O.memoizedState !== null) || fr;
          O = Su;
          var Z = fr;
          if (((Su = S), (fr = z) && !Z))
            for (Te = p; Te !== null; )
              (S = Te),
                (z = S.child),
                S.tag === 22 && S.memoizedState !== null
                  ? Dh(p)
                  : z !== null
                  ? ((z.return = S), (Te = z))
                  : Dh(p);
          for (; g !== null; ) (Te = g), Eh(g), (g = g.sibling);
          (Te = p), (Su = O), (fr = Z);
        }
        Th(n);
      } else
        p.subtreeFlags & 8772 && g !== null
          ? ((g.return = p), (Te = g))
          : Th(n);
    }
  }
  function Th(n) {
    for (; Te !== null; ) {
      var o = Te;
      if (o.flags & 8772) {
        var l = o.alternate;
        try {
          if (o.flags & 8772)
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                fr || bu(5, o);
                break;
              case 1:
                var f = o.stateNode;
                if (o.flags & 4 && !fr)
                  if (l === null) f.componentDidMount();
                  else {
                    var p =
                      o.elementType === o.type
                        ? l.memoizedProps
                        : ln(o.type, l.memoizedProps);
                    f.componentDidUpdate(
                      p,
                      l.memoizedState,
                      f.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var g = o.updateQueue;
                g !== null && Rd(o, g, f);
                break;
              case 3:
                var S = o.updateQueue;
                if (S !== null) {
                  if (((l = null), o.child !== null))
                    switch (o.child.tag) {
                      case 5:
                        l = o.child.stateNode;
                        break;
                      case 1:
                        l = o.child.stateNode;
                    }
                  Rd(o, S, l);
                }
                break;
              case 5:
                var O = o.stateNode;
                if (l === null && o.flags & 4) {
                  l = O;
                  var z = o.memoizedProps;
                  switch (o.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      z.autoFocus && l.focus();
                      break;
                    case "img":
                      z.src && (l.src = z.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (o.memoizedState === null) {
                  var Z = o.alternate;
                  if (Z !== null) {
                    var se = Z.memoizedState;
                    if (se !== null) {
                      var fe = se.dehydrated;
                      fe !== null && Do(fe);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(t(163));
            }
          fr || (o.flags & 512 && Xs(o));
        } catch (ae) {
          At(o, o.return, ae);
        }
      }
      if (o === n) {
        Te = null;
        break;
      }
      if (((l = o.sibling), l !== null)) {
        (l.return = o.return), (Te = l);
        break;
      }
      Te = o.return;
    }
  }
  function Rh(n) {
    for (; Te !== null; ) {
      var o = Te;
      if (o === n) {
        Te = null;
        break;
      }
      var l = o.sibling;
      if (l !== null) {
        (l.return = o.return), (Te = l);
        break;
      }
      Te = o.return;
    }
  }
  function Dh(n) {
    for (; Te !== null; ) {
      var o = Te;
      try {
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            var l = o.return;
            try {
              bu(4, o);
            } catch (z) {
              At(o, l, z);
            }
            break;
          case 1:
            var f = o.stateNode;
            if (typeof f.componentDidMount == "function") {
              var p = o.return;
              try {
                f.componentDidMount();
              } catch (z) {
                At(o, p, z);
              }
            }
            var g = o.return;
            try {
              Xs(o);
            } catch (z) {
              At(o, g, z);
            }
            break;
          case 5:
            var S = o.return;
            try {
              Xs(o);
            } catch (z) {
              At(o, S, z);
            }
        }
      } catch (z) {
        At(o, o.return, z);
      }
      if (o === n) {
        Te = null;
        break;
      }
      var O = o.sibling;
      if (O !== null) {
        (O.return = o.return), (Te = O);
        break;
      }
      Te = o.return;
    }
  }
  var Pg = Math.ceil,
    ku = q.ReactCurrentDispatcher,
    Qs = q.ReactCurrentOwner,
    Hr = q.ReactCurrentBatchConfig,
    ft = 0,
    Yt = null,
    It = null,
    tr = 0,
    zr = 0,
    no = Zn(0),
    qt = 0,
    $o = null,
    Ci = 0,
    Fu = 0,
    Js = 0,
    ea = null,
    Fr = null,
    _s = 0,
    io = 1 / 0,
    zn = null,
    Cu = !1,
    $s = null,
    ei = null,
    Pu = !1,
    ti = null,
    Eu = 0,
    ta = 0,
    ef = null,
    Tu = -1,
    Ru = 0;
  function gr() {
    return ft & 6 ? jt() : Tu !== -1 ? Tu : (Tu = jt());
  }
  function ri(n) {
    return n.mode & 1
      ? ft & 2 && tr !== 0
        ? tr & -tr
        : sg.transition !== null
        ? (Ru === 0 && (Ru = kc()), Ru)
        : ((n = xt),
          n !== 0 || ((n = window.event), (n = n === void 0 ? 16 : Ac(n.type))),
          n)
      : 1;
  }
  function cn(n, o, l, f) {
    if (50 < ta) throw ((ta = 0), (ef = null), Error(t(185)));
    Co(n, l, f),
      (!(ft & 2) || n !== Yt) &&
        (n === Yt && (!(ft & 2) && (Fu |= l), qt === 4 && ni(n, tr)),
        Cr(n, f),
        l === 1 &&
          ft === 0 &&
          !(o.mode & 1) &&
          ((io = jt() + 500), nu && Qn()));
  }
  function Cr(n, o) {
    var l = n.callbackNode;
    sv(n, o);
    var f = Ma(n, n === Yt ? tr : 0);
    if (f === 0)
      l !== null && wc(l), (n.callbackNode = null), (n.callbackPriority = 0);
    else if (((o = f & -f), n.callbackPriority !== o)) {
      if ((l != null && wc(l), o === 1))
        n.tag === 0 ? lg(Ah.bind(null, n)) : yd(Ah.bind(null, n)),
          ig(function () {
            !(ft & 6) && Qn();
          }),
          (l = null);
      else {
        switch (Fc(f)) {
          case 1:
            l = zl;
            break;
          case 4:
            l = Sc;
            break;
          case 16:
            l = Na;
            break;
          case 536870912:
            l = bc;
            break;
          default:
            l = Na;
        }
        l = Lh(l, Oh.bind(null, n));
      }
      (n.callbackPriority = o), (n.callbackNode = l);
    }
  }
  function Oh(n, o) {
    if (((Tu = -1), (Ru = 0), ft & 6)) throw Error(t(327));
    var l = n.callbackNode;
    if (oo() && n.callbackNode !== l) return null;
    var f = Ma(n, n === Yt ? tr : 0);
    if (f === 0) return null;
    if (f & 30 || f & n.expiredLanes || o) o = Du(n, f);
    else {
      o = f;
      var p = ft;
      ft |= 2;
      var g = Nh();
      (Yt !== n || tr !== o) && ((zn = null), (io = jt() + 500), Ei(n, o));
      do
        try {
          Rg();
          break;
        } catch (O) {
          zh(n, O);
        }
      while (!0);
      ms(),
        (ku.current = g),
        (ft = p),
        It !== null ? (o = 0) : ((Yt = null), (tr = 0), (o = qt));
    }
    if (o !== 0) {
      if (
        (o === 2 && ((p = Nl(n)), p !== 0 && ((f = p), (o = tf(n, p)))),
        o === 1)
      )
        throw ((l = $o), Ei(n, 0), ni(n, f), Cr(n, jt()), l);
      if (o === 6) ni(n, f);
      else {
        if (
          ((p = n.current.alternate),
          !(f & 30) &&
            !Eg(p) &&
            ((o = Du(n, f)),
            o === 2 && ((g = Nl(n)), g !== 0 && ((f = g), (o = tf(n, g)))),
            o === 1))
        )
          throw ((l = $o), Ei(n, 0), ni(n, f), Cr(n, jt()), l);
        switch (((n.finishedWork = p), (n.finishedLanes = f), o)) {
          case 0:
          case 1:
            throw Error(t(345));
          case 2:
            Ti(n, Fr, zn);
            break;
          case 3:
            if (
              (ni(n, f),
              (f & 130023424) === f && ((o = _s + 500 - jt()), 10 < o))
            ) {
              if (Ma(n, 0) !== 0) break;
              if (((p = n.suspendedLanes), (p & f) !== f)) {
                gr(), (n.pingedLanes |= n.suspendedLanes & p);
                break;
              }
              n.timeoutHandle = us(Ti.bind(null, n, Fr, zn), o);
              break;
            }
            Ti(n, Fr, zn);
            break;
          case 4:
            if ((ni(n, f), (f & 4194240) === f)) break;
            for (o = n.eventTimes, p = -1; 0 < f; ) {
              var S = 31 - on(f);
              (g = 1 << S), (S = o[S]), S > p && (p = S), (f &= ~g);
            }
            if (
              ((f = p),
              (f = jt() - f),
              (f =
                (120 > f
                  ? 120
                  : 480 > f
                  ? 480
                  : 1080 > f
                  ? 1080
                  : 1920 > f
                  ? 1920
                  : 3e3 > f
                  ? 3e3
                  : 4320 > f
                  ? 4320
                  : 1960 * Pg(f / 1960)) - f),
              10 < f)
            ) {
              n.timeoutHandle = us(Ti.bind(null, n, Fr, zn), f);
              break;
            }
            Ti(n, Fr, zn);
            break;
          case 5:
            Ti(n, Fr, zn);
            break;
          default:
            throw Error(t(329));
        }
      }
    }
    return Cr(n, jt()), n.callbackNode === l ? Oh.bind(null, n) : null;
  }
  function tf(n, o) {
    var l = ea;
    return (
      n.current.memoizedState.isDehydrated && (Ei(n, o).flags |= 256),
      (n = Du(n, o)),
      n !== 2 && ((o = Fr), (Fr = l), o !== null && rf(o)),
      n
    );
  }
  function rf(n) {
    Fr === null ? (Fr = n) : Fr.push.apply(Fr, n);
  }
  function Eg(n) {
    for (var o = n; ; ) {
      if (o.flags & 16384) {
        var l = o.updateQueue;
        if (l !== null && ((l = l.stores), l !== null))
          for (var f = 0; f < l.length; f++) {
            var p = l[f],
              g = p.getSnapshot;
            p = p.value;
            try {
              if (!an(g(), p)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((l = o.child), o.subtreeFlags & 16384 && l !== null))
        (l.return = o), (o = l);
      else {
        if (o === n) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === n) return !0;
          o = o.return;
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
    }
    return !0;
  }
  function ni(n, o) {
    for (
      o &= ~Js,
        o &= ~Fu,
        n.suspendedLanes |= o,
        n.pingedLanes &= ~o,
        n = n.expirationTimes;
      0 < o;

    ) {
      var l = 31 - on(o),
        f = 1 << l;
      (n[l] = -1), (o &= ~f);
    }
  }
  function Ah(n) {
    if (ft & 6) throw Error(t(327));
    oo();
    var o = Ma(n, 0);
    if (!(o & 1)) return Cr(n, jt()), null;
    var l = Du(n, o);
    if (n.tag !== 0 && l === 2) {
      var f = Nl(n);
      f !== 0 && ((o = f), (l = tf(n, f)));
    }
    if (l === 1) throw ((l = $o), Ei(n, 0), ni(n, o), Cr(n, jt()), l);
    if (l === 6) throw Error(t(345));
    return (
      (n.finishedWork = n.current.alternate),
      (n.finishedLanes = o),
      Ti(n, Fr, zn),
      Cr(n, jt()),
      null
    );
  }
  function nf(n, o) {
    var l = ft;
    ft |= 1;
    try {
      return n(o);
    } finally {
      (ft = l), ft === 0 && ((io = jt() + 500), nu && Qn());
    }
  }
  function Pi(n) {
    ti !== null && ti.tag === 0 && !(ft & 6) && oo();
    var o = ft;
    ft |= 1;
    var l = Hr.transition,
      f = xt;
    try {
      if (((Hr.transition = null), (xt = 1), n)) return n();
    } finally {
      (xt = f), (Hr.transition = l), (ft = o), !(ft & 6) && Qn();
    }
  }
  function of() {
    (zr = no.current), Ct(no);
  }
  function Ei(n, o) {
    (n.finishedWork = null), (n.finishedLanes = 0);
    var l = n.timeoutHandle;
    if ((l !== -1 && ((n.timeoutHandle = -1), ng(l)), It !== null))
      for (l = It.return; l !== null; ) {
        var f = l;
        switch ((hs(f), f.tag)) {
          case 1:
            (f = f.type.childContextTypes), f != null && tu();
            break;
          case 3:
            eo(), Ct(Sr), Ct(ur), Ps();
            break;
          case 5:
            Fs(f);
            break;
          case 4:
            eo();
            break;
          case 13:
            Ct(Et);
            break;
          case 19:
            Ct(Et);
            break;
          case 10:
            xs(f.type._context);
            break;
          case 22:
          case 23:
            of();
        }
        l = l.return;
      }
    if (
      ((Yt = n),
      (It = n = ii(n.current, null)),
      (tr = zr = o),
      (qt = 0),
      ($o = null),
      (Js = Fu = Ci = 0),
      (Fr = ea = null),
      bi !== null)
    ) {
      for (o = 0; o < bi.length; o++)
        if (((l = bi[o]), (f = l.interleaved), f !== null)) {
          l.interleaved = null;
          var p = f.next,
            g = l.pending;
          if (g !== null) {
            var S = g.next;
            (g.next = p), (f.next = S);
          }
          l.pending = f;
        }
      bi = null;
    }
    return n;
  }
  function zh(n, o) {
    do {
      var l = It;
      try {
        if ((ms(), (hu.current = yu), pu)) {
          for (var f = Tt.memoizedState; f !== null; ) {
            var p = f.queue;
            p !== null && (p.pending = null), (f = f.next);
          }
          pu = !1;
        }
        if (
          ((Fi = 0),
          (Zt = Wt = Tt = null),
          (Xo = !1),
          (Zo = 0),
          (Qs.current = null),
          l === null || l.return === null)
        ) {
          (qt = 1), ($o = o), (It = null);
          break;
        }
        e: {
          var g = n,
            S = l.return,
            O = l,
            z = o;
          if (
            ((o = tr),
            (O.flags |= 32768),
            z !== null && typeof z == "object" && typeof z.then == "function")
          ) {
            var Z = z,
              se = O,
              fe = se.tag;
            if (!(se.mode & 1) && (fe === 0 || fe === 11 || fe === 15)) {
              var ae = se.alternate;
              ae
                ? ((se.updateQueue = ae.updateQueue),
                  (se.memoizedState = ae.memoizedState),
                  (se.lanes = ae.lanes))
                : ((se.updateQueue = null), (se.memoizedState = null));
            }
            var Fe = ih(S);
            if (Fe !== null) {
              (Fe.flags &= -257),
                oh(Fe, S, O, g, o),
                Fe.mode & 1 && nh(g, Z, o),
                (o = Fe),
                (z = Z);
              var De = o.updateQueue;
              if (De === null) {
                var Oe = new Set();
                Oe.add(z), (o.updateQueue = Oe);
              } else De.add(z);
              break e;
            } else {
              if (!(o & 1)) {
                nh(g, Z, o), af();
                break e;
              }
              z = Error(t(426));
            }
          } else if (Pt && O.mode & 1) {
            var Bt = ih(S);
            if (Bt !== null) {
              !(Bt.flags & 65536) && (Bt.flags |= 256),
                oh(Bt, S, O, g, o),
                gs(to(z, O));
              break e;
            }
          }
          (g = z = to(z, O)),
            qt !== 4 && (qt = 2),
            ea === null ? (ea = [g]) : ea.push(g),
            (g = S);
          do {
            switch (g.tag) {
              case 3:
                (g.flags |= 65536), (o &= -o), (g.lanes |= o);
                var W = th(g, z, o);
                Td(g, W);
                break e;
              case 1:
                O = z;
                var B = g.type,
                  H = g.stateNode;
                if (
                  !(g.flags & 128) &&
                  (typeof B.getDerivedStateFromError == "function" ||
                    (H !== null &&
                      typeof H.componentDidCatch == "function" &&
                      (ei === null || !ei.has(H))))
                ) {
                  (g.flags |= 65536), (o &= -o), (g.lanes |= o);
                  var ye = rh(g, O, o);
                  Td(g, ye);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        Bh(l);
      } catch (ze) {
        (o = ze), It === l && l !== null && (It = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Nh() {
    var n = ku.current;
    return (ku.current = yu), n === null ? yu : n;
  }
  function af() {
    (qt === 0 || qt === 3 || qt === 2) && (qt = 4),
      Yt === null || (!(Ci & 268435455) && !(Fu & 268435455)) || ni(Yt, tr);
  }
  function Du(n, o) {
    var l = ft;
    ft |= 2;
    var f = Nh();
    (Yt !== n || tr !== o) && ((zn = null), Ei(n, o));
    do
      try {
        Tg();
        break;
      } catch (p) {
        zh(n, p);
      }
    while (!0);
    if ((ms(), (ft = l), (ku.current = f), It !== null)) throw Error(t(261));
    return (Yt = null), (tr = 0), qt;
  }
  function Tg() {
    for (; It !== null; ) jh(It);
  }
  function Rg() {
    for (; It !== null && !ev(); ) jh(It);
  }
  function jh(n) {
    var o = Uh(n.alternate, n, zr);
    (n.memoizedProps = n.pendingProps),
      o === null ? Bh(n) : (It = o),
      (Qs.current = null);
  }
  function Bh(n) {
    var o = n;
    do {
      var l = o.alternate;
      if (((n = o.return), o.flags & 32768)) {
        if (((l = bg(l, o)), l !== null)) {
          (l.flags &= 32767), (It = l);
          return;
        }
        if (n !== null)
          (n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null);
        else {
          (qt = 6), (It = null);
          return;
        }
      } else if (((l = Sg(l, o, zr)), l !== null)) {
        It = l;
        return;
      }
      if (((o = o.sibling), o !== null)) {
        It = o;
        return;
      }
      It = o = n;
    } while (o !== null);
    qt === 0 && (qt = 5);
  }
  function Ti(n, o, l) {
    var f = xt,
      p = Hr.transition;
    try {
      (Hr.transition = null), (xt = 1), Dg(n, o, l, f);
    } finally {
      (Hr.transition = p), (xt = f);
    }
    return null;
  }
  function Dg(n, o, l, f) {
    do oo();
    while (ti !== null);
    if (ft & 6) throw Error(t(327));
    l = n.finishedWork;
    var p = n.finishedLanes;
    if (l === null) return null;
    if (((n.finishedWork = null), (n.finishedLanes = 0), l === n.current))
      throw Error(t(177));
    (n.callbackNode = null), (n.callbackPriority = 0);
    var g = l.lanes | l.childLanes;
    if (
      (fv(n, g),
      n === Yt && ((It = Yt = null), (tr = 0)),
      (!(l.subtreeFlags & 2064) && !(l.flags & 2064)) ||
        Pu ||
        ((Pu = !0),
        Lh(Na, function () {
          return oo(), null;
        })),
      (g = (l.flags & 15990) !== 0),
      l.subtreeFlags & 15990 || g)
    ) {
      (g = Hr.transition), (Hr.transition = null);
      var S = xt;
      xt = 1;
      var O = ft;
      (ft |= 4),
        (Qs.current = null),
        Fg(n, l),
        Ph(l, n),
        Qv(os),
        (Va = !!is),
        (os = is = null),
        (n.current = l),
        Cg(l),
        tv(),
        (ft = O),
        (xt = S),
        (Hr.transition = g);
    } else n.current = l;
    if (
      (Pu && ((Pu = !1), (ti = n), (Eu = p)),
      (g = n.pendingLanes),
      g === 0 && (ei = null),
      iv(l.stateNode),
      Cr(n, jt()),
      o !== null)
    )
      for (f = n.onRecoverableError, l = 0; l < o.length; l++)
        (p = o[l]), f(p.value, { componentStack: p.stack, digest: p.digest });
    if (Cu) throw ((Cu = !1), (n = $s), ($s = null), n);
    return (
      Eu & 1 && n.tag !== 0 && oo(),
      (g = n.pendingLanes),
      g & 1 ? (n === ef ? ta++ : ((ta = 0), (ef = n))) : (ta = 0),
      Qn(),
      null
    );
  }
  function oo() {
    if (ti !== null) {
      var n = Fc(Eu),
        o = Hr.transition,
        l = xt;
      try {
        if (((Hr.transition = null), (xt = 16 > n ? 16 : n), ti === null))
          var f = !1;
        else {
          if (((n = ti), (ti = null), (Eu = 0), ft & 6)) throw Error(t(331));
          var p = ft;
          for (ft |= 4, Te = n.current; Te !== null; ) {
            var g = Te,
              S = g.child;
            if (Te.flags & 16) {
              var O = g.deletions;
              if (O !== null) {
                for (var z = 0; z < O.length; z++) {
                  var Z = O[z];
                  for (Te = Z; Te !== null; ) {
                    var se = Te;
                    switch (se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(8, se, g);
                    }
                    var fe = se.child;
                    if (fe !== null) (fe.return = se), (Te = fe);
                    else
                      for (; Te !== null; ) {
                        se = Te;
                        var ae = se.sibling,
                          Fe = se.return;
                        if ((Sh(se), se === Z)) {
                          Te = null;
                          break;
                        }
                        if (ae !== null) {
                          (ae.return = Fe), (Te = ae);
                          break;
                        }
                        Te = Fe;
                      }
                  }
                }
                var De = g.alternate;
                if (De !== null) {
                  var Oe = De.child;
                  if (Oe !== null) {
                    De.child = null;
                    do {
                      var Bt = Oe.sibling;
                      (Oe.sibling = null), (Oe = Bt);
                    } while (Oe !== null);
                  }
                }
                Te = g;
              }
            }
            if (g.subtreeFlags & 2064 && S !== null) (S.return = g), (Te = S);
            else
              e: for (; Te !== null; ) {
                if (((g = Te), g.flags & 2048))
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(9, g, g.return);
                  }
                var W = g.sibling;
                if (W !== null) {
                  (W.return = g.return), (Te = W);
                  break e;
                }
                Te = g.return;
              }
          }
          var B = n.current;
          for (Te = B; Te !== null; ) {
            S = Te;
            var H = S.child;
            if (S.subtreeFlags & 2064 && H !== null) (H.return = S), (Te = H);
            else
              e: for (S = B; Te !== null; ) {
                if (((O = Te), O.flags & 2048))
                  try {
                    switch (O.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bu(9, O);
                    }
                  } catch (ze) {
                    At(O, O.return, ze);
                  }
                if (O === S) {
                  Te = null;
                  break e;
                }
                var ye = O.sibling;
                if (ye !== null) {
                  (ye.return = O.return), (Te = ye);
                  break e;
                }
                Te = O.return;
              }
          }
          if (
            ((ft = p),
            Qn(),
            gn && typeof gn.onPostCommitFiberRoot == "function")
          )
            try {
              gn.onPostCommitFiberRoot(ja, n);
            } catch {}
          f = !0;
        }
        return f;
      } finally {
        (xt = l), (Hr.transition = o);
      }
    }
    return !1;
  }
  function Ih(n, o, l) {
    (o = to(l, o)),
      (o = th(n, o, 1)),
      (n = _n(n, o, 1)),
      (o = gr()),
      n !== null && (Co(n, 1, o), Cr(n, o));
  }
  function At(n, o, l) {
    if (n.tag === 3) Ih(n, n, l);
    else
      for (; o !== null; ) {
        if (o.tag === 3) {
          Ih(o, n, l);
          break;
        } else if (o.tag === 1) {
          var f = o.stateNode;
          if (
            typeof o.type.getDerivedStateFromError == "function" ||
            (typeof f.componentDidCatch == "function" &&
              (ei === null || !ei.has(f)))
          ) {
            (n = to(l, n)),
              (n = rh(o, n, 1)),
              (o = _n(o, n, 1)),
              (n = gr()),
              o !== null && (Co(o, 1, n), Cr(o, n));
            break;
          }
        }
        o = o.return;
      }
  }
  function Og(n, o, l) {
    var f = n.pingCache;
    f !== null && f.delete(o),
      (o = gr()),
      (n.pingedLanes |= n.suspendedLanes & l),
      Yt === n &&
        (tr & l) === l &&
        (qt === 4 || (qt === 3 && (tr & 130023424) === tr && 500 > jt() - _s)
          ? Ei(n, 0)
          : (Js |= l)),
      Cr(n, o);
  }
  function Mh(n, o) {
    o === 0 &&
      (n.mode & 1
        ? ((o = Ia), (Ia <<= 1), !(Ia & 130023424) && (Ia = 4194304))
        : (o = 1));
    var l = gr();
    (n = Dn(n, o)), n !== null && (Co(n, o, l), Cr(n, l));
  }
  function Ag(n) {
    var o = n.memoizedState,
      l = 0;
    o !== null && (l = o.retryLane), Mh(n, l);
  }
  function zg(n, o) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode,
          p = n.memoizedState;
        p !== null && (l = p.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(t(314));
    }
    f !== null && f.delete(o), Mh(n, l);
  }
  var Uh;
  Uh = function (n, o, l) {
    if (n !== null)
      if (n.memoizedProps !== o.pendingProps || Sr.current) kr = !0;
      else {
        if (!(n.lanes & l) && !(o.flags & 128)) return (kr = !1), wg(n, o, l);
        kr = !!(n.flags & 131072);
      }
    else (kr = !1), Pt && o.flags & 1048576 && md(o, ou, o.index);
    switch (((o.lanes = 0), o.tag)) {
      case 2:
        var f = o.type;
        wu(n, o), (n = o.pendingProps);
        var p = Xi(o, ur.current);
        $i(o, l), (p = Rs(null, o, f, n, p, l));
        var g = Ds();
        return (
          (o.flags |= 1),
          typeof p == "object" &&
          p !== null &&
          typeof p.render == "function" &&
          p.$$typeof === void 0
            ? ((o.tag = 1),
              (o.memoizedState = null),
              (o.updateQueue = null),
              br(f) ? ((g = !0), ru(o)) : (g = !1),
              (o.memoizedState =
                p.state !== null && p.state !== void 0 ? p.state : null),
              bs(o),
              (p.updater = mu),
              (o.stateNode = p),
              (p._reactInternals = o),
              Bs(o, f, n, l),
              (o = Ls(null, o, f, !0, g, l)))
            : ((o.tag = 0), Pt && g && ds(o), vr(null, o, p, l), (o = o.child)),
          o
        );
      case 16:
        f = o.elementType;
        e: {
          switch (
            (wu(n, o),
            (n = o.pendingProps),
            (p = f._init),
            (f = p(f._payload)),
            (o.type = f),
            (p = o.tag = jg(f)),
            (n = ln(f, n)),
            p)
          ) {
            case 0:
              o = Us(null, o, f, n, l);
              break e;
            case 1:
              o = ch(null, o, f, n, l);
              break e;
            case 11:
              o = ah(null, o, f, n, l);
              break e;
            case 14:
              o = uh(null, o, f, ln(f.type, n), l);
              break e;
          }
          throw Error(t(306, f, ""));
        }
        return o;
      case 0:
        return (
          (f = o.type),
          (p = o.pendingProps),
          (p = o.elementType === f ? p : ln(f, p)),
          Us(n, o, f, p, l)
        );
      case 1:
        return (
          (f = o.type),
          (p = o.pendingProps),
          (p = o.elementType === f ? p : ln(f, p)),
          ch(n, o, f, p, l)
        );
      case 3:
        e: {
          if ((dh(o), n === null)) throw Error(t(387));
          (f = o.pendingProps),
            (g = o.memoizedState),
            (p = g.element),
            Ed(n, o),
            cu(o, f, null, l);
          var S = o.memoizedState;
          if (((f = S.element), g.isDehydrated))
            if (
              ((g = {
                element: f,
                isDehydrated: !1,
                cache: S.cache,
                pendingSuspenseBoundaries: S.pendingSuspenseBoundaries,
                transitions: S.transitions,
              }),
              (o.updateQueue.baseState = g),
              (o.memoizedState = g),
              o.flags & 256)
            ) {
              (p = to(Error(t(423)), o)), (o = hh(n, o, f, l, p));
              break e;
            } else if (f !== p) {
              (p = to(Error(t(424)), o)), (o = hh(n, o, f, l, p));
              break e;
            } else
              for (
                Ar = Xn(o.stateNode.containerInfo.firstChild),
                  Or = o,
                  Pt = !0,
                  un = null,
                  l = Cd(o, null, f, l),
                  o.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((Qi(), f === p)) {
              o = An(n, o, l);
              break e;
            }
            vr(n, o, f, l);
          }
          o = o.child;
        }
        return o;
      case 5:
        return (
          Dd(o),
          n === null && vs(o),
          (f = o.type),
          (p = o.pendingProps),
          (g = n !== null ? n.memoizedProps : null),
          (S = p.children),
          as(f, p) ? (S = null) : g !== null && as(f, g) && (o.flags |= 32),
          fh(n, o),
          vr(n, o, S, l),
          o.child
        );
      case 6:
        return n === null && vs(o), null;
      case 13:
        return ph(n, o, l);
      case 4:
        return (
          ks(o, o.stateNode.containerInfo),
          (f = o.pendingProps),
          n === null ? (o.child = Ji(o, null, f, l)) : vr(n, o, f, l),
          o.child
        );
      case 11:
        return (
          (f = o.type),
          (p = o.pendingProps),
          (p = o.elementType === f ? p : ln(f, p)),
          ah(n, o, f, p, l)
        );
      case 7:
        return vr(n, o, o.pendingProps, l), o.child;
      case 8:
        return vr(n, o, o.pendingProps.children, l), o.child;
      case 12:
        return vr(n, o, o.pendingProps.children, l), o.child;
      case 10:
        e: {
          if (
            ((f = o.type._context),
            (p = o.pendingProps),
            (g = o.memoizedProps),
            (S = p.value),
            kt(lu, f._currentValue),
            (f._currentValue = S),
            g !== null)
          )
            if (an(g.value, S)) {
              if (g.children === p.children && !Sr.current) {
                o = An(n, o, l);
                break e;
              }
            } else
              for (g = o.child, g !== null && (g.return = o); g !== null; ) {
                var O = g.dependencies;
                if (O !== null) {
                  S = g.child;
                  for (var z = O.firstContext; z !== null; ) {
                    if (z.context === f) {
                      if (g.tag === 1) {
                        (z = On(-1, l & -l)), (z.tag = 2);
                        var Z = g.updateQueue;
                        if (Z !== null) {
                          Z = Z.shared;
                          var se = Z.pending;
                          se === null
                            ? (z.next = z)
                            : ((z.next = se.next), (se.next = z)),
                            (Z.pending = z);
                        }
                      }
                      (g.lanes |= l),
                        (z = g.alternate),
                        z !== null && (z.lanes |= l),
                        ws(g.return, l, o),
                        (O.lanes |= l);
                      break;
                    }
                    z = z.next;
                  }
                } else if (g.tag === 10) S = g.type === o.type ? null : g.child;
                else if (g.tag === 18) {
                  if (((S = g.return), S === null)) throw Error(t(341));
                  (S.lanes |= l),
                    (O = S.alternate),
                    O !== null && (O.lanes |= l),
                    ws(S, l, o),
                    (S = g.sibling);
                } else S = g.child;
                if (S !== null) S.return = g;
                else
                  for (S = g; S !== null; ) {
                    if (S === o) {
                      S = null;
                      break;
                    }
                    if (((g = S.sibling), g !== null)) {
                      (g.return = S.return), (S = g);
                      break;
                    }
                    S = S.return;
                  }
                g = S;
              }
          vr(n, o, p.children, l), (o = o.child);
        }
        return o;
      case 9:
        return (
          (p = o.type),
          (f = o.pendingProps.children),
          $i(o, l),
          (p = qr(p)),
          (f = f(p)),
          (o.flags |= 1),
          vr(n, o, f, l),
          o.child
        );
      case 14:
        return (
          (f = o.type),
          (p = ln(f, o.pendingProps)),
          (p = ln(f.type, p)),
          uh(n, o, f, p, l)
        );
      case 15:
        return lh(n, o, o.type, o.pendingProps, l);
      case 17:
        return (
          (f = o.type),
          (p = o.pendingProps),
          (p = o.elementType === f ? p : ln(f, p)),
          wu(n, o),
          (o.tag = 1),
          br(f) ? ((n = !0), ru(o)) : (n = !1),
          $i(o, l),
          $d(o, f, p),
          Bs(o, f, p, l),
          Ls(null, o, f, !0, n, l)
        );
      case 19:
        return gh(n, o, l);
      case 22:
        return sh(n, o, l);
    }
    throw Error(t(156, o.tag));
  };
  function Lh(n, o) {
    return xc(n, o);
  }
  function Ng(n, o, l, f) {
    (this.tag = n),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = o),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = f),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Gr(n, o, l, f) {
    return new Ng(n, o, l, f);
  }
  function uf(n) {
    return (n = n.prototype), !(!n || !n.isReactComponent);
  }
  function jg(n) {
    if (typeof n == "function") return uf(n) ? 1 : 0;
    if (n != null) {
      if (((n = n.$$typeof), n === ce)) return 11;
      if (n === Se) return 14;
    }
    return 2;
  }
  function ii(n, o) {
    var l = n.alternate;
    return (
      l === null
        ? ((l = Gr(n.tag, o, n.key, n.mode)),
          (l.elementType = n.elementType),
          (l.type = n.type),
          (l.stateNode = n.stateNode),
          (l.alternate = n),
          (n.alternate = l))
        : ((l.pendingProps = o),
          (l.type = n.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = n.flags & 14680064),
      (l.childLanes = n.childLanes),
      (l.lanes = n.lanes),
      (l.child = n.child),
      (l.memoizedProps = n.memoizedProps),
      (l.memoizedState = n.memoizedState),
      (l.updateQueue = n.updateQueue),
      (o = n.dependencies),
      (l.dependencies =
        o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
      (l.sibling = n.sibling),
      (l.index = n.index),
      (l.ref = n.ref),
      l
    );
  }
  function Ou(n, o, l, f, p, g) {
    var S = 2;
    if (((f = n), typeof n == "function")) uf(n) && (S = 1);
    else if (typeof n == "string") S = 5;
    else
      e: switch (n) {
        case U:
          return Ri(l.children, p, g, o);
        case _:
          (S = 8), (p |= 8);
          break;
        case te:
          return (
            (n = Gr(12, l, o, p | 2)), (n.elementType = te), (n.lanes = g), n
          );
        case Y:
          return (n = Gr(13, l, o, p)), (n.elementType = Y), (n.lanes = g), n;
        case xe:
          return (n = Gr(19, l, o, p)), (n.elementType = xe), (n.lanes = g), n;
        case le:
          return Au(l, p, g, o);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case ee:
                S = 10;
                break e;
              case ie:
                S = 9;
                break e;
              case ce:
                S = 11;
                break e;
              case Se:
                S = 14;
                break e;
              case de:
                (S = 16), (f = null);
                break e;
            }
          throw Error(t(130, n == null ? n : typeof n, ""));
      }
    return (
      (o = Gr(S, l, o, p)), (o.elementType = n), (o.type = f), (o.lanes = g), o
    );
  }
  function Ri(n, o, l, f) {
    return (n = Gr(7, n, f, o)), (n.lanes = l), n;
  }
  function Au(n, o, l, f) {
    return (
      (n = Gr(22, n, f, o)),
      (n.elementType = le),
      (n.lanes = l),
      (n.stateNode = { isHidden: !1 }),
      n
    );
  }
  function lf(n, o, l) {
    return (n = Gr(6, n, null, o)), (n.lanes = l), n;
  }
  function sf(n, o, l) {
    return (
      (o = Gr(4, n.children !== null ? n.children : [], n.key, o)),
      (o.lanes = l),
      (o.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      o
    );
  }
  function Bg(n, o, l, f, p) {
    (this.tag = o),
      (this.containerInfo = n),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = jl(0)),
      (this.expirationTimes = jl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = jl(0)),
      (this.identifierPrefix = f),
      (this.onRecoverableError = p),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ff(n, o, l, f, p, g, S, O, z) {
    return (
      (n = new Bg(n, o, l, O, z)),
      o === 1 ? ((o = 1), g === !0 && (o |= 8)) : (o = 0),
      (g = Gr(3, null, null, o)),
      (n.current = g),
      (g.stateNode = n),
      (g.memoizedState = {
        element: f,
        isDehydrated: l,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      bs(g),
      n
    );
  }
  function Ig(n, o, l) {
    var f =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: M,
      key: f == null ? null : "" + f,
      children: n,
      containerInfo: o,
      implementation: l,
    };
  }
  function Vh(n) {
    if (!n) return Yn;
    n = n._reactInternals;
    e: {
      if ($t(n) !== n || n.tag !== 1) throw Error(t(170));
      var o = n;
      do {
        switch (o.tag) {
          case 3:
            o = o.stateNode.context;
            break e;
          case 1:
            if (br(o.type)) {
              o = o.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        o = o.return;
      } while (o !== null);
      throw Error(t(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (br(l)) return vd(n, l, o);
    }
    return o;
  }
  function Wh(n, o, l, f, p, g, S, O, z) {
    return (
      (n = ff(l, f, !0, n, p, g, S, O, z)),
      (n.context = Vh(null)),
      (l = n.current),
      (f = gr()),
      (p = ri(l)),
      (g = On(f, p)),
      (g.callback = o ?? null),
      _n(l, g, p),
      (n.current.lanes = p),
      Co(n, p, f),
      Cr(n, f),
      n
    );
  }
  function zu(n, o, l, f) {
    var p = o.current,
      g = gr(),
      S = ri(p);
    return (
      (l = Vh(l)),
      o.context === null ? (o.context = l) : (o.pendingContext = l),
      (o = On(g, S)),
      (o.payload = { element: n }),
      (f = f === void 0 ? null : f),
      f !== null && (o.callback = f),
      (n = _n(p, o, S)),
      n !== null && (cn(n, p, S, g), fu(n, p, S)),
      S
    );
  }
  function Nu(n) {
    if (((n = n.current), !n.child)) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function qh(n, o) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < o ? l : o;
    }
  }
  function cf(n, o) {
    qh(n, o), (n = n.alternate) && qh(n, o);
  }
  var Kh =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          console.error(n);
        };
  function df(n) {
    this._internalRoot = n;
  }
  (ju.prototype.render = df.prototype.render =
    function (n) {
      var o = this._internalRoot;
      if (o === null) throw Error(t(409));
      zu(n, o, null, null);
    }),
    (ju.prototype.unmount = df.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var o = n.containerInfo;
          Pi(function () {
            zu(null, n, null, null);
          }),
            (o[Pn] = null);
        }
      });
  function ju(n) {
    this._internalRoot = n;
  }
  ju.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var o = Ec();
      n = { blockedOn: null, target: n, priority: o };
      for (var l = 0; l < Kn.length && o !== 0 && o < Kn[l].priority; l++);
      Kn.splice(l, 0, n), l === 0 && Dc(n);
    }
  };
  function hf(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function Bu(n) {
    return !(
      !n ||
      (n.nodeType !== 1 &&
        n.nodeType !== 9 &&
        n.nodeType !== 11 &&
        (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Hh() {}
  function Mg(n, o, l, f, p) {
    if (p) {
      if (typeof f == "function") {
        var g = f;
        f = function () {
          var Z = Nu(S);
          g.call(Z);
        };
      }
      var S = Wh(o, f, n, 0, null, !1, !1, "", Hh);
      return (
        (n._reactRootContainer = S),
        (n[Pn] = S.current),
        Uo(n.nodeType === 8 ? n.parentNode : n),
        Pi(),
        S
      );
    }
    for (; (p = n.lastChild); ) n.removeChild(p);
    if (typeof f == "function") {
      var O = f;
      f = function () {
        var Z = Nu(z);
        O.call(Z);
      };
    }
    var z = ff(n, 0, !1, null, null, !1, !1, "", Hh);
    return (
      (n._reactRootContainer = z),
      (n[Pn] = z.current),
      Uo(n.nodeType === 8 ? n.parentNode : n),
      Pi(function () {
        zu(o, z, l, f);
      }),
      z
    );
  }
  function Iu(n, o, l, f, p) {
    var g = l._reactRootContainer;
    if (g) {
      var S = g;
      if (typeof p == "function") {
        var O = p;
        p = function () {
          var z = Nu(S);
          O.call(z);
        };
      }
      zu(o, S, n, p);
    } else S = Mg(l, o, n, p, f);
    return Nu(S);
  }
  (Cc = function (n) {
    switch (n.tag) {
      case 3:
        var o = n.stateNode;
        if (o.current.memoizedState.isDehydrated) {
          var l = Fo(o.pendingLanes);
          l !== 0 &&
            (Bl(o, l | 1), Cr(o, jt()), !(ft & 6) && ((io = jt() + 500), Qn()));
        }
        break;
      case 13:
        Pi(function () {
          var f = Dn(n, 1);
          if (f !== null) {
            var p = gr();
            cn(f, n, 1, p);
          }
        }),
          cf(n, 1);
    }
  }),
    (Il = function (n) {
      if (n.tag === 13) {
        var o = Dn(n, 134217728);
        if (o !== null) {
          var l = gr();
          cn(o, n, 134217728, l);
        }
        cf(n, 134217728);
      }
    }),
    (Pc = function (n) {
      if (n.tag === 13) {
        var o = ri(n),
          l = Dn(n, o);
        if (l !== null) {
          var f = gr();
          cn(l, n, o, f);
        }
        cf(n, o);
      }
    }),
    (Ec = function () {
      return xt;
    }),
    (Tc = function (n, o) {
      var l = xt;
      try {
        return (xt = n), o();
      } finally {
        xt = l;
      }
    }),
    (v = function (n, o, l) {
      switch (o) {
        case "input":
          if ((St(n, l), (o = l.name), l.type === "radio" && o != null)) {
            for (l = n; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                "input[name=" + JSON.stringify("" + o) + '][type="radio"]'
              ),
                o = 0;
              o < l.length;
              o++
            ) {
              var f = l[o];
              if (f !== n && f.form === n.form) {
                var p = eu(f);
                if (!p) throw Error(t(90));
                ht(f), St(f, p);
              }
            }
          }
          break;
        case "textarea":
          nn(n, l);
          break;
        case "select":
          (o = l.value), o != null && hr(n, !!l.multiple, o, !1);
      }
    }),
    (Ae = nf),
    (be = Pi);
  var Ug = { usingClientEntryPoint: !1, Events: [Wo, Hi, eu, A, G, nf] },
    ra = {
      findFiberByHostInstance: mi,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Lg = {
      bundleType: ra.bundleType,
      version: ra.version,
      rendererPackageName: ra.rendererPackageName,
      rendererConfig: ra.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: q.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (n) {
        return (n = yc(n)), n === null ? null : n.stateNode;
      },
      findFiberByHostInstance: ra.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mu.isDisabled && Mu.supportsFiber)
      try {
        (ja = Mu.inject(Lg)), (gn = Mu);
      } catch {}
  }
  return (
    (Pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ug),
    (Pr.createPortal = function (n, o) {
      var l =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!hf(o)) throw Error(t(200));
      return Ig(n, o, null, l);
    }),
    (Pr.createRoot = function (n, o) {
      if (!hf(n)) throw Error(t(299));
      var l = !1,
        f = "",
        p = Kh;
      return (
        o != null &&
          (o.unstable_strictMode === !0 && (l = !0),
          o.identifierPrefix !== void 0 && (f = o.identifierPrefix),
          o.onRecoverableError !== void 0 && (p = o.onRecoverableError)),
        (o = ff(n, 1, !1, null, null, l, !1, f, p)),
        (n[Pn] = o.current),
        Uo(n.nodeType === 8 ? n.parentNode : n),
        new df(o)
      );
    }),
    (Pr.findDOMNode = function (n) {
      if (n == null) return null;
      if (n.nodeType === 1) return n;
      var o = n._reactInternals;
      if (o === void 0)
        throw typeof n.render == "function"
          ? Error(t(188))
          : ((n = Object.keys(n).join(",")), Error(t(268, n)));
      return (n = yc(o)), (n = n === null ? null : n.stateNode), n;
    }),
    (Pr.flushSync = function (n) {
      return Pi(n);
    }),
    (Pr.hydrate = function (n, o, l) {
      if (!Bu(o)) throw Error(t(200));
      return Iu(null, n, o, !0, l);
    }),
    (Pr.hydrateRoot = function (n, o, l) {
      if (!hf(n)) throw Error(t(405));
      var f = (l != null && l.hydratedSources) || null,
        p = !1,
        g = "",
        S = Kh;
      if (
        (l != null &&
          (l.unstable_strictMode === !0 && (p = !0),
          l.identifierPrefix !== void 0 && (g = l.identifierPrefix),
          l.onRecoverableError !== void 0 && (S = l.onRecoverableError)),
        (o = Wh(o, null, n, 1, l ?? null, p, !1, g, S)),
        (n[Pn] = o.current),
        Uo(n),
        f)
      )
        for (n = 0; n < f.length; n++)
          (l = f[n]),
            (p = l._getVersion),
            (p = p(l._source)),
            o.mutableSourceEagerHydrationData == null
              ? (o.mutableSourceEagerHydrationData = [l, p])
              : o.mutableSourceEagerHydrationData.push(l, p);
      return new ju(o);
    }),
    (Pr.render = function (n, o, l) {
      if (!Bu(o)) throw Error(t(200));
      return Iu(null, n, o, !1, l);
    }),
    (Pr.unmountComponentAtNode = function (n) {
      if (!Bu(n)) throw Error(t(40));
      return n._reactRootContainer
        ? (Pi(function () {
            Iu(null, null, n, !1, function () {
              (n._reactRootContainer = null), (n[Pn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Pr.unstable_batchedUpdates = nf),
    (Pr.unstable_renderSubtreeIntoContainer = function (n, o, l, f) {
      if (!Bu(l)) throw Error(t(200));
      if (n == null || n._reactInternals === void 0) throw Error(t(38));
      return Iu(n, o, l, !1, f);
    }),
    (Pr.version = "18.3.1-next-f1338f8080-20240426"),
    Pr
  );
}
var $h;
function Yg() {
  if ($h) return gf.exports;
  $h = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (e) {
        console.error(e);
      }
  }
  return r(), (gf.exports = Zg()), gf.exports;
}
var e0;
function Qg() {
  if (e0) return Uu;
  e0 = 1;
  var r = Yg();
  return (Uu.createRoot = r.createRoot), (Uu.hydrateRoot = r.hydrateRoot), Uu;
}
var Jg = Qg();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Nf =
  function (r, e) {
    return (
      (Nf =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, i) {
            t.__proto__ = i;
          }) ||
        function (t, i) {
          for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
        }),
      Nf(r, e)
    );
  };
function ve(r, e) {
  Nf(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var Ze = function () {
  return (
    (Ze =
      Object.assign ||
      function (e) {
        for (var t, i = 1, a = arguments.length; i < a; i++) {
          t = arguments[i];
          for (var u in t)
            Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
        }
        return e;
      }),
    Ze.apply(this, arguments)
  );
};
function _g(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      e.indexOf(i) < 0 &&
      (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, i = Object.getOwnPropertySymbols(r); a < i.length; a++)
      e.indexOf(i[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[a]) &&
        (t[i[a]] = r[i[a]]);
  return t;
}
function _e(r, e, t, i) {
  function a(u) {
    return u instanceof t
      ? u
      : new t(function (s) {
          s(u);
        });
  }
  return new (t || (t = Promise))(function (u, s) {
    function c(y) {
      try {
        h(i.next(y));
      } catch (m) {
        s(m);
      }
    }
    function d(y) {
      try {
        h(i.throw(y));
      } catch (m) {
        s(m);
      }
    }
    function h(y) {
      y.done ? u(y.value) : a(y.value).then(c, d);
    }
    h((i = i.apply(r, [])).next());
  });
}
function $e(r, e) {
  var t = {
      label: 0,
      sent: function () {
        if (u[0] & 1) throw u[1];
        return u[1];
      },
      trys: [],
      ops: [],
    },
    i,
    a,
    u,
    s;
  return (
    (s = { next: c(0), throw: c(1), return: c(2) }),
    typeof Symbol == "function" &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function c(h) {
    return function (y) {
      return d([h, y]);
    };
  }
  function d(h) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((i = 1),
          a &&
            (u =
              h[0] & 2
                ? a.return
                : h[0]
                ? a.throw || ((u = a.return) && u.call(a), 0)
                : a.next) &&
            !(u = u.call(a, h[1])).done)
        )
          return u;
        switch (((a = 0), u && (h = [h[0] & 2, u.value]), h[0])) {
          case 0:
          case 1:
            u = h;
            break;
          case 4:
            return t.label++, { value: h[1], done: !1 };
          case 5:
            t.label++, (a = h[1]), (h = [0]);
            continue;
          case 7:
            (h = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((u = t.trys),
              !(u = u.length > 0 && u[u.length - 1]) &&
                (h[0] === 6 || h[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (h[0] === 3 && (!u || (h[1] > u[0] && h[1] < u[3]))) {
              t.label = h[1];
              break;
            }
            if (h[0] === 6 && t.label < u[1]) {
              (t.label = u[1]), (u = h);
              break;
            }
            if (u && t.label < u[2]) {
              (t.label = u[2]), t.ops.push(h);
              break;
            }
            u[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        h = e.call(r, t);
      } catch (y) {
        (h = [6, y]), (a = 0);
      } finally {
        i = u = 0;
      }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function lt() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), a = 0, e = 0; e < t; e++)
    for (var u = arguments[e], s = 0, c = u.length; s < c; s++, a++)
      i[a] = u[s];
  return i;
}
var ho = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  ca = new Uint8Array(256);
for (var Lu = 0; Lu < ho.length; Lu++) ca[ho.charCodeAt(Lu)] = Lu;
var $g = function (r) {
    for (var e = "", t = r.length, i = 0; i < t; i += 3)
      (e += ho[r[i] >> 2]),
        (e += ho[((r[i] & 3) << 4) | (r[i + 1] >> 4)]),
        (e += ho[((r[i + 1] & 15) << 2) | (r[i + 2] >> 6)]),
        (e += ho[r[i + 2] & 63]);
    return (
      t % 3 === 2
        ? (e = e.substring(0, e.length - 1) + "=")
        : t % 3 === 1 && (e = e.substring(0, e.length - 2) + "=="),
      e
    );
  },
  t0 = function (r) {
    var e = r.length * 0.75,
      t = r.length,
      i,
      a = 0,
      u,
      s,
      c,
      d;
    r[r.length - 1] === "=" && (e--, r[r.length - 2] === "=" && e--);
    var h = new Uint8Array(e);
    for (i = 0; i < t; i += 4)
      (u = ca[r.charCodeAt(i)]),
        (s = ca[r.charCodeAt(i + 1)]),
        (c = ca[r.charCodeAt(i + 2)]),
        (d = ca[r.charCodeAt(i + 3)]),
        (h[a++] = (u << 2) | (s >> 4)),
        (h[a++] = ((s & 15) << 4) | (c >> 2)),
        (h[a++] = ((c & 3) << 6) | (d & 63));
    return h;
  },
  ey = /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i,
  ty = function (r) {
    var e = r.trim(),
      t = e.substring(0, 100),
      i = t.match(ey);
    if (!i) return t0(e);
    var a = i[0],
      u = e.substring(a.length);
    return t0(u);
  },
  Ge = function (r) {
    return r.charCodeAt(0);
  },
  ry = function (r) {
    return r.codePointAt(0);
  },
  Ea = function (r, e) {
    return vn(r.toString(16), e, "0").toUpperCase();
  },
  gl = function (r) {
    return Ea(r, 2);
  },
  jn = function (r) {
    return String.fromCharCode(r);
  },
  ny = function (r) {
    return jn(parseInt(r, 16));
  },
  vn = function (r, e, t) {
    for (var i = "", a = 0, u = e - r.length; a < u; a++) i += t;
    return i + r;
  },
  rr = function (r, e, t) {
    for (var i = r.length, a = 0; a < i; a++) e[t++] = r.charCodeAt(a);
    return i;
  },
  iy = function (r) {
    return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  },
  Ta = function (r) {
    return r.replace(/\t|\u0085|\u2028|\u2029/g, "    ").replace(/[\b\v]/g, "");
  },
  oy = ["\\n", "\\f", "\\r", "\\u000B"],
  X0 = function (r) {
    return /^[\n\f\r\u000B]$/.test(r);
  },
  Z0 = function (r) {
    return r.split(/[\n\f\r\u000B]/);
  },
  Y0 = function (r) {
    return r.replace(/[\n\f\r\u000B]/g, " ");
  },
  Q0 = function (r, e) {
    var t = r.charCodeAt(e),
      i,
      a = e + 1,
      u = 1;
    return (
      t >= 55296 &&
        t <= 56319 &&
        r.length > a &&
        ((i = r.charCodeAt(a)), i >= 56320 && i <= 57343 && (u = 2)),
      [r.slice(e, e + u), u]
    );
  },
  ay = function (r) {
    for (var e = [], t = 0, i = r.length; t < i; ) {
      var a = Q0(r, t),
        u = a[0],
        s = a[1];
      e.push(u), (t += s);
    }
    return e;
  },
  uy = function (r) {
    for (var e = oy.join("|"), t = ["$"], i = 0, a = r.length; i < a; i++) {
      var u = r[i];
      if (X0(u)) throw new TypeError("`wordBreak` must not include " + e);
      t.push(u === "" ? "." : iy(u));
    }
    var s = t.join("|");
    return new RegExp("(" + e + ")|((.*?)(" + s + "))", "gm");
  },
  ly = function (r, e, t, i) {
    for (
      var a = uy(e),
        u = Ta(r).match(a),
        s = "",
        c = 0,
        d = [],
        h = function () {
          s !== "" && d.push(s), (s = ""), (c = 0);
        },
        y = 0,
        m = u.length;
      y < m;
      y++
    ) {
      var x = u[y];
      if (X0(x)) h();
      else {
        var w = i(x);
        c + w > t && h(), (s += x), (c += w);
      }
    }
    return h(), d;
  },
  sy =
    /^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/,
  J0 = function (r) {
    var e = r.match(sy);
    if (e) {
      var t = e[1],
        i = e[2],
        a = i === void 0 ? "01" : i,
        u = e[3],
        s = u === void 0 ? "01" : u,
        c = e[4],
        d = c === void 0 ? "00" : c,
        h = e[5],
        y = h === void 0 ? "00" : h,
        m = e[6],
        x = m === void 0 ? "00" : m,
        w = e[7],
        F = w === void 0 ? "Z" : w,
        E = e[8],
        R = E === void 0 ? "00" : E,
        D = e[9],
        L = D === void 0 ? "00" : D,
        N = F === "Z" ? "Z" : "" + F + R + ":" + L,
        q = new Date(t + "-" + a + "-" + s + "T" + d + ":" + y + ":" + x + N);
      return q;
    }
  },
  Zf = function (r, e) {
    for (var t, i = 0, a; i < r.length; ) {
      var u = r.substring(i).match(e);
      if (!u) return { match: a, pos: i };
      (a = u),
        (i += ((t = u.index) !== null && t !== void 0 ? t : 0) + u[0].length);
    }
    return { match: a, pos: i };
  },
  nl = function (r) {
    return r[r.length - 1];
  },
  jf = function (r) {
    if (r instanceof Uint8Array) return r;
    for (var e = r.length, t = new Uint8Array(e), i = 0; i < e; i++)
      t[i] = r.charCodeAt(i);
    return t;
  },
  fy = function () {
    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
    for (var t = r.length, i = [], a = 0; a < t; a++) {
      var u = r[a];
      i[a] = u instanceof Uint8Array ? u : jf(u);
    }
    for (var s = 0, a = 0; a < t; a++) s += r[a].length;
    for (var c = new Uint8Array(s), d = 0, h = 0; h < t; h++)
      for (var y = i[h], m = 0, x = y.length; m < x; m++) c[d++] = y[m];
    return c;
  },
  cy = function (r) {
    for (var e = 0, t = 0, i = r.length; t < i; t++) e += r[t].length;
    for (var a = new Uint8Array(e), u = 0, t = 0, i = r.length; t < i; t++) {
      var s = r[t];
      a.set(s, u), (u += s.length);
    }
    return a;
  },
  _0 = function (r) {
    for (var e = "", t = 0, i = r.length; t < i; t++) e += jn(r[t]);
    return e;
  },
  dy = function (r, e) {
    return r.id - e.id;
  },
  hy = function (r, e) {
    for (var t = [], i = 0, a = r.length; i < a; i++) {
      var u = r[i],
        s = r[i - 1];
      (i === 0 || e(u) !== e(s)) && t.push(u);
    }
    return t;
  },
  ao = function (r) {
    for (var e = r.length, t = 0, i = Math.floor(e / 2); t < i; t++) {
      var a = t,
        u = e - t - 1,
        s = r[t];
      (r[a] = r[u]), (r[u] = s);
    }
    return r;
  },
  py = function (r) {
    for (var e = 0, t = 0, i = r.length; t < i; t++) e += r[t];
    return e;
  },
  vy = function (r, e) {
    for (var t = new Array(e - r), i = 0, a = t.length; i < a; i++)
      t[i] = r + i;
    return t;
  },
  gy = function (r, e) {
    for (var t = new Array(e.length), i = 0, a = e.length; i < a; i++)
      t[i] = r[e[i]];
    return t;
  },
  yy = function (r) {
    return (
      r instanceof Uint8Array ||
      r instanceof ArrayBuffer ||
      typeof r == "string"
    );
  },
  ia = function (r) {
    if (typeof r == "string") return ty(r);
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (r instanceof Uint8Array) return r;
    throw new TypeError(
      "`input` must be one of `string | ArrayBuffer | Uint8Array`"
    );
  },
  yo = function () {
    return new Promise(function (r) {
      setTimeout(function () {
        return r();
      }, 0);
    });
  },
  my = function (r, e) {
    e === void 0 && (e = !0);
    var t = [];
    e && t.push(65279);
    for (var i = 0, a = r.length; i < a; ) {
      var u = r.codePointAt(i);
      if (u < 65536) t.push(u), (i += 1);
      else if (u < 1114112) t.push($0(u), ep(u)), (i += 2);
      else throw new Error("Invalid code point: 0x" + gl(u));
    }
    return new Uint16Array(t);
  },
  xy = function (r) {
    return r >= 0 && r <= 65535;
  },
  wy = function (r) {
    return r >= 65536 && r <= 1114111;
  },
  $0 = function (r) {
    return Math.floor((r - 65536) / 1024) + 55296;
  },
  ep = function (r) {
    return ((r - 65536) % 1024) + 56320;
  },
  si;
(function (r) {
  (r.BigEndian = "BigEndian"), (r.LittleEndian = "LittleEndian");
})(si || (si = {}));
var oa = "�".codePointAt(0),
  tp = function (r, e) {
    if ((e === void 0 && (e = !0), r.length <= 1))
      return String.fromCodePoint(oa);
    for (
      var t = e ? by(r) : si.BigEndian, i = e ? 2 : 0, a = [];
      r.length - i >= 2;

    ) {
      var u = n0(r[i++], r[i++], t);
      if (Sy(u))
        if (r.length - i < 2) a.push(oa);
        else {
          var s = n0(r[i++], r[i++], t);
          r0(s) ? a.push(u, s) : a.push(oa);
        }
      else r0(u) ? ((i += 2), a.push(oa)) : a.push(u);
    }
    return i < r.length && a.push(oa), String.fromCodePoint.apply(String, a);
  },
  Sy = function (r) {
    return r >= 55296 && r <= 56319;
  },
  r0 = function (r) {
    return r >= 56320 && r <= 57343;
  },
  n0 = function (r, e, t) {
    if (t === si.LittleEndian) return (e << 8) | r;
    if (t === si.BigEndian) return (r << 8) | e;
    throw new Error("Invalid byteOrder: " + t);
  },
  by = function (r) {
    return rp(r) ? si.BigEndian : np(r) ? si.LittleEndian : si.BigEndian;
  },
  rp = function (r) {
    return r[0] === 254 && r[1] === 255;
  },
  np = function (r) {
    return r[0] === 255 && r[1] === 254;
  },
  ip = function (r) {
    return rp(r) || np(r);
  },
  ky = function (r) {
    var e = String(r);
    if (Math.abs(r) < 1) {
      var t = parseInt(r.toString().split("e-")[1]);
      if (t) {
        var i = r < 0;
        i && (r *= -1),
          (r *= Math.pow(10, t - 1)),
          (e = "0." + new Array(t).join("0") + r.toString().substring(2)),
          i && (e = "-" + e);
      }
    } else {
      var t = parseInt(r.toString().split("+")[1]);
      t > 20 &&
        ((t -= 20),
        (r /= Math.pow(10, t)),
        (e = r.toString() + new Array(t + 1).join("0")));
    }
    return e;
  },
  Ju = function (r) {
    return Math.ceil(r.toString(2).length / 8);
  },
  uo = function (r) {
    for (var e = new Uint8Array(Ju(r)), t = 1; t <= e.length; t++)
      e[t - 1] = r >> ((e.length - t) * 8);
    return e;
  },
  Ra = function (r) {
    throw new Error(r);
  },
  xf = {},
  i0;
function vi() {
  return (
    i0 ||
      ((i0 = 1),
      (function (r) {
        var e =
          typeof Uint8Array < "u" &&
          typeof Uint16Array < "u" &&
          typeof Int32Array < "u";
        function t(u, s) {
          return Object.prototype.hasOwnProperty.call(u, s);
        }
        (r.assign = function (u) {
          for (var s = Array.prototype.slice.call(arguments, 1); s.length; ) {
            var c = s.shift();
            if (c) {
              if (typeof c != "object")
                throw new TypeError(c + "must be non-object");
              for (var d in c) t(c, d) && (u[d] = c[d]);
            }
          }
          return u;
        }),
          (r.shrinkBuf = function (u, s) {
            return u.length === s
              ? u
              : u.subarray
              ? u.subarray(0, s)
              : ((u.length = s), u);
          });
        var i = {
            arraySet: function (u, s, c, d, h) {
              if (s.subarray && u.subarray) {
                u.set(s.subarray(c, c + d), h);
                return;
              }
              for (var y = 0; y < d; y++) u[h + y] = s[c + y];
            },
            flattenChunks: function (u) {
              var s, c, d, h, y, m;
              for (d = 0, s = 0, c = u.length; s < c; s++) d += u[s].length;
              for (
                m = new Uint8Array(d), h = 0, s = 0, c = u.length;
                s < c;
                s++
              )
                (y = u[s]), m.set(y, h), (h += y.length);
              return m;
            },
          },
          a = {
            arraySet: function (u, s, c, d, h) {
              for (var y = 0; y < d; y++) u[h + y] = s[c + y];
            },
            flattenChunks: function (u) {
              return [].concat.apply([], u);
            },
          };
        (r.setTyped = function (u) {
          u
            ? ((r.Buf8 = Uint8Array),
              (r.Buf16 = Uint16Array),
              (r.Buf32 = Int32Array),
              r.assign(r, i))
            : ((r.Buf8 = Array),
              (r.Buf16 = Array),
              (r.Buf32 = Array),
              r.assign(r, a));
        }),
          r.setTyped(e);
      })(xf)),
    xf
  );
}
var lo = {},
  dn = {},
  Di = {},
  o0;
function Fy() {
  if (o0) return Di;
  o0 = 1;
  var r = vi(),
    e = 4,
    t = 0,
    i = 1,
    a = 2;
  function u(C) {
    for (var oe = C.length; --oe >= 0; ) C[oe] = 0;
  }
  var s = 0,
    c = 1,
    d = 2,
    h = 3,
    y = 258,
    m = 29,
    x = 256,
    w = x + 1 + m,
    F = 30,
    E = 19,
    R = 2 * w + 1,
    D = 15,
    L = 16,
    N = 7,
    q = 256,
    K = 16,
    M = 17,
    U = 18,
    _ = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0,
    ],
    te = [
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13,
    ],
    ee = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    ie = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    ce = 512,
    Y = new Array((w + 2) * 2);
  u(Y);
  var xe = new Array(F * 2);
  u(xe);
  var Se = new Array(ce);
  u(Se);
  var de = new Array(y - h + 1);
  u(de);
  var le = new Array(m);
  u(le);
  var re = new Array(F);
  u(re);
  function ge(C, oe, he, Ce, I) {
    (this.static_tree = C),
      (this.extra_bits = oe),
      (this.extra_base = he),
      (this.elems = Ce),
      (this.max_length = I),
      (this.has_stree = C && C.length);
  }
  var me, j, J;
  function Pe(C, oe) {
    (this.dyn_tree = C), (this.max_code = 0), (this.stat_desc = oe);
  }
  function Re(C) {
    return C < 256 ? Se[C] : Se[256 + (C >>> 7)];
  }
  function Be(C, oe) {
    (C.pending_buf[C.pending++] = oe & 255),
      (C.pending_buf[C.pending++] = (oe >>> 8) & 255);
  }
  function Ee(C, oe, he) {
    C.bi_valid > L - he
      ? ((C.bi_buf |= (oe << C.bi_valid) & 65535),
        Be(C, C.bi_buf),
        (C.bi_buf = oe >> (L - C.bi_valid)),
        (C.bi_valid += he - L))
      : ((C.bi_buf |= (oe << C.bi_valid) & 65535), (C.bi_valid += he));
  }
  function Ie(C, oe, he) {
    Ee(C, he[oe * 2], he[oe * 2 + 1]);
  }
  function we(C, oe) {
    var he = 0;
    do (he |= C & 1), (C >>>= 1), (he <<= 1);
    while (--oe > 0);
    return he >>> 1;
  }
  function Je(C) {
    C.bi_valid === 16
      ? (Be(C, C.bi_buf), (C.bi_buf = 0), (C.bi_valid = 0))
      : C.bi_valid >= 8 &&
        ((C.pending_buf[C.pending++] = C.bi_buf & 255),
        (C.bi_buf >>= 8),
        (C.bi_valid -= 8));
  }
  function mt(C, oe) {
    var he = oe.dyn_tree,
      Ce = oe.max_code,
      I = oe.stat_desc.static_tree,
      $ = oe.stat_desc.has_stree,
      b = oe.stat_desc.extra_bits,
      ne = oe.stat_desc.extra_base,
      Me = oe.stat_desc.max_length,
      v,
      X,
      Q,
      k,
      A,
      G,
      Ae = 0;
    for (k = 0; k <= D; k++) C.bl_count[k] = 0;
    for (he[C.heap[C.heap_max] * 2 + 1] = 0, v = C.heap_max + 1; v < R; v++)
      (X = C.heap[v]),
        (k = he[he[X * 2 + 1] * 2 + 1] + 1),
        k > Me && ((k = Me), Ae++),
        (he[X * 2 + 1] = k),
        !(X > Ce) &&
          (C.bl_count[k]++,
          (A = 0),
          X >= ne && (A = b[X - ne]),
          (G = he[X * 2]),
          (C.opt_len += G * (k + A)),
          $ && (C.static_len += G * (I[X * 2 + 1] + A)));
    if (Ae !== 0) {
      do {
        for (k = Me - 1; C.bl_count[k] === 0; ) k--;
        C.bl_count[k]--, (C.bl_count[k + 1] += 2), C.bl_count[Me]--, (Ae -= 2);
      } while (Ae > 0);
      for (k = Me; k !== 0; k--)
        for (X = C.bl_count[k]; X !== 0; )
          (Q = C.heap[--v]),
            !(Q > Ce) &&
              (he[Q * 2 + 1] !== k &&
                ((C.opt_len += (k - he[Q * 2 + 1]) * he[Q * 2]),
                (he[Q * 2 + 1] = k)),
              X--);
    }
  }
  function _t(C, oe, he) {
    var Ce = new Array(D + 1),
      I = 0,
      $,
      b;
    for ($ = 1; $ <= D; $++) Ce[$] = I = (I + he[$ - 1]) << 1;
    for (b = 0; b <= oe; b++) {
      var ne = C[b * 2 + 1];
      ne !== 0 && (C[b * 2] = we(Ce[ne]++, ne));
    }
  }
  function ht() {
    var C,
      oe,
      he,
      Ce,
      I,
      $ = new Array(D + 1);
    for (he = 0, Ce = 0; Ce < m - 1; Ce++)
      for (le[Ce] = he, C = 0; C < 1 << _[Ce]; C++) de[he++] = Ce;
    for (de[he - 1] = Ce, I = 0, Ce = 0; Ce < 16; Ce++)
      for (re[Ce] = I, C = 0; C < 1 << te[Ce]; C++) Se[I++] = Ce;
    for (I >>= 7; Ce < F; Ce++)
      for (re[Ce] = I << 7, C = 0; C < 1 << (te[Ce] - 7); C++)
        Se[256 + I++] = Ce;
    for (oe = 0; oe <= D; oe++) $[oe] = 0;
    for (C = 0; C <= 143; ) (Y[C * 2 + 1] = 8), C++, $[8]++;
    for (; C <= 255; ) (Y[C * 2 + 1] = 9), C++, $[9]++;
    for (; C <= 279; ) (Y[C * 2 + 1] = 7), C++, $[7]++;
    for (; C <= 287; ) (Y[C * 2 + 1] = 8), C++, $[8]++;
    for (_t(Y, w + 1, $), C = 0; C < F; C++)
      (xe[C * 2 + 1] = 5), (xe[C * 2] = we(C, 5));
    (me = new ge(Y, _, x + 1, w, D)),
      (j = new ge(xe, te, 0, F, D)),
      (J = new ge(new Array(0), ee, 0, E, N));
  }
  function Ut(C) {
    var oe;
    for (oe = 0; oe < w; oe++) C.dyn_ltree[oe * 2] = 0;
    for (oe = 0; oe < F; oe++) C.dyn_dtree[oe * 2] = 0;
    for (oe = 0; oe < E; oe++) C.bl_tree[oe * 2] = 0;
    (C.dyn_ltree[q * 2] = 1),
      (C.opt_len = C.static_len = 0),
      (C.last_lit = C.matches = 0);
  }
  function rn(C) {
    C.bi_valid > 8
      ? Be(C, C.bi_buf)
      : C.bi_valid > 0 && (C.pending_buf[C.pending++] = C.bi_buf),
      (C.bi_buf = 0),
      (C.bi_valid = 0);
  }
  function dr(C, oe, he, Ce) {
    rn(C),
      Be(C, he),
      Be(C, ~he),
      r.arraySet(C.pending_buf, C.window, oe, he, C.pending),
      (C.pending += he);
  }
  function ir(C, oe, he, Ce) {
    var I = oe * 2,
      $ = he * 2;
    return C[I] < C[$] || (C[I] === C[$] && Ce[oe] <= Ce[he]);
  }
  function St(C, oe, he) {
    for (
      var Ce = C.heap[he], I = he << 1;
      I <= C.heap_len &&
      (I < C.heap_len && ir(oe, C.heap[I + 1], C.heap[I], C.depth) && I++,
      !ir(oe, Ce, C.heap[I], C.depth));

    )
      (C.heap[he] = C.heap[I]), (he = I), (I <<= 1);
    C.heap[he] = Ce;
  }
  function tt(C, oe, he) {
    var Ce,
      I,
      $ = 0,
      b,
      ne;
    if (C.last_lit !== 0)
      do
        (Ce =
          (C.pending_buf[C.d_buf + $ * 2] << 8) |
          C.pending_buf[C.d_buf + $ * 2 + 1]),
          (I = C.pending_buf[C.l_buf + $]),
          $++,
          Ce === 0
            ? Ie(C, I, oe)
            : ((b = de[I]),
              Ie(C, b + x + 1, oe),
              (ne = _[b]),
              ne !== 0 && ((I -= le[b]), Ee(C, I, ne)),
              Ce--,
              (b = Re(Ce)),
              Ie(C, b, he),
              (ne = te[b]),
              ne !== 0 && ((Ce -= re[b]), Ee(C, Ce, ne)));
      while ($ < C.last_lit);
    Ie(C, q, oe);
  }
  function or(C, oe) {
    var he = oe.dyn_tree,
      Ce = oe.stat_desc.static_tree,
      I = oe.stat_desc.has_stree,
      $ = oe.stat_desc.elems,
      b,
      ne,
      Me = -1,
      v;
    for (C.heap_len = 0, C.heap_max = R, b = 0; b < $; b++)
      he[b * 2] !== 0
        ? ((C.heap[++C.heap_len] = Me = b), (C.depth[b] = 0))
        : (he[b * 2 + 1] = 0);
    for (; C.heap_len < 2; )
      (v = C.heap[++C.heap_len] = Me < 2 ? ++Me : 0),
        (he[v * 2] = 1),
        (C.depth[v] = 0),
        C.opt_len--,
        I && (C.static_len -= Ce[v * 2 + 1]);
    for (oe.max_code = Me, b = C.heap_len >> 1; b >= 1; b--) St(C, he, b);
    v = $;
    do
      (b = C.heap[1]),
        (C.heap[1] = C.heap[C.heap_len--]),
        St(C, he, 1),
        (ne = C.heap[1]),
        (C.heap[--C.heap_max] = b),
        (C.heap[--C.heap_max] = ne),
        (he[v * 2] = he[b * 2] + he[ne * 2]),
        (C.depth[v] =
          (C.depth[b] >= C.depth[ne] ? C.depth[b] : C.depth[ne]) + 1),
        (he[b * 2 + 1] = he[ne * 2 + 1] = v),
        (C.heap[1] = v++),
        St(C, he, 1);
    while (C.heap_len >= 2);
    (C.heap[--C.heap_max] = C.heap[1]), mt(C, oe), _t(he, Me, C.bl_count);
  }
  function Mr(C, oe, he) {
    var Ce,
      I = -1,
      $,
      b = oe[0 * 2 + 1],
      ne = 0,
      Me = 7,
      v = 4;
    for (
      b === 0 && ((Me = 138), (v = 3)), oe[(he + 1) * 2 + 1] = 65535, Ce = 0;
      Ce <= he;
      Ce++
    )
      ($ = b),
        (b = oe[(Ce + 1) * 2 + 1]),
        !(++ne < Me && $ === b) &&
          (ne < v
            ? (C.bl_tree[$ * 2] += ne)
            : $ !== 0
            ? ($ !== I && C.bl_tree[$ * 2]++, C.bl_tree[K * 2]++)
            : ne <= 10
            ? C.bl_tree[M * 2]++
            : C.bl_tree[U * 2]++,
          (ne = 0),
          (I = $),
          b === 0
            ? ((Me = 138), (v = 3))
            : $ === b
            ? ((Me = 6), (v = 3))
            : ((Me = 7), (v = 4)));
  }
  function hr(C, oe, he) {
    var Ce,
      I = -1,
      $,
      b = oe[0 * 2 + 1],
      ne = 0,
      Me = 7,
      v = 4;
    for (b === 0 && ((Me = 138), (v = 3)), Ce = 0; Ce <= he; Ce++)
      if ((($ = b), (b = oe[(Ce + 1) * 2 + 1]), !(++ne < Me && $ === b))) {
        if (ne < v)
          do Ie(C, $, C.bl_tree);
          while (--ne !== 0);
        else
          $ !== 0
            ? ($ !== I && (Ie(C, $, C.bl_tree), ne--),
              Ie(C, K, C.bl_tree),
              Ee(C, ne - 3, 2))
            : ne <= 10
            ? (Ie(C, M, C.bl_tree), Ee(C, ne - 3, 3))
            : (Ie(C, U, C.bl_tree), Ee(C, ne - 11, 7));
        (ne = 0),
          (I = $),
          b === 0
            ? ((Me = 138), (v = 3))
            : $ === b
            ? ((Me = 6), (v = 3))
            : ((Me = 7), (v = 4));
      }
  }
  function ar(C) {
    var oe;
    for (
      Mr(C, C.dyn_ltree, C.l_desc.max_code),
        Mr(C, C.dyn_dtree, C.d_desc.max_code),
        or(C, C.bl_desc),
        oe = E - 1;
      oe >= 3 && C.bl_tree[ie[oe] * 2 + 1] === 0;
      oe--
    );
    return (C.opt_len += 3 * (oe + 1) + 5 + 5 + 4), oe;
  }
  function kn(C, oe, he, Ce) {
    var I;
    for (
      Ee(C, oe - 257, 5), Ee(C, he - 1, 5), Ee(C, Ce - 4, 4), I = 0;
      I < Ce;
      I++
    )
      Ee(C, C.bl_tree[ie[I] * 2 + 1], 3);
    hr(C, C.dyn_ltree, oe - 1), hr(C, C.dyn_dtree, he - 1);
  }
  function nn(C) {
    var oe = 4093624447,
      he;
    for (he = 0; he <= 31; he++, oe >>>= 1)
      if (oe & 1 && C.dyn_ltree[he * 2] !== 0) return t;
    if (
      C.dyn_ltree[9 * 2] !== 0 ||
      C.dyn_ltree[10 * 2] !== 0 ||
      C.dyn_ltree[13 * 2] !== 0
    )
      return i;
    for (he = 32; he < x; he++) if (C.dyn_ltree[he * 2] !== 0) return i;
    return t;
  }
  var xr = !1;
  function Fn(C) {
    xr || (ht(), (xr = !0)),
      (C.l_desc = new Pe(C.dyn_ltree, me)),
      (C.d_desc = new Pe(C.dyn_dtree, j)),
      (C.bl_desc = new Pe(C.bl_tree, J)),
      (C.bi_buf = 0),
      (C.bi_valid = 0),
      Ut(C);
  }
  function Ur(C, oe, he, Ce) {
    Ee(C, (s << 1) + (Ce ? 1 : 0), 3), dr(C, oe, he);
  }
  function zt(C) {
    Ee(C, c << 1, 3), Ie(C, q, Y), Je(C);
  }
  function Tr(C, oe, he, Ce) {
    var I,
      $,
      b = 0;
    C.level > 0
      ? (C.strm.data_type === a && (C.strm.data_type = nn(C)),
        or(C, C.l_desc),
        or(C, C.d_desc),
        (b = ar(C)),
        (I = (C.opt_len + 3 + 7) >>> 3),
        ($ = (C.static_len + 3 + 7) >>> 3),
        $ <= I && (I = $))
      : (I = $ = he + 5),
      he + 4 <= I && oe !== -1
        ? Ur(C, oe, he, Ce)
        : C.strategy === e || $ === I
        ? (Ee(C, (c << 1) + (Ce ? 1 : 0), 3), tt(C, Y, xe))
        : (Ee(C, (d << 1) + (Ce ? 1 : 0), 3),
          kn(C, C.l_desc.max_code + 1, C.d_desc.max_code + 1, b + 1),
          tt(C, C.dyn_ltree, C.dyn_dtree)),
      Ut(C),
      Ce && rn(C);
  }
  function Lr(C, oe, he) {
    return (
      (C.pending_buf[C.d_buf + C.last_lit * 2] = (oe >>> 8) & 255),
      (C.pending_buf[C.d_buf + C.last_lit * 2 + 1] = oe & 255),
      (C.pending_buf[C.l_buf + C.last_lit] = he & 255),
      C.last_lit++,
      oe === 0
        ? C.dyn_ltree[he * 2]++
        : (C.matches++,
          oe--,
          C.dyn_ltree[(de[he] + x + 1) * 2]++,
          C.dyn_dtree[Re(oe) * 2]++),
      C.last_lit === C.lit_bufsize - 1
    );
  }
  return (
    (Di._tr_init = Fn),
    (Di._tr_stored_block = Ur),
    (Di._tr_flush_block = Tr),
    (Di._tr_tally = Lr),
    (Di._tr_align = zt),
    Di
  );
}
var wf, a0;
function op() {
  if (a0) return wf;
  a0 = 1;
  function r(e, t, i, a) {
    for (
      var u = (e & 65535) | 0, s = ((e >>> 16) & 65535) | 0, c = 0;
      i !== 0;

    ) {
      (c = i > 2e3 ? 2e3 : i), (i -= c);
      do (u = (u + t[a++]) | 0), (s = (s + u) | 0);
      while (--c);
      (u %= 65521), (s %= 65521);
    }
    return u | (s << 16) | 0;
  }
  return (wf = r), wf;
}
var Sf, u0;
function ap() {
  if (u0) return Sf;
  u0 = 1;
  function r() {
    for (var i, a = [], u = 0; u < 256; u++) {
      i = u;
      for (var s = 0; s < 8; s++) i = i & 1 ? 3988292384 ^ (i >>> 1) : i >>> 1;
      a[u] = i;
    }
    return a;
  }
  var e = r();
  function t(i, a, u, s) {
    var c = e,
      d = s + u;
    i ^= -1;
    for (var h = s; h < d; h++) i = (i >>> 8) ^ c[(i ^ a[h]) & 255];
    return i ^ -1;
  }
  return (Sf = t), Sf;
}
var bf, l0;
function Yf() {
  return (
    l0 ||
      ((l0 = 1),
      (bf = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version",
      })),
    bf
  );
}
var s0;
function Cy() {
  if (s0) return dn;
  s0 = 1;
  var r = vi(),
    e = Fy(),
    t = op(),
    i = ap(),
    a = Yf(),
    u = 0,
    s = 1,
    c = 3,
    d = 4,
    h = 5,
    y = 0,
    m = 1,
    x = -2,
    w = -3,
    F = -5,
    E = -1,
    R = 1,
    D = 2,
    L = 3,
    N = 4,
    q = 0,
    K = 2,
    M = 8,
    U = 9,
    _ = 15,
    te = 8,
    ee = 29,
    ie = 256,
    ce = ie + 1 + ee,
    Y = 30,
    xe = 19,
    Se = 2 * ce + 1,
    de = 15,
    le = 3,
    re = 258,
    ge = re + le + 1,
    me = 32,
    j = 42,
    J = 69,
    Pe = 73,
    Re = 91,
    Be = 103,
    Ee = 113,
    Ie = 666,
    we = 1,
    Je = 2,
    mt = 3,
    _t = 4,
    ht = 3;
  function Ut(v, X) {
    return (v.msg = a[X]), X;
  }
  function rn(v) {
    return (v << 1) - (v > 4 ? 9 : 0);
  }
  function dr(v) {
    for (var X = v.length; --X >= 0; ) v[X] = 0;
  }
  function ir(v) {
    var X = v.state,
      Q = X.pending;
    Q > v.avail_out && (Q = v.avail_out),
      Q !== 0 &&
        (r.arraySet(v.output, X.pending_buf, X.pending_out, Q, v.next_out),
        (v.next_out += Q),
        (X.pending_out += Q),
        (v.total_out += Q),
        (v.avail_out -= Q),
        (X.pending -= Q),
        X.pending === 0 && (X.pending_out = 0));
  }
  function St(v, X) {
    e._tr_flush_block(
      v,
      v.block_start >= 0 ? v.block_start : -1,
      v.strstart - v.block_start,
      X
    ),
      (v.block_start = v.strstart),
      ir(v.strm);
  }
  function tt(v, X) {
    v.pending_buf[v.pending++] = X;
  }
  function or(v, X) {
    (v.pending_buf[v.pending++] = (X >>> 8) & 255),
      (v.pending_buf[v.pending++] = X & 255);
  }
  function Mr(v, X, Q, k) {
    var A = v.avail_in;
    return (
      A > k && (A = k),
      A === 0
        ? 0
        : ((v.avail_in -= A),
          r.arraySet(X, v.input, v.next_in, A, Q),
          v.state.wrap === 1
            ? (v.adler = t(v.adler, X, A, Q))
            : v.state.wrap === 2 && (v.adler = i(v.adler, X, A, Q)),
          (v.next_in += A),
          (v.total_in += A),
          A)
    );
  }
  function hr(v, X) {
    var Q = v.max_chain_length,
      k = v.strstart,
      A,
      G,
      Ae = v.prev_length,
      be = v.nice_match,
      ke = v.strstart > v.w_size - ge ? v.strstart - (v.w_size - ge) : 0,
      it = v.window,
      pr = v.w_mask,
      bt = v.prev,
      rt = v.strstart + re,
      Nt = it[k + Ae - 1],
      Dt = it[k + Ae];
    v.prev_length >= v.good_match && (Q >>= 2),
      be > v.lookahead && (be = v.lookahead);
    do
      if (
        ((A = X),
        !(
          it[A + Ae] !== Dt ||
          it[A + Ae - 1] !== Nt ||
          it[A] !== it[k] ||
          it[++A] !== it[k + 1]
        ))
      ) {
        (k += 2), A++;
        do;
        while (
          it[++k] === it[++A] &&
          it[++k] === it[++A] &&
          it[++k] === it[++A] &&
          it[++k] === it[++A] &&
          it[++k] === it[++A] &&
          it[++k] === it[++A] &&
          it[++k] === it[++A] &&
          it[++k] === it[++A] &&
          k < rt
        );
        if (((G = re - (rt - k)), (k = rt - re), G > Ae)) {
          if (((v.match_start = X), (Ae = G), G >= be)) break;
          (Nt = it[k + Ae - 1]), (Dt = it[k + Ae]);
        }
      }
    while ((X = bt[X & pr]) > ke && --Q !== 0);
    return Ae <= v.lookahead ? Ae : v.lookahead;
  }
  function ar(v) {
    var X = v.w_size,
      Q,
      k,
      A,
      G,
      Ae;
    do {
      if (
        ((G = v.window_size - v.lookahead - v.strstart),
        v.strstart >= X + (X - ge))
      ) {
        r.arraySet(v.window, v.window, X, X, 0),
          (v.match_start -= X),
          (v.strstart -= X),
          (v.block_start -= X),
          (k = v.hash_size),
          (Q = k);
        do (A = v.head[--Q]), (v.head[Q] = A >= X ? A - X : 0);
        while (--k);
        (k = X), (Q = k);
        do (A = v.prev[--Q]), (v.prev[Q] = A >= X ? A - X : 0);
        while (--k);
        G += X;
      }
      if (v.strm.avail_in === 0) break;
      if (
        ((k = Mr(v.strm, v.window, v.strstart + v.lookahead, G)),
        (v.lookahead += k),
        v.lookahead + v.insert >= le)
      )
        for (
          Ae = v.strstart - v.insert,
            v.ins_h = v.window[Ae],
            v.ins_h =
              ((v.ins_h << v.hash_shift) ^ v.window[Ae + 1]) & v.hash_mask;
          v.insert &&
          ((v.ins_h =
            ((v.ins_h << v.hash_shift) ^ v.window[Ae + le - 1]) & v.hash_mask),
          (v.prev[Ae & v.w_mask] = v.head[v.ins_h]),
          (v.head[v.ins_h] = Ae),
          Ae++,
          v.insert--,
          !(v.lookahead + v.insert < le));

        );
    } while (v.lookahead < ge && v.strm.avail_in !== 0);
  }
  function kn(v, X) {
    var Q = 65535;
    for (Q > v.pending_buf_size - 5 && (Q = v.pending_buf_size - 5); ; ) {
      if (v.lookahead <= 1) {
        if ((ar(v), v.lookahead === 0 && X === u)) return we;
        if (v.lookahead === 0) break;
      }
      (v.strstart += v.lookahead), (v.lookahead = 0);
      var k = v.block_start + Q;
      if (
        ((v.strstart === 0 || v.strstart >= k) &&
          ((v.lookahead = v.strstart - k),
          (v.strstart = k),
          St(v, !1),
          v.strm.avail_out === 0)) ||
        (v.strstart - v.block_start >= v.w_size - ge &&
          (St(v, !1), v.strm.avail_out === 0))
      )
        return we;
    }
    return (
      (v.insert = 0),
      X === d
        ? (St(v, !0), v.strm.avail_out === 0 ? mt : _t)
        : (v.strstart > v.block_start && (St(v, !1), v.strm.avail_out === 0),
          we)
    );
  }
  function nn(v, X) {
    for (var Q, k; ; ) {
      if (v.lookahead < ge) {
        if ((ar(v), v.lookahead < ge && X === u)) return we;
        if (v.lookahead === 0) break;
      }
      if (
        ((Q = 0),
        v.lookahead >= le &&
          ((v.ins_h =
            ((v.ins_h << v.hash_shift) ^ v.window[v.strstart + le - 1]) &
            v.hash_mask),
          (Q = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h]),
          (v.head[v.ins_h] = v.strstart)),
        Q !== 0 &&
          v.strstart - Q <= v.w_size - ge &&
          (v.match_length = hr(v, Q)),
        v.match_length >= le)
      )
        if (
          ((k = e._tr_tally(
            v,
            v.strstart - v.match_start,
            v.match_length - le
          )),
          (v.lookahead -= v.match_length),
          v.match_length <= v.max_lazy_match && v.lookahead >= le)
        ) {
          v.match_length--;
          do
            v.strstart++,
              (v.ins_h =
                ((v.ins_h << v.hash_shift) ^ v.window[v.strstart + le - 1]) &
                v.hash_mask),
              (Q = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h]),
              (v.head[v.ins_h] = v.strstart);
          while (--v.match_length !== 0);
          v.strstart++;
        } else
          (v.strstart += v.match_length),
            (v.match_length = 0),
            (v.ins_h = v.window[v.strstart]),
            (v.ins_h =
              ((v.ins_h << v.hash_shift) ^ v.window[v.strstart + 1]) &
              v.hash_mask);
      else
        (k = e._tr_tally(v, 0, v.window[v.strstart])),
          v.lookahead--,
          v.strstart++;
      if (k && (St(v, !1), v.strm.avail_out === 0)) return we;
    }
    return (
      (v.insert = v.strstart < le - 1 ? v.strstart : le - 1),
      X === d
        ? (St(v, !0), v.strm.avail_out === 0 ? mt : _t)
        : v.last_lit && (St(v, !1), v.strm.avail_out === 0)
        ? we
        : Je
    );
  }
  function xr(v, X) {
    for (var Q, k, A; ; ) {
      if (v.lookahead < ge) {
        if ((ar(v), v.lookahead < ge && X === u)) return we;
        if (v.lookahead === 0) break;
      }
      if (
        ((Q = 0),
        v.lookahead >= le &&
          ((v.ins_h =
            ((v.ins_h << v.hash_shift) ^ v.window[v.strstart + le - 1]) &
            v.hash_mask),
          (Q = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h]),
          (v.head[v.ins_h] = v.strstart)),
        (v.prev_length = v.match_length),
        (v.prev_match = v.match_start),
        (v.match_length = le - 1),
        Q !== 0 &&
          v.prev_length < v.max_lazy_match &&
          v.strstart - Q <= v.w_size - ge &&
          ((v.match_length = hr(v, Q)),
          v.match_length <= 5 &&
            (v.strategy === R ||
              (v.match_length === le && v.strstart - v.match_start > 4096)) &&
            (v.match_length = le - 1)),
        v.prev_length >= le && v.match_length <= v.prev_length)
      ) {
        (A = v.strstart + v.lookahead - le),
          (k = e._tr_tally(
            v,
            v.strstart - 1 - v.prev_match,
            v.prev_length - le
          )),
          (v.lookahead -= v.prev_length - 1),
          (v.prev_length -= 2);
        do
          ++v.strstart <= A &&
            ((v.ins_h =
              ((v.ins_h << v.hash_shift) ^ v.window[v.strstart + le - 1]) &
              v.hash_mask),
            (Q = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h]),
            (v.head[v.ins_h] = v.strstart));
        while (--v.prev_length !== 0);
        if (
          ((v.match_available = 0),
          (v.match_length = le - 1),
          v.strstart++,
          k && (St(v, !1), v.strm.avail_out === 0))
        )
          return we;
      } else if (v.match_available) {
        if (
          ((k = e._tr_tally(v, 0, v.window[v.strstart - 1])),
          k && St(v, !1),
          v.strstart++,
          v.lookahead--,
          v.strm.avail_out === 0)
        )
          return we;
      } else (v.match_available = 1), v.strstart++, v.lookahead--;
    }
    return (
      v.match_available &&
        ((k = e._tr_tally(v, 0, v.window[v.strstart - 1])),
        (v.match_available = 0)),
      (v.insert = v.strstart < le - 1 ? v.strstart : le - 1),
      X === d
        ? (St(v, !0), v.strm.avail_out === 0 ? mt : _t)
        : v.last_lit && (St(v, !1), v.strm.avail_out === 0)
        ? we
        : Je
    );
  }
  function Fn(v, X) {
    for (var Q, k, A, G, Ae = v.window; ; ) {
      if (v.lookahead <= re) {
        if ((ar(v), v.lookahead <= re && X === u)) return we;
        if (v.lookahead === 0) break;
      }
      if (
        ((v.match_length = 0),
        v.lookahead >= le &&
          v.strstart > 0 &&
          ((A = v.strstart - 1),
          (k = Ae[A]),
          k === Ae[++A] && k === Ae[++A] && k === Ae[++A]))
      ) {
        G = v.strstart + re;
        do;
        while (
          k === Ae[++A] &&
          k === Ae[++A] &&
          k === Ae[++A] &&
          k === Ae[++A] &&
          k === Ae[++A] &&
          k === Ae[++A] &&
          k === Ae[++A] &&
          k === Ae[++A] &&
          A < G
        );
        (v.match_length = re - (G - A)),
          v.match_length > v.lookahead && (v.match_length = v.lookahead);
      }
      if (
        (v.match_length >= le
          ? ((Q = e._tr_tally(v, 1, v.match_length - le)),
            (v.lookahead -= v.match_length),
            (v.strstart += v.match_length),
            (v.match_length = 0))
          : ((Q = e._tr_tally(v, 0, v.window[v.strstart])),
            v.lookahead--,
            v.strstart++),
        Q && (St(v, !1), v.strm.avail_out === 0))
      )
        return we;
    }
    return (
      (v.insert = 0),
      X === d
        ? (St(v, !0), v.strm.avail_out === 0 ? mt : _t)
        : v.last_lit && (St(v, !1), v.strm.avail_out === 0)
        ? we
        : Je
    );
  }
  function Ur(v, X) {
    for (var Q; ; ) {
      if (v.lookahead === 0 && (ar(v), v.lookahead === 0)) {
        if (X === u) return we;
        break;
      }
      if (
        ((v.match_length = 0),
        (Q = e._tr_tally(v, 0, v.window[v.strstart])),
        v.lookahead--,
        v.strstart++,
        Q && (St(v, !1), v.strm.avail_out === 0))
      )
        return we;
    }
    return (
      (v.insert = 0),
      X === d
        ? (St(v, !0), v.strm.avail_out === 0 ? mt : _t)
        : v.last_lit && (St(v, !1), v.strm.avail_out === 0)
        ? we
        : Je
    );
  }
  function zt(v, X, Q, k, A) {
    (this.good_length = v),
      (this.max_lazy = X),
      (this.nice_length = Q),
      (this.max_chain = k),
      (this.func = A);
  }
  var Tr;
  Tr = [
    new zt(0, 0, 0, 0, kn),
    new zt(4, 4, 8, 4, nn),
    new zt(4, 5, 16, 8, nn),
    new zt(4, 6, 32, 32, nn),
    new zt(4, 4, 16, 16, xr),
    new zt(8, 16, 32, 32, xr),
    new zt(8, 16, 128, 128, xr),
    new zt(8, 32, 128, 256, xr),
    new zt(32, 128, 258, 1024, xr),
    new zt(32, 258, 258, 4096, xr),
  ];
  function Lr(v) {
    (v.window_size = 2 * v.w_size),
      dr(v.head),
      (v.max_lazy_match = Tr[v.level].max_lazy),
      (v.good_match = Tr[v.level].good_length),
      (v.nice_match = Tr[v.level].nice_length),
      (v.max_chain_length = Tr[v.level].max_chain),
      (v.strstart = 0),
      (v.block_start = 0),
      (v.lookahead = 0),
      (v.insert = 0),
      (v.match_length = v.prev_length = le - 1),
      (v.match_available = 0),
      (v.ins_h = 0);
  }
  function C() {
    (this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = M),
      (this.last_flush = -1),
      (this.w_size = 0),
      (this.w_bits = 0),
      (this.w_mask = 0),
      (this.window = null),
      (this.window_size = 0),
      (this.prev = null),
      (this.head = null),
      (this.ins_h = 0),
      (this.hash_size = 0),
      (this.hash_bits = 0),
      (this.hash_mask = 0),
      (this.hash_shift = 0),
      (this.block_start = 0),
      (this.match_length = 0),
      (this.prev_match = 0),
      (this.match_available = 0),
      (this.strstart = 0),
      (this.match_start = 0),
      (this.lookahead = 0),
      (this.prev_length = 0),
      (this.max_chain_length = 0),
      (this.max_lazy_match = 0),
      (this.level = 0),
      (this.strategy = 0),
      (this.good_match = 0),
      (this.nice_match = 0),
      (this.dyn_ltree = new r.Buf16(Se * 2)),
      (this.dyn_dtree = new r.Buf16((2 * Y + 1) * 2)),
      (this.bl_tree = new r.Buf16((2 * xe + 1) * 2)),
      dr(this.dyn_ltree),
      dr(this.dyn_dtree),
      dr(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new r.Buf16(de + 1)),
      (this.heap = new r.Buf16(2 * ce + 1)),
      dr(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new r.Buf16(2 * ce + 1)),
      dr(this.depth),
      (this.l_buf = 0),
      (this.lit_bufsize = 0),
      (this.last_lit = 0),
      (this.d_buf = 0),
      (this.opt_len = 0),
      (this.static_len = 0),
      (this.matches = 0),
      (this.insert = 0),
      (this.bi_buf = 0),
      (this.bi_valid = 0);
  }
  function oe(v) {
    var X;
    return !v || !v.state
      ? Ut(v, x)
      : ((v.total_in = v.total_out = 0),
        (v.data_type = K),
        (X = v.state),
        (X.pending = 0),
        (X.pending_out = 0),
        X.wrap < 0 && (X.wrap = -X.wrap),
        (X.status = X.wrap ? j : Ee),
        (v.adler = X.wrap === 2 ? 0 : 1),
        (X.last_flush = u),
        e._tr_init(X),
        y);
  }
  function he(v) {
    var X = oe(v);
    return X === y && Lr(v.state), X;
  }
  function Ce(v, X) {
    return !v || !v.state || v.state.wrap !== 2 ? x : ((v.state.gzhead = X), y);
  }
  function I(v, X, Q, k, A, G) {
    if (!v) return x;
    var Ae = 1;
    if (
      (X === E && (X = 6),
      k < 0 ? ((Ae = 0), (k = -k)) : k > 15 && ((Ae = 2), (k -= 16)),
      A < 1 ||
        A > U ||
        Q !== M ||
        k < 8 ||
        k > 15 ||
        X < 0 ||
        X > 9 ||
        G < 0 ||
        G > N)
    )
      return Ut(v, x);
    k === 8 && (k = 9);
    var be = new C();
    return (
      (v.state = be),
      (be.strm = v),
      (be.wrap = Ae),
      (be.gzhead = null),
      (be.w_bits = k),
      (be.w_size = 1 << be.w_bits),
      (be.w_mask = be.w_size - 1),
      (be.hash_bits = A + 7),
      (be.hash_size = 1 << be.hash_bits),
      (be.hash_mask = be.hash_size - 1),
      (be.hash_shift = ~~((be.hash_bits + le - 1) / le)),
      (be.window = new r.Buf8(be.w_size * 2)),
      (be.head = new r.Buf16(be.hash_size)),
      (be.prev = new r.Buf16(be.w_size)),
      (be.lit_bufsize = 1 << (A + 6)),
      (be.pending_buf_size = be.lit_bufsize * 4),
      (be.pending_buf = new r.Buf8(be.pending_buf_size)),
      (be.d_buf = 1 * be.lit_bufsize),
      (be.l_buf = 3 * be.lit_bufsize),
      (be.level = X),
      (be.strategy = G),
      (be.method = Q),
      he(v)
    );
  }
  function $(v, X) {
    return I(v, X, M, _, te, q);
  }
  function b(v, X) {
    var Q, k, A, G;
    if (!v || !v.state || X > h || X < 0) return v ? Ut(v, x) : x;
    if (
      ((k = v.state),
      !v.output ||
        (!v.input && v.avail_in !== 0) ||
        (k.status === Ie && X !== d))
    )
      return Ut(v, v.avail_out === 0 ? F : x);
    if (((k.strm = v), (Q = k.last_flush), (k.last_flush = X), k.status === j))
      if (k.wrap === 2)
        (v.adler = 0),
          tt(k, 31),
          tt(k, 139),
          tt(k, 8),
          k.gzhead
            ? (tt(
                k,
                (k.gzhead.text ? 1 : 0) +
                  (k.gzhead.hcrc ? 2 : 0) +
                  (k.gzhead.extra ? 4 : 0) +
                  (k.gzhead.name ? 8 : 0) +
                  (k.gzhead.comment ? 16 : 0)
              ),
              tt(k, k.gzhead.time & 255),
              tt(k, (k.gzhead.time >> 8) & 255),
              tt(k, (k.gzhead.time >> 16) & 255),
              tt(k, (k.gzhead.time >> 24) & 255),
              tt(k, k.level === 9 ? 2 : k.strategy >= D || k.level < 2 ? 4 : 0),
              tt(k, k.gzhead.os & 255),
              k.gzhead.extra &&
                k.gzhead.extra.length &&
                (tt(k, k.gzhead.extra.length & 255),
                tt(k, (k.gzhead.extra.length >> 8) & 255)),
              k.gzhead.hcrc &&
                (v.adler = i(v.adler, k.pending_buf, k.pending, 0)),
              (k.gzindex = 0),
              (k.status = J))
            : (tt(k, 0),
              tt(k, 0),
              tt(k, 0),
              tt(k, 0),
              tt(k, 0),
              tt(k, k.level === 9 ? 2 : k.strategy >= D || k.level < 2 ? 4 : 0),
              tt(k, ht),
              (k.status = Ee));
      else {
        var Ae = (M + ((k.w_bits - 8) << 4)) << 8,
          be = -1;
        k.strategy >= D || k.level < 2
          ? (be = 0)
          : k.level < 6
          ? (be = 1)
          : k.level === 6
          ? (be = 2)
          : (be = 3),
          (Ae |= be << 6),
          k.strstart !== 0 && (Ae |= me),
          (Ae += 31 - (Ae % 31)),
          (k.status = Ee),
          or(k, Ae),
          k.strstart !== 0 && (or(k, v.adler >>> 16), or(k, v.adler & 65535)),
          (v.adler = 1);
      }
    if (k.status === J)
      if (k.gzhead.extra) {
        for (
          A = k.pending;
          k.gzindex < (k.gzhead.extra.length & 65535) &&
          !(
            k.pending === k.pending_buf_size &&
            (k.gzhead.hcrc &&
              k.pending > A &&
              (v.adler = i(v.adler, k.pending_buf, k.pending - A, A)),
            ir(v),
            (A = k.pending),
            k.pending === k.pending_buf_size)
          );

        )
          tt(k, k.gzhead.extra[k.gzindex] & 255), k.gzindex++;
        k.gzhead.hcrc &&
          k.pending > A &&
          (v.adler = i(v.adler, k.pending_buf, k.pending - A, A)),
          k.gzindex === k.gzhead.extra.length &&
            ((k.gzindex = 0), (k.status = Pe));
      } else k.status = Pe;
    if (k.status === Pe)
      if (k.gzhead.name) {
        A = k.pending;
        do {
          if (
            k.pending === k.pending_buf_size &&
            (k.gzhead.hcrc &&
              k.pending > A &&
              (v.adler = i(v.adler, k.pending_buf, k.pending - A, A)),
            ir(v),
            (A = k.pending),
            k.pending === k.pending_buf_size)
          ) {
            G = 1;
            break;
          }
          k.gzindex < k.gzhead.name.length
            ? (G = k.gzhead.name.charCodeAt(k.gzindex++) & 255)
            : (G = 0),
            tt(k, G);
        } while (G !== 0);
        k.gzhead.hcrc &&
          k.pending > A &&
          (v.adler = i(v.adler, k.pending_buf, k.pending - A, A)),
          G === 0 && ((k.gzindex = 0), (k.status = Re));
      } else k.status = Re;
    if (k.status === Re)
      if (k.gzhead.comment) {
        A = k.pending;
        do {
          if (
            k.pending === k.pending_buf_size &&
            (k.gzhead.hcrc &&
              k.pending > A &&
              (v.adler = i(v.adler, k.pending_buf, k.pending - A, A)),
            ir(v),
            (A = k.pending),
            k.pending === k.pending_buf_size)
          ) {
            G = 1;
            break;
          }
          k.gzindex < k.gzhead.comment.length
            ? (G = k.gzhead.comment.charCodeAt(k.gzindex++) & 255)
            : (G = 0),
            tt(k, G);
        } while (G !== 0);
        k.gzhead.hcrc &&
          k.pending > A &&
          (v.adler = i(v.adler, k.pending_buf, k.pending - A, A)),
          G === 0 && (k.status = Be);
      } else k.status = Be;
    if (
      (k.status === Be &&
        (k.gzhead.hcrc
          ? (k.pending + 2 > k.pending_buf_size && ir(v),
            k.pending + 2 <= k.pending_buf_size &&
              (tt(k, v.adler & 255),
              tt(k, (v.adler >> 8) & 255),
              (v.adler = 0),
              (k.status = Ee)))
          : (k.status = Ee)),
      k.pending !== 0)
    ) {
      if ((ir(v), v.avail_out === 0)) return (k.last_flush = -1), y;
    } else if (v.avail_in === 0 && rn(X) <= rn(Q) && X !== d) return Ut(v, F);
    if (k.status === Ie && v.avail_in !== 0) return Ut(v, F);
    if (v.avail_in !== 0 || k.lookahead !== 0 || (X !== u && k.status !== Ie)) {
      var ke =
        k.strategy === D
          ? Ur(k, X)
          : k.strategy === L
          ? Fn(k, X)
          : Tr[k.level].func(k, X);
      if (((ke === mt || ke === _t) && (k.status = Ie), ke === we || ke === mt))
        return v.avail_out === 0 && (k.last_flush = -1), y;
      if (
        ke === Je &&
        (X === s
          ? e._tr_align(k)
          : X !== h &&
            (e._tr_stored_block(k, 0, 0, !1),
            X === c &&
              (dr(k.head),
              k.lookahead === 0 &&
                ((k.strstart = 0), (k.block_start = 0), (k.insert = 0)))),
        ir(v),
        v.avail_out === 0)
      )
        return (k.last_flush = -1), y;
    }
    return X !== d
      ? y
      : k.wrap <= 0
      ? m
      : (k.wrap === 2
          ? (tt(k, v.adler & 255),
            tt(k, (v.adler >> 8) & 255),
            tt(k, (v.adler >> 16) & 255),
            tt(k, (v.adler >> 24) & 255),
            tt(k, v.total_in & 255),
            tt(k, (v.total_in >> 8) & 255),
            tt(k, (v.total_in >> 16) & 255),
            tt(k, (v.total_in >> 24) & 255))
          : (or(k, v.adler >>> 16), or(k, v.adler & 65535)),
        ir(v),
        k.wrap > 0 && (k.wrap = -k.wrap),
        k.pending !== 0 ? y : m);
  }
  function ne(v) {
    var X;
    return !v || !v.state
      ? x
      : ((X = v.state.status),
        X !== j &&
        X !== J &&
        X !== Pe &&
        X !== Re &&
        X !== Be &&
        X !== Ee &&
        X !== Ie
          ? Ut(v, x)
          : ((v.state = null), X === Ee ? Ut(v, w) : y));
  }
  function Me(v, X) {
    var Q = X.length,
      k,
      A,
      G,
      Ae,
      be,
      ke,
      it,
      pr;
    if (
      !v ||
      !v.state ||
      ((k = v.state),
      (Ae = k.wrap),
      Ae === 2 || (Ae === 1 && k.status !== j) || k.lookahead)
    )
      return x;
    for (
      Ae === 1 && (v.adler = t(v.adler, X, Q, 0)),
        k.wrap = 0,
        Q >= k.w_size &&
          (Ae === 0 &&
            (dr(k.head), (k.strstart = 0), (k.block_start = 0), (k.insert = 0)),
          (pr = new r.Buf8(k.w_size)),
          r.arraySet(pr, X, Q - k.w_size, k.w_size, 0),
          (X = pr),
          (Q = k.w_size)),
        be = v.avail_in,
        ke = v.next_in,
        it = v.input,
        v.avail_in = Q,
        v.next_in = 0,
        v.input = X,
        ar(k);
      k.lookahead >= le;

    ) {
      (A = k.strstart), (G = k.lookahead - (le - 1));
      do
        (k.ins_h =
          ((k.ins_h << k.hash_shift) ^ k.window[A + le - 1]) & k.hash_mask),
          (k.prev[A & k.w_mask] = k.head[k.ins_h]),
          (k.head[k.ins_h] = A),
          A++;
      while (--G);
      (k.strstart = A), (k.lookahead = le - 1), ar(k);
    }
    return (
      (k.strstart += k.lookahead),
      (k.block_start = k.strstart),
      (k.insert = k.lookahead),
      (k.lookahead = 0),
      (k.match_length = k.prev_length = le - 1),
      (k.match_available = 0),
      (v.next_in = ke),
      (v.input = it),
      (v.avail_in = be),
      (k.wrap = Ae),
      y
    );
  }
  return (
    (dn.deflateInit = $),
    (dn.deflateInit2 = I),
    (dn.deflateReset = he),
    (dn.deflateResetKeep = oe),
    (dn.deflateSetHeader = Ce),
    (dn.deflate = b),
    (dn.deflateEnd = ne),
    (dn.deflateSetDictionary = Me),
    (dn.deflateInfo = "pako deflate (from Nodeca project)"),
    dn
  );
}
var Oi = {},
  f0;
function up() {
  if (f0) return Oi;
  f0 = 1;
  var r = vi(),
    e = !0,
    t = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch {
    e = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    t = !1;
  }
  for (var i = new r.Buf8(256), a = 0; a < 256; a++)
    i[a] =
      a >= 252
        ? 6
        : a >= 248
        ? 5
        : a >= 240
        ? 4
        : a >= 224
        ? 3
        : a >= 192
        ? 2
        : 1;
  (i[254] = i[254] = 1),
    (Oi.string2buf = function (s) {
      var c,
        d,
        h,
        y,
        m,
        x = s.length,
        w = 0;
      for (y = 0; y < x; y++)
        (d = s.charCodeAt(y)),
          (d & 64512) === 55296 &&
            y + 1 < x &&
            ((h = s.charCodeAt(y + 1)),
            (h & 64512) === 56320 &&
              ((d = 65536 + ((d - 55296) << 10) + (h - 56320)), y++)),
          (w += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4);
      for (c = new r.Buf8(w), m = 0, y = 0; m < w; y++)
        (d = s.charCodeAt(y)),
          (d & 64512) === 55296 &&
            y + 1 < x &&
            ((h = s.charCodeAt(y + 1)),
            (h & 64512) === 56320 &&
              ((d = 65536 + ((d - 55296) << 10) + (h - 56320)), y++)),
          d < 128
            ? (c[m++] = d)
            : d < 2048
            ? ((c[m++] = 192 | (d >>> 6)), (c[m++] = 128 | (d & 63)))
            : d < 65536
            ? ((c[m++] = 224 | (d >>> 12)),
              (c[m++] = 128 | ((d >>> 6) & 63)),
              (c[m++] = 128 | (d & 63)))
            : ((c[m++] = 240 | (d >>> 18)),
              (c[m++] = 128 | ((d >>> 12) & 63)),
              (c[m++] = 128 | ((d >>> 6) & 63)),
              (c[m++] = 128 | (d & 63)));
      return c;
    });
  function u(s, c) {
    if (c < 65534 && ((s.subarray && t) || (!s.subarray && e)))
      return String.fromCharCode.apply(null, r.shrinkBuf(s, c));
    for (var d = "", h = 0; h < c; h++) d += String.fromCharCode(s[h]);
    return d;
  }
  return (
    (Oi.buf2binstring = function (s) {
      return u(s, s.length);
    }),
    (Oi.binstring2buf = function (s) {
      for (var c = new r.Buf8(s.length), d = 0, h = c.length; d < h; d++)
        c[d] = s.charCodeAt(d);
      return c;
    }),
    (Oi.buf2string = function (s, c) {
      var d,
        h,
        y,
        m,
        x = c || s.length,
        w = new Array(x * 2);
      for (h = 0, d = 0; d < x; ) {
        if (((y = s[d++]), y < 128)) {
          w[h++] = y;
          continue;
        }
        if (((m = i[y]), m > 4)) {
          (w[h++] = 65533), (d += m - 1);
          continue;
        }
        for (y &= m === 2 ? 31 : m === 3 ? 15 : 7; m > 1 && d < x; )
          (y = (y << 6) | (s[d++] & 63)), m--;
        if (m > 1) {
          w[h++] = 65533;
          continue;
        }
        y < 65536
          ? (w[h++] = y)
          : ((y -= 65536),
            (w[h++] = 55296 | ((y >> 10) & 1023)),
            (w[h++] = 56320 | (y & 1023)));
      }
      return u(w, h);
    }),
    (Oi.utf8border = function (s, c) {
      var d;
      for (
        c = c || s.length, c > s.length && (c = s.length), d = c - 1;
        d >= 0 && (s[d] & 192) === 128;

      )
        d--;
      return d < 0 || d === 0 ? c : d + i[s[d]] > c ? d : c;
    }),
    Oi
  );
}
var kf, c0;
function lp() {
  if (c0) return kf;
  c0 = 1;
  function r() {
    (this.input = null),
      (this.next_in = 0),
      (this.avail_in = 0),
      (this.total_in = 0),
      (this.output = null),
      (this.next_out = 0),
      (this.avail_out = 0),
      (this.total_out = 0),
      (this.msg = ""),
      (this.state = null),
      (this.data_type = 2),
      (this.adler = 0);
  }
  return (kf = r), kf;
}
var d0;
function Py() {
  if (d0) return lo;
  d0 = 1;
  var r = Cy(),
    e = vi(),
    t = up(),
    i = Yf(),
    a = lp(),
    u = Object.prototype.toString,
    s = 0,
    c = 4,
    d = 0,
    h = 1,
    y = 2,
    m = -1,
    x = 0,
    w = 8;
  function F(L) {
    if (!(this instanceof F)) return new F(L);
    this.options = e.assign(
      {
        level: m,
        method: w,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: x,
        to: "",
      },
      L || {}
    );
    var N = this.options;
    N.raw && N.windowBits > 0
      ? (N.windowBits = -N.windowBits)
      : N.gzip && N.windowBits > 0 && N.windowBits < 16 && (N.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new a()),
      (this.strm.avail_out = 0);
    var q = r.deflateInit2(
      this.strm,
      N.level,
      N.method,
      N.windowBits,
      N.memLevel,
      N.strategy
    );
    if (q !== d) throw new Error(i[q]);
    if ((N.header && r.deflateSetHeader(this.strm, N.header), N.dictionary)) {
      var K;
      if (
        (typeof N.dictionary == "string"
          ? (K = t.string2buf(N.dictionary))
          : u.call(N.dictionary) === "[object ArrayBuffer]"
          ? (K = new Uint8Array(N.dictionary))
          : (K = N.dictionary),
        (q = r.deflateSetDictionary(this.strm, K)),
        q !== d)
      )
        throw new Error(i[q]);
      this._dict_set = !0;
    }
  }
  (F.prototype.push = function (L, N) {
    var q = this.strm,
      K = this.options.chunkSize,
      M,
      U;
    if (this.ended) return !1;
    (U = N === ~~N ? N : N === !0 ? c : s),
      typeof L == "string"
        ? (q.input = t.string2buf(L))
        : u.call(L) === "[object ArrayBuffer]"
        ? (q.input = new Uint8Array(L))
        : (q.input = L),
      (q.next_in = 0),
      (q.avail_in = q.input.length);
    do {
      if (
        (q.avail_out === 0 &&
          ((q.output = new e.Buf8(K)), (q.next_out = 0), (q.avail_out = K)),
        (M = r.deflate(q, U)),
        M !== h && M !== d)
      )
        return this.onEnd(M), (this.ended = !0), !1;
      (q.avail_out === 0 || (q.avail_in === 0 && (U === c || U === y))) &&
        (this.options.to === "string"
          ? this.onData(t.buf2binstring(e.shrinkBuf(q.output, q.next_out)))
          : this.onData(e.shrinkBuf(q.output, q.next_out)));
    } while ((q.avail_in > 0 || q.avail_out === 0) && M !== h);
    return U === c
      ? ((M = r.deflateEnd(this.strm)),
        this.onEnd(M),
        (this.ended = !0),
        M === d)
      : (U === y && (this.onEnd(d), (q.avail_out = 0)), !0);
  }),
    (F.prototype.onData = function (L) {
      this.chunks.push(L);
    }),
    (F.prototype.onEnd = function (L) {
      L === d &&
        (this.options.to === "string"
          ? (this.result = this.chunks.join(""))
          : (this.result = e.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = L),
        (this.msg = this.strm.msg);
    });
  function E(L, N) {
    var q = new F(N);
    if ((q.push(L, !0), q.err)) throw q.msg || i[q.err];
    return q.result;
  }
  function R(L, N) {
    return (N = N || {}), (N.raw = !0), E(L, N);
  }
  function D(L, N) {
    return (N = N || {}), (N.gzip = !0), E(L, N);
  }
  return (
    (lo.Deflate = F), (lo.deflate = E), (lo.deflateRaw = R), (lo.gzip = D), lo
  );
}
var so = {},
  Xr = {},
  Ff,
  h0;
function Ey() {
  if (h0) return Ff;
  h0 = 1;
  var r = 30,
    e = 12;
  return (
    (Ff = function (i, a) {
      var u,
        s,
        c,
        d,
        h,
        y,
        m,
        x,
        w,
        F,
        E,
        R,
        D,
        L,
        N,
        q,
        K,
        M,
        U,
        _,
        te,
        ee,
        ie,
        ce,
        Y;
      (u = i.state),
        (s = i.next_in),
        (ce = i.input),
        (c = s + (i.avail_in - 5)),
        (d = i.next_out),
        (Y = i.output),
        (h = d - (a - i.avail_out)),
        (y = d + (i.avail_out - 257)),
        (m = u.dmax),
        (x = u.wsize),
        (w = u.whave),
        (F = u.wnext),
        (E = u.window),
        (R = u.hold),
        (D = u.bits),
        (L = u.lencode),
        (N = u.distcode),
        (q = (1 << u.lenbits) - 1),
        (K = (1 << u.distbits) - 1);
      e: do {
        D < 15 &&
          ((R += ce[s++] << D), (D += 8), (R += ce[s++] << D), (D += 8)),
          (M = L[R & q]);
        t: for (;;) {
          if (
            ((U = M >>> 24),
            (R >>>= U),
            (D -= U),
            (U = (M >>> 16) & 255),
            U === 0)
          )
            Y[d++] = M & 65535;
          else if (U & 16) {
            (_ = M & 65535),
              (U &= 15),
              U &&
                (D < U && ((R += ce[s++] << D), (D += 8)),
                (_ += R & ((1 << U) - 1)),
                (R >>>= U),
                (D -= U)),
              D < 15 &&
                ((R += ce[s++] << D), (D += 8), (R += ce[s++] << D), (D += 8)),
              (M = N[R & K]);
            r: for (;;) {
              if (
                ((U = M >>> 24),
                (R >>>= U),
                (D -= U),
                (U = (M >>> 16) & 255),
                U & 16)
              ) {
                if (
                  ((te = M & 65535),
                  (U &= 15),
                  D < U &&
                    ((R += ce[s++] << D),
                    (D += 8),
                    D < U && ((R += ce[s++] << D), (D += 8))),
                  (te += R & ((1 << U) - 1)),
                  te > m)
                ) {
                  (i.msg = "invalid distance too far back"), (u.mode = r);
                  break e;
                }
                if (((R >>>= U), (D -= U), (U = d - h), te > U)) {
                  if (((U = te - U), U > w && u.sane)) {
                    (i.msg = "invalid distance too far back"), (u.mode = r);
                    break e;
                  }
                  if (((ee = 0), (ie = E), F === 0)) {
                    if (((ee += x - U), U < _)) {
                      _ -= U;
                      do Y[d++] = E[ee++];
                      while (--U);
                      (ee = d - te), (ie = Y);
                    }
                  } else if (F < U) {
                    if (((ee += x + F - U), (U -= F), U < _)) {
                      _ -= U;
                      do Y[d++] = E[ee++];
                      while (--U);
                      if (((ee = 0), F < _)) {
                        (U = F), (_ -= U);
                        do Y[d++] = E[ee++];
                        while (--U);
                        (ee = d - te), (ie = Y);
                      }
                    }
                  } else if (((ee += F - U), U < _)) {
                    _ -= U;
                    do Y[d++] = E[ee++];
                    while (--U);
                    (ee = d - te), (ie = Y);
                  }
                  for (; _ > 2; )
                    (Y[d++] = ie[ee++]),
                      (Y[d++] = ie[ee++]),
                      (Y[d++] = ie[ee++]),
                      (_ -= 3);
                  _ && ((Y[d++] = ie[ee++]), _ > 1 && (Y[d++] = ie[ee++]));
                } else {
                  ee = d - te;
                  do
                    (Y[d++] = Y[ee++]),
                      (Y[d++] = Y[ee++]),
                      (Y[d++] = Y[ee++]),
                      (_ -= 3);
                  while (_ > 2);
                  _ && ((Y[d++] = Y[ee++]), _ > 1 && (Y[d++] = Y[ee++]));
                }
              } else if (U & 64) {
                (i.msg = "invalid distance code"), (u.mode = r);
                break e;
              } else {
                M = N[(M & 65535) + (R & ((1 << U) - 1))];
                continue r;
              }
              break;
            }
          } else if (U & 64)
            if (U & 32) {
              u.mode = e;
              break e;
            } else {
              (i.msg = "invalid literal/length code"), (u.mode = r);
              break e;
            }
          else {
            M = L[(M & 65535) + (R & ((1 << U) - 1))];
            continue t;
          }
          break;
        }
      } while (s < c && d < y);
      (_ = D >> 3),
        (s -= _),
        (D -= _ << 3),
        (R &= (1 << D) - 1),
        (i.next_in = s),
        (i.next_out = d),
        (i.avail_in = s < c ? 5 + (c - s) : 5 - (s - c)),
        (i.avail_out = d < y ? 257 + (y - d) : 257 - (d - y)),
        (u.hold = R),
        (u.bits = D);
    }),
    Ff
  );
}
var Cf, p0;
function Ty() {
  if (p0) return Cf;
  p0 = 1;
  var r = vi(),
    e = 15,
    t = 852,
    i = 592,
    a = 0,
    u = 1,
    s = 2,
    c = [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
      67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
    ],
    d = [
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
      19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
    ],
    h = [
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
      769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
    ],
    y = [
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
      24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
    ];
  return (
    (Cf = function (x, w, F, E, R, D, L, N) {
      var q = N.bits,
        K = 0,
        M = 0,
        U = 0,
        _ = 0,
        te = 0,
        ee = 0,
        ie = 0,
        ce = 0,
        Y = 0,
        xe = 0,
        Se,
        de,
        le,
        re,
        ge,
        me = null,
        j = 0,
        J,
        Pe = new r.Buf16(e + 1),
        Re = new r.Buf16(e + 1),
        Be = null,
        Ee = 0,
        Ie,
        we,
        Je;
      for (K = 0; K <= e; K++) Pe[K] = 0;
      for (M = 0; M < E; M++) Pe[w[F + M]]++;
      for (te = q, _ = e; _ >= 1 && Pe[_] === 0; _--);
      if ((te > _ && (te = _), _ === 0))
        return (
          (R[D++] = (1 << 24) | (64 << 16) | 0),
          (R[D++] = (1 << 24) | (64 << 16) | 0),
          (N.bits = 1),
          0
        );
      for (U = 1; U < _ && Pe[U] === 0; U++);
      for (te < U && (te = U), ce = 1, K = 1; K <= e; K++)
        if (((ce <<= 1), (ce -= Pe[K]), ce < 0)) return -1;
      if (ce > 0 && (x === a || _ !== 1)) return -1;
      for (Re[1] = 0, K = 1; K < e; K++) Re[K + 1] = Re[K] + Pe[K];
      for (M = 0; M < E; M++) w[F + M] !== 0 && (L[Re[w[F + M]]++] = M);
      if (
        (x === a
          ? ((me = Be = L), (J = 19))
          : x === u
          ? ((me = c), (j -= 257), (Be = d), (Ee -= 257), (J = 256))
          : ((me = h), (Be = y), (J = -1)),
        (xe = 0),
        (M = 0),
        (K = U),
        (ge = D),
        (ee = te),
        (ie = 0),
        (le = -1),
        (Y = 1 << te),
        (re = Y - 1),
        (x === u && Y > t) || (x === s && Y > i))
      )
        return 1;
      for (;;) {
        (Ie = K - ie),
          L[M] < J
            ? ((we = 0), (Je = L[M]))
            : L[M] > J
            ? ((we = Be[Ee + L[M]]), (Je = me[j + L[M]]))
            : ((we = 96), (Je = 0)),
          (Se = 1 << (K - ie)),
          (de = 1 << ee),
          (U = de);
        do
          (de -= Se),
            (R[ge + (xe >> ie) + de] = (Ie << 24) | (we << 16) | Je | 0);
        while (de !== 0);
        for (Se = 1 << (K - 1); xe & Se; ) Se >>= 1;
        if (
          (Se !== 0 ? ((xe &= Se - 1), (xe += Se)) : (xe = 0),
          M++,
          --Pe[K] === 0)
        ) {
          if (K === _) break;
          K = w[F + L[M]];
        }
        if (K > te && (xe & re) !== le) {
          for (
            ie === 0 && (ie = te), ge += U, ee = K - ie, ce = 1 << ee;
            ee + ie < _ && ((ce -= Pe[ee + ie]), !(ce <= 0));

          )
            ee++, (ce <<= 1);
          if (((Y += 1 << ee), (x === u && Y > t) || (x === s && Y > i)))
            return 1;
          (le = xe & re), (R[le] = (te << 24) | (ee << 16) | (ge - D) | 0);
        }
      }
      return (
        xe !== 0 && (R[ge + xe] = ((K - ie) << 24) | (64 << 16) | 0),
        (N.bits = te),
        0
      );
    }),
    Cf
  );
}
var v0;
function Ry() {
  if (v0) return Xr;
  v0 = 1;
  var r = vi(),
    e = op(),
    t = ap(),
    i = Ey(),
    a = Ty(),
    u = 0,
    s = 1,
    c = 2,
    d = 4,
    h = 5,
    y = 6,
    m = 0,
    x = 1,
    w = 2,
    F = -2,
    E = -3,
    R = -4,
    D = -5,
    L = 8,
    N = 1,
    q = 2,
    K = 3,
    M = 4,
    U = 5,
    _ = 6,
    te = 7,
    ee = 8,
    ie = 9,
    ce = 10,
    Y = 11,
    xe = 12,
    Se = 13,
    de = 14,
    le = 15,
    re = 16,
    ge = 17,
    me = 18,
    j = 19,
    J = 20,
    Pe = 21,
    Re = 22,
    Be = 23,
    Ee = 24,
    Ie = 25,
    we = 26,
    Je = 27,
    mt = 28,
    _t = 29,
    ht = 30,
    Ut = 31,
    rn = 32,
    dr = 852,
    ir = 592,
    St = 15,
    tt = St;
  function or(I) {
    return (
      ((I >>> 24) & 255) +
      ((I >>> 8) & 65280) +
      ((I & 65280) << 8) +
      ((I & 255) << 24)
    );
  }
  function Mr() {
    (this.mode = 0),
      (this.last = !1),
      (this.wrap = 0),
      (this.havedict = !1),
      (this.flags = 0),
      (this.dmax = 0),
      (this.check = 0),
      (this.total = 0),
      (this.head = null),
      (this.wbits = 0),
      (this.wsize = 0),
      (this.whave = 0),
      (this.wnext = 0),
      (this.window = null),
      (this.hold = 0),
      (this.bits = 0),
      (this.length = 0),
      (this.offset = 0),
      (this.extra = 0),
      (this.lencode = null),
      (this.distcode = null),
      (this.lenbits = 0),
      (this.distbits = 0),
      (this.ncode = 0),
      (this.nlen = 0),
      (this.ndist = 0),
      (this.have = 0),
      (this.next = null),
      (this.lens = new r.Buf16(320)),
      (this.work = new r.Buf16(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0);
  }
  function hr(I) {
    var $;
    return !I || !I.state
      ? F
      : (($ = I.state),
        (I.total_in = I.total_out = $.total = 0),
        (I.msg = ""),
        $.wrap && (I.adler = $.wrap & 1),
        ($.mode = N),
        ($.last = 0),
        ($.havedict = 0),
        ($.dmax = 32768),
        ($.head = null),
        ($.hold = 0),
        ($.bits = 0),
        ($.lencode = $.lendyn = new r.Buf32(dr)),
        ($.distcode = $.distdyn = new r.Buf32(ir)),
        ($.sane = 1),
        ($.back = -1),
        m);
  }
  function ar(I) {
    var $;
    return !I || !I.state
      ? F
      : (($ = I.state), ($.wsize = 0), ($.whave = 0), ($.wnext = 0), hr(I));
  }
  function kn(I, $) {
    var b, ne;
    return !I ||
      !I.state ||
      ((ne = I.state),
      $ < 0 ? ((b = 0), ($ = -$)) : ((b = ($ >> 4) + 1), $ < 48 && ($ &= 15)),
      $ && ($ < 8 || $ > 15))
      ? F
      : (ne.window !== null && ne.wbits !== $ && (ne.window = null),
        (ne.wrap = b),
        (ne.wbits = $),
        ar(I));
  }
  function nn(I, $) {
    var b, ne;
    return I
      ? ((ne = new Mr()),
        (I.state = ne),
        (ne.window = null),
        (b = kn(I, $)),
        b !== m && (I.state = null),
        b)
      : F;
  }
  function xr(I) {
    return nn(I, tt);
  }
  var Fn = !0,
    Ur,
    zt;
  function Tr(I) {
    if (Fn) {
      var $;
      for (Ur = new r.Buf32(512), zt = new r.Buf32(32), $ = 0; $ < 144; )
        I.lens[$++] = 8;
      for (; $ < 256; ) I.lens[$++] = 9;
      for (; $ < 280; ) I.lens[$++] = 7;
      for (; $ < 288; ) I.lens[$++] = 8;
      for (a(s, I.lens, 0, 288, Ur, 0, I.work, { bits: 9 }), $ = 0; $ < 32; )
        I.lens[$++] = 5;
      a(c, I.lens, 0, 32, zt, 0, I.work, { bits: 5 }), (Fn = !1);
    }
    (I.lencode = Ur), (I.lenbits = 9), (I.distcode = zt), (I.distbits = 5);
  }
  function Lr(I, $, b, ne) {
    var Me,
      v = I.state;
    return (
      v.window === null &&
        ((v.wsize = 1 << v.wbits),
        (v.wnext = 0),
        (v.whave = 0),
        (v.window = new r.Buf8(v.wsize))),
      ne >= v.wsize
        ? (r.arraySet(v.window, $, b - v.wsize, v.wsize, 0),
          (v.wnext = 0),
          (v.whave = v.wsize))
        : ((Me = v.wsize - v.wnext),
          Me > ne && (Me = ne),
          r.arraySet(v.window, $, b - ne, Me, v.wnext),
          (ne -= Me),
          ne
            ? (r.arraySet(v.window, $, b - ne, ne, 0),
              (v.wnext = ne),
              (v.whave = v.wsize))
            : ((v.wnext += Me),
              v.wnext === v.wsize && (v.wnext = 0),
              v.whave < v.wsize && (v.whave += Me))),
      0
    );
  }
  function C(I, $) {
    var b,
      ne,
      Me,
      v,
      X,
      Q,
      k,
      A,
      G,
      Ae,
      be,
      ke,
      it,
      pr,
      bt = 0,
      rt,
      Nt,
      Dt,
      Lt,
      Cn,
      Ln,
      Ot,
      wr,
      Vt = new r.Buf8(4),
      $t,
      Rr,
      ko = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    if (!I || !I.state || !I.output || (!I.input && I.avail_in !== 0)) return F;
    (b = I.state),
      b.mode === xe && (b.mode = Se),
      (X = I.next_out),
      (Me = I.output),
      (k = I.avail_out),
      (v = I.next_in),
      (ne = I.input),
      (Q = I.avail_in),
      (A = b.hold),
      (G = b.bits),
      (Ae = Q),
      (be = k),
      (wr = m);
    e: for (;;)
      switch (b.mode) {
        case N:
          if (b.wrap === 0) {
            b.mode = Se;
            break;
          }
          for (; G < 16; ) {
            if (Q === 0) break e;
            Q--, (A += ne[v++] << G), (G += 8);
          }
          if (b.wrap & 2 && A === 35615) {
            (b.check = 0),
              (Vt[0] = A & 255),
              (Vt[1] = (A >>> 8) & 255),
              (b.check = t(b.check, Vt, 2, 0)),
              (A = 0),
              (G = 0),
              (b.mode = q);
            break;
          }
          if (
            ((b.flags = 0),
            b.head && (b.head.done = !1),
            !(b.wrap & 1) || (((A & 255) << 8) + (A >> 8)) % 31)
          ) {
            (I.msg = "incorrect header check"), (b.mode = ht);
            break;
          }
          if ((A & 15) !== L) {
            (I.msg = "unknown compression method"), (b.mode = ht);
            break;
          }
          if (((A >>>= 4), (G -= 4), (Ot = (A & 15) + 8), b.wbits === 0))
            b.wbits = Ot;
          else if (Ot > b.wbits) {
            (I.msg = "invalid window size"), (b.mode = ht);
            break;
          }
          (b.dmax = 1 << Ot),
            (I.adler = b.check = 1),
            (b.mode = A & 512 ? ce : xe),
            (A = 0),
            (G = 0);
          break;
        case q:
          for (; G < 16; ) {
            if (Q === 0) break e;
            Q--, (A += ne[v++] << G), (G += 8);
          }
          if (((b.flags = A), (b.flags & 255) !== L)) {
            (I.msg = "unknown compression method"), (b.mode = ht);
            break;
          }
          if (b.flags & 57344) {
            (I.msg = "unknown header flags set"), (b.mode = ht);
            break;
          }
          b.head && (b.head.text = (A >> 8) & 1),
            b.flags & 512 &&
              ((Vt[0] = A & 255),
              (Vt[1] = (A >>> 8) & 255),
              (b.check = t(b.check, Vt, 2, 0))),
            (A = 0),
            (G = 0),
            (b.mode = K);
        case K:
          for (; G < 32; ) {
            if (Q === 0) break e;
            Q--, (A += ne[v++] << G), (G += 8);
          }
          b.head && (b.head.time = A),
            b.flags & 512 &&
              ((Vt[0] = A & 255),
              (Vt[1] = (A >>> 8) & 255),
              (Vt[2] = (A >>> 16) & 255),
              (Vt[3] = (A >>> 24) & 255),
              (b.check = t(b.check, Vt, 4, 0))),
            (A = 0),
            (G = 0),
            (b.mode = M);
        case M:
          for (; G < 16; ) {
            if (Q === 0) break e;
            Q--, (A += ne[v++] << G), (G += 8);
          }
          b.head && ((b.head.xflags = A & 255), (b.head.os = A >> 8)),
            b.flags & 512 &&
              ((Vt[0] = A & 255),
              (Vt[1] = (A >>> 8) & 255),
              (b.check = t(b.check, Vt, 2, 0))),
            (A = 0),
            (G = 0),
            (b.mode = U);
        case U:
          if (b.flags & 1024) {
            for (; G < 16; ) {
              if (Q === 0) break e;
              Q--, (A += ne[v++] << G), (G += 8);
            }
            (b.length = A),
              b.head && (b.head.extra_len = A),
              b.flags & 512 &&
                ((Vt[0] = A & 255),
                (Vt[1] = (A >>> 8) & 255),
                (b.check = t(b.check, Vt, 2, 0))),
              (A = 0),
              (G = 0);
          } else b.head && (b.head.extra = null);
          b.mode = _;
        case _:
          if (
            b.flags & 1024 &&
            ((ke = b.length),
            ke > Q && (ke = Q),
            ke &&
              (b.head &&
                ((Ot = b.head.extra_len - b.length),
                b.head.extra || (b.head.extra = new Array(b.head.extra_len)),
                r.arraySet(b.head.extra, ne, v, ke, Ot)),
              b.flags & 512 && (b.check = t(b.check, ne, ke, v)),
              (Q -= ke),
              (v += ke),
              (b.length -= ke)),
            b.length)
          )
            break e;
          (b.length = 0), (b.mode = te);
        case te:
          if (b.flags & 2048) {
            if (Q === 0) break e;
            ke = 0;
            do
              (Ot = ne[v + ke++]),
                b.head &&
                  Ot &&
                  b.length < 65536 &&
                  (b.head.name += String.fromCharCode(Ot));
            while (Ot && ke < Q);
            if (
              (b.flags & 512 && (b.check = t(b.check, ne, ke, v)),
              (Q -= ke),
              (v += ke),
              Ot)
            )
              break e;
          } else b.head && (b.head.name = null);
          (b.length = 0), (b.mode = ee);
        case ee:
          if (b.flags & 4096) {
            if (Q === 0) break e;
            ke = 0;
            do
              (Ot = ne[v + ke++]),
                b.head &&
                  Ot &&
                  b.length < 65536 &&
                  (b.head.comment += String.fromCharCode(Ot));
            while (Ot && ke < Q);
            if (
              (b.flags & 512 && (b.check = t(b.check, ne, ke, v)),
              (Q -= ke),
              (v += ke),
              Ot)
            )
              break e;
          } else b.head && (b.head.comment = null);
          b.mode = ie;
        case ie:
          if (b.flags & 512) {
            for (; G < 16; ) {
              if (Q === 0) break e;
              Q--, (A += ne[v++] << G), (G += 8);
            }
            if (A !== (b.check & 65535)) {
              (I.msg = "header crc mismatch"), (b.mode = ht);
              break;
            }
            (A = 0), (G = 0);
          }
          b.head && ((b.head.hcrc = (b.flags >> 9) & 1), (b.head.done = !0)),
            (I.adler = b.check = 0),
            (b.mode = xe);
          break;
        case ce:
          for (; G < 32; ) {
            if (Q === 0) break e;
            Q--, (A += ne[v++] << G), (G += 8);
          }
          (I.adler = b.check = or(A)), (A = 0), (G = 0), (b.mode = Y);
        case Y:
          if (b.havedict === 0)
            return (
              (I.next_out = X),
              (I.avail_out = k),
              (I.next_in = v),
              (I.avail_in = Q),
              (b.hold = A),
              (b.bits = G),
              w
            );
          (I.adler = b.check = 1), (b.mode = xe);
        case xe:
          if ($ === h || $ === y) break e;
        case Se:
          if (b.last) {
            (A >>>= G & 7), (G -= G & 7), (b.mode = Je);
            break;
          }
          for (; G < 3; ) {
            if (Q === 0) break e;
            Q--, (A += ne[v++] << G), (G += 8);
          }
          switch (((b.last = A & 1), (A >>>= 1), (G -= 1), A & 3)) {
            case 0:
              b.mode = de;
              break;
            case 1:
              if ((Tr(b), (b.mode = J), $ === y)) {
                (A >>>= 2), (G -= 2);
                break e;
              }
              break;
            case 2:
              b.mode = ge;
              break;
            case 3:
              (I.msg = "invalid block type"), (b.mode = ht);
          }
          (A >>>= 2), (G -= 2);
          break;
        case de:
          for (A >>>= G & 7, G -= G & 7; G < 32; ) {
            if (Q === 0) break e;
            Q--, (A += ne[v++] << G), (G += 8);
          }
          if ((A & 65535) !== ((A >>> 16) ^ 65535)) {
            (I.msg = "invalid stored block lengths"), (b.mode = ht);
            break;
          }
          if (
            ((b.length = A & 65535), (A = 0), (G = 0), (b.mode = le), $ === y)
          )
            break e;
        case le:
          b.mode = re;
        case re:
          if (((ke = b.length), ke)) {
            if ((ke > Q && (ke = Q), ke > k && (ke = k), ke === 0)) break e;
            r.arraySet(Me, ne, v, ke, X),
              (Q -= ke),
              (v += ke),
              (k -= ke),
              (X += ke),
              (b.length -= ke);
            break;
          }
          b.mode = xe;
          break;
        case ge:
          for (; G < 14; ) {
            if (Q === 0) break e;
            Q--, (A += ne[v++] << G), (G += 8);
          }
          if (
            ((b.nlen = (A & 31) + 257),
            (A >>>= 5),
            (G -= 5),
            (b.ndist = (A & 31) + 1),
            (A >>>= 5),
            (G -= 5),
            (b.ncode = (A & 15) + 4),
            (A >>>= 4),
            (G -= 4),
            b.nlen > 286 || b.ndist > 30)
          ) {
            (I.msg = "too many length or distance symbols"), (b.mode = ht);
            break;
          }
          (b.have = 0), (b.mode = me);
        case me:
          for (; b.have < b.ncode; ) {
            for (; G < 3; ) {
              if (Q === 0) break e;
              Q--, (A += ne[v++] << G), (G += 8);
            }
            (b.lens[ko[b.have++]] = A & 7), (A >>>= 3), (G -= 3);
          }
          for (; b.have < 19; ) b.lens[ko[b.have++]] = 0;
          if (
            ((b.lencode = b.lendyn),
            (b.lenbits = 7),
            ($t = { bits: b.lenbits }),
            (wr = a(u, b.lens, 0, 19, b.lencode, 0, b.work, $t)),
            (b.lenbits = $t.bits),
            wr)
          ) {
            (I.msg = "invalid code lengths set"), (b.mode = ht);
            break;
          }
          (b.have = 0), (b.mode = j);
        case j:
          for (; b.have < b.nlen + b.ndist; ) {
            for (
              ;
              (bt = b.lencode[A & ((1 << b.lenbits) - 1)]),
                (rt = bt >>> 24),
                (Nt = (bt >>> 16) & 255),
                (Dt = bt & 65535),
                !(rt <= G);

            ) {
              if (Q === 0) break e;
              Q--, (A += ne[v++] << G), (G += 8);
            }
            if (Dt < 16) (A >>>= rt), (G -= rt), (b.lens[b.have++] = Dt);
            else {
              if (Dt === 16) {
                for (Rr = rt + 2; G < Rr; ) {
                  if (Q === 0) break e;
                  Q--, (A += ne[v++] << G), (G += 8);
                }
                if (((A >>>= rt), (G -= rt), b.have === 0)) {
                  (I.msg = "invalid bit length repeat"), (b.mode = ht);
                  break;
                }
                (Ot = b.lens[b.have - 1]),
                  (ke = 3 + (A & 3)),
                  (A >>>= 2),
                  (G -= 2);
              } else if (Dt === 17) {
                for (Rr = rt + 3; G < Rr; ) {
                  if (Q === 0) break e;
                  Q--, (A += ne[v++] << G), (G += 8);
                }
                (A >>>= rt),
                  (G -= rt),
                  (Ot = 0),
                  (ke = 3 + (A & 7)),
                  (A >>>= 3),
                  (G -= 3);
              } else {
                for (Rr = rt + 7; G < Rr; ) {
                  if (Q === 0) break e;
                  Q--, (A += ne[v++] << G), (G += 8);
                }
                (A >>>= rt),
                  (G -= rt),
                  (Ot = 0),
                  (ke = 11 + (A & 127)),
                  (A >>>= 7),
                  (G -= 7);
              }
              if (b.have + ke > b.nlen + b.ndist) {
                (I.msg = "invalid bit length repeat"), (b.mode = ht);
                break;
              }
              for (; ke--; ) b.lens[b.have++] = Ot;
            }
          }
          if (b.mode === ht) break;
          if (b.lens[256] === 0) {
            (I.msg = "invalid code -- missing end-of-block"), (b.mode = ht);
            break;
          }
          if (
            ((b.lenbits = 9),
            ($t = { bits: b.lenbits }),
            (wr = a(s, b.lens, 0, b.nlen, b.lencode, 0, b.work, $t)),
            (b.lenbits = $t.bits),
            wr)
          ) {
            (I.msg = "invalid literal/lengths set"), (b.mode = ht);
            break;
          }
          if (
            ((b.distbits = 6),
            (b.distcode = b.distdyn),
            ($t = { bits: b.distbits }),
            (wr = a(c, b.lens, b.nlen, b.ndist, b.distcode, 0, b.work, $t)),
            (b.distbits = $t.bits),
            wr)
          ) {
            (I.msg = "invalid distances set"), (b.mode = ht);
            break;
          }
          if (((b.mode = J), $ === y)) break e;
        case J:
          b.mode = Pe;
        case Pe:
          if (Q >= 6 && k >= 258) {
            (I.next_out = X),
              (I.avail_out = k),
              (I.next_in = v),
              (I.avail_in = Q),
              (b.hold = A),
              (b.bits = G),
              i(I, be),
              (X = I.next_out),
              (Me = I.output),
              (k = I.avail_out),
              (v = I.next_in),
              (ne = I.input),
              (Q = I.avail_in),
              (A = b.hold),
              (G = b.bits),
              b.mode === xe && (b.back = -1);
            break;
          }
          for (
            b.back = 0;
            (bt = b.lencode[A & ((1 << b.lenbits) - 1)]),
              (rt = bt >>> 24),
              (Nt = (bt >>> 16) & 255),
              (Dt = bt & 65535),
              !(rt <= G);

          ) {
            if (Q === 0) break e;
            Q--, (A += ne[v++] << G), (G += 8);
          }
          if (Nt && !(Nt & 240)) {
            for (
              Lt = rt, Cn = Nt, Ln = Dt;
              (bt = b.lencode[Ln + ((A & ((1 << (Lt + Cn)) - 1)) >> Lt)]),
                (rt = bt >>> 24),
                (Nt = (bt >>> 16) & 255),
                (Dt = bt & 65535),
                !(Lt + rt <= G);

            ) {
              if (Q === 0) break e;
              Q--, (A += ne[v++] << G), (G += 8);
            }
            (A >>>= Lt), (G -= Lt), (b.back += Lt);
          }
          if (
            ((A >>>= rt), (G -= rt), (b.back += rt), (b.length = Dt), Nt === 0)
          ) {
            b.mode = we;
            break;
          }
          if (Nt & 32) {
            (b.back = -1), (b.mode = xe);
            break;
          }
          if (Nt & 64) {
            (I.msg = "invalid literal/length code"), (b.mode = ht);
            break;
          }
          (b.extra = Nt & 15), (b.mode = Re);
        case Re:
          if (b.extra) {
            for (Rr = b.extra; G < Rr; ) {
              if (Q === 0) break e;
              Q--, (A += ne[v++] << G), (G += 8);
            }
            (b.length += A & ((1 << b.extra) - 1)),
              (A >>>= b.extra),
              (G -= b.extra),
              (b.back += b.extra);
          }
          (b.was = b.length), (b.mode = Be);
        case Be:
          for (
            ;
            (bt = b.distcode[A & ((1 << b.distbits) - 1)]),
              (rt = bt >>> 24),
              (Nt = (bt >>> 16) & 255),
              (Dt = bt & 65535),
              !(rt <= G);

          ) {
            if (Q === 0) break e;
            Q--, (A += ne[v++] << G), (G += 8);
          }
          if (!(Nt & 240)) {
            for (
              Lt = rt, Cn = Nt, Ln = Dt;
              (bt = b.distcode[Ln + ((A & ((1 << (Lt + Cn)) - 1)) >> Lt)]),
                (rt = bt >>> 24),
                (Nt = (bt >>> 16) & 255),
                (Dt = bt & 65535),
                !(Lt + rt <= G);

            ) {
              if (Q === 0) break e;
              Q--, (A += ne[v++] << G), (G += 8);
            }
            (A >>>= Lt), (G -= Lt), (b.back += Lt);
          }
          if (((A >>>= rt), (G -= rt), (b.back += rt), Nt & 64)) {
            (I.msg = "invalid distance code"), (b.mode = ht);
            break;
          }
          (b.offset = Dt), (b.extra = Nt & 15), (b.mode = Ee);
        case Ee:
          if (b.extra) {
            for (Rr = b.extra; G < Rr; ) {
              if (Q === 0) break e;
              Q--, (A += ne[v++] << G), (G += 8);
            }
            (b.offset += A & ((1 << b.extra) - 1)),
              (A >>>= b.extra),
              (G -= b.extra),
              (b.back += b.extra);
          }
          if (b.offset > b.dmax) {
            (I.msg = "invalid distance too far back"), (b.mode = ht);
            break;
          }
          b.mode = Ie;
        case Ie:
          if (k === 0) break e;
          if (((ke = be - k), b.offset > ke)) {
            if (((ke = b.offset - ke), ke > b.whave && b.sane)) {
              (I.msg = "invalid distance too far back"), (b.mode = ht);
              break;
            }
            ke > b.wnext
              ? ((ke -= b.wnext), (it = b.wsize - ke))
              : (it = b.wnext - ke),
              ke > b.length && (ke = b.length),
              (pr = b.window);
          } else (pr = Me), (it = X - b.offset), (ke = b.length);
          ke > k && (ke = k), (k -= ke), (b.length -= ke);
          do Me[X++] = pr[it++];
          while (--ke);
          b.length === 0 && (b.mode = Pe);
          break;
        case we:
          if (k === 0) break e;
          (Me[X++] = b.length), k--, (b.mode = Pe);
          break;
        case Je:
          if (b.wrap) {
            for (; G < 32; ) {
              if (Q === 0) break e;
              Q--, (A |= ne[v++] << G), (G += 8);
            }
            if (
              ((be -= k),
              (I.total_out += be),
              (b.total += be),
              be &&
                (I.adler = b.check =
                  b.flags
                    ? t(b.check, Me, be, X - be)
                    : e(b.check, Me, be, X - be)),
              (be = k),
              (b.flags ? A : or(A)) !== b.check)
            ) {
              (I.msg = "incorrect data check"), (b.mode = ht);
              break;
            }
            (A = 0), (G = 0);
          }
          b.mode = mt;
        case mt:
          if (b.wrap && b.flags) {
            for (; G < 32; ) {
              if (Q === 0) break e;
              Q--, (A += ne[v++] << G), (G += 8);
            }
            if (A !== (b.total & 4294967295)) {
              (I.msg = "incorrect length check"), (b.mode = ht);
              break;
            }
            (A = 0), (G = 0);
          }
          b.mode = _t;
        case _t:
          wr = x;
          break e;
        case ht:
          wr = E;
          break e;
        case Ut:
          return R;
        case rn:
        default:
          return F;
      }
    return (
      (I.next_out = X),
      (I.avail_out = k),
      (I.next_in = v),
      (I.avail_in = Q),
      (b.hold = A),
      (b.bits = G),
      (b.wsize ||
        (be !== I.avail_out && b.mode < ht && (b.mode < Je || $ !== d))) &&
        Lr(I, I.output, I.next_out, be - I.avail_out),
      (Ae -= I.avail_in),
      (be -= I.avail_out),
      (I.total_in += Ae),
      (I.total_out += be),
      (b.total += be),
      b.wrap &&
        be &&
        (I.adler = b.check =
          b.flags
            ? t(b.check, Me, be, I.next_out - be)
            : e(b.check, Me, be, I.next_out - be)),
      (I.data_type =
        b.bits +
        (b.last ? 64 : 0) +
        (b.mode === xe ? 128 : 0) +
        (b.mode === J || b.mode === le ? 256 : 0)),
      ((Ae === 0 && be === 0) || $ === d) && wr === m && (wr = D),
      wr
    );
  }
  function oe(I) {
    if (!I || !I.state) return F;
    var $ = I.state;
    return $.window && ($.window = null), (I.state = null), m;
  }
  function he(I, $) {
    var b;
    return !I || !I.state || ((b = I.state), !(b.wrap & 2))
      ? F
      : ((b.head = $), ($.done = !1), m);
  }
  function Ce(I, $) {
    var b = $.length,
      ne,
      Me,
      v;
    return !I || !I.state || ((ne = I.state), ne.wrap !== 0 && ne.mode !== Y)
      ? F
      : ne.mode === Y && ((Me = 1), (Me = e(Me, $, b, 0)), Me !== ne.check)
      ? E
      : ((v = Lr(I, $, b, b)),
        v ? ((ne.mode = Ut), R) : ((ne.havedict = 1), m));
  }
  return (
    (Xr.inflateReset = ar),
    (Xr.inflateReset2 = kn),
    (Xr.inflateResetKeep = hr),
    (Xr.inflateInit = xr),
    (Xr.inflateInit2 = nn),
    (Xr.inflate = C),
    (Xr.inflateEnd = oe),
    (Xr.inflateGetHeader = he),
    (Xr.inflateSetDictionary = Ce),
    (Xr.inflateInfo = "pako inflate (from Nodeca project)"),
    Xr
  );
}
var Pf, g0;
function sp() {
  return (
    g0 ||
      ((g0 = 1),
      (Pf = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
      })),
    Pf
  );
}
var Ef, y0;
function Dy() {
  if (y0) return Ef;
  y0 = 1;
  function r() {
    (this.text = 0),
      (this.time = 0),
      (this.xflags = 0),
      (this.os = 0),
      (this.extra = null),
      (this.extra_len = 0),
      (this.name = ""),
      (this.comment = ""),
      (this.hcrc = 0),
      (this.done = !1);
  }
  return (Ef = r), Ef;
}
var m0;
function Oy() {
  if (m0) return so;
  m0 = 1;
  var r = Ry(),
    e = vi(),
    t = up(),
    i = sp(),
    a = Yf(),
    u = lp(),
    s = Dy(),
    c = Object.prototype.toString;
  function d(m) {
    if (!(this instanceof d)) return new d(m);
    this.options = e.assign(
      { chunkSize: 16384, windowBits: 0, to: "" },
      m || {}
    );
    var x = this.options;
    x.raw &&
      x.windowBits >= 0 &&
      x.windowBits < 16 &&
      ((x.windowBits = -x.windowBits),
      x.windowBits === 0 && (x.windowBits = -15)),
      x.windowBits >= 0 &&
        x.windowBits < 16 &&
        !(m && m.windowBits) &&
        (x.windowBits += 32),
      x.windowBits > 15 &&
        x.windowBits < 48 &&
        (x.windowBits & 15 || (x.windowBits |= 15)),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new u()),
      (this.strm.avail_out = 0);
    var w = r.inflateInit2(this.strm, x.windowBits);
    if (w !== i.Z_OK) throw new Error(a[w]);
    if (
      ((this.header = new s()),
      r.inflateGetHeader(this.strm, this.header),
      x.dictionary &&
        (typeof x.dictionary == "string"
          ? (x.dictionary = t.string2buf(x.dictionary))
          : c.call(x.dictionary) === "[object ArrayBuffer]" &&
            (x.dictionary = new Uint8Array(x.dictionary)),
        x.raw &&
          ((w = r.inflateSetDictionary(this.strm, x.dictionary)),
          w !== i.Z_OK)))
    )
      throw new Error(a[w]);
  }
  (d.prototype.push = function (m, x) {
    var w = this.strm,
      F = this.options.chunkSize,
      E = this.options.dictionary,
      R,
      D,
      L,
      N,
      q,
      K = !1;
    if (this.ended) return !1;
    (D = x === ~~x ? x : x === !0 ? i.Z_FINISH : i.Z_NO_FLUSH),
      typeof m == "string"
        ? (w.input = t.binstring2buf(m))
        : c.call(m) === "[object ArrayBuffer]"
        ? (w.input = new Uint8Array(m))
        : (w.input = m),
      (w.next_in = 0),
      (w.avail_in = w.input.length);
    do {
      if (
        (w.avail_out === 0 &&
          ((w.output = new e.Buf8(F)), (w.next_out = 0), (w.avail_out = F)),
        (R = r.inflate(w, i.Z_NO_FLUSH)),
        R === i.Z_NEED_DICT && E && (R = r.inflateSetDictionary(this.strm, E)),
        R === i.Z_BUF_ERROR && K === !0 && ((R = i.Z_OK), (K = !1)),
        R !== i.Z_STREAM_END && R !== i.Z_OK)
      )
        return this.onEnd(R), (this.ended = !0), !1;
      w.next_out &&
        (w.avail_out === 0 ||
          R === i.Z_STREAM_END ||
          (w.avail_in === 0 && (D === i.Z_FINISH || D === i.Z_SYNC_FLUSH))) &&
        (this.options.to === "string"
          ? ((L = t.utf8border(w.output, w.next_out)),
            (N = w.next_out - L),
            (q = t.buf2string(w.output, L)),
            (w.next_out = N),
            (w.avail_out = F - N),
            N && e.arraySet(w.output, w.output, L, N, 0),
            this.onData(q))
          : this.onData(e.shrinkBuf(w.output, w.next_out))),
        w.avail_in === 0 && w.avail_out === 0 && (K = !0);
    } while ((w.avail_in > 0 || w.avail_out === 0) && R !== i.Z_STREAM_END);
    return (
      R === i.Z_STREAM_END && (D = i.Z_FINISH),
      D === i.Z_FINISH
        ? ((R = r.inflateEnd(this.strm)),
          this.onEnd(R),
          (this.ended = !0),
          R === i.Z_OK)
        : (D === i.Z_SYNC_FLUSH && (this.onEnd(i.Z_OK), (w.avail_out = 0)), !0)
    );
  }),
    (d.prototype.onData = function (m) {
      this.chunks.push(m);
    }),
    (d.prototype.onEnd = function (m) {
      m === i.Z_OK &&
        (this.options.to === "string"
          ? (this.result = this.chunks.join(""))
          : (this.result = e.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = m),
        (this.msg = this.strm.msg);
    });
  function h(m, x) {
    var w = new d(x);
    if ((w.push(m, !0), w.err)) throw w.msg || a[w.err];
    return w.result;
  }
  function y(m, x) {
    return (x = x || {}), (x.raw = !0), h(m, x);
  }
  return (
    (so.Inflate = d), (so.inflate = h), (so.inflateRaw = y), (so.ungzip = h), so
  );
}
var Tf, x0;
function Ay() {
  if (x0) return Tf;
  x0 = 1;
  var r = vi().assign,
    e = Py(),
    t = Oy(),
    i = sp(),
    a = {};
  return r(a, e, t, i), (Tf = a), Tf;
}
var zy = Ay();
const yl = Wg(zy);
var w0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  da = new Uint8Array(256);
for (var Vu = 0; Vu < w0.length; Vu++) da[w0.charCodeAt(Vu)] = Vu;
var Ny = function (r) {
    var e = r.length * 0.75,
      t = r.length,
      i,
      a = 0,
      u,
      s,
      c,
      d;
    r[r.length - 1] === "=" && (e--, r[r.length - 2] === "=" && e--);
    var h = new Uint8Array(e);
    for (i = 0; i < t; i += 4)
      (u = da[r.charCodeAt(i)]),
        (s = da[r.charCodeAt(i + 1)]),
        (c = da[r.charCodeAt(i + 2)]),
        (d = da[r.charCodeAt(i + 3)]),
        (h[a++] = (u << 2) | (s >> 4)),
        (h[a++] = ((s & 15) << 4) | (c >> 2)),
        (h[a++] = ((c & 3) << 6) | (d & 63));
    return h;
  },
  jy = function (r) {
    for (var e = "", t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
    return e;
  },
  fp = function (r) {
    return jy(yl.inflate(Ny(r)));
  },
  By = function (r, e, t) {
    for (var i = "", a = 0, u = e - r.length; a < u; a++) i += t;
    return i + r;
  };
const Iy =
    "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",
  My =
    "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",
  Uy =
    "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",
  Ly =
    "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",
  Vy = JSON.parse(
    '"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"'
  ),
  Wy = JSON.parse(
    '"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"'
  ),
  qy = JSON.parse(
    '"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"'
  ),
  Ky = JSON.parse(
    '"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"'
  ),
  Hy = JSON.parse(
    '"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"'
  ),
  Gy = JSON.parse(
    '"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"'
  ),
  Xy = JSON.parse(
    '"eJyNnV1320aWtf+KF6/mXcvpsWTJsnPnTtLdsdNx7ESGMb36gpZgmSNKcEhRCjNr/vsLgqhz9tlnFz03XsaziwDqVNWuDxSg/5l919/cdLd3s29n7/+5Wc+vukcnZ2fHZ49On5+dHs8ez/7W3979PL/phgS/LW669Tc/3s2Xi4udslkuUXnkyvxmsdyiNsCmW1x93l3nn93lYnMzkH36l7dXyyHdN0enfzkd2Ppviz+6y18WdxefZ9/erTbd49l3n+er+cVdt/q12/3+hz/uutvL7vJdfzO/ne7wr3/t/5h9+69vjp69ePzN8dHZ46MnR08eP3/+9N+PZ+dD4tVycdv90q8Xd4v+dnexJ09A+O3z4uL6tluvZ9+eDvx9t1qPyWZPnhz/5cmTJ8NFfu7vFhe77HzXf9mudjl59B8X/+/R0Yvnp493/56N/77Y/fviyfjv0/Hfs0cvL/uP3aNft+u77maI0e1Fv/rSr+Z33eVfHj16uVw+erc72/rRu27dre4Hug/mYv1o/uhuNb/sbuar60f9p0c/LW77u+2X7pt/dMOvXv790fz28j/71aPF8OP15uN6cbmYrxbd+i/D7f4wXOZycXv168XnbiyF8S5+vRt+Ml9dFnVI+N38yz+mgnl2+vTx7EM5Ojk5ejx7ub7YhXo1iM8H8fvOjscgz369u/xHM/v26fH43/fDf8+e7cvrn93danExBPRf/zNrPsy+Pd4F9ufhRtZf5kMc//fxHj99+nSPuz8ulvMb4yfHU/LfN/0QqY9LU06fTMrt5ubjrqCubrN22S+X85Xx5+UqX7rVxa6yF+Hs7PlemN8M0nqITr6z8Q7GEs/al/mqu112n2pS/Jnd3ny9O+P62pRnZ6fTr5abtVGL2cXQRuf5Ep+3Xz53tzn5kJVF7zk5LplcL+frz/lu/uxWfab9bZfh3YNIefd51Ym0n/rNStDFvUi7XvwhYHffibLtdExvF7eiWl30y/4243V3s4iSlcByZwOJdr9v5suMr1bd0JBFNn/fdOvRaoryolToud/7s6OjPXuZ0V8dPTvbo++82h4f79H3+Yc/ZPS3/MO/Z/SPHKYfvT2enOzRq3xfrz37p8/26Kfc9P6Zf/hzvok3+e5/yane5lTvchn8mu/rt3yu83yu9/num5zqQz59m9F/eVSH3mFEH4fO7Lq7C7ZhbfTjoMV2yr+LnnJS8jFfXywWF4vVxeYmh2KzM+310POIJjL6W7gZ96mMPuYqcSH8N6fqcl4/5R9eZfQ5/3CR0X/nK17nVMtc/iJawnSE7X0RrT4X2iqjdb4vEftNztB9bkIPOdUfGW3zTfzpqaxoh/rVUa08LbVyVUlPPdzJEdTGu8XyssuX3nf1l/2DiHPonb0nuBvHaV45jkr+P+0Ghuiz9put6js+LfvVQvB1VznLxWY1dOMXHsDjoxNoNuvFOHhNrb6MWnSzutosBuWmv9Mjh508nvgrcmVw8Wmh8i360WEoqIYDl/OrK9Wl7TkOxWjAsSu7btV52z899rHQ/Go1/wKmVn76cZhEdCKXHt6P8/WBCB9WKyGyAoj6c6uhy+Xiy3rhDXWYLnhW7z73mzBUTL1+qNtecKv5vfDf+cXmTo1cRiv/tOz+yBo1rIJv5hcrNdr5uOrUhS/7u/lFaHAuLYaCxACYssJm6Dc7TOmGEbcYom5ur+arzc1yvhGX6a+GUea1ON0c8+HFchNqrPGXPuY5PptqQL+6/DQM8sKo0IcnsYf10UfkL4p/vvELPD16Yhe4GVxus8QrmC/PRXd3uWvw67XovJaVkXkfuZ29F0PooW0O0+GhzotC+zGVp3fLsfp51x8rjXdLskT9dLHofGSU7sDG0JeL+8WlKKQ23pkPlkXL8NuOP/JRnviRd4/UBK2jHudd1EYgq/mUfr3QThynMPidU2Pw31RKaEM/8BlAuojPFwaDgAlInGBSRs+emTiteIhLkeX4mJDqgeUyxMVnAuoGvHnU6mh0VB/lq7P5NKp2tuiqEM7sk15DQjaBkyH60DVe/eRsusqy/7O7vRKXfxcv4TM4lUmvHAcbiRC9eXEvYiPZeCNQ1JRXn/vkyNllfvvcr0Su3tDVPQyVUvuVeLmry0rYzukCHrHYs4XFjfVmHOGsxP3GKuhRrPFoq2aCN5vl3eLLcivuizLolTwWR+n4hrHW3WK+vFx8+pTLaptt2JpgvI5X2EOV5YeD1exAr1OXLioFfVuzQa4x7ilzORr6kfoVXHobBgy4/mbTn1V/3d3iJMjMcdVdLdZx2OtNtDLw+lG0C5uJbIZWHeYiHmwaQFrDrESm56pu7bJSpf6LTPvkRRm4jqtccQ3McvnDnRihfFc1wKXyLW9uFZPpqr1jrRd8WRs+HKiVlQD/WWsatZt6UyuRWtdT89x17cr1Lv7NwWEJ21IZF3TLO7HYcxdM2gvpoT/giPUhzs1G5IT6cAuVHGd6W6DQ+yw1jnDOTtHHhwq8GiqyuLVf0wymKMtYI33VU/a/NsOIBffiebmN8kBHeWJ9PvZjZe74Y627/Im6vxKGIWif50tYeCttfDcziQ3ci+KQyd/GUZPXtK+UHw2DLAi17vkqeilmaCpVVah6EPqrHO5aBdYzHKtgg0uoxx09NS13Qn0Tm5j+5LRMsIdu80L57PeVsebq4Gj351g+fruV0e67w9VaXsustXLOl1WP1rOkN5WFwz8PjCd/qPX2dG1fHZZZsfFYGAj42Q42hXgLvrh78ErL/mpX3re9GMX3dS/dZKk05eFUlZZ8dXDO0N2Jhw5/Vqrv7cFufAh56iHc8mtt/IfN7kHkvx/PXner21/mi9Xu8fG/Zi93j6lnj795+uTfj6ejvXsEtL/PiCZPR/j33dGpHe1dJSDMGApvhqMTO8+bcguAoHIEbkUV6L79BxScJyhTyALbLw4FtG84iN6Go992OTqzI4sZoJh7E86Ho1M7z3nJPaCQe+CQe6Al94Ao96BY7oFN7Tqw0U6QvB+Ojp5YETbD4Qs7andJ/ciy5Ahv3SjsB8AAbYajY7vwppwNUAgQcLgK0BIgQBQgUCxAwCxAwKYAObkPWXsIR9t4lOOzzfGZEmF7NUSN1ji1XOfcfIsCbdgQNWTjsjUXFZq0IWrXxlXjNjG3cJOomRvXbd1kbvAmUKs3Tk2/8LcZgQkYIidwruygqOAJhsgYjCt3MDFbhEnkE8a1WZjMjmEC24YJ0TsKRgMpDFykoDa3APYT4/VGo5ylaGAvhshjjCujMTG7jUlkOca175jM5mMCO5AJ0YYKvs8RechoK1Al1MKfJptAfzJE/mSc/Mk5+1NRwJ8MkT8Zl/5UVPAnQ+RPxpU/mZj9ySTyJ+Pan0xmfzKB/Mk4+VPhbzMCfzJE/uRc+VNRwZ8MkT8ZV/5kYvYnk8ifjGt/Mpn9yQT2JxOiPxWM/lQY+FNBbW4B7E/G641G+VPRwJ8MkT8ZV/5kYvYnk8ifjGt/Mpn9yQT2JxOiPxV8nyPykNFWoEqohT9haNCkIieniiLZFYnsWUEG44qc3CuK0sJCEvCxyMnMoqgcLabIthZ18rYoaoOLadjlokpWF0XyuyC+rXBwvsjJ/khUHhiSgBFGTm4YRWWJMUX2xaiTOUZRO2RMwzYZVfbKqEbDDBq6ZhDAOgNvKy2UTTSKX2neyk5DAvDUyMlYo6jcNabIFht18tkoarONadhxo8q2G9XovUG7rwTyocK3NX6o1IQpO0FLRkqGjBLZcZDYjEEEK0ZKRoyStGFIACaMlCwYJWXAqGf7RZXMFyVtvZiCjRc1sl2UyHRBeispGC5SstsgKbOFBGC1SMloUVI2i3o2WVTJYlHSBosp2F5RY3NFLVorKGisgMFWgbayhbGlonSwaSo7BRnMFClZKUrKSFHPNooqmShK2kIxBRsoamyfqEXzBOVehuxB0q2m9XIRljnlHv3SEJmlcXJK52yTRQGPNEQGaVy6Y1HBGg2RLxpXpmhidkSTyA6Nay80mY3QBHJB42SBhb/NCMzPEDmfc2V7RQXPM0SGZ1y5nYnZ6kwinzOuTc5kdjgT2N5MiN5WMBpbYeBqBbW5BbCfGa83GuVkRQMbM0QeZlwZmInZvUwi6zKufctkNi0T2LFMiHZV8H2OyENGW4EqoRb+VO4VDcoZOZQLZFEgsEeZBCbljFzKBWlTJoNPOSOjckE5lavZqlwjr3JBm5Xr7FaukF25QH5lwlvBwLGckWWBoDzLZDAtZ+RaLijbcjX7lmtkXC5o53KdrcsV9i5XonkZR/cyCPZlrBUthA3MhQPNSlmYieBhzsjEXFAu5mq2MdfIx1zQRuY6O5krbGWuRC8zfi+C8yDYVrFa5IWhlRtDQ3NGhuYCGRoIbGgmgaE5I0NzQRqayWBozsjQXFCG5mo2NNfI0FzQhuY6G5orZGgukKGZ8FYwMDRnZGggKEMzGQzNGRmaC8rQXM2G5hoZmgva0FxnQ3OFDc2VaGjG0dAMgqEZa0ULYUNz4UCzUoZmIhiaMzI0F5ShuZoNzTUyNBe0obnOhuYKG5or0dCM34vgPAi2VawWeWFoq+n7JO5AhZCZFUxWZpiNbBLAxgohEytYWtgkgoEVQvZVsDKvomXrKgoZV8HatorKplU4WVbBZFgTfpsImFUhZFWGlVFNIthUIWRSBSuLKlo2qKKQPRWszamobE2FszEVHm1pomhKEwJLmkibajjbUcHVJqGsaJLAiAohGypYmVDRsgUVhQyoYG0/RWXzKZytp/BoPBO9T2F4SGSbiY6tsJupEaDfGCLDMU6O45wtpyjgOYbIdIxL1ykq2I4h8h3jynhMzM5jElmPce09JrP5mEDuY5zsp/C3GYEBGSIHcq4sqKjgQYbIhIwrFzIx25BJ5EPGtRGZzE5kAluRCdGLCkYzKgzcqKA2twD2I+P1RqMcqWhgSYbIk4wrUzIxu5JJZEvGtS+ZzMZkAjuTCdGaCr7PEXnIaCtQJdTZn/460Je7K/uRBdFR8RJAMaTOMZpOLZCOPEjOPD7OSmiclIbt6HyslHZUcgAo3C5wuF2g5XYBUZGDYhkBZhkBNmVkT76f4r733+8x7oCih3+f4g4cMgK0ZASQ3S4wu11g0+0CKXF39N689PvJBvyojUexF/me2v1EJ9PFyBii8BinGBlXgTIxR8skCplxjpsJHDwTYgQNUxgLf5/D0GTUCkShNS7iO77DGONbEMe3cI5v4TK+RRTxLRLHt/AU3yKk+BaB4lswx3fi73MYmoxagTi+haf4/m0K7dHRqR2aFwErIUUWDQoEdCjAZlHA3IkAuhUBLF4EqIQN2G6keeZHJSuASk4AhYwAh3wALdkAZLkAZpkANuUBSMmCo/0HLodMPTUUE3Q5U10Z+iHSmepkpuCF24BzXjuR107kdbGrYn5kFdJRHIw7xzrq1Ibgjnx47czuxFnvw7/x0LtaZ9TXuhA6W8fe2zpL3a1L0N86LJMAZFajnU1fMA0VYmWDofEoDp1GVCoEojAN2Auvpua/N4NX2PoBlSYDSMykXlHTBxrnT69CwwfmhedsajJA4iTp1dTon1p+5rFbeIWNHpDoDF5Rowcau4BXodEDI+N/BY0eSLT7V9Doj4108SiOcF9hm0eUR7ivqM0jhTYPOA58X4U2D4wGvq+mlgZH+Z77yg328gb7fCfcyEAR92hNDFAcib/CBuZoEwpnkyvUplJ7NrL2bHLt4fkYKKJebUS92oR69Xq2XwnZT33HoziLH5GYwI88zd1HGqftI5Iz9lGhyfrISvgBlfA76kIeuhjr11jREeXwv6aKjhQqOuBYKq9DRQdGsX89VfQTy0EfLfN1qujAkz++xooOSC4tvQ4VHVhcUHqNFd3RJh7lu95U7noj73qT75prNSjirjfk96+hVjvZxqN819t8d6Grw3ZBAjURUlVroSS54VACakOk6uZEibhlkUyNjFRqb1GFyk8CtUJSqUGyKtomJcnNlBPkFkspqPGSyu2YZG7SUe5rFYkbOqmq9VCSr1VVdgJSdfOiRNzSSCarIJVcI6qbqnAwMNJWKMnXAsNmQ+r/JTDJgkhmNyI5GlMUt1XhYGCyc/002y/tH/uRDfMAhZG8C7v1gv24fnfUhKM2pGzjsvOI0qLyjorl7J+mDD+1RJZLQNjE9xTfuT8mRJmsvHNPKmQX30cn1OYfcu7V++gkqTjga9iUR46Ieg17kmKVgOCQQCFiVQUqpoFwRaGpCW3tVBxAUnMYYwIVzNygZHw4sPUGNSWY7A4Da4hC6lwFs6gQxoKajNr8Qw6a8RyuIqlAFW2b88jBMZ7C8vNseoZyZkd2d47sGYqjOIFzjnlwahM4Rz5Nc+ZTSWflGYoTm7ntUWlSLwWivBinDBlXuTIxZ80kyp9xzqQJnFMTYnYNU57xYQMjynN62MBc5Vk9bGCJ8pwfNrDAeeaHDYw5z6GFv6wKnP+ochSiKmMRk4iIxAQcl6im6EQ5xSjKFKkoUrzKg9OXAlGMjFN0jKu4mJgjYhLFwjhHwQTOvwkx54Zjnt9M2d178BvMKaCSSUBxhuc8PXN+g7kC5HMzZ747wVnZmODEJmaGfrNR4BvsnBCFfsmFsUuyoyYcfQgp26D59gZHaUb7Bo12uttktMwp1tpoWcxRT0bLnOOfjZaFWBLJaIlDmaSxauKqdMJYNaImow/5h21OxcWmhq+TFF7nhgKMnEoxilSUUVTlGVPkQo06lWwUuXijymUc1VjQUaPSTh+eOBHR43I/9OEJleR9pVSaCv9QOU9bSc+1ov79hb0OL61CxUBK1QIlqhQoqSqBeq4QqFJ1QIkrA2pcFVCLFQEVqgb0MvxJihNXgfrL8DnBexn5RtIP8gytTMvFXntHfK+W1wChxA1RcRunsjauCtrEXMomUREb5/I1gQvXhFiyhqlY8R3fkxgGLtDKO76kvs/xbDL6kH/Y5lRcfPKV2L0U17iwCFmhkmSZCpRlVa6cJhcvp6BSZpkLm3Uuc9Zj0bNKNYBkqAisUH1IsqoWlOh9tcSaqvKhera2+huuOSznCmTvzEHVcUaVxgWqLi6oiuJqriKuUeVwgauFK1whXIlVwTlVgvDm7AlFhAu+9uYsy+9FdBvBPojftiIdF6p+wXSvldUdKE1DVJjGqSyNq6I0MZekSVSQxrkcTeBiNCGWomEqRFzNO4lh4CKsrOaR+j7Hs8noQ/5hm1Nx4akFvknCSfqUtTRJZ05lpyfpLOayS5N05lx2eZLOQiy7NEknDmWXXl1IXJUd7uuneDYZfcg/bHMqLju503+UfpmK7YUfld8CKoUFKJQTcLgC0FI6gKxggFmZAJuKA0gpCUe7zUbP/ajkAFDJAaCQA+CQA6AlB4AsB8AsB8CmHAApOXBE+yR3KCbocqbsyTUinalOZio8mAac89qJvHYir308yvfcV26wlzfY5zvhp8agiHu058OAcvB5U+LbGb7RMB7FNxpGJN5oGHl6o2Gk8Y2GEck3GkaF3mgYGb3RMLLwRsO7Gb4+Nh7F57UjEk+vR54e3o40PqcekXw4PSr0RHpk8fn8iOJD+XdTrOEo3/V55a7P5V2f57vmWIMi7vqcHp6/g1g7GV/Eel6OmnDUxiOrPY6wluxpWfiCMjREITGu4mJiDo5JFCHjOkwmc6xMoGI2TmVd+LlAlSzKojexnkWuBMYPZzFVBxO4TpgQKwYukVLBNhm1AlFlUeuhk1QeMkGNMUThNK7CaWIOp0kUTuM6nCZzOE2gGmOcakzh5wJVsihrjIn1LHKNMX44i6nGmMA1xoRYY/D9IyrYJqNWIKox6v2jIqWthOUm9FZCrcoAV7cS6gQc7INbCXWiFHi9lVCrXM+Cel4VDgZG17yY5GuBSbUwqv+XwOQaGeVUL6NMtTPtupFVqakJbVXgWlvddbNPMEy09hPMJ3YUZzkjsmmlI7HxdeRpLjTSuMV1RLRldWT00vbIwvvaI4n7VX+bmpzn502MwW+pcQGXAbFmBIiHla74sNKZvbfjyF7bMbSbmbw4tiObITqyGaKjOEN0jjNEpzZDdOQzRGc+Q3RWZohObIZo6KJfwirAnuxnXGcnhcRfdDmXNuFCFGqXc6xdQGHCBSexSufIK50zkfnP2y+fu9uQjUXIpr2rBoiWPnasD2ftc977SnH2sjj7XJw8cQNFFLRN3ADlUrWJm+d+FbK1yrmnl8n2SLxMthPW3c2i1JxnRjchzSZfYiMWsUae1q9GGpeuRsRb6V2h9ayRifLchFWsHXkIYdrGo5IHQLjLbk9xv9bkaGm/FnPyY71fi8XszGm/FnP26Lxfi4Xo1mm/FnHw7TTEZq4cXA2xWSIvrw2xWWZXT0Ns5uTvhYPJGyIfME52b1yZhInZKUwiuzDOzmACW6EJsTMwTN5ROHULjkPfULA4AfcSxqmrcC76CxNzp+FS7jlMo+7DOPchJtSix71J4YscIu5XjLMZFaHPl+NuxvihaiQ6HJMq1ajS9Zhcq2XcCRmv1Cbujgpf5Whwx2SceifnqosqquinirTJqbnHMq66LRNz32USdWDGdS9mMndlJtSqEHVqBT/kiG8Foj7OuOjo0ibd0hvoTbpa5a7vwCZdnUR0g3qTrlZTl1jZpKtl6h71Jl2pYlepVxW0KrvN6qqCTsBd6MFVBZ0odad6VUGr3LUGFTvYKLAPRpU726hKr4xJhGPGBOybUU32GOXUmUSZOuQospEGlTtnEmMXnV4FladM3bV+FbSiqq67+ipoJYHoxvWroPr3qUuvvAoqz52696AuaqFOXX1Uk1vHdzBrN5M6/6h+vVqrgUBMcLBa1wYFMdHhup8GCFE9WLvTYCGoq1o808Ahqjx8IFUOIkIaNZSIr47WfpmGFVGVg4uYRAwxYgIeaES1MtyIidKgI8qHKzMPQIL4UCvLbVXgIUn99b8xwfk0GtkvzZ7jEARQ/L7NeRpsAE+L0ec4rABEK8rnYQABLKwdn+NQwVFx7v0HSs5n6ZslZZEd85re0WBOudbvaLCY85/e0WDOkcjvaLAQY5Le0SBO0SmYQ5RehZhOo1+FkCJF7MCrEDJFjp1+FUKKHMXKqxBSjfHUr0IokSIbNA4vvU4wnU69TiAkCmz1dQKh56Cq1wmExAGVrxMILQZTvU6QJQokKBxG3KA/nSdt0GdO0dMb9FnMcUsb9JlzxPIGfRZirNIGfeIUpYI5RGIf/HSi2j74ikxxO7gPvpImR7G2D74ic0yr++AreoxwbR+8linepHLYw+7x6YR593gSKMiV3eNJzYHNu8eTwMEUu8eTEgOYd4+zQEEzzuGyv+cA4XJG4XKBwuWCCperOVyuUbhc4HC5wuFyJYbLOYXLBAqXcQ7X9DV6CFYhFKqCKVAFqzAVLQepKBSigjlAhXN4Co/BKZRCM2EKzEQpLO+nkDx7YkclHIBKKACFMACHEAAt2QdkWQdm2QY2ZRlIya6j3fLWUz8qOQAUPxnlPH23YqT26SdH/DU9V/xLUM7KHBSQfZLR0Li3+OjIDm0pDph/FdcZfRXXBVyKA+xfxXUGX8V1CF/FdWhfxXXkX8U1Fqen76H6HR2/KIh+04kM23JPYJUMhy/NAoX1HExtn5p15J+adaaiYKs0p5a/3dLMfo44HsVp44hinXOe5pAjtTrnyGuWM/8QrrE+3msvwtrXQtjrOtOLOpM+PwuSqk7++Vlgour4Tm+vKbji4RndxKMc8rigARwrilOrEI4oj6B4VXEmCqMsR+xJE+y1yfbaZHttKvbaSHttsr02wl4bYa9Nstcm22sz2eu+u2jQXgGJr642ZK9A41dXG2GvoNBXVxu0V0Dxq6vNDJf2m1laz29maRG/Sd4KPK1rNrO0Rt/M8sJ8M8ur8c2Ml+CbWVp3b5KpNmCqnib+osu5pAX0Jhkq8LRU3rCfQuK4KN7M8kp4M8vL3w266f6DU80MF7qbWVrdbmZ5SbuZ4Tp2M0uL102yPeCyOPtcnHpBupnlVehmlpaem1lab27Q7xzlBd5mhqu6zSwt5TbJ7oCnRdtmllZqG2F3oNCabDPLC7HNjFdfd2RcWTXr8OVUR2jGI21n+ES3RZcEFJ/dtsklgaentC26JCB6HtsGlwQWnry26JKOxmesp3ZkvbCj2Ak7xz7YqXXBjrgHdsU7YGfW/zqy7teQu0mbXbLNLtlWXLKVLtlml2yFS7bCJdvkkm12yTa5ZJtcsg0u2WaXbLNLthWXbKVLttol2+ySrXDJVrhkO0tPBtsZjjnbWRpzjkiMOUeexpwjjWPOEdGYs53lMWcbrLfN1ttWrLeV1ttm622r1tsK622z9bbZettsva203nayXk+zydnbVLK3kdnb5Oyx9YIisrcR9WMTGwc+oJlMKT2gYU6Wqh/QsJjNNT2gYc42mx/QsBANNz2gIQ7Wm17PY65MWL2exxLZce31PJbZmNPreczJoguf55JmszZOjm1c1VkTc8U1iWqvca6oJnBtNUFXWTZ1f+4W2iU/jqPU4gRs9MbJ7Z0fiJDwfZey+ZtGPYBx7gZMqEWPO4TCFwJR12Bc9Q8m5k7CJOopjHN3YQL3GUXoc7649zB+qDREP2JSpb5WehSTa9WZ+xbjlWrLvUzhoqsp0ian5k7H+KGoiO7HpEpUKh2RybWopC7JhNjI+StwTxKl3kl+BS5Lqo+qfQUuq9RT6a/AZY37K/UVuKxQrwUSdFxIqe9CSXVfqOceDFXqxFDS/Rim4K4MNerNUKIODaS5rCXcraFEPRtKqlmgnlsGqtQ4UOIGgBq3AdSqzYC7u/AYP9iDeMCff6PPxF0fStT7BelwFEUfGNTcDaJMPSFK3BmidiDI3CWCtNCUOkaUVN+Ieu4eUaUeEiXuJFHjfhK0XmaZe0uUvlJ6os9Etd4GKj0npjjQSrj/RKneFLgXBUl0pKBu5G+4O0XpK2ETnSqq9bBVulZMcSBsqYNFLZjL4Asz/+bMeGTPDR3FjaaTUDrtK4HoHMbliabEeCJDdCLj8kRhD9hVjdMpoyjPC9G70pTOiZI8Y9k+dCUQncu4PJFt8bhSjE7lgjyX7X+4UozO5YI817Rl4CoTOk/B8izlQ2dXAtF5jKsTfURTODHkf/L8IzZzQPHhlHN8OOXUHk45kn/Z/GNovsDo75l/hOa6Jxe7jssGRLuj66Bdx9xPgs0C/ZcFXedU+hz2TqGfo6DrnKpyjmEMsFzO6SwGr1VKfab9iGb/J0guPy7LXyE5OskyabgKcGTEd8aEugUo3oYL/gj6tKD7cPQQjrwe7Y78z6SMR3HzyYjSJpMyOONMoBufEKLsVNyYVM5Y4fcZPWQE+Sxom/PAOTaes83v8h5FDNk2RNk2LrOdXvqcMlT4fUYPGUG28d1FygNnW767OElqy/OR0DAAsruTog6F3EpdcorifYU/VDiGB/m2kuEUqCDmaIlJz1FSIFKqCxeSjJIab055Bule0gdJITpAtzJ7HBmURFx8cpUCAxJGBjGHBjUdG0iRggPavcYPGmN8AG91PlOEUMsh4n3eRxFDaNJAjbkMSdowPmWw8PuMHjKCEBS0zXngrBvP2U5bh4+IQ8bzuDIJMut5G/KUKxPuBXsQDLJvbCsywwFwIUcg7QY+Ig4RyKPhJMgI5J3FU85MuBfsQTCIgLGtyAxHwIUUgU8p7zsyNJdlt17vlkKeGfw0K+9C744Wdi/jEQ1eP+XsfqIx2X4KepWuvyNdPLJlTUe23RNQ/obryHFlEyhu9nQcP+06IvqA68joA65xtiNmOtVZzlUOVPkpx6XgTiCKkHEKk3MRKxNzwFzKUTONQmec42cCBzEvBVxVlgKuDi4FmMqB1W+dTz/Kb51rgUJdeeu8ooqw1986ryTIRVB561yrXBy1t86lfFUVqIBIlcVUeYd6X1jXoRCuc+Svc7ivKzG+loG91tG8ziG8FnG7FsHasT4e5XvuKzfYyxvs852k/dSuiHv03dSO7MmKoW08yne9zXdXazAs0MkONpikilh9rcGkBLmIDzYYVjmohxsMyX1VOBgWWUnqn0zQCQ5mq1KLap9M0DLVrconE6S6rQoHA5PrYRlC7kdbt7hSMSGcxRcUTgpCWUl01Afb67PX9TWD68vQbn+Ul8z7tEjDXJ42LMbsUWXxuz+0+N1/ffG7zxP+PZeL4r2aUQtJXomnzXual8r7ylJ5f3CpvA8zrT2it0qv6gpdiWV5QUoE1xWr9n1t1b4/vGrfx0nUnpU/7nIlEJ3duDx5UeHceU2+r6zJ9wfX5HtsZ3tU+v/aum7USRzZsvt0V/T9/8vrQviTmb/EGPEQyfmd1uIlxTlX+nf2gRellZ5PanHdO6dYmz9FXC6otHJBqZU1d62KeW1M8WV+0VVis/vJ0/yTu3hSkcLrxhDe/VuPp3YUt7qMyCqgI7HrZeRpt8tI4y6XEdHelZF5j++svO3oJG5f2aGLWXlzZTyySbqjUkKIrGAAlpnLPtqrqVJ7AqvLjuKVunzxLl88Dr+A4zICUBhoAbYNDo58Y4Mzi6qzq3hUyhcQ1SETbH/HsdWf3UjsxMrChl+A4hvaziG3QO3NbEf8QXdX/H1tZ/ZNe0f2QrYhnxV5Wf8esuojoRUaAKA4xF7F5o5QGHVxMGx+aR8xc2qIeh8xi7lJpn3EzLlx5n3ELMRmmvYRE4cGa4gajnFqPc65/aZHeFPBFn6Zk3Jzxp3LjCr3x61b71xmMbdzuXOZNWrxeecyC9z2cajMiFygMlQmlf0AdxWfxEJnZ9C7ilnMHpF2FTPXbpF3FbNAvpF2FRNPDlKE33OYwEsMkaEYJ1dxztbiivIX/GL11PzSF6uZk7/oL1azmP0lfbGaOftL/mI1C9Ff0heriYO/GKL2a5zar3P2l/SsfCr2wi9zUvYX/EY2o8r9sb/ob2SzmP1FfiObNfKX/I1sFthfcOMAI/KXysYBUtlf8EPZJ7HQ2V/0h7JZzP6SPpTNXPtL/lA2C+Qv6UPZxJO/FOH3HCbwF0PkL8bJX5yzv7gi/SWs9KDLRIG9JqrsOFGVvhOTCPeJCdiDopqcKMrJj6JMrhRF9qb4jATKMArsA1FlNyA1eZZ+MFMqVFAvaz9LLpbWp7VwMCfJ1w6sT+skwuPq69M6BftdZX1ay8n70gMdLbAPHnqgI9MkT0wL4yeqyiV/PLAwrpMIr9QL41qt+GZlYVzL7KF6YVyq2U+D/Hst3OitUWCHjSr7LKnJbUkXnjstBo2vbe03DBixW4nY7DVi8RV509BQoxK/G2+YvgVv3L0z8mKakcaPwhf8WyYWVsIxXkHc/UG2/R+tLWT3l9hOQkx3f4LtLKSxv71GGAK0V+7BWvcvjdxjddujh5ToISfaQqL9Bzy2mGhCPNElzMnF9r2s4I/+/b//H63X5Vs="'
  ),
  Zy = JSON.parse(
    '"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"'
  ),
  Yy =
    "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",
  Qy =
    "eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w==";
var Jy = {
    Courier: Ly,
    "Courier-Bold": Iy,
    "Courier-Oblique": Uy,
    "Courier-BoldOblique": My,
    Helvetica: Ky,
    "Helvetica-Bold": Vy,
    "Helvetica-Oblique": qy,
    "Helvetica-BoldOblique": Wy,
    "Times-Roman": Zy,
    "Times-Bold": Hy,
    "Times-Italic": Xy,
    "Times-BoldItalic": Gy,
    Symbol: Yy,
    ZapfDingbats: Qy,
  },
  ba;
(function (r) {
  (r.Courier = "Courier"),
    (r.CourierBold = "Courier-Bold"),
    (r.CourierOblique = "Courier-Oblique"),
    (r.CourierBoldOblique = "Courier-BoldOblique"),
    (r.Helvetica = "Helvetica"),
    (r.HelveticaBold = "Helvetica-Bold"),
    (r.HelveticaOblique = "Helvetica-Oblique"),
    (r.HelveticaBoldOblique = "Helvetica-BoldOblique"),
    (r.TimesRoman = "Times-Roman"),
    (r.TimesRomanBold = "Times-Bold"),
    (r.TimesRomanItalic = "Times-Italic"),
    (r.TimesRomanBoldItalic = "Times-BoldItalic"),
    (r.Symbol = "Symbol"),
    (r.ZapfDingbats = "ZapfDingbats");
})(ba || (ba = {}));
var S0 = {},
  _y = (function () {
    function r() {
      var e = this;
      (this.getWidthOfGlyph = function (t) {
        return e.CharWidths[t];
      }),
        (this.getXAxisKerningForPair = function (t, i) {
          return (e.KernPairXAmounts[t] || {})[i];
        });
    }
    return (
      (r.load = function (e) {
        var t = S0[e];
        if (t) return t;
        var i = fp(Jy[e]),
          a = Object.assign(new r(), JSON.parse(i));
        return (
          (a.CharWidths = a.CharMetrics.reduce(function (u, s) {
            return (u[s.N] = s.WX), u;
          }, {})),
          (a.KernPairXAmounts = a.KernPairs.reduce(function (u, s) {
            var c = s[0],
              d = s[1],
              h = s[2];
            return u[c] || (u[c] = {}), (u[c][d] = h), u;
          }, {})),
          (S0[e] = a),
          a
        );
      }),
      r
    );
  })();
const $y =
  "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";
var em = fp($y),
  Rf = JSON.parse(em),
  Df = (function () {
    function r(e, t) {
      var i = this;
      (this.canEncodeUnicodeCodePoint = function (a) {
        return a in i.unicodeMappings;
      }),
        (this.encodeUnicodeCodePoint = function (a) {
          var u = i.unicodeMappings[a];
          if (!u) {
            var s = String.fromCharCode(a),
              c = "0x" + By(a.toString(16), 4, "0"),
              d = i.name + ' cannot encode "' + s + '" (' + c + ")";
            throw new Error(d);
          }
          return { code: u[0], name: u[1] };
        }),
        (this.name = e),
        (this.supportedCodePoints = Object.keys(t)
          .map(Number)
          .sort(function (a, u) {
            return a - u;
          })),
        (this.unicodeMappings = t);
    }
    return r;
  })(),
  Wu = {
    Symbol: new Df("Symbol", Rf.symbol),
    ZapfDingbats: new Df("ZapfDingbats", Rf.zapfdingbats),
    WinAnsi: new Df("WinAnsi", Rf.win1252),
  },
  ml = function (r) {
    return Object.keys(r).map(function (e) {
      return r[e];
    });
  },
  tm = ml(ba),
  b0 = function (r) {
    return tm.includes(r);
  },
  qu = function (r, e) {
    return (
      r.x === e.x && r.y === e.y && r.width === e.width && r.height === e.height
    );
  },
  Kt = function (r) {
    return "`" + r + "`";
  },
  rm = function (r) {
    return "'" + r + "'";
  },
  k0 = function (r) {
    var e = typeof r;
    return e === "string" ? rm(r) : e === "undefined" ? Kt(r) : r;
  },
  nm = function (r, e, t) {
    for (var i = new Array(t.length), a = 0, u = t.length; a < u; a++) {
      var s = t[a];
      i[a] = k0(s);
    }
    var c = i.join(" or ");
    return Kt(e) + " must be one of " + c + ", but was actually " + k0(r);
  },
  li = function (r, e, t) {
    Array.isArray(t) || (t = ml(t));
    for (var i = 0, a = t.length; i < a; i++) if (r === t[i]) return;
    throw new TypeError(nm(r, e, t));
  },
  Zr = function (r, e, t) {
    Array.isArray(t) || (t = ml(t)), li(r, e, t.concat(void 0));
  },
  im = function (r, e, t) {
    Array.isArray(t) || (t = ml(t));
    for (var i = 0, a = r.length; i < a; i++) li(r[i], e, t);
  },
  om = function (r) {
    return r === null
      ? "null"
      : r === void 0
      ? "undefined"
      : typeof r == "string"
      ? "string"
      : isNaN(r)
      ? "NaN"
      : typeof r == "number"
      ? "number"
      : typeof r == "boolean"
      ? "boolean"
      : typeof r == "symbol"
      ? "symbol"
      : typeof r == "bigint"
      ? "bigint"
      : r.constructor && r.constructor.name
      ? r.constructor.name
      : r.name
      ? r.name
      : r.constructor
      ? String(r.constructor)
      : String(r);
  },
  am = function (r, e) {
    return e === "null"
      ? r === null
      : e === "undefined"
      ? r === void 0
      : e === "string"
      ? typeof r == "string"
      : e === "number"
      ? typeof r == "number" && !isNaN(r)
      : e === "boolean"
      ? typeof r == "boolean"
      : e === "symbol"
      ? typeof r == "symbol"
      : e === "bigint"
      ? typeof r == "bigint"
      : e === Date
      ? r instanceof Date
      : e === Array
      ? r instanceof Array
      : e === Uint8Array
      ? r instanceof Uint8Array
      : e === ArrayBuffer
      ? r instanceof ArrayBuffer
      : e === Function
      ? r instanceof Function
      : r instanceof e[0];
  },
  um = function (r, e, t) {
    for (var i = new Array(t.length), a = 0, u = t.length; a < u; a++) {
      var s = t[a];
      s === "null" && (i[a] = Kt("null")),
        s === "undefined" && (i[a] = Kt("undefined")),
        s === "string"
          ? (i[a] = Kt("string"))
          : s === "number"
          ? (i[a] = Kt("number"))
          : s === "boolean"
          ? (i[a] = Kt("boolean"))
          : s === "symbol"
          ? (i[a] = Kt("symbol"))
          : s === "bigint"
          ? (i[a] = Kt("bigint"))
          : s === Array
          ? (i[a] = Kt("Array"))
          : s === Uint8Array
          ? (i[a] = Kt("Uint8Array"))
          : s === ArrayBuffer
          ? (i[a] = Kt("ArrayBuffer"))
          : (i[a] = Kt(s[1]));
    }
    var c = i.join(" or ");
    return (
      Kt(e) +
      " must be of type " +
      c +
      ", but was actually of type " +
      Kt(om(r))
    );
  },
  V = function (r, e, t) {
    for (var i = 0, a = t.length; i < a; i++) if (am(r, t[i])) return;
    throw new TypeError(um(r, e, t));
  },
  pe = function (r, e, t) {
    V(r, e, t.concat("undefined"));
  },
  cp = function (r, e, t) {
    for (var i = 0, a = r.length; i < a; i++) V(r[i], e, t);
  },
  Nr = function (r, e, t, i) {
    if (
      (V(r, e, ["number"]),
      V(t, "min", ["number"]),
      V(i, "max", ["number"]),
      (i = Math.max(t, i)),
      r < t || r > i)
    )
      throw new Error(
        Kt(e) +
          " must be at least " +
          t +
          " and at most " +
          i +
          ", but was actually " +
          r
      );
  },
  hn = function (r, e, t, i) {
    V(r, e, ["number", "undefined"]), typeof r == "number" && Nr(r, e, t, i);
  },
  dp = function (r, e, t) {
    if ((V(r, e, ["number"]), r % t !== 0))
      throw new Error(
        Kt(e) + " must be a multiple of " + t + ", but was actually " + r
      );
  },
  lm = function (r, e) {
    if (!Number.isInteger(r))
      throw new Error(Kt(e) + " must be an integer, but was actually " + r);
  },
  xl = function (r, e) {
    if (![1, 0].includes(Math.sign(r)))
      throw new Error(
        Kt(e) + " must be a positive number or 0, but was actually " + r
      );
  },
  Ye = new Uint16Array(256);
for (var Ku = 0; Ku < 256; Ku++) Ye[Ku] = Ku;
Ye[22] = Ge("");
Ye[24] = Ge("˘");
Ye[25] = Ge("ˇ");
Ye[26] = Ge("ˆ");
Ye[27] = Ge("˙");
Ye[28] = Ge("˝");
Ye[29] = Ge("˛");
Ye[30] = Ge("˚");
Ye[31] = Ge("˜");
Ye[127] = Ge("�");
Ye[128] = Ge("•");
Ye[129] = Ge("†");
Ye[130] = Ge("‡");
Ye[131] = Ge("…");
Ye[132] = Ge("—");
Ye[133] = Ge("–");
Ye[134] = Ge("ƒ");
Ye[135] = Ge("⁄");
Ye[136] = Ge("‹");
Ye[137] = Ge("›");
Ye[138] = Ge("−");
Ye[139] = Ge("‰");
Ye[140] = Ge("„");
Ye[141] = Ge("“");
Ye[142] = Ge("”");
Ye[143] = Ge("‘");
Ye[144] = Ge("’");
Ye[145] = Ge("‚");
Ye[146] = Ge("™");
Ye[147] = Ge("ﬁ");
Ye[148] = Ge("ﬂ");
Ye[149] = Ge("Ł");
Ye[150] = Ge("Œ");
Ye[151] = Ge("Š");
Ye[152] = Ge("Ÿ");
Ye[153] = Ge("Ž");
Ye[154] = Ge("ı");
Ye[155] = Ge("ł");
Ye[156] = Ge("œ");
Ye[157] = Ge("š");
Ye[158] = Ge("ž");
Ye[159] = Ge("�");
Ye[160] = Ge("€");
Ye[173] = Ge("�");
var hp = function (r) {
    for (var e = new Array(r.length), t = 0, i = r.length; t < i; t++)
      e[t] = Ye[r[t]];
    return String.fromCodePoint.apply(String, e);
  },
  Bn = (function () {
    function r(e) {
      (this.populate = e), (this.value = void 0);
    }
    return (
      (r.prototype.getValue = function () {
        return this.value;
      }),
      (r.prototype.access = function () {
        return this.value || (this.value = this.populate()), this.value;
      }),
      (r.prototype.invalidate = function () {
        this.value = void 0;
      }),
      (r.populatedBy = function (e) {
        return new r(e);
      }),
      r
    );
  })(),
  Jr = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this,
        u = "Method " + t + "." + i + "() not implemented";
      return (a = r.call(this, u) || this), a;
    }
    return e;
  })(Error),
  Qf = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = "Cannot construct " + t + " - it has a private constructor";
      return (i = r.call(this, a) || this), i;
    }
    return e;
  })(Error),
  il = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this,
        u = function (d) {
          var h, y;
          return (h = d == null ? void 0 : d.name) !== null && h !== void 0
            ? h
            : (y = d == null ? void 0 : d.constructor) === null || y === void 0
            ? void 0
            : y.name;
        },
        s = Array.isArray(t) ? t.map(u) : [u(t)],
        c =
          "Expected instance of " +
          s.join(" or ") +
          ", " +
          ("but got instance of " + (i && u(i)));
      return (a = r.call(this, c) || this), a;
    }
    return e;
  })(Error),
  sm = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = t + " stream encoding not supported";
      return (i = r.call(this, a) || this), i;
    }
    return e;
  })(Error),
  Jf = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this,
        u = "Cannot call " + t + "." + i + "() more than once";
      return (a = r.call(this, u) || this), a;
    }
    return e;
  })(Error);
(function (r) {
  ve(e, r);
  function e(t) {
    var i = this,
      a = "Missing catalog (ref=" + t + ")";
    return (i = r.call(this, a) || this), i;
  }
  return e;
})(Error);
var fm = (function (r) {
    ve(e, r);
    function e() {
      var t = this,
        i = "Can't embed page with missing Contents";
      return (t = r.call(this, i) || this), t;
    }
    return e;
  })(Error),
  cm = (function (r) {
    ve(e, r);
    function e(t) {
      var i,
        a,
        u,
        s = this,
        c =
          (u =
            (a =
              (i = t == null ? void 0 : t.contructor) === null || i === void 0
                ? void 0
                : i.name) !== null && a !== void 0
              ? a
              : t == null
              ? void 0
              : t.name) !== null && u !== void 0
            ? u
            : t,
        d = "Unrecognized stream type: " + c;
      return (s = r.call(this, d) || this), s;
    }
    return e;
  })(Error),
  dm = (function (r) {
    ve(e, r);
    function e() {
      var t = this,
        i =
          "Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.";
      return (t = r.call(this, i) || this), t;
    }
    return e;
  })(Error),
  hm = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a =
          "Attempted to convert PDFArray with " +
          t +
          " elements to rectangle, but must have exactly 4 elements.";
      return (i = r.call(this, a) || this), i;
    }
    return e;
  })(Error),
  pp = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a =
          'Attempted to convert "' +
          t +
          '" to a date, but it does not match the PDF date string format.';
      return (i = r.call(this, a) || this), i;
    }
    return e;
  })(Error),
  F0 = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this,
        u =
          "Invalid targetIndex specified: targetIndex=" +
          t +
          " must be less than Count=" +
          i;
      return (a = r.call(this, u) || this), a;
    }
    return e;
  })(Error),
  C0 = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this,
        u =
          "Failed to " +
          i +
          " at targetIndex=" +
          t +
          " due to corrupt page tree: It is likely that one or more 'Count' entries are invalid";
      return (a = r.call(this, u) || this), a;
    }
    return e;
  })(Error),
  ol = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = this,
        s =
          "index should be at least " +
          i +
          " and at most " +
          a +
          ", but was actually " +
          t;
      return (u = r.call(this, s) || this), u;
    }
    return e;
  })(Error),
  _f = (function (r) {
    ve(e, r);
    function e() {
      var t = this,
        i = "Attempted to set invalid field value";
      return (t = r.call(this, i) || this), t;
    }
    return e;
  })(Error),
  pm = (function (r) {
    ve(e, r);
    function e() {
      var t = this,
        i = "Attempted to select multiple values for single-select field";
      return (t = r.call(this, i) || this), t;
    }
    return e;
  })(Error),
  vm = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = "No /DA (default appearance) entry found for field: " + t;
      return (i = r.call(this, a) || this), i;
    }
    return e;
  })(Error),
  gm = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = "No Tf operator found for DA of field: " + t;
      return (i = r.call(this, a) || this), i;
    }
    return e;
  })(Error),
  P0 = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this,
        u =
          "Failed to parse number " +
          ("(line:" +
            t.line +
            " col:" +
            t.column +
            " offset=" +
            t.offset +
            '): "' +
            i +
            '"');
      return (a = r.call(this, u) || this), a;
    }
    return e;
  })(Error),
  gi = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this,
        u =
          "Failed to parse PDF document " +
          ("(line:" +
            t.line +
            " col:" +
            t.column +
            " offset=" +
            t.offset +
            "): " +
            i);
      return (a = r.call(this, u) || this), a;
    }
    return e;
  })(Error),
  ym = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = this,
        s = "Expected next byte to be " + i + " but it was actually " + a;
      return (u = r.call(this, t, s) || this), u;
    }
    return e;
  })(gi),
  mm = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this,
        u = "Failed to parse PDF object starting with the following byte: " + i;
      return (a = r.call(this, t, u) || this), a;
    }
    return e;
  })(gi),
  xm = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = "Failed to parse invalid PDF object";
      return (i = r.call(this, t, a) || this), i;
    }
    return e;
  })(gi),
  wm = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = "Failed to parse PDF stream";
      return (i = r.call(this, t, a) || this), i;
    }
    return e;
  })(gi),
  Sm = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = "Failed to parse PDF literal string due to unbalanced parenthesis";
      return (i = r.call(this, t, a) || this), i;
    }
    return e;
  })(gi),
  bm = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = "Parser stalled";
      return (i = r.call(this, t, a) || this), i;
    }
    return e;
  })(gi),
  km = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = "No PDF header found";
      return (i = r.call(this, t, a) || this), i;
    }
    return e;
  })(gi),
  Fm = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this,
        u = "Did not find expected keyword '" + _0(i) + "'";
      return (a = r.call(this, t, u) || this), a;
    }
    return e;
  })(gi),
  Bf;
(function (r) {
  (r[(r.Null = 0)] = "Null"),
    (r[(r.Backspace = 8)] = "Backspace"),
    (r[(r.Tab = 9)] = "Tab"),
    (r[(r.Newline = 10)] = "Newline"),
    (r[(r.FormFeed = 12)] = "FormFeed"),
    (r[(r.CarriageReturn = 13)] = "CarriageReturn"),
    (r[(r.Space = 32)] = "Space"),
    (r[(r.ExclamationPoint = 33)] = "ExclamationPoint"),
    (r[(r.Hash = 35)] = "Hash"),
    (r[(r.Percent = 37)] = "Percent"),
    (r[(r.LeftParen = 40)] = "LeftParen"),
    (r[(r.RightParen = 41)] = "RightParen"),
    (r[(r.Plus = 43)] = "Plus"),
    (r[(r.Minus = 45)] = "Minus"),
    (r[(r.Dash = 45)] = "Dash"),
    (r[(r.Period = 46)] = "Period"),
    (r[(r.ForwardSlash = 47)] = "ForwardSlash"),
    (r[(r.Zero = 48)] = "Zero"),
    (r[(r.One = 49)] = "One"),
    (r[(r.Two = 50)] = "Two"),
    (r[(r.Three = 51)] = "Three"),
    (r[(r.Four = 52)] = "Four"),
    (r[(r.Five = 53)] = "Five"),
    (r[(r.Six = 54)] = "Six"),
    (r[(r.Seven = 55)] = "Seven"),
    (r[(r.Eight = 56)] = "Eight"),
    (r[(r.Nine = 57)] = "Nine"),
    (r[(r.LessThan = 60)] = "LessThan"),
    (r[(r.GreaterThan = 62)] = "GreaterThan"),
    (r[(r.A = 65)] = "A"),
    (r[(r.D = 68)] = "D"),
    (r[(r.E = 69)] = "E"),
    (r[(r.F = 70)] = "F"),
    (r[(r.O = 79)] = "O"),
    (r[(r.P = 80)] = "P"),
    (r[(r.R = 82)] = "R"),
    (r[(r.LeftSquareBracket = 91)] = "LeftSquareBracket"),
    (r[(r.BackSlash = 92)] = "BackSlash"),
    (r[(r.RightSquareBracket = 93)] = "RightSquareBracket"),
    (r[(r.a = 97)] = "a"),
    (r[(r.b = 98)] = "b"),
    (r[(r.d = 100)] = "d"),
    (r[(r.e = 101)] = "e"),
    (r[(r.f = 102)] = "f"),
    (r[(r.i = 105)] = "i"),
    (r[(r.j = 106)] = "j"),
    (r[(r.l = 108)] = "l"),
    (r[(r.m = 109)] = "m"),
    (r[(r.n = 110)] = "n"),
    (r[(r.o = 111)] = "o"),
    (r[(r.r = 114)] = "r"),
    (r[(r.s = 115)] = "s"),
    (r[(r.t = 116)] = "t"),
    (r[(r.u = 117)] = "u"),
    (r[(r.x = 120)] = "x"),
    (r[(r.LeftCurly = 123)] = "LeftCurly"),
    (r[(r.RightCurly = 125)] = "RightCurly"),
    (r[(r.Tilde = 126)] = "Tilde");
})(Bf || (Bf = {}));
const T = Bf;
var wl = (function () {
    function r(e, t) {
      (this.major = String(e)), (this.minor = String(t));
    }
    return (
      (r.prototype.toString = function () {
        var e = jn(129);
        return (
          "%PDF-" +
          this.major +
          "." +
          this.minor +
          `
%` +
          e +
          e +
          e +
          e
        );
      }),
      (r.prototype.sizeInBytes = function () {
        return 12 + this.major.length + this.minor.length;
      }),
      (r.prototype.copyBytesInto = function (e, t) {
        var i = t;
        return (
          (e[t++] = T.Percent),
          (e[t++] = T.P),
          (e[t++] = T.D),
          (e[t++] = T.F),
          (e[t++] = T.Dash),
          (t += rr(this.major, e, t)),
          (e[t++] = T.Period),
          (t += rr(this.minor, e, t)),
          (e[t++] = T.Newline),
          (e[t++] = T.Percent),
          (e[t++] = 129),
          (e[t++] = 129),
          (e[t++] = 129),
          (e[t++] = 129),
          t - i
        );
      }),
      (r.forVersion = function (e, t) {
        return new r(e, t);
      }),
      r
    );
  })(),
  yr = (function () {
    function r() {}
    return (
      (r.prototype.clone = function (e) {
        throw new Jr(this.constructor.name, "clone");
      }),
      (r.prototype.toString = function () {
        throw new Jr(this.constructor.name, "toString");
      }),
      (r.prototype.sizeInBytes = function () {
        throw new Jr(this.constructor.name, "sizeInBytes");
      }),
      (r.prototype.copyBytesInto = function (e, t) {
        throw new Jr(this.constructor.name, "copyBytesInto");
      }),
      r
    );
  })(),
  qe = (function (r) {
    ve(e, r);
    function e(t) {
      var i = r.call(this) || this;
      return (i.numberValue = t), (i.stringValue = ky(t)), i;
    }
    return (
      (e.prototype.asNumber = function () {
        return this.numberValue;
      }),
      (e.prototype.value = function () {
        return this.numberValue;
      }),
      (e.prototype.clone = function () {
        return e.of(this.numberValue);
      }),
      (e.prototype.toString = function () {
        return this.stringValue;
      }),
      (e.prototype.sizeInBytes = function () {
        return this.stringValue.length;
      }),
      (e.prototype.copyBytesInto = function (t, i) {
        return (i += rr(this.stringValue, t, i)), this.stringValue.length;
      }),
      (e.of = function (t) {
        return new e(t);
      }),
      e
    );
  })(yr),
  ct = (function (r) {
    ve(e, r);
    function e(t) {
      var i = r.call(this) || this;
      return (i.array = []), (i.context = t), i;
    }
    return (
      (e.prototype.size = function () {
        return this.array.length;
      }),
      (e.prototype.push = function (t) {
        this.array.push(t);
      }),
      (e.prototype.insert = function (t, i) {
        this.array.splice(t, 0, i);
      }),
      (e.prototype.indexOf = function (t) {
        var i = this.array.indexOf(t);
        return i === -1 ? void 0 : i;
      }),
      (e.prototype.remove = function (t) {
        this.array.splice(t, 1);
      }),
      (e.prototype.set = function (t, i) {
        this.array[t] = i;
      }),
      (e.prototype.get = function (t) {
        return this.array[t];
      }),
      (e.prototype.lookupMaybe = function (t) {
        for (var i, a = [], u = 1; u < arguments.length; u++)
          a[u - 1] = arguments[u];
        return (i = this.context).lookupMaybe.apply(i, lt([this.get(t)], a));
      }),
      (e.prototype.lookup = function (t) {
        for (var i, a = [], u = 1; u < arguments.length; u++)
          a[u - 1] = arguments[u];
        return (i = this.context).lookup.apply(i, lt([this.get(t)], a));
      }),
      (e.prototype.asRectangle = function () {
        if (this.size() !== 4) throw new hm(this.size());
        var t = this.lookup(0, qe).asNumber(),
          i = this.lookup(1, qe).asNumber(),
          a = this.lookup(2, qe).asNumber(),
          u = this.lookup(3, qe).asNumber(),
          s = t,
          c = i,
          d = a - t,
          h = u - i;
        return { x: s, y: c, width: d, height: h };
      }),
      (e.prototype.asArray = function () {
        return this.array.slice();
      }),
      (e.prototype.clone = function (t) {
        for (
          var i = e.withContext(t || this.context), a = 0, u = this.size();
          a < u;
          a++
        )
          i.push(this.array[a]);
        return i;
      }),
      (e.prototype.toString = function () {
        for (var t = "[ ", i = 0, a = this.size(); i < a; i++)
          (t += this.get(i).toString()), (t += " ");
        return (t += "]"), t;
      }),
      (e.prototype.sizeInBytes = function () {
        for (var t = 3, i = 0, a = this.size(); i < a; i++)
          t += this.get(i).sizeInBytes() + 1;
        return t;
      }),
      (e.prototype.copyBytesInto = function (t, i) {
        var a = i;
        (t[i++] = T.LeftSquareBracket), (t[i++] = T.Space);
        for (var u = 0, s = this.size(); u < s; u++)
          (i += this.get(u).copyBytesInto(t, i)), (t[i++] = T.Space);
        return (t[i++] = T.RightSquareBracket), i - a;
      }),
      (e.prototype.scalePDFNumbers = function (t, i) {
        for (var a = 0, u = this.size(); a < u; a++) {
          var s = this.lookup(a);
          if (s instanceof qe) {
            var c = a % 2 === 0 ? t : i;
            this.set(a, qe.of(s.asNumber() * c));
          }
        }
      }),
      (e.withContext = function (t) {
        return new e(t);
      }),
      e
    );
  })(yr),
  Of = {},
  ka = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this;
      if (t !== Of) throw new Qf("PDFBool");
      return (a = r.call(this) || this), (a.value = i), a;
    }
    return (
      (e.prototype.asBoolean = function () {
        return this.value;
      }),
      (e.prototype.clone = function () {
        return this;
      }),
      (e.prototype.toString = function () {
        return String(this.value);
      }),
      (e.prototype.sizeInBytes = function () {
        return this.value ? 4 : 5;
      }),
      (e.prototype.copyBytesInto = function (t, i) {
        return this.value
          ? ((t[i++] = T.t), (t[i++] = T.r), (t[i++] = T.u), (t[i++] = T.e), 4)
          : ((t[i++] = T.f),
            (t[i++] = T.a),
            (t[i++] = T.l),
            (t[i++] = T.s),
            (t[i++] = T.e),
            5);
      }),
      (e.True = new e(Of, !0)),
      (e.False = new e(Of, !1)),
      e
    );
  })(yr),
  tn = new Uint8Array(256);
tn[T.LeftParen] = 1;
tn[T.RightParen] = 1;
tn[T.LessThan] = 1;
tn[T.GreaterThan] = 1;
tn[T.LeftSquareBracket] = 1;
tn[T.RightSquareBracket] = 1;
tn[T.LeftCurly] = 1;
tn[T.RightCurly] = 1;
tn[T.ForwardSlash] = 1;
tn[T.Percent] = 1;
var Mn = new Uint8Array(256);
Mn[T.Null] = 1;
Mn[T.Tab] = 1;
Mn[T.Newline] = 1;
Mn[T.FormFeed] = 1;
Mn[T.CarriageReturn] = 1;
Mn[T.Space] = 1;
var $f = new Uint8Array(256);
for (var aa = 0, Cm = 256; aa < Cm; aa++) $f[aa] = Mn[aa] || tn[aa] ? 1 : 0;
$f[T.Hash] = 1;
var Pm = function (r) {
    return r.replace(/#([\dABCDEF]{2})/g, function (e, t) {
      return ny(t);
    });
  },
  Em = function (r) {
    return r >= T.ExclamationPoint && r <= T.Tilde && !$f[r];
  },
  E0 = {},
  T0 = new Map(),
  P = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this;
      if (t !== E0) throw new Qf("PDFName");
      a = r.call(this) || this;
      for (var u = "/", s = 0, c = i.length; s < c; s++) {
        var d = i[s],
          h = Ge(d);
        u += Em(h) ? d : "#" + gl(h);
      }
      return (a.encodedName = u), a;
    }
    return (
      (e.prototype.asBytes = function () {
        for (
          var t = [],
            i = "",
            a = !1,
            u = function (m) {
              m !== void 0 && t.push(m), (a = !1);
            },
            s = 1,
            c = this.encodedName.length;
          s < c;
          s++
        ) {
          var d = this.encodedName[s],
            h = Ge(d),
            y = this.encodedName[s + 1];
          a
            ? (h >= T.Zero && h <= T.Nine) ||
              (h >= T.a && h <= T.f) ||
              (h >= T.A && h <= T.F)
              ? ((i += d),
                (i.length === 2 ||
                  !(
                    (y >= "0" && y <= "9") ||
                    (y >= "a" && y <= "f") ||
                    (y >= "A" && y <= "F")
                  )) &&
                  (u(parseInt(i, 16)), (i = "")))
              : u(h)
            : h === T.Hash
            ? (a = !0)
            : u(h);
        }
        return new Uint8Array(t);
      }),
      (e.prototype.decodeText = function () {
        var t = this.asBytes();
        return String.fromCharCode.apply(String, Array.from(t));
      }),
      (e.prototype.asString = function () {
        return this.encodedName;
      }),
      (e.prototype.value = function () {
        return this.encodedName;
      }),
      (e.prototype.clone = function () {
        return this;
      }),
      (e.prototype.toString = function () {
        return this.encodedName;
      }),
      (e.prototype.sizeInBytes = function () {
        return this.encodedName.length;
      }),
      (e.prototype.copyBytesInto = function (t, i) {
        return (i += rr(this.encodedName, t, i)), this.encodedName.length;
      }),
      (e.of = function (t) {
        var i = Pm(t),
          a = T0.get(i);
        return a || ((a = new e(E0, i)), T0.set(i, a)), a;
      }),
      (e.Length = e.of("Length")),
      (e.FlateDecode = e.of("FlateDecode")),
      (e.Resources = e.of("Resources")),
      (e.Font = e.of("Font")),
      (e.XObject = e.of("XObject")),
      (e.ExtGState = e.of("ExtGState")),
      (e.Contents = e.of("Contents")),
      (e.Type = e.of("Type")),
      (e.Parent = e.of("Parent")),
      (e.MediaBox = e.of("MediaBox")),
      (e.Page = e.of("Page")),
      (e.Annots = e.of("Annots")),
      (e.TrimBox = e.of("TrimBox")),
      (e.ArtBox = e.of("ArtBox")),
      (e.BleedBox = e.of("BleedBox")),
      (e.CropBox = e.of("CropBox")),
      (e.Rotate = e.of("Rotate")),
      (e.Title = e.of("Title")),
      (e.Author = e.of("Author")),
      (e.Subject = e.of("Subject")),
      (e.Creator = e.of("Creator")),
      (e.Keywords = e.of("Keywords")),
      (e.Producer = e.of("Producer")),
      (e.CreationDate = e.of("CreationDate")),
      (e.ModDate = e.of("ModDate")),
      e
    );
  })(yr),
  Tm = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.asNull = function () {
        return null;
      }),
      (e.prototype.clone = function () {
        return this;
      }),
      (e.prototype.toString = function () {
        return "null";
      }),
      (e.prototype.sizeInBytes = function () {
        return 4;
      }),
      (e.prototype.copyBytesInto = function (t, i) {
        return (
          (t[i++] = T.n), (t[i++] = T.u), (t[i++] = T.l), (t[i++] = T.l), 4
        );
      }),
      e
    );
  })(yr);
const Er = new Tm();
var Qe = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = r.call(this) || this;
      return (a.dict = t), (a.context = i), a;
    }
    return (
      (e.prototype.keys = function () {
        return Array.from(this.dict.keys());
      }),
      (e.prototype.values = function () {
        return Array.from(this.dict.values());
      }),
      (e.prototype.entries = function () {
        return Array.from(this.dict.entries());
      }),
      (e.prototype.set = function (t, i) {
        this.dict.set(t, i);
      }),
      (e.prototype.get = function (t, i) {
        i === void 0 && (i = !1);
        var a = this.dict.get(t);
        if (!(a === Er && !i)) return a;
      }),
      (e.prototype.has = function (t) {
        var i = this.dict.get(t);
        return i !== void 0 && i !== Er;
      }),
      (e.prototype.lookupMaybe = function (t) {
        for (var i, a = [], u = 1; u < arguments.length; u++)
          a[u - 1] = arguments[u];
        var s = a.includes(Er),
          c = (i = this.context).lookupMaybe.apply(i, lt([this.get(t, s)], a));
        if (!(c === Er && !s)) return c;
      }),
      (e.prototype.lookup = function (t) {
        for (var i, a = [], u = 1; u < arguments.length; u++)
          a[u - 1] = arguments[u];
        var s = a.includes(Er),
          c = (i = this.context).lookup.apply(i, lt([this.get(t, s)], a));
        if (!(c === Er && !s)) return c;
      }),
      (e.prototype.delete = function (t) {
        return this.dict.delete(t);
      }),
      (e.prototype.asMap = function () {
        return new Map(this.dict);
      }),
      (e.prototype.uniqueKey = function (t) {
        t === void 0 && (t = "");
        for (
          var i = this.keys(), a = P.of(this.context.addRandomSuffix(t, 10));
          i.includes(a);

        )
          a = P.of(this.context.addRandomSuffix(t, 10));
        return a;
      }),
      (e.prototype.clone = function (t) {
        for (
          var i = e.withContext(t || this.context),
            a = this.entries(),
            u = 0,
            s = a.length;
          u < s;
          u++
        ) {
          var c = a[u],
            d = c[0],
            h = c[1];
          i.set(d, h);
        }
        return i;
      }),
      (e.prototype.toString = function () {
        for (
          var t = `<<
`,
            i = this.entries(),
            a = 0,
            u = i.length;
          a < u;
          a++
        ) {
          var s = i[a],
            c = s[0],
            d = s[1];
          t +=
            c.toString() +
            " " +
            d.toString() +
            `
`;
        }
        return (t += ">>"), t;
      }),
      (e.prototype.sizeInBytes = function () {
        for (var t = 5, i = this.entries(), a = 0, u = i.length; a < u; a++) {
          var s = i[a],
            c = s[0],
            d = s[1];
          t += c.sizeInBytes() + d.sizeInBytes() + 2;
        }
        return t;
      }),
      (e.prototype.copyBytesInto = function (t, i) {
        var a = i;
        (t[i++] = T.LessThan), (t[i++] = T.LessThan), (t[i++] = T.Newline);
        for (var u = this.entries(), s = 0, c = u.length; s < c; s++) {
          var d = u[s],
            h = d[0],
            y = d[1];
          (i += h.copyBytesInto(t, i)),
            (t[i++] = T.Space),
            (i += y.copyBytesInto(t, i)),
            (t[i++] = T.Newline);
        }
        return (t[i++] = T.GreaterThan), (t[i++] = T.GreaterThan), i - a;
      }),
      (e.withContext = function (t) {
        return new e(new Map(), t);
      }),
      (e.fromMapWithContext = function (t, i) {
        return new e(t, i);
      }),
      e
    );
  })(yr),
  Br = (function (r) {
    ve(e, r);
    function e(t) {
      var i = r.call(this) || this;
      return (i.dict = t), i;
    }
    return (
      (e.prototype.clone = function (t) {
        throw new Jr(this.constructor.name, "clone");
      }),
      (e.prototype.getContentsString = function () {
        throw new Jr(this.constructor.name, "getContentsString");
      }),
      (e.prototype.getContents = function () {
        throw new Jr(this.constructor.name, "getContents");
      }),
      (e.prototype.getContentsSize = function () {
        throw new Jr(this.constructor.name, "getContentsSize");
      }),
      (e.prototype.updateDict = function () {
        var t = this.getContentsSize();
        this.dict.set(P.Length, qe.of(t));
      }),
      (e.prototype.sizeInBytes = function () {
        return (
          this.updateDict(),
          this.dict.sizeInBytes() + this.getContentsSize() + 18
        );
      }),
      (e.prototype.toString = function () {
        this.updateDict();
        var t = this.dict.toString();
        return (
          (t += `
stream
`),
          (t += this.getContentsString()),
          (t += `
endstream`),
          t
        );
      }),
      (e.prototype.copyBytesInto = function (t, i) {
        this.updateDict();
        var a = i;
        (i += this.dict.copyBytesInto(t, i)),
          (t[i++] = T.Newline),
          (t[i++] = T.s),
          (t[i++] = T.t),
          (t[i++] = T.r),
          (t[i++] = T.e),
          (t[i++] = T.a),
          (t[i++] = T.m),
          (t[i++] = T.Newline);
        for (var u = this.getContents(), s = 0, c = u.length; s < c; s++)
          t[i++] = u[s];
        return (
          (t[i++] = T.Newline),
          (t[i++] = T.e),
          (t[i++] = T.n),
          (t[i++] = T.d),
          (t[i++] = T.s),
          (t[i++] = T.t),
          (t[i++] = T.r),
          (t[i++] = T.e),
          (t[i++] = T.a),
          (t[i++] = T.m),
          i - a
        );
      }),
      e
    );
  })(yr),
  Fa = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = r.call(this, t) || this;
      return (a.contents = i), a;
    }
    return (
      (e.prototype.asUint8Array = function () {
        return this.contents.slice();
      }),
      (e.prototype.clone = function (t) {
        return e.of(this.dict.clone(t), this.contents.slice());
      }),
      (e.prototype.getContentsString = function () {
        return _0(this.contents);
      }),
      (e.prototype.getContents = function () {
        return this.contents;
      }),
      (e.prototype.getContentsSize = function () {
        return this.contents.length;
      }),
      (e.of = function (t, i) {
        return new e(t, i);
      }),
      e
    );
  })(Br),
  R0 = {},
  D0 = new Map(),
  gt = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = this;
      if (t !== R0) throw new Qf("PDFRef");
      return (
        (u = r.call(this) || this),
        (u.objectNumber = i),
        (u.generationNumber = a),
        (u.tag = i + " " + a + " R"),
        u
      );
    }
    return (
      (e.prototype.clone = function () {
        return this;
      }),
      (e.prototype.toString = function () {
        return this.tag;
      }),
      (e.prototype.sizeInBytes = function () {
        return this.tag.length;
      }),
      (e.prototype.copyBytesInto = function (t, i) {
        return (i += rr(this.tag, t, i)), this.tag.length;
      }),
      (e.of = function (t, i) {
        i === void 0 && (i = 0);
        var a = t + " " + i + " R",
          u = D0.get(a);
        return u || ((u = new e(R0, t, i)), D0.set(a, u)), u;
      }),
      e
    );
  })(yr),
  ut = (function () {
    function r(e, t) {
      (this.name = e), (this.args = t || []);
    }
    return (
      (r.prototype.clone = function (e) {
        for (
          var t = new Array(this.args.length), i = 0, a = t.length;
          i < a;
          i++
        ) {
          var u = this.args[i];
          t[i] = u instanceof yr ? u.clone(e) : u;
        }
        return r.of(this.name, t);
      }),
      (r.prototype.toString = function () {
        for (var e = "", t = 0, i = this.args.length; t < i; t++)
          e += String(this.args[t]) + " ";
        return (e += this.name), e;
      }),
      (r.prototype.sizeInBytes = function () {
        for (var e = 0, t = 0, i = this.args.length; t < i; t++) {
          var a = this.args[t];
          e += (a instanceof yr ? a.sizeInBytes() : a.length) + 1;
        }
        return (e += this.name.length), e;
      }),
      (r.prototype.copyBytesInto = function (e, t) {
        for (var i = t, a = 0, u = this.args.length; a < u; a++) {
          var s = this.args[a];
          s instanceof yr ? (t += s.copyBytesInto(e, t)) : (t += rr(s, e, t)),
            (e[t++] = T.Space);
        }
        return (t += rr(this.name, e, t)), t - i;
      }),
      (r.of = function (e, t) {
        return new r(e, t);
      }),
      r
    );
  })(),
  If;
(function (r) {
  (r.NonStrokingColor = "sc"),
    (r.NonStrokingColorN = "scn"),
    (r.NonStrokingColorRgb = "rg"),
    (r.NonStrokingColorGray = "g"),
    (r.NonStrokingColorCmyk = "k"),
    (r.NonStrokingColorspace = "cs"),
    (r.StrokingColor = "SC"),
    (r.StrokingColorN = "SCN"),
    (r.StrokingColorRgb = "RG"),
    (r.StrokingColorGray = "G"),
    (r.StrokingColorCmyk = "K"),
    (r.StrokingColorspace = "CS"),
    (r.BeginMarkedContentSequence = "BDC"),
    (r.BeginMarkedContent = "BMC"),
    (r.EndMarkedContent = "EMC"),
    (r.MarkedContentPointWithProps = "DP"),
    (r.MarkedContentPoint = "MP"),
    (r.DrawObject = "Do"),
    (r.ConcatTransformationMatrix = "cm"),
    (r.PopGraphicsState = "Q"),
    (r.PushGraphicsState = "q"),
    (r.SetFlatness = "i"),
    (r.SetGraphicsStateParams = "gs"),
    (r.SetLineCapStyle = "J"),
    (r.SetLineDashPattern = "d"),
    (r.SetLineJoinStyle = "j"),
    (r.SetLineMiterLimit = "M"),
    (r.SetLineWidth = "w"),
    (r.SetTextMatrix = "Tm"),
    (r.SetRenderingIntent = "ri"),
    (r.AppendRectangle = "re"),
    (r.BeginInlineImage = "BI"),
    (r.BeginInlineImageData = "ID"),
    (r.EndInlineImage = "EI"),
    (r.ClipEvenOdd = "W*"),
    (r.ClipNonZero = "W"),
    (r.CloseAndStroke = "s"),
    (r.CloseFillEvenOddAndStroke = "b*"),
    (r.CloseFillNonZeroAndStroke = "b"),
    (r.ClosePath = "h"),
    (r.AppendBezierCurve = "c"),
    (r.CurveToReplicateFinalPoint = "y"),
    (r.CurveToReplicateInitialPoint = "v"),
    (r.EndPath = "n"),
    (r.FillEvenOddAndStroke = "B*"),
    (r.FillEvenOdd = "f*"),
    (r.FillNonZeroAndStroke = "B"),
    (r.FillNonZero = "f"),
    (r.LegacyFillNonZero = "F"),
    (r.LineTo = "l"),
    (r.MoveTo = "m"),
    (r.ShadingFill = "sh"),
    (r.StrokePath = "S"),
    (r.BeginText = "BT"),
    (r.EndText = "ET"),
    (r.MoveText = "Td"),
    (r.MoveTextSetLeading = "TD"),
    (r.NextLine = "T*"),
    (r.SetCharacterSpacing = "Tc"),
    (r.SetFontAndSize = "Tf"),
    (r.SetTextHorizontalScaling = "Tz"),
    (r.SetTextLineHeight = "TL"),
    (r.SetTextRenderingMode = "Tr"),
    (r.SetTextRise = "Ts"),
    (r.SetWordSpacing = "Tw"),
    (r.ShowText = "Tj"),
    (r.ShowTextAdjusted = "TJ"),
    (r.ShowTextLine = "'"),
    (r.ShowTextLineAndSpace = '"'),
    (r.Type3D0 = "d0"),
    (r.Type3D1 = "d1"),
    (r.BeginCompatibilitySection = "BX"),
    (r.EndCompatibilitySection = "EX");
})(If || (If = {}));
const st = If;
var ec = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = r.call(this, t) || this;
      return (
        (a.computeContents = function () {
          var u = a.getUnencodedContents();
          return a.encode ? yl.deflate(u) : u;
        }),
        (a.encode = i),
        i && t.set(P.of("Filter"), P.of("FlateDecode")),
        (a.contentsCache = Bn.populatedBy(a.computeContents)),
        a
      );
    }
    return (
      (e.prototype.getContents = function () {
        return this.contentsCache.access();
      }),
      (e.prototype.getContentsSize = function () {
        return this.contentsCache.access().length;
      }),
      (e.prototype.getUnencodedContents = function () {
        throw new Jr(this.constructor.name, "getUnencodedContents");
      }),
      e
    );
  })(Br),
  ya = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      a === void 0 && (a = !0);
      var u = r.call(this, t, a) || this;
      return (u.operators = i), u;
    }
    return (
      (e.prototype.push = function () {
        for (var t, i = [], a = 0; a < arguments.length; a++)
          i[a] = arguments[a];
        (t = this.operators).push.apply(t, i);
      }),
      (e.prototype.clone = function (t) {
        for (
          var i = new Array(this.operators.length),
            a = 0,
            u = this.operators.length;
          a < u;
          a++
        )
          i[a] = this.operators[a].clone(t);
        var s = this,
          c = s.dict,
          d = s.encode;
        return e.of(c.clone(t), i, d);
      }),
      (e.prototype.getContentsString = function () {
        for (var t = "", i = 0, a = this.operators.length; i < a; i++)
          t +=
            this.operators[i] +
            `
`;
        return t;
      }),
      (e.prototype.getUnencodedContents = function () {
        for (
          var t = new Uint8Array(this.getUnencodedContentsSize()),
            i = 0,
            a = 0,
            u = this.operators.length;
          a < u;
          a++
        )
          (i += this.operators[a].copyBytesInto(t, i)), (t[i++] = T.Newline);
        return t;
      }),
      (e.prototype.getUnencodedContentsSize = function () {
        for (var t = 0, i = 0, a = this.operators.length; i < a; i++)
          t += this.operators[i].sizeInBytes() + 1;
        return t;
      }),
      (e.of = function (t, i, a) {
        return a === void 0 && (a = !0), new e(t, i, a);
      }),
      e
    );
  })(ec),
  Rm = (function () {
    function r(e) {
      this.seed = e;
    }
    return (
      (r.prototype.nextInt = function () {
        var e = Math.sin(this.seed++) * 1e4;
        return e - Math.floor(e);
      }),
      (r.withSeed = function (e) {
        return new r(e);
      }),
      r
    );
  })(),
  Dm = function (r, e) {
    var t = r[0],
      i = e[0];
    return t.objectNumber - i.objectNumber;
  },
  Mf = (function () {
    function r() {
      (this.largestObjectNumber = 0),
        (this.header = wl.forVersion(1, 7)),
        (this.trailerInfo = {}),
        (this.indirectObjects = new Map()),
        (this.rng = Rm.withSeed(1));
    }
    return (
      (r.prototype.assign = function (e, t) {
        this.indirectObjects.set(e, t),
          e.objectNumber > this.largestObjectNumber &&
            (this.largestObjectNumber = e.objectNumber);
      }),
      (r.prototype.nextRef = function () {
        return (this.largestObjectNumber += 1), gt.of(this.largestObjectNumber);
      }),
      (r.prototype.register = function (e) {
        var t = this.nextRef();
        return this.assign(t, e), t;
      }),
      (r.prototype.delete = function (e) {
        return this.indirectObjects.delete(e);
      }),
      (r.prototype.lookupMaybe = function (e) {
        for (var t = [], i = 1; i < arguments.length; i++)
          t[i - 1] = arguments[i];
        var a = t.includes(Er),
          u = e instanceof gt ? this.indirectObjects.get(e) : e;
        if (!(!u || (u === Er && !a))) {
          for (var s = 0, c = t.length; s < c; s++) {
            var d = t[s];
            if (d === Er) {
              if (u === Er) return u;
            } else if (u instanceof d) return u;
          }
          throw new il(t, u);
        }
      }),
      (r.prototype.lookup = function (e) {
        for (var t = [], i = 1; i < arguments.length; i++)
          t[i - 1] = arguments[i];
        var a = e instanceof gt ? this.indirectObjects.get(e) : e;
        if (t.length === 0) return a;
        for (var u = 0, s = t.length; u < s; u++) {
          var c = t[u];
          if (c === Er) {
            if (a === Er) return a;
          } else if (a instanceof c) return a;
        }
        throw new il(t, a);
      }),
      (r.prototype.getObjectRef = function (e) {
        for (
          var t = Array.from(this.indirectObjects.entries()),
            i = 0,
            a = t.length;
          i < a;
          i++
        ) {
          var u = t[i],
            s = u[0],
            c = u[1];
          if (c === e) return s;
        }
      }),
      (r.prototype.enumerateIndirectObjects = function () {
        return Array.from(this.indirectObjects.entries()).sort(Dm);
      }),
      (r.prototype.obj = function (e) {
        if (e instanceof yr) return e;
        if (e == null) return Er;
        if (typeof e == "string") return P.of(e);
        if (typeof e == "number") return qe.of(e);
        if (typeof e == "boolean") return e ? ka.True : ka.False;
        if (Array.isArray(e)) {
          for (var t = ct.withContext(this), i = 0, a = e.length; i < a; i++)
            t.push(this.obj(e[i]));
          return t;
        } else {
          for (
            var u = Qe.withContext(this),
              s = Object.keys(e),
              i = 0,
              a = s.length;
            i < a;
            i++
          ) {
            var c = s[i],
              d = e[c];
            d !== void 0 && u.set(P.of(c), this.obj(d));
          }
          return u;
        }
      }),
      (r.prototype.stream = function (e, t) {
        return t === void 0 && (t = {}), Fa.of(this.obj(t), jf(e));
      }),
      (r.prototype.flateStream = function (e, t) {
        return (
          t === void 0 && (t = {}),
          this.stream(
            yl.deflate(jf(e)),
            Ze(Ze({}, t), { Filter: "FlateDecode" })
          )
        );
      }),
      (r.prototype.contentStream = function (e, t) {
        return t === void 0 && (t = {}), ya.of(this.obj(t), e);
      }),
      (r.prototype.formXObject = function (e, t) {
        return (
          t === void 0 && (t = {}),
          this.contentStream(
            e,
            Ze(
              Ze(
                {
                  BBox: this.obj([0, 0, 0, 0]),
                  Matrix: this.obj([1, 0, 0, 1, 0, 0]),
                },
                t
              ),
              { Type: "XObject", Subtype: "Form" }
            )
          )
        );
      }),
      (r.prototype.getPushGraphicsStateContentStream = function () {
        if (this.pushGraphicsStateContentStreamRef)
          return this.pushGraphicsStateContentStreamRef;
        var e = this.obj({}),
          t = ut.of(st.PushGraphicsState),
          i = ya.of(e, [t]);
        return (
          (this.pushGraphicsStateContentStreamRef = this.register(i)),
          this.pushGraphicsStateContentStreamRef
        );
      }),
      (r.prototype.getPopGraphicsStateContentStream = function () {
        if (this.popGraphicsStateContentStreamRef)
          return this.popGraphicsStateContentStreamRef;
        var e = this.obj({}),
          t = ut.of(st.PopGraphicsState),
          i = ya.of(e, [t]);
        return (
          (this.popGraphicsStateContentStreamRef = this.register(i)),
          this.popGraphicsStateContentStreamRef
        );
      }),
      (r.prototype.addRandomSuffix = function (e, t) {
        return (
          t === void 0 && (t = 4),
          e + "-" + Math.floor(this.rng.nextInt() * Math.pow(10, t))
        );
      }),
      (r.create = function () {
        return new r();
      }),
      r
    );
  })(),
  In = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      a === void 0 && (a = !0);
      var u = r.call(this, t, i) || this;
      return (u.normalized = !1), (u.autoNormalizeCTM = a), u;
    }
    return (
      (e.prototype.clone = function (t) {
        for (
          var i = e.fromMapWithContext(
              new Map(),
              t || this.context,
              this.autoNormalizeCTM
            ),
            a = this.entries(),
            u = 0,
            s = a.length;
          u < s;
          u++
        ) {
          var c = a[u],
            d = c[0],
            h = c[1];
          i.set(d, h);
        }
        return i;
      }),
      (e.prototype.Parent = function () {
        return this.lookupMaybe(P.Parent, Qe);
      }),
      (e.prototype.Contents = function () {
        return this.lookup(P.of("Contents"));
      }),
      (e.prototype.Annots = function () {
        return this.lookupMaybe(P.Annots, ct);
      }),
      (e.prototype.BleedBox = function () {
        return this.lookupMaybe(P.BleedBox, ct);
      }),
      (e.prototype.TrimBox = function () {
        return this.lookupMaybe(P.TrimBox, ct);
      }),
      (e.prototype.ArtBox = function () {
        return this.lookupMaybe(P.ArtBox, ct);
      }),
      (e.prototype.Resources = function () {
        var t = this.getInheritableAttribute(P.Resources);
        return this.context.lookupMaybe(t, Qe);
      }),
      (e.prototype.MediaBox = function () {
        var t = this.getInheritableAttribute(P.MediaBox);
        return this.context.lookup(t, ct);
      }),
      (e.prototype.CropBox = function () {
        var t = this.getInheritableAttribute(P.CropBox);
        return this.context.lookupMaybe(t, ct);
      }),
      (e.prototype.Rotate = function () {
        var t = this.getInheritableAttribute(P.Rotate);
        return this.context.lookupMaybe(t, qe);
      }),
      (e.prototype.getInheritableAttribute = function (t) {
        var i;
        return (
          this.ascend(function (a) {
            i || (i = a.get(t));
          }),
          i
        );
      }),
      (e.prototype.setParent = function (t) {
        this.set(P.Parent, t);
      }),
      (e.prototype.addContentStream = function (t) {
        var i = this.normalizedEntries().Contents || this.context.obj([]);
        this.set(P.Contents, i), i.push(t);
      }),
      (e.prototype.wrapContentStreams = function (t, i) {
        var a = this.Contents();
        return a instanceof ct ? (a.insert(0, t), a.push(i), !0) : !1;
      }),
      (e.prototype.addAnnot = function (t) {
        var i = this.normalizedEntries().Annots;
        i.push(t);
      }),
      (e.prototype.removeAnnot = function (t) {
        var i = this.normalizedEntries().Annots,
          a = i.indexOf(t);
        a !== void 0 && i.remove(a);
      }),
      (e.prototype.setFontDictionary = function (t, i) {
        var a = this.normalizedEntries().Font;
        a.set(t, i);
      }),
      (e.prototype.newFontDictionaryKey = function (t) {
        var i = this.normalizedEntries().Font;
        return i.uniqueKey(t);
      }),
      (e.prototype.newFontDictionary = function (t, i) {
        var a = this.newFontDictionaryKey(t);
        return this.setFontDictionary(a, i), a;
      }),
      (e.prototype.setXObject = function (t, i) {
        var a = this.normalizedEntries().XObject;
        a.set(t, i);
      }),
      (e.prototype.newXObjectKey = function (t) {
        var i = this.normalizedEntries().XObject;
        return i.uniqueKey(t);
      }),
      (e.prototype.newXObject = function (t, i) {
        var a = this.newXObjectKey(t);
        return this.setXObject(a, i), a;
      }),
      (e.prototype.setExtGState = function (t, i) {
        var a = this.normalizedEntries().ExtGState;
        a.set(t, i);
      }),
      (e.prototype.newExtGStateKey = function (t) {
        var i = this.normalizedEntries().ExtGState;
        return i.uniqueKey(t);
      }),
      (e.prototype.newExtGState = function (t, i) {
        var a = this.newExtGStateKey(t);
        return this.setExtGState(a, i), a;
      }),
      (e.prototype.ascend = function (t) {
        t(this);
        var i = this.Parent();
        i && i.ascend(t);
      }),
      (e.prototype.normalize = function () {
        if (!this.normalized) {
          var t = this.context,
            i = this.get(P.Contents),
            a = this.context.lookup(i);
          a instanceof Br && this.set(P.Contents, t.obj([i])),
            this.autoNormalizeCTM &&
              this.wrapContentStreams(
                this.context.getPushGraphicsStateContentStream(),
                this.context.getPopGraphicsStateContentStream()
              );
          var u = this.getInheritableAttribute(P.Resources),
            s = t.lookupMaybe(u, Qe) || t.obj({});
          this.set(P.Resources, s);
          var c = s.lookupMaybe(P.Font, Qe) || t.obj({});
          s.set(P.Font, c);
          var d = s.lookupMaybe(P.XObject, Qe) || t.obj({});
          s.set(P.XObject, d);
          var h = s.lookupMaybe(P.ExtGState, Qe) || t.obj({});
          s.set(P.ExtGState, h);
          var y = this.Annots() || t.obj([]);
          this.set(P.Annots, y), (this.normalized = !0);
        }
      }),
      (e.prototype.normalizedEntries = function () {
        this.normalize();
        var t = this.Annots(),
          i = this.Resources(),
          a = this.Contents();
        return {
          Annots: t,
          Resources: i,
          Contents: a,
          Font: i.lookup(P.Font, Qe),
          XObject: i.lookup(P.XObject, Qe),
          ExtGState: i.lookup(P.ExtGState, Qe),
        };
      }),
      (e.InheritableEntries = ["Resources", "MediaBox", "CropBox", "Rotate"]),
      (e.withContextAndParent = function (t, i) {
        var a = new Map();
        return (
          a.set(P.Type, P.Page),
          a.set(P.Parent, i),
          a.set(P.Resources, t.obj({})),
          a.set(P.MediaBox, t.obj([0, 0, 612, 792])),
          new e(a, t, !1)
        );
      }),
      (e.fromMapWithContext = function (t, i, a) {
        return a === void 0 && (a = !0), new e(t, i, a);
      }),
      e
    );
  })(Qe),
  O0 = (function () {
    function r(e, t) {
      var i = this;
      (this.traversedObjects = new Map()),
        (this.copy = function (a) {
          return a instanceof In
            ? i.copyPDFPage(a)
            : a instanceof Qe
            ? i.copyPDFDict(a)
            : a instanceof ct
            ? i.copyPDFArray(a)
            : a instanceof Br
            ? i.copyPDFStream(a)
            : a instanceof gt
            ? i.copyPDFIndirectObject(a)
            : a.clone();
        }),
        (this.copyPDFPage = function (a) {
          for (
            var u = a.clone(), s = In.InheritableEntries, c = 0, d = s.length;
            c < d;
            c++
          ) {
            var h = P.of(s[c]),
              y = u.getInheritableAttribute(h);
            !u.get(h) && y && u.set(h, y);
          }
          return u.delete(P.of("Parent")), i.copyPDFDict(u);
        }),
        (this.copyPDFDict = function (a) {
          if (i.traversedObjects.has(a)) return i.traversedObjects.get(a);
          var u = a.clone(i.dest);
          i.traversedObjects.set(a, u);
          for (var s = a.entries(), c = 0, d = s.length; c < d; c++) {
            var h = s[c],
              y = h[0],
              m = h[1];
            u.set(y, i.copy(m));
          }
          return u;
        }),
        (this.copyPDFArray = function (a) {
          if (i.traversedObjects.has(a)) return i.traversedObjects.get(a);
          var u = a.clone(i.dest);
          i.traversedObjects.set(a, u);
          for (var s = 0, c = a.size(); s < c; s++) {
            var d = a.get(s);
            u.set(s, i.copy(d));
          }
          return u;
        }),
        (this.copyPDFStream = function (a) {
          if (i.traversedObjects.has(a)) return i.traversedObjects.get(a);
          var u = a.clone(i.dest);
          i.traversedObjects.set(a, u);
          for (var s = a.dict.entries(), c = 0, d = s.length; c < d; c++) {
            var h = s[c],
              y = h[0],
              m = h[1];
            u.dict.set(y, i.copy(m));
          }
          return u;
        }),
        (this.copyPDFIndirectObject = function (a) {
          var u = i.traversedObjects.has(a);
          if (!u) {
            var s = i.dest.nextRef();
            i.traversedObjects.set(a, s);
            var c = i.src.lookup(a);
            if (c) {
              var d = i.copy(c);
              i.dest.assign(s, d);
            }
          }
          return i.traversedObjects.get(a);
        }),
        (this.src = e),
        (this.dest = t);
    }
    return (
      (r.for = function (e, t) {
        return new r(e, t);
      }),
      r
    );
  })(),
  vp = (function () {
    function r(e) {
      (this.subsections = e ? [[e]] : []),
        (this.chunkIdx = 0),
        (this.chunkLength = e ? 1 : 0);
    }
    return (
      (r.prototype.addEntry = function (e, t) {
        this.append({ ref: e, offset: t, deleted: !1 });
      }),
      (r.prototype.addDeletedEntry = function (e, t) {
        this.append({ ref: e, offset: t, deleted: !0 });
      }),
      (r.prototype.toString = function () {
        for (
          var e = `xref
`,
            t = 0,
            i = this.subsections.length;
          t < i;
          t++
        ) {
          var a = this.subsections[t];
          e +=
            a[0].ref.objectNumber +
            " " +
            a.length +
            `
`;
          for (var u = 0, s = a.length; u < s; u++) {
            var c = a[u];
            (e += vn(String(c.offset), 10, "0")),
              (e += " "),
              (e += vn(String(c.ref.generationNumber), 5, "0")),
              (e += " "),
              (e += c.deleted ? "f" : "n"),
              (e += ` 
`);
          }
        }
        return e;
      }),
      (r.prototype.sizeInBytes = function () {
        for (var e = 5, t = 0, i = this.subsections.length; t < i; t++) {
          var a = this.subsections[t],
            u = a.length,
            s = a[0];
          (e += 2),
            (e += String(s.ref.objectNumber).length),
            (e += String(u).length),
            (e += 20 * u);
        }
        return e;
      }),
      (r.prototype.copyBytesInto = function (e, t) {
        var i = t;
        return (
          (e[t++] = T.x),
          (e[t++] = T.r),
          (e[t++] = T.e),
          (e[t++] = T.f),
          (e[t++] = T.Newline),
          (t += this.copySubsectionsIntoBuffer(this.subsections, e, t)),
          t - i
        );
      }),
      (r.prototype.copySubsectionsIntoBuffer = function (e, t, i) {
        for (var a = i, u = e.length, s = 0; s < u; s++) {
          var c = this.subsections[s],
            d = String(c[0].ref.objectNumber);
          (i += rr(d, t, i)), (t[i++] = T.Space);
          var h = String(c.length);
          (i += rr(h, t, i)),
            (t[i++] = T.Newline),
            (i += this.copyEntriesIntoBuffer(c, t, i));
        }
        return i - a;
      }),
      (r.prototype.copyEntriesIntoBuffer = function (e, t, i) {
        for (var a = e.length, u = 0; u < a; u++) {
          var s = e[u],
            c = vn(String(s.offset), 10, "0");
          (i += rr(c, t, i)), (t[i++] = T.Space);
          var d = vn(String(s.ref.generationNumber), 5, "0");
          (i += rr(d, t, i)),
            (t[i++] = T.Space),
            (t[i++] = s.deleted ? T.f : T.n),
            (t[i++] = T.Space),
            (t[i++] = T.Newline);
        }
        return 20 * a;
      }),
      (r.prototype.append = function (e) {
        if (this.chunkLength === 0) {
          this.subsections.push([e]),
            (this.chunkIdx = 0),
            (this.chunkLength = 1);
          return;
        }
        var t = this.subsections[this.chunkIdx],
          i = t[this.chunkLength - 1];
        e.ref.objectNumber - i.ref.objectNumber > 1
          ? (this.subsections.push([e]),
            (this.chunkIdx += 1),
            (this.chunkLength = 1))
          : (t.push(e), (this.chunkLength += 1));
      }),
      (r.create = function () {
        return new r({ ref: gt.of(0, 65535), offset: 0, deleted: !0 });
      }),
      (r.createEmpty = function () {
        return new r();
      }),
      r
    );
  })(),
  tc = (function () {
    function r(e) {
      this.lastXRefOffset = String(e);
    }
    return (
      (r.prototype.toString = function () {
        return (
          `startxref
` +
          this.lastXRefOffset +
          `
%%EOF`
        );
      }),
      (r.prototype.sizeInBytes = function () {
        return 16 + this.lastXRefOffset.length;
      }),
      (r.prototype.copyBytesInto = function (e, t) {
        var i = t;
        return (
          (e[t++] = T.s),
          (e[t++] = T.t),
          (e[t++] = T.a),
          (e[t++] = T.r),
          (e[t++] = T.t),
          (e[t++] = T.x),
          (e[t++] = T.r),
          (e[t++] = T.e),
          (e[t++] = T.f),
          (e[t++] = T.Newline),
          (t += rr(this.lastXRefOffset, e, t)),
          (e[t++] = T.Newline),
          (e[t++] = T.Percent),
          (e[t++] = T.Percent),
          (e[t++] = T.E),
          (e[t++] = T.O),
          (e[t++] = T.F),
          t - i
        );
      }),
      (r.forLastCrossRefSectionOffset = function (e) {
        return new r(e);
      }),
      r
    );
  })(),
  Om = (function () {
    function r(e) {
      this.dict = e;
    }
    return (
      (r.prototype.toString = function () {
        return (
          `trailer
` + this.dict.toString()
        );
      }),
      (r.prototype.sizeInBytes = function () {
        return 8 + this.dict.sizeInBytes();
      }),
      (r.prototype.copyBytesInto = function (e, t) {
        var i = t;
        return (
          (e[t++] = T.t),
          (e[t++] = T.r),
          (e[t++] = T.a),
          (e[t++] = T.i),
          (e[t++] = T.l),
          (e[t++] = T.e),
          (e[t++] = T.r),
          (e[t++] = T.Newline),
          (t += this.dict.copyBytesInto(e, t)),
          t - i
        );
      }),
      (r.of = function (e) {
        return new r(e);
      }),
      r
    );
  })(),
  gp = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      a === void 0 && (a = !0);
      var u = r.call(this, t.obj({}), a) || this;
      return (
        (u.objects = i),
        (u.offsets = u.computeObjectOffsets()),
        (u.offsetsString = u.computeOffsetsString()),
        u.dict.set(P.of("Type"), P.of("ObjStm")),
        u.dict.set(P.of("N"), qe.of(u.objects.length)),
        u.dict.set(P.of("First"), qe.of(u.offsetsString.length)),
        u
      );
    }
    return (
      (e.prototype.getObjectsCount = function () {
        return this.objects.length;
      }),
      (e.prototype.clone = function (t) {
        return e.withContextAndObjects(
          t || this.dict.context,
          this.objects.slice(),
          this.encode
        );
      }),
      (e.prototype.getContentsString = function () {
        for (
          var t = this.offsetsString, i = 0, a = this.objects.length;
          i < a;
          i++
        ) {
          var u = this.objects[i],
            s = u[1];
          t +=
            s +
            `
`;
        }
        return t;
      }),
      (e.prototype.getUnencodedContents = function () {
        for (
          var t = new Uint8Array(this.getUnencodedContentsSize()),
            i = rr(this.offsetsString, t, 0),
            a = 0,
            u = this.objects.length;
          a < u;
          a++
        ) {
          var s = this.objects[a],
            c = s[1];
          (i += c.copyBytesInto(t, i)), (t[i++] = T.Newline);
        }
        return t;
      }),
      (e.prototype.getUnencodedContentsSize = function () {
        return (
          this.offsetsString.length +
          nl(this.offsets)[1] +
          nl(this.objects)[1].sizeInBytes() +
          1
        );
      }),
      (e.prototype.computeOffsetsString = function () {
        for (var t = "", i = 0, a = this.offsets.length; i < a; i++) {
          var u = this.offsets[i],
            s = u[0],
            c = u[1];
          t += s + " " + c + " ";
        }
        return t;
      }),
      (e.prototype.computeObjectOffsets = function () {
        for (
          var t = 0,
            i = new Array(this.objects.length),
            a = 0,
            u = this.objects.length;
          a < u;
          a++
        ) {
          var s = this.objects[a],
            c = s[0],
            d = s[1];
          (i[a] = [c.objectNumber, t]), (t += d.sizeInBytes() + 1);
        }
        return i;
      }),
      (e.withContextAndObjects = function (t, i, a) {
        return a === void 0 && (a = !0), new e(t, i, a);
      }),
      e
    );
  })(ec),
  yp = (function () {
    function r(e, t) {
      var i = this;
      (this.parsedObjects = 0),
        (this.shouldWaitForTick = function (a) {
          return (
            (i.parsedObjects += a), i.parsedObjects % i.objectsPerTick === 0
          );
        }),
        (this.context = e),
        (this.objectsPerTick = t);
    }
    return (
      (r.prototype.serializeToBuffer = function () {
        return _e(this, void 0, void 0, function () {
          var e, t, i, a, u, s, c, d, h, y, m, x, w, F, E, R, D;
          return $e(this, function (L) {
            switch (L.label) {
              case 0:
                return [4, this.computeBufferSize()];
              case 1:
                (e = L.sent()),
                  (t = e.size),
                  (i = e.header),
                  (a = e.indirectObjects),
                  (u = e.xref),
                  (s = e.trailerDict),
                  (c = e.trailer),
                  (d = 0),
                  (h = new Uint8Array(t)),
                  (d += i.copyBytesInto(h, d)),
                  (h[d++] = T.Newline),
                  (h[d++] = T.Newline),
                  (y = 0),
                  (m = a.length),
                  (L.label = 2);
              case 2:
                return y < m
                  ? ((x = a[y]),
                    (w = x[0]),
                    (F = x[1]),
                    (E = String(w.objectNumber)),
                    (d += rr(E, h, d)),
                    (h[d++] = T.Space),
                    (R = String(w.generationNumber)),
                    (d += rr(R, h, d)),
                    (h[d++] = T.Space),
                    (h[d++] = T.o),
                    (h[d++] = T.b),
                    (h[d++] = T.j),
                    (h[d++] = T.Newline),
                    (d += F.copyBytesInto(h, d)),
                    (h[d++] = T.Newline),
                    (h[d++] = T.e),
                    (h[d++] = T.n),
                    (h[d++] = T.d),
                    (h[d++] = T.o),
                    (h[d++] = T.b),
                    (h[d++] = T.j),
                    (h[d++] = T.Newline),
                    (h[d++] = T.Newline),
                    (D = F instanceof gp ? F.getObjectsCount() : 1),
                    this.shouldWaitForTick(D) ? [4, yo()] : [3, 4])
                  : [3, 5];
              case 3:
                L.sent(), (L.label = 4);
              case 4:
                return y++, [3, 2];
              case 5:
                return (
                  u && ((d += u.copyBytesInto(h, d)), (h[d++] = T.Newline)),
                  s &&
                    ((d += s.copyBytesInto(h, d)),
                    (h[d++] = T.Newline),
                    (h[d++] = T.Newline)),
                  (d += c.copyBytesInto(h, d)),
                  [2, h]
                );
            }
          });
        });
      }),
      (r.prototype.computeIndirectObjectSize = function (e) {
        var t = e[0],
          i = e[1],
          a = t.sizeInBytes() + 3,
          u = i.sizeInBytes() + 9;
        return a + u;
      }),
      (r.prototype.createTrailerDict = function () {
        return this.context.obj({
          Size: this.context.largestObjectNumber + 1,
          Root: this.context.trailerInfo.Root,
          Encrypt: this.context.trailerInfo.Encrypt,
          Info: this.context.trailerInfo.Info,
          ID: this.context.trailerInfo.ID,
        });
      }),
      (r.prototype.computeBufferSize = function () {
        return _e(this, void 0, void 0, function () {
          var e, t, i, a, u, s, c, d, h, y, m;
          return $e(this, function (x) {
            switch (x.label) {
              case 0:
                (e = wl.forVersion(1, 7)),
                  (t = e.sizeInBytes() + 2),
                  (i = vp.create()),
                  (a = this.context.enumerateIndirectObjects()),
                  (u = 0),
                  (s = a.length),
                  (x.label = 1);
              case 1:
                return u < s
                  ? ((c = a[u]),
                    (d = c[0]),
                    i.addEntry(d, t),
                    (t += this.computeIndirectObjectSize(c)),
                    this.shouldWaitForTick(1) ? [4, yo()] : [3, 3])
                  : [3, 4];
              case 2:
                x.sent(), (x.label = 3);
              case 3:
                return u++, [3, 1];
              case 4:
                return (
                  (h = t),
                  (t += i.sizeInBytes() + 1),
                  (y = Om.of(this.createTrailerDict())),
                  (t += y.sizeInBytes() + 2),
                  (m = tc.forLastCrossRefSectionOffset(h)),
                  (t += m.sizeInBytes()),
                  [
                    2,
                    {
                      size: t,
                      header: e,
                      indirectObjects: a,
                      xref: i,
                      trailerDict: y,
                      trailer: m,
                    },
                  ]
                );
            }
          });
        });
      }),
      (r.forContext = function (e, t) {
        return new r(e, t);
      }),
      r
    );
  })(),
  mp = (function (r) {
    ve(e, r);
    function e(t) {
      var i = r.call(this) || this;
      return (i.data = t), i;
    }
    return (
      (e.prototype.clone = function () {
        return e.of(this.data.slice());
      }),
      (e.prototype.toString = function () {
        return "PDFInvalidObject(" + this.data.length + " bytes)";
      }),
      (e.prototype.sizeInBytes = function () {
        return this.data.length;
      }),
      (e.prototype.copyBytesInto = function (t, i) {
        for (var a = this.data.length, u = 0; u < a; u++) t[i++] = this.data[u];
        return a;
      }),
      (e.of = function (t) {
        return new e(t);
      }),
      e
    );
  })(yr),
  ui;
(function (r) {
  (r[(r.Deleted = 0)] = "Deleted"),
    (r[(r.Uncompressed = 1)] = "Uncompressed"),
    (r[(r.Compressed = 2)] = "Compressed");
})(ui || (ui = {}));
var Am = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      a === void 0 && (a = !0);
      var u = r.call(this, t, a) || this;
      return (
        (u.computeIndex = function () {
          for (var s = [], c = 0, d = 0, h = u.entries.length; d < h; d++) {
            var y = u.entries[d],
              m = u.entries[d - 1];
            d === 0
              ? s.push(y.ref.objectNumber)
              : y.ref.objectNumber - m.ref.objectNumber > 1 &&
                (s.push(c), s.push(y.ref.objectNumber), (c = 0)),
              (c += 1);
          }
          return s.push(c), s;
        }),
        (u.computeEntryTuples = function () {
          for (
            var s = new Array(u.entries.length), c = 0, d = u.entries.length;
            c < d;
            c++
          ) {
            var h = u.entries[c];
            if (h.type === ui.Deleted) {
              var y = h.type,
                m = h.nextFreeObjectNumber,
                x = h.ref;
              s[c] = [y, m, x.generationNumber];
            }
            if (h.type === ui.Uncompressed) {
              var y = h.type,
                w = h.offset,
                x = h.ref;
              s[c] = [y, w, x.generationNumber];
            }
            if (h.type === ui.Compressed) {
              var y = h.type,
                F = h.objectStreamRef,
                E = h.index;
              s[c] = [y, F.objectNumber, E];
            }
          }
          return s;
        }),
        (u.computeMaxEntryByteWidths = function () {
          for (
            var s = u.entryTuplesCache.access(),
              c = [0, 0, 0],
              d = 0,
              h = s.length;
            d < h;
            d++
          ) {
            var y = s[d],
              m = y[0],
              x = y[1],
              w = y[2],
              F = Ju(m),
              E = Ju(x),
              R = Ju(w);
            F > c[0] && (c[0] = F),
              E > c[1] && (c[1] = E),
              R > c[2] && (c[2] = R);
          }
          return c;
        }),
        (u.entries = i || []),
        (u.entryTuplesCache = Bn.populatedBy(u.computeEntryTuples)),
        (u.maxByteWidthsCache = Bn.populatedBy(u.computeMaxEntryByteWidths)),
        (u.indexCache = Bn.populatedBy(u.computeIndex)),
        t.set(P.of("Type"), P.of("XRef")),
        u
      );
    }
    return (
      (e.prototype.addDeletedEntry = function (t, i) {
        var a = ui.Deleted;
        this.entries.push({ type: a, ref: t, nextFreeObjectNumber: i }),
          this.entryTuplesCache.invalidate(),
          this.maxByteWidthsCache.invalidate(),
          this.indexCache.invalidate(),
          this.contentsCache.invalidate();
      }),
      (e.prototype.addUncompressedEntry = function (t, i) {
        var a = ui.Uncompressed;
        this.entries.push({ type: a, ref: t, offset: i }),
          this.entryTuplesCache.invalidate(),
          this.maxByteWidthsCache.invalidate(),
          this.indexCache.invalidate(),
          this.contentsCache.invalidate();
      }),
      (e.prototype.addCompressedEntry = function (t, i, a) {
        var u = ui.Compressed;
        this.entries.push({ type: u, ref: t, objectStreamRef: i, index: a }),
          this.entryTuplesCache.invalidate(),
          this.maxByteWidthsCache.invalidate(),
          this.indexCache.invalidate(),
          this.contentsCache.invalidate();
      }),
      (e.prototype.clone = function (t) {
        var i = this,
          a = i.dict,
          u = i.entries,
          s = i.encode;
        return e.of(a.clone(t), u.slice(), s);
      }),
      (e.prototype.getContentsString = function () {
        for (
          var t = this.entryTuplesCache.access(),
            i = this.maxByteWidthsCache.access(),
            a = "",
            u = 0,
            s = t.length;
          u < s;
          u++
        ) {
          for (
            var c = t[u],
              d = c[0],
              h = c[1],
              y = c[2],
              m = ao(uo(d)),
              x = ao(uo(h)),
              w = ao(uo(y)),
              F = i[0] - 1;
            F >= 0;
            F--
          )
            a += (m[F] || 0).toString(2);
          for (var F = i[1] - 1; F >= 0; F--) a += (x[F] || 0).toString(2);
          for (var F = i[2] - 1; F >= 0; F--) a += (w[F] || 0).toString(2);
        }
        return a;
      }),
      (e.prototype.getUnencodedContents = function () {
        for (
          var t = this.entryTuplesCache.access(),
            i = this.maxByteWidthsCache.access(),
            a = new Uint8Array(this.getUnencodedContentsSize()),
            u = 0,
            s = 0,
            c = t.length;
          s < c;
          s++
        ) {
          for (
            var d = t[s],
              h = d[0],
              y = d[1],
              m = d[2],
              x = ao(uo(h)),
              w = ao(uo(y)),
              F = ao(uo(m)),
              E = i[0] - 1;
            E >= 0;
            E--
          )
            a[u++] = x[E] || 0;
          for (var E = i[1] - 1; E >= 0; E--) a[u++] = w[E] || 0;
          for (var E = i[2] - 1; E >= 0; E--) a[u++] = F[E] || 0;
        }
        return a;
      }),
      (e.prototype.getUnencodedContentsSize = function () {
        var t = this.maxByteWidthsCache.access(),
          i = py(t);
        return i * this.entries.length;
      }),
      (e.prototype.updateDict = function () {
        r.prototype.updateDict.call(this);
        var t = this.maxByteWidthsCache.access(),
          i = this.indexCache.access(),
          a = this.dict.context;
        this.dict.set(P.of("W"), a.obj(t)),
          this.dict.set(P.of("Index"), a.obj(i));
      }),
      (e.create = function (t, i) {
        i === void 0 && (i = !0);
        var a = new e(t, [], i);
        return a.addDeletedEntry(gt.of(0, 65535), 0), a;
      }),
      (e.of = function (t, i, a) {
        return a === void 0 && (a = !0), new e(t, i, a);
      }),
      e
    );
  })(ec),
  zm = (function (r) {
    ve(e, r);
    function e(t, i, a, u) {
      var s = r.call(this, t, i) || this;
      return (s.encodeStreams = a), (s.objectsPerStream = u), s;
    }
    return (
      (e.prototype.computeBufferSize = function () {
        return _e(this, void 0, void 0, function () {
          var t,
            i,
            a,
            u,
            s,
            c,
            d,
            h,
            F,
            E,
            y,
            D,
            m,
            x,
            R,
            w,
            F,
            E,
            R,
            D,
            L,
            N,
            q,
            K;
          return $e(this, function (M) {
            switch (M.label) {
              case 0:
                (t = this.context.largestObjectNumber + 1),
                  (i = wl.forVersion(1, 7)),
                  (a = i.sizeInBytes() + 2),
                  (u = Am.create(this.createTrailerDict(), this.encodeStreams)),
                  (s = []),
                  (c = []),
                  (d = []),
                  (h = this.context.enumerateIndirectObjects()),
                  (F = 0),
                  (E = h.length),
                  (M.label = 1);
              case 1:
                return F < E
                  ? ((y = h[F]),
                    (D = y[0]),
                    (m = y[1]),
                    (x =
                      D === this.context.trailerInfo.Encrypt ||
                      m instanceof Br ||
                      m instanceof mp ||
                      D.generationNumber !== 0),
                    x
                      ? (s.push(y),
                        u.addUncompressedEntry(D, a),
                        (a += this.computeIndirectObjectSize(y)),
                        this.shouldWaitForTick(1) ? [4, yo()] : [3, 3])
                      : [3, 4])
                  : [3, 6];
              case 2:
                M.sent(), (M.label = 3);
              case 3:
                return [3, 5];
              case 4:
                (R = nl(c)),
                  (w = nl(d)),
                  (!R || R.length % this.objectsPerStream === 0) &&
                    ((R = []), c.push(R), (w = gt.of(t++)), d.push(w)),
                  u.addCompressedEntry(D, w, R.length),
                  R.push(y),
                  (M.label = 5);
              case 5:
                return F++, [3, 1];
              case 6:
                (F = 0), (E = c.length), (M.label = 7);
              case 7:
                return F < E
                  ? ((R = c[F]),
                    (D = d[F]),
                    (L = gp.withContextAndObjects(
                      this.context,
                      R,
                      this.encodeStreams
                    )),
                    u.addUncompressedEntry(D, a),
                    (a += this.computeIndirectObjectSize([D, L])),
                    s.push([D, L]),
                    this.shouldWaitForTick(R.length) ? [4, yo()] : [3, 9])
                  : [3, 10];
              case 8:
                M.sent(), (M.label = 9);
              case 9:
                return F++, [3, 7];
              case 10:
                return (
                  (N = gt.of(t++)),
                  u.dict.set(P.of("Size"), qe.of(t)),
                  u.addUncompressedEntry(N, a),
                  (q = a),
                  (a += this.computeIndirectObjectSize([N, u])),
                  s.push([N, u]),
                  (K = tc.forLastCrossRefSectionOffset(q)),
                  (a += K.sizeInBytes()),
                  [2, { size: a, header: i, indirectObjects: s, trailer: K }]
                );
            }
          });
        });
      }),
      (e.forContext = function (t, i, a, u) {
        return (
          a === void 0 && (a = !0), u === void 0 && (u = 50), new e(t, i, a, u)
        );
      }),
      e
    );
  })(yp),
  Ve = (function (r) {
    ve(e, r);
    function e(t) {
      var i = r.call(this) || this;
      return (i.value = t), i;
    }
    return (
      (e.prototype.asBytes = function () {
        for (
          var t = this.value + (this.value.length % 2 === 1 ? "0" : ""),
            i = t.length,
            a = new Uint8Array(t.length / 2),
            u = 0,
            s = 0;
          u < i;

        ) {
          var c = parseInt(t.substring(u, u + 2), 16);
          (a[s] = c), (u += 2), (s += 1);
        }
        return a;
      }),
      (e.prototype.decodeText = function () {
        var t = this.asBytes();
        return ip(t) ? tp(t) : hp(t);
      }),
      (e.prototype.decodeDate = function () {
        var t = this.decodeText(),
          i = J0(t);
        if (!i) throw new pp(t);
        return i;
      }),
      (e.prototype.asString = function () {
        return this.value;
      }),
      (e.prototype.clone = function () {
        return e.of(this.value);
      }),
      (e.prototype.toString = function () {
        return "<" + this.value + ">";
      }),
      (e.prototype.sizeInBytes = function () {
        return this.value.length + 2;
      }),
      (e.prototype.copyBytesInto = function (t, i) {
        return (
          (t[i++] = T.LessThan),
          (i += rr(this.value, t, i)),
          (t[i++] = T.GreaterThan),
          this.value.length + 2
        );
      }),
      (e.of = function (t) {
        return new e(t);
      }),
      (e.fromText = function (t) {
        for (var i = my(t), a = "", u = 0, s = i.length; u < s; u++)
          a += Ea(i[u], 4);
        return new e(a);
      }),
      e
    );
  })(yr),
  al = (function () {
    function r(e, t) {
      (this.encoding =
        e === ba.ZapfDingbats
          ? Wu.ZapfDingbats
          : e === ba.Symbol
          ? Wu.Symbol
          : Wu.WinAnsi),
        (this.font = _y.load(e)),
        (this.fontName = this.font.FontName),
        (this.customName = t);
    }
    return (
      (r.prototype.encodeText = function (e) {
        for (
          var t = this.encodeTextAsGlyphs(e),
            i = new Array(t.length),
            a = 0,
            u = t.length;
          a < u;
          a++
        )
          i[a] = gl(t[a].code);
        return Ve.of(i.join(""));
      }),
      (r.prototype.widthOfTextAtSize = function (e, t) {
        for (
          var i = this.encodeTextAsGlyphs(e), a = 0, u = 0, s = i.length;
          u < s;
          u++
        ) {
          var c = i[u].name,
            d = (i[u + 1] || {}).name,
            h = this.font.getXAxisKerningForPair(c, d) || 0;
          a += this.widthOfGlyph(c) + h;
        }
        var y = t / 1e3;
        return a * y;
      }),
      (r.prototype.heightOfFontAtSize = function (e, t) {
        t === void 0 && (t = {});
        var i = t.descender,
          a = i === void 0 ? !0 : i,
          u = this.font,
          s = u.Ascender,
          c = u.Descender,
          d = u.FontBBox,
          h = s || d[3],
          y = c || d[1],
          m = h - y;
        return a || (m += c || 0), (m / 1e3) * e;
      }),
      (r.prototype.sizeOfFontAtHeight = function (e) {
        var t = this.font,
          i = t.Ascender,
          a = t.Descender,
          u = t.FontBBox,
          s = i || u[3],
          c = a || u[1];
        return (1e3 * e) / (s - c);
      }),
      (r.prototype.embedIntoContext = function (e, t) {
        var i = e.obj({
          Type: "Font",
          Subtype: "Type1",
          BaseFont: this.customName || this.fontName,
          Encoding: this.encoding === Wu.WinAnsi ? "WinAnsiEncoding" : void 0,
        });
        return t ? (e.assign(t, i), t) : e.register(i);
      }),
      (r.prototype.widthOfGlyph = function (e) {
        return this.font.getWidthOfGlyph(e) || 250;
      }),
      (r.prototype.encodeTextAsGlyphs = function (e) {
        for (
          var t = Array.from(e), i = new Array(t.length), a = 0, u = t.length;
          a < u;
          a++
        ) {
          var s = ry(t[a]);
          i[a] = this.encoding.encodeUnicodeCodePoint(s);
        }
        return i;
      }),
      (r.for = function (e, t) {
        return new r(e, t);
      }),
      r
    );
  })(),
  Nm = function (r, e) {
    for (var t = new Array(r.length), i = 0, a = r.length; i < a; i++) {
      var u = r[i],
        s = A0(_u(e(u))),
        c = A0.apply(void 0, u.codePoints.map(Bm));
      t[i] = [s, c];
    }
    return jm(t);
  },
  jm = function (r) {
    return (
      `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange
` +
      r.length +
      ` beginbfchar
` +
      r.map(function (e) {
        var t = e[0],
          i = e[1];
        return t + " " + i;
      }).join(`
`) +
      `
endbfchar
endcmap
CMapName currentdict /CMap defineresource pop
end
end`
    );
  },
  A0 = function () {
    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
    return "<" + r.join("") + ">";
  },
  _u = function (r) {
    return Ea(r, 4);
  },
  Bm = function (r) {
    if (xy(r)) return _u(r);
    if (wy(r)) {
      var e = $0(r),
        t = ep(r);
      return "" + _u(e) + _u(t);
    }
    var i = gl(r),
      a = "0x" + i + " is not a valid UTF-8 or UTF-16 codepoint.";
    throw new Error(a);
  },
  Im = function (r) {
    var e = 0,
      t = function (i) {
        e |= 1 << (i - 1);
      };
    return (
      r.fixedPitch && t(1),
      r.serif && t(2),
      t(3),
      r.script && t(4),
      r.nonsymbolic && t(6),
      r.italic && t(7),
      r.allCap && t(17),
      r.smallCap && t(18),
      r.forceBold && t(19),
      e
    );
  },
  Mm = function (r) {
    var e = r["OS/2"] ? r["OS/2"].sFamilyClass : 0,
      t = Im({
        fixedPitch: r.post.isFixedPitch,
        serif: 1 <= e && e <= 7,
        symbolic: !0,
        script: e === 10,
        italic: r.head.macStyle.italic,
      });
    return t;
  },
  vt = (function (r) {
    ve(e, r);
    function e(t) {
      var i = r.call(this) || this;
      return (i.value = t), i;
    }
    return (
      (e.prototype.asBytes = function () {
        for (
          var t = [],
            i = "",
            a = !1,
            u = function (m) {
              m !== void 0 && t.push(m), (a = !1);
            },
            s = 0,
            c = this.value.length;
          s < c;
          s++
        ) {
          var d = this.value[s],
            h = Ge(d),
            y = this.value[s + 1];
          a
            ? h === T.Newline || h === T.CarriageReturn
              ? u()
              : h === T.n
              ? u(T.Newline)
              : h === T.r
              ? u(T.CarriageReturn)
              : h === T.t
              ? u(T.Tab)
              : h === T.b
              ? u(T.Backspace)
              : h === T.f
              ? u(T.FormFeed)
              : h === T.LeftParen
              ? u(T.LeftParen)
              : h === T.RightParen
              ? u(T.RightParen)
              : h === T.Backspace
              ? u(T.BackSlash)
              : h >= T.Zero && h <= T.Seven
              ? ((i += d),
                (i.length === 3 || !(y >= "0" && y <= "7")) &&
                  (u(parseInt(i, 8)), (i = "")))
              : u(h)
            : h === T.BackSlash
            ? (a = !0)
            : u(h);
        }
        return new Uint8Array(t);
      }),
      (e.prototype.decodeText = function () {
        var t = this.asBytes();
        return ip(t) ? tp(t) : hp(t);
      }),
      (e.prototype.decodeDate = function () {
        var t = this.decodeText(),
          i = J0(t);
        if (!i) throw new pp(t);
        return i;
      }),
      (e.prototype.asString = function () {
        return this.value;
      }),
      (e.prototype.clone = function () {
        return e.of(this.value);
      }),
      (e.prototype.toString = function () {
        return "(" + this.value + ")";
      }),
      (e.prototype.sizeInBytes = function () {
        return this.value.length + 2;
      }),
      (e.prototype.copyBytesInto = function (t, i) {
        return (
          (t[i++] = T.LeftParen),
          (i += rr(this.value, t, i)),
          (t[i++] = T.RightParen),
          this.value.length + 2
        );
      }),
      (e.of = function (t) {
        return new e(t);
      }),
      (e.fromDate = function (t) {
        var i = vn(String(t.getUTCFullYear()), 4, "0"),
          a = vn(String(t.getUTCMonth() + 1), 2, "0"),
          u = vn(String(t.getUTCDate()), 2, "0"),
          s = vn(String(t.getUTCHours()), 2, "0"),
          c = vn(String(t.getUTCMinutes()), 2, "0"),
          d = vn(String(t.getUTCSeconds()), 2, "0");
        return new e("D:" + i + a + u + s + c + d + "Z");
      }),
      e
    );
  })(yr),
  rc = (function () {
    function r(e, t, i, a) {
      var u = this;
      (this.allGlyphsInFontSortedById = function () {
        for (
          var s = new Array(u.font.characterSet.length), c = 0, d = s.length;
          c < d;
          c++
        ) {
          var h = u.font.characterSet[c];
          s[c] = u.font.glyphForCodePoint(h);
        }
        return hy(s.sort(dy), function (y) {
          return y.id;
        });
      }),
        (this.font = e),
        (this.scale = 1e3 / this.font.unitsPerEm),
        (this.fontData = t),
        (this.fontName = this.font.postscriptName || "Font"),
        (this.customName = i),
        (this.fontFeatures = a),
        (this.baseFontName = ""),
        (this.glyphCache = Bn.populatedBy(this.allGlyphsInFontSortedById));
    }
    return (
      (r.for = function (e, t, i, a) {
        return _e(this, void 0, void 0, function () {
          var u;
          return $e(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, e.create(t)];
              case 1:
                return (u = s.sent()), [2, new r(u, t, i, a)];
            }
          });
        });
      }),
      (r.prototype.encodeText = function (e) {
        for (
          var t = this.font.layout(e, this.fontFeatures).glyphs,
            i = new Array(t.length),
            a = 0,
            u = t.length;
          a < u;
          a++
        )
          i[a] = Ea(t[a].id, 4);
        return Ve.of(i.join(""));
      }),
      (r.prototype.widthOfTextAtSize = function (e, t) {
        for (
          var i = this.font.layout(e, this.fontFeatures).glyphs,
            a = 0,
            u = 0,
            s = i.length;
          u < s;
          u++
        )
          a += i[u].advanceWidth * this.scale;
        var c = t / 1e3;
        return a * c;
      }),
      (r.prototype.heightOfFontAtSize = function (e, t) {
        t === void 0 && (t = {});
        var i = t.descender,
          a = i === void 0 ? !0 : i,
          u = this.font,
          s = u.ascent,
          c = u.descent,
          d = u.bbox,
          h = (s || d.maxY) * this.scale,
          y = (c || d.minY) * this.scale,
          m = h - y;
        return a || (m -= Math.abs(c) || 0), (m / 1e3) * e;
      }),
      (r.prototype.sizeOfFontAtHeight = function (e) {
        var t = this.font,
          i = t.ascent,
          a = t.descent,
          u = t.bbox,
          s = (i || u.maxY) * this.scale,
          c = (a || u.minY) * this.scale;
        return (1e3 * e) / (s - c);
      }),
      (r.prototype.embedIntoContext = function (e, t) {
        return (
          (this.baseFontName =
            this.customName || e.addRandomSuffix(this.fontName)),
          this.embedFontDict(e, t)
        );
      }),
      (r.prototype.embedFontDict = function (e, t) {
        return _e(this, void 0, void 0, function () {
          var i, a, u;
          return $e(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, this.embedCIDFontDict(e)];
              case 1:
                return (
                  (i = s.sent()),
                  (a = this.embedUnicodeCmap(e)),
                  (u = e.obj({
                    Type: "Font",
                    Subtype: "Type0",
                    BaseFont: this.baseFontName,
                    Encoding: "Identity-H",
                    DescendantFonts: [i],
                    ToUnicode: a,
                  })),
                  t ? (e.assign(t, u), [2, t]) : [2, e.register(u)]
                );
            }
          });
        });
      }),
      (r.prototype.isCFF = function () {
        return this.font.cff;
      }),
      (r.prototype.embedCIDFontDict = function (e) {
        return _e(this, void 0, void 0, function () {
          var t, i;
          return $e(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.embedFontDescriptor(e)];
              case 1:
                return (
                  (t = a.sent()),
                  (i = e.obj({
                    Type: "Font",
                    Subtype: this.isCFF() ? "CIDFontType0" : "CIDFontType2",
                    CIDToGIDMap: "Identity",
                    BaseFont: this.baseFontName,
                    CIDSystemInfo: {
                      Registry: vt.of("Adobe"),
                      Ordering: vt.of("Identity"),
                      Supplement: 0,
                    },
                    FontDescriptor: t,
                    W: this.computeWidths(),
                  })),
                  [2, e.register(i)]
                );
            }
          });
        });
      }),
      (r.prototype.embedFontDescriptor = function (e) {
        return _e(this, void 0, void 0, function () {
          var t, i, a, u, s, c, d, h, y, m, x, w, F, E, R;
          return $e(this, function (D) {
            switch (D.label) {
              case 0:
                return [4, this.embedFontStream(e)];
              case 1:
                return (
                  (t = D.sent()),
                  (i = this.scale),
                  (a = this.font),
                  (u = a.italicAngle),
                  (s = a.ascent),
                  (c = a.descent),
                  (d = a.capHeight),
                  (h = a.xHeight),
                  (y = this.font.bbox),
                  (m = y.minX),
                  (x = y.minY),
                  (w = y.maxX),
                  (F = y.maxY),
                  (E = e.obj(
                    ((R = {
                      Type: "FontDescriptor",
                      FontName: this.baseFontName,
                      Flags: Mm(this.font),
                      FontBBox: [m * i, x * i, w * i, F * i],
                      ItalicAngle: u,
                      Ascent: s * i,
                      Descent: c * i,
                      CapHeight: (d || s) * i,
                      XHeight: (h || 0) * i,
                      StemV: 0,
                    }),
                    (R[this.isCFF() ? "FontFile3" : "FontFile2"] = t),
                    R)
                  )),
                  [2, e.register(E)]
                );
            }
          });
        });
      }),
      (r.prototype.serializeFont = function () {
        return _e(this, void 0, void 0, function () {
          return $e(this, function (e) {
            return [2, this.fontData];
          });
        });
      }),
      (r.prototype.embedFontStream = function (e) {
        return _e(this, void 0, void 0, function () {
          var t, i, a;
          return $e(this, function (u) {
            switch (u.label) {
              case 0:
                return (a = (i = e).flateStream), [4, this.serializeFont()];
              case 1:
                return (
                  (t = a.apply(i, [
                    u.sent(),
                    { Subtype: this.isCFF() ? "CIDFontType0C" : void 0 },
                  ])),
                  [2, e.register(t)]
                );
            }
          });
        });
      }),
      (r.prototype.embedUnicodeCmap = function (e) {
        var t = Nm(this.glyphCache.access(), this.glyphId.bind(this)),
          i = e.flateStream(t);
        return e.register(i);
      }),
      (r.prototype.glyphId = function (e) {
        return e ? e.id : -1;
      }),
      (r.prototype.computeWidths = function () {
        for (
          var e = this.glyphCache.access(), t = [], i = [], a = 0, u = e.length;
          a < u;
          a++
        ) {
          var s = e[a],
            c = e[a - 1],
            d = this.glyphId(s),
            h = this.glyphId(c);
          a === 0 ? t.push(d) : d - h !== 1 && (t.push(i), t.push(d), (i = [])),
            i.push(s.advanceWidth * this.scale);
        }
        return t.push(i), t;
      }),
      r
    );
  })(),
  Um = (function (r) {
    ve(e, r);
    function e(t, i, a, u) {
      var s = r.call(this, t, i, a, u) || this;
      return (
        (s.subset = s.font.createSubset()),
        (s.glyphs = []),
        (s.glyphCache = Bn.populatedBy(function () {
          return s.glyphs;
        })),
        (s.glyphIdMap = new Map()),
        s
      );
    }
    return (
      (e.for = function (t, i, a, u) {
        return _e(this, void 0, void 0, function () {
          var s;
          return $e(this, function (c) {
            switch (c.label) {
              case 0:
                return [4, t.create(i)];
              case 1:
                return (s = c.sent()), [2, new e(s, i, a, u)];
            }
          });
        });
      }),
      (e.prototype.encodeText = function (t) {
        for (
          var i = this.font.layout(t, this.fontFeatures).glyphs,
            a = new Array(i.length),
            u = 0,
            s = i.length;
          u < s;
          u++
        ) {
          var c = i[u],
            d = this.subset.includeGlyph(c);
          (this.glyphs[d - 1] = c),
            this.glyphIdMap.set(c.id, d),
            (a[u] = Ea(d, 4));
        }
        return this.glyphCache.invalidate(), Ve.of(a.join(""));
      }),
      (e.prototype.isCFF = function () {
        return this.subset.cff;
      }),
      (e.prototype.glyphId = function (t) {
        return t ? this.glyphIdMap.get(t.id) : -1;
      }),
      (e.prototype.serializeFont = function () {
        var t = this;
        return new Promise(function (i, a) {
          var u = [];
          t.subset
            .encodeStream()
            .on("data", function (s) {
              return u.push(s);
            })
            .on("end", function () {
              return i(cy(u));
            })
            .on("error", function (s) {
              return a(s);
            });
        });
      }),
      e
    );
  })(rc),
  Uf;
(function (r) {
  (r.Source = "Source"),
    (r.Data = "Data"),
    (r.Alternative = "Alternative"),
    (r.Supplement = "Supplement"),
    (r.EncryptedPayload = "EncryptedPayload"),
    (r.FormData = "EncryptedPayload"),
    (r.Schema = "Schema"),
    (r.Unspecified = "Unspecified");
})(Uf || (Uf = {}));
var Lm = (function () {
    function r(e, t, i) {
      i === void 0 && (i = {}),
        (this.fileData = e),
        (this.fileName = t),
        (this.options = i);
    }
    return (
      (r.for = function (e, t, i) {
        return i === void 0 && (i = {}), new r(e, t, i);
      }),
      (r.prototype.embedIntoContext = function (e, t) {
        return _e(this, void 0, void 0, function () {
          var i, a, u, s, c, d, h, y, m;
          return $e(this, function (x) {
            return (
              (i = this.options),
              (a = i.mimeType),
              (u = i.description),
              (s = i.creationDate),
              (c = i.modificationDate),
              (d = i.afRelationship),
              (h = e.flateStream(this.fileData, {
                Type: "EmbeddedFile",
                Subtype: a ?? void 0,
                Params: {
                  Size: this.fileData.length,
                  CreationDate: s ? vt.fromDate(s) : void 0,
                  ModDate: c ? vt.fromDate(c) : void 0,
                },
              })),
              (y = e.register(h)),
              (m = e.obj({
                Type: "Filespec",
                F: vt.of(this.fileName),
                UF: Ve.fromText(this.fileName),
                EF: { F: y },
                Desc: u ? Ve.fromText(u) : void 0,
                AFRelationship: d ?? void 0,
              })),
              t ? (e.assign(t, m), [2, t]) : [2, e.register(m)]
            );
          });
        });
      }),
      r
    );
  })(),
  z0 = [
    65472, 65473, 65474, 65475, 65477, 65478, 65479, 65480, 65481, 65482, 65483,
    65484, 65485, 65486, 65487,
  ],
  vo;
(function (r) {
  (r.DeviceGray = "DeviceGray"),
    (r.DeviceRGB = "DeviceRGB"),
    (r.DeviceCMYK = "DeviceCMYK");
})(vo || (vo = {}));
var Vm = { 1: vo.DeviceGray, 3: vo.DeviceRGB, 4: vo.DeviceCMYK },
  xp = (function () {
    function r(e, t, i, a, u) {
      (this.imageData = e),
        (this.bitsPerComponent = t),
        (this.width = i),
        (this.height = a),
        (this.colorSpace = u);
    }
    return (
      (r.for = function (e) {
        return _e(this, void 0, void 0, function () {
          var t, i, a, u, s, c, d, h, y, m;
          return $e(this, function (x) {
            if (
              ((t = new DataView(e.buffer)), (i = t.getUint16(0)), i !== 65496)
            )
              throw new Error("SOI not found in JPEG");
            for (
              a = 2;
              a < t.byteLength &&
              ((u = t.getUint16(a)), (a += 2), !z0.includes(u));

            )
              a += t.getUint16(a);
            if (!z0.includes(u)) throw new Error("Invalid JPEG");
            if (
              ((a += 2),
              (s = t.getUint8(a++)),
              (c = t.getUint16(a)),
              (a += 2),
              (d = t.getUint16(a)),
              (a += 2),
              (h = t.getUint8(a++)),
              (y = Vm[h]),
              !y)
            )
              throw new Error("Unknown JPEG channel.");
            return (m = y), [2, new r(e, s, d, c, m)];
          });
        });
      }),
      (r.prototype.embedIntoContext = function (e, t) {
        return _e(this, void 0, void 0, function () {
          var i;
          return $e(this, function (a) {
            return (
              (i = e.stream(this.imageData, {
                Type: "XObject",
                Subtype: "Image",
                BitsPerComponent: this.bitsPerComponent,
                Width: this.width,
                Height: this.height,
                ColorSpace: this.colorSpace,
                Filter: "DCTDecode",
                Decode:
                  this.colorSpace === vo.DeviceCMYK
                    ? [1, 0, 1, 0, 1, 0, 1, 0]
                    : void 0,
              })),
              t ? (e.assign(t, i), [2, t]) : [2, e.register(i)]
            );
          });
        });
      }),
      r
    );
  })(),
  ue = {};
ue.toRGBA8 = function (r) {
  var e = r.width,
    t = r.height;
  if (r.tabs.acTL == null)
    return [ue.toRGBA8.decodeImage(r.data, e, t, r).buffer];
  var i = [];
  r.frames[0].data == null && (r.frames[0].data = r.data);
  for (
    var a = e * t * 4,
      u = new Uint8Array(a),
      s = new Uint8Array(a),
      c = new Uint8Array(a),
      d = 0;
    d < r.frames.length;
    d++
  ) {
    var h = r.frames[d],
      y = h.rect.x,
      m = h.rect.y,
      x = h.rect.width,
      w = h.rect.height,
      F = ue.toRGBA8.decodeImage(h.data, x, w, r);
    if (d != 0) for (var E = 0; E < a; E++) c[E] = u[E];
    if (
      (h.blend == 0
        ? ue._copyTile(F, x, w, u, e, t, y, m, 0)
        : h.blend == 1 && ue._copyTile(F, x, w, u, e, t, y, m, 1),
      i.push(u.buffer.slice(0)),
      h.dispose != 0)
    ) {
      if (h.dispose == 1) ue._copyTile(s, x, w, u, e, t, y, m, 0);
      else if (h.dispose == 2) for (var E = 0; E < a; E++) u[E] = c[E];
    }
  }
  return i;
};
ue.toRGBA8.decodeImage = function (r, e, t, i) {
  var a = e * t,
    u = ue.decode._getBPP(i),
    s = Math.ceil((e * u) / 8),
    c = new Uint8Array(a * 4),
    d = new Uint32Array(c.buffer),
    h = i.ctype,
    y = i.depth,
    m = ue._bin.readUshort;
  if (h == 6) {
    var x = a << 2;
    if (y == 8)
      for (var w = 0; w < x; w += 4)
        (c[w] = r[w]),
          (c[w + 1] = r[w + 1]),
          (c[w + 2] = r[w + 2]),
          (c[w + 3] = r[w + 3]);
    if (y == 16) for (var w = 0; w < x; w++) c[w] = r[w << 1];
  } else if (h == 2) {
    var F = i.tabs.tRNS;
    if (F == null) {
      if (y == 8)
        for (var w = 0; w < a; w++) {
          var E = w * 3;
          d[w] = (255 << 24) | (r[E + 2] << 16) | (r[E + 1] << 8) | r[E];
        }
      if (y == 16)
        for (var w = 0; w < a; w++) {
          var E = w * 6;
          d[w] = (255 << 24) | (r[E + 4] << 16) | (r[E + 2] << 8) | r[E];
        }
    } else {
      var R = F[0],
        D = F[1],
        L = F[2];
      if (y == 8)
        for (var w = 0; w < a; w++) {
          var N = w << 2,
            E = w * 3;
          (d[w] = (255 << 24) | (r[E + 2] << 16) | (r[E + 1] << 8) | r[E]),
            r[E] == R && r[E + 1] == D && r[E + 2] == L && (c[N + 3] = 0);
        }
      if (y == 16)
        for (var w = 0; w < a; w++) {
          var N = w << 2,
            E = w * 6;
          (d[w] = (255 << 24) | (r[E + 4] << 16) | (r[E + 2] << 8) | r[E]),
            m(r, E) == R &&
              m(r, E + 2) == D &&
              m(r, E + 4) == L &&
              (c[N + 3] = 0);
        }
    }
  } else if (h == 3) {
    var q = i.tabs.PLTE,
      K = i.tabs.tRNS,
      M = K ? K.length : 0;
    if (y == 1)
      for (var U = 0; U < t; U++)
        for (var _ = U * s, te = U * e, w = 0; w < e; w++) {
          var N = (te + w) << 2,
            ee = (r[_ + (w >> 3)] >> (7 - ((w & 7) << 0))) & 1,
            ie = 3 * ee;
          (c[N] = q[ie]),
            (c[N + 1] = q[ie + 1]),
            (c[N + 2] = q[ie + 2]),
            (c[N + 3] = ee < M ? K[ee] : 255);
        }
    if (y == 2)
      for (var U = 0; U < t; U++)
        for (var _ = U * s, te = U * e, w = 0; w < e; w++) {
          var N = (te + w) << 2,
            ee = (r[_ + (w >> 2)] >> (6 - ((w & 3) << 1))) & 3,
            ie = 3 * ee;
          (c[N] = q[ie]),
            (c[N + 1] = q[ie + 1]),
            (c[N + 2] = q[ie + 2]),
            (c[N + 3] = ee < M ? K[ee] : 255);
        }
    if (y == 4)
      for (var U = 0; U < t; U++)
        for (var _ = U * s, te = U * e, w = 0; w < e; w++) {
          var N = (te + w) << 2,
            ee = (r[_ + (w >> 1)] >> (4 - ((w & 1) << 2))) & 15,
            ie = 3 * ee;
          (c[N] = q[ie]),
            (c[N + 1] = q[ie + 1]),
            (c[N + 2] = q[ie + 2]),
            (c[N + 3] = ee < M ? K[ee] : 255);
        }
    if (y == 8)
      for (var w = 0; w < a; w++) {
        var N = w << 2,
          ee = r[w],
          ie = 3 * ee;
        (c[N] = q[ie]),
          (c[N + 1] = q[ie + 1]),
          (c[N + 2] = q[ie + 2]),
          (c[N + 3] = ee < M ? K[ee] : 255);
      }
  } else if (h == 4) {
    if (y == 8)
      for (var w = 0; w < a; w++) {
        var N = w << 2,
          ce = w << 1,
          Y = r[ce];
        (c[N] = Y), (c[N + 1] = Y), (c[N + 2] = Y), (c[N + 3] = r[ce + 1]);
      }
    if (y == 16)
      for (var w = 0; w < a; w++) {
        var N = w << 2,
          ce = w << 2,
          Y = r[ce];
        (c[N] = Y), (c[N + 1] = Y), (c[N + 2] = Y), (c[N + 3] = r[ce + 2]);
      }
  } else if (h == 0)
    for (var R = i.tabs.tRNS ? i.tabs.tRNS : -1, U = 0; U < t; U++) {
      var xe = U * s,
        Se = U * e;
      if (y == 1)
        for (var de = 0; de < e; de++) {
          var Y = 255 * ((r[xe + (de >>> 3)] >>> (7 - (de & 7))) & 1),
            le = Y == R * 255 ? 0 : 255;
          d[Se + de] = (le << 24) | (Y << 16) | (Y << 8) | Y;
        }
      else if (y == 2)
        for (var de = 0; de < e; de++) {
          var Y = 85 * ((r[xe + (de >>> 2)] >>> (6 - ((de & 3) << 1))) & 3),
            le = Y == R * 85 ? 0 : 255;
          d[Se + de] = (le << 24) | (Y << 16) | (Y << 8) | Y;
        }
      else if (y == 4)
        for (var de = 0; de < e; de++) {
          var Y = 17 * ((r[xe + (de >>> 1)] >>> (4 - ((de & 1) << 2))) & 15),
            le = Y == R * 17 ? 0 : 255;
          d[Se + de] = (le << 24) | (Y << 16) | (Y << 8) | Y;
        }
      else if (y == 8)
        for (var de = 0; de < e; de++) {
          var Y = r[xe + de],
            le = Y == R ? 0 : 255;
          d[Se + de] = (le << 24) | (Y << 16) | (Y << 8) | Y;
        }
      else if (y == 16)
        for (var de = 0; de < e; de++) {
          var Y = r[xe + (de << 1)],
            le = m(r, xe + (de << w)) == R ? 0 : 255;
          d[Se + de] = (le << 24) | (Y << 16) | (Y << 8) | Y;
        }
    }
  return c;
};
ue.decode = function (r) {
  for (
    var e = new Uint8Array(r),
      t = 8,
      i = ue._bin,
      a = i.readUshort,
      u = i.readUint,
      s = { tabs: {}, frames: [] },
      c = new Uint8Array(e.length),
      d = 0,
      h,
      y = 0,
      m = [137, 80, 78, 71, 13, 10, 26, 10],
      x = 0;
    x < 8;
    x++
  )
    if (e[x] != m[x]) throw "The input is not a PNG file!";
  for (; t < e.length; ) {
    var w = i.readUint(e, t);
    t += 4;
    var F = i.readASCII(e, t, 4);
    if (((t += 4), F == "IHDR")) ue.decode._IHDR(e, t, s);
    else if (F == "IDAT") {
      for (var x = 0; x < w; x++) c[d + x] = e[t + x];
      d += w;
    } else if (F == "acTL")
      (s.tabs[F] = { num_frames: u(e, t), num_plays: u(e, t + 4) }),
        (h = new Uint8Array(e.length));
    else if (F == "fcTL") {
      if (y != 0) {
        var E = s.frames[s.frames.length - 1];
        (E.data = ue.decode._decompress(
          s,
          h.slice(0, y),
          E.rect.width,
          E.rect.height
        )),
          (y = 0);
      }
      var R = {
          x: u(e, t + 12),
          y: u(e, t + 16),
          width: u(e, t + 4),
          height: u(e, t + 8),
        },
        D = a(e, t + 22);
      D = a(e, t + 20) / (D == 0 ? 100 : D);
      var L = {
        rect: R,
        delay: Math.round(D * 1e3),
        dispose: e[t + 24],
        blend: e[t + 25],
      };
      s.frames.push(L);
    } else if (F == "fdAT") {
      for (var x = 0; x < w - 4; x++) h[y + x] = e[t + x + 4];
      y += w - 4;
    } else if (F == "pHYs")
      s.tabs[F] = [i.readUint(e, t), i.readUint(e, t + 4), e[t + 8]];
    else if (F == "cHRM") {
      s.tabs[F] = [];
      for (var x = 0; x < 8; x++) s.tabs[F].push(i.readUint(e, t + x * 4));
    } else if (F == "tEXt") {
      s.tabs[F] == null && (s.tabs[F] = {});
      var N = i.nextZero(e, t),
        q = i.readASCII(e, t, N - t),
        K = i.readASCII(e, N + 1, t + w - N - 1);
      s.tabs[F][q] = K;
    } else if (F == "iTXt") {
      s.tabs[F] == null && (s.tabs[F] = {});
      var N = 0,
        M = t;
      N = i.nextZero(e, M);
      var q = i.readASCII(e, M, N - M);
      (M = N + 1),
        e[M],
        e[M + 1],
        (M += 2),
        (N = i.nextZero(e, M)),
        i.readASCII(e, M, N - M),
        (M = N + 1),
        (N = i.nextZero(e, M)),
        i.readUTF8(e, M, N - M),
        (M = N + 1);
      var K = i.readUTF8(e, M, w - (M - t));
      s.tabs[F][q] = K;
    } else if (F == "PLTE") s.tabs[F] = i.readBytes(e, t, w);
    else if (F == "hIST") {
      var U = s.tabs.PLTE.length / 3;
      s.tabs[F] = [];
      for (var x = 0; x < U; x++) s.tabs[F].push(a(e, t + x * 2));
    } else if (F == "tRNS")
      s.ctype == 3
        ? (s.tabs[F] = i.readBytes(e, t, w))
        : s.ctype == 0
        ? (s.tabs[F] = a(e, t))
        : s.ctype == 2 && (s.tabs[F] = [a(e, t), a(e, t + 2), a(e, t + 4)]);
    else if (F == "gAMA") s.tabs[F] = i.readUint(e, t) / 1e5;
    else if (F == "sRGB") s.tabs[F] = e[t];
    else if (F == "bKGD")
      s.ctype == 0 || s.ctype == 4
        ? (s.tabs[F] = [a(e, t)])
        : s.ctype == 2 || s.ctype == 6
        ? (s.tabs[F] = [a(e, t), a(e, t + 2), a(e, t + 4)])
        : s.ctype == 3 && (s.tabs[F] = e[t]);
    else if (F == "IEND") break;
    (t += w), i.readUint(e, t), (t += 4);
  }
  if (y != 0) {
    var E = s.frames[s.frames.length - 1];
    (E.data = ue.decode._decompress(
      s,
      h.slice(0, y),
      E.rect.width,
      E.rect.height
    )),
      (y = 0);
  }
  return (
    (s.data = ue.decode._decompress(s, c, s.width, s.height)),
    delete s.compress,
    delete s.interlace,
    delete s.filter,
    s
  );
};
ue.decode._decompress = function (r, e, t, i) {
  var a = ue.decode._getBPP(r),
    u = Math.ceil((t * a) / 8),
    s = new Uint8Array((u + 1 + r.interlace) * i);
  return (
    (e = ue.decode._inflate(e, s)),
    r.interlace == 0
      ? (e = ue.decode._filterZero(e, r, 0, t, i))
      : r.interlace == 1 && (e = ue.decode._readInterlace(e, r)),
    e
  );
};
ue.decode._inflate = function (r, e) {
  var t = ue.inflateRaw(new Uint8Array(r.buffer, 2, r.length - 6), e);
  return t;
};
ue.inflateRaw = (function () {
  var r = {};
  return (
    (r.H = {}),
    (r.H.N = function (e, t) {
      var i = Uint8Array,
        a = 0,
        u = 0,
        s = 0,
        c = 0,
        d = 0,
        h = 0,
        y = 0,
        m = 0,
        x = 0,
        w,
        F;
      if (e[0] == 3 && e[1] == 0) return t || new i(0);
      var E = r.H,
        R = E.b,
        D = E.e,
        L = E.R,
        N = E.n,
        q = E.A,
        K = E.Z,
        M = E.m,
        U = t == null;
      for (U && (t = new i((e.length >>> 2) << 3)); a == 0; ) {
        if (((a = R(e, x, 1)), (u = R(e, x + 1, 2)), (x += 3), u == 0)) {
          x & 7 && (x += 8 - (x & 7));
          var _ = (x >>> 3) + 4,
            te = e[_ - 4] | (e[_ - 3] << 8);
          U && (t = r.H.W(t, m + te)),
            t.set(new i(e.buffer, e.byteOffset + _, te), m),
            (x = (_ + te) << 3),
            (m += te);
          continue;
        }
        if (
          (U && (t = r.H.W(t, m + (1 << 17))),
          u == 1 && ((w = M.J), (F = M.h), (h = 511), (y = 31)),
          u == 2)
        ) {
          (s = D(e, x, 5) + 257),
            (c = D(e, x + 5, 5) + 1),
            (d = D(e, x + 10, 4) + 4),
            (x += 14);
          for (var ee = 1, ie = 0; ie < 38; ie += 2)
            (M.Q[ie] = 0), (M.Q[ie + 1] = 0);
          for (var ie = 0; ie < d; ie++) {
            var ce = D(e, x + ie * 3, 3);
            (M.Q[(M.X[ie] << 1) + 1] = ce), ce > ee && (ee = ce);
          }
          (x += 3 * d),
            N(M.Q, ee),
            q(M.Q, ee, M.u),
            (w = M.w),
            (F = M.d),
            (x = L(M.u, (1 << ee) - 1, s + c, e, x, M.v));
          var Y = E.V(M.v, 0, s, M.C);
          h = (1 << Y) - 1;
          var xe = E.V(M.v, s, c, M.D);
          (y = (1 << xe) - 1),
            N(M.C, Y),
            q(M.C, Y, w),
            N(M.D, xe),
            q(M.D, xe, F);
        }
        for (;;) {
          var Se = w[K(e, x) & h];
          x += Se & 15;
          var de = Se >>> 4;
          if (!(de >>> 8)) t[m++] = de;
          else {
            if (de == 256) break;
            var le = m + de - 254;
            if (de > 264) {
              var re = M.q[de - 257];
              (le = m + (re >>> 3) + D(e, x, re & 7)), (x += re & 7);
            }
            var ge = F[K(e, x) & y];
            x += ge & 15;
            var me = ge >>> 4,
              j = M.c[me],
              J = (j >>> 4) + R(e, x, j & 15);
            for (x += j & 15; m < le; )
              (t[m] = t[m++ - J]),
                (t[m] = t[m++ - J]),
                (t[m] = t[m++ - J]),
                (t[m] = t[m++ - J]);
            m = le;
          }
        }
      }
      return t.length == m ? t : t.slice(0, m);
    }),
    (r.H.W = function (e, t) {
      var i = e.length;
      if (t <= i) return e;
      var a = new Uint8Array(i << 1);
      return a.set(e, 0), a;
    }),
    (r.H.R = function (e, t, i, a, u, s) {
      for (var c = r.H.e, d = r.H.Z, h = 0; h < i; ) {
        var y = e[d(a, u) & t];
        u += y & 15;
        var m = y >>> 4;
        if (m <= 15) (s[h] = m), h++;
        else {
          var x = 0,
            w = 0;
          m == 16
            ? ((w = 3 + c(a, u, 2)), (u += 2), (x = s[h - 1]))
            : m == 17
            ? ((w = 3 + c(a, u, 3)), (u += 3))
            : m == 18 && ((w = 11 + c(a, u, 7)), (u += 7));
          for (var F = h + w; h < F; ) (s[h] = x), h++;
        }
      }
      return u;
    }),
    (r.H.V = function (e, t, i, a) {
      for (var u = 0, s = 0, c = a.length >>> 1; s < i; ) {
        var d = e[s + t];
        (a[s << 1] = 0), (a[(s << 1) + 1] = d), d > u && (u = d), s++;
      }
      for (; s < c; ) (a[s << 1] = 0), (a[(s << 1) + 1] = 0), s++;
      return u;
    }),
    (r.H.n = function (e, t) {
      for (
        var i = r.H.m, a = e.length, u, s, c, d, h, y = i.j, d = 0;
        d <= t;
        d++
      )
        y[d] = 0;
      for (d = 1; d < a; d += 2) y[e[d]]++;
      var m = i.K;
      for (u = 0, y[0] = 0, s = 1; s <= t; s++)
        (u = (u + y[s - 1]) << 1), (m[s] = u);
      for (c = 0; c < a; c += 2)
        (h = e[c + 1]), h != 0 && ((e[c] = m[h]), m[h]++);
    }),
    (r.H.A = function (e, t, i) {
      for (var a = e.length, u = r.H.m, s = u.r, c = 0; c < a; c += 2)
        if (e[c + 1] != 0)
          for (
            var d = c >> 1,
              h = e[c + 1],
              y = (d << 4) | h,
              m = t - h,
              x = e[c] << m,
              w = x + (1 << m);
            x != w;

          ) {
            var F = s[x] >>> (15 - t);
            (i[F] = y), x++;
          }
    }),
    (r.H.l = function (e, t) {
      for (var i = r.H.m.r, a = 15 - t, u = 0; u < e.length; u += 2) {
        var s = e[u] << (t - e[u + 1]);
        e[u] = i[s] >>> a;
      }
    }),
    (r.H.M = function (e, t, i) {
      i = i << (t & 7);
      var a = t >>> 3;
      (e[a] |= i), (e[a + 1] |= i >>> 8);
    }),
    (r.H.I = function (e, t, i) {
      i = i << (t & 7);
      var a = t >>> 3;
      (e[a] |= i), (e[a + 1] |= i >>> 8), (e[a + 2] |= i >>> 16);
    }),
    (r.H.e = function (e, t, i) {
      return (
        ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8)) >>> (t & 7)) & ((1 << i) - 1)
      );
    }),
    (r.H.b = function (e, t, i) {
      return (
        ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>>
          (t & 7)) &
        ((1 << i) - 1)
      );
    }),
    (r.H.Z = function (e, t) {
      return (
        (e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>>
        (t & 7)
      );
    }),
    (r.H.i = function (e, t) {
      return (
        (e[t >>> 3] |
          (e[(t >>> 3) + 1] << 8) |
          (e[(t >>> 3) + 2] << 16) |
          (e[(t >>> 3) + 3] << 24)) >>>
        (t & 7)
      );
    }),
    (r.H.m = (function () {
      var e = Uint16Array,
        t = Uint32Array;
      return {
        K: new e(16),
        j: new e(16),
        X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        S: [
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
          59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999,
        ],
        T: [
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ],
        q: new e(32),
        p: [
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
          513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
          24577, 65535, 65535,
        ],
        z: [
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ],
        c: new t(32),
        J: new e(512),
        _: [],
        h: new e(32),
        $: [],
        w: new e(32768),
        C: [],
        v: [],
        d: new e(32768),
        D: [],
        u: new e(512),
        Q: [],
        r: new e(32768),
        s: new t(286),
        Y: new t(30),
        a: new t(19),
        t: new t(15e3),
        k: new e(65536),
        g: new e(32768),
      };
    })()),
    (function () {
      for (var e = r.H.m, t = 32768, i = 0; i < t; i++) {
        var a = i;
        (a = ((a & 2863311530) >>> 1) | ((a & 1431655765) << 1)),
          (a = ((a & 3435973836) >>> 2) | ((a & 858993459) << 2)),
          (a = ((a & 4042322160) >>> 4) | ((a & 252645135) << 4)),
          (a = ((a & 4278255360) >>> 8) | ((a & 16711935) << 8)),
          (e.r[i] = ((a >>> 16) | (a << 16)) >>> 17);
      }
      function u(s, c, d) {
        for (; c-- != 0; ) s.push(0, d);
      }
      for (var i = 0; i < 32; i++)
        (e.q[i] = (e.S[i] << 3) | e.T[i]), (e.c[i] = (e.p[i] << 4) | e.z[i]);
      u(e._, 144, 8),
        u(e._, 112, 9),
        u(e._, 24, 7),
        u(e._, 8, 8),
        r.H.n(e._, 9),
        r.H.A(e._, 9, e.J),
        r.H.l(e._, 9),
        u(e.$, 32, 5),
        r.H.n(e.$, 5),
        r.H.A(e.$, 5, e.h),
        r.H.l(e.$, 5),
        u(e.Q, 19, 0),
        u(e.C, 286, 0),
        u(e.D, 30, 0),
        u(e.v, 320, 0);
    })(),
    r.H.N
  );
})();
ue.decode._readInterlace = function (r, e) {
  for (
    var t = e.width,
      i = e.height,
      a = ue.decode._getBPP(e),
      u = a >> 3,
      s = Math.ceil((t * a) / 8),
      c = new Uint8Array(i * s),
      d = 0,
      h = [0, 0, 4, 0, 2, 0, 1],
      y = [0, 4, 0, 2, 0, 1, 0],
      m = [8, 8, 8, 4, 4, 2, 2],
      x = [8, 8, 4, 4, 2, 2, 1],
      w = 0;
    w < 7;

  ) {
    for (var F = m[w], E = x[w], R = 0, D = 0, L = h[w]; L < i; ) (L += F), D++;
    for (var N = y[w]; N < t; ) (N += E), R++;
    var q = Math.ceil((R * a) / 8);
    ue.decode._filterZero(r, e, d, R, D);
    for (var K = 0, M = h[w]; M < i; ) {
      for (var U = y[w], _ = (d + K * q) << 3; U < t; ) {
        if (a == 1) {
          var te = r[_ >> 3];
          (te = (te >> (7 - (_ & 7))) & 1),
            (c[M * s + (U >> 3)] |= te << (7 - ((U & 7) << 0)));
        }
        if (a == 2) {
          var te = r[_ >> 3];
          (te = (te >> (6 - (_ & 7))) & 3),
            (c[M * s + (U >> 2)] |= te << (6 - ((U & 3) << 1)));
        }
        if (a == 4) {
          var te = r[_ >> 3];
          (te = (te >> (4 - (_ & 7))) & 15),
            (c[M * s + (U >> 1)] |= te << (4 - ((U & 1) << 2)));
        }
        if (a >= 8)
          for (var ee = M * s + U * u, ie = 0; ie < u; ie++)
            c[ee + ie] = r[(_ >> 3) + ie];
        (_ += a), (U += E);
      }
      K++, (M += F);
    }
    R * D != 0 && (d += D * (1 + q)), (w = w + 1);
  }
  return c;
};
ue.decode._getBPP = function (r) {
  var e = [1, null, 3, 1, 2, null, 4][r.ctype];
  return e * r.depth;
};
ue.decode._filterZero = function (r, e, t, i, a) {
  var u = ue.decode._getBPP(e),
    s = Math.ceil((i * u) / 8),
    c = ue.decode._paeth;
  u = Math.ceil(u / 8);
  var d = 0,
    h = 1,
    y = r[t],
    m = 0;
  if ((y > 1 && (r[t] = [0, 0, 1][y - 2]), y == 3))
    for (m = u; m < s; m++) r[m + 1] = (r[m + 1] + (r[m + 1 - u] >>> 1)) & 255;
  for (var x = 0; x < a; x++)
    if (((d = t + x * s), (h = d + x + 1), (y = r[h - 1]), (m = 0), y == 0))
      for (; m < s; m++) r[d + m] = r[h + m];
    else if (y == 1) {
      for (; m < u; m++) r[d + m] = r[h + m];
      for (; m < s; m++) r[d + m] = r[h + m] + r[d + m - u];
    } else if (y == 2) for (; m < s; m++) r[d + m] = r[h + m] + r[d + m - s];
    else if (y == 3) {
      for (; m < u; m++) r[d + m] = r[h + m] + (r[d + m - s] >>> 1);
      for (; m < s; m++)
        r[d + m] = r[h + m] + ((r[d + m - s] + r[d + m - u]) >>> 1);
    } else {
      for (; m < u; m++) r[d + m] = r[h + m] + c(0, r[d + m - s], 0);
      for (; m < s; m++)
        r[d + m] = r[h + m] + c(r[d + m - u], r[d + m - s], r[d + m - u - s]);
    }
  return r;
};
ue.decode._paeth = function (r, e, t) {
  var i = r + e - t,
    a = i - r,
    u = i - e,
    s = i - t;
  return a * a <= u * u && a * a <= s * s ? r : u * u <= s * s ? e : t;
};
ue.decode._IHDR = function (r, e, t) {
  var i = ue._bin;
  (t.width = i.readUint(r, e)),
    (e += 4),
    (t.height = i.readUint(r, e)),
    (e += 4),
    (t.depth = r[e]),
    e++,
    (t.ctype = r[e]),
    e++,
    (t.compress = r[e]),
    e++,
    (t.filter = r[e]),
    e++,
    (t.interlace = r[e]),
    e++;
};
ue._bin = {
  nextZero: function (r, e) {
    for (; r[e] != 0; ) e++;
    return e;
  },
  readUshort: function (r, e) {
    return (r[e] << 8) | r[e + 1];
  },
  writeUshort: function (r, e, t) {
    (r[e] = (t >> 8) & 255), (r[e + 1] = t & 255);
  },
  readUint: function (r, e) {
    return (
      r[e] * (256 * 256 * 256) + ((r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3])
    );
  },
  writeUint: function (r, e, t) {
    (r[e] = (t >> 24) & 255),
      (r[e + 1] = (t >> 16) & 255),
      (r[e + 2] = (t >> 8) & 255),
      (r[e + 3] = t & 255);
  },
  readASCII: function (r, e, t) {
    for (var i = "", a = 0; a < t; a++) i += String.fromCharCode(r[e + a]);
    return i;
  },
  writeASCII: function (r, e, t) {
    for (var i = 0; i < t.length; i++) r[e + i] = t.charCodeAt(i);
  },
  readBytes: function (r, e, t) {
    for (var i = [], a = 0; a < t; a++) i.push(r[e + a]);
    return i;
  },
  pad: function (r) {
    return r.length < 2 ? "0" + r : r;
  },
  readUTF8: function (r, e, t) {
    for (var i = "", a, u = 0; u < t; u++)
      i += "%" + ue._bin.pad(r[e + u].toString(16));
    try {
      a = decodeURIComponent(i);
    } catch {
      return ue._bin.readASCII(r, e, t);
    }
    return a;
  },
};
ue._copyTile = function (r, e, t, i, a, u, s, c, d) {
  for (
    var h = Math.min(e, a), y = Math.min(t, u), m = 0, x = 0, w = 0;
    w < y;
    w++
  )
    for (var F = 0; F < h; F++)
      if (
        (s >= 0 && c >= 0
          ? ((m = (w * e + F) << 2), (x = ((c + w) * a + s + F) << 2))
          : ((m = ((-c + w) * e - s + F) << 2), (x = (w * a + F) << 2)),
        d == 0)
      )
        (i[x] = r[m]),
          (i[x + 1] = r[m + 1]),
          (i[x + 2] = r[m + 2]),
          (i[x + 3] = r[m + 3]);
      else if (d == 1) {
        var E = r[m + 3] * 0.00392156862745098,
          R = r[m] * E,
          D = r[m + 1] * E,
          L = r[m + 2] * E,
          N = i[x + 3] * (1 / 255),
          q = i[x] * N,
          K = i[x + 1] * N,
          M = i[x + 2] * N,
          U = 1 - E,
          _ = E + N * U,
          te = _ == 0 ? 0 : 1 / _;
        (i[x + 3] = 255 * _),
          (i[x + 0] = (R + q * U) * te),
          (i[x + 1] = (D + K * U) * te),
          (i[x + 2] = (L + M * U) * te);
      } else if (d == 2) {
        var E = r[m + 3],
          R = r[m],
          D = r[m + 1],
          L = r[m + 2],
          N = i[x + 3],
          q = i[x],
          K = i[x + 1],
          M = i[x + 2];
        E == N && R == q && D == K && L == M
          ? ((i[x] = 0), (i[x + 1] = 0), (i[x + 2] = 0), (i[x + 3] = 0))
          : ((i[x] = R), (i[x + 1] = D), (i[x + 2] = L), (i[x + 3] = E));
      } else if (d == 3) {
        var E = r[m + 3],
          R = r[m],
          D = r[m + 1],
          L = r[m + 2],
          N = i[x + 3],
          q = i[x],
          K = i[x + 1],
          M = i[x + 2];
        if (E == N && R == q && D == K && L == M) continue;
        if (E < 220 && N > 20) return !1;
      }
  return !0;
};
ue.encode = function (r, e, t, i, a, u, s) {
  i == null && (i = 0), s == null && (s = !1);
  var c = ue.encode.compress(r, e, t, i, [!1, !1, !1, 0, s]);
  return ue.encode.compressPNG(c, -1), ue.encode._main(c, e, t, a, u);
};
ue.encodeLL = function (r, e, t, i, a, u, s, c) {
  for (
    var d = {
        ctype: 0 + (i == 1 ? 0 : 2) + (a == 0 ? 0 : 4),
        depth: u,
        frames: [],
      },
      h = (i + a) * u,
      y = h * e,
      m = 0;
    m < r.length;
    m++
  )
    d.frames.push({
      rect: { x: 0, y: 0, width: e, height: t },
      img: new Uint8Array(r[m]),
      blend: 0,
      dispose: 1,
      bpp: Math.ceil(h / 8),
      bpl: Math.ceil(y / 8),
    });
  ue.encode.compressPNG(d, 0, !0);
  var x = ue.encode._main(d, e, t, s, c);
  return x;
};
ue.encode._main = function (r, e, t, i, a) {
  a == null && (a = {});
  var u = ue.crc.crc,
    s = ue._bin.writeUint,
    c = ue._bin.writeUshort,
    d = ue._bin.writeASCII,
    h = 8,
    y = r.frames.length > 1,
    m = !1,
    x = 33 + (y ? 20 : 0);
  if (
    (a.sRGB != null && (x += 13), a.pHYs != null && (x += 21), r.ctype == 3)
  ) {
    for (var w = r.plte.length, F = 0; F < w; F++)
      r.plte[F] >>> 24 != 255 && (m = !0);
    x += 8 + w * 3 + 4 + (m ? 8 + w * 1 + 4 : 0);
  }
  for (var E = 0; E < r.frames.length; E++) {
    var R = r.frames[E];
    y && (x += 38), (x += R.cimg.length + 12), E != 0 && (x += 4);
  }
  x += 12;
  for (
    var D = new Uint8Array(x), L = [137, 80, 78, 71, 13, 10, 26, 10], F = 0;
    F < 8;
    F++
  )
    D[F] = L[F];
  if (
    (s(D, h, 13),
    (h += 4),
    d(D, h, "IHDR"),
    (h += 4),
    s(D, h, e),
    (h += 4),
    s(D, h, t),
    (h += 4),
    (D[h] = r.depth),
    h++,
    (D[h] = r.ctype),
    h++,
    (D[h] = 0),
    h++,
    (D[h] = 0),
    h++,
    (D[h] = 0),
    h++,
    s(D, h, u(D, h - 17, 17)),
    (h += 4),
    a.sRGB != null &&
      (s(D, h, 1),
      (h += 4),
      d(D, h, "sRGB"),
      (h += 4),
      (D[h] = a.sRGB),
      h++,
      s(D, h, u(D, h - 5, 5)),
      (h += 4)),
    a.pHYs != null &&
      (s(D, h, 9),
      (h += 4),
      d(D, h, "pHYs"),
      (h += 4),
      s(D, h, a.pHYs[0]),
      (h += 4),
      s(D, h, a.pHYs[1]),
      (h += 4),
      (D[h] = a.pHYs[2]),
      h++,
      s(D, h, u(D, h - 13, 13)),
      (h += 4)),
    y &&
      (s(D, h, 8),
      (h += 4),
      d(D, h, "acTL"),
      (h += 4),
      s(D, h, r.frames.length),
      (h += 4),
      s(D, h, a.loop != null ? a.loop : 0),
      (h += 4),
      s(D, h, u(D, h - 12, 12)),
      (h += 4)),
    r.ctype == 3)
  ) {
    var w = r.plte.length;
    s(D, h, w * 3), (h += 4), d(D, h, "PLTE"), (h += 4);
    for (var F = 0; F < w; F++) {
      var N = F * 3,
        q = r.plte[F],
        K = q & 255,
        M = (q >>> 8) & 255,
        U = (q >>> 16) & 255;
      (D[h + N + 0] = K), (D[h + N + 1] = M), (D[h + N + 2] = U);
    }
    if (((h += w * 3), s(D, h, u(D, h - w * 3 - 4, w * 3 + 4)), (h += 4), m)) {
      s(D, h, w), (h += 4), d(D, h, "tRNS"), (h += 4);
      for (var F = 0; F < w; F++) D[h + F] = (r.plte[F] >>> 24) & 255;
      (h += w), s(D, h, u(D, h - w - 4, w + 4)), (h += 4);
    }
  }
  for (var _ = 0, E = 0; E < r.frames.length; E++) {
    var R = r.frames[E];
    y &&
      (s(D, h, 26),
      (h += 4),
      d(D, h, "fcTL"),
      (h += 4),
      s(D, h, _++),
      (h += 4),
      s(D, h, R.rect.width),
      (h += 4),
      s(D, h, R.rect.height),
      (h += 4),
      s(D, h, R.rect.x),
      (h += 4),
      s(D, h, R.rect.y),
      (h += 4),
      c(D, h, i[E]),
      (h += 2),
      c(D, h, 1e3),
      (h += 2),
      (D[h] = R.dispose),
      h++,
      (D[h] = R.blend),
      h++,
      s(D, h, u(D, h - 30, 30)),
      (h += 4));
    var te = R.cimg,
      w = te.length;
    s(D, h, w + (E == 0 ? 0 : 4)), (h += 4);
    var ee = h;
    d(D, h, E == 0 ? "IDAT" : "fdAT"),
      (h += 4),
      E != 0 && (s(D, h, _++), (h += 4)),
      D.set(te, h),
      (h += w),
      s(D, h, u(D, ee, h - ee)),
      (h += 4);
  }
  return (
    s(D, h, 0),
    (h += 4),
    d(D, h, "IEND"),
    (h += 4),
    s(D, h, u(D, h - 4, 4)),
    (h += 4),
    D.buffer
  );
};
ue.encode.compressPNG = function (r, e, t) {
  for (var i = 0; i < r.frames.length; i++) {
    var a = r.frames[i];
    a.rect.width;
    var u = a.rect.height,
      s = new Uint8Array(u * a.bpl + u);
    a.cimg = ue.encode._filterZero(a.img, u, a.bpp, a.bpl, s, e, t);
  }
};
ue.encode.compress = function (r, e, t, i, a) {
  for (
    var u = a[0],
      s = a[1],
      c = a[2],
      d = a[3],
      h = a[4],
      y = 6,
      m = 8,
      x = 255,
      w = 0;
    w < r.length;
    w++
  )
    for (var F = new Uint8Array(r[w]), E = F.length, R = 0; R < E; R += 4)
      x &= F[R + 3];
  var D = x != 255,
    L = ue.encode.framize(r, e, t, u, s, c),
    N = {},
    q = [],
    K = [];
  if (i != 0) {
    for (var M = [], R = 0; R < L.length; R++) M.push(L[R].img.buffer);
    for (
      var U = ue.encode.concatRGBA(M),
        _ = ue.quantize(U, i),
        te = 0,
        ee = new Uint8Array(_.abuf),
        R = 0;
      R < L.length;
      R++
    ) {
      var ie = L[R].img,
        ce = ie.length;
      K.push(new Uint8Array(_.inds.buffer, te >> 2, ce >> 2));
      for (var w = 0; w < ce; w += 4)
        (ie[w] = ee[te + w]),
          (ie[w + 1] = ee[te + w + 1]),
          (ie[w + 2] = ee[te + w + 2]),
          (ie[w + 3] = ee[te + w + 3]);
      te += ce;
    }
    for (var R = 0; R < _.plte.length; R++) q.push(_.plte[R].est.rgba);
  } else
    for (var w = 0; w < L.length; w++) {
      var Y = L[w],
        xe = new Uint32Array(Y.img.buffer),
        Se = Y.rect.width,
        E = xe.length,
        de = new Uint8Array(E);
      K.push(de);
      for (var R = 0; R < E; R++) {
        var le = xe[R];
        if (R != 0 && le == xe[R - 1]) de[R] = de[R - 1];
        else if (R > Se && le == xe[R - Se]) de[R] = de[R - Se];
        else {
          var re = N[le];
          if (
            re == null &&
            ((N[le] = re = q.length), q.push(le), q.length >= 300)
          )
            break;
          de[R] = re;
        }
      }
    }
  var ge = q.length;
  ge <= 256 &&
    h == !1 &&
    (ge <= 2 ? (m = 1) : ge <= 4 ? (m = 2) : ge <= 16 ? (m = 4) : (m = 8),
    (m = Math.max(m, d)));
  for (var w = 0; w < L.length; w++) {
    var Y = L[w];
    Y.rect.x, Y.rect.y;
    var Se = Y.rect.width,
      me = Y.rect.height,
      j = Y.img;
    new Uint32Array(j.buffer);
    var J = 4 * Se,
      Pe = 4;
    if (ge <= 256 && h == !1) {
      J = Math.ceil((m * Se) / 8);
      for (var Re = new Uint8Array(J * me), Be = K[w], Ee = 0; Ee < me; Ee++) {
        var R = Ee * J,
          Ie = Ee * Se;
        if (m == 8) for (var we = 0; we < Se; we++) Re[R + we] = Be[Ie + we];
        else if (m == 4)
          for (var we = 0; we < Se; we++)
            Re[R + (we >> 1)] |= Be[Ie + we] << (4 - (we & 1) * 4);
        else if (m == 2)
          for (var we = 0; we < Se; we++)
            Re[R + (we >> 2)] |= Be[Ie + we] << (6 - (we & 3) * 2);
        else if (m == 1)
          for (var we = 0; we < Se; we++)
            Re[R + (we >> 3)] |= Be[Ie + we] << (7 - (we & 7) * 1);
      }
      (j = Re), (y = 3), (Pe = 1);
    } else if (D == !1 && L.length == 1) {
      for (
        var Re = new Uint8Array(Se * me * 3), Je = Se * me, R = 0;
        R < Je;
        R++
      ) {
        var ie = R * 3,
          mt = R * 4;
        (Re[ie] = j[mt]), (Re[ie + 1] = j[mt + 1]), (Re[ie + 2] = j[mt + 2]);
      }
      (j = Re), (y = 2), (Pe = 3), (J = 3 * Se);
    }
    (Y.img = j), (Y.bpl = J), (Y.bpp = Pe);
  }
  return { ctype: y, depth: m, plte: q, frames: L };
};
ue.encode.framize = function (r, e, t, i, a, u) {
  for (var s = [], c = 0; c < r.length; c++) {
    var d = new Uint8Array(r[c]),
      h = new Uint32Array(d.buffer),
      y,
      m = 0,
      x = 0,
      w = e,
      F = t,
      E = i ? 1 : 0;
    if (c != 0) {
      for (
        var R = u || i || c == 1 || s[c - 2].dispose != 0 ? 1 : 2,
          D = 0,
          L = 1e9,
          N = 0;
        N < R;
        N++
      ) {
        for (
          var Y = new Uint8Array(r[c - 1 - N]),
            q = new Uint32Array(r[c - 1 - N]),
            K = e,
            M = t,
            U = -1,
            _ = -1,
            te = 0;
          te < t;
          te++
        )
          for (var ee = 0; ee < e; ee++) {
            var ie = te * e + ee;
            h[ie] != q[ie] &&
              (ee < K && (K = ee),
              ee > U && (U = ee),
              te < M && (M = te),
              te > _ && (_ = te));
          }
        U == -1 && (K = M = U = _ = 0),
          a && ((K & 1) == 1 && K--, (M & 1) == 1 && M--);
        var ce = (U - K + 1) * (_ - M + 1);
        ce < L &&
          ((L = ce),
          (D = N),
          (m = K),
          (x = M),
          (w = U - K + 1),
          (F = _ - M + 1));
      }
      var Y = new Uint8Array(r[c - 1 - D]);
      D == 1 && (s[c - 1].dispose = 2),
        (y = new Uint8Array(w * F * 4)),
        ue._copyTile(Y, e, t, y, w, F, -m, -x, 0),
        (E = ue._copyTile(d, e, t, y, w, F, -m, -x, 3) ? 1 : 0),
        E == 1
          ? ue.encode._prepareDiff(d, e, t, y, {
              x: m,
              y: x,
              width: w,
              height: F,
            })
          : ue._copyTile(d, e, t, y, w, F, -m, -x, 0);
    } else y = d.slice(0);
    s.push({
      rect: { x: m, y: x, width: w, height: F },
      img: y,
      blend: E,
      dispose: 0,
    });
  }
  if (i)
    for (var c = 0; c < s.length; c++) {
      var xe = s[c];
      if (xe.blend != 1) {
        var Se = xe.rect,
          de = s[c - 1].rect,
          le = Math.min(Se.x, de.x),
          re = Math.min(Se.y, de.y),
          ge = Math.max(Se.x + Se.width, de.x + de.width),
          me = Math.max(Se.y + Se.height, de.y + de.height),
          j = { x: le, y: re, width: ge - le, height: me - re };
        (s[c - 1].dispose = 1),
          c - 1 != 0 && ue.encode._updateFrame(r, e, t, s, c - 1, j, a),
          ue.encode._updateFrame(r, e, t, s, c, j, a);
      }
    }
  var J = 0;
  if (r.length != 1)
    for (var ie = 0; ie < s.length; ie++) {
      var xe = s[ie];
      J += xe.rect.width * xe.rect.height;
    }
  return s;
};
ue.encode._updateFrame = function (r, e, t, i, a, u, s) {
  for (
    var c = Uint8Array,
      d = Uint32Array,
      h = new c(r[a - 1]),
      y = new d(r[a - 1]),
      m = a + 1 < r.length ? new c(r[a + 1]) : null,
      x = new c(r[a]),
      w = new d(x.buffer),
      F = e,
      E = t,
      R = -1,
      D = -1,
      L = 0;
    L < u.height;
    L++
  )
    for (var N = 0; N < u.width; N++) {
      var q = u.x + N,
        K = u.y + L,
        M = K * e + q,
        U = w[M];
      U == 0 ||
        (i[a - 1].dispose == 0 &&
          y[M] == U &&
          (m == null || m[M * 4 + 3] != 0)) ||
        (q < F && (F = q),
        q > R && (R = q),
        K < E && (E = K),
        K > D && (D = K));
    }
  R == -1 && (F = E = R = D = 0),
    s && ((F & 1) == 1 && F--, (E & 1) == 1 && E--),
    (u = { x: F, y: E, width: R - F + 1, height: D - E + 1 });
  var _ = i[a];
  (_.rect = u),
    (_.blend = 1),
    (_.img = new Uint8Array(u.width * u.height * 4)),
    i[a - 1].dispose == 0
      ? (ue._copyTile(h, e, t, _.img, u.width, u.height, -u.x, -u.y, 0),
        ue.encode._prepareDiff(x, e, t, _.img, u))
      : ue._copyTile(x, e, t, _.img, u.width, u.height, -u.x, -u.y, 0);
};
ue.encode._prepareDiff = function (r, e, t, i, a) {
  ue._copyTile(r, e, t, i, a.width, a.height, -a.x, -a.y, 2);
};
ue.encode._filterZero = function (r, e, t, i, a, u, s) {
  var c = [],
    d = [0, 1, 2, 3, 4];
  u != -1 ? (d = [u]) : (e * i > 5e5 || t == 1) && (d = [0]);
  var h;
  s && (h = { level: 0 });
  for (var y = s && UZIP != null ? UZIP : yl, m = 0; m < d.length; m++) {
    for (var x = 0; x < e; x++) ue.encode._filterLine(a, r, x, i, t, d[m]);
    c.push(y.deflate(a, h));
  }
  for (var w, F = 1e9, m = 0; m < c.length; m++)
    c[m].length < F && ((w = m), (F = c[m].length));
  return c[w];
};
ue.encode._filterLine = function (r, e, t, i, a, u) {
  var s = t * i,
    c = s + t,
    d = ue.decode._paeth;
  if (((r[c] = u), c++, u == 0))
    if (i < 500) for (var h = 0; h < i; h++) r[c + h] = e[s + h];
    else r.set(new Uint8Array(e.buffer, s, i), c);
  else if (u == 1) {
    for (var h = 0; h < a; h++) r[c + h] = e[s + h];
    for (var h = a; h < i; h++)
      r[c + h] = (e[s + h] - e[s + h - a] + 256) & 255;
  } else if (t == 0) {
    for (var h = 0; h < a; h++) r[c + h] = e[s + h];
    if (u == 2) for (var h = a; h < i; h++) r[c + h] = e[s + h];
    if (u == 3)
      for (var h = a; h < i; h++)
        r[c + h] = (e[s + h] - (e[s + h - a] >> 1) + 256) & 255;
    if (u == 4)
      for (var h = a; h < i; h++)
        r[c + h] = (e[s + h] - d(e[s + h - a], 0, 0) + 256) & 255;
  } else {
    if (u == 2)
      for (var h = 0; h < i; h++)
        r[c + h] = (e[s + h] + 256 - e[s + h - i]) & 255;
    if (u == 3) {
      for (var h = 0; h < a; h++)
        r[c + h] = (e[s + h] + 256 - (e[s + h - i] >> 1)) & 255;
      for (var h = a; h < i; h++)
        r[c + h] =
          (e[s + h] + 256 - ((e[s + h - i] + e[s + h - a]) >> 1)) & 255;
    }
    if (u == 4) {
      for (var h = 0; h < a; h++)
        r[c + h] = (e[s + h] + 256 - d(0, e[s + h - i], 0)) & 255;
      for (var h = a; h < i; h++)
        r[c + h] =
          (e[s + h] + 256 - d(e[s + h - a], e[s + h - i], e[s + h - a - i])) &
          255;
    }
  }
};
ue.crc = {
  table: (function () {
    for (var r = new Uint32Array(256), e = 0; e < 256; e++) {
      for (var t = e, i = 0; i < 8; i++)
        t & 1 ? (t = 3988292384 ^ (t >>> 1)) : (t = t >>> 1);
      r[e] = t;
    }
    return r;
  })(),
  update: function (r, e, t, i) {
    for (var a = 0; a < i; a++)
      r = ue.crc.table[(r ^ e[t + a]) & 255] ^ (r >>> 8);
    return r;
  },
  crc: function (r, e, t) {
    return ue.crc.update(4294967295, r, e, t) ^ 4294967295;
  },
};
ue.quantize = function (r, e) {
  var t = new Uint8Array(r),
    i = t.slice(0),
    a = new Uint32Array(i.buffer),
    u = ue.quantize.getKDtree(i, e),
    s = u[0],
    c = u[1];
  ue.quantize.planeDst;
  for (
    var d = t, h = a, y = d.length, m = new Uint8Array(t.length >> 2), x = 0;
    x < y;
    x += 4
  ) {
    var w = d[x] * 0.00392156862745098,
      F = d[x + 1] * (1 / 255),
      E = d[x + 2] * (1 / 255),
      R = d[x + 3] * (1 / 255),
      D = ue.quantize.getNearest(s, w, F, E, R);
    (m[x >> 2] = D.ind), (h[x >> 2] = D.est.rgba);
  }
  return { abuf: i.buffer, inds: m, plte: c };
};
ue.quantize.getKDtree = function (r, e, t) {
  t == null && (t = 1e-4);
  var i = new Uint32Array(r.buffer),
    a = {
      i0: 0,
      i1: r.length,
      bst: null,
      est: null,
      tdst: 0,
      left: null,
      right: null,
    };
  (a.bst = ue.quantize.stats(r, a.i0, a.i1)),
    (a.est = ue.quantize.estats(a.bst));
  for (var u = [a]; u.length < e; ) {
    for (var s = 0, c = 0, d = 0; d < u.length; d++)
      u[d].est.L > s && ((s = u[d].est.L), (c = d));
    if (s < t) break;
    var h = u[c],
      y = ue.quantize.splitPixels(r, i, h.i0, h.i1, h.est.e, h.est.eMq255),
      m = h.i0 >= y || h.i1 <= y;
    if (m) {
      h.est.L = 0;
      continue;
    }
    var x = {
      i0: h.i0,
      i1: y,
      bst: null,
      est: null,
      tdst: 0,
      left: null,
      right: null,
    };
    (x.bst = ue.quantize.stats(r, x.i0, x.i1)),
      (x.est = ue.quantize.estats(x.bst));
    var w = {
      i0: y,
      i1: h.i1,
      bst: null,
      est: null,
      tdst: 0,
      left: null,
      right: null,
    };
    w.bst = { R: [], m: [], N: h.bst.N - x.bst.N };
    for (var d = 0; d < 16; d++) w.bst.R[d] = h.bst.R[d] - x.bst.R[d];
    for (var d = 0; d < 4; d++) w.bst.m[d] = h.bst.m[d] - x.bst.m[d];
    (w.est = ue.quantize.estats(w.bst)),
      (h.left = x),
      (h.right = w),
      (u[c] = x),
      u.push(w);
  }
  u.sort(function (F, E) {
    return E.bst.N - F.bst.N;
  });
  for (var d = 0; d < u.length; d++) u[d].ind = d;
  return [a, u];
};
ue.quantize.getNearest = function (r, e, t, i, a) {
  if (r.left == null)
    return (r.tdst = ue.quantize.dist(r.est.q, e, t, i, a)), r;
  var u = ue.quantize.planeDst(r.est, e, t, i, a),
    s = r.left,
    c = r.right;
  u > 0 && ((s = r.right), (c = r.left));
  var d = ue.quantize.getNearest(s, e, t, i, a);
  if (d.tdst <= u * u) return d;
  var h = ue.quantize.getNearest(c, e, t, i, a);
  return h.tdst < d.tdst ? h : d;
};
ue.quantize.planeDst = function (r, e, t, i, a) {
  var u = r.e;
  return u[0] * e + u[1] * t + u[2] * i + u[3] * a - r.eMq;
};
ue.quantize.dist = function (r, e, t, i, a) {
  var u = e - r[0],
    s = t - r[1],
    c = i - r[2],
    d = a - r[3];
  return u * u + s * s + c * c + d * d;
};
ue.quantize.splitPixels = function (r, e, t, i, a, u) {
  var s = ue.quantize.vecDot;
  for (i -= 4; t < i; ) {
    for (; s(r, t, a) <= u; ) t += 4;
    for (; s(r, i, a) > u; ) i -= 4;
    if (t >= i) break;
    var c = e[t >> 2];
    (e[t >> 2] = e[i >> 2]), (e[i >> 2] = c), (t += 4), (i -= 4);
  }
  for (; s(r, t, a) > u; ) t -= 4;
  return t + 4;
};
ue.quantize.vecDot = function (r, e, t) {
  return r[e] * t[0] + r[e + 1] * t[1] + r[e + 2] * t[2] + r[e + 3] * t[3];
};
ue.quantize.stats = function (r, e, t) {
  for (
    var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      a = [0, 0, 0, 0],
      u = (t - e) >> 2,
      s = e;
    s < t;
    s += 4
  ) {
    var c = r[s] * 0.00392156862745098,
      d = r[s + 1] * (1 / 255),
      h = r[s + 2] * (1 / 255),
      y = r[s + 3] * (1 / 255);
    (a[0] += c),
      (a[1] += d),
      (a[2] += h),
      (a[3] += y),
      (i[0] += c * c),
      (i[1] += c * d),
      (i[2] += c * h),
      (i[3] += c * y),
      (i[5] += d * d),
      (i[6] += d * h),
      (i[7] += d * y),
      (i[10] += h * h),
      (i[11] += h * y),
      (i[15] += y * y);
  }
  return (
    (i[4] = i[1]),
    (i[8] = i[2]),
    (i[9] = i[6]),
    (i[12] = i[3]),
    (i[13] = i[7]),
    (i[14] = i[11]),
    { R: i, m: a, N: u }
  );
};
ue.quantize.estats = function (r) {
  var e = r.R,
    t = r.m,
    i = r.N,
    a = t[0],
    u = t[1],
    s = t[2],
    c = t[3],
    d = i == 0 ? 0 : 1 / i,
    h = [
      e[0] - a * a * d,
      e[1] - a * u * d,
      e[2] - a * s * d,
      e[3] - a * c * d,
      e[4] - u * a * d,
      e[5] - u * u * d,
      e[6] - u * s * d,
      e[7] - u * c * d,
      e[8] - s * a * d,
      e[9] - s * u * d,
      e[10] - s * s * d,
      e[11] - s * c * d,
      e[12] - c * a * d,
      e[13] - c * u * d,
      e[14] - c * s * d,
      e[15] - c * c * d,
    ],
    y = h,
    m = ue.M4,
    x = [0.5, 0.5, 0.5, 0.5],
    w = 0,
    F = 0;
  if (i != 0)
    for (
      var E = 0;
      E < 10 &&
      ((x = m.multVec(y, x)),
      (F = Math.sqrt(m.dot(x, x))),
      (x = m.sml(1 / F, x)),
      !(Math.abs(F - w) < 1e-9));
      E++
    )
      w = F;
  var R = [a * d, u * d, s * d, c * d],
    D = m.dot(m.sml(255, R), x);
  return {
    Cov: h,
    q: R,
    e: x,
    L: w,
    eMq255: D,
    eMq: m.dot(x, R),
    rgba:
      ((Math.round(255 * R[3]) << 24) |
        (Math.round(255 * R[2]) << 16) |
        (Math.round(255 * R[1]) << 8) |
        (Math.round(255 * R[0]) << 0)) >>>
      0,
  };
};
ue.M4 = {
  multVec: function (r, e) {
    return [
      r[0] * e[0] + r[1] * e[1] + r[2] * e[2] + r[3] * e[3],
      r[4] * e[0] + r[5] * e[1] + r[6] * e[2] + r[7] * e[3],
      r[8] * e[0] + r[9] * e[1] + r[10] * e[2] + r[11] * e[3],
      r[12] * e[0] + r[13] * e[1] + r[14] * e[2] + r[15] * e[3],
    ];
  },
  dot: function (r, e) {
    return r[0] * e[0] + r[1] * e[1] + r[2] * e[2] + r[3] * e[3];
  },
  sml: function (r, e) {
    return [r * e[0], r * e[1], r * e[2], r * e[3]];
  },
};
ue.encode.concatRGBA = function (r) {
  for (var e = 0, t = 0; t < r.length; t++) e += r[t].byteLength;
  for (var i = new Uint8Array(e), a = 0, t = 0; t < r.length; t++) {
    for (var u = new Uint8Array(r[t]), s = u.length, c = 0; c < s; c += 4) {
      var d = u[c],
        h = u[c + 1],
        y = u[c + 2],
        m = u[c + 3];
      m == 0 && (d = h = y = 0),
        (i[a + c] = d),
        (i[a + c + 1] = h),
        (i[a + c + 2] = y),
        (i[a + c + 3] = m);
    }
    a += s;
  }
  return i.buffer;
};
var Wm = function (r) {
    if (r === 0) return zi.Greyscale;
    if (r === 2) return zi.Truecolour;
    if (r === 3) return zi.IndexedColour;
    if (r === 4) return zi.GreyscaleWithAlpha;
    if (r === 6) return zi.TruecolourWithAlpha;
    throw new Error("Unknown color type: " + r);
  },
  qm = function (r) {
    for (
      var e = Math.floor(r.length / 4),
        t = new Uint8Array(e * 3),
        i = new Uint8Array(e * 1),
        a = 0,
        u = 0,
        s = 0;
      a < r.length;

    )
      (t[u++] = r[a++]),
        (t[u++] = r[a++]),
        (t[u++] = r[a++]),
        (i[s++] = r[a++]);
    return { rgbChannel: t, alphaChannel: i };
  },
  zi;
(function (r) {
  (r.Greyscale = "Greyscale"),
    (r.Truecolour = "Truecolour"),
    (r.IndexedColour = "IndexedColour"),
    (r.GreyscaleWithAlpha = "GreyscaleWithAlpha"),
    (r.TruecolourWithAlpha = "TruecolourWithAlpha");
})(zi || (zi = {}));
var Km = (function () {
    function r(e) {
      var t = ue.decode(e),
        i = ue.toRGBA8(t);
      if (i.length > 1) throw new Error("Animated PNGs are not supported");
      var a = new Uint8Array(i[0]),
        u = qm(a),
        s = u.rgbChannel,
        c = u.alphaChannel;
      this.rgbChannel = s;
      var d = c.some(function (h) {
        return h < 255;
      });
      d && (this.alphaChannel = c),
        (this.type = Wm(t.ctype)),
        (this.width = t.width),
        (this.height = t.height),
        (this.bitsPerComponent = 8);
    }
    return (
      (r.load = function (e) {
        return new r(e);
      }),
      r
    );
  })(),
  wp = (function () {
    function r(e) {
      (this.image = e),
        (this.bitsPerComponent = e.bitsPerComponent),
        (this.width = e.width),
        (this.height = e.height),
        (this.colorSpace = "DeviceRGB");
    }
    return (
      (r.for = function (e) {
        return _e(this, void 0, void 0, function () {
          var t;
          return $e(this, function (i) {
            return (t = Km.load(e)), [2, new r(t)];
          });
        });
      }),
      (r.prototype.embedIntoContext = function (e, t) {
        return _e(this, void 0, void 0, function () {
          var i, a;
          return $e(this, function (u) {
            return (
              (i = this.embedAlphaChannel(e)),
              (a = e.flateStream(this.image.rgbChannel, {
                Type: "XObject",
                Subtype: "Image",
                BitsPerComponent: this.image.bitsPerComponent,
                Width: this.image.width,
                Height: this.image.height,
                ColorSpace: this.colorSpace,
                SMask: i,
              })),
              t ? (e.assign(t, a), [2, t]) : [2, e.register(a)]
            );
          });
        });
      }),
      (r.prototype.embedAlphaChannel = function (e) {
        if (this.image.alphaChannel) {
          var t = e.flateStream(this.image.alphaChannel, {
            Type: "XObject",
            Subtype: "Image",
            Height: this.image.height,
            Width: this.image.width,
            BitsPerComponent: this.image.bitsPerComponent,
            ColorSpace: "DeviceGray",
            Decode: [0, 1],
          });
          return e.register(t);
        }
      }),
      r
    );
  })(),
  Sp = (function () {
    function r(e, t, i) {
      (this.bytes = e),
        (this.start = t || 0),
        (this.pos = this.start),
        (this.end = t && i ? t + i : this.bytes.length);
    }
    return (
      Object.defineProperty(r.prototype, "length", {
        get: function () {
          return this.end - this.start;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r.prototype, "isEmpty", {
        get: function () {
          return this.length === 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.getByte = function () {
        return this.pos >= this.end ? -1 : this.bytes[this.pos++];
      }),
      (r.prototype.getUint16 = function () {
        var e = this.getByte(),
          t = this.getByte();
        return e === -1 || t === -1 ? -1 : (e << 8) + t;
      }),
      (r.prototype.getInt32 = function () {
        var e = this.getByte(),
          t = this.getByte(),
          i = this.getByte(),
          a = this.getByte();
        return (e << 24) + (t << 16) + (i << 8) + a;
      }),
      (r.prototype.getBytes = function (e, t) {
        t === void 0 && (t = !1);
        var i = this.bytes,
          a = this.pos,
          u = this.end;
        if (e) {
          var c = a + e;
          c > u && (c = u), (this.pos = c);
          var s = i.subarray(a, c);
          return t ? new Uint8ClampedArray(s) : s;
        } else {
          var s = i.subarray(a, u);
          return t ? new Uint8ClampedArray(s) : s;
        }
      }),
      (r.prototype.peekByte = function () {
        var e = this.getByte();
        return this.pos--, e;
      }),
      (r.prototype.peekBytes = function (e, t) {
        t === void 0 && (t = !1);
        var i = this.getBytes(e, t);
        return (this.pos -= i.length), i;
      }),
      (r.prototype.skip = function (e) {
        e || (e = 1), (this.pos += e);
      }),
      (r.prototype.reset = function () {
        this.pos = this.start;
      }),
      (r.prototype.moveStart = function () {
        this.start = this.pos;
      }),
      (r.prototype.makeSubStream = function (e, t) {
        return new r(this.bytes, e, t);
      }),
      (r.prototype.decode = function () {
        return this.bytes;
      }),
      r
    );
  })(),
  Hm = new Uint8Array(0),
  Da = (function () {
    function r(e) {
      if (
        ((this.pos = 0),
        (this.bufferLength = 0),
        (this.eof = !1),
        (this.buffer = Hm),
        (this.minBufferLength = 512),
        e)
      )
        for (; this.minBufferLength < e; ) this.minBufferLength *= 2;
    }
    return (
      Object.defineProperty(r.prototype, "isEmpty", {
        get: function () {
          for (; !this.eof && this.bufferLength === 0; ) this.readBlock();
          return this.bufferLength === 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.getByte = function () {
        for (var e = this.pos; this.bufferLength <= e; ) {
          if (this.eof) return -1;
          this.readBlock();
        }
        return this.buffer[this.pos++];
      }),
      (r.prototype.getUint16 = function () {
        var e = this.getByte(),
          t = this.getByte();
        return e === -1 || t === -1 ? -1 : (e << 8) + t;
      }),
      (r.prototype.getInt32 = function () {
        var e = this.getByte(),
          t = this.getByte(),
          i = this.getByte(),
          a = this.getByte();
        return (e << 24) + (t << 16) + (i << 8) + a;
      }),
      (r.prototype.getBytes = function (e, t) {
        t === void 0 && (t = !1);
        var i,
          a = this.pos;
        if (e) {
          for (
            this.ensureBuffer(a + e), i = a + e;
            !this.eof && this.bufferLength < i;

          )
            this.readBlock();
          var u = this.bufferLength;
          i > u && (i = u);
        } else {
          for (; !this.eof; ) this.readBlock();
          i = this.bufferLength;
        }
        this.pos = i;
        var s = this.buffer.subarray(a, i);
        return t && !(s instanceof Uint8ClampedArray)
          ? new Uint8ClampedArray(s)
          : s;
      }),
      (r.prototype.peekByte = function () {
        var e = this.getByte();
        return this.pos--, e;
      }),
      (r.prototype.peekBytes = function (e, t) {
        t === void 0 && (t = !1);
        var i = this.getBytes(e, t);
        return (this.pos -= i.length), i;
      }),
      (r.prototype.skip = function (e) {
        e || (e = 1), (this.pos += e);
      }),
      (r.prototype.reset = function () {
        this.pos = 0;
      }),
      (r.prototype.makeSubStream = function (e, t) {
        for (var i = e + t; this.bufferLength <= i && !this.eof; )
          this.readBlock();
        return new Sp(this.buffer, e, t);
      }),
      (r.prototype.decode = function () {
        for (; !this.eof; ) this.readBlock();
        return this.buffer.subarray(0, this.bufferLength);
      }),
      (r.prototype.readBlock = function () {
        throw new Jr(this.constructor.name, "readBlock");
      }),
      (r.prototype.ensureBuffer = function (e) {
        var t = this.buffer;
        if (e <= t.byteLength) return t;
        for (var i = this.minBufferLength; i < e; ) i *= 2;
        var a = new Uint8Array(i);
        return a.set(t), (this.buffer = a);
      }),
      r
    );
  })(),
  N0 = function (r) {
    return r === 32 || r === 9 || r === 13 || r === 10;
  },
  Gm = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = r.call(this, i) || this;
      return (
        (a.stream = t), (a.input = new Uint8Array(5)), i && (i = 0.8 * i), a
      );
    }
    return (
      (e.prototype.readBlock = function () {
        for (
          var t = 126, i = 122, a = -1, u = this.stream, s = u.getByte();
          N0(s);

        )
          s = u.getByte();
        if (s === a || s === t) {
          this.eof = !0;
          return;
        }
        var c = this.bufferLength,
          d,
          h;
        if (s === i) {
          for (d = this.ensureBuffer(c + 4), h = 0; h < 4; ++h) d[c + h] = 0;
          this.bufferLength += 4;
        } else {
          var y = this.input;
          for (y[0] = s, h = 1; h < 5; ++h) {
            for (s = u.getByte(); N0(s); ) s = u.getByte();
            if (((y[h] = s), s === a || s === t)) break;
          }
          if (
            ((d = this.ensureBuffer(c + h - 1)),
            (this.bufferLength += h - 1),
            h < 5)
          ) {
            for (; h < 5; ++h) y[h] = 117;
            this.eof = !0;
          }
          var m = 0;
          for (h = 0; h < 5; ++h) m = m * 85 + (y[h] - 33);
          for (h = 3; h >= 0; --h) (d[c + h] = m & 255), (m >>= 8);
        }
      }),
      e
    );
  })(Da),
  Xm = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = r.call(this, i) || this;
      return (a.stream = t), (a.firstDigit = -1), i && (i = 0.5 * i), a;
    }
    return (
      (e.prototype.readBlock = function () {
        var t = 8e3,
          i = this.stream.getBytes(t);
        if (!i.length) {
          this.eof = !0;
          return;
        }
        for (
          var a = (i.length + 1) >> 1,
            u = this.ensureBuffer(this.bufferLength + a),
            s = this.bufferLength,
            c = this.firstDigit,
            d = 0,
            h = i.length;
          d < h;
          d++
        ) {
          var y = i[d],
            m = void 0;
          if (y >= 48 && y <= 57) m = y & 15;
          else if ((y >= 65 && y <= 70) || (y >= 97 && y <= 102))
            m = (y & 15) + 9;
          else if (y === 62) {
            this.eof = !0;
            break;
          } else continue;
          c < 0 ? (c = m) : ((u[s++] = (c << 4) | m), (c = -1));
        }
        c >= 0 && this.eof && ((u[s++] = c << 4), (c = -1)),
          (this.firstDigit = c),
          (this.bufferLength = s);
      }),
      e
    );
  })(Da),
  j0 = new Int32Array([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  Zm = new Int32Array([
    3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099,
    131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259,
    327811, 327843, 327875, 327907, 258, 258, 258,
  ]),
  Ym = new Int32Array([
    1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193,
    327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849,
    591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545,
  ]),
  Qm = [
    new Int32Array([
      459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016,
      524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376,
      524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328,
      59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572,
      459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292,
      524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412,
      524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364,
      590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020,
      459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013,
      524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394,
      524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310,
      524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996,
      524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031,
      524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430,
      524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337,
      590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050,
      459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020,
      524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373,
      524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325,
      589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978,
      459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301,
      524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403,
      524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355,
      590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038,
      459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011,
      524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391,
      524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319,
      589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014,
      524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024,
      524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416,
      524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344,
      590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065,
      459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018,
      524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380,
      524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332,
      590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570,
      459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290,
      524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410,
      524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362,
      590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029,
      459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015,
      524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398,
      524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305,
      524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987,
      524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028,
      524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425,
      524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341,
      590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059,
      459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022,
      524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371,
      524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323,
      589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975,
      459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299,
      524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407,
      524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359,
      590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047,
      459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079,
    ]),
    9,
  ],
  Jm = [
    new Int32Array([
      327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682,
      327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689,
      327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707,
      327687, 327703, 327695, 0,
    ]),
    5,
  ],
  _m = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = r.call(this, i) || this;
      a.stream = t;
      var u = t.getByte(),
        s = t.getByte();
      if (u === -1 || s === -1)
        throw new Error("Invalid header in flate stream: " + u + ", " + s);
      if ((u & 15) !== 8)
        throw new Error(
          "Unknown compression method in flate stream: " + u + ", " + s
        );
      if (((u << 8) + s) % 31 !== 0)
        throw new Error("Bad FCHECK in flate stream: " + u + ", " + s);
      if (s & 32)
        throw new Error("FDICT bit set in flate stream: " + u + ", " + s);
      return (a.codeSize = 0), (a.codeBuf = 0), a;
    }
    return (
      (e.prototype.readBlock = function () {
        var t,
          i,
          a = this.stream,
          u = this.getBits(3);
        if ((u & 1 && (this.eof = !0), (u >>= 1), u === 0)) {
          var s = void 0;
          if ((s = a.getByte()) === -1)
            throw new Error("Bad block header in flate stream");
          var c = s;
          if ((s = a.getByte()) === -1)
            throw new Error("Bad block header in flate stream");
          if (((c |= s << 8), (s = a.getByte()) === -1))
            throw new Error("Bad block header in flate stream");
          var d = s;
          if ((s = a.getByte()) === -1)
            throw new Error("Bad block header in flate stream");
          if (((d |= s << 8), d !== (~c & 65535) && (c !== 0 || d !== 0)))
            throw new Error("Bad uncompressed block length in flate stream");
          (this.codeBuf = 0), (this.codeSize = 0);
          var h = this.bufferLength;
          t = this.ensureBuffer(h + c);
          var y = h + c;
          if (((this.bufferLength = y), c === 0))
            a.peekByte() === -1 && (this.eof = !0);
          else
            for (var m = h; m < y; ++m) {
              if ((s = a.getByte()) === -1) {
                this.eof = !0;
                break;
              }
              t[m] = s;
            }
          return;
        }
        var x, w;
        if (u === 1) (x = Qm), (w = Jm);
        else if (u === 2) {
          var F = this.getBits(5) + 257,
            E = this.getBits(5) + 1,
            R = this.getBits(4) + 4,
            D = new Uint8Array(j0.length),
            L = void 0;
          for (L = 0; L < R; ++L) D[j0[L]] = this.getBits(3);
          var N = this.generateHuffmanTable(D);
          (i = 0), (L = 0);
          for (
            var q = F + E,
              K = new Uint8Array(q),
              M = void 0,
              U = void 0,
              _ = void 0;
            L < q;

          ) {
            var te = this.getCode(N);
            if (te === 16) (M = 2), (U = 3), (_ = i);
            else if (te === 17) (M = 3), (U = 3), (_ = i = 0);
            else if (te === 18) (M = 7), (U = 11), (_ = i = 0);
            else {
              K[L++] = i = te;
              continue;
            }
            for (var ee = this.getBits(M) + U; ee-- > 0; ) K[L++] = _;
          }
          (x = this.generateHuffmanTable(K.subarray(0, F))),
            (w = this.generateHuffmanTable(K.subarray(F, q)));
        } else throw new Error("Unknown block type in flate stream");
        t = this.buffer;
        for (var ie = t ? t.length : 0, ce = this.bufferLength; ; ) {
          var Y = this.getCode(x);
          if (Y < 256) {
            ce + 1 >= ie && ((t = this.ensureBuffer(ce + 1)), (ie = t.length)),
              (t[ce++] = Y);
            continue;
          }
          if (Y === 256) {
            this.bufferLength = ce;
            return;
          }
          (Y -= 257), (Y = Zm[Y]);
          var xe = Y >> 16;
          xe > 0 && (xe = this.getBits(xe)),
            (i = (Y & 65535) + xe),
            (Y = this.getCode(w)),
            (Y = Ym[Y]),
            (xe = Y >> 16),
            xe > 0 && (xe = this.getBits(xe));
          var Se = (Y & 65535) + xe;
          ce + i >= ie && ((t = this.ensureBuffer(ce + i)), (ie = t.length));
          for (var de = 0; de < i; ++de, ++ce) t[ce] = t[ce - Se];
        }
      }),
      (e.prototype.getBits = function (t) {
        for (
          var i = this.stream, a = this.codeSize, u = this.codeBuf, s;
          a < t;

        ) {
          if ((s = i.getByte()) === -1)
            throw new Error("Bad encoding in flate stream");
          (u |= s << a), (a += 8);
        }
        return (
          (s = u & ((1 << t) - 1)),
          (this.codeBuf = u >> t),
          (this.codeSize = a -= t),
          s
        );
      }),
      (e.prototype.getCode = function (t) {
        for (
          var i = this.stream,
            a = t[0],
            u = t[1],
            s = this.codeSize,
            c = this.codeBuf,
            d;
          s < u && (d = i.getByte()) !== -1;

        )
          (c |= d << s), (s += 8);
        var h = a[c & ((1 << u) - 1)];
        typeof a == "number" && console.log("FLATE:", h);
        var y = h >> 16,
          m = h & 65535;
        if (y < 1 || s < y) throw new Error("Bad encoding in flate stream");
        return (this.codeBuf = c >> y), (this.codeSize = s - y), m;
      }),
      (e.prototype.generateHuffmanTable = function (t) {
        var i = t.length,
          a = 0,
          u;
        for (u = 0; u < i; ++u) t[u] > a && (a = t[u]);
        for (
          var s = 1 << a, c = new Int32Array(s), d = 1, h = 0, y = 2;
          d <= a;
          ++d, h <<= 1, y <<= 1
        )
          for (var m = 0; m < i; ++m)
            if (t[m] === d) {
              var x = 0,
                w = h;
              for (u = 0; u < d; ++u) (x = (x << 1) | (w & 1)), (w >>= 1);
              for (u = x; u < s; u += y) c[u] = (d << 16) | m;
              ++h;
            }
        return [c, a];
      }),
      e
    );
  })(Da),
  $m = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = r.call(this, i) || this;
      (u.stream = t), (u.cachedData = 0), (u.bitsCached = 0);
      for (
        var s = 4096,
          c = {
            earlyChange: a,
            codeLength: 9,
            nextCode: 258,
            dictionaryValues: new Uint8Array(s),
            dictionaryLengths: new Uint16Array(s),
            dictionaryPrevCodes: new Uint16Array(s),
            currentSequence: new Uint8Array(s),
            currentSequenceLength: 0,
          },
          d = 0;
        d < 256;
        ++d
      )
        (c.dictionaryValues[d] = d), (c.dictionaryLengths[d] = 1);
      return (u.lzwState = c), u;
    }
    return (
      (e.prototype.readBlock = function () {
        var t = 512,
          i = t * 2,
          a = t,
          u,
          s,
          c,
          d = this.lzwState;
        if (d) {
          var h = d.earlyChange,
            y = d.nextCode,
            m = d.dictionaryValues,
            x = d.dictionaryLengths,
            w = d.dictionaryPrevCodes,
            F = d.codeLength,
            E = d.prevCode,
            R = d.currentSequence,
            D = d.currentSequenceLength,
            L = 0,
            N = this.bufferLength,
            q = this.ensureBuffer(this.bufferLength + i);
          for (u = 0; u < t; u++) {
            var K = this.readBits(F),
              M = D > 0;
            if (!K || K < 256) (R[0] = K), (D = 1);
            else if (K >= 258)
              if (K < y)
                for (D = x[K], s = D - 1, c = K; s >= 0; s--)
                  (R[s] = m[c]), (c = w[c]);
              else R[D++] = R[0];
            else if (K === 256) {
              (F = 9), (y = 258), (D = 0);
              continue;
            } else {
              (this.eof = !0), delete this.lzwState;
              break;
            }
            if (
              (M &&
                ((w[y] = E),
                (x[y] = x[E] + 1),
                (m[y] = R[0]),
                y++,
                (F =
                  (y + h) & (y + h - 1)
                    ? F
                    : Math.min(Math.log(y + h) / 0.6931471805599453 + 1, 12) |
                      0)),
              (E = K),
              (L += D),
              i < L)
            ) {
              do i += a;
              while (i < L);
              q = this.ensureBuffer(this.bufferLength + i);
            }
            for (s = 0; s < D; s++) q[N++] = R[s];
          }
          (d.nextCode = y),
            (d.codeLength = F),
            (d.prevCode = E),
            (d.currentSequenceLength = D),
            (this.bufferLength = N);
        }
      }),
      (e.prototype.readBits = function (t) {
        for (var i = this.bitsCached, a = this.cachedData; i < t; ) {
          var u = this.stream.getByte();
          if (u === -1) return (this.eof = !0), null;
          (a = (a << 8) | u), (i += 8);
        }
        return (
          (this.bitsCached = i -= t),
          (this.cachedData = a),
          (a >>> i) & ((1 << t) - 1)
        );
      }),
      e
    );
  })(Da),
  e1 = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = r.call(this, i) || this;
      return (a.stream = t), a;
    }
    return (
      (e.prototype.readBlock = function () {
        var t = this.stream.getBytes(2);
        if (!t || t.length < 2 || t[0] === 128) {
          this.eof = !0;
          return;
        }
        var i,
          a = this.bufferLength,
          u = t[0];
        if (u < 128) {
          if (((i = this.ensureBuffer(a + u + 1)), (i[a++] = t[1]), u > 0)) {
            var s = this.stream.getBytes(u);
            i.set(s, a), (a += u);
          }
        } else {
          u = 257 - u;
          var c = t[1];
          i = this.ensureBuffer(a + u + 1);
          for (var d = 0; d < u; d++) i[a++] = c;
        }
        this.bufferLength = a;
      }),
      e
    );
  })(Da),
  B0 = function (r, e, t) {
    if (e === P.of("FlateDecode")) return new _m(r);
    if (e === P.of("LZWDecode")) {
      var i = 1;
      if (t instanceof Qe) {
        var a = t.lookup(P.of("EarlyChange"));
        a instanceof qe && (i = a.asNumber());
      }
      return new $m(r, void 0, i);
    }
    if (e === P.of("ASCII85Decode")) return new Gm(r);
    if (e === P.of("ASCIIHexDecode")) return new Xm(r);
    if (e === P.of("RunLengthDecode")) return new e1(r);
    throw new sm(e.asString());
  },
  bp = function (r) {
    var e = r.dict,
      t = r.contents,
      i = new Sp(t),
      a = e.lookup(P.of("Filter")),
      u = e.lookup(P.of("DecodeParms"));
    if (a instanceof P) i = B0(i, a, u);
    else if (a instanceof ct)
      for (var s = 0, c = a.size(); s < c; s++)
        i = B0(i, a.lookup(s, P), u && u.lookupMaybe(s, Qe));
    else if (a) throw new il([P, ct], a);
    return i;
  },
  t1 = function (r) {
    var e = r.MediaBox(),
      t = e.lookup(2, qe).asNumber() - e.lookup(0, qe).asNumber(),
      i = e.lookup(3, qe).asNumber() - e.lookup(1, qe).asNumber();
    return { left: 0, bottom: 0, right: t, top: i };
  },
  r1 = function (r) {
    return [1, 0, 0, 1, -r.left, -r.bottom];
  },
  kp = (function () {
    function r(e, t, i) {
      this.page = e;
      var a = t ?? t1(e);
      (this.width = a.right - a.left),
        (this.height = a.top - a.bottom),
        (this.boundingBox = a),
        (this.transformationMatrix = i ?? r1(a));
    }
    return (
      (r.for = function (e, t, i) {
        return _e(this, void 0, void 0, function () {
          return $e(this, function (a) {
            return [2, new r(e, t, i)];
          });
        });
      }),
      (r.prototype.embedIntoContext = function (e, t) {
        return _e(this, void 0, void 0, function () {
          var i, a, u, s, c, d, h, y, m, x;
          return $e(this, function (w) {
            if (
              ((i = this.page.normalizedEntries()),
              (a = i.Contents),
              (u = i.Resources),
              !a)
            )
              throw new fm();
            return (
              (s = this.decodeContents(a)),
              (c = this.boundingBox),
              (d = c.left),
              (h = c.bottom),
              (y = c.right),
              (m = c.top),
              (x = e.flateStream(s, {
                Type: "XObject",
                Subtype: "Form",
                FormType: 1,
                BBox: [d, h, y, m],
                Matrix: this.transformationMatrix,
                Resources: u,
              })),
              t ? (e.assign(t, x), [2, t]) : [2, e.register(x)]
            );
          });
        });
      }),
      (r.prototype.decodeContents = function (e) {
        for (
          var t = Uint8Array.of(T.Newline), i = [], a = 0, u = e.size();
          a < u;
          a++
        ) {
          var s = e.lookup(a, Br),
            c = void 0;
          if (s instanceof Fa) c = bp(s).decode();
          else if (s instanceof ya) c = s.getUnencodedContents();
          else throw new cm(s);
          i.push(c, t);
        }
        return fy.apply(void 0, i);
      }),
      r
    );
  })(),
  Hu = function (r, e) {
    if (r !== void 0) return e[r];
  },
  ma;
(function (r) {
  (r.UseNone = "UseNone"),
    (r.UseOutlines = "UseOutlines"),
    (r.UseThumbs = "UseThumbs"),
    (r.UseOC = "UseOC");
})(ma || (ma = {}));
var xa;
(function (r) {
  (r.L2R = "L2R"), (r.R2L = "R2L");
})(xa || (xa = {}));
var wa;
(function (r) {
  (r.None = "None"), (r.AppDefault = "AppDefault");
})(wa || (wa = {}));
var ul;
(function (r) {
  (r.Simplex = "Simplex"),
    (r.DuplexFlipShortEdge = "DuplexFlipShortEdge"),
    (r.DuplexFlipLongEdge = "DuplexFlipLongEdge");
})(ul || (ul = {}));
var I0 = (function () {
    function r(e) {
      this.dict = e;
    }
    return (
      (r.prototype.lookupBool = function (e) {
        var t = this.dict.lookup(P.of(e));
        if (t instanceof ka) return t;
      }),
      (r.prototype.lookupName = function (e) {
        var t = this.dict.lookup(P.of(e));
        if (t instanceof P) return t;
      }),
      (r.prototype.HideToolbar = function () {
        return this.lookupBool("HideToolbar");
      }),
      (r.prototype.HideMenubar = function () {
        return this.lookupBool("HideMenubar");
      }),
      (r.prototype.HideWindowUI = function () {
        return this.lookupBool("HideWindowUI");
      }),
      (r.prototype.FitWindow = function () {
        return this.lookupBool("FitWindow");
      }),
      (r.prototype.CenterWindow = function () {
        return this.lookupBool("CenterWindow");
      }),
      (r.prototype.DisplayDocTitle = function () {
        return this.lookupBool("DisplayDocTitle");
      }),
      (r.prototype.NonFullScreenPageMode = function () {
        return this.lookupName("NonFullScreenPageMode");
      }),
      (r.prototype.Direction = function () {
        return this.lookupName("Direction");
      }),
      (r.prototype.PrintScaling = function () {
        return this.lookupName("PrintScaling");
      }),
      (r.prototype.Duplex = function () {
        return this.lookupName("Duplex");
      }),
      (r.prototype.PickTrayByPDFSize = function () {
        return this.lookupBool("PickTrayByPDFSize");
      }),
      (r.prototype.PrintPageRange = function () {
        var e = this.dict.lookup(P.of("PrintPageRange"));
        if (e instanceof ct) return e;
      }),
      (r.prototype.NumCopies = function () {
        var e = this.dict.lookup(P.of("NumCopies"));
        if (e instanceof qe) return e;
      }),
      (r.prototype.getHideToolbar = function () {
        var e, t;
        return (t =
          (e = this.HideToolbar()) === null || e === void 0
            ? void 0
            : e.asBoolean()) !== null && t !== void 0
          ? t
          : !1;
      }),
      (r.prototype.getHideMenubar = function () {
        var e, t;
        return (t =
          (e = this.HideMenubar()) === null || e === void 0
            ? void 0
            : e.asBoolean()) !== null && t !== void 0
          ? t
          : !1;
      }),
      (r.prototype.getHideWindowUI = function () {
        var e, t;
        return (t =
          (e = this.HideWindowUI()) === null || e === void 0
            ? void 0
            : e.asBoolean()) !== null && t !== void 0
          ? t
          : !1;
      }),
      (r.prototype.getFitWindow = function () {
        var e, t;
        return (t =
          (e = this.FitWindow()) === null || e === void 0
            ? void 0
            : e.asBoolean()) !== null && t !== void 0
          ? t
          : !1;
      }),
      (r.prototype.getCenterWindow = function () {
        var e, t;
        return (t =
          (e = this.CenterWindow()) === null || e === void 0
            ? void 0
            : e.asBoolean()) !== null && t !== void 0
          ? t
          : !1;
      }),
      (r.prototype.getDisplayDocTitle = function () {
        var e, t;
        return (t =
          (e = this.DisplayDocTitle()) === null || e === void 0
            ? void 0
            : e.asBoolean()) !== null && t !== void 0
          ? t
          : !1;
      }),
      (r.prototype.getNonFullScreenPageMode = function () {
        var e,
          t,
          i =
            (e = this.NonFullScreenPageMode()) === null || e === void 0
              ? void 0
              : e.decodeText();
        return (t = Hu(i, ma)) !== null && t !== void 0 ? t : ma.UseNone;
      }),
      (r.prototype.getReadingDirection = function () {
        var e,
          t,
          i =
            (e = this.Direction()) === null || e === void 0
              ? void 0
              : e.decodeText();
        return (t = Hu(i, xa)) !== null && t !== void 0 ? t : xa.L2R;
      }),
      (r.prototype.getPrintScaling = function () {
        var e,
          t,
          i =
            (e = this.PrintScaling()) === null || e === void 0
              ? void 0
              : e.decodeText();
        return (t = Hu(i, wa)) !== null && t !== void 0 ? t : wa.AppDefault;
      }),
      (r.prototype.getDuplex = function () {
        var e,
          t =
            (e = this.Duplex()) === null || e === void 0
              ? void 0
              : e.decodeText();
        return Hu(t, ul);
      }),
      (r.prototype.getPickTrayByPDFSize = function () {
        var e;
        return (e = this.PickTrayByPDFSize()) === null || e === void 0
          ? void 0
          : e.asBoolean();
      }),
      (r.prototype.getPrintPageRange = function () {
        var e = this.PrintPageRange();
        if (!e) return [];
        for (var t = [], i = 0; i < e.size(); i += 2) {
          var a = e.lookup(i, qe).asNumber(),
            u = e.lookup(i + 1, qe).asNumber();
          t.push({ start: a, end: u });
        }
        return t;
      }),
      (r.prototype.getNumCopies = function () {
        var e, t;
        return (t =
          (e = this.NumCopies()) === null || e === void 0
            ? void 0
            : e.asNumber()) !== null && t !== void 0
          ? t
          : 1;
      }),
      (r.prototype.setHideToolbar = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("HideToolbar"), t);
      }),
      (r.prototype.setHideMenubar = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("HideMenubar"), t);
      }),
      (r.prototype.setHideWindowUI = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("HideWindowUI"), t);
      }),
      (r.prototype.setFitWindow = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("FitWindow"), t);
      }),
      (r.prototype.setCenterWindow = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("CenterWindow"), t);
      }),
      (r.prototype.setDisplayDocTitle = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("DisplayDocTitle"), t);
      }),
      (r.prototype.setNonFullScreenPageMode = function (e) {
        li(e, "nonFullScreenPageMode", ma);
        var t = P.of(e);
        this.dict.set(P.of("NonFullScreenPageMode"), t);
      }),
      (r.prototype.setReadingDirection = function (e) {
        li(e, "readingDirection", xa);
        var t = P.of(e);
        this.dict.set(P.of("Direction"), t);
      }),
      (r.prototype.setPrintScaling = function (e) {
        li(e, "printScaling", wa);
        var t = P.of(e);
        this.dict.set(P.of("PrintScaling"), t);
      }),
      (r.prototype.setDuplex = function (e) {
        li(e, "duplex", ul);
        var t = P.of(e);
        this.dict.set(P.of("Duplex"), t);
      }),
      (r.prototype.setPickTrayByPDFSize = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("PickTrayByPDFSize"), t);
      }),
      (r.prototype.setPrintPageRange = function (e) {
        Array.isArray(e) || (e = [e]);
        for (var t = [], i = 0, a = e.length; i < a; i++)
          t.push(e[i].start), t.push(e[i].end);
        cp(t, "printPageRange", ["number"]);
        var u = this.dict.context.obj(t);
        this.dict.set(P.of("PrintPageRange"), u);
      }),
      (r.prototype.setNumCopies = function (e) {
        Nr(e, "numCopies", 1, Number.MAX_VALUE), lm(e, "numCopies");
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("NumCopies"), t);
      }),
      (r.fromDict = function (e) {
        return new r(e);
      }),
      (r.create = function (e) {
        var t = e.obj({});
        return new r(t);
      }),
      r
    );
  })(),
  n1 = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/,
  Fp = (function () {
    function r(e, t) {
      (this.dict = e), (this.ref = t);
    }
    return (
      (r.prototype.T = function () {
        return this.dict.lookupMaybe(P.of("T"), vt, Ve);
      }),
      (r.prototype.Ff = function () {
        var e = this.getInheritableAttribute(P.of("Ff"));
        return this.dict.context.lookupMaybe(e, qe);
      }),
      (r.prototype.V = function () {
        var e = this.getInheritableAttribute(P.of("V"));
        return this.dict.context.lookup(e);
      }),
      (r.prototype.Kids = function () {
        return this.dict.lookupMaybe(P.of("Kids"), ct);
      }),
      (r.prototype.DA = function () {
        var e = this.dict.lookup(P.of("DA"));
        if (e instanceof vt || e instanceof Ve) return e;
      }),
      (r.prototype.setKids = function (e) {
        this.dict.set(P.of("Kids"), this.dict.context.obj(e));
      }),
      (r.prototype.getParent = function () {
        var e = this.dict.get(P.of("Parent"));
        if (e instanceof gt) {
          var t = this.dict.lookup(P.of("Parent"), Qe);
          return new r(t, e);
        }
      }),
      (r.prototype.setParent = function (e) {
        e ? this.dict.set(P.of("Parent"), e) : this.dict.delete(P.of("Parent"));
      }),
      (r.prototype.getFullyQualifiedName = function () {
        var e = this.getParent();
        return e
          ? e.getFullyQualifiedName() + "." + this.getPartialName()
          : this.getPartialName();
      }),
      (r.prototype.getPartialName = function () {
        var e;
        return (e = this.T()) === null || e === void 0
          ? void 0
          : e.decodeText();
      }),
      (r.prototype.setPartialName = function (e) {
        e
          ? this.dict.set(P.of("T"), Ve.fromText(e))
          : this.dict.delete(P.of("T"));
      }),
      (r.prototype.setDefaultAppearance = function (e) {
        this.dict.set(P.of("DA"), vt.of(e));
      }),
      (r.prototype.getDefaultAppearance = function () {
        var e = this.DA();
        return e instanceof Ve
          ? e.decodeText()
          : e == null
          ? void 0
          : e.asString();
      }),
      (r.prototype.setFontSize = function (e) {
        var t,
          i =
            (t = this.getFullyQualifiedName()) !== null && t !== void 0
              ? t
              : "",
          a = this.getDefaultAppearance();
        if (!a) throw new vm(i);
        var u = Zf(a, n1);
        if (!u.match) throw new gm(i);
        var s = a.slice(0, u.pos - u.match[0].length),
          c = u.pos <= a.length ? a.slice(u.pos) : "",
          d = u.match[1],
          h = s + " /" + d + " " + e + " Tf " + c;
        this.setDefaultAppearance(h);
      }),
      (r.prototype.getFlags = function () {
        var e, t;
        return (t =
          (e = this.Ff()) === null || e === void 0 ? void 0 : e.asNumber()) !==
          null && t !== void 0
          ? t
          : 0;
      }),
      (r.prototype.setFlags = function (e) {
        this.dict.set(P.of("Ff"), qe.of(e));
      }),
      (r.prototype.hasFlag = function (e) {
        var t = this.getFlags();
        return (t & e) !== 0;
      }),
      (r.prototype.setFlag = function (e) {
        var t = this.getFlags();
        this.setFlags(t | e);
      }),
      (r.prototype.clearFlag = function (e) {
        var t = this.getFlags();
        this.setFlags(t & ~e);
      }),
      (r.prototype.setFlagTo = function (e, t) {
        t ? this.setFlag(e) : this.clearFlag(e);
      }),
      (r.prototype.getInheritableAttribute = function (e) {
        var t;
        return (
          this.ascend(function (i) {
            t || (t = i.dict.get(e));
          }),
          t
        );
      }),
      (r.prototype.ascend = function (e) {
        e(this);
        var t = this.getParent();
        t && t.ascend(e);
      }),
      r
    );
  })(),
  Af = (function () {
    function r(e) {
      this.dict = e;
    }
    return (
      (r.prototype.W = function () {
        var e = this.dict.lookup(P.of("W"));
        if (e instanceof qe) return e;
      }),
      (r.prototype.getWidth = function () {
        var e, t;
        return (t =
          (e = this.W()) === null || e === void 0 ? void 0 : e.asNumber()) !==
          null && t !== void 0
          ? t
          : 1;
      }),
      (r.prototype.setWidth = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("W"), t);
      }),
      (r.fromDict = function (e) {
        return new r(e);
      }),
      r
    );
  })(),
  i1 = (function () {
    function r(e) {
      this.dict = e;
    }
    return (
      (r.prototype.Rect = function () {
        return this.dict.lookup(P.of("Rect"), ct);
      }),
      (r.prototype.AP = function () {
        return this.dict.lookupMaybe(P.of("AP"), Qe);
      }),
      (r.prototype.F = function () {
        var e = this.dict.lookup(P.of("F"));
        return this.dict.context.lookupMaybe(e, qe);
      }),
      (r.prototype.getRectangle = function () {
        var e,
          t = this.Rect();
        return (e = t == null ? void 0 : t.asRectangle()) !== null &&
          e !== void 0
          ? e
          : { x: 0, y: 0, width: 0, height: 0 };
      }),
      (r.prototype.setRectangle = function (e) {
        var t = e.x,
          i = e.y,
          a = e.width,
          u = e.height,
          s = this.dict.context.obj([t, i, t + a, i + u]);
        this.dict.set(P.of("Rect"), s);
      }),
      (r.prototype.getAppearanceState = function () {
        var e = this.dict.lookup(P.of("AS"));
        if (e instanceof P) return e;
      }),
      (r.prototype.setAppearanceState = function (e) {
        this.dict.set(P.of("AS"), e);
      }),
      (r.prototype.setAppearances = function (e) {
        this.dict.set(P.of("AP"), e);
      }),
      (r.prototype.ensureAP = function () {
        var e = this.AP();
        return (
          e || ((e = this.dict.context.obj({})), this.dict.set(P.of("AP"), e)),
          e
        );
      }),
      (r.prototype.getNormalAppearance = function () {
        var e = this.ensureAP(),
          t = e.get(P.of("N"));
        if (t instanceof gt || t instanceof Qe) return t;
        throw new Error(
          "Unexpected N type: " + (t == null ? void 0 : t.constructor.name)
        );
      }),
      (r.prototype.setNormalAppearance = function (e) {
        var t = this.ensureAP();
        t.set(P.of("N"), e);
      }),
      (r.prototype.setRolloverAppearance = function (e) {
        var t = this.ensureAP();
        t.set(P.of("R"), e);
      }),
      (r.prototype.setDownAppearance = function (e) {
        var t = this.ensureAP();
        t.set(P.of("D"), e);
      }),
      (r.prototype.removeRolloverAppearance = function () {
        var e = this.AP();
        e == null || e.delete(P.of("R"));
      }),
      (r.prototype.removeDownAppearance = function () {
        var e = this.AP();
        e == null || e.delete(P.of("D"));
      }),
      (r.prototype.getAppearances = function () {
        var e = this.AP();
        if (e) {
          var t = e.lookup(P.of("N"), Qe, Br),
            i = e.lookupMaybe(P.of("R"), Qe, Br),
            a = e.lookupMaybe(P.of("D"), Qe, Br);
          return { normal: t, rollover: i, down: a };
        }
      }),
      (r.prototype.getFlags = function () {
        var e, t;
        return (t =
          (e = this.F()) === null || e === void 0 ? void 0 : e.asNumber()) !==
          null && t !== void 0
          ? t
          : 0;
      }),
      (r.prototype.setFlags = function (e) {
        this.dict.set(P.of("F"), qe.of(e));
      }),
      (r.prototype.hasFlag = function (e) {
        var t = this.getFlags();
        return (t & e) !== 0;
      }),
      (r.prototype.setFlag = function (e) {
        var t = this.getFlags();
        this.setFlags(t | e);
      }),
      (r.prototype.clearFlag = function (e) {
        var t = this.getFlags();
        this.setFlags(t & ~e);
      }),
      (r.prototype.setFlagTo = function (e, t) {
        t ? this.setFlag(e) : this.clearFlag(e);
      }),
      (r.fromDict = function (e) {
        return new r(e);
      }),
      r
    );
  })(),
  zf = (function () {
    function r(e) {
      this.dict = e;
    }
    return (
      (r.prototype.R = function () {
        var e = this.dict.lookup(P.of("R"));
        if (e instanceof qe) return e;
      }),
      (r.prototype.BC = function () {
        var e = this.dict.lookup(P.of("BC"));
        if (e instanceof ct) return e;
      }),
      (r.prototype.BG = function () {
        var e = this.dict.lookup(P.of("BG"));
        if (e instanceof ct) return e;
      }),
      (r.prototype.CA = function () {
        var e = this.dict.lookup(P.of("CA"));
        if (e instanceof Ve || e instanceof vt) return e;
      }),
      (r.prototype.RC = function () {
        var e = this.dict.lookup(P.of("RC"));
        if (e instanceof Ve || e instanceof vt) return e;
      }),
      (r.prototype.AC = function () {
        var e = this.dict.lookup(P.of("AC"));
        if (e instanceof Ve || e instanceof vt) return e;
      }),
      (r.prototype.getRotation = function () {
        var e;
        return (e = this.R()) === null || e === void 0 ? void 0 : e.asNumber();
      }),
      (r.prototype.getBorderColor = function () {
        var e = this.BC();
        if (e) {
          for (
            var t = [], i = 0, a = e == null ? void 0 : e.size();
            i < a;
            i++
          ) {
            var u = e.get(i);
            u instanceof qe && t.push(u.asNumber());
          }
          return t;
        }
      }),
      (r.prototype.getBackgroundColor = function () {
        var e = this.BG();
        if (e) {
          for (
            var t = [], i = 0, a = e == null ? void 0 : e.size();
            i < a;
            i++
          ) {
            var u = e.get(i);
            u instanceof qe && t.push(u.asNumber());
          }
          return t;
        }
      }),
      (r.prototype.getCaptions = function () {
        var e = this.CA(),
          t = this.RC(),
          i = this.AC();
        return {
          normal: e == null ? void 0 : e.decodeText(),
          rollover: t == null ? void 0 : t.decodeText(),
          down: i == null ? void 0 : i.decodeText(),
        };
      }),
      (r.prototype.setRotation = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("R"), t);
      }),
      (r.prototype.setBorderColor = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("BC"), t);
      }),
      (r.prototype.setBackgroundColor = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(P.of("BG"), t);
      }),
      (r.prototype.setCaptions = function (e) {
        var t = Ve.fromText(e.normal);
        if ((this.dict.set(P.of("CA"), t), e.rollover)) {
          var i = Ve.fromText(e.rollover);
          this.dict.set(P.of("RC"), i);
        } else this.dict.delete(P.of("RC"));
        if (e.down) {
          var a = Ve.fromText(e.down);
          this.dict.set(P.of("AC"), a);
        } else this.dict.delete(P.of("AC"));
      }),
      (r.fromDict = function (e) {
        return new r(e);
      }),
      r
    );
  })(),
  Lf = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.MK = function () {
        var t = this.dict.lookup(P.of("MK"));
        if (t instanceof Qe) return t;
      }),
      (e.prototype.BS = function () {
        var t = this.dict.lookup(P.of("BS"));
        if (t instanceof Qe) return t;
      }),
      (e.prototype.DA = function () {
        var t = this.dict.lookup(P.of("DA"));
        if (t instanceof vt || t instanceof Ve) return t;
      }),
      (e.prototype.P = function () {
        var t = this.dict.get(P.of("P"));
        if (t instanceof gt) return t;
      }),
      (e.prototype.setP = function (t) {
        this.dict.set(P.of("P"), t);
      }),
      (e.prototype.setDefaultAppearance = function (t) {
        this.dict.set(P.of("DA"), vt.of(t));
      }),
      (e.prototype.getDefaultAppearance = function () {
        var t = this.DA();
        return t instanceof Ve
          ? t.decodeText()
          : t == null
          ? void 0
          : t.asString();
      }),
      (e.prototype.getAppearanceCharacteristics = function () {
        var t = this.MK();
        if (t) return zf.fromDict(t);
      }),
      (e.prototype.getOrCreateAppearanceCharacteristics = function () {
        var t = this.MK();
        if (t) return zf.fromDict(t);
        var i = zf.fromDict(this.dict.context.obj({}));
        return this.dict.set(P.of("MK"), i.dict), i;
      }),
      (e.prototype.getBorderStyle = function () {
        var t = this.BS();
        if (t) return Af.fromDict(t);
      }),
      (e.prototype.getOrCreateBorderStyle = function () {
        var t = this.BS();
        if (t) return Af.fromDict(t);
        var i = Af.fromDict(this.dict.context.obj({}));
        return this.dict.set(P.of("BS"), i.dict), i;
      }),
      (e.prototype.getOnValue = function () {
        var t,
          i =
            (t = this.getAppearances()) === null || t === void 0
              ? void 0
              : t.normal;
        if (i instanceof Qe)
          for (var a = i.keys(), u = 0, s = a.length; u < s; u++) {
            var c = a[u];
            if (c !== P.of("Off")) return c;
          }
      }),
      (e.fromDict = function (t) {
        return new e(t);
      }),
      (e.create = function (t, i) {
        var a = t.obj({
          Type: "Annot",
          Subtype: "Widget",
          Rect: [0, 0, 0, 0],
          Parent: i,
        });
        return new e(a);
      }),
      e
    );
  })(i1),
  xo = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.FT = function () {
        var t = this.getInheritableAttribute(P.of("FT"));
        return this.dict.context.lookup(t, P);
      }),
      (e.prototype.getWidgets = function () {
        var t = this.Kids();
        if (!t) return [Lf.fromDict(this.dict)];
        for (var i = new Array(t.size()), a = 0, u = t.size(); a < u; a++) {
          var s = t.lookup(a, Qe);
          i[a] = Lf.fromDict(s);
        }
        return i;
      }),
      (e.prototype.addWidget = function (t) {
        var i = this.normalizedEntries().Kids;
        i.push(t);
      }),
      (e.prototype.removeWidget = function (t) {
        var i = this.Kids();
        if (i) {
          if (t < 0 || t > i.size()) throw new ol(t, 0, i.size());
          i.remove(t);
        } else {
          if (t !== 0) throw new ol(t, 0, 0);
          this.setKids([]);
        }
      }),
      (e.prototype.normalizedEntries = function () {
        var t = this.Kids();
        return (
          t ||
            ((t = this.dict.context.obj([this.ref])),
            this.dict.set(P.of("Kids"), t)),
          { Kids: t }
        );
      }),
      (e.fromDict = function (t, i) {
        return new e(t, i);
      }),
      e
    );
  })(Fp),
  nc = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.Opt = function () {
        return this.dict.lookupMaybe(P.of("Opt"), vt, Ve, ct);
      }),
      (e.prototype.setOpt = function (t) {
        this.dict.set(P.of("Opt"), this.dict.context.obj(t));
      }),
      (e.prototype.getExportValues = function () {
        var t = this.Opt();
        if (t) {
          if (t instanceof vt || t instanceof Ve) return [t];
          for (var i = [], a = 0, u = t.size(); a < u; a++) {
            var s = t.lookup(a);
            (s instanceof vt || s instanceof Ve) && i.push(s);
          }
          return i;
        }
      }),
      (e.prototype.removeExportValue = function (t) {
        var i = this.Opt();
        if (i)
          if (i instanceof vt || i instanceof Ve) {
            if (t !== 0) throw new ol(t, 0, 0);
            this.setOpt([]);
          } else {
            if (t < 0 || t > i.size()) throw new ol(t, 0, i.size());
            i.remove(t);
          }
      }),
      (e.prototype.normalizeExportValues = function () {
        for (
          var t,
            i,
            a,
            u,
            s = (t = this.getExportValues()) !== null && t !== void 0 ? t : [],
            c = [],
            d = this.getWidgets(),
            h = 0,
            y = d.length;
          h < y;
          h++
        ) {
          var m = d[h],
            x =
              (i = s[h]) !== null && i !== void 0
                ? i
                : Ve.fromText(
                    (u =
                      (a = m.getOnValue()) === null || a === void 0
                        ? void 0
                        : a.decodeText()) !== null && u !== void 0
                      ? u
                      : ""
                  );
          c.push(x);
        }
        this.setOpt(c);
      }),
      (e.prototype.addOpt = function (t, i) {
        var a;
        this.normalizeExportValues();
        var u = t.decodeText(),
          s;
        if (i)
          for (
            var c =
                (a = this.getExportValues()) !== null && a !== void 0 ? a : [],
              d = 0,
              h = c.length;
            d < h;
            d++
          ) {
            var y = c[d];
            y.decodeText() === u && (s = d);
          }
        var m = this.Opt();
        return m.push(t), s ?? m.size() - 1;
      }),
      (e.prototype.addWidgetWithOpt = function (t, i, a) {
        var u = this.addOpt(i, a),
          s = P.of(String(u));
        return this.addWidget(t), s;
      }),
      e
    );
  })(xo),
  Sl = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.setValue = function (t) {
        var i,
          a =
            (i = this.getOnValue()) !== null && i !== void 0 ? i : P.of("Yes");
        if (t !== a && t !== P.of("Off")) throw new _f();
        this.dict.set(P.of("V"), t);
        for (var u = this.getWidgets(), s = 0, c = u.length; s < c; s++) {
          var d = u[s],
            h = d.getOnValue() === t ? t : P.of("Off");
          d.setAppearanceState(h);
        }
      }),
      (e.prototype.getValue = function () {
        var t = this.V();
        return t instanceof P ? t : P.of("Off");
      }),
      (e.prototype.getOnValue = function () {
        var t = this.getWidgets()[0];
        return t == null ? void 0 : t.getOnValue();
      }),
      (e.fromDict = function (t, i) {
        return new e(t, i);
      }),
      (e.create = function (t) {
        var i = t.obj({ FT: "Btn", Kids: [] }),
          a = t.register(i);
        return new e(i, a);
      }),
      e
    );
  })(nc),
  Mt = function (r) {
    return 1 << r;
  },
  pn;
(function (r) {
  (r[(r.ReadOnly = Mt(0))] = "ReadOnly"),
    (r[(r.Required = Mt(1))] = "Required"),
    (r[(r.NoExport = Mt(2))] = "NoExport");
})(pn || (pn = {}));
var Yr;
(function (r) {
  (r[(r.NoToggleToOff = Mt(14))] = "NoToggleToOff"),
    (r[(r.Radio = Mt(15))] = "Radio"),
    (r[(r.PushButton = Mt(16))] = "PushButton"),
    (r[(r.RadiosInUnison = Mt(25))] = "RadiosInUnison");
})(Yr || (Yr = {}));
var Rt;
(function (r) {
  (r[(r.Multiline = Mt(12))] = "Multiline"),
    (r[(r.Password = Mt(13))] = "Password"),
    (r[(r.FileSelect = Mt(20))] = "FileSelect"),
    (r[(r.DoNotSpellCheck = Mt(22))] = "DoNotSpellCheck"),
    (r[(r.DoNotScroll = Mt(23))] = "DoNotScroll"),
    (r[(r.Comb = Mt(24))] = "Comb"),
    (r[(r.RichText = Mt(25))] = "RichText");
})(Rt || (Rt = {}));
var pt;
(function (r) {
  (r[(r.Combo = Mt(17))] = "Combo"),
    (r[(r.Edit = Mt(18))] = "Edit"),
    (r[(r.Sort = Mt(19))] = "Sort"),
    (r[(r.MultiSelect = Mt(21))] = "MultiSelect"),
    (r[(r.DoNotSpellCheck = Mt(22))] = "DoNotSpellCheck"),
    (r[(r.CommitOnSelChange = Mt(26))] = "CommitOnSelChange");
})(pt || (pt = {}));
var Cp = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.setValues = function (t) {
        if (
          this.hasFlag(pt.Combo) &&
          !this.hasFlag(pt.Edit) &&
          !this.valuesAreValid(t)
        )
          throw new _f();
        if (
          (t.length === 0 && this.dict.delete(P.of("V")),
          t.length === 1 && this.dict.set(P.of("V"), t[0]),
          t.length > 1)
        ) {
          if (!this.hasFlag(pt.MultiSelect)) throw new pm();
          this.dict.set(P.of("V"), this.dict.context.obj(t));
        }
        this.updateSelectedIndices(t);
      }),
      (e.prototype.valuesAreValid = function (t) {
        for (
          var i = this.getOptions(),
            a = function (d, h) {
              var y = t[d].decodeText();
              if (
                !i.find(function (m) {
                  return y === (m.display || m.value).decodeText();
                })
              )
                return { value: !1 };
            },
            u = 0,
            s = t.length;
          u < s;
          u++
        ) {
          var c = a(u);
          if (typeof c == "object") return c.value;
        }
        return !0;
      }),
      (e.prototype.updateSelectedIndices = function (t) {
        if (t.length > 1) {
          for (
            var i = new Array(t.length),
              a = this.getOptions(),
              u = function (d, h) {
                var y = t[d].decodeText();
                i[d] = a.findIndex(function (m) {
                  return y === (m.display || m.value).decodeText();
                });
              },
              s = 0,
              c = t.length;
            s < c;
            s++
          )
            u(s, c);
          this.dict.set(P.of("I"), this.dict.context.obj(i.sort()));
        } else this.dict.delete(P.of("I"));
      }),
      (e.prototype.getValues = function () {
        var t = this.V();
        if (t instanceof vt || t instanceof Ve) return [t];
        if (t instanceof ct) {
          for (var i = [], a = 0, u = t.size(); a < u; a++) {
            var s = t.lookup(a);
            (s instanceof vt || s instanceof Ve) && i.push(s);
          }
          return i;
        }
        return [];
      }),
      (e.prototype.Opt = function () {
        return this.dict.lookupMaybe(P.of("Opt"), vt, Ve, ct);
      }),
      (e.prototype.setOptions = function (t) {
        for (var i = new Array(t.length), a = 0, u = t.length; a < u; a++) {
          var s = t[a],
            c = s.value,
            d = s.display;
          i[a] = this.dict.context.obj([c, d || c]);
        }
        this.dict.set(P.of("Opt"), this.dict.context.obj(i));
      }),
      (e.prototype.getOptions = function () {
        var t = this.Opt();
        if (t instanceof vt || t instanceof Ve)
          return [{ value: t, display: t }];
        if (t instanceof ct) {
          for (var i = [], a = 0, u = t.size(); a < u; a++) {
            var s = t.lookup(a);
            if (
              ((s instanceof vt || s instanceof Ve) &&
                i.push({ value: s, display: s }),
              s instanceof ct && s.size() > 0)
            ) {
              var c = s.lookup(0, vt, Ve),
                d = s.lookupMaybe(1, vt, Ve);
              i.push({ value: c, display: d || c });
            }
          }
          return i;
        }
        return [];
      }),
      e
    );
  })(xo),
  bl = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.fromDict = function (t, i) {
        return new e(t, i);
      }),
      (e.create = function (t) {
        var i = t.obj({ FT: "Ch", Ff: pt.Combo, Kids: [] }),
          a = t.register(i);
        return new e(i, a);
      }),
      e
    );
  })(Cp),
  ll = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.addField = function (t) {
        var i = this.normalizedEntries().Kids;
        i == null || i.push(t);
      }),
      (e.prototype.normalizedEntries = function () {
        var t = this.Kids();
        return (
          t ||
            ((t = this.dict.context.obj([])), this.dict.set(P.of("Kids"), t)),
          { Kids: t }
        );
      }),
      (e.fromDict = function (t, i) {
        return new e(t, i);
      }),
      (e.create = function (t) {
        var i = t.obj({}),
          a = t.register(i);
        return new e(i, a);
      }),
      e
    );
  })(Fp),
  ic = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.fromDict = function (t, i) {
        return new e(t, i);
      }),
      e
    );
  })(xo),
  kl = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.MaxLen = function () {
        var t = this.dict.lookup(P.of("MaxLen"));
        if (t instanceof qe) return t;
      }),
      (e.prototype.Q = function () {
        var t = this.dict.lookup(P.of("Q"));
        if (t instanceof qe) return t;
      }),
      (e.prototype.setMaxLength = function (t) {
        this.dict.set(P.of("MaxLen"), qe.of(t));
      }),
      (e.prototype.removeMaxLength = function () {
        this.dict.delete(P.of("MaxLen"));
      }),
      (e.prototype.getMaxLength = function () {
        var t;
        return (t = this.MaxLen()) === null || t === void 0
          ? void 0
          : t.asNumber();
      }),
      (e.prototype.setQuadding = function (t) {
        this.dict.set(P.of("Q"), qe.of(t));
      }),
      (e.prototype.getQuadding = function () {
        var t;
        return (t = this.Q()) === null || t === void 0 ? void 0 : t.asNumber();
      }),
      (e.prototype.setValue = function (t) {
        this.dict.set(P.of("V"), t);
      }),
      (e.prototype.removeValue = function () {
        this.dict.delete(P.of("V"));
      }),
      (e.prototype.getValue = function () {
        var t = this.V();
        if (t instanceof vt || t instanceof Ve) return t;
      }),
      (e.fromDict = function (t, i) {
        return new e(t, i);
      }),
      (e.create = function (t) {
        var i = t.obj({ FT: "Tx", Kids: [] }),
          a = t.register(i);
        return new e(i, a);
      }),
      e
    );
  })(xo),
  Fl = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.fromDict = function (t, i) {
        return new e(t, i);
      }),
      (e.create = function (t) {
        var i = t.obj({ FT: "Btn", Ff: Yr.PushButton, Kids: [] }),
          a = t.register(i);
        return new e(i, a);
      }),
      e
    );
  })(nc),
  Cl = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.setValue = function (t) {
        var i = this.getOnValues();
        if (!i.includes(t) && t !== P.of("Off")) throw new _f();
        this.dict.set(P.of("V"), t);
        for (var a = this.getWidgets(), u = 0, s = a.length; u < s; u++) {
          var c = a[u],
            d = c.getOnValue() === t ? t : P.of("Off");
          c.setAppearanceState(d);
        }
      }),
      (e.prototype.getValue = function () {
        var t = this.V();
        return t instanceof P ? t : P.of("Off");
      }),
      (e.prototype.getOnValues = function () {
        for (
          var t = this.getWidgets(), i = [], a = 0, u = t.length;
          a < u;
          a++
        ) {
          var s = t[a].getOnValue();
          s && i.push(s);
        }
        return i;
      }),
      (e.fromDict = function (t, i) {
        return new e(t, i);
      }),
      (e.create = function (t) {
        var i = t.obj({ FT: "Btn", Ff: Yr.Radio, Kids: [] }),
          a = t.register(i);
        return new e(i, a);
      }),
      e
    );
  })(nc),
  Pl = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.fromDict = function (t, i) {
        return new e(t, i);
      }),
      (e.create = function (t) {
        var i = t.obj({ FT: "Ch", Kids: [] }),
          a = t.register(i);
        return new e(i, a);
      }),
      e
    );
  })(Cp),
  oc = function (r) {
    if (!r) return [];
    for (var e = [], t = 0, i = r.size(); t < i; t++) {
      var a = r.get(t),
        u = r.lookup(t);
      a instanceof gt && u instanceof Qe && e.push([Pp(u, a), a]);
    }
    return e;
  },
  Pp = function (r, e) {
    var t = o1(r);
    return t ? ll.fromDict(r, e) : a1(r, e);
  },
  o1 = function (r) {
    var e = r.lookup(P.of("Kids"));
    if (e instanceof ct)
      for (var t = 0, i = e.size(); t < i; t++) {
        var a = e.lookup(t),
          u = a instanceof Qe && a.has(P.of("T"));
        if (u) return !0;
      }
    return !1;
  },
  a1 = function (r, e) {
    var t = ac(r, P.of("FT")),
      i = r.context.lookup(t, P);
    return i === P.of("Btn")
      ? u1(r, e)
      : i === P.of("Ch")
      ? l1(r, e)
      : i === P.of("Tx")
      ? kl.fromDict(r, e)
      : i === P.of("Sig")
      ? ic.fromDict(r, e)
      : xo.fromDict(r, e);
  },
  u1 = function (r, e) {
    var t,
      i = ac(r, P.of("Ff")),
      a = r.context.lookupMaybe(i, qe),
      u =
        (t = a == null ? void 0 : a.asNumber()) !== null && t !== void 0
          ? t
          : 0;
    return Vf(u, Yr.PushButton)
      ? Fl.fromDict(r, e)
      : Vf(u, Yr.Radio)
      ? Cl.fromDict(r, e)
      : Sl.fromDict(r, e);
  },
  l1 = function (r, e) {
    var t,
      i = ac(r, P.of("Ff")),
      a = r.context.lookupMaybe(i, qe),
      u =
        (t = a == null ? void 0 : a.asNumber()) !== null && t !== void 0
          ? t
          : 0;
    return Vf(u, pt.Combo) ? bl.fromDict(r, e) : Pl.fromDict(r, e);
  },
  Vf = function (r, e) {
    return (r & e) !== 0;
  },
  ac = function (r, e) {
    var t;
    return (
      Ep(r, function (i) {
        t || (t = i.get(e));
      }),
      t
    );
  },
  Ep = function (r, e) {
    e(r);
    var t = r.lookupMaybe(P.of("Parent"), Qe);
    t && Ep(t, e);
  },
  sl = (function () {
    function r(e) {
      this.dict = e;
    }
    return (
      (r.prototype.Fields = function () {
        var e = this.dict.lookup(P.of("Fields"));
        if (e instanceof ct) return e;
      }),
      (r.prototype.getFields = function () {
        for (
          var e = this.normalizedEntries().Fields,
            t = new Array(e.size()),
            i = 0,
            a = e.size();
          i < a;
          i++
        ) {
          var u = e.get(i),
            s = e.lookup(i, Qe);
          t[i] = [Pp(s, u), u];
        }
        return t;
      }),
      (r.prototype.getAllFields = function () {
        var e = [],
          t = function (i) {
            if (i)
              for (var a = 0, u = i.length; a < u; a++) {
                var s = i[a];
                e.push(s);
                var c = s[0];
                c instanceof ll && t(oc(c.Kids()));
              }
          };
        return t(this.getFields()), e;
      }),
      (r.prototype.addField = function (e) {
        var t = this.normalizedEntries().Fields;
        t == null || t.push(e);
      }),
      (r.prototype.removeField = function (e) {
        var t = e.getParent(),
          i = t === void 0 ? this.normalizedEntries().Fields : t.Kids(),
          a = i == null ? void 0 : i.indexOf(e.ref);
        if (i === void 0 || a === void 0)
          throw new Error(
            "Tried to remove inexistent field " + e.getFullyQualifiedName()
          );
        i.remove(a), t !== void 0 && i.size() === 0 && this.removeField(t);
      }),
      (r.prototype.normalizedEntries = function () {
        var e = this.Fields();
        return (
          e ||
            ((e = this.dict.context.obj([])), this.dict.set(P.of("Fields"), e)),
          { Fields: e }
        );
      }),
      (r.fromDict = function (e) {
        return new r(e);
      }),
      (r.create = function (e) {
        var t = e.obj({ Fields: [] });
        return new r(t);
      }),
      r
    );
  })(),
  Tp = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.Pages = function () {
        return this.lookup(P.of("Pages"), Qe);
      }),
      (e.prototype.AcroForm = function () {
        return this.lookupMaybe(P.of("AcroForm"), Qe);
      }),
      (e.prototype.getAcroForm = function () {
        var t = this.AcroForm();
        if (t) return sl.fromDict(t);
      }),
      (e.prototype.getOrCreateAcroForm = function () {
        var t = this.getAcroForm();
        if (!t) {
          t = sl.create(this.context);
          var i = this.context.register(t.dict);
          this.set(P.of("AcroForm"), i);
        }
        return t;
      }),
      (e.prototype.ViewerPreferences = function () {
        return this.lookupMaybe(P.of("ViewerPreferences"), Qe);
      }),
      (e.prototype.getViewerPreferences = function () {
        var t = this.ViewerPreferences();
        if (t) return I0.fromDict(t);
      }),
      (e.prototype.getOrCreateViewerPreferences = function () {
        var t = this.getViewerPreferences();
        if (!t) {
          t = I0.create(this.context);
          var i = this.context.register(t.dict);
          this.set(P.of("ViewerPreferences"), i);
        }
        return t;
      }),
      (e.prototype.insertLeafNode = function (t, i) {
        var a = this.get(P.of("Pages")),
          u = this.Pages().insertLeafNode(t, i);
        return u || a;
      }),
      (e.prototype.removeLeafNode = function (t) {
        this.Pages().removeLeafNode(t);
      }),
      (e.withContextAndPages = function (t, i) {
        var a = new Map();
        return (
          a.set(P.of("Type"), P.of("Catalog")),
          a.set(P.of("Pages"), i),
          new e(a, t)
        );
      }),
      (e.fromMapWithContext = function (t, i) {
        return new e(t, i);
      }),
      e
    );
  })(Qe),
  Rp = (function (r) {
    ve(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.Parent = function () {
        return this.lookup(P.of("Parent"));
      }),
      (e.prototype.Kids = function () {
        return this.lookup(P.of("Kids"), ct);
      }),
      (e.prototype.Count = function () {
        return this.lookup(P.of("Count"), qe);
      }),
      (e.prototype.pushTreeNode = function (t) {
        var i = this.Kids();
        i.push(t);
      }),
      (e.prototype.pushLeafNode = function (t) {
        var i = this.Kids();
        this.insertLeafKid(i.size(), t);
      }),
      (e.prototype.insertLeafNode = function (t, i) {
        var a = this.Kids(),
          u = this.Count().asNumber();
        if (i > u) throw new F0(i, u);
        for (var s = i, c = 0, d = a.size(); c < d; c++) {
          if (s === 0) {
            this.insertLeafKid(c, t);
            return;
          }
          var h = a.get(c),
            y = this.context.lookup(h);
          if (y instanceof e) {
            if (y.Count().asNumber() > s) return y.insertLeafNode(t, s) || h;
            s -= y.Count().asNumber();
          }
          y instanceof In && (s -= 1);
        }
        if (s === 0) {
          this.insertLeafKid(a.size(), t);
          return;
        }
        throw new C0(i, "insertLeafNode");
      }),
      (e.prototype.removeLeafNode = function (t, i) {
        i === void 0 && (i = !0);
        var a = this.Kids(),
          u = this.Count().asNumber();
        if (t >= u) throw new F0(t, u);
        for (var s = t, c = 0, d = a.size(); c < d; c++) {
          var h = a.get(c),
            y = this.context.lookup(h);
          if (y instanceof e)
            if (y.Count().asNumber() > s) {
              y.removeLeafNode(s, i), i && y.Kids().size() === 0 && a.remove(c);
              return;
            } else s -= y.Count().asNumber();
          if (y instanceof In)
            if (s === 0) {
              this.removeKid(c);
              return;
            } else s -= 1;
        }
        throw new C0(t, "removeLeafNode");
      }),
      (e.prototype.ascend = function (t) {
        t(this);
        var i = this.Parent();
        i && i.ascend(t);
      }),
      (e.prototype.traverse = function (t) {
        for (var i = this.Kids(), a = 0, u = i.size(); a < u; a++) {
          var s = i.get(a),
            c = this.context.lookup(s);
          c instanceof e && c.traverse(t), t(c, s);
        }
      }),
      (e.prototype.insertLeafKid = function (t, i) {
        var a = this.Kids();
        this.ascend(function (u) {
          var s = u.Count().asNumber() + 1;
          u.set(P.of("Count"), qe.of(s));
        }),
          a.insert(t, i);
      }),
      (e.prototype.removeKid = function (t) {
        var i = this.Kids(),
          a = i.lookup(t);
        a instanceof In &&
          this.ascend(function (u) {
            var s = u.Count().asNumber() - 1;
            u.set(P.of("Count"), qe.of(s));
          }),
          i.remove(t);
      }),
      (e.withContext = function (t, i) {
        var a = new Map();
        return (
          a.set(P.of("Type"), P.of("Pages")),
          a.set(P.of("Kids"), t.obj([])),
          a.set(P.of("Count"), t.obj(0)),
          i && a.set(P.of("Parent"), i),
          new e(a, t)
        );
      }),
      (e.fromMapWithContext = function (t, i) {
        return new e(t, i);
      }),
      e
    );
  })(Qe),
  cr = new Uint8Array(256);
cr[T.Zero] = 1;
cr[T.One] = 1;
cr[T.Two] = 1;
cr[T.Three] = 1;
cr[T.Four] = 1;
cr[T.Five] = 1;
cr[T.Six] = 1;
cr[T.Seven] = 1;
cr[T.Eight] = 1;
cr[T.Nine] = 1;
var El = new Uint8Array(256);
El[T.Period] = 1;
El[T.Plus] = 1;
El[T.Minus] = 1;
var uc = new Uint8Array(256);
for (var ua = 0, s1 = 256; ua < s1; ua++) uc[ua] = cr[ua] || El[ua] ? 1 : 0;
var M0 = T.Newline,
  U0 = T.CarriageReturn,
  f1 = (function () {
    function r(e, t) {
      t === void 0 && (t = !1), (this.bytes = e), (this.capNumbers = t);
    }
    return (
      (r.prototype.parseRawInt = function () {
        for (var e = ""; !this.bytes.done(); ) {
          var t = this.bytes.peek();
          if (!cr[t]) break;
          e += jn(this.bytes.next());
        }
        var i = Number(e);
        if (!e || !isFinite(i)) throw new P0(this.bytes.position(), e);
        return i;
      }),
      (r.prototype.parseRawNumber = function () {
        for (var e = ""; !this.bytes.done(); ) {
          var t = this.bytes.peek();
          if (!uc[t] || ((e += jn(this.bytes.next())), t === T.Period)) break;
        }
        for (; !this.bytes.done(); ) {
          var t = this.bytes.peek();
          if (!cr[t]) break;
          e += jn(this.bytes.next());
        }
        var i = Number(e);
        if (!e || !isFinite(i)) throw new P0(this.bytes.position(), e);
        if (i > Number.MAX_SAFE_INTEGER)
          if (this.capNumbers) {
            var a =
              "Parsed number that is too large for some PDF readers: " +
              e +
              ", using Number.MAX_SAFE_INTEGER instead.";
            return console.warn(a), Number.MAX_SAFE_INTEGER;
          } else {
            var a =
              "Parsed number that is too large for some PDF readers: " +
              e +
              ", not capping.";
            console.warn(a);
          }
        return i;
      }),
      (r.prototype.skipWhitespace = function () {
        for (; !this.bytes.done() && Mn[this.bytes.peek()]; ) this.bytes.next();
      }),
      (r.prototype.skipLine = function () {
        for (; !this.bytes.done(); ) {
          var e = this.bytes.peek();
          if (e === M0 || e === U0) return;
          this.bytes.next();
        }
      }),
      (r.prototype.skipComment = function () {
        if (this.bytes.peek() !== T.Percent) return !1;
        for (; !this.bytes.done(); ) {
          var e = this.bytes.peek();
          if (e === M0 || e === U0) return !0;
          this.bytes.next();
        }
        return !0;
      }),
      (r.prototype.skipWhitespaceAndComments = function () {
        for (this.skipWhitespace(); this.skipComment(); ) this.skipWhitespace();
      }),
      (r.prototype.matchKeyword = function (e) {
        for (var t = this.bytes.offset(), i = 0, a = e.length; i < a; i++)
          if (this.bytes.done() || this.bytes.next() !== e[i])
            return this.bytes.moveTo(t), !1;
        return !0;
      }),
      r
    );
  })(),
  Tl = (function () {
    function r(e) {
      (this.idx = 0),
        (this.line = 0),
        (this.column = 0),
        (this.bytes = e),
        (this.length = this.bytes.length);
    }
    return (
      (r.prototype.moveTo = function (e) {
        this.idx = e;
      }),
      (r.prototype.next = function () {
        var e = this.bytes[this.idx++];
        return (
          e === T.Newline
            ? ((this.line += 1), (this.column = 0))
            : (this.column += 1),
          e
        );
      }),
      (r.prototype.assertNext = function (e) {
        if (this.peek() !== e) throw new ym(this.position(), e, this.peek());
        return this.next();
      }),
      (r.prototype.peek = function () {
        return this.bytes[this.idx];
      }),
      (r.prototype.peekAhead = function (e) {
        return this.bytes[this.idx + e];
      }),
      (r.prototype.peekAt = function (e) {
        return this.bytes[e];
      }),
      (r.prototype.done = function () {
        return this.idx >= this.length;
      }),
      (r.prototype.offset = function () {
        return this.idx;
      }),
      (r.prototype.slice = function (e, t) {
        return this.bytes.slice(e, t);
      }),
      (r.prototype.position = function () {
        return { line: this.line, column: this.column, offset: this.idx };
      }),
      (r.of = function (e) {
        return new r(e);
      }),
      (r.fromPDFRawStream = function (e) {
        return r.of(bp(e).decode());
      }),
      r
    );
  })(),
  c1 = T.Space,
  la = T.CarriageReturn,
  sa = T.Newline,
  fa = [T.s, T.t, T.r, T.e, T.a, T.m],
  Gu = [T.e, T.n, T.d, T.s, T.t, T.r, T.e, T.a, T.m],
  wt = {
    header: [T.Percent, T.P, T.D, T.F, T.Dash],
    eof: [T.Percent, T.Percent, T.E, T.O, T.F],
    obj: [T.o, T.b, T.j],
    endobj: [T.e, T.n, T.d, T.o, T.b, T.j],
    xref: [T.x, T.r, T.e, T.f],
    trailer: [T.t, T.r, T.a, T.i, T.l, T.e, T.r],
    startxref: [T.s, T.t, T.a, T.r, T.t, T.x, T.r, T.e, T.f],
    true: [T.t, T.r, T.u, T.e],
    false: [T.f, T.a, T.l, T.s, T.e],
    null: [T.n, T.u, T.l, T.l],
    stream: fa,
    streamEOF1: lt(fa, [c1, la, sa]),
    streamEOF2: lt(fa, [la, sa]),
    streamEOF3: lt(fa, [la]),
    streamEOF4: lt(fa, [sa]),
    endstream: Gu,
    EOF1endstream: lt([la, sa], Gu),
    EOF2endstream: lt([la], Gu),
    EOF3endstream: lt([sa], Gu),
  },
  Dp = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      a === void 0 && (a = !1);
      var u = r.call(this, t, a) || this;
      return (u.context = i), u;
    }
    return (
      (e.prototype.parseObject = function () {
        if ((this.skipWhitespaceAndComments(), this.matchKeyword(wt.true)))
          return ka.True;
        if (this.matchKeyword(wt.false)) return ka.False;
        if (this.matchKeyword(wt.null)) return Er;
        var t = this.bytes.peek();
        if (t === T.LessThan && this.bytes.peekAhead(1) === T.LessThan)
          return this.parseDictOrStream();
        if (t === T.LessThan) return this.parseHexString();
        if (t === T.LeftParen) return this.parseString();
        if (t === T.ForwardSlash) return this.parseName();
        if (t === T.LeftSquareBracket) return this.parseArray();
        if (uc[t]) return this.parseNumberOrRef();
        throw new mm(this.bytes.position(), t);
      }),
      (e.prototype.parseNumberOrRef = function () {
        var t = this.parseRawNumber();
        this.skipWhitespaceAndComments();
        var i = this.bytes.offset();
        if (cr[this.bytes.peek()]) {
          var a = this.parseRawNumber();
          if ((this.skipWhitespaceAndComments(), this.bytes.peek() === T.R))
            return this.bytes.assertNext(T.R), gt.of(t, a);
        }
        return this.bytes.moveTo(i), qe.of(t);
      }),
      (e.prototype.parseHexString = function () {
        var t = "";
        for (
          this.bytes.assertNext(T.LessThan);
          !this.bytes.done() && this.bytes.peek() !== T.GreaterThan;

        )
          t += jn(this.bytes.next());
        return this.bytes.assertNext(T.GreaterThan), Ve.of(t);
      }),
      (e.prototype.parseString = function () {
        for (var t = 0, i = !1, a = ""; !this.bytes.done(); ) {
          var u = this.bytes.next();
          if (
            ((a += jn(u)),
            i ||
              (u === T.LeftParen && (t += 1), u === T.RightParen && (t -= 1)),
            u === T.BackSlash ? (i = !i) : i && (i = !1),
            t === 0)
          )
            return vt.of(a.substring(1, a.length - 1));
        }
        throw new Sm(this.bytes.position());
      }),
      (e.prototype.parseName = function () {
        this.bytes.assertNext(T.ForwardSlash);
        for (var t = ""; !this.bytes.done(); ) {
          var i = this.bytes.peek();
          if (Mn[i] || tn[i]) break;
          (t += jn(i)), this.bytes.next();
        }
        return P.of(t);
      }),
      (e.prototype.parseArray = function () {
        this.bytes.assertNext(T.LeftSquareBracket),
          this.skipWhitespaceAndComments();
        for (
          var t = ct.withContext(this.context);
          this.bytes.peek() !== T.RightSquareBracket;

        ) {
          var i = this.parseObject();
          t.push(i), this.skipWhitespaceAndComments();
        }
        return this.bytes.assertNext(T.RightSquareBracket), t;
      }),
      (e.prototype.parseDict = function () {
        this.bytes.assertNext(T.LessThan),
          this.bytes.assertNext(T.LessThan),
          this.skipWhitespaceAndComments();
        for (
          var t = new Map();
          !this.bytes.done() &&
          this.bytes.peek() !== T.GreaterThan &&
          this.bytes.peekAhead(1) !== T.GreaterThan;

        ) {
          var i = this.parseName(),
            a = this.parseObject();
          t.set(i, a), this.skipWhitespaceAndComments();
        }
        this.skipWhitespaceAndComments(),
          this.bytes.assertNext(T.GreaterThan),
          this.bytes.assertNext(T.GreaterThan);
        var u = t.get(P.of("Type"));
        return u === P.of("Catalog")
          ? Tp.fromMapWithContext(t, this.context)
          : u === P.of("Pages")
          ? Rp.fromMapWithContext(t, this.context)
          : u === P.of("Page")
          ? In.fromMapWithContext(t, this.context)
          : Qe.fromMapWithContext(t, this.context);
      }),
      (e.prototype.parseDictOrStream = function () {
        var t = this.bytes.position(),
          i = this.parseDict();
        if (
          (this.skipWhitespaceAndComments(),
          !this.matchKeyword(wt.streamEOF1) &&
            !this.matchKeyword(wt.streamEOF2) &&
            !this.matchKeyword(wt.streamEOF3) &&
            !this.matchKeyword(wt.streamEOF4) &&
            !this.matchKeyword(wt.stream))
        )
          return i;
        var a = this.bytes.offset(),
          u,
          s = i.get(P.of("Length"));
        s instanceof qe
          ? ((u = a + s.asNumber()),
            this.bytes.moveTo(u),
            this.skipWhitespaceAndComments(),
            this.matchKeyword(wt.endstream) ||
              (this.bytes.moveTo(a), (u = this.findEndOfStreamFallback(t))))
          : (u = this.findEndOfStreamFallback(t));
        var c = this.bytes.slice(a, u);
        return Fa.of(i, c);
      }),
      (e.prototype.findEndOfStreamFallback = function (t) {
        for (
          var i = 1, a = this.bytes.offset();
          !this.bytes.done() &&
          ((a = this.bytes.offset()),
          this.matchKeyword(wt.stream)
            ? (i += 1)
            : this.matchKeyword(wt.EOF1endstream) ||
              this.matchKeyword(wt.EOF2endstream) ||
              this.matchKeyword(wt.EOF3endstream) ||
              this.matchKeyword(wt.endstream)
            ? (i -= 1)
            : this.bytes.next(),
          i !== 0);

        );
        if (i !== 0) throw new wm(t);
        return a;
      }),
      (e.forBytes = function (t, i, a) {
        return new e(Tl.of(t), i, a);
      }),
      (e.forByteStream = function (t, i, a) {
        return a === void 0 && (a = !1), new e(t, i, a);
      }),
      e
    );
  })(f1),
  d1 = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = r.call(this, Tl.fromPDFRawStream(t), t.dict.context) || this,
        u = t.dict;
      return (
        (a.alreadyParsed = !1),
        (a.shouldWaitForTick =
          i ||
          function () {
            return !1;
          }),
        (a.firstOffset = u.lookup(P.of("First"), qe).asNumber()),
        (a.objectCount = u.lookup(P.of("N"), qe).asNumber()),
        a
      );
    }
    return (
      (e.prototype.parseIntoContext = function () {
        return _e(this, void 0, void 0, function () {
          var t, i, a, u, s, c, d, h;
          return $e(this, function (y) {
            switch (y.label) {
              case 0:
                if (this.alreadyParsed)
                  throw new Jf("PDFObjectStreamParser", "parseIntoContext");
                (this.alreadyParsed = !0),
                  (t = this.parseOffsetsAndObjectNumbers()),
                  (i = 0),
                  (a = t.length),
                  (y.label = 1);
              case 1:
                return i < a
                  ? ((u = t[i]),
                    (s = u.objectNumber),
                    (c = u.offset),
                    this.bytes.moveTo(this.firstOffset + c),
                    (d = this.parseObject()),
                    (h = gt.of(s, 0)),
                    this.context.assign(h, d),
                    this.shouldWaitForTick() ? [4, yo()] : [3, 3])
                  : [3, 4];
              case 2:
                y.sent(), (y.label = 3);
              case 3:
                return i++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }),
      (e.prototype.parseOffsetsAndObjectNumbers = function () {
        for (var t = [], i = 0, a = this.objectCount; i < a; i++) {
          this.skipWhitespaceAndComments();
          var u = this.parseRawInt();
          this.skipWhitespaceAndComments();
          var s = this.parseRawInt();
          t.push({ objectNumber: u, offset: s });
        }
        return t;
      }),
      (e.forStream = function (t, i) {
        return new e(t, i);
      }),
      e
    );
  })(Dp),
  h1 = (function () {
    function r(e) {
      (this.alreadyParsed = !1),
        (this.dict = e.dict),
        (this.bytes = Tl.fromPDFRawStream(e)),
        (this.context = this.dict.context);
      var t = this.dict.lookup(P.of("Size"), qe),
        i = this.dict.lookup(P.of("Index"));
      if (i instanceof ct) {
        this.subsections = [];
        for (var a = 0, u = i.size(); a < u; a += 2) {
          var s = i.lookup(a + 0, qe).asNumber(),
            c = i.lookup(a + 1, qe).asNumber();
          this.subsections.push({ firstObjectNumber: s, length: c });
        }
      } else
        this.subsections = [{ firstObjectNumber: 0, length: t.asNumber() }];
      var d = this.dict.lookup(P.of("W"), ct);
      this.byteWidths = [-1, -1, -1];
      for (var a = 0, u = d.size(); a < u; a++)
        this.byteWidths[a] = d.lookup(a, qe).asNumber();
    }
    return (
      (r.prototype.parseIntoContext = function () {
        if (this.alreadyParsed)
          throw new Jf("PDFXRefStreamParser", "parseIntoContext");
        (this.alreadyParsed = !0),
          (this.context.trailerInfo = {
            Root: this.dict.get(P.of("Root")),
            Encrypt: this.dict.get(P.of("Encrypt")),
            Info: this.dict.get(P.of("Info")),
            ID: this.dict.get(P.of("ID")),
          });
        var e = this.parseEntries();
        return e;
      }),
      (r.prototype.parseEntries = function () {
        for (
          var e = [],
            t = this.byteWidths,
            i = t[0],
            a = t[1],
            u = t[2],
            s = 0,
            c = this.subsections.length;
          s < c;
          s++
        )
          for (
            var d = this.subsections[s],
              h = d.firstObjectNumber,
              y = d.length,
              m = 0;
            m < y;
            m++
          ) {
            for (var x = 0, w = 0, F = i; w < F; w++)
              x = (x << 8) | this.bytes.next();
            for (var E = 0, w = 0, F = a; w < F; w++)
              E = (E << 8) | this.bytes.next();
            for (var R = 0, w = 0, F = u; w < F; w++)
              R = (R << 8) | this.bytes.next();
            i === 0 && (x = 1);
            var D = h + m,
              L = {
                ref: gt.of(D, R),
                offset: E,
                deleted: x === 0,
                inObjectStream: x === 2,
              };
            e.push(L);
          }
        return e;
      }),
      (r.forStream = function (e) {
        return new r(e);
      }),
      r
    );
  })(),
  p1 = (function (r) {
    ve(e, r);
    function e(t, i, a, u) {
      i === void 0 && (i = 1 / 0),
        a === void 0 && (a = !1),
        u === void 0 && (u = !1);
      var s = r.call(this, Tl.of(t), Mf.create(), u) || this;
      return (
        (s.alreadyParsed = !1),
        (s.parsedObjects = 0),
        (s.shouldWaitForTick = function () {
          return (
            (s.parsedObjects += 1), s.parsedObjects % s.objectsPerTick === 0
          );
        }),
        (s.objectsPerTick = i),
        (s.throwOnInvalidObject = a),
        s
      );
    }
    return (
      (e.prototype.parseDocument = function () {
        return _e(this, void 0, void 0, function () {
          var t, i;
          return $e(this, function (a) {
            switch (a.label) {
              case 0:
                if (this.alreadyParsed)
                  throw new Jf("PDFParser", "parseDocument");
                (this.alreadyParsed = !0),
                  (this.context.header = this.parseHeader()),
                  (a.label = 1);
              case 1:
                return this.bytes.done()
                  ? [3, 3]
                  : [4, this.parseDocumentSection()];
              case 2:
                if ((a.sent(), (i = this.bytes.offset()), i === t))
                  throw new bm(this.bytes.position());
                return (t = i), [3, 1];
              case 3:
                return (
                  this.maybeRecoverRoot(),
                  this.context.lookup(gt.of(0)) &&
                    (console.warn("Removing parsed object: 0 0 R"),
                    this.context.delete(gt.of(0))),
                  [2, this.context]
                );
            }
          });
        });
      }),
      (e.prototype.maybeRecoverRoot = function () {
        var t = function (y) {
            return (
              y instanceof Qe && y.lookup(P.of("Type")) === P.of("Catalog")
            );
          },
          i = this.context.lookup(this.context.trailerInfo.Root);
        if (!t(i))
          for (
            var a = this.context.enumerateIndirectObjects(),
              u = 0,
              s = a.length;
            u < s;
            u++
          ) {
            var c = a[u],
              d = c[0],
              h = c[1];
            t(h) && (this.context.trailerInfo.Root = d);
          }
      }),
      (e.prototype.parseHeader = function () {
        for (; !this.bytes.done(); ) {
          if (this.matchKeyword(wt.header)) {
            var t = this.parseRawInt();
            this.bytes.assertNext(T.Period);
            var i = this.parseRawInt(),
              a = wl.forVersion(t, i);
            return this.skipBinaryHeaderComment(), a;
          }
          this.bytes.next();
        }
        throw new km(this.bytes.position());
      }),
      (e.prototype.parseIndirectObjectHeader = function () {
        this.skipWhitespaceAndComments();
        var t = this.parseRawInt();
        this.skipWhitespaceAndComments();
        var i = this.parseRawInt();
        if ((this.skipWhitespaceAndComments(), !this.matchKeyword(wt.obj)))
          throw new Fm(this.bytes.position(), wt.obj);
        return gt.of(t, i);
      }),
      (e.prototype.matchIndirectObjectHeader = function () {
        var t = this.bytes.offset();
        try {
          return this.parseIndirectObjectHeader(), !0;
        } catch {
          return this.bytes.moveTo(t), !1;
        }
      }),
      (e.prototype.parseIndirectObject = function () {
        return _e(this, void 0, void 0, function () {
          var t, i;
          return $e(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (t = this.parseIndirectObjectHeader()),
                  this.skipWhitespaceAndComments(),
                  (i = this.parseObject()),
                  this.skipWhitespaceAndComments(),
                  this.matchKeyword(wt.endobj),
                  i instanceof Fa &&
                  i.dict.lookup(P.of("Type")) === P.of("ObjStm")
                    ? [
                        4,
                        d1
                          .forStream(i, this.shouldWaitForTick)
                          .parseIntoContext(),
                      ]
                    : [3, 2]
                );
              case 1:
                return a.sent(), [3, 3];
              case 2:
                i instanceof Fa && i.dict.lookup(P.of("Type")) === P.of("XRef")
                  ? h1.forStream(i).parseIntoContext()
                  : this.context.assign(t, i),
                  (a.label = 3);
              case 3:
                return [2, t];
            }
          });
        });
      }),
      (e.prototype.tryToParseInvalidIndirectObject = function () {
        var t = this.bytes.position(),
          i = "Trying to parse invalid object: " + JSON.stringify(t) + ")";
        if (this.throwOnInvalidObject) throw new Error(i);
        console.warn(i);
        var a = this.parseIndirectObjectHeader();
        console.warn("Invalid object ref: " + a),
          this.skipWhitespaceAndComments();
        for (
          var u = this.bytes.offset(), s = !0;
          !this.bytes.done() && (this.matchKeyword(wt.endobj) && (s = !1), !!s);

        )
          this.bytes.next();
        if (s) throw new xm(t);
        var c = this.bytes.offset() - wt.endobj.length,
          d = mp.of(this.bytes.slice(u, c));
        return this.context.assign(a, d), a;
      }),
      (e.prototype.parseIndirectObjects = function () {
        return _e(this, void 0, void 0, function () {
          var t;
          return $e(this, function (i) {
            switch (i.label) {
              case 0:
                this.skipWhitespaceAndComments(), (i.label = 1);
              case 1:
                if (!(!this.bytes.done() && cr[this.bytes.peek()]))
                  return [3, 8];
                (t = this.bytes.offset()), (i.label = 2);
              case 2:
                return (
                  i.trys.push([2, 4, , 5]), [4, this.parseIndirectObject()]
                );
              case 3:
                return i.sent(), [3, 5];
              case 4:
                return (
                  i.sent(),
                  this.bytes.moveTo(t),
                  this.tryToParseInvalidIndirectObject(),
                  [3, 5]
                );
              case 5:
                return (
                  this.skipWhitespaceAndComments(),
                  this.skipJibberish(),
                  this.shouldWaitForTick() ? [4, yo()] : [3, 7]
                );
              case 6:
                i.sent(), (i.label = 7);
              case 7:
                return [3, 1];
              case 8:
                return [2];
            }
          });
        });
      }),
      (e.prototype.maybeParseCrossRefSection = function () {
        if ((this.skipWhitespaceAndComments(), !!this.matchKeyword(wt.xref))) {
          this.skipWhitespaceAndComments();
          for (
            var t = -1, i = vp.createEmpty();
            !this.bytes.done() && cr[this.bytes.peek()];

          ) {
            var a = this.parseRawInt();
            this.skipWhitespaceAndComments();
            var u = this.parseRawInt();
            this.skipWhitespaceAndComments();
            var s = this.bytes.peek();
            if (s === T.n || s === T.f) {
              var c = gt.of(t, u);
              this.bytes.next() === T.n
                ? i.addEntry(c, a)
                : i.addDeletedEntry(c, a),
                (t += 1);
            } else t = a;
            this.skipWhitespaceAndComments();
          }
          return i;
        }
      }),
      (e.prototype.maybeParseTrailerDict = function () {
        if (
          (this.skipWhitespaceAndComments(), !!this.matchKeyword(wt.trailer))
        ) {
          this.skipWhitespaceAndComments();
          var t = this.parseDict(),
            i = this.context;
          i.trailerInfo = {
            Root: t.get(P.of("Root")) || i.trailerInfo.Root,
            Encrypt: t.get(P.of("Encrypt")) || i.trailerInfo.Encrypt,
            Info: t.get(P.of("Info")) || i.trailerInfo.Info,
            ID: t.get(P.of("ID")) || i.trailerInfo.ID,
          };
        }
      }),
      (e.prototype.maybeParseTrailer = function () {
        if (
          (this.skipWhitespaceAndComments(), !!this.matchKeyword(wt.startxref))
        ) {
          this.skipWhitespaceAndComments();
          var t = this.parseRawInt();
          return (
            this.skipWhitespace(),
            this.matchKeyword(wt.eof),
            this.skipWhitespaceAndComments(),
            this.matchKeyword(wt.eof),
            this.skipWhitespaceAndComments(),
            tc.forLastCrossRefSectionOffset(t)
          );
        }
      }),
      (e.prototype.parseDocumentSection = function () {
        return _e(this, void 0, void 0, function () {
          return $e(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.parseIndirectObjects()];
              case 1:
                return (
                  t.sent(),
                  this.maybeParseCrossRefSection(),
                  this.maybeParseTrailerDict(),
                  this.maybeParseTrailer(),
                  this.skipJibberish(),
                  [2]
                );
            }
          });
        });
      }),
      (e.prototype.skipJibberish = function () {
        for (this.skipWhitespaceAndComments(); !this.bytes.done(); ) {
          var t = this.bytes.offset(),
            i = this.bytes.peek(),
            a = i >= T.Space && i <= T.Tilde;
          if (
            a &&
            (this.matchKeyword(wt.xref) ||
              this.matchKeyword(wt.trailer) ||
              this.matchKeyword(wt.startxref) ||
              this.matchIndirectObjectHeader())
          ) {
            this.bytes.moveTo(t);
            break;
          }
          this.bytes.next();
        }
      }),
      (e.prototype.skipBinaryHeaderComment = function () {
        this.skipWhitespaceAndComments();
        try {
          var t = this.bytes.offset();
          this.parseIndirectObjectHeader(), this.bytes.moveTo(t);
        } catch {
          this.bytes.next(), this.skipWhitespaceAndComments();
        }
      }),
      (e.forBytesWithOptions = function (t, i, a, u) {
        return new e(t, i, a, u);
      }),
      e
    );
  })(Dp),
  Sn = function (r) {
    return 1 << r;
  },
  Sa;
(function (r) {
  (r[(r.Invisible = Sn(0))] = "Invisible"),
    (r[(r.Hidden = Sn(1))] = "Hidden"),
    (r[(r.Print = Sn(2))] = "Print"),
    (r[(r.NoZoom = Sn(3))] = "NoZoom"),
    (r[(r.NoRotate = Sn(4))] = "NoRotate"),
    (r[(r.NoView = Sn(5))] = "NoView"),
    (r[(r.ReadOnly = Sn(6))] = "ReadOnly"),
    (r[(r.Locked = Sn(7))] = "Locked"),
    (r[(r.ToggleNoView = Sn(8))] = "ToggleNoView"),
    (r[(r.LockedContents = Sn(9))] = "LockedContents");
})(Sa || (Sa = {}));
var Rl = function (r) {
    return r instanceof P ? r : P.of(r);
  },
  Ke = function (r) {
    return r instanceof qe ? r : qe.of(r);
  },
  et = function (r) {
    return r instanceof qe ? r.asNumber() : r;
  },
  Ca;
(function (r) {
  (r.Degrees = "degrees"), (r.Radians = "radians");
})(Ca || (Ca = {}));
var We = function (r) {
    return V(r, "degreeAngle", ["number"]), { type: Ca.Degrees, angle: r };
  },
  Op = Ca.Radians,
  Ap = Ca.Degrees,
  zp = function (r) {
    return (r * Math.PI) / 180;
  },
  v1 = function (r) {
    return (r * 180) / Math.PI;
  },
  nr = function (r) {
    return r.type === Op
      ? r.angle
      : r.type === Ap
      ? zp(r.angle)
      : Ra("Invalid rotation: " + JSON.stringify(r));
  },
  Np = function (r) {
    return r.type === Op
      ? v1(r.angle)
      : r.type === Ap
      ? r.angle
      : Ra("Invalid rotation: " + JSON.stringify(r));
  },
  Un = function (r) {
    r === void 0 && (r = 0);
    var e = (r / 90) % 4;
    return e === 0 ? 0 : e === 1 ? 90 : e === 2 ? 180 : e === 3 ? 270 : 0;
  },
  Ni = function (r, e) {
    e === void 0 && (e = 0);
    var t = Un(e);
    return t === 90 || t === 270
      ? { width: r.height, height: r.width }
      : { width: r.width, height: r.height };
  },
  g1 = function (r, e, t) {
    e === void 0 && (e = 0), t === void 0 && (t = 0);
    var i = r.x,
      a = r.y,
      u = r.width,
      s = r.height,
      c = Un(t),
      d = e / 2;
    return c === 0
      ? { x: i - d, y: a - d, width: u, height: s }
      : c === 90
      ? { x: i - s + d, y: a - d, width: s, height: u }
      : c === 180
      ? { x: i - u + d, y: a - s + d, width: u, height: s }
      : c === 270
      ? { x: i - d, y: a - u + d, width: s, height: u }
      : { x: i - d, y: a - d, width: u, height: s };
  },
  jp = function () {
    return ut.of(st.ClipNonZero);
  },
  fl = Math.cos,
  cl = Math.sin,
  dl = Math.tan,
  Dl = function (r, e, t, i, a, u) {
    return ut.of(st.ConcatTransformationMatrix, [
      Ke(r),
      Ke(e),
      Ke(t),
      Ke(i),
      Ke(a),
      Ke(u),
    ]);
  },
  _r = function (r, e) {
    return Dl(1, 0, 0, 1, r, e);
  },
  Pa = function (r, e) {
    return Dl(r, 0, 0, e, 0, 0);
  },
  wo = function (r) {
    return Dl(fl(et(r)), cl(et(r)), -cl(et(r)), fl(et(r)), 0, 0);
  },
  Xu = function (r) {
    return wo(zp(et(r)));
  },
  lc = function (r, e) {
    return Dl(1, dl(et(r)), dl(et(e)), 1, 0, 0);
  },
  Ol = function (r, e) {
    return ut.of(st.SetLineDashPattern, [
      "[" + r.map(Ke).join(" ") + "]",
      Ke(e),
    ]);
  },
  po;
(function (r) {
  (r[(r.Butt = 0)] = "Butt"),
    (r[(r.Round = 1)] = "Round"),
    (r[(r.Projecting = 2)] = "Projecting");
})(po || (po = {}));
var Al = function (r) {
    return ut.of(st.SetLineCapStyle, [Ke(r)]);
  },
  L0;
(function (r) {
  (r[(r.Miter = 0)] = "Miter"),
    (r[(r.Round = 1)] = "Round"),
    (r[(r.Bevel = 2)] = "Bevel");
})(L0 || (L0 = {}));
var ji = function (r) {
    return ut.of(st.SetGraphicsStateParams, [Rl(r)]);
  },
  Gt = function () {
    return ut.of(st.PushGraphicsState);
  },
  Xt = function () {
    return ut.of(st.PopGraphicsState);
  },
  Oa = function (r) {
    return ut.of(st.SetLineWidth, [Ke(r)]);
  },
  jr = function (r, e, t, i, a, u) {
    return ut.of(st.AppendBezierCurve, [
      Ke(r),
      Ke(e),
      Ke(t),
      Ke(i),
      Ke(a),
      Ke(u),
    ]);
  },
  Zu = function (r, e, t, i) {
    return ut.of(st.CurveToReplicateInitialPoint, [Ke(r), Ke(e), Ke(t), Ke(i)]);
  },
  ci = function () {
    return ut.of(st.ClosePath);
  },
  bn = function (r, e) {
    return ut.of(st.MoveTo, [Ke(r), Ke(e)]);
  },
  Jt = function (r, e) {
    return ut.of(st.LineTo, [Ke(r), Ke(e)]);
  },
  Aa = function () {
    return ut.of(st.StrokePath);
  },
  sc = function () {
    return ut.of(st.FillNonZero);
  },
  fc = function () {
    return ut.of(st.FillNonZeroAndStroke);
  },
  Bp = function () {
    return ut.of(st.EndPath);
  },
  y1 = function () {
    return ut.of(st.NextLine);
  },
  Ip = function (r) {
    return ut.of(st.ShowText, [r]);
  },
  Mp = function () {
    return ut.of(st.BeginText);
  },
  Up = function () {
    return ut.of(st.EndText);
  },
  cc = function (r, e) {
    return ut.of(st.SetFontAndSize, [Rl(r), Ke(e)]);
  },
  m1 = function (r) {
    return ut.of(st.SetTextLineHeight, [Ke(r)]);
  },
  V0;
(function (r) {
  (r[(r.Fill = 0)] = "Fill"),
    (r[(r.Outline = 1)] = "Outline"),
    (r[(r.FillAndOutline = 2)] = "FillAndOutline"),
    (r[(r.Invisible = 3)] = "Invisible"),
    (r[(r.FillAndClip = 4)] = "FillAndClip"),
    (r[(r.OutlineAndClip = 5)] = "OutlineAndClip"),
    (r[(r.FillAndOutlineAndClip = 6)] = "FillAndOutlineAndClip"),
    (r[(r.Clip = 7)] = "Clip");
})(V0 || (V0 = {}));
var x1 = function (r, e, t, i, a, u) {
    return ut.of(st.SetTextMatrix, [Ke(r), Ke(e), Ke(t), Ke(i), Ke(a), Ke(u)]);
  },
  Lp = function (r, e, t, i, a) {
    return x1(
      fl(et(r)),
      cl(et(r)) + dl(et(e)),
      -cl(et(r)) + dl(et(t)),
      fl(et(r)),
      i,
      a
    );
  },
  dc = function (r) {
    return ut.of(st.DrawObject, [Rl(r)]);
  },
  w1 = function (r) {
    return ut.of(st.NonStrokingColorGray, [Ke(r)]);
  },
  S1 = function (r) {
    return ut.of(st.StrokingColorGray, [Ke(r)]);
  },
  b1 = function (r, e, t) {
    return ut.of(st.NonStrokingColorRgb, [Ke(r), Ke(e), Ke(t)]);
  },
  k1 = function (r, e, t) {
    return ut.of(st.StrokingColorRgb, [Ke(r), Ke(e), Ke(t)]);
  },
  F1 = function (r, e, t, i) {
    return ut.of(st.NonStrokingColorCmyk, [Ke(r), Ke(e), Ke(t), Ke(i)]);
  },
  C1 = function (r, e, t, i) {
    return ut.of(st.StrokingColorCmyk, [Ke(r), Ke(e), Ke(t), Ke(i)]);
  },
  Vp = function (r) {
    return ut.of(st.BeginMarkedContent, [Rl(r)]);
  },
  Wp = function () {
    return ut.of(st.EndMarkedContent);
  },
  di;
(function (r) {
  (r.Grayscale = "Grayscale"), (r.RGB = "RGB"), (r.CMYK = "CMYK");
})(di || (di = {}));
var qp = function (r) {
    return Nr(r, "gray", 0, 1), { type: di.Grayscale, gray: r };
  },
  yt = function (r, e, t) {
    return (
      Nr(r, "red", 0, 1),
      Nr(e, "green", 0, 1),
      Nr(t, "blue", 0, 1),
      { type: di.RGB, red: r, green: e, blue: t }
    );
  },
  Kp = function (r, e, t, i) {
    return (
      Nr(r, "cyan", 0, 1),
      Nr(e, "magenta", 0, 1),
      Nr(t, "yellow", 0, 1),
      Nr(i, "key", 0, 1),
      { type: di.CMYK, cyan: r, magenta: e, yellow: t, key: i }
    );
  },
  hc = di.Grayscale,
  pc = di.RGB,
  vc = di.CMYK,
  Bi = function (r) {
    return r.type === hc
      ? w1(r.gray)
      : r.type === pc
      ? b1(r.red, r.green, r.blue)
      : r.type === vc
      ? F1(r.cyan, r.magenta, r.yellow, r.key)
      : Ra("Invalid color: " + JSON.stringify(r));
  },
  za = function (r) {
    return r.type === hc
      ? S1(r.gray)
      : r.type === pc
      ? k1(r.red, r.green, r.blue)
      : r.type === vc
      ? C1(r.cyan, r.magenta, r.yellow, r.key)
      : Ra("Invalid color: " + JSON.stringify(r));
  },
  mr = function (r, e) {
    return (
      e === void 0 && (e = 1),
      (r == null ? void 0 : r.length) === 1
        ? qp(r[0] * e)
        : (r == null ? void 0 : r.length) === 3
        ? yt(r[0] * e, r[1] * e, r[2] * e)
        : (r == null ? void 0 : r.length) === 4
        ? Kp(r[0] * e, r[1] * e, r[2] * e, r[3] * e)
        : void 0
    );
  },
  W0 = function (r) {
    return r.type === hc
      ? [r.gray]
      : r.type === pc
      ? [r.red, r.green, r.blue]
      : r.type === vc
      ? [r.cyan, r.magenta, r.yellow, r.key]
      : Ra("Invalid color: " + JSON.stringify(r));
  },
  Ne = 0,
  je = 0,
  ot = 0,
  at = 0,
  ha = 0,
  pa = 0,
  q0 = new Map([
    ["A", 7],
    ["a", 7],
    ["C", 6],
    ["c", 6],
    ["H", 1],
    ["h", 1],
    ["L", 2],
    ["l", 2],
    ["M", 2],
    ["m", 2],
    ["Q", 4],
    ["q", 4],
    ["S", 4],
    ["s", 4],
    ["T", 2],
    ["t", 2],
    ["V", 1],
    ["v", 1],
    ["Z", 0],
    ["z", 0],
  ]),
  P1 = function (r) {
    for (
      var e, t = [], i = [], a = "", u = !1, s = 0, c = 0, d = r;
      c < d.length;
      c++
    ) {
      var h = d[c];
      if (q0.has(h))
        (s = q0.get(h)),
          e &&
            (a.length > 0 && (i[i.length] = +a),
            (t[t.length] = { cmd: e, args: i }),
            (i = []),
            (a = ""),
            (u = !1)),
          (e = h);
      else if (
        [" ", ","].includes(h) ||
        (h === "-" && a.length > 0 && a[a.length - 1] !== "e") ||
        (h === "." && u)
      ) {
        if (a.length === 0) continue;
        i.length === s
          ? ((t[t.length] = { cmd: e, args: i }),
            (i = [+a]),
            e === "M" && (e = "L"),
            e === "m" && (e = "l"))
          : (i[i.length] = +a),
          (u = h === "."),
          (a = ["-", "."].includes(h) ? h : "");
      } else (a += h), h === "." && (u = !0);
    }
    return (
      a.length > 0 &&
        (i.length === s
          ? ((t[t.length] = { cmd: e, args: i }),
            (i = [+a]),
            e === "M" && (e = "L"),
            e === "m" && (e = "l"))
          : (i[i.length] = +a)),
      (t[t.length] = { cmd: e, args: i }),
      t
    );
  },
  E1 = function (r) {
    Ne = je = ot = at = ha = pa = 0;
    for (var e = [], t = 0; t < r.length; t++) {
      var i = r[t];
      if (i.cmd && typeof K0[i.cmd] == "function") {
        var a = K0[i.cmd](i.args);
        Array.isArray(a) ? (e = e.concat(a)) : e.push(a);
      }
    }
    return e;
  },
  K0 = {
    M: function (r) {
      return (
        (Ne = r[0]),
        (je = r[1]),
        (ot = at = null),
        (ha = Ne),
        (pa = je),
        bn(Ne, je)
      );
    },
    m: function (r) {
      return (
        (Ne += r[0]),
        (je += r[1]),
        (ot = at = null),
        (ha = Ne),
        (pa = je),
        bn(Ne, je)
      );
    },
    C: function (r) {
      return (
        (Ne = r[4]),
        (je = r[5]),
        (ot = r[2]),
        (at = r[3]),
        jr(r[0], r[1], r[2], r[3], r[4], r[5])
      );
    },
    c: function (r) {
      var e = jr(
        r[0] + Ne,
        r[1] + je,
        r[2] + Ne,
        r[3] + je,
        r[4] + Ne,
        r[5] + je
      );
      return (ot = Ne + r[2]), (at = je + r[3]), (Ne += r[4]), (je += r[5]), e;
    },
    S: function (r) {
      (ot === null || at === null) && ((ot = Ne), (at = je));
      var e = jr(Ne - (ot - Ne), je - (at - je), r[0], r[1], r[2], r[3]);
      return (ot = r[0]), (at = r[1]), (Ne = r[2]), (je = r[3]), e;
    },
    s: function (r) {
      (ot === null || at === null) && ((ot = Ne), (at = je));
      var e = jr(
        Ne - (ot - Ne),
        je - (at - je),
        Ne + r[0],
        je + r[1],
        Ne + r[2],
        je + r[3]
      );
      return (ot = Ne + r[0]), (at = je + r[1]), (Ne += r[2]), (je += r[3]), e;
    },
    Q: function (r) {
      return (
        (ot = r[0]),
        (at = r[1]),
        (Ne = r[2]),
        (je = r[3]),
        Zu(r[0], r[1], Ne, je)
      );
    },
    q: function (r) {
      var e = Zu(r[0] + Ne, r[1] + je, r[2] + Ne, r[3] + je);
      return (ot = Ne + r[0]), (at = je + r[1]), (Ne += r[2]), (je += r[3]), e;
    },
    T: function (r) {
      ot === null || at === null
        ? ((ot = Ne), (at = je))
        : ((ot = Ne - (ot - Ne)), (at = je - (at - je)));
      var e = Zu(ot, at, r[0], r[1]);
      return (
        (ot = Ne - (ot - Ne)),
        (at = je - (at - je)),
        (Ne = r[0]),
        (je = r[1]),
        e
      );
    },
    t: function (r) {
      ot === null || at === null
        ? ((ot = Ne), (at = je))
        : ((ot = Ne - (ot - Ne)), (at = je - (at - je)));
      var e = Zu(ot, at, Ne + r[0], je + r[1]);
      return (Ne += r[0]), (je += r[1]), e;
    },
    A: function (r) {
      var e = H0(Ne, je, r);
      return (Ne = r[5]), (je = r[6]), e;
    },
    a: function (r) {
      (r[5] += Ne), (r[6] += je);
      var e = H0(Ne, je, r);
      return (Ne = r[5]), (je = r[6]), e;
    },
    L: function (r) {
      return (Ne = r[0]), (je = r[1]), (ot = at = null), Jt(Ne, je);
    },
    l: function (r) {
      return (Ne += r[0]), (je += r[1]), (ot = at = null), Jt(Ne, je);
    },
    H: function (r) {
      return (Ne = r[0]), (ot = at = null), Jt(Ne, je);
    },
    h: function (r) {
      return (Ne += r[0]), (ot = at = null), Jt(Ne, je);
    },
    V: function (r) {
      return (je = r[0]), (ot = at = null), Jt(Ne, je);
    },
    v: function (r) {
      return (je += r[0]), (ot = at = null), Jt(Ne, je);
    },
    Z: function () {
      var r = ci();
      return (Ne = ha), (je = pa), r;
    },
    z: function () {
      var r = ci();
      return (Ne = ha), (je = pa), r;
    },
  },
  H0 = function (r, e, t) {
    for (
      var i = t[0],
        a = t[1],
        u = t[2],
        s = t[3],
        c = t[4],
        d = t[5],
        h = t[6],
        y = T1(d, h, i, a, s, c, u, r, e),
        m = [],
        x = 0,
        w = y;
      x < w.length;
      x++
    ) {
      var F = w[x],
        E = R1.apply(void 0, F);
      m.push(jr.apply(void 0, E));
    }
    return m;
  },
  T1 = function (r, e, t, i, a, u, s, c, d) {
    var h = s * (Math.PI / 180),
      y = Math.sin(h),
      m = Math.cos(h);
    (t = Math.abs(t)),
      (i = Math.abs(i)),
      (ot = m * (c - r) * 0.5 + y * (d - e) * 0.5),
      (at = m * (d - e) * 0.5 - y * (c - r) * 0.5);
    var x = (ot * ot) / (t * t) + (at * at) / (i * i);
    x > 1 && ((x = Math.sqrt(x)), (t *= x), (i *= x));
    var w = m / t,
      F = y / t,
      E = -y / i,
      R = m / i,
      D = w * c + F * d,
      L = E * c + R * d,
      N = w * r + F * e,
      q = E * r + R * e,
      K = (N - D) * (N - D) + (q - L) * (q - L),
      M = 1 / K - 0.25;
    M < 0 && (M = 0);
    var U = Math.sqrt(M);
    u === a && (U = -U);
    var _ = 0.5 * (D + N) - U * (q - L),
      te = 0.5 * (L + q) + U * (N - D),
      ee = Math.atan2(L - te, D - _),
      ie = Math.atan2(q - te, N - _),
      ce = ie - ee;
    ce < 0 && u === 1
      ? (ce += 2 * Math.PI)
      : ce > 0 && u === 0 && (ce -= 2 * Math.PI);
    for (
      var Y = Math.ceil(Math.abs(ce / (Math.PI * 0.5 + 0.001))),
        xe = [],
        Se = 0;
      Se < Y;
      Se++
    ) {
      var de = ee + (Se * ce) / Y,
        le = ee + ((Se + 1) * ce) / Y;
      xe[Se] = [_, te, de, le, t, i, y, m];
    }
    return xe;
  },
  R1 = function (r, e, t, i, a, u, s, c) {
    var d = c * a,
      h = -s * u,
      y = s * a,
      m = c * u,
      x = 0.5 * (i - t),
      w = ((8 / 3) * Math.sin(x * 0.5) * Math.sin(x * 0.5)) / Math.sin(x),
      F = r + Math.cos(t) - w * Math.sin(t),
      E = e + Math.sin(t) + w * Math.cos(t),
      R = r + Math.cos(i),
      D = e + Math.sin(i),
      L = R + w * Math.sin(i),
      N = D - w * Math.cos(i),
      q = [
        d * F + h * E,
        y * F + m * E,
        d * L + h * N,
        y * L + m * N,
        d * R + h * D,
        y * R + m * D,
      ];
    return q;
  },
  D1 = function (r) {
    return E1(P1(r));
  },
  O1 = function (r, e) {
    for (
      var t = [
          Gt(),
          e.graphicsState && ji(e.graphicsState),
          Mp(),
          Bi(e.color),
          cc(e.font, e.size),
          m1(e.lineHeight),
          Lp(nr(e.rotate), nr(e.xSkew), nr(e.ySkew), e.x, e.y),
        ].filter(Boolean),
        i = 0,
        a = r.length;
      i < a;
      i++
    )
      t.push(Ip(r[i]), y1());
    return t.push(Up(), Xt()), t;
  },
  Hp = function (r, e) {
    return [
      Gt(),
      e.graphicsState && ji(e.graphicsState),
      _r(e.x, e.y),
      wo(nr(e.rotate)),
      Pa(e.width, e.height),
      lc(nr(e.xSkew), nr(e.ySkew)),
      dc(r),
      Xt(),
    ].filter(Boolean);
  },
  A1 = function (r, e) {
    return [
      Gt(),
      e.graphicsState && ji(e.graphicsState),
      _r(e.x, e.y),
      wo(nr(e.rotate)),
      Pa(e.xScale, e.yScale),
      lc(nr(e.xSkew), nr(e.ySkew)),
      dc(r),
      Xt(),
    ].filter(Boolean);
  },
  z1 = function (r) {
    var e, t;
    return [
      Gt(),
      r.graphicsState && ji(r.graphicsState),
      r.color && za(r.color),
      Oa(r.thickness),
      Ol(
        (e = r.dashArray) !== null && e !== void 0 ? e : [],
        (t = r.dashPhase) !== null && t !== void 0 ? t : 0
      ),
      bn(r.start.x, r.start.y),
      r.lineCap && Al(r.lineCap),
      bn(r.start.x, r.start.y),
      Jt(r.end.x, r.end.y),
      Aa(),
      Xt(),
    ].filter(Boolean);
  },
  mo = function (r) {
    var e, t;
    return [
      Gt(),
      r.graphicsState && ji(r.graphicsState),
      r.color && Bi(r.color),
      r.borderColor && za(r.borderColor),
      Oa(r.borderWidth),
      r.borderLineCap && Al(r.borderLineCap),
      Ol(
        (e = r.borderDashArray) !== null && e !== void 0 ? e : [],
        (t = r.borderDashPhase) !== null && t !== void 0 ? t : 0
      ),
      _r(r.x, r.y),
      wo(nr(r.rotate)),
      lc(nr(r.xSkew), nr(r.ySkew)),
      bn(0, 0),
      Jt(0, r.height),
      Jt(r.width, r.height),
      Jt(r.width, 0),
      ci(),
      r.color && r.borderWidth
        ? fc()
        : r.color
        ? sc()
        : r.borderColor
        ? Aa()
        : ci(),
      Xt(),
    ].filter(Boolean);
  },
  hl = 4 * ((Math.sqrt(2) - 1) / 3),
  N1 = function (r) {
    var e = et(r.x),
      t = et(r.y),
      i = et(r.xScale),
      a = et(r.yScale);
    (e -= i), (t -= a);
    var u = i * hl,
      s = a * hl,
      c = e + i * 2,
      d = t + a * 2,
      h = e + i,
      y = t + a;
    return [
      Gt(),
      bn(e, y),
      jr(e, y - s, h - u, t, h, t),
      jr(h + u, t, c, y - s, c, y),
      jr(c, y + s, h + u, d, h, d),
      jr(h - u, d, e, y + s, e, y),
      Xt(),
    ];
  },
  j1 = function (r) {
    var e = et(r.x),
      t = et(r.y),
      i = et(r.xScale),
      a = et(r.yScale),
      u = -i,
      s = -a,
      c = i * hl,
      d = a * hl,
      h = u + i * 2,
      y = s + a * 2,
      m = u + i,
      x = s + a;
    return [
      _r(e, t),
      wo(nr(r.rotate)),
      bn(u, x),
      jr(u, x - d, m - c, s, m, s),
      jr(m + c, s, h, x - d, h, x),
      jr(h, x + d, m + c, y, m, y),
      jr(m - c, y, u, x + d, u, x),
    ];
  },
  Wf = function (r) {
    var e, t, i;
    return lt(
      [
        Gt(),
        r.graphicsState && ji(r.graphicsState),
        r.color && Bi(r.color),
        r.borderColor && za(r.borderColor),
        Oa(r.borderWidth),
        r.borderLineCap && Al(r.borderLineCap),
        Ol(
          (e = r.borderDashArray) !== null && e !== void 0 ? e : [],
          (t = r.borderDashPhase) !== null && t !== void 0 ? t : 0
        ),
      ],
      r.rotate === void 0
        ? N1({ x: r.x, y: r.y, xScale: r.xScale, yScale: r.yScale })
        : j1({
            x: r.x,
            y: r.y,
            xScale: r.xScale,
            yScale: r.yScale,
            rotate: (i = r.rotate) !== null && i !== void 0 ? i : We(0),
          }),
      [
        r.color && r.borderWidth
          ? fc()
          : r.color
          ? sc()
          : r.borderColor
          ? Aa()
          : ci(),
        Xt(),
      ]
    ).filter(Boolean);
  },
  B1 = function (r, e) {
    var t, i, a;
    return lt(
      [
        Gt(),
        e.graphicsState && ji(e.graphicsState),
        _r(e.x, e.y),
        wo(nr((t = e.rotate) !== null && t !== void 0 ? t : We(0))),
        e.scale ? Pa(e.scale, -e.scale) : Pa(1, -1),
        e.color && Bi(e.color),
        e.borderColor && za(e.borderColor),
        e.borderWidth && Oa(e.borderWidth),
        e.borderLineCap && Al(e.borderLineCap),
        Ol(
          (i = e.borderDashArray) !== null && i !== void 0 ? i : [],
          (a = e.borderDashPhase) !== null && a !== void 0 ? a : 0
        ),
      ],
      D1(r),
      [
        e.color && e.borderWidth
          ? fc()
          : e.color
          ? sc()
          : e.borderColor
          ? Aa()
          : ci(),
        Xt(),
      ]
    ).filter(Boolean);
  },
  I1 = function (r) {
    var e = et(r.size),
      t = -1 + 0.75,
      i = -1 + 0.51,
      a = 1 - 0.525,
      u = 1 - 0.31,
      s = -1 + 0.325,
      c = 0.3995 / (a - i) + i;
    return [
      Gt(),
      r.color && za(r.color),
      Oa(r.thickness),
      _r(r.x, r.y),
      bn(s * e, c * e),
      Jt(t * e, i * e),
      Jt(u * e, a * e),
      Aa(),
      Xt(),
    ].filter(Boolean);
  },
  yi = function (r) {
    return r.rotation === 0
      ? [_r(0, 0), Xu(0)]
      : r.rotation === 90
      ? [_r(r.width, 0), Xu(90)]
      : r.rotation === 180
      ? [_r(r.width, r.height), Xu(180)]
      : r.rotation === 270
      ? [_r(0, r.height), Xu(270)]
      : [];
  },
  Yu = function (r) {
    var e = mo({
      x: r.x,
      y: r.y,
      width: r.width,
      height: r.height,
      borderWidth: r.borderWidth,
      color: r.color,
      borderColor: r.borderColor,
      rotate: We(0),
      xSkew: We(0),
      ySkew: We(0),
    });
    if (!r.filled) return e;
    var t = et(r.width),
      i = et(r.height),
      a = Math.min(t, i) / 2,
      u = I1({
        x: t / 2,
        y: i / 2,
        size: a,
        thickness: r.thickness,
        color: r.markColor,
      });
    return lt([Gt()], e, u, [Xt()]);
  },
  Qu = function (r) {
    var e = et(r.width),
      t = et(r.height),
      i = Math.min(e, t) / 2,
      a = Wf({
        x: r.x,
        y: r.y,
        xScale: i,
        yScale: i,
        color: r.color,
        borderColor: r.borderColor,
        borderWidth: r.borderWidth,
      });
    if (!r.filled) return a;
    var u = Wf({
      x: r.x,
      y: r.y,
      xScale: i * 0.45,
      yScale: i * 0.45,
      color: r.dotColor,
      borderColor: void 0,
      borderWidth: 0,
    });
    return lt([Gt()], a, u, [Xt()]);
  },
  G0 = function (r) {
    var e = et(r.x),
      t = et(r.y),
      i = et(r.width),
      a = et(r.height),
      u = mo({
        x: e,
        y: t,
        width: i,
        height: a,
        borderWidth: r.borderWidth,
        color: r.color,
        borderColor: r.borderColor,
        rotate: We(0),
        xSkew: We(0),
        ySkew: We(0),
      }),
      s = gc(r.textLines, {
        color: r.textColor,
        font: r.font,
        size: r.fontSize,
        rotate: We(0),
        xSkew: We(0),
        ySkew: We(0),
      });
    return lt([Gt()], u, s, [Xt()]);
  },
  gc = function (r, e) {
    for (
      var t = [Mp(), Bi(e.color), cc(e.font, e.size)], i = 0, a = r.length;
      i < a;
      i++
    ) {
      var u = r[i],
        s = u.encoded,
        c = u.x,
        d = u.y;
      t.push(Lp(nr(e.rotate), nr(e.xSkew), nr(e.ySkew), c, d), Ip(s));
    }
    return t.push(Up()), t;
  },
  Gp = function (r) {
    var e = et(r.x),
      t = et(r.y),
      i = et(r.width),
      a = et(r.height),
      u = et(r.borderWidth),
      s = et(r.padding),
      c = e + u / 2 + s,
      d = t + u / 2 + s,
      h = i - (u / 2 + s) * 2,
      y = a - (u / 2 + s) * 2,
      m = [
        bn(c, d),
        Jt(c, d + y),
        Jt(c + h, d + y),
        Jt(c + h, d),
        ci(),
        jp(),
        Bp(),
      ],
      x = mo({
        x: e,
        y: t,
        width: i,
        height: a,
        borderWidth: r.borderWidth,
        color: r.color,
        borderColor: r.borderColor,
        rotate: We(0),
        xSkew: We(0),
        ySkew: We(0),
      }),
      w = gc(r.textLines, {
        color: r.textColor,
        font: r.font,
        size: r.fontSize,
        rotate: We(0),
        xSkew: We(0),
        ySkew: We(0),
      }),
      F = lt([Vp("Tx"), Gt()], w, [Xt(), Wp()]);
    return lt([Gt()], x, m, F, [Xt()]);
  },
  M1 = function (r) {
    for (
      var e = et(r.x),
        t = et(r.y),
        i = et(r.width),
        a = et(r.height),
        u = et(r.lineHeight),
        s = et(r.borderWidth),
        c = et(r.padding),
        d = e + s / 2 + c,
        h = t + s / 2 + c,
        y = i - (s / 2 + c) * 2,
        m = a - (s / 2 + c) * 2,
        x = [
          bn(d, h),
          Jt(d, h + m),
          Jt(d + y, h + m),
          Jt(d + y, h),
          ci(),
          jp(),
          Bp(),
        ],
        w = mo({
          x: e,
          y: t,
          width: i,
          height: a,
          borderWidth: r.borderWidth,
          color: r.color,
          borderColor: r.borderColor,
          rotate: We(0),
          xSkew: We(0),
          ySkew: We(0),
        }),
        F = [],
        E = 0,
        R = r.selectedLines.length;
      E < R;
      E++
    ) {
      var D = r.textLines[r.selectedLines[E]];
      F.push.apply(
        F,
        mo({
          x: D.x - c,
          y: D.y - (u - D.height) / 2,
          width: i - s,
          height: D.height + (u - D.height) / 2,
          borderWidth: 0,
          color: r.selectedColor,
          borderColor: void 0,
          rotate: We(0),
          xSkew: We(0),
          ySkew: We(0),
        })
      );
    }
    var L = gc(r.textLines, {
        color: r.textColor,
        font: r.font,
        size: r.fontSize,
        rotate: We(0),
        xSkew: We(0),
        ySkew: We(0),
      }),
      N = lt([Vp("Tx"), Gt()], L, [Xt(), Wp()]);
    return lt([Gt()], w, F, x, N, [Xt()]);
  },
  U1 = (function (r) {
    ve(e, r);
    function e() {
      var t = this,
        i =
          "Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.";
      return (t = r.call(this, i) || this), t;
    }
    return e;
  })(Error),
  L1 = (function (r) {
    ve(e, r);
    function e() {
      var t = this,
        i =
          "Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.";
      return (t = r.call(this, i) || this), t;
    }
    return e;
  })(Error),
  V1 = (function (r) {
    ve(e, r);
    function e() {
      var t = this,
        i =
          "A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.";
      return (t = r.call(this, i) || this), t;
    }
    return e;
  })(Error),
  W1 = (function (r) {
    ve(e, r);
    function e() {
      var t = this,
        i =
          "PDFDocument has no pages so `PDFDocument.removePage` cannot be called";
      return (t = r.call(this, i) || this), t;
    }
    return e;
  })(Error),
  q1 = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = 'PDFDocument has no form field with the name "' + t + '"';
      return (i = r.call(this, a) || this), i;
    }
    return e;
  })(Error),
  Ai = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u,
        s,
        c = this,
        d = i == null ? void 0 : i.name,
        h =
          (s =
            (u = a == null ? void 0 : a.constructor) === null || u === void 0
              ? void 0
              : u.name) !== null && s !== void 0
            ? s
            : a,
        y =
          'Expected field "' +
          t +
          '" to be of type ' +
          d +
          ", " +
          ("but it is actually of type " + h);
      return (c = r.call(this, y) || this), c;
    }
    return e;
  })(Error);
(function (r) {
  ve(e, r);
  function e(t) {
    var i = this,
      a = 'Failed to select check box due to missing onValue: "' + t + '"';
    return (i = r.call(this, a) || this), i;
  }
  return e;
})(Error);
var Xp = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = 'A field already exists with the specified name: "' + t + '"';
      return (i = r.call(this, a) || this), i;
    }
    return e;
  })(Error),
  K1 = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a = 'Field name contains invalid component: "' + t + '"';
      return (i = r.call(this, a) || this), i;
    }
    return e;
  })(Error);
(function (r) {
  ve(e, r);
  function e(t) {
    var i = this,
      a =
        'A non-terminal field already exists with the specified name: "' +
        t +
        '"';
    return (i = r.call(this, a) || this), i;
  }
  return e;
})(Error);
var H1 = (function (r) {
    ve(e, r);
    function e(t) {
      var i = this,
        a =
          "Reading rich text fields is not supported: Attempted to read rich text field: " +
          t;
      return (i = r.call(this, a) || this), i;
    }
    return e;
  })(Error),
  G1 = (function (r) {
    ve(e, r);
    function e(t, i) {
      var a = this,
        u =
          "Failed to layout combed text as lineLength=" +
          t +
          " is greater than cellCount=" +
          i;
      return (a = r.call(this, u) || this), a;
    }
    return e;
  })(Error),
  X1 = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = this,
        s =
          "Attempted to set text with length=" +
          t +
          " for TextField with maxLength=" +
          i +
          " and name=" +
          a;
      return (u = r.call(this, s) || this), u;
    }
    return e;
  })(Error),
  Z1 = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = this,
        s =
          "Attempted to set maxLength=" +
          i +
          ", which is less than " +
          t +
          ", the length of this field's current value (name=" +
          a +
          ")";
      return (u = r.call(this, s) || this), u;
    }
    return e;
  })(Error),
  Ht;
(function (r) {
  (r[(r.Left = 0)] = "Left"),
    (r[(r.Center = 1)] = "Center"),
    (r[(r.Right = 2)] = "Right");
})(Ht || (Ht = {}));
var Zp = 4,
  Yp = 500,
  Qp = function (r, e, t, i) {
    i === void 0 && (i = !1);
    for (var a = Zp; a < Yp; ) {
      for (var u = 0, s = 0, c = r.length; s < c; s++) {
        u += 1;
        for (
          var d = r[s], h = d.split(" "), y = t.width, m = 0, x = h.length;
          m < x;
          m++
        ) {
          var w = m === x - 1,
            F = w ? h[m] : h[m] + " ",
            E = e.widthOfTextAtSize(F, a);
          (y -= E), y <= 0 && ((u += 1), (y = t.width - E));
        }
      }
      if (!i && u > r.length) return a - 1;
      var R = e.heightAtSize(a),
        D = R + R * 0.2,
        L = D * u;
      if (L > Math.abs(t.height)) return a - 1;
      a += 1;
    }
    return a;
  },
  Y1 = function (r, e, t, i) {
    for (var a = t.width / i, u = t.height, s = Zp, c = ay(r); s < Yp; ) {
      for (var d = 0, h = c.length; d < h; d++) {
        var y = c[d],
          m = e.widthOfTextAtSize(y, s) > a * 0.75;
        if (m) return s - 1;
      }
      var x = e.heightAtSize(s, { descender: !1 });
      if (x > u) return s - 1;
      s += 1;
    }
    return s;
  },
  Q1 = function (r) {
    for (var e = r.length; e > 0; e--) if (/\s/.test(r[e])) return e;
  },
  J1 = function (r, e, t, i) {
    for (var a, u = r.length; u > 0; ) {
      var s = r.substring(0, u),
        c = t.encodeText(s),
        d = t.widthOfTextAtSize(s, i);
      if (d < e) {
        var h = r.substring(u) || void 0;
        return { line: s, encoded: c, width: d, remainder: h };
      }
      u = (a = Q1(s)) !== null && a !== void 0 ? a : 0;
    }
    return {
      line: r,
      encoded: t.encodeText(r),
      width: t.widthOfTextAtSize(r, i),
      remainder: void 0,
    };
  },
  Jp = function (r, e) {
    var t = e.alignment,
      i = e.fontSize,
      a = e.font,
      u = e.bounds,
      s = Z0(Ta(r));
    (i === void 0 || i === 0) && (i = Qp(s, a, u, !0));
    for (
      var c = a.heightAtSize(i),
        d = c + c * 0.2,
        h = [],
        y = u.x,
        m = u.y,
        x = u.x + u.width,
        w = u.y + u.height,
        F = u.y + u.height,
        E = 0,
        R = s.length;
      E < R;
      E++
    )
      for (var D = s[E]; D !== void 0; ) {
        var L = J1(D, u.width, a, i),
          N = L.line,
          q = L.encoded,
          K = L.width,
          M = L.remainder,
          U =
            t === Ht.Left
              ? u.x
              : t === Ht.Center
              ? u.x + u.width / 2 - K / 2
              : t === Ht.Right
              ? u.x + u.width - K
              : u.x;
        (F -= d),
          U < y && (y = U),
          F < m && (m = F),
          U + K > x && (x = U + K),
          F + c > w && (w = F + c),
          h.push({ text: N, encoded: q, width: K, height: c, x: U, y: F }),
          (D = M == null ? void 0 : M.trim());
      }
    return {
      fontSize: i,
      lineHeight: d,
      lines: h,
      bounds: { x: y, y: m, width: x - y, height: w - m },
    };
  },
  _1 = function (r, e) {
    var t = e.fontSize,
      i = e.font,
      a = e.bounds,
      u = e.cellCount,
      s = Y0(Ta(r));
    if (s.length > u) throw new G1(s.length, u);
    (t === void 0 || t === 0) && (t = Y1(s, i, a, u));
    for (
      var c = a.width / u,
        d = i.heightAtSize(t, { descender: !1 }),
        h = a.y + (a.height / 2 - d / 2),
        y = [],
        m = a.x,
        x = a.y,
        w = a.x + a.width,
        F = a.y + a.height,
        E = 0,
        R = 0;
      E < u;

    ) {
      var D = Q0(s, R),
        L = D[0],
        N = D[1],
        q = i.encodeText(L),
        K = i.widthOfTextAtSize(L, t),
        M = a.x + (c * E + c / 2),
        U = M - K / 2;
      U < m && (m = U),
        h < x && (x = h),
        U + K > w && (w = U + K),
        h + d > F && (F = h + d),
        y.push({ text: s, encoded: q, width: K, height: d, x: U, y: h }),
        (E += 1),
        (R += N);
    }
    return {
      fontSize: t,
      cells: y,
      bounds: { x: m, y: x, width: w - m, height: F - x },
    };
  },
  pl = function (r, e) {
    var t = e.alignment,
      i = e.fontSize,
      a = e.font,
      u = e.bounds,
      s = Y0(Ta(r));
    (i === void 0 || i === 0) && (i = Qp([s], a, u));
    var c = a.encodeText(s),
      d = a.widthOfTextAtSize(s, i),
      h = a.heightAtSize(i, { descender: !1 }),
      y =
        t === Ht.Left
          ? u.x
          : t === Ht.Center
          ? u.x + u.width / 2 - d / 2
          : t === Ht.Right
          ? u.x + u.width - d
          : u.x,
      m = u.y + (u.height / 2 - h / 2);
    return {
      fontSize: i,
      line: { text: s, encoded: c, width: d, height: h, x: y, y: m },
      bounds: { x: y, y: m, width: d, height: h },
    };
  },
  So = function (r) {
    return "normal" in r ? r : { normal: r };
  },
  $1 = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/,
  hi = function (r) {
    var e,
      t,
      i = (e = r.getDefaultAppearance()) !== null && e !== void 0 ? e : "",
      a = (t = Zf(i, $1).match) !== null && t !== void 0 ? t : [],
      u = Number(a[2]);
    return isFinite(u) ? u : void 0;
  },
  ex =
    /(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/,
  $r = function (r) {
    var e,
      t = (e = r.getDefaultAppearance()) !== null && e !== void 0 ? e : "",
      i = Zf(t, ex).match,
      a = i ?? [],
      u = a[1],
      s = a[2],
      c = a[3],
      d = a[4],
      h = a[5];
    if (h === "g" && u) return qp(Number(u));
    if (h === "rg" && u && s && c) return yt(Number(u), Number(s), Number(c));
    if (h === "k" && u && s && c && d)
      return Kp(Number(u), Number(s), Number(c), Number(d));
  },
  en = function (r, e, t, i) {
    var a;
    i === void 0 && (i = 0);
    var u = [
      Bi(e).toString(),
      cc(
        (a = t == null ? void 0 : t.name) !== null && a !== void 0
          ? a
          : "dummy__noop",
        i
      ).toString(),
    ].join(`
`);
    r.setDefaultAppearance(u);
  },
  tx = function (r, e) {
    var t,
      i,
      a,
      u = $r(e),
      s = $r(r.acroField),
      c = e.getRectangle(),
      d = e.getAppearanceCharacteristics(),
      h = e.getBorderStyle(),
      y =
        (t = h == null ? void 0 : h.getWidth()) !== null && t !== void 0
          ? t
          : 0,
      m = Un(d == null ? void 0 : d.getRotation()),
      x = Ni(c, m),
      w = x.width,
      F = x.height,
      E = yi(Ze(Ze({}, c), { rotation: m })),
      R = yt(0, 0, 0),
      D =
        (i = mr(d == null ? void 0 : d.getBorderColor())) !== null &&
        i !== void 0
          ? i
          : R,
      L = mr(d == null ? void 0 : d.getBackgroundColor()),
      N = mr(d == null ? void 0 : d.getBackgroundColor(), 0.8),
      q = (a = u ?? s) !== null && a !== void 0 ? a : R;
    en(u ? e : r.acroField, q);
    var K = {
      x: 0 + y / 2,
      y: 0 + y / 2,
      width: w - y,
      height: F - y,
      thickness: 1.5,
      borderWidth: y,
      borderColor: D,
      markColor: q,
    };
    return {
      normal: {
        on: lt(E, Yu(Ze(Ze({}, K), { color: L, filled: !0 }))),
        off: lt(E, Yu(Ze(Ze({}, K), { color: L, filled: !1 }))),
      },
      down: {
        on: lt(E, Yu(Ze(Ze({}, K), { color: N, filled: !0 }))),
        off: lt(E, Yu(Ze(Ze({}, K), { color: N, filled: !1 }))),
      },
    };
  },
  rx = function (r, e) {
    var t,
      i,
      a,
      u = $r(e),
      s = $r(r.acroField),
      c = e.getRectangle(),
      d = e.getAppearanceCharacteristics(),
      h = e.getBorderStyle(),
      y =
        (t = h == null ? void 0 : h.getWidth()) !== null && t !== void 0
          ? t
          : 0,
      m = Un(d == null ? void 0 : d.getRotation()),
      x = Ni(c, m),
      w = x.width,
      F = x.height,
      E = yi(Ze(Ze({}, c), { rotation: m })),
      R = yt(0, 0, 0),
      D =
        (i = mr(d == null ? void 0 : d.getBorderColor())) !== null &&
        i !== void 0
          ? i
          : R,
      L = mr(d == null ? void 0 : d.getBackgroundColor()),
      N = mr(d == null ? void 0 : d.getBackgroundColor(), 0.8),
      q = (a = u ?? s) !== null && a !== void 0 ? a : R;
    en(u ? e : r.acroField, q);
    var K = {
      x: w / 2,
      y: F / 2,
      width: w - y,
      height: F - y,
      borderWidth: y,
      borderColor: D,
      dotColor: q,
    };
    return {
      normal: {
        on: lt(E, Qu(Ze(Ze({}, K), { color: L, filled: !0 }))),
        off: lt(E, Qu(Ze(Ze({}, K), { color: L, filled: !1 }))),
      },
      down: {
        on: lt(E, Qu(Ze(Ze({}, K), { color: N, filled: !0 }))),
        off: lt(E, Qu(Ze(Ze({}, K), { color: N, filled: !1 }))),
      },
    };
  },
  nx = function (r, e, t) {
    var i,
      a,
      u,
      s,
      c,
      d = $r(e),
      h = $r(r.acroField),
      y = hi(e),
      m = hi(r.acroField),
      x = e.getRectangle(),
      w = e.getAppearanceCharacteristics(),
      F = e.getBorderStyle(),
      E = w == null ? void 0 : w.getCaptions(),
      R = (i = E == null ? void 0 : E.normal) !== null && i !== void 0 ? i : "",
      D =
        (u =
          (a = E == null ? void 0 : E.down) !== null && a !== void 0
            ? a
            : R) !== null && u !== void 0
          ? u
          : "",
      L =
        (s = F == null ? void 0 : F.getWidth()) !== null && s !== void 0
          ? s
          : 0,
      N = Un(w == null ? void 0 : w.getRotation()),
      q = Ni(x, N),
      K = q.width,
      M = q.height,
      U = yi(Ze(Ze({}, x), { rotation: N })),
      _ = yt(0, 0, 0),
      te = mr(w == null ? void 0 : w.getBorderColor()),
      ee = mr(w == null ? void 0 : w.getBackgroundColor()),
      ie = mr(w == null ? void 0 : w.getBackgroundColor(), 0.8),
      ce = { x: L, y: L, width: K - L * 2, height: M - L * 2 },
      Y = pl(R, {
        alignment: Ht.Center,
        fontSize: y ?? m,
        font: t,
        bounds: ce,
      }),
      xe = pl(D, {
        alignment: Ht.Center,
        fontSize: y ?? m,
        font: t,
        bounds: ce,
      }),
      Se = Math.min(Y.fontSize, xe.fontSize),
      de = (c = d ?? h) !== null && c !== void 0 ? c : _;
    en(d || y !== void 0 ? e : r.acroField, de, t, Se);
    var le = {
      x: 0 + L / 2,
      y: 0 + L / 2,
      width: K - L,
      height: M - L,
      borderWidth: L,
      borderColor: te,
      textColor: de,
      font: t.name,
      fontSize: Se,
    };
    return {
      normal: lt(U, G0(Ze(Ze({}, le), { color: ee, textLines: [Y.line] }))),
      down: lt(U, G0(Ze(Ze({}, le), { color: ie, textLines: [xe.line] }))),
    };
  },
  ix = function (r, e, t) {
    var i,
      a,
      u,
      s,
      c = $r(e),
      d = $r(r.acroField),
      h = hi(e),
      y = hi(r.acroField),
      m = e.getRectangle(),
      x = e.getAppearanceCharacteristics(),
      w = e.getBorderStyle(),
      F = (i = r.getText()) !== null && i !== void 0 ? i : "",
      E =
        (a = w == null ? void 0 : w.getWidth()) !== null && a !== void 0
          ? a
          : 0,
      R = Un(x == null ? void 0 : x.getRotation()),
      D = Ni(m, R),
      L = D.width,
      N = D.height,
      q = yi(Ze(Ze({}, m), { rotation: R })),
      K = yt(0, 0, 0),
      M = mr(x == null ? void 0 : x.getBorderColor()),
      U = mr(x == null ? void 0 : x.getBackgroundColor()),
      _,
      te,
      ee = r.isCombed() ? 0 : 1,
      ie = {
        x: E + ee,
        y: E + ee,
        width: L - (E + ee) * 2,
        height: N - (E + ee) * 2,
      };
    if (r.isMultiline()) {
      var ce = Jp(F, {
        alignment: r.getAlignment(),
        fontSize: h ?? y,
        font: t,
        bounds: ie,
      });
      (_ = ce.lines), (te = ce.fontSize);
    } else if (r.isCombed()) {
      var ce = _1(F, {
        fontSize: h ?? y,
        font: t,
        bounds: ie,
        cellCount: (u = r.getMaxLength()) !== null && u !== void 0 ? u : 0,
      });
      (_ = ce.cells), (te = ce.fontSize);
    } else {
      var ce = pl(F, {
        alignment: r.getAlignment(),
        fontSize: h ?? y,
        font: t,
        bounds: ie,
      });
      (_ = [ce.line]), (te = ce.fontSize);
    }
    var Y = (s = c ?? d) !== null && s !== void 0 ? s : K;
    en(c || h !== void 0 ? e : r.acroField, Y, t, te);
    var xe = {
      x: 0 + E / 2,
      y: 0 + E / 2,
      width: L - E,
      height: N - E,
      borderWidth: E ?? 0,
      borderColor: M,
      textColor: Y,
      font: t.name,
      fontSize: te,
      color: U,
      textLines: _,
      padding: ee,
    };
    return lt(q, Gp(xe));
  },
  ox = function (r, e, t) {
    var i,
      a,
      u,
      s = $r(e),
      c = $r(r.acroField),
      d = hi(e),
      h = hi(r.acroField),
      y = e.getRectangle(),
      m = e.getAppearanceCharacteristics(),
      x = e.getBorderStyle(),
      w = (i = r.getSelected()[0]) !== null && i !== void 0 ? i : "",
      F =
        (a = x == null ? void 0 : x.getWidth()) !== null && a !== void 0
          ? a
          : 0,
      E = Un(m == null ? void 0 : m.getRotation()),
      R = Ni(y, E),
      D = R.width,
      L = R.height,
      N = yi(Ze(Ze({}, y), { rotation: E })),
      q = yt(0, 0, 0),
      K = mr(m == null ? void 0 : m.getBorderColor()),
      M = mr(m == null ? void 0 : m.getBackgroundColor()),
      U = 1,
      _ = {
        x: F + U,
        y: F + U,
        width: D - (F + U) * 2,
        height: L - (F + U) * 2,
      },
      te = pl(w, { alignment: Ht.Left, fontSize: d ?? h, font: t, bounds: _ }),
      ee = te.line,
      ie = te.fontSize,
      ce = (u = s ?? c) !== null && u !== void 0 ? u : q;
    en(s || d !== void 0 ? e : r.acroField, ce, t, ie);
    var Y = {
      x: 0 + F / 2,
      y: 0 + F / 2,
      width: D - F,
      height: L - F,
      borderWidth: F ?? 0,
      borderColor: K,
      textColor: ce,
      font: t.name,
      fontSize: ie,
      color: M,
      textLines: [ee],
      padding: U,
    };
    return lt(N, Gp(Y));
  },
  ax = function (r, e, t) {
    var i,
      a,
      u = $r(e),
      s = $r(r.acroField),
      c = hi(e),
      d = hi(r.acroField),
      h = e.getRectangle(),
      y = e.getAppearanceCharacteristics(),
      m = e.getBorderStyle(),
      x =
        (i = m == null ? void 0 : m.getWidth()) !== null && i !== void 0
          ? i
          : 0,
      w = Un(y == null ? void 0 : y.getRotation()),
      F = Ni(h, w),
      E = F.width,
      R = F.height,
      D = yi(Ze(Ze({}, h), { rotation: w })),
      L = yt(0, 0, 0),
      N = mr(y == null ? void 0 : y.getBorderColor()),
      q = mr(y == null ? void 0 : y.getBackgroundColor()),
      K = r.getOptions(),
      M = r.getSelected();
    r.isSorted() && K.sort();
    for (var U = "", _ = 0, te = K.length; _ < te; _++)
      (U += K[_]),
        _ < te - 1 &&
          (U += `
`);
    for (
      var ee = 1,
        ie = {
          x: x + ee,
          y: x + ee,
          width: E - (x + ee) * 2,
          height: R - (x + ee) * 2,
        },
        ce = Jp(U, {
          alignment: Ht.Left,
          fontSize: c ?? d,
          font: t,
          bounds: ie,
        }),
        Y = ce.lines,
        xe = ce.fontSize,
        Se = ce.lineHeight,
        de = [],
        _ = 0,
        te = Y.length;
      _ < te;
      _++
    ) {
      var le = Y[_];
      M.includes(le.text) && de.push(_);
    }
    var re = yt(153 / 255, 193 / 255, 218 / 255),
      ge = (a = u ?? s) !== null && a !== void 0 ? a : L;
    return (
      en(u || c !== void 0 ? e : r.acroField, ge, t, xe),
      lt(
        D,
        M1({
          x: 0 + x / 2,
          y: 0 + x / 2,
          width: E - x,
          height: R - x,
          borderWidth: x ?? 0,
          borderColor: N,
          textColor: ge,
          font: t.name,
          fontSize: xe,
          color: q,
          textLines: Y,
          lineHeight: Se,
          selectedColor: re,
          selectedLines: de,
          padding: ee,
        })
      )
    );
  },
  _p = (function () {
    function r(e, t, i) {
      (this.alreadyEmbedded = !1),
        V(e, "ref", [[gt, "PDFRef"]]),
        V(t, "doc", [[pi, "PDFDocument"]]),
        V(i, "embedder", [[kp, "PDFPageEmbedder"]]),
        (this.ref = e),
        (this.doc = t),
        (this.width = i.width),
        (this.height = i.height),
        (this.embedder = i);
    }
    return (
      (r.prototype.scale = function (e) {
        return (
          V(e, "factor", ["number"]),
          { width: this.width * e, height: this.height * e }
        );
      }),
      (r.prototype.size = function () {
        return this.scale(1);
      }),
      (r.prototype.embed = function () {
        return _e(this, void 0, void 0, function () {
          return $e(this, function (e) {
            switch (e.label) {
              case 0:
                return this.alreadyEmbedded
                  ? [3, 2]
                  : [
                      4,
                      this.embedder.embedIntoContext(
                        this.doc.context,
                        this.ref
                      ),
                    ];
              case 1:
                e.sent(), (this.alreadyEmbedded = !0), (e.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (r.of = function (e, t, i) {
        return new r(e, t, i);
      }),
      r
    );
  })(),
  Ir = (function () {
    function r(e, t, i) {
      (this.modified = !0),
        V(e, "ref", [[gt, "PDFRef"]]),
        V(t, "doc", [[pi, "PDFDocument"]]),
        V(i, "embedder", [
          [rc, "CustomFontEmbedder"],
          [al, "StandardFontEmbedder"],
        ]),
        (this.ref = e),
        (this.doc = t),
        (this.name = i.fontName),
        (this.embedder = i);
    }
    return (
      (r.prototype.encodeText = function (e) {
        return (
          V(e, "text", ["string"]),
          (this.modified = !0),
          this.embedder.encodeText(e)
        );
      }),
      (r.prototype.widthOfTextAtSize = function (e, t) {
        return (
          V(e, "text", ["string"]),
          V(t, "size", ["number"]),
          this.embedder.widthOfTextAtSize(e, t)
        );
      }),
      (r.prototype.heightAtSize = function (e, t) {
        var i;
        return (
          V(e, "size", ["number"]),
          pe(t == null ? void 0 : t.descender, "options.descender", [
            "boolean",
          ]),
          this.embedder.heightOfFontAtSize(e, {
            descender:
              (i = t == null ? void 0 : t.descender) !== null && i !== void 0
                ? i
                : !0,
          })
        );
      }),
      (r.prototype.sizeAtHeight = function (e) {
        return V(e, "height", ["number"]), this.embedder.sizeOfFontAtHeight(e);
      }),
      (r.prototype.getCharacterSet = function () {
        return this.embedder instanceof al
          ? this.embedder.encoding.supportedCodePoints
          : this.embedder.font.characterSet;
      }),
      (r.prototype.embed = function () {
        return _e(this, void 0, void 0, function () {
          return $e(this, function (e) {
            switch (e.label) {
              case 0:
                return this.modified
                  ? [
                      4,
                      this.embedder.embedIntoContext(
                        this.doc.context,
                        this.ref
                      ),
                    ]
                  : [3, 2];
              case 1:
                e.sent(), (this.modified = !1), (e.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (r.of = function (e, t, i) {
        return new r(e, t, i);
      }),
      r
    );
  })(),
  qf = (function () {
    function r(e, t, i) {
      V(e, "ref", [[gt, "PDFRef"]]),
        V(t, "doc", [[pi, "PDFDocument"]]),
        V(i, "embedder", [
          [xp, "JpegEmbedder"],
          [wp, "PngEmbedder"],
        ]),
        (this.ref = e),
        (this.doc = t),
        (this.width = i.width),
        (this.height = i.height),
        (this.embedder = i);
    }
    return (
      (r.prototype.scale = function (e) {
        return (
          V(e, "factor", ["number"]),
          { width: this.width * e, height: this.height * e }
        );
      }),
      (r.prototype.scaleToFit = function (e, t) {
        V(e, "width", ["number"]), V(t, "height", ["number"]);
        var i = e / this.width,
          a = t / this.height,
          u = Math.min(i, a);
        return this.scale(u);
      }),
      (r.prototype.size = function () {
        return this.scale(1);
      }),
      (r.prototype.embed = function () {
        return _e(this, void 0, void 0, function () {
          var e, t, i;
          return $e(this, function (a) {
            switch (a.label) {
              case 0:
                return this.embedder
                  ? (this.embedTask ||
                      ((e = this),
                      (t = e.doc),
                      (i = e.ref),
                      (this.embedTask = this.embedder.embedIntoContext(
                        t.context,
                        i
                      ))),
                    [4, this.embedTask])
                  : [2];
              case 1:
                return a.sent(), (this.embedder = void 0), [2];
            }
          });
        });
      }),
      (r.of = function (e, t, i) {
        return new r(e, t, i);
      }),
      r
    );
  })(),
  fi;
(function (r) {
  (r[(r.Left = 0)] = "Left"),
    (r[(r.Center = 1)] = "Center"),
    (r[(r.Right = 2)] = "Right");
})(fi || (fi = {}));
var bo = function (r) {
    pe(r == null ? void 0 : r.x, "options.x", ["number"]),
      pe(r == null ? void 0 : r.y, "options.y", ["number"]),
      pe(r == null ? void 0 : r.width, "options.width", ["number"]),
      pe(r == null ? void 0 : r.height, "options.height", ["number"]),
      pe(r == null ? void 0 : r.textColor, "options.textColor", [
        [Object, "Color"],
      ]),
      pe(r == null ? void 0 : r.backgroundColor, "options.backgroundColor", [
        [Object, "Color"],
      ]),
      pe(r == null ? void 0 : r.borderColor, "options.borderColor", [
        [Object, "Color"],
      ]),
      pe(r == null ? void 0 : r.borderWidth, "options.borderWidth", ["number"]),
      pe(r == null ? void 0 : r.rotate, "options.rotate", [
        [Object, "Rotation"],
      ]);
  },
  Ii = (function () {
    function r(e, t, i) {
      V(e, "acroField", [[xo, "PDFAcroTerminal"]]),
        V(t, "ref", [[gt, "PDFRef"]]),
        V(i, "doc", [[pi, "PDFDocument"]]),
        (this.acroField = e),
        (this.ref = t),
        (this.doc = i);
    }
    return (
      (r.prototype.getName = function () {
        var e;
        return (e = this.acroField.getFullyQualifiedName()) !== null &&
          e !== void 0
          ? e
          : "";
      }),
      (r.prototype.isReadOnly = function () {
        return this.acroField.hasFlag(pn.ReadOnly);
      }),
      (r.prototype.enableReadOnly = function () {
        this.acroField.setFlagTo(pn.ReadOnly, !0);
      }),
      (r.prototype.disableReadOnly = function () {
        this.acroField.setFlagTo(pn.ReadOnly, !1);
      }),
      (r.prototype.isRequired = function () {
        return this.acroField.hasFlag(pn.Required);
      }),
      (r.prototype.enableRequired = function () {
        this.acroField.setFlagTo(pn.Required, !0);
      }),
      (r.prototype.disableRequired = function () {
        this.acroField.setFlagTo(pn.Required, !1);
      }),
      (r.prototype.isExported = function () {
        return !this.acroField.hasFlag(pn.NoExport);
      }),
      (r.prototype.enableExporting = function () {
        this.acroField.setFlagTo(pn.NoExport, !1);
      }),
      (r.prototype.disableExporting = function () {
        this.acroField.setFlagTo(pn.NoExport, !0);
      }),
      (r.prototype.needsAppearancesUpdate = function () {
        throw new Jr(this.constructor.name, "needsAppearancesUpdate");
      }),
      (r.prototype.defaultUpdateAppearances = function (e) {
        throw new Jr(this.constructor.name, "defaultUpdateAppearances");
      }),
      (r.prototype.markAsDirty = function () {
        this.doc.getForm().markFieldAsDirty(this.ref);
      }),
      (r.prototype.markAsClean = function () {
        this.doc.getForm().markFieldAsClean(this.ref);
      }),
      (r.prototype.isDirty = function () {
        return this.doc.getForm().fieldIsDirty(this.ref);
      }),
      (r.prototype.createWidget = function (e) {
        var t,
          i = e.textColor,
          a = e.backgroundColor,
          u = e.borderColor,
          s = e.borderWidth,
          c = Np(e.rotate),
          d = e.caption,
          h = e.x,
          y = e.y,
          m = e.width + s,
          x = e.height + s,
          w = !!e.hidden,
          F = e.page;
        dp(c, "degreesAngle", 90);
        var E = Lf.create(this.doc.context, this.ref),
          R = g1({ x: h, y, width: m, height: x }, s, c);
        E.setRectangle(R), F && E.setP(F);
        var D = E.getOrCreateAppearanceCharacteristics();
        a && D.setBackgroundColor(W0(a)),
          D.setRotation(c),
          d && D.setCaptions({ normal: d }),
          u && D.setBorderColor(W0(u));
        var L = E.getOrCreateBorderStyle();
        if (
          (s !== void 0 && L.setWidth(s),
          E.setFlagTo(Sa.Print, !0),
          E.setFlagTo(Sa.Hidden, w),
          E.setFlagTo(Sa.Invisible, !1),
          i)
        ) {
          var N =
              (t = this.acroField.getDefaultAppearance()) !== null &&
              t !== void 0
                ? t
                : "",
            q =
              N +
              `
` +
              Bi(i).toString();
          this.acroField.setDefaultAppearance(q);
        }
        return E;
      }),
      (r.prototype.updateWidgetAppearanceWithFont = function (e, t, i) {
        var a = i.normal,
          u = i.rollover,
          s = i.down;
        this.updateWidgetAppearances(e, {
          normal: this.createAppearanceStream(e, a, t),
          rollover: u && this.createAppearanceStream(e, u, t),
          down: s && this.createAppearanceStream(e, s, t),
        });
      }),
      (r.prototype.updateOnOffWidgetAppearance = function (e, t, i) {
        var a = i.normal,
          u = i.rollover,
          s = i.down;
        this.updateWidgetAppearances(e, {
          normal: this.createAppearanceDict(e, a, t),
          rollover: u && this.createAppearanceDict(e, u, t),
          down: s && this.createAppearanceDict(e, s, t),
        });
      }),
      (r.prototype.updateWidgetAppearances = function (e, t) {
        var i = t.normal,
          a = t.rollover,
          u = t.down;
        e.setNormalAppearance(i),
          a ? e.setRolloverAppearance(a) : e.removeRolloverAppearance(),
          u ? e.setDownAppearance(u) : e.removeDownAppearance();
      }),
      (r.prototype.createAppearanceStream = function (e, t, i) {
        var a,
          u = this.acroField.dict.context,
          s = e.getRectangle(),
          c = s.width,
          d = s.height,
          h = i && { Font: ((a = {}), (a[i.name] = i.ref), a) },
          y = u.formXObject(t, {
            Resources: h,
            BBox: u.obj([0, 0, c, d]),
            Matrix: u.obj([1, 0, 0, 1, 0, 0]),
          }),
          m = u.register(y);
        return m;
      }),
      (r.prototype.createImageAppearanceStream = function (e, t, i) {
        var a,
          u,
          s = this.acroField.dict.context,
          c = e.getRectangle(),
          d = e.getAppearanceCharacteristics(),
          h = e.getBorderStyle(),
          y =
            (u = h == null ? void 0 : h.getWidth()) !== null && u !== void 0
              ? u
              : 0,
          m = Un(d == null ? void 0 : d.getRotation()),
          x = yi(Ze(Ze({}, c), { rotation: m })),
          w = Ni(c, m),
          F = t.scaleToFit(w.width - y * 2, w.height - y * 2),
          E = {
            x: y,
            y,
            width: F.width,
            height: F.height,
            rotate: We(0),
            xSkew: We(0),
            ySkew: We(0),
          };
        i === fi.Center
          ? ((E.x += (w.width - y * 2) / 2 - F.width / 2),
            (E.y += (w.height - y * 2) / 2 - F.height / 2))
          : i === fi.Right &&
            ((E.x = w.width - y - F.width), (E.y = w.height - y - F.height));
        var R = this.doc.context.addRandomSuffix("Image", 10),
          D = lt(x, Hp(R, E)),
          L = { XObject: ((a = {}), (a[R] = t.ref), a) },
          N = s.formXObject(D, {
            Resources: L,
            BBox: s.obj([0, 0, c.width, c.height]),
            Matrix: s.obj([1, 0, 0, 1, 0, 0]),
          });
        return s.register(N);
      }),
      (r.prototype.createAppearanceDict = function (e, t, i) {
        var a = this.acroField.dict.context,
          u = this.createAppearanceStream(e, t.on),
          s = this.createAppearanceStream(e, t.off),
          c = a.obj({});
        return c.set(i, u), c.set(P.of("Off"), s), c;
      }),
      r
    );
  })(),
  va = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = r.call(this, t, i, a) || this;
      return (
        V(t, "acroCheckBox", [[Sl, "PDFAcroCheckBox"]]), (u.acroField = t), u
      );
    }
    return (
      (e.prototype.check = function () {
        var t,
          i =
            (t = this.acroField.getOnValue()) !== null && t !== void 0
              ? t
              : P.of("Yes");
        this.markAsDirty(), this.acroField.setValue(i);
      }),
      (e.prototype.uncheck = function () {
        this.markAsDirty(), this.acroField.setValue(P.of("Off"));
      }),
      (e.prototype.isChecked = function () {
        var t = this.acroField.getOnValue();
        return !!t && t === this.acroField.getValue();
      }),
      (e.prototype.addToPage = function (t, i) {
        var a, u, s, c, d, h;
        V(t, "page", [[Qr, "PDFPage"]]),
          bo(i),
          i || (i = {}),
          "textColor" in i || (i.textColor = yt(0, 0, 0)),
          "backgroundColor" in i || (i.backgroundColor = yt(1, 1, 1)),
          "borderColor" in i || (i.borderColor = yt(0, 0, 0)),
          "borderWidth" in i || (i.borderWidth = 1);
        var y = this.createWidget({
            x: (a = i.x) !== null && a !== void 0 ? a : 0,
            y: (u = i.y) !== null && u !== void 0 ? u : 0,
            width: (s = i.width) !== null && s !== void 0 ? s : 50,
            height: (c = i.height) !== null && c !== void 0 ? c : 50,
            textColor: i.textColor,
            backgroundColor: i.backgroundColor,
            borderColor: i.borderColor,
            borderWidth: (d = i.borderWidth) !== null && d !== void 0 ? d : 0,
            rotate: (h = i.rotate) !== null && h !== void 0 ? h : We(0),
            hidden: i.hidden,
            page: t.ref,
          }),
          m = this.doc.context.register(y.dict);
        this.acroField.addWidget(m),
          y.setAppearanceState(P.of("Off")),
          this.updateWidgetAppearance(y, P.of("Yes")),
          t.node.addAnnot(m);
      }),
      (e.prototype.needsAppearancesUpdate = function () {
        for (
          var t, i = this.acroField.getWidgets(), a = 0, u = i.length;
          a < u;
          a++
        ) {
          var s = i[a],
            c = s.getAppearanceState(),
            d =
              (t = s.getAppearances()) === null || t === void 0
                ? void 0
                : t.normal;
          if (!(d instanceof Qe) || (c && !d.has(c))) return !0;
        }
        return !1;
      }),
      (e.prototype.defaultUpdateAppearances = function () {
        this.updateAppearances();
      }),
      (e.prototype.updateAppearances = function (t) {
        var i;
        pe(t, "provider", [Function]);
        for (
          var a = this.acroField.getWidgets(), u = 0, s = a.length;
          u < s;
          u++
        ) {
          var c = a[u],
            d = (i = c.getOnValue()) !== null && i !== void 0 ? i : P.of("Yes");
          d && this.updateWidgetAppearance(c, d, t);
        }
        this.markAsClean();
      }),
      (e.prototype.updateWidgetAppearance = function (t, i, a) {
        var u = a ?? tx,
          s = So(u(this, t));
        this.updateOnOffWidgetAppearance(t, i, s);
      }),
      (e.of = function (t, i, a) {
        return new e(t, i, a);
      }),
      e
    );
  })(Ii),
  $u = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = r.call(this, t, i, a) || this;
      return (
        V(t, "acroComboBox", [[bl, "PDFAcroComboBox"]]), (u.acroField = t), u
      );
    }
    return (
      (e.prototype.getOptions = function () {
        for (
          var t = this.acroField.getOptions(),
            i = new Array(t.length),
            a = 0,
            u = i.length;
          a < u;
          a++
        ) {
          var s = t[a],
            c = s.display,
            d = s.value;
          i[a] = (c ?? d).decodeText();
        }
        return i;
      }),
      (e.prototype.getSelected = function () {
        for (
          var t = this.acroField.getValues(),
            i = new Array(t.length),
            a = 0,
            u = t.length;
          a < u;
          a++
        )
          i[a] = t[a].decodeText();
        return i;
      }),
      (e.prototype.setOptions = function (t) {
        V(t, "options", [Array]);
        for (var i = new Array(t.length), a = 0, u = t.length; a < u; a++)
          i[a] = { value: Ve.fromText(t[a]) };
        this.acroField.setOptions(i);
      }),
      (e.prototype.addOptions = function (t) {
        V(t, "options", ["string", Array]);
        for (
          var i = Array.isArray(t) ? t : [t],
            a = this.acroField.getOptions(),
            u = new Array(i.length),
            s = 0,
            c = i.length;
          s < c;
          s++
        )
          u[s] = { value: Ve.fromText(i[s]) };
        this.acroField.setOptions(a.concat(u));
      }),
      (e.prototype.select = function (t, i) {
        i === void 0 && (i = !1),
          V(t, "options", ["string", Array]),
          V(i, "merge", ["boolean"]);
        var a = Array.isArray(t) ? t : [t],
          u = this.getOptions(),
          s = a.find(function (m) {
            return !u.includes(m);
          });
        s && this.enableEditing(),
          this.markAsDirty(),
          (a.length > 1 || (a.length === 1 && i)) && this.enableMultiselect();
        for (var c = new Array(a.length), d = 0, h = a.length; d < h; d++)
          c[d] = Ve.fromText(a[d]);
        if (i) {
          var y = this.acroField.getValues();
          this.acroField.setValues(y.concat(c));
        } else this.acroField.setValues(c);
      }),
      (e.prototype.clear = function () {
        this.markAsDirty(), this.acroField.setValues([]);
      }),
      (e.prototype.setFontSize = function (t) {
        xl(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
      }),
      (e.prototype.isEditable = function () {
        return this.acroField.hasFlag(pt.Edit);
      }),
      (e.prototype.enableEditing = function () {
        this.acroField.setFlagTo(pt.Edit, !0);
      }),
      (e.prototype.disableEditing = function () {
        this.acroField.setFlagTo(pt.Edit, !1);
      }),
      (e.prototype.isSorted = function () {
        return this.acroField.hasFlag(pt.Sort);
      }),
      (e.prototype.enableSorting = function () {
        this.acroField.setFlagTo(pt.Sort, !0);
      }),
      (e.prototype.disableSorting = function () {
        this.acroField.setFlagTo(pt.Sort, !1);
      }),
      (e.prototype.isMultiselect = function () {
        return this.acroField.hasFlag(pt.MultiSelect);
      }),
      (e.prototype.enableMultiselect = function () {
        this.acroField.setFlagTo(pt.MultiSelect, !0);
      }),
      (e.prototype.disableMultiselect = function () {
        this.acroField.setFlagTo(pt.MultiSelect, !1);
      }),
      (e.prototype.isSpellChecked = function () {
        return !this.acroField.hasFlag(pt.DoNotSpellCheck);
      }),
      (e.prototype.enableSpellChecking = function () {
        this.acroField.setFlagTo(pt.DoNotSpellCheck, !1);
      }),
      (e.prototype.disableSpellChecking = function () {
        this.acroField.setFlagTo(pt.DoNotSpellCheck, !0);
      }),
      (e.prototype.isSelectOnClick = function () {
        return this.acroField.hasFlag(pt.CommitOnSelChange);
      }),
      (e.prototype.enableSelectOnClick = function () {
        this.acroField.setFlagTo(pt.CommitOnSelChange, !0);
      }),
      (e.prototype.disableSelectOnClick = function () {
        this.acroField.setFlagTo(pt.CommitOnSelChange, !1);
      }),
      (e.prototype.addToPage = function (t, i) {
        var a, u, s, c, d, h, y;
        V(t, "page", [[Qr, "PDFPage"]]),
          bo(i),
          i || (i = {}),
          "textColor" in i || (i.textColor = yt(0, 0, 0)),
          "backgroundColor" in i || (i.backgroundColor = yt(1, 1, 1)),
          "borderColor" in i || (i.borderColor = yt(0, 0, 0)),
          "borderWidth" in i || (i.borderWidth = 1);
        var m = this.createWidget({
            x: (a = i.x) !== null && a !== void 0 ? a : 0,
            y: (u = i.y) !== null && u !== void 0 ? u : 0,
            width: (s = i.width) !== null && s !== void 0 ? s : 200,
            height: (c = i.height) !== null && c !== void 0 ? c : 50,
            textColor: i.textColor,
            backgroundColor: i.backgroundColor,
            borderColor: i.borderColor,
            borderWidth: (d = i.borderWidth) !== null && d !== void 0 ? d : 0,
            rotate: (h = i.rotate) !== null && h !== void 0 ? h : We(0),
            hidden: i.hidden,
            page: t.ref,
          }),
          x = this.doc.context.register(m.dict);
        this.acroField.addWidget(x);
        var w =
          (y = i.font) !== null && y !== void 0
            ? y
            : this.doc.getForm().getDefaultFont();
        this.updateWidgetAppearance(m, w), t.node.addAnnot(x);
      }),
      (e.prototype.needsAppearancesUpdate = function () {
        var t;
        if (this.isDirty()) return !0;
        for (
          var i = this.acroField.getWidgets(), a = 0, u = i.length;
          a < u;
          a++
        ) {
          var s = i[a],
            c =
              ((t = s.getAppearances()) === null || t === void 0
                ? void 0
                : t.normal) instanceof Br;
          if (!c) return !0;
        }
        return !1;
      }),
      (e.prototype.defaultUpdateAppearances = function (t) {
        V(t, "font", [[Ir, "PDFFont"]]), this.updateAppearances(t);
      }),
      (e.prototype.updateAppearances = function (t, i) {
        V(t, "font", [[Ir, "PDFFont"]]), pe(i, "provider", [Function]);
        for (
          var a = this.acroField.getWidgets(), u = 0, s = a.length;
          u < s;
          u++
        ) {
          var c = a[u];
          this.updateWidgetAppearance(c, t, i);
        }
        this.markAsClean();
      }),
      (e.prototype.updateWidgetAppearance = function (t, i, a) {
        var u = a ?? ox,
          s = So(u(this, t, i));
        this.updateWidgetAppearanceWithFont(t, i, s);
      }),
      (e.of = function (t, i, a) {
        return new e(t, i, a);
      }),
      e
    );
  })(Ii),
  el = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = r.call(this, t, i, a) || this;
      return (
        V(t, "acroListBox", [[Pl, "PDFAcroListBox"]]), (u.acroField = t), u
      );
    }
    return (
      (e.prototype.getOptions = function () {
        for (
          var t = this.acroField.getOptions(),
            i = new Array(t.length),
            a = 0,
            u = i.length;
          a < u;
          a++
        ) {
          var s = t[a],
            c = s.display,
            d = s.value;
          i[a] = (c ?? d).decodeText();
        }
        return i;
      }),
      (e.prototype.getSelected = function () {
        for (
          var t = this.acroField.getValues(),
            i = new Array(t.length),
            a = 0,
            u = t.length;
          a < u;
          a++
        )
          i[a] = t[a].decodeText();
        return i;
      }),
      (e.prototype.setOptions = function (t) {
        V(t, "options", [Array]), this.markAsDirty();
        for (var i = new Array(t.length), a = 0, u = t.length; a < u; a++)
          i[a] = { value: Ve.fromText(t[a]) };
        this.acroField.setOptions(i);
      }),
      (e.prototype.addOptions = function (t) {
        V(t, "options", ["string", Array]), this.markAsDirty();
        for (
          var i = Array.isArray(t) ? t : [t],
            a = this.acroField.getOptions(),
            u = new Array(i.length),
            s = 0,
            c = i.length;
          s < c;
          s++
        )
          u[s] = { value: Ve.fromText(i[s]) };
        this.acroField.setOptions(a.concat(u));
      }),
      (e.prototype.select = function (t, i) {
        i === void 0 && (i = !1),
          V(t, "options", ["string", Array]),
          V(i, "merge", ["boolean"]);
        var a = Array.isArray(t) ? t : [t],
          u = this.getOptions();
        im(a, "option", u),
          this.markAsDirty(),
          (a.length > 1 || (a.length === 1 && i)) && this.enableMultiselect();
        for (var s = new Array(a.length), c = 0, d = a.length; c < d; c++)
          s[c] = Ve.fromText(a[c]);
        if (i) {
          var h = this.acroField.getValues();
          this.acroField.setValues(h.concat(s));
        } else this.acroField.setValues(s);
      }),
      (e.prototype.clear = function () {
        this.markAsDirty(), this.acroField.setValues([]);
      }),
      (e.prototype.setFontSize = function (t) {
        xl(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
      }),
      (e.prototype.isSorted = function () {
        return this.acroField.hasFlag(pt.Sort);
      }),
      (e.prototype.enableSorting = function () {
        this.acroField.setFlagTo(pt.Sort, !0);
      }),
      (e.prototype.disableSorting = function () {
        this.acroField.setFlagTo(pt.Sort, !1);
      }),
      (e.prototype.isMultiselect = function () {
        return this.acroField.hasFlag(pt.MultiSelect);
      }),
      (e.prototype.enableMultiselect = function () {
        this.acroField.setFlagTo(pt.MultiSelect, !0);
      }),
      (e.prototype.disableMultiselect = function () {
        this.acroField.setFlagTo(pt.MultiSelect, !1);
      }),
      (e.prototype.isSelectOnClick = function () {
        return this.acroField.hasFlag(pt.CommitOnSelChange);
      }),
      (e.prototype.enableSelectOnClick = function () {
        this.acroField.setFlagTo(pt.CommitOnSelChange, !0);
      }),
      (e.prototype.disableSelectOnClick = function () {
        this.acroField.setFlagTo(pt.CommitOnSelChange, !1);
      }),
      (e.prototype.addToPage = function (t, i) {
        var a, u, s, c, d, h, y;
        V(t, "page", [[Qr, "PDFPage"]]),
          bo(i),
          i || (i = {}),
          "textColor" in i || (i.textColor = yt(0, 0, 0)),
          "backgroundColor" in i || (i.backgroundColor = yt(1, 1, 1)),
          "borderColor" in i || (i.borderColor = yt(0, 0, 0)),
          "borderWidth" in i || (i.borderWidth = 1);
        var m = this.createWidget({
            x: (a = i.x) !== null && a !== void 0 ? a : 0,
            y: (u = i.y) !== null && u !== void 0 ? u : 0,
            width: (s = i.width) !== null && s !== void 0 ? s : 200,
            height: (c = i.height) !== null && c !== void 0 ? c : 100,
            textColor: i.textColor,
            backgroundColor: i.backgroundColor,
            borderColor: i.borderColor,
            borderWidth: (d = i.borderWidth) !== null && d !== void 0 ? d : 0,
            rotate: (h = i.rotate) !== null && h !== void 0 ? h : We(0),
            hidden: i.hidden,
            page: t.ref,
          }),
          x = this.doc.context.register(m.dict);
        this.acroField.addWidget(x);
        var w =
          (y = i.font) !== null && y !== void 0
            ? y
            : this.doc.getForm().getDefaultFont();
        this.updateWidgetAppearance(m, w), t.node.addAnnot(x);
      }),
      (e.prototype.needsAppearancesUpdate = function () {
        var t;
        if (this.isDirty()) return !0;
        for (
          var i = this.acroField.getWidgets(), a = 0, u = i.length;
          a < u;
          a++
        ) {
          var s = i[a],
            c =
              ((t = s.getAppearances()) === null || t === void 0
                ? void 0
                : t.normal) instanceof Br;
          if (!c) return !0;
        }
        return !1;
      }),
      (e.prototype.defaultUpdateAppearances = function (t) {
        V(t, "font", [[Ir, "PDFFont"]]), this.updateAppearances(t);
      }),
      (e.prototype.updateAppearances = function (t, i) {
        V(t, "font", [[Ir, "PDFFont"]]), pe(i, "provider", [Function]);
        for (
          var a = this.acroField.getWidgets(), u = 0, s = a.length;
          u < s;
          u++
        ) {
          var c = a[u];
          this.updateWidgetAppearance(c, t, i);
        }
        this.markAsClean();
      }),
      (e.prototype.updateWidgetAppearance = function (t, i, a) {
        var u = a ?? ax,
          s = So(u(this, t, i));
        this.updateWidgetAppearanceWithFont(t, i, s);
      }),
      (e.of = function (t, i, a) {
        return new e(t, i, a);
      }),
      e
    );
  })(Ii),
  ga = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = r.call(this, t, i, a) || this;
      return (
        V(t, "acroRadioButton", [[Cl, "PDFAcroRadioButton"]]),
        (u.acroField = t),
        u
      );
    }
    return (
      (e.prototype.getOptions = function () {
        var t = this.acroField.getExportValues();
        if (t) {
          for (var i = new Array(t.length), a = 0, u = t.length; a < u; a++)
            i[a] = t[a].decodeText();
          return i;
        }
        for (
          var s = this.acroField.getOnValues(),
            c = new Array(s.length),
            a = 0,
            u = c.length;
          a < u;
          a++
        )
          c[a] = s[a].decodeText();
        return c;
      }),
      (e.prototype.getSelected = function () {
        var t = this.acroField.getValue();
        if (t !== P.of("Off")) {
          var i = this.acroField.getExportValues();
          if (i) {
            for (
              var a = this.acroField.getOnValues(), u = 0, s = a.length;
              u < s;
              u++
            )
              if (a[u] === t) return i[u].decodeText();
          }
          return t.decodeText();
        }
      }),
      (e.prototype.select = function (t) {
        V(t, "option", ["string"]);
        var i = this.getOptions();
        li(t, "option", i), this.markAsDirty();
        var a = this.acroField.getOnValues(),
          u = this.acroField.getExportValues();
        if (u)
          for (var s = 0, c = u.length; s < c; s++)
            u[s].decodeText() === t && this.acroField.setValue(a[s]);
        else
          for (var s = 0, c = a.length; s < c; s++) {
            var d = a[s];
            d.decodeText() === t && this.acroField.setValue(d);
          }
      }),
      (e.prototype.clear = function () {
        this.markAsDirty(), this.acroField.setValue(P.of("Off"));
      }),
      (e.prototype.isOffToggleable = function () {
        return !this.acroField.hasFlag(Yr.NoToggleToOff);
      }),
      (e.prototype.enableOffToggling = function () {
        this.acroField.setFlagTo(Yr.NoToggleToOff, !1);
      }),
      (e.prototype.disableOffToggling = function () {
        this.acroField.setFlagTo(Yr.NoToggleToOff, !0);
      }),
      (e.prototype.isMutuallyExclusive = function () {
        return !this.acroField.hasFlag(Yr.RadiosInUnison);
      }),
      (e.prototype.enableMutualExclusion = function () {
        this.acroField.setFlagTo(Yr.RadiosInUnison, !1);
      }),
      (e.prototype.disableMutualExclusion = function () {
        this.acroField.setFlagTo(Yr.RadiosInUnison, !0);
      }),
      (e.prototype.addOptionToPage = function (t, i, a) {
        var u, s, c, d, h, y, m, x, w;
        V(t, "option", ["string"]), V(i, "page", [[Qr, "PDFPage"]]), bo(a);
        var F = this.createWidget({
            x: (u = a == null ? void 0 : a.x) !== null && u !== void 0 ? u : 0,
            y: (s = a == null ? void 0 : a.y) !== null && s !== void 0 ? s : 0,
            width:
              (c = a == null ? void 0 : a.width) !== null && c !== void 0
                ? c
                : 50,
            height:
              (d = a == null ? void 0 : a.height) !== null && d !== void 0
                ? d
                : 50,
            textColor:
              (h = a == null ? void 0 : a.textColor) !== null && h !== void 0
                ? h
                : yt(0, 0, 0),
            backgroundColor:
              (y = a == null ? void 0 : a.backgroundColor) !== null &&
              y !== void 0
                ? y
                : yt(1, 1, 1),
            borderColor:
              (m = a == null ? void 0 : a.borderColor) !== null && m !== void 0
                ? m
                : yt(0, 0, 0),
            borderWidth:
              (x = a == null ? void 0 : a.borderWidth) !== null && x !== void 0
                ? x
                : 1,
            rotate:
              (w = a == null ? void 0 : a.rotate) !== null && w !== void 0
                ? w
                : We(0),
            hidden: a == null ? void 0 : a.hidden,
            page: i.ref,
          }),
          E = this.doc.context.register(F.dict),
          R = this.acroField.addWidgetWithOpt(
            E,
            Ve.fromText(t),
            !this.isMutuallyExclusive()
          );
        F.setAppearanceState(P.of("Off")),
          this.updateWidgetAppearance(F, R),
          i.node.addAnnot(E);
      }),
      (e.prototype.needsAppearancesUpdate = function () {
        for (
          var t, i = this.acroField.getWidgets(), a = 0, u = i.length;
          a < u;
          a++
        ) {
          var s = i[a],
            c = s.getAppearanceState(),
            d =
              (t = s.getAppearances()) === null || t === void 0
                ? void 0
                : t.normal;
          if (!(d instanceof Qe) || (c && !d.has(c))) return !0;
        }
        return !1;
      }),
      (e.prototype.defaultUpdateAppearances = function () {
        this.updateAppearances();
      }),
      (e.prototype.updateAppearances = function (t) {
        pe(t, "provider", [Function]);
        for (
          var i = this.acroField.getWidgets(), a = 0, u = i.length;
          a < u;
          a++
        ) {
          var s = i[a],
            c = s.getOnValue();
          c && this.updateWidgetAppearance(s, c, t);
        }
      }),
      (e.prototype.updateWidgetAppearance = function (t, i, a) {
        var u = a ?? rx,
          s = So(u(this, t));
        this.updateOnOffWidgetAppearance(t, i, s);
      }),
      (e.of = function (t, i, a) {
        return new e(t, i, a);
      }),
      e
    );
  })(Ii),
  Kf = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = r.call(this, t, i, a) || this;
      return (
        V(t, "acroSignature", [[ic, "PDFAcroSignature"]]), (u.acroField = t), u
      );
    }
    return (
      (e.prototype.needsAppearancesUpdate = function () {
        return !1;
      }),
      (e.of = function (t, i, a) {
        return new e(t, i, a);
      }),
      e
    );
  })(Ii),
  tl = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = r.call(this, t, i, a) || this;
      return V(t, "acroText", [[kl, "PDFAcroText"]]), (u.acroField = t), u;
    }
    return (
      (e.prototype.getText = function () {
        var t = this.acroField.getValue();
        if (!t && this.isRichFormatted()) throw new H1(this.getName());
        return t == null ? void 0 : t.decodeText();
      }),
      (e.prototype.setText = function (t) {
        pe(t, "text", ["string"]);
        var i = this.getMaxLength();
        if (i !== void 0 && t && t.length > i)
          throw new X1(t.length, i, this.getName());
        this.markAsDirty(),
          this.disableRichFormatting(),
          t
            ? this.acroField.setValue(Ve.fromText(t))
            : this.acroField.removeValue();
      }),
      (e.prototype.getAlignment = function () {
        var t = this.acroField.getQuadding();
        return t === 0
          ? Ht.Left
          : t === 1
          ? Ht.Center
          : t === 2
          ? Ht.Right
          : Ht.Left;
      }),
      (e.prototype.setAlignment = function (t) {
        li(t, "alignment", Ht),
          this.markAsDirty(),
          this.acroField.setQuadding(t);
      }),
      (e.prototype.getMaxLength = function () {
        return this.acroField.getMaxLength();
      }),
      (e.prototype.setMaxLength = function (t) {
        if (
          (hn(t, "maxLength", 0, Number.MAX_SAFE_INTEGER),
          this.markAsDirty(),
          t === void 0)
        )
          this.acroField.removeMaxLength();
        else {
          var i = this.getText();
          if (i && i.length > t) throw new Z1(i.length, t, this.getName());
          this.acroField.setMaxLength(t);
        }
      }),
      (e.prototype.removeMaxLength = function () {
        this.markAsDirty(), this.acroField.removeMaxLength();
      }),
      (e.prototype.setImage = function (t) {
        for (
          var i = this.getAlignment(),
            a =
              i === Ht.Center ? fi.Center : i === Ht.Right ? fi.Right : fi.Left,
            u = this.acroField.getWidgets(),
            s = 0,
            c = u.length;
          s < c;
          s++
        ) {
          var d = u[s],
            h = this.createImageAppearanceStream(d, t, a);
          this.updateWidgetAppearances(d, { normal: h });
        }
        this.markAsClean();
      }),
      (e.prototype.setFontSize = function (t) {
        xl(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
      }),
      (e.prototype.isMultiline = function () {
        return this.acroField.hasFlag(Rt.Multiline);
      }),
      (e.prototype.enableMultiline = function () {
        this.markAsDirty(), this.acroField.setFlagTo(Rt.Multiline, !0);
      }),
      (e.prototype.disableMultiline = function () {
        this.markAsDirty(), this.acroField.setFlagTo(Rt.Multiline, !1);
      }),
      (e.prototype.isPassword = function () {
        return this.acroField.hasFlag(Rt.Password);
      }),
      (e.prototype.enablePassword = function () {
        this.acroField.setFlagTo(Rt.Password, !0);
      }),
      (e.prototype.disablePassword = function () {
        this.acroField.setFlagTo(Rt.Password, !1);
      }),
      (e.prototype.isFileSelector = function () {
        return this.acroField.hasFlag(Rt.FileSelect);
      }),
      (e.prototype.enableFileSelection = function () {
        this.acroField.setFlagTo(Rt.FileSelect, !0);
      }),
      (e.prototype.disableFileSelection = function () {
        this.acroField.setFlagTo(Rt.FileSelect, !1);
      }),
      (e.prototype.isSpellChecked = function () {
        return !this.acroField.hasFlag(Rt.DoNotSpellCheck);
      }),
      (e.prototype.enableSpellChecking = function () {
        this.acroField.setFlagTo(Rt.DoNotSpellCheck, !1);
      }),
      (e.prototype.disableSpellChecking = function () {
        this.acroField.setFlagTo(Rt.DoNotSpellCheck, !0);
      }),
      (e.prototype.isScrollable = function () {
        return !this.acroField.hasFlag(Rt.DoNotScroll);
      }),
      (e.prototype.enableScrolling = function () {
        this.acroField.setFlagTo(Rt.DoNotScroll, !1);
      }),
      (e.prototype.disableScrolling = function () {
        this.acroField.setFlagTo(Rt.DoNotScroll, !0);
      }),
      (e.prototype.isCombed = function () {
        return (
          this.acroField.hasFlag(Rt.Comb) &&
          !this.isMultiline() &&
          !this.isPassword() &&
          !this.isFileSelector() &&
          this.getMaxLength() !== void 0
        );
      }),
      (e.prototype.enableCombing = function () {
        if (this.getMaxLength() === void 0) {
          var t = "PDFTextFields must have a max length in order to be combed";
          console.warn(t);
        }
        this.markAsDirty(),
          this.disableMultiline(),
          this.disablePassword(),
          this.disableFileSelection(),
          this.acroField.setFlagTo(Rt.Comb, !0);
      }),
      (e.prototype.disableCombing = function () {
        this.markAsDirty(), this.acroField.setFlagTo(Rt.Comb, !1);
      }),
      (e.prototype.isRichFormatted = function () {
        return this.acroField.hasFlag(Rt.RichText);
      }),
      (e.prototype.enableRichFormatting = function () {
        this.acroField.setFlagTo(Rt.RichText, !0);
      }),
      (e.prototype.disableRichFormatting = function () {
        this.acroField.setFlagTo(Rt.RichText, !1);
      }),
      (e.prototype.addToPage = function (t, i) {
        var a, u, s, c, d, h, y;
        V(t, "page", [[Qr, "PDFPage"]]),
          bo(i),
          i || (i = {}),
          "textColor" in i || (i.textColor = yt(0, 0, 0)),
          "backgroundColor" in i || (i.backgroundColor = yt(1, 1, 1)),
          "borderColor" in i || (i.borderColor = yt(0, 0, 0)),
          "borderWidth" in i || (i.borderWidth = 1);
        var m = this.createWidget({
            x: (a = i.x) !== null && a !== void 0 ? a : 0,
            y: (u = i.y) !== null && u !== void 0 ? u : 0,
            width: (s = i.width) !== null && s !== void 0 ? s : 200,
            height: (c = i.height) !== null && c !== void 0 ? c : 50,
            textColor: i.textColor,
            backgroundColor: i.backgroundColor,
            borderColor: i.borderColor,
            borderWidth: (d = i.borderWidth) !== null && d !== void 0 ? d : 0,
            rotate: (h = i.rotate) !== null && h !== void 0 ? h : We(0),
            hidden: i.hidden,
            page: t.ref,
          }),
          x = this.doc.context.register(m.dict);
        this.acroField.addWidget(x);
        var w =
          (y = i.font) !== null && y !== void 0
            ? y
            : this.doc.getForm().getDefaultFont();
        this.updateWidgetAppearance(m, w), t.node.addAnnot(x);
      }),
      (e.prototype.needsAppearancesUpdate = function () {
        var t;
        if (this.isDirty()) return !0;
        for (
          var i = this.acroField.getWidgets(), a = 0, u = i.length;
          a < u;
          a++
        ) {
          var s = i[a],
            c =
              ((t = s.getAppearances()) === null || t === void 0
                ? void 0
                : t.normal) instanceof Br;
          if (!c) return !0;
        }
        return !1;
      }),
      (e.prototype.defaultUpdateAppearances = function (t) {
        V(t, "font", [[Ir, "PDFFont"]]), this.updateAppearances(t);
      }),
      (e.prototype.updateAppearances = function (t, i) {
        V(t, "font", [[Ir, "PDFFont"]]), pe(i, "provider", [Function]);
        for (
          var a = this.acroField.getWidgets(), u = 0, s = a.length;
          u < s;
          u++
        ) {
          var c = a[u];
          this.updateWidgetAppearance(c, t, i);
        }
        this.markAsClean();
      }),
      (e.prototype.updateWidgetAppearance = function (t, i, a) {
        var u = a ?? ix,
          s = So(u(this, t, i));
        this.updateWidgetAppearanceWithFont(t, i, s);
      }),
      (e.of = function (t, i, a) {
        return new e(t, i, a);
      }),
      e
    );
  })(Ii),
  vl;
(function (r) {
  (r.Courier = "Courier"),
    (r.CourierBold = "Courier-Bold"),
    (r.CourierOblique = "Courier-Oblique"),
    (r.CourierBoldOblique = "Courier-BoldOblique"),
    (r.Helvetica = "Helvetica"),
    (r.HelveticaBold = "Helvetica-Bold"),
    (r.HelveticaOblique = "Helvetica-Oblique"),
    (r.HelveticaBoldOblique = "Helvetica-BoldOblique"),
    (r.TimesRoman = "Times-Roman"),
    (r.TimesRomanBold = "Times-Bold"),
    (r.TimesRomanItalic = "Times-Italic"),
    (r.TimesRomanBoldItalic = "Times-BoldItalic"),
    (r.Symbol = "Symbol"),
    (r.ZapfDingbats = "ZapfDingbats");
})(vl || (vl = {}));
var ux = (function () {
    function r(e, t) {
      var i = this;
      (this.embedDefaultFont = function () {
        return i.doc.embedStandardFont(vl.Helvetica);
      }),
        V(e, "acroForm", [[sl, "PDFAcroForm"]]),
        V(t, "doc", [[pi, "PDFDocument"]]),
        (this.acroForm = e),
        (this.doc = t),
        (this.dirtyFields = new Set()),
        (this.defaultFontCache = Bn.populatedBy(this.embedDefaultFont));
    }
    return (
      (r.prototype.hasXFA = function () {
        return this.acroForm.dict.has(P.of("XFA"));
      }),
      (r.prototype.deleteXFA = function () {
        this.acroForm.dict.delete(P.of("XFA"));
      }),
      (r.prototype.getFields = function () {
        for (
          var e = this.acroForm.getAllFields(), t = [], i = 0, a = e.length;
          i < a;
          i++
        ) {
          var u = e[i],
            s = u[0],
            c = u[1],
            d = lx(s, c, this.doc);
          d && t.push(d);
        }
        return t;
      }),
      (r.prototype.getFieldMaybe = function (e) {
        V(e, "name", ["string"]);
        for (var t = this.getFields(), i = 0, a = t.length; i < a; i++) {
          var u = t[i];
          if (u.getName() === e) return u;
        }
      }),
      (r.prototype.getField = function (e) {
        V(e, "name", ["string"]);
        var t = this.getFieldMaybe(e);
        if (t) return t;
        throw new q1(e);
      }),
      (r.prototype.getButton = function (e) {
        V(e, "name", ["string"]);
        var t = this.getField(e);
        if (t instanceof rl) return t;
        throw new Ai(e, rl, t);
      }),
      (r.prototype.getCheckBox = function (e) {
        V(e, "name", ["string"]);
        var t = this.getField(e);
        if (t instanceof va) return t;
        throw new Ai(e, va, t);
      }),
      (r.prototype.getDropdown = function (e) {
        V(e, "name", ["string"]);
        var t = this.getField(e);
        if (t instanceof $u) return t;
        throw new Ai(e, $u, t);
      }),
      (r.prototype.getOptionList = function (e) {
        V(e, "name", ["string"]);
        var t = this.getField(e);
        if (t instanceof el) return t;
        throw new Ai(e, el, t);
      }),
      (r.prototype.getRadioGroup = function (e) {
        V(e, "name", ["string"]);
        var t = this.getField(e);
        if (t instanceof ga) return t;
        throw new Ai(e, ga, t);
      }),
      (r.prototype.getSignature = function (e) {
        V(e, "name", ["string"]);
        var t = this.getField(e);
        if (t instanceof Kf) return t;
        throw new Ai(e, Kf, t);
      }),
      (r.prototype.getTextField = function (e) {
        V(e, "name", ["string"]);
        var t = this.getField(e);
        if (t instanceof tl) return t;
        throw new Ai(e, tl, t);
      }),
      (r.prototype.createButton = function (e) {
        V(e, "name", ["string"]);
        var t = fo(e),
          i = this.findOrCreateNonTerminals(t.nonTerminal),
          a = Fl.create(this.doc.context);
        return (
          a.setPartialName(t.terminal),
          co(i, [a, a.ref], t.terminal),
          rl.of(a, a.ref, this.doc)
        );
      }),
      (r.prototype.createCheckBox = function (e) {
        V(e, "name", ["string"]);
        var t = fo(e),
          i = this.findOrCreateNonTerminals(t.nonTerminal),
          a = Sl.create(this.doc.context);
        return (
          a.setPartialName(t.terminal),
          co(i, [a, a.ref], t.terminal),
          va.of(a, a.ref, this.doc)
        );
      }),
      (r.prototype.createDropdown = function (e) {
        V(e, "name", ["string"]);
        var t = fo(e),
          i = this.findOrCreateNonTerminals(t.nonTerminal),
          a = bl.create(this.doc.context);
        return (
          a.setPartialName(t.terminal),
          co(i, [a, a.ref], t.terminal),
          $u.of(a, a.ref, this.doc)
        );
      }),
      (r.prototype.createOptionList = function (e) {
        V(e, "name", ["string"]);
        var t = fo(e),
          i = this.findOrCreateNonTerminals(t.nonTerminal),
          a = Pl.create(this.doc.context);
        return (
          a.setPartialName(t.terminal),
          co(i, [a, a.ref], t.terminal),
          el.of(a, a.ref, this.doc)
        );
      }),
      (r.prototype.createRadioGroup = function (e) {
        V(e, "name", ["string"]);
        var t = fo(e),
          i = this.findOrCreateNonTerminals(t.nonTerminal),
          a = Cl.create(this.doc.context);
        return (
          a.setPartialName(t.terminal),
          co(i, [a, a.ref], t.terminal),
          ga.of(a, a.ref, this.doc)
        );
      }),
      (r.prototype.createTextField = function (e) {
        V(e, "name", ["string"]);
        var t = fo(e),
          i = this.findOrCreateNonTerminals(t.nonTerminal),
          a = kl.create(this.doc.context);
        return (
          a.setPartialName(t.terminal),
          co(i, [a, a.ref], t.terminal),
          tl.of(a, a.ref, this.doc)
        );
      }),
      (r.prototype.flatten = function (e) {
        e === void 0 && (e = { updateFieldAppearances: !0 }),
          e.updateFieldAppearances && this.updateFieldAppearances();
        for (var t = this.getFields(), i = 0, a = t.length; i < a; i++) {
          for (
            var u = t[i], s = u.acroField.getWidgets(), c = 0, d = s.length;
            c < d;
            c++
          ) {
            var h = s[c],
              y = this.findWidgetPage(h),
              m = this.findWidgetAppearanceRef(u, h),
              x = y.node.newXObject("FlatWidget", m),
              w = h.getRectangle(),
              F = lt([Gt(), _r(w.x, w.y)], yi(Ze(Ze({}, w), { rotation: 0 })), [
                dc(x),
                Xt(),
              ]).filter(Boolean);
            y.pushOperators.apply(y, F);
          }
          this.removeField(u);
        }
      }),
      (r.prototype.removeField = function (e) {
        for (
          var t = e.acroField.getWidgets(), i = new Set(), a = 0, u = t.length;
          a < u;
          a++
        ) {
          var s = t[a],
            c = this.findWidgetAppearanceRef(e, s),
            d = this.findWidgetPage(s);
          i.add(d), d.node.removeAnnot(c);
        }
        i.forEach(function (w) {
          return w.node.removeAnnot(e.ref);
        }),
          this.acroForm.removeField(e.acroField);
        for (
          var h = e.acroField.normalizedEntries().Kids, y = h.size(), m = 0;
          m < y;
          m++
        ) {
          var x = h.get(m);
          x instanceof gt && this.doc.context.delete(x);
        }
        this.doc.context.delete(e.ref);
      }),
      (r.prototype.updateFieldAppearances = function (e) {
        pe(e, "font", [[Ir, "PDFFont"]]), (e = e ?? this.getDefaultFont());
        for (var t = this.getFields(), i = 0, a = t.length; i < a; i++) {
          var u = t[i];
          u.needsAppearancesUpdate() && u.defaultUpdateAppearances(e);
        }
      }),
      (r.prototype.markFieldAsDirty = function (e) {
        pe(e, "fieldRef", [[gt, "PDFRef"]]), this.dirtyFields.add(e);
      }),
      (r.prototype.markFieldAsClean = function (e) {
        pe(e, "fieldRef", [[gt, "PDFRef"]]), this.dirtyFields.delete(e);
      }),
      (r.prototype.fieldIsDirty = function (e) {
        return pe(e, "fieldRef", [[gt, "PDFRef"]]), this.dirtyFields.has(e);
      }),
      (r.prototype.getDefaultFont = function () {
        return this.defaultFontCache.access();
      }),
      (r.prototype.findWidgetPage = function (e) {
        var t = e.P(),
          i = this.doc.getPages().find(function (u) {
            return u.ref === t;
          });
        if (i === void 0) {
          var a = this.doc.context.getObjectRef(e.dict);
          if (a === void 0)
            throw new Error("Could not find PDFRef for PDFObject");
          if (((i = this.doc.findPageForAnnotationRef(a)), i === void 0))
            throw new Error("Could not find page for PDFRef " + a);
        }
        return i;
      }),
      (r.prototype.findWidgetAppearanceRef = function (e, t) {
        var i,
          a = t.getNormalAppearance();
        if (a instanceof Qe && (e instanceof va || e instanceof ga)) {
          var u = e.acroField.getValue(),
            s =
              (i = a.get(u)) !== null && i !== void 0 ? i : a.get(P.of("Off"));
          s instanceof gt && (a = s);
        }
        if (!(a instanceof gt)) {
          var c = e.getName();
          throw new Error("Failed to extract appearance ref for: " + c);
        }
        return a;
      }),
      (r.prototype.findOrCreateNonTerminals = function (e) {
        for (var t = [this.acroForm], i = 0, a = e.length; i < a; i++) {
          var u = e[i];
          if (!u) throw new K1(u);
          var s = t[0],
            c = t[1],
            d = this.findNonTerminal(u, s);
          if (d) t = d;
          else {
            var h = ll.create(this.doc.context);
            h.setPartialName(u), h.setParent(c);
            var y = this.doc.context.register(h.dict);
            s.addField(y), (t = [h, y]);
          }
        }
        return t;
      }),
      (r.prototype.findNonTerminal = function (e, t) {
        for (
          var i = t instanceof sl ? this.acroForm.getFields() : oc(t.Kids()),
            a = 0,
            u = i.length;
          a < u;
          a++
        ) {
          var s = i[a],
            c = s[0],
            d = s[1];
          if (c.getPartialName() === e) {
            if (c instanceof ll) return [c, d];
            throw new Xp(e);
          }
        }
      }),
      (r.of = function (e, t) {
        return new r(e, t);
      }),
      r
    );
  })(),
  lx = function (r, e, t) {
    if (r instanceof Fl) return rl.of(r, e, t);
    if (r instanceof Sl) return va.of(r, e, t);
    if (r instanceof bl) return $u.of(r, e, t);
    if (r instanceof Pl) return el.of(r, e, t);
    if (r instanceof kl) return tl.of(r, e, t);
    if (r instanceof Cl) return ga.of(r, e, t);
    if (r instanceof ic) return Kf.of(r, e, t);
  },
  fo = function (r) {
    if (r.length === 0)
      throw new Error("PDF field names must not be empty strings");
    for (var e = r.split("."), t = 0, i = e.length; t < i; t++)
      if (e[t] === "")
        throw new Error(
          'Periods in PDF field names must be separated by at least one character: "' +
            r +
            '"'
        );
    return e.length === 1
      ? { nonTerminal: [], terminal: e[0] }
      : { nonTerminal: e.slice(0, e.length - 1), terminal: e[e.length - 1] };
  },
  co = function (r, e, t) {
    for (
      var i = r[0],
        a = r[1],
        u = e[0],
        s = e[1],
        c = i.normalizedEntries(),
        d = oc(("Kids" in c) ? c.Kids : c.Fields),
        h = 0,
        y = d.length;
      h < y;
      h++
    )
      if (d[h][0].getPartialName() === t) throw new Xp(t);
    i.addField(s), u.setParent(a);
  },
  sx = {
    "4A0": [4767.87, 6740.79],
    "2A0": [3370.39, 4767.87],
    A0: [2383.94, 3370.39],
    A1: [1683.78, 2383.94],
    A2: [1190.55, 1683.78],
    A3: [841.89, 1190.55],
    A4: [595.28, 841.89],
    A5: [419.53, 595.28],
    A6: [297.64, 419.53],
    A7: [209.76, 297.64],
    A8: [147.4, 209.76],
    A9: [104.88, 147.4],
    A10: [73.7, 104.88],
    B0: [2834.65, 4008.19],
    B1: [2004.09, 2834.65],
    B2: [1417.32, 2004.09],
    B3: [1000.63, 1417.32],
    B4: [708.66, 1000.63],
    B5: [498.9, 708.66],
    B6: [354.33, 498.9],
    B7: [249.45, 354.33],
    B8: [175.75, 249.45],
    B9: [124.72, 175.75],
    B10: [87.87, 124.72],
    C0: [2599.37, 3676.54],
    C1: [1836.85, 2599.37],
    C2: [1298.27, 1836.85],
    C3: [918.43, 1298.27],
    C4: [649.13, 918.43],
    C5: [459.21, 649.13],
    C6: [323.15, 459.21],
    C7: [229.61, 323.15],
    C8: [161.57, 229.61],
    C9: [113.39, 161.57],
    C10: [79.37, 113.39],
    RA0: [2437.8, 3458.27],
    RA1: [1729.13, 2437.8],
    RA2: [1218.9, 1729.13],
    RA3: [864.57, 1218.9],
    RA4: [609.45, 864.57],
    SRA0: [2551.18, 3628.35],
    SRA1: [1814.17, 2551.18],
    SRA2: [1275.59, 1814.17],
    SRA3: [907.09, 1275.59],
    SRA4: [637.8, 907.09],
    Executive: [521.86, 756],
    Folio: [612, 936],
    Legal: [612, 1008],
    Letter: [612, 792],
    Tabloid: [792, 1224],
  },
  Hf;
(function (r) {
  (r[(r.Fastest = 1 / 0)] = "Fastest"),
    (r[(r.Fast = 1500)] = "Fast"),
    (r[(r.Medium = 500)] = "Medium"),
    (r[(r.Slow = 100)] = "Slow");
})(Hf || (Hf = {}));
var fx = (function () {
    function r(e, t, i) {
      (this.alreadyEmbedded = !1),
        (this.ref = e),
        (this.doc = t),
        (this.embedder = i);
    }
    return (
      (r.prototype.embed = function () {
        return _e(this, void 0, void 0, function () {
          var e, t, i, a, u;
          return $e(this, function (s) {
            switch (s.label) {
              case 0:
                return this.alreadyEmbedded
                  ? [3, 2]
                  : [
                      4,
                      this.embedder.embedIntoContext(
                        this.doc.context,
                        this.ref
                      ),
                    ];
              case 1:
                (e = s.sent()),
                  this.doc.catalog.has(P.of("Names")) ||
                    this.doc.catalog.set(
                      P.of("Names"),
                      this.doc.context.obj({})
                    ),
                  (t = this.doc.catalog.lookup(P.of("Names"), Qe)),
                  t.has(P.of("EmbeddedFiles")) ||
                    t.set(P.of("EmbeddedFiles"), this.doc.context.obj({})),
                  (i = t.lookup(P.of("EmbeddedFiles"), Qe)),
                  i.has(P.of("Names")) ||
                    i.set(P.of("Names"), this.doc.context.obj([])),
                  (a = i.lookup(P.of("Names"), ct)),
                  a.push(Ve.fromText(this.embedder.fileName)),
                  a.push(e),
                  this.doc.catalog.has(P.of("AF")) ||
                    this.doc.catalog.set(P.of("AF"), this.doc.context.obj([])),
                  (u = this.doc.catalog.lookup(P.of("AF"), ct)),
                  u.push(e),
                  (this.alreadyEmbedded = !0),
                  (s.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (r.of = function (e, t, i) {
        return new r(e, t, i);
      }),
      r
    );
  })(),
  cx = (function () {
    function r(e, t, i) {
      (this.alreadyEmbedded = !1),
        (this.ref = e),
        (this.doc = t),
        (this.embedder = i);
    }
    return (
      (r.prototype.embed = function () {
        return _e(this, void 0, void 0, function () {
          var e, t, i, a, u, s, c;
          return $e(this, function (d) {
            switch (d.label) {
              case 0:
                return this.alreadyEmbedded
                  ? [3, 2]
                  : ((e = this.doc),
                    (t = e.catalog),
                    (i = e.context),
                    [
                      4,
                      this.embedder.embedIntoContext(
                        this.doc.context,
                        this.ref
                      ),
                    ]);
              case 1:
                (a = d.sent()),
                  t.has(P.of("Names")) || t.set(P.of("Names"), i.obj({})),
                  (u = t.lookup(P.of("Names"), Qe)),
                  u.has(P.of("JavaScript")) ||
                    u.set(P.of("JavaScript"), i.obj({})),
                  (s = u.lookup(P.of("JavaScript"), Qe)),
                  s.has(P.of("Names")) || s.set(P.of("Names"), i.obj([])),
                  (c = s.lookup(P.of("Names"), ct)),
                  c.push(Ve.fromText(this.embedder.scriptName)),
                  c.push(a),
                  (this.alreadyEmbedded = !0),
                  (d.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (r.of = function (e, t, i) {
        return new r(e, t, i);
      }),
      r
    );
  })(),
  dx = (function () {
    function r(e, t) {
      (this.script = e), (this.scriptName = t);
    }
    return (
      (r.for = function (e, t) {
        return new r(e, t);
      }),
      (r.prototype.embedIntoContext = function (e, t) {
        return _e(this, void 0, void 0, function () {
          var i;
          return $e(this, function (a) {
            return (
              (i = e.obj({
                Type: "Action",
                S: "JavaScript",
                JS: Ve.fromText(this.script),
              })),
              t ? (e.assign(t, i), [2, t]) : [2, e.register(i)]
            );
          });
        });
      }),
      r
    );
  })(),
  pi = (function () {
    function r(e, t, i) {
      var a = this;
      if (
        ((this.defaultWordBreaks = [" "]),
        (this.computePages = function () {
          var u = [];
          return (
            a.catalog.Pages().traverse(function (s, c) {
              if (s instanceof In) {
                var d = a.pageMap.get(s);
                d || ((d = Qr.of(s, c, a)), a.pageMap.set(s, d)), u.push(d);
              }
            }),
            u
          );
        }),
        (this.getOrCreateForm = function () {
          var u = a.catalog.getOrCreateAcroForm();
          return ux.of(u, a);
        }),
        V(e, "context", [[Mf, "PDFContext"]]),
        V(t, "ignoreEncryption", ["boolean"]),
        (this.context = e),
        (this.catalog = e.lookup(e.trailerInfo.Root)),
        (this.isEncrypted = !!e.lookup(e.trailerInfo.Encrypt)),
        (this.pageCache = Bn.populatedBy(this.computePages)),
        (this.pageMap = new Map()),
        (this.formCache = Bn.populatedBy(this.getOrCreateForm)),
        (this.fonts = []),
        (this.images = []),
        (this.embeddedPages = []),
        (this.embeddedFiles = []),
        (this.javaScripts = []),
        !t && this.isEncrypted)
      )
        throw new U1();
      i && this.updateInfoDict();
    }
    return (
      (r.load = function (e, t) {
        return (
          t === void 0 && (t = {}),
          _e(this, void 0, void 0, function () {
            var i, a, u, s, c, d, h, y, m, x, w, F;
            return $e(this, function (E) {
              switch (E.label) {
                case 0:
                  return (
                    (i = t.ignoreEncryption),
                    (a = i === void 0 ? !1 : i),
                    (u = t.parseSpeed),
                    (s = u === void 0 ? Hf.Slow : u),
                    (c = t.throwOnInvalidObject),
                    (d = c === void 0 ? !1 : c),
                    (h = t.updateMetadata),
                    (y = h === void 0 ? !0 : h),
                    (m = t.capNumbers),
                    (x = m === void 0 ? !1 : m),
                    V(e, "pdf", ["string", Uint8Array, ArrayBuffer]),
                    V(a, "ignoreEncryption", ["boolean"]),
                    V(s, "parseSpeed", ["number"]),
                    V(d, "throwOnInvalidObject", ["boolean"]),
                    (w = ia(e)),
                    [4, p1.forBytesWithOptions(w, s, d, x).parseDocument()]
                  );
                case 1:
                  return (F = E.sent()), [2, new r(F, a, y)];
              }
            });
          })
        );
      }),
      (r.create = function (e) {
        return (
          e === void 0 && (e = {}),
          _e(this, void 0, void 0, function () {
            var t, i, a, u, s, c;
            return $e(this, function (d) {
              return (
                (t = e.updateMetadata),
                (i = t === void 0 ? !0 : t),
                (a = Mf.create()),
                (u = Rp.withContext(a)),
                (s = a.register(u)),
                (c = Tp.withContextAndPages(a, s)),
                (a.trailerInfo.Root = a.register(c)),
                [2, new r(a, !1, i)]
              );
            });
          })
        );
      }),
      (r.prototype.registerFontkit = function (e) {
        this.fontkit = e;
      }),
      (r.prototype.getForm = function () {
        var e = this.formCache.access();
        return (
          e.hasXFA() &&
            (console.warn(
              "Removing XFA form data as pdf-lib does not support reading or writing XFA"
            ),
            e.deleteXFA()),
          e
        );
      }),
      (r.prototype.getTitle = function () {
        var e = this.getInfoDict().lookup(P.Title);
        if (e) return ai(e), e.decodeText();
      }),
      (r.prototype.getAuthor = function () {
        var e = this.getInfoDict().lookup(P.Author);
        if (e) return ai(e), e.decodeText();
      }),
      (r.prototype.getSubject = function () {
        var e = this.getInfoDict().lookup(P.Subject);
        if (e) return ai(e), e.decodeText();
      }),
      (r.prototype.getKeywords = function () {
        var e = this.getInfoDict().lookup(P.Keywords);
        if (e) return ai(e), e.decodeText();
      }),
      (r.prototype.getCreator = function () {
        var e = this.getInfoDict().lookup(P.Creator);
        if (e) return ai(e), e.decodeText();
      }),
      (r.prototype.getProducer = function () {
        var e = this.getInfoDict().lookup(P.Producer);
        if (e) return ai(e), e.decodeText();
      }),
      (r.prototype.getCreationDate = function () {
        var e = this.getInfoDict().lookup(P.CreationDate);
        if (e) return ai(e), e.decodeDate();
      }),
      (r.prototype.getModificationDate = function () {
        var e = this.getInfoDict().lookup(P.ModDate);
        if (e) return ai(e), e.decodeDate();
      }),
      (r.prototype.setTitle = function (e, t) {
        V(e, "title", ["string"]);
        var i = P.of("Title");
        if (
          (this.getInfoDict().set(i, Ve.fromText(e)),
          t != null && t.showInWindowTitleBar)
        ) {
          var a = this.catalog.getOrCreateViewerPreferences();
          a.setDisplayDocTitle(!0);
        }
      }),
      (r.prototype.setAuthor = function (e) {
        V(e, "author", ["string"]);
        var t = P.of("Author");
        this.getInfoDict().set(t, Ve.fromText(e));
      }),
      (r.prototype.setSubject = function (e) {
        V(e, "author", ["string"]);
        var t = P.of("Subject");
        this.getInfoDict().set(t, Ve.fromText(e));
      }),
      (r.prototype.setKeywords = function (e) {
        V(e, "keywords", [Array]);
        var t = P.of("Keywords");
        this.getInfoDict().set(t, Ve.fromText(e.join(" ")));
      }),
      (r.prototype.setCreator = function (e) {
        V(e, "creator", ["string"]);
        var t = P.of("Creator");
        this.getInfoDict().set(t, Ve.fromText(e));
      }),
      (r.prototype.setProducer = function (e) {
        V(e, "creator", ["string"]);
        var t = P.of("Producer");
        this.getInfoDict().set(t, Ve.fromText(e));
      }),
      (r.prototype.setLanguage = function (e) {
        V(e, "language", ["string"]);
        var t = P.of("Lang");
        this.catalog.set(t, vt.of(e));
      }),
      (r.prototype.setCreationDate = function (e) {
        V(e, "creationDate", [[Date, "Date"]]);
        var t = P.of("CreationDate");
        this.getInfoDict().set(t, vt.fromDate(e));
      }),
      (r.prototype.setModificationDate = function (e) {
        V(e, "modificationDate", [[Date, "Date"]]);
        var t = P.of("ModDate");
        this.getInfoDict().set(t, vt.fromDate(e));
      }),
      (r.prototype.getPageCount = function () {
        return (
          this.pageCount === void 0 &&
            (this.pageCount = this.getPages().length),
          this.pageCount
        );
      }),
      (r.prototype.getPages = function () {
        return this.pageCache.access();
      }),
      (r.prototype.getPage = function (e) {
        var t = this.getPages();
        return Nr(e, "index", 0, t.length - 1), t[e];
      }),
      (r.prototype.getPageIndices = function () {
        return vy(0, this.getPageCount());
      }),
      (r.prototype.removePage = function (e) {
        var t = this.getPageCount();
        if (this.pageCount === 0) throw new W1();
        Nr(e, "index", 0, t - 1),
          this.catalog.removeLeafNode(e),
          (this.pageCount = t - 1);
      }),
      (r.prototype.addPage = function (e) {
        return (
          V(e, "page", ["undefined", [Qr, "PDFPage"], Array]),
          this.insertPage(this.getPageCount(), e)
        );
      }),
      (r.prototype.insertPage = function (e, t) {
        var i = this.getPageCount();
        if (
          (Nr(e, "index", 0, i),
          V(t, "page", ["undefined", [Qr, "PDFPage"], Array]),
          !t || Array.isArray(t))
        ) {
          var a = Array.isArray(t) ? t : sx.A4;
          (t = Qr.create(this)), t.setSize.apply(t, a);
        } else if (t.doc !== this) throw new V1();
        var u = this.catalog.insertLeafNode(t.ref, e);
        return (
          t.node.setParent(u),
          this.pageMap.set(t.node, t),
          this.pageCache.invalidate(),
          (this.pageCount = i + 1),
          t
        );
      }),
      (r.prototype.copyPages = function (e, t) {
        return _e(this, void 0, void 0, function () {
          var i, a, u, s, c, d, h, y;
          return $e(this, function (m) {
            switch (m.label) {
              case 0:
                return (
                  V(e, "srcDoc", [[r, "PDFDocument"]]),
                  V(t, "indices", [Array]),
                  [4, e.flush()]
                );
              case 1:
                for (
                  m.sent(),
                    i = O0.for(e.context, this.context),
                    a = e.getPages(),
                    u = new Array(t.length),
                    s = 0,
                    c = t.length;
                  s < c;
                  s++
                )
                  (d = a[t[s]]),
                    (h = i.copy(d.node)),
                    (y = this.context.register(h)),
                    (u[s] = Qr.of(h, y, this));
                return [2, u];
            }
          });
        });
      }),
      (r.prototype.copy = function () {
        return _e(this, void 0, void 0, function () {
          var e, t, i, a;
          return $e(this, function (u) {
            switch (u.label) {
              case 0:
                return [4, r.create()];
              case 1:
                return (
                  (e = u.sent()), [4, e.copyPages(this, this.getPageIndices())]
                );
              case 2:
                for (t = u.sent(), i = 0, a = t.length; i < a; i++)
                  e.addPage(t[i]);
                return (
                  this.getAuthor() !== void 0 && e.setAuthor(this.getAuthor()),
                  this.getCreationDate() !== void 0 &&
                    e.setCreationDate(this.getCreationDate()),
                  this.getCreator() !== void 0 &&
                    e.setCreator(this.getCreator()),
                  this.getModificationDate() !== void 0 &&
                    e.setModificationDate(this.getModificationDate()),
                  this.getProducer() !== void 0 &&
                    e.setProducer(this.getProducer()),
                  this.getSubject() !== void 0 &&
                    e.setSubject(this.getSubject()),
                  this.getTitle() !== void 0 && e.setTitle(this.getTitle()),
                  (e.defaultWordBreaks = this.defaultWordBreaks),
                  [2, e]
                );
            }
          });
        });
      }),
      (r.prototype.addJavaScript = function (e, t) {
        V(e, "name", ["string"]), V(t, "script", ["string"]);
        var i = dx.for(t, e),
          a = this.context.nextRef(),
          u = cx.of(a, this, i);
        this.javaScripts.push(u);
      }),
      (r.prototype.attach = function (e, t, i) {
        return (
          i === void 0 && (i = {}),
          _e(this, void 0, void 0, function () {
            var a, u, s, c;
            return $e(this, function (d) {
              return (
                V(e, "attachment", ["string", Uint8Array, ArrayBuffer]),
                V(t, "name", ["string"]),
                pe(i.mimeType, "mimeType", ["string"]),
                pe(i.description, "description", ["string"]),
                pe(i.creationDate, "options.creationDate", [Date]),
                pe(i.modificationDate, "options.modificationDate", [Date]),
                Zr(i.afRelationship, "options.afRelationship", Uf),
                (a = ia(e)),
                (u = Lm.for(a, t, i)),
                (s = this.context.nextRef()),
                (c = fx.of(s, this, u)),
                this.embeddedFiles.push(c),
                [2]
              );
            });
          })
        );
      }),
      (r.prototype.embedFont = function (e, t) {
        return (
          t === void 0 && (t = {}),
          _e(this, void 0, void 0, function () {
            var i, a, u, s, c, d, h, y, m, x;
            return $e(this, function (w) {
              switch (w.label) {
                case 0:
                  return (
                    (i = t.subset),
                    (a = i === void 0 ? !1 : i),
                    (u = t.customName),
                    (s = t.features),
                    V(e, "font", ["string", Uint8Array, ArrayBuffer]),
                    V(a, "subset", ["boolean"]),
                    b0(e) ? ((c = al.for(e, u)), [3, 7]) : [3, 1]
                  );
                case 1:
                  return yy(e)
                    ? ((d = ia(e)),
                      (h = this.assertFontkit()),
                      a ? [4, Um.for(h, d, u, s)] : [3, 3])
                    : [3, 6];
                case 2:
                  return (y = w.sent()), [3, 5];
                case 3:
                  return [4, rc.for(h, d, u, s)];
                case 4:
                  (y = w.sent()), (w.label = 5);
                case 5:
                  return (c = y), [3, 7];
                case 6:
                  throw new TypeError(
                    "`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`"
                  );
                case 7:
                  return (
                    (m = this.context.nextRef()),
                    (x = Ir.of(m, this, c)),
                    this.fonts.push(x),
                    [2, x]
                  );
              }
            });
          })
        );
      }),
      (r.prototype.embedStandardFont = function (e, t) {
        if ((V(e, "font", ["string"]), !b0(e)))
          throw new TypeError("`font` must be one of type `StandardFonts`");
        var i = al.for(e, t),
          a = this.context.nextRef(),
          u = Ir.of(a, this, i);
        return this.fonts.push(u), u;
      }),
      (r.prototype.embedJpg = function (e) {
        return _e(this, void 0, void 0, function () {
          var t, i, a, u;
          return $e(this, function (s) {
            switch (s.label) {
              case 0:
                return (
                  V(e, "jpg", ["string", Uint8Array, ArrayBuffer]),
                  (t = ia(e)),
                  [4, xp.for(t)]
                );
              case 1:
                return (
                  (i = s.sent()),
                  (a = this.context.nextRef()),
                  (u = qf.of(a, this, i)),
                  this.images.push(u),
                  [2, u]
                );
            }
          });
        });
      }),
      (r.prototype.embedPng = function (e) {
        return _e(this, void 0, void 0, function () {
          var t, i, a, u;
          return $e(this, function (s) {
            switch (s.label) {
              case 0:
                return (
                  V(e, "png", ["string", Uint8Array, ArrayBuffer]),
                  (t = ia(e)),
                  [4, wp.for(t)]
                );
              case 1:
                return (
                  (i = s.sent()),
                  (a = this.context.nextRef()),
                  (u = qf.of(a, this, i)),
                  this.images.push(u),
                  [2, u]
                );
            }
          });
        });
      }),
      (r.prototype.embedPdf = function (e, t) {
        return (
          t === void 0 && (t = [0]),
          _e(this, void 0, void 0, function () {
            var i, a, u;
            return $e(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    V(e, "pdf", [
                      "string",
                      Uint8Array,
                      ArrayBuffer,
                      [r, "PDFDocument"],
                    ]),
                    V(t, "indices", [Array]),
                    e instanceof r ? ((a = e), [3, 3]) : [3, 1]
                  );
                case 1:
                  return [4, r.load(e)];
                case 2:
                  (a = s.sent()), (s.label = 3);
                case 3:
                  return (
                    (i = a), (u = gy(i.getPages(), t)), [2, this.embedPages(u)]
                  );
              }
            });
          })
        );
      }),
      (r.prototype.embedPage = function (e, t, i) {
        return _e(this, void 0, void 0, function () {
          var a;
          return $e(this, function (u) {
            switch (u.label) {
              case 0:
                return (
                  V(e, "page", [[Qr, "PDFPage"]]),
                  [4, this.embedPages([e], [t], [i])]
                );
              case 1:
                return (a = u.sent()[0]), [2, a];
            }
          });
        });
      }),
      (r.prototype.embedPages = function (e, t, i) {
        return (
          t === void 0 && (t = []),
          i === void 0 && (i = []),
          _e(this, void 0, void 0, function () {
            var h, y, a, u, s, c, d, h, y, m, x, w, F, E, R;
            return $e(this, function (D) {
              switch (D.label) {
                case 0:
                  if (e.length === 0) return [2, []];
                  for (h = 0, y = e.length - 1; h < y; h++)
                    if (
                      ((a = e[h]),
                      (u = e[h + 1]),
                      a.node.context !== u.node.context)
                    )
                      throw new dm();
                  (s = e[0].node.context),
                    (c =
                      s === this.context
                        ? function (L) {
                            return L;
                          }
                        : O0.for(s, this.context).copy),
                    (d = new Array(e.length)),
                    (h = 0),
                    (y = e.length),
                    (D.label = 1);
                case 1:
                  return h < y
                    ? ((m = c(e[h].node)),
                      (x = t[h]),
                      (w = i[h]),
                      [4, kp.for(m, x, w)])
                    : [3, 4];
                case 2:
                  (F = D.sent()),
                    (E = this.context.nextRef()),
                    (d[h] = _p.of(E, this, F)),
                    (D.label = 3);
                case 3:
                  return h++, [3, 1];
                case 4:
                  return (R = this.embeddedPages).push.apply(R, d), [2, d];
              }
            });
          })
        );
      }),
      (r.prototype.flush = function () {
        return _e(this, void 0, void 0, function () {
          return $e(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.embedAll(this.fonts)];
              case 1:
                return e.sent(), [4, this.embedAll(this.images)];
              case 2:
                return e.sent(), [4, this.embedAll(this.embeddedPages)];
              case 3:
                return e.sent(), [4, this.embedAll(this.embeddedFiles)];
              case 4:
                return e.sent(), [4, this.embedAll(this.javaScripts)];
              case 5:
                return e.sent(), [2];
            }
          });
        });
      }),
      (r.prototype.save = function (e) {
        return (
          e === void 0 && (e = {}),
          _e(this, void 0, void 0, function () {
            var t, i, a, u, s, c, d, h, y, m;
            return $e(this, function (x) {
              switch (x.label) {
                case 0:
                  return (
                    (t = e.useObjectStreams),
                    (i = t === void 0 ? !0 : t),
                    (a = e.addDefaultPage),
                    (u = a === void 0 ? !0 : a),
                    (s = e.objectsPerTick),
                    (c = s === void 0 ? 50 : s),
                    (d = e.updateFieldAppearances),
                    (h = d === void 0 ? !0 : d),
                    V(i, "useObjectStreams", ["boolean"]),
                    V(u, "addDefaultPage", ["boolean"]),
                    V(c, "objectsPerTick", ["number"]),
                    V(h, "updateFieldAppearances", ["boolean"]),
                    u && this.getPageCount() === 0 && this.addPage(),
                    h &&
                      ((y = this.formCache.getValue()),
                      y && y.updateFieldAppearances()),
                    [4, this.flush()]
                  );
                case 1:
                  return (
                    x.sent(),
                    (m = i ? zm : yp),
                    [2, m.forContext(this.context, c).serializeToBuffer()]
                  );
              }
            });
          })
        );
      }),
      (r.prototype.saveAsBase64 = function (e) {
        return (
          e === void 0 && (e = {}),
          _e(this, void 0, void 0, function () {
            var t, i, a, u, s;
            return $e(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    (t = e.dataUri),
                    (i = t === void 0 ? !1 : t),
                    (a = _g(e, ["dataUri"])),
                    V(i, "dataUri", ["boolean"]),
                    [4, this.save(a)]
                  );
                case 1:
                  return (
                    (u = c.sent()),
                    (s = $g(u)),
                    [2, i ? "data:application/pdf;base64," + s : s]
                  );
              }
            });
          })
        );
      }),
      (r.prototype.findPageForAnnotationRef = function (e) {
        for (var t = this.getPages(), i = 0, a = t.length; i < a; i++) {
          var u = t[i],
            s = u.node.Annots();
          if ((s == null ? void 0 : s.indexOf(e)) !== void 0) return u;
        }
      }),
      (r.prototype.embedAll = function (e) {
        return _e(this, void 0, void 0, function () {
          var t, i;
          return $e(this, function (a) {
            switch (a.label) {
              case 0:
                (t = 0), (i = e.length), (a.label = 1);
              case 1:
                return t < i ? [4, e[t].embed()] : [3, 4];
              case 2:
                a.sent(), (a.label = 3);
              case 3:
                return t++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }),
      (r.prototype.updateInfoDict = function () {
        var e = "pdf-lib (https://github.com/Hopding/pdf-lib)",
          t = new Date(),
          i = this.getInfoDict();
        this.setProducer(e),
          this.setModificationDate(t),
          i.get(P.of("Creator")) || this.setCreator(e),
          i.get(P.of("CreationDate")) || this.setCreationDate(t);
      }),
      (r.prototype.getInfoDict = function () {
        var e = this.context.lookup(this.context.trailerInfo.Info);
        if (e instanceof Qe) return e;
        var t = this.context.obj({});
        return (this.context.trailerInfo.Info = this.context.register(t)), t;
      }),
      (r.prototype.assertFontkit = function () {
        if (!this.fontkit) throw new L1();
        return this.fontkit;
      }),
      r
    );
  })();
function ai(r) {
  if (!(r instanceof Ve) && !(r instanceof vt)) throw new il([Ve, vt], r);
}
var Nn;
(function (r) {
  (r.Normal = "Normal"),
    (r.Multiply = "Multiply"),
    (r.Screen = "Screen"),
    (r.Overlay = "Overlay"),
    (r.Darken = "Darken"),
    (r.Lighten = "Lighten"),
    (r.ColorDodge = "ColorDodge"),
    (r.ColorBurn = "ColorBurn"),
    (r.HardLight = "HardLight"),
    (r.SoftLight = "SoftLight"),
    (r.Difference = "Difference"),
    (r.Exclusion = "Exclusion");
})(Nn || (Nn = {}));
var Qr = (function () {
    function r(e, t, i) {
      (this.fontSize = 24),
        (this.fontColor = yt(0, 0, 0)),
        (this.lineHeight = 24),
        (this.x = 0),
        (this.y = 0),
        V(e, "leafNode", [[In, "PDFPageLeaf"]]),
        V(t, "ref", [[gt, "PDFRef"]]),
        V(i, "doc", [[pi, "PDFDocument"]]),
        (this.node = e),
        (this.ref = t),
        (this.doc = i);
    }
    return (
      (r.prototype.setRotation = function (e) {
        var t = Np(e);
        dp(t, "degreesAngle", 90),
          this.node.set(P.of("Rotate"), this.doc.context.obj(t));
      }),
      (r.prototype.getRotation = function () {
        var e = this.node.Rotate();
        return We(e ? e.asNumber() : 0);
      }),
      (r.prototype.setSize = function (e, t) {
        V(e, "width", ["number"]), V(t, "height", ["number"]);
        var i = this.getMediaBox();
        this.setMediaBox(i.x, i.y, e, t);
        var a = this.getCropBox(),
          u = this.getBleedBox(),
          s = this.getTrimBox(),
          c = this.getArtBox(),
          d = this.node.CropBox(),
          h = this.node.BleedBox(),
          y = this.node.TrimBox(),
          m = this.node.ArtBox();
        d && qu(a, i) && this.setCropBox(i.x, i.y, e, t),
          h && qu(u, i) && this.setBleedBox(i.x, i.y, e, t),
          y && qu(s, i) && this.setTrimBox(i.x, i.y, e, t),
          m && qu(c, i) && this.setArtBox(i.x, i.y, e, t);
      }),
      (r.prototype.setWidth = function (e) {
        V(e, "width", ["number"]), this.setSize(e, this.getSize().height);
      }),
      (r.prototype.setHeight = function (e) {
        V(e, "height", ["number"]), this.setSize(this.getSize().width, e);
      }),
      (r.prototype.setMediaBox = function (e, t, i, a) {
        V(e, "x", ["number"]),
          V(t, "y", ["number"]),
          V(i, "width", ["number"]),
          V(a, "height", ["number"]);
        var u = this.doc.context.obj([e, t, e + i, t + a]);
        this.node.set(P.MediaBox, u);
      }),
      (r.prototype.setCropBox = function (e, t, i, a) {
        V(e, "x", ["number"]),
          V(t, "y", ["number"]),
          V(i, "width", ["number"]),
          V(a, "height", ["number"]);
        var u = this.doc.context.obj([e, t, e + i, t + a]);
        this.node.set(P.CropBox, u);
      }),
      (r.prototype.setBleedBox = function (e, t, i, a) {
        V(e, "x", ["number"]),
          V(t, "y", ["number"]),
          V(i, "width", ["number"]),
          V(a, "height", ["number"]);
        var u = this.doc.context.obj([e, t, e + i, t + a]);
        this.node.set(P.BleedBox, u);
      }),
      (r.prototype.setTrimBox = function (e, t, i, a) {
        V(e, "x", ["number"]),
          V(t, "y", ["number"]),
          V(i, "width", ["number"]),
          V(a, "height", ["number"]);
        var u = this.doc.context.obj([e, t, e + i, t + a]);
        this.node.set(P.TrimBox, u);
      }),
      (r.prototype.setArtBox = function (e, t, i, a) {
        V(e, "x", ["number"]),
          V(t, "y", ["number"]),
          V(i, "width", ["number"]),
          V(a, "height", ["number"]);
        var u = this.doc.context.obj([e, t, e + i, t + a]);
        this.node.set(P.ArtBox, u);
      }),
      (r.prototype.getSize = function () {
        var e = this.getMediaBox(),
          t = e.width,
          i = e.height;
        return { width: t, height: i };
      }),
      (r.prototype.getWidth = function () {
        return this.getSize().width;
      }),
      (r.prototype.getHeight = function () {
        return this.getSize().height;
      }),
      (r.prototype.getMediaBox = function () {
        var e = this.node.MediaBox();
        return e.asRectangle();
      }),
      (r.prototype.getCropBox = function () {
        var e,
          t = this.node.CropBox();
        return (e = t == null ? void 0 : t.asRectangle()) !== null &&
          e !== void 0
          ? e
          : this.getMediaBox();
      }),
      (r.prototype.getBleedBox = function () {
        var e,
          t = this.node.BleedBox();
        return (e = t == null ? void 0 : t.asRectangle()) !== null &&
          e !== void 0
          ? e
          : this.getCropBox();
      }),
      (r.prototype.getTrimBox = function () {
        var e,
          t = this.node.TrimBox();
        return (e = t == null ? void 0 : t.asRectangle()) !== null &&
          e !== void 0
          ? e
          : this.getCropBox();
      }),
      (r.prototype.getArtBox = function () {
        var e,
          t = this.node.ArtBox();
        return (e = t == null ? void 0 : t.asRectangle()) !== null &&
          e !== void 0
          ? e
          : this.getCropBox();
      }),
      (r.prototype.translateContent = function (e, t) {
        V(e, "x", ["number"]),
          V(t, "y", ["number"]),
          this.node.normalize(),
          this.getContentStream();
        var i = this.createContentStream(Gt(), _r(e, t)),
          a = this.doc.context.register(i),
          u = this.createContentStream(Xt()),
          s = this.doc.context.register(u);
        this.node.wrapContentStreams(a, s);
      }),
      (r.prototype.scale = function (e, t) {
        V(e, "x", ["number"]),
          V(t, "y", ["number"]),
          this.setSize(this.getWidth() * e, this.getHeight() * t),
          this.scaleContent(e, t),
          this.scaleAnnotations(e, t);
      }),
      (r.prototype.scaleContent = function (e, t) {
        V(e, "x", ["number"]),
          V(t, "y", ["number"]),
          this.node.normalize(),
          this.getContentStream();
        var i = this.createContentStream(Gt(), Pa(e, t)),
          a = this.doc.context.register(i),
          u = this.createContentStream(Xt()),
          s = this.doc.context.register(u);
        this.node.wrapContentStreams(a, s);
      }),
      (r.prototype.scaleAnnotations = function (e, t) {
        V(e, "x", ["number"]), V(t, "y", ["number"]);
        var i = this.node.Annots();
        if (i)
          for (var a = 0; a < i.size(); a++) {
            var u = i.lookup(a);
            u instanceof Qe && this.scaleAnnot(u, e, t);
          }
      }),
      (r.prototype.resetPosition = function () {
        this.getContentStream(!1), (this.x = 0), (this.y = 0);
      }),
      (r.prototype.setFont = function (e) {
        V(e, "font", [[Ir, "PDFFont"]]),
          (this.font = e),
          (this.fontKey = this.node.newFontDictionary(
            this.font.name,
            this.font.ref
          ));
      }),
      (r.prototype.setFontSize = function (e) {
        V(e, "fontSize", ["number"]), (this.fontSize = e);
      }),
      (r.prototype.setFontColor = function (e) {
        V(e, "fontColor", [[Object, "Color"]]), (this.fontColor = e);
      }),
      (r.prototype.setLineHeight = function (e) {
        V(e, "lineHeight", ["number"]), (this.lineHeight = e);
      }),
      (r.prototype.getPosition = function () {
        return { x: this.x, y: this.y };
      }),
      (r.prototype.getX = function () {
        return this.x;
      }),
      (r.prototype.getY = function () {
        return this.y;
      }),
      (r.prototype.moveTo = function (e, t) {
        V(e, "x", ["number"]),
          V(t, "y", ["number"]),
          (this.x = e),
          (this.y = t);
      }),
      (r.prototype.moveDown = function (e) {
        V(e, "yDecrease", ["number"]), (this.y -= e);
      }),
      (r.prototype.moveUp = function (e) {
        V(e, "yIncrease", ["number"]), (this.y += e);
      }),
      (r.prototype.moveLeft = function (e) {
        V(e, "xDecrease", ["number"]), (this.x -= e);
      }),
      (r.prototype.moveRight = function (e) {
        V(e, "xIncrease", ["number"]), (this.x += e);
      }),
      (r.prototype.pushOperators = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        cp(e, "operator", [[ut, "PDFOperator"]]);
        var i = this.getContentStream();
        i.push.apply(i, e);
      }),
      (r.prototype.drawText = function (e, t) {
        var i, a, u, s, c, d, h;
        t === void 0 && (t = {}),
          V(e, "text", ["string"]),
          pe(t.color, "options.color", [[Object, "Color"]]),
          hn(t.opacity, "opacity.opacity", 0, 1),
          pe(t.font, "options.font", [[Ir, "PDFFont"]]),
          pe(t.size, "options.size", ["number"]),
          pe(t.rotate, "options.rotate", [[Object, "Rotation"]]),
          pe(t.xSkew, "options.xSkew", [[Object, "Rotation"]]),
          pe(t.ySkew, "options.ySkew", [[Object, "Rotation"]]),
          pe(t.x, "options.x", ["number"]),
          pe(t.y, "options.y", ["number"]),
          pe(t.lineHeight, "options.lineHeight", ["number"]),
          pe(t.maxWidth, "options.maxWidth", ["number"]),
          pe(t.wordBreaks, "options.wordBreaks", [Array]),
          Zr(t.blendMode, "options.blendMode", Nn);
        for (
          var y = this.setOrEmbedFont(t.font),
            m = y.oldFont,
            x = y.newFont,
            w = y.newFontKey,
            F = t.size || this.fontSize,
            E = t.wordBreaks || this.doc.defaultWordBreaks,
            R = function (U) {
              return x.widthOfTextAtSize(U, F);
            },
            D = t.maxWidth === void 0 ? Z0(Ta(e)) : ly(e, E, t.maxWidth, R),
            L = new Array(D.length),
            N = 0,
            q = D.length;
          N < q;
          N++
        )
          L[N] = x.encodeText(D[N]);
        var K = this.maybeEmbedGraphicsState({
            opacity: t.opacity,
            blendMode: t.blendMode,
          }),
          M = this.getContentStream();
        M.push.apply(
          M,
          O1(L, {
            color: (i = t.color) !== null && i !== void 0 ? i : this.fontColor,
            font: w,
            size: F,
            rotate: (a = t.rotate) !== null && a !== void 0 ? a : We(0),
            xSkew: (u = t.xSkew) !== null && u !== void 0 ? u : We(0),
            ySkew: (s = t.ySkew) !== null && s !== void 0 ? s : We(0),
            x: (c = t.x) !== null && c !== void 0 ? c : this.x,
            y: (d = t.y) !== null && d !== void 0 ? d : this.y,
            lineHeight:
              (h = t.lineHeight) !== null && h !== void 0 ? h : this.lineHeight,
            graphicsState: K,
          })
        ),
          t.font && (m ? this.setFont(m) : this.resetFont());
      }),
      (r.prototype.drawImage = function (e, t) {
        var i, a, u, s, c, d, h;
        t === void 0 && (t = {}),
          V(e, "image", [[qf, "PDFImage"]]),
          pe(t.x, "options.x", ["number"]),
          pe(t.y, "options.y", ["number"]),
          pe(t.width, "options.width", ["number"]),
          pe(t.height, "options.height", ["number"]),
          pe(t.rotate, "options.rotate", [[Object, "Rotation"]]),
          pe(t.xSkew, "options.xSkew", [[Object, "Rotation"]]),
          pe(t.ySkew, "options.ySkew", [[Object, "Rotation"]]),
          hn(t.opacity, "opacity.opacity", 0, 1),
          Zr(t.blendMode, "options.blendMode", Nn);
        var y = this.node.newXObject("Image", e.ref),
          m = this.maybeEmbedGraphicsState({
            opacity: t.opacity,
            blendMode: t.blendMode,
          }),
          x = this.getContentStream();
        x.push.apply(
          x,
          Hp(y, {
            x: (i = t.x) !== null && i !== void 0 ? i : this.x,
            y: (a = t.y) !== null && a !== void 0 ? a : this.y,
            width: (u = t.width) !== null && u !== void 0 ? u : e.size().width,
            height:
              (s = t.height) !== null && s !== void 0 ? s : e.size().height,
            rotate: (c = t.rotate) !== null && c !== void 0 ? c : We(0),
            xSkew: (d = t.xSkew) !== null && d !== void 0 ? d : We(0),
            ySkew: (h = t.ySkew) !== null && h !== void 0 ? h : We(0),
            graphicsState: m,
          })
        );
      }),
      (r.prototype.drawPage = function (e, t) {
        var i, a, u, s, c;
        t === void 0 && (t = {}),
          V(e, "embeddedPage", [[_p, "PDFEmbeddedPage"]]),
          pe(t.x, "options.x", ["number"]),
          pe(t.y, "options.y", ["number"]),
          pe(t.xScale, "options.xScale", ["number"]),
          pe(t.yScale, "options.yScale", ["number"]),
          pe(t.width, "options.width", ["number"]),
          pe(t.height, "options.height", ["number"]),
          pe(t.rotate, "options.rotate", [[Object, "Rotation"]]),
          pe(t.xSkew, "options.xSkew", [[Object, "Rotation"]]),
          pe(t.ySkew, "options.ySkew", [[Object, "Rotation"]]),
          hn(t.opacity, "opacity.opacity", 0, 1),
          Zr(t.blendMode, "options.blendMode", Nn);
        var d = this.node.newXObject("EmbeddedPdfPage", e.ref),
          h = this.maybeEmbedGraphicsState({
            opacity: t.opacity,
            blendMode: t.blendMode,
          }),
          y =
            t.width !== void 0
              ? t.width / e.width
              : t.xScale !== void 0
              ? t.xScale
              : 1,
          m =
            t.height !== void 0
              ? t.height / e.height
              : t.yScale !== void 0
              ? t.yScale
              : 1,
          x = this.getContentStream();
        x.push.apply(
          x,
          A1(d, {
            x: (i = t.x) !== null && i !== void 0 ? i : this.x,
            y: (a = t.y) !== null && a !== void 0 ? a : this.y,
            xScale: y,
            yScale: m,
            rotate: (u = t.rotate) !== null && u !== void 0 ? u : We(0),
            xSkew: (s = t.xSkew) !== null && s !== void 0 ? s : We(0),
            ySkew: (c = t.ySkew) !== null && c !== void 0 ? c : We(0),
            graphicsState: h,
          })
        );
      }),
      (r.prototype.drawSvgPath = function (e, t) {
        var i, a, u, s, c, d, h, y, m;
        t === void 0 && (t = {}),
          V(e, "path", ["string"]),
          pe(t.x, "options.x", ["number"]),
          pe(t.y, "options.y", ["number"]),
          pe(t.scale, "options.scale", ["number"]),
          pe(t.rotate, "options.rotate", [[Object, "Rotation"]]),
          pe(t.borderWidth, "options.borderWidth", ["number"]),
          pe(t.color, "options.color", [[Object, "Color"]]),
          hn(t.opacity, "opacity.opacity", 0, 1),
          pe(t.borderColor, "options.borderColor", [[Object, "Color"]]),
          pe(t.borderDashArray, "options.borderDashArray", [Array]),
          pe(t.borderDashPhase, "options.borderDashPhase", ["number"]),
          Zr(t.borderLineCap, "options.borderLineCap", po),
          hn(t.borderOpacity, "options.borderOpacity", 0, 1),
          Zr(t.blendMode, "options.blendMode", Nn);
        var x = this.maybeEmbedGraphicsState({
          opacity: t.opacity,
          borderOpacity: t.borderOpacity,
          blendMode: t.blendMode,
        });
        !("color" in t) &&
          !("borderColor" in t) &&
          (t.borderColor = yt(0, 0, 0));
        var w = this.getContentStream();
        w.push.apply(
          w,
          B1(e, {
            x: (i = t.x) !== null && i !== void 0 ? i : this.x,
            y: (a = t.y) !== null && a !== void 0 ? a : this.y,
            scale: t.scale,
            rotate: (u = t.rotate) !== null && u !== void 0 ? u : We(0),
            color: (s = t.color) !== null && s !== void 0 ? s : void 0,
            borderColor:
              (c = t.borderColor) !== null && c !== void 0 ? c : void 0,
            borderWidth: (d = t.borderWidth) !== null && d !== void 0 ? d : 0,
            borderDashArray:
              (h = t.borderDashArray) !== null && h !== void 0 ? h : void 0,
            borderDashPhase:
              (y = t.borderDashPhase) !== null && y !== void 0 ? y : void 0,
            borderLineCap:
              (m = t.borderLineCap) !== null && m !== void 0 ? m : void 0,
            graphicsState: x,
          })
        );
      }),
      (r.prototype.drawLine = function (e) {
        var t, i, a, u, s;
        V(e.start, "options.start", [[Object, "{ x: number, y: number }"]]),
          V(e.end, "options.end", [[Object, "{ x: number, y: number }"]]),
          V(e.start.x, "options.start.x", ["number"]),
          V(e.start.y, "options.start.y", ["number"]),
          V(e.end.x, "options.end.x", ["number"]),
          V(e.end.y, "options.end.y", ["number"]),
          pe(e.thickness, "options.thickness", ["number"]),
          pe(e.color, "options.color", [[Object, "Color"]]),
          pe(e.dashArray, "options.dashArray", [Array]),
          pe(e.dashPhase, "options.dashPhase", ["number"]),
          Zr(e.lineCap, "options.lineCap", po),
          hn(e.opacity, "opacity.opacity", 0, 1),
          Zr(e.blendMode, "options.blendMode", Nn);
        var c = this.maybeEmbedGraphicsState({
          borderOpacity: e.opacity,
          blendMode: e.blendMode,
        });
        "color" in e || (e.color = yt(0, 0, 0));
        var d = this.getContentStream();
        d.push.apply(
          d,
          z1({
            start: e.start,
            end: e.end,
            thickness: (t = e.thickness) !== null && t !== void 0 ? t : 1,
            color: (i = e.color) !== null && i !== void 0 ? i : void 0,
            dashArray: (a = e.dashArray) !== null && a !== void 0 ? a : void 0,
            dashPhase: (u = e.dashPhase) !== null && u !== void 0 ? u : void 0,
            lineCap: (s = e.lineCap) !== null && s !== void 0 ? s : void 0,
            graphicsState: c,
          })
        );
      }),
      (r.prototype.drawRectangle = function (e) {
        var t, i, a, u, s, c, d, h, y, m, x, w, F;
        e === void 0 && (e = {}),
          pe(e.x, "options.x", ["number"]),
          pe(e.y, "options.y", ["number"]),
          pe(e.width, "options.width", ["number"]),
          pe(e.height, "options.height", ["number"]),
          pe(e.rotate, "options.rotate", [[Object, "Rotation"]]),
          pe(e.xSkew, "options.xSkew", [[Object, "Rotation"]]),
          pe(e.ySkew, "options.ySkew", [[Object, "Rotation"]]),
          pe(e.borderWidth, "options.borderWidth", ["number"]),
          pe(e.color, "options.color", [[Object, "Color"]]),
          hn(e.opacity, "opacity.opacity", 0, 1),
          pe(e.borderColor, "options.borderColor", [[Object, "Color"]]),
          pe(e.borderDashArray, "options.borderDashArray", [Array]),
          pe(e.borderDashPhase, "options.borderDashPhase", ["number"]),
          Zr(e.borderLineCap, "options.borderLineCap", po),
          hn(e.borderOpacity, "options.borderOpacity", 0, 1),
          Zr(e.blendMode, "options.blendMode", Nn);
        var E = this.maybeEmbedGraphicsState({
          opacity: e.opacity,
          borderOpacity: e.borderOpacity,
          blendMode: e.blendMode,
        });
        !("color" in e) && !("borderColor" in e) && (e.color = yt(0, 0, 0));
        var R = this.getContentStream();
        R.push.apply(
          R,
          mo({
            x: (t = e.x) !== null && t !== void 0 ? t : this.x,
            y: (i = e.y) !== null && i !== void 0 ? i : this.y,
            width: (a = e.width) !== null && a !== void 0 ? a : 150,
            height: (u = e.height) !== null && u !== void 0 ? u : 100,
            rotate: (s = e.rotate) !== null && s !== void 0 ? s : We(0),
            xSkew: (c = e.xSkew) !== null && c !== void 0 ? c : We(0),
            ySkew: (d = e.ySkew) !== null && d !== void 0 ? d : We(0),
            borderWidth: (h = e.borderWidth) !== null && h !== void 0 ? h : 0,
            color: (y = e.color) !== null && y !== void 0 ? y : void 0,
            borderColor:
              (m = e.borderColor) !== null && m !== void 0 ? m : void 0,
            borderDashArray:
              (x = e.borderDashArray) !== null && x !== void 0 ? x : void 0,
            borderDashPhase:
              (w = e.borderDashPhase) !== null && w !== void 0 ? w : void 0,
            graphicsState: E,
            borderLineCap:
              (F = e.borderLineCap) !== null && F !== void 0 ? F : void 0,
          })
        );
      }),
      (r.prototype.drawSquare = function (e) {
        e === void 0 && (e = {});
        var t = e.size;
        pe(t, "size", ["number"]),
          this.drawRectangle(Ze(Ze({}, e), { width: t, height: t }));
      }),
      (r.prototype.drawEllipse = function (e) {
        var t, i, a, u, s, c, d, h, y, m, x;
        e === void 0 && (e = {}),
          pe(e.x, "options.x", ["number"]),
          pe(e.y, "options.y", ["number"]),
          pe(e.xScale, "options.xScale", ["number"]),
          pe(e.yScale, "options.yScale", ["number"]),
          pe(e.rotate, "options.rotate", [[Object, "Rotation"]]),
          pe(e.color, "options.color", [[Object, "Color"]]),
          hn(e.opacity, "opacity.opacity", 0, 1),
          pe(e.borderColor, "options.borderColor", [[Object, "Color"]]),
          hn(e.borderOpacity, "options.borderOpacity", 0, 1),
          pe(e.borderWidth, "options.borderWidth", ["number"]),
          pe(e.borderDashArray, "options.borderDashArray", [Array]),
          pe(e.borderDashPhase, "options.borderDashPhase", ["number"]),
          Zr(e.borderLineCap, "options.borderLineCap", po),
          Zr(e.blendMode, "options.blendMode", Nn);
        var w = this.maybeEmbedGraphicsState({
          opacity: e.opacity,
          borderOpacity: e.borderOpacity,
          blendMode: e.blendMode,
        });
        !("color" in e) && !("borderColor" in e) && (e.color = yt(0, 0, 0));
        var F = this.getContentStream();
        F.push.apply(
          F,
          Wf({
            x: (t = e.x) !== null && t !== void 0 ? t : this.x,
            y: (i = e.y) !== null && i !== void 0 ? i : this.y,
            xScale: (a = e.xScale) !== null && a !== void 0 ? a : 100,
            yScale: (u = e.yScale) !== null && u !== void 0 ? u : 100,
            rotate: (s = e.rotate) !== null && s !== void 0 ? s : void 0,
            color: (c = e.color) !== null && c !== void 0 ? c : void 0,
            borderColor:
              (d = e.borderColor) !== null && d !== void 0 ? d : void 0,
            borderWidth: (h = e.borderWidth) !== null && h !== void 0 ? h : 0,
            borderDashArray:
              (y = e.borderDashArray) !== null && y !== void 0 ? y : void 0,
            borderDashPhase:
              (m = e.borderDashPhase) !== null && m !== void 0 ? m : void 0,
            borderLineCap:
              (x = e.borderLineCap) !== null && x !== void 0 ? x : void 0,
            graphicsState: w,
          })
        );
      }),
      (r.prototype.drawCircle = function (e) {
        e === void 0 && (e = {});
        var t = e.size,
          i = t === void 0 ? 100 : t;
        pe(i, "size", ["number"]),
          this.drawEllipse(Ze(Ze({}, e), { xScale: i, yScale: i }));
      }),
      (r.prototype.setOrEmbedFont = function (e) {
        var t = this.font,
          i = this.fontKey;
        e ? this.setFont(e) : this.getFont();
        var a = this.font,
          u = this.fontKey;
        return { oldFont: t, oldFontKey: i, newFont: a, newFontKey: u };
      }),
      (r.prototype.getFont = function () {
        if (!this.font || !this.fontKey) {
          var e = this.doc.embedStandardFont(vl.Helvetica);
          this.setFont(e);
        }
        return [this.font, this.fontKey];
      }),
      (r.prototype.resetFont = function () {
        (this.font = void 0), (this.fontKey = void 0);
      }),
      (r.prototype.getContentStream = function (e) {
        return (
          e === void 0 && (e = !0),
          e && this.contentStream
            ? this.contentStream
            : ((this.contentStream = this.createContentStream()),
              (this.contentStreamRef = this.doc.context.register(
                this.contentStream
              )),
              this.node.addContentStream(this.contentStreamRef),
              this.contentStream)
        );
      }),
      (r.prototype.createContentStream = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this.doc.context.obj({}),
          a = ya.of(i, e);
        return a;
      }),
      (r.prototype.maybeEmbedGraphicsState = function (e) {
        var t = e.opacity,
          i = e.borderOpacity,
          a = e.blendMode;
        if (!(t === void 0 && i === void 0 && a === void 0)) {
          var u = this.doc.context.obj({
              Type: "ExtGState",
              ca: t,
              CA: i,
              BM: a,
            }),
            s = this.node.newExtGState("GS", u);
          return s;
        }
      }),
      (r.prototype.scaleAnnot = function (e, t, i) {
        for (
          var a = ["RD", "CL", "Vertices", "QuadPoints", "L", "Rect"],
            u = 0,
            s = a.length;
          u < s;
          u++
        ) {
          var c = e.lookup(P.of(a[u]));
          c instanceof ct && c.scalePDFNumbers(t, i);
        }
        var d = e.lookup(P.of("InkList"));
        if (d instanceof ct)
          for (var u = 0, s = d.size(); u < s; u++) {
            var h = d.lookup(u);
            h instanceof ct && h.scalePDFNumbers(t, i);
          }
      }),
      (r.of = function (e, t, i) {
        return new r(e, t, i);
      }),
      (r.create = function (e) {
        V(e, "doc", [[pi, "PDFDocument"]]);
        var t = gt.of(-1),
          i = In.withContextAndParent(e.context, t),
          a = e.context.register(i);
        return new r(i, a, e);
      }),
      r
    );
  })(),
  rl = (function (r) {
    ve(e, r);
    function e(t, i, a) {
      var u = r.call(this, t, i, a) || this;
      return (
        V(t, "acroButton", [[Fl, "PDFAcroPushButton"]]), (u.acroField = t), u
      );
    }
    return (
      (e.prototype.setImage = function (t, i) {
        i === void 0 && (i = fi.Center);
        for (
          var a = this.acroField.getWidgets(), u = 0, s = a.length;
          u < s;
          u++
        ) {
          var c = a[u],
            d = this.createImageAppearanceStream(c, t, i);
          this.updateWidgetAppearances(c, { normal: d });
        }
        this.markAsClean();
      }),
      (e.prototype.setFontSize = function (t) {
        xl(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
      }),
      (e.prototype.addToPage = function (t, i, a) {
        var u, s, c, d, h, y, m, x, w, F, E;
        pe(t, "text", ["string"]), pe(i, "page", [[Qr, "PDFPage"]]), bo(a);
        var R = this.createWidget({
            x:
              ((u = a == null ? void 0 : a.x) !== null && u !== void 0
                ? u
                : 0) -
              ((s = a == null ? void 0 : a.borderWidth) !== null && s !== void 0
                ? s
                : 0) /
                2,
            y:
              ((c = a == null ? void 0 : a.y) !== null && c !== void 0
                ? c
                : 0) -
              ((d = a == null ? void 0 : a.borderWidth) !== null && d !== void 0
                ? d
                : 0) /
                2,
            width:
              (h = a == null ? void 0 : a.width) !== null && h !== void 0
                ? h
                : 100,
            height:
              (y = a == null ? void 0 : a.height) !== null && y !== void 0
                ? y
                : 50,
            textColor:
              (m = a == null ? void 0 : a.textColor) !== null && m !== void 0
                ? m
                : yt(0, 0, 0),
            backgroundColor:
              (x = a == null ? void 0 : a.backgroundColor) !== null &&
              x !== void 0
                ? x
                : yt(0.75, 0.75, 0.75),
            borderColor: a == null ? void 0 : a.borderColor,
            borderWidth:
              (w = a == null ? void 0 : a.borderWidth) !== null && w !== void 0
                ? w
                : 0,
            rotate:
              (F = a == null ? void 0 : a.rotate) !== null && F !== void 0
                ? F
                : We(0),
            caption: t,
            hidden: a == null ? void 0 : a.hidden,
            page: i.ref,
          }),
          D = this.doc.context.register(R.dict);
        this.acroField.addWidget(D);
        var L =
          (E = a == null ? void 0 : a.font) !== null && E !== void 0
            ? E
            : this.doc.getForm().getDefaultFont();
        this.updateWidgetAppearance(R, L), i.node.addAnnot(D);
      }),
      (e.prototype.needsAppearancesUpdate = function () {
        var t;
        if (this.isDirty()) return !0;
        for (
          var i = this.acroField.getWidgets(), a = 0, u = i.length;
          a < u;
          a++
        ) {
          var s = i[a],
            c =
              ((t = s.getAppearances()) === null || t === void 0
                ? void 0
                : t.normal) instanceof Br;
          if (!c) return !0;
        }
        return !1;
      }),
      (e.prototype.defaultUpdateAppearances = function (t) {
        V(t, "font", [[Ir, "PDFFont"]]), this.updateAppearances(t);
      }),
      (e.prototype.updateAppearances = function (t, i) {
        V(t, "font", [[Ir, "PDFFont"]]), pe(i, "provider", [Function]);
        for (
          var a = this.acroField.getWidgets(), u = 0, s = a.length;
          u < s;
          u++
        ) {
          var c = a[u];
          this.updateWidgetAppearance(c, t, i);
        }
      }),
      (e.prototype.updateWidgetAppearance = function (t, i, a) {
        var u = a ?? nx,
          s = So(u(this, t, i));
        this.updateWidgetAppearanceWithFont(t, i, s);
      }),
      (e.of = function (t, i, a) {
        return new e(t, i, a);
      }),
      e
    );
  })(Ii);
const hx = {
    name: { x: 95, y: 715, size: 10 },
    playerId: { x: 280, y: 715, size: 10 },
    dob: {
      month: { x: 500, y: 715, size: 10 },
      day: { x: 525, y: 715, size: 10 },
      year: { x: 550, y: 715, size: 10 },
    },
    division: {
      junior: { x: 375, y: 672, size: 12 },
      senior: { x: 375, y: 660, size: 12 },
      master: { x: 375, y: 650, size: 12 },
    },
    format: {
      standard: { x: 155, y: 730, size: 12 },
      expanded: { x: 205, y: 730, size: 12 },
    },
    starting_pokemon_position: 587,
    starting_trainer_position: 410,
    starting_enegy_position: 128,
    decklist: {
      pokemon: {
        quantity: { x: 270, y: 587, size: 8 },
        name: { x: 300, y: 587, size: 8 },
        set: { x: 480, y: 587, size: 8 },
        number: { x: 510, y: 587, size: 8 },
      },
      trainer: {
        quantity: { x: 270, y: 410, size: 10 },
        name: { x: 300, y: 410, size: 10 },
      },
      energy: {
        quantity: { x: 270, y: 128, size: 10 },
        name: { x: 300, y: 128, size: 10 },
      },
    },
  },
  px = {
    name: { x: 95, y: 760, size: 10 },
    playerId: { x: 280, y: 760, size: 10 },
    dob: {
      month: { x: 490, y: 760, size: 10 },
      day: { x: 515, y: 760, size: 10 },
      year: { x: 545, y: 760, size: 10 },
    },
    division: {
      junior: { x: 368, y: 719, size: 12 },
      senior: { x: 369, y: 705, size: 12 },
      master: { x: 368, y: 695, size: 12 },
    },
    format: {
      standard: { x: 145, y: 790, size: 12 },
      expanded: { x: 200, y: 790, size: 12 },
    },
    starting_pokemon_position: 648,
    starting_trainer_position: 470,
    starting_enegy_position: 185,
    decklist: {
      pokemon: {
        quantity: { x: 270, y: 648, size: 8 },
        name: { x: 300, y: 648, size: 8 },
        set: { x: 480, y: 648, size: 8 },
        number: { x: 510, y: 648, size: 8 },
      },
      trainer: {
        quantity: { x: 270, y: 470, size: 10 },
        name: { x: 300, y: 470, size: 10 },
      },
      energy: {
        quantity: { x: 270, y: 185, size: 10 },
        name: { x: 300, y: 185, size: 10 },
      },
    },
  },
  vx = (r) => {
    if (r === go.SurgingSparks) return hx;
    if (r === go.JourneyTogether) return px;
    throw Error("Sheet does not exist");
  },
  gx = async (r, e, t) => {
    e === "junior"
      ? r.drawText("X", {
          x: t.division.junior.x,
          y: t.division.junior.y,
          size: t.division.junior.size,
        })
      : e === "senior"
      ? r.drawText("X", {
          x: t.division.senior.x,
          y: t.division.senior.y,
          size: t.division.senior.size,
        })
      : r.drawText("X", {
          x: t.division.master.x,
          y: t.division.master.y,
          size: t.division.master.size,
        });
  },
  yx = async (r, e, t) => {
    e === "expanded"
      ? r.drawText("X", {
          x: t.format.expanded.x,
          y: t.format.expanded.y,
          size: t.format.expanded.size,
        })
      : r.drawText("X", {
          x: t.format.standard.x,
          y: t.format.standard.y,
          size: t.format.standard.size,
        });
  },
  mx = async (r, e) => {
    const t = vx(e.formVersion);
    if (
      (r.drawText(e.name, { x: t.name.x, y: t.name.y, size: t.name.size }),
      r.drawText(e.playerId, {
        x: t.playerId.x,
        y: t.playerId.y,
        size: t.playerId.size,
      }),
      r.drawText(e.dob.month, {
        x: t.dob.month.x,
        y: t.dob.month.y,
        size: t.dob.day.size,
      }),
      r.drawText(e.dob.day, {
        x: t.dob.day.x,
        y: t.dob.day.y,
        size: t.dob.day.size,
      }),
      r.drawText(e.dob.year, {
        x: t.dob.year.x,
        y: t.dob.year.y,
        size: t.dob.year.size,
      }),
      gx(r, e.division, t),
      yx(r, e.format, t),
      e.decklist)
    ) {
      const i = e.decklist.pokemon;
      let a = t.starting_pokemon_position;
      i.forEach((h) => {
        r.drawText(h.quantity, {
          x: t.decklist.pokemon.quantity.x,
          y: a,
          size: t.decklist.pokemon.quantity.size,
        }),
          r.drawText(h.name, {
            x: t.decklist.pokemon.name.x,
            y: a,
            size: t.decklist.pokemon.name.size,
          }),
          r.drawText(h.number || "", {
            x: t.decklist.pokemon.number.x,
            y: a,
            size: t.decklist.pokemon.number.size,
          }),
          r.drawText(h.set || "", {
            x: t.decklist.pokemon.set.x,
            y: a,
            size: t.decklist.pokemon.set.size,
          }),
          (a -= 9);
      });
      const u = e.decklist.trainer;
      let s = t.starting_trainer_position;
      u.forEach((h) => {
        r.drawText(h.quantity, {
          x: t.decklist.trainer.quantity.x,
          y: s,
          size: t.decklist.trainer.quantity.size,
        }),
          r.drawText(h.name, {
            x: t.decklist.trainer.name.x,
            y: s,
            size: t.decklist.trainer.name.size,
          }),
          (s -= 13);
      });
      const c = e.decklist.energy;
      let d = t.starting_enegy_position;
      c.forEach((h) => {
        r.drawText(h.quantity, {
          x: t.decklist.energy.quantity.x,
          y: d,
          size: t.decklist.energy.quantity.size,
        }),
          r.drawText(h.name, {
            x: t.decklist.energy.name.x,
            y: d,
            size: t.decklist.energy.name.size,
          }),
          (d -= 13);
      });
    }
  },
  xx = (r) => {
    const e = r.split(/\n(?=Pokémon:|Trainer:|Energy:)/g),
      t = (a) => {
        const u = a.trim().split(`
`),
          s = [];
        for (let c = 1; c < u.length; c++) {
          const d = u[c].trim(),
            h = d.match(/^(\d+)\s+([^\d]+)\s+([A-Z]+)\s+(\d+)$/);
          if (h) {
            const [, y, m, x, w] = h;
            s.push({
              quantity: y,
              name: m.trim(),
              set: x.trim(),
              number: w.trim(),
            });
          } else {
            const y = d.match(/^(\d+)\s+([^\d]+)$/);
            if (y) {
              const [, m, x] = y;
              s.push({ quantity: m, name: x.trim() });
            }
          }
        }
        return s;
      },
      i = { pokemon: [], trainer: [], energy: [] };
    return (
      e.forEach((a) => {
        const [u] = a.split(`
`),
          s = u.split(":")[0].toLowerCase();
        s === "pokémon"
          ? (i.pokemon = t(a))
          : s === "trainer"
          ? (i.trainer = t(a))
          : s === "energy" && (i.energy = t(a));
      }),
      i
    );
  },
  wx = ({ formData: r }) => {
    const [e, t] = Xf.useState(!1),
      i = (c) => {
        const d = /^(\d{2})\/(\d{2})\/(\d{4})$/,
          h = c.match(d);
        if (!h)
          throw new Error(
            "Invalid date format. Expected format is MM/DD/YYYY."
          );
        const [, y, m, x] = h;
        return { day: m, month: y, year: x };
      },
      a = (c) => {
        c.preventDefault();
        let d;
        r.decklist && (d = xx(r.decklist));
        const h = {
          name: r.name,
          playerId: r.playerId,
          dob: i(r.dob),
          format: r.format,
          division: r.division,
          decklist: d,
          formVersion: r.formVersion,
        };
        s(h);
      },
      u = (c) => c.replace(/ /g, "_"),
      s = async (c) => {
        t(!0);
        try {
          const d = await fetch("/decklist-generator/" + r.formVersion);
          if (!d.ok) throw new Error(`HTTP error! status: ${d.status}`);
          const h = await d.arrayBuffer(),
            y = await pi.load(h),
            x = y.getPages()[0];
          mx(x, c);
          const w = await y.save(),
            F = new Blob([w], { type: "application/pdf" }),
            E = u(r.deckListName),
            R = document.createElement("a");
          (R.href = URL.createObjectURL(F)),
            (R.download = E + ".pdf"),
            document.body.appendChild(R),
            R.click(),
            document.body.removeChild(R);
        } catch (d) {
          console.error("Error modifying PDF:", d);
        } finally {
          t(!1);
        }
      };
    return e
      ? Xe.jsx("div", {
          style: { textAlign: "center", marginTop: "20px" },
          children: Xe.jsx("button", {
            style: { padding: "10px 20px", fontSize: "16px" },
            children: "Loading...",
          }),
        })
      : Xe.jsx("div", {
          style: { textAlign: "center", marginTop: "20px" },
          children: Xe.jsx("button", {
            onClick: a,
            style: { padding: "10px 20px", fontSize: "16px" },
            children: "Generate PDF",
          }),
        });
  },
  Sx = ({ name: r, value: e, onChange: t }) => {
    const i = {
      [go.SurgingSparks]: "Surging Sparks",
      [go.JourneyTogether]: "Journey Together",
    };
    return Xe.jsx("select", {
      name: r,
      value: e,
      onChange: (a) => t(a),
      className:
        "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
      children: Object.values(go).map((a) =>
        Xe.jsx("option", { value: a, children: i[a] }, a)
      ),
    });
  };
var go = ((r) => (
  (r.SurgingSparks = "play-pokemon-deck-list-a4-ssp.pdf"),
  (r.JourneyTogether = "play-pokemon-deck-list-a4-jtg.pdf"),
  r
))(go || {});
const bx = () => {
  const [r, e] = Xf.useState({
      formVersion: "play-pokemon-deck-list-a4-jtg.pdf",
      name: "",
      playerId: "",
      dob: "",
      format: "standard",
      division: "master",
      deckListName: "Default Deck Name",
      decklist: "",
    }),
    t = (i) => {
      const { name: a, value: u } = i.target;
      e({ ...r, [a]: u });
    };
  return Xe.jsxs("form", {
    className: "player-form",
    children: [
      Xe.jsxs("div", {
        className: "form-group",
        children: [
          Xe.jsx("label", { htmlFor: "format", children: "Version:" }),
          Xe.jsx(Sx, {
            name: "formVersion",
            value: r.formVersion,
            onChange: t,
          }),
        ],
      }),
      Xe.jsxs("div", {
        className: "form-group",
        children: [
          Xe.jsx("label", {
            htmlFor: "name",
            children: "Name (First and Last):",
          }),
          Xe.jsx("input", {
            type: "text",
            id: "name",
            name: "name",
            value: r.name,
            onChange: t,
            required: !0,
          }),
        ],
      }),
      Xe.jsxs("div", {
        className: "form-group",
        children: [
          Xe.jsx("label", { htmlFor: "playerId", children: "Player ID:" }),
          Xe.jsx("input", {
            type: "text",
            id: "playerId",
            name: "playerId",
            value: r.playerId,
            onChange: t,
            required: !0,
          }),
        ],
      }),
      Xe.jsxs("div", {
        className: "form-group",
        children: [
          Xe.jsx("label", {
            htmlFor: "dob",
            children: "Date of Birth (MM/DD/YYYY):",
          }),
          Xe.jsx("input", {
            type: "text",
            id: "dob",
            name: "dob",
            value: r.dob,
            onChange: t,
            pattern: "\\d{2}/\\d{2}/\\d{4}",
            placeholder: "MM/DD/YYYY",
            required: !0,
          }),
        ],
      }),
      Xe.jsxs("div", {
        className: "form-group",
        children: [
          Xe.jsx("label", { htmlFor: "format", children: "Format:" }),
          Xe.jsxs("select", {
            id: "format",
            name: "format",
            value: r.format,
            onChange: t,
            required: !0,
            children: [
              Xe.jsx("option", { value: "standard", children: "Standard" }),
              Xe.jsx("option", { value: "expanded", children: "Expanded" }),
            ],
          }),
        ],
      }),
      Xe.jsxs("div", {
        className: "form-group",
        children: [
          Xe.jsx("label", { htmlFor: "division", children: "Division:" }),
          Xe.jsxs("select", {
            id: "division",
            name: "division",
            value: r.division,
            onChange: t,
            required: !0,
            children: [
              Xe.jsx("option", { value: "junior", children: "Junior" }),
              Xe.jsx("option", { value: "senior", children: "Senior" }),
              Xe.jsx("option", { value: "master", children: "Master" }),
            ],
          }),
        ],
      }),
      Xe.jsx("label", { htmlFor: "deckListName", children: "Decklist Name:" }),
      Xe.jsx("input", {
        type: "text",
        id: "deckListName",
        name: "deckListName",
        value: r.deckListName,
        onChange: t,
        required: !0,
      }),
      Xe.jsxs("div", {
        className: "form-group",
        children: [
          Xe.jsx("br", {}),
          Xe.jsxs("label", {
            htmlFor: "decklist",
            children: [
              "Decklist (from ",
              Xe.jsx("a", {
                href: "https://limitlesstcg.com",
                children: "LimitlessTCG",
              }),
              " or ",
              Xe.jsx("a", {
                href: "https://my.limitlesstcg.com/builder",
                children: "Limitless Deckbuilder",
              }),
              ")",
            ],
          }),
          Xe.jsx("textarea", {
            id: "decklist",
            name: "decklist",
            value: r.decklist,
            onChange: t,
            rows: 10,
            required: !0,
          }),
        ],
      }),
      Xe.jsx(wx, { formData: r }),
    ],
  });
};
function kx() {
  return Xe.jsxs(Xe.Fragment, {
    children: [
      Xe.jsx("h1", { children: "Pokemon Decklist Generator (BETA)" }),
      Xe.jsx("div", { className: "card", children: Xe.jsx(bx, {}) }),
    ],
  });
}
Jg.createRoot(document.getElementById("root")).render(
  Xe.jsx(Xf.StrictMode, { children: Xe.jsx(kx, {}) })
);
