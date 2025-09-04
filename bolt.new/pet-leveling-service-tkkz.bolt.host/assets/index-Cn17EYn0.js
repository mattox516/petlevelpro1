(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
})();
var ea = {
        exports: {}
    },
    il = {},
    ta = {
        exports: {}
    },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn = Symbol.for("react.element"),
    vc = Symbol.for("react.portal"),
    gc = Symbol.for("react.fragment"),
    xc = Symbol.for("react.strict_mode"),
    yc = Symbol.for("react.profiler"),
    wc = Symbol.for("react.provider"),
    Nc = Symbol.for("react.context"),
    jc = Symbol.for("react.forward_ref"),
    Sc = Symbol.for("react.suspense"),
    kc = Symbol.for("react.memo"),
    Cc = Symbol.for("react.lazy"),
    Bo = Symbol.iterator;

function Ec(e) {
    return e === null || typeof e != "object" ? null : (e = Bo && e[Bo] || e["@@iterator"], typeof e == "function" ? e : null)
}
var na = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    ra = Object.assign,
    la = {};

function on(e, t, n) {
    this.props = e, this.context = t, this.refs = la, this.updater = n || na
}
on.prototype.isReactComponent = {};
on.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
on.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ia() {}
ia.prototype = on.prototype;

function Wi(e, t, n) {
    this.props = e, this.context = t, this.refs = la, this.updater = n || na
}
var Qi = Wi.prototype = new ia;
Qi.constructor = Wi;
ra(Qi, on.prototype);
Qi.isPureReactComponent = !0;
var Ho = Array.isArray,
    oa = Object.prototype.hasOwnProperty,
    Gi = {
        current: null
    },
    sa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function aa(e, t, n) {
    var r, l = {},
        i = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) oa.call(t, r) && !sa.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) l.children = n;
    else if (1 < a) {
        for (var u = Array(a), d = 0; d < a; d++) u[d] = arguments[d + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: qn,
        type: e,
        key: i,
        ref: s,
        props: l,
        _owner: Gi.current
    }
}

function zc(e, t) {
    return {
        $$typeof: qn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Ki(e) {
    return typeof e == "object" && e !== null && e.$$typeof === qn
}

function _c(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Wo = /\/+/g;

function Cl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? _c("" + e.key) : t.toString(36)
}

function Sr(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case qn:
                case vc:
                    s = !0
            }
    }
    if (s) return s = e, l = l(s), e = r === "" ? "." + Cl(s, 0) : r, Ho(l) ? (n = "", e != null && (n = e.replace(Wo, "$&/") + "/"), Sr(l, t, n, "", function(d) {
        return d
    })) : l != null && (Ki(l) && (l = zc(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(Wo, "$&/") + "/") + e)), t.push(l)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Ho(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var u = r + Cl(i, a);
            s += Sr(i, t, n, u, l)
        } else if (u = Ec(e), typeof u == "function")
            for (e = u.call(e), a = 0; !(i = e.next()).done;) i = i.value, u = r + Cl(i, a++), s += Sr(i, t, n, u, l);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function ir(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Sr(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }), r
}

function Pc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ae = {
        current: null
    },
    kr = {
        transition: null
    },
    Lc = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: kr,
        ReactCurrentOwner: Gi
    };

function ua() {
    throw Error("act(...) is not supported in production builds of React.")
}
L.Children = {
    map: ir,
    forEach: function(e, t, n) {
        ir(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ir(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return ir(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ki(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
L.Component = on;
L.Fragment = gc;
L.Profiler = yc;
L.PureComponent = Wi;
L.StrictMode = xc;
L.Suspense = Sc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lc;
L.act = ua;
L.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ra({}, e.props),
        l = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = Gi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (u in t) oa.call(t, u) && !sa.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var d = 0; d < u; d++) a[d] = arguments[d + 2];
        r.children = a
    }
    return {
        $$typeof: qn,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: s
    }
};
L.createContext = function(e) {
    return e = {
        $$typeof: Nc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: wc,
        _context: e
    }, e.Consumer = e
};
L.createElement = aa;
L.createFactory = function(e) {
    var t = aa.bind(null, e);
    return t.type = e, t
};
L.createRef = function() {
    return {
        current: null
    }
};
L.forwardRef = function(e) {
    return {
        $$typeof: jc,
        render: e
    }
};
L.isValidElement = Ki;
L.lazy = function(e) {
    return {
        $$typeof: Cc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Pc
    }
};
L.memo = function(e, t) {
    return {
        $$typeof: kc,
        type: e,
        compare: t === void 0 ? null : t
    }
};
L.startTransition = function(e) {
    var t = kr.transition;
    kr.transition = {};
    try {
        e()
    } finally {
        kr.transition = t
    }
};
L.unstable_act = ua;
L.useCallback = function(e, t) {
    return ae.current.useCallback(e, t)
};
L.useContext = function(e) {
    return ae.current.useContext(e)
};
L.useDebugValue = function() {};
L.useDeferredValue = function(e) {
    return ae.current.useDeferredValue(e)
};
L.useEffect = function(e, t) {
    return ae.current.useEffect(e, t)
};
L.useId = function() {
    return ae.current.useId()
};
L.useImperativeHandle = function(e, t, n) {
    return ae.current.useImperativeHandle(e, t, n)
};
L.useInsertionEffect = function(e, t) {
    return ae.current.useInsertionEffect(e, t)
};
L.useLayoutEffect = function(e, t) {
    return ae.current.useLayoutEffect(e, t)
};
L.useMemo = function(e, t) {
    return ae.current.useMemo(e, t)
};
L.useReducer = function(e, t, n) {
    return ae.current.useReducer(e, t, n)
};
L.useRef = function(e) {
    return ae.current.useRef(e)
};
L.useState = function(e) {
    return ae.current.useState(e)
};
L.useSyncExternalStore = function(e, t, n) {
    return ae.current.useSyncExternalStore(e, t, n)
};
L.useTransition = function() {
    return ae.current.useTransition()
};
L.version = "18.3.1";
ta.exports = L;
var ge = ta.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc = ge,
    Mc = Symbol.for("react.element"),
    Rc = Symbol.for("react.fragment"),
    Ic = Object.prototype.hasOwnProperty,
    Oc = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Dc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function ca(e, t, n) {
    var r, l = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) Ic.call(t, r) && !Dc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Mc,
        type: e,
        key: i,
        ref: s,
        props: l,
        _owner: Oc.current
    }
}
il.Fragment = Rc;
il.jsx = ca;
il.jsxs = ca;
ea.exports = il;
var o = ea.exports,
    da = {
        exports: {}
    },
    we = {},
    fa = {
        exports: {}
    },
    pa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, _) {
        var P = k.length;
        k.push(_);
        e: for (; 0 < P;) {
            var W = P - 1 >>> 1,
                X = k[W];
            if (0 < l(X, _)) k[W] = _, k[P] = X, P = W;
            else break e
        }
    }

    function n(k) {
        return k.length === 0 ? null : k[0]
    }

    function r(k) {
        if (k.length === 0) return null;
        var _ = k[0],
            P = k.pop();
        if (P !== _) {
            k[0] = P;
            e: for (var W = 0, X = k.length, rr = X >>> 1; W < rr;) {
                var gt = 2 * (W + 1) - 1,
                    kl = k[gt],
                    xt = gt + 1,
                    lr = k[xt];
                if (0 > l(kl, P)) xt < X && 0 > l(lr, kl) ? (k[W] = lr, k[xt] = P, W = xt) : (k[W] = kl, k[gt] = P, W = gt);
                else if (xt < X && 0 > l(lr, P)) k[W] = lr, k[xt] = P, W = xt;
                else break e
            }
        }
        return _
    }

    function l(k, _) {
        var P = k.sortIndex - _.sortIndex;
        return P !== 0 ? P : k.id - _.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var u = [],
        d = [],
        v = 1,
        h = null,
        m = 3,
        y = !1,
        w = !1,
        N = !1,
        F = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(k) {
        for (var _ = n(d); _ !== null;) {
            if (_.callback === null) r(d);
            else if (_.startTime <= k) r(d), _.sortIndex = _.expirationTime, t(u, _);
            else break;
            _ = n(d)
        }
    }

    function g(k) {
        if (N = !1, p(k), !w)
            if (n(u) !== null) w = !0, jl(S);
            else {
                var _ = n(d);
                _ !== null && Sl(g, _.startTime - k)
            }
    }

    function S(k, _) {
        w = !1, N && (N = !1, f(z), z = -1), y = !0;
        var P = m;
        try {
            for (p(_), h = n(u); h !== null && (!(h.expirationTime > _) || k && !_e());) {
                var W = h.callback;
                if (typeof W == "function") {
                    h.callback = null, m = h.priorityLevel;
                    var X = W(h.expirationTime <= _);
                    _ = e.unstable_now(), typeof X == "function" ? h.callback = X : h === n(u) && r(u), p(_)
                } else r(u);
                h = n(u)
            }
            if (h !== null) var rr = !0;
            else {
                var gt = n(d);
                gt !== null && Sl(g, gt.startTime - _), rr = !1
            }
            return rr
        } finally {
            h = null, m = P, y = !1
        }
    }
    var C = !1,
        E = null,
        z = -1,
        H = 5,
        T = -1;

    function _e() {
        return !(e.unstable_now() - T < H)
    }

    function cn() {
        if (E !== null) {
            var k = e.unstable_now();
            T = k;
            var _ = !0;
            try {
                _ = E(!0, k)
            } finally {
                _ ? dn() : (C = !1, E = null)
            }
        } else C = !1
    }
    var dn;
    if (typeof c == "function") dn = function() {
        c(cn)
    };
    else if (typeof MessageChannel < "u") {
        var Vo = new MessageChannel,
            hc = Vo.port2;
        Vo.port1.onmessage = cn, dn = function() {
            hc.postMessage(null)
        }
    } else dn = function() {
        F(cn, 0)
    };

    function jl(k) {
        E = k, C || (C = !0, dn())
    }

    function Sl(k, _) {
        z = F(function() {
            k(e.unstable_now())
        }, _)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(k) {
        k.callback = null
    }, e.unstable_continueExecution = function() {
        w || y || (w = !0, jl(S))
    }, e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < k ? Math.floor(1e3 / k) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return m
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(k) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var _ = 3;
                break;
            default:
                _ = m
        }
        var P = m;
        m = _;
        try {
            return k()
        } finally {
            m = P
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(k, _) {
        switch (k) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                k = 3
        }
        var P = m;
        m = k;
        try {
            return _()
        } finally {
            m = P
        }
    }, e.unstable_scheduleCallback = function(k, _, P) {
        var W = e.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? W + P : W) : P = W, k) {
            case 1:
                var X = -1;
                break;
            case 2:
                X = 250;
                break;
            case 5:
                X = 1073741823;
                break;
            case 4:
                X = 1e4;
                break;
            default:
                X = 5e3
        }
        return X = P + X, k = {
            id: v++,
            callback: _,
            priorityLevel: k,
            startTime: P,
            expirationTime: X,
            sortIndex: -1
        }, P > W ? (k.sortIndex = P, t(d, k), n(u) === null && k === n(d) && (N ? (f(z), z = -1) : N = !0, Sl(g, P - W))) : (k.sortIndex = X, t(u, k), w || y || (w = !0, jl(S))), k
    }, e.unstable_shouldYield = _e, e.unstable_wrapCallback = function(k) {
        var _ = m;
        return function() {
            var P = m;
            m = _;
            try {
                return k.apply(this, arguments)
            } finally {
                m = P
            }
        }
    }
})(pa);
fa.exports = pa;
var Fc = fa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc = ge,
    ye = Fc;

function x(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ma = new Set,
    In = {};

function Tt(e, t) {
    Jt(e, t), Jt(e + "Capture", t)
}

function Jt(e, t) {
    for (In[e] = t, e = 0; e < t.length; e++) ma.add(t[e])
}
var Ge = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Jl = Object.prototype.hasOwnProperty,
    $c = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Qo = {},
    Go = {};

function Ac(e) {
    return Jl.call(Go, e) ? !0 : Jl.call(Qo, e) ? !1 : $c.test(e) ? Go[e] = !0 : (Qo[e] = !0, !1)
}

function Vc(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Bc(e, t, n, r) {
    if (t === null || typeof t > "u" || Vc(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ue(e, t, n, r, l, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ue(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    te[t] = new ue(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ue(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ue(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ue(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ue(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Yi = /[\-:]([a-z])/g;

function Xi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Yi, Xi);
    te[t] = new ue(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Yi, Xi);
    te[t] = new ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Yi, Xi);
    te[t] = new ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
te.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Zi(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bc(t, n, l, r) && (n = null), r || l === null ? Ac(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ze = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    or = Symbol.for("react.element"),
    It = Symbol.for("react.portal"),
    Ot = Symbol.for("react.fragment"),
    qi = Symbol.for("react.strict_mode"),
    bl = Symbol.for("react.profiler"),
    ha = Symbol.for("react.provider"),
    va = Symbol.for("react.context"),
    Ji = Symbol.for("react.forward_ref"),
    ei = Symbol.for("react.suspense"),
    ti = Symbol.for("react.suspense_list"),
    bi = Symbol.for("react.memo"),
    Je = Symbol.for("react.lazy"),
    ga = Symbol.for("react.offscreen"),
    Ko = Symbol.iterator;

function fn(e) {
    return e === null || typeof e != "object" ? null : (e = Ko && e[Ko] || e["@@iterator"], typeof e == "function" ? e : null)
}
var V = Object.assign,
    El;

function wn(e) {
    if (El === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        El = t && t[1] || ""
    }
    return `
` + El + e
}
var zl = !1;

function _l(e, t) {
    if (!e || zl) return "";
    zl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var l = d.stack.split(`
`), i = r.stack.split(`
`), s = l.length - 1, a = i.length - 1; 1 <= s && 0 <= a && l[s] !== i[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (l[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || l[s] !== i[a]) {
                                var u = `
` + l[s].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        zl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? wn(e) : ""
}

function Hc(e) {
    switch (e.tag) {
        case 5:
            return wn(e.type);
        case 16:
            return wn("Lazy");
        case 13:
            return wn("Suspense");
        case 19:
            return wn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = _l(e.type, !1), e;
        case 11:
            return e = _l(e.type.render, !1), e;
        case 1:
            return e = _l(e.type, !0), e;
        default:
            return ""
    }
}

function ni(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Ot:
            return "Fragment";
        case It:
            return "Portal";
        case bl:
            return "Profiler";
        case qi:
            return "StrictMode";
        case ei:
            return "Suspense";
        case ti:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case va:
            return (e.displayName || "Context") + ".Consumer";
        case ha:
            return (e._context.displayName || "Context") + ".Provider";
        case Ji:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case bi:
            return t = e.displayName || null, t !== null ? t : ni(e.type) || "Memo";
        case Je:
            t = e._payload, e = e._init;
            try {
                return ni(e(t))
            } catch {}
    }
    return null
}

function Wc(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ni(t);
        case 8:
            return t === qi ? "StrictMode" : "Mode";
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
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ft(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function xa(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Qc(e) {
    var t = xa(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function sr(e) {
    e._valueTracker || (e._valueTracker = Qc(e))
}

function ya(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = xa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Or(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ri(e, t) {
    var n = t.checked;
    return V({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Yo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ft(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function wa(e, t) {
    t = t.checked, t != null && Zi(e, "checked", t, !1)
}

function li(e, t) {
    wa(e, t);
    var n = ft(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ii(e, t.type, n) : t.hasOwnProperty("defaultValue") && ii(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Xo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ii(e, t, n) {
    (t !== "number" || Or(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Nn = Array.isArray;

function Gt(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function oi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
    return V({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Zo(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(x(92));
            if (Nn(n)) {
                if (1 < n.length) throw Error(x(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ft(n)
    }
}

function Na(e, t) {
    var n = ft(t.value),
        r = ft(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function qo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function ja(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function si(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ja(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ar, Sa = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ar = ar || document.createElement("div"), ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ar.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function On(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Cn = {
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
        strokeWidth: !0
    },
    Gc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cn).forEach(function(e) {
    Gc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Cn[t] = Cn[e]
    })
});

function ka(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Cn.hasOwnProperty(e) && Cn[e] ? ("" + t).trim() : t + "px"
}

function Ca(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = ka(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Kc = V({
    menuitem: !0
}, {
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
    wbr: !0
});

function ai(e, t) {
    if (t) {
        if (Kc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(x(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(x(62))
    }
}

function ui(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
            return !0
    }
}
var ci = null;

function eo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var di = null,
    Kt = null,
    Yt = null;

function Jo(e) {
    if (e = er(e)) {
        if (typeof di != "function") throw Error(x(280));
        var t = e.stateNode;
        t && (t = cl(t), di(e.stateNode, e.type, t))
    }
}

function Ea(e) {
    Kt ? Yt ? Yt.push(e) : Yt = [e] : Kt = e
}

function za() {
    if (Kt) {
        var e = Kt,
            t = Yt;
        if (Yt = Kt = null, Jo(e), t)
            for (e = 0; e < t.length; e++) Jo(t[e])
    }
}

function _a(e, t) {
    return e(t)
}

function Pa() {}
var Pl = !1;

function La(e, t, n) {
    if (Pl) return e(t, n);
    Pl = !0;
    try {
        return _a(e, t, n)
    } finally {
        Pl = !1, (Kt !== null || Yt !== null) && (Pa(), za())
    }
}

function Dn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = cl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(x(231, t, typeof n));
    return n
}
var fi = !1;
if (Ge) try {
    var pn = {};
    Object.defineProperty(pn, "passive", {
        get: function() {
            fi = !0
        }
    }), window.addEventListener("test", pn, pn), window.removeEventListener("test", pn, pn)
} catch {
    fi = !1
}

function Yc(e, t, n, r, l, i, s, a, u) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (v) {
        this.onError(v)
    }
}
var En = !1,
    Dr = null,
    Fr = !1,
    pi = null,
    Xc = {
        onError: function(e) {
            En = !0, Dr = e
        }
    };

function Zc(e, t, n, r, l, i, s, a, u) {
    En = !1, Dr = null, Yc.apply(Xc, arguments)
}

function qc(e, t, n, r, l, i, s, a, u) {
    if (Zc.apply(this, arguments), En) {
        if (En) {
            var d = Dr;
            En = !1, Dr = null
        } else throw Error(x(198));
        Fr || (Fr = !0, pi = d)
    }
}

function Mt(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Ta(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function bo(e) {
    if (Mt(e) !== e) throw Error(x(188))
}

function Jc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Mt(e), t === null) throw Error(x(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i;) {
                if (i === n) return bo(l), e;
                if (i === r) return bo(l), t;
                i = i.sibling
            }
            throw Error(x(188))
        }
        if (n.return !== r.return) n = l, r = i;
        else {
            for (var s = !1, a = l.child; a;) {
                if (a === n) {
                    s = !0, n = l, r = i;
                    break
                }
                if (a === r) {
                    s = !0, r = l, n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a;) {
                    if (a === n) {
                        s = !0, n = i, r = l;
                        break
                    }
                    if (a === r) {
                        s = !0, r = i, n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(x(189))
            }
        }
        if (n.alternate !== r) throw Error(x(190))
    }
    if (n.tag !== 3) throw Error(x(188));
    return n.stateNode.current === n ? e : t
}

function Ma(e) {
    return e = Jc(e), e !== null ? Ra(e) : null
}

function Ra(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Ra(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Ia = ye.unstable_scheduleCallback,
    es = ye.unstable_cancelCallback,
    bc = ye.unstable_shouldYield,
    ed = ye.unstable_requestPaint,
    Q = ye.unstable_now,
    td = ye.unstable_getCurrentPriorityLevel,
    to = ye.unstable_ImmediatePriority,
    Oa = ye.unstable_UserBlockingPriority,
    Ur = ye.unstable_NormalPriority,
    nd = ye.unstable_LowPriority,
    Da = ye.unstable_IdlePriority,
    ol = null,
    $e = null;

function rd(e) {
    if ($e && typeof $e.onCommitFiberRoot == "function") try {
        $e.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : od,
    ld = Math.log,
    id = Math.LN2;

function od(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ld(e) / id | 0) | 0
}
var ur = 64,
    cr = 4194304;

function jn(e) {
    switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function $r(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~l;
        a !== 0 ? r = jn(a) : (i &= s, i !== 0 && (r = jn(i)))
    } else s = n & ~l, s !== 0 ? r = jn(s) : i !== 0 && (r = jn(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Re(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function sd(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
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
            return t + 5e3;
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
            return -1
    }
}

function ad(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - Re(i),
            a = 1 << s,
            u = l[s];
        u === -1 ? (!(a & n) || a & r) && (l[s] = sd(a, t)) : u <= t && (e.expiredLanes |= a), i &= ~a
    }
}

function mi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Fa() {
    var e = ur;
    return ur <<= 1, !(ur & 4194240) && (ur = 64), e
}

function Ll(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Jn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Re(t), e[t] = n
}

function ud(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Re(n),
            i = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
    }
}

function no(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Re(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var R = 0;

function Ua(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var $a, ro, Aa, Va, Ba, hi = !1,
    dr = [],
    lt = null,
    it = null,
    ot = null,
    Fn = new Map,
    Un = new Map,
    et = [],
    cd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function ts(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            lt = null;
            break;
        case "dragenter":
        case "dragleave":
            it = null;
            break;
        case "mouseover":
        case "mouseout":
            ot = null;
            break;
        case "pointerover":
        case "pointerout":
            Fn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Un.delete(t.pointerId)
    }
}

function mn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    }, t !== null && (t = er(t), t !== null && ro(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function dd(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return lt = mn(lt, e, t, n, r, l), !0;
        case "dragenter":
            return it = mn(it, e, t, n, r, l), !0;
        case "mouseover":
            return ot = mn(ot, e, t, n, r, l), !0;
        case "pointerover":
            var i = l.pointerId;
            return Fn.set(i, mn(Fn.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return i = l.pointerId, Un.set(i, mn(Un.get(i) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Ha(e) {
    var t = Nt(e.target);
    if (t !== null) {
        var n = Mt(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Ta(n), t !== null) {
                    e.blockedOn = t, Ba(e.priority, function() {
                        Aa(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Cr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ci = r, n.target.dispatchEvent(r), ci = null
        } else return t = er(n), t !== null && ro(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function ns(e, t, n) {
    Cr(e) && n.delete(t)
}

function fd() {
    hi = !1, lt !== null && Cr(lt) && (lt = null), it !== null && Cr(it) && (it = null), ot !== null && Cr(ot) && (ot = null), Fn.forEach(ns), Un.forEach(ns)
}

function hn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, hi || (hi = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, fd)))
}

function $n(e) {
    function t(l) {
        return hn(l, e)
    }
    if (0 < dr.length) {
        hn(dr[0], e);
        for (var n = 1; n < dr.length; n++) {
            var r = dr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && hn(lt, e), it !== null && hn(it, e), ot !== null && hn(ot, e), Fn.forEach(t), Un.forEach(t), n = 0; n < et.length; n++) r = et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0], n.blockedOn === null);) Ha(n), n.blockedOn === null && et.shift()
}
var Xt = Ze.ReactCurrentBatchConfig,
    Ar = !0;

function pd(e, t, n, r) {
    var l = R,
        i = Xt.transition;
    Xt.transition = null;
    try {
        R = 1, lo(e, t, n, r)
    } finally {
        R = l, Xt.transition = i
    }
}

function md(e, t, n, r) {
    var l = R,
        i = Xt.transition;
    Xt.transition = null;
    try {
        R = 4, lo(e, t, n, r)
    } finally {
        R = l, Xt.transition = i
    }
}

function lo(e, t, n, r) {
    if (Ar) {
        var l = vi(e, t, n, r);
        if (l === null) Al(e, t, r, Vr, n), ts(e, r);
        else if (dd(l, e, t, n, r)) r.stopPropagation();
        else if (ts(e, r), t & 4 && -1 < cd.indexOf(e)) {
            for (; l !== null;) {
                var i = er(l);
                if (i !== null && $a(i), i = vi(e, t, n, r), i === null && Al(e, t, r, Vr, n), i === l) break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else Al(e, t, r, null, n)
    }
}
var Vr = null;

function vi(e, t, n, r) {
    if (Vr = null, e = eo(r), e = Nt(e), e !== null)
        if (t = Mt(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Ta(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Vr = e, null
}

function Wa(e) {
    switch (e) {
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
            switch (td()) {
                case to:
                    return 1;
                case Oa:
                    return 4;
                case Ur:
                case nd:
                    return 16;
                case Da:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var nt = null,
    io = null,
    Er = null;

function Qa() {
    if (Er) return Er;
    var e, t = io,
        n = t.length,
        r, l = "value" in nt ? nt.value : nt.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === l[i - r]; r++);
    return Er = l.slice(e, 1 < r ? 1 - r : void 0)
}

function zr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function fr() {
    return !0
}

function rs() {
    return !1
}

function Ne(e) {
    function t(n, r, l, i, s) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? fr : rs, this.isPropagationStopped = rs, this
    }
    return V(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = fr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = fr)
        },
        persist: function() {},
        isPersistent: fr
    }), t
}
var sn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    oo = Ne(sn),
    bn = V({}, sn, {
        view: 0,
        detail: 0
    }),
    hd = Ne(bn),
    Tl, Ml, vn, sl = V({}, bn, {
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
        getModifierState: so,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== vn && (vn && e.type === "mousemove" ? (Tl = e.screenX - vn.screenX, Ml = e.screenY - vn.screenY) : Ml = Tl = 0, vn = e), Tl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Ml
        }
    }),
    ls = Ne(sl),
    vd = V({}, sl, {
        dataTransfer: 0
    }),
    gd = Ne(vd),
    xd = V({}, bn, {
        relatedTarget: 0
    }),
    Rl = Ne(xd),
    yd = V({}, sn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    wd = Ne(yd),
    Nd = V({}, sn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    jd = Ne(Nd),
    Sd = V({}, sn, {
        data: 0
    }),
    is = Ne(Sd),
    kd = {
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
        MozPrintableKey: "Unidentified"
    },
    Cd = {
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
        224: "Meta"
    },
    Ed = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function zd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ed[e]) ? !!t[e] : !1
}

function so() {
    return zd
}
var _d = V({}, bn, {
        key: function(e) {
            if (e.key) {
                var t = kd[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Cd[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: so,
        charCode: function(e) {
            return e.type === "keypress" ? zr(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Pd = Ne(_d),
    Ld = V({}, sl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    os = Ne(Ld),
    Td = V({}, bn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: so
    }),
    Md = Ne(Td),
    Rd = V({}, sn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Id = Ne(Rd),
    Od = V({}, sl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Dd = Ne(Od),
    Fd = [9, 13, 27, 32],
    ao = Ge && "CompositionEvent" in window,
    zn = null;
Ge && "documentMode" in document && (zn = document.documentMode);
var Ud = Ge && "TextEvent" in window && !zn,
    Ga = Ge && (!ao || zn && 8 < zn && 11 >= zn),
    ss = " ",
    as = !1;

function Ka(e, t) {
    switch (e) {
        case "keyup":
            return Fd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Ya(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Dt = !1;

function $d(e, t) {
    switch (e) {
        case "compositionend":
            return Ya(t);
        case "keypress":
            return t.which !== 32 ? null : (as = !0, ss);
        case "textInput":
            return e = t.data, e === ss && as ? null : e;
        default:
            return null
    }
}

function Ad(e, t) {
    if (Dt) return e === "compositionend" || !ao && Ka(e, t) ? (e = Qa(), Er = io = nt = null, Dt = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Ga && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Vd = {
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
    week: !0
};

function us(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Vd[e.type] : t === "textarea"
}

function Xa(e, t, n, r) {
    Ea(r), t = Br(t, "onChange"), 0 < t.length && (n = new oo("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var _n = null,
    An = null;

function Bd(e) {
    ou(e, 0)
}

function al(e) {
    var t = $t(e);
    if (ya(t)) return e
}

function Hd(e, t) {
    if (e === "change") return t
}
var Za = !1;
if (Ge) {
    var Il;
    if (Ge) {
        var Ol = "oninput" in document;
        if (!Ol) {
            var cs = document.createElement("div");
            cs.setAttribute("oninput", "return;"), Ol = typeof cs.oninput == "function"
        }
        Il = Ol
    } else Il = !1;
    Za = Il && (!document.documentMode || 9 < document.documentMode)
}

function ds() {
    _n && (_n.detachEvent("onpropertychange", qa), An = _n = null)
}

function qa(e) {
    if (e.propertyName === "value" && al(An)) {
        var t = [];
        Xa(t, An, e, eo(e)), La(Bd, t)
    }
}

function Wd(e, t, n) {
    e === "focusin" ? (ds(), _n = t, An = n, _n.attachEvent("onpropertychange", qa)) : e === "focusout" && ds()
}

function Qd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return al(An)
}

function Gd(e, t) {
    if (e === "click") return al(t)
}

function Kd(e, t) {
    if (e === "input" || e === "change") return al(t)
}

function Yd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Oe = typeof Object.is == "function" ? Object.is : Yd;

function Vn(e, t) {
    if (Oe(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Jl.call(t, l) || !Oe(e[l], t[l])) return !1
    }
    return !0
}

function fs(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function ps(e, t) {
    var n = fs(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = fs(n)
    }
}

function Ja(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ja(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function ba() {
    for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Or(e.document)
    }
    return t
}

function uo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Xd(e) {
    var t = ba(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ja(n.ownerDocument.documentElement, n)) {
        if (r !== null && uo(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = ps(n, i);
                var s = ps(n, r);
                l && s && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Zd = Ge && "documentMode" in document && 11 >= document.documentMode,
    Ft = null,
    gi = null,
    Pn = null,
    xi = !1;

function ms(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xi || Ft == null || Ft !== Or(r) || (r = Ft, "selectionStart" in r && uo(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Pn && Vn(Pn, r) || (Pn = r, r = Br(gi, "onSelect"), 0 < r.length && (t = new oo("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Ft)))
}

function pr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Ut = {
        animationend: pr("Animation", "AnimationEnd"),
        animationiteration: pr("Animation", "AnimationIteration"),
        animationstart: pr("Animation", "AnimationStart"),
        transitionend: pr("Transition", "TransitionEnd")
    },
    Dl = {},
    eu = {};
Ge && (eu = document.createElement("div").style, "AnimationEvent" in window || (delete Ut.animationend.animation, delete Ut.animationiteration.animation, delete Ut.animationstart.animation), "TransitionEvent" in window || delete Ut.transitionend.transition);

function ul(e) {
    if (Dl[e]) return Dl[e];
    if (!Ut[e]) return e;
    var t = Ut[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in eu) return Dl[e] = t[n];
    return e
}
var tu = ul("animationend"),
    nu = ul("animationiteration"),
    ru = ul("animationstart"),
    lu = ul("transitionend"),
    iu = new Map,
    hs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function mt(e, t) {
    iu.set(e, t), Tt(t, [e])
}
for (var Fl = 0; Fl < hs.length; Fl++) {
    var Ul = hs[Fl],
        qd = Ul.toLowerCase(),
        Jd = Ul[0].toUpperCase() + Ul.slice(1);
    mt(qd, "on" + Jd)
}
mt(tu, "onAnimationEnd");
mt(nu, "onAnimationIteration");
mt(ru, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(lu, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    bd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));

function vs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, qc(r, t, void 0, e), e.currentTarget = null
}

function ou(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        u = a.instance,
                        d = a.currentTarget;
                    if (a = a.listener, u !== i && l.isPropagationStopped()) break e;
                    vs(l, a, d), i = u
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], u = a.instance, d = a.currentTarget, a = a.listener, u !== i && l.isPropagationStopped()) break e;
                        vs(l, a, d), i = u
                    }
        }
    }
    if (Fr) throw e = pi, Fr = !1, pi = null, e
}

function O(e, t) {
    var n = t[Si];
    n === void 0 && (n = t[Si] = new Set);
    var r = e + "__bubble";
    n.has(r) || (su(t, e, 2, !1), n.add(r))
}

function $l(e, t, n) {
    var r = 0;
    t && (r |= 4), su(n, e, r, t)
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);

function Bn(e) {
    if (!e[mr]) {
        e[mr] = !0, ma.forEach(function(n) {
            n !== "selectionchange" && (bd.has(n) || $l(n, !1, e), $l(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[mr] || (t[mr] = !0, $l("selectionchange", !1, t))
    }
}

function su(e, t, n, r) {
    switch (Wa(t)) {
        case 1:
            var l = pd;
            break;
        case 4:
            l = md;
            break;
        default:
            l = lo
    }
    n = l.bind(null, t, n, e), l = void 0, !fi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Al(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === l || a.nodeType === 8 && a.parentNode === l) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var u = s.tag;
                    if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = Nt(a), s === null) return;
                if (u = s.tag, u === 5 || u === 6) {
                    r = i = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    La(function() {
        var d = i,
            v = eo(n),
            h = [];
        e: {
            var m = iu.get(e);
            if (m !== void 0) {
                var y = oo,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (zr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = Pd;
                        break;
                    case "focusin":
                        w = "focus", y = Rl;
                        break;
                    case "focusout":
                        w = "blur", y = Rl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Rl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = ls;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = gd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = Md;
                        break;
                    case tu:
                    case nu:
                    case ru:
                        y = wd;
                        break;
                    case lu:
                        y = Id;
                        break;
                    case "scroll":
                        y = hd;
                        break;
                    case "wheel":
                        y = Dd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = jd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = os
                }
                var N = (t & 4) !== 0,
                    F = !N && e === "scroll",
                    f = N ? m !== null ? m + "Capture" : null : m;
                N = [];
                for (var c = d, p; c !== null;) {
                    p = c;
                    var g = p.stateNode;
                    if (p.tag === 5 && g !== null && (p = g, f !== null && (g = Dn(c, f), g != null && N.push(Hn(c, g, p)))), F) break;
                    c = c.return
                }
                0 < N.length && (m = new y(m, w, null, n, v), h.push({
                    event: m,
                    listeners: N
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== ci && (w = n.relatedTarget || n.fromElement) && (Nt(w) || w[Ke])) break e;
                if ((y || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = d, w = w ? Nt(w) : null, w !== null && (F = Mt(w), w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = d), y !== w)) {
                    if (N = ls, g = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (N = os, g = "onPointerLeave", f = "onPointerEnter", c = "pointer"), F = y == null ? m : $t(y), p = w == null ? m : $t(w), m = new N(g, c + "leave", y, n, v), m.target = F, m.relatedTarget = p, g = null, Nt(v) === d && (N = new N(f, c + "enter", w, n, v), N.target = p, N.relatedTarget = F, g = N), F = g, y && w) t: {
                        for (N = y, f = w, c = 0, p = N; p; p = Rt(p)) c++;
                        for (p = 0, g = f; g; g = Rt(g)) p++;
                        for (; 0 < c - p;) N = Rt(N),
                        c--;
                        for (; 0 < p - c;) f = Rt(f),
                        p--;
                        for (; c--;) {
                            if (N === f || f !== null && N === f.alternate) break t;
                            N = Rt(N), f = Rt(f)
                        }
                        N = null
                    }
                    else N = null;
                    y !== null && gs(h, m, y, N, !1), w !== null && F !== null && gs(h, F, w, N, !0)
                }
            }
            e: {
                if (m = d ? $t(d) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var S = Hd;
                else if (us(m))
                    if (Za) S = Kd;
                    else {
                        S = Qd;
                        var C = Wd
                    }
                else(y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = Gd);
                if (S && (S = S(e, d))) {
                    Xa(h, S, n, v);
                    break e
                }
                C && C(e, m, d),
                e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && ii(m, "number", m.value)
            }
            switch (C = d ? $t(d) : window, e) {
                case "focusin":
                    (us(C) || C.contentEditable === "true") && (Ft = C, gi = d, Pn = null);
                    break;
                case "focusout":
                    Pn = gi = Ft = null;
                    break;
                case "mousedown":
                    xi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    xi = !1, ms(h, n, v);
                    break;
                case "selectionchange":
                    if (Zd) break;
                case "keydown":
                case "keyup":
                    ms(h, n, v)
            }
            var E;
            if (ao) e: {
                switch (e) {
                    case "compositionstart":
                        var z = "onCompositionStart";
                        break e;
                    case "compositionend":
                        z = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        z = "onCompositionUpdate";
                        break e
                }
                z = void 0
            }
            else Dt ? Ka(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");z && (Ga && n.locale !== "ko" && (Dt || z !== "onCompositionStart" ? z === "onCompositionEnd" && Dt && (E = Qa()) : (nt = v, io = "value" in nt ? nt.value : nt.textContent, Dt = !0)), C = Br(d, z), 0 < C.length && (z = new is(z, e, null, n, v), h.push({
                event: z,
                listeners: C
            }), E ? z.data = E : (E = Ya(n), E !== null && (z.data = E)))),
            (E = Ud ? $d(e, n) : Ad(e, n)) && (d = Br(d, "onBeforeInput"), 0 < d.length && (v = new is("onBeforeInput", "beforeinput", null, n, v), h.push({
                event: v,
                listeners: d
            }), v.data = E))
        }
        ou(h, t)
    })
}

function Hn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Br(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 && i !== null && (l = i, i = Dn(e, n), i != null && r.unshift(Hn(e, i, l)), i = Dn(e, t), i != null && r.push(Hn(e, i, l))), e = e.return
    }
    return r
}

function Rt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function gs(e, t, n, r, l) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            u = a.alternate,
            d = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 && d !== null && (a = d, l ? (u = Dn(n, i), u != null && s.unshift(Hn(n, u, a))) : l || (u = Dn(n, i), u != null && s.push(Hn(n, u, a)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var ef = /\r\n?/g,
    tf = /\u0000|\uFFFD/g;

function xs(e) {
    return (typeof e == "string" ? e : "" + e).replace(ef, `
`).replace(tf, "")
}

function hr(e, t, n) {
    if (t = xs(t), xs(e) !== t && n) throw Error(x(425))
}

function Hr() {}
var yi = null,
    wi = null;

function Ni(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ji = typeof setTimeout == "function" ? setTimeout : void 0,
    nf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ys = typeof Promise == "function" ? Promise : void 0,
    rf = typeof queueMicrotask == "function" ? queueMicrotask : typeof ys < "u" ? function(e) {
        return ys.resolve(null).then(e).catch(lf)
    } : ji;

function lf(e) {
    setTimeout(function() {
        throw e
    })
}

function Vl(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), $n(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    $n(t)
}

function st(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function ws(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var an = Math.random().toString(36).slice(2),
    Ue = "__reactFiber$" + an,
    Wn = "__reactProps$" + an,
    Ke = "__reactContainer$" + an,
    Si = "__reactEvents$" + an,
    of = "__reactListeners$" + an,
    sf = "__reactHandles$" + an;

function Nt(e) {
    var t = e[Ue];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ke] || n[Ue]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ws(e); e !== null;) {
                    if (n = e[Ue]) return n;
                    e = ws(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function er(e) {
    return e = e[Ue] || e[Ke], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function $t(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(x(33))
}

function cl(e) {
    return e[Wn] || null
}
var ki = [],
    At = -1;

function ht(e) {
    return {
        current: e
    }
}

function D(e) {
    0 > At || (e.current = ki[At], ki[At] = null, At--)
}

function I(e, t) {
    At++, ki[At] = e.current, e.current = t
}
var pt = {},
    ie = ht(pt),
    fe = ht(!1),
    Et = pt;

function bt(e, t) {
    var n = e.type.contextTypes;
    if (!n) return pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function pe(e) {
    return e = e.childContextTypes, e != null
}

function Wr() {
    D(fe), D(ie)
}

function Ns(e, t, n) {
    if (ie.current !== pt) throw Error(x(168));
    I(ie, t), I(fe, n)
}

function au(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(x(108, Wc(e) || "Unknown", l));
    return V({}, n, r)
}

function Qr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt, Et = ie.current, I(ie, e), I(fe, fe.current), !0
}

function js(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(x(169));
    n ? (e = au(e, t, Et), r.__reactInternalMemoizedMergedChildContext = e, D(fe), D(ie), I(ie, e)) : D(fe), I(fe, n)
}
var Be = null,
    dl = !1,
    Bl = !1;

function uu(e) {
    Be === null ? Be = [e] : Be.push(e)
}

function af(e) {
    dl = !0, uu(e)
}

function vt() {
    if (!Bl && Be !== null) {
        Bl = !0;
        var e = 0,
            t = R;
        try {
            var n = Be;
            for (R = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Be = null, dl = !1
        } catch (l) {
            throw Be !== null && (Be = Be.slice(e + 1)), Ia(to, vt), l
        } finally {
            R = t, Bl = !1
        }
    }
    return null
}
var Vt = [],
    Bt = 0,
    Gr = null,
    Kr = 0,
    je = [],
    Se = 0,
    zt = null,
    He = 1,
    We = "";

function yt(e, t) {
    Vt[Bt++] = Kr, Vt[Bt++] = Gr, Gr = e, Kr = t
}

function cu(e, t, n) {
    je[Se++] = He, je[Se++] = We, je[Se++] = zt, zt = e;
    var r = He;
    e = We;
    var l = 32 - Re(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - Re(t) + l;
    if (30 < i) {
        var s = l - l % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, He = 1 << 32 - Re(t) + l | n << l | r, We = i + e
    } else He = 1 << i | n << l | r, We = e
}

function co(e) {
    e.return !== null && (yt(e, 1), cu(e, 1, 0))
}

function fo(e) {
    for (; e === Gr;) Gr = Vt[--Bt], Vt[Bt] = null, Kr = Vt[--Bt], Vt[Bt] = null;
    for (; e === zt;) zt = je[--Se], je[Se] = null, We = je[--Se], je[Se] = null, He = je[--Se], je[Se] = null
}
var xe = null,
    ve = null,
    U = !1,
    Me = null;

function du(e, t) {
    var n = ke(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Ss(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xe = e, ve = st(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xe = e, ve = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? {
                id: He,
                overflow: We
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = ke(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xe = e, ve = null, !0) : !1;
        default:
            return !1
    }
}

function Ci(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ei(e) {
    if (U) {
        var t = ve;
        if (t) {
            var n = t;
            if (!Ss(e, t)) {
                if (Ci(e)) throw Error(x(418));
                t = st(n.nextSibling);
                var r = xe;
                t && Ss(e, t) ? du(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, xe = e)
            }
        } else {
            if (Ci(e)) throw Error(x(418));
            e.flags = e.flags & -4097 | 2, U = !1, xe = e
        }
    }
}

function ks(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    xe = e
}

function vr(e) {
    if (e !== xe) return !1;
    if (!U) return ks(e), U = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ni(e.type, e.memoizedProps)), t && (t = ve)) {
        if (Ci(e)) throw fu(), Error(x(418));
        for (; t;) du(e, t), t = st(t.nextSibling)
    }
    if (ks(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ve = st(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ve = null
        }
    } else ve = xe ? st(e.stateNode.nextSibling) : null;
    return !0
}

function fu() {
    for (var e = ve; e;) e = st(e.nextSibling)
}

function en() {
    ve = xe = null, U = !1
}

function po(e) {
    Me === null ? Me = [e] : Me.push(e)
}
var uf = Ze.ReactCurrentBatchConfig;

function gn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(x(309));
                var r = n.stateNode
            }
            if (!r) throw Error(x(147, e));
            var l = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = l.refs;
                s === null ? delete a[i] : a[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(x(284));
        if (!n._owner) throw Error(x(290, e))
    }
    return e
}

function gr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Cs(e) {
    var t = e._init;
    return t(e._payload)
}

function pu(e) {
    function t(f, c) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c)
        }
    }

    function n(f, c) {
        if (!e) return null;
        for (; c !== null;) t(f, c), c = c.sibling;
        return null
    }

    function r(f, c) {
        for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f
    }

    function l(f, c) {
        return f = dt(f, c), f.index = 0, f.sibling = null, f
    }

    function i(f, c, p) {
        return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
    }

    function s(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function a(f, c, p, g) {
        return c === null || c.tag !== 6 ? (c = Xl(p, f.mode, g), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function u(f, c, p, g) {
        var S = p.type;
        return S === Ot ? v(f, c, p.props.children, g, p.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Je && Cs(S) === c.type) ? (g = l(c, p.props), g.ref = gn(f, c, p), g.return = f, g) : (g = Ir(p.type, p.key, p.props, null, f.mode, g), g.ref = gn(f, c, p), g.return = f, g)
    }

    function d(f, c, p, g) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Zl(p, f.mode, g), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c)
    }

    function v(f, c, p, g, S) {
        return c === null || c.tag !== 7 ? (c = Ct(p, f.mode, g, S), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function h(f, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = Xl("" + c, f.mode, p), c.return = f, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case or:
                    return p = Ir(c.type, c.key, c.props, null, f.mode, p), p.ref = gn(f, null, c), p.return = f, p;
                case It:
                    return c = Zl(c, f.mode, p), c.return = f, c;
                case Je:
                    var g = c._init;
                    return h(f, g(c._payload), p)
            }
            if (Nn(c) || fn(c)) return c = Ct(c, f.mode, p, null), c.return = f, c;
            gr(f, c)
        }
        return null
    }

    function m(f, c, p, g) {
        var S = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return S !== null ? null : a(f, c, "" + p, g);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case or:
                    return p.key === S ? u(f, c, p, g) : null;
                case It:
                    return p.key === S ? d(f, c, p, g) : null;
                case Je:
                    return S = p._init, m(f, c, S(p._payload), g)
            }
            if (Nn(p) || fn(p)) return S !== null ? null : v(f, c, p, g, null);
            gr(f, p)
        }
        return null
    }

    function y(f, c, p, g, S) {
        if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(p) || null, a(c, f, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case or:
                    return f = f.get(g.key === null ? p : g.key) || null, u(c, f, g, S);
                case It:
                    return f = f.get(g.key === null ? p : g.key) || null, d(c, f, g, S);
                case Je:
                    var C = g._init;
                    return y(f, c, p, C(g._payload), S)
            }
            if (Nn(g) || fn(g)) return f = f.get(p) || null, v(c, f, g, S, null);
            gr(c, g)
        }
        return null
    }

    function w(f, c, p, g) {
        for (var S = null, C = null, E = c, z = c = 0, H = null; E !== null && z < p.length; z++) {
            E.index > z ? (H = E, E = null) : H = E.sibling;
            var T = m(f, E, p[z], g);
            if (T === null) {
                E === null && (E = H);
                break
            }
            e && E && T.alternate === null && t(f, E), c = i(T, c, z), C === null ? S = T : C.sibling = T, C = T, E = H
        }
        if (z === p.length) return n(f, E), U && yt(f, z), S;
        if (E === null) {
            for (; z < p.length; z++) E = h(f, p[z], g), E !== null && (c = i(E, c, z), C === null ? S = E : C.sibling = E, C = E);
            return U && yt(f, z), S
        }
        for (E = r(f, E); z < p.length; z++) H = y(E, f, z, p[z], g), H !== null && (e && H.alternate !== null && E.delete(H.key === null ? z : H.key), c = i(H, c, z), C === null ? S = H : C.sibling = H, C = H);
        return e && E.forEach(function(_e) {
            return t(f, _e)
        }), U && yt(f, z), S
    }

    function N(f, c, p, g) {
        var S = fn(p);
        if (typeof S != "function") throw Error(x(150));
        if (p = S.call(p), p == null) throw Error(x(151));
        for (var C = S = null, E = c, z = c = 0, H = null, T = p.next(); E !== null && !T.done; z++, T = p.next()) {
            E.index > z ? (H = E, E = null) : H = E.sibling;
            var _e = m(f, E, T.value, g);
            if (_e === null) {
                E === null && (E = H);
                break
            }
            e && E && _e.alternate === null && t(f, E), c = i(_e, c, z), C === null ? S = _e : C.sibling = _e, C = _e, E = H
        }
        if (T.done) return n(f, E), U && yt(f, z), S;
        if (E === null) {
            for (; !T.done; z++, T = p.next()) T = h(f, T.value, g), T !== null && (c = i(T, c, z), C === null ? S = T : C.sibling = T, C = T);
            return U && yt(f, z), S
        }
        for (E = r(f, E); !T.done; z++, T = p.next()) T = y(E, f, z, T.value, g), T !== null && (e && T.alternate !== null && E.delete(T.key === null ? z : T.key), c = i(T, c, z), C === null ? S = T : C.sibling = T, C = T);
        return e && E.forEach(function(cn) {
            return t(f, cn)
        }), U && yt(f, z), S
    }

    function F(f, c, p, g) {
        if (typeof p == "object" && p !== null && p.type === Ot && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case or:
                    e: {
                        for (var S = p.key, C = c; C !== null;) {
                            if (C.key === S) {
                                if (S = p.type, S === Ot) {
                                    if (C.tag === 7) {
                                        n(f, C.sibling), c = l(C, p.props.children), c.return = f, f = c;
                                        break e
                                    }
                                } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Je && Cs(S) === C.type) {
                                    n(f, C.sibling), c = l(C, p.props), c.ref = gn(f, C, p), c.return = f, f = c;
                                    break e
                                }
                                n(f, C);
                                break
                            } else t(f, C);
                            C = C.sibling
                        }
                        p.type === Ot ? (c = Ct(p.props.children, f.mode, g, p.key), c.return = f, f = c) : (g = Ir(p.type, p.key, p.props, null, f.mode, g), g.ref = gn(f, c, p), g.return = f, f = g)
                    }
                    return s(f);
                case It:
                    e: {
                        for (C = p.key; c !== null;) {
                            if (c.key === C)
                                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                    n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                                    break e
                                } else {
                                    n(f, c);
                                    break
                                }
                            else t(f, c);
                            c = c.sibling
                        }
                        c = Zl(p, f.mode, g),
                        c.return = f,
                        f = c
                    }
                    return s(f);
                case Je:
                    return C = p._init, F(f, c, C(p._payload), g)
            }
            if (Nn(p)) return w(f, c, p, g);
            if (fn(p)) return N(f, c, p, g);
            gr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = Xl(p, f.mode, g), c.return = f, f = c), s(f)) : n(f, c)
    }
    return F
}
var tn = pu(!0),
    mu = pu(!1),
    Yr = ht(null),
    Xr = null,
    Ht = null,
    mo = null;

function ho() {
    mo = Ht = Xr = null
}

function vo(e) {
    var t = Yr.current;
    D(Yr), e._currentValue = t
}

function zi(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Zt(e, t) {
    Xr = e, mo = Ht = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (de = !0), e.firstContext = null)
}

function Ee(e) {
    var t = e._currentValue;
    if (mo !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Ht === null) {
            if (Xr === null) throw Error(x(308));
            Ht = e, Xr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Ht = Ht.next = e;
    return t
}
var jt = null;

function go(e) {
    jt === null ? jt = [e] : jt.push(e)
}

function hu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, go(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ye(e, r)
}

function Ye(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var be = !1;

function xo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function vu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Qe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function at(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ye(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, go(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ye(e, n)
}

function _r(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, no(e, n)
    }
}

function Es(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Zr(e, t, n, r) {
    var l = e.updateQueue;
    be = !1;
    var i = l.firstBaseUpdate,
        s = l.lastBaseUpdate,
        a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a,
            d = u.next;
        u.next = null, s === null ? i = d : s.next = d, s = u;
        var v = e.alternate;
        v !== null && (v = v.updateQueue, a = v.lastBaseUpdate, a !== s && (a === null ? v.firstBaseUpdate = d : a.next = d, v.lastBaseUpdate = u))
    }
    if (i !== null) {
        var h = l.baseState;
        s = 0, v = d = u = null, a = i;
        do {
            var m = a.lane,
                y = a.eventTime;
            if ((r & m) === m) {
                v !== null && (v = v.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var w = e,
                        N = a;
                    switch (m = t, y = n, N.tag) {
                        case 1:
                            if (w = N.payload, typeof w == "function") {
                                h = w.call(y, h, m);
                                break e
                            }
                            h = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = N.payload, m = typeof w == "function" ? w.call(y, h, m) : w, m == null) break e;
                            h = V({}, h, m);
                            break e;
                        case 2:
                            be = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [a] : m.push(a))
            } else y = {
                eventTime: y,
                lane: m,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, v === null ? (d = v = y, u = h) : v = v.next = y, s |= m;
            if (a = a.next, a === null) {
                if (a = l.shared.pending, a === null) break;
                m = a, a = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null
            }
        } while (!0);
        if (v === null && (u = h), l.baseState = u, l.firstBaseUpdate = d, l.lastBaseUpdate = v, t = l.shared.interleaved, t !== null) {
            l = t;
            do s |= l.lane, l = l.next; while (l !== t)
        } else i === null && (l.shared.lanes = 0);
        Pt |= s, e.lanes = s, e.memoizedState = h
    }
}

function zs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(x(191, l));
                l.call(r)
            }
        }
}
var tr = {},
    Ae = ht(tr),
    Qn = ht(tr),
    Gn = ht(tr);

function St(e) {
    if (e === tr) throw Error(x(174));
    return e
}

function yo(e, t) {
    switch (I(Gn, t), I(Qn, e), I(Ae, tr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : si(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = si(t, e)
    }
    D(Ae), I(Ae, t)
}

function nn() {
    D(Ae), D(Qn), D(Gn)
}

function gu(e) {
    St(Gn.current);
    var t = St(Ae.current),
        n = si(t, e.type);
    t !== n && (I(Qn, e), I(Ae, n))
}

function wo(e) {
    Qn.current === e && (D(Ae), D(Qn))
}
var $ = ht(0);

function qr(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Hl = [];

function No() {
    for (var e = 0; e < Hl.length; e++) Hl[e]._workInProgressVersionPrimary = null;
    Hl.length = 0
}
var Pr = Ze.ReactCurrentDispatcher,
    Wl = Ze.ReactCurrentBatchConfig,
    _t = 0,
    A = null,
    K = null,
    Z = null,
    Jr = !1,
    Ln = !1,
    Kn = 0,
    cf = 0;

function ne() {
    throw Error(x(321))
}

function jo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Oe(e[n], t[n])) return !1;
    return !0
}

function So(e, t, n, r, l, i) {
    if (_t = i, A = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Pr.current = e === null || e.memoizedState === null ? mf : hf, e = n(r, l), Ln) {
        i = 0;
        do {
            if (Ln = !1, Kn = 0, 25 <= i) throw Error(x(301));
            i += 1, Z = K = null, t.updateQueue = null, Pr.current = vf, e = n(r, l)
        } while (Ln)
    }
    if (Pr.current = br, t = K !== null && K.next !== null, _t = 0, Z = K = A = null, Jr = !1, t) throw Error(x(300));
    return e
}

function ko() {
    var e = Kn !== 0;
    return Kn = 0, e
}

function Fe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Z === null ? A.memoizedState = Z = e : Z = Z.next = e, Z
}

function ze() {
    if (K === null) {
        var e = A.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = K.next;
    var t = Z === null ? A.memoizedState : Z.next;
    if (t !== null) Z = t, K = e;
    else {
        if (e === null) throw Error(x(310));
        K = e, e = {
            memoizedState: K.memoizedState,
            baseState: K.baseState,
            baseQueue: K.baseQueue,
            queue: K.queue,
            next: null
        }, Z === null ? A.memoizedState = Z = e : Z = Z.next = e
    }
    return Z
}

function Yn(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Ql(e) {
    var t = ze(),
        n = t.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = e;
    var r = K,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var s = l.next;
            l.next = i.next, i.next = s
        }
        r.baseQueue = l = i, n.pending = null
    }
    if (l !== null) {
        i = l.next, r = r.baseState;
        var a = s = null,
            u = null,
            d = i;
        do {
            var v = d.lane;
            if ((_t & v) === v) u !== null && (u = u.next = {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null
            }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var h = {
                    lane: v,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                u === null ? (a = u = h, s = r) : u = u.next = h, A.lanes |= v, Pt |= v
            }
            d = d.next
        } while (d !== null && d !== i);
        u === null ? s = r : u.next = a, Oe(r, t.memoizedState) || (de = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do i = l.lane, A.lanes |= i, Pt |= i, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Gl(e) {
    var t = ze(),
        n = t.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var s = l = l.next;
        do i = e(i, s.action), s = s.next; while (s !== l);
        Oe(i, t.memoizedState) || (de = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function xu() {}

function yu(e, t) {
    var n = A,
        r = ze(),
        l = t(),
        i = !Oe(r.memoizedState, l);
    if (i && (r.memoizedState = l, de = !0), r = r.queue, Co(ju.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Z !== null && Z.memoizedState.tag & 1) {
        if (n.flags |= 2048, Xn(9, Nu.bind(null, n, r, l, t), void 0, null), q === null) throw Error(x(349));
        _t & 30 || wu(n, t, l)
    }
    return l
}

function wu(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = A.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, A.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Nu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Su(t) && ku(e)
}

function ju(e, t, n) {
    return n(function() {
        Su(t) && ku(e)
    })
}

function Su(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Oe(e, n)
    } catch {
        return !0
    }
}

function ku(e) {
    var t = Ye(e, 1);
    t !== null && Ie(t, e, 1, -1)
}

function _s(e) {
    var t = Fe();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = pf.bind(null, A, e), [t.memoizedState, e]
}

function Xn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = A.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, A.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Cu() {
    return ze().memoizedState
}

function Lr(e, t, n, r) {
    var l = Fe();
    A.flags |= e, l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r)
}

function fl(e, t, n, r) {
    var l = ze();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (K !== null) {
        var s = K.memoizedState;
        if (i = s.destroy, r !== null && jo(r, s.deps)) {
            l.memoizedState = Xn(t, n, i, r);
            return
        }
    }
    A.flags |= e, l.memoizedState = Xn(1 | t, n, i, r)
}

function Ps(e, t) {
    return Lr(8390656, 8, e, t)
}

function Co(e, t) {
    return fl(2048, 8, e, t)
}

function Eu(e, t) {
    return fl(4, 2, e, t)
}

function zu(e, t) {
    return fl(4, 4, e, t)
}

function _u(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Pu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, fl(4, 4, _u.bind(null, t, e), n)
}

function Eo() {}

function Lu(e, t) {
    var n = ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && jo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Tu(e, t) {
    var n = ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && jo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Mu(e, t, n) {
    return _t & 21 ? (Oe(n, t) || (n = Fa(), A.lanes |= n, Pt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, de = !0), e.memoizedState = n)
}

function df(e, t) {
    var n = R;
    R = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Wl.transition;
    Wl.transition = {};
    try {
        e(!1), t()
    } finally {
        R = n, Wl.transition = r
    }
}

function Ru() {
    return ze().memoizedState
}

function ff(e, t, n) {
    var r = ct(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Iu(e)) Ou(t, n);
    else if (n = hu(e, t, n, r), n !== null) {
        var l = se();
        Ie(n, e, r, l), Du(n, t, r)
    }
}

function pf(e, t, n) {
    var r = ct(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Iu(e)) Ou(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState,
                a = i(s, n);
            if (l.hasEagerState = !0, l.eagerState = a, Oe(a, s)) {
                var u = t.interleaved;
                u === null ? (l.next = l, go(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = hu(e, t, l, r), n !== null && (l = se(), Ie(n, e, r, l), Du(n, t, r))
    }
}

function Iu(e) {
    var t = e.alternate;
    return e === A || t !== null && t === A
}

function Ou(e, t) {
    Ln = Jr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Du(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, no(e, n)
    }
}
var br = {
        readContext: Ee,
        useCallback: ne,
        useContext: ne,
        useEffect: ne,
        useImperativeHandle: ne,
        useInsertionEffect: ne,
        useLayoutEffect: ne,
        useMemo: ne,
        useReducer: ne,
        useRef: ne,
        useState: ne,
        useDebugValue: ne,
        useDeferredValue: ne,
        useTransition: ne,
        useMutableSource: ne,
        useSyncExternalStore: ne,
        useId: ne,
        unstable_isNewReconciler: !1
    },
    mf = {
        readContext: Ee,
        useCallback: function(e, t) {
            return Fe().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ee,
        useEffect: Ps,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Lr(4194308, 4, _u.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Lr(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Lr(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Fe();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Fe();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = ff.bind(null, A, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Fe();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: _s,
        useDebugValue: Eo,
        useDeferredValue: function(e) {
            return Fe().memoizedState = e
        },
        useTransition: function() {
            var e = _s(!1),
                t = e[0];
            return e = df.bind(null, e[1]), Fe().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = A,
                l = Fe();
            if (U) {
                if (n === void 0) throw Error(x(407));
                n = n()
            } else {
                if (n = t(), q === null) throw Error(x(349));
                _t & 30 || wu(r, t, n)
            }
            l.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return l.queue = i, Ps(ju.bind(null, r, i, e), [e]), r.flags |= 2048, Xn(9, Nu.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = Fe(),
                t = q.identifierPrefix;
            if (U) {
                var n = We,
                    r = He;
                n = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kn++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = cf++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    hf = {
        readContext: Ee,
        useCallback: Lu,
        useContext: Ee,
        useEffect: Co,
        useImperativeHandle: Pu,
        useInsertionEffect: Eu,
        useLayoutEffect: zu,
        useMemo: Tu,
        useReducer: Ql,
        useRef: Cu,
        useState: function() {
            return Ql(Yn)
        },
        useDebugValue: Eo,
        useDeferredValue: function(e) {
            var t = ze();
            return Mu(t, K.memoizedState, e)
        },
        useTransition: function() {
            var e = Ql(Yn)[0],
                t = ze().memoizedState;
            return [e, t]
        },
        useMutableSource: xu,
        useSyncExternalStore: yu,
        useId: Ru,
        unstable_isNewReconciler: !1
    },
    vf = {
        readContext: Ee,
        useCallback: Lu,
        useContext: Ee,
        useEffect: Co,
        useImperativeHandle: Pu,
        useInsertionEffect: Eu,
        useLayoutEffect: zu,
        useMemo: Tu,
        useReducer: Gl,
        useRef: Cu,
        useState: function() {
            return Gl(Yn)
        },
        useDebugValue: Eo,
        useDeferredValue: function(e) {
            var t = ze();
            return K === null ? t.memoizedState = e : Mu(t, K.memoizedState, e)
        },
        useTransition: function() {
            var e = Gl(Yn)[0],
                t = ze().memoizedState;
            return [e, t]
        },
        useMutableSource: xu,
        useSyncExternalStore: yu,
        useId: Ru,
        unstable_isNewReconciler: !1
    };

function Le(e, t) {
    if (e && e.defaultProps) {
        t = V({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function _i(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var pl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Mt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = se(),
            l = ct(e),
            i = Qe(r, l);
        i.payload = t, n != null && (i.callback = n), t = at(e, i, l), t !== null && (Ie(t, e, l, r), _r(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = se(),
            l = ct(e),
            i = Qe(r, l);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = at(e, i, l), t !== null && (Ie(t, e, l, r), _r(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = se(),
            r = ct(e),
            l = Qe(n, r);
        l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (Ie(t, e, r, n), _r(t, e, r))
    }
};

function Ls(e, t, n, r, l, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Vn(n, r) || !Vn(l, i) : !0
}

function Fu(e, t, n) {
    var r = !1,
        l = pt,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = Ee(i) : (l = pe(t) ? Et : ie.current, r = t.contextTypes, i = (r = r != null) ? bt(e, l) : pt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function Ts(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pl.enqueueReplaceState(t, t.state, null)
}

function Pi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, xo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = Ee(i) : (i = pe(t) ? Et : ie.current, l.context = bt(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (_i(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && pl.enqueueReplaceState(l, l.state, null), Zr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function rn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Hc(r), r = r.return; while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Kl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Li(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var gf = typeof WeakMap == "function" ? WeakMap : Map;

function Uu(e, t, n) {
    n = Qe(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        tl || (tl = !0, Ai = r), Li(e, t)
    }, n
}

function $u(e, t, n) {
    n = Qe(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            Li(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Li(e, t), typeof r != "function" && (ut === null ? ut = new Set([this]) : ut.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function Ms(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new gf;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = Tf.bind(null, e, t, n), t.then(e, e))
}

function Rs(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Is(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e)
}
var xf = Ze.ReactCurrentOwner,
    de = !1;

function oe(e, t, n, r) {
    t.child = e === null ? mu(t, null, n, r) : tn(t, e.child, n, r)
}

function Os(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Zt(t, l), r = So(e, t, n, r, i, l), n = ko(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Xe(e, t, l)) : (U && n && co(t), t.flags |= 1, oe(e, t, r, l), t.child)
}

function Ds(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Io(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Au(e, t, i, r, l)) : (e = Ir(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & l)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Vn, n(s, r) && e.ref === t.ref) return Xe(e, t, l)
    }
    return t.flags |= 1, e = dt(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Au(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Vn(i, r) && e.ref === t.ref)
            if (de = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (de = !0);
            else return t.lanes = e.lanes, Xe(e, t, l)
    }
    return Ti(e, t, n, r, l)
}

function Vu(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, I(Qt, he), he |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, I(Qt, he), he |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, I(Qt, he), he |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, I(Qt, he), he |= r;
    return oe(e, t, l, n), t.child
}

function Bu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ti(e, t, n, r, l) {
    var i = pe(n) ? Et : ie.current;
    return i = bt(t, i), Zt(t, l), n = So(e, t, n, r, i, l), r = ko(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Xe(e, t, l)) : (U && r && co(t), t.flags |= 1, oe(e, t, n, l), t.child)
}

function Fs(e, t, n, r, l) {
    if (pe(n)) {
        var i = !0;
        Qr(t)
    } else i = !1;
    if (Zt(t, l), t.stateNode === null) Tr(e, t), Fu(t, n, r), Pi(t, n, r, l), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var u = s.context,
            d = n.contextType;
        typeof d == "object" && d !== null ? d = Ee(d) : (d = pe(n) ? Et : ie.current, d = bt(t, d));
        var v = n.getDerivedStateFromProps,
            h = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || u !== d) && Ts(t, s, r, d), be = !1;
        var m = t.memoizedState;
        s.state = m, Zr(t, r, s, l), u = t.memoizedState, a !== r || m !== u || fe.current || be ? (typeof v == "function" && (_i(t, n, v, r), u = t.memoizedState), (a = be || Ls(t, n, a, r, m, u, d)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = d, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, vu(e, t), a = t.memoizedProps, d = t.type === t.elementType ? a : Le(t.type, a), s.props = d, h = t.pendingProps, m = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ee(u) : (u = pe(n) ? Et : ie.current, u = bt(t, u));
        var y = n.getDerivedStateFromProps;
        (v = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== h || m !== u) && Ts(t, s, r, u), be = !1, m = t.memoizedState, s.state = m, Zr(t, r, s, l);
        var w = t.memoizedState;
        a !== h || m !== w || fe.current || be ? (typeof y == "function" && (_i(t, n, y, r), w = t.memoizedState), (d = be || Ls(t, n, d, r, m, w, u) || !1) ? (v || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = u, r = d) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Mi(e, t, n, r, i, l)
}

function Mi(e, t, n, r, l, i) {
    Bu(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return l && js(t, n, !1), Xe(e, t, i);
    r = t.stateNode, xf.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = tn(t, e.child, null, i), t.child = tn(t, null, a, i)) : oe(e, t, a, i), t.memoizedState = r.state, l && js(t, n, !0), t.child
}

function Hu(e) {
    var t = e.stateNode;
    t.pendingContext ? Ns(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ns(e, t.context, !1), yo(e, t.containerInfo)
}

function Us(e, t, n, r, l) {
    return en(), po(l), t.flags |= 256, oe(e, t, n, r), t.child
}
var Ri = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Ii(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Wu(e, t, n) {
    var r = t.pendingProps,
        l = $.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), I($, l & 1), e === null) return Ei(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = vl(s, r, 0, null), e = Ct(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ii(n), t.memoizedState = Ri, e) : zo(t, s));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return yf(e, t, s, r, a, l, n);
    if (i) {
        i = r.fallback, s = t.mode, l = e.child, a = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = dt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? i = dt(a, i) : (i = Ct(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Ii(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Ri, r
    }
    return i = e.child, e = i.sibling, r = dt(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function zo(e, t) {
    return t = vl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function xr(e, t, n, r) {
    return r !== null && po(r), tn(t, e.child, null, n), e = zo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function yf(e, t, n, r, l, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Kl(Error(x(422))), xr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = vl({
        mode: "visible",
        children: r.children
    }, l, 0, null), i = Ct(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && tn(t, e.child, null, s), t.child.memoizedState = Ii(s), t.memoizedState = Ri, i);
    if (!(t.mode & 1)) return xr(e, t, s, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
        return r = a, i = Error(x(419)), r = Kl(i, r, void 0), xr(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, de || a) {
        if (r = q, r !== null) {
            switch (s & -s) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
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
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ye(e, l), Ie(r, e, l, -1))
        }
        return Ro(), r = Kl(Error(x(421))), xr(e, t, s, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ve = st(l.nextSibling), xe = t, U = !0, Me = null, e !== null && (je[Se++] = He, je[Se++] = We, je[Se++] = zt, He = e.id, We = e.overflow, zt = t), t = zo(t, r.children), t.flags |= 4096, t)
}

function $s(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), zi(e.return, t, n)
}

function Yl(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
}

function Qu(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if (oe(e, t, r.children, n), r = $.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && $s(e, n, t);
            else if (e.tag === 19) $s(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (I($, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && qr(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Yl(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && qr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Yl(t, !0, n, null, i);
            break;
        case "together":
            Yl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Tr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Xe(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Pt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(x(153));
    if (t.child !== null) {
        for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function wf(e, t, n) {
    switch (t.tag) {
        case 3:
            Hu(t), en();
            break;
        case 5:
            gu(t);
            break;
        case 1:
            pe(t.type) && Qr(t);
            break;
        case 4:
            yo(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            I(Yr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (I($, $.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wu(e, t, n) : (I($, $.current & 1), e = Xe(e, t, n), e !== null ? e.sibling : null);
            I($, $.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Qu(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), I($, $.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Vu(e, t, n)
    }
    return Xe(e, t, n)
}
var Gu, Oi, Ku, Yu;
Gu = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Oi = function() {};
Ku = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, St(Ae.current);
        var i = null;
        switch (n) {
            case "input":
                l = ri(e, l), r = ri(e, r), i = [];
                break;
            case "select":
                l = V({}, l, {
                    value: void 0
                }), r = V({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                l = oi(e, l), r = oi(e, r), i = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr)
        }
        ai(n, r);
        var s;
        n = null;
        for (d in l)
            if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                if (d === "style") {
                    var a = l[d];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (In.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
        for (d in r) {
            var u = r[d];
            if (a = l != null ? l[d] : void 0, r.hasOwnProperty(d) && u !== a && (u != null || a != null))
                if (d === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in u) u.hasOwnProperty(s) && a[s] !== u[s] && (n || (n = {}), n[s] = u[s])
                    } else n || (i || (i = []), i.push(d, n)), n = u;
            else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (i = i || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (In.hasOwnProperty(d) ? (u != null && d === "onScroll" && O("scroll", e), i || a === u || (i = [])) : (i = i || []).push(d, u))
        }
        n && (i = i || []).push("style", n);
        var d = i;
        (t.updateQueue = d) && (t.flags |= 4)
    }
};
Yu = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function xn(e, t) {
    if (!U) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Nf(e, t, n) {
    var r = t.pendingProps;
    switch (fo(t), t.tag) {
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
            return re(t), null;
        case 1:
            return pe(t.type) && Wr(), re(t), null;
        case 3:
            return r = t.stateNode, nn(), D(fe), D(ie), No(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (Hi(Me), Me = null))), Oi(e, t), re(t), null;
        case 5:
            wo(t);
            var l = St(Gn.current);
            if (n = t.type, e !== null && t.stateNode != null) Ku(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(x(166));
                    return re(t), null
                }
                if (e = St(Ae.current), vr(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Ue] = t, r[Wn] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            O("cancel", r), O("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            O("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Sn.length; l++) O(Sn[l], r);
                            break;
                        case "source":
                            O("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            O("error", r), O("load", r);
                            break;
                        case "details":
                            O("toggle", r);
                            break;
                        case "input":
                            Yo(r, i), O("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, O("invalid", r);
                            break;
                        case "textarea":
                            Zo(r, i), O("invalid", r)
                    }
                    ai(n, i), l = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && hr(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && hr(r.textContent, a, e), l = ["children", "" + a]) : In.hasOwnProperty(s) && a != null && s === "onScroll" && O("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            sr(r), Xo(r, i, !0);
                            break;
                        case "textarea":
                            sr(r), qo(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Hr)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ja(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ue] = t, e[Wn] = r, Gu(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = ui(n, r), n) {
                            case "dialog":
                                O("cancel", e), O("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                O("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Sn.length; l++) O(Sn[l], e);
                                l = r;
                                break;
                            case "source":
                                O("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                O("error", e), O("load", e), l = r;
                                break;
                            case "details":
                                O("toggle", e), l = r;
                                break;
                            case "input":
                                Yo(e, r), l = ri(e, r), O("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = V({}, r, {
                                    value: void 0
                                }), O("invalid", e);
                                break;
                            case "textarea":
                                Zo(e, r), l = oi(e, r), O("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        ai(n, l),
                        a = l;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var u = a[i];
                                i === "style" ? Ca(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Sa(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && On(e, u) : typeof u == "number" && On(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (In.hasOwnProperty(i) ? u != null && i === "onScroll" && O("scroll", e) : u != null && Zi(e, i, u, s))
                            }
                        switch (n) {
                            case "input":
                                sr(e), Xo(e, r, !1);
                                break;
                            case "textarea":
                                sr(e), qo(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ft(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Gt(e, !!r.multiple, i, !1) : r.defaultValue != null && Gt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Hr)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return re(t), null;
        case 6:
            if (e && t.stateNode != null) Yu(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
                if (n = St(Gn.current), St(Ae.current), vr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ue] = t, (i = r.nodeValue !== n) && (e = xe, e !== null)) switch (e.tag) {
                        case 3:
                            hr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && hr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ue] = t, t.stateNode = r
            }
            return re(t), null;
        case 13:
            if (D($), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (U && ve !== null && t.mode & 1 && !(t.flags & 128)) fu(), en(), t.flags |= 98560, i = !1;
                else if (i = vr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(x(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(x(317));
                        i[Ue] = t
                    } else en(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    re(t), i = !1
                } else Me !== null && (Hi(Me), Me = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $.current & 1 ? Y === 0 && (Y = 3) : Ro())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
        case 4:
            return nn(), Oi(e, t), e === null && Bn(t.stateNode.containerInfo), re(t), null;
        case 10:
            return vo(t.type._context), re(t), null;
        case 17:
            return pe(t.type) && Wr(), re(t), null;
        case 19:
            if (D($), i = t.memoizedState, i === null) return re(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) xn(i, !1);
                else {
                    if (Y !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = qr(e), s !== null) {
                                for (t.flags |= 128, xn(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return I($, $.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && Q() > ln && (t.flags |= 128, r = !0, xn(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = qr(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xn(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !U) return re(t), null
                    } else 2 * Q() - i.renderingStartTime > ln && n !== 1073741824 && (t.flags |= 128, r = !0, xn(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Q(), t.sibling = null, n = $.current, I($, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
        case 22:
        case 23:
            return Mo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(x(156, t.tag))
}

function jf(e, t) {
    switch (fo(t), t.tag) {
        case 1:
            return pe(t.type) && Wr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return nn(), D(fe), D(ie), No(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return wo(t), null;
        case 13:
            if (D($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(x(340));
                en()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return D($), null;
        case 4:
            return nn(), null;
        case 10:
            return vo(t.type._context), null;
        case 22:
        case 23:
            return Mo(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var yr = !1,
    le = !1,
    Sf = typeof WeakSet == "function" ? WeakSet : Set,
    j = null;

function Wt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            B(e, t, r)
        } else n.current = null
}

function Di(e, t, n) {
    try {
        n()
    } catch (r) {
        B(e, t, r)
    }
}
var As = !1;

function kf(e, t) {
    if (yi = Ar, e = ba(), uo(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    u = -1,
                    d = 0,
                    v = 0,
                    h = e,
                    m = null;
                t: for (;;) {
                    for (var y; h !== n || l !== 0 && h.nodeType !== 3 || (a = s + l), h !== i || r !== 0 && h.nodeType !== 3 || (u = s + r), h.nodeType === 3 && (s += h.nodeValue.length), (y = h.firstChild) !== null;) m = h, h = y;
                    for (;;) {
                        if (h === e) break t;
                        if (m === n && ++d === l && (a = s), m === i && ++v === r && (u = s), (y = h.nextSibling) !== null) break;
                        h = m, m = h.parentNode
                    }
                    h = y
                }
                n = a === -1 || u === -1 ? null : {
                    start: a,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (wi = {
            focusedElem: e,
            selectionRange: n
        }, Ar = !1, j = t; j !== null;)
        if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
        else
            for (; j !== null;) {
                t = j;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var N = w.memoizedProps,
                                    F = w.memoizedState,
                                    f = t.stateNode,
                                    c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? N : Le(t.type, N), F);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(x(163))
                    }
                } catch (g) {
                    B(t, t.return, g)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, j = e;
                    break
                }
                j = t.return
            }
    return w = As, As = !1, w
}

function Tn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0, i !== void 0 && Di(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}

function ml(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Fi(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Xu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Xu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Wn], delete t[Si], delete t[ of ], delete t[sf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Zu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Vs(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Zu(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Ui(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ui(e, t, n), e = e.sibling; e !== null;) Ui(e, t, n), e = e.sibling
}

function $i(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for ($i(e, t, n), e = e.sibling; e !== null;) $i(e, t, n), e = e.sibling
}
var b = null,
    Te = !1;

function qe(e, t, n) {
    for (n = n.child; n !== null;) qu(e, t, n), n = n.sibling
}

function qu(e, t, n) {
    if ($e && typeof $e.onCommitFiberUnmount == "function") try {
        $e.onCommitFiberUnmount(ol, n)
    } catch {}
    switch (n.tag) {
        case 5:
            le || Wt(n, t);
        case 6:
            var r = b,
                l = Te;
            b = null, qe(e, t, n), b = r, Te = l, b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
            break;
        case 18:
            b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? Vl(e.parentNode, n) : e.nodeType === 1 && Vl(e, n), $n(e)) : Vl(b, n.stateNode));
            break;
        case 4:
            r = b, l = Te, b = n.stateNode.containerInfo, Te = !0, qe(e, t, n), b = r, Te = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var i = l,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && Di(n, t, s), l = l.next
                } while (l !== r)
            }
            qe(e, t, n);
            break;
        case 1:
            if (!le && (Wt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                B(n, t, a)
            }
            qe(e, t, n);
            break;
        case 21:
            qe(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, qe(e, t, n), le = r) : qe(e, t, n);
            break;
        default:
            qe(e, t, n)
    }
}

function Bs(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Sf), t.forEach(function(r) {
            var l = Rf.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function Pe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            b = a.stateNode, Te = !1;
                            break e;
                        case 3:
                            b = a.stateNode.containerInfo, Te = !0;
                            break e;
                        case 4:
                            b = a.stateNode.containerInfo, Te = !0;
                            break e
                    }
                    a = a.return
                }
                if (b === null) throw Error(x(160));
                qu(i, s, l), b = null, Te = !1;
                var u = l.alternate;
                u !== null && (u.return = null), l.return = null
            } catch (d) {
                B(l, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Ju(t, e), t = t.sibling
}

function Ju(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Pe(t, e), De(e), r & 4) {
                try {
                    Tn(3, e, e.return), ml(3, e)
                } catch (N) {
                    B(e, e.return, N)
                }
                try {
                    Tn(5, e, e.return)
                } catch (N) {
                    B(e, e.return, N)
                }
            }
            break;
        case 1:
            Pe(t, e), De(e), r & 512 && n !== null && Wt(n, n.return);
            break;
        case 5:
            if (Pe(t, e), De(e), r & 512 && n !== null && Wt(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    On(l, "")
                } catch (N) {
                    B(e, e.return, N)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    a === "input" && i.type === "radio" && i.name != null && wa(l, i), ui(a, s);
                    var d = ui(a, i);
                    for (s = 0; s < u.length; s += 2) {
                        var v = u[s],
                            h = u[s + 1];
                        v === "style" ? Ca(l, h) : v === "dangerouslySetInnerHTML" ? Sa(l, h) : v === "children" ? On(l, h) : Zi(l, v, h, d)
                    }
                    switch (a) {
                        case "input":
                            li(l, i);
                            break;
                        case "textarea":
                            Na(l, i);
                            break;
                        case "select":
                            var m = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!i.multiple;
                            var y = i.value;
                            y != null ? Gt(l, !!i.multiple, y, !1) : m !== !!i.multiple && (i.defaultValue != null ? Gt(l, !!i.multiple, i.defaultValue, !0) : Gt(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Wn] = i
                } catch (N) {
                    B(e, e.return, N)
                }
            }
            break;
        case 6:
            if (Pe(t, e), De(e), r & 4) {
                if (e.stateNode === null) throw Error(x(162));
                l = e.stateNode, i = e.memoizedProps;
                try {
                    l.nodeValue = i
                } catch (N) {
                    B(e, e.return, N)
                }
            }
            break;
        case 3:
            if (Pe(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                $n(t.containerInfo)
            } catch (N) {
                B(e, e.return, N)
            }
            break;
        case 4:
            Pe(t, e), De(e);
            break;
        case 13:
            Pe(t, e), De(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Lo = Q())), r & 4 && Bs(e);
            break;
        case 22:
            if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (d = le) || v, Pe(t, e), le = d) : Pe(t, e), De(e), r & 8192) {
                if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !v && e.mode & 1)
                    for (j = e, v = e.child; v !== null;) {
                        for (h = j = v; j !== null;) {
                            switch (m = j, y = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Tn(4, m, m.return);
                                    break;
                                case 1:
                                    Wt(m, m.return);
                                    var w = m.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (N) {
                                            B(r, n, N)
                                        }
                                    }
                                    break;
                                case 5:
                                    Wt(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Ws(h);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = m, j = y) : Ws(h)
                        }
                        v = v.sibling
                    }
                e: for (v = null, h = e;;) {
                    if (h.tag === 5) {
                        if (v === null) {
                            v = h;
                            try {
                                l = h.stateNode, d ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = h.stateNode, u = h.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = ka("display", s))
                            } catch (N) {
                                B(e, e.return, N)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (v === null) try {
                            h.stateNode.nodeValue = d ? "" : h.memoizedProps
                        } catch (N) {
                            B(e, e.return, N)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        v === h && (v = null), h = h.return
                    }
                    v === h && (v = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            Pe(t, e), De(e), r & 4 && Bs(e);
            break;
        case 21:
            break;
        default:
            Pe(t, e), De(e)
    }
}

function De(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Zu(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(x(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (On(l, ""), r.flags &= -33);
                    var i = Vs(e);
                    $i(e, i, l);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Vs(e);
                    Ui(e, a, s);
                    break;
                default:
                    throw Error(x(161))
            }
        }
        catch (u) {
            B(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Cf(e, t, n) {
    j = e, bu(e)
}

function bu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null;) {
        var l = j,
            i = l.child;
        if (l.tag === 22 && r) {
            var s = l.memoizedState !== null || yr;
            if (!s) {
                var a = l.alternate,
                    u = a !== null && a.memoizedState !== null || le;
                a = yr;
                var d = le;
                if (yr = s, (le = u) && !d)
                    for (j = l; j !== null;) s = j, u = s.child, s.tag === 22 && s.memoizedState !== null ? Qs(l) : u !== null ? (u.return = s, j = u) : Qs(l);
                for (; i !== null;) j = i, bu(i), i = i.sibling;
                j = l, yr = a, le = d
            }
            Hs(e)
        } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, j = i) : Hs(e)
    }
}

function Hs(e) {
    for (; j !== null;) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || ml(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && zs(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            zs(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
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
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var v = d.memoizedState;
                                if (v !== null) {
                                    var h = v.dehydrated;
                                    h !== null && $n(h)
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
                        throw Error(x(163))
                }
                le || t.flags & 512 && Fi(t)
            } catch (m) {
                B(t, t.return, m)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function Ws(e) {
    for (; j !== null;) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function Qs(e) {
    for (; j !== null;) {
        var t = j;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ml(4, t)
                    } catch (u) {
                        B(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            B(t, l, u)
                        }
                    }
                    var i = t.return;
                    try {
                        Fi(t)
                    } catch (u) {
                        B(t, i, u)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Fi(t)
                    } catch (u) {
                        B(t, s, u)
                    }
            }
        } catch (u) {
            B(t, t.return, u)
        }
        if (t === e) {
            j = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, j = a;
            break
        }
        j = t.return
    }
}
var Ef = Math.ceil,
    el = Ze.ReactCurrentDispatcher,
    _o = Ze.ReactCurrentOwner,
    Ce = Ze.ReactCurrentBatchConfig,
    M = 0,
    q = null,
    G = null,
    ee = 0,
    he = 0,
    Qt = ht(0),
    Y = 0,
    Zn = null,
    Pt = 0,
    hl = 0,
    Po = 0,
    Mn = null,
    ce = null,
    Lo = 0,
    ln = 1 / 0,
    Ve = null,
    tl = !1,
    Ai = null,
    ut = null,
    wr = !1,
    rt = null,
    nl = 0,
    Rn = 0,
    Vi = null,
    Mr = -1,
    Rr = 0;

function se() {
    return M & 6 ? Q() : Mr !== -1 ? Mr : Mr = Q()
}

function ct(e) {
    return e.mode & 1 ? M & 2 && ee !== 0 ? ee & -ee : uf.transition !== null ? (Rr === 0 && (Rr = Fa()), Rr) : (e = R, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wa(e.type)), e) : 1
}

function Ie(e, t, n, r) {
    if (50 < Rn) throw Rn = 0, Vi = null, Error(x(185));
    Jn(e, n, r), (!(M & 2) || e !== q) && (e === q && (!(M & 2) && (hl |= n), Y === 4 && tt(e, ee)), me(e, r), n === 1 && M === 0 && !(t.mode & 1) && (ln = Q() + 500, dl && vt()))
}

function me(e, t) {
    var n = e.callbackNode;
    ad(e, t);
    var r = $r(e, e === q ? ee : 0);
    if (r === 0) n !== null && es(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && es(n), t === 1) e.tag === 0 ? af(Gs.bind(null, e)) : uu(Gs.bind(null, e)), rf(function() {
            !(M & 6) && vt()
        }), n = null;
        else {
            switch (Ua(r)) {
                case 1:
                    n = to;
                    break;
                case 4:
                    n = Oa;
                    break;
                case 16:
                    n = Ur;
                    break;
                case 536870912:
                    n = Da;
                    break;
                default:
                    n = Ur
            }
            n = sc(n, ec.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function ec(e, t) {
    if (Mr = -1, Rr = 0, M & 6) throw Error(x(327));
    var n = e.callbackNode;
    if (qt() && e.callbackNode !== n) return null;
    var r = $r(e, e === q ? ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var i = nc();
        (q !== e || ee !== t) && (Ve = null, ln = Q() + 500, kt(e, t));
        do try {
            Pf();
            break
        } catch (a) {
            tc(e, a)
        }
        while (!0);
        ho(), el.current = i, M = l, G !== null ? t = 0 : (q = null, ee = 0, t = Y)
    }
    if (t !== 0) {
        if (t === 2 && (l = mi(e), l !== 0 && (r = l, t = Bi(e, l))), t === 1) throw n = Zn, kt(e, 0), tt(e, r), me(e, Q()), n;
        if (t === 6) tt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !zf(l) && (t = rl(e, r), t === 2 && (i = mi(e), i !== 0 && (r = i, t = Bi(e, i))), t === 1)) throw n = Zn, kt(e, 0), tt(e, r), me(e, Q()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(x(345));
                case 2:
                    wt(e, ce, Ve);
                    break;
                case 3:
                    if (tt(e, r), (r & 130023424) === r && (t = Lo + 500 - Q(), 10 < t)) {
                        if ($r(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            se(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = ji(wt.bind(null, e, ce, Ve), t);
                        break
                    }
                    wt(e, ce, Ve);
                    break;
                case 4:
                    if (tt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var s = 31 - Re(r);
                        i = 1 << s, s = t[s], s > l && (l = s), r &= ~i
                    }
                    if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ef(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = ji(wt.bind(null, e, ce, Ve), r);
                        break
                    }
                    wt(e, ce, Ve);
                    break;
                case 5:
                    wt(e, ce, Ve);
                    break;
                default:
                    throw Error(x(329))
            }
        }
    }
    return me(e, Q()), e.callbackNode === n ? ec.bind(null, e) : null
}

function Bi(e, t) {
    var n = Mn;
    return e.current.memoizedState.isDehydrated && (kt(e, t).flags |= 256), e = rl(e, t), e !== 2 && (t = ce, ce = n, t !== null && Hi(t)), e
}

function Hi(e) {
    ce === null ? ce = e : ce.push.apply(ce, e)
}

function zf(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Oe(i(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function tt(e, t) {
    for (t &= ~Po, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Re(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Gs(e) {
    if (M & 6) throw Error(x(327));
    qt();
    var t = $r(e, 0);
    if (!(t & 1)) return me(e, Q()), null;
    var n = rl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = mi(e);
        r !== 0 && (t = r, n = Bi(e, r))
    }
    if (n === 1) throw n = Zn, kt(e, 0), tt(e, t), me(e, Q()), n;
    if (n === 6) throw Error(x(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wt(e, ce, Ve), me(e, Q()), null
}

function To(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n, M === 0 && (ln = Q() + 500, dl && vt())
    }
}

function Lt(e) {
    rt !== null && rt.tag === 0 && !(M & 6) && qt();
    var t = M;
    M |= 1;
    var n = Ce.transition,
        r = R;
    try {
        if (Ce.transition = null, R = 1, e) return e()
    } finally {
        R = r, Ce.transition = n, M = t, !(M & 6) && vt()
    }
}

function Mo() {
    he = Qt.current, D(Qt)
}

function kt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, nf(n)), G !== null)
        for (n = G.return; n !== null;) {
            var r = n;
            switch (fo(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Wr();
                    break;
                case 3:
                    nn(), D(fe), D(ie), No();
                    break;
                case 5:
                    wo(r);
                    break;
                case 4:
                    nn();
                    break;
                case 13:
                    D($);
                    break;
                case 19:
                    D($);
                    break;
                case 10:
                    vo(r.type._context);
                    break;
                case 22:
                case 23:
                    Mo()
            }
            n = n.return
        }
    if (q = e, G = e = dt(e.current, null), ee = he = t, Y = 0, Zn = null, Po = hl = Pt = 0, ce = Mn = null, jt !== null) {
        for (t = 0; t < jt.length; t++)
            if (n = jt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = l, r.next = s
                }
                n.pending = r
            }
        jt = null
    }
    return e
}

function tc(e, t) {
    do {
        var n = G;
        try {
            if (ho(), Pr.current = br, Jr) {
                for (var r = A.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Jr = !1
            }
            if (_t = 0, Z = K = A = null, Ln = !1, Kn = 0, _o.current = null, n === null || n.return === null) {
                Y = 1, Zn = t, G = null;
                break
            }
            e: {
                var i = e,
                    s = n.return,
                    a = n,
                    u = t;
                if (t = ee, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var d = u,
                        v = a,
                        h = v.tag;
                    if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = v.alternate;
                        m ? (v.updateQueue = m.updateQueue, v.memoizedState = m.memoizedState, v.lanes = m.lanes) : (v.updateQueue = null, v.memoizedState = null)
                    }
                    var y = Rs(s);
                    if (y !== null) {
                        y.flags &= -257, Is(y, s, a, i, t), y.mode & 1 && Ms(i, d, t), t = y, u = d;
                        var w = t.updateQueue;
                        if (w === null) {
                            var N = new Set;
                            N.add(u), t.updateQueue = N
                        } else w.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ms(i, d, t), Ro();
                            break e
                        }
                        u = Error(x(426))
                    }
                } else if (U && a.mode & 1) {
                    var F = Rs(s);
                    if (F !== null) {
                        !(F.flags & 65536) && (F.flags |= 256), Is(F, s, a, i, t), po(rn(u, a));
                        break e
                    }
                }
                i = u = rn(u, a),
                Y !== 4 && (Y = 2),
                Mn === null ? Mn = [i] : Mn.push(i),
                i = s;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var f = Uu(i, u, t);
                            Es(i, f);
                            break e;
                        case 1:
                            a = u;
                            var c = i.type,
                                p = i.stateNode;
                            if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ut === null || !ut.has(p)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var g = $u(i, a, t);
                                Es(i, g);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            lc(n)
        } catch (S) {
            t = S, G === n && n !== null && (G = n = n.return);
            continue
        }
        break
    } while (!0)
}

function nc() {
    var e = el.current;
    return el.current = br, e === null ? br : e
}

function Ro() {
    (Y === 0 || Y === 3 || Y === 2) && (Y = 4), q === null || !(Pt & 268435455) && !(hl & 268435455) || tt(q, ee)
}

function rl(e, t) {
    var n = M;
    M |= 2;
    var r = nc();
    (q !== e || ee !== t) && (Ve = null, kt(e, t));
    do try {
        _f();
        break
    } catch (l) {
        tc(e, l)
    }
    while (!0);
    if (ho(), M = n, el.current = r, G !== null) throw Error(x(261));
    return q = null, ee = 0, Y
}

function _f() {
    for (; G !== null;) rc(G)
}

function Pf() {
    for (; G !== null && !bc();) rc(G)
}

function rc(e) {
    var t = oc(e.alternate, e, he);
    e.memoizedProps = e.pendingProps, t === null ? lc(e) : G = t, _o.current = null
}

function lc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = jf(n, t), n !== null) {
                n.flags &= 32767, G = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Y = 6, G = null;
                return
            }
        } else if (n = Nf(n, t, he), n !== null) {
            G = n;
            return
        }
        if (t = t.sibling, t !== null) {
            G = t;
            return
        }
        G = t = e
    } while (t !== null);
    Y === 0 && (Y = 5)
}

function wt(e, t, n) {
    var r = R,
        l = Ce.transition;
    try {
        Ce.transition = null, R = 1, Lf(e, t, n, r)
    } finally {
        Ce.transition = l, R = r
    }
    return null
}

function Lf(e, t, n, r) {
    do qt(); while (rt !== null);
    if (M & 6) throw Error(x(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (ud(e, i), e === q && (G = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || wr || (wr = !0, sc(Ur, function() {
            return qt(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = Ce.transition, Ce.transition = null;
        var s = R;
        R = 1;
        var a = M;
        M |= 4, _o.current = null, kf(e, n), Ju(n, e), Xd(wi), Ar = !!yi, wi = yi = null, e.current = n, Cf(n), ed(), M = a, R = s, Ce.transition = i
    } else e.current = n;
    if (wr && (wr = !1, rt = e, nl = l), i = e.pendingLanes, i === 0 && (ut = null), rd(n.stateNode), me(e, Q()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (tl) throw tl = !1, e = Ai, Ai = null, e;
    return nl & 1 && e.tag !== 0 && qt(), i = e.pendingLanes, i & 1 ? e === Vi ? Rn++ : (Rn = 0, Vi = e) : Rn = 0, vt(), null
}

function qt() {
    if (rt !== null) {
        var e = Ua(nl),
            t = Ce.transition,
            n = R;
        try {
            if (Ce.transition = null, R = 16 > e ? 16 : e, rt === null) var r = !1;
            else {
                if (e = rt, rt = null, nl = 0, M & 6) throw Error(x(331));
                var l = M;
                for (M |= 4, j = e.current; j !== null;) {
                    var i = j,
                        s = i.child;
                    if (j.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var d = a[u];
                                for (j = d; j !== null;) {
                                    var v = j;
                                    switch (v.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Tn(8, v, i)
                                    }
                                    var h = v.child;
                                    if (h !== null) h.return = v, j = h;
                                    else
                                        for (; j !== null;) {
                                            v = j;
                                            var m = v.sibling,
                                                y = v.return;
                                            if (Xu(v), v === d) {
                                                j = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = y, j = m;
                                                break
                                            }
                                            j = y
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var N = w.child;
                                if (N !== null) {
                                    w.child = null;
                                    do {
                                        var F = N.sibling;
                                        N.sibling = null, N = F
                                    } while (N !== null)
                                }
                            }
                            j = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, j = s;
                    else e: for (; j !== null;) {
                        if (i = j, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Tn(9, i, i.return)
                        }
                        var f = i.sibling;
                        if (f !== null) {
                            f.return = i.return, j = f;
                            break e
                        }
                        j = i.return
                    }
                }
                var c = e.current;
                for (j = c; j !== null;) {
                    s = j;
                    var p = s.child;
                    if (s.subtreeFlags & 2064 && p !== null) p.return = s, j = p;
                    else e: for (s = c; j !== null;) {
                        if (a = j, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ml(9, a)
                            }
                        } catch (S) {
                            B(a, a.return, S)
                        }
                        if (a === s) {
                            j = null;
                            break e
                        }
                        var g = a.sibling;
                        if (g !== null) {
                            g.return = a.return, j = g;
                            break e
                        }
                        j = a.return
                    }
                }
                if (M = l, vt(), $e && typeof $e.onPostCommitFiberRoot == "function") try {
                    $e.onPostCommitFiberRoot(ol, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            R = n, Ce.transition = t
        }
    }
    return !1
}

function Ks(e, t, n) {
    t = rn(n, t), t = Uu(e, t, 1), e = at(e, t, 1), t = se(), e !== null && (Jn(e, 1, t), me(e, t))
}

function B(e, t, n) {
    if (e.tag === 3) Ks(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ks(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ut === null || !ut.has(r))) {
                    e = rn(n, e), e = $u(t, e, 1), t = at(t, e, 1), e = se(), t !== null && (Jn(t, 1, e), me(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Tf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = se(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (Y === 4 || Y === 3 && (ee & 130023424) === ee && 500 > Q() - Lo ? kt(e, 0) : Po |= n), me(e, t)
}

function ic(e, t) {
    t === 0 && (e.mode & 1 ? (t = cr, cr <<= 1, !(cr & 130023424) && (cr = 4194304)) : t = 1);
    var n = se();
    e = Ye(e, t), e !== null && (Jn(e, t, n), me(e, n))
}

function Mf(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), ic(e, n)
}

function Rf(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(x(314))
    }
    r !== null && r.delete(t), ic(e, n)
}
var oc;
oc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || fe.current) de = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return de = !1, wf(e, t, n);
            de = !!(e.flags & 131072)
        }
    else de = !1, U && t.flags & 1048576 && cu(t, Kr, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Tr(e, t), e = t.pendingProps;
            var l = bt(t, ie.current);
            Zt(t, n), l = So(null, t, r, e, l, n);
            var i = ko();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (i = !0, Qr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, xo(t), l.updater = pl, t.stateNode = l, l._reactInternals = t, Pi(t, r, e, n), t = Mi(null, t, r, !0, i, n)) : (t.tag = 0, U && i && co(t), oe(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Tr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Of(r), e = Le(r, e), l) {
                    case 0:
                        t = Ti(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Fs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Os(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ds(null, t, r, Le(r.type, e), n);
                        break e
                }
                throw Error(x(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Ti(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Fs(e, t, r, l, n);
        case 3:
            e: {
                if (Hu(t), e === null) throw Error(x(387));r = t.pendingProps,
                i = t.memoizedState,
                l = i.element,
                vu(e, t),
                Zr(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        l = rn(Error(x(423)), t), t = Us(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = rn(Error(x(424)), t), t = Us(e, t, r, n, l);
                    break e
                } else
                    for (ve = st(t.stateNode.containerInfo.firstChild), xe = t, U = !0, Me = null, n = mu(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (en(), r === l) {
                        t = Xe(e, t, n);
                        break e
                    }
                    oe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return gu(t), e === null && Ei(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, Ni(r, l) ? s = null : i !== null && Ni(r, i) && (t.flags |= 32), Bu(e, t), oe(e, t, s, n), t.child;
        case 6:
            return e === null && Ei(t), null;
        case 13:
            return Wu(e, t, n);
        case 4:
            return yo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tn(t, null, r, n) : oe(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Os(e, t, r, l, n);
        case 7:
            return oe(e, t, t.pendingProps, n), t.child;
        case 8:
            return oe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return oe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, I(Yr, r._currentValue), r._currentValue = s, i !== null)
                    if (Oe(i.value, s)) {
                        if (i.children === l.children && !fe.current) {
                            t = Xe(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var u = a.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            u = Qe(-1, n & -n), u.tag = 2;
                                            var d = i.updateQueue;
                                            if (d !== null) {
                                                d = d.shared;
                                                var v = d.pending;
                                                v === null ? u.next = u : (u.next = v.next, v.next = u), d.pending = u
                                            }
                                        }
                                        i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), zi(i.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return, s === null) throw Error(x(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), zi(s, n, t), s = i.sibling
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling, i !== null) {
                                        i.return = s.return, s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                oe(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, Zt(t, n), l = Ee(l), r = r(l), t.flags |= 1, oe(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), Ds(e, t, r, l, n);
        case 15:
            return Au(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Tr(e, t), t.tag = 1, pe(r) ? (e = !0, Qr(t)) : e = !1, Zt(t, n), Fu(t, r, l), Pi(t, r, l, n), Mi(null, t, r, !0, e, n);
        case 19:
            return Qu(e, t, n);
        case 22:
            return Vu(e, t, n)
    }
    throw Error(x(156, t.tag))
};

function sc(e, t) {
    return Ia(e, t)
}

function If(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function ke(e, t, n, r) {
    return new If(e, t, n, r)
}

function Io(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Of(e) {
    if (typeof e == "function") return Io(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Ji) return 11;
        if (e === bi) return 14
    }
    return 2
}

function dt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ke(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ir(e, t, n, r, l, i) {
    var s = 2;
    if (r = e, typeof e == "function") Io(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case Ot:
            return Ct(n.children, l, i, t);
        case qi:
            s = 8, l |= 8;
            break;
        case bl:
            return e = ke(12, n, t, l | 2), e.elementType = bl, e.lanes = i, e;
        case ei:
            return e = ke(13, n, t, l), e.elementType = ei, e.lanes = i, e;
        case ti:
            return e = ke(19, n, t, l), e.elementType = ti, e.lanes = i, e;
        case ga:
            return vl(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case ha:
                    s = 10;
                    break e;
                case va:
                    s = 9;
                    break e;
                case Ji:
                    s = 11;
                    break e;
                case bi:
                    s = 14;
                    break e;
                case Je:
                    s = 16, r = null;
                    break e
            }
            throw Error(x(130, e == null ? e : typeof e, ""))
    }
    return t = ke(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
}

function Ct(e, t, n, r) {
    return e = ke(7, e, r, t), e.lanes = n, e
}

function vl(e, t, n, r) {
    return e = ke(22, e, r, t), e.elementType = ga, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Xl(e, t, n) {
    return e = ke(6, e, null, t), e.lanes = n, e
}

function Zl(e, t, n) {
    return t = ke(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Df(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ll(0), this.expirationTimes = Ll(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ll(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Oo(e, t, n, r, l, i, s, a, u) {
    return e = new Df(e, t, n, a, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ke(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, xo(i), e
}

function Ff(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: It,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function ac(e) {
    if (!e) return pt;
    e = e._reactInternals;
    e: {
        if (Mt(e) !== e || e.tag !== 1) throw Error(x(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (pe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(x(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pe(n)) return au(e, n, t)
    }
    return t
}

function uc(e, t, n, r, l, i, s, a, u) {
    return e = Oo(n, r, !0, e, l, i, s, a, u), e.context = ac(null), n = e.current, r = se(), l = ct(n), i = Qe(r, l), i.callback = t ? ? null, at(n, i, l), e.current.lanes = l, Jn(e, l, r), me(e, r), e
}

function gl(e, t, n, r) {
    var l = t.current,
        i = se(),
        s = ct(l);
    return n = ac(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qe(i, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, s), e !== null && (Ie(e, l, s, i), _r(e, l, s)), s
}

function ll(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Ys(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Do(e, t) {
    Ys(e, t), (e = e.alternate) && Ys(e, t)
}

function Uf() {
    return null
}
var cc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Fo(e) {
    this._internalRoot = e
}
xl.prototype.render = Fo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(x(409));
    gl(e, t, null, null)
};
xl.prototype.unmount = Fo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Lt(function() {
            gl(null, e, null, null)
        }), t[Ke] = null
    }
};

function xl(e) {
    this._internalRoot = e
}
xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Va();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
        et.splice(n, 0, e), n === 0 && Ha(e)
    }
};

function Uo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function yl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Xs() {}

function $f(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var d = ll(s);
                i.call(d)
            }
        }
        var s = uc(t, r, e, 0, null, !1, !1, "", Xs);
        return e._reactRootContainer = s, e[Ke] = s.current, Bn(e.nodeType === 8 ? e.parentNode : e), Lt(), s
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var d = ll(u);
            a.call(d)
        }
    }
    var u = Oo(e, 0, !1, null, null, !1, !1, "", Xs);
    return e._reactRootContainer = u, e[Ke] = u.current, Bn(e.nodeType === 8 ? e.parentNode : e), Lt(function() {
        gl(t, u, n, r)
    }), u
}

function wl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var u = ll(s);
                a.call(u)
            }
        }
        gl(t, s, e, l)
    } else s = $f(n, t, e, l, r);
    return ll(s)
}
$a = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = jn(t.pendingLanes);
                n !== 0 && (no(t, n | 1), me(t, Q()), !(M & 6) && (ln = Q() + 500, vt()))
            }
            break;
        case 13:
            Lt(function() {
                var r = Ye(e, 1);
                if (r !== null) {
                    var l = se();
                    Ie(r, e, 1, l)
                }
            }), Do(e, 1)
    }
};
ro = function(e) {
    if (e.tag === 13) {
        var t = Ye(e, 134217728);
        if (t !== null) {
            var n = se();
            Ie(t, e, 134217728, n)
        }
        Do(e, 134217728)
    }
};
Aa = function(e) {
    if (e.tag === 13) {
        var t = ct(e),
            n = Ye(e, t);
        if (n !== null) {
            var r = se();
            Ie(n, e, t, r)
        }
        Do(e, t)
    }
};
Va = function() {
    return R
};
Ba = function(e, t) {
    var n = R;
    try {
        return R = e, t()
    } finally {
        R = n
    }
};
di = function(e, t, n) {
    switch (t) {
        case "input":
            if (li(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = cl(r);
                        if (!l) throw Error(x(90));
                        ya(r), li(r, l)
                    }
                }
            }
            break;
        case "textarea":
            Na(e, n);
            break;
        case "select":
            t = n.value, t != null && Gt(e, !!n.multiple, t, !1)
    }
};
_a = To;
Pa = Lt;
var Af = {
        usingClientEntryPoint: !1,
        Events: [er, $t, cl, Ea, za, To]
    },
    yn = {
        findFiberByHostInstance: Nt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Vf = {
        bundleType: yn.bundleType,
        version: yn.version,
        rendererPackageName: yn.rendererPackageName,
        rendererConfig: yn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ze.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Ma(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: yn.findFiberByHostInstance || Uf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nr.isDisabled && Nr.supportsFiber) try {
        ol = Nr.inject(Vf), $e = Nr
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Af;
we.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Uo(t)) throw Error(x(200));
    return Ff(e, t, null, n)
};
we.createRoot = function(e, t) {
    if (!Uo(e)) throw Error(x(299));
    var n = !1,
        r = "",
        l = cc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Oo(e, 1, !1, null, null, n, !1, r, l), e[Ke] = t.current, Bn(e.nodeType === 8 ? e.parentNode : e), new Fo(t)
};
we.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
    return e = Ma(t), e = e === null ? null : e.stateNode, e
};
we.flushSync = function(e) {
    return Lt(e)
};
we.hydrate = function(e, t, n) {
    if (!yl(t)) throw Error(x(200));
    return wl(null, e, t, !0, n)
};
we.hydrateRoot = function(e, t, n) {
    if (!Uo(e)) throw Error(x(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        i = "",
        s = cc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = uc(t, null, e, 1, n ? ? null, l, !1, i, s), e[Ke] = t.current, Bn(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new xl(t)
};
we.render = function(e, t, n) {
    if (!yl(t)) throw Error(x(200));
    return wl(null, e, t, !1, n)
};
we.unmountComponentAtNode = function(e) {
    if (!yl(e)) throw Error(x(40));
    return e._reactRootContainer ? (Lt(function() {
        wl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ke] = null
        })
    }), !0) : !1
};
we.unstable_batchedUpdates = To;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!yl(n)) throw Error(x(200));
    if (e == null || e._reactInternals === void 0) throw Error(x(38));
    return wl(e, t, n, !1, r)
};
we.version = "18.3.1-next-f1338f8080-20240426";

function dc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dc)
    } catch (e) {
        console.error(e)
    }
}
dc(), da.exports = we;
var Bf = da.exports,
    fc, Zs = Bf;
fc = Zs.createRoot, Zs.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Hf = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wf = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    J = (e, t) => {
        const n = ge.forwardRef(({
            color: r = "currentColor",
            size: l = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: s,
            className: a = "",
            children: u,
            ...d
        }, v) => ge.createElement("svg", {
            ref: v,
            ...Hf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: s ? Number(i) * 24 / Number(l) : i,
            className: ["lucide", `lucide-${Wf(e)}`, a].join(" "),
            ...d
        }, [...t.map(([h, m]) => ge.createElement(h, m)), ...Array.isArray(u) ? u : [u]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = J("CheckCircle", [
    ["path", {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
        key: "g774vq"
    }],
    ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = J("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qf = J("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = J("Clock", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["polyline", {
        points: "12 6 12 12 16 14",
        key: "68esgv"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = J("Copy", [
    ["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }],
    ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gf = J("CreditCard", [
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        key: "ynyp8z"
    }],
    ["line", {
        x1: "2",
        x2: "22",
        y1: "10",
        y2: "10",
        key: "1b3vmo"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = J("Gamepad2", [
    ["line", {
        x1: "6",
        x2: "10",
        y1: "11",
        y2: "11",
        key: "1gktln"
    }],
    ["line", {
        x1: "8",
        x2: "8",
        y1: "9",
        y2: "13",
        key: "qnk9ow"
    }],
    ["line", {
        x1: "15",
        x2: "15.01",
        y1: "12",
        y2: "12",
        key: "krot7o"
    }],
    ["line", {
        x1: "18",
        x2: "18.01",
        y1: "10",
        y2: "10",
        key: "1lcuu1"
    }],
    ["path", {
        d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
        key: "mfqc10"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kf = J("HelpCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
        key: "1u773s"
    }],
    ["path", {
        d: "M12 17h.01",
        key: "p32p05"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = J("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yf = J("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = J("MessageCircle", [
    ["path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
        key: "vv11sd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = J("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xf = J("ShoppingCart", [
    ["circle", {
        cx: "8",
        cy: "21",
        r: "1",
        key: "jimo8o"
    }],
    ["circle", {
        cx: "19",
        cy: "21",
        r: "1",
        key: "13723u"
    }],
    ["path", {
        d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
        key: "9zh506"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = J("Star", [
    ["polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zf = J("User", [
    ["path", {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel"
    }],
    ["circle", {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = J("Wallet", [
    ["path", {
        d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
        key: "195gfw"
    }],
    ["path", {
        d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
        key: "195n9w"
    }],
    ["path", {
        d: "M18 12a2 2 0 0 0 0 4h4v-4Z",
        key: "vllfpd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qf = J("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = J("Zap", [
    ["polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
        key: "45s27k"
    }]
]);

function Jf({
    activeSection: e,
    setActiveSection: t
}) {
    const [n, r] = ge.useState(!1), l = [{
        id: "home",
        label: "Home"
    }, {
        id: "services",
        label: "Servizi"
    }, {
        id: "how-it-works",
        label: "Come funziona"
    }, {
        id: "pricing",
        label: "Prezzi"
    }, {
        id: "order",
        label: "Ordina ora"
    }, {
        id: "support",
        label: "Supporto"
    }, {
        id: "testimonials",
        label: "Testimonianze"
    }];
    return o.jsx("header", {
        className: "bg-white shadow-lg sticky top-0 z-50",
        children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [o.jsxs("div", {
                className: "flex justify-between items-center py-4",
                children: [o.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [o.jsx(Nl, {
                        className: "h-8 w-8 text-blue-600"
                    }), o.jsx("span", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "PetLevelPro"
                    })]
                }), o.jsx("nav", {
                    className: "hidden md:flex space-x-8",
                    children: l.map(i => o.jsx("button", {
                        onClick: () => t(i.id),
                        className: `font-medium transition-colors duration-200 ${e===i.id?"text-blue-600 border-b-2 border-blue-600":"text-gray-700 hover:text-blue-600"}`,
                        children: i.label
                    }, i.id))
                }), o.jsx("div", {
                    className: "md:hidden",
                    children: o.jsx("button", {
                        onClick: () => r(!n),
                        className: "text-gray-700 hover:text-blue-600",
                        children: n ? o.jsx(qf, {
                            className: "h-6 w-6"
                        }) : o.jsx(Yf, {
                            className: "h-6 w-6"
                        })
                    })
                })]
            }), n && o.jsx("nav", {
                className: "md:hidden pb-4",
                children: l.map(i => o.jsx("button", {
                    onClick: () => {
                        t(i.id), r(!1)
                    },
                    className: `block w-full text-left py-2 font-medium transition-colors duration-200 ${e===i.id?"text-blue-600":"text-gray-700 hover:text-blue-600"}`,
                    children: i.label
                }, i.id))
            })]
        })
    })
}

function bs({
    setActiveSection: e
}) {
    return o.jsx("section", {
        className: "bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20",
        children: o.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: o.jsxs("div", {
                className: "text-center",
                children: [o.jsxs("h1", {
                    className: "text-4xl md:text-6xl font-bold mb-6",
                    children: ["Livella i tuoi Pet", o.jsx("span", {
                        className: "text-yellow-400",
                        children: " in Sicurezza"
                    })]
                }), o.jsx("p", {
                    className: "text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto",
                    children: "Servizio professionale di livellamento per i tuoi pet preferiti. Veloce, sicuro e garantito al 100%."
                }), o.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center mb-12",
                    children: [o.jsx("button", {
                        onClick: () => e("services"),
                        className: "bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105",
                        children: "Scopri i Servizi"
                    }), o.jsx("button", {
                        onClick: () => e("order"),
                        className: "bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300",
                        children: "Ordina Subito"
                    })]
                }), o.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8 max-w-4xl mx-auto",
                    children: [o.jsxs("div", {
                        className: "text-center",
                        children: [o.jsx(mc, {
                            className: "h-12 w-12 text-yellow-400 mx-auto mb-4"
                        }), o.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: "Veloce"
                        }), o.jsx("p", {
                            className: "text-blue-100",
                            children: "Consegna in 24-48 ore"
                        })]
                    }), o.jsxs("div", {
                        className: "text-center",
                        children: [o.jsx(un, {
                            className: "h-12 w-12 text-yellow-400 mx-auto mb-4"
                        }), o.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: "Sicuro"
                        }), o.jsx("p", {
                            className: "text-blue-100",
                            children: "Garanzia totale di sicurezza"
                        })]
                    }), o.jsxs("div", {
                        className: "text-center",
                        children: [o.jsx(nr, {
                            className: "h-12 w-12 text-yellow-400 mx-auto mb-4"
                        }), o.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: "24/7"
                        }), o.jsx("p", {
                            className: "text-blue-100",
                            children: "Supporto sempre disponibile"
                        })]
                    })]
                })]
            })
        })
    })
}

function bf({
    setActiveSection: e
}) {
    const t = [{
        id: "1-10",
        title: "Livellamento Base",
        description: "Perfetto per iniziare la tua avventura",
        levels: "1-10",
        time: "12-24 ore",
        price: "€8"
    }, {
        id: "10-20",
        title: "Livellamento Intermedio",
        description: "Sblocca nuove abilità e contenuti",
        levels: "10-20",
        time: "24-48 ore",
        price: "€15",
        popular: !0
    }, {
        id: "20-30",
        title: "Livellamento Avanzato",
        description: "Raggiungi i livelli più alti",
        levels: "20-30",
        time: "48-72 ore",
        price: "€22"
    }, {
        id: "30-40",
        title: "Livellamento Expert",
        description: "Per i veri esperti del gioco",
        levels: "30-40",
        time: "72-96 ore",
        price: "€28"
    }, {
        id: "40-50",
        title: "Livellamento Master",
        description: "Diventa un maestro assoluto",
        levels: "40-50",
        time: "96-120 ore",
        price: "€35"
    }, {
        id: "custom",
        title: "Livellamento Personalizzato",
        description: "Servizio su misura per le tue esigenze",
        levels: "Su richiesta",
        time: "Variabile",
        price: "Contattaci"
    }];
    return o.jsx("section", {
        className: "py-20 bg-gray-50",
        children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [o.jsxs("div", {
                className: "text-center mb-16",
                children: [o.jsx("h2", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "I Nostri Servizi"
                }), o.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Offriamo una gamma completa di servizi di livellamento per ogni tipo di giocatore. Tutti i nostri servizi includono garanzia di sicurezza e supporto 24/7."
                })]
            }), o.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: t.map(n => o.jsxs("div", {
                    className: `relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${n.popular?"ring-2 ring-yellow-400":""}`,
                    children: [n.popular && o.jsx("div", {
                        className: "absolute top-0 right-0 bg-yellow-400 text-gray-900 px-3 py-1 text-sm font-bold",
                        children: "Più Popolare"
                    }), o.jsxs("div", {
                        className: "p-6",
                        children: [o.jsxs("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [o.jsx("h3", {
                                className: "text-xl font-bold text-gray-900",
                                children: n.title
                            }), o.jsx(Ao, {
                                className: "h-6 w-6 text-yellow-400"
                            })]
                        }), o.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: n.description
                        }), o.jsxs("div", {
                            className: "space-y-3",
                            children: [o.jsxs("div", {
                                className: "flex items-center text-sm text-gray-700",
                                children: [o.jsx(un, {
                                    className: "h-4 w-4 mr-2 text-green-600"
                                }), "Livelli: ", n.levels]
                            }), o.jsxs("div", {
                                className: "flex items-center text-sm text-gray-700",
                                children: [o.jsx(nr, {
                                    className: "h-4 w-4 mr-2 text-blue-600"
                                }), "Tempo: ", n.time]
                            })]
                        }), o.jsx("div", {
                            className: "mt-6 pt-6 border-t border-gray-200",
                            children: o.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [o.jsx("span", {
                                    className: "text-2xl font-bold text-blue-600",
                                    children: n.price
                                }), o.jsx("button", {
                                    onClick: () => e("order"),
                                    className: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200",
                                    children: "Ordina"
                                })]
                            })
                        })]
                    })]
                }, n.id))
            })]
        })
    })
}

function ql() {
    const e = [{
        icon: Xf,
        title: "Scegli il Servizio",
        description: "Seleziona il pacchetto di livellamento più adatto alle tue esigenze"
    }, {
        icon: $o,
        title: "Fornisci i Dettagli",
        description: "Compila il form con le informazioni del tuo account e pet"
    }, {
        icon: Nl,
        title: "Iniziamo il Lavoro",
        description: "I nostri esperti iniziano subito il livellamento del tuo pet"
    }, {
        icon: qs,
        title: "Consegna Completata",
        description: "Ricevi il tuo pet livellato nei tempi stabiliti"
    }];
    return o.jsx("section", {
        className: "py-20 bg-white",
        children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [o.jsxs("div", {
                className: "text-center mb-16",
                children: [o.jsx("h2", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Come Funziona"
                }), o.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Il nostro processo è semplice, sicuro e trasparente. In pochi passaggi potrai avere il tuo pet al livello desiderato."
                })]
            }), o.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16",
                children: e.map((t, n) => {
                    const r = t.icon;
                    return o.jsxs("div", {
                        className: "text-center",
                        children: [o.jsxs("div", {
                            className: "relative mb-6",
                            children: [o.jsx("div", {
                                className: "w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110",
                                children: o.jsx(r, {
                                    className: "h-8 w-8 text-white"
                                })
                            }), o.jsx("div", {
                                className: "absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900",
                                children: n + 1
                            })]
                        }), o.jsx("h3", {
                            className: "text-lg font-semibold text-gray-900 mb-3",
                            children: t.title
                        }), o.jsx("p", {
                            className: "text-gray-600",
                            children: t.description
                        })]
                    }, n)
                })
            }), o.jsxs("div", {
                className: "bg-gray-50 rounded-2xl p-8",
                children: [o.jsx("div", {
                    className: "text-center mb-8",
                    children: o.jsx("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-4",
                        children: "Sicurezza e Garanzie"
                    })
                }), o.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-6",
                    children: [o.jsxs("div", {
                        className: "text-center",
                        children: [o.jsx("div", {
                            className: "w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3",
                            children: o.jsx(un, {
                                className: "h-6 w-6 text-white"
                            })
                        }), o.jsx("h4", {
                            className: "font-semibold text-gray-900 mb-2",
                            children: "100% Sicuro"
                        }), o.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "Non richiediamo mai la tua password. Utilizziamo solo metodi sicuri."
                        })]
                    }), o.jsxs("div", {
                        className: "text-center",
                        children: [o.jsx("div", {
                            className: "w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3",
                            children: o.jsx(qs, {
                                className: "h-6 w-6 text-white"
                            })
                        }), o.jsx("h4", {
                            className: "font-semibold text-gray-900 mb-2",
                            children: "Garanzia Rimborso"
                        }), o.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "Se non sei soddisfatto, ti rimborsiamo il 100% del denaro."
                        })]
                    }), o.jsxs("div", {
                        className: "text-center",
                        children: [o.jsx("div", {
                            className: "w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3",
                            children: o.jsx(nr, {
                                className: "h-6 w-6 text-white"
                            })
                        }), o.jsx("h4", {
                            className: "font-semibold text-gray-900 mb-2",
                            children: "Consegna Garantita"
                        }), o.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "Rispettiamo sempre i tempi di consegna promessi."
                        })]
                    })]
                })]
            })]
        })
    })
}

function ep({
    setActiveSection: e
}) {
    const t = [{
        name: "Starter",
        price: "€9",
        description: "Perfetto per iniziare",
        features: ["Livellamento 1-15", "Consegna in 24 ore", "Supporto base", "Garanzia rimborso"],
        cta: "Inizia Ora"
    }, {
        name: "Pro",
        price: "€19",
        description: "Il più scelto dai nostri clienti",
        features: ["Livellamento 1-30", "Consegna in 48 ore", "Supporto prioritario", "Garanzia rimborso", "Equipment bonus", "Progress reports"],
        cta: "Scegli Pro",
        popular: !0
    }, {
        name: "Master",
        price: "€35",
        description: "Per i giocatori più esigenti",
        features: ["Livellamento 1-50", "Consegna in 72 ore", "Supporto VIP", "Garanzia rimborso", "Equipment bonus", "Progress reports", "Achievement unlock", "Rare items farming"],
        cta: "Diventa Master"
    }];
    return o.jsx("section", {
        className: "py-20 bg-gray-900 text-white",
        children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [o.jsxs("div", {
                className: "text-center mb-16",
                children: [o.jsx("h2", {
                    className: "text-4xl font-bold mb-4",
                    children: "Prezzi e Pacchetti"
                }), o.jsx("p", {
                    className: "text-xl text-gray-300 max-w-3xl mx-auto",
                    children: "Scegli il pacchetto perfetto per le tue esigenze. Tutti i prezzi includono garanzia e supporto."
                })]
            }), o.jsx("div", {
                className: "grid md:grid-cols-3 gap-8 mb-16",
                children: t.map(n => o.jsxs("div", {
                    className: `relative bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${n.popular?"ring-2 ring-yellow-400":""}`,
                    children: [n.popular && o.jsx("div", {
                        className: "absolute -top-4 left-1/2 transform -translate-x-1/2",
                        children: o.jsxs("div", {
                            className: "bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center",
                            children: [o.jsx(Ao, {
                                className: "h-4 w-4 mr-1"
                            }), "Più Popolare"]
                        })
                    }), o.jsxs("div", {
                        className: "text-center",
                        children: [o.jsx("h3", {
                            className: "text-2xl font-bold mb-2",
                            children: n.name
                        }), o.jsx("div", {
                            className: "text-4xl font-bold text-yellow-400 mb-2",
                            children: n.price
                        }), o.jsx("p", {
                            className: "text-gray-400 mb-6",
                            children: n.description
                        }), o.jsx("ul", {
                            className: "space-y-3 mb-8",
                            children: n.features.map((r, l) => o.jsxs("li", {
                                className: "flex items-center text-sm",
                                children: [o.jsx(kn, {
                                    className: "h-4 w-4 text-green-400 mr-3 flex-shrink-0"
                                }), r]
                            }, l))
                        }), o.jsx("button", {
                            onClick: () => e("order"),
                            className: `w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 ${n.popular?"bg-yellow-400 hover:bg-yellow-500 text-gray-900":"bg-blue-600 hover:bg-blue-700 text-white"}`,
                            children: n.cta
                        })]
                    })]
                }, n.name))
            }), o.jsxs("div", {
                className: "bg-gray-800 rounded-2xl p-8",
                children: [o.jsx("h3", {
                    className: "text-2xl font-bold text-center mb-8",
                    children: "Pagamenti in Criptovalute"
                }), o.jsxs("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-6 text-center",
                    children: [o.jsxs("div", {
                        className: "bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-200",
                        children: [o.jsx("div", {
                            className: "w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3",
                            children: o.jsx("span", {
                                className: "text-white font-bold",
                                children: "₿"
                            })
                        }), o.jsx("span", {
                            className: "font-medium text-lg",
                            children: "Bitcoin"
                        }), o.jsx("p", {
                            className: "text-gray-400 text-sm mt-1",
                            children: "BTC"
                        })]
                    }), o.jsxs("div", {
                        className: "bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-200",
                        children: [o.jsx("div", {
                            className: "w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3",
                            children: o.jsx("span", {
                                className: "text-white font-bold",
                                children: "Ξ"
                            })
                        }), o.jsx("span", {
                            className: "font-medium text-lg",
                            children: "Ethereum"
                        }), o.jsx("p", {
                            className: "text-gray-400 text-sm mt-1",
                            children: "ETH"
                        })]
                    }), o.jsxs("div", {
                        className: "bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-200",
                        children: [o.jsx("div", {
                            className: "w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3",
                            children: o.jsx("span", {
                                className: "text-white font-bold",
                                children: "Ł"
                            })
                        }), o.jsx("span", {
                            className: "font-medium text-lg",
                            children: "Litecoin"
                        }), o.jsx("p", {
                            className: "text-gray-400 text-sm mt-1",
                            children: "LTC"
                        })]
                    }), o.jsxs("div", {
                        className: "bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-200",
                        children: [o.jsx("div", {
                            className: "w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3",
                            children: o.jsx("span", {
                                className: "text-white font-bold",
                                children: "₮"
                            })
                        }), o.jsx("span", {
                            className: "font-medium text-lg",
                            children: "USDT"
                        }), o.jsx("p", {
                            className: "text-gray-400 text-sm mt-1",
                            children: "TRC20"
                        })]
                    })]
                }), o.jsx("p", {
                    className: "text-center text-gray-400 mt-6",
                    children: "Pagamenti anonimi, veloci e con commissioni minime"
                })]
            })]
        })
    })
}

function tp() {
    const [e, t] = ge.useState(null), n = {
        bitcoin: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
        ethereum: "0x742d35Cc6634C0532925a3b8D4C9db96590b5b5b",
        usdt: "TQn9Y2khEsLJW1ChVWFMSMeRDow5oREqjK",
        litecoin: "ltc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4"
    }, r = (l, i) => {
        navigator.clipboard.writeText(l), t(i), setTimeout(() => t(null), 2e3)
    };
    return o.jsx("section", {
        className: "py-20 bg-gradient-to-br from-gray-900 to-blue-900",
        children: o.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [o.jsxs("div", {
                className: "text-center mb-12",
                children: [o.jsx("div", {
                    className: "w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6",
                    children: o.jsx(Js, {
                        className: "h-10 w-10 text-white"
                    })
                }), o.jsx("h2", {
                    className: "text-4xl font-bold text-white mb-4",
                    children: "Pagamenti in Criptovalute"
                }), o.jsx("p", {
                    className: "text-xl text-gray-300",
                    children: "Pagamenti veloci, sicuri e anonimi. Accettiamo le principali criptovalute."
                })]
            }), o.jsxs("div", {
                className: "grid md:grid-cols-3 gap-6 mb-12",
                children: [o.jsxs("div", {
                    className: "bg-gray-800 rounded-xl p-6 text-center",
                    children: [o.jsx(mc, {
                        className: "h-8 w-8 text-yellow-400 mx-auto mb-3"
                    }), o.jsx("h3", {
                        className: "text-lg font-semibold text-white mb-2",
                        children: "Istantaneo"
                    }), o.jsx("p", {
                        className: "text-gray-300 text-sm",
                        children: "Pagamenti confermati in pochi minuti"
                    })]
                }), o.jsxs("div", {
                    className: "bg-gray-800 rounded-xl p-6 text-center",
                    children: [o.jsx(un, {
                        className: "h-8 w-8 text-green-400 mx-auto mb-3"
                    }), o.jsx("h3", {
                        className: "text-lg font-semibold text-white mb-2",
                        children: "Sicuro"
                    }), o.jsx("p", {
                        className: "text-gray-300 text-sm",
                        children: "Blockchain garantisce la sicurezza"
                    })]
                }), o.jsxs("div", {
                    className: "bg-gray-800 rounded-xl p-6 text-center",
                    children: [o.jsx(Js, {
                        className: "h-8 w-8 text-blue-400 mx-auto mb-3"
                    }), o.jsx("h3", {
                        className: "text-lg font-semibold text-white mb-2",
                        children: "Anonimo"
                    }), o.jsx("p", {
                        className: "text-gray-300 text-sm",
                        children: "Privacy totale nei pagamenti"
                    })]
                })]
            }), o.jsxs("div", {
                className: "space-y-6",
                children: [o.jsxs("div", {
                    className: "bg-white rounded-2xl shadow-xl p-8",
                    children: [o.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [o.jsx("div", {
                            className: "w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4",
                            children: o.jsx("span", {
                                className: "text-white font-bold text-lg",
                                children: "₿"
                            })
                        }), o.jsxs("div", {
                            children: [o.jsx("h3", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Bitcoin (BTC)"
                            }), o.jsx("p", {
                                className: "text-gray-600",
                                children: "La criptovaluta più sicura e diffusa"
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "bg-gray-50 rounded-lg p-4",
                        children: [o.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [o.jsx("span", {
                                className: "font-semibold text-gray-700",
                                children: "Indirizzo Wallet:"
                            }), o.jsx("button", {
                                onClick: () => r(n.bitcoin, "bitcoin"),
                                className: "flex items-center text-orange-600 hover:text-orange-700 transition-colors",
                                children: e === "bitcoin" ? o.jsxs(o.Fragment, {
                                    children: [o.jsx(kn, {
                                        className: "h-4 w-4 mr-1"
                                    }), "Copiato!"]
                                }) : o.jsxs(o.Fragment, {
                                    children: [o.jsx(jr, {
                                        className: "h-4 w-4 mr-1"
                                    }), "Copia"]
                                })
                            })]
                        }), o.jsx("div", {
                            className: "bg-white rounded-lg p-3 border-2 border-gray-200 font-mono text-sm break-all",
                            children: n.bitcoin
                        })]
                    })]
                }), o.jsxs("div", {
                    className: "bg-white rounded-2xl shadow-xl p-8",
                    children: [o.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [o.jsx("div", {
                            className: "w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4",
                            children: o.jsx("span", {
                                className: "text-white font-bold text-lg",
                                children: "Ξ"
                            })
                        }), o.jsxs("div", {
                            children: [o.jsx("h3", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Ethereum (ETH)"
                            }), o.jsx("p", {
                                className: "text-gray-600",
                                children: "Smart contracts e pagamenti veloci"
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "bg-gray-50 rounded-lg p-4",
                        children: [o.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [o.jsx("span", {
                                className: "font-semibold text-gray-700",
                                children: "Indirizzo Wallet:"
                            }), o.jsx("button", {
                                onClick: () => r(n.ethereum, "ethereum"),
                                className: "flex items-center text-blue-600 hover:text-blue-700 transition-colors",
                                children: e === "ethereum" ? o.jsxs(o.Fragment, {
                                    children: [o.jsx(kn, {
                                        className: "h-4 w-4 mr-1"
                                    }), "Copiato!"]
                                }) : o.jsxs(o.Fragment, {
                                    children: [o.jsx(jr, {
                                        className: "h-4 w-4 mr-1"
                                    }), "Copia"]
                                })
                            })]
                        }), o.jsx("div", {
                            className: "bg-white rounded-lg p-3 border-2 border-gray-200 font-mono text-sm break-all",
                            children: n.ethereum
                        })]
                    })]
                }), o.jsxs("div", {
                    className: "bg-white rounded-2xl shadow-xl p-8",
                    children: [o.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [o.jsx("div", {
                            className: "w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mr-4",
                            children: o.jsx("span", {
                                className: "text-white font-bold text-lg",
                                children: "Ł"
                            })
                        }), o.jsxs("div", {
                            children: [o.jsx("h3", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Litecoin (LTC)"
                            }), o.jsx("p", {
                                className: "text-gray-600",
                                children: "Pagamenti veloci con commissioni basse"
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "bg-gray-50 rounded-lg p-4",
                        children: [o.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [o.jsx("span", {
                                className: "font-semibold text-gray-700",
                                children: "Indirizzo Wallet:"
                            }), o.jsx("button", {
                                onClick: () => r(n.litecoin, "litecoin"),
                                className: "flex items-center text-gray-600 hover:text-gray-700 transition-colors",
                                children: e === "litecoin" ? o.jsxs(o.Fragment, {
                                    children: [o.jsx(kn, {
                                        className: "h-4 w-4 mr-1"
                                    }), "Copiato!"]
                                }) : o.jsxs(o.Fragment, {
                                    children: [o.jsx(jr, {
                                        className: "h-4 w-4 mr-1"
                                    }), "Copia"]
                                })
                            })]
                        }), o.jsx("div", {
                            className: "bg-white rounded-lg p-3 border-2 border-gray-200 font-mono text-sm break-all",
                            children: n.litecoin
                        })]
                    })]
                }), o.jsxs("div", {
                    className: "bg-white rounded-2xl shadow-xl p-8",
                    children: [o.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [o.jsx("div", {
                            className: "w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4",
                            children: o.jsx("span", {
                                className: "text-white font-bold text-lg",
                                children: "₮"
                            })
                        }), o.jsxs("div", {
                            children: [o.jsx("h3", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "USDT (TRC20)"
                            }), o.jsx("p", {
                                className: "text-gray-600",
                                children: "Stablecoin - valore fisso in dollari"
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "bg-gray-50 rounded-lg p-4",
                        children: [o.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [o.jsx("span", {
                                className: "font-semibold text-gray-700",
                                children: "Indirizzo Wallet (TRC20):"
                            }), o.jsx("button", {
                                onClick: () => r(n.usdt, "usdt"),
                                className: "flex items-center text-green-600 hover:text-green-700 transition-colors",
                                children: e === "usdt" ? o.jsxs(o.Fragment, {
                                    children: [o.jsx(kn, {
                                        className: "h-4 w-4 mr-1"
                                    }), "Copiato!"]
                                }) : o.jsxs(o.Fragment, {
                                    children: [o.jsx(jr, {
                                        className: "h-4 w-4 mr-1"
                                    }), "Copia"]
                                })
                            })]
                        }), o.jsx("div", {
                            className: "bg-white rounded-lg p-3 border-2 border-gray-200 font-mono text-sm break-all",
                            children: n.usdt
                        })]
                    })]
                })]
            }), o.jsxs("div", {
                className: "mt-12 bg-yellow-400 rounded-2xl p-8 text-gray-900",
                children: [o.jsx("h3", {
                    className: "text-2xl font-bold mb-6 text-center",
                    children: "📋 Istruzioni per il Pagamento"
                }), o.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-6",
                    children: [o.jsxs("div", {
                        children: [o.jsx("h4", {
                            className: "font-bold mb-3",
                            children: "Come Pagare:"
                        }), o.jsxs("ol", {
                            className: "space-y-2 text-sm",
                            children: [o.jsx("li", {
                                children: "1. Copia l'indirizzo wallet della crypto scelta"
                            }), o.jsx("li", {
                                children: "2. Invia l'importo esatto dal tuo wallet"
                            }), o.jsx("li", {
                                children: "3. Salva l'hash della transazione"
                            }), o.jsx("li", {
                                children: "4. Contattaci su Discord con la prova"
                            })]
                        })]
                    }), o.jsxs("div", {
                        children: [o.jsx("h4", {
                            className: "font-bold mb-3",
                            children: "Dopo il Pagamento:"
                        }), o.jsxs("ul", {
                            className: "space-y-2 text-sm",
                            children: [o.jsx("li", {
                                children: "• Contattaci immediatamente su Discord"
                            }), o.jsx("li", {
                                children: "• Fornisci l'hash della transazione"
                            }), o.jsx("li", {
                                children: "• Confermeremo il pagamento in 5-10 minuti"
                            }), o.jsx("li", {
                                children: "• Il servizio inizia subito dopo la conferma"
                            })]
                        })]
                    })]
                })]
            }), o.jsx("div", {
                className: "mt-8 text-center",
                children: o.jsxs("div", {
                    className: "bg-indigo-600 rounded-xl shadow-lg p-6 text-white",
                    children: [o.jsx("h3", {
                        className: "text-xl font-bold mb-4",
                        children: "Contattaci Dopo il Pagamento"
                    }), o.jsx("div", {
                        className: "bg-indigo-700 rounded-lg p-4 inline-block",
                        children: o.jsx("span", {
                            className: "font-bold text-lg",
                            children: "Discord: PetLevelPro#1234"
                        })
                    }), o.jsx("p", {
                        className: "mt-4 text-indigo-100",
                        children: "Rispondiamo entro 5 minuti, 24 ore su 24"
                    })]
                })
            }), o.jsxs("div", {
                className: "mt-8 bg-red-50 border border-red-200 rounded-xl p-6",
                children: [o.jsx("h3", {
                    className: "font-bold text-red-900 mb-3",
                    children: "⚠️ Importante"
                }), o.jsxs("ul", {
                    className: "text-sm text-red-800 space-y-2",
                    children: [o.jsx("li", {
                        children: "• Invia SOLO alla rete corretta (Bitcoin, Ethereum, TRC20 per USDT)"
                    }), o.jsx("li", {
                        children: "• Controlla sempre l'indirizzo prima di inviare"
                    }), o.jsx("li", {
                        children: "• I pagamenti crypto sono irreversibili"
                    }), o.jsx("li", {
                        children: "• Conserva sempre l'hash della transazione"
                    }), o.jsx("li", {
                        children: "• Per USDT usa SOLO la rete TRC20 (commissioni basse)"
                    })]
                })]
            })]
        })
    })
}

function np() {
    const [e, t] = ge.useState({
        email: "",
        discordUsername: "",
        gameServer: "",
        petName: "",
        currentLevel: "",
        targetLevel: "",
        serviceType: "",
        paymentMethod: "",
        notes: ""
    }), [n, r] = ge.useState(!1), l = async s => {
        s.preventDefault(), r(!0), setTimeout(() => {
            alert("Ordine ricevuto! Ti contatteremo entro 1 ora per confermare i dettagli."), r(!1)
        }, 2e3)
    }, i = s => {
        t({ ...e,
            [s.target.name]: s.target.value
        })
    };
    return o.jsxs("section", {
        className: "py-20 bg-gradient-to-br from-gray-50 to-blue-50",
        children: [o.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [o.jsxs("div", {
                className: "text-center mb-12",
                children: [o.jsx("h2", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Ordina il Tuo Servizio"
                }), o.jsx("p", {
                    className: "text-xl text-gray-600",
                    children: "Compila il form sottostante per iniziare il processo di livellamento"
                })]
            }), o.jsxs("form", {
                onSubmit: l,
                className: "bg-white rounded-2xl shadow-xl p-8",
                children: [o.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-6",
                    children: [o.jsxs("div", {
                        className: "space-y-4",
                        children: [o.jsxs("h3", {
                            className: "text-lg font-semibold text-gray-900 flex items-center",
                            children: [o.jsx(Zf, {
                                className: "h-5 w-5 mr-2 text-blue-600"
                            }), "Informazioni di Contatto"]
                        }), o.jsxs("div", {
                            children: [o.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Email *"
                            }), o.jsx("input", {
                                type: "email",
                                name: "email",
                                required: !0,
                                value: e.email,
                                onChange: i,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                                placeholder: "tua@email.com"
                            })]
                        }), o.jsxs("div", {
                            children: [o.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Discord Username *"
                            }), o.jsx("input", {
                                type: "text",
                                name: "discordUsername",
                                required: !0,
                                value: e.discordUsername,
                                onChange: i,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                                placeholder: "username#1234"
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "space-y-4",
                        children: [o.jsxs("h3", {
                            className: "text-lg font-semibold text-gray-900 flex items-center",
                            children: [o.jsx(Nl, {
                                className: "h-5 w-5 mr-2 text-blue-600"
                            }), "Informazioni del Gioco"]
                        }), o.jsxs("div", {
                            children: [o.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Server del Gioco *"
                            }), o.jsxs("select", {
                                name: "gameServer",
                                required: !0,
                                value: e.gameServer,
                                onChange: i,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                                children: [o.jsx("option", {
                                    value: "",
                                    children: "Seleziona server"
                                }), o.jsx("option", {
                                    value: "eu-west",
                                    children: "EU West"
                                }), o.jsx("option", {
                                    value: "eu-east",
                                    children: "EU East"
                                }), o.jsx("option", {
                                    value: "na-east",
                                    children: "NA East"
                                }), o.jsx("option", {
                                    value: "na-west",
                                    children: "NA West"
                                }), o.jsx("option", {
                                    value: "asia",
                                    children: "Asia"
                                })]
                            })]
                        }), o.jsxs("div", {
                            children: [o.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Nome del Pet *"
                            }), o.jsx("input", {
                                type: "text",
                                name: "petName",
                                required: !0,
                                value: e.petName,
                                onChange: i,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                                placeholder: "Nome del tuo pet"
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "space-y-4",
                        children: [o.jsx("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "Dettagli del Servizio"
                        }), o.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [o.jsxs("div", {
                                children: [o.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Livello Attuale *"
                                }), o.jsx("input", {
                                    type: "number",
                                    name: "currentLevel",
                                    required: !0,
                                    min: "1",
                                    max: "49",
                                    value: e.currentLevel,
                                    onChange: i,
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                                    placeholder: "1"
                                })]
                            }), o.jsxs("div", {
                                children: [o.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Livello Desiderato *"
                                }), o.jsx("input", {
                                    type: "number",
                                    name: "targetLevel",
                                    required: !0,
                                    min: "2",
                                    max: "50",
                                    value: e.targetLevel,
                                    onChange: i,
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                                    placeholder: "10"
                                })]
                            })]
                        }), o.jsxs("div", {
                            children: [o.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Tipo di Servizio *"
                            }), o.jsxs("select", {
                                name: "serviceType",
                                required: !0,
                                value: e.serviceType,
                                onChange: i,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                                children: [o.jsx("option", {
                                    value: "",
                                    children: "Seleziona servizio"
                                }), o.jsx("option", {
                                    value: "standard",
                                    children: "Standard"
                                }), o.jsx("option", {
                                    value: "express",
                                    children: "Express (+50%)"
                                }), o.jsx("option", {
                                    value: "premium",
                                    children: "Premium (con farming)"
                                })]
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "space-y-4",
                        children: [o.jsxs("h3", {
                            className: "text-lg font-semibold text-gray-900 flex items-center",
                            children: [o.jsx(Gf, {
                                className: "h-5 w-5 mr-2 text-blue-600"
                            }), "Pagamento"]
                        }), o.jsxs("div", {
                            children: [o.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Metodo di Pagamento *"
                            }), o.jsxs("select", {
                                name: "paymentMethod",
                                required: !0,
                                value: e.paymentMethod,
                                onChange: i,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                                children: [o.jsx("option", {
                                    value: "",
                                    children: "Seleziona metodo"
                                }), o.jsx("option", {
                                    value: "bitcoin",
                                    children: "Bitcoin (BTC)"
                                }), o.jsx("option", {
                                    value: "ethereum",
                                    children: "Ethereum (ETH)"
                                }), o.jsx("option", {
                                    value: "litecoin",
                                    children: "Litecoin (LTC)"
                                }), o.jsx("option", {
                                    value: "usdt",
                                    children: "USDT (TRC20)"
                                })]
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "md:col-span-2",
                        children: [o.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Note Aggiuntive"
                        }), o.jsx("textarea", {
                            name: "notes",
                            rows: 4,
                            value: e.notes,
                            onChange: i,
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                            placeholder: "Eventuali richieste speciali o informazioni aggiuntive..."
                        })]
                    })]
                }), o.jsx("div", {
                    className: "mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200",
                    children: o.jsxs("div", {
                        className: "flex items-start",
                        children: [o.jsx(un, {
                            className: "h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
                        }), o.jsxs("div", {
                            className: "text-sm text-blue-800",
                            children: [o.jsx("p", {
                                className: "font-semibold mb-1",
                                children: "Informazioni sulla Sicurezza"
                            }), o.jsx("p", {
                                children: "Non condivideremo mai le tue informazioni di gioco. Il livellamento viene eseguito solo tramite metodi sicuri che non mettono a rischio il tuo account."
                            })]
                        })]
                    })
                }), o.jsx("div", {
                    className: "mt-8",
                    children: o.jsx("button", {
                        type: "submit",
                        disabled: n,
                        className: `w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 ${n?"bg-gray-400 cursor-not-allowed":"bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105"} text-white`,
                        children: n ? "Elaborazione in corso..." : "Invia Ordine"
                    })
                })]
            })]
        }), o.jsx(tp, {})]
    })
}

function rp() {
    const [e, t] = ge.useState(null), [n, r] = ge.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    }), l = [{
        question: "È sicuro affidare il mio account?",
        answer: "Assolutamente sì. Non richiediamo mai la password del tuo account. Utilizziamo solo metodi di livellamento esterni sicuri e approvati."
    }, {
        question: "Quanto tempo ci vuole per completare un servizio?",
        answer: "I tempi variano in base al servizio scelto. Generalmente da 12 ore per livelli bassi fino a 120 ore per livelli avanzati."
    }, {
        question: "Cosa succede se il mio pet viene danneggiato?",
        answer: "Offriamo una garanzia completa. Se dovesse accadere qualcosa (molto raro), ripristiniamo tutto e offriamo un servizio gratuito."
    }, {
        question: "Posso seguire i progressi del mio pet?",
        answer: "Sì! Ti invieremo aggiornamenti regolari sui progressi tramite Discord o email."
    }, {
        question: "Accettate rimborsi?",
        answer: "Sì, offriamo rimborso completo se il servizio non viene completato nei tempi stabiliti o se non sei soddisfatto."
    }, {
        question: "Supportate tutti i giochi?",
        answer: "Supportiamo i principali MMORPG e giochi con sistema di pet. Contattaci per verificare la compatibilità con il tuo gioco."
    }], i = s => {
        s.preventDefault(), alert("Messaggio inviato! Ti risponderemo entro 2 ore."), r({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    };
    return o.jsx("section", {
        className: "py-20 bg-white",
        children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [o.jsxs("div", {
                className: "text-center mb-16",
                children: [o.jsx("h2", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Centro Supporto"
                }), o.jsx("p", {
                    className: "text-xl text-gray-600",
                    children: "Siamo qui per aiutarti. Trova risposte alle tue domande o contattaci direttamente."
                })]
            }), o.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12",
                children: [o.jsxs("div", {
                    children: [o.jsxs("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-8 flex items-center",
                        children: [o.jsx(Kf, {
                            className: "h-6 w-6 mr-3 text-blue-600"
                        }), "Domande Frequenti"]
                    }), o.jsx("div", {
                        className: "space-y-4",
                        children: l.map((s, a) => o.jsxs("div", {
                            className: "border border-gray-200 rounded-lg overflow-hidden",
                            children: [o.jsxs("button", {
                                onClick: () => t(e === a ? null : a),
                                className: "w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between",
                                children: [o.jsx("span", {
                                    className: "font-medium text-gray-900",
                                    children: s.question
                                }), o.jsx(Qf, {
                                    className: `h-5 w-5 text-gray-500 transition-transform duration-200 ${e===a?"rotate-180":""}`
                                })]
                            }), e === a && o.jsx("div", {
                                className: "px-6 py-4 bg-white",
                                children: o.jsx("p", {
                                    className: "text-gray-700",
                                    children: s.answer
                                })
                            })]
                        }, a))
                    }), o.jsxs("div", {
                        className: "mt-8 p-6 bg-blue-50 rounded-lg",
                        children: [o.jsx("h4", {
                            className: "font-semibold text-gray-900 mb-4",
                            children: "Contatti Diretti"
                        }), o.jsxs("div", {
                            className: "space-y-3",
                            children: [o.jsxs("div", {
                                className: "flex items-center text-sm text-gray-700",
                                children: [o.jsx(pc, {
                                    className: "h-4 w-4 mr-3 text-blue-600"
                                }), "support@petlevelpro.com"]
                            }), o.jsxs("div", {
                                className: "flex items-center text-sm text-gray-700",
                                children: [o.jsx($o, {
                                    className: "h-4 w-4 mr-3 text-blue-600"
                                }), "Discord: PetLevelPro#1234"]
                            }), o.jsxs("div", {
                                className: "flex items-center text-sm text-gray-700",
                                children: [o.jsx(nr, {
                                    className: "h-4 w-4 mr-3 text-blue-600"
                                }), "Supporto 24/7 disponibile"]
                            })]
                        })]
                    })]
                }), o.jsxs("div", {
                    children: [o.jsx("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-8",
                        children: "Inviaci un Messaggio"
                    }), o.jsxs("form", {
                        onSubmit: i,
                        className: "space-y-6",
                        children: [o.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [o.jsxs("div", {
                                children: [o.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Nome *"
                                }), o.jsx("input", {
                                    type: "text",
                                    name: "name",
                                    required: !0,
                                    value: n.name,
                                    onChange: s => r({ ...n,
                                        name: s.target.value
                                    }),
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                })]
                            }), o.jsxs("div", {
                                children: [o.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Email *"
                                }), o.jsx("input", {
                                    type: "email",
                                    name: "email",
                                    required: !0,
                                    value: n.email,
                                    onChange: s => r({ ...n,
                                        email: s.target.value
                                    }),
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                })]
                            })]
                        }), o.jsxs("div", {
                            children: [o.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Oggetto *"
                            }), o.jsxs("select", {
                                name: "subject",
                                required: !0,
                                value: n.subject,
                                onChange: s => r({ ...n,
                                    subject: s.target.value
                                }),
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                                children: [o.jsx("option", {
                                    value: "",
                                    children: "Seleziona oggetto"
                                }), o.jsx("option", {
                                    value: "general",
                                    children: "Informazioni generali"
                                }), o.jsx("option", {
                                    value: "order",
                                    children: "Domande su un ordine"
                                }), o.jsx("option", {
                                    value: "technical",
                                    children: "Problema tecnico"
                                }), o.jsx("option", {
                                    value: "billing",
                                    children: "Fatturazione"
                                }), o.jsx("option", {
                                    value: "other",
                                    children: "Altro"
                                })]
                            })]
                        }), o.jsxs("div", {
                            children: [o.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Messaggio *"
                            }), o.jsx("textarea", {
                                name: "message",
                                required: !0,
                                rows: 5,
                                value: n.message,
                                onChange: s => r({ ...n,
                                    message: s.target.value
                                }),
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                                placeholder: "Descrivi la tua richiesta..."
                            })]
                        }), o.jsx("button", {
                            type: "submit",
                            className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105",
                            children: "Invia Messaggio"
                        })]
                    })]
                })]
            })]
        })
    })
}

function lp() {
    const e = [{
            name: "Marco R.",
            game: "Grow a Garden",
            rating: 5,
            text: "Servizio fantastico! Il mio pet giardiniere è passato dal livello 5 al 25 in sole 36 ore. Ora può coltivare piante rare! Team professionale e comunicazione perfetta.",
            avatar: "M"
        }, {
            name: "Giulia S.",
            game: "Grow a Garden",
            rating: 5,
            text: "Finalmente ho trovato un servizio affidabile per livellare i miei pet botanici. Account sempre sicuro e risultati garantiti. Lo consiglio a tutti!",
            avatar: "G"
        }, {
            name: "Alessandro T.",
            game: "Grow a Garden",
            rating: 5,
            text: "Incredibile velocità di livellamento per i miei pet da giardino. Quello che mi avrebbe richiesto settimane di farming, loro lo hanno fatto in 2 giorni.",
            avatar: "A"
        }, {
            name: "Francesca M.",
            game: "Grow a Garden",
            rating: 5,
            text: "Servizio impeccabile! Prezzi onesti e qualità top. I miei pet da giardino ora sono al massimo livello e possono coltivare qualsiasi pianta. Sono felicissima!",
            avatar: "F"
        }, {
            name: "Lorenzo K.",
            game: "Grow a Garden",
            rating: 5,
            text: "Team di professionisti veri. Mi hanno tenuto aggiornato costantemente sui progressi del livellamento dei miei pet botanici. Servizio da 10 e lode!",
            avatar: "L"
        }, {
            name: "Sofia B.",
            game: "Grow a Garden",
            rating: 5,
            text: "Non credevo fosse possibile livellare così velocemente i pet da giardino, ma hanno mantenuto tutte le promesse. Veloce, sicuro e economico. Tornerò sicuramente!",
            avatar: "S"
        }],
        t = [{
            number: "2,500+",
            label: "Clienti Soddisfatti"
        }, {
            number: "15,000+",
            label: "Pet Livellati"
        }, {
            number: "99.9%",
            label: "Tasso di Successo"
        }, {
            number: "4.9/5",
            label: "Valutazione Media"
        }];
    return o.jsx("section", {
        className: "py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white",
        children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [o.jsxs("div", {
                className: "text-center mb-16",
                children: [o.jsx("h2", {
                    className: "text-4xl font-bold mb-4",
                    children: "I Numeri Parlano Chiaro"
                }), o.jsx("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12",
                    children: t.map((n, r) => o.jsxs("div", {
                        className: "text-center",
                        children: [o.jsx("div", {
                            className: "text-3xl md:text-4xl font-bold text-yellow-400 mb-2",
                            children: n.number
                        }), o.jsx("div", {
                            className: "text-gray-300",
                            children: n.label
                        })]
                    }, r))
                })]
            }), o.jsxs("div", {
                className: "text-center mb-12",
                children: [o.jsx("h3", {
                    className: "text-3xl font-bold mb-4",
                    children: "Cosa Dicono i Nostri Clienti"
                }), o.jsx("p", {
                    className: "text-xl text-gray-300",
                    children: "Leggi le esperienze di chi ha già utilizzato i nostri servizi"
                })]
            }), o.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: e.map((n, r) => o.jsxs("div", {
                    className: "bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105",
                    children: [o.jsx("div", {
                        className: "flex items-center mb-4",
                        children: [...Array(n.rating)].map((l, i) => o.jsx(Ao, {
                            className: "h-4 w-4 text-yellow-400 fill-current"
                        }, i))
                    }), o.jsxs("p", {
                        className: "text-gray-300 mb-6 leading-relaxed",
                        children: ['"', n.text, '"']
                    }), o.jsxs("div", {
                        className: "flex items-center",
                        children: [o.jsx("div", {
                            className: "w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3",
                            children: o.jsx("span", {
                                className: "text-white font-bold",
                                children: n.avatar
                            })
                        }), o.jsxs("div", {
                            children: [o.jsx("div", {
                                className: "font-semibold text-white",
                                children: n.name
                            }), o.jsx("div", {
                                className: "text-sm text-gray-400",
                                children: n.game
                            })]
                        })]
                    })]
                }, r))
            }), o.jsxs("div", {
                className: "mt-16 text-center",
                children: [o.jsx("h4", {
                    className: "text-xl font-semibold mb-8",
                    children: "Affidabilità Garantita"
                }), o.jsxs("div", {
                    className: "flex flex-wrap justify-center items-center gap-8 opacity-60",
                    children: [o.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [o.jsx("div", {
                            className: "w-12 h-8 bg-gray-600 rounded flex items-center justify-center",
                            children: o.jsx("span", {
                                className: "text-xs text-white font-bold",
                                children: "SSL"
                            })
                        }), o.jsx("span", {
                            className: "text-sm",
                            children: "Certificato SSL"
                        })]
                    }), o.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [o.jsx("div", {
                            className: "w-12 h-8 bg-gray-600 rounded flex items-center justify-center",
                            children: o.jsx("span", {
                                className: "text-xs text-white font-bold",
                                children: "24/7"
                            })
                        }), o.jsx("span", {
                            className: "text-sm",
                            children: "Supporto Continuo"
                        })]
                    }), o.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [o.jsx("div", {
                            className: "w-12 h-8 bg-gray-600 rounded flex items-center justify-center",
                            children: o.jsx("span", {
                                className: "text-xs text-white font-bold",
                                children: "100%"
                            })
                        }), o.jsx("span", {
                            className: "text-sm",
                            children: "Garanzia Rimborso"
                        })]
                    })]
                })]
            })]
        })
    })
}

function ip() {
    return o.jsx("footer", {
        className: "bg-gray-900 text-white py-12",
        children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [o.jsxs("div", {
                className: "grid md:grid-cols-4 gap-8",
                children: [o.jsxs("div", {
                    className: "md:col-span-1",
                    children: [o.jsxs("div", {
                        className: "flex items-center space-x-2 mb-4",
                        children: [o.jsx(Nl, {
                            className: "h-8 w-8 text-blue-400"
                        }), o.jsx("span", {
                            className: "text-2xl font-bold",
                            children: "PetLevelPro"
                        })]
                    }), o.jsx("p", {
                        className: "text-gray-400 mb-6",
                        children: "Il servizio di livellamento pet più affidabile e veloce del mercato."
                    }), o.jsxs("div", {
                        className: "flex space-x-4",
                        children: [o.jsx("div", {
                            className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200",
                            children: o.jsx(pc, {
                                className: "h-5 w-5"
                            })
                        }), o.jsx("div", {
                            className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200",
                            children: o.jsx($o, {
                                className: "h-5 w-5"
                            })
                        })]
                    })]
                }), o.jsxs("div", {
                    children: [o.jsx("h4", {
                        className: "text-lg font-semibold mb-4",
                        children: "Servizi"
                    }), o.jsxs("ul", {
                        className: "space-y-2 text-gray-400",
                        children: [o.jsx("li", {
                            className: "hover:text-white transition-colors duration-200 cursor-pointer",
                            children: "Livellamento Base"
                        }), o.jsx("li", {
                            className: "hover:text-white transition-colors duration-200 cursor-pointer",
                            children: "Livellamento Intermedio"
                        }), o.jsx("li", {
                            className: "hover:text-white transition-colors duration-200 cursor-pointer",
                            children: "Livellamento Avanzato"
                        }), o.jsx("li", {
                            className: "hover:text-white transition-colors duration-200 cursor-pointer",
                            children: "Servizio Personalizzato"
                        })]
                    })]
                }), o.jsxs("div", {
                    children: [o.jsx("h4", {
                        className: "text-lg font-semibold mb-4",
                        children: "Supporto"
                    }), o.jsxs("ul", {
                        className: "space-y-2 text-gray-400",
                        children: [o.jsx("li", {
                            className: "hover:text-white transition-colors duration-200 cursor-pointer",
                            children: "FAQ"
                        }), o.jsx("li", {
                            className: "hover:text-white transition-colors duration-200 cursor-pointer",
                            children: "Contattaci"
                        }), o.jsx("li", {
                            className: "hover:text-white transition-colors duration-200 cursor-pointer",
                            children: "Stato Ordini"
                        }), o.jsx("li", {
                            className: "hover:text-white transition-colors duration-200 cursor-pointer",
                            children: "Garanzie"
                        })]
                    })]
                }), o.jsxs("div", {
                    children: [o.jsx("h4", {
                        className: "text-lg font-semibold mb-4",
                        children: "Informazioni"
                    }), o.jsxs("ul", {
                        className: "space-y-2 text-gray-400",
                        children: [o.jsx("li", {
                            className: "hover:text-white transition-colors duration-200 cursor-pointer",
                            children: "Privacy Policy"
                        }), o.jsx("li", {
                            className: "hover:text-white transition-colors duration-200 cursor-pointer",
                            children: "Termini di Servizio"
                        }), o.jsx("li", {
                            className: "hover:text-white transition-colors duration-200 cursor-pointer",
                            children: "Rimborsi"
                        })]
                    }), o.jsxs("div", {
                        className: "mt-6 space-y-2",
                        children: [o.jsxs("div", {
                            className: "flex items-center text-sm text-gray-400",
                            children: [o.jsx(un, {
                                className: "h-4 w-4 mr-2 text-green-400"
                            }), "Pagamenti Sicuri"]
                        }), o.jsxs("div", {
                            className: "flex items-center text-sm text-gray-400",
                            children: [o.jsx(nr, {
                                className: "h-4 w-4 mr-2 text-blue-400"
                            }), "Supporto 24/7"]
                        })]
                    })]
                })]
            }), o.jsx("div", {
                className: "border-t border-gray-800 mt-12 pt-8 text-center",
                children: o.jsx("p", {
                    className: "text-gray-400",
                    children: "© 2024 PetLevelPro. Tutti i diritti riservati. | Servizio professionale di livellamento pet"
                })
            })]
        })
    })
}

function op() {
    const [e, t] = ge.useState("home"), n = () => {
        switch (e) {
            case "home":
                return o.jsxs(o.Fragment, {
                    children: [o.jsx(bs, {
                        setActiveSection: t
                    }), o.jsx(ql, {})]
                });
            case "services":
                return o.jsx(bf, {
                    setActiveSection: t
                });
            case "how-it-works":
                return o.jsx(ql, {});
            case "pricing":
                return o.jsx(ep, {
                    setActiveSection: t
                });
            case "order":
                return o.jsx(np, {});
            case "support":
                return o.jsx(rp, {});
            case "testimonials":
                return o.jsx(lp, {});
            default:
                return o.jsxs(o.Fragment, {
                    children: [o.jsx(bs, {
                        setActiveSection: t
                    }), o.jsx(ql, {})]
                })
        }
    };
    return o.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [o.jsx(Jf, {
            activeSection: e,
            setActiveSection: t
        }), o.jsx("main", {
            children: n()
        }), o.jsx(ip, {})]
    })
}
fc(document.getElementById("root")).render(o.jsx(ge.StrictMode, {
    children: o.jsx(op, {})
}));