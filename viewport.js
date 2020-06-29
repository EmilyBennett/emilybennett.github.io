/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function r(e) {
    var t = !!e && "length" in e && e.length,
      r = oe.type(e);
    return "function" === r || oe.isWindow(e) ? !1 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
  }

  function i(e, t, r) {
    if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
      return !!t.call(e, i, e) !== r
    });
    if (t.nodeType) return oe.grep(e, function(e) {
      return e === t !== r
    });
    if ("string" == typeof t) {
      if (me.test(t)) return oe.filter(t, e, r);
      t = oe.filter(t, e)
    }
    return oe.grep(e, function(e) {
      return J.call(t, e) > -1 !== r
    })
  }

  function n(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }

  function o(e) {
    var t = {};
    oe.each(e.match(Re) || [], function(e, r) {
      t[r] = !0
    });
    return t
  }

  function a() {
    $.removeEventListener("DOMContentLoaded", a);
    e.removeEventListener("load", a);
    oe.ready()
  }

  function s() {
    this.expando = oe.expando + s.uid++
  }

  function l(e, t, r) {
    var i;
    if (void 0 === r && 1 === e.nodeType) {
      i = "data-" + t.replace(Me, "-$&").toLowerCase();
      r = e.getAttribute(i);
      if ("string" == typeof r) {
        try {
          r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Se.test(r) ? oe.parseJSON(r) : r
        } catch (n) {}
        _e.set(e, t, r)
      } else r = void 0
    }
    return r
  }

  function c(e, t, r, i) {
    var n, o = 1,
      a = 20,
      s = i ? function() {
        return i.cur()
      } : function() {
        return oe.css(e, t, "")
      },
      l = s(),
      c = r && r[3] || (oe.cssNumber[t] ? "" : "px"),
      h = (oe.cssNumber[t] || "px" !== c && +l) && Ae.exec(oe.css(e, t));
    if (h && h[3] !== c) {
      c = c || h[3];
      r = r || [];
      h = +l || 1;
      do {
        o = o || ".5";
        h /= o;
        oe.style(e, t, h + c)
      } while (o !== (o = s() / l) && 1 !== o && --a)
    }
    if (r) {
      h = +h || +l || 0;
      n = r[1] ? h + (r[1] + 1) * r[2] : +r[2];
      if (i) {
        i.unit = c;
        i.start = h;
        i.end = n
      }
    }
    return n
  }

  function h(e, t) {
    var r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], r) : r
  }

  function u(e, t) {
    for (var r = 0, i = e.length; i > r; r++) be.set(e[r], "globalEval", !t || be.get(t[r], "globalEval"))
  }

  function f(e, t, r, i, n) {
    for (var o, a, s, l, c, f, p = t.createDocumentFragment(), d = [], m = 0, E = e.length; E > m; m++) {
      o = e[m];
      if (o || 0 === o)
        if ("object" === oe.type(o)) oe.merge(d, o.nodeType ? [o] : o);
        else if (Ve.test(o)) {
        a = a || p.appendChild(t.createElement("div"));
        s = (Fe.exec(o) || ["", ""])[1].toLowerCase();
        l = Ue[s] || Ue._default;
        a.innerHTML = l[1] + oe.htmlPrefilter(o) + l[2];
        f = l[0];
        for (; f--;) a = a.lastChild;
        oe.merge(d, a.childNodes);
        a = p.firstChild;
        a.textContent = ""
      } else d.push(t.createTextNode(o))
    }
    p.textContent = "";
    m = 0;
    for (; o = d[m++];)
      if (i && oe.inArray(o, i) > -1) n && n.push(o);
      else {
        c = oe.contains(o.ownerDocument, o);
        a = h(p.appendChild(o), "script");
        c && u(a);
        if (r) {
          f = 0;
          for (; o = a[f++];) Ne.test(o.type || "") && r.push(o)
        }
      }
    return p
  }

  function p() {
    return !0
  }

  function d() {
    return !1
  }

  function m() {
    try {
      return $.activeElement
    } catch (e) {}
  }

  function E(e, t, r, i, n, o) {
    var a, s;
    if ("object" == typeof t) {
      if ("string" != typeof r) {
        i = i || r;
        r = void 0
      }
      for (s in t) E(e, s, r, i, t[s], o);
      return e
    }
    if (null == i && null == n) {
      n = r;
      i = r = void 0
    } else if (null == n)
      if ("string" == typeof r) {
        n = i;
        i = void 0
      } else {
        n = i;
        i = r;
        r = void 0
      }
    if (n === !1) n = d;
    else if (!n) return e;
    if (1 === o) {
      a = n;
      n = function(e) {
        oe().off(e);
        return a.apply(this, arguments)
      };
      n.guid = a.guid || (a.guid = oe.guid++)
    }
    return e.each(function() {
      oe.event.add(this, t, n, i, r)
    })
  }

  function g(e, t) {
    return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function v(e) {
    e.type = (null !== e.getAttribute("type")) + "/" + e.type;
    return e
  }

  function y(e) {
    var t = Ge.exec(e.type);
    t ? e.type = t[1] : e.removeAttribute("type");
    return e
  }

  function T(e, t) {
    var r, i, n, o, a, s, l, c;
    if (1 === t.nodeType) {
      if (be.hasData(e)) {
        o = be.access(e);
        a = be.set(t, o);
        c = o.events;
        if (c) {
          delete a.handle;
          a.events = {};
          for (n in c)
            for (r = 0, i = c[n].length; i > r; r++) oe.event.add(t, n, c[n][r])
        }
      }
      if (_e.hasData(e)) {
        s = _e.access(e);
        l = oe.extend({}, s);
        _e.set(t, l)
      }
    }
  }

  function R(e, t) {
    var r = t.nodeName.toLowerCase();
    "input" === r && Pe.test(e.type) ? t.checked = e.checked : ("input" === r || "textarea" === r) && (t.defaultValue = e.defaultValue)
  }

  function x(e, t, r, i) {
    t = Q.apply([], t);
    var n, o, a, s, l, c, u = 0,
      p = e.length,
      d = p - 1,
      m = t[0],
      E = oe.isFunction(m);
    if (E || p > 1 && "string" == typeof m && !ie.checkClone && je.test(m)) return e.each(function(n) {
      var o = e.eq(n);
      E && (t[0] = m.call(this, n, o.html()));
      x(o, t, r, i)
    });
    if (p) {
      n = f(t, e[0].ownerDocument, !1, e, i);
      o = n.firstChild;
      1 === n.childNodes.length && (n = o);
      if (o || i) {
        a = oe.map(h(n, "script"), v);
        s = a.length;
        for (; p > u; u++) {
          l = n;
          if (u !== d) {
            l = oe.clone(l, !0, !0);
            s && oe.merge(a, h(l, "script"))
          }
          r.call(e[u], l, u)
        }
        if (s) {
          c = a[a.length - 1].ownerDocument;
          oe.map(a, y);
          for (u = 0; s > u; u++) {
            l = a[u];
            Ne.test(l.type || "") && !be.access(l, "globalEval") && oe.contains(c, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace(We, "")))
          }
        }
      }
    }
    return e
  }

  function w(e, t, r) {
    for (var i, n = t ? oe.filter(t, e) : e, o = 0; null != (i = n[o]); o++) {
      r || 1 !== i.nodeType || oe.cleanData(h(i));
      if (i.parentNode) {
        r && oe.contains(i.ownerDocument, i) && u(h(i, "script"));
        i.parentNode.removeChild(i)
      }
    }
    return e
  }

  function H(e, t) {
    var r = oe(t.createElement(e)).appendTo(t.body),
      i = oe.css(r[0], "display");
    r.detach();
    return i
  }

  function b(e) {
    var t = $,
      r = qe[e];
    if (!r) {
      r = H(e, t);
      if ("none" === r || !r) {
        Xe = (Xe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement);
        t = Xe[0].contentDocument;
        t.write();
        t.close();
        r = H(e, t);
        Xe.detach()
      }
      qe[e] = r
    }
    return r
  }

  function _(e, t, r) {
    var i, n, o, a, s = e.style;
    r = r || Ke(e);
    a = r ? r.getPropertyValue(t) || r[t] : void 0;
    "" !== a && void 0 !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t));
    if (r && !ie.pixelMarginRight() && $e.test(a) && Ye.test(t)) {
      i = s.width;
      n = s.minWidth;
      o = s.maxWidth;
      s.minWidth = s.maxWidth = s.width = a;
      a = r.width;
      s.width = i;
      s.minWidth = n;
      s.maxWidth = o
    }
    return void 0 !== a ? a + "" : a
  }

  function S(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
        return void 0
      }
    }
  }

  function M(e) {
    if (e in it) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), r = rt.length; r--;) {
      e = rt[r] + t;
      if (e in it) return e
    }
  }

  function C(e, t, r) {
    var i = Ae.exec(t);
    return i ? Math.max(0, i[2] - (r || 0)) + (i[3] || "px") : t
  }

  function A(e, t, r, i, n) {
    for (var o = r === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) {
      "margin" === r && (a += oe.css(e, r + Le[o], !0, n));
      if (i) {
        "content" === r && (a -= oe.css(e, "padding" + Le[o], !0, n));
        "margin" !== r && (a -= oe.css(e, "border" + Le[o] + "Width", !0, n))
      } else {
        a += oe.css(e, "padding" + Le[o], !0, n);
        "padding" !== r && (a += oe.css(e, "border" + Le[o] + "Width", !0, n))
      }
    }
    return a
  }

  function L(e, t, r) {
    var i = !0,
      n = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = Ke(e),
      a = "border-box" === oe.css(e, "boxSizing", !1, o);
    if (0 >= n || null == n) {
      n = _(e, t, o);
      (0 > n || null == n) && (n = e.style[t]);
      if ($e.test(n)) return n;
      i = a && (ie.boxSizingReliable() || n === e.style[t]);
      n = parseFloat(n) || 0
    }
    return n + A(e, t, r || (a ? "border" : "content"), i, o) + "px"
  }

  function D(e, t) {
    for (var r, i, n, o = [], a = 0, s = e.length; s > a; a++) {
      i = e[a];
      if (i.style) {
        o[a] = be.get(i, "olddisplay");
        r = i.style.display;
        if (t) {
          o[a] || "none" !== r || (i.style.display = "");
          "" === i.style.display && De(i) && (o[a] = be.access(i, "olddisplay", b(i.nodeName)))
        } else {
          n = De(i);
          "none" === r && n || be.set(i, "olddisplay", n ? r : oe.css(i, "display"))
        }
      }
    }
    for (a = 0; s > a; a++) {
      i = e[a];
      i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"))
    }
    return e
  }

  function P(e, t, r, i, n) {
    return new P.prototype.init(e, t, r, i, n)
  }

  function F() {
    e.setTimeout(function() {
      nt = void 0
    });
    return nt = oe.now()
  }

  function N(e, t) {
    var r, i = 0,
      n = {
        height: e
      };
    t = t ? 1 : 0;
    for (; 4 > i; i += 2 - t) {
      r = Le[i];
      n["margin" + r] = n["padding" + r] = e
    }
    t && (n.opacity = n.width = e);
    return n
  }

  function U(e, t, r) {
    for (var i, n = (B.tweeners[t] || []).concat(B.tweeners["*"]), o = 0, a = n.length; a > o; o++)
      if (i = n[o].call(r, t, e)) return i
  }

  function V(e, t, r) {
    var i, n, o, a, s, l, c, h, u = this,
      f = {},
      p = e.style,
      d = e.nodeType && De(e),
      m = be.get(e, "fxshow");
    if (!r.queue) {
      s = oe._queueHooks(e, "fx");
      if (null == s.unqueued) {
        s.unqueued = 0;
        l = s.empty.fire;
        s.empty.fire = function() {
          s.unqueued || l()
        }
      }
      s.unqueued++;
      u.always(function() {
        u.always(function() {
          s.unqueued--;
          oe.queue(e, "fx").length || s.empty.fire()
        })
      })
    }
    if (1 === e.nodeType && ("height" in t || "width" in t)) {
      r.overflow = [p.overflow, p.overflowX, p.overflowY];
      c = oe.css(e, "display");
      h = "none" === c ? be.get(e, "olddisplay") || b(e.nodeName) : c;
      "inline" === h && "none" === oe.css(e, "float") && (p.display = "inline-block")
    }
    if (r.overflow) {
      p.overflow = "hidden";
      u.always(function() {
        p.overflow = r.overflow[0];
        p.overflowX = r.overflow[1];
        p.overflowY = r.overflow[2]
      })
    }
    for (i in t) {
      n = t[i];
      if (at.exec(n)) {
        delete t[i];
        o = o || "toggle" === n;
        if (n === (d ? "hide" : "show")) {
          if ("show" !== n || !m || void 0 === m[i]) continue;
          d = !0
        }
        f[i] = m && m[i] || oe.style(e, i)
      } else c = void 0
    }
    if (oe.isEmptyObject(f)) "inline" === ("none" === c ? b(e.nodeName) : c) && (p.display = c);
    else {
      m ? "hidden" in m && (d = m.hidden) : m = be.access(e, "fxshow", {});
      o && (m.hidden = !d);
      d ? oe(e).show() : u.done(function() {
        oe(e).hide()
      });
      u.done(function() {
        var t;
        be.remove(e, "fxshow");
        for (t in f) oe.style(e, t, f[t])
      });
      for (i in f) {
        a = U(d ? m[i] : 0, i, u);
        if (!(i in m)) {
          m[i] = a.start;
          if (d) {
            a.end = a.start;
            a.start = "width" === i || "height" === i ? 1 : 0
          }
        }
      }
    }
  }

  function z(e, t) {
    var r, i, n, o, a;
    for (r in e) {
      i = oe.camelCase(r);
      n = t[i];
      o = e[r];
      if (oe.isArray(o)) {
        n = o[1];
        o = e[r] = o[0]
      }
      if (r !== i) {
        e[i] = o;
        delete e[r]
      }
      a = oe.cssHooks[i];
      if (a && "expand" in a) {
        o = a.expand(o);
        delete e[i];
        for (r in o)
          if (!(r in e)) {
            e[r] = o[r];
            t[r] = n
          }
      } else t[i] = n
    }
  }

  function B(e, t, r) {
    var i, n, o = 0,
      a = B.prefilters.length,
      s = oe.Deferred().always(function() {
        delete l.elem
      }),
      l = function() {
        if (n) return !1;
        for (var t = nt || F(), r = Math.max(0, c.startTime + c.duration - t), i = r / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
        s.notifyWith(e, [c, o, r]);
        if (1 > o && l) return r;
        s.resolveWith(e, [c]);
        return !1
      },
      c = s.promise({
        elem: e,
        props: oe.extend({}, t),
        opts: oe.extend(!0, {
          specialEasing: {},
          easing: oe.easing._default
        }, r),
        originalProperties: t,
        originalOptions: r,
        startTime: nt || F(),
        duration: r.duration,
        tweens: [],
        createTween: function(t, r) {
          var i = oe.Tween(e, c.opts, t, r, c.opts.specialEasing[t] || c.opts.easing);
          c.tweens.push(i);
          return i
        },
        stop: function(t) {
          var r = 0,
            i = t ? c.tweens.length : 0;
          if (n) return this;
          n = !0;
          for (; i > r; r++) c.tweens[r].run(1);
          if (t) {
            s.notifyWith(e, [c, 1, 0]);
            s.resolveWith(e, [c, t])
          } else s.rejectWith(e, [c, t]);
          return this
        }
      }),
      h = c.props;
    z(h, c.opts.specialEasing);
    for (; a > o; o++) {
      i = B.prefilters[o].call(c, e, h, c.opts);
      if (i) {
        oe.isFunction(i.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(i.stop, i));
        return i
      }
    }
    oe.map(h, U, c);
    oe.isFunction(c.opts.start) && c.opts.start.call(e, c);
    oe.fx.timer(oe.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    }));
    return c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }

  function O(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function k(e) {
    return function(t, r) {
      if ("string" != typeof t) {
        r = t;
        t = "*"
      }
      var i, n = 0,
        o = t.toLowerCase().match(Re) || [];
      if (oe.isFunction(r))
        for (; i = o[n++];)
          if ("+" === i[0]) {
            i = i.slice(1) || "*";
            (e[i] = e[i] || []).unshift(r)
          } else(e[i] = e[i] || []).push(r)
    }
  }

  function I(e, t, r, i) {
    function n(s) {
      var l;
      o[s] = !0;
      oe.each(e[s] || [], function(e, s) {
        var c = s(t, r, i);
        if ("string" == typeof c && !a && !o[c]) {
          t.dataTypes.unshift(c);
          n(c);
          return !1
        }
        return a ? !(l = c) : void 0
      });
      return l
    }
    var o = {},
      a = e === _t;
    return n(t.dataTypes[0]) || !o["*"] && n("*")
  }

  function j(e, t) {
    var r, i, n = oe.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((n[r] ? e : i || (i = {}))[r] = t[r]);
    i && oe.extend(!0, e, i);
    return e
  }

  function G(e, t, r) {
    for (var i, n, o, a, s = e.contents, l = e.dataTypes;
      "*" === l[0];) {
      l.shift();
      void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"))
    }
    if (i)
      for (n in s)
        if (s[n] && s[n].test(i)) {
          l.unshift(n);
          break
        }
    if (l[0] in r) o = l[0];
    else {
      for (n in r) {
        if (!l[0] || e.converters[n + " " + l[0]]) {
          o = n;
          break
        }
        a || (a = n)
      }
      o = o || a
    }
    if (o) {
      o !== l[0] && l.unshift(o);
      return r[o]
    }
  }

  function W(e, t, r, i) {
    var n, o, a, s, l, c = {},
      h = e.dataTypes.slice();
    if (h[1])
      for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    o = h.shift();
    for (; o;) {
      e.responseFields[o] && (r[e.responseFields[o]] = t);
      !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType));
      l = o;
      o = h.shift();
      if (o)
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
        a = c[l + " " + o] || c["* " + o];
        if (!a)
          for (n in c) {
            s = n.split(" ");
            if (s[1] === o) {
              a = c[l + " " + s[0]] || c["* " + s[0]];
              if (a) {
                if (a === !0) a = c[n];
                else if (c[n] !== !0) {
                  o = s[0];
                  h.unshift(s[1])
                }
                break
              }
            }
          }
        if (a !== !0)
          if (a && e["throws"]) t = a(t);
          else try {
            t = a(t)
          } catch (u) {
            return {
              state: "parsererror",
              error: a ? u : "No conversion from " + l + " to " + o
            }
          }
      }
    }
    return {
      state: "success",
      data: t
    }
  }

  function X(e, t, r, i) {
    var n;
    if (oe.isArray(t)) oe.each(t, function(t, n) {
      r || At.test(e) ? i(e, n) : X(e + "[" + ("object" == typeof n && null != n ? t : "") + "]", n, r, i)
    });
    else if (r || "object" !== oe.type(t)) i(e, t);
    else
      for (n in t) X(e + "[" + n + "]", t[n], r, i)
  }

  function q(e) {
    return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var Y = [],
    $ = e.document,
    K = Y.slice,
    Q = Y.concat,
    Z = Y.push,
    J = Y.indexOf,
    ee = {},
    te = ee.toString,
    re = ee.hasOwnProperty,
    ie = {},
    ne = "2.2.4",
    oe = function(e, t) {
      return new oe.fn.init(e, t)
    },
    ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    se = /^-ms-/,
    le = /-([\da-z])/gi,
    ce = function(e, t) {
      return t.toUpperCase()
    };
  oe.fn = oe.prototype = {
    jquery: ne,
    constructor: oe,
    selector: "",
    length: 0,
    toArray: function() {
      return K.call(this)
    },
    get: function(e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
    },
    pushStack: function(e) {
      var t = oe.merge(this.constructor(), e);
      t.prevObject = this;
      t.context = this.context;
      return t
    },
    each: function(e) {
      return oe.each(this, e)
    },
    map: function(e) {
      return this.pushStack(oe.map(this, function(t, r) {
        return e.call(t, r, t)
      }))
    },
    slice: function() {
      return this.pushStack(K.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        r = +e + (0 > e ? t : 0);
      return this.pushStack(r >= 0 && t > r ? [this[r]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: Z,
    sort: Y.sort,
    splice: Y.splice
  };
  oe.extend = oe.fn.extend = function() {
    var e, t, r, i, n, o, a = arguments[0] || {},
      s = 1,
      l = arguments.length,
      c = !1;
    if ("boolean" == typeof a) {
      c = a;
      a = arguments[s] || {};
      s++
    }
    "object" == typeof a || oe.isFunction(a) || (a = {});
    if (s === l) {
      a = this;
      s--
    }
    for (; l > s; s++)
      if (null != (e = arguments[s]))
        for (t in e) {
          r = a[t];
          i = e[t];
          if (a !== i)
            if (c && i && (oe.isPlainObject(i) || (n = oe.isArray(i)))) {
              if (n) {
                n = !1;
                o = r && oe.isArray(r) ? r : []
              } else o = r && oe.isPlainObject(r) ? r : {};
              a[t] = oe.extend(c, o, i)
            } else void 0 !== i && (a[t] = i)
        }
    return a
  };
  oe.extend({
    expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === oe.type(e)
    },
    isArray: Array.isArray,
    isWindow: function(e) {
      return null != e && e === e.window
    },
    isNumeric: function(e) {
      var t = e && e.toString();
      return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
    },
    isPlainObject: function(e) {
      var t;
      if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
      if (e.constructor && !re.call(e, "constructor") && !re.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
      for (t in e);
      return void 0 === t || re.call(e, t)
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
    },
    globalEval: function(e) {
      var t, r = eval;
      e = oe.trim(e);
      if (e)
        if (1 === e.indexOf("use strict")) {
          t = $.createElement("script");
          t.text = e;
          $.head.appendChild(t).parentNode.removeChild(t)
        } else r(e)
    },
    camelCase: function(e) {
      return e.replace(se, "ms-").replace(le, ce)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t) {
      var i, n = 0;
      if (r(e)) {
        i = e.length;
        for (; i > n && t.call(e[n], n, e[n]) !== !1; n++);
      } else
        for (n in e)
          if (t.call(e[n], n, e[n]) === !1) break;
      return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(ae, "")
    },
    makeArray: function(e, t) {
      var i = t || [];
      null != e && (r(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : Z.call(i, e));
      return i
    },
    inArray: function(e, t, r) {
      return null == t ? -1 : J.call(t, e, r)
    },
    merge: function(e, t) {
      for (var r = +t.length, i = 0, n = e.length; r > i; i++) e[n++] = t[i];
      e.length = n;
      return e
    },
    grep: function(e, t, r) {
      for (var i, n = [], o = 0, a = e.length, s = !r; a > o; o++) {
        i = !t(e[o], o);
        i !== s && n.push(e[o])
      }
      return n
    },
    map: function(e, t, i) {
      var n, o, a = 0,
        s = [];
      if (r(e)) {
        n = e.length;
        for (; n > a; a++) {
          o = t(e[a], a, i);
          null != o && s.push(o)
        }
      } else
        for (a in e) {
          o = t(e[a], a, i);
          null != o && s.push(o)
        }
      return Q.apply([], s)
    },
    guid: 1,
    proxy: function(e, t) {
      var r, i, n;
      if ("string" == typeof t) {
        r = e[t];
        t = e;
        e = r
      }
      if (!oe.isFunction(e)) return void 0;
      i = K.call(arguments, 2);
      n = function() {
        return e.apply(t || this, i.concat(K.call(arguments)))
      };
      n.guid = e.guid = e.guid || oe.guid++;
      return n
    },
    now: Date.now,
    support: ie
  });
  "function" == typeof Symbol && (oe.fn[Symbol.iterator] = Y[Symbol.iterator]);
  oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    ee["[object " + t + "]"] = t.toLowerCase()
  });
  var he =
    /*!
     * Sizzle CSS Selector Engine v2.2.1
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-10-17
     */
    function(e) {
      function t(e, t, r, i) {
        var n, o, a, s, l, c, u, p, d = t && t.ownerDocument,
          m = t ? t.nodeType : 9;
        r = r || [];
        if ("string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return r;
        if (!i) {
          (t ? t.ownerDocument || t : O) !== D && L(t);
          t = t || D;
          if (F) {
            if (11 !== m && (c = ge.exec(e)))
              if (n = c[1]) {
                if (9 === m) {
                  if (!(a = t.getElementById(n))) return r;
                  if (a.id === n) {
                    r.push(a);
                    return r
                  }
                } else if (d && (a = d.getElementById(n)) && z(t, a) && a.id === n) {
                  r.push(a);
                  return r
                }
              } else {
                if (c[2]) {
                  Z.apply(r, t.getElementsByTagName(e));
                  return r
                }
                if ((n = c[3]) && R.getElementsByClassName && t.getElementsByClassName) {
                  Z.apply(r, t.getElementsByClassName(n));
                  return r
                }
              }
            if (R.qsa && !W[e + " "] && (!N || !N.test(e))) {
              if (1 !== m) {
                d = t;
                p = e
              } else if ("object" !== t.nodeName.toLowerCase()) {
                (s = t.getAttribute("id")) ? s = s.replace(ye, "\\$&"): t.setAttribute("id", s = B);
                u = b(e);
                o = u.length;
                l = fe.test(s) ? "#" + s : "[id='" + s + "']";
                for (; o--;) u[o] = l + " " + f(u[o]);
                p = u.join(",");
                d = ve.test(e) && h(t.parentNode) || t
              }
              if (p) try {
                Z.apply(r, d.querySelectorAll(p));
                return r
              } catch (E) {} finally {
                s === B && t.removeAttribute("id")
              }
            }
          }
        }
        return S(e.replace(se, "$1"), t, r, i)
      }

      function r() {
        function e(r, i) {
          t.push(r + " ") > x.cacheLength && delete e[t.shift()];
          return e[r + " "] = i
        }
        var t = [];
        return e
      }

      function i(e) {
        e[B] = !0;
        return e
      }

      function n(e) {
        var t = D.createElement("div");
        try {
          return !!e(t)
        } catch (r) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t);
          t = null
        }
      }

      function o(e, t) {
        for (var r = e.split("|"), i = r.length; i--;) x.attrHandle[r[i]] = t
      }

      function a(e, t) {
        var r = t && e,
          i = r && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || q) - (~e.sourceIndex || q);
        if (i) return i;
        if (r)
          for (; r = r.nextSibling;)
            if (r === t) return -1;
        return e ? 1 : -1
      }

      function s(e) {
        return function(t) {
          var r = t.nodeName.toLowerCase();
          return "input" === r && t.type === e
        }
      }

      function l(e) {
        return function(t) {
          var r = t.nodeName.toLowerCase();
          return ("input" === r || "button" === r) && t.type === e
        }
      }

      function c(e) {
        return i(function(t) {
          t = +t;
          return i(function(r, i) {
            for (var n, o = e([], r.length, t), a = o.length; a--;) r[n = o[a]] && (r[n] = !(i[n] = r[n]))
          })
        })
      }

      function h(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e
      }

      function u() {}

      function f(e) {
        for (var t = 0, r = e.length, i = ""; r > t; t++) i += e[t].value;
        return i
      }

      function p(e, t, r) {
        var i = t.dir,
          n = r && "parentNode" === i,
          o = I++;
        return t.first ? function(t, r, o) {
          for (; t = t[i];)
            if (1 === t.nodeType || n) return e(t, r, o)
        } : function(t, r, a) {
          var s, l, c, h = [k, o];
          if (a) {
            for (; t = t[i];)
              if ((1 === t.nodeType || n) && e(t, r, a)) return !0
          } else
            for (; t = t[i];)
              if (1 === t.nodeType || n) {
                c = t[B] || (t[B] = {});
                l = c[t.uniqueID] || (c[t.uniqueID] = {});
                if ((s = l[i]) && s[0] === k && s[1] === o) return h[2] = s[2];
                l[i] = h;
                if (h[2] = e(t, r, a)) return !0
              }
        }
      }

      function d(e) {
        return e.length > 1 ? function(t, r, i) {
          for (var n = e.length; n--;)
            if (!e[n](t, r, i)) return !1;
          return !0
        } : e[0]
      }

      function m(e, r, i) {
        for (var n = 0, o = r.length; o > n; n++) t(e, r[n], i);
        return i
      }

      function E(e, t, r, i, n) {
        for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)
          if ((o = e[s]) && (!r || r(o, i, n))) {
            a.push(o);
            c && t.push(s)
          }
        return a
      }

      function g(e, t, r, n, o, a) {
        n && !n[B] && (n = g(n));
        o && !o[B] && (o = g(o, a));
        return i(function(i, a, s, l) {
          var c, h, u, f = [],
            p = [],
            d = a.length,
            g = i || m(t || "*", s.nodeType ? [s] : s, []),
            v = !e || !i && t ? g : E(g, f, e, s, l),
            y = r ? o || (i ? e : d || n) ? [] : a : v;
          r && r(v, y, s, l);
          if (n) {
            c = E(y, p);
            n(c, [], s, l);
            h = c.length;
            for (; h--;)(u = c[h]) && (y[p[h]] = !(v[p[h]] = u))
          }
          if (i) {
            if (o || e) {
              if (o) {
                c = [];
                h = y.length;
                for (; h--;)(u = y[h]) && c.push(v[h] = u);
                o(null, y = [], c, l)
              }
              h = y.length;
              for (; h--;)(u = y[h]) && (c = o ? ee(i, u) : f[h]) > -1 && (i[c] = !(a[c] = u))
            }
          } else {
            y = E(y === a ? y.splice(d, y.length) : y);
            o ? o(null, a, y, l) : Z.apply(a, y)
          }
        })
      }

      function v(e) {
        for (var t, r, i, n = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, l = p(function(e) {
            return e === t
          }, a, !0), c = p(function(e) {
            return ee(t, e) > -1
          }, a, !0), h = [function(e, r, i) {
            var n = !o && (i || r !== M) || ((t = r).nodeType ? l(e, r, i) : c(e, r, i));
            t = null;
            return n
          }]; n > s; s++)
          if (r = x.relative[e[s].type]) h = [p(d(h), r)];
          else {
            r = x.filter[e[s].type].apply(null, e[s].matches);
            if (r[B]) {
              i = ++s;
              for (; n > i && !x.relative[e[i].type]; i++);
              return g(s > 1 && d(h), s > 1 && f(e.slice(0, s - 1).concat({
                value: " " === e[s - 2].type ? "*" : ""
              })).replace(se, "$1"), r, i > s && v(e.slice(s, i)), n > i && v(e = e.slice(i)), n > i && f(e))
            }
            h.push(r)
          }
        return d(h)
      }

      function y(e, r) {
        var n = r.length > 0,
          o = e.length > 0,
          a = function(i, a, s, l, c) {
            var h, u, f, p = 0,
              d = "0",
              m = i && [],
              g = [],
              v = M,
              y = i || o && x.find.TAG("*", c),
              T = k += null == v ? 1 : Math.random() || .1,
              R = y.length;
            c && (M = a === D || a || c);
            for (; d !== R && null != (h = y[d]); d++) {
              if (o && h) {
                u = 0;
                if (!a && h.ownerDocument !== D) {
                  L(h);
                  s = !F
                }
                for (; f = e[u++];)
                  if (f(h, a || D, s)) {
                    l.push(h);
                    break
                  }
                c && (k = T)
              }
              if (n) {
                (h = !f && h) && p--;
                i && m.push(h)
              }
            }
            p += d;
            if (n && d !== p) {
              u = 0;
              for (; f = r[u++];) f(m, g, a, s);
              if (i) {
                if (p > 0)
                  for (; d--;) m[d] || g[d] || (g[d] = K.call(l));
                g = E(g)
              }
              Z.apply(l, g);
              c && !i && g.length > 0 && p + r.length > 1 && t.uniqueSort(l)
            }
            if (c) {
              k = T;
              M = v
            }
            return m
          };
        return n ? i(a) : a
      }
      var T, R, x, w, H, b, _, S, M, C, A, L, D, P, F, N, U, V, z, B = "sizzle" + 1 * new Date,
        O = e.document,
        k = 0,
        I = 0,
        j = r(),
        G = r(),
        W = r(),
        X = function(e, t) {
          e === t && (A = !0);
          return 0
        },
        q = 1 << 31,
        Y = {}.hasOwnProperty,
        $ = [],
        K = $.pop,
        Q = $.push,
        Z = $.push,
        J = $.slice,
        ee = function(e, t) {
          for (var r = 0, i = e.length; i > r; r++)
            if (e[r] === t) return r;
          return -1
        },
        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        re = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ne = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + re + "*\\]",
        oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
        ae = new RegExp(re + "+", "g"),
        se = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
        le = new RegExp("^" + re + "*," + re + "*"),
        ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
        he = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
        ue = new RegExp(oe),
        fe = new RegExp("^" + ie + "$"),
        pe = {
          ID: new RegExp("^#(" + ie + ")"),
          CLASS: new RegExp("^\\.(" + ie + ")"),
          TAG: new RegExp("^(" + ie + "|[*])"),
          ATTR: new RegExp("^" + ne),
          PSEUDO: new RegExp("^" + oe),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + te + ")$", "i"),
          needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
        },
        de = /^(?:input|select|textarea|button)$/i,
        me = /^h\d$/i,
        Ee = /^[^{]+\{\s*\[native \w/,
        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ve = /[+~]/,
        ye = /'|\\/g,
        Te = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
        Re = function(e, t, r) {
          var i = "0x" + t - 65536;
          return i !== i || r ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        xe = function() {
          L()
        };
      try {
        Z.apply($ = J.call(O.childNodes), O.childNodes);
        $[O.childNodes.length].nodeType
      } catch (we) {
        Z = {
          apply: $.length ? function(e, t) {
            Q.apply(e, J.call(t))
          } : function(e, t) {
            for (var r = e.length, i = 0; e[r++] = t[i++];);
            e.length = r - 1
          }
        }
      }
      R = t.support = {};
      H = t.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : !1
      };
      L = t.setDocument = function(e) {
        var t, r, i = e ? e.ownerDocument || e : O;
        if (i === D || 9 !== i.nodeType || !i.documentElement) return D;
        D = i;
        P = D.documentElement;
        F = !H(D);
        (r = D.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", xe, !1) : r.attachEvent && r.attachEvent("onunload", xe));
        R.attributes = n(function(e) {
          e.className = "i";
          return !e.getAttribute("className")
        });
        R.getElementsByTagName = n(function(e) {
          e.appendChild(D.createComment(""));
          return !e.getElementsByTagName("*").length
        });
        R.getElementsByClassName = Ee.test(D.getElementsByClassName);
        R.getById = n(function(e) {
          P.appendChild(e).id = B;
          return !D.getElementsByName || !D.getElementsByName(B).length
        });
        if (R.getById) {
          x.find.ID = function(e, t) {
            if ("undefined" != typeof t.getElementById && F) {
              var r = t.getElementById(e);
              return r ? [r] : []
            }
          };
          x.filter.ID = function(e) {
            var t = e.replace(Te, Re);
            return function(e) {
              return e.getAttribute("id") === t
            }
          }
        } else {
          delete x.find.ID;
          x.filter.ID = function(e) {
            var t = e.replace(Te, Re);
            return function(e) {
              var r = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
              return r && r.value === t
            }
          }
        }
        x.find.TAG = R.getElementsByTagName ? function(e, t) {
          return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : R.qsa ? t.querySelectorAll(e) : void 0
        } : function(e, t) {
          var r, i = [],
            n = 0,
            o = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; r = o[n++];) 1 === r.nodeType && i.push(r);
            return i
          }
          return o
        };
        x.find.CLASS = R.getElementsByClassName && function(e, t) {
          return "undefined" != typeof t.getElementsByClassName && F ? t.getElementsByClassName(e) : void 0
        };
        U = [];
        N = [];
        if (R.qsa = Ee.test(D.querySelectorAll)) {
          n(function(e) {
            P.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + re + "*(?:''|\"\")");
            e.querySelectorAll("[selected]").length || N.push("\\[" + re + "*(?:value|" + te + ")");
            e.querySelectorAll("[id~=" + B + "-]").length || N.push("~=");
            e.querySelectorAll(":checked").length || N.push(":checked");
            e.querySelectorAll("a#" + B + "+*").length || N.push(".#.+[+~]")
          });
          n(function(e) {
            var t = D.createElement("input");
            t.setAttribute("type", "hidden");
            e.appendChild(t).setAttribute("name", "D");
            e.querySelectorAll("[name=d]").length && N.push("name" + re + "*[*^$|!~]?=");
            e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled");
            e.querySelectorAll("*,:x");
            N.push(",.*:")
          })
        }(R.matchesSelector = Ee.test(V = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && n(function(e) {
          R.disconnectedMatch = V.call(e, "div");
          V.call(e, "[s!='']:x");
          U.push("!=", oe)
        });
        N = N.length && new RegExp(N.join("|"));
        U = U.length && new RegExp(U.join("|"));
        t = Ee.test(P.compareDocumentPosition);
        z = t || Ee.test(P.contains) ? function(e, t) {
          var r = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        };
        X = t ? function(e, t) {
          if (e === t) {
            A = !0;
            return 0
          }
          var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
          if (r) return r;
          r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
          return 1 & r || !R.sortDetached && t.compareDocumentPosition(e) === r ? e === D || e.ownerDocument === O && z(O, e) ? -1 : t === D || t.ownerDocument === O && z(O, t) ? 1 : C ? ee(C, e) - ee(C, t) : 0 : 4 & r ? -1 : 1
        } : function(e, t) {
          if (e === t) {
            A = !0;
            return 0
          }
          var r, i = 0,
            n = e.parentNode,
            o = t.parentNode,
            s = [e],
            l = [t];
          if (!n || !o) return e === D ? -1 : t === D ? 1 : n ? -1 : o ? 1 : C ? ee(C, e) - ee(C, t) : 0;
          if (n === o) return a(e, t);
          r = e;
          for (; r = r.parentNode;) s.unshift(r);
          r = t;
          for (; r = r.parentNode;) l.unshift(r);
          for (; s[i] === l[i];) i++;
          return i ? a(s[i], l[i]) : s[i] === O ? -1 : l[i] === O ? 1 : 0
        };
        return D
      };
      t.matches = function(e, r) {
        return t(e, null, null, r)
      };
      t.matchesSelector = function(e, r) {
        (e.ownerDocument || e) !== D && L(e);
        r = r.replace(he, "='$1']");
        if (R.matchesSelector && F && !W[r + " "] && (!U || !U.test(r)) && (!N || !N.test(r))) try {
          var i = V.call(e, r);
          if (i || R.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
        } catch (n) {}
        return t(r, D, null, [e]).length > 0
      };
      t.contains = function(e, t) {
        (e.ownerDocument || e) !== D && L(e);
        return z(e, t)
      };
      t.attr = function(e, t) {
        (e.ownerDocument || e) !== D && L(e);
        var r = x.attrHandle[t.toLowerCase()],
          i = r && Y.call(x.attrHandle, t.toLowerCase()) ? r(e, t, !F) : void 0;
        return void 0 !== i ? i : R.attributes || !F ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      };
      t.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      };
      t.uniqueSort = function(e) {
        var t, r = [],
          i = 0,
          n = 0;
        A = !R.detectDuplicates;
        C = !R.sortStable && e.slice(0);
        e.sort(X);
        if (A) {
          for (; t = e[n++];) t === e[n] && (i = r.push(n));
          for (; i--;) e.splice(r[i], 1)
        }
        C = null;
        return e
      };
      w = t.getText = function(e) {
        var t, r = "",
          i = 0,
          n = e.nodeType;
        if (n) {
          if (1 === n || 9 === n || 11 === n) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) r += w(e)
          } else if (3 === n || 4 === n) return e.nodeValue
        } else
          for (; t = e[i++];) r += w(t);
        return r
      };
      x = t.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: pe,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            e[1] = e[1].replace(Te, Re);
            e[3] = (e[3] || e[4] || e[5] || "").replace(Te, Re);
            "~=" === e[2] && (e[3] = " " + e[3] + " ");
            return e.slice(0, 4)
          },
          CHILD: function(e) {
            e[1] = e[1].toLowerCase();
            if ("nth" === e[1].slice(0, 3)) {
              e[3] || t.error(e[0]);
              e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]));
              e[5] = +(e[7] + e[8] || "odd" === e[3])
            } else e[3] && t.error(e[0]);
            return e
          },
          PSEUDO: function(e) {
            var t, r = !e[6] && e[2];
            if (pe.CHILD.test(e[0])) return null;
            if (e[3]) e[2] = e[4] || e[5] || "";
            else if (r && ue.test(r) && (t = b(r, !0)) && (t = r.indexOf(")", r.length - t) - r.length)) {
              e[0] = e[0].slice(0, t);
              e[2] = r.slice(0, t)
            }
            return e.slice(0, 3)
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(Te, Re).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = j[e + " "];
            return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && j(e, function(e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, r, i) {
            return function(n) {
              var o = t.attr(n, e);
              if (null == o) return "!=" === r;
              if (!r) return !0;
              o += "";
              return "=" === r ? o === i : "!=" === r ? o !== i : "^=" === r ? i && 0 === o.indexOf(i) : "*=" === r ? i && o.indexOf(i) > -1 : "$=" === r ? i && o.slice(-i.length) === i : "~=" === r ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === r ? o === i || o.slice(0, i.length + 1) === i + "-" : !1
            }
          },
          CHILD: function(e, t, r, i, n) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === i && 0 === n ? function(e) {
              return !!e.parentNode
            } : function(t, r, l) {
              var c, h, u, f, p, d, m = o !== a ? "nextSibling" : "previousSibling",
                E = t.parentNode,
                g = s && t.nodeName.toLowerCase(),
                v = !l && !s,
                y = !1;
              if (E) {
                if (o) {
                  for (; m;) {
                    f = t;
                    for (; f = f[m];)
                      if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                    d = m = "only" === e && !d && "nextSibling"
                  }
                  return !0
                }
                d = [a ? E.firstChild : E.lastChild];
                if (a && v) {
                  f = E;
                  u = f[B] || (f[B] = {});
                  h = u[f.uniqueID] || (u[f.uniqueID] = {});
                  c = h[e] || [];
                  p = c[0] === k && c[1];
                  y = p && c[2];
                  f = p && E.childNodes[p];
                  for (; f = ++p && f && f[m] || (y = p = 0) || d.pop();)
                    if (1 === f.nodeType && ++y && f === t) {
                      h[e] = [k, p, y];
                      break
                    }
                } else {
                  if (v) {
                    f = t;
                    u = f[B] || (f[B] = {});
                    h = u[f.uniqueID] || (u[f.uniqueID] = {});
                    c = h[e] || [];
                    p = c[0] === k && c[1];
                    y = p
                  }
                  if (y === !1)
                    for (; f = ++p && f && f[m] || (y = p = 0) || d.pop();)
                      if ((s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) && ++y) {
                        if (v) {
                          u = f[B] || (f[B] = {});
                          h = u[f.uniqueID] || (u[f.uniqueID] = {});
                          h[e] = [k, y]
                        }
                        if (f === t) break
                      }
                }
                y -= n;
                return y === i || y % i === 0 && y / i >= 0
              }
            }
          },
          PSEUDO: function(e, r) {
            var n, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            if (o[B]) return o(r);
            if (o.length > 1) {
              n = [e, e, "", r];
              return x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                for (var i, n = o(e, r), a = n.length; a--;) {
                  i = ee(e, n[a]);
                  e[i] = !(t[i] = n[a])
                }
              }) : function(e) {
                return o(e, 0, n)
              }
            }
            return o
          }
        },
        pseudos: {
          not: i(function(e) {
            var t = [],
              r = [],
              n = _(e.replace(se, "$1"));
            return n[B] ? i(function(e, t, r, i) {
              for (var o, a = n(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
            }) : function(e, i, o) {
              t[0] = e;
              n(t, null, o, r);
              t[0] = null;
              return !r.pop()
            }
          }),
          has: i(function(e) {
            return function(r) {
              return t(e, r).length > 0
            }
          }),
          contains: i(function(e) {
            e = e.replace(Te, Re);
            return function(t) {
              return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
            }
          }),
          lang: i(function(e) {
            fe.test(e || "") || t.error("unsupported lang: " + e);
            e = e.replace(Te, Re).toLowerCase();
            return function(t) {
              var r;
              do
                if (r = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                  r = r.toLowerCase();
                  return r === e || 0 === r.indexOf(e + "-")
                }
              while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
          }),
          target: function(t) {
            var r = e.location && e.location.hash;
            return r && r.slice(1) === t.id
          },
          root: function(e) {
            return e === P
          },
          focus: function(e) {
            return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function(e) {
            return e.disabled === !1
          },
          disabled: function(e) {
            return e.disabled === !0
          },
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            e.parentNode && e.parentNode.selectedIndex;
            return e.selected === !0
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !x.pseudos.empty(e)
          },
          header: function(e) {
            return me.test(e.nodeName)
          },
          input: function(e) {
            return de.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: c(function() {
            return [0]
          }),
          last: c(function(e, t) {
            return [t - 1]
          }),
          eq: c(function(e, t, r) {
            return [0 > r ? r + t : r]
          }),
          even: c(function(e, t) {
            for (var r = 0; t > r; r += 2) e.push(r);
            return e
          }),
          odd: c(function(e, t) {
            for (var r = 1; t > r; r += 2) e.push(r);
            return e
          }),
          lt: c(function(e, t, r) {
            for (var i = 0 > r ? r + t : r; --i >= 0;) e.push(i);
            return e
          }),
          gt: c(function(e, t, r) {
            for (var i = 0 > r ? r + t : r; ++i < t;) e.push(i);
            return e
          })
        }
      };
      x.pseudos.nth = x.pseudos.eq;
      for (T in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) x.pseudos[T] = s(T);
      for (T in {
          submit: !0,
          reset: !0
        }) x.pseudos[T] = l(T);
      u.prototype = x.filters = x.pseudos;
      x.setFilters = new u;
      b = t.tokenize = function(e, r) {
        var i, n, o, a, s, l, c, h = G[e + " "];
        if (h) return r ? 0 : h.slice(0);
        s = e;
        l = [];
        c = x.preFilter;
        for (; s;) {
          if (!i || (n = le.exec(s))) {
            n && (s = s.slice(n[0].length) || s);
            l.push(o = [])
          }
          i = !1;
          if (n = ce.exec(s)) {
            i = n.shift();
            o.push({
              value: i,
              type: n[0].replace(se, " ")
            });
            s = s.slice(i.length)
          }
          for (a in x.filter)
            if ((n = pe[a].exec(s)) && (!c[a] || (n = c[a](n)))) {
              i = n.shift();
              o.push({
                value: i,
                type: a,
                matches: n
              });
              s = s.slice(i.length)
            }
          if (!i) break
        }
        return r ? s.length : s ? t.error(e) : G(e, l).slice(0)
      };
      _ = t.compile = function(e, t) {
        var r, i = [],
          n = [],
          o = W[e + " "];
        if (!o) {
          t || (t = b(e));
          r = t.length;
          for (; r--;) {
            o = v(t[r]);
            o[B] ? i.push(o) : n.push(o)
          }
          o = W(e, y(n, i));
          o.selector = e
        }
        return o
      };
      S = t.select = function(e, t, r, i) {
        var n, o, a, s, l, c = "function" == typeof e && e,
          u = !i && b(e = c.selector || e);
        r = r || [];
        if (1 === u.length) {
          o = u[0] = u[0].slice(0);
          if (o.length > 2 && "ID" === (a = o[0]).type && R.getById && 9 === t.nodeType && F && x.relative[o[1].type]) {
            t = (x.find.ID(a.matches[0].replace(Te, Re), t) || [])[0];
            if (!t) return r;
            c && (t = t.parentNode);
            e = e.slice(o.shift().value.length)
          }
          n = pe.needsContext.test(e) ? 0 : o.length;
          for (; n--;) {
            a = o[n];
            if (x.relative[s = a.type]) break;
            if ((l = x.find[s]) && (i = l(a.matches[0].replace(Te, Re), ve.test(o[0].type) && h(t.parentNode) || t))) {
              o.splice(n, 1);
              e = i.length && f(o);
              if (!e) {
                Z.apply(r, i);
                return r
              }
              break
            }
          }
        }(c || _(e, u))(i, t, !F, r, !t || ve.test(e) && h(t.parentNode) || t);
        return r
      };
      R.sortStable = B.split("").sort(X).join("") === B;
      R.detectDuplicates = !!A;
      L();
      R.sortDetached = n(function(e) {
        return 1 & e.compareDocumentPosition(D.createElement("div"))
      });
      n(function(e) {
        e.innerHTML = "<a href='#'></a>";
        return "#" === e.firstChild.getAttribute("href")
      }) || o("type|href|height|width", function(e, t, r) {
        return r ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      });
      R.attributes && n(function(e) {
        e.innerHTML = "<input/>";
        e.firstChild.setAttribute("value", "");
        return "" === e.firstChild.getAttribute("value")
      }) || o("value", function(e, t, r) {
        return r || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
      });
      n(function(e) {
        return null == e.getAttribute("disabled")
      }) || o(te, function(e, t, r) {
        var i;
        return r ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      });
      return t
    }(e);
  oe.find = he;
  oe.expr = he.selectors;
  oe.expr[":"] = oe.expr.pseudos;
  oe.uniqueSort = oe.unique = he.uniqueSort;
  oe.text = he.getText;
  oe.isXMLDoc = he.isXML;
  oe.contains = he.contains;
  var ue = function(e, t, r) {
      for (var i = [], n = void 0 !== r;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (n && oe(e).is(r)) break;
          i.push(e)
        }
      return i
    },
    fe = function(e, t) {
      for (var r = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && r.push(e);
      return r
    },
    pe = oe.expr.match.needsContext,
    de = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    me = /^.[^:#\[\.,]*$/;
  oe.filter = function(e, t, r) {
    var i = t[0];
    r && (e = ":not(" + e + ")");
    return 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  };
  oe.fn.extend({
    find: function(e) {
      var t, r = this.length,
        i = [],
        n = this;
      if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
        for (t = 0; r > t; t++)
          if (oe.contains(n[t], this)) return !0
      }));
      for (t = 0; r > t; t++) oe.find(e, n[t], i);
      i = this.pushStack(r > 1 ? oe.unique(i) : i);
      i.selector = this.selector ? this.selector + " " + e : e;
      return i
    },
    filter: function(e) {
      return this.pushStack(i(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(i(this, e || [], !0))
    },
    is: function(e) {
      return !!i(this, "string" == typeof e && pe.test(e) ? oe(e) : e || [], !1).length
    }
  });
  var Ee, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ve = oe.fn.init = function(e, t, r) {
      var i, n;
      if (!e) return this;
      r = r || Ee;
      if ("string" == typeof e) {
        i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ge.exec(e);
        if (!i || !i[1] && t) return !t || t.jquery ? (t || r).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          t = t instanceof oe ? t[0] : t;
          oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : $, !0));
          if (de.test(i[1]) && oe.isPlainObject(t))
            for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        n = $.getElementById(i[2]);
        if (n && n.parentNode) {
          this.length = 1;
          this[0] = n
        }
        this.context = $;
        this.selector = e;
        return this
      }
      if (e.nodeType) {
        this.context = this[0] = e;
        this.length = 1;
        return this
      }
      if (oe.isFunction(e)) return void 0 !== r.ready ? r.ready(e) : e(oe);
      if (void 0 !== e.selector) {
        this.selector = e.selector;
        this.context = e.context
      }
      return oe.makeArray(e, this)
    };
  ve.prototype = oe.fn;
  Ee = oe($);
  var ye = /^(?:parents|prev(?:Until|All))/,
    Te = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  oe.fn.extend({
    has: function(e) {
      var t = oe(e, this),
        r = t.length;
      return this.filter(function() {
        for (var e = 0; r > e; e++)
          if (oe.contains(this, t[e])) return !0
      })
    },
    closest: function(e, t) {
      for (var r, i = 0, n = this.length, o = [], a = pe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; n > i; i++)
        for (r = this[i]; r && r !== t; r = r.parentNode)
          if (r.nodeType < 11 && (a ? a.index(r) > -1 : 1 === r.nodeType && oe.find.matchesSelector(r, e))) {
            o.push(r);
            break
          }
      return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? J.call(oe(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  });
  oe.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return ue(e, "parentNode")
    },
    parentsUntil: function(e, t, r) {
      return ue(e, "parentNode", r)
    },
    next: function(e) {
      return n(e, "nextSibling")
    },
    prev: function(e) {
      return n(e, "previousSibling")
    },
    nextAll: function(e) {
      return ue(e, "nextSibling")
    },
    prevAll: function(e) {
      return ue(e, "previousSibling")
    },
    nextUntil: function(e, t, r) {
      return ue(e, "nextSibling", r)
    },
    prevUntil: function(e, t, r) {
      return ue(e, "previousSibling", r)
    },
    siblings: function(e) {
      return fe((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return fe(e.firstChild)
    },
    contents: function(e) {
      return e.contentDocument || oe.merge([], e.childNodes)
    }
  }, function(e, t) {
    oe.fn[e] = function(r, i) {
      var n = oe.map(this, t, r);
      "Until" !== e.slice(-5) && (i = r);
      i && "string" == typeof i && (n = oe.filter(i, n));
      if (this.length > 1) {
        Te[e] || oe.uniqueSort(n);
        ye.test(e) && n.reverse()
      }
      return this.pushStack(n)
    }
  });
  var Re = /\S+/g;
  oe.Callbacks = function(e) {
    e = "string" == typeof e ? o(e) : oe.extend({}, e);
    var t, r, i, n, a = [],
      s = [],
      l = -1,
      c = function() {
        n = e.once;
        i = t = !0;
        for (; s.length; l = -1) {
          r = s.shift();
          for (; ++l < a.length;)
            if (a[l].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
              l = a.length;
              r = !1
            }
        }
        e.memory || (r = !1);
        t = !1;
        n && (a = r ? [] : "")
      },
      h = {
        add: function() {
          if (a) {
            if (r && !t) {
              l = a.length - 1;
              s.push(r)
            }! function i(t) {
              oe.each(t, function(t, r) {
                oe.isFunction(r) ? e.unique && h.has(r) || a.push(r) : r && r.length && "string" !== oe.type(r) && i(r)
              })
            }(arguments);
            r && !t && c()
          }
          return this
        },
        remove: function() {
          oe.each(arguments, function(e, t) {
            for (var r;
              (r = oe.inArray(t, a, r)) > -1;) {
              a.splice(r, 1);
              l >= r && l--
            }
          });
          return this
        },
        has: function(e) {
          return e ? oe.inArray(e, a) > -1 : a.length > 0
        },
        empty: function() {
          a && (a = []);
          return this
        },
        disable: function() {
          n = s = [];
          a = r = "";
          return this
        },
        disabled: function() {
          return !a
        },
        lock: function() {
          n = s = [];
          r || (a = r = "");
          return this
        },
        locked: function() {
          return !!n
        },
        fireWith: function(e, r) {
          if (!n) {
            r = r || [];
            r = [e, r.slice ? r.slice() : r];
            s.push(r);
            t || c()
          }
          return this
        },
        fire: function() {
          h.fireWith(this, arguments);
          return this
        },
        fired: function() {
          return !!i
        }
      };
    return h
  };
  oe.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
          ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
          ["notify", "progress", oe.Callbacks("memory")]
        ],
        r = "pending",
        i = {
          state: function() {
            return r
          },
          always: function() {
            n.done(arguments).fail(arguments);
            return this
          },
          then: function() {
            var e = arguments;
            return oe.Deferred(function(r) {
              oe.each(t, function(t, o) {
                var a = oe.isFunction(e[t]) && e[t];
                n[o[1]](function() {
                  var e = a && a.apply(this, arguments);
                  e && oe.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[o[0] + "With"](this === i ? r.promise() : this, a ? [e] : arguments)
                })
              });
              e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? oe.extend(e, i) : i
          }
        },
        n = {};
      i.pipe = i.then;
      oe.each(t, function(e, o) {
        var a = o[2],
          s = o[3];
        i[o[1]] = a.add;
        s && a.add(function() {
          r = s
        }, t[1 ^ e][2].disable, t[2][2].lock);
        n[o[0]] = function() {
          n[o[0] + "With"](this === n ? i : this, arguments);
          return this
        };
        n[o[0] + "With"] = a.fireWith
      });
      i.promise(n);
      e && e.call(n, n);
      return n
    },
    when: function(e) {
      var t, r, i, n = 0,
        o = K.call(arguments),
        a = o.length,
        s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
        l = 1 === s ? e : oe.Deferred(),
        c = function(e, r, i) {
          return function(n) {
            r[e] = this;
            i[e] = arguments.length > 1 ? K.call(arguments) : n;
            i === t ? l.notifyWith(r, i) : --s || l.resolveWith(r, i)
          }
        };
      if (a > 1) {
        t = new Array(a);
        r = new Array(a);
        i = new Array(a);
        for (; a > n; n++) o[n] && oe.isFunction(o[n].promise) ? o[n].promise().progress(c(n, r, t)).done(c(n, i, o)).fail(l.reject) : --s
      }
      s || l.resolveWith(i, o);
      return l.promise()
    }
  });
  var xe;
  oe.fn.ready = function(e) {
    oe.ready.promise().done(e);
    return this
  };
  oe.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? oe.readyWait++ : oe.ready(!0)
    },
    ready: function(e) {
      if (e === !0 ? !--oe.readyWait : !oe.isReady) {
        oe.isReady = !0;
        if (!(e !== !0 && --oe.readyWait > 0)) {
          xe.resolveWith($, [oe]);
          if (oe.fn.triggerHandler) {
            oe($).triggerHandler("ready");
            oe($).off("ready")
          }
        }
      }
    }
  });
  oe.ready.promise = function(t) {
    if (!xe) {
      xe = oe.Deferred();
      if ("complete" === $.readyState || "loading" !== $.readyState && !$.documentElement.doScroll) e.setTimeout(oe.ready);
      else {
        $.addEventListener("DOMContentLoaded", a);
        e.addEventListener("load", a)
      }
    }
    return xe.promise(t)
  };
  oe.ready.promise();
  var we = function(e, t, r, i, n, o, a) {
      var s = 0,
        l = e.length,
        c = null == r;
      if ("object" === oe.type(r)) {
        n = !0;
        for (s in r) we(e, t, s, r[s], !0, o, a)
      } else if (void 0 !== i) {
        n = !0;
        oe.isFunction(i) || (a = !0);
        if (c)
          if (a) {
            t.call(e, i);
            t = null
          } else {
            c = t;
            t = function(e, t, r) {
              return c.call(oe(e), r)
            }
          }
        if (t)
          for (; l > s; s++) t(e[s], r, a ? i : i.call(e[s], s, t(e[s], r)))
      }
      return n ? e : c ? t.call(e) : l ? t(e[0], r) : o
    },
    He = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
  s.uid = 1;
  s.prototype = {
    register: function(e, t) {
      var r = t || {};
      e.nodeType ? e[this.expando] = r : Object.defineProperty(e, this.expando, {
        value: r,
        writable: !0,
        configurable: !0
      });
      return e[this.expando]
    },
    cache: function(e) {
      if (!He(e)) return {};
      var t = e[this.expando];
      if (!t) {
        t = {};
        He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))
      }
      return t
    },
    set: function(e, t, r) {
      var i, n = this.cache(e);
      if ("string" == typeof t) n[t] = r;
      else
        for (i in t) n[i] = t[i];
      return n
    },
    get: function(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
    },
    access: function(e, t, r) {
      var i;
      if (void 0 === t || t && "string" == typeof t && void 0 === r) {
        i = this.get(e, t);
        return void 0 !== i ? i : this.get(e, oe.camelCase(t))
      }
      this.set(e, t, r);
      return void 0 !== r ? r : t
    },
    remove: function(e, t) {
      var r, i, n, o = e[this.expando];
      if (void 0 !== o) {
        if (void 0 === t) this.register(e);
        else {
          if (oe.isArray(t)) i = t.concat(t.map(oe.camelCase));
          else {
            n = oe.camelCase(t);
            if (t in o) i = [t, n];
            else {
              i = n;
              i = i in o ? [i] : i.match(Re) || []
            }
          }
          r = i.length;
          for (; r--;) delete o[i[r]]
        }(void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function(e) {
      var t = e[this.expando];
      return void 0 !== t && !oe.isEmptyObject(t)
    }
  };
  var be = new s,
    _e = new s,
    Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Me = /[A-Z]/g;
  oe.extend({
    hasData: function(e) {
      return _e.hasData(e) || be.hasData(e)
    },
    data: function(e, t, r) {
      return _e.access(e, t, r)
    },
    removeData: function(e, t) {
      _e.remove(e, t)
    },
    _data: function(e, t, r) {
      return be.access(e, t, r)
    },
    _removeData: function(e, t) {
      be.remove(e, t)
    }
  });
  oe.fn.extend({
    data: function(e, t) {
      var r, i, n, o = this[0],
        a = o && o.attributes;
      if (void 0 === e) {
        if (this.length) {
          n = _e.get(o);
          if (1 === o.nodeType && !be.get(o, "hasDataAttrs")) {
            r = a.length;
            for (; r--;)
              if (a[r]) {
                i = a[r].name;
                if (0 === i.indexOf("data-")) {
                  i = oe.camelCase(i.slice(5));
                  l(o, i, n[i])
                }
              }
            be.set(o, "hasDataAttrs", !0)
          }
        }
        return n
      }
      return "object" == typeof e ? this.each(function() {
        _e.set(this, e)
      }) : we(this, function(t) {
        var r, i;
        if (o && void 0 === t) {
          r = _e.get(o, e) || _e.get(o, e.replace(Me, "-$&").toLowerCase());
          if (void 0 !== r) return r;
          i = oe.camelCase(e);
          r = _e.get(o, i);
          if (void 0 !== r) return r;
          r = l(o, i, void 0);
          if (void 0 !== r) return r
        } else {
          i = oe.camelCase(e);
          this.each(function() {
            var r = _e.get(this, i);
            _e.set(this, i, t);
            e.indexOf("-") > -1 && void 0 !== r && _e.set(this, e, t)
          })
        }
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        _e.remove(this, e)
      })
    }
  });
  oe.extend({
    queue: function(e, t, r) {
      var i;
      if (e) {
        t = (t || "fx") + "queue";
        i = be.get(e, t);
        r && (!i || oe.isArray(r) ? i = be.access(e, t, oe.makeArray(r)) : i.push(r));
        return i || []
      }
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var r = oe.queue(e, t),
        i = r.length,
        n = r.shift(),
        o = oe._queueHooks(e, t),
        a = function() {
          oe.dequeue(e, t)
        };
      if ("inprogress" === n) {
        n = r.shift();
        i--
      }
      if (n) {
        "fx" === t && r.unshift("inprogress");
        delete o.stop;
        n.call(e, a, o)
      }!i && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var r = t + "queueHooks";
      return be.get(e, r) || be.access(e, r, {
        empty: oe.Callbacks("once memory").add(function() {
          be.remove(e, [t + "queue", r])
        })
      })
    }
  });
  oe.fn.extend({
    queue: function(e, t) {
      var r = 2;
      if ("string" != typeof e) {
        t = e;
        e = "fx";
        r--
      }
      return arguments.length < r ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var r = oe.queue(this, e, t);
        oe._queueHooks(this, e);
        "fx" === e && "inprogress" !== r[0] && oe.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        oe.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var r, i = 1,
        n = oe.Deferred(),
        o = this,
        a = this.length,
        s = function() {
          --i || n.resolveWith(o, [o])
        };
      if ("string" != typeof e) {
        t = e;
        e = void 0
      }
      e = e || "fx";
      for (; a--;) {
        r = be.get(o[a], e + "queueHooks");
        if (r && r.empty) {
          i++;
          r.empty.add(s)
        }
      }
      s();
      return n.promise(t)
    }
  });
  var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ae = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"),
    Le = ["Top", "Right", "Bottom", "Left"],
    De = function(e, t) {
      e = t || e;
      return "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
    },
    Pe = /^(?:checkbox|radio)$/i,
    Fe = /<([\w:-]+)/,
    Ne = /^$|\/(?:java|ecma)script/i,
    Ue = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Ue.optgroup = Ue.option;
  Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead;
  Ue.th = Ue.td;
  var Ve = /<|&#?\w+;/;
  ! function() {
    var e = $.createDocumentFragment(),
      t = e.appendChild($.createElement("div")),
      r = $.createElement("input");
    r.setAttribute("type", "radio");
    r.setAttribute("checked", "checked");
    r.setAttribute("name", "t");
    t.appendChild(r);
    ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked;
    t.innerHTML = "<textarea>x</textarea>";
    ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var ze = /^key/,
    Be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Oe = /^([^.]*)(?:\.(.+)|)/;
  oe.event = {
    global: {},
    add: function(e, t, r, i, n) {
      var o, a, s, l, c, h, u, f, p, d, m, E = be.get(e);
      if (E) {
        if (r.handler) {
          o = r;
          r = o.handler;
          n = o.selector
        }
        r.guid || (r.guid = oe.guid++);
        (l = E.events) || (l = E.events = {});
        (a = E.handle) || (a = E.handle = function(t) {
          return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
        });
        t = (t || "").match(Re) || [""];
        c = t.length;
        for (; c--;) {
          s = Oe.exec(t[c]) || [];
          p = m = s[1];
          d = (s[2] || "").split(".").sort();
          if (p) {
            u = oe.event.special[p] || {};
            p = (n ? u.delegateType : u.bindType) || p;
            u = oe.event.special[p] || {};
            h = oe.extend({
              type: p,
              origType: m,
              data: i,
              handler: r,
              guid: r.guid,
              selector: n,
              needsContext: n && oe.expr.match.needsContext.test(n),
              namespace: d.join(".")
            }, o);
            if (!(f = l[p])) {
              f = l[p] = [];
              f.delegateCount = 0;
              u.setup && u.setup.call(e, i, d, a) !== !1 || e.addEventListener && e.addEventListener(p, a)
            }
            if (u.add) {
              u.add.call(e, h);
              h.handler.guid || (h.handler.guid = r.guid)
            }
            n ? f.splice(f.delegateCount++, 0, h) : f.push(h);
            oe.event.global[p] = !0
          }
        }
      }
    },
    remove: function(e, t, r, i, n) {
      var o, a, s, l, c, h, u, f, p, d, m, E = be.hasData(e) && be.get(e);
      if (E && (l = E.events)) {
        t = (t || "").match(Re) || [""];
        c = t.length;
        for (; c--;) {
          s = Oe.exec(t[c]) || [];
          p = m = s[1];
          d = (s[2] || "").split(".").sort();
          if (p) {
            u = oe.event.special[p] || {};
            p = (i ? u.delegateType : u.bindType) || p;
            f = l[p] || [];
            s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)");
            a = o = f.length;
            for (; o--;) {
              h = f[o];
              if ((n || m === h.origType) && (!r || r.guid === h.guid) && (!s || s.test(h.namespace)) && (!i || i === h.selector || "**" === i && h.selector)) {
                f.splice(o, 1);
                h.selector && f.delegateCount--;
                u.remove && u.remove.call(e, h)
              }
            }
            if (a && !f.length) {
              u.teardown && u.teardown.call(e, d, E.handle) !== !1 || oe.removeEvent(e, p, E.handle);
              delete l[p]
            }
          } else
            for (p in l) oe.event.remove(e, p + t[c], r, i, !0)
        }
        oe.isEmptyObject(l) && be.remove(e, "handle events")
      }
    },
    dispatch: function(e) {
      e = oe.event.fix(e);
      var t, r, i, n, o, a = [],
        s = K.call(arguments),
        l = (be.get(this, "events") || {})[e.type] || [],
        c = oe.event.special[e.type] || {};
      s[0] = e;
      e.delegateTarget = this;
      if (!c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        a = oe.event.handlers.call(this, e, l);
        t = 0;
        for (;
          (n = a[t++]) && !e.isPropagationStopped();) {
          e.currentTarget = n.elem;
          r = 0;
          for (;
            (o = n.handlers[r++]) && !e.isImmediatePropagationStopped();)
            if (!e.rnamespace || e.rnamespace.test(o.namespace)) {
              e.handleObj = o;
              e.data = o.data;
              i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(n.elem, s);
              if (void 0 !== i && (e.result = i) === !1) {
                e.preventDefault();
                e.stopPropagation()
              }
            }
        }
        c.postDispatch && c.postDispatch.call(this, e);
        return e.result
      }
    },
    handlers: function(e, t) {
      var r, i, n, o, a = [],
        s = t.delegateCount,
        l = e.target;
      if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
            i = [];
            for (r = 0; s > r; r++) {
              o = t[r];
              n = o.selector + " ";
              void 0 === i[n] && (i[n] = o.needsContext ? oe(n, this).index(l) > -1 : oe.find(n, this, null, [l]).length);
              i[n] && i.push(o)
            }
            i.length && a.push({
              elem: l,
              handlers: i
            })
          }
      s < t.length && a.push({
        elem: this,
        handlers: t.slice(s)
      });
      return a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode);
        return e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var r, i, n, o = t.button;
        if (null == e.pageX && null != t.clientX) {
          r = e.target.ownerDocument || $;
          i = r.documentElement;
          n = r.body;
          e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0);
          e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)
        }
        e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0);
        return e
      }
    },
    fix: function(e) {
      if (e[oe.expando]) return e;
      var t, r, i, n = e.type,
        o = e,
        a = this.fixHooks[n];
      a || (this.fixHooks[n] = a = Be.test(n) ? this.mouseHooks : ze.test(n) ? this.keyHooks : {});
      i = a.props ? this.props.concat(a.props) : this.props;
      e = new oe.Event(o);
      t = i.length;
      for (; t--;) {
        r = i[t];
        e[r] = o[r]
      }
      e.target || (e.target = $);
      3 === e.target.nodeType && (e.target = e.target.parentNode);
      return a.filter ? a.filter(e, o) : e
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== m() && this.focus) {
            this.focus();
            return !1
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === m() && this.blur) {
            this.blur();
            return !1
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && oe.nodeName(this, "input")) {
            this.click();
            return !1
          }
        },
        _default: function(e) {
          return oe.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  };
  oe.removeEvent = function(e, t, r) {
    e.removeEventListener && e.removeEventListener(t, r)
  };
  oe.Event = function(e, t) {
    if (!(this instanceof oe.Event)) return new oe.Event(e, t);
    if (e && e.type) {
      this.originalEvent = e;
      this.type = e.type;
      this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : d
    } else this.type = e;
    t && oe.extend(this, t);
    this.timeStamp = e && e.timeStamp || oe.now();
    this[oe.expando] = !0
  };
  oe.Event.prototype = {
    constructor: oe.Event,
    isDefaultPrevented: d,
    isPropagationStopped: d,
    isImmediatePropagationStopped: d,
    isSimulated: !1,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = p;
      e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = p;
      e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = p;
      e && !this.isSimulated && e.stopImmediatePropagation();
      this.stopPropagation()
    }
  };
  oe.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    oe.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var r, i = this,
          n = e.relatedTarget,
          o = e.handleObj;
        if (!n || n !== i && !oe.contains(i, n)) {
          e.type = o.origType;
          r = o.handler.apply(this, arguments);
          e.type = t
        }
        return r
      }
    }
  });
  oe.fn.extend({
    on: function(e, t, r, i) {
      return E(this, e, t, r, i)
    },
    one: function(e, t, r, i) {
      return E(this, e, t, r, i, 1)
    },
    off: function(e, t, r) {
      var i, n;
      if (e && e.preventDefault && e.handleObj) {
        i = e.handleObj;
        oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
        return this
      }
      if ("object" == typeof e) {
        for (n in e) this.off(n, t, e[n]);
        return this
      }
      if (t === !1 || "function" == typeof t) {
        r = t;
        t = void 0
      }
      r === !1 && (r = d);
      return this.each(function() {
        oe.event.remove(this, e, r, t)
      })
    }
  });
  var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Ie = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ge = /^true\/(.*)/,
    We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  oe.extend({
    htmlPrefilter: function(e) {
      return e.replace(ke, "<$1></$2>")
    },
    clone: function(e, t, r) {
      var i, n, o, a, s = e.cloneNode(!0),
        l = oe.contains(e.ownerDocument, e);
      if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e))) {
        a = h(s);
        o = h(e);
        for (i = 0, n = o.length; n > i; i++) R(o[i], a[i])
      }
      if (t)
        if (r) {
          o = o || h(e);
          a = a || h(s);
          for (i = 0, n = o.length; n > i; i++) T(o[i], a[i])
        } else T(e, s);
      a = h(s, "script");
      a.length > 0 && u(a, !l && h(e, "script"));
      return s
    },
    cleanData: function(e) {
      for (var t, r, i, n = oe.event.special, o = 0; void 0 !== (r = e[o]); o++)
        if (He(r)) {
          if (t = r[be.expando]) {
            if (t.events)
              for (i in t.events) n[i] ? oe.event.remove(r, i) : oe.removeEvent(r, i, t.handle);
            r[be.expando] = void 0
          }
          r[_e.expando] && (r[_e.expando] = void 0)
        }
    }
  });
  oe.fn.extend({
    domManip: x,
    detach: function(e) {
      return w(this, e, !0)
    },
    remove: function(e) {
      return w(this, e)
    },
    text: function(e) {
      return we(this, function(e) {
        return void 0 === e ? oe.text(this) : this.empty().each(function() {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function() {
      return x(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = g(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return x(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = g(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return x(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return x(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++)
        if (1 === e.nodeType) {
          oe.cleanData(h(e, !1));
          e.textContent = ""
        }
      return this
    },
    clone: function(e, t) {
      e = null == e ? !1 : e;
      t = null == t ? e : t;
      return this.map(function() {
        return oe.clone(this, e, t)
      })
    },
    html: function(e) {
      return we(this, function(e) {
        var t = this[0] || {},
          r = 0,
          i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Ie.test(e) && !Ue[(Fe.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = oe.htmlPrefilter(e);
          try {
            for (; i > r; r++) {
              t = this[r] || {};
              if (1 === t.nodeType) {
                oe.cleanData(h(t, !1));
                t.innerHTML = e
              }
            }
            t = 0
          } catch (n) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = [];
      return x(this, arguments, function(t) {
        var r = this.parentNode;
        if (oe.inArray(this, e) < 0) {
          oe.cleanData(h(this));
          r && r.replaceChild(t, this)
        }
      }, e)
    }
  });
  oe.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    oe.fn[e] = function(e) {
      for (var r, i = [], n = oe(e), o = n.length - 1, a = 0; o >= a; a++) {
        r = a === o ? this : this.clone(!0);
        oe(n[a])[t](r);
        Z.apply(i, r.get())
      }
      return this.pushStack(i)
    }
  });
  var Xe, qe = {
      HTML: "block",
      BODY: "block"
    },
    Ye = /^margin/,
    $e = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"),
    Ke = function(t) {
      var r = t.ownerDocument.defaultView;
      r && r.opener || (r = e);
      return r.getComputedStyle(t)
    },
    Qe = function(e, t, r, i) {
      var n, o, a = {};
      for (o in t) {
        a[o] = e.style[o];
        e.style[o] = t[o]
      }
      n = r.apply(e, i || []);
      for (o in t) e.style[o] = a[o];
      return n
    },
    Ze = $.documentElement;
  ! function() {
    function t() {
      s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
      s.innerHTML = "";
      Ze.appendChild(a);
      var t = e.getComputedStyle(s);
      r = "1%" !== t.top;
      o = "2px" === t.marginLeft;
      i = "4px" === t.width;
      s.style.marginRight = "50%";
      n = "4px" === t.marginRight;
      Ze.removeChild(a)
    }
    var r, i, n, o, a = $.createElement("div"),
      s = $.createElement("div");
    if (s.style) {
      s.style.backgroundClip = "content-box";
      s.cloneNode(!0).style.backgroundClip = "";
      ie.clearCloneStyle = "content-box" === s.style.backgroundClip;
      a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
      a.appendChild(s);
      oe.extend(ie, {
        pixelPosition: function() {
          t();
          return r
        },
        boxSizingReliable: function() {
          null == i && t();
          return i
        },
        pixelMarginRight: function() {
          null == i && t();
          return n
        },
        reliableMarginLeft: function() {
          null == i && t();
          return o
        },
        reliableMarginRight: function() {
          var t, r = s.appendChild($.createElement("div"));
          r.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
          r.style.marginRight = r.style.width = "0";
          s.style.width = "1px";
          Ze.appendChild(a);
          t = !parseFloat(e.getComputedStyle(r).marginRight);
          Ze.removeChild(a);
          s.removeChild(r);
          return t
        }
      })
    }
  }();
  var Je = /^(none|table(?!-c[ea]).+)/,
    et = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    tt = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    rt = ["Webkit", "O", "Moz", "ms"],
    it = $.createElement("div").style;
  oe.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var r = _(e, "opacity");
            return "" === r ? "1" : r
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function(e, t, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var n, o, a, s = oe.camelCase(t),
          l = e.style;
        t = oe.cssProps[s] || (oe.cssProps[s] = M(s) || s);
        a = oe.cssHooks[t] || oe.cssHooks[s];
        if (void 0 === r) return a && "get" in a && void 0 !== (n = a.get(e, !1, i)) ? n : l[t];
        o = typeof r;
        if ("string" === o && (n = Ae.exec(r)) && n[1]) {
          r = c(e, t, n);
          o = "number"
        }
        if (null != r && r === r) {
          "number" === o && (r += n && n[3] || (oe.cssNumber[s] ? "" : "px"));
          ie.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (l[t] = "inherit");
          a && "set" in a && void 0 === (r = a.set(e, r, i)) || (l[t] = r)
        }
      }
    },
    css: function(e, t, r, i) {
      var n, o, a, s = oe.camelCase(t);
      t = oe.cssProps[s] || (oe.cssProps[s] = M(s) || s);
      a = oe.cssHooks[t] || oe.cssHooks[s];
      a && "get" in a && (n = a.get(e, !0, r));
      void 0 === n && (n = _(e, t, i));
      "normal" === n && t in tt && (n = tt[t]);
      if ("" === r || r) {
        o = parseFloat(n);
        return r === !0 || isFinite(o) ? o || 0 : n
      }
      return n
    }
  });
  oe.each(["height", "width"], function(e, t) {
    oe.cssHooks[t] = {
      get: function(e, r, i) {
        return r ? Je.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Qe(e, et, function() {
          return L(e, t, i)
        }) : L(e, t, i) : void 0
      },
      set: function(e, r, i) {
        var n, o = i && Ke(e),
          a = i && A(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, o), o);
        if (a && (n = Ae.exec(r)) && "px" !== (n[3] || "px")) {
          e.style[t] = r;
          r = oe.css(e, t)
        }
        return C(e, r, a)
      }
    }
  });
  oe.cssHooks.marginLeft = S(ie.reliableMarginLeft, function(e, t) {
    return t ? (parseFloat(_(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
      marginLeft: 0
    }, function() {
      return e.getBoundingClientRect().left
    })) + "px" : void 0
  });
  oe.cssHooks.marginRight = S(ie.reliableMarginRight, function(e, t) {
    return t ? Qe(e, {
      display: "inline-block"
    }, _, [e, "marginRight"]) : void 0
  });
  oe.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    oe.cssHooks[e + t] = {
      expand: function(r) {
        for (var i = 0, n = {}, o = "string" == typeof r ? r.split(" ") : [r]; 4 > i; i++) n[e + Le[i] + t] = o[i] || o[i - 2] || o[0];
        return n
      }
    };
    Ye.test(e) || (oe.cssHooks[e + t].set = C)
  });
  oe.fn.extend({
    css: function(e, t) {
      return we(this, function(e, t, r) {
        var i, n, o = {},
          a = 0;
        if (oe.isArray(t)) {
          i = Ke(e);
          n = t.length;
          for (; n > a; a++) o[t[a]] = oe.css(e, t[a], !1, i);
          return o
        }
        return void 0 !== r ? oe.style(e, t, r) : oe.css(e, t)
      }, e, t, arguments.length > 1)
    },
    show: function() {
      return D(this, !0)
    },
    hide: function() {
      return D(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        De(this) ? oe(this).show() : oe(this).hide()
      })
    }
  });
  oe.Tween = P;
  P.prototype = {
    constructor: P,
    init: function(e, t, r, i, n, o) {
      this.elem = e;
      this.prop = r;
      this.easing = n || oe.easing._default;
      this.options = t;
      this.start = this.now = this.cur();
      this.end = i;
      this.unit = o || (oe.cssNumber[r] ? "" : "px")
    },
    cur: function() {
      var e = P.propHooks[this.prop];
      return e && e.get ? e.get(this) : P.propHooks._default.get(this)
    },
    run: function(e) {
      var t, r = P.propHooks[this.prop];
      this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e;
      this.now = (this.end - this.start) * t + this.start;
      this.options.step && this.options.step.call(this.elem, this.now, this);
      r && r.set ? r.set(this) : P.propHooks._default.set(this);
      return this
    }
  };
  P.prototype.init.prototype = P.prototype;
  P.propHooks = {
    _default: {
      get: function(e) {
        var t;
        if (1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop]) return e.elem[e.prop];
        t = oe.css(e.elem, e.prop, "");
        return t && "auto" !== t ? t : 0
      },
      set: function(e) {
        oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  };
  P.propHooks.scrollTop = P.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  };
  oe.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  };
  oe.fx = P.prototype.init;
  oe.fx.step = {};
  var nt, ot, at = /^(?:toggle|show|hide)$/,
    st = /queueHooks$/;
  oe.Animation = oe.extend(B, {
    tweeners: {
      "*": [function(e, t) {
        var r = this.createTween(e, t);
        c(r.elem, e, Ae.exec(t), r);
        return r
      }]
    },
    tweener: function(e, t) {
      if (oe.isFunction(e)) {
        t = e;
        e = ["*"]
      } else e = e.match(Re);
      for (var r, i = 0, n = e.length; n > i; i++) {
        r = e[i];
        B.tweeners[r] = B.tweeners[r] || [];
        B.tweeners[r].unshift(t)
      }
    },
    prefilters: [V],
    prefilter: function(e, t) {
      t ? B.prefilters.unshift(e) : B.prefilters.push(e)
    }
  });
  oe.speed = function(e, t, r) {
    var i = e && "object" == typeof e ? oe.extend({}, e) : {
      complete: r || !r && t || oe.isFunction(e) && e,
      duration: e,
      easing: r && t || t && !oe.isFunction(t) && t
    };
    i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default;
    (null == i.queue || i.queue === !0) && (i.queue = "fx");
    i.old = i.complete;
    i.complete = function() {
      oe.isFunction(i.old) && i.old.call(this);
      i.queue && oe.dequeue(this, i.queue)
    };
    return i
  };
  oe.fn.extend({
    fadeTo: function(e, t, r, i) {
      return this.filter(De).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, r, i)
    },
    animate: function(e, t, r, i) {
      var n = oe.isEmptyObject(e),
        o = oe.speed(t, r, i),
        a = function() {
          var t = B(this, oe.extend({}, e), o);
          (n || be.get(this, "finish")) && t.stop(!0)
        };
      a.finish = a;
      return n || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
    },
    stop: function(e, t, r) {
      var i = function(e) {
        var t = e.stop;
        delete e.stop;
        t(r)
      };
      if ("string" != typeof e) {
        r = t;
        t = e;
        e = void 0
      }
      t && e !== !1 && this.queue(e || "fx", []);
      return this.each(function() {
        var t = !0,
          n = null != e && e + "queueHooks",
          o = oe.timers,
          a = be.get(this);
        if (n) a[n] && a[n].stop && i(a[n]);
        else
          for (n in a) a[n] && a[n].stop && st.test(n) && i(a[n]);
        for (n = o.length; n--;)
          if (o[n].elem === this && (null == e || o[n].queue === e)) {
            o[n].anim.stop(r);
            t = !1;
            o.splice(n, 1)
          }(t || !r) && oe.dequeue(this, e)
      })
    },
    finish: function(e) {
      e !== !1 && (e = e || "fx");
      return this.each(function() {
        var t, r = be.get(this),
          i = r[e + "queue"],
          n = r[e + "queueHooks"],
          o = oe.timers,
          a = i ? i.length : 0;
        r.finish = !0;
        oe.queue(this, e, []);
        n && n.stop && n.stop.call(this, !0);
        for (t = o.length; t--;)
          if (o[t].elem === this && o[t].queue === e) {
            o[t].anim.stop(!0);
            o.splice(t, 1)
          }
        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
        delete r.finish
      })
    }
  });
  oe.each(["toggle", "show", "hide"], function(e, t) {
    var r = oe.fn[t];
    oe.fn[t] = function(e, i, n) {
      return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(N(t, !0), e, i, n)
    }
  });
  oe.each({
    slideDown: N("show"),
    slideUp: N("hide"),
    slideToggle: N("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, t) {
    oe.fn[e] = function(e, r, i) {
      return this.animate(t, e, r, i)
    }
  });
  oe.timers = [];
  oe.fx.tick = function() {
    var e, t = 0,
      r = oe.timers;
    nt = oe.now();
    for (; t < r.length; t++) {
      e = r[t];
      e() || r[t] !== e || r.splice(t--, 1)
    }
    r.length || oe.fx.stop();
    nt = void 0
  };
  oe.fx.timer = function(e) {
    oe.timers.push(e);
    e() ? oe.fx.start() : oe.timers.pop()
  };
  oe.fx.interval = 13;
  oe.fx.start = function() {
    ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
  };
  oe.fx.stop = function() {
    e.clearInterval(ot);
    ot = null
  };
  oe.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  oe.fn.delay = function(t, r) {
    t = oe.fx ? oe.fx.speeds[t] || t : t;
    r = r || "fx";
    return this.queue(r, function(r, i) {
      var n = e.setTimeout(r, t);
      i.stop = function() {
        e.clearTimeout(n)
      }
    })
  };
  ! function() {
    var e = $.createElement("input"),
      t = $.createElement("select"),
      r = t.appendChild($.createElement("option"));
    e.type = "checkbox";
    ie.checkOn = "" !== e.value;
    ie.optSelected = r.selected;
    t.disabled = !0;
    ie.optDisabled = !r.disabled;
    e = $.createElement("input");
    e.value = "t";
    e.type = "radio";
    ie.radioValue = "t" === e.value
  }();
  var lt, ct = oe.expr.attrHandle;
  oe.fn.extend({
    attr: function(e, t) {
      return we(this, oe.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        oe.removeAttr(this, e)
      })
    }
  });
  oe.extend({
    attr: function(e, t, r) {
      var i, n, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) {
        if ("undefined" == typeof e.getAttribute) return oe.prop(e, t, r);
        if (1 !== o || !oe.isXMLDoc(e)) {
          t = t.toLowerCase();
          n = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? lt : void 0)
        }
        if (void 0 !== r) {
          if (null === r) {
            oe.removeAttr(e, t);
            return
          }
          if (n && "set" in n && void 0 !== (i = n.set(e, r, t))) return i;
          e.setAttribute(t, r + "");
          return r
        }
        if (n && "get" in n && null !== (i = n.get(e, t))) return i;
        i = oe.find.attr(e, t);
        return null == i ? void 0 : i
      }
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
            var r = e.value;
            e.setAttribute("type", t);
            r && (e.value = r);
            return t
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var r, i, n = 0,
        o = t && t.match(Re);
      if (o && 1 === e.nodeType)
        for (; r = o[n++];) {
          i = oe.propFix[r] || r;
          oe.expr.match.bool.test(r) && (e[i] = !1);
          e.removeAttribute(r)
        }
    }
  });
  lt = {
    set: function(e, t, r) {
      t === !1 ? oe.removeAttr(e, r) : e.setAttribute(r, r);
      return r
    }
  };
  oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var r = ct[t] || oe.find.attr;
    ct[t] = function(e, t, i) {
      var n, o;
      if (!i) {
        o = ct[t];
        ct[t] = n;
        n = null != r(e, t, i) ? t.toLowerCase() : null;
        ct[t] = o
      }
      return n
    }
  });
  var ht = /^(?:input|select|textarea|button)$/i,
    ut = /^(?:a|area)$/i;
  oe.fn.extend({
    prop: function(e, t) {
      return we(this, oe.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[oe.propFix[e] || e]
      })
    }
  });
  oe.extend({
    prop: function(e, t, r) {
      var i, n, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) {
        if (1 !== o || !oe.isXMLDoc(e)) {
          t = oe.propFix[t] || t;
          n = oe.propHooks[t]
        }
        return void 0 !== r ? n && "set" in n && void 0 !== (i = n.set(e, r, t)) ? i : e[t] = r : n && "get" in n && null !== (i = n.get(e, t)) ? i : e[t]
      }
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = oe.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });
  ie.optSelected || (oe.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      t && t.parentNode && t.parentNode.selectedIndex;
      return null
    },
    set: function(e) {
      var t = e.parentNode;
      if (t) {
        t.selectedIndex;
        t.parentNode && t.parentNode.selectedIndex
      }
    }
  });
  oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    oe.propFix[this.toLowerCase()] = this
  });
  var ft = /[\t\r\n\f]/g;
  oe.fn.extend({
    addClass: function(e) {
      var t, r, i, n, o, a, s, l = 0;
      if (oe.isFunction(e)) return this.each(function(t) {
        oe(this).addClass(e.call(this, t, O(this)))
      });
      if ("string" == typeof e && e) {
        t = e.match(Re) || [];
        for (; r = this[l++];) {
          n = O(r);
          i = 1 === r.nodeType && (" " + n + " ").replace(ft, " ");
          if (i) {
            a = 0;
            for (; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
            s = oe.trim(i);
            n !== s && r.setAttribute("class", s)
          }
        }
      }
      return this
    },
    removeClass: function(e) {
      var t, r, i, n, o, a, s, l = 0;
      if (oe.isFunction(e)) return this.each(function(t) {
        oe(this).removeClass(e.call(this, t, O(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e) {
        t = e.match(Re) || [];
        for (; r = this[l++];) {
          n = O(r);
          i = 1 === r.nodeType && (" " + n + " ").replace(ft, " ");
          if (i) {
            a = 0;
            for (; o = t[a++];)
              for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
            s = oe.trim(i);
            n !== s && r.setAttribute("class", s)
          }
        }
      }
      return this
    },
    toggleClass: function(e, t) {
      var r = typeof e;
      return "boolean" == typeof t && "string" === r ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(r) {
        oe(this).toggleClass(e.call(this, r, O(this), t), t)
      }) : this.each(function() {
        var t, i, n, o;
        if ("string" === r) {
          i = 0;
          n = oe(this);
          o = e.match(Re) || [];
          for (; t = o[i++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t)
        } else if (void 0 === e || "boolean" === r) {
          t = O(this);
          t && be.set(this, "__className__", t);
          this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : be.get(this, "__className__") || "")
        }
      })
    },
    hasClass: function(e) {
      var t, r, i = 0;
      t = " " + e + " ";
      for (; r = this[i++];)
        if (1 === r.nodeType && (" " + O(r) + " ").replace(ft, " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  var pt = /\r/g,
    dt = /[\x20\t\r\n\f]+/g;
  oe.fn.extend({
    val: function(e) {
      var t, r, i, n = this[0];
      if (arguments.length) {
        i = oe.isFunction(e);
        return this.each(function(r) {
          var n;
          if (1 === this.nodeType) {
            n = i ? e.call(this, r, oe(this).val()) : e;
            null == n ? n = "" : "number" == typeof n ? n += "" : oe.isArray(n) && (n = oe.map(n, function(e) {
              return null == e ? "" : e + ""
            }));
            t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()];
            t && "set" in t && void 0 !== t.set(this, n, "value") || (this.value = n)
          }
        })
      }
      if (n) {
        t = oe.valHooks[n.type] || oe.valHooks[n.nodeName.toLowerCase()];
        if (t && "get" in t && void 0 !== (r = t.get(n, "value"))) return r;
        r = n.value;
        return "string" == typeof r ? r.replace(pt, "") : null == r ? "" : r
      }
    }
  });
  oe.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = oe.find.attr(e, "value");
          return null != t ? t : oe.trim(oe.text(e)).replace(dt, " ")
        }
      },
      select: {
        get: function(e) {
          for (var t, r, i = e.options, n = e.selectedIndex, o = "select-one" === e.type || 0 > n, a = o ? null : [], s = o ? n + 1 : i.length, l = 0 > n ? s : o ? n : 0; s > l; l++) {
            r = i[l];
            if ((r.selected || l === n) && (ie.optDisabled ? !r.disabled : null === r.getAttribute("disabled")) && (!r.parentNode.disabled || !oe.nodeName(r.parentNode, "optgroup"))) {
              t = oe(r).val();
              if (o) return t;
              a.push(t)
            }
          }
          return a
        },
        set: function(e, t) {
          for (var r, i, n = e.options, o = oe.makeArray(t), a = n.length; a--;) {
            i = n[a];
            (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (r = !0)
          }
          r || (e.selectedIndex = -1);
          return o
        }
      }
    }
  });
  oe.each(["radio", "checkbox"], function() {
    oe.valHooks[this] = {
      set: function(e, t) {
        return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
      }
    };
    ie.checkOn || (oe.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var mt = /^(?:focusinfocus|focusoutblur)$/;
  oe.extend(oe.event, {
    trigger: function(t, r, i, n) {
      var o, a, s, l, c, h, u, f = [i || $],
        p = re.call(t, "type") ? t.type : t,
        d = re.call(t, "namespace") ? t.namespace.split(".") : [];
      a = s = i = i || $;
      if (3 !== i.nodeType && 8 !== i.nodeType && !mt.test(p + oe.event.triggered)) {
        if (p.indexOf(".") > -1) {
          d = p.split(".");
          p = d.shift();
          d.sort()
        }
        c = p.indexOf(":") < 0 && "on" + p;
        t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t);
        t.isTrigger = n ? 2 : 3;
        t.namespace = d.join(".");
        t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        t.result = void 0;
        t.target || (t.target = i);
        r = null == r ? [t] : oe.makeArray(r, [t]);
        u = oe.event.special[p] || {};
        if (n || !u.trigger || u.trigger.apply(i, r) !== !1) {
          if (!n && !u.noBubble && !oe.isWindow(i)) {
            l = u.delegateType || p;
            mt.test(l + p) || (a = a.parentNode);
            for (; a; a = a.parentNode) {
              f.push(a);
              s = a
            }
            s === (i.ownerDocument || $) && f.push(s.defaultView || s.parentWindow || e)
          }
          o = 0;
          for (;
            (a = f[o++]) && !t.isPropagationStopped();) {
            t.type = o > 1 ? l : u.bindType || p;
            h = (be.get(a, "events") || {})[t.type] && be.get(a, "handle");
            h && h.apply(a, r);
            h = c && a[c];
            if (h && h.apply && He(a)) {
              t.result = h.apply(a, r);
              t.result === !1 && t.preventDefault()
            }
          }
          t.type = p;
          if (!n && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), r) === !1) && He(i) && c && oe.isFunction(i[p]) && !oe.isWindow(i)) {
            s = i[c];
            s && (i[c] = null);
            oe.event.triggered = p;
            i[p]();
            oe.event.triggered = void 0;
            s && (i[c] = s)
          }
          return t.result
        }
      }
    },
    simulate: function(e, t, r) {
      var i = oe.extend(new oe.Event, r, {
        type: e,
        isSimulated: !0
      });
      oe.event.trigger(i, null, t)
    }
  });
  oe.fn.extend({
    trigger: function(e, t) {
      return this.each(function() {
        oe.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var r = this[0];
      return r ? oe.event.trigger(e, t, r, !0) : void 0
    }
  });
  oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    oe.fn[t] = function(e, r) {
      return arguments.length > 0 ? this.on(t, null, e, r) : this.trigger(t)
    }
  });
  oe.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  });
  ie.focusin = "onfocusin" in e;
  ie.focusin || oe.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var r = function(e) {
      oe.event.simulate(t, e.target, oe.event.fix(e))
    };
    oe.event.special[t] = {
      setup: function() {
        var i = this.ownerDocument || this,
          n = be.access(i, t);
        n || i.addEventListener(e, r, !0);
        be.access(i, t, (n || 0) + 1)
      },
      teardown: function() {
        var i = this.ownerDocument || this,
          n = be.access(i, t) - 1;
        if (n) be.access(i, t, n);
        else {
          i.removeEventListener(e, r, !0);
          be.remove(i, t)
        }
      }
    }
  });
  var Et = e.location,
    gt = oe.now(),
    vt = /\?/;
  oe.parseJSON = function(e) {
    return JSON.parse(e + "")
  };
  oe.parseXML = function(t) {
    var r;
    if (!t || "string" != typeof t) return null;
    try {
      r = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (i) {
      r = void 0
    }(!r || r.getElementsByTagName("parsererror").length) && oe.error("Invalid XML: " + t);
    return r
  };
  var yt = /#.*$/,
    Tt = /([?&])_=[^&]*/,
    Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    wt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    bt = {},
    _t = {},
    St = "*/".concat("*"),
    Mt = $.createElement("a");
  Mt.href = Et.href;
  oe.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: xt.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": St,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": oe.parseJSON,
        "text xml": oe.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? j(j(e, oe.ajaxSettings), t) : j(oe.ajaxSettings, e)
    },
    ajaxPrefilter: k(bt),
    ajaxTransport: k(_t),
    ajax: function(t, r) {
      function i(t, r, i, s) {
        var c, u, v, y, R, w = r;
        if (2 !== T) {
          T = 2;
          l && e.clearTimeout(l);
          n = void 0;
          a = s || "";
          x.readyState = t > 0 ? 4 : 0;
          c = t >= 200 && 300 > t || 304 === t;
          i && (y = G(f, x, i));
          y = W(f, y, x, c);
          if (c) {
            if (f.ifModified) {
              R = x.getResponseHeader("Last-Modified");
              R && (oe.lastModified[o] = R);
              R = x.getResponseHeader("etag");
              R && (oe.etag[o] = R)
            }
            if (204 === t || "HEAD" === f.type) w = "nocontent";
            else if (304 === t) w = "notmodified";
            else {
              w = y.state;
              u = y.data;
              v = y.error;
              c = !v
            }
          } else {
            v = w;
            if (t || !w) {
              w = "error";
              0 > t && (t = 0)
            }
          }
          x.status = t;
          x.statusText = (r || w) + "";
          c ? m.resolveWith(p, [u, w, x]) : m.rejectWith(p, [x, w, v]);
          x.statusCode(g);
          g = void 0;
          h && d.trigger(c ? "ajaxSuccess" : "ajaxError", [x, f, c ? u : v]);
          E.fireWith(p, [x, w]);
          if (h) {
            d.trigger("ajaxComplete", [x, f]);
            --oe.active || oe.event.trigger("ajaxStop")
          }
        }
      }
      if ("object" == typeof t) {
        r = t;
        t = void 0
      }
      r = r || {};
      var n, o, a, s, l, c, h, u, f = oe.ajaxSetup({}, r),
        p = f.context || f,
        d = f.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
        m = oe.Deferred(),
        E = oe.Callbacks("once memory"),
        g = f.statusCode || {},
        v = {},
        y = {},
        T = 0,
        R = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === T) {
              if (!s) {
                s = {};
                for (; t = Rt.exec(a);) s[t[1].toLowerCase()] = t[2]
              }
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === T ? a : null
          },
          setRequestHeader: function(e, t) {
            var r = e.toLowerCase();
            if (!T) {
              e = y[r] = y[r] || e;
              v[e] = t
            }
            return this
          },
          overrideMimeType: function(e) {
            T || (f.mimeType = e);
            return this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (2 > T)
                for (t in e) g[t] = [g[t], e[t]];
              else x.always(e[x.status]);
            return this
          },
          abort: function(e) {
            var t = e || R;
            n && n.abort(t);
            i(0, t);
            return this
          }
        };
      m.promise(x).complete = E.add;
      x.success = x.done;
      x.error = x.fail;
      f.url = ((t || f.url || Et.href) + "").replace(yt, "").replace(Ht, Et.protocol + "//");
      f.type = r.method || r.type || f.method || f.type;
      f.dataTypes = oe.trim(f.dataType || "*").toLowerCase().match(Re) || [""];
      if (null == f.crossDomain) {
        c = $.createElement("a");
        try {
          c.href = f.url;
          c.href = c.href;
          f.crossDomain = Mt.protocol + "//" + Mt.host != c.protocol + "//" + c.host
        } catch (w) {
          f.crossDomain = !0
        }
      }
      f.data && f.processData && "string" != typeof f.data && (f.data = oe.param(f.data, f.traditional));
      I(bt, f, r, x);
      if (2 === T) return x;
      h = oe.event && f.global;
      h && 0 === oe.active++ && oe.event.trigger("ajaxStart");
      f.type = f.type.toUpperCase();
      f.hasContent = !wt.test(f.type);
      o = f.url;
      if (!f.hasContent) {
        if (f.data) {
          o = f.url += (vt.test(o) ? "&" : "?") + f.data;
          delete f.data
        }
        f.cache === !1 && (f.url = Tt.test(o) ? o.replace(Tt, "$1_=" + gt++) : o + (vt.test(o) ? "&" : "?") + "_=" + gt++)
      }
      if (f.ifModified) {
        oe.lastModified[o] && x.setRequestHeader("If-Modified-Since", oe.lastModified[o]);
        oe.etag[o] && x.setRequestHeader("If-None-Match", oe.etag[o])
      }(f.data && f.hasContent && f.contentType !== !1 || r.contentType) && x.setRequestHeader("Content-Type", f.contentType);
      x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + St + "; q=0.01" : "") : f.accepts["*"]);
      for (u in f.headers) x.setRequestHeader(u, f.headers[u]);
      if (f.beforeSend && (f.beforeSend.call(p, x, f) === !1 || 2 === T)) return x.abort();
      R = "abort";
      for (u in {
          success: 1,
          error: 1,
          complete: 1
        }) x[u](f[u]);
      n = I(_t, f, r, x);
      if (n) {
        x.readyState = 1;
        h && d.trigger("ajaxSend", [x, f]);
        if (2 === T) return x;
        f.async && f.timeout > 0 && (l = e.setTimeout(function() {
          x.abort("timeout")
        }, f.timeout));
        try {
          T = 1;
          n.send(v, i)
        } catch (w) {
          if (!(2 > T)) throw w;
          i(-1, w)
        }
      } else i(-1, "No Transport");
      return x
    },
    getJSON: function(e, t, r) {
      return oe.get(e, t, r, "json")
    },
    getScript: function(e, t) {
      return oe.get(e, void 0, t, "script")
    }
  });
  oe.each(["get", "post"], function(e, t) {
    oe[t] = function(e, r, i, n) {
      if (oe.isFunction(r)) {
        n = n || i;
        i = r;
        r = void 0
      }
      return oe.ajax(oe.extend({
        url: e,
        type: t,
        dataType: n,
        data: r,
        success: i
      }, oe.isPlainObject(e) && e))
    }
  });
  oe._evalUrl = function(e) {
    return oe.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  };
  oe.fn.extend({
    wrapAll: function(e) {
      var t;
      if (oe.isFunction(e)) return this.each(function(t) {
        oe(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]);
        t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function(e) {
      return oe.isFunction(e) ? this.each(function(t) {
        oe(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = oe(this),
          r = t.contents();
        r.length ? r.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = oe.isFunction(e);
      return this.each(function(r) {
        oe(this).wrapAll(t ? e.call(this, r) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
      }).end()
    }
  });
  oe.expr.filters.hidden = function(e) {
    return !oe.expr.filters.visible(e)
  };
  oe.expr.filters.visible = function(e) {
    return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
  };
  var Ct = /%20/g,
    At = /\[\]$/,
    Lt = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    Pt = /^(?:input|select|textarea|keygen)/i;
  oe.param = function(e, t) {
    var r, i = [],
      n = function(e, t) {
        t = oe.isFunction(t) ? t() : null == t ? "" : t;
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional);
    if (oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
      n(this.name, this.value)
    });
    else
      for (r in e) X(r, e[r], t, n);
    return i.join("&").replace(Ct, "+")
  };
  oe.fn.extend({
    serialize: function() {
      return oe.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = oe.prop(this, "elements");
        return e ? oe.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !oe(this).is(":disabled") && Pt.test(this.nodeName) && !Dt.test(e) && (this.checked || !Pe.test(e))
      }).map(function(e, t) {
        var r = oe(this).val();
        return null == r ? null : oe.isArray(r) ? oe.map(r, function(e) {
          return {
            name: t.name,
            value: e.replace(Lt, "\r\n")
          }
        }) : {
          name: t.name,
          value: r.replace(Lt, "\r\n")
        }
      }).get()
    }
  });
  oe.ajaxSettings.xhr = function() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {}
  };
  var Ft = {
      0: 200,
      1223: 204
    },
    Nt = oe.ajaxSettings.xhr();
  ie.cors = !!Nt && "withCredentials" in Nt;
  ie.ajax = Nt = !!Nt;
  oe.ajaxTransport(function(t) {
    var r, i;
    return ie.cors || Nt && !t.crossDomain ? {
      send: function(n, o) {
        var a, s = t.xhr();
        s.open(t.type, t.url, t.async, t.username, t.password);
        if (t.xhrFields)
          for (a in t.xhrFields) s[a] = t.xhrFields[a];
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType);
        t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
        for (a in n) s.setRequestHeader(a, n[a]);
        r = function(e) {
          return function() {
            if (r) {
              r = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null;
              "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                binary: s.response
              } : {
                text: s.responseText
              }, s.getAllResponseHeaders())
            }
          }
        };
        s.onload = r();
        i = s.onerror = r("error");
        void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
          4 === s.readyState && e.setTimeout(function() {
            r && i()
          })
        };
        r = r("abort");
        try {
          s.send(t.hasContent && t.data || null)
        } catch (l) {
          if (r) throw l
        }
      },
      abort: function() {
        r && r()
      }
    } : void 0
  });
  oe.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        oe.globalEval(e);
        return e
      }
    }
  });
  oe.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1);
    e.crossDomain && (e.type = "GET")
  });
  oe.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, r;
      return {
        send: function(i, n) {
          t = oe("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", r = function(e) {
            t.remove();
            r = null;
            e && n("error" === e.type ? 404 : 200, e.type)
          });
          $.head.appendChild(t[0])
        },
        abort: function() {
          r && r()
        }
      }
    }
  });
  var Ut = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  oe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Ut.pop() || oe.expando + "_" + gt++;
      this[e] = !0;
      return e
    }
  });
  oe.ajaxPrefilter("json jsonp", function(t, r, i) {
    var n, o, a, s = t.jsonp !== !1 && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) {
      n = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback;
      s ? t[s] = t[s].replace(Vt, "$1" + n) : t.jsonp !== !1 && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + n);
      t.converters["script json"] = function() {
        a || oe.error(n + " was not called");
        return a[0]
      };
      t.dataTypes[0] = "json";
      o = e[n];
      e[n] = function() {
        a = arguments
      };
      i.always(function() {
        void 0 === o ? oe(e).removeProp(n) : e[n] = o;
        if (t[n]) {
          t.jsonpCallback = r.jsonpCallback;
          Ut.push(n)
        }
        a && oe.isFunction(o) && o(a[0]);
        a = o = void 0
      });
      return "script"
    }
  });
  oe.parseHTML = function(e, t, r) {
    if (!e || "string" != typeof e) return null;
    if ("boolean" == typeof t) {
      r = t;
      t = !1
    }
    t = t || $;
    var i = de.exec(e),
      n = !r && [];
    if (i) return [t.createElement(i[1])];
    i = f([e], t, n);
    n && n.length && oe(n).remove();
    return oe.merge([], i.childNodes)
  };
  var zt = oe.fn.load;
  oe.fn.load = function(e, t, r) {
    if ("string" != typeof e && zt) return zt.apply(this, arguments);
    var i, n, o, a = this,
      s = e.indexOf(" ");
    if (s > -1) {
      i = oe.trim(e.slice(s));
      e = e.slice(0, s)
    }
    if (oe.isFunction(t)) {
      r = t;
      t = void 0
    } else t && "object" == typeof t && (n = "POST");
    a.length > 0 && oe.ajax({
      url: e,
      type: n || "GET",
      dataType: "html",
      data: t
    }).done(function(e) {
      o = arguments;
      a.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
    }).always(r && function(e, t) {
      a.each(function() {
        r.apply(this, o || [e.responseText, t, e])
      })
    });
    return this
  };
  oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    oe.fn[t] = function(e) {
      return this.on(t, e)
    }
  });
  oe.expr.filters.animated = function(e) {
    return oe.grep(oe.timers, function(t) {
      return e === t.elem
    }).length
  };
  oe.offset = {
    setOffset: function(e, t, r) {
      var i, n, o, a, s, l, c, h = oe.css(e, "position"),
        u = oe(e),
        f = {};
      "static" === h && (e.style.position = "relative");
      s = u.offset();
      o = oe.css(e, "top");
      l = oe.css(e, "left");
      c = ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1;
      if (c) {
        i = u.position();
        a = i.top;
        n = i.left
      } else {
        a = parseFloat(o) || 0;
        n = parseFloat(l) || 0
      }
      oe.isFunction(t) && (t = t.call(e, r, oe.extend({}, s)));
      null != t.top && (f.top = t.top - s.top + a);
      null != t.left && (f.left = t.left - s.left + n);
      "using" in t ? t.using.call(e, f) : u.css(f)
    }
  };
  oe.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        oe.offset.setOffset(this, e, t)
      });
      var t, r, i = this[0],
        n = {
          top: 0,
          left: 0
        },
        o = i && i.ownerDocument;
      if (o) {
        t = o.documentElement;
        if (!oe.contains(t, i)) return n;
        n = i.getBoundingClientRect();
        r = q(o);
        return {
          top: n.top + r.pageYOffset - t.clientTop,
          left: n.left + r.pageXOffset - t.clientLeft
        }
      }
    },
    position: function() {
      if (this[0]) {
        var e, t, r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === oe.css(r, "position")) t = r.getBoundingClientRect();
        else {
          e = this.offsetParent();
          t = this.offset();
          oe.nodeName(e[0], "html") || (i = e.offset());
          i.top += oe.css(e[0], "borderTopWidth", !0);
          i.left += oe.css(e[0], "borderLeftWidth", !0)
        }
        return {
          top: t.top - i.top - oe.css(r, "marginTop", !0),
          left: t.left - i.left - oe.css(r, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
        return e || Ze
      })
    }
  });
  oe.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var r = "pageYOffset" === t;
    oe.fn[e] = function(i) {
      return we(this, function(e, i, n) {
        var o = q(e);
        if (void 0 === n) return o ? o[t] : e[i];
        o ? o.scrollTo(r ? o.pageXOffset : n, r ? n : o.pageYOffset) : e[i] = n;
        return void 0
      }, e, i, arguments.length)
    }
  });
  oe.each(["top", "left"], function(e, t) {
    oe.cssHooks[t] = S(ie.pixelPosition, function(e, r) {
      if (r) {
        r = _(e, t);
        return $e.test(r) ? oe(e).position()[t] + "px" : r
      }
    })
  });
  oe.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    oe.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(r, i) {
      oe.fn[i] = function(i, n) {
        var o = arguments.length && (r || "boolean" != typeof i),
          a = r || (i === !0 || n === !0 ? "margin" : "border");
        return we(this, function(t, r, i) {
          var n;
          if (oe.isWindow(t)) return t.document.documentElement["client" + e];
          if (9 === t.nodeType) {
            n = t.documentElement;
            return Math.max(t.body["scroll" + e], n["scroll" + e], t.body["offset" + e], n["offset" + e], n["client" + e])
          }
          return void 0 === i ? oe.css(t, r, a) : oe.style(t, r, i, a)
        }, t, o ? i : void 0, o, null)
      }
    })
  });
  oe.fn.extend({
    bind: function(e, t, r) {
      return this.on(e, null, t, r)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, r, i) {
      return this.on(t, e, r, i)
    },
    undelegate: function(e, t, r) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
    },
    size: function() {
      return this.length
    }
  });
  oe.fn.andSelf = oe.fn.addBack;
  "function" == typeof define && define.amd && define("jquery", [], function() {
    return oe
  });
  var Bt = e.jQuery,
    Ot = e.$;
  oe.noConflict = function(t) {
    e.$ === oe && (e.$ = Ot);
    t && e.jQuery === oe && (e.jQuery = Bt);
    return oe
  };
  t || (e.jQuery = e.$ = oe);
  return oe
});
(function() {
  var e = this,
    t = e._,
    r = {},
    i = Array.prototype,
    n = Object.prototype,
    o = Function.prototype,
    a = i.push,
    s = i.slice,
    l = i.concat,
    c = n.toString,
    h = n.hasOwnProperty,
    u = i.forEach,
    f = i.map,
    p = i.reduce,
    d = i.reduceRight,
    m = i.filter,
    E = i.every,
    g = i.some,
    v = i.indexOf,
    y = i.lastIndexOf,
    T = Array.isArray,
    R = Object.keys,
    x = o.bind,
    w = function(e) {
      if (e instanceof w) return e;
      if (!(this instanceof w)) return new w(e);
      this._wrapped = e;
      return void 0
    };
  if ("undefined" != typeof exports) {
    "undefined" != typeof module && module.exports && (exports = module.exports = w);
    exports._ = w
  } else e._ = w;
  w.VERSION = "1.5.2";
  var H = w.each = w.forEach = function(e, t, i) {
    if (null != e)
      if (u && e.forEach === u) e.forEach(t, i);
      else if (e.length === +e.length) {
      for (var n = 0, o = e.length; o > n; n++)
        if (t.call(i, e[n], n, e) === r) return
    } else
      for (var a = w.keys(e), n = 0, o = a.length; o > n; n++)
        if (t.call(i, e[a[n]], a[n], e) === r) return
  };
  w.map = w.collect = function(e, t, r) {
    var i = [];
    if (null == e) return i;
    if (f && e.map === f) return e.map(t, r);
    H(e, function(e, n, o) {
      i.push(t.call(r, e, n, o))
    });
    return i
  };
  var b = "Reduce of empty array with no initial value";
  w.reduce = w.foldl = w.inject = function(e, t, r, i) {
    var n = arguments.length > 2;
    null == e && (e = []);
    if (p && e.reduce === p) {
      i && (t = w.bind(t, i));
      return n ? e.reduce(t, r) : e.reduce(t)
    }
    H(e, function(e, o, a) {
      if (n) r = t.call(i, r, e, o, a);
      else {
        r = e;
        n = !0
      }
    });
    if (!n) throw new TypeError(b);
    return r
  };
  w.reduceRight = w.foldr = function(e, t, r, i) {
    var n = arguments.length > 2;
    null == e && (e = []);
    if (d && e.reduceRight === d) {
      i && (t = w.bind(t, i));
      return n ? e.reduceRight(t, r) : e.reduceRight(t)
    }
    var o = e.length;
    if (o !== +o) {
      var a = w.keys(e);
      o = a.length
    }
    H(e, function(s, l, c) {
      l = a ? a[--o] : --o;
      if (n) r = t.call(i, r, e[l], l, c);
      else {
        r = e[l];
        n = !0
      }
    });
    if (!n) throw new TypeError(b);
    return r
  };
  w.find = w.detect = function(e, t, r) {
    var i;
    _(e, function(e, n, o) {
      if (t.call(r, e, n, o)) {
        i = e;
        return !0
      }
    });
    return i
  };
  w.filter = w.select = function(e, t, r) {
    var i = [];
    if (null == e) return i;
    if (m && e.filter === m) return e.filter(t, r);
    H(e, function(e, n, o) {
      t.call(r, e, n, o) && i.push(e)
    });
    return i
  };
  w.reject = function(e, t, r) {
    return w.filter(e, function(e, i, n) {
      return !t.call(r, e, i, n)
    }, r)
  };
  w.every = w.all = function(e, t, i) {
    t || (t = w.identity);
    var n = !0;
    if (null == e) return n;
    if (E && e.every === E) return e.every(t, i);
    H(e, function(e, o, a) {
      return (n = n && t.call(i, e, o, a)) ? void 0 : r
    });
    return !!n
  };
  var _ = w.some = w.any = function(e, t, i) {
    t || (t = w.identity);
    var n = !1;
    if (null == e) return n;
    if (g && e.some === g) return e.some(t, i);
    H(e, function(e, o, a) {
      return n || (n = t.call(i, e, o, a)) ? r : void 0
    });
    return !!n
  };
  w.contains = w.include = function(e, t) {
    return null == e ? !1 : v && e.indexOf === v ? -1 != e.indexOf(t) : _(e, function(e) {
      return e === t
    })
  };
  w.invoke = function(e, t) {
    var r = s.call(arguments, 2),
      i = w.isFunction(t);
    return w.map(e, function(e) {
      return (i ? t : e[t]).apply(e, r)
    })
  };
  w.pluck = function(e, t) {
    return w.map(e, function(e) {
      return e[t]
    })
  };
  w.where = function(e, t, r) {
    return w.isEmpty(t) ? r ? void 0 : [] : w[r ? "find" : "filter"](e, function(e) {
      for (var r in t)
        if (t[r] !== e[r]) return !1;
      return !0
    })
  };
  w.findWhere = function(e, t) {
    return w.where(e, t, !0)
  };
  w.max = function(e, t, r) {
    if (!t && w.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
    if (!t && w.isEmpty(e)) return -(1 / 0);
    var i = {
      computed: -(1 / 0),
      value: -(1 / 0)
    };
    H(e, function(e, n, o) {
      var a = t ? t.call(r, e, n, o) : e;
      a > i.computed && (i = {
        value: e,
        computed: a
      })
    });
    return i.value
  };
  w.min = function(e, t, r) {
    if (!t && w.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
    if (!t && w.isEmpty(e)) return 1 / 0;
    var i = {
      computed: 1 / 0,
      value: 1 / 0
    };
    H(e, function(e, n, o) {
      var a = t ? t.call(r, e, n, o) : e;
      a < i.computed && (i = {
        value: e,
        computed: a
      })
    });
    return i.value
  };
  w.shuffle = function(e) {
    var t, r = 0,
      i = [];
    H(e, function(e) {
      t = w.random(r++);
      i[r - 1] = i[t];
      i[t] = e
    });
    return i
  };
  w.sample = function(e, t, r) {
    return arguments.length < 2 || r ? e[w.random(e.length - 1)] : w.shuffle(e).slice(0, Math.max(0, t))
  };
  var S = function(e) {
    return w.isFunction(e) ? e : function(t) {
      return t[e]
    }
  };
  w.sortBy = function(e, t, r) {
    var i = S(t);
    return w.pluck(w.map(e, function(e, t, n) {
      return {
        value: e,
        index: t,
        criteria: i.call(r, e, t, n)
      }
    }).sort(function(e, t) {
      var r = e.criteria,
        i = t.criteria;
      if (r !== i) {
        if (r > i || void 0 === r) return 1;
        if (i > r || void 0 === i) return -1
      }
      return e.index - t.index
    }), "value")
  };
  var M = function(e) {
    return function(t, r, i) {
      var n = {},
        o = null == r ? w.identity : S(r);
      H(t, function(r, a) {
        var s = o.call(i, r, a, t);
        e(n, s, r)
      });
      return n
    }
  };
  w.groupBy = M(function(e, t, r) {
    (w.has(e, t) ? e[t] : e[t] = []).push(r)
  });
  w.indexBy = M(function(e, t, r) {
    e[t] = r
  });
  w.countBy = M(function(e, t) {
    w.has(e, t) ? e[t]++ : e[t] = 1
  });
  w.sortedIndex = function(e, t, r, i) {
    r = null == r ? w.identity : S(r);
    for (var n = r.call(i, t), o = 0, a = e.length; a > o;) {
      var s = o + a >>> 1;
      r.call(i, e[s]) < n ? o = s + 1 : a = s
    }
    return o
  };
  w.toArray = function(e) {
    return e ? w.isArray(e) ? s.call(e) : e.length === +e.length ? w.map(e, w.identity) : w.values(e) : []
  };
  w.size = function(e) {
    return null == e ? 0 : e.length === +e.length ? e.length : w.keys(e).length
  };
  w.first = w.head = w.take = function(e, t, r) {
    return null == e ? void 0 : null == t || r ? e[0] : s.call(e, 0, t)
  };
  w.initial = function(e, t, r) {
    return s.call(e, 0, e.length - (null == t || r ? 1 : t))
  };
  w.last = function(e, t, r) {
    return null == e ? void 0 : null == t || r ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
  };
  w.rest = w.tail = w.drop = function(e, t, r) {
    return s.call(e, null == t || r ? 1 : t)
  };
  w.compact = function(e) {
    return w.filter(e, w.identity)
  };
  var C = function(e, t, r) {
    if (t && w.every(e, w.isArray)) return l.apply(r, e);
    H(e, function(e) {
      w.isArray(e) || w.isArguments(e) ? t ? a.apply(r, e) : C(e, t, r) : r.push(e)
    });
    return r
  };
  w.flatten = function(e, t) {
    return C(e, t, [])
  };
  w.without = function(e) {
    return w.difference(e, s.call(arguments, 1))
  };
  w.uniq = w.unique = function(e, t, r, i) {
    if (w.isFunction(t)) {
      i = r;
      r = t;
      t = !1
    }
    var n = r ? w.map(e, r, i) : e,
      o = [],
      a = [];
    H(n, function(r, i) {
      if (t ? !i || a[a.length - 1] !== r : !w.contains(a, r)) {
        a.push(r);
        o.push(e[i])
      }
    });
    return o
  };
  w.union = function() {
    return w.uniq(w.flatten(arguments, !0))
  };
  w.intersection = function(e) {
    var t = s.call(arguments, 1);
    return w.filter(w.uniq(e), function(e) {
      return w.every(t, function(t) {
        return w.indexOf(t, e) >= 0
      })
    })
  };
  w.difference = function(e) {
    var t = l.apply(i, s.call(arguments, 1));
    return w.filter(e, function(e) {
      return !w.contains(t, e)
    })
  };
  w.zip = function() {
    for (var e = w.max(w.pluck(arguments, "length").concat(0)), t = new Array(e), r = 0; e > r; r++) t[r] = w.pluck(arguments, "" + r);
    return t
  };
  w.object = function(e, t) {
    if (null == e) return {};
    for (var r = {}, i = 0, n = e.length; n > i; i++) t ? r[e[i]] = t[i] : r[e[i][0]] = e[i][1];
    return r
  };
  w.indexOf = function(e, t, r) {
    if (null == e) return -1;
    var i = 0,
      n = e.length;
    if (r) {
      if ("number" != typeof r) {
        i = w.sortedIndex(e, t);
        return e[i] === t ? i : -1
      }
      i = 0 > r ? Math.max(0, n + r) : r
    }
    if (v && e.indexOf === v) return e.indexOf(t, r);
    for (; n > i; i++)
      if (e[i] === t) return i;
    return -1
  };
  w.lastIndexOf = function(e, t, r) {
    if (null == e) return -1;
    var i = null != r;
    if (y && e.lastIndexOf === y) return i ? e.lastIndexOf(t, r) : e.lastIndexOf(t);
    for (var n = i ? r : e.length; n--;)
      if (e[n] === t) return n;
    return -1
  };
  w.range = function(e, t, r) {
    if (arguments.length <= 1) {
      t = e || 0;
      e = 0
    }
    r = arguments[2] || 1;
    for (var i = Math.max(Math.ceil((t - e) / r), 0), n = 0, o = new Array(i); i > n;) {
      o[n++] = e;
      e += r
    }
    return o
  };
  var A = function() {};
  w.bind = function(e, t) {
    var r, i;
    if (x && e.bind === x) return x.apply(e, s.call(arguments, 1));
    if (!w.isFunction(e)) throw new TypeError;
    r = s.call(arguments, 2);
    return i = function() {
      if (!(this instanceof i)) return e.apply(t, r.concat(s.call(arguments)));
      A.prototype = e.prototype;
      var n = new A;
      A.prototype = null;
      var o = e.apply(n, r.concat(s.call(arguments)));
      return Object(o) === o ? o : n
    }
  };
  w.partial = function(e) {
    var t = s.call(arguments, 1);
    return function() {
      return e.apply(this, t.concat(s.call(arguments)))
    }
  };
  w.bindAll = function(e) {
    var t = s.call(arguments, 1);
    if (0 === t.length) throw new Error("bindAll must be passed function names");
    H(t, function(t) {
      e[t] = w.bind(e[t], e)
    });
    return e
  };
  w.memoize = function(e, t) {
    var r = {};
    t || (t = w.identity);
    return function() {
      var i = t.apply(this, arguments);
      return w.has(r, i) ? r[i] : r[i] = e.apply(this, arguments)
    }
  };
  w.delay = function(e, t) {
    var r = s.call(arguments, 2);
    return setTimeout(function() {
      return e.apply(null, r)
    }, t)
  };
  w.defer = function(e) {
    return w.delay.apply(w, [e, 1].concat(s.call(arguments, 1)))
  };
  w.throttle = function(e, t, r) {
    var i, n, o, a = null,
      s = 0;
    r || (r = {});
    var l = function() {
      s = r.leading === !1 ? 0 : new Date;
      a = null;
      o = e.apply(i, n)
    };
    return function() {
      var c = new Date;
      s || r.leading !== !1 || (s = c);
      var h = t - (c - s);
      i = this;
      n = arguments;
      if (0 >= h) {
        clearTimeout(a);
        a = null;
        s = c;
        o = e.apply(i, n)
      } else a || r.trailing === !1 || (a = setTimeout(l, h));
      return o
    }
  };
  w.debounce = function(e, t, r) {
    var i, n, o, a, s;
    return function() {
      o = this;
      n = arguments;
      a = new Date;
      var l = function() {
          var c = new Date - a;
          if (t > c) i = setTimeout(l, t - c);
          else {
            i = null;
            r || (s = e.apply(o, n))
          }
        },
        c = r && !i;
      i || (i = setTimeout(l, t));
      c && (s = e.apply(o, n));
      return s
    }
  };
  w.once = function(e) {
    var t, r = !1;
    return function() {
      if (r) return t;
      r = !0;
      t = e.apply(this, arguments);
      e = null;
      return t
    }
  };
  w.wrap = function(e, t) {
    return function() {
      var r = [e];
      a.apply(r, arguments);
      return t.apply(this, r)
    }
  };
  w.compose = function() {
    var e = arguments;
    return function() {
      for (var t = arguments, r = e.length - 1; r >= 0; r--) t = [e[r].apply(this, t)];
      return t[0]
    }
  };
  w.after = function(e, t) {
    return function() {
      return --e < 1 ? t.apply(this, arguments) : void 0
    }
  };
  w.keys = R || function(e) {
    if (e !== Object(e)) throw new TypeError("Invalid object");
    var t = [];
    for (var r in e) w.has(e, r) && t.push(r);
    return t
  };
  w.values = function(e) {
    for (var t = w.keys(e), r = t.length, i = new Array(r), n = 0; r > n; n++) i[n] = e[t[n]];
    return i
  };
  w.pairs = function(e) {
    for (var t = w.keys(e), r = t.length, i = new Array(r), n = 0; r > n; n++) i[n] = [t[n], e[t[n]]];
    return i
  };
  w.invert = function(e) {
    for (var t = {}, r = w.keys(e), i = 0, n = r.length; n > i; i++) t[e[r[i]]] = r[i];
    return t
  };
  w.functions = w.methods = function(e) {
    var t = [];
    for (var r in e) w.isFunction(e[r]) && t.push(r);
    return t.sort()
  };
  w.extend = function(e) {
    H(s.call(arguments, 1), function(t) {
      if (t)
        for (var r in t) e[r] = t[r]
    });
    return e
  };
  w.pick = function(e) {
    var t = {},
      r = l.apply(i, s.call(arguments, 1));
    H(r, function(r) {
      r in e && (t[r] = e[r])
    });
    return t
  };
  w.omit = function(e) {
    var t = {},
      r = l.apply(i, s.call(arguments, 1));
    for (var n in e) w.contains(r, n) || (t[n] = e[n]);
    return t
  };
  w.defaults = function(e) {
    H(s.call(arguments, 1), function(t) {
      if (t)
        for (var r in t) void 0 === e[r] && (e[r] = t[r])
    });
    return e
  };
  w.clone = function(e) {
    return w.isObject(e) ? w.isArray(e) ? e.slice() : w.extend({}, e) : e
  };
  w.tap = function(e, t) {
    t(e);
    return e
  };
  var L = function(e, t, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return e === t;
    e instanceof w && (e = e._wrapped);
    t instanceof w && (t = t._wrapped);
    var n = c.call(e);
    if (n != c.call(t)) return !1;
    switch (n) {
      case "[object String]":
        return e == String(t);
      case "[object Number]":
        return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
      case "[object Date]":
      case "[object Boolean]":
        return +e == +t;
      case "[object RegExp]":
        return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
    }
    if ("object" != typeof e || "object" != typeof t) return !1;
    for (var o = r.length; o--;)
      if (r[o] == e) return i[o] == t;
    var a = e.constructor,
      s = t.constructor;
    if (a !== s && !(w.isFunction(a) && a instanceof a && w.isFunction(s) && s instanceof s)) return !1;
    r.push(e);
    i.push(t);
    var l = 0,
      h = !0;
    if ("[object Array]" == n) {
      l = e.length;
      h = l == t.length;
      if (h)
        for (; l-- && (h = L(e[l], t[l], r, i)););
    } else {
      for (var u in e)
        if (w.has(e, u)) {
          l++;
          if (!(h = w.has(t, u) && L(e[u], t[u], r, i))) break
        }
      if (h) {
        for (u in t)
          if (w.has(t, u) && !l--) break;
        h = !l
      }
    }
    r.pop();
    i.pop();
    return h
  };
  w.isEqual = function(e, t) {
    return L(e, t, [], [])
  };
  w.isEmpty = function(e) {
    if (null == e) return !0;
    if (w.isArray(e) || w.isString(e)) return 0 === e.length;
    for (var t in e)
      if (w.has(e, t)) return !1;
    return !0
  };
  w.isElement = function(e) {
    return !(!e || 1 !== e.nodeType)
  };
  w.isArray = T || function(e) {
    return "[object Array]" == c.call(e)
  };
  w.isObject = function(e) {
    return e === Object(e)
  };
  H(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
    w["is" + e] = function(t) {
      return c.call(t) == "[object " + e + "]"
    }
  });
  w.isArguments(arguments) || (w.isArguments = function(e) {
    return !(!e || !w.has(e, "callee"))
  });
  "function" != typeof /./ && (w.isFunction = function(e) {
    return "function" == typeof e
  });
  w.isFinite = function(e) {
    return isFinite(e) && !isNaN(parseFloat(e))
  };
  w.isNaN = function(e) {
    return w.isNumber(e) && e != +e
  };
  w.isBoolean = function(e) {
    return e === !0 || e === !1 || "[object Boolean]" == c.call(e)
  };
  w.isNull = function(e) {
    return null === e
  };
  w.isUndefined = function(e) {
    return void 0 === e
  };
  w.has = function(e, t) {
    return h.call(e, t)
  };
  w.noConflict = function() {
    e._ = t;
    return this
  };
  w.identity = function(e) {
    return e
  };
  w.times = function(e, t, r) {
    for (var i = Array(Math.max(0, e)), n = 0; e > n; n++) i[n] = t.call(r, n);
    return i
  };
  w.random = function(e, t) {
    if (null == t) {
      t = e;
      e = 0
    }
    return e + Math.floor(Math.random() * (t - e + 1))
  };
  var D = {
    escape: {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;"
    }
  };
  D.unescape = w.invert(D.escape);
  var P = {
    escape: new RegExp("[" + w.keys(D.escape).join("") + "]", "g"),
    unescape: new RegExp("(" + w.keys(D.unescape).join("|") + ")", "g")
  };
  w.each(["escape", "unescape"], function(e) {
    w[e] = function(t) {
      return null == t ? "" : ("" + t).replace(P[e], function(t) {
        return D[e][t]
      })
    }
  });
  w.result = function(e, t) {
    if (null == e) return void 0;
    var r = e[t];
    return w.isFunction(r) ? r.call(e) : r
  };
  w.mixin = function(e) {
    H(w.functions(e), function(t) {
      var r = w[t] = e[t];
      w.prototype[t] = function() {
        var e = [this._wrapped];
        a.apply(e, arguments);
        return z.call(this, r.apply(w, e))
      }
    })
  };
  var F = 0;
  w.uniqueId = function(e) {
    var t = ++F + "";
    return e ? e + t : t
  };
  w.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var N = /(.)^/,
    U = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "	": "t",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
    V = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  w.template = function(e, t, r) {
    var i;
    r = w.defaults({}, r, w.templateSettings);
    var n = new RegExp([(r.escape || N).source, (r.interpolate || N).source, (r.evaluate || N).source].join("|") + "|$", "g"),
      o = 0,
      a = "__p+='";
    e.replace(n, function(t, r, i, n, s) {
      a += e.slice(o, s).replace(V, function(e) {
        return "\\" + U[e]
      });
      r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'");
      i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'");
      n && (a += "';\n" + n + "\n__p+='");
      o = s + t.length;
      return t
    });
    a += "';\n";
    r.variable || (a = "with(obj||{}){\n" + a + "}\n");
    a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
    try {
      i = new Function(r.variable || "obj", "_", a)
    } catch (s) {
      s.source = a;
      throw s
    }
    if (t) return i(t, w);
    var l = function(e) {
      return i.call(this, e, w)
    };
    l.source = "function(" + (r.variable || "obj") + "){\n" + a + "}";
    return l
  };
  w.chain = function(e) {
    return w(e).chain()
  };
  var z = function(e) {
    return this._chain ? w(e).chain() : e
  };
  w.mixin(w);
  H(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
    var t = i[e];
    w.prototype[e] = function() {
      var r = this._wrapped;
      t.apply(r, arguments);
      "shift" != e && "splice" != e || 0 !== r.length || delete r[0];
      return z.call(this, r)
    }
  });
  H(["concat", "join", "slice"], function(e) {
    var t = i[e];
    w.prototype[e] = function() {
      return z.call(this, t.apply(this._wrapped, arguments))
    }
  });
  w.extend(w.prototype, {
    chain: function() {
      this._chain = !0;
      return this
    },
    value: function() {
      return this._wrapped
    }
  })
}).call(this);
(function() {
  var e, t, r, i = [].slice;
  null == window.GitHub && (window.GitHub = {});
  window.Render = window.Render || {};
  t = function() {
    var e, t;
    e = 1 <= arguments.length ? i.call(arguments, 0) : [];
    if (null != console.log) try {
      return console.log.apply(console, e)
    } catch (r) {
      t = r;
      return console.log(e)
    }
  };
  r = function(e) {
    var t, r;
    t = 50;
    (null != (r = window.debug).buffer ? r.buffer : r.buffer = []).push({
      time: Date.now(),
      args: e
    });
    return window.debug.buffer = window.debug.buffer.slice(-t)
  };
  window.Render.showDebug = function(e) {
    var r, n, o, a;
    null == e && (e = 1);
    a = (window.debug.buffer || []).slice(-e);
    for (n = 0, o = a.length; o > n; n++) {
      r = a[n];
      t.apply(null, [new Date(r.time) + ": "].concat(i.call(r.args)))
    }
    return (window.debug.buffer || []).length
  };
  window.debug = null != window.debug ? window.debug : (e = function() {
    var e;
    e = 1 <= arguments.length ? i.call(arguments, 0) : [];
    r(e);
    return window.Render.quiet ? void 0 : t.apply(null, e)
  }, e.buffer = [], e)
}).call(this);
(function() {
  window.Render.quiet = !0
}).call(this);
(function() {
  var e, t, r = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  t = window.Render;
  t.Doctor = e = function() {
    function e(e) {
      this.container = e;
      this.updateHealth = r(this.updateHealth, this);
      this.problems = [];
      this.updateHealth()
    }
    e.prototype.addProblem = function(e) {
      this.problems.push(e);
      return this.updateHealth()
    };
    e.prototype.healthy = function() {
      return 0 === this.problems.length
    };
    e.prototype.clearProblems = function() {
      return this.problems = []
    };
    e.prototype.updateHealth = function() {
      var e, t, r, i;
      if ($(this.container).length) {
        setTimeout(this.updateHealth, 3e3);
        e = $(".js-viewer-health");
        t = "is-viewer-good is-viewer-bad";
        if (this.problems.length) {
          i = this.problems.join(", ");
          r = "is-viewer-bad";
          e.show()
        } else {
          i = "Everything running smoothly!";
          r = "is-viewer-good"
        }
        e.removeClass(t);
        e.addClass(r);
        return e.find(".js-message").html(i)
      }
    };
    return e
  }()
}).call(this);
(function() {
  var e, t, r, i, n, o, a, s, l, c, h, u, f, p = [].slice;
  r = {
    originalHistoryState: JSON.stringify(window.history.state)
  };
  t = [];
  l = (new Date).getTime();
  f = !1;
  a = function() {
    f = !0
  };
  o = function() {
    f = !1
  };
  $(window).on("pageshow", o);
  $(window).on("pagehide", a);
  $(window).on("error", function(e) {
    var i, o, a, c, u, f, d;
    f = e.originalEvent, u = f.message, a = f.filename, c = f.lineno, o = f.error;
    i = $.extend.apply($, [{}, r].concat(p.call(t), [{
      message: u,
      filename: a,
      lineno: c,
      url: window.location.href,
      readyState: document.readyState,
      referrer: document.referrer,
      stack: null != o ? o.stack : void 0,
      historyState: JSON.stringify(window.history.state),
      timeSinceLoad: Math.round((new Date).getTime() - l),
      extensionScripts: JSON.stringify(n().sort()),
      navigations: JSON.stringify(s())
    }], [null != o ? o.failbotContext : void 0]));
    t = [];
    null != i.eventTarget && (i.eventTarget = $(i.eventTarget).inspect());
    $(document).trigger("captured:error", i);
    i.logging = function() {
      var e;
      try {
        return JSON.stringify((null != (e = window.debug) ? e.buffer : void 0) || [])
      } catch (t) {}
    }();
    if (h(e)) {
      d = $("body").data("render-url");
      $.ajax({
        type: "POST",
        url: d + "/_errors",
        data: {
          error: i
        }
      })
    }
  });
  h = function() {
    var e;
    e = 0;
    return function(t) {
      var r, i, n;
      n = t.originalEvent, i = n.lineno, r = n.error;
      if (null == (null != r ? r.stack : void 0) || !i) return !1;
      if (f) return !1;
      if (e >= 10) return !1;
      e++;
      return !0
    }
  }();
  n = function() {
    var e, t, r, i, n;
    r = $("script");
    i = [];
    for (e = 0, t = r.length; t > e; e++) {
      n = r[e];
      /^(?:chrome-extension|file):/.test(n.src) && i.push(n.src)
    }
    return i
  };
  i = jQuery.event.dispatch;
  jQuery.event.dispatch = function(e) {
    var r;
    if ("error" === e.type && e.target === window) return i.apply(this, arguments);
    t.push({
      eventType: e.type,
      eventTarget: e.target
    });
    r = i.apply(this, arguments);
    t.pop();
    return r
  };
  c = function(e, t) {
    var r;
    r = s();
    r.push({
      type: e,
      url: window.location.href,
      state: window.history.state,
      info: t
    });
    return u(r)
  };
  e = "navigations";
  s = function() {
    var t;
    t = function() {
      try {
        return sessionStorage.getItem(e)
      } catch (t) {}
    }();
    return t ? JSON.parse(t) : []
  };
  u = function(t) {
    try {
      return sessionStorage.setItem(e, JSON.stringify(t))
    } catch (r) {}
  };
  c("load");
  $(window).on("hashchange", function(e) {
    return c("hashchange", {
      oldURL: e.oldURL,
      newURL: e.newURL
    })
  });
  $(window).on("popstate", function(e) {
    return c("popstate", {
      eventState: e.state
    })
  });
  $(document).on("pjax:success", function(e) {
    return c("pjax:success")
  });
  $(document).on("pjax:popstate", function(e) {
    return c("pjax:popstate", {
      pjaxDirection: e.direction,
      pjaxState: e.state
    })
  });
  "#b00m" === window.location.hash && b00m()
}).call(this);
(function() {
  var e, t, r = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    i = [].slice;
  t = window.Render;
  t.JobQueue = e = function() {
    function e(e) {
      null == e && (e = {});
      this.run = r(this.run, this);
      this.queue = [];
      this.queueInterval = e.queueInterval || 16;
      this.batchSize = e.batchSize || 50
    }
    e.prototype.run = function(e) {
      var t, r, n, o, a;
      if (null != e) {
        0 === this.queue.length && setTimeout(this.run, 0);
        return this.queue.push(e)
      }
      for (n = r = 0, o = this.batchSize; o >= 0 ? o > r : r > o; n = o >= 0 ? ++r : --r) {
        if (!(this.queue.length > 0)) return;
        a = this.queue, t = a[0], this.queue = 2 <= a.length ? i.call(a, 1) : [];
        null != t && t()
      }
      return setTimeout(this.run, this.queueInterval)
    };
    return e
  }()
}).call(this);
(function() {
  var e, t;
  t = window.Render;
  t.ModeSwitcher = e = function() {
    function e(e, t, r) {
      var i;
      this.callback = e;
      this.identifier = null != t ? t : ".js-view-modes";
      this.childIdentifier = null != r ? r : ".js-view-mode-item";
      i = $(this.identifier);
      i.length > 0 && i.children(this.childIdentifier).on("click", function(e) {
        return function(t) {
          var r;
          e.callback($(t.target).data("mode"));
          i.children(e.childIdentifier).removeClass("active");
          r = $(t.target);
          return r.addClass("active")
        }
      }(this))
    }
    return e
  }()
}).call(this);
(function() {
  var e, t, r = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  t = window.Render;
  t.Slider = e = function() {
    function e(e, t) {
      this.callbacks = null != e ? e : {};
      null == t && (t = {});
      this.setDragger = r(this.setDragger, this);
      this.value = r(this.value, this);
      this.bindControls = r(this.bindControls, this);
      this.dragger = $(t.identifier || ".js-dragger");
      this.track = this.dragger.parent();
      this.container = this.track.parent();
      this.percentage = t.percentage || 50;
      this.bindControls();
      this.setDragger()
    }
    e.prototype.bindControls = function() {
      return this.dragger.on("mousedown", function(e) {
        return function(t) {
          t.preventDefault();
          $("body").css({
            cursor: "pointer"
          });
          null != e.callbacks.mouseDown && e.callbacks.mouseDown();
          $(document).on("mousemove.dragger", function(t) {
            var r, i, n;
            t.preventDefault();
            n = 0;
            i = e.track.width() - e.dragger.width();
            r = t.clientX - e.track.offset().left;
            n > r && (r = n);
            r > i && (r = i);
            e.dragger.css({
              left: r
            });
            e.percentage = r / i * 100;
            debug("Slider at " + e.percentage + "%");
            return null != e.callbacks.slide ? e.callbacks.slide(e.percentage) : void 0
          });
          return $(document).on("mouseup.dragger", function() {
            $(document).off(".dragger");
            $("body").css({
              cursor: "auto"
            });
            return null != e.callbacks.mouseUp ? e.callbacks.mouseUp() : void 0
          })
        }
      }(this))
    };
    e.prototype.value = function() {
      return this.percentage
    };
    e.prototype.setDragger = function() {
      var e, t;
      t = this.track.width() - this.dragger.width();
      e = this.percentage / 100 * t;
      return this.dragger.css({
        left: e
      })
    };
    e.prototype.show = function() {
      this.container.show();
      return this.setDragger()
    };
    e.prototype.hide = function() {
      return this.container.hide()
    };
    return e
  }()
}).call(this);
(function() {
  var e, t, r, i = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    n = [].slice,
    o = [].indexOf || function(e) {
      for (var t = 0, r = this.length; r > t; t++)
        if (t in this && this[t] === e) return t;
      return -1
    };
  r = window.Render;
  t = function(e) {
    return /^client:\/\//.exec(e)
  };
  r.Status = e = function() {
    function e(e, t) {
      var r;
      this.format = e;
      null == t && (t = {});
      this.navigateDirect = i(this.navigateDirect, this);
      this.navigateRelative = i(this.navigateRelative, this);
      this.navigateTo = i(this.navigateTo, this);
      this.handleLink = i(this.handleLink, this);
      this.haveParent = i(this.haveParent, this);
      this.handleMessage = i(this.handleMessage, this);
      this.handleCmd = i(this.handleCmd, this);
      this.handleData = i(this.handleData, this);
      this.submitGiveup = i(this.submitGiveup, this);
      this.submitTiming = i(this.submitTiming, this);
      this.requireAck = i(this.requireAck, this);
      this.onAck = i(this.onAck, this);
      this.onReady = i(this.onReady, this);
      this.sendInitial = i(this.sendInitial, this);
      if (null == this.format) throw new Error("Format not declared when Status was constructed.");
      window.location.hash.length && (this.identity = window.location.hash.substring(1));
      this.sentData = {
        have: [],
        waiting: []
      };
      this.messages = [{
        status: "constructor",
        payload: void 0,
        when: Date.now(),
        sent: !0
      }];
      this.acked = !1;
      $(window).on("message", this.handleMessage);
      t.noLinks || $(document).on("click", "a", this.handleLink);
      r = t.initial || "hello";
      this.sendInitial(r, 10, 1e3)
    }
    e.prototype.sendInitial = function(e, t, r) {
      null == t && (t = 10);
      null == r && (r = 1e3);
      if (!this.acked && (t -= 1) >= 0) {
        setTimeout(function(i) {
          return function() {
            return i.sendInitial(e, t, r)
          }
        }(this), r);
        debug("Sending hello. Will try again " + t + " more times in 1 second until ack'd");
        return this.set(e)
      }
    };
    e.prototype.load = function(e, r) {
      null == r.setStatus && (r.setStatus = !0);
      null == r.attempts && (r.attempts = 30);
      null == r.before && (r.before = function(e, t) {});
      null == r.success && (r.success = function(e) {
        return function(t, i) {
          return r.setStatus ? e.set("loaded") : void 0
        }
      }(this));
      null == r.error && (r.error = function(e) {
        return function(t, i) {
          return r.setStatus ? e.set("error") : void 0
        }
      }(this));
      null == r.timeout && (r.timeout = 3e4);
      r.setStatus && this.set("loading");
      return t(e) ? this.loadClient(e, r) : this.loadHttp(e, r)
    };
    e.prototype.set = function(e, t) {
      var r, i, n, o;
      null == t && (t = {});
      o = this.alreadySentStatus(e);
      i = {
        status: e,
        payload: t,
        when: Date.now(),
        sent: !1
      };
      if (null != o && ("hello" === (n = !e) || "resize" === n)) {
        r = Math.abs(Date.now() - o.when);
        return debug("Already set status '" + e + "' " + r + "ms ago")
      }
      o && "hello" === e || this.messages.push(i);
      "ready" === e && this.onReady();
      if (!this.requireAck(e)) {
        i.sent = !0;
        return this.post({
          type: "render",
          body: e,
          payload: t
        })
      }
    };
    e.prototype.alreadySentStatus = function(e) {
      var t;
      t = this.messages.filter(function(t) {
        return function(t) {
          return t.status === e
        }
      }(this));
      return t[0]
    };
    e.prototype.get = function() {
      return this.messages[this.messages.length - 1].status
    };
    e.prototype.prepareData = function(e, t) {
      var r, i;
      i = e;
      if (t.json && "string" == typeof e) try {
        i = JSON.parse(e)
      } catch (n) {
        r = n;
        debug("Error while trying to parse initial JSON: " + r);
        debug("Attempting to parse htmlDecoded JSON");
        i = JSON.parse(_.unescape(e))
      }
      return i
    };
    e.prototype.loadClient = function(e, r) {
      var i, o, a, s;
      if (!t(e)) throw new Error("Not a client URL: " + e);
      a = this.sentData.have, o = a[0], s = 2 <= a.length ? n.call(a, 1) : [];
      this.sentData.have = s;
      if (null != o) {
        r.before(void 0, r);
        r.setStatus && this.set("loaded");
        return r.success(this.prepareData(o, r))
      }
      r.before(void 0, r);
      i = {
        timeout: r.timeout,
        created: Date.now(),
        success: function(e) {
          return function(t) {
            return r.success(e.prepareData(t, r))
          }
        }(this),
        error: r.error
      };
      this.sentData.waiting.push(i);
      return null != i.timeout ? setTimeout(function(e) {
        return function() {
          var t;
          t = e.sentData.waiting.indexOf(i);
          if (-1 !== t) {
            e.sentData.waiting = e.sentData.waiting.slice(0, t).concat(e.sentData.waiting.slice(t + 1));
            r.setStatus && e.set("error");
            return i.error(new Error("Timeout " + i.timeout + "ms"))
          }
        }
      }(this), i.timeout) : void 0
    };
    e.prototype.loadHttpIe = function(e, t) {
      var r, i, n, o, a;
      $.support.cors = !0;
      a = new XDomainRequest;
      n = function(e) {
        return function() {
          var r;
          r = a.responseText;
          t.setStatus && e.set("loaded");
          return t.success(e.prepareData(r, t), a)
        }
      }(this);
      o = function(e) {
        return function() {
          return i("Request timed out after " + option.timeout + "ms")
        }
      }(this);
      r = function(e) {
        return function() {
          return i("Crossdomain request failed.")
        }
      }(this);
      i = function(r) {
        return function(i) {
          t.attempts -= 1;
          if (t.attempts > 0) {
            debug("Request didn't work, going to retry up to " + t.attempts + " more times");
            return setTimeout(function() {
              return r.loadHttpIE(e, t)
            }, 1e3)
          }
          t.setStatus && r.set("error");
          r.submitGiveup();
          return t.error(new Error(i), a)
        }
      }(this);
      a.onload = n;
      a.ontimeout = o;
      a.onerror = r;
      a.timeout = t.timeout || 5e3;
      a.open("get", e);
      return a.send()
    };
    e.prototype.loadHttp = function(e, t) {
      return null != window.XDomainRequest ? this.loadHttpIe(e, t) : $.ajax({
        url: e,
        crossDomain: !0,
        method: "GET",
        timeout: t.timeout,
        beforeSend: t.before,
        success: function(e) {
          return function(r, i, n) {
            r = e.prepareData(r, t);
            t.setStatus && e.set("loaded");
            return t.success(r, n)
          }
        }(this),
        error: function(r) {
          return function(i, n, o) {
            t.attempts -= 1;
            if (t.attempts > 0) {
              debug("Couldn't load, going to retry up to " + t.attempts + " more times");
              return setTimeout(function() {
                return r.loadHttp(e, t)
              }, 1e3)
            }
            t.setStatus && r.set("error");
            r.submitGiveup();
            return t.error(o, i)
          }
        }(this)
      })
    };
    e.prototype.post = function(e) {
      null == e.identity && (e.identity = this.identity);
      if (this.haveParent()) {
        debug("Render Status:", e);
        return window.parent.postMessage(JSON.stringify(e), "*")
      }
      return debug("WARNING: No window.parent: postMessage:", e)
    };
    e.prototype.onReady = function() {
      var e, t, r, i, n, o;
      n = {};
      o = this.messages;
      t = function(e) {
        return n[e.status] = e.when
      };
      for (r = 0, i = o.length; i > r; r++) {
        e = o[r];
        t(e)
      }
      return this.submitTiming("local", n)
    };
    e.prototype.onAck = function() {
      var e, t, r, i, n;
      debug("Ack'd, sending saved messages");
      this.acked = !0;
      i = this.messages;
      n = [];
      for (e = 0, t = i.length; t > e; e++) {
        r = i[e];
        if (r.sent) n.push(void 0);
        else {
          r.sent = !0;
          n.push(this.post({
            type: "render",
            body: r.status,
            payload: r.payload
          }))
        }
      }
      return n
    };
    e.prototype.requireAck = function(e) {
      null == e && (e = "");
      return !this.acked && "hello" !== e
    };
    e.prototype.submitTiming = function(e, t) {
      var r;
      debug("Got " + e + " timing: " + this.format + " => " + JSON.stringify(t));
      r = $("body").data("render-url");
      return $.ajax({
        type: "POST",
        data: {
          timing: t
        },
        url: r + "/stats/timing/" + e + "/" + this.format + "/",
        success: function(t) {
          return function(t, r, i) {
            return debug("Sent " + e + " timing info:", t)
          }
        }(this),
        error: function(e) {
          return function(e, t, r) {
            return debug("Failed to send remote timing info:", r)
          }
        }(this)
      })
    };
    e.prototype.submitGiveup = function() {
      var e;
      e = $("body").data("render-url");
      return $.ajax({
        type: "POST",
        url: e + "/stats/" + this.format + "/gave_up",
        success: function(e) {
          return function(e, t, r) {
            return debug("Sent give up status info.")
          }
        }(this),
        error: function(e) {
          return function(e, t, r) {
            return debug("Failed to send give up info:", r)
          }
        }(this)
      })
    };
    e.prototype.handleData = function(e) {
      var t, r, i;
      if (this.sentData.waiting.length) {
        r = this.sentData.waiting, t = r[0], i = 2 <= r.length ? n.call(r, 1) : [];
        this.sentData.waiting = i;
        this.set("loaded");
        return t.success(e)
      }
      return this.sentData.have.push(e)
    };
    e.prototype.handleCmd = function(e, t) {
      switch (e) {
        case "branding":
          return $(document.body).removeClass("is-embedded", t);
        case "ack":
          if (this.requireAck()) return this.onAck();
          break;
        default:
          return debug("Invalid command '" + e + "':", t)
      }
    };
    e.prototype.handleMessage = function(e) {
      var t, r, i, n, o, a, s, l, c, h, u, f, p;
      a = $("body").data("github-hostname");
      p = new RegExp("." + a + "$");
      c = e.originalEvent, n = c.data, l = c.origin;
      if (n && l && (p.test(l) || "github.com" === l.toLowerCase())) {
        h = function() {
          try {
            return JSON.parse(n)
          } catch (t) {
            e = t;
            return n
          }
        }(), f = h.type, s = h.identity, r = h.body;
        if (f && r) {
          if (null != s && s !== this.identity) return debug("Message has identity '" + s + "' != '" + this.identity + "', which is mine");
          switch (f) {
            case "render:timing":
              u = r.timing, o = r.format;
              return u && o ? o !== this.format ? debug("Format mismatch: got '" + o + "' expected '" + this.format + "'") : this.submitTiming("remote", u) : debug("Malformed timing message:", r);
            case "render:cmd":
              i = r.cmd;
              t = r[i];
              if (null != i && null != t) return this.handleCmd(i, t);
              break;
            case "render:data":
              return this.handleData(r);
            default:
              return debug("Unknown message type: " + f)
          }
        }
      }
    };
    e.prototype.haveParent = function() {
      return window.parent !== window
    };
    e.prototype.handleLink = function(e) {
      var t, r, i, n;
      t = $(e.target);
      n = t.attr("href");
      if (null != n ? n.length : void 0) {
        if (n.match(/^\#/)) return !0;
        e.preventDefault();
        try {
          return this.navigateTo(n)
        } catch (o) {
          e = o;
          debug("Navigation to '" + n + "' failed:", e);
          r = "failed";
          i = 500;
          t.addClass(r);
          return setTimeout(function() {
            return t.removeClass(r)
          }, i)
        }
      }
    };
    e.prototype.navigateTo = function(e) {
      return e.match(/^https?:\/\//) || e.match(/^\/\//) ? this.navigateDirect(e) : this.navigateRelative(e)
    };
    e.prototype.navigateRelative = function(e) {
      var t, r, i, n, a, s, l, c;
      t = $(".js-render-shell");
      l = $("body").data("github-hostname");
      a = t.data("document-nwo");
      i = t.data("document-commit");
      s = t.data("document-path");
      r = function() {
        return e.match(/^\//) ? "" : o.call(s, "/") < 0 ? "/" : "/" + s.slice(0, +s.lastIndexOf("/") + 1 || 9e9)
      };
      if (!((null != l ? l.length : void 0) && (null != a ? a.length : void 0) && (null != s ? s.length : void 0) && (null != i ? i.length : void 0))) {
        n = "Cannot construct relative link, missing:";
        (null != l ? l.length : void 0) || (n += " root");
        (null != a ? a.length : void 0) || (n += " nwo");
        (null != s ? s.length : void 0) || (n += " path");
        (null != i ? i.length : void 0) || (n += " commit");
        throw new Error(n)
      }
      c = "//" + l + "/" + a + "/blob/" + i + r() + e;
      return this.navigateDirect(c)
    };
    e.prototype.navigateDirect = function(e) {
      return this.haveParent() ? window.top.location.href = e : window.location.href = e
    };
    return e
  }()
}).call(this);
var THREE = THREE || {
  REVISION: "58"
};
self.console = self.console || {
  info: function() {},
  log: function() {},
  debug: function() {},
  warn: function() {},
  error: function() {}
};
self.Int32Array = self.Int32Array || Array;
self.Float32Array = self.Float32Array || Array;
String.prototype.trim = String.prototype.trim || function() {
  return this.replace(/^\s+|\s+$/g, "")
};
THREE.extend = function(e, t) {
  if (Object.keys)
    for (var r = Object.keys(t), i = 0, n = r.length; n > i; i++) {
      var o = r[i];
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o))
    } else {
      var a = {}.hasOwnProperty;
      for (var o in t) a.call(t, o) && (e[o] = t[o])
    }
  return e
};
! function() {
  for (var e = 0, t = ["ms", "moz", "webkit", "o"], r = 0; r < t.length && !window.requestAnimationFrame; ++r) {
    window.requestAnimationFrame = window[t[r] + "RequestAnimationFrame"];
    window.cancelAnimationFrame = window[t[r] + "CancelAnimationFrame"] || window[t[r] + "CancelRequestAnimationFrame"]
  }
  void 0 === window.requestAnimationFrame && (window.requestAnimationFrame = function(t) {
    var r = Date.now(),
      i = Math.max(0, 16 - (r - e)),
      n = window.setTimeout(function() {
        t(r + i)
      }, i);
    e = r + i;
    return n
  });
  window.cancelAnimationFrame = window.cancelAnimationFrame || function(e) {
    window.clearTimeout(e)
  }
}();
THREE.CullFaceNone = 0;
THREE.CullFaceBack = 1;
THREE.CullFaceFront = 2;
THREE.CullFaceFrontBack = 3;
THREE.FrontFaceDirectionCW = 0;
THREE.FrontFaceDirectionCCW = 1;
THREE.BasicShadowMap = 0;
THREE.PCFShadowMap = 1;
THREE.PCFSoftShadowMap = 2;
THREE.FrontSide = 0;
THREE.BackSide = 1;
THREE.DoubleSide = 2;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NoBlending = 0;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.CustomBlending = 5;
THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.ZeroFactor = 200;
THREE.OneFactor = 201;
THREE.SrcColorFactor = 202;
THREE.OneMinusSrcColorFactor = 203;
THREE.SrcAlphaFactor = 204;
THREE.OneMinusSrcAlphaFactor = 205;
THREE.DstAlphaFactor = 206;
THREE.OneMinusDstAlphaFactor = 207;
THREE.DstColorFactor = 208;
THREE.OneMinusDstColorFactor = 209;
THREE.SrcAlphaSaturateFactor = 210;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.AddOperation = 2;
THREE.UVMapping = function() {};
THREE.CubeReflectionMapping = function() {};
THREE.CubeRefractionMapping = function() {};
THREE.SphericalReflectionMapping = function() {};
THREE.SphericalRefractionMapping = function() {};
THREE.RepeatWrapping = 1e3;
THREE.ClampToEdgeWrapping = 1001;
THREE.MirroredRepeatWrapping = 1002;
THREE.NearestFilter = 1003;
THREE.NearestMipMapNearestFilter = 1004;
THREE.NearestMipMapLinearFilter = 1005;
THREE.LinearFilter = 1006;
THREE.LinearMipMapNearestFilter = 1007;
THREE.LinearMipMapLinearFilter = 1008;
THREE.UnsignedByteType = 1009;
THREE.ByteType = 1010;
THREE.ShortType = 1011;
THREE.UnsignedShortType = 1012;
THREE.IntType = 1013;
THREE.UnsignedIntType = 1014;
THREE.FloatType = 1015;
THREE.UnsignedShort4444Type = 1016;
THREE.UnsignedShort5551Type = 1017;
THREE.UnsignedShort565Type = 1018;
THREE.AlphaFormat = 1019;
THREE.RGBFormat = 1020;
THREE.RGBAFormat = 1021;
THREE.LuminanceFormat = 1022;
THREE.LuminanceAlphaFormat = 1023;
THREE.RGB_S3TC_DXT1_Format = 2001;
THREE.RGBA_S3TC_DXT1_Format = 2002;
THREE.RGBA_S3TC_DXT3_Format = 2003;
THREE.RGBA_S3TC_DXT5_Format = 2004;
THREE.Color = function(e) {
  void 0 !== e && this.set(e);
  return this
};
THREE.Color.prototype = {
  constructor: THREE.Color,
  r: 1,
  g: 1,
  b: 1,
  set: function(e) {
    e instanceof THREE.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e);
    return this
  },
  setHex: function(e) {
    e = Math.floor(e);
    this.r = (e >> 16 & 255) / 255;
    this.g = (e >> 8 & 255) / 255;
    this.b = (255 & e) / 255;
    return this
  },
  setRGB: function(e, t, r) {
    this.r = e;
    this.g = t;
    this.b = r;
    return this
  },
  setHSL: function(e, t, r) {
    if (0 === t) this.r = this.g = this.b = r;
    else {
      var i = function(e, t, r) {
          0 > r && (r += 1);
          r > 1 && (r -= 1);
          return 1 / 6 > r ? e + 6 * (t - e) * r : .5 > r ? t : 2 / 3 > r ? e + 6 * (t - e) * (2 / 3 - r) : e
        },
        n = .5 >= r ? r * (1 + t) : r + t - r * t,
        o = 2 * r - n;
      this.r = i(o, n, e + 1 / 3);
      this.g = i(o, n, e);
      this.b = i(o, n, e - 1 / 3)
    }
    return this
  },
  setStyle: function(e) {
    if (/^rgb\((\d+),(\d+),(\d+)\)$/i.test(e)) {
      var t = /^rgb\((\d+),(\d+),(\d+)\)$/i.exec(e);
      this.r = Math.min(255, parseInt(t[1], 10)) / 255;
      this.g = Math.min(255, parseInt(t[2], 10)) / 255;
      this.b = Math.min(255, parseInt(t[3], 10)) / 255;
      return this
    }
    if (/^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.test(e)) {
      var t = /^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.exec(e);
      this.r = Math.min(100, parseInt(t[1], 10)) / 100;
      this.g = Math.min(100, parseInt(t[2], 10)) / 100;
      this.b = Math.min(100, parseInt(t[3], 10)) / 100;
      return this
    }
    if (/^\#([0-9a-f]{6})$/i.test(e)) {
      var t = /^\#([0-9a-f]{6})$/i.exec(e);
      this.setHex(parseInt(t[1], 16));
      return this
    }
    if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)) {
      var t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e);
      this.setHex(parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16));
      return this
    }
    if (/^(\w+)$/i.test(e)) {
      this.setHex(THREE.ColorKeywords[e]);
      return this
    }
  },
  copy: function(e) {
    this.r = e.r;
    this.g = e.g;
    this.b = e.b;
    return this
  },
  copyGammaToLinear: function(e) {
    this.r = e.r * e.r;
    this.g = e.g * e.g;
    this.b = e.b * e.b;
    return this
  },
  copyLinearToGamma: function(e) {
    this.r = Math.sqrt(e.r);
    this.g = Math.sqrt(e.g);
    this.b = Math.sqrt(e.b);
    return this
  },
  convertGammaToLinear: function() {
    var e = this.r,
      t = this.g,
      r = this.b;
    this.r = e * e;
    this.g = t * t;
    this.b = r * r;
    return this
  },
  convertLinearToGamma: function() {
    this.r = Math.sqrt(this.r);
    this.g = Math.sqrt(this.g);
    this.b = Math.sqrt(this.b);
    return this
  },
  getHex: function() {
    return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
  },
  getHexString: function() {
    return ("000000" + this.getHex().toString(16)).slice(-6)
  },
  getHSL: function() {
    var e = {
      h: 0,
      s: 0,
      l: 0
    };
    return function() {
      var t, r, i = this.r,
        n = this.g,
        o = this.b,
        a = Math.max(i, n, o),
        s = Math.min(i, n, o),
        l = (s + a) / 2;
      if (s === a) {
        t = 0;
        r = 0
      } else {
        var c = a - s;
        r = .5 >= l ? c / (a + s) : c / (2 - a - s);
        switch (a) {
          case i:
            t = (n - o) / c + (o > n ? 6 : 0);
            break;
          case n:
            t = (o - i) / c + 2;
            break;
          case o:
            t = (i - n) / c + 4
        }
        t /= 6
      }
      e.h = t;
      e.s = r;
      e.l = l;
      return e
    }
  }(),
  getStyle: function() {
    return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
  },
  offsetHSL: function(e, t, r) {
    var i = this.getHSL();
    i.h += e;
    i.s += t;
    i.l += r;
    this.setHSL(i.h, i.s, i.l);
    return this
  },
  add: function(e) {
    this.r += e.r;
    this.g += e.g;
    this.b += e.b;
    return this
  },
  addColors: function(e, t) {
    this.r = e.r + t.r;
    this.g = e.g + t.g;
    this.b = e.b + t.b;
    return this
  },
  addScalar: function(e) {
    this.r += e;
    this.g += e;
    this.b += e;
    return this
  },
  multiply: function(e) {
    this.r *= e.r;
    this.g *= e.g;
    this.b *= e.b;
    return this
  },
  multiplyScalar: function(e) {
    this.r *= e;
    this.g *= e;
    this.b *= e;
    return this
  },
  lerp: function(e, t) {
    this.r += (e.r - this.r) * t;
    this.g += (e.g - this.g) * t;
    this.b += (e.b - this.b) * t;
    return this
  },
  equals: function(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b
  },
  clone: function() {
    return (new THREE.Color).setRGB(this.r, this.g, this.b)
  }
};
THREE.ColorKeywords = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
THREE.Quaternion = function(e, t, r, i) {
  this.x = e || 0;
  this.y = t || 0;
  this.z = r || 0;
  this.w = void 0 !== i ? i : 1
};
THREE.Quaternion.prototype = {
  constructor: THREE.Quaternion,
  set: function(e, t, r, i) {
    this.x = e;
    this.y = t;
    this.z = r;
    this.w = i;
    return this
  },
  copy: function(e) {
    this.x = e.x;
    this.y = e.y;
    this.z = e.z;
    this.w = e.w;
    return this
  },
  setFromEuler: function(e, t) {
    var r = Math.cos(e.x / 2),
      i = Math.cos(e.y / 2),
      n = Math.cos(e.z / 2),
      o = Math.sin(e.x / 2),
      a = Math.sin(e.y / 2),
      s = Math.sin(e.z / 2);
    if (void 0 === t || "XYZ" === t) {
      this.x = o * i * n + r * a * s;
      this.y = r * a * n - o * i * s;
      this.z = r * i * s + o * a * n;
      this.w = r * i * n - o * a * s
    } else if ("YXZ" === t) {
      this.x = o * i * n + r * a * s;
      this.y = r * a * n - o * i * s;
      this.z = r * i * s - o * a * n;
      this.w = r * i * n + o * a * s
    } else if ("ZXY" === t) {
      this.x = o * i * n - r * a * s;
      this.y = r * a * n + o * i * s;
      this.z = r * i * s + o * a * n;
      this.w = r * i * n - o * a * s
    } else if ("ZYX" === t) {
      this.x = o * i * n - r * a * s;
      this.y = r * a * n + o * i * s;
      this.z = r * i * s - o * a * n;
      this.w = r * i * n + o * a * s
    } else if ("YZX" === t) {
      this.x = o * i * n + r * a * s;
      this.y = r * a * n + o * i * s;
      this.z = r * i * s - o * a * n;
      this.w = r * i * n - o * a * s
    } else if ("XZY" === t) {
      this.x = o * i * n - r * a * s;
      this.y = r * a * n - o * i * s;
      this.z = r * i * s + o * a * n;
      this.w = r * i * n + o * a * s
    }
    return this
  },
  setFromAxisAngle: function(e, t) {
    var r = t / 2,
      i = Math.sin(r);
    this.x = e.x * i;
    this.y = e.y * i;
    this.z = e.z * i;
    this.w = Math.cos(r);
    return this
  },
  setFromRotationMatrix: function(e) {
    var t, r = e.elements,
      i = r[0],
      n = r[4],
      o = r[8],
      a = r[1],
      s = r[5],
      l = r[9],
      c = r[2],
      h = r[6],
      u = r[10],
      f = i + s + u;
    if (f > 0) {
      t = .5 / Math.sqrt(f + 1);
      this.w = .25 / t;
      this.x = (h - l) * t;
      this.y = (o - c) * t;
      this.z = (a - n) * t
    } else if (i > s && i > u) {
      t = 2 * Math.sqrt(1 + i - s - u);
      this.w = (h - l) / t;
      this.x = .25 * t;
      this.y = (n + a) / t;
      this.z = (o + c) / t
    } else if (s > u) {
      t = 2 * Math.sqrt(1 + s - i - u);
      this.w = (o - c) / t;
      this.x = (n + a) / t;
      this.y = .25 * t;
      this.z = (l + h) / t
    } else {
      t = 2 * Math.sqrt(1 + u - i - s);
      this.w = (a - n) / t;
      this.x = (o + c) / t;
      this.y = (l + h) / t;
      this.z = .25 * t
    }
    return this
  },
  inverse: function() {
    this.conjugate().normalize();
    return this
  },
  conjugate: function() {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    return this
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
  },
  normalize: function() {
    var e = this.length();
    if (0 === e) {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.w = 1
    } else {
      e = 1 / e;
      this.x = this.x * e;
      this.y = this.y * e;
      this.z = this.z * e;
      this.w = this.w * e
    }
    return this
  },
  multiply: function(e, t) {
    if (void 0 !== t) {
      console.warn("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.");
      return this.multiplyQuaternions(e, t)
    }
    return this.multiplyQuaternions(this, e)
  },
  multiplyQuaternions: function(e, t) {
    var r = e.x,
      i = e.y,
      n = e.z,
      o = e.w,
      a = t.x,
      s = t.y,
      l = t.z,
      c = t.w;
    this.x = r * c + o * a + i * l - n * s;
    this.y = i * c + o * s + n * a - r * l;
    this.z = n * c + o * l + r * s - i * a;
    this.w = o * c - r * a - i * s - n * l;
    return this
  },
  multiplyVector3: function(e) {
    console.warn("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
    return e.applyQuaternion(this)
  },
  slerp: function(e, t) {
    var r = this.x,
      i = this.y,
      n = this.z,
      o = this.w,
      a = o * e.w + r * e.x + i * e.y + n * e.z;
    if (0 > a) {
      this.w = -e.w;
      this.x = -e.x;
      this.y = -e.y;
      this.z = -e.z;
      a = -a
    } else this.copy(e);
    if (a >= 1) {
      this.w = o;
      this.x = r;
      this.y = i;
      this.z = n;
      return this
    }
    var s = Math.acos(a),
      l = Math.sqrt(1 - a * a);
    if (Math.abs(l) < .001) {
      this.w = .5 * (o + this.w);
      this.x = .5 * (r + this.x);
      this.y = .5 * (i + this.y);
      this.z = .5 * (n + this.z);
      return this
    }
    var c = Math.sin((1 - t) * s) / l,
      h = Math.sin(t * s) / l;
    this.w = o * c + this.w * h;
    this.x = r * c + this.x * h;
    this.y = i * c + this.y * h;
    this.z = n * c + this.z * h;
    return this
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
  },
  fromArray: function(e) {
    this.x = e[0];
    this.y = e[1];
    this.z = e[2];
    this.w = e[3];
    return this
  },
  toArray: function() {
    return [this.x, this.y, this.z, this.w]
  },
  clone: function() {
    return new THREE.Quaternion(this.x, this.y, this.z, this.w)
  }
};
THREE.Quaternion.slerp = function(e, t, r, i) {
  return r.copy(e).slerp(t, i)
};
THREE.Vector2 = function(e, t) {
  this.x = e || 0;
  this.y = t || 0
};
THREE.Vector2.prototype = {
  constructor: THREE.Vector2,
  set: function(e, t) {
    this.x = e;
    this.y = t;
    return this
  },
  setX: function(e) {
    this.x = e;
    return this
  },
  setY: function(e) {
    this.y = e;
    return this
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e)
    }
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e)
    }
  },
  copy: function(e) {
    this.x = e.x;
    this.y = e.y;
    return this
  },
  add: function(e, t) {
    if (void 0 !== t) {
      console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
      return this.addVectors(e, t)
    }
    this.x += e.x;
    this.y += e.y;
    return this
  },
  addVectors: function(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    return this
  },
  addScalar: function(e) {
    this.x += e;
    this.y += e;
    return this
  },
  sub: function(e, t) {
    if (void 0 !== t) {
      console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
      return this.subVectors(e, t)
    }
    this.x -= e.x;
    this.y -= e.y;
    return this
  },
  subVectors: function(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    return this
  },
  multiplyScalar: function(e) {
    this.x *= e;
    this.y *= e;
    return this
  },
  divideScalar: function(e) {
    if (0 !== e) {
      this.x /= e;
      this.y /= e
    } else this.set(0, 0);
    return this
  },
  min: function(e) {
    this.x > e.x && (this.x = e.x);
    this.y > e.y && (this.y = e.y);
    return this
  },
  max: function(e) {
    this.x < e.x && (this.x = e.x);
    this.y < e.y && (this.y = e.y);
    return this
  },
  clamp: function(e, t) {
    this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x);
    this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y);
    return this
  },
  negate: function() {
    return this.multiplyScalar(-1)
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  },
  normalize: function() {
    return this.divideScalar(this.length())
  },
  distanceTo: function(e) {
    return Math.sqrt(this.distanceToSquared(e))
  },
  distanceToSquared: function(e) {
    var t = this.x - e.x,
      r = this.y - e.y;
    return t * t + r * r
  },
  setLength: function(e) {
    var t = this.length();
    0 !== t && e !== t && this.multiplyScalar(e / t);
    return this
  },
  lerp: function(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    return this
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y
  },
  fromArray: function(e) {
    this.x = e[0];
    this.y = e[1];
    return this
  },
  toArray: function() {
    return [this.x, this.y]
  },
  clone: function() {
    return new THREE.Vector2(this.x, this.y)
  }
};
THREE.Vector3 = function(e, t, r) {
  this.x = e || 0;
  this.y = t || 0;
  this.z = r || 0
};
THREE.Vector3.prototype = {
  constructor: THREE.Vector3,
  set: function(e, t, r) {
    this.x = e;
    this.y = t;
    this.z = r;
    return this
  },
  setX: function(e) {
    this.x = e;
    return this
  },
  setY: function(e) {
    this.y = e;
    return this
  },
  setZ: function(e) {
    this.z = e;
    return this
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e)
    }
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e)
    }
  },
  copy: function(e) {
    this.x = e.x;
    this.y = e.y;
    this.z = e.z;
    return this
  },
  add: function(e, t) {
    if (void 0 !== t) {
      console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
      return this.addVectors(e, t)
    }
    this.x += e.x;
    this.y += e.y;
    this.z += e.z;
    return this
  },
  addScalar: function(e) {
    this.x += e;
    this.y += e;
    this.z += e;
    return this
  },
  addVectors: function(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    this.z = e.z + t.z;
    return this
  },
  sub: function(e, t) {
    if (void 0 !== t) {
      console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
      return this.subVectors(e, t)
    }
    this.x -= e.x;
    this.y -= e.y;
    this.z -= e.z;
    return this
  },
  subVectors: function(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    this.z = e.z - t.z;
    return this
  },
  multiply: function(e, t) {
    if (void 0 !== t) {
      console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.");
      return this.multiplyVectors(e, t)
    }
    this.x *= e.x;
    this.y *= e.y;
    this.z *= e.z;
    return this
  },
  multiplyScalar: function(e) {
    this.x *= e;
    this.y *= e;
    this.z *= e;
    return this
  },
  multiplyVectors: function(e, t) {
    this.x = e.x * t.x;
    this.y = e.y * t.y;
    this.z = e.z * t.z;
    return this
  },
  applyMatrix3: function(e) {
    var t = this.x,
      r = this.y,
      i = this.z,
      n = e.elements;
    this.x = n[0] * t + n[3] * r + n[6] * i;
    this.y = n[1] * t + n[4] * r + n[7] * i;
    this.z = n[2] * t + n[5] * r + n[8] * i;
    return this
  },
  applyMatrix4: function(e) {
    var t = this.x,
      r = this.y,
      i = this.z,
      n = e.elements;
    this.x = n[0] * t + n[4] * r + n[8] * i + n[12];
    this.y = n[1] * t + n[5] * r + n[9] * i + n[13];
    this.z = n[2] * t + n[6] * r + n[10] * i + n[14];
    return this
  },
  applyProjection: function(e) {
    var t = this.x,
      r = this.y,
      i = this.z,
      n = e.elements,
      o = 1 / (n[3] * t + n[7] * r + n[11] * i + n[15]);
    this.x = (n[0] * t + n[4] * r + n[8] * i + n[12]) * o;
    this.y = (n[1] * t + n[5] * r + n[9] * i + n[13]) * o;
    this.z = (n[2] * t + n[6] * r + n[10] * i + n[14]) * o;
    return this
  },
  applyQuaternion: function(e) {
    var t = this.x,
      r = this.y,
      i = this.z,
      n = e.x,
      o = e.y,
      a = e.z,
      s = e.w,
      l = s * t + o * i - a * r,
      c = s * r + a * t - n * i,
      h = s * i + n * r - o * t,
      u = -n * t - o * r - a * i;
    this.x = l * s + u * -n + c * -a - h * -o;
    this.y = c * s + u * -o + h * -n - l * -a;
    this.z = h * s + u * -a + l * -o - c * -n;
    return this
  },
  transformDirection: function(e) {
    var t = this.x,
      r = this.y,
      i = this.z,
      n = e.elements;
    this.x = n[0] * t + n[4] * r + n[8] * i;
    this.y = n[1] * t + n[5] * r + n[9] * i;
    this.z = n[2] * t + n[6] * r + n[10] * i;
    this.normalize();
    return this
  },
  divide: function(e) {
    this.x /= e.x;
    this.y /= e.y;
    this.z /= e.z;
    return this
  },
  divideScalar: function(e) {
    if (0 !== e) {
      this.x /= e;
      this.y /= e;
      this.z /= e
    } else {
      this.x = 0;
      this.y = 0;
      this.z = 0
    }
    return this
  },
  min: function(e) {
    this.x > e.x && (this.x = e.x);
    this.y > e.y && (this.y = e.y);
    this.z > e.z && (this.z = e.z);
    return this
  },
  max: function(e) {
    this.x < e.x && (this.x = e.x);
    this.y < e.y && (this.y = e.y);
    this.z < e.z && (this.z = e.z);
    return this
  },
  clamp: function(e, t) {
    this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x);
    this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y);
    this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z);
    return this
  },
  negate: function() {
    return this.multiplyScalar(-1)
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  },
  lengthManhattan: function() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
  },
  normalize: function() {
    return this.divideScalar(this.length())
  },
  setLength: function(e) {
    var t = this.length();
    0 !== t && e !== t && this.multiplyScalar(e / t);
    return this
  },
  lerp: function(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    this.z += (e.z - this.z) * t;
    return this
  },
  cross: function(e, t) {
    if (void 0 !== t) {
      console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.");
      return this.crossVectors(e, t)
    }
    var r = this.x,
      i = this.y,
      n = this.z;
    this.x = i * e.z - n * e.y;
    this.y = n * e.x - r * e.z;
    this.z = r * e.y - i * e.x;
    return this
  },
  crossVectors: function(e, t) {
    this.x = e.y * t.z - e.z * t.y;
    this.y = e.z * t.x - e.x * t.z;
    this.z = e.x * t.y - e.y * t.x;
    return this
  },
  angleTo: function(e) {
    var t = this.dot(e) / (this.length() * e.length());
    return Math.acos(THREE.Math.clamp(t, -1, 1))
  },
  distanceTo: function(e) {
    return Math.sqrt(this.distanceToSquared(e))
  },
  distanceToSquared: function(e) {
    var t = this.x - e.x,
      r = this.y - e.y,
      i = this.z - e.z;
    return t * t + r * r + i * i
  },
  setEulerFromRotationMatrix: function(e, t) {
    function r(e) {
      return Math.min(Math.max(e, -1), 1)
    }
    var i = e.elements,
      n = i[0],
      o = i[4],
      a = i[8],
      s = i[1],
      l = i[5],
      c = i[9],
      h = i[2],
      u = i[6],
      f = i[10];
    if (void 0 === t || "XYZ" === t) {
      this.y = Math.asin(r(a));
      if (Math.abs(a) < .99999) {
        this.x = Math.atan2(-c, f);
        this.z = Math.atan2(-o, n)
      } else {
        this.x = Math.atan2(u, l);
        this.z = 0
      }
    } else if ("YXZ" === t) {
      this.x = Math.asin(-r(c));
      if (Math.abs(c) < .99999) {
        this.y = Math.atan2(a, f);
        this.z = Math.atan2(s, l)
      } else {
        this.y = Math.atan2(-h, n);
        this.z = 0
      }
    } else if ("ZXY" === t) {
      this.x = Math.asin(r(u));
      if (Math.abs(u) < .99999) {
        this.y = Math.atan2(-h, f);
        this.z = Math.atan2(-o, l)
      } else {
        this.y = 0;
        this.z = Math.atan2(s, n)
      }
    } else if ("ZYX" === t) {
      this.y = Math.asin(-r(h));
      if (Math.abs(h) < .99999) {
        this.x = Math.atan2(u, f);
        this.z = Math.atan2(s, n)
      } else {
        this.x = 0;
        this.z = Math.atan2(-o, l)
      }
    } else if ("YZX" === t) {
      this.z = Math.asin(r(s));
      if (Math.abs(s) < .99999) {
        this.x = Math.atan2(-c, l);
        this.y = Math.atan2(-h, n)
      } else {
        this.x = 0;
        this.y = Math.atan2(a, f)
      }
    } else if ("XZY" === t) {
      this.z = Math.asin(-r(o));
      if (Math.abs(o) < .99999) {
        this.x = Math.atan2(u, l);
        this.y = Math.atan2(a, n)
      } else {
        this.x = Math.atan2(-c, f);
        this.y = 0
      }
    }
    return this
  },
  setEulerFromQuaternion: function(e, t) {
    function r(e) {
      return Math.min(Math.max(e, -1), 1)
    }
    var i = e.x * e.x,
      n = e.y * e.y,
      o = e.z * e.z,
      a = e.w * e.w;
    if (void 0 === t || "XYZ" === t) {
      this.x = Math.atan2(2 * (e.x * e.w - e.y * e.z), a - i - n + o);
      this.y = Math.asin(r(2 * (e.x * e.z + e.y * e.w)));
      this.z = Math.atan2(2 * (e.z * e.w - e.x * e.y), a + i - n - o)
    } else if ("YXZ" === t) {
      this.x = Math.asin(r(2 * (e.x * e.w - e.y * e.z)));
      this.y = Math.atan2(2 * (e.x * e.z + e.y * e.w), a - i - n + o);
      this.z = Math.atan2(2 * (e.x * e.y + e.z * e.w), a - i + n - o)
    } else if ("ZXY" === t) {
      this.x = Math.asin(r(2 * (e.x * e.w + e.y * e.z)));
      this.y = Math.atan2(2 * (e.y * e.w - e.z * e.x), a - i - n + o);
      this.z = Math.atan2(2 * (e.z * e.w - e.x * e.y), a - i + n - o)
    } else if ("ZYX" === t) {
      this.x = Math.atan2(2 * (e.x * e.w + e.z * e.y), a - i - n + o);
      this.y = Math.asin(r(2 * (e.y * e.w - e.x * e.z)));
      this.z = Math.atan2(2 * (e.x * e.y + e.z * e.w), a + i - n - o)
    } else if ("YZX" === t) {
      this.x = Math.atan2(2 * (e.x * e.w - e.z * e.y), a - i + n - o);
      this.y = Math.atan2(2 * (e.y * e.w - e.x * e.z), a + i - n - o);
      this.z = Math.asin(r(2 * (e.x * e.y + e.z * e.w)))
    } else if ("XZY" === t) {
      this.x = Math.atan2(2 * (e.x * e.w + e.y * e.z), a - i + n - o);
      this.y = Math.atan2(2 * (e.x * e.z + e.y * e.w), a + i - n - o);
      this.z = Math.asin(r(2 * (e.z * e.w - e.x * e.y)))
    }
    return this
  },
  getPositionFromMatrix: function(e) {
    this.x = e.elements[12];
    this.y = e.elements[13];
    this.z = e.elements[14];
    return this
  },
  getScaleFromMatrix: function(e) {
    var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
      r = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
      i = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
    this.x = t;
    this.y = r;
    this.z = i;
    return this
  },
  getColumnFromMatrix: function(e, t) {
    var r = 4 * e,
      i = t.elements;
    this.x = i[r];
    this.y = i[r + 1];
    this.z = i[r + 2];
    return this
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z
  },
  fromArray: function(e) {
    this.x = e[0];
    this.y = e[1];
    this.z = e[2];
    return this
  },
  toArray: function() {
    return [this.x, this.y, this.z]
  },
  clone: function() {
    return new THREE.Vector3(this.x, this.y, this.z)
  }
};
THREE.extend(THREE.Vector3.prototype, {
  applyEuler: function() {
    var e = new THREE.Quaternion;
    return function(t, r) {
      var i = e.setFromEuler(t, r);
      this.applyQuaternion(i);
      return this
    }
  }(),
  applyAxisAngle: function() {
    var e = new THREE.Quaternion;
    return function(t, r) {
      var i = e.setFromAxisAngle(t, r);
      this.applyQuaternion(i);
      return this
    }
  }(),
  projectOnVector: function() {
    var e = new THREE.Vector3;
    return function(t) {
      e.copy(t).normalize();
      var r = this.dot(e);
      return this.copy(e).multiplyScalar(r)
    }
  }(),
  projectOnPlane: function() {
    var e = new THREE.Vector3;
    return function(t) {
      e.copy(this).projectOnVector(t);
      return this.sub(e)
    }
  }(),
  reflect: function() {
    var e = new THREE.Vector3;
    return function(t) {
      e.copy(this).projectOnVector(t).multiplyScalar(2);
      return this.subVectors(e, this)
    }
  }()
});
THREE.Vector4 = function(e, t, r, i) {
  this.x = e || 0;
  this.y = t || 0;
  this.z = r || 0;
  this.w = void 0 !== i ? i : 1
};
THREE.Vector4.prototype = {
  constructor: THREE.Vector4,
  set: function(e, t, r, i) {
    this.x = e;
    this.y = t;
    this.z = r;
    this.w = i;
    return this
  },
  setX: function(e) {
    this.x = e;
    return this
  },
  setY: function(e) {
    this.y = e;
    return this
  },
  setZ: function(e) {
    this.z = e;
    return this
  },
  setW: function(e) {
    this.w = e;
    return this
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e)
    }
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e)
    }
  },
  copy: function(e) {
    this.x = e.x;
    this.y = e.y;
    this.z = e.z;
    this.w = void 0 !== e.w ? e.w : 1;
    return this
  },
  add: function(e, t) {
    if (void 0 !== t) {
      console.warn("DEPRECATED: Vector4's .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
      return this.addVectors(e, t)
    }
    this.x += e.x;
    this.y += e.y;
    this.z += e.z;
    this.w += e.w;
    return this
  },
  addScalar: function(e) {
    this.x += e;
    this.y += e;
    this.z += e;
    this.w += e;
    return this
  },
  addVectors: function(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    this.z = e.z + t.z;
    this.w = e.w + t.w;
    return this
  },
  sub: function(e, t) {
    if (void 0 !== t) {
      console.warn("DEPRECATED: Vector4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
      return this.subVectors(e, t)
    }
    this.x -= e.x;
    this.y -= e.y;
    this.z -= e.z;
    this.w -= e.w;
    return this
  },
  subVectors: function(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    this.z = e.z - t.z;
    this.w = e.w - t.w;
    return this
  },
  multiplyScalar: function(e) {
    this.x *= e;
    this.y *= e;
    this.z *= e;
    this.w *= e;
    return this
  },
  applyMatrix4: function(e) {
    var t = this.x,
      r = this.y,
      i = this.z,
      n = this.w,
      o = e.elements;
    this.x = o[0] * t + o[4] * r + o[8] * i + o[12] * n;
    this.y = o[1] * t + o[5] * r + o[9] * i + o[13] * n;
    this.z = o[2] * t + o[6] * r + o[10] * i + o[14] * n;
    this.w = o[3] * t + o[7] * r + o[11] * i + o[15] * n;
    return this
  },
  divideScalar: function(e) {
    if (0 !== e) {
      this.x /= e;
      this.y /= e;
      this.z /= e;
      this.w /= e
    } else {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.w = 1
    }
    return this
  },
  setAxisAngleFromQuaternion: function(e) {
    this.w = 2 * Math.acos(e.w);
    var t = Math.sqrt(1 - e.w * e.w);
    if (1e-4 > t) {
      this.x = 1;
      this.y = 0;
      this.z = 0
    } else {
      this.x = e.x / t;
      this.y = e.y / t;
      this.z = e.z / t
    }
    return this
  },
  setAxisAngleFromRotationMatrix: function(e) {
    var t, r, i, n, o = .01,
      a = .1,
      s = e.elements,
      l = s[0],
      c = s[4],
      h = s[8],
      u = s[1],
      f = s[5],
      p = s[9],
      d = s[2],
      m = s[6],
      E = s[10];
    if (Math.abs(c - u) < o && Math.abs(h - d) < o && Math.abs(p - m) < o) {
      if (Math.abs(c + u) < a && Math.abs(h + d) < a && Math.abs(p + m) < a && Math.abs(l + f + E - 3) < a) {
        this.set(1, 0, 0, 0);
        return this
      }
      t = Math.PI;
      var g = (l + 1) / 2,
        v = (f + 1) / 2,
        y = (E + 1) / 2,
        T = (c + u) / 4,
        R = (h + d) / 4,
        x = (p + m) / 4;
      if (g > v && g > y)
        if (o > g) {
          r = 0;
          i = .707106781;
          n = .707106781
        } else {
          r = Math.sqrt(g);
          i = T / r;
          n = R / r
        }
      else if (v > y)
        if (o > v) {
          r = .707106781;
          i = 0;
          n = .707106781
        } else {
          i = Math.sqrt(v);
          r = T / i;
          n = x / i
        }
      else if (o > y) {
        r = .707106781;
        i = .707106781;
        n = 0
      } else {
        n = Math.sqrt(y);
        r = R / n;
        i = x / n
      }
      this.set(r, i, n, t);
      return this
    }
    var w = Math.sqrt((m - p) * (m - p) + (h - d) * (h - d) + (u - c) * (u - c));
    Math.abs(w) < .001 && (w = 1);
    this.x = (m - p) / w;
    this.y = (h - d) / w;
    this.z = (u - c) / w;
    this.w = Math.acos((l + f + E - 1) / 2);
    return this
  },
  min: function(e) {
    this.x > e.x && (this.x = e.x);
    this.y > e.y && (this.y = e.y);
    this.z > e.z && (this.z = e.z);
    this.w > e.w && (this.w = e.w);
    return this
  },
  max: function(e) {
    this.x < e.x && (this.x = e.x);
    this.y < e.y && (this.y = e.y);
    this.z < e.z && (this.z = e.z);
    this.w < e.w && (this.w = e.w);
    return this
  },
  clamp: function(e, t) {
    this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x);
    this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y);
    this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z);
    this.w < e.w ? this.w = e.w : this.w > t.w && (this.w = t.w);
    return this
  },
  negate: function() {
    return this.multiplyScalar(-1)
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
  },
  lengthManhattan: function() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
  },
  normalize: function() {
    return this.divideScalar(this.length())
  },
  setLength: function(e) {
    var t = this.length();
    0 !== t && e !== t && this.multiplyScalar(e / t);
    return this
  },
  lerp: function(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    this.z += (e.z - this.z) * t;
    this.w += (e.w - this.w) * t;
    return this
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
  },
  fromArray: function(e) {
    this.x = e[0];
    this.y = e[1];
    this.z = e[2];
    this.w = e[3];
    return this
  },
  toArray: function() {
    return [this.x, this.y, this.z, this.w]
  },
  clone: function() {
    return new THREE.Vector4(this.x, this.y, this.z, this.w)
  }
};
THREE.Line3 = function(e, t) {
  this.start = void 0 !== e ? e : new THREE.Vector3;
  this.end = void 0 !== t ? t : new THREE.Vector3
};
THREE.Line3.prototype = {
  constructor: THREE.Line3,
  set: function(e, t) {
    this.start.copy(e);
    this.end.copy(t);
    return this
  },
  copy: function(e) {
    this.start.copy(e.start);
    this.end.copy(e.end);
    return this
  },
  center: function(e) {
    var t = e || new THREE.Vector3;
    return t.addVectors(this.start, this.end).multiplyScalar(.5)
  },
  delta: function(e) {
    var t = e || new THREE.Vector3;
    return t.subVectors(this.end, this.start)
  },
  distanceSq: function() {
    return this.start.distanceToSquared(this.end)
  },
  distance: function() {
    return this.start.distanceTo(this.end)
  },
  at: function(e, t) {
    var r = t || new THREE.Vector3;
    return this.delta(r).multiplyScalar(e).add(this.start)
  },
  closestPointToPointParameter: function() {
    var e = new THREE.Vector3,
      t = new THREE.Vector3;
    return function(r, i) {
      e.subVectors(r, this.start);
      t.subVectors(this.end, this.start);
      var n = t.dot(t),
        o = t.dot(e),
        a = o / n;
      i && (a = THREE.Math.clamp(a, 0, 1));
      return a
    }
  }(),
  closestPointToPoint: function(e, t, r) {
    var i = this.closestPointToPointParameter(e, t),
      n = r || new THREE.Vector3;
    return this.delta(n).multiplyScalar(i).add(this.start)
  },
  applyMatrix4: function(e) {
    this.start.applyMatrix4(e);
    this.end.applyMatrix4(e);
    return this
  },
  equals: function(e) {
    return e.start.equals(this.start) && e.end.equals(this.end)
  },
  clone: function() {
    return (new THREE.Line3).copy(this)
  }
};
THREE.Box2 = function(e, t) {
  this.min = void 0 !== e ? e : new THREE.Vector2(1 / 0, 1 / 0);
  this.max = void 0 !== t ? t : new THREE.Vector2(-(1 / 0), -(1 / 0))
};
THREE.Box2.prototype = {
  constructor: THREE.Box2,
  set: function(e, t) {
    this.min.copy(e);
    this.max.copy(t);
    return this
  },
  setFromPoints: function(e) {
    if (e.length > 0) {
      var t = e[0];
      this.min.copy(t);
      this.max.copy(t);
      for (var r = 1, i = e.length; i > r; r++) {
        t = e[r];
        t.x < this.min.x ? this.min.x = t.x : t.x > this.max.x && (this.max.x = t.x);
        t.y < this.min.y ? this.min.y = t.y : t.y > this.max.y && (this.max.y = t.y)
      }
    } else this.makeEmpty();
    return this
  },
  setFromCenterAndSize: function() {
    var e = new THREE.Vector2;
    return function(t, r) {
      var i = e.copy(r).multiplyScalar(.5);
      this.min.copy(t).sub(i);
      this.max.copy(t).add(i);
      return this
    }
  }(),
  copy: function(e) {
    this.min.copy(e.min);
    this.max.copy(e.max);
    return this
  },
  makeEmpty: function() {
    this.min.x = this.min.y = 1 / 0;
    this.max.x = this.max.y = -(1 / 0);
    return this
  },
  empty: function() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  },
  center: function(e) {
    var t = e || new THREE.Vector2;
    return t.addVectors(this.min, this.max).multiplyScalar(.5)
  },
  size: function(e) {
    var t = e || new THREE.Vector2;
    return t.subVectors(this.max, this.min)
  },
  expandByPoint: function(e) {
    this.min.min(e);
    this.max.max(e);
    return this
  },
  expandByVector: function(e) {
    this.min.sub(e);
    this.max.add(e);
    return this
  },
  expandByScalar: function(e) {
    this.min.addScalar(-e);
    this.max.addScalar(e);
    return this
  },
  containsPoint: function(e) {
    return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
  },
  containsBox: function(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
  },
  getParameter: function(e) {
    return new THREE.Vector2((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
  },
  isIntersectionBox: function(e) {
    return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
  },
  clampPoint: function(e, t) {
    var r = t || new THREE.Vector2;
    return r.copy(e).clamp(this.min, this.max)
  },
  distanceToPoint: function() {
    var e = new THREE.Vector2;
    return function(t) {
      var r = e.copy(t).clamp(this.min, this.max);
      return r.sub(t).length()
    }
  }(),
  intersect: function(e) {
    this.min.max(e.min);
    this.max.min(e.max);
    return this
  },
  union: function(e) {
    this.min.min(e.min);
    this.max.max(e.max);
    return this
  },
  translate: function(e) {
    this.min.add(e);
    this.max.add(e);
    return this
  },
  equals: function(e) {
    return e.min.equals(this.min) && e.max.equals(this.max)
  },
  clone: function() {
    return (new THREE.Box2).copy(this)
  }
};
THREE.Box3 = function(e, t) {
  this.min = void 0 !== e ? e : new THREE.Vector3(1 / 0, 1 / 0, 1 / 0);
  this.max = void 0 !== t ? t : new THREE.Vector3(-(1 / 0), -(1 / 0), -(1 / 0))
};
THREE.Box3.prototype = {
  constructor: THREE.Box3,
  set: function(e, t) {
    this.min.copy(e);
    this.max.copy(t);
    return this
  },
  setFromPoints: function(e) {
    if (e.length > 0) {
      var t = e[0];
      this.min.copy(t);
      this.max.copy(t);
      for (var r = 1, i = e.length; i > r; r++) {
        t = e[r];
        t.x < this.min.x ? this.min.x = t.x : t.x > this.max.x && (this.max.x = t.x);
        t.y < this.min.y ? this.min.y = t.y : t.y > this.max.y && (this.max.y = t.y);
        t.z < this.min.z ? this.min.z = t.z : t.z > this.max.z && (this.max.z = t.z)
      }
    } else this.makeEmpty();
    return this
  },
  setFromCenterAndSize: function() {
    var e = new THREE.Vector3;
    return function(t, r) {
      var i = e.copy(r).multiplyScalar(.5);
      this.min.copy(t).sub(i);
      this.max.copy(t).add(i);
      return this
    }
  }(),
  copy: function(e) {
    this.min.copy(e.min);
    this.max.copy(e.max);
    return this
  },
  makeEmpty: function() {
    this.min.x = this.min.y = this.min.z = 1 / 0;
    this.max.x = this.max.y = this.max.z = -(1 / 0);
    return this
  },
  empty: function() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
  },
  center: function(e) {
    var t = e || new THREE.Vector3;
    return t.addVectors(this.min, this.max).multiplyScalar(.5)
  },
  size: function(e) {
    var t = e || new THREE.Vector3;
    return t.subVectors(this.max, this.min)
  },
  expandByPoint: function(e) {
    this.min.min(e);
    this.max.max(e);
    return this
  },
  expandByVector: function(e) {
    this.min.sub(e);
    this.max.add(e);
    return this
  },
  expandByScalar: function(e) {
    this.min.addScalar(-e);
    this.max.addScalar(e);
    return this
  },
  containsPoint: function(e) {
    return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
  },
  containsBox: function(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
  },
  getParameter: function(e) {
    return new THREE.Vector3((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
  },
  isIntersectionBox: function(e) {
    return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
  },
  clampPoint: function(e, t) {
    var r = t || new THREE.Vector3;
    return r.copy(e).clamp(this.min, this.max)
  },
  distanceToPoint: function() {
    var e = new THREE.Vector3;
    return function(t) {
      var r = e.copy(t).clamp(this.min, this.max);
      return r.sub(t).length()
    }
  }(),
  getBoundingSphere: function() {
    var e = new THREE.Vector3;
    return function(t) {
      var r = t || new THREE.Sphere;
      r.center = this.center();
      r.radius = .5 * this.size(e).length();
      return r
    }
  }(),
  intersect: function(e) {
    this.min.max(e.min);
    this.max.min(e.max);
    return this
  },
  union: function(e) {
    this.min.min(e.min);
    this.max.max(e.max);
    return this
  },
  applyMatrix4: function() {
    var e = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    return function(t) {
      e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t);
      e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t);
      e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t);
      e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t);
      e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t);
      e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t);
      e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t);
      e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t);
      this.makeEmpty();
      this.setFromPoints(e);
      return this
    }
  }(),
  translate: function(e) {
    this.min.add(e);
    this.max.add(e);
    return this
  },
  equals: function(e) {
    return e.min.equals(this.min) && e.max.equals(this.max)
  },
  clone: function() {
    return (new THREE.Box3).copy(this)
  }
};
THREE.Matrix3 = function(e, t, r, i, n, o, a, s, l) {
  this.elements = new Float32Array(9);
  this.set(void 0 !== e ? e : 1, t || 0, r || 0, i || 0, void 0 !== n ? n : 1, o || 0, a || 0, s || 0, void 0 !== l ? l : 1)
};
THREE.Matrix3.prototype = {
  constructor: THREE.Matrix3,
  set: function(e, t, r, i, n, o, a, s, l) {
    var c = this.elements;
    c[0] = e;
    c[3] = t;
    c[6] = r;
    c[1] = i;
    c[4] = n;
    c[7] = o;
    c[2] = a;
    c[5] = s;
    c[8] = l;
    return this
  },
  identity: function() {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this
  },
  copy: function(e) {
    var t = e.elements;
    this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]);
    return this
  },
  multiplyVector3: function(e) {
    console.warn("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
    return e.applyMatrix3(this)
  },
  multiplyVector3Array: function() {
    var e = new THREE.Vector3;
    return function(t) {
      for (var r = 0, i = t.length; i > r; r += 3) {
        e.x = t[r];
        e.y = t[r + 1];
        e.z = t[r + 2];
        e.applyMatrix3(this);
        t[r] = e.x;
        t[r + 1] = e.y;
        t[r + 2] = e.z
      }
      return t
    }
  }(),
  multiplyScalar: function(e) {
    var t = this.elements;
    t[0] *= e;
    t[3] *= e;
    t[6] *= e;
    t[1] *= e;
    t[4] *= e;
    t[7] *= e;
    t[2] *= e;
    t[5] *= e;
    t[8] *= e;
    return this
  },
  determinant: function() {
    var e = this.elements,
      t = e[0],
      r = e[1],
      i = e[2],
      n = e[3],
      o = e[4],
      a = e[5],
      s = e[6],
      l = e[7],
      c = e[8];
    return t * o * c - t * a * l - r * n * c + r * a * s + i * n * l - i * o * s
  },
  getInverse: function(e, t) {
    var r = e.elements,
      i = this.elements;
    i[0] = r[10] * r[5] - r[6] * r[9];
    i[1] = -r[10] * r[1] + r[2] * r[9];
    i[2] = r[6] * r[1] - r[2] * r[5];
    i[3] = -r[10] * r[4] + r[6] * r[8];
    i[4] = r[10] * r[0] - r[2] * r[8];
    i[5] = -r[6] * r[0] + r[2] * r[4];
    i[6] = r[9] * r[4] - r[5] * r[8];
    i[7] = -r[9] * r[0] + r[1] * r[8];
    i[8] = r[5] * r[0] - r[1] * r[4];
    var n = r[0] * i[0] + r[1] * i[3] + r[2] * i[6];
    if (0 === n) {
      var o = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
      if (t) throw new Error(o);
      console.warn(o);
      this.identity();
      return this
    }
    this.multiplyScalar(1 / n);
    return this
  },
  transpose: function() {
    var e, t = this.elements;
    e = t[1];
    t[1] = t[3];
    t[3] = e;
    e = t[2];
    t[2] = t[6];
    t[6] = e;
    e = t[5];
    t[5] = t[7];
    t[7] = e;
    return this
  },
  getNormalMatrix: function(e) {
    this.getInverse(e).transpose();
    return this
  },
  transposeIntoArray: function(e) {
    var t = this.elements;
    e[0] = t[0];
    e[1] = t[3];
    e[2] = t[6];
    e[3] = t[1];
    e[4] = t[4];
    e[5] = t[7];
    e[6] = t[2];
    e[7] = t[5];
    e[8] = t[8];
    return this
  },
  clone: function() {
    var e = this.elements;
    return new THREE.Matrix3(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8])
  }
};
THREE.Matrix4 = function(e, t, r, i, n, o, a, s, l, c, h, u, f, p, d, m) {
  var E = this.elements = new Float32Array(16);
  E[0] = void 0 !== e ? e : 1;
  E[4] = t || 0;
  E[8] = r || 0;
  E[12] = i || 0;
  E[1] = n || 0;
  E[5] = void 0 !== o ? o : 1;
  E[9] = a || 0;
  E[13] = s || 0;
  E[2] = l || 0;
  E[6] = c || 0;
  E[10] = void 0 !== h ? h : 1;
  E[14] = u || 0;
  E[3] = f || 0;
  E[7] = p || 0;
  E[11] = d || 0;
  E[15] = void 0 !== m ? m : 1
};
THREE.Matrix4.prototype = {
  constructor: THREE.Matrix4,
  set: function(e, t, r, i, n, o, a, s, l, c, h, u, f, p, d, m) {
    var E = this.elements;
    E[0] = e;
    E[4] = t;
    E[8] = r;
    E[12] = i;
    E[1] = n;
    E[5] = o;
    E[9] = a;
    E[13] = s;
    E[2] = l;
    E[6] = c;
    E[10] = h;
    E[14] = u;
    E[3] = f;
    E[7] = p;
    E[11] = d;
    E[15] = m;
    return this
  },
  identity: function() {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this
  },
  copy: function(e) {
    var t = e.elements;
    this.set(t[0], t[4], t[8], t[12], t[1], t[5], t[9], t[13], t[2], t[6], t[10], t[14], t[3], t[7], t[11], t[15]);
    return this
  },
  extractPosition: function(e) {
    console.warn("DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition().");
    return this.copyPosition(e)
  },
  copyPosition: function(e) {
    var t = this.elements,
      r = e.elements;
    t[12] = r[12];
    t[13] = r[13];
    t[14] = r[14];
    return this
  },
  extractRotation: function() {
    var e = new THREE.Vector3;
    return function(t) {
      var r = this.elements,
        i = t.elements,
        n = 1 / e.set(i[0], i[1], i[2]).length(),
        o = 1 / e.set(i[4], i[5], i[6]).length(),
        a = 1 / e.set(i[8], i[9], i[10]).length();
      r[0] = i[0] * n;
      r[1] = i[1] * n;
      r[2] = i[2] * n;
      r[4] = i[4] * o;
      r[5] = i[5] * o;
      r[6] = i[6] * o;
      r[8] = i[8] * a;
      r[9] = i[9] * a;
      r[10] = i[10] * a;
      return this
    }
  }(),
  setRotationFromEuler: function(e, t) {
    console.warn("DEPRECATED: Matrix4's .setRotationFromEuler() has been deprecated in favor of makeRotationFromEuler.  Please update your code.");
    return this.makeRotationFromEuler(e, t)
  },
  makeRotationFromEuler: function(e, t) {
    var r = this.elements,
      i = e.x,
      n = e.y,
      o = e.z,
      a = Math.cos(i),
      s = Math.sin(i),
      l = Math.cos(n),
      c = Math.sin(n),
      h = Math.cos(o),
      u = Math.sin(o);
    if (void 0 === t || "XYZ" === t) {
      var f = a * h,
        p = a * u,
        d = s * h,
        m = s * u;
      r[0] = l * h;
      r[4] = -l * u;
      r[8] = c;
      r[1] = p + d * c;
      r[5] = f - m * c;
      r[9] = -s * l;
      r[2] = m - f * c;
      r[6] = d + p * c;
      r[10] = a * l
    } else if ("YXZ" === t) {
      var E = l * h,
        g = l * u,
        v = c * h,
        y = c * u;
      r[0] = E + y * s;
      r[4] = v * s - g;
      r[8] = a * c;
      r[1] = a * u;
      r[5] = a * h;
      r[9] = -s;
      r[2] = g * s - v;
      r[6] = y + E * s;
      r[10] = a * l
    } else if ("ZXY" === t) {
      var E = l * h,
        g = l * u,
        v = c * h,
        y = c * u;
      r[0] = E - y * s;
      r[4] = -a * u;
      r[8] = v + g * s;
      r[1] = g + v * s;
      r[5] = a * h;
      r[9] = y - E * s;
      r[2] = -a * c;
      r[6] = s;
      r[10] = a * l
    } else if ("ZYX" === t) {
      var f = a * h,
        p = a * u,
        d = s * h,
        m = s * u;
      r[0] = l * h;
      r[4] = d * c - p;
      r[8] = f * c + m;
      r[1] = l * u;
      r[5] = m * c + f;
      r[9] = p * c - d;
      r[2] = -c;
      r[6] = s * l;
      r[10] = a * l
    } else if ("YZX" === t) {
      var T = a * l,
        R = a * c,
        x = s * l,
        w = s * c;
      r[0] = l * h;
      r[4] = w - T * u;
      r[8] = x * u + R;
      r[1] = u;
      r[5] = a * h;
      r[9] = -s * h;
      r[2] = -c * h;
      r[6] = R * u + x;
      r[10] = T - w * u
    } else if ("XZY" === t) {
      var T = a * l,
        R = a * c,
        x = s * l,
        w = s * c;
      r[0] = l * h;
      r[4] = -u;
      r[8] = c * h;
      r[1] = T * u + w;
      r[5] = a * h;
      r[9] = R * u - x;
      r[2] = x * u - R;
      r[6] = s * h;
      r[10] = w * u + T
    }
    r[3] = 0;
    r[7] = 0;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;
    return this
  },
  setRotationFromQuaternion: function(e) {
    console.warn("DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code.");
    return this.makeRotationFromQuaternion(e)
  },
  makeRotationFromQuaternion: function(e) {
    var t = this.elements,
      r = e.x,
      i = e.y,
      n = e.z,
      o = e.w,
      a = r + r,
      s = i + i,
      l = n + n,
      c = r * a,
      h = r * s,
      u = r * l,
      f = i * s,
      p = i * l,
      d = n * l,
      m = o * a,
      E = o * s,
      g = o * l;
    t[0] = 1 - (f + d);
    t[4] = h - g;
    t[8] = u + E;
    t[1] = h + g;
    t[5] = 1 - (c + d);
    t[9] = p - m;
    t[2] = u - E;
    t[6] = p + m;
    t[10] = 1 - (c + f);
    t[3] = 0;
    t[7] = 0;
    t[11] = 0;
    t[12] = 0;
    t[13] = 0;
    t[14] = 0;
    t[15] = 1;
    return this
  },
  lookAt: function() {
    var e = new THREE.Vector3,
      t = new THREE.Vector3,
      r = new THREE.Vector3;
    return function(i, n, o) {
      var a = this.elements;
      r.subVectors(i, n).normalize();
      0 === r.length() && (r.z = 1);
      e.crossVectors(o, r).normalize();
      if (0 === e.length()) {
        r.x += 1e-4;
        e.crossVectors(o, r).normalize()
      }
      t.crossVectors(r, e);
      a[0] = e.x;
      a[4] = t.x;
      a[8] = r.x;
      a[1] = e.y;
      a[5] = t.y;
      a[9] = r.y;
      a[2] = e.z;
      a[6] = t.z;
      a[10] = r.z;
      return this
    }
  }(),
  multiply: function(e, t) {
    if (void 0 !== t) {
      console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.");
      return this.multiplyMatrices(e, t)
    }
    return this.multiplyMatrices(this, e)
  },
  multiplyMatrices: function(e, t) {
    var r = e.elements,
      i = t.elements,
      n = this.elements,
      o = r[0],
      a = r[4],
      s = r[8],
      l = r[12],
      c = r[1],
      h = r[5],
      u = r[9],
      f = r[13],
      p = r[2],
      d = r[6],
      m = r[10],
      E = r[14],
      g = r[3],
      v = r[7],
      y = r[11],
      T = r[15],
      R = i[0],
      x = i[4],
      w = i[8],
      H = i[12],
      b = i[1],
      _ = i[5],
      S = i[9],
      M = i[13],
      C = i[2],
      A = i[6],
      L = i[10],
      D = i[14],
      P = i[3],
      F = i[7],
      N = i[11],
      U = i[15];
    n[0] = o * R + a * b + s * C + l * P;
    n[4] = o * x + a * _ + s * A + l * F;
    n[8] = o * w + a * S + s * L + l * N;
    n[12] = o * H + a * M + s * D + l * U;
    n[1] = c * R + h * b + u * C + f * P;
    n[5] = c * x + h * _ + u * A + f * F;
    n[9] = c * w + h * S + u * L + f * N;
    n[13] = c * H + h * M + u * D + f * U;
    n[2] = p * R + d * b + m * C + E * P;
    n[6] = p * x + d * _ + m * A + E * F;
    n[10] = p * w + d * S + m * L + E * N;
    n[14] = p * H + d * M + m * D + E * U;
    n[3] = g * R + v * b + y * C + T * P;
    n[7] = g * x + v * _ + y * A + T * F;
    n[11] = g * w + v * S + y * L + T * N;
    n[15] = g * H + v * M + y * D + T * U;
    return this
  },
  multiplyToArray: function(e, t, r) {
    var i = this.elements;
    this.multiplyMatrices(e, t);
    r[0] = i[0];
    r[1] = i[1];
    r[2] = i[2];
    r[3] = i[3];
    r[4] = i[4];
    r[5] = i[5];
    r[6] = i[6];
    r[7] = i[7];
    r[8] = i[8];
    r[9] = i[9];
    r[10] = i[10];
    r[11] = i[11];
    r[12] = i[12];
    r[13] = i[13];
    r[14] = i[14];
    r[15] = i[15];
    return this
  },
  multiplyScalar: function(e) {
    var t = this.elements;
    t[0] *= e;
    t[4] *= e;
    t[8] *= e;
    t[12] *= e;
    t[1] *= e;
    t[5] *= e;
    t[9] *= e;
    t[13] *= e;
    t[2] *= e;
    t[6] *= e;
    t[10] *= e;
    t[14] *= e;
    t[3] *= e;
    t[7] *= e;
    t[11] *= e;
    t[15] *= e;
    return this
  },
  multiplyVector3: function(e) {
    console.warn("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
    return e.applyProjection(this)
  },
  multiplyVector4: function(e) {
    console.warn("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return e.applyMatrix4(this)
  },
  multiplyVector3Array: function() {
    var e = new THREE.Vector3;
    return function(t) {
      for (var r = 0, i = t.length; i > r; r += 3) {
        e.x = t[r];
        e.y = t[r + 1];
        e.z = t[r + 2];
        e.applyProjection(this);
        t[r] = e.x;
        t[r + 1] = e.y;
        t[r + 2] = e.z
      }
      return t
    }
  }(),
  rotateAxis: function(e) {
    console.warn("DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
    e.transformDirection(this)
  },
  crossVector: function(e) {
    console.warn("DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return e.applyMatrix4(this)
  },
  determinant: function() {
    var e = this.elements,
      t = e[0],
      r = e[4],
      i = e[8],
      n = e[12],
      o = e[1],
      a = e[5],
      s = e[9],
      l = e[13],
      c = e[2],
      h = e[6],
      u = e[10],
      f = e[14],
      p = e[3],
      d = e[7],
      m = e[11],
      E = e[15];
    return p * (+n * s * h - i * l * h - n * a * u + r * l * u + i * a * f - r * s * f) + d * (+t * s * f - t * l * u + n * o * u - i * o * f + i * l * c - n * s * c) + m * (+t * l * h - t * a * f - n * o * h + r * o * f + n * a * c - r * l * c) + E * (-i * a * c - t * s * h + t * a * u + i * o * h - r * o * u + r * s * c)
  },
  transpose: function() {
    var e, t = this.elements;
    e = t[1];
    t[1] = t[4];
    t[4] = e;
    e = t[2];
    t[2] = t[8];
    t[8] = e;
    e = t[6];
    t[6] = t[9];
    t[9] = e;
    e = t[3];
    t[3] = t[12];
    t[12] = e;
    e = t[7];
    t[7] = t[13];
    t[13] = e;
    e = t[11];
    t[11] = t[14];
    t[14] = e;
    return this
  },
  flattenToArray: function(e) {
    var t = this.elements;
    e[0] = t[0];
    e[1] = t[1];
    e[2] = t[2];
    e[3] = t[3];
    e[4] = t[4];
    e[5] = t[5];
    e[6] = t[6];
    e[7] = t[7];
    e[8] = t[8];
    e[9] = t[9];
    e[10] = t[10];
    e[11] = t[11];
    e[12] = t[12];
    e[13] = t[13];
    e[14] = t[14];
    e[15] = t[15];
    return e
  },
  flattenToArrayOffset: function(e, t) {
    var r = this.elements;
    e[t] = r[0];
    e[t + 1] = r[1];
    e[t + 2] = r[2];
    e[t + 3] = r[3];
    e[t + 4] = r[4];
    e[t + 5] = r[5];
    e[t + 6] = r[6];
    e[t + 7] = r[7];
    e[t + 8] = r[8];
    e[t + 9] = r[9];
    e[t + 10] = r[10];
    e[t + 11] = r[11];
    e[t + 12] = r[12];
    e[t + 13] = r[13];
    e[t + 14] = r[14];
    e[t + 15] = r[15];
    return e
  },
  getPosition: function() {
    var e = new THREE.Vector3;
    return function() {
      console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.getPositionFromMatrix( matrix ) instead.");
      var t = this.elements;
      return e.set(t[12], t[13], t[14])
    }
  }(),
  setPosition: function(e) {
    var t = this.elements;
    t[12] = e.x;
    t[13] = e.y;
    t[14] = e.z;
    return this
  },
  getInverse: function(e, t) {
    var r = this.elements,
      i = e.elements,
      n = i[0],
      o = i[4],
      a = i[8],
      s = i[12],
      l = i[1],
      c = i[5],
      h = i[9],
      u = i[13],
      f = i[2],
      p = i[6],
      d = i[10],
      m = i[14],
      E = i[3],
      g = i[7],
      v = i[11],
      y = i[15];
    r[0] = h * m * g - u * d * g + u * p * v - c * m * v - h * p * y + c * d * y;
    r[4] = s * d * g - a * m * g - s * p * v + o * m * v + a * p * y - o * d * y;
    r[8] = a * u * g - s * h * g + s * c * v - o * u * v - a * c * y + o * h * y;
    r[12] = s * h * p - a * u * p - s * c * d + o * u * d + a * c * m - o * h * m;
    r[1] = u * d * E - h * m * E - u * f * v + l * m * v + h * f * y - l * d * y;
    r[5] = a * m * E - s * d * E + s * f * v - n * m * v - a * f * y + n * d * y;
    r[9] = s * h * E - a * u * E - s * l * v + n * u * v + a * l * y - n * h * y;
    r[13] = a * u * f - s * h * f + s * l * d - n * u * d - a * l * m + n * h * m;
    r[2] = c * m * E - u * p * E + u * f * g - l * m * g - c * f * y + l * p * y;
    r[6] = s * p * E - o * m * E - s * f * g + n * m * g + o * f * y - n * p * y;
    r[10] = o * u * E - s * c * E + s * l * g - n * u * g - o * l * y + n * c * y;
    r[14] = s * c * f - o * u * f - s * l * p + n * u * p + o * l * m - n * c * m;
    r[3] = h * p * E - c * d * E - h * f * g + l * d * g + c * f * v - l * p * v;
    r[7] = o * d * E - a * p * E + a * f * g - n * d * g - o * f * v + n * p * v;
    r[11] = a * c * E - o * h * E - a * l * g + n * h * g + o * l * v - n * c * v;
    r[15] = o * h * f - a * c * f + a * l * p - n * h * p - o * l * d + n * c * d;
    var T = i[0] * r[0] + i[1] * r[4] + i[2] * r[8] + i[3] * r[12];
    if (0 == T) {
      var R = "Matrix4.getInverse(): can't invert matrix, determinant is 0";
      if (t) throw new Error(R);
      console.warn(R);
      this.identity();
      return this
    }
    this.multiplyScalar(1 / T);
    return this
  },
  translate: function(e) {
    console.warn("DEPRECATED: Matrix4's .translate() has been removed.")
  },
  rotateX: function(e) {
    console.warn("DEPRECATED: Matrix4's .rotateX() has been removed.")
  },
  rotateY: function(e) {
    console.warn("DEPRECATED: Matrix4's .rotateY() has been removed.")
  },
  rotateZ: function(e) {
    console.warn("DEPRECATED: Matrix4's .rotateZ() has been removed.")
  },
  rotateByAxis: function(e, t) {
    console.warn("DEPRECATED: Matrix4's .rotateByAxis() has been removed.")
  },
  scale: function(e) {
    var t = this.elements,
      r = e.x,
      i = e.y,
      n = e.z;
    t[0] *= r;
    t[4] *= i;
    t[8] *= n;
    t[1] *= r;
    t[5] *= i;
    t[9] *= n;
    t[2] *= r;
    t[6] *= i;
    t[10] *= n;
    t[3] *= r;
    t[7] *= i;
    t[11] *= n;
    return this
  },
  getMaxScaleOnAxis: function() {
    var e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, Math.max(r, i)))
  },
  makeTranslation: function(e, t, r) {
    this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1);
    return this
  },
  makeRotationX: function(e) {
    var t = Math.cos(e),
      r = Math.sin(e);
    this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1);
    return this
  },
  makeRotationY: function(e) {
    var t = Math.cos(e),
      r = Math.sin(e);
    this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1);
    return this
  },
  makeRotationZ: function(e) {
    var t = Math.cos(e),
      r = Math.sin(e);
    this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this
  },
  makeRotationAxis: function(e, t) {
    var r = Math.cos(t),
      i = Math.sin(t),
      n = 1 - r,
      o = e.x,
      a = e.y,
      s = e.z,
      l = n * o,
      c = n * a;
    this.set(l * o + r, l * a - i * s, l * s + i * a, 0, l * a + i * s, c * a + r, c * s - i * o, 0, l * s - i * a, c * s + i * o, n * s * s + r, 0, 0, 0, 0, 1);
    return this
  },
  makeScale: function(e, t, r) {
    this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1);
    return this
  },
  compose: function(e, t, r) {
    console.warn("DEPRECATED: Matrix4's .compose() has been deprecated in favor of makeFromPositionQuaternionScale. Please update your code.");
    return this.makeFromPositionQuaternionScale(e, t, r)
  },
  makeFromPositionQuaternionScale: function(e, t, r) {
    this.makeRotationFromQuaternion(t);
    this.scale(r);
    this.setPosition(e);
    return this
  },
  makeFromPositionEulerScale: function(e, t, r, i) {
    this.makeRotationFromEuler(t, r);
    this.scale(i);
    this.setPosition(e);
    return this
  },
  makeFrustum: function(e, t, r, i, n, o) {
    var a = this.elements,
      s = 2 * n / (t - e),
      l = 2 * n / (i - r),
      c = (t + e) / (t - e),
      h = (i + r) / (i - r),
      u = -(o + n) / (o - n),
      f = -2 * o * n / (o - n);
    a[0] = s;
    a[4] = 0;
    a[8] = c;
    a[12] = 0;
    a[1] = 0;
    a[5] = l;
    a[9] = h;
    a[13] = 0;
    a[2] = 0;
    a[6] = 0;
    a[10] = u;
    a[14] = f;
    a[3] = 0;
    a[7] = 0;
    a[11] = -1;
    a[15] = 0;
    return this
  },
  makePerspective: function(e, t, r, i) {
    var n = r * Math.tan(THREE.Math.degToRad(.5 * e)),
      o = -n,
      a = o * t,
      s = n * t;
    return this.makeFrustum(a, s, o, n, r, i)
  },
  makeOrthographic: function(e, t, r, i, n, o) {
    var a = this.elements,
      s = t - e,
      l = r - i,
      c = o - n,
      h = (t + e) / s,
      u = (r + i) / l,
      f = (o + n) / c;
    a[0] = 2 / s;
    a[4] = 0;
    a[8] = 0;
    a[12] = -h;
    a[1] = 0;
    a[5] = 2 / l;
    a[9] = 0;
    a[13] = -u;
    a[2] = 0;
    a[6] = 0;
    a[10] = -2 / c;
    a[14] = -f;
    a[3] = 0;
    a[7] = 0;
    a[11] = 0;
    a[15] = 1;
    return this
  },
  clone: function() {
    var e = this.elements;
    return new THREE.Matrix4(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15])
  }
};
THREE.extend(THREE.Matrix4.prototype, {
  decompose: function() {
    var e = new THREE.Vector3,
      t = new THREE.Vector3,
      r = new THREE.Vector3,
      i = new THREE.Matrix4;
    return function(n, o, a) {
      var s = this.elements;
      e.set(s[0], s[1], s[2]);
      t.set(s[4], s[5], s[6]);
      r.set(s[8], s[9], s[10]);
      n = n instanceof THREE.Vector3 ? n : new THREE.Vector3;
      o = o instanceof THREE.Quaternion ? o : new THREE.Quaternion;
      a = a instanceof THREE.Vector3 ? a : new THREE.Vector3;
      a.x = e.length();
      a.y = t.length();
      a.z = r.length();
      n.x = s[12];
      n.y = s[13];
      n.z = s[14];
      i.copy(this);
      i.elements[0] /= a.x;
      i.elements[1] /= a.x;
      i.elements[2] /= a.x;
      i.elements[4] /= a.y;
      i.elements[5] /= a.y;
      i.elements[6] /= a.y;
      i.elements[8] /= a.z;
      i.elements[9] /= a.z;
      i.elements[10] /= a.z;
      o.setFromRotationMatrix(i);
      return [n, o, a]
    }
  }()
});
THREE.Ray = function(e, t) {
  this.origin = void 0 !== e ? e : new THREE.Vector3;
  this.direction = void 0 !== t ? t : new THREE.Vector3
};
THREE.Ray.prototype = {
  constructor: THREE.Ray,
  set: function(e, t) {
    this.origin.copy(e);
    this.direction.copy(t);
    return this
  },
  copy: function(e) {
    this.origin.copy(e.origin);
    this.direction.copy(e.direction);
    return this
  },
  at: function(e, t) {
    var r = t || new THREE.Vector3;
    return r.copy(this.direction).multiplyScalar(e).add(this.origin)
  },
  recast: function() {
    var e = new THREE.Vector3;
    return function(t) {
      this.origin.copy(this.at(t, e));
      return this
    }
  }(),
  closestPointToPoint: function(e, t) {
    var r = t || new THREE.Vector3;
    r.subVectors(e, this.origin);
    var i = r.dot(this.direction);
    return r.copy(this.direction).multiplyScalar(i).add(this.origin)
  },
  distanceToPoint: function() {
    var e = new THREE.Vector3;
    return function(t) {
      var r = e.subVectors(t, this.origin).dot(this.direction);
      e.copy(this.direction).multiplyScalar(r).add(this.origin);
      return e.distanceTo(t)
    }
  }(),
  isIntersectionSphere: function(e) {
    return this.distanceToPoint(e.center) <= e.radius
  },
  isIntersectionPlane: function(e) {
    var t = e.normal.dot(this.direction);
    return 0 != t ? !0 : 0 == e.distanceToPoint(this.origin) ? !0 : !1
  },
  distanceToPlane: function(e) {
    var t = e.normal.dot(this.direction);
    if (0 == t) return 0 == e.distanceToPoint(this.origin) ? 0 : void 0;
    var r = -(this.origin.dot(e.normal) + e.constant) / t;
    return r
  },
  intersectPlane: function(e, t) {
    var r = this.distanceToPlane(e);
    return void 0 === r ? void 0 : this.at(r, t)
  },
  applyMatrix4: function(e) {
    this.direction.add(this.origin).applyMatrix4(e);
    this.origin.applyMatrix4(e);
    this.direction.sub(this.origin);
    return this
  },
  equals: function(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction)
  },
  clone: function() {
    return (new THREE.Ray).copy(this)
  }
};
THREE.Sphere = function(e, t) {
  this.center = void 0 !== e ? e : new THREE.Vector3;
  this.radius = void 0 !== t ? t : 0
};
THREE.Sphere.prototype = {
  constructor: THREE.Sphere,
  set: function(e, t) {
    this.center.copy(e);
    this.radius = t;
    return this
  },
  setFromCenterAndPoints: function(e, t) {
    for (var r = 0, i = 0, n = t.length; n > i; i++) {
      var o = e.distanceToSquared(t[i]);
      r = Math.max(r, o)
    }
    this.center = e;
    this.radius = Math.sqrt(r);
    return this
  },
  copy: function(e) {
    this.center.copy(e.center);
    this.radius = e.radius;
    return this
  },
  empty: function() {
    return this.radius <= 0
  },
  containsPoint: function(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius
  },
  distanceToPoint: function(e) {
    return e.distanceTo(this.center) - this.radius
  },
  intersectsSphere: function(e) {
    var t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t
  },
  clampPoint: function(e, t) {
    var r = this.center.distanceToSquared(e),
      i = t || new THREE.Vector3;
    i.copy(e);
    if (r > this.radius * this.radius) {
      i.sub(this.center).normalize();
      i.multiplyScalar(this.radius).add(this.center)
    }
    return i
  },
  getBoundingBox: function(e) {
    var t = e || new THREE.Box3;
    t.set(this.center, this.center);
    t.expandByScalar(this.radius);
    return t
  },
  applyMatrix4: function(e) {
    this.center.applyMatrix4(e);
    this.radius = this.radius * e.getMaxScaleOnAxis();
    return this
  },
  translate: function(e) {
    this.center.add(e);
    return this
  },
  equals: function(e) {
    return e.center.equals(this.center) && e.radius === this.radius
  },
  clone: function() {
    return (new THREE.Sphere).copy(this)
  }
};
THREE.Frustum = function(e, t, r, i, n, o) {
  this.planes = [void 0 !== e ? e : new THREE.Plane, void 0 !== t ? t : new THREE.Plane, void 0 !== r ? r : new THREE.Plane, void 0 !== i ? i : new THREE.Plane, void 0 !== n ? n : new THREE.Plane, void 0 !== o ? o : new THREE.Plane]
};
THREE.Frustum.prototype = {
  constructor: THREE.Frustum,
  set: function(e, t, r, i, n, o) {
    var a = this.planes;
    a[0].copy(e);
    a[1].copy(t);
    a[2].copy(r);
    a[3].copy(i);
    a[4].copy(n);
    a[5].copy(o);
    return this
  },
  copy: function(e) {
    for (var t = this.planes, r = 0; 6 > r; r++) t[r].copy(e.planes[r]);
    return this
  },
  setFromMatrix: function(e) {
    var t = this.planes,
      r = e.elements,
      i = r[0],
      n = r[1],
      o = r[2],
      a = r[3],
      s = r[4],
      l = r[5],
      c = r[6],
      h = r[7],
      u = r[8],
      f = r[9],
      p = r[10],
      d = r[11],
      m = r[12],
      E = r[13],
      g = r[14],
      v = r[15];
    t[0].setComponents(a - i, h - s, d - u, v - m).normalize();
    t[1].setComponents(a + i, h + s, d + u, v + m).normalize();
    t[2].setComponents(a + n, h + l, d + f, v + E).normalize();
    t[3].setComponents(a - n, h - l, d - f, v - E).normalize();
    t[4].setComponents(a - o, h - c, d - p, v - g).normalize();
    t[5].setComponents(a + o, h + c, d + p, v + g).normalize();
    return this
  },
  intersectsObject: function() {
    var e = new THREE.Vector3;
    return function(t) {
      var r = t.matrixWorld,
        i = this.planes,
        n = -t.geometry.boundingSphere.radius * r.getMaxScaleOnAxis();
      e.getPositionFromMatrix(r);
      for (var o = 0; 6 > o; o++) {
        var a = i[o].distanceToPoint(e);
        if (n > a) return !1
      }
      return !0
    }
  }(),
  intersectsSphere: function(e) {
    for (var t = this.planes, r = e.center, i = -e.radius, n = 0; 6 > n; n++) {
      var o = t[n].distanceToPoint(r);
      if (i > o) return !1
    }
    return !0
  },
  containsPoint: function(e) {
    for (var t = this.planes, r = 0; 6 > r; r++)
      if (t[r].distanceToPoint(e) < 0) return !1;
    return !0
  },
  clone: function() {
    return (new THREE.Frustum).copy(this)
  }
};
THREE.Plane = function(e, t) {
  this.normal = void 0 !== e ? e : new THREE.Vector3(1, 0, 0);
  this.constant = void 0 !== t ? t : 0
};
THREE.Plane.prototype = {
  constructor: THREE.Plane,
  set: function(e, t) {
    this.normal.copy(e);
    this.constant = t;
    return this
  },
  setComponents: function(e, t, r, i) {
    this.normal.set(e, t, r);
    this.constant = i;
    return this
  },
  setFromNormalAndCoplanarPoint: function(e, t) {
    this.normal.copy(e);
    this.constant = -t.dot(this.normal);
    return this
  },
  setFromCoplanarPoints: function() {
    var e = new THREE.Vector3,
      t = new THREE.Vector3;
    return function(r, i, n) {
      var o = e.subVectors(n, i).cross(t.subVectors(r, i)).normalize();
      this.setFromNormalAndCoplanarPoint(o, r);
      return this
    }
  }(),
  copy: function(e) {
    this.normal.copy(e.normal);
    this.constant = e.constant;
    return this
  },
  normalize: function() {
    var e = 1 / this.normal.length();
    this.normal.multiplyScalar(e);
    this.constant *= e;
    return this
  },
  negate: function() {
    this.constant *= -1;
    this.normal.negate();
    return this
  },
  distanceToPoint: function(e) {
    return this.normal.dot(e) + this.constant
  },
  distanceToSphere: function(e) {
    return this.distanceToPoint(e.center) - e.radius
  },
  projectPoint: function(e, t) {
    return this.orthoPoint(e, t).sub(e).negate()
  },
  orthoPoint: function(e, t) {
    var r = this.distanceToPoint(e),
      i = t || new THREE.Vector3;
    return i.copy(this.normal).multiplyScalar(r)
  },
  isIntersectionLine: function(e) {
    var t = this.distanceToPoint(e.start),
      r = this.distanceToPoint(e.end);
    return 0 > t && r > 0 || 0 > r && t > 0
  },
  intersectLine: function() {
    var e = new THREE.Vector3;
    return function(t, r) {
      var i = r || new THREE.Vector3,
        n = t.delta(e),
        o = this.normal.dot(n);
      if (0 == o) return 0 == this.distanceToPoint(t.start) ? i.copy(t.start) : void 0;
      var a = -(t.start.dot(this.normal) + this.constant) / o;
      return 0 > a || a > 1 ? void 0 : i.copy(n).multiplyScalar(a).add(t.start)
    }
  }(),
  coplanarPoint: function(e) {
    var t = e || new THREE.Vector3;
    return t.copy(this.normal).multiplyScalar(-this.constant)
  },
  applyMatrix4: function() {
    var e = new THREE.Vector3,
      t = new THREE.Vector3;
    return function(r, i) {
      i = i || (new THREE.Matrix3).getNormalMatrix(r);
      var n = e.copy(this.normal).applyMatrix3(i),
        o = this.coplanarPoint(t);
      o.applyMatrix4(r);
      this.setFromNormalAndCoplanarPoint(n, o);
      return this
    }
  }(),
  translate: function(e) {
    this.constant = this.constant - e.dot(this.normal);
    return this
  },
  equals: function(e) {
    return e.normal.equals(this.normal) && e.constant == this.constant
  },
  clone: function() {
    return (new THREE.Plane).copy(this)
  }
};
THREE.Math = {
  clamp: function(e, t, r) {
    return t > e ? t : e > r ? r : e
  },
  clampBottom: function(e, t) {
    return t > e ? t : e
  },
  mapLinear: function(e, t, r, i, n) {
    return i + (e - t) * (n - i) / (r - t)
  },
  smoothstep: function(e, t, r) {
    if (t >= e) return 0;
    if (e >= r) return 1;
    e = (e - t) / (r - t);
    return e * e * (3 - 2 * e)
  },
  smootherstep: function(e, t, r) {
    if (t >= e) return 0;
    if (e >= r) return 1;
    e = (e - t) / (r - t);
    return e * e * e * (e * (6 * e - 15) + 10)
  },
  random16: function() {
    return (65280 * Math.random() + 255 * Math.random()) / 65535
  },
  randInt: function(e, t) {
    return e + Math.floor(Math.random() * (t - e + 1))
  },
  randFloat: function(e, t) {
    return e + Math.random() * (t - e)
  },
  randFloatSpread: function(e) {
    return e * (.5 - Math.random())
  },
  sign: function(e) {
    return 0 > e ? -1 : e > 0 ? 1 : 0
  },
  degToRad: function() {
    var e = Math.PI / 180;
    return function(t) {
      return t * e
    }
  }(),
  radToDeg: function() {
    var e = 180 / Math.PI;
    return function(t) {
      return t * e
    }
  }()
};
THREE.Spline = function(e) {
  function t(e, t, r, i, n, o, a) {
    var s = .5 * (r - e),
      l = .5 * (i - t);
    return (2 * (t - r) + s + l) * a + (-3 * (t - r) - 2 * s - l) * o + s * n + t
  }
  this.points = e;
  var r, i, n, o, a, s, l, c, h, u = [],
    f = {
      x: 0,
      y: 0,
      z: 0
    };
  this.initFromArray = function(e) {
    this.points = [];
    for (var t = 0; t < e.length; t++) this.points[t] = {
      x: e[t][0],
      y: e[t][1],
      z: e[t][2]
    }
  };
  this.getPoint = function(e) {
    r = (this.points.length - 1) * e;
    i = Math.floor(r);
    n = r - i;
    u[0] = 0 === i ? i : i - 1;
    u[1] = i;
    u[2] = i > this.points.length - 2 ? this.points.length - 1 : i + 1;
    u[3] = i > this.points.length - 3 ? this.points.length - 1 : i + 2;
    s = this.points[u[0]];
    l = this.points[u[1]];
    c = this.points[u[2]];
    h = this.points[u[3]];
    o = n * n;
    a = n * o;
    f.x = t(s.x, l.x, c.x, h.x, n, o, a);
    f.y = t(s.y, l.y, c.y, h.y, n, o, a);
    f.z = t(s.z, l.z, c.z, h.z, n, o, a);
    return f
  };
  this.getControlPointsArray = function() {
    var e, t, r = this.points.length,
      i = [];
    for (e = 0; r > e; e++) {
      t = this.points[e];
      i[e] = [t.x, t.y, t.z]
    }
    return i
  };
  this.getLength = function(e) {
    var t, r, i, n, o = 0,
      a = 0,
      s = 0,
      l = new THREE.Vector3,
      c = new THREE.Vector3,
      h = [],
      u = 0;
    h[0] = 0;
    e || (e = 100);
    i = this.points.length * e;
    l.copy(this.points[0]);
    for (t = 1; i > t; t++) {
      r = t / i;
      n = this.getPoint(r);
      c.copy(n);
      u += c.distanceTo(l);
      l.copy(n);
      o = (this.points.length - 1) * r;
      a = Math.floor(o);
      if (a != s) {
        h[a] = u;
        s = a
      }
    }
    h[h.length] = u;
    return {
      chunks: h,
      total: u
    }
  };
  this.reparametrizeByArcLength = function(e) {
    var t, r, i, n, o, a, s, l, c = [],
      h = new THREE.Vector3,
      u = this.getLength();
    c.push(h.copy(this.points[0]).clone());
    for (t = 1; t < this.points.length; t++) {
      a = u.chunks[t] - u.chunks[t - 1];
      s = Math.ceil(e * a / u.total);
      n = (t - 1) / (this.points.length - 1);
      o = t / (this.points.length - 1);
      for (r = 1; s - 1 > r; r++) {
        i = n + r * (1 / s) * (o - n);
        l = this.getPoint(i);
        c.push(h.copy(l).clone())
      }
      c.push(h.copy(this.points[t]).clone())
    }
    this.points = c
  }
};
THREE.Triangle = function(e, t, r) {
  this.a = void 0 !== e ? e : new THREE.Vector3;
  this.b = void 0 !== t ? t : new THREE.Vector3;
  this.c = void 0 !== r ? r : new THREE.Vector3
};
THREE.Triangle.normal = function() {
  var e = new THREE.Vector3;
  return function(t, r, i, n) {
    var o = n || new THREE.Vector3;
    o.subVectors(i, r);
    e.subVectors(t, r);
    o.cross(e);
    var a = o.lengthSq();
    return a > 0 ? o.multiplyScalar(1 / Math.sqrt(a)) : o.set(0, 0, 0)
  }
}();
THREE.Triangle.barycoordFromPoint = function() {
  var e = new THREE.Vector3,
    t = new THREE.Vector3,
    r = new THREE.Vector3;
  return function(i, n, o, a, s) {
    e.subVectors(a, n);
    t.subVectors(o, n);
    r.subVectors(i, n);
    var l = e.dot(e),
      c = e.dot(t),
      h = e.dot(r),
      u = t.dot(t),
      f = t.dot(r),
      p = l * u - c * c,
      d = s || new THREE.Vector3;
    if (0 == p) return d.set(-2, -1, -1);
    var m = 1 / p,
      E = (u * h - c * f) * m,
      g = (l * f - c * h) * m;
    return d.set(1 - E - g, g, E)
  }
}();
THREE.Triangle.containsPoint = function() {
  var e = new THREE.Vector3;
  return function(t, r, i, n) {
    var o = THREE.Triangle.barycoordFromPoint(t, r, i, n, e);
    return o.x >= 0 && o.y >= 0 && o.x + o.y <= 1
  }
}();
THREE.Triangle.prototype = {
  constructor: THREE.Triangle,
  set: function(e, t, r) {
    this.a.copy(e);
    this.b.copy(t);
    this.c.copy(r);
    return this
  },
  setFromPointsAndIndices: function(e, t, r, i) {
    this.a.copy(e[t]);
    this.b.copy(e[r]);
    this.c.copy(e[i]);
    return this
  },
  copy: function(e) {
    this.a.copy(e.a);
    this.b.copy(e.b);
    this.c.copy(e.c);
    return this
  },
  area: function() {
    var e = new THREE.Vector3,
      t = new THREE.Vector3;
    return function() {
      e.subVectors(this.c, this.b);
      t.subVectors(this.a, this.b);
      return .5 * e.cross(t).length()
    }
  }(),
  midpoint: function(e) {
    var t = e || new THREE.Vector3;
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
  },
  normal: function(e) {
    return THREE.Triangle.normal(this.a, this.b, this.c, e)
  },
  plane: function(e) {
    var t = e || new THREE.Plane;
    return t.setFromCoplanarPoints(this.a, this.b, this.c)
  },
  barycoordFromPoint: function(e, t) {
    return THREE.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
  },
  containsPoint: function(e) {
    return THREE.Triangle.containsPoint(e, this.a, this.b, this.c)
  },
  equals: function(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
  },
  clone: function() {
    return (new THREE.Triangle).copy(this)
  }
};
THREE.Vertex = function(e) {
  console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");
  return e
};
THREE.UV = function(e, t) {
  console.warn("THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.");
  return new THREE.Vector2(e, t)
};
THREE.Clock = function(e) {
  this.autoStart = void 0 !== e ? e : !0;
  this.startTime = 0;
  this.oldTime = 0;
  this.elapsedTime = 0;
  this.running = !1
};
THREE.Clock.prototype = {
  constructor: THREE.Clock,
  start: function() {
    this.startTime = void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now();
    this.oldTime = this.startTime;
    this.running = !0
  },
  stop: function() {
    this.getElapsedTime();
    this.running = !1
  },
  getElapsedTime: function() {
    this.getDelta();
    return this.elapsedTime
  },
  getDelta: function() {
    var e = 0;
    this.autoStart && !this.running && this.start();
    if (this.running) {
      var t = void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now();
      e = .001 * (t - this.oldTime);
      this.oldTime = t;
      this.elapsedTime += e
    }
    return e
  }
};
THREE.EventDispatcher = function() {};
THREE.EventDispatcher.prototype = {
  constructor: THREE.EventDispatcher,
  addEventListener: function(e, t) {
    void 0 === this._listeners && (this._listeners = {});
    var r = this._listeners;
    void 0 === r[e] && (r[e] = []); - 1 === r[e].indexOf(t) && r[e].push(t)
  },
  hasEventListener: function(e, t) {
    if (void 0 === this._listeners) return !1;
    var r = this._listeners;
    return void 0 !== r[e] && -1 !== r[e].indexOf(t) ? !0 : !1
  },
  removeEventListener: function(e, t) {
    if (void 0 !== this._listeners) {
      var r = this._listeners,
        i = r[e].indexOf(t); - 1 !== i && r[e].splice(i, 1)
    }
  },
  dispatchEvent: function(e) {
    if (void 0 !== this._listeners) {
      var t = this._listeners,
        r = t[e.type];
      if (void 0 !== r) {
        e.target = this;
        for (var i = 0, n = r.length; n > i; i++) r[i].call(this, e)
      }
    }
  }
};
! function(e) {
  e.Raycaster = function(t, r, i, n) {
    this.ray = new e.Ray(t, r);
    this.ray.direction.lengthSq() > 0 && this.ray.direction.normalize();
    this.near = i || 0;
    this.far = n || 1 / 0
  };
  var t = new e.Sphere,
    r = new e.Ray,
    i = new e.Plane,
    n = new e.Vector3,
    o = new e.Vector3,
    a = new e.Matrix4,
    s = function(e, t) {
      return e.distance - t.distance
    },
    l = function(s, c, h) {
      if (s instanceof e.Particle) {
        o.getPositionFromMatrix(s.matrixWorld);
        var u = c.ray.distanceToPoint(o);
        if (u > s.scale.x) return h;
        h.push({
          distance: u,
          point: s.position,
          face: null,
          object: s
        })
      } else if (s instanceof e.LOD) {
        o.getPositionFromMatrix(s.matrixWorld);
        var u = c.ray.origin.distanceTo(o);
        l(s.getObjectForDistance(u), c, h)
      } else if (s instanceof e.Mesh) {
        o.getPositionFromMatrix(s.matrixWorld);
        t.set(o, s.geometry.boundingSphere.radius * s.matrixWorld.getMaxScaleOnAxis());
        if (!c.ray.isIntersectionSphere(t)) return h;
        var f, p, d, m, E = s.geometry,
          g = E.vertices,
          v = s.material instanceof e.MeshFaceMaterial,
          y = v === !0 ? s.material.materials : null,
          T = s.material.side,
          R = c.precision;
        a.getInverse(s.matrixWorld);
        r.copy(c.ray).applyMatrix4(a);
        for (var x = 0, w = E.faces.length; w > x; x++) {
          var H = E.faces[x],
            b = v === !0 ? y[H.materialIndex] : s.material;
          if (void 0 !== b) {
            i.setFromNormalAndCoplanarPoint(H.normal, g[H.a]);
            var _ = r.distanceToPlane(i);
            if (!(Math.abs(_) < R || 0 > _)) {
              T = b.side;
              if (T !== e.DoubleSide) {
                var S = r.direction.dot(i.normal);
                if (!(T === e.FrontSide ? 0 > S : S > 0)) continue
              }
              if (!(_ < c.near || _ > c.far)) {
                n = r.at(_, n);
                if (H instanceof e.Face3) {
                  f = g[H.a];
                  p = g[H.b];
                  d = g[H.c];
                  if (!e.Triangle.containsPoint(n, f, p, d)) continue
                } else {
                  if (!(H instanceof e.Face4)) throw Error("face type not supported");
                  f = g[H.a];
                  p = g[H.b];
                  d = g[H.c];
                  m = g[H.d];
                  if (!e.Triangle.containsPoint(n, f, p, m) && !e.Triangle.containsPoint(n, p, d, m)) continue
                }
                h.push({
                  distance: _,
                  point: c.ray.at(_),
                  face: H,
                  faceIndex: x,
                  object: s
                })
              }
            }
          }
        }
      }
    },
    c = function(e, t, r) {
      for (var i = e.getDescendants(), n = 0, o = i.length; o > n; n++) l(i[n], t, r)
    };
  e.Raycaster.prototype.precision = 1e-4;
  e.Raycaster.prototype.set = function(e, t) {
    this.ray.set(e, t);
    this.ray.direction.length() > 0 && this.ray.direction.normalize()
  };
  e.Raycaster.prototype.intersectObject = function(e, t) {
    var r = [];
    t === !0 && c(e, this, r);
    l(e, this, r);
    r.sort(s);
    return r
  };
  e.Raycaster.prototype.intersectObjects = function(e, t) {
    for (var r = [], i = 0, n = e.length; n > i; i++) {
      l(e[i], this, r);
      t === !0 && c(e[i], this, r)
    }
    r.sort(s);
    return r
  }
}(THREE);
THREE.Object3D = function() {
  this.id = THREE.Object3DIdCount++;
  this.name = "";
  this.parent = void 0;
  this.children = [];
  this.up = new THREE.Vector3(0, 1, 0);
  this.position = new THREE.Vector3;
  this.rotation = new THREE.Vector3;
  this.eulerOrder = THREE.Object3D.defaultEulerOrder;
  this.scale = new THREE.Vector3(1, 1, 1);
  this.renderDepth = null;
  this.rotationAutoUpdate = !0;
  this.matrix = new THREE.Matrix4;
  this.matrixWorld = new THREE.Matrix4;
  this.matrixAutoUpdate = !0;
  this.matrixWorldNeedsUpdate = !0;
  this.quaternion = new THREE.Quaternion;
  this.useQuaternion = !1;
  this.visible = !0;
  this.castShadow = !1;
  this.receiveShadow = !1;
  this.frustumCulled = !0;
  this.userData = {}
};
THREE.Object3D.prototype = {
  constructor: THREE.Object3D,
  applyMatrix: function() {
    var e = new THREE.Matrix4;
    return function(t) {
      this.matrix.multiplyMatrices(t, this.matrix);
      this.position.getPositionFromMatrix(this.matrix);
      this.scale.getScaleFromMatrix(this.matrix);
      e.extractRotation(this.matrix);
      this.useQuaternion === !0 ? this.quaternion.setFromRotationMatrix(e) : this.rotation.setEulerFromRotationMatrix(e, this.eulerOrder)
    }
  }(),
  rotateOnAxis: function() {
    var e = new THREE.Quaternion,
      t = new THREE.Quaternion;
    return function(r, i) {
      e.setFromAxisAngle(r, i);
      if (this.useQuaternion === !0) this.quaternion.multiply(e);
      else {
        t.setFromEuler(this.rotation, this.eulerOrder);
        t.multiply(e);
        this.rotation.setEulerFromQuaternion(t, this.eulerOrder)
      }
      return this
    }
  }(),
  translateOnAxis: function() {
    var e = new THREE.Vector3;
    return function(t, r) {
      e.copy(t);
      this.useQuaternion === !0 ? e.applyQuaternion(this.quaternion) : e.applyEuler(this.rotation, this.eulerOrder);
      this.position.add(e.multiplyScalar(r));
      return this
    }
  }(),
  translate: function(e, t) {
    console.warn("DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed.");
    return this.translateOnAxis(t, e)
  },
  translateX: function() {
    var e = new THREE.Vector3(1, 0, 0);
    return function(t) {
      return this.translateOnAxis(e, t)
    }
  }(),
  translateY: function() {
    var e = new THREE.Vector3(0, 1, 0);
    return function(t) {
      return this.translateOnAxis(e, t)
    }
  }(),
  translateZ: function() {
    var e = new THREE.Vector3(0, 0, 1);
    return function(t) {
      return this.translateOnAxis(e, t)
    }
  }(),
  localToWorld: function(e) {
    return e.applyMatrix4(this.matrixWorld)
  },
  worldToLocal: function() {
    var e = new THREE.Matrix4;
    return function(t) {
      return t.applyMatrix4(e.getInverse(this.matrixWorld))
    }
  }(),
  lookAt: function() {
    var e = new THREE.Matrix4;
    return function(t) {
      e.lookAt(t, this.position, this.up);
      this.useQuaternion === !0 ? this.quaternion.setFromRotationMatrix(e) : this.rotation.setEulerFromRotationMatrix(e, this.eulerOrder)
    }
  }(),
  add: function(e) {
    if (e !== this) {
      if (e instanceof THREE.Object3D) {
        void 0 !== e.parent && e.parent.remove(e);
        e.parent = this;
        this.children.push(e);
        for (var t = this; void 0 !== t.parent;) t = t.parent;
        void 0 !== t && t instanceof THREE.Scene && t.__addObject(e)
      }
    } else console.warn("THREE.Object3D.add: An object can't be added as a child of itself.")
  },
  remove: function(e) {
    var t = this.children.indexOf(e);
    if (-1 !== t) {
      e.parent = void 0;
      this.children.splice(t, 1);
      for (var r = this; void 0 !== r.parent;) r = r.parent;
      void 0 !== r && r instanceof THREE.Scene && r.__removeObject(e)
    }
  },
  traverse: function(e) {
    e(this);
    for (var t = 0, r = this.children.length; r > t; t++) this.children[t].traverse(e)
  },
  getObjectById: function(e, t) {
    for (var r = 0, i = this.children.length; i > r; r++) {
      var n = this.children[r];
      if (n.id === e) return n;
      if (t === !0) {
        n = n.getObjectById(e, t);
        if (void 0 !== n) return n
      }
    }
    return void 0
  },
  getObjectByName: function(e, t) {
    for (var r = 0, i = this.children.length; i > r; r++) {
      var n = this.children[r];
      if (n.name === e) return n;
      if (t === !0) {
        n = n.getObjectByName(e, t);
        if (void 0 !== n) return n
      }
    }
    return void 0
  },
  getChildByName: function(e, t) {
    console.warn("DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName().");
    return this.getObjectByName(e, t)
  },
  getDescendants: function(e) {
    void 0 === e && (e = []);
    Array.prototype.push.apply(e, this.children);
    for (var t = 0, r = this.children.length; r > t; t++) this.children[t].getDescendants(e);
    return e
  },
  updateMatrix: function() {
    this.useQuaternion === !1 ? this.matrix.makeFromPositionEulerScale(this.position, this.rotation, this.eulerOrder, this.scale) : this.matrix.makeFromPositionQuaternionScale(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = !0
  },
  updateMatrixWorld: function(e) {
    this.matrixAutoUpdate === !0 && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate === !0 || e === !0) {
      void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      this.matrixWorldNeedsUpdate = !1;
      e = !0
    }
    for (var t = 0, r = this.children.length; r > t; t++) this.children[t].updateMatrixWorld(e)
  },
  clone: function(e) {
    void 0 === e && (e = new THREE.Object3D);
    e.name = this.name;
    e.up.copy(this.up);
    e.position.copy(this.position);
    e.rotation instanceof THREE.Vector3 && e.rotation.copy(this.rotation);
    e.eulerOrder = this.eulerOrder;
    e.scale.copy(this.scale);
    e.renderDepth = this.renderDepth;
    e.rotationAutoUpdate = this.rotationAutoUpdate;
    e.matrix.copy(this.matrix);
    e.matrixWorld.copy(this.matrixWorld);
    e.matrixAutoUpdate = this.matrixAutoUpdate;
    e.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;
    e.quaternion.copy(this.quaternion);
    e.useQuaternion = this.useQuaternion;
    e.visible = this.visible;
    e.castShadow = this.castShadow;
    e.receiveShadow = this.receiveShadow;
    e.frustumCulled = this.frustumCulled;
    e.userData = JSON.parse(JSON.stringify(this.userData));
    for (var t = 0; t < this.children.length; t++) {
      var r = this.children[t];
      e.add(r.clone())
    }
    return e
  }
};
THREE.Object3D.defaultEulerOrder = "XYZ", THREE.Object3DIdCount = 0;
THREE.Projector = function() {
  function e() {
    if (c === R) {
      var e = new THREE.RenderableObject;
      T.push(e);
      R++;
      c++;
      return e
    }
    return T[c++]
  }

  function t() {
    if (u === w) {
      var e = new THREE.RenderableVertex;
      x.push(e);
      w++;
      u++;
      return e
    }
    return x[u++]
  }

  function r() {
    if (p === b) {
      var e = new THREE.RenderableFace3;
      H.push(e);
      b++;
      p++;
      return e
    }
    return H[p++]
  }

  function i() {
    if (d === S) {
      var e = new THREE.RenderableFace4;
      _.push(e);
      S++;
      d++;
      return e
    }
    return _[d++]
  }

  function n() {
    if (E === C) {
      var e = new THREE.RenderableLine;
      M.push(e);
      C++;
      E++;
      return e
    }
    return M[E++]
  }

  function o() {
    if (v === L) {
      var e = new THREE.RenderableParticle;
      A.push(e);
      L++;
      v++;
      return e
    }
    return A[v++]
  }

  function a(e, t) {
    return t.z - e.z
  }

  function s(e, t) {
    var r = 0,
      i = 1,
      n = e.z + e.w,
      o = t.z + t.w,
      a = -e.z + e.w,
      s = -t.z + t.w;
    if (n >= 0 && o >= 0 && a >= 0 && s >= 0) return !0;
    if (0 > n && 0 > o || 0 > a && 0 > s) return !1;
    0 > n ? r = Math.max(r, n / (n - o)) : 0 > o && (i = Math.min(i, n / (n - o)));
    0 > a ? r = Math.max(r, a / (a - s)) : 0 > s && (i = Math.min(i, a / (a - s)));
    if (r > i) return !1;
    e.lerp(t, r);
    t.lerp(e, 1 - i);
    return !0
  }
  var l, c, h, u, f, p, d, m, E, g, v, y, T = [],
    R = 0,
    x = [],
    w = 0,
    H = [],
    b = 0,
    _ = [],
    S = 0,
    M = [],
    C = 0,
    A = [],
    L = 0,
    D = {
      objects: [],
      sprites: [],
      lights: [],
      elements: []
    },
    P = new THREE.Vector3,
    F = new THREE.Vector4,
    N = new THREE.Box3(new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, 1, 1)),
    U = new THREE.Box3,
    V = new Array(3),
    z = new Array(4),
    B = new THREE.Matrix4,
    O = new THREE.Matrix4,
    k = new THREE.Matrix4,
    I = new THREE.Matrix3,
    j = new THREE.Matrix3,
    G = new THREE.Vector3,
    W = new THREE.Frustum,
    X = new THREE.Vector4,
    q = new THREE.Vector4;
  this.projectVector = function(e, t) {
    t.matrixWorldInverse.getInverse(t.matrixWorld);
    O.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse);
    return e.applyProjection(O)
  };
  this.unprojectVector = function(e, t) {
    t.projectionMatrixInverse.getInverse(t.projectionMatrix);
    O.multiplyMatrices(t.matrixWorld, t.projectionMatrixInverse);
    return e.applyProjection(O)
  };
  this.pickingRay = function(e, t) {
    e.z = -1;
    var r = new THREE.Vector3(e.x, e.y, 1);
    this.unprojectVector(e, t);
    this.unprojectVector(r, t);
    r.sub(e).normalize();
    return new THREE.Raycaster(e, r)
  };
  var Y = function(t, r) {
    c = 0;
    D.objects.length = 0;
    D.sprites.length = 0;
    D.lights.length = 0;
    var i = function(t) {
      for (var r = 0, n = t.children.length; n > r; r++) {
        var o = t.children[r];
        if (o.visible !== !1) {
          if (o instanceof THREE.Light) D.lights.push(o);
          else if (o instanceof THREE.Mesh || o instanceof THREE.Line) {
            if (o.frustumCulled === !1 || W.intersectsObject(o) === !0) {
              l = e();
              l.object = o;
              if (null !== o.renderDepth) l.z = o.renderDepth;
              else {
                P.getPositionFromMatrix(o.matrixWorld);
                P.applyProjection(O);
                l.z = P.z
              }
              D.objects.push(l)
            }
          } else if (o instanceof THREE.Sprite || o instanceof THREE.Particle) {
            l = e();
            l.object = o;
            if (null !== o.renderDepth) l.z = o.renderDepth;
            else {
              P.getPositionFromMatrix(o.matrixWorld);
              P.applyProjection(O);
              l.z = P.z
            }
            D.sprites.push(l)
          } else {
            l = e();
            l.object = o;
            if (null !== o.renderDepth) l.z = o.renderDepth;
            else {
              P.getPositionFromMatrix(o.matrixWorld);
              P.applyProjection(O);
              l.z = P.z
            }
            D.objects.push(l)
          }
          i(o)
        }
      }
    };
    i(t);
    r === !0 && D.objects.sort(a);
    return D
  };
  this.projectScene = function(e, l, c, T) {
    var R, w, H, b, _, S, M, C, A, L, P, $, K, Q, Z, J, ee, te, re, ie, ne, oe, ae, se, le, ce, he = !1;
    p = 0;
    d = 0;
    E = 0;
    v = 0;
    D.elements.length = 0;
    e.autoUpdate === !0 && e.updateMatrixWorld();
    void 0 === l.parent && l.updateMatrixWorld();
    B.copy(l.matrixWorldInverse.getInverse(l.matrixWorld));
    O.multiplyMatrices(l.projectionMatrix, B);
    j.getNormalMatrix(B);
    W.setFromMatrix(O);
    D = Y(e, c);
    for (R = 0, w = D.objects.length; w > R; R++) {
      K = D.objects[R].object;
      y = K.matrixWorld;
      u = 0;
      if (K instanceof THREE.Mesh) {
        Q = K.geometry;
        Z = Q.vertices;
        J = Q.faces;
        re = Q.faceVertexUvs;
        I.getNormalMatrix(y);
        le = K.material instanceof THREE.MeshFaceMaterial;
        ce = le === !0 ? K.material : null;
        for (H = 0, b = Z.length; b > H; H++) {
          h = t();
          h.positionWorld.copy(Z[H]).applyMatrix4(y);
          h.positionScreen.copy(h.positionWorld).applyMatrix4(O);
          h.positionScreen.x /= h.positionScreen.w;
          h.positionScreen.y /= h.positionScreen.w;
          h.positionScreen.z /= h.positionScreen.w;
          h.visible = !(h.positionScreen.x < -1 || h.positionScreen.x > 1 || h.positionScreen.y < -1 || h.positionScreen.y > 1 || h.positionScreen.z < -1 || h.positionScreen.z > 1)
        }
        for (_ = 0, S = J.length; S > _; _++) {
          ee = J[_];
          var ue = le === !0 ? ce.materials[ee.materialIndex] : K.material;
          if (void 0 !== ue) {
            var fe = ue.side;
            if (ee instanceof THREE.Face3) {
              ne = x[ee.a];
              oe = x[ee.b];
              ae = x[ee.c];
              V[0] = ne.positionScreen;
              V[1] = oe.positionScreen;
              V[2] = ae.positionScreen;
              if (ne.visible !== !0 && oe.visible !== !0 && ae.visible !== !0 && !N.isIntersectionBox(U.setFromPoints(V))) continue;
              he = (ae.positionScreen.x - ne.positionScreen.x) * (oe.positionScreen.y - ne.positionScreen.y) - (ae.positionScreen.y - ne.positionScreen.y) * (oe.positionScreen.x - ne.positionScreen.x) < 0;
              if (fe !== THREE.DoubleSide && he !== (fe === THREE.FrontSide)) continue;
              f = r();
              f.v1.copy(ne);
              f.v2.copy(oe);
              f.v3.copy(ae)
            } else if (ee instanceof THREE.Face4) {
              ne = x[ee.a];
              oe = x[ee.b];
              ae = x[ee.c];
              se = x[ee.d];
              z[0] = ne.positionScreen;
              z[1] = oe.positionScreen;
              z[2] = ae.positionScreen;
              z[3] = se.positionScreen;
              if (ne.visible !== !0 && oe.visible !== !0 && ae.visible !== !0 && se.visible !== !0 && !N.isIntersectionBox(U.setFromPoints(z))) continue;
              he = (se.positionScreen.x - ne.positionScreen.x) * (oe.positionScreen.y - ne.positionScreen.y) - (se.positionScreen.y - ne.positionScreen.y) * (oe.positionScreen.x - ne.positionScreen.x) < 0 || (oe.positionScreen.x - ae.positionScreen.x) * (se.positionScreen.y - ae.positionScreen.y) - (oe.positionScreen.y - ae.positionScreen.y) * (se.positionScreen.x - ae.positionScreen.x) < 0;
              if (fe !== THREE.DoubleSide && he !== (fe === THREE.FrontSide)) continue;
              f = i();
              f.v1.copy(ne);
              f.v2.copy(oe);
              f.v3.copy(ae);
              f.v4.copy(se)
            }
            f.normalModel.copy(ee.normal);
            he !== !1 || fe !== THREE.BackSide && fe !== THREE.DoubleSide || f.normalModel.negate();
            f.normalModel.applyMatrix3(I).normalize();
            f.normalModelView.copy(f.normalModel).applyMatrix3(j);
            f.centroidModel.copy(ee.centroid).applyMatrix4(y);
            te = ee.vertexNormals;
            for (M = 0, C = te.length; C > M; M++) {
              var pe = f.vertexNormalsModel[M];
              pe.copy(te[M]);
              he !== !1 || fe !== THREE.BackSide && fe !== THREE.DoubleSide || pe.negate();
              pe.applyMatrix3(I).normalize();
              var de = f.vertexNormalsModelView[M];
              de.copy(pe).applyMatrix3(j)
            }
            f.vertexNormalsLength = te.length;
            for (A = 0, L = re.length; L > A; A++) {
              ie = re[A][_];
              if (void 0 !== ie)
                for (P = 0, $ = ie.length; $ > P; P++) f.uvs[A][P] = ie[P]
            }
            f.color = ee.color;
            f.material = ue;
            G.copy(f.centroidModel).applyProjection(O);
            f.z = G.z;
            D.elements.push(f)
          }
        }
      } else if (K instanceof THREE.Line) {
        k.multiplyMatrices(O, y);
        Z = K.geometry.vertices;
        ne = t();
        ne.positionScreen.copy(Z[0]).applyMatrix4(k);
        var me = K.type === THREE.LinePieces ? 2 : 1;
        for (H = 1, b = Z.length; b > H; H++) {
          ne = t();
          ne.positionScreen.copy(Z[H]).applyMatrix4(k);
          if (!((H + 1) % me > 0)) {
            oe = x[u - 2];
            X.copy(ne.positionScreen);
            q.copy(oe.positionScreen);
            if (s(X, q) === !0) {
              X.multiplyScalar(1 / X.w);
              q.multiplyScalar(1 / q.w);
              m = n();
              m.v1.positionScreen.copy(X);
              m.v2.positionScreen.copy(q);
              m.z = Math.max(X.z, q.z);
              m.material = K.material;
              if (K.material.vertexColors === THREE.VertexColors) {
                m.vertexColors[0].copy(K.geometry.colors[H]);
                m.vertexColors[1].copy(K.geometry.colors[H - 1])
              }
              D.elements.push(m)
            }
          }
        }
      }
    }
    for (R = 0, w = D.sprites.length; w > R; R++) {
      K = D.sprites[R].object;
      y = K.matrixWorld;
      if (K instanceof THREE.Particle) {
        F.set(y.elements[12], y.elements[13], y.elements[14], 1);
        F.applyMatrix4(O);
        F.z /= F.w;
        if (F.z > 0 && F.z < 1) {
          g = o();
          g.object = K;
          g.x = F.x / F.w;
          g.y = F.y / F.w;
          g.z = F.z;
          g.rotation = K.rotation.z;
          g.scale.x = K.scale.x * Math.abs(g.x - (F.x + l.projectionMatrix.elements[0]) / (F.w + l.projectionMatrix.elements[12]));
          g.scale.y = K.scale.y * Math.abs(g.y - (F.y + l.projectionMatrix.elements[5]) / (F.w + l.projectionMatrix.elements[13]));
          g.material = K.material;
          D.elements.push(g)
        }
      }
    }
    T === !0 && D.elements.sort(a);
    return D
  }
};
THREE.Face3 = function(e, t, r, i, n, o) {
  this.a = e;
  this.b = t;
  this.c = r;
  this.normal = i instanceof THREE.Vector3 ? i : new THREE.Vector3;
  this.vertexNormals = i instanceof Array ? i : [];
  this.color = n instanceof THREE.Color ? n : new THREE.Color;
  this.vertexColors = n instanceof Array ? n : [];
  this.vertexTangents = [];
  this.materialIndex = void 0 !== o ? o : 0;
  this.centroid = new THREE.Vector3
};
THREE.Face3.prototype = {
  constructor: THREE.Face3,
  clone: function() {
    var e = new THREE.Face3(this.a, this.b, this.c);
    e.normal.copy(this.normal);
    e.color.copy(this.color);
    e.centroid.copy(this.centroid);
    e.materialIndex = this.materialIndex;
    var t, r;
    for (t = 0, r = this.vertexNormals.length; r > t; t++) e.vertexNormals[t] = this.vertexNormals[t].clone();
    for (t = 0, r = this.vertexColors.length; r > t; t++) e.vertexColors[t] = this.vertexColors[t].clone();
    for (t = 0, r = this.vertexTangents.length; r > t; t++) e.vertexTangents[t] = this.vertexTangents[t].clone();
    return e
  }
};
THREE.Face4 = function(e, t, r, i, n, o, a) {
  this.a = e;
  this.b = t;
  this.c = r;
  this.d = i;
  this.normal = n instanceof THREE.Vector3 ? n : new THREE.Vector3;
  this.vertexNormals = n instanceof Array ? n : [];
  this.color = o instanceof THREE.Color ? o : new THREE.Color;
  this.vertexColors = o instanceof Array ? o : [];
  this.vertexTangents = [];
  this.materialIndex = void 0 !== a ? a : 0;
  this.centroid = new THREE.Vector3
};
THREE.Face4.prototype = {
  constructor: THREE.Face4,
  clone: function() {
    var e = new THREE.Face4(this.a, this.b, this.c, this.d);
    e.normal.copy(this.normal);
    e.color.copy(this.color);
    e.centroid.copy(this.centroid);
    e.materialIndex = this.materialIndex;
    var t, r;
    for (t = 0, r = this.vertexNormals.length; r > t; t++) e.vertexNormals[t] = this.vertexNormals[t].clone();
    for (t = 0, r = this.vertexColors.length; r > t; t++) e.vertexColors[t] = this.vertexColors[t].clone();
    for (t = 0, r = this.vertexTangents.length; r > t; t++) e.vertexTangents[t] = this.vertexTangents[t].clone();
    return e
  }
};
THREE.Geometry = function() {
  this.id = THREE.GeometryIdCount++;
  this.name = "";
  this.vertices = [];
  this.colors = [];
  this.normals = [];
  this.faces = [];
  this.faceUvs = [
    []
  ];
  this.faceVertexUvs = [
    []
  ];
  this.morphTargets = [];
  this.morphColors = [];
  this.morphNormals = [];
  this.skinWeights = [];
  this.skinIndices = [];
  this.lineDistances = [];
  this.boundingBox = null;
  this.boundingSphere = null;
  this.hasTangents = !1;
  this.dynamic = !0;
  this.verticesNeedUpdate = !1;
  this.elementsNeedUpdate = !1;
  this.uvsNeedUpdate = !1;
  this.normalsNeedUpdate = !1;
  this.tangentsNeedUpdate = !1;
  this.colorsNeedUpdate = !1;
  this.lineDistancesNeedUpdate = !1;
  this.buffersNeedUpdate = !1
};
THREE.Geometry.prototype = {
  constructor: THREE.Geometry,
  addEventListener: THREE.EventDispatcher.prototype.addEventListener,
  hasEventListener: THREE.EventDispatcher.prototype.hasEventListener,
  removeEventListener: THREE.EventDispatcher.prototype.removeEventListener,
  dispatchEvent: THREE.EventDispatcher.prototype.dispatchEvent,
  applyMatrix: function(e) {
    for (var t = (new THREE.Matrix3).getNormalMatrix(e), r = 0, i = this.vertices.length; i > r; r++) {
      var n = this.vertices[r];
      n.applyMatrix4(e)
    }
    for (var r = 0, i = this.faces.length; i > r; r++) {
      var o = this.faces[r];
      o.normal.applyMatrix3(t).normalize();
      for (var a = 0, s = o.vertexNormals.length; s > a; a++) o.vertexNormals[a].applyMatrix3(t).normalize();
      o.centroid.applyMatrix4(e)
    }
  },
  computeCentroids: function() {
    var e, t, r;
    for (e = 0, t = this.faces.length; t > e; e++) {
      r = this.faces[e];
      r.centroid.set(0, 0, 0);
      if (r instanceof THREE.Face3) {
        r.centroid.add(this.vertices[r.a]);
        r.centroid.add(this.vertices[r.b]);
        r.centroid.add(this.vertices[r.c]);
        r.centroid.divideScalar(3)
      } else if (r instanceof THREE.Face4) {
        r.centroid.add(this.vertices[r.a]);
        r.centroid.add(this.vertices[r.b]);
        r.centroid.add(this.vertices[r.c]);
        r.centroid.add(this.vertices[r.d]);
        r.centroid.divideScalar(4)
      }
    }
  },
  computeFaceNormals: function() {
    for (var e = new THREE.Vector3, t = new THREE.Vector3, r = 0, i = this.faces.length; i > r; r++) {
      var n = this.faces[r],
        o = this.vertices[n.a],
        a = this.vertices[n.b],
        s = this.vertices[n.c];
      e.subVectors(s, a);
      t.subVectors(o, a);
      e.cross(t);
      e.normalize();
      n.normal.copy(e)
    }
  },
  computeVertexNormals: function(e) {
    var t, r, i, n, o, a;
    if (void 0 === this.__tmpVertices) {
      this.__tmpVertices = new Array(this.vertices.length);
      a = this.__tmpVertices;
      for (t = 0, r = this.vertices.length; r > t; t++) a[t] = new THREE.Vector3;
      for (i = 0, n = this.faces.length; n > i; i++) {
        o = this.faces[i];
        o instanceof THREE.Face3 ? o.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3] : o instanceof THREE.Face4 && (o.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3])
      }
    } else {
      a = this.__tmpVertices;
      for (t = 0, r = this.vertices.length; r > t; t++) a[t].set(0, 0, 0)
    }
    if (e) {
      var s, l, c, h, u = new THREE.Vector3,
        f = new THREE.Vector3,
        p = new THREE.Vector3,
        d = new THREE.Vector3,
        m = new THREE.Vector3;
      for (i = 0, n = this.faces.length; n > i; i++) {
        o = this.faces[i];
        if (o instanceof THREE.Face3) {
          s = this.vertices[o.a];
          l = this.vertices[o.b];
          c = this.vertices[o.c];
          u.subVectors(c, l);
          f.subVectors(s, l);
          u.cross(f);
          a[o.a].add(u);
          a[o.b].add(u);
          a[o.c].add(u)
        } else if (o instanceof THREE.Face4) {
          s = this.vertices[o.a];
          l = this.vertices[o.b];
          c = this.vertices[o.c];
          h = this.vertices[o.d];
          p.subVectors(h, l);
          f.subVectors(s, l);
          p.cross(f);
          a[o.a].add(p);
          a[o.b].add(p);
          a[o.d].add(p);
          d.subVectors(h, c);
          m.subVectors(l, c);
          d.cross(m);
          a[o.b].add(d);
          a[o.c].add(d);
          a[o.d].add(d)
        }
      }
    } else
      for (i = 0, n = this.faces.length; n > i; i++) {
        o = this.faces[i];
        if (o instanceof THREE.Face3) {
          a[o.a].add(o.normal);
          a[o.b].add(o.normal);
          a[o.c].add(o.normal)
        } else if (o instanceof THREE.Face4) {
          a[o.a].add(o.normal);
          a[o.b].add(o.normal);
          a[o.c].add(o.normal);
          a[o.d].add(o.normal)
        }
      }
    for (t = 0, r = this.vertices.length; r > t; t++) a[t].normalize();
    for (i = 0, n = this.faces.length; n > i; i++) {
      o = this.faces[i];
      if (o instanceof THREE.Face3) {
        o.vertexNormals[0].copy(a[o.a]);
        o.vertexNormals[1].copy(a[o.b]);
        o.vertexNormals[2].copy(a[o.c])
      } else if (o instanceof THREE.Face4) {
        o.vertexNormals[0].copy(a[o.a]);
        o.vertexNormals[1].copy(a[o.b]);
        o.vertexNormals[2].copy(a[o.c]);
        o.vertexNormals[3].copy(a[o.d])
      }
    }
  },
  computeMorphNormals: function() {
    var e, t, r, i, n;
    for (r = 0, i = this.faces.length; i > r; r++) {
      n = this.faces[r];
      n.__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone();
      n.__originalVertexNormals || (n.__originalVertexNormals = []);
      for (e = 0, t = n.vertexNormals.length; t > e; e++) n.__originalVertexNormals[e] ? n.__originalVertexNormals[e].copy(n.vertexNormals[e]) : n.__originalVertexNormals[e] = n.vertexNormals[e].clone()
    }
    var o = new THREE.Geometry;
    o.faces = this.faces;
    for (e = 0, t = this.morphTargets.length; t > e; e++) {
      if (!this.morphNormals[e]) {
        this.morphNormals[e] = {};
        this.morphNormals[e].faceNormals = [];
        this.morphNormals[e].vertexNormals = [];
        var a, s, l = this.morphNormals[e].faceNormals,
          c = this.morphNormals[e].vertexNormals;
        for (r = 0, i = this.faces.length; i > r; r++) {
          n = this.faces[r];
          a = new THREE.Vector3;
          s = n instanceof THREE.Face3 ? {
            a: new THREE.Vector3,
            b: new THREE.Vector3,
            c: new THREE.Vector3
          } : {
            a: new THREE.Vector3,
            b: new THREE.Vector3,
            c: new THREE.Vector3,
            d: new THREE.Vector3
          };
          l.push(a);
          c.push(s)
        }
      }
      var h = this.morphNormals[e];
      o.vertices = this.morphTargets[e].vertices;
      o.computeFaceNormals();
      o.computeVertexNormals();
      var a, s;
      for (r = 0, i = this.faces.length; i > r; r++) {
        n = this.faces[r];
        a = h.faceNormals[r];
        s = h.vertexNormals[r];
        a.copy(n.normal);
        if (n instanceof THREE.Face3) {
          s.a.copy(n.vertexNormals[0]);
          s.b.copy(n.vertexNormals[1]);
          s.c.copy(n.vertexNormals[2])
        } else {
          s.a.copy(n.vertexNormals[0]);
          s.b.copy(n.vertexNormals[1]);
          s.c.copy(n.vertexNormals[2]);
          s.d.copy(n.vertexNormals[3])
        }
      }
    }
    for (r = 0, i = this.faces.length; i > r; r++) {
      n = this.faces[r];
      n.normal = n.__originalFaceNormal;
      n.vertexNormals = n.__originalVertexNormals
    }
  },
  computeTangents: function() {
    function e(e, t, r, i, n, o, a) {
      c = e.vertices[t];
      h = e.vertices[r];
      u = e.vertices[i];
      f = l[n];
      p = l[o];
      d = l[a];
      m = h.x - c.x;
      E = u.x - c.x;
      g = h.y - c.y;
      v = u.y - c.y;
      y = h.z - c.z;
      T = u.z - c.z;
      R = p.x - f.x;
      x = d.x - f.x;
      w = p.y - f.y;
      H = d.y - f.y;
      b = 1 / (R * H - x * w);
      L.set((H * m - w * E) * b, (H * g - w * v) * b, (H * y - w * T) * b);
      D.set((R * E - x * m) * b, (R * v - x * g) * b, (R * T - x * y) * b);
      C[t].add(L);
      C[r].add(L);
      C[i].add(L);
      A[t].add(D);
      A[r].add(D);
      A[i].add(D)
    }
    var t, r, i, n, o, a, s, l, c, h, u, f, p, d, m, E, g, v, y, T, R, x, w, H, b, _, S, M, C = [],
      A = [],
      L = new THREE.Vector3,
      D = new THREE.Vector3,
      P = new THREE.Vector3,
      F = new THREE.Vector3,
      N = new THREE.Vector3;
    for (i = 0, n = this.vertices.length; n > i; i++) {
      C[i] = new THREE.Vector3;
      A[i] = new THREE.Vector3
    }
    for (t = 0, r = this.faces.length; r > t; t++) {
      s = this.faces[t];
      l = this.faceVertexUvs[0][t];
      if (s instanceof THREE.Face3) e(this, s.a, s.b, s.c, 0, 1, 2);
      else if (s instanceof THREE.Face4) {
        e(this, s.a, s.b, s.d, 0, 1, 3);
        e(this, s.b, s.c, s.d, 1, 2, 3)
      }
    }
    var U = ["a", "b", "c", "d"];
    for (t = 0, r = this.faces.length; r > t; t++) {
      s = this.faces[t];
      for (o = 0; o < s.vertexNormals.length; o++) {
        N.copy(s.vertexNormals[o]);
        a = s[U[o]];
        _ = C[a];
        P.copy(_);
        P.sub(N.multiplyScalar(N.dot(_))).normalize();
        F.crossVectors(s.vertexNormals[o], _);
        S = F.dot(A[a]);
        M = 0 > S ? -1 : 1;
        s.vertexTangents[o] = new THREE.Vector4(P.x, P.y, P.z, M)
      }
    }
    this.hasTangents = !0
  },
  computeLineDistances: function() {
    for (var e = 0, t = this.vertices, r = 0, i = t.length; i > r; r++) {
      r > 0 && (e += t[r].distanceTo(t[r - 1]));
      this.lineDistances[r] = e
    }
  },
  computeBoundingBox: function() {
    null === this.boundingBox && (this.boundingBox = new THREE.Box3);
    this.boundingBox.setFromPoints(this.vertices)
  },
  computeBoundingSphere: function() {
    null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
    this.boundingSphere.setFromCenterAndPoints(this.boundingSphere.center, this.vertices)
  },
  mergeVertices: function() {
    var e, t, r, i, n, o, a, s, l, c = {},
      h = [],
      u = [],
      f = 4,
      p = Math.pow(10, f);
    this.__tmpVertices = void 0;
    for (r = 0, i = this.vertices.length; i > r; r++) {
      e = this.vertices[r];
      t = [Math.round(e.x * p), Math.round(e.y * p), Math.round(e.z * p)].join("_");
      if (void 0 === c[t]) {
        c[t] = r;
        h.push(this.vertices[r]);
        u[r] = h.length - 1
      } else u[r] = u[c[t]]
    }
    var d = [];
    for (r = 0, i = this.faces.length; i > r; r++) {
      n = this.faces[r];
      if (n instanceof THREE.Face3) {
        n.a = u[n.a];
        n.b = u[n.b];
        n.c = u[n.c];
        o = [n.a, n.b, n.c];
        for (var m = -1, E = 0; 3 > E; E++)
          if (o[E] == o[(E + 1) % 3]) {
            m = E;
            d.push(r);
            break
          }
      } else if (n instanceof THREE.Face4) {
        n.a = u[n.a];
        n.b = u[n.b];
        n.c = u[n.c];
        n.d = u[n.d];
        o = [n.a, n.b, n.c, n.d];
        for (var m = -1, E = 0; 4 > E; E++)
          if (o[E] == o[(E + 1) % 4]) {
            m >= 0 && d.push(r);
            m = E
          }
        if (m >= 0) {
          o.splice(m, 1);
          var g = new THREE.Face3(o[0], o[1], o[2], n.normal, n.color, n.materialIndex);
          for (a = 0, s = this.faceVertexUvs.length; s > a; a++) {
            l = this.faceVertexUvs[a][r];
            l && l.splice(m, 1)
          }
          if (n.vertexNormals && n.vertexNormals.length > 0) {
            g.vertexNormals = n.vertexNormals;
            g.vertexNormals.splice(m, 1)
          }
          if (n.vertexColors && n.vertexColors.length > 0) {
            g.vertexColors = n.vertexColors;
            g.vertexColors.splice(m, 1)
          }
          this.faces[r] = g
        }
      }
    }
    for (r = d.length - 1; r >= 0; r--) {
      this.faces.splice(r, 1);
      for (a = 0, s = this.faceVertexUvs.length; s > a; a++) this.faceVertexUvs[a].splice(r, 1)
    }
    var v = this.vertices.length - h.length;
    this.vertices = h;
    return v
  },
  clone: function() {
    for (var e = new THREE.Geometry, t = this.vertices, r = 0, i = t.length; i > r; r++) e.vertices.push(t[r].clone());
    for (var n = this.faces, r = 0, i = n.length; i > r; r++) e.faces.push(n[r].clone());
    for (var o = this.faceVertexUvs[0], r = 0, i = o.length; i > r; r++) {
      for (var a = o[r], s = [], l = 0, c = a.length; c > l; l++) s.push(new THREE.Vector2(a[l].x, a[l].y));
      e.faceVertexUvs[0].push(s)
    }
    return e
  },
  dispose: function() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
};
THREE.GeometryIdCount = 0;
THREE.BufferGeometry = function() {
  this.id = THREE.GeometryIdCount++;
  this.attributes = {};
  this.dynamic = !1;
  this.offsets = [];
  this.boundingBox = null;
  this.boundingSphere = null;
  this.hasTangents = !1;
  this.morphTargets = []
};
THREE.BufferGeometry.prototype = {
  constructor: THREE.BufferGeometry,
  addEventListener: THREE.EventDispatcher.prototype.addEventListener,
  hasEventListener: THREE.EventDispatcher.prototype.hasEventListener,
  removeEventListener: THREE.EventDispatcher.prototype.removeEventListener,
  dispatchEvent: THREE.EventDispatcher.prototype.dispatchEvent,
  applyMatrix: function(e) {
    var t, r;
    this.attributes.position && (t = this.attributes.position.array);
    this.attributes.normal && (r = this.attributes.normal.array);
    if (void 0 !== t) {
      e.multiplyVector3Array(t);
      this.verticesNeedUpdate = !0
    }
    if (void 0 !== r) {
      var i = (new THREE.Matrix3).getNormalMatrix(e);
      i.multiplyVector3Array(r);
      this.normalizeNormals();
      this.normalsNeedUpdate = !0
    }
  },
  computeBoundingBox: function() {
    null === this.boundingBox && (this.boundingBox = new THREE.Box3);
    var e = this.attributes.position.array;
    if (e) {
      var t, r, i, n = this.boundingBox;
      if (e.length >= 3) {
        n.min.x = n.max.x = e[0];
        n.min.y = n.max.y = e[1];
        n.min.z = n.max.z = e[2]
      }
      for (var o = 3, a = e.length; a > o; o += 3) {
        t = e[o];
        r = e[o + 1];
        i = e[o + 2];
        t < n.min.x ? n.min.x = t : t > n.max.x && (n.max.x = t);
        r < n.min.y ? n.min.y = r : r > n.max.y && (n.max.y = r);
        i < n.min.z ? n.min.z = i : i > n.max.z && (n.max.z = i)
      }
    }
    if (void 0 === e || 0 === e.length) {
      this.boundingBox.min.set(0, 0, 0);
      this.boundingBox.max.set(0, 0, 0)
    }
  },
  computeBoundingSphere: function() {
    null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
    var e = this.attributes.position.array;
    if (e) {
      for (var t, r, i, n, o = 0, a = 0, s = e.length; s > a; a += 3) {
        r = e[a];
        i = e[a + 1];
        n = e[a + 2];
        t = r * r + i * i + n * n;
        t > o && (o = t)
      }
      this.boundingSphere.radius = Math.sqrt(o)
    }
  },
  computeVertexNormals: function() {
    if (this.attributes.position) {
      var e, t, r, i, n = this.attributes.position.array.length;
      if (void 0 === this.attributes.normal) this.attributes.normal = {
        itemSize: 3,
        array: new Float32Array(n),
        numItems: n
      };
      else
        for (e = 0, t = this.attributes.normal.array.length; t > e; e++) this.attributes.normal.array[e] = 0;
      var o, a, s, l, c, h, u = this.attributes.position.array,
        f = this.attributes.normal.array,
        p = new THREE.Vector3,
        d = new THREE.Vector3,
        m = new THREE.Vector3,
        E = new THREE.Vector3,
        g = new THREE.Vector3;
      if (this.attributes.index) {
        var v = this.attributes.index.array,
          y = this.offsets;
        for (r = 0, i = y.length; i > r; ++r) {
          var T = y[r].start,
            R = y[r].count,
            x = y[r].index;
          for (e = T, t = T + R; t > e; e += 3) {
            o = x + v[e];
            a = x + v[e + 1];
            s = x + v[e + 2];
            l = u[3 * o];
            c = u[3 * o + 1];
            h = u[3 * o + 2];
            p.set(l, c, h);
            l = u[3 * a];
            c = u[3 * a + 1];
            h = u[3 * a + 2];
            d.set(l, c, h);
            l = u[3 * s];
            c = u[3 * s + 1];
            h = u[3 * s + 2];
            m.set(l, c, h);
            E.subVectors(m, d);
            g.subVectors(p, d);
            E.cross(g);
            f[3 * o] += E.x;
            f[3 * o + 1] += E.y;
            f[3 * o + 2] += E.z;
            f[3 * a] += E.x;
            f[3 * a + 1] += E.y;
            f[3 * a + 2] += E.z;
            f[3 * s] += E.x;
            f[3 * s + 1] += E.y;
            f[3 * s + 2] += E.z
          }
        }
      } else
        for (e = 0, t = u.length; t > e; e += 9) {
          l = u[e];
          c = u[e + 1];
          h = u[e + 2];
          p.set(l, c, h);
          l = u[e + 3];
          c = u[e + 4];
          h = u[e + 5];
          d.set(l, c, h);
          l = u[e + 6];
          c = u[e + 7];
          h = u[e + 8];
          m.set(l, c, h);
          E.subVectors(m, d);
          g.subVectors(p, d);
          E.cross(g);
          f[e] = E.x;
          f[e + 1] = E.y;
          f[e + 2] = E.z;
          f[e + 3] = E.x;
          f[e + 4] = E.y;
          f[e + 5] = E.z;
          f[e + 6] = E.x;
          f[e + 7] = E.y;
          f[e + 8] = E.z
        }
      this.normalizeNormals();
      this.normalsNeedUpdate = !0
    }
  },
  normalizeNormals: function() {
    for (var e, t, r, i, n = this.attributes.normal.array, o = 0, a = n.length; a > o; o += 3) {
      e = n[o];
      t = n[o + 1];
      r = n[o + 2];
      i = 1 / Math.sqrt(e * e + t * t + r * r);
      n[o] *= i;
      n[o + 1] *= i;
      n[o + 2] *= i
    }
  },
  computeTangents: function() {
    function e(e, t, r) {
      f = i[3 * e];
      p = i[3 * e + 1];
      d = i[3 * e + 2];
      m = i[3 * t];
      E = i[3 * t + 1];
      g = i[3 * t + 2];
      v = i[3 * r];
      y = i[3 * r + 1];
      T = i[3 * r + 2];
      R = o[2 * e];
      x = o[2 * e + 1];
      w = o[2 * t];
      H = o[2 * t + 1];
      b = o[2 * r];
      _ = o[2 * r + 1];
      S = m - f;
      M = v - f;
      C = E - p;
      A = y - p;
      L = g - d;
      D = T - d;
      P = w - R;
      F = b - R;
      N = H - x;
      U = _ - x;
      V = 1 / (P * U - F * N);
      W.set((U * S - N * M) * V, (U * C - N * A) * V, (U * L - N * D) * V);
      X.set((P * M - F * S) * V, (P * A - F * C) * V, (P * D - F * L) * V);
      c[e].add(W);
      c[t].add(W);
      c[r].add(W);
      h[e].add(X);
      h[t].add(X);
      h[r].add(X)
    }

    function t(e) {
      re.x = n[3 * e];
      re.y = n[3 * e + 1];
      re.z = n[3 * e + 2];
      ie.copy(re);
      Z = c[e];
      ee.copy(Z);
      ee.sub(re.multiplyScalar(re.dot(Z))).normalize();
      te.crossVectors(ie, Z);
      J = te.dot(h[e]);
      Q = 0 > J ? -1 : 1;
      l[4 * e] = ee.x;
      l[4 * e + 1] = ee.y;
      l[4 * e + 2] = ee.z;
      l[4 * e + 3] = Q
    }
    if (void 0 !== this.attributes.index && void 0 !== this.attributes.position && void 0 !== this.attributes.normal && void 0 !== this.attributes.uv) {
      var r = this.attributes.index.array,
        i = this.attributes.position.array,
        n = this.attributes.normal.array,
        o = this.attributes.uv.array,
        a = i.length / 3;
      if (void 0 === this.attributes.tangent) {
        var s = 4 * a;
        this.attributes.tangent = {
          itemSize: 4,
          array: new Float32Array(s),
          numItems: s
        }
      }
      for (var l = this.attributes.tangent.array, c = [], h = [], u = 0; a > u; u++) {
        c[u] = new THREE.Vector3;
        h[u] = new THREE.Vector3
      }
      var f, p, d, m, E, g, v, y, T, R, x, w, H, b, _, S, M, C, A, L, D, P, F, N, U, V, z, B, O, k, I, j, G, W = new THREE.Vector3,
        X = new THREE.Vector3,
        q = this.offsets;
      for (O = 0, k = q.length; k > O; ++O) {
        var Y = q[O].start,
          $ = q[O].count,
          K = q[O].index;
        for (z = Y, B = Y + $; B > z; z += 3) {
          I = K + r[z];
          j = K + r[z + 1];
          G = K + r[z + 2];
          e(I, j, G)
        }
      }
      var Q, Z, J, ee = new THREE.Vector3,
        te = new THREE.Vector3,
        re = new THREE.Vector3,
        ie = new THREE.Vector3;
      for (O = 0, k = q.length; k > O; ++O) {
        var Y = q[O].start,
          $ = q[O].count,
          K = q[O].index;
        for (z = Y, B = Y + $; B > z; z += 3) {
          I = K + r[z];
          j = K + r[z + 1];
          G = K + r[z + 2];
          t(I);
          t(j);
          t(G)
        }
      }
      this.hasTangents = !0;
      this.tangentsNeedUpdate = !0
    } else console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()")
  },
  dispose: function() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
};
THREE.Camera = function() {
  THREE.Object3D.call(this);
  this.matrixWorldInverse = new THREE.Matrix4;
  this.projectionMatrix = new THREE.Matrix4;
  this.projectionMatrixInverse = new THREE.Matrix4
};
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.lookAt = function() {
  var e = new THREE.Matrix4;
  return function(t) {
    e.lookAt(this.position, t, this.up);
    this.useQuaternion === !0 ? this.quaternion.setFromRotationMatrix(e) : this.rotation.setEulerFromRotationMatrix(e, this.eulerOrder)
  }
}();
THREE.OrthographicCamera = function(e, t, r, i, n, o) {
  THREE.Camera.call(this);
  this.left = e;
  this.right = t;
  this.top = r;
  this.bottom = i;
  this.near = void 0 !== n ? n : .1;
  this.far = void 0 !== o ? o : 2e3;
  this.updateProjectionMatrix()
};
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {
  this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far)
};
THREE.PerspectiveCamera = function(e, t, r, i) {
  THREE.Camera.call(this);
  this.fov = void 0 !== e ? e : 50;
  this.aspect = void 0 !== t ? t : 1;
  this.near = void 0 !== r ? r : .1;
  this.far = void 0 !== i ? i : 2e3;
  this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.setLens = function(e, t) {
  void 0 === t && (t = 24);
  this.fov = 2 * THREE.Math.radToDeg(Math.atan(t / (2 * e)));
  this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.setViewOffset = function(e, t, r, i, n, o) {
  this.fullWidth = e;
  this.fullHeight = t;
  this.x = r;
  this.y = i;
  this.width = n;
  this.height = o;
  this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
  if (this.fullWidth) {
    var e = this.fullWidth / this.fullHeight,
      t = Math.tan(THREE.Math.degToRad(.5 * this.fov)) * this.near,
      r = -t,
      i = e * r,
      n = e * t,
      o = Math.abs(n - i),
      a = Math.abs(t - r);
    this.projectionMatrix.makeFrustum(i + this.x * o / this.fullWidth, i + (this.x + this.width) * o / this.fullWidth, t - (this.y + this.height) * a / this.fullHeight, t - this.y * a / this.fullHeight, this.near, this.far)
  } else this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
};
THREE.Light = function(e) {
  THREE.Object3D.call(this);
  this.color = new THREE.Color(e)
};
THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.Light.prototype.clone = function(e) {
  void 0 === e && (e = new THREE.Light);
  THREE.Object3D.prototype.clone.call(this, e);
  e.color.copy(this.color);
  return e
};
THREE.AmbientLight = function(e) {
  THREE.Light.call(this, e)
};
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype);
THREE.AmbientLight.prototype.clone = function() {
  var e = new THREE.AmbientLight;
  THREE.Light.prototype.clone.call(this, e);
  return e
};
THREE.AreaLight = function(e, t) {
  THREE.Light.call(this, e);
  this.normal = new THREE.Vector3(0, -1, 0);
  this.right = new THREE.Vector3(1, 0, 0);
  this.intensity = void 0 !== t ? t : 1;
  this.width = 1;
  this.height = 1;
  this.constantAttenuation = 1.5;
  this.linearAttenuation = .5;
  this.quadraticAttenuation = .1
};
THREE.AreaLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight = function(e, t) {
  THREE.Light.call(this, e);
  this.position.set(0, 1, 0);
  this.target = new THREE.Object3D;
  this.intensity = void 0 !== t ? t : 1;
  this.castShadow = !1;
  this.onlyShadow = !1;
  this.shadowCameraNear = 50;
  this.shadowCameraFar = 5e3;
  this.shadowCameraLeft = -500;
  this.shadowCameraRight = 500;
  this.shadowCameraTop = 500;
  this.shadowCameraBottom = -500;
  this.shadowCameraVisible = !1;
  this.shadowBias = 0;
  this.shadowDarkness = .5;
  this.shadowMapWidth = 512;
  this.shadowMapHeight = 512;
  this.shadowCascade = !1;
  this.shadowCascadeOffset = new THREE.Vector3(0, 0, -1e3);
  this.shadowCascadeCount = 2;
  this.shadowCascadeBias = [0, 0, 0];
  this.shadowCascadeWidth = [512, 512, 512];
  this.shadowCascadeHeight = [512, 512, 512];
  this.shadowCascadeNearZ = [-1, .99, .998];
  this.shadowCascadeFarZ = [.99, .998, 1];
  this.shadowCascadeArray = [];
  this.shadowMap = null;
  this.shadowMapSize = null;
  this.shadowCamera = null;
  this.shadowMatrix = null
};
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone = function() {
  var e = new THREE.DirectionalLight;
  THREE.Light.prototype.clone.call(this, e);
  e.target = this.target.clone();
  e.intensity = this.intensity;
  e.castShadow = this.castShadow;
  e.onlyShadow = this.onlyShadow;
  return e
};
THREE.HemisphereLight = function(e, t, r) {
  THREE.Light.call(this, e);
  this.position.set(0, 100, 0);
  this.groundColor = new THREE.Color(t);
  this.intensity = void 0 !== r ? r : 1
};
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype);
THREE.HemisphereLight.prototype.clone = function() {
  var e = new THREE.PointLight;
  THREE.Light.prototype.clone.call(this, e);
  e.groundColor.copy(this.groundColor);
  e.intensity = this.intensity;
  return e
};
THREE.PointLight = function(e, t, r) {
  THREE.Light.call(this, e);
  this.intensity = void 0 !== t ? t : 1;
  this.distance = void 0 !== r ? r : 0
};
THREE.PointLight.prototype = Object.create(THREE.Light.prototype);
THREE.PointLight.prototype.clone = function() {
  var e = new THREE.PointLight;
  THREE.Light.prototype.clone.call(this, e);
  e.intensity = this.intensity;
  e.distance = this.distance;
  return e
};
THREE.SpotLight = function(e, t, r, i, n) {
  THREE.Light.call(this, e);
  this.position.set(0, 1, 0);
  this.target = new THREE.Object3D;
  this.intensity = void 0 !== t ? t : 1;
  this.distance = void 0 !== r ? r : 0;
  this.angle = void 0 !== i ? i : Math.PI / 3;
  this.exponent = void 0 !== n ? n : 10;
  this.castShadow = !1;
  this.onlyShadow = !1;
  this.shadowCameraNear = 50;
  this.shadowCameraFar = 5e3;
  this.shadowCameraFov = 50;
  this.shadowCameraVisible = !1;
  this.shadowBias = 0;
  this.shadowDarkness = .5;
  this.shadowMapWidth = 512;
  this.shadowMapHeight = 512;
  this.shadowMap = null;
  this.shadowMapSize = null;
  this.shadowCamera = null;
  this.shadowMatrix = null
};
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype);
THREE.SpotLight.prototype.clone = function() {
  var e = new THREE.SpotLight;
  THREE.Light.prototype.clone.call(this, e);
  e.target = this.target.clone();
  e.intensity = this.intensity;
  e.distance = this.distance;
  e.angle = this.angle;
  e.exponent = this.exponent;
  e.castShadow = this.castShadow;
  e.onlyShadow = this.onlyShadow;
  return e
};
THREE.Loader = function(e) {
  this.showStatus = e;
  this.statusDomElement = e ? THREE.Loader.prototype.addStatusElement() : null;
  this.onLoadStart = function() {};
  this.onLoadProgress = function() {};
  this.onLoadComplete = function() {}
};
THREE.Loader.prototype = {
  constructor: THREE.Loader,
  crossOrigin: "anonymous",
  addStatusElement: function() {
    var e = document.createElement("div");
    e.style.position = "absolute";
    e.style.right = "0px";
    e.style.top = "0px";
    e.style.fontSize = "0.8em";
    e.style.textAlign = "left";
    e.style.background = "rgba(0,0,0,0.25)";
    e.style.color = "#fff";
    e.style.width = "120px";
    e.style.padding = "0.5em 0.5em 0.5em 0.5em";
    e.style.zIndex = 1e3;
    e.innerHTML = "Loading ...";
    return e
  },
  updateProgress: function(e) {
    var t = "Loaded ";
    t += e.total ? (100 * e.loaded / e.total).toFixed(0) + "%" : (e.loaded / 1e3).toFixed(2) + " KB";
    this.statusDomElement.innerHTML = t
  },
  extractUrlBase: function(e) {
    var t = e.split("/");
    t.pop();
    return (t.length < 1 ? "." : t.join("/")) + "/"
  },
  initMaterials: function(e, t) {
    for (var r = [], i = 0; i < e.length; ++i) r[i] = THREE.Loader.prototype.createMaterial(e[i], t);
    return r
  },
  needsTangents: function(e) {
    for (var t = 0, r = e.length; r > t; t++) {
      var i = e[t];
      if (i instanceof THREE.ShaderMaterial) return !0
    }
    return !1
  },
  createMaterial: function(e, t) {
    function r(e) {
      var t = Math.log(e) / Math.LN2;
      return Math.floor(t) == t
    }

    function i(e) {
      var t = Math.log(e) / Math.LN2;
      return Math.pow(2, Math.round(t))
    }

    function n(e, t) {
      var n = new Image;
      n.onload = function() {
        if (r(this.width) && r(this.height)) e.image = this;
        else {
          var t = i(this.width),
            n = i(this.height);
          e.image.width = t;
          e.image.height = n;
          e.image.getContext("2d").drawImage(this, 0, 0, t, n)
        }
        e.needsUpdate = !0
      };
      n.crossOrigin = s.crossOrigin;
      n.src = t
    }

    function o(e, r, i, o, a, s, l) {
      var c = /\.dds$/i.test(i),
        h = t + "/" + i;
      if (c) {
        var u = THREE.ImageUtils.loadCompressedTexture(h);
        e[r] = u
      } else {
        var u = document.createElement("canvas");
        e[r] = new THREE.Texture(u)
      }
      e[r].sourceFile = i;
      if (o) {
        e[r].repeat.set(o[0], o[1]);
        1 !== o[0] && (e[r].wrapS = THREE.RepeatWrapping);
        1 !== o[1] && (e[r].wrapT = THREE.RepeatWrapping)
      }
      a && e[r].offset.set(a[0], a[1]);
      if (s) {
        var f = {
          repeat: THREE.RepeatWrapping,
          mirror: THREE.MirroredRepeatWrapping
        };
        void 0 !== f[s[0]] && (e[r].wrapS = f[s[0]]);
        void 0 !== f[s[1]] && (e[r].wrapT = f[s[1]])
      }
      l && (e[r].anisotropy = l);
      c || n(e[r], h)
    }

    function a(e) {
      return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2]
    }
    var s = this,
      l = "MeshLambertMaterial",
      c = {
        color: 15658734,
        opacity: 1,
        map: null,
        lightMap: null,
        normalMap: null,
        bumpMap: null,
        wireframe: !1
      };
    if (e.shading) {
      var h = e.shading.toLowerCase();
      "phong" === h ? l = "MeshPhongMaterial" : "basic" === h && (l = "MeshBasicMaterial")
    }
    void 0 !== e.blending && void 0 !== THREE[e.blending] && (c.blending = THREE[e.blending]);
    (void 0 !== e.transparent || e.opacity < 1) && (c.transparent = e.transparent);
    void 0 !== e.depthTest && (c.depthTest = e.depthTest);
    void 0 !== e.depthWrite && (c.depthWrite = e.depthWrite);
    void 0 !== e.visible && (c.visible = e.visible);
    void 0 !== e.flipSided && (c.side = THREE.BackSide);
    void 0 !== e.doubleSided && (c.side = THREE.DoubleSide);
    void 0 !== e.wireframe && (c.wireframe = e.wireframe);
    void 0 !== e.vertexColors && ("face" === e.vertexColors ? c.vertexColors = THREE.FaceColors : e.vertexColors && (c.vertexColors = THREE.VertexColors));
    e.colorDiffuse ? c.color = a(e.colorDiffuse) : e.DbgColor && (c.color = e.DbgColor);
    e.colorSpecular && (c.specular = a(e.colorSpecular));
    e.colorAmbient && (c.ambient = a(e.colorAmbient));
    e.transparency && (c.opacity = e.transparency);
    e.specularCoef && (c.shininess = e.specularCoef);
    e.mapDiffuse && t && o(c, "map", e.mapDiffuse, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy);
    e.mapLight && t && o(c, "lightMap", e.mapLight, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy);
    e.mapBump && t && o(c, "bumpMap", e.mapBump, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy);
    e.mapNormal && t && o(c, "normalMap", e.mapNormal, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy);
    e.mapSpecular && t && o(c, "specularMap", e.mapSpecular, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy);
    e.mapBumpScale && (c.bumpScale = e.mapBumpScale);
    if (e.mapNormal) {
      var u = THREE.ShaderLib.normalmap,
        f = THREE.UniformsUtils.clone(u.uniforms);
      f.tNormal.value = c.normalMap;
      e.mapNormalFactor && f.uNormalScale.value.set(e.mapNormalFactor, e.mapNormalFactor);
      if (c.map) {
        f.tDiffuse.value = c.map;
        f.enableDiffuse.value = !0
      }
      if (c.specularMap) {
        f.tSpecular.value = c.specularMap;
        f.enableSpecular.value = !0
      }
      if (c.lightMap) {
        f.tAO.value = c.lightMap;
        f.enableAO.value = !0
      }
      f.uDiffuseColor.value.setHex(c.color);
      f.uSpecularColor.value.setHex(c.specular);
      f.uAmbientColor.value.setHex(c.ambient);
      f.uShininess.value = c.shininess;
      void 0 !== c.opacity && (f.uOpacity.value = c.opacity);
      var p = {
          fragmentShader: u.fragmentShader,
          vertexShader: u.vertexShader,
          uniforms: f,
          lights: !0,
          fog: !0
        },
        d = new THREE.ShaderMaterial(p);
      c.transparent && (d.transparent = !0)
    } else var d = new THREE[l](c);
    void 0 !== e.DbgName && (d.name = e.DbgName);
    return d
  }
};
THREE.ImageLoader = function() {
  this.crossOrigin = null
};
THREE.ImageLoader.prototype = {
  constructor: THREE.ImageLoader,
  addEventListener: THREE.EventDispatcher.prototype.addEventListener,
  hasEventListener: THREE.EventDispatcher.prototype.hasEventListener,
  removeEventListener: THREE.EventDispatcher.prototype.removeEventListener,
  dispatchEvent: THREE.EventDispatcher.prototype.dispatchEvent,
  load: function(e, t) {
    var r = this;
    void 0 === t && (t = new Image);
    t.addEventListener("load", function() {
      r.dispatchEvent({
        type: "load",
        content: t
      })
    }, !1);
    t.addEventListener("error", function() {
      r.dispatchEvent({
        type: "error",
        message: "Couldn't load URL [" + e + "]"
      })
    }, !1);
    r.crossOrigin && (t.crossOrigin = r.crossOrigin);
    t.src = e
  }
};
THREE.JSONLoader = function(e) {
  THREE.Loader.call(this, e);
  this.withCredentials = !1
};
THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype);
THREE.JSONLoader.prototype.load = function(e, t, r) {
  r = r && "string" == typeof r ? r : this.extractUrlBase(e);
  this.onLoadStart();
  this.loadAjaxJSON(this, e, t, r)
};
THREE.JSONLoader.prototype.loadAjaxJSON = function(e, t, r, i, n) {
  var o = new XMLHttpRequest,
    a = 0;
  o.onreadystatechange = function() {
    if (o.readyState === o.DONE)
      if (200 === o.status || 0 === o.status) {
        if (o.responseText) {
          var s = JSON.parse(o.responseText),
            l = e.parse(s, i);
          r(l.geometry, l.materials)
        } else console.warn("THREE.JSONLoader: [" + t + "] seems to be unreachable or file there is empty");
        e.onLoadComplete()
      } else console.error("THREE.JSONLoader: Couldn't load [" + t + "] [" + o.status + "]");
    else if (o.readyState === o.LOADING) {
      if (n) {
        0 === a && (a = o.getResponseHeader("Content-Length"));
        n({
          total: a,
          loaded: o.responseText.length
        })
      }
    } else o.readyState === o.HEADERS_RECEIVED && void 0 !== n && (a = o.getResponseHeader("Content-Length"))
  };
  o.open("GET", t, !0);
  o.withCredentials = this.withCredentials;
  o.send(null)
};
THREE.JSONLoader.prototype.parse = function(e, t) {
  function r(t) {
    function r(e, t) {
      return e & 1 << t
    }
    var i, n, a, s, l, c, h, u, f, p, d, m, E, g, v, y, T, R, x, w, H, b, _, S, M, C, A, L = e.faces,
      D = e.vertices,
      P = e.normals,
      F = e.colors,
      N = 0;
    for (i = 0; i < e.uvs.length; i++) e.uvs[i].length && N++;
    for (i = 0; N > i; i++) {
      o.faceUvs[i] = [];
      o.faceVertexUvs[i] = []
    }
    s = 0;
    l = D.length;
    for (; l > s;) {
      w = new THREE.Vector3;
      w.x = D[s++] * t;
      w.y = D[s++] * t;
      w.z = D[s++] * t;
      o.vertices.push(w)
    }
    s = 0;
    l = L.length;
    for (; l > s;) {
      d = L[s++];
      m = r(d, 0);
      E = r(d, 1);
      g = r(d, 2);
      v = r(d, 3);
      y = r(d, 4);
      T = r(d, 5);
      R = r(d, 6);
      x = r(d, 7);
      if (m) {
        H = new THREE.Face4;
        H.a = L[s++];
        H.b = L[s++];
        H.c = L[s++];
        H.d = L[s++];
        c = 4
      } else {
        H = new THREE.Face3;
        H.a = L[s++];
        H.b = L[s++];
        H.c = L[s++];
        c = 3
      }
      if (E) {
        p = L[s++];
        H.materialIndex = p
      }
      a = o.faces.length;
      if (g)
        for (i = 0; N > i; i++) {
          S = e.uvs[i];
          f = L[s++];
          C = S[2 * f];
          A = S[2 * f + 1];
          o.faceUvs[i][a] = new THREE.Vector2(C, A)
        }
      if (v)
        for (i = 0; N > i; i++) {
          S = e.uvs[i];
          M = [];
          for (n = 0; c > n; n++) {
            f = L[s++];
            C = S[2 * f];
            A = S[2 * f + 1];
            M[n] = new THREE.Vector2(C, A)
          }
          o.faceVertexUvs[i][a] = M
        }
      if (y) {
        u = 3 * L[s++];
        _ = new THREE.Vector3;
        _.x = P[u++];
        _.y = P[u++];
        _.z = P[u];
        H.normal = _
      }
      if (T)
        for (i = 0; c > i; i++) {
          u = 3 * L[s++];
          _ = new THREE.Vector3;
          _.x = P[u++];
          _.y = P[u++];
          _.z = P[u];
          H.vertexNormals.push(_)
        }
      if (R) {
        h = L[s++];
        b = new THREE.Color(F[h]);
        H.color = b
      }
      if (x)
        for (i = 0; c > i; i++) {
          h = L[s++];
          b = new THREE.Color(F[h]);
          H.vertexColors.push(b)
        }
      o.faces.push(H)
    }
  }

  function i() {
    var t, r, i, n, a, s, l, c, h, u;
    if (e.skinWeights)
      for (t = 0, r = e.skinWeights.length; r > t; t += 2) {
        i = e.skinWeights[t];
        n = e.skinWeights[t + 1];
        a = 0;
        s = 0;
        o.skinWeights.push(new THREE.Vector4(i, n, a, s))
      }
    if (e.skinIndices)
      for (t = 0, r = e.skinIndices.length; r > t; t += 2) {
        l = e.skinIndices[t];
        c = e.skinIndices[t + 1];
        h = 0;
        u = 0;
        o.skinIndices.push(new THREE.Vector4(l, c, h, u))
      }
    o.bones = e.bones;
    o.animation = e.animation
  }

  function n(t) {
    if (void 0 !== e.morphTargets) {
      var r, i, n, a, s, l;
      for (r = 0, i = e.morphTargets.length; i > r; r++) {
        o.morphTargets[r] = {};
        o.morphTargets[r].name = e.morphTargets[r].name;
        o.morphTargets[r].vertices = [];
        s = o.morphTargets[r].vertices;
        l = e.morphTargets[r].vertices;
        for (n = 0, a = l.length; a > n; n += 3) {
          var c = new THREE.Vector3;
          c.x = l[n] * t;
          c.y = l[n + 1] * t;
          c.z = l[n + 2] * t;
          s.push(c)
        }
      }
    }
    if (void 0 !== e.morphColors) {
      var r, i, h, u, f, p, d;
      for (r = 0, i = e.morphColors.length; i > r; r++) {
        o.morphColors[r] = {};
        o.morphColors[r].name = e.morphColors[r].name;
        o.morphColors[r].colors = [];
        f = o.morphColors[r].colors;
        p = e.morphColors[r].colors;
        for (h = 0, u = p.length; u > h; h += 3) {
          d = new THREE.Color(16755200);
          d.setRGB(p[h], p[h + 1], p[h + 2]);
          f.push(d)
        }
      }
    }
  }
  var o = new THREE.Geometry,
    a = void 0 !== e.scale ? 1 / e.scale : 1;
  r(a);
  i();
  n(a);
  o.computeCentroids();
  o.computeFaceNormals();
  if (void 0 === e.materials) return {
    geometry: o
  };
  var s = this.initMaterials(e.materials, t);
  this.needsTangents(s) && o.computeTangents();
  return {
    geometry: o,
    materials: s
  }
};
THREE.LoadingMonitor = function() {
  var e = this,
    t = 0,
    r = 0,
    i = function(i) {
      t++;
      e.dispatchEvent({
        type: "progress",
        loaded: t,
        total: r
      });
      t === r && e.dispatchEvent({
        type: "load"
      })
    };
  this.add = function(e) {
    r++;
    e.addEventListener("load", i, !1)
  }
};
THREE.LoadingMonitor.prototype = {
  constructor: THREE.LoadingMonitor,
  addEventListener: THREE.EventDispatcher.prototype.addEventListener,
  hasEventListener: THREE.EventDispatcher.prototype.hasEventListener,
  removeEventListener: THREE.EventDispatcher.prototype.removeEventListener,
  dispatchEvent: THREE.EventDispatcher.prototype.dispatchEvent
};
THREE.GeometryLoader = function() {};
THREE.GeometryLoader.prototype = {
  constructor: THREE.GeometryLoader,
  addEventListener: THREE.EventDispatcher.prototype.addEventListener,
  hasEventListener: THREE.EventDispatcher.prototype.hasEventListener,
  removeEventListener: THREE.EventDispatcher.prototype.removeEventListener,
  dispatchEvent: THREE.EventDispatcher.prototype.dispatchEvent,
  load: function(e) {
    var t = this,
      r = new XMLHttpRequest;
    r.addEventListener("load", function(e) {
      var r = t.parse(JSON.parse(e.target.responseText));
      t.dispatchEvent({
        type: "load",
        content: r
      })
    }, !1);
    r.addEventListener("progress", function(e) {
      t.dispatchEvent({
        type: "progress",
        loaded: e.loaded,
        total: e.total
      })
    }, !1);
    r.addEventListener("error", function() {
      t.dispatchEvent({
        type: "error",
        message: "Couldn't load URL [" + e + "]"
      })
    }, !1);
    r.open("GET", e, !0);
    r.send(null)
  },
  parse: function(e) {}
};
THREE.MaterialLoader = function() {};
THREE.MaterialLoader.prototype = {
  constructor: THREE.MaterialLoader,
  addEventListener: THREE.EventDispatcher.prototype.addEventListener,
  hasEventListener: THREE.EventDispatcher.prototype.hasEventListener,
  removeEventListener: THREE.EventDispatcher.prototype.removeEventListener,
  dispatchEvent: THREE.EventDispatcher.prototype.dispatchEvent,
  load: function(e) {
    var t = this,
      r = new XMLHttpRequest;
    r.addEventListener("load", function(e) {
      var r = t.parse(JSON.parse(e.target.responseText));
      t.dispatchEvent({
        type: "load",
        content: r
      })
    }, !1);
    r.addEventListener("progress", function(e) {
      t.dispatchEvent({
        type: "progress",
        loaded: e.loaded,
        total: e.total
      })
    }, !1);
    r.addEventListener("error", function() {
      t.dispatchEvent({
        type: "error",
        message: "Couldn't load URL [" + e + "]"
      })
    }, !1);
    r.open("GET", e, !0);
    r.send(null)
  },
  parse: function(e) {
    var t;
    switch (e.type) {
      case "MeshBasicMaterial":
        t = new THREE.MeshBasicMaterial({
          color: e.color,
          opacity: e.opacity,
          transparent: e.transparent,
          wireframe: e.wireframe
        });
        break;
      case "MeshLambertMaterial":
        t = new THREE.MeshLambertMaterial({
          color: e.color,
          ambient: e.ambient,
          emissive: e.emissive,
          opacity: e.opacity,
          transparent: e.transparent,
          wireframe: e.wireframe
        });
        break;
      case "MeshPhongMaterial":
        t = new THREE.MeshPhongMaterial({
          color: e.color,
          ambient: e.ambient,
          emissive: e.emissive,
          specular: e.specular,
          shininess: e.shininess,
          opacity: e.opacity,
          transparent: e.transparent,
          wireframe: e.wireframe
        });
        break;
      case "MeshNormalMaterial":
        t = new THREE.MeshNormalMaterial({
          opacity: e.opacity,
          transparent: e.transparent,
          wireframe: e.wireframe
        });
        break;
      case "MeshDepthMaterial":
        t = new THREE.MeshDepthMaterial({
          opacity: e.opacity,
          transparent: e.transparent,
          wireframe: e.wireframe
        })
    }
    return t
  }
};
THREE.SceneLoader = function() {
  this.onLoadStart = function() {};
  this.onLoadProgress = function() {};
  this.onLoadComplete = function() {};
  this.callbackSync = function() {};
  this.callbackProgress = function() {};
  this.geometryHandlerMap = {};
  this.hierarchyHandlerMap = {};
  this.addGeometryHandler("ascii", THREE.JSONLoader)
};
THREE.SceneLoader.prototype.constructor = THREE.SceneLoader;
THREE.SceneLoader.prototype.load = function(e, t) {
  var r = this,
    i = new XMLHttpRequest;
  i.onreadystatechange = function() {
    if (4 === i.readyState)
      if (200 === i.status || 0 === i.status) {
        var n = JSON.parse(i.responseText);
        r.parse(n, t, e)
      } else console.error("THREE.SceneLoader: Couldn't load [" + e + "] [" + i.status + "]")
  };
  i.open("GET", e, !0);
  i.send(null)
};
THREE.SceneLoader.prototype.addGeometryHandler = function(e, t) {
  this.geometryHandlerMap[e] = {
    loaderClass: t
  }
};
THREE.SceneLoader.prototype.addHierarchyHandler = function(e, t) {
  this.hierarchyHandlerMap[e] = {
    loaderClass: t
  }
};
THREE.SceneLoader.prototype.parse = function(e, t, r) {
  function i(e, t) {
    return "relativeToHTML" == t ? e : M + "/" + e
  }

  function n() {
    o(_.scene, A.objects)
  }

  function o(e, t) {
    var r, n, a, s, l, h;
    for (var u in t)
      if (void 0 === _.objects[u]) {
        var f = t[u],
          E = null;
        if (f.type && f.type in S.hierarchyHandlerMap) {
          if (void 0 === f.loading) {
            var g = {
                type: 1,
                url: 1,
                material: 1,
                position: 1,
                rotation: 1,
                scale: 1,
                visible: 1,
                children: 1,
                userData: 1,
                skin: 1,
                morph: 1,
                mirroredLoop: 1,
                duration: 1
              },
              v = {};
            for (var x in f) x in g || (v[x] = f[x]);
            d = _.materials[f.material];
            f.loading = !0;
            var w = S.hierarchyHandlerMap[f.type].loaderObject;
            w.options ? w.load(i(f.url, A.urlBaseType), c(u, e, d, f)) : w.load(i(f.url, A.urlBaseType), c(u, e, d, f), v)
          }
        } else if (void 0 !== f.geometry) {
          p = _.geometries[f.geometry];
          if (p) {
            var H = !1;
            d = _.materials[f.material];
            H = d instanceof THREE.ShaderMaterial;
            a = f.position;
            s = f.rotation;
            l = f.scale;
            r = f.matrix;
            h = f.quaternion;
            f.material || (d = new THREE.MeshFaceMaterial(_.face_materials[f.geometry]));
            d instanceof THREE.MeshFaceMaterial && 0 === d.materials.length && (d = new THREE.MeshFaceMaterial(_.face_materials[f.geometry]));
            if (d instanceof THREE.MeshFaceMaterial)
              for (var b = 0; b < d.materials.length; b++) H = H || d.materials[b] instanceof THREE.ShaderMaterial;
            H && p.computeTangents();
            if (f.skin) E = new THREE.SkinnedMesh(p, d);
            else if (f.morph) {
              E = new THREE.MorphAnimMesh(p, d);
              void 0 !== f.duration && (E.duration = f.duration);
              void 0 !== f.time && (E.time = f.time);
              void 0 !== f.mirroredLoop && (E.mirroredLoop = f.mirroredLoop);
              d.morphNormals && p.computeMorphNormals()
            } else E = new THREE.Mesh(p, d);
            E.name = u;
            if (r) {
              E.matrixAutoUpdate = !1;
              E.matrix.set(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15])
            } else {
              E.position.set(a[0], a[1], a[2]);
              if (h) {
                E.quaternion.set(h[0], h[1], h[2], h[3]);
                E.useQuaternion = !0
              } else E.rotation.set(s[0], s[1], s[2]);
              E.scale.set(l[0], l[1], l[2])
            }
            E.visible = f.visible;
            E.castShadow = f.castShadow;
            E.receiveShadow = f.receiveShadow;
            e.add(E);
            _.objects[u] = E
          }
        } else if ("DirectionalLight" === f.type || "PointLight" === f.type || "AmbientLight" === f.type) {
          T = void 0 !== f.color ? f.color : 16777215;
          R = void 0 !== f.intensity ? f.intensity : 1;
          if ("DirectionalLight" === f.type) {
            a = f.direction;
            y = new THREE.DirectionalLight(T, R);
            y.position.set(a[0], a[1], a[2]);
            if (f.target) {
              C.push({
                object: y,
                targetName: f.target
              });
              y.target = null
            }
          } else if ("PointLight" === f.type) {
            a = f.position;
            n = f.distance;
            y = new THREE.PointLight(T, R, n);
            y.position.set(a[0], a[1], a[2])
          } else "AmbientLight" === f.type && (y = new THREE.AmbientLight(T));
          e.add(y);
          y.name = u;
          _.lights[u] = y;
          _.objects[u] = y
        } else if ("PerspectiveCamera" === f.type || "OrthographicCamera" === f.type) {
          a = f.position;
          s = f.rotation;
          h = f.quaternion;
          "PerspectiveCamera" === f.type ? m = new THREE.PerspectiveCamera(f.fov, f.aspect, f.near, f.far) : "OrthographicCamera" === f.type && (m = new THREE.OrthographicCamera(f.left, f.right, f.top, f.bottom, f.near, f.far));
          m.name = u;
          m.position.set(a[0], a[1], a[2]);
          if (void 0 !== h) {
            m.quaternion.set(h[0], h[1], h[2], h[3]);
            m.useQuaternion = !0
          } else void 0 !== s && m.rotation.set(s[0], s[1], s[2]);
          e.add(m);
          _.cameras[u] = m;
          _.objects[u] = m
        } else {
          a = f.position;
          s = f.rotation;
          l = f.scale;
          h = f.quaternion;
          E = new THREE.Object3D;
          E.name = u;
          E.position.set(a[0], a[1], a[2]);
          if (h) {
            E.quaternion.set(h[0], h[1], h[2], h[3]);
            E.useQuaternion = !0
          } else E.rotation.set(s[0], s[1], s[2]);
          E.scale.set(l[0], l[1], l[2]);
          E.visible = void 0 !== f.visible ? f.visible : !1;
          e.add(E);
          _.objects[u] = E;
          _.empties[u] = E
        }
        if (E) {
          if (void 0 !== f.userData)
            for (var M in f.userData) {
              var L = f.userData[M];
              E.userData[M] = L
            }
          if (void 0 !== f.groups)
            for (var b = 0; b < f.groups.length; b++) {
              var D = f.groups[b];
              void 0 === _.groups[D] && (_.groups[D] = []);
              _.groups[D].push(u)
            }
          void 0 !== f.children && o(E, f.children)
        }
      }
  }

  function a(e, t, r) {
    _.geometries[r] = e;
    _.face_materials[r] = t;
    n()
  }

  function s(e, t, r, i, o) {
    var a = o.position,
      s = o.rotation,
      l = o.quaternion,
      c = o.scale;
    e.position.set(a[0], a[1], a[2]);
    if (l) {
      e.quaternion.set(l[0], l[1], l[2], l[3]);
      e.useQuaternion = !0
    } else e.rotation.set(s[0], s[1], s[2]);
    e.scale.set(c[0], c[1], c[2]);
    i && e.traverse(function(e) {
      e.material = i
    });
    var h = void 0 !== o.visible ? o.visible : !0;
    e.traverse(function(e) {
      e.visible = h
    });
    r.add(e);
    e.name = t;
    _.objects[t] = e;
    n()
  }

  function l(e) {
    return function(t, r) {
      t.name = e;
      a(t, r, e);
      x -= 1;
      S.onLoadComplete();
      u()
    }
  }

  function c(e, t, r, i) {
    return function(n) {
      var o;
      o = n.content ? n.content : n.dae ? n.scene : n;
      s(o, e, t, r, i);
      x -= 1;
      S.onLoadComplete();
      u()
    }
  }

  function h(e) {
    return function(t, r) {
      t.name = e;
      _.geometries[e] = t;
      _.face_materials[e] = r
    }
  }

  function u() {
    var e = {
      totalModels: H,
      totalTextures: b,
      loadedModels: H - x,
      loadedTextures: b - w
    };
    S.callbackProgress(e, _);
    S.onLoadProgress();
    if (0 === x && 0 === w) {
      f();
      t(_)
    }
  }

  function f() {
    for (var e = 0; e < C.length; e++) {
      var t = C[e],
        r = _.objects[t.targetName];
      if (r) t.object.target = r;
      else {
        t.object.target = new THREE.Object3D;
        _.scene.add(t.object.target)
      }
      t.object.target.userData.targetInverse = t.object
    }
  }
  var p, d, m, E, g, v, y, T, R, x, w, H, b, _, S = this,
    M = THREE.Loader.prototype.extractUrlBase(r),
    C = [],
    A = e;
  for (var L in this.geometryHandlerMap) {
    var D = this.geometryHandlerMap[L].loaderClass;
    this.geometryHandlerMap[L].loaderObject = new D
  }
  for (var L in this.hierarchyHandlerMap) {
    var D = this.hierarchyHandlerMap[L].loaderClass;
    this.hierarchyHandlerMap[L].loaderObject = new D
  }
  x = 0;
  w = 0;
  _ = {
    scene: new THREE.Scene,
    geometries: {},
    face_materials: {},
    materials: {},
    textures: {},
    objects: {},
    cameras: {},
    lights: {},
    fogs: {},
    empties: {},
    groups: {}
  };
  if (A.transform) {
    var P = A.transform.position,
      F = A.transform.rotation,
      N = A.transform.scale;
    P && _.scene.position.set(P[0], P[1], P[2]);
    F && _.scene.rotation.set(F[0], F[1], F[2]);
    N && _.scene.scale.set(N[0], N[1], N[2]);
    if (P || F || N) {
      _.scene.updateMatrix();
      _.scene.updateMatrixWorld()
    }
  }
  var U, V, z = function(e) {
      w -= e;
      u();
      S.onLoadComplete()
    },
    B = function(e) {
      return function() {
        z(e)
      }
    };
  for (U in A.fogs) {
    V = A.fogs[U];
    "linear" === V.type ? E = new THREE.Fog(0, V.near, V.far) : "exp2" === V.type && (E = new THREE.FogExp2(0, V.density));
    v = V.color;
    E.color.setRGB(v[0], v[1], v[2]);
    _.fogs[U] = E
  }
  var O, k;
  for (O in A.geometries) {
    k = A.geometries[O];
    if (k.type in this.geometryHandlerMap) {
      x += 1;
      S.onLoadStart()
    }
  }
  var I, j;
  for (I in A.objects) {
    j = A.objects[I];
    if (j.type && j.type in this.hierarchyHandlerMap) {
      x += 1;
      S.onLoadStart()
    }
  }
  H = x;
  for (O in A.geometries) {
    k = A.geometries[O];
    if ("cube" === k.type) {
      p = new THREE.CubeGeometry(k.width, k.height, k.depth, k.widthSegments, k.heightSegments, k.depthSegments);
      p.name = O;
      _.geometries[O] = p
    } else if ("plane" === k.type) {
      p = new THREE.PlaneGeometry(k.width, k.height, k.widthSegments, k.heightSegments);
      p.name = O;
      _.geometries[O] = p
    } else if ("sphere" === k.type) {
      p = new THREE.SphereGeometry(k.radius, k.widthSegments, k.heightSegments);
      p.name = O;
      _.geometries[O] = p
    } else if ("cylinder" === k.type) {
      p = new THREE.CylinderGeometry(k.topRad, k.botRad, k.height, k.radSegs, k.heightSegs);
      p.name = O;
      _.geometries[O] = p
    } else if ("torus" === k.type) {
      p = new THREE.TorusGeometry(k.radius, k.tube, k.segmentsR, k.segmentsT);
      p.name = O;
      _.geometries[O] = p
    } else if ("icosahedron" === k.type) {
      p = new THREE.IcosahedronGeometry(k.radius, k.subdivisions);
      p.name = O;
      _.geometries[O] = p
    } else if (k.type in this.geometryHandlerMap) {
      var G = {};
      for (var W in k) "type" !== W && "url" !== W && (G[W] = k[W]);
      var X = this.geometryHandlerMap[k.type].loaderObject;
      X.load(i(k.url, A.urlBaseType), l(O), G)
    } else if ("embedded" === k.type) {
      var q = A.embeds[k.id],
        Y = "";
      q.metadata = A.metadata;
      if (q) {
        var $ = this.geometryHandlerMap.ascii.loaderObject,
          K = $.parse(q, Y);
        h(O)(K.geometry, K.materials)
      }
    }
  }
  var Q, Z;
  for (Q in A.textures) {
    Z = A.textures[Q];
    if (Z.url instanceof Array) {
      w += Z.url.length;
      for (var J = 0; J < Z.url.length; J++) S.onLoadStart()
    } else {
      w += 1;
      S.onLoadStart()
    }
  }
  b = w;
  for (Q in A.textures) {
    Z = A.textures[Q];
    void 0 !== Z.mapping && void 0 !== THREE[Z.mapping] && (Z.mapping = new THREE[Z.mapping]);
    if (Z.url instanceof Array) {
      for (var ee = Z.url.length, te = [], re = 0; ee > re; re++) te[re] = i(Z.url[re], A.urlBaseType);
      var ie = /\.dds$/i.test(te[0]);
      g = ie ? THREE.ImageUtils.loadCompressedTextureCube(te, Z.mapping, B(ee)) : THREE.ImageUtils.loadTextureCube(te, Z.mapping, B(ee))
    } else {
      var ie = /\.dds$/i.test(Z.url),
        ne = i(Z.url, A.urlBaseType),
        oe = B(1);
      g = ie ? THREE.ImageUtils.loadCompressedTexture(ne, Z.mapping, oe) : THREE.ImageUtils.loadTexture(ne, Z.mapping, oe);
      void 0 !== THREE[Z.minFilter] && (g.minFilter = THREE[Z.minFilter]);
      void 0 !== THREE[Z.magFilter] && (g.magFilter = THREE[Z.magFilter]);
      Z.anisotropy && (g.anisotropy = Z.anisotropy);
      if (Z.repeat) {
        g.repeat.set(Z.repeat[0], Z.repeat[1]);
        1 !== Z.repeat[0] && (g.wrapS = THREE.RepeatWrapping);
        1 !== Z.repeat[1] && (g.wrapT = THREE.RepeatWrapping)
      }
      Z.offset && g.offset.set(Z.offset[0], Z.offset[1]);
      if (Z.wrap) {
        var ae = {
          repeat: THREE.RepeatWrapping,
          mirror: THREE.MirroredRepeatWrapping
        };
        void 0 !== ae[Z.wrap[0]] && (g.wrapS = ae[Z.wrap[0]]);
        void 0 !== ae[Z.wrap[1]] && (g.wrapT = ae[Z.wrap[1]])
      }
    }
    _.textures[Q] = g
  }
  var se, le, ce;
  for (se in A.materials) {
    le = A.materials[se];
    for (ce in le.parameters)
      if ("envMap" === ce || "map" === ce || "lightMap" === ce || "bumpMap" === ce) le.parameters[ce] = _.textures[le.parameters[ce]];
      else if ("shading" === ce) le.parameters[ce] = "flat" === le.parameters[ce] ? THREE.FlatShading : THREE.SmoothShading;
    else if ("side" === ce) "double" == le.parameters[ce] ? le.parameters[ce] = THREE.DoubleSide : "back" == le.parameters[ce] ? le.parameters[ce] = THREE.BackSide : le.parameters[ce] = THREE.FrontSide;
    else if ("blending" === ce) le.parameters[ce] = le.parameters[ce] in THREE ? THREE[le.parameters[ce]] : THREE.NormalBlending;
    else if ("combine" === ce) le.parameters[ce] = le.parameters[ce] in THREE ? THREE[le.parameters[ce]] : THREE.MultiplyOperation;
    else if ("vertexColors" === ce) "face" == le.parameters[ce] ? le.parameters[ce] = THREE.FaceColors : le.parameters[ce] && (le.parameters[ce] = THREE.VertexColors);
    else if ("wrapRGB" === ce) {
      var he = le.parameters[ce];
      le.parameters[ce] = new THREE.Vector3(he[0], he[1], he[2])
    }
    void 0 !== le.parameters.opacity && le.parameters.opacity < 1 && (le.parameters.transparent = !0);
    if (le.parameters.normalMap) {
      var ue = THREE.ShaderLib.normalmap,
        fe = THREE.UniformsUtils.clone(ue.uniforms),
        pe = le.parameters.color,
        de = le.parameters.specular,
        me = le.parameters.ambient,
        Ee = le.parameters.shininess;
      fe.tNormal.value = _.textures[le.parameters.normalMap];
      le.parameters.normalScale && fe.uNormalScale.value.set(le.parameters.normalScale[0], le.parameters.normalScale[1]);
      if (le.parameters.map) {
        fe.tDiffuse.value = le.parameters.map;
        fe.enableDiffuse.value = !0
      }
      if (le.parameters.envMap) {
        fe.tCube.value = le.parameters.envMap;
        fe.enableReflection.value = !0;
        fe.uReflectivity.value = le.parameters.reflectivity
      }
      if (le.parameters.lightMap) {
        fe.tAO.value = le.parameters.lightMap;
        fe.enableAO.value = !0
      }
      if (le.parameters.specularMap) {
        fe.tSpecular.value = _.textures[le.parameters.specularMap];
        fe.enableSpecular.value = !0
      }
      if (le.parameters.displacementMap) {
        fe.tDisplacement.value = _.textures[le.parameters.displacementMap];
        fe.enableDisplacement.value = !0;
        fe.uDisplacementBias.value = le.parameters.displacementBias;
        fe.uDisplacementScale.value = le.parameters.displacementScale
      }
      fe.uDiffuseColor.value.setHex(pe);
      fe.uSpecularColor.value.setHex(de);
      fe.uAmbientColor.value.setHex(me);
      fe.uShininess.value = Ee;
      le.parameters.opacity && (fe.uOpacity.value = le.parameters.opacity);
      var ge = {
        fragmentShader: ue.fragmentShader,
        vertexShader: ue.vertexShader,
        uniforms: fe,
        lights: !0,
        fog: !0
      };
      d = new THREE.ShaderMaterial(ge)
    } else d = new THREE[le.type](le.parameters);
    d.name = se;
    _.materials[se] = d
  }
  for (se in A.materials) {
    le = A.materials[se];
    if (le.parameters.materials) {
      for (var ve = [], re = 0; re < le.parameters.materials.length; re++) {
        var ye = le.parameters.materials[re];
        ve.push(_.materials[ye])
      }
      _.materials[se].materials = ve
    }
  }
  n();
  _.cameras && A.defaults.camera && (_.currentCamera = _.cameras[A.defaults.camera]);
  _.fogs && A.defaults.fog && (_.scene.fog = _.fogs[A.defaults.fog]);
  S.callbackSync(_);
  u()
};
THREE.TextureLoader = function() {
  this.crossOrigin = null
};
THREE.TextureLoader.prototype = {
  constructor: THREE.TextureLoader,
  addEventListener: THREE.EventDispatcher.prototype.addEventListener,
  hasEventListener: THREE.EventDispatcher.prototype.hasEventListener,
  removeEventListener: THREE.EventDispatcher.prototype.removeEventListener,
  dispatchEvent: THREE.EventDispatcher.prototype.dispatchEvent,
  load: function(e) {
    var t = this,
      r = new Image;
    r.addEventListener("load", function() {
      var e = new THREE.Texture(r);
      e.needsUpdate = !0;
      t.dispatchEvent({
        type: "load",
        content: e
      })
    }, !1);
    r.addEventListener("error", function() {
      t.dispatchEvent({
        type: "error",
        message: "Couldn't load URL [" + e + "]"
      })
    }, !1);
    t.crossOrigin && (r.crossOrigin = t.crossOrigin);
    r.src = e
  }
};
THREE.Material = function() {
  this.id = THREE.MaterialIdCount++;
  this.name = "";
  this.side = THREE.FrontSide;
  this.opacity = 1;
  this.transparent = !1;
  this.blending = THREE.NormalBlending;
  this.blendSrc = THREE.SrcAlphaFactor;
  this.blendDst = THREE.OneMinusSrcAlphaFactor;
  this.blendEquation = THREE.AddEquation;
  this.depthTest = !0;
  this.depthWrite = !0;
  this.polygonOffset = !1;
  this.polygonOffsetFactor = 0;
  this.polygonOffsetUnits = 0;
  this.alphaTest = 0;
  this.overdraw = !1;
  this.visible = !0;
  this.needsUpdate = !0
};
THREE.Material.prototype = {
  constructor: THREE.Material,
  addEventListener: THREE.EventDispatcher.prototype.addEventListener,
  hasEventListener: THREE.EventDispatcher.prototype.hasEventListener,
  removeEventListener: THREE.EventDispatcher.prototype.removeEventListener,
  dispatchEvent: THREE.EventDispatcher.prototype.dispatchEvent,
  setValues: function(e) {
    if (void 0 !== e)
      for (var t in e) {
        var r = e[t];
        if (void 0 !== r) {
          if (t in this) {
            var i = this[t];
            i instanceof THREE.Color ? i.set(r) : i instanceof THREE.Vector3 && r instanceof THREE.Vector3 ? i.copy(r) : this[t] = r
          }
        } else console.warn("THREE.Material: '" + t + "' parameter is undefined.")
      }
  },
  clone: function(e) {
    void 0 === e && (e = new THREE.Material);
    e.name = this.name;
    e.side = this.side;
    e.opacity = this.opacity;
    e.transparent = this.transparent;
    e.blending = this.blending;
    e.blendSrc = this.blendSrc;
    e.blendDst = this.blendDst;
    e.blendEquation = this.blendEquation;
    e.depthTest = this.depthTest;
    e.depthWrite = this.depthWrite;
    e.polygonOffset = this.polygonOffset;
    e.polygonOffsetFactor = this.polygonOffsetFactor;
    e.polygonOffsetUnits = this.polygonOffsetUnits;
    e.alphaTest = this.alphaTest;
    e.overdraw = this.overdraw;
    e.visible = this.visible;
    return e
  },
  dispose: function() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
};
THREE.MaterialIdCount = 0;
THREE.LineBasicMaterial = function(e) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.linewidth = 1;
  this.linecap = "round";
  this.linejoin = "round";
  this.vertexColors = !1;
  this.fog = !0;
  this.setValues(e)
};
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone = function() {
  var e = new THREE.LineBasicMaterial;
  THREE.Material.prototype.clone.call(this, e);
  e.color.copy(this.color);
  e.linewidth = this.linewidth;
  e.linecap = this.linecap;
  e.linejoin = this.linejoin;
  e.vertexColors = this.vertexColors;
  e.fog = this.fog;
  return e
};
THREE.LineDashedMaterial = function(e) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.linewidth = 1;
  this.scale = 1;
  this.dashSize = 3;
  this.gapSize = 1;
  this.vertexColors = !1;
  this.fog = !0;
  this.setValues(e)
};
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone = function() {
  var e = new THREE.LineDashedMaterial;
  THREE.Material.prototype.clone.call(this, e);
  e.color.copy(this.color);
  e.linewidth = this.linewidth;
  e.scale = this.scale;
  e.dashSize = this.dashSize;
  e.gapSize = this.gapSize;
  e.vertexColors = this.vertexColors;
  e.fog = this.fog;
  return e
};
THREE.MeshBasicMaterial = function(e) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.map = null;
  this.lightMap = null;
  this.specularMap = null;
  this.envMap = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.vertexColors = THREE.NoColors;
  this.skinning = !1;
  this.morphTargets = !1;
  this.setValues(e)
};
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone = function() {
  var e = new THREE.MeshBasicMaterial;
  THREE.Material.prototype.clone.call(this, e);
  e.color.copy(this.color);
  e.map = this.map;
  e.lightMap = this.lightMap;
  e.specularMap = this.specularMap;
  e.envMap = this.envMap;
  e.combine = this.combine;
  e.reflectivity = this.reflectivity;
  e.refractionRatio = this.refractionRatio;
  e.fog = this.fog;
  e.shading = this.shading;
  e.wireframe = this.wireframe;
  e.wireframeLinewidth = this.wireframeLinewidth;
  e.wireframeLinecap = this.wireframeLinecap;
  e.wireframeLinejoin = this.wireframeLinejoin;
  e.vertexColors = this.vertexColors;
  e.skinning = this.skinning;
  e.morphTargets = this.morphTargets;
  return e
};
THREE.MeshLambertMaterial = function(e) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.ambient = new THREE.Color(16777215);
  this.emissive = new THREE.Color(0);
  this.wrapAround = !1;
  this.wrapRGB = new THREE.Vector3(1, 1, 1);
  this.map = null;
  this.lightMap = null;
  this.specularMap = null;
  this.envMap = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.vertexColors = THREE.NoColors;
  this.skinning = !1;
  this.morphTargets = !1;
  this.morphNormals = !1;
  this.setValues(e)
};
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone = function() {
  var e = new THREE.MeshLambertMaterial;
  THREE.Material.prototype.clone.call(this, e);
  e.color.copy(this.color);
  e.ambient.copy(this.ambient);
  e.emissive.copy(this.emissive);
  e.wrapAround = this.wrapAround;
  e.wrapRGB.copy(this.wrapRGB);
  e.map = this.map;
  e.lightMap = this.lightMap;
  e.specularMap = this.specularMap;
  e.envMap = this.envMap;
  e.combine = this.combine;
  e.reflectivity = this.reflectivity;
  e.refractionRatio = this.refractionRatio;
  e.fog = this.fog;
  e.shading = this.shading;
  e.wireframe = this.wireframe;
  e.wireframeLinewidth = this.wireframeLinewidth;
  e.wireframeLinecap = this.wireframeLinecap;
  e.wireframeLinejoin = this.wireframeLinejoin;
  e.vertexColors = this.vertexColors;
  e.skinning = this.skinning;
  e.morphTargets = this.morphTargets;
  e.morphNormals = this.morphNormals;
  return e
};
THREE.MeshPhongMaterial = function(e) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.ambient = new THREE.Color(16777215);
  this.emissive = new THREE.Color(0);
  this.specular = new THREE.Color(1118481);
  this.shininess = 30;
  this.metal = !1;
  this.perPixel = !0;
  this.wrapAround = !1;
  this.wrapRGB = new THREE.Vector3(1, 1, 1);
  this.map = null;
  this.lightMap = null;
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalScale = new THREE.Vector2(1, 1);
  this.specularMap = null;
  this.envMap = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.vertexColors = THREE.NoColors;
  this.skinning = !1;
  this.morphTargets = !1;
  this.morphNormals = !1;
  this.setValues(e)
};
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone = function() {
  var e = new THREE.MeshPhongMaterial;
  THREE.Material.prototype.clone.call(this, e);
  e.color.copy(this.color);
  e.ambient.copy(this.ambient);
  e.emissive.copy(this.emissive);
  e.specular.copy(this.specular);
  e.shininess = this.shininess;
  e.metal = this.metal;
  e.perPixel = this.perPixel;
  e.wrapAround = this.wrapAround;
  e.wrapRGB.copy(this.wrapRGB);
  e.map = this.map;
  e.lightMap = this.lightMap;
  e.bumpMap = this.bumpMap;
  e.bumpScale = this.bumpScale;
  e.normalMap = this.normalMap;
  e.normalScale.copy(this.normalScale);
  e.specularMap = this.specularMap;
  e.envMap = this.envMap;
  e.combine = this.combine;
  e.reflectivity = this.reflectivity;
  e.refractionRatio = this.refractionRatio;
  e.fog = this.fog;
  e.shading = this.shading;
  e.wireframe = this.wireframe;
  e.wireframeLinewidth = this.wireframeLinewidth;
  e.wireframeLinecap = this.wireframeLinecap;
  e.wireframeLinejoin = this.wireframeLinejoin;
  e.vertexColors = this.vertexColors;
  e.skinning = this.skinning;
  e.morphTargets = this.morphTargets;
  e.morphNormals = this.morphNormals;
  return e
};
THREE.MeshDepthMaterial = function(e) {
  THREE.Material.call(this);
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.setValues(e)
};
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.clone = function() {
  var e = new THREE.MeshDepthMaterial;
  THREE.Material.prototype.clone.call(this, e);
  e.wireframe = this.wireframe;
  e.wireframeLinewidth = this.wireframeLinewidth;
  return e
};
THREE.MeshNormalMaterial = function(e) {
  THREE.Material.call(this, e);
  this.shading = THREE.FlatShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.morphTargets = !1;
  this.setValues(e)
};
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.clone = function() {
  var e = new THREE.MeshNormalMaterial;
  THREE.Material.prototype.clone.call(this, e);
  e.shading = this.shading;
  e.wireframe = this.wireframe;
  e.wireframeLinewidth = this.wireframeLinewidth;
  return e
};
THREE.MeshFaceMaterial = function(e) {
  this.materials = e instanceof Array ? e : []
};
THREE.MeshFaceMaterial.prototype.clone = function() {
  return new THREE.MeshFaceMaterial(this.materials.slice(0))
};
THREE.ParticleBasicMaterial = function(e) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.map = null;
  this.size = 1;
  this.sizeAttenuation = !0;
  this.vertexColors = !1;
  this.fog = !0;
  this.setValues(e)
};
THREE.ParticleBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ParticleBasicMaterial.prototype.clone = function() {
  var e = new THREE.ParticleBasicMaterial;
  THREE.Material.prototype.clone.call(this, e);
  e.color.copy(this.color);
  e.map = this.map;
  e.size = this.size;
  e.sizeAttenuation = this.sizeAttenuation;
  e.vertexColors = this.vertexColors;
  e.fog = this.fog;
  return e
};
THREE.ParticleCanvasMaterial = function(e) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.program = function(e, t) {};
  this.setValues(e)
};
THREE.ParticleCanvasMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ParticleCanvasMaterial.prototype.clone = function() {
  var e = new THREE.ParticleCanvasMaterial;
  THREE.Material.prototype.clone.call(this, e);
  e.color.copy(this.color);
  e.program = this.program;
  return e
};
THREE.ShaderMaterial = function(e) {
  THREE.Material.call(this);
  this.fragmentShader = "void main() {}";
  this.vertexShader = "void main() {}";
  this.uniforms = {};
  this.defines = {};
  this.attributes = null;
  this.shading = THREE.SmoothShading;
  this.linewidth = 1;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.fog = !1;
  this.lights = !1;
  this.vertexColors = THREE.NoColors;
  this.skinning = !1;
  this.morphTargets = !1;
  this.morphNormals = !1;
  this.setValues(e)
};
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone = function() {
  var e = new THREE.ShaderMaterial;
  THREE.Material.prototype.clone.call(this, e);
  e.fragmentShader = this.fragmentShader;
  e.vertexShader = this.vertexShader;
  e.uniforms = THREE.UniformsUtils.clone(this.uniforms);
  e.attributes = this.attributes;
  e.defines = this.defines;
  e.shading = this.shading;
  e.wireframe = this.wireframe;
  e.wireframeLinewidth = this.wireframeLinewidth;
  e.fog = this.fog;
  e.lights = this.lights;
  e.vertexColors = this.vertexColors;
  e.skinning = this.skinning;
  e.morphTargets = this.morphTargets;
  e.morphNormals = this.morphNormals;
  return e
};
THREE.SpriteMaterial = function(e) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.map = new THREE.Texture;
  this.useScreenCoordinates = !0;
  this.depthTest = !this.useScreenCoordinates;
  this.sizeAttenuation = !this.useScreenCoordinates;
  this.scaleByViewport = !this.sizeAttenuation;
  this.alignment = THREE.SpriteAlignment.center.clone();
  this.fog = !1;
  this.uvOffset = new THREE.Vector2(0, 0);
  this.uvScale = new THREE.Vector2(1, 1);
  this.setValues(e);
  e = e || {};
  void 0 === e.depthTest && (this.depthTest = !this.useScreenCoordinates);
  void 0 === e.sizeAttenuation && (this.sizeAttenuation = !this.useScreenCoordinates);
  void 0 === e.scaleByViewport && (this.scaleByViewport = !this.sizeAttenuation)
};
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.clone = function() {
  var e = new THREE.SpriteMaterial;
  THREE.Material.prototype.clone.call(this, e);
  e.color.copy(this.color);
  e.map = this.map;
  e.useScreenCoordinates = this.useScreenCoordinates;
  e.sizeAttenuation = this.sizeAttenuation;
  e.scaleByViewport = this.scaleByViewport;
  e.alignment.copy(this.alignment);
  e.uvOffset.copy(this.uvOffset);
  e.uvScale.copy(this.uvScale);
  e.fog = this.fog;
  return e
};
THREE.SpriteAlignment = {};
THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1);
THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1);
THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1);
THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0);
THREE.SpriteAlignment.center = new THREE.Vector2(0, 0);
THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0);
THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1);
THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1);
THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1);
THREE.Texture = function(e, t, r, i, n, o, a, s, l) {
  this.id = THREE.TextureIdCount++;
  this.name = "";
  this.image = e;
  this.mipmaps = [];
  this.mapping = void 0 !== t ? t : new THREE.UVMapping;
  this.wrapS = void 0 !== r ? r : THREE.ClampToEdgeWrapping;
  this.wrapT = void 0 !== i ? i : THREE.ClampToEdgeWrapping;
  this.magFilter = void 0 !== n ? n : THREE.LinearFilter;
  this.minFilter = void 0 !== o ? o : THREE.LinearMipMapLinearFilter;
  this.anisotropy = void 0 !== l ? l : 1;
  this.format = void 0 !== a ? a : THREE.RGBAFormat;
  this.type = void 0 !== s ? s : THREE.UnsignedByteType;
  this.offset = new THREE.Vector2(0, 0);
  this.repeat = new THREE.Vector2(1, 1);
  this.generateMipmaps = !0;
  this.premultiplyAlpha = !1;
  this.flipY = !0;
  this.unpackAlignment = 4;
  this.needsUpdate = !1;
  this.onUpdate = null
};
THREE.Texture.prototype = {
  constructor: THREE.Texture,
  addEventListener: THREE.EventDispatcher.prototype.addEventListener,
  hasEventListener: THREE.EventDispatcher.prototype.hasEventListener,
  removeEventListener: THREE.EventDispatcher.prototype.removeEventListener,
  dispatchEvent: THREE.EventDispatcher.prototype.dispatchEvent,
  clone: function(e) {
    void 0 === e && (e = new THREE.Texture);
    e.image = this.image;
    e.mipmaps = this.mipmaps.slice(0);
    e.mapping = this.mapping;
    e.wrapS = this.wrapS;
    e.wrapT = this.wrapT;
    e.magFilter = this.magFilter;
    e.minFilter = this.minFilter;
    e.anisotropy = this.anisotropy;
    e.format = this.format;
    e.type = this.type;
    e.offset.copy(this.offset);
    e.repeat.copy(this.repeat);
    e.generateMipmaps = this.generateMipmaps;
    e.premultiplyAlpha = this.premultiplyAlpha;
    e.flipY = this.flipY;
    e.unpackAlignment = this.unpackAlignment;
    return e
  },
  dispose: function() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
};
THREE.TextureIdCount = 0;
THREE.CompressedTexture = function(e, t, r, i, n, o, a, s, l, c, h) {
  THREE.Texture.call(this, null, o, a, s, l, c, i, n, h);
  this.image = {
    width: t,
    height: r
  };
  this.mipmaps = e;
  this.generateMipmaps = !1
};
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone = function() {
  var e = new THREE.CompressedTexture;
  THREE.Texture.prototype.clone.call(this, e);
  return e
};
THREE.DataTexture = function(e, t, r, i, n, o, a, s, l, c, h) {
  THREE.Texture.call(this, null, o, a, s, l, c, i, n, h);
  this.image = {
    data: e,
    width: t,
    height: r
  }
};
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.clone = function() {
  var e = new THREE.DataTexture;
  THREE.Texture.prototype.clone.call(this, e);
  return e
};
THREE.Particle = function(e) {
  THREE.Object3D.call(this);
  this.material = e
};
THREE.Particle.prototype = Object.create(THREE.Object3D.prototype);
THREE.Particle.prototype.clone = function(e) {
  void 0 === e && (e = new THREE.Particle(this.material));
  THREE.Object3D.prototype.clone.call(this, e);
  return e
};
THREE.ParticleSystem = function(e, t) {
  THREE.Object3D.call(this);
  this.geometry = e;
  this.material = void 0 !== t ? t : new THREE.ParticleBasicMaterial({
    color: 16777215 * Math.random()
  });
  this.sortParticles = !1;
  this.geometry && null === this.geometry.boundingSphere && this.geometry.computeBoundingSphere();
  this.frustumCulled = !1
};
THREE.ParticleSystem.prototype = Object.create(THREE.Object3D.prototype);
THREE.ParticleSystem.prototype.clone = function(e) {
  void 0 === e && (e = new THREE.ParticleSystem(this.geometry, this.material));
  e.sortParticles = this.sortParticles;
  THREE.Object3D.prototype.clone.call(this, e);
  return e
};
THREE.Line = function(e, t, r) {
  THREE.Object3D.call(this);
  this.geometry = e;
  this.material = void 0 !== t ? t : new THREE.LineBasicMaterial({
    color: 16777215 * Math.random()
  });
  this.type = void 0 !== r ? r : THREE.LineStrip;
  this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere())
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.clone = function(e) {
  void 0 === e && (e = new THREE.Line(this.geometry, this.material, this.type));
  THREE.Object3D.prototype.clone.call(this, e);
  return e
};
THREE.Mesh = function(e, t) {
  THREE.Object3D.call(this);
  this.geometry = null;
  this.material = null;
  this.setGeometry(e);
  this.setMaterial(t)
};
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.setGeometry = function(e) {
  if (void 0 !== e) {
    this.geometry = e;
    null === this.geometry.boundingSphere && this.geometry.computeBoundingSphere();
    this.updateMorphTargets()
  }
};
THREE.Mesh.prototype.setMaterial = function(e) {
  void 0 !== e ? this.material = e : this.material = new THREE.MeshBasicMaterial({
    color: 16777215 * Math.random(),
    wireframe: !0
  })
};
THREE.Mesh.prototype.updateMorphTargets = function() {
  if (this.geometry.morphTargets.length > 0) {
    this.morphTargetBase = -1;
    this.morphTargetForcedOrder = [];
    this.morphTargetInfluences = [];
    this.morphTargetDictionary = {};
    for (var e = 0, t = this.geometry.morphTargets.length; t > e; e++) {
      this.morphTargetInfluences.push(0);
      this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
    }
  }
};
THREE.Mesh.prototype.getMorphTargetIndexByName = function(e) {
  if (void 0 !== this.morphTargetDictionary[e]) return this.morphTargetDictionary[e];
  console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0.");
  return 0
};
THREE.Mesh.prototype.clone = function(e) {
  void 0 === e && (e = new THREE.Mesh(this.geometry, this.material));
  THREE.Object3D.prototype.clone.call(this, e);
  return e
};
THREE.Bone = function(e) {
  THREE.Object3D.call(this);
  this.skin = e;
  this.skinMatrix = new THREE.Matrix4
};
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.update = function(e, t) {
  this.matrixAutoUpdate && (t |= this.updateMatrix());
  if (t || this.matrixWorldNeedsUpdate) {
    e ? this.skinMatrix.multiplyMatrices(e, this.matrix) : this.skinMatrix.copy(this.matrix);
    this.matrixWorldNeedsUpdate = !1;
    t = !0
  }
  var r, i = this.children.length;
  for (r = 0; i > r; r++) this.children[r].update(this.skinMatrix, t)
};
THREE.SkinnedMesh = function(e, t, r) {
  THREE.Mesh.call(this, e, t);
  this.useVertexTexture = void 0 !== r ? r : !0;
  this.identityMatrix = new THREE.Matrix4;
  this.bones = [];
  this.boneMatrices = [];
  var i, n, o, a, s, l;
  if (this.geometry && void 0 !== this.geometry.bones) {
    for (i = 0; i < this.geometry.bones.length; i++) {
      o = this.geometry.bones[i];
      a = o.pos;
      s = o.rotq;
      l = o.scl;
      n = this.addBone();
      n.name = o.name;
      n.position.set(a[0], a[1], a[2]);
      n.quaternion.set(s[0], s[1], s[2], s[3]);
      n.useQuaternion = !0;
      void 0 !== l ? n.scale.set(l[0], l[1], l[2]) : n.scale.set(1, 1, 1)
    }
    for (i = 0; i < this.bones.length; i++) {
      o = this.geometry.bones[i];
      n = this.bones[i]; - 1 === o.parent ? this.add(n) : this.bones[o.parent].add(n)
    }
    var c = this.bones.length;
    if (this.useVertexTexture) {
      var h;
      h = c > 256 ? 64 : c > 64 ? 32 : c > 16 ? 16 : 8;
      this.boneTextureWidth = h;
      this.boneTextureHeight = h;
      this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4);
      this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType);
      this.boneTexture.minFilter = THREE.NearestFilter;
      this.boneTexture.magFilter = THREE.NearestFilter;
      this.boneTexture.generateMipmaps = !1;
      this.boneTexture.flipY = !1
    } else this.boneMatrices = new Float32Array(16 * c);
    this.pose()
  }
};
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.SkinnedMesh.prototype.addBone = function(e) {
  void 0 === e && (e = new THREE.Bone(this));
  this.bones.push(e);
  return e
};
THREE.SkinnedMesh.prototype.updateMatrixWorld = function(e) {
  this.matrixAutoUpdate && this.updateMatrix();
  if (this.matrixWorldNeedsUpdate || e) {
    this.parent ? this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix);
    this.matrixWorldNeedsUpdate = !1;
    e = !0
  }
  for (var t = 0, r = this.children.length; r > t; t++) {
    var i = this.children[t];
    i instanceof THREE.Bone ? i.update(this.identityMatrix, !1) : i.updateMatrixWorld(!0)
  }
  if (void 0 == this.boneInverses) {
    this.boneInverses = [];
    for (var n = 0, o = this.bones.length; o > n; n++) {
      var a = new THREE.Matrix4;
      a.getInverse(this.bones[n].skinMatrix);
      this.boneInverses.push(a)
    }
  }
  for (var n = 0, o = this.bones.length; o > n; n++) {
    THREE.SkinnedMesh.offsetMatrix.multiplyMatrices(this.bones[n].skinMatrix, this.boneInverses[n]);
    THREE.SkinnedMesh.offsetMatrix.flattenToArrayOffset(this.boneMatrices, 16 * n)
  }
  this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
};
THREE.SkinnedMesh.prototype.pose = function() {
  this.updateMatrixWorld(!0);
  for (var e = 0; e < this.geometry.skinIndices.length; e++) {
    var t = this.geometry.skinWeights[e],
      r = 1 / t.lengthManhattan();
    r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1)
  }
};
THREE.SkinnedMesh.prototype.clone = function(e) {
  void 0 === e && (e = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture));
  THREE.Mesh.prototype.clone.call(this, e);
  return e
};
THREE.SkinnedMesh.offsetMatrix = new THREE.Matrix4;
THREE.MorphAnimMesh = function(e, t) {
  THREE.Mesh.call(this, e, t);
  this.duration = 1e3;
  this.mirroredLoop = !1;
  this.time = 0;
  this.lastKeyframe = 0;
  this.currentKeyframe = 0;
  this.direction = 1;
  this.directionBackwards = !1;
  this.setFrameRange(0, this.geometry.morphTargets.length - 1)
};
THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.setFrameRange = function(e, t) {
  this.startKeyframe = e;
  this.endKeyframe = t;
  this.length = this.endKeyframe - this.startKeyframe + 1
};
THREE.MorphAnimMesh.prototype.setDirectionForward = function() {
  this.direction = 1;
  this.directionBackwards = !1
};
THREE.MorphAnimMesh.prototype.setDirectionBackward = function() {
  this.direction = -1;
  this.directionBackwards = !0
};
THREE.MorphAnimMesh.prototype.parseAnimations = function() {
  var e = this.geometry;
  e.animations || (e.animations = {});
  for (var t, r = e.animations, i = /([a-z]+)(\d+)/, n = 0, o = e.morphTargets.length; o > n; n++) {
    var a = e.morphTargets[n],
      s = a.name.match(i);
    if (s && s.length > 1) {
      var l = s[1];
      s[2];
      r[l] || (r[l] = {
        start: 1 / 0,
        end: -(1 / 0)
      });
      var c = r[l];
      n < c.start && (c.start = n);
      n > c.end && (c.end = n);
      t || (t = l)
    }
  }
  e.firstAnimation = t
};
THREE.MorphAnimMesh.prototype.setAnimationLabel = function(e, t, r) {
  this.geometry.animations || (this.geometry.animations = {});
  this.geometry.animations[e] = {
    start: t,
    end: r
  }
};
THREE.MorphAnimMesh.prototype.playAnimation = function(e, t) {
  var r = this.geometry.animations[e];
  if (r) {
    this.setFrameRange(r.start, r.end);
    this.duration = 1e3 * ((r.end - r.start) / t);
    this.time = 0
  } else console.warn("animation[" + e + "] undefined")
};
THREE.MorphAnimMesh.prototype.updateAnimation = function(e) {
  var t = this.duration / this.length;
  this.time += this.direction * e;
  if (this.mirroredLoop) {
    if (this.time > this.duration || this.time < 0) {
      this.direction *= -1;
      if (this.time > this.duration) {
        this.time = this.duration;
        this.directionBackwards = !0
      }
      if (this.time < 0) {
        this.time = 0;
        this.directionBackwards = !1
      }
    }
  } else {
    this.time = this.time % this.duration;
    this.time < 0 && (this.time += this.duration)
  }
  var r = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / t), 0, this.length - 1);
  if (r !== this.currentKeyframe) {
    this.morphTargetInfluences[this.lastKeyframe] = 0;
    this.morphTargetInfluences[this.currentKeyframe] = 1;
    this.morphTargetInfluences[r] = 0;
    this.lastKeyframe = this.currentKeyframe;
    this.currentKeyframe = r
  }
  var i = this.time % t / t;
  this.directionBackwards && (i = 1 - i);
  this.morphTargetInfluences[this.currentKeyframe] = i;
  this.morphTargetInfluences[this.lastKeyframe] = 1 - i
};
THREE.MorphAnimMesh.prototype.clone = function(e) {
  void 0 === e && (e = new THREE.MorphAnimMesh(this.geometry, this.material));
  e.duration = this.duration;
  e.mirroredLoop = this.mirroredLoop;
  e.time = this.time;
  e.lastKeyframe = this.lastKeyframe;
  e.currentKeyframe = this.currentKeyframe;
  e.direction = this.direction;
  e.directionBackwards = this.directionBackwards;
  THREE.Mesh.prototype.clone.call(this, e);
  return e
};
THREE.Ribbon = function(e, t) {
  THREE.Object3D.call(this);
  this.geometry = e;
  this.material = t
};
THREE.Ribbon.prototype = Object.create(THREE.Object3D.prototype);
THREE.Ribbon.prototype.clone = function(e) {
  void 0 === e && (e = new THREE.Ribbon(this.geometry, this.material));
  THREE.Object3D.prototype.clone.call(this, e);
  return e
};
THREE.LOD = function() {
  THREE.Object3D.call(this);
  this.objects = []
};
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.addLevel = function(e, t) {
  void 0 === t && (t = 0);
  t = Math.abs(t);
  for (var r = 0; r < this.objects.length && !(t < this.objects[r].distance); r++);
  this.objects.splice(r, 0, {
    distance: t,
    object: e
  });
  this.add(e)
};
THREE.LOD.prototype.getObjectForDistance = function(e) {
  for (var t = 1, r = this.objects.length; r > t && !(e < this.objects[t].distance); t++);
  return this.objects[t - 1].object
};
THREE.LOD.prototype.update = function() {
  var e = new THREE.Vector3,
    t = new THREE.Vector3;
  return function(r) {
    if (this.objects.length > 1) {
      e.getPositionFromMatrix(r.matrixWorld);
      t.getPositionFromMatrix(this.matrixWorld);
      var i = e.distanceTo(t);
      this.objects[0].object.visible = !0;
      for (var n = 1, o = this.objects.length; o > n && i >= this.objects[n].distance; n++) {
        this.objects[n - 1].object.visible = !1;
        this.objects[n].object.visible = !0
      }
      for (; o > n; n++) this.objects[n].object.visible = !1
    }
  }
}();
THREE.LOD.prototype.clone = function() {};
THREE.Sprite = function(e) {
  THREE.Object3D.call(this);
  this.material = void 0 !== e ? e : new THREE.SpriteMaterial;
  this.rotation3d = this.rotation;
  this.rotation = 0
};
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.updateMatrix = function() {
  this.rotation3d.set(0, 0, this.rotation);
  this.quaternion.setFromEuler(this.rotation3d, this.eulerOrder);
  this.matrix.makeFromPositionQuaternionScale(this.position, this.quaternion, this.scale);
  this.matrixWorldNeedsUpdate = !0
};
THREE.Sprite.prototype.clone = function(e) {
  void 0 === e && (e = new THREE.Sprite(this.material));
  THREE.Object3D.prototype.clone.call(this, e);
  return e
};
THREE.Scene = function() {
  THREE.Object3D.call(this);
  this.fog = null;
  this.overrideMaterial = null;
  this.autoUpdate = !0;
  this.matrixAutoUpdate = !1;
  this.__objects = [];
  this.__lights = [];
  this.__objectsAdded = [];
  this.__objectsRemoved = []
};
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject = function(e) {
  if (e instanceof THREE.Light) {
    -1 === this.__lights.indexOf(e) && this.__lights.push(e);
    e.target && void 0 === e.target.parent && this.add(e.target)
  } else if (!(e instanceof THREE.Camera || e instanceof THREE.Bone) && -1 === this.__objects.indexOf(e)) {
    this.__objects.push(e);
    this.__objectsAdded.push(e);
    var t = this.__objectsRemoved.indexOf(e); - 1 !== t && this.__objectsRemoved.splice(t, 1)
  }
  for (var r = 0; r < e.children.length; r++) this.__addObject(e.children[r])
};
THREE.Scene.prototype.__removeObject = function(e) {
  if (e instanceof THREE.Light) {
    var t = this.__lights.indexOf(e); - 1 !== t && this.__lights.splice(t, 1)
  } else if (!(e instanceof THREE.Camera)) {
    var t = this.__objects.indexOf(e);
    if (-1 !== t) {
      this.__objects.splice(t, 1);
      this.__objectsRemoved.push(e);
      var r = this.__objectsAdded.indexOf(e); - 1 !== r && this.__objectsAdded.splice(r, 1)
    }
  }
  for (var i = 0; i < e.children.length; i++) this.__removeObject(e.children[i])
};
THREE.Fog = function(e, t, r) {
  this.name = "";
  this.color = new THREE.Color(e);
  this.near = void 0 !== t ? t : 1;
  this.far = void 0 !== r ? r : 1e3
};
THREE.Fog.prototype.clone = function() {
  return new THREE.Fog(this.color.getHex(), this.near, this.far)
};
THREE.FogExp2 = function(e, t) {
  this.name = "";
  this.color = new THREE.Color(e);
  this.density = void 0 !== t ? t : 25e-5
};
THREE.FogExp2.prototype.clone = function() {
  return new THREE.FogExp2(this.color.getHex(), this.density)
};
THREE.CanvasRenderer = function(e) {
  function t(e) {
    if (te !== e) {
      Z.globalAlpha = e;
      te = e
    }
  }

  function r(e) {
    if (re !== e) {
      e === THREE.NormalBlending ? Z.globalCompositeOperation = "source-over" : e === THREE.AdditiveBlending ? Z.globalCompositeOperation = "lighter" : e === THREE.SubtractiveBlending && (Z.globalCompositeOperation = "darker");
      re = e
    }
  }

  function i(e) {
    if (oe !== e) {
      Z.lineWidth = e;
      oe = e
    }
  }

  function n(e) {
    if (ae !== e) {
      Z.lineCap = e;
      ae = e
    }
  }

  function o(e) {
    if (se !== e) {
      Z.lineJoin = e;
      se = e
    }
  }

  function a(e) {
    if (ie !== e) {
      Z.strokeStyle = e;
      ie = e
    }
  }

  function s(e) {
    if (ne !== e) {
      Z.fillStyle = e;
      ne = e
    }
  }

  function l(e, t) {
    if (le !== e || ce !== t) {
      Z.setLineDash([e, t]);
      le = e;
      ce = t
    }
  }
  console.log("THREE.CanvasRenderer", THREE.REVISION);
  var c = THREE.Math.smoothstep;
  e = e || {};
  var h, u, f, p, d, m, E, g, v, y, T, R, x, w, H, b, _, S, M, C, A, L, D, P, F, N, U, V, z, B, O, k, I, j, G, W, X, q, Y, $ = this,
    K = new THREE.Projector,
    Q = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
    Z = Q.getContext("2d"),
    J = new THREE.Color(0),
    ee = 0,
    te = 1,
    re = 0,
    ie = null,
    ne = null,
    oe = null,
    ae = null,
    se = null,
    le = null,
    ce = 0,
    he = new THREE.RenderableVertex,
    ue = new THREE.RenderableVertex,
    fe = new THREE.Color,
    pe = new THREE.Color,
    de = new THREE.Color,
    me = new THREE.Color,
    Ee = new THREE.Color,
    ge = new THREE.Color,
    ve = new THREE.Color,
    ye = new THREE.Color,
    Te = {},
    Re = {},
    xe = new THREE.Box2,
    we = new THREE.Box2,
    He = new THREE.Box2,
    be = new THREE.Color,
    _e = new THREE.Color,
    Se = new THREE.Color,
    Me = new THREE.Vector3,
    Ce = 16;
  j = document.createElement("canvas");
  j.width = j.height = 2;
  G = j.getContext("2d");
  G.fillStyle = "rgba(0,0,0,1)";
  G.fillRect(0, 0, 2, 2);
  W = G.getImageData(0, 0, 2, 2);
  X = W.data;
  q = document.createElement("canvas");
  q.width = q.height = Ce;
  Y = q.getContext("2d");
  Y.translate(-Ce / 2, -Ce / 2);
  Y.scale(Ce, Ce);
  Ce--;
  void 0 === Z.setLineDash && (void 0 !== Z.mozDash ? Z.setLineDash = function(e) {
    Z.mozDash = null !== e[0] ? e : null
  } : Z.setLineDash = function() {});
  this.domElement = Q;
  this.devicePixelRatio = void 0 !== e.devicePixelRatio ? e.devicePixelRatio : void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1;
  this.autoClear = !0;
  this.sortObjects = !0;
  this.sortElements = !0;
  this.info = {
    render: {
      vertices: 0,
      faces: 0
    }
  };
  this.supportsVertexTextures = function() {};
  this.setFaceCulling = function() {};
  this.setSize = function(e, t, r) {
    p = e * this.devicePixelRatio;
    d = t * this.devicePixelRatio;
    m = Math.floor(p / 2);
    E = Math.floor(d / 2);
    Q.width = p;
    Q.height = d;
    if (1 !== this.devicePixelRatio && r !== !1) {
      Q.style.width = e + "px";
      Q.style.height = t + "px"
    }
    xe.set(new THREE.Vector2(-m, -E), new THREE.Vector2(m, E));
    we.set(new THREE.Vector2(-m, -E), new THREE.Vector2(m, E));
    te = 1;
    re = 0;
    ie = null;
    ne = null;
    oe = null;
    ae = null;
    se = null
  };
  this.setClearColor = function(e, t) {
    J.set(e);
    ee = void 0 !== t ? t : 1;
    we.set(new THREE.Vector2(-m, -E), new THREE.Vector2(m, E))
  };
  this.setClearColorHex = function(e, t) {
    console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");
    this.setClearColor(e, t)
  };
  this.getMaxAnisotropy = function() {
    return 0
  };
  this.clear = function() {
    Z.setTransform(1, 0, 0, -1, m, E);
    if (we.empty() === !1) {
      we.intersect(xe);
      we.expandByScalar(2);
      1 > ee && Z.clearRect(0 | we.min.x, 0 | we.min.y, we.max.x - we.min.x | 0, we.max.y - we.min.y | 0);
      if (ee > 0) {
        r(THREE.NormalBlending);
        t(1);
        s("rgba(" + Math.floor(255 * J.r) + "," + Math.floor(255 * J.g) + "," + Math.floor(255 * J.b) + "," + ee + ")");
        Z.fillRect(0 | we.min.x, 0 | we.min.y, we.max.x - we.min.x | 0, we.max.y - we.min.y | 0)
      }
      we.makeEmpty()
    }
  };
  this.render = function(e, p) {
    function d() {
      be.setRGB(0, 0, 0);
      _e.setRGB(0, 0, 0);
      Se.setRGB(0, 0, 0);
      for (var e = 0, t = f.length; t > e; e++) {
        var r = f[e],
          i = r.color;
        r instanceof THREE.AmbientLight ? be.add(i) : r instanceof THREE.DirectionalLight ? _e.add(i) : r instanceof THREE.PointLight && Se.add(i)
      }
    }

    function Q(e, t, r) {
      for (var i = 0, n = f.length; n > i; i++) {
        var o = f[i];
        ye.copy(o.color);
        if (o instanceof THREE.DirectionalLight) {
          var a = Me.getPositionFromMatrix(o.matrixWorld).normalize(),
            s = t.dot(a);
          if (0 >= s) continue;
          s *= o.intensity;
          r.add(ye.multiplyScalar(s))
        } else if (o instanceof THREE.PointLight) {
          var a = Me.getPositionFromMatrix(o.matrixWorld),
            s = t.dot(Me.subVectors(a, e).normalize());
          if (0 >= s) continue;
          s *= 0 == o.distance ? 1 : 1 - Math.min(e.distanceTo(a) / o.distance, 1);
          if (0 == s) continue;
          s *= o.intensity;
          r.add(ye.multiplyScalar(s))
        }
      }
    }

    function J(e, i, n) {
      t(n.opacity);
      r(n.blending);
      var o, l, c, h, u, f, p;
      if (n instanceof THREE.ParticleBasicMaterial)
        if (null === n.map) {
          c = i.object.scale.x;
          h = i.object.scale.y;
          c *= i.scale.x * m;
          h *= i.scale.y * E;
          He.min.set(e.x - c, e.y - h);
          He.max.set(e.x + c, e.y + h);
          if (xe.isIntersectionBox(He) === !1) {
            He.makeEmpty();
            return
          }
          s(n.color.getStyle());
          Z.save();
          Z.translate(e.x, e.y);
          Z.rotate(-i.rotation);
          Z.scale(c, h);
          Z.fillRect(-1, -1, 2, 2);
          Z.restore()
        } else {
          u = n.map.image;
          f = u.width >> 1;
          p = u.height >> 1;
          c = i.scale.x * m;
          h = i.scale.y * E;
          o = c * f;
          l = h * p;
          He.min.set(e.x - o, e.y - l);
          He.max.set(e.x + o, e.y + l);
          if (xe.isIntersectionBox(He) === !1) {
            He.makeEmpty();
            return
          }
          Z.save();
          Z.translate(e.x, e.y);
          Z.rotate(-i.rotation);
          Z.scale(c, -h);
          Z.translate(-f, -p);
          Z.drawImage(u, 0, 0);
          Z.restore()
        }
      else if (n instanceof THREE.ParticleCanvasMaterial) {
        o = i.scale.x * m;
        l = i.scale.y * E;
        He.min.set(e.x - o, e.y - l);
        He.max.set(e.x + o, e.y + l);
        if (xe.isIntersectionBox(He) === !1) {
          He.makeEmpty();
          return
        }
        a(n.color.getStyle());
        s(n.color.getStyle());
        Z.save();
        Z.translate(e.x, e.y);
        Z.rotate(-i.rotation);
        Z.scale(o, l);
        n.program(Z);
        Z.restore()
      }
    }

    function ee(e, s, c, h) {
      t(h.opacity);
      r(h.blending);
      Z.beginPath();
      Z.moveTo(e.positionScreen.x, e.positionScreen.y);
      Z.lineTo(s.positionScreen.x, s.positionScreen.y);
      if (h instanceof THREE.LineBasicMaterial) {
        i(h.linewidth);
        n(h.linecap);
        o(h.linejoin);
        if (h.vertexColors !== THREE.VertexColors) a(h.color.getStyle());
        else {
          var u = c.vertexColors[0].getStyle(),
            f = c.vertexColors[1].getStyle();
          if (u === f) a(u);
          else {
            try {
              var p = Z.createLinearGradient(e.positionScreen.x, e.positionScreen.y, s.positionScreen.x, s.positionScreen.y);
              p.addColorStop(0, u);
              p.addColorStop(1, f)
            } catch (d) {
              p = u
            }
            a(p)
          }
        }
        Z.stroke();
        He.expandByScalar(2 * h.linewidth)
      } else if (h instanceof THREE.LineDashedMaterial) {
        i(h.linewidth);
        n(h.linecap);
        o(h.linejoin);
        a(h.color.getStyle());
        l(h.dashSize, h.gapSize);
        Z.stroke();
        He.expandByScalar(2 * h.linewidth);
        l(null, null)
      }
    }

    function te(e, i, n, o, a, s, l, h) {
      $.info.render.vertices += 3;
      $.info.render.faces++;
      t(h.opacity);
      r(h.blending);
      R = e.positionScreen.x;
      x = e.positionScreen.y;
      w = i.positionScreen.x;
      H = i.positionScreen.y;
      b = n.positionScreen.x;
      _ = n.positionScreen.y;
      ie(R, x, w, H, b, _);
      if ((h instanceof THREE.MeshLambertMaterial || h instanceof THREE.MeshPhongMaterial) && null === h.map) {
        ge.copy(h.color);
        ve.copy(h.emissive);
        h.vertexColors === THREE.FaceColors && ge.multiply(l.color);
        if (h.wireframe === !1 && h.shading == THREE.SmoothShading && 3 == l.vertexNormalsLength) {
          pe.copy(be);
          de.copy(be);
          me.copy(be);
          Q(l.v1.positionWorld, l.vertexNormalsModel[0], pe);
          Q(l.v2.positionWorld, l.vertexNormalsModel[1], de);
          Q(l.v3.positionWorld, l.vertexNormalsModel[2], me);
          pe.multiply(ge).add(ve);
          de.multiply(ge).add(ve);
          me.multiply(ge).add(ve);
          Ee.addColors(de, me).multiplyScalar(.5);
          N = ce(pe, de, me, Ee);
          le(R, x, w, H, b, _, 0, 0, 1, 0, 0, 1, N)
        } else {
          fe.copy(be);
          Q(l.centroidModel, l.normalModel, fe);
          fe.multiply(ge).add(ve);
          h.wireframe === !0 ? oe(fe, h.wireframeLinewidth, h.wireframeLinecap, h.wireframeLinejoin) : ae(fe)
        }
      } else if (h instanceof THREE.MeshBasicMaterial || h instanceof THREE.MeshLambertMaterial || h instanceof THREE.MeshPhongMaterial)
        if (null !== h.map) {
          if (h.map.mapping instanceof THREE.UVMapping) {
            U = l.uvs[0];
            se(R, x, w, H, b, _, U[o].x, U[o].y, U[a].x, U[a].y, U[s].x, U[s].y, h.map)
          }
        } else if (null !== h.envMap) {
        if (h.envMap.mapping instanceof THREE.SphericalReflectionMapping) {
          Me.copy(l.vertexNormalsModelView[o]);
          V = .5 * Me.x + .5;
          z = .5 * Me.y + .5;
          Me.copy(l.vertexNormalsModelView[a]);
          B = .5 * Me.x + .5;
          O = .5 * Me.y + .5;
          Me.copy(l.vertexNormalsModelView[s]);
          k = .5 * Me.x + .5;
          I = .5 * Me.y + .5;
          se(R, x, w, H, b, _, V, z, B, O, k, I, h.envMap)
        }
      } else {
        fe.copy(h.color);
        h.vertexColors === THREE.FaceColors && fe.multiply(l.color);
        h.wireframe === !0 ? oe(fe, h.wireframeLinewidth, h.wireframeLinecap, h.wireframeLinejoin) : ae(fe)
      } else if (h instanceof THREE.MeshDepthMaterial) {
        P = p.near;
        F = p.far;
        pe.r = pe.g = pe.b = 1 - c(e.positionScreen.z * e.positionScreen.w, P, F);
        de.r = de.g = de.b = 1 - c(i.positionScreen.z * i.positionScreen.w, P, F);
        me.r = me.g = me.b = 1 - c(n.positionScreen.z * n.positionScreen.w, P, F);
        Ee.addColors(de, me).multiplyScalar(.5);
        N = ce(pe, de, me, Ee);
        le(R, x, w, H, b, _, 0, 0, 1, 0, 0, 1, N)
      } else if (h instanceof THREE.MeshNormalMaterial) {
        var u;
        if (h.shading == THREE.FlatShading) {
          u = l.normalModelView;
          fe.setRGB(u.x, u.y, u.z).multiplyScalar(.5).addScalar(.5);
          h.wireframe === !0 ? oe(fe, h.wireframeLinewidth, h.wireframeLinecap, h.wireframeLinejoin) : ae(fe)
        } else if (h.shading == THREE.SmoothShading) {
          u = l.vertexNormalsModelView[o];
          pe.setRGB(u.x, u.y, u.z).multiplyScalar(.5).addScalar(.5);
          u = l.vertexNormalsModelView[a];
          de.setRGB(u.x, u.y, u.z).multiplyScalar(.5).addScalar(.5);
          u = l.vertexNormalsModelView[s];
          me.setRGB(u.x, u.y, u.z).multiplyScalar(.5).addScalar(.5);
          Ee.addColors(de, me).multiplyScalar(.5);
          N = ce(pe, de, me, Ee);
          le(R, x, w, H, b, _, 0, 0, 1, 0, 0, 1, N)
        }
      }
    }

    function re(e, i, n, o, a, s, l, h) {
      $.info.render.vertices += 4;
      $.info.render.faces++;
      t(h.opacity);
      r(h.blending);
      if (void 0 !== h.map && null !== h.map || void 0 !== h.envMap && null !== h.envMap) {
        te(e, i, o, 0, 1, 3, l, h);
        te(a, n, s, 1, 2, 3, l, h)
      } else {
        R = e.positionScreen.x;
        x = e.positionScreen.y;
        w = i.positionScreen.x;
        H = i.positionScreen.y;
        b = n.positionScreen.x;
        _ = n.positionScreen.y;
        S = o.positionScreen.x;
        M = o.positionScreen.y;
        C = a.positionScreen.x;
        A = a.positionScreen.y;
        L = s.positionScreen.x;
        D = s.positionScreen.y;
        if (h instanceof THREE.MeshLambertMaterial || h instanceof THREE.MeshPhongMaterial) {
          ge.copy(h.color);
          ve.copy(h.emissive);
          h.vertexColors === THREE.FaceColors && ge.multiply(l.color);
          if (h.wireframe === !1 && h.shading == THREE.SmoothShading && 4 == l.vertexNormalsLength) {
            pe.copy(be);
            de.copy(be);
            me.copy(be);
            Ee.copy(be);
            Q(l.v1.positionWorld, l.vertexNormalsModel[0], pe);
            Q(l.v2.positionWorld, l.vertexNormalsModel[1], de);
            Q(l.v4.positionWorld, l.vertexNormalsModel[3], me);
            Q(l.v3.positionWorld, l.vertexNormalsModel[2], Ee);
            pe.multiply(ge).add(ve);
            de.multiply(ge).add(ve);
            me.multiply(ge).add(ve);
            Ee.multiply(ge).add(ve);
            N = ce(pe, de, me, Ee);
            ie(R, x, w, H, S, M);
            le(R, x, w, H, S, M, 0, 0, 1, 0, 0, 1, N);
            ie(C, A, b, _, L, D);
            le(C, A, b, _, L, D, 1, 0, 1, 1, 0, 1, N)
          } else {
            fe.copy(be);
            Q(l.centroidModel, l.normalModel, fe);
            fe.multiply(ge).add(ve);
            ne(R, x, w, H, b, _, S, M);
            h.wireframe === !0 ? oe(fe, h.wireframeLinewidth, h.wireframeLinecap, h.wireframeLinejoin) : ae(fe)
          }
        } else if (h instanceof THREE.MeshBasicMaterial) {
          fe.copy(h.color);
          h.vertexColors === THREE.FaceColors && fe.multiply(l.color);
          ne(R, x, w, H, b, _, S, M);
          h.wireframe === !0 ? oe(fe, h.wireframeLinewidth, h.wireframeLinecap, h.wireframeLinejoin) : ae(fe)
        } else if (h instanceof THREE.MeshNormalMaterial) {
          var u;
          if (h.shading == THREE.FlatShading) {
            u = l.normalModelView;
            fe.setRGB(u.x, u.y, u.z).multiplyScalar(.5).addScalar(.5);
            ne(R, x, w, H, b, _, S, M);
            h.wireframe === !0 ? oe(fe, h.wireframeLinewidth, h.wireframeLinecap, h.wireframeLinejoin) : ae(fe)
          } else if (h.shading == THREE.SmoothShading) {
            u = l.vertexNormalsModelView[0];
            pe.setRGB(u.x, u.y, u.z).multiplyScalar(.5).addScalar(.5);
            u = l.vertexNormalsModelView[1];
            de.setRGB(u.x, u.y, u.z).multiplyScalar(.5).addScalar(.5);
            u = l.vertexNormalsModelView[3];
            me.setRGB(u.x, u.y, u.z).multiplyScalar(.5).addScalar(.5);
            u = l.vertexNormalsModelView[2];
            Ee.setRGB(u.x, u.y, u.z).multiplyScalar(.5).addScalar(.5);
            N = ce(pe, de, me, Ee);
            ie(R, x, w, H, S, M);
            le(R, x, w, H, S, M, 0, 0, 1, 0, 0, 1, N);
            ie(C, A, b, _, L, D);
            le(C, A, b, _, L, D, 1, 0, 1, 1, 0, 1, N)
          }
        } else if (h instanceof THREE.MeshDepthMaterial) {
          P = p.near;
          F = p.far;
          pe.r = pe.g = pe.b = 1 - c(e.positionScreen.z * e.positionScreen.w, P, F);
          de.r = de.g = de.b = 1 - c(i.positionScreen.z * i.positionScreen.w, P, F);
          me.r = me.g = me.b = 1 - c(o.positionScreen.z * o.positionScreen.w, P, F);
          Ee.r = Ee.g = Ee.b = 1 - c(n.positionScreen.z * n.positionScreen.w, P, F);
          N = ce(pe, de, me, Ee);
          ie(R, x, w, H, S, M);
          le(R, x, w, H, S, M, 0, 0, 1, 0, 0, 1, N);
          ie(C, A, b, _, L, D);
          le(C, A, b, _, L, D, 1, 0, 1, 1, 0, 1, N)
        }
      }
    }

    function ie(e, t, r, i, n, o) {
      Z.beginPath();
      Z.moveTo(e, t);
      Z.lineTo(r, i);
      Z.lineTo(n, o);
      Z.closePath()
    }

    function ne(e, t, r, i, n, o, a, s) {
      Z.beginPath();
      Z.moveTo(e, t);
      Z.lineTo(r, i);
      Z.lineTo(n, o);
      Z.lineTo(a, s);
      Z.closePath()
    }

    function oe(e, t, r, s) {
      i(t);
      n(r);
      o(s);
      a(e.getStyle());
      Z.stroke();
      He.expandByScalar(2 * t)
    }

    function ae(e) {
      s(e.getStyle());
      Z.fill()
    }

    function se(e, t, r, i, n, o, a, l, c, h, u, f, p) {
      if (!(p instanceof THREE.DataTexture || void 0 === p.image || 0 == p.image.width)) {
        if (p.needsUpdate === !0) {
          var d = p.wrapS == THREE.RepeatWrapping,
            m = p.wrapT == THREE.RepeatWrapping;
          Te[p.id] = Z.createPattern(p.image, d === !0 && m === !0 ? "repeat" : d === !0 && m === !1 ? "repeat-x" : d === !1 && m === !0 ? "repeat-y" : "no-repeat");
          p.needsUpdate = !1
        }
        s(void 0 === Te[p.id] ? "rgba(0,0,0,1)" : Te[p.id]);
        var E, g, v, y, T, R, x, w, H = p.offset.x / p.repeat.x,
          b = p.offset.y / p.repeat.y,
          _ = p.image.width * p.repeat.x,
          S = p.image.height * p.repeat.y;
        a = (a + H) * _;
        l = (1 - l + b) * S;
        c = (c + H) * _;
        h = (1 - h + b) * S;
        u = (u + H) * _;
        f = (1 - f + b) * S;
        r -= e;
        i -= t;
        n -= e;
        o -= t;
        c -= a;
        h -= l;
        u -= a;
        f -= l;
        x = c * f - u * h;
        if (0 !== x) {
          w = 1 / x;
          E = (f * r - h * n) * w;
          g = (f * i - h * o) * w;
          v = (c * n - u * r) * w;
          y = (c * o - u * i) * w;
          T = e - E * a - v * l;
          R = t - g * a - y * l;
          Z.save();
          Z.transform(E, g, v, y, T, R);
          Z.fill();
          Z.restore()
        } else {
          if (void 0 === Re[p.id]) {
            var M = document.createElement("canvas");
            M.width = p.image.width;
            M.height = p.image.height;
            var C = M.getContext("2d");
            C.drawImage(p.image, 0, 0);
            Re[p.id] = C.getImageData(0, 0, p.image.width, p.image.height).data
          }
          var A = Re[p.id],
            L = 4 * (Math.floor(a) + Math.floor(l) * p.image.width);
          fe.setRGB(A[L] / 255, A[L + 1] / 255, A[L + 2] / 255);
          ae(fe)
        }
      }
    }

    function le(e, t, r, i, n, o, a, s, l, c, h, u, f) {
      var p, d, m, E, g, v, y, T, R = f.width - 1,
        x = f.height - 1;
      a *= R;
      s *= x;
      l *= R;
      c *= x;
      h *= R;
      u *= x;
      r -= e;
      i -= t;
      n -= e;
      o -= t;
      l -= a;
      c -= s;
      h -= a;
      u -= s;
      y = l * u - h * c;
      T = 1 / y;
      p = (u * r - c * n) * T;
      d = (u * i - c * o) * T;
      m = (l * n - h * r) * T;
      E = (l * o - h * i) * T;
      g = e - p * a - m * s;
      v = t - d * a - E * s;
      Z.save();
      Z.transform(p, d, m, E, g, v);
      Z.clip();
      Z.drawImage(f, 0, 0);
      Z.restore()
    }

    function ce(e, t, r, i) {
      X[0] = 255 * e.r | 0;
      X[1] = 255 * e.g | 0;
      X[2] = 255 * e.b | 0;
      X[4] = 255 * t.r | 0;
      X[5] = 255 * t.g | 0;
      X[6] = 255 * t.b | 0;
      X[8] = 255 * r.r | 0;
      X[9] = 255 * r.g | 0;
      X[10] = 255 * r.b | 0;
      X[12] = 255 * i.r | 0;
      X[13] = 255 * i.g | 0;
      X[14] = 255 * i.b | 0;
      G.putImageData(W, 0, 0);
      Y.drawImage(j, 0, 0);
      return q
    }

    function Ce(e, t) {
      var r, i = t.x - e.x,
        n = t.y - e.y,
        o = i * i + n * n;
      if (0 !== o) {
        r = 1 / Math.sqrt(o);
        i *= r;
        n *= r;
        t.x += i;
        t.y += n;
        e.x -= i;
        e.y -= n
      }
    }
    if (p instanceof THREE.Camera != !1) {
      this.autoClear === !0 && this.clear();
      Z.setTransform(1, 0, 0, -1, m, E);
      $.info.render.vertices = 0;
      $.info.render.faces = 0;
      h = K.projectScene(e, p, this.sortObjects, this.sortElements);
      u = h.elements;
      f = h.lights;
      d();
      for (var Ae = 0, Le = u.length; Le > Ae; Ae++) {
        var De = u[Ae],
          Pe = De.material;
        if (void 0 !== Pe && Pe.visible !== !1) {
          He.makeEmpty();
          if (De instanceof THREE.RenderableParticle) {
            g = De;
            g.x *= m;
            g.y *= E;
            J(g, De, Pe)
          } else if (De instanceof THREE.RenderableLine) {
            g = De.v1;
            v = De.v2;
            g.positionScreen.x *= m;
            g.positionScreen.y *= E;
            v.positionScreen.x *= m;
            v.positionScreen.y *= E;
            He.setFromPoints([g.positionScreen, v.positionScreen]);
            xe.isIntersectionBox(He) === !0 && ee(g, v, De, Pe)
          } else if (De instanceof THREE.RenderableFace3) {
            g = De.v1;
            v = De.v2;
            y = De.v3;
            if (g.positionScreen.z < -1 || g.positionScreen.z > 1) continue;
            if (v.positionScreen.z < -1 || v.positionScreen.z > 1) continue;
            if (y.positionScreen.z < -1 || y.positionScreen.z > 1) continue;
            g.positionScreen.x *= m;
            g.positionScreen.y *= E;
            v.positionScreen.x *= m;
            v.positionScreen.y *= E;
            y.positionScreen.x *= m;
            y.positionScreen.y *= E;
            if (Pe.overdraw === !0) {
              Ce(g.positionScreen, v.positionScreen);
              Ce(v.positionScreen, y.positionScreen);
              Ce(y.positionScreen, g.positionScreen)
            }
            He.setFromPoints([g.positionScreen, v.positionScreen, y.positionScreen]);
            xe.isIntersectionBox(He) === !0 && te(g, v, y, 0, 1, 2, De, Pe)
          } else if (De instanceof THREE.RenderableFace4) {
            g = De.v1;
            v = De.v2;
            y = De.v3;
            T = De.v4;
            if (g.positionScreen.z < -1 || g.positionScreen.z > 1) continue;
            if (v.positionScreen.z < -1 || v.positionScreen.z > 1) continue;
            if (y.positionScreen.z < -1 || y.positionScreen.z > 1) continue;
            if (T.positionScreen.z < -1 || T.positionScreen.z > 1) continue;
            g.positionScreen.x *= m;
            g.positionScreen.y *= E;
            v.positionScreen.x *= m;
            v.positionScreen.y *= E;
            y.positionScreen.x *= m;
            y.positionScreen.y *= E;
            T.positionScreen.x *= m;
            T.positionScreen.y *= E;
            he.positionScreen.copy(v.positionScreen);
            ue.positionScreen.copy(T.positionScreen);
            if (Pe.overdraw === !0) {
              Ce(g.positionScreen, v.positionScreen);
              Ce(v.positionScreen, T.positionScreen);
              Ce(T.positionScreen, g.positionScreen);
              Ce(y.positionScreen, he.positionScreen);
              Ce(y.positionScreen, ue.positionScreen)
            }
            He.setFromPoints([g.positionScreen, v.positionScreen, y.positionScreen, T.positionScreen]);
            xe.isIntersectionBox(He) === !0 && re(g, v, y, T, he, ue, De, Pe)
          }
          we.union(He)
        }
      }
      Z.setTransform(1, 0, 0, 1, 0, 0)
    } else console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.")
  }
};
THREE.ShaderChunk = {
  fog_pars_fragment: ["#ifdef USE_FOG", "uniform vec3 fogColor;", "#ifdef FOG_EXP2", "uniform float fogDensity;", "#else", "uniform float fogNear;", "uniform float fogFar;", "#endif", "#endif"].join("\n"),
  fog_fragment: ["#ifdef USE_FOG", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "#ifdef FOG_EXP2", "const float LOG2 = 1.442695;", "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "#else", "float fogFactor = smoothstep( fogNear, fogFar, depth );", "#endif", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "#endif"].join("\n"),
  envmap_pars_fragment: ["#ifdef USE_ENVMAP", "uniform float reflectivity;", "uniform samplerCube envMap;", "uniform float flipEnvMap;", "uniform int combine;", "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )", "uniform bool useRefract;", "uniform float refractionRatio;", "#else", "varying vec3 vReflect;", "#endif", "#endif"].join("\n"),
  envmap_fragment: ["#ifdef USE_ENVMAP", "vec3 reflectVec;", "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )", "vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );", "if ( useRefract ) {", "reflectVec = refract( cameraToVertex, normal, refractionRatio );", "} else { ", "reflectVec = reflect( cameraToVertex, normal );", "}", "#else", "reflectVec = vReflect;", "#endif", "#ifdef DOUBLE_SIDED", "float flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );", "vec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );", "#else", "vec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );", "#endif", "#ifdef GAMMA_INPUT", "cubeColor.xyz *= cubeColor.xyz;", "#endif", "if ( combine == 1 ) {", "gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );", "} else if ( combine == 2 ) {", "gl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;", "} else {", "gl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );", "}", "#endif"].join("\n"),
  envmap_pars_vertex: ["#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )", "varying vec3 vReflect;", "uniform float refractionRatio;", "uniform bool useRefract;", "#endif"].join("\n"),
  worldpos_vertex: ["#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )", "#ifdef USE_SKINNING", "vec4 worldPosition = modelMatrix * skinned;", "#endif", "#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )", "vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );", "#endif", "#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )", "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "#endif", "#endif"].join("\n"),
  envmap_vertex: ["#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )", "vec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;", "worldNormal = normalize( worldNormal );", "vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );", "if ( useRefract ) {", "vReflect = refract( cameraToVertex, worldNormal, refractionRatio );", "} else {", "vReflect = reflect( cameraToVertex, worldNormal );", "}", "#endif"].join("\n"),
  map_particle_pars_fragment: ["#ifdef USE_MAP", "uniform sampler2D map;", "#endif"].join("\n"),
  map_particle_fragment: ["#ifdef USE_MAP", "gl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );", "#endif"].join("\n"),
  map_pars_vertex: ["#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )", "varying vec2 vUv;", "uniform vec4 offsetRepeat;", "#endif"].join("\n"),
  map_pars_fragment: ["#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )", "varying vec2 vUv;", "#endif", "#ifdef USE_MAP", "uniform sampler2D map;", "#endif"].join("\n"),
  map_vertex: ["#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )", "vUv = uv * offsetRepeat.zw + offsetRepeat.xy;", "#endif"].join("\n"),
  map_fragment: ["#ifdef USE_MAP", "vec4 texelColor = texture2D( map, vUv );", "#ifdef GAMMA_INPUT", "texelColor.xyz *= texelColor.xyz;", "#endif", "gl_FragColor = gl_FragColor * texelColor;", "#endif"].join("\n"),
  lightmap_pars_fragment: ["#ifdef USE_LIGHTMAP", "varying vec2 vUv2;", "uniform sampler2D lightMap;", "#endif"].join("\n"),
  lightmap_pars_vertex: ["#ifdef USE_LIGHTMAP", "varying vec2 vUv2;", "#endif"].join("\n"),
  lightmap_fragment: ["#ifdef USE_LIGHTMAP", "gl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );", "#endif"].join("\n"),
  lightmap_vertex: ["#ifdef USE_LIGHTMAP", "vUv2 = uv2;", "#endif"].join("\n"),
  bumpmap_pars_fragment: ["#ifdef USE_BUMPMAP", "uniform sampler2D bumpMap;", "uniform float bumpScale;", "vec2 dHdxy_fwd() {", "vec2 dSTdx = dFdx( vUv );", "vec2 dSTdy = dFdy( vUv );", "float Hll = bumpScale * texture2D( bumpMap, vUv ).x;", "float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;", "float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;", "return vec2( dBx, dBy );", "}", "vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {", "vec3 vSigmaX = dFdx( surf_pos );", "vec3 vSigmaY = dFdy( surf_pos );", "vec3 vN = surf_norm;", "vec3 R1 = cross( vSigmaY, vN );", "vec3 R2 = cross( vN, vSigmaX );", "float fDet = dot( vSigmaX, R1 );", "vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );", "return normalize( abs( fDet ) * surf_norm - vGrad );", "}", "#endif"].join("\n"),
  normalmap_pars_fragment: ["#ifdef USE_NORMALMAP", "uniform sampler2D normalMap;", "uniform vec2 normalScale;", "vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {", "vec3 q0 = dFdx( eye_pos.xyz );", "vec3 q1 = dFdy( eye_pos.xyz );", "vec2 st0 = dFdx( vUv.st );", "vec2 st1 = dFdy( vUv.st );", "vec3 S = normalize(  q0 * st1.t - q1 * st0.t );", "vec3 T = normalize( -q0 * st1.s + q1 * st0.s );", "vec3 N = normalize( surf_norm );", "vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;", "mapN.xy = normalScale * mapN.xy;", "mat3 tsn = mat3( S, T, N );", "return normalize( tsn * mapN );", "}", "#endif"].join("\n"),
  specularmap_pars_fragment: ["#ifdef USE_SPECULARMAP", "uniform sampler2D specularMap;", "#endif"].join("\n"),
  specularmap_fragment: ["float specularStrength;", "#ifdef USE_SPECULARMAP", "vec4 texelSpecular = texture2D( specularMap, vUv );", "specularStrength = texelSpecular.r;", "#else", "specularStrength = 1.0;", "#endif"].join("\n"),
  lights_lambert_pars_vertex: ["uniform vec3 ambient;", "uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform vec3 ambientLightColor;", "#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];", "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];", "#endif", "#ifdef WRAP_AROUND", "uniform vec3 wrapRGB;", "#endif"].join("\n"),
  lights_lambert_vertex: ["vLightFront = vec3( 0.0 );", "#ifdef DOUBLE_SIDED", "vLightBack = vec3( 0.0 );", "#endif", "transformedNormal = normalize( transformedNormal );", "#if MAX_DIR_LIGHTS > 0", "for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );", "vec3 dirVector = normalize( lDirection.xyz );", "float dotProduct = dot( transformedNormal, dirVector );", "vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );", "#ifdef DOUBLE_SIDED", "vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );", "#ifdef WRAP_AROUND", "vec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );", "#endif", "#endif", "#ifdef WRAP_AROUND", "vec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );", "directionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );", "#ifdef DOUBLE_SIDED", "directionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );", "#endif", "#endif", "vLightFront += directionalLightColor[ i ] * directionalLightWeighting;", "#ifdef DOUBLE_SIDED", "vLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;", "#endif", "}", "#endif", "#if MAX_POINT_LIGHTS > 0", "for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz - mvPosition.xyz;", "float lDistance = 1.0;", "if ( pointLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );", "lVector = normalize( lVector );", "float dotProduct = dot( transformedNormal, lVector );", "vec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );", "#ifdef DOUBLE_SIDED", "vec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );", "#ifdef WRAP_AROUND", "vec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );", "#endif", "#endif", "#ifdef WRAP_AROUND", "vec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );", "pointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );", "#ifdef DOUBLE_SIDED", "pointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );", "#endif", "#endif", "vLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;", "#ifdef DOUBLE_SIDED", "vLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;", "#endif", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz - mvPosition.xyz;", "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );", "if ( spotEffect > spotLightAngleCos[ i ] ) {", "spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );", "float lDistance = 1.0;", "if ( spotLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );", "lVector = normalize( lVector );", "float dotProduct = dot( transformedNormal, lVector );", "vec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );", "#ifdef DOUBLE_SIDED", "vec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );", "#ifdef WRAP_AROUND", "vec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );", "#endif", "#endif", "#ifdef WRAP_AROUND", "vec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );", "spotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );", "#ifdef DOUBLE_SIDED", "spotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );", "#endif", "#endif", "vLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;", "#ifdef DOUBLE_SIDED", "vLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;", "#endif", "}", "}", "#endif", "#if MAX_HEMI_LIGHTS > 0", "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );", "vec3 lVector = normalize( lDirection.xyz );", "float dotProduct = dot( transformedNormal, lVector );", "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;", "float hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;", "vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );", "#ifdef DOUBLE_SIDED", "vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );", "#endif", "}", "#endif", "vLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;", "#ifdef DOUBLE_SIDED", "vLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;", "#endif"].join("\n"),
  lights_phong_pars_vertex: ["#ifndef PHONG_PER_PIXEL", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "varying vec4 vPointLight[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "varying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];", "#endif", "#endif", "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )", "varying vec3 vWorldPosition;", "#endif"].join("\n"),
  lights_phong_vertex: ["#ifndef PHONG_PER_PIXEL", "#if MAX_POINT_LIGHTS > 0", "for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz - mvPosition.xyz;", "float lDistance = 1.0;", "if ( pointLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );", "vPointLight[ i ] = vec4( lVector, lDistance );", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz - mvPosition.xyz;", "float lDistance = 1.0;", "if ( spotLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );", "vSpotLight[ i ] = vec4( lVector, lDistance );", "}", "#endif", "#endif", "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )", "vWorldPosition = worldPosition.xyz;", "#endif"].join("\n"),
  lights_phong_pars_fragment: ["uniform vec3 ambientLightColor;", "#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "#ifdef PHONG_PER_PIXEL", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "#else", "varying vec4 vPointLight[ MAX_POINT_LIGHTS ];", "#endif", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];", "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];", "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];", "#ifdef PHONG_PER_PIXEL", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "#else", "varying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];", "#endif", "#endif", "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )", "varying vec3 vWorldPosition;", "#endif", "#ifdef WRAP_AROUND", "uniform vec3 wrapRGB;", "#endif", "varying vec3 vViewPosition;", "varying vec3 vNormal;"].join("\n"),
  lights_phong_fragment: ["vec3 normal = normalize( vNormal );", "vec3 viewPosition = normalize( vViewPosition );", "#ifdef DOUBLE_SIDED", "normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );", "#endif", "#ifdef USE_NORMALMAP", "normal = perturbNormal2Arb( -vViewPosition, normal );", "#elif defined( USE_BUMPMAP )", "normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );", "#endif", "#if MAX_POINT_LIGHTS > 0", "vec3 pointDiffuse  = vec3( 0.0 );", "vec3 pointSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "#ifdef PHONG_PER_PIXEL", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz + vViewPosition.xyz;", "float lDistance = 1.0;", "if ( pointLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );", "lVector = normalize( lVector );", "#else", "vec3 lVector = normalize( vPointLight[ i ].xyz );", "float lDistance = vPointLight[ i ].w;", "#endif", "float dotProduct = dot( normal, lVector );", "#ifdef WRAP_AROUND", "float pointDiffuseWeightFull = max( dotProduct, 0.0 );", "float pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );", "vec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );", "#else", "float pointDiffuseWeight = max( dotProduct, 0.0 );", "#endif", "pointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;", "vec3 pointHalfVector = normalize( lVector + viewPosition );", "float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );", "float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );", "pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;", "#else", "pointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;", "#endif", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "vec3 spotDiffuse  = vec3( 0.0 );", "vec3 spotSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "#ifdef PHONG_PER_PIXEL", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz + vViewPosition.xyz;", "float lDistance = 1.0;", "if ( spotLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );", "lVector = normalize( lVector );", "#else", "vec3 lVector = normalize( vSpotLight[ i ].xyz );", "float lDistance = vSpotLight[ i ].w;", "#endif", "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );", "if ( spotEffect > spotLightAngleCos[ i ] ) {", "spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );", "float dotProduct = dot( normal, lVector );", "#ifdef WRAP_AROUND", "float spotDiffuseWeightFull = max( dotProduct, 0.0 );", "float spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );", "vec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );", "#else", "float spotDiffuseWeight = max( dotProduct, 0.0 );", "#endif", "spotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;", "vec3 spotHalfVector = normalize( lVector + viewPosition );", "float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );", "float spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );", "spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;", "#else", "spotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;", "#endif", "}", "}", "#endif", "#if MAX_DIR_LIGHTS > 0", "vec3 dirDiffuse  = vec3( 0.0 );", "vec3 dirSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );", "vec3 dirVector = normalize( lDirection.xyz );", "float dotProduct = dot( normal, dirVector );", "#ifdef WRAP_AROUND", "float dirDiffuseWeightFull = max( dotProduct, 0.0 );", "float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );", "vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );", "#else", "float dirDiffuseWeight = max( dotProduct, 0.0 );", "#endif", "dirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;", "vec3 dirHalfVector = normalize( dirVector + viewPosition );", "float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );", "float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );", "dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;", "#else", "dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;", "#endif", "}", "#endif", "#if MAX_HEMI_LIGHTS > 0", "vec3 hemiDiffuse  = vec3( 0.0 );", "vec3 hemiSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );", "vec3 lVector = normalize( lDirection.xyz );", "float dotProduct = dot( normal, lVector );", "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;", "vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );", "hemiDiffuse += diffuse * hemiColor;", "vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );", "float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;", "float hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );", "vec3 lVectorGround = -lVector;", "vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );", "float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;", "float hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float dotProductGround = dot( normal, lVectorGround );", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );", "vec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );", "hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );", "#else", "hemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;", "#endif", "}", "#endif", "vec3 totalDiffuse = vec3( 0.0 );", "vec3 totalSpecular = vec3( 0.0 );", "#if MAX_DIR_LIGHTS > 0", "totalDiffuse += dirDiffuse;", "totalSpecular += dirSpecular;", "#endif", "#if MAX_HEMI_LIGHTS > 0", "totalDiffuse += hemiDiffuse;", "totalSpecular += hemiSpecular;", "#endif", "#if MAX_POINT_LIGHTS > 0", "totalDiffuse += pointDiffuse;", "totalSpecular += pointSpecular;", "#endif", "#if MAX_SPOT_LIGHTS > 0", "totalDiffuse += spotDiffuse;", "totalSpecular += spotSpecular;", "#endif", "#ifdef METAL", "gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );", "#else", "gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;", "#endif"].join("\n"),
  color_pars_fragment: ["#ifdef USE_COLOR", "varying vec3 vColor;", "#endif"].join("\n"),
  color_fragment: ["#ifdef USE_COLOR", "gl_FragColor = gl_FragColor * vec4( vColor, opacity );", "#endif"].join("\n"),
  color_pars_vertex: ["#ifdef USE_COLOR", "varying vec3 vColor;", "#endif"].join("\n"),
  color_vertex: ["#ifdef USE_COLOR", "#ifdef GAMMA_INPUT", "vColor = color * color;", "#else", "vColor = color;", "#endif", "#endif"].join("\n"),
  skinning_pars_vertex: ["#ifdef USE_SKINNING", "#ifdef BONE_TEXTURE", "uniform sampler2D boneTexture;", "mat4 getBoneMatrix( const in float i ) {", "float j = i * 4.0;", "float x = mod( j, N_BONE_PIXEL_X );", "float y = floor( j / N_BONE_PIXEL_X );", "const float dx = 1.0 / N_BONE_PIXEL_X;", "const float dy = 1.0 / N_BONE_PIXEL_Y;", "y = dy * ( y + 0.5 );", "vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );", "vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );", "vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );", "vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );", "mat4 bone = mat4( v1, v2, v3, v4 );", "return bone;", "}", "#else", "uniform mat4 boneGlobalMatrices[ MAX_BONES ];", "mat4 getBoneMatrix( const in float i ) {", "mat4 bone = boneGlobalMatrices[ int(i) ];", "return bone;", "}", "#endif", "#endif"].join("\n"),
  skinbase_vertex: ["#ifdef USE_SKINNING", "mat4 boneMatX = getBoneMatrix( skinIndex.x );", "mat4 boneMatY = getBoneMatrix( skinIndex.y );", "#endif"].join("\n"),
  skinning_vertex: ["#ifdef USE_SKINNING", "#ifdef USE_MORPHTARGETS", "vec4 skinVertex = vec4( morphed, 1.0 );", "#else", "vec4 skinVertex = vec4( position, 1.0 );", "#endif", "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;", "skinned 	  += boneMatY * skinVertex * skinWeight.y;", "#endif"].join("\n"),
  morphtarget_pars_vertex: ["#ifdef USE_MORPHTARGETS", "#ifndef USE_MORPHNORMALS", "uniform float morphTargetInfluences[ 8 ];", "#else", "uniform float morphTargetInfluences[ 4 ];", "#endif", "#endif"].join("\n"),
  morphtarget_vertex: ["#ifdef USE_MORPHTARGETS", "vec3 morphed = vec3( 0.0 );", "morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];", "morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];", "morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];", "morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];", "#ifndef USE_MORPHNORMALS", "morphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];", "morphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];", "morphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];", "morphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];", "#endif", "morphed += position;", "#endif"].join("\n"),
  default_vertex: ["vec4 mvPosition;", "#ifdef USE_SKINNING", "mvPosition = modelViewMatrix * skinned;", "#endif", "#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )", "mvPosition = modelViewMatrix * vec4( morphed, 1.0 );", "#endif", "#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )", "mvPosition = modelViewMatrix * vec4( position, 1.0 );", "#endif", "gl_Position = projectionMatrix * mvPosition;"].join("\n"),
  morphnormal_vertex: ["#ifdef USE_MORPHNORMALS", "vec3 morphedNormal = vec3( 0.0 );", "morphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];", "morphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];", "morphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];", "morphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];", "morphedNormal += normal;", "#endif"].join("\n"),
  skinnormal_vertex: ["#ifdef USE_SKINNING", "mat4 skinMatrix = skinWeight.x * boneMatX;", "skinMatrix 	+= skinWeight.y * boneMatY;", "#ifdef USE_MORPHNORMALS", "vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );", "#else", "vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );", "#endif", "#endif"].join("\n"),
  defaultnormal_vertex: ["vec3 objectNormal;", "#ifdef USE_SKINNING", "objectNormal = skinnedNormal.xyz;", "#endif", "#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )", "objectNormal = morphedNormal;", "#endif", "#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )", "objectNormal = normal;", "#endif", "#ifdef FLIP_SIDED", "objectNormal = -objectNormal;", "#endif", "vec3 transformedNormal = normalMatrix * objectNormal;"].join("\n"),
  shadowmap_pars_fragment: ["#ifdef USE_SHADOWMAP", "uniform sampler2D shadowMap[ MAX_SHADOWS ];", "uniform vec2 shadowMapSize[ MAX_SHADOWS ];", "uniform float shadowDarkness[ MAX_SHADOWS ];", "uniform float shadowBias[ MAX_SHADOWS ];", "varying vec4 vShadowCoord[ MAX_SHADOWS ];", "float unpackDepth( const in vec4 rgba_depth ) {", "const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );", "float depth = dot( rgba_depth, bit_shift );", "return depth;", "}", "#endif"].join("\n"),
  shadowmap_fragment: ["#ifdef USE_SHADOWMAP", "#ifdef SHADOWMAP_DEBUG", "vec3 frustumColors[3];", "frustumColors[0] = vec3( 1.0, 0.5, 0.0 );", "frustumColors[1] = vec3( 0.0, 1.0, 0.8 );", "frustumColors[2] = vec3( 0.0, 0.5, 1.0 );", "#endif", "#ifdef SHADOWMAP_CASCADE", "int inFrustumCount = 0;", "#endif", "float fDepth;", "vec3 shadowColor = vec3( 1.0 );", "for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;", "bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );", "bool inFrustum = all( inFrustumVec );", "#ifdef SHADOWMAP_CASCADE", "inFrustumCount += int( inFrustum );", "bvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );", "#else", "bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );", "#endif", "bool frustumTest = all( frustumTestVec );", "if ( frustumTest ) {", "shadowCoord.z += shadowBias[ i ];", "#if defined( SHADOWMAP_TYPE_PCF )", "float shadow = 0.0;", "const float shadowDelta = 1.0 / 9.0;", "float xPixelOffset = 1.0 / shadowMapSize[ i ].x;", "float yPixelOffset = 1.0 / shadowMapSize[ i ].y;", "float dx0 = -1.25 * xPixelOffset;", "float dy0 = -1.25 * yPixelOffset;", "float dx1 = 1.25 * xPixelOffset;", "float dy1 = 1.25 * yPixelOffset;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );", "#elif defined( SHADOWMAP_TYPE_PCF_SOFT )", "float shadow = 0.0;", "float xPixelOffset = 1.0 / shadowMapSize[ i ].x;", "float yPixelOffset = 1.0 / shadowMapSize[ i ].y;", "float dx0 = -1.0 * xPixelOffset;", "float dy0 = -1.0 * yPixelOffset;", "float dx1 = 1.0 * xPixelOffset;", "float dy1 = 1.0 * yPixelOffset;", "mat3 shadowKernel;", "mat3 depthKernel;", "depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );", "depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );", "depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );", "depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );", "depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );", "depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );", "depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );", "depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );", "depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );", "vec3 shadowZ = vec3( shadowCoord.z );", "shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));", "shadowKernel[0] *= vec3(0.25);", "shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));", "shadowKernel[1] *= vec3(0.25);", "shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));", "shadowKernel[2] *= vec3(0.25);", "vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );", "shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );", "shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );", "vec4 shadowValues;", "shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );", "shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );", "shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );", "shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );", "shadow = dot( shadowValues, vec4( 1.0 ) );", "shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );", "#else", "vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );", "float fDepth = unpackDepth( rgbaDepth );", "if ( fDepth < shadowCoord.z )", "shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );", "#endif", "}", "#ifdef SHADOWMAP_DEBUG", "#ifdef SHADOWMAP_CASCADE", "if ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];", "#else", "if ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];", "#endif", "#endif", "}", "#ifdef GAMMA_OUTPUT", "shadowColor *= shadowColor;", "#endif", "gl_FragColor.xyz = gl_FragColor.xyz * shadowColor;", "#endif"].join("\n"),
  shadowmap_pars_vertex: ["#ifdef USE_SHADOWMAP", "varying vec4 vShadowCoord[ MAX_SHADOWS ];", "uniform mat4 shadowMatrix[ MAX_SHADOWS ];", "#endif"].join("\n"),
  shadowmap_vertex: ["#ifdef USE_SHADOWMAP", "for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;", "}", "#endif"].join("\n"),
  alphatest_fragment: ["#ifdef ALPHATEST", "if ( gl_FragColor.a < ALPHATEST ) discard;", "#endif"].join("\n"),
  linear_to_gamma_fragment: ["#ifdef GAMMA_OUTPUT", "gl_FragColor.xyz = sqrt( gl_FragColor.xyz );", "#endif"].join("\n")
};
THREE.UniformsUtils = {
  merge: function(e) {
    var t, r, i, n = {};
    for (t = 0; t < e.length; t++) {
      i = this.clone(e[t]);
      for (r in i) n[r] = i[r]
    }
    return n
  },
  clone: function(e) {
    var t, r, i, n = {};
    for (t in e) {
      n[t] = {};
      for (r in e[t]) {
        i = e[t][r];
        i instanceof THREE.Color || i instanceof THREE.Vector2 || i instanceof THREE.Vector3 || i instanceof THREE.Vector4 || i instanceof THREE.Matrix4 || i instanceof THREE.Texture ? n[t][r] = i.clone() : i instanceof Array ? n[t][r] = i.slice() : n[t][r] = i
      }
    }
    return n
  }
};
THREE.UniformsLib = {
  common: {
    diffuse: {
      type: "c",
      value: new THREE.Color(15658734)
    },
    opacity: {
      type: "f",
      value: 1
    },
    map: {
      type: "t",
      value: null
    },
    offsetRepeat: {
      type: "v4",
      value: new THREE.Vector4(0, 0, 1, 1)
    },
    lightMap: {
      type: "t",
      value: null
    },
    specularMap: {
      type: "t",
      value: null
    },
    envMap: {
      type: "t",
      value: null
    },
    flipEnvMap: {
      type: "f",
      value: -1
    },
    useRefract: {
      type: "i",
      value: 0
    },
    reflectivity: {
      type: "f",
      value: 1
    },
    refractionRatio: {
      type: "f",
      value: .98
    },
    combine: {
      type: "i",
      value: 0
    },
    morphTargetInfluences: {
      type: "f",
      value: 0
    }
  },
  bump: {
    bumpMap: {
      type: "t",
      value: null
    },
    bumpScale: {
      type: "f",
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      type: "t",
      value: null
    },
    normalScale: {
      type: "v2",
      value: new THREE.Vector2(1, 1)
    }
  },
  fog: {
    fogDensity: {
      type: "f",
      value: 25e-5
    },
    fogNear: {
      type: "f",
      value: 1
    },
    fogFar: {
      type: "f",
      value: 2e3
    },
    fogColor: {
      type: "c",
      value: new THREE.Color(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      type: "fv",
      value: []
    },
    directionalLightDirection: {
      type: "fv",
      value: []
    },
    directionalLightColor: {
      type: "fv",
      value: []
    },
    hemisphereLightDirection: {
      type: "fv",
      value: []
    },
    hemisphereLightSkyColor: {
      type: "fv",
      value: []
    },
    hemisphereLightGroundColor: {
      type: "fv",
      value: []
    },
    pointLightColor: {
      type: "fv",
      value: []
    },
    pointLightPosition: {
      type: "fv",
      value: []
    },
    pointLightDistance: {
      type: "fv1",
      value: []
    },
    spotLightColor: {
      type: "fv",
      value: []
    },
    spotLightPosition: {
      type: "fv",
      value: []
    },
    spotLightDirection: {
      type: "fv",
      value: []
    },
    spotLightDistance: {
      type: "fv1",
      value: []
    },
    spotLightAngleCos: {
      type: "fv1",
      value: []
    },
    spotLightExponent: {
      type: "fv1",
      value: []
    }
  },
  particle: {
    psColor: {
      type: "c",
      value: new THREE.Color(15658734)
    },
    opacity: {
      type: "f",
      value: 1
    },
    size: {
      type: "f",
      value: 1
    },
    scale: {
      type: "f",
      value: 1
    },
    map: {
      type: "t",
      value: null
    },
    fogDensity: {
      type: "f",
      value: 25e-5
    },
    fogNear: {
      type: "f",
      value: 1
    },
    fogFar: {
      type: "f",
      value: 2e3
    },
    fogColor: {
      type: "c",
      value: new THREE.Color(16777215)
    }
  },
  shadowmap: {
    shadowMap: {
      type: "tv",
      value: []
    },
    shadowMapSize: {
      type: "v2v",
      value: []
    },
    shadowBias: {
      type: "fv1",
      value: []
    },
    shadowDarkness: {
      type: "fv1",
      value: []
    },
    shadowMatrix: {
      type: "m4v",
      value: []
    }
  }
};
THREE.ShaderLib = {
  basic: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
    vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinbase_vertex, "#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
    fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {", "gl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
  },
  lambert: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
      ambient: {
        type: "c",
        value: new THREE.Color(16777215)
      },
      emissive: {
        type: "c",
        value: new THREE.Color(0)
      },
      wrapRGB: {
        type: "v3",
        value: new THREE.Vector3(1, 1, 1)
      }
    }]),
    vertexShader: ["#define LAMBERT", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "varying vec3 vLightBack;", "#endif", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
    fragmentShader: ["uniform float opacity;", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "varying vec3 vLightBack;", "#endif", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {", "gl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "#ifdef DOUBLE_SIDED", "if ( gl_FrontFacing )", "gl_FragColor.xyz *= vLightFront;", "else", "gl_FragColor.xyz *= vLightBack;", "#else", "gl_FragColor.xyz *= vLightFront;", "#endif", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
  },
  phong: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
      ambient: {
        type: "c",
        value: new THREE.Color(16777215)
      },
      emissive: {
        type: "c",
        value: new THREE.Color(0)
      },
      specular: {
        type: "c",
        value: new THREE.Color(1118481)
      },
      shininess: {
        type: "f",
        value: 30
      },
      wrapRGB: {
        type: "v3",
        value: new THREE.Vector3(1, 1, 1)
      }
    }]),
    vertexShader: ["#define PHONG", "varying vec3 vViewPosition;", "varying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "vNormal = normalize( transformedNormal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "vViewPosition = -mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
    fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform vec3 ambient;", "uniform vec3 emissive;", "uniform vec3 specular;", "uniform float shininess;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {", "gl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
  },
  particle_basic: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
    vertexShader: ["uniform float size;", "uniform float scale;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "#ifdef USE_SIZEATTENUATION", "gl_PointSize = size * ( scale / length( mvPosition.xyz ) );", "#else", "gl_PointSize = size;", "#endif", "gl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
    fragmentShader: ["uniform vec3 psColor;", "uniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {", "gl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
  },
  dashed: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
      scale: {
        type: "f",
        value: 1
      },
      dashSize: {
        type: "f",
        value: 1
      },
      totalSize: {
        type: "f",
        value: 2
      }
    }]),
    vertexShader: ["uniform float scale;", "attribute float lineDistance;", "varying float vLineDistance;", THREE.ShaderChunk.color_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vLineDistance = scale * lineDistance;", "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "}"].join("\n"),
    fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform float dashSize;", "uniform float totalSize;", "varying float vLineDistance;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {", "if ( mod( vLineDistance, totalSize ) > dashSize ) {", "discard;", "}", "gl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
  },
  depth: {
    uniforms: {
      mNear: {
        type: "f",
        value: 1
      },
      mFar: {
        type: "f",
        value: 2e3
      },
      opacity: {
        type: "f",
        value: 1
      }
    },
    vertexShader: ["void main() {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform float mNear;", "uniform float mFar;", "uniform float opacity;", "void main() {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float color = 1.0 - smoothstep( mNear, mFar, depth );", "gl_FragColor = vec4( vec3( color ), opacity );", "}"].join("\n")
  },
  normal: {
    uniforms: {
      opacity: {
        type: "f",
        value: 1
      }
    },
    vertexShader: ["varying vec3 vNormal;", THREE.ShaderChunk.morphtarget_pars_vertex, "void main() {", "vNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n"),
    fragmentShader: ["uniform float opacity;", "varying vec3 vNormal;", "void main() {", "gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", "}"].join("\n")
  },
  normalmap: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
      enableAO: {
        type: "i",
        value: 0
      },
      enableDiffuse: {
        type: "i",
        value: 0
      },
      enableSpecular: {
        type: "i",
        value: 0
      },
      enableReflection: {
        type: "i",
        value: 0
      },
      enableDisplacement: {
        type: "i",
        value: 0
      },
      tDisplacement: {
        type: "t",
        value: null
      },
      tDiffuse: {
        type: "t",
        value: null
      },
      tCube: {
        type: "t",
        value: null
      },
      tNormal: {
        type: "t",
        value: null
      },
      tSpecular: {
        type: "t",
        value: null
      },
      tAO: {
        type: "t",
        value: null
      },
      uNormalScale: {
        type: "v2",
        value: new THREE.Vector2(1, 1)
      },
      uDisplacementBias: {
        type: "f",
        value: 0
      },
      uDisplacementScale: {
        type: "f",
        value: 1
      },
      uDiffuseColor: {
        type: "c",
        value: new THREE.Color(16777215)
      },
      uSpecularColor: {
        type: "c",
        value: new THREE.Color(1118481)
      },
      uAmbientColor: {
        type: "c",
        value: new THREE.Color(16777215)
      },
      uShininess: {
        type: "f",
        value: 30
      },
      uOpacity: {
        type: "f",
        value: 1
      },
      useRefract: {
        type: "i",
        value: 0
      },
      uRefractionRatio: {
        type: "f",
        value: .98
      },
      uReflectivity: {
        type: "f",
        value: .5
      },
      uOffset: {
        type: "v2",
        value: new THREE.Vector2(0, 0)
      },
      uRepeat: {
        type: "v2",
        value: new THREE.Vector2(1, 1)
      },
      wrapRGB: {
        type: "v3",
        value: new THREE.Vector3(1, 1, 1)
      }
    }]),
    fragmentShader: ["uniform vec3 uAmbientColor;", "uniform vec3 uDiffuseColor;", "uniform vec3 uSpecularColor;", "uniform float uShininess;", "uniform float uOpacity;", "uniform bool enableDiffuse;", "uniform bool enableSpecular;", "uniform bool enableAO;", "uniform bool enableReflection;", "uniform sampler2D tDiffuse;", "uniform sampler2D tNormal;", "uniform sampler2D tSpecular;", "uniform sampler2D tAO;", "uniform samplerCube tCube;", "uniform vec2 uNormalScale;", "uniform bool useRefract;", "uniform float uRefractionRatio;", "uniform float uReflectivity;", "varying vec3 vTangent;", "varying vec3 vBinormal;", "varying vec3 vNormal;", "varying vec2 vUv;", "uniform vec3 ambientLightColor;", "#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];", "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];", "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "#endif", "#ifdef WRAP_AROUND", "uniform vec3 wrapRGB;", "#endif", "varying vec3 vWorldPosition;", "varying vec3 vViewPosition;", THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {", "gl_FragColor = vec4( vec3( 1.0 ), uOpacity );", "vec3 specularTex = vec3( 1.0 );", "vec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;", "normalTex.xy *= uNormalScale;", "normalTex = normalize( normalTex );", "if( enableDiffuse ) {", "#ifdef GAMMA_INPUT", "vec4 texelColor = texture2D( tDiffuse, vUv );", "texelColor.xyz *= texelColor.xyz;", "gl_FragColor = gl_FragColor * texelColor;", "#else", "gl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );", "#endif", "}", "if( enableAO ) {", "#ifdef GAMMA_INPUT", "vec4 aoColor = texture2D( tAO, vUv );", "aoColor.xyz *= aoColor.xyz;", "gl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;", "#else", "gl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;", "#endif", "}", "if( enableSpecular )", "specularTex = texture2D( tSpecular, vUv ).xyz;", "mat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );", "vec3 finalNormal = tsb * normalTex;", "#ifdef FLIP_SIDED", "finalNormal = -finalNormal;", "#endif", "vec3 normal = normalize( finalNormal );", "vec3 viewPosition = normalize( vViewPosition );", "#if MAX_POINT_LIGHTS > 0", "vec3 pointDiffuse = vec3( 0.0 );", "vec3 pointSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 pointVector = lPosition.xyz + vViewPosition.xyz;", "float pointDistance = 1.0;", "if ( pointLightDistance[ i ] > 0.0 )", "pointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );", "pointVector = normalize( pointVector );", "#ifdef WRAP_AROUND", "float pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );", "float pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );", "vec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );", "#else", "float pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );", "#endif", "pointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;", "vec3 pointHalfVector = normalize( pointVector + viewPosition );", "float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );", "float pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;", "vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );", "pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;", "#else", "pointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;", "#endif", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "vec3 spotDiffuse = vec3( 0.0 );", "vec3 spotSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 spotVector = lPosition.xyz + vViewPosition.xyz;", "float spotDistance = 1.0;", "if ( spotLightDistance[ i ] > 0.0 )", "spotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );", "spotVector = normalize( spotVector );", "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );", "if ( spotEffect > spotLightAngleCos[ i ] ) {", "spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );", "#ifdef WRAP_AROUND", "float spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );", "float spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );", "vec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );", "#else", "float spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );", "#endif", "spotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;", "vec3 spotHalfVector = normalize( spotVector + viewPosition );", "float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );", "float spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;", "vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );", "spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;", "#else", "spotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;", "#endif", "}", "}", "#endif", "#if MAX_DIR_LIGHTS > 0", "vec3 dirDiffuse = vec3( 0.0 );", "vec3 dirSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {", "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );", "vec3 dirVector = normalize( lDirection.xyz );", "#ifdef WRAP_AROUND", "float directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );", "float directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );", "vec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );", "#else", "float dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );", "#endif", "dirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;", "vec3 dirHalfVector = normalize( dirVector + viewPosition );", "float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );", "float dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;", "vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );", "dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;", "#else", "dirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;", "#endif", "}", "#endif", "#if MAX_HEMI_LIGHTS > 0", "vec3 hemiDiffuse  = vec3( 0.0 );", "vec3 hemiSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );", "vec3 lVector = normalize( lDirection.xyz );", "float dotProduct = dot( normal, lVector );", "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;", "vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );", "hemiDiffuse += uDiffuseColor * hemiColor;", "vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );", "float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;", "float hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );", "vec3 lVectorGround = -lVector;", "vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );", "float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;", "float hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float dotProductGround = dot( normal, lVectorGround );", "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;", "vec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );", "vec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );", "hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );", "#else", "hemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;", "#endif", "}", "#endif", "vec3 totalDiffuse = vec3( 0.0 );", "vec3 totalSpecular = vec3( 0.0 );", "#if MAX_DIR_LIGHTS > 0", "totalDiffuse += dirDiffuse;", "totalSpecular += dirSpecular;", "#endif", "#if MAX_HEMI_LIGHTS > 0", "totalDiffuse += hemiDiffuse;", "totalSpecular += hemiSpecular;", "#endif", "#if MAX_POINT_LIGHTS > 0", "totalDiffuse += pointDiffuse;", "totalSpecular += pointSpecular;", "#endif", "#if MAX_SPOT_LIGHTS > 0", "totalDiffuse += spotDiffuse;", "totalSpecular += spotSpecular;", "#endif", "#ifdef METAL", "gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );", "#else", "gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;", "#endif", "if ( enableReflection ) {", "vec3 vReflect;", "vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );", "if ( useRefract ) {", "vReflect = refract( cameraToVertex, normal, uRefractionRatio );", "} else {", "vReflect = reflect( cameraToVertex, normal );", "}", "vec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );", "#ifdef GAMMA_INPUT", "cubeColor.xyz *= cubeColor.xyz;", "#endif", "gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );", "}", THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
    vertexShader: ["attribute vec4 tangent;", "uniform vec2 uOffset;", "uniform vec2 uRepeat;", "uniform bool enableDisplacement;", "#ifdef VERTEX_TEXTURES", "uniform sampler2D tDisplacement;", "uniform float uDisplacementScale;", "uniform float uDisplacementBias;", "#endif", "varying vec3 vTangent;", "varying vec3 vBinormal;", "varying vec3 vNormal;", "varying vec2 vUv;", "varying vec3 vWorldPosition;", "varying vec3 vViewPosition;", THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, "#ifdef USE_SKINNING", "vNormal = normalize( normalMatrix * skinnedNormal.xyz );", "vec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );", "vTangent = normalize( normalMatrix * skinnedTangent.xyz );", "#else", "vNormal = normalize( normalMatrix * normal );", "vTangent = normalize( normalMatrix * tangent.xyz );", "#endif", "vBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );", "vUv = uv * uRepeat + uOffset;", "vec3 displacedPosition;", "#ifdef VERTEX_TEXTURES", "if ( enableDisplacement ) {", "vec3 dv = texture2D( tDisplacement, uv ).xyz;", "float df = uDisplacementScale * dv.x + uDisplacementBias;", "displacedPosition = position + normalize( normal ) * df;", "} else {", "#ifdef USE_SKINNING", "vec4 skinVertex = vec4( position, 1.0 );", "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;", "skinned 	  += boneMatY * skinVertex * skinWeight.y;", "displacedPosition  = skinned.xyz;", "#else", "displacedPosition = position;", "#endif", "}", "#else", "#ifdef USE_SKINNING", "vec4 skinVertex = vec4( position, 1.0 );", "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;", "skinned 	  += boneMatY * skinVertex * skinWeight.y;", "displacedPosition  = skinned.xyz;", "#else", "displacedPosition = position;", "#endif", "#endif", "vec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );", "vec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "vWorldPosition = worldPosition.xyz;", "vViewPosition = -mvPosition.xyz;", "#ifdef USE_SHADOWMAP", "for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;", "}", "#endif", "}"].join("\n")
  },
  cube: {
    uniforms: {
      tCube: {
        type: "t",
        value: null
      },
      tFlip: {
        type: "f",
        value: -1
      }
    },
    vertexShader: ["varying vec3 vWorldPosition;", "void main() {", "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "vWorldPosition = worldPosition.xyz;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform samplerCube tCube;", "uniform float tFlip;", "varying vec3 vWorldPosition;", "void main() {", "gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", "}"].join("\n")
  },
  depthRGBA: {
    uniforms: {},
    vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n"),
    fragmentShader: ["vec4 pack_depth( const in float depth ) {", "const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "const vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "vec4 res = fract( depth * bit_shift );", "res -= res.xxyz * bit_mask;", "return res;", "}", "void main() {", "gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );", "}"].join("\n")
  }
};
THREE.WebGLRenderer = function(e) {
  function t(e) {
    e.__webglVertexBuffer = ze.createBuffer();
    e.__webglColorBuffer = ze.createBuffer();
    je.info.memory.geometries++
  }

  function r(e) {
    e.__webglVertexBuffer = ze.createBuffer();
    e.__webglColorBuffer = ze.createBuffer();
    e.__webglLineDistanceBuffer = ze.createBuffer();
    je.info.memory.geometries++
  }

  function i(e) {
    e.__webglVertexBuffer = ze.createBuffer();
    e.__webglColorBuffer = ze.createBuffer();
    e.__webglNormalBuffer = ze.createBuffer();
    je.info.memory.geometries++
  }

  function n(e) {
    e.__webglVertexBuffer = ze.createBuffer();
    e.__webglNormalBuffer = ze.createBuffer();
    e.__webglTangentBuffer = ze.createBuffer();
    e.__webglColorBuffer = ze.createBuffer();
    e.__webglUVBuffer = ze.createBuffer();
    e.__webglUV2Buffer = ze.createBuffer();
    e.__webglSkinIndicesBuffer = ze.createBuffer();
    e.__webglSkinWeightsBuffer = ze.createBuffer();
    e.__webglFaceBuffer = ze.createBuffer();
    e.__webglLineBuffer = ze.createBuffer();
    var t, r;
    if (e.numMorphTargets) {
      e.__webglMorphTargetsBuffers = [];
      for (t = 0, r = e.numMorphTargets; r > t; t++) e.__webglMorphTargetsBuffers.push(ze.createBuffer())
    }
    if (e.numMorphNormals) {
      e.__webglMorphNormalsBuffers = [];
      for (t = 0, r = e.numMorphNormals; r > t; t++) e.__webglMorphNormalsBuffers.push(ze.createBuffer())
    }
    je.info.memory.geometries++
  }

  function o(e) {
    if (e.__webglCustomAttributesList)
      for (var t in e.__webglCustomAttributesList) ze.deleteBuffer(e.__webglCustomAttributesList[t].buffer)
  }

  function a(e, t) {
    var r = e.vertices.length,
      i = t.material;
    if (i.attributes) {
      void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []);
      for (var n in i.attributes) {
        var o = i.attributes[n];
        if (!o.__webglInitialized || o.createUniqueBuffers) {
          o.__webglInitialized = !0;
          var a = 1;
          "v2" === o.type ? a = 2 : "v3" === o.type ? a = 3 : "v4" === o.type ? a = 4 : "c" === o.type && (a = 3);
          o.size = a;
          o.array = new Float32Array(r * a);
          o.buffer = ze.createBuffer();
          o.buffer.belongsToAttribute = n;
          o.needsUpdate = !0
        }
        e.__webglCustomAttributesList.push(o)
      }
    }
  }

  function s(e, t) {
    var r = e.vertices.length;
    e.__vertexArray = new Float32Array(3 * r);
    e.__colorArray = new Float32Array(3 * r);
    e.__sortArray = [];
    e.__webglParticleCount = r;
    a(e, t)
  }

  function l(e, t) {
    var r = e.vertices.length;
    e.__vertexArray = new Float32Array(3 * r);
    e.__colorArray = new Float32Array(3 * r);
    e.__lineDistanceArray = new Float32Array(1 * r);
    e.__webglLineCount = r;
    a(e, t)
  }

  function c(e, t) {
    var r = e.vertices.length;
    e.__vertexArray = new Float32Array(3 * r);
    e.__colorArray = new Float32Array(3 * r);
    e.__normalArray = new Float32Array(3 * r);
    e.__webglVertexCount = r;
    a(e, t)
  }

  function h(e, t) {
    var r = t.geometry,
      i = e.faces3,
      n = e.faces4,
      o = 3 * i.length + 4 * n.length,
      a = 1 * i.length + 2 * n.length,
      s = 3 * i.length + 4 * n.length,
      l = u(t, e),
      c = m(l),
      h = p(l),
      f = d(l);
    e.__vertexArray = new Float32Array(3 * o);
    h && (e.__normalArray = new Float32Array(3 * o));
    r.hasTangents && (e.__tangentArray = new Float32Array(4 * o));
    f && (e.__colorArray = new Float32Array(3 * o));
    if (c) {
      (r.faceUvs.length > 0 || r.faceVertexUvs.length > 0) && (e.__uvArray = new Float32Array(2 * o));
      (r.faceUvs.length > 1 || r.faceVertexUvs.length > 1) && (e.__uv2Array = new Float32Array(2 * o))
    }
    if (t.geometry.skinWeights.length && t.geometry.skinIndices.length) {
      e.__skinIndexArray = new Float32Array(4 * o);
      e.__skinWeightArray = new Float32Array(4 * o)
    }
    e.__faceArray = new Uint16Array(3 * a);
    e.__lineArray = new Uint16Array(2 * s);
    var E, g;
    if (e.numMorphTargets) {
      e.__morphTargetsArrays = [];
      for (E = 0, g = e.numMorphTargets; g > E; E++) e.__morphTargetsArrays.push(new Float32Array(3 * o))
    }
    if (e.numMorphNormals) {
      e.__morphNormalsArrays = [];
      for (E = 0, g = e.numMorphNormals; g > E; E++) e.__morphNormalsArrays.push(new Float32Array(3 * o))
    }
    e.__webglFaceCount = 3 * a;
    e.__webglLineCount = 2 * s;
    if (l.attributes) {
      void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []);
      for (var v in l.attributes) {
        var y = l.attributes[v],
          T = {};
        for (var R in y) T[R] = y[R];
        if (!T.__webglInitialized || T.createUniqueBuffers) {
          T.__webglInitialized = !0;
          var x = 1;
          "v2" === T.type ? x = 2 : "v3" === T.type ? x = 3 : "v4" === T.type ? x = 4 : "c" === T.type && (x = 3);
          T.size = x;
          T.array = new Float32Array(o * x);
          T.buffer = ze.createBuffer();
          T.buffer.belongsToAttribute = v;
          y.needsUpdate = !0;
          T.__original = y
        }
        e.__webglCustomAttributesList.push(T)
      }
    }
    e.__inittedArrays = !0
  }

  function u(e, t) {
    return e.material instanceof THREE.MeshFaceMaterial ? e.material.materials[t.materialIndex] : e.material
  }

  function f(e) {
    return e && void 0 !== e.shading && e.shading === THREE.SmoothShading
  }

  function p(e) {
    return e instanceof THREE.MeshBasicMaterial && !e.envMap || e instanceof THREE.MeshDepthMaterial ? !1 : f(e) ? THREE.SmoothShading : THREE.FlatShading
  }

  function d(e) {
    return e.vertexColors ? e.vertexColors : !1
  }

  function m(e) {
    return e.map || e.lightMap || e.bumpMap || e.normalMap || e.specularMap || e instanceof THREE.ShaderMaterial ? !0 : !1
  }

  function E(e) {
    var t, r, i;
    for (t in e.attributes) {
      i = "index" === t ? ze.ELEMENT_ARRAY_BUFFER : ze.ARRAY_BUFFER;
      r = e.attributes[t];
      r.buffer = ze.createBuffer();
      ze.bindBuffer(i, r.buffer);
      ze.bufferData(i, r.array, ze.STATIC_DRAW)
    }
  }

  function g(e, t, r) {
    var i, n, o, a, s, l, c, h, u, f, p, d, m = e.vertices,
      E = m.length,
      g = e.colors,
      v = g.length,
      y = e.__vertexArray,
      T = e.__colorArray,
      R = e.__sortArray,
      x = e.verticesNeedUpdate,
      w = (e.elementsNeedUpdate, e.colorsNeedUpdate),
      H = e.__webglCustomAttributesList;
    if (r.sortParticles) {
      Tt.copy(yt);
      Tt.multiply(r.matrixWorld);
      for (i = 0; E > i; i++) {
        o = m[i];
        Rt.copy(o);
        Rt.applyProjection(Tt);
        R[i] = [Rt.z, i]
      }
      R.sort(_);
      for (i = 0; E > i; i++) {
        o = m[R[i][1]];
        a = 3 * i;
        y[a] = o.x;
        y[a + 1] = o.y;
        y[a + 2] = o.z
      }
      for (n = 0; v > n; n++) {
        a = 3 * n;
        l = g[R[n][1]];
        T[a] = l.r;
        T[a + 1] = l.g;
        T[a + 2] = l.b
      }
      if (H)
        for (c = 0, h = H.length; h > c; c++) {
          d = H[c];
          if (void 0 === d.boundTo || "vertices" === d.boundTo) {
            a = 0;
            f = d.value.length;
            if (1 === d.size)
              for (u = 0; f > u; u++) {
                s = R[u][1];
                d.array[u] = d.value[s]
              } else if (2 === d.size)
                for (u = 0; f > u; u++) {
                  s = R[u][1];
                  p = d.value[s];
                  d.array[a] = p.x;
                  d.array[a + 1] = p.y;
                  a += 2
                } else if (3 === d.size)
                  if ("c" === d.type)
                    for (u = 0; f > u; u++) {
                      s = R[u][1];
                      p = d.value[s];
                      d.array[a] = p.r;
                      d.array[a + 1] = p.g;
                      d.array[a + 2] = p.b;
                      a += 3
                    } else
                      for (u = 0; f > u; u++) {
                        s = R[u][1];
                        p = d.value[s];
                        d.array[a] = p.x;
                        d.array[a + 1] = p.y;
                        d.array[a + 2] = p.z;
                        a += 3
                      } else if (4 === d.size)
                        for (u = 0; f > u; u++) {
                          s = R[u][1];
                          p = d.value[s];
                          d.array[a] = p.x;
                          d.array[a + 1] = p.y;
                          d.array[a + 2] = p.z;
                          d.array[a + 3] = p.w;
                          a += 4
                        }
          }
        }
    } else {
      if (x)
        for (i = 0; E > i; i++) {
          o = m[i];
          a = 3 * i;
          y[a] = o.x;
          y[a + 1] = o.y;
          y[a + 2] = o.z
        }
      if (w)
        for (n = 0; v > n; n++) {
          l = g[n];
          a = 3 * n;
          T[a] = l.r;
          T[a + 1] = l.g;
          T[a + 2] = l.b
        }
      if (H)
        for (c = 0, h = H.length; h > c; c++) {
          d = H[c];
          if (d.needsUpdate && (void 0 === d.boundTo || "vertices" === d.boundTo)) {
            f = d.value.length;
            a = 0;
            if (1 === d.size)
              for (u = 0; f > u; u++) d.array[u] = d.value[u];
            else if (2 === d.size)
              for (u = 0; f > u; u++) {
                p = d.value[u];
                d.array[a] = p.x;
                d.array[a + 1] = p.y;
                a += 2
              } else if (3 === d.size)
                if ("c" === d.type)
                  for (u = 0; f > u; u++) {
                    p = d.value[u];
                    d.array[a] = p.r;
                    d.array[a + 1] = p.g;
                    d.array[a + 2] = p.b;
                    a += 3
                  } else
                    for (u = 0; f > u; u++) {
                      p = d.value[u];
                      d.array[a] = p.x;
                      d.array[a + 1] = p.y;
                      d.array[a + 2] = p.z;
                      a += 3
                    } else if (4 === d.size)
                      for (u = 0; f > u; u++) {
                        p = d.value[u];
                        d.array[a] = p.x;
                        d.array[a + 1] = p.y;
                        d.array[a + 2] = p.z;
                        d.array[a + 3] = p.w;
                        a += 4
                      }
          }
        }
    }
    if (x || r.sortParticles) {
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglVertexBuffer);
      ze.bufferData(ze.ARRAY_BUFFER, y, t)
    }
    if (w || r.sortParticles) {
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglColorBuffer);
      ze.bufferData(ze.ARRAY_BUFFER, T, t)
    }
    if (H)
      for (c = 0, h = H.length; h > c; c++) {
        d = H[c];
        if (d.needsUpdate || r.sortParticles) {
          ze.bindBuffer(ze.ARRAY_BUFFER, d.buffer);
          ze.bufferData(ze.ARRAY_BUFFER, d.array, t)
        }
      }
  }

  function v(e, t) {
    var r, i, n, o, a, s, l, c, h, u, f, p, d = e.vertices,
      m = e.colors,
      E = e.lineDistances,
      g = d.length,
      v = m.length,
      y = E.length,
      T = e.__vertexArray,
      R = e.__colorArray,
      x = e.__lineDistanceArray,
      w = e.verticesNeedUpdate,
      H = e.colorsNeedUpdate,
      b = e.lineDistancesNeedUpdate,
      _ = e.__webglCustomAttributesList;
    if (w) {
      for (r = 0; g > r; r++) {
        o = d[r];
        a = 3 * r;
        T[a] = o.x;
        T[a + 1] = o.y;
        T[a + 2] = o.z
      }
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglVertexBuffer);
      ze.bufferData(ze.ARRAY_BUFFER, T, t)
    }
    if (H) {
      for (i = 0; v > i; i++) {
        s = m[i];
        a = 3 * i;
        R[a] = s.r;
        R[a + 1] = s.g;
        R[a + 2] = s.b
      }
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglColorBuffer);
      ze.bufferData(ze.ARRAY_BUFFER, R, t)
    }
    if (b) {
      for (n = 0; y > n; n++) x[n] = E[n];
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglLineDistanceBuffer);
      ze.bufferData(ze.ARRAY_BUFFER, x, t)
    }
    if (_)
      for (l = 0, c = _.length; c > l; l++) {
        p = _[l];
        if (p.needsUpdate && (void 0 === p.boundTo || "vertices" === p.boundTo)) {
          a = 0;
          u = p.value.length;
          if (1 === p.size)
            for (h = 0; u > h; h++) p.array[h] = p.value[h];
          else if (2 === p.size)
            for (h = 0; u > h; h++) {
              f = p.value[h];
              p.array[a] = f.x;
              p.array[a + 1] = f.y;
              a += 2
            } else if (3 === p.size)
              if ("c" === p.type)
                for (h = 0; u > h; h++) {
                  f = p.value[h];
                  p.array[a] = f.r;
                  p.array[a + 1] = f.g;
                  p.array[a + 2] = f.b;
                  a += 3
                } else
                  for (h = 0; u > h; h++) {
                    f = p.value[h];
                    p.array[a] = f.x;
                    p.array[a + 1] = f.y;
                    p.array[a + 2] = f.z;
                    a += 3
                  } else if (4 === p.size)
                    for (h = 0; u > h; h++) {
                      f = p.value[h];
                      p.array[a] = f.x;
                      p.array[a + 1] = f.y;
                      p.array[a + 2] = f.z;
                      p.array[a + 3] = f.w;
                      a += 4
                    }
          ze.bindBuffer(ze.ARRAY_BUFFER, p.buffer);
          ze.bufferData(ze.ARRAY_BUFFER, p.array, t)
        }
      }
  }

  function y(e, t) {
    var r, i, n, o, a, s, l, c, h, u, f, p, d, m = e.vertices,
      E = e.colors,
      g = e.normals,
      v = m.length,
      y = E.length,
      T = g.length,
      R = e.__vertexArray,
      x = e.__colorArray,
      w = e.__normalArray,
      H = e.verticesNeedUpdate,
      b = e.colorsNeedUpdate,
      _ = e.normalsNeedUpdate,
      S = e.__webglCustomAttributesList;
    if (H) {
      for (r = 0; v > r; r++) {
        o = m[r];
        a = 3 * r;
        R[a] = o.x;
        R[a + 1] = o.y;
        R[a + 2] = o.z
      }
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglVertexBuffer);
      ze.bufferData(ze.ARRAY_BUFFER, R, t)
    }
    if (b) {
      for (i = 0; y > i; i++) {
        s = E[i];
        a = 3 * i;
        x[a] = s.r;
        x[a + 1] = s.g;
        x[a + 2] = s.b
      }
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglColorBuffer);
      ze.bufferData(ze.ARRAY_BUFFER, x, t)
    }
    if (_) {
      for (n = 0; T > n; n++) {
        l = g[n];
        a = 3 * n;
        w[a] = l.x;
        w[a + 1] = l.y;
        w[a + 2] = l.z
      }
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglNormalBuffer);
      ze.bufferData(ze.ARRAY_BUFFER, w, t)
    }
    if (S)
      for (c = 0, h = S.length; h > c; c++) {
        p = S[c];
        if (p.needsUpdate && (void 0 === p.boundTo || "vertices" === p.boundTo)) {
          a = 0;
          f = p.value.length;
          if (1 === p.size)
            for (u = 0; f > u; u++) p.array[u] = p.value[u];
          else if (2 === p.size)
            for (u = 0; f > u; u++) {
              d = p.value[u];
              p.array[a] = d.x;
              p.array[a + 1] = d.y;
              a += 2
            } else if (3 === p.size)
              if ("c" === p.type)
                for (u = 0; f > u; u++) {
                  d = p.value[u];
                  p.array[a] = d.r;
                  p.array[a + 1] = d.g;
                  p.array[a + 2] = d.b;
                  a += 3
                } else
                  for (u = 0; f > u; u++) {
                    d = p.value[u];
                    p.array[a] = d.x;
                    p.array[a + 1] = d.y;
                    p.array[a + 2] = d.z;
                    a += 3
                  } else if (4 === p.size)
                    for (u = 0; f > u; u++) {
                      d = p.value[u];
                      p.array[a] = d.x;
                      p.array[a + 1] = d.y;
                      p.array[a + 2] = d.z;
                      p.array[a + 3] = d.w;
                      a += 4
                    }
          ze.bindBuffer(ze.ARRAY_BUFFER, p.buffer);
          ze.bufferData(ze.ARRAY_BUFFER, p.array, t)
        }
      }
  }

  function T(e, t, r, i, n) {
    if (e.__inittedArrays) {
      var o, a, s, l, c, h, u, f, E, g, v, y, T, R, x, w, H, b, _, S, M, C, A, L, D, P, F, N, U, V, z, B, O, k, I, j, G, W, X, q, Y, $, K, Q, Z, J, ee, te, re = p(n),
        ie = d(n),
        ne = m(n),
        oe = re === THREE.SmoothShading,
        ae = 0,
        se = 0,
        le = 0,
        ce = 0,
        he = 0,
        ue = 0,
        fe = 0,
        pe = 0,
        de = 0,
        me = 0,
        Ee = 0,
        ge = 0,
        ve = 0,
        ye = e.__vertexArray,
        Te = e.__uvArray,
        Re = e.__uv2Array,
        xe = e.__normalArray,
        we = e.__tangentArray,
        He = e.__colorArray,
        be = e.__skinIndexArray,
        _e = e.__skinWeightArray,
        Se = e.__morphTargetsArrays,
        Me = e.__morphNormalsArrays,
        Ce = e.__webglCustomAttributesList,
        Ae = e.__faceArray,
        Le = e.__lineArray,
        De = t.geometry,
        Pe = De.verticesNeedUpdate,
        Fe = De.elementsNeedUpdate,
        Ne = De.uvsNeedUpdate,
        Ue = De.normalsNeedUpdate,
        Ve = De.tangentsNeedUpdate,
        Be = De.colorsNeedUpdate,
        Oe = De.morphTargetsNeedUpdate,
        ke = De.vertices,
        Ie = e.faces3,
        je = e.faces4,
        Ge = De.faces,
        We = De.faceVertexUvs[0],
        Xe = De.faceVertexUvs[1],
        qe = (De.colors, De.skinIndices),
        Ye = De.skinWeights,
        $e = De.morphTargets,
        Ke = De.morphNormals;
      if (Pe) {
        for (o = 0, a = Ie.length; a > o; o++) {
          l = Ge[Ie[o]];
          y = ke[l.a];
          T = ke[l.b];
          R = ke[l.c];
          ye[se] = y.x;
          ye[se + 1] = y.y;
          ye[se + 2] = y.z;
          ye[se + 3] = T.x;
          ye[se + 4] = T.y;
          ye[se + 5] = T.z;
          ye[se + 6] = R.x;
          ye[se + 7] = R.y;
          ye[se + 8] = R.z;
          se += 9
        }
        for (o = 0, a = je.length; a > o; o++) {
          l = Ge[je[o]];
          y = ke[l.a];
          T = ke[l.b];
          R = ke[l.c];
          x = ke[l.d];
          ye[se] = y.x;
          ye[se + 1] = y.y;
          ye[se + 2] = y.z;
          ye[se + 3] = T.x;
          ye[se + 4] = T.y;
          ye[se + 5] = T.z;
          ye[se + 6] = R.x;
          ye[se + 7] = R.y;
          ye[se + 8] = R.z;
          ye[se + 9] = x.x;
          ye[se + 10] = x.y;
          ye[se + 11] = x.z;
          se += 12
        }
        ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglVertexBuffer);
        ze.bufferData(ze.ARRAY_BUFFER, ye, r)
      }
      if (Oe)
        for (Y = 0, $ = $e.length; $ > Y; Y++) {
          Ee = 0;
          for (o = 0, a = Ie.length; a > o; o++) {
            Z = Ie[o];
            l = Ge[Z];
            y = $e[Y].vertices[l.a];
            T = $e[Y].vertices[l.b];
            R = $e[Y].vertices[l.c];
            K = Se[Y];
            K[Ee] = y.x;
            K[Ee + 1] = y.y;
            K[Ee + 2] = y.z;
            K[Ee + 3] = T.x;
            K[Ee + 4] = T.y;
            K[Ee + 5] = T.z;
            K[Ee + 6] = R.x;
            K[Ee + 7] = R.y;
            K[Ee + 8] = R.z;
            if (n.morphNormals) {
              if (oe) {
                J = Ke[Y].vertexNormals[Z];
                S = J.a;
                M = J.b;
                C = J.c
              } else {
                S = Ke[Y].faceNormals[Z];
                M = S;
                C = S
              }
              Q = Me[Y];
              Q[Ee] = S.x;
              Q[Ee + 1] = S.y;
              Q[Ee + 2] = S.z;
              Q[Ee + 3] = M.x;
              Q[Ee + 4] = M.y;
              Q[Ee + 5] = M.z;
              Q[Ee + 6] = C.x;
              Q[Ee + 7] = C.y;
              Q[Ee + 8] = C.z
            }
            Ee += 9
          }
          for (o = 0, a = je.length; a > o; o++) {
            Z = je[o];
            l = Ge[Z];
            y = $e[Y].vertices[l.a];
            T = $e[Y].vertices[l.b];
            R = $e[Y].vertices[l.c];
            x = $e[Y].vertices[l.d];
            K = Se[Y];
            K[Ee] = y.x;
            K[Ee + 1] = y.y;
            K[Ee + 2] = y.z;
            K[Ee + 3] = T.x;
            K[Ee + 4] = T.y;
            K[Ee + 5] = T.z;
            K[Ee + 6] = R.x;
            K[Ee + 7] = R.y;
            K[Ee + 8] = R.z;
            K[Ee + 9] = x.x;
            K[Ee + 10] = x.y;
            K[Ee + 11] = x.z;
            if (n.morphNormals) {
              if (oe) {
                J = Ke[Y].vertexNormals[Z];
                S = J.a;
                M = J.b;
                C = J.c;
                A = J.d
              } else {
                S = Ke[Y].faceNormals[Z];
                M = S;
                C = S;
                A = S
              }
              Q = Me[Y];
              Q[Ee] = S.x;
              Q[Ee + 1] = S.y;
              Q[Ee + 2] = S.z;
              Q[Ee + 3] = M.x;
              Q[Ee + 4] = M.y;
              Q[Ee + 5] = M.z;
              Q[Ee + 6] = C.x;
              Q[Ee + 7] = C.y;
              Q[Ee + 8] = C.z;
              Q[Ee + 9] = A.x;
              Q[Ee + 10] = A.y;
              Q[Ee + 11] = A.z
            }
            Ee += 12
          }
          ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[Y]);
          ze.bufferData(ze.ARRAY_BUFFER, Se[Y], r);
          if (n.morphNormals) {
            ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[Y]);
            ze.bufferData(ze.ARRAY_BUFFER, Me[Y], r)
          }
        }
      if (Ye.length) {
        for (o = 0, a = Ie.length; a > o; o++) {
          l = Ge[Ie[o]];
          N = Ye[l.a];
          U = Ye[l.b];
          V = Ye[l.c];
          _e[me] = N.x;
          _e[me + 1] = N.y;
          _e[me + 2] = N.z;
          _e[me + 3] = N.w;
          _e[me + 4] = U.x;
          _e[me + 5] = U.y;
          _e[me + 6] = U.z;
          _e[me + 7] = U.w;
          _e[me + 8] = V.x;
          _e[me + 9] = V.y;
          _e[me + 10] = V.z;
          _e[me + 11] = V.w;
          B = qe[l.a];
          O = qe[l.b];
          k = qe[l.c];
          be[me] = B.x;
          be[me + 1] = B.y;
          be[me + 2] = B.z;
          be[me + 3] = B.w;
          be[me + 4] = O.x;
          be[me + 5] = O.y;
          be[me + 6] = O.z;
          be[me + 7] = O.w;
          be[me + 8] = k.x;
          be[me + 9] = k.y;
          be[me + 10] = k.z;
          be[me + 11] = k.w;
          me += 12
        }
        for (o = 0, a = je.length; a > o; o++) {
          l = Ge[je[o]];
          N = Ye[l.a];
          U = Ye[l.b];
          V = Ye[l.c];
          z = Ye[l.d];
          _e[me] = N.x;
          _e[me + 1] = N.y;
          _e[me + 2] = N.z;
          _e[me + 3] = N.w;
          _e[me + 4] = U.x;
          _e[me + 5] = U.y;
          _e[me + 6] = U.z;
          _e[me + 7] = U.w;
          _e[me + 8] = V.x;
          _e[me + 9] = V.y;
          _e[me + 10] = V.z;
          _e[me + 11] = V.w;
          _e[me + 12] = z.x;
          _e[me + 13] = z.y;
          _e[me + 14] = z.z;
          _e[me + 15] = z.w;
          B = qe[l.a];
          O = qe[l.b];
          k = qe[l.c];
          I = qe[l.d];
          be[me] = B.x;
          be[me + 1] = B.y;
          be[me + 2] = B.z;
          be[me + 3] = B.w;
          be[me + 4] = O.x;
          be[me + 5] = O.y;
          be[me + 6] = O.z;
          be[me + 7] = O.w;
          be[me + 8] = k.x;
          be[me + 9] = k.y;
          be[me + 10] = k.z;
          be[me + 11] = k.w;
          be[me + 12] = I.x;
          be[me + 13] = I.y;
          be[me + 14] = I.z;
          be[me + 15] = I.w;
          me += 16
        }
        if (me > 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglSkinIndicesBuffer);
          ze.bufferData(ze.ARRAY_BUFFER, be, r);
          ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglSkinWeightsBuffer);
          ze.bufferData(ze.ARRAY_BUFFER, _e, r)
        }
      }
      if (Be && ie) {
        for (o = 0, a = Ie.length; a > o; o++) {
          l = Ge[Ie[o]];
          u = l.vertexColors;
          f = l.color;
          if (3 === u.length && ie === THREE.VertexColors) {
            L = u[0];
            D = u[1];
            P = u[2]
          } else {
            L = f;
            D = f;
            P = f
          }
          He[de] = L.r;
          He[de + 1] = L.g;
          He[de + 2] = L.b;
          He[de + 3] = D.r;
          He[de + 4] = D.g;
          He[de + 5] = D.b;
          He[de + 6] = P.r;
          He[de + 7] = P.g;
          He[de + 8] = P.b;
          de += 9
        }
        for (o = 0, a = je.length; a > o; o++) {
          l = Ge[je[o]];
          u = l.vertexColors;
          f = l.color;
          if (4 === u.length && ie === THREE.VertexColors) {
            L = u[0];
            D = u[1];
            P = u[2];
            F = u[3]
          } else {
            L = f;
            D = f;
            P = f;
            F = f
          }
          He[de] = L.r;
          He[de + 1] = L.g;
          He[de + 2] = L.b;
          He[de + 3] = D.r;
          He[de + 4] = D.g;
          He[de + 5] = D.b;
          He[de + 6] = P.r;
          He[de + 7] = P.g;
          He[de + 8] = P.b;
          He[de + 9] = F.r;
          He[de + 10] = F.g;
          He[de + 11] = F.b;
          de += 12
        }
        if (de > 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglColorBuffer);
          ze.bufferData(ze.ARRAY_BUFFER, He, r)
        }
      }
      if (Ve && De.hasTangents) {
        for (o = 0, a = Ie.length; a > o; o++) {
          l = Ge[Ie[o]];
          E = l.vertexTangents;
          w = E[0];
          H = E[1];
          b = E[2];
          we[fe] = w.x;
          we[fe + 1] = w.y;
          we[fe + 2] = w.z;
          we[fe + 3] = w.w;
          we[fe + 4] = H.x;
          we[fe + 5] = H.y;
          we[fe + 6] = H.z;
          we[fe + 7] = H.w;
          we[fe + 8] = b.x;
          we[fe + 9] = b.y;
          we[fe + 10] = b.z;
          we[fe + 11] = b.w;
          fe += 12
        }
        for (o = 0, a = je.length; a > o; o++) {
          l = Ge[je[o]];
          E = l.vertexTangents;
          w = E[0];
          H = E[1];
          b = E[2];
          _ = E[3];
          we[fe] = w.x;
          we[fe + 1] = w.y;
          we[fe + 2] = w.z;
          we[fe + 3] = w.w;
          we[fe + 4] = H.x;
          we[fe + 5] = H.y;
          we[fe + 6] = H.z;
          we[fe + 7] = H.w;
          we[fe + 8] = b.x;
          we[fe + 9] = b.y;
          we[fe + 10] = b.z;
          we[fe + 11] = b.w;
          we[fe + 12] = _.x;
          we[fe + 13] = _.y;
          we[fe + 14] = _.z;
          we[fe + 15] = _.w;
          fe += 16
        }
        ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglTangentBuffer);
        ze.bufferData(ze.ARRAY_BUFFER, we, r)
      }
      if (Ue && re) {
        for (o = 0, a = Ie.length; a > o; o++) {
          l = Ge[Ie[o]];
          c = l.vertexNormals;
          h = l.normal;
          if (3 === c.length && oe)
            for (j = 0; 3 > j; j++) {
              W = c[j];
              xe[ue] = W.x;
              xe[ue + 1] = W.y;
              xe[ue + 2] = W.z;
              ue += 3
            } else
              for (j = 0; 3 > j; j++) {
                xe[ue] = h.x;
                xe[ue + 1] = h.y;
                xe[ue + 2] = h.z;
                ue += 3
              }
        }
        for (o = 0, a = je.length; a > o; o++) {
          l = Ge[je[o]];
          c = l.vertexNormals;
          h = l.normal;
          if (4 === c.length && oe)
            for (j = 0; 4 > j; j++) {
              W = c[j];
              xe[ue] = W.x;
              xe[ue + 1] = W.y;
              xe[ue + 2] = W.z;
              ue += 3
            } else
              for (j = 0; 4 > j; j++) {
                xe[ue] = h.x;
                xe[ue + 1] = h.y;
                xe[ue + 2] = h.z;
                ue += 3
              }
        }
        ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglNormalBuffer);
        ze.bufferData(ze.ARRAY_BUFFER, xe, r)
      }
      if (Ne && We && ne) {
        for (o = 0, a = Ie.length; a > o; o++) {
          s = Ie[o];
          g = We[s];
          if (void 0 !== g)
            for (j = 0; 3 > j; j++) {
              X = g[j];
              Te[le] = X.x;
              Te[le + 1] = X.y;
              le += 2
            }
        }
        for (o = 0, a = je.length; a > o; o++) {
          s = je[o];
          g = We[s];
          if (void 0 !== g)
            for (j = 0; 4 > j; j++) {
              X = g[j];
              Te[le] = X.x;
              Te[le + 1] = X.y;
              le += 2
            }
        }
        if (le > 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglUVBuffer);
          ze.bufferData(ze.ARRAY_BUFFER, Te, r)
        }
      }
      if (Ne && Xe && ne) {
        for (o = 0, a = Ie.length; a > o; o++) {
          s = Ie[o];
          v = Xe[s];
          if (void 0 !== v)
            for (j = 0; 3 > j; j++) {
              q = v[j];
              Re[ce] = q.x;
              Re[ce + 1] = q.y;
              ce += 2
            }
        }
        for (o = 0, a = je.length; a > o; o++) {
          s = je[o];
          v = Xe[s];
          if (void 0 !== v)
            for (j = 0; 4 > j; j++) {
              q = v[j];
              Re[ce] = q.x;
              Re[ce + 1] = q.y;
              ce += 2
            }
        }
        if (ce > 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglUV2Buffer);
          ze.bufferData(ze.ARRAY_BUFFER, Re, r)
        }
      }
      if (Fe) {
        for (o = 0, a = Ie.length; a > o; o++) {
          Ae[he] = ae;
          Ae[he + 1] = ae + 1;
          Ae[he + 2] = ae + 2;
          he += 3;
          Le[pe] = ae;
          Le[pe + 1] = ae + 1;
          Le[pe + 2] = ae;
          Le[pe + 3] = ae + 2;
          Le[pe + 4] = ae + 1;
          Le[pe + 5] = ae + 2;
          pe += 6;
          ae += 3
        }
        for (o = 0, a = je.length; a > o; o++) {
          Ae[he] = ae;
          Ae[he + 1] = ae + 1;
          Ae[he + 2] = ae + 3;
          Ae[he + 3] = ae + 1;
          Ae[he + 4] = ae + 2;
          Ae[he + 5] = ae + 3;
          he += 6;
          Le[pe] = ae;
          Le[pe + 1] = ae + 1;
          Le[pe + 2] = ae;
          Le[pe + 3] = ae + 3;
          Le[pe + 4] = ae + 1;
          Le[pe + 5] = ae + 2;
          Le[pe + 6] = ae + 2;
          Le[pe + 7] = ae + 3;
          pe += 8;
          ae += 4
        }
        ze.bindBuffer(ze.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer);
        ze.bufferData(ze.ELEMENT_ARRAY_BUFFER, Ae, r);
        ze.bindBuffer(ze.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer);
        ze.bufferData(ze.ELEMENT_ARRAY_BUFFER, Le, r)
      }
      if (Ce)
        for (j = 0, G = Ce.length; G > j; j++) {
          te = Ce[j];
          if (te.__original.needsUpdate) {
            ge = 0;
            ve = 0;
            if (1 === te.size) {
              if (void 0 === te.boundTo || "vertices" === te.boundTo) {
                for (o = 0, a = Ie.length; a > o; o++) {
                  l = Ge[Ie[o]];
                  te.array[ge] = te.value[l.a];
                  te.array[ge + 1] = te.value[l.b];
                  te.array[ge + 2] = te.value[l.c];
                  ge += 3
                }
                for (o = 0, a = je.length; a > o; o++) {
                  l = Ge[je[o]];
                  te.array[ge] = te.value[l.a];
                  te.array[ge + 1] = te.value[l.b];
                  te.array[ge + 2] = te.value[l.c];
                  te.array[ge + 3] = te.value[l.d];
                  ge += 4
                }
              } else if ("faces" === te.boundTo) {
                for (o = 0, a = Ie.length; a > o; o++) {
                  ee = te.value[Ie[o]];
                  te.array[ge] = ee;
                  te.array[ge + 1] = ee;
                  te.array[ge + 2] = ee;
                  ge += 3
                }
                for (o = 0, a = je.length; a > o; o++) {
                  ee = te.value[je[o]];
                  te.array[ge] = ee;
                  te.array[ge + 1] = ee;
                  te.array[ge + 2] = ee;
                  te.array[ge + 3] = ee;
                  ge += 4
                }
              }
            } else if (2 === te.size) {
              if (void 0 === te.boundTo || "vertices" === te.boundTo) {
                for (o = 0, a = Ie.length; a > o; o++) {
                  l = Ge[Ie[o]];
                  y = te.value[l.a];
                  T = te.value[l.b];
                  R = te.value[l.c];
                  te.array[ge] = y.x;
                  te.array[ge + 1] = y.y;
                  te.array[ge + 2] = T.x;
                  te.array[ge + 3] = T.y;
                  te.array[ge + 4] = R.x;
                  te.array[ge + 5] = R.y;
                  ge += 6
                }
                for (o = 0, a = je.length; a > o; o++) {
                  l = Ge[je[o]];
                  y = te.value[l.a];
                  T = te.value[l.b];
                  R = te.value[l.c];
                  x = te.value[l.d];
                  te.array[ge] = y.x;
                  te.array[ge + 1] = y.y;
                  te.array[ge + 2] = T.x;
                  te.array[ge + 3] = T.y;
                  te.array[ge + 4] = R.x;
                  te.array[ge + 5] = R.y;
                  te.array[ge + 6] = x.x;
                  te.array[ge + 7] = x.y;
                  ge += 8
                }
              } else if ("faces" === te.boundTo) {
                for (o = 0, a = Ie.length; a > o; o++) {
                  ee = te.value[Ie[o]];
                  y = ee;
                  T = ee;
                  R = ee;
                  te.array[ge] = y.x;
                  te.array[ge + 1] = y.y;
                  te.array[ge + 2] = T.x;
                  te.array[ge + 3] = T.y;
                  te.array[ge + 4] = R.x;
                  te.array[ge + 5] = R.y;
                  ge += 6
                }
                for (o = 0, a = je.length; a > o; o++) {
                  ee = te.value[je[o]];
                  y = ee;
                  T = ee;
                  R = ee;
                  x = ee;
                  te.array[ge] = y.x;
                  te.array[ge + 1] = y.y;
                  te.array[ge + 2] = T.x;
                  te.array[ge + 3] = T.y;
                  te.array[ge + 4] = R.x;
                  te.array[ge + 5] = R.y;
                  te.array[ge + 6] = x.x;
                  te.array[ge + 7] = x.y;
                  ge += 8
                }
              }
            } else if (3 === te.size) {
              var Qe;
              Qe = "c" === te.type ? ["r", "g", "b"] : ["x", "y", "z"];
              if (void 0 === te.boundTo || "vertices" === te.boundTo) {
                for (o = 0, a = Ie.length; a > o; o++) {
                  l = Ge[Ie[o]];
                  y = te.value[l.a];
                  T = te.value[l.b];
                  R = te.value[l.c];
                  te.array[ge] = y[Qe[0]];
                  te.array[ge + 1] = y[Qe[1]];
                  te.array[ge + 2] = y[Qe[2]];
                  te.array[ge + 3] = T[Qe[0]];
                  te.array[ge + 4] = T[Qe[1]];
                  te.array[ge + 5] = T[Qe[2]];
                  te.array[ge + 6] = R[Qe[0]];
                  te.array[ge + 7] = R[Qe[1]];
                  te.array[ge + 8] = R[Qe[2]];
                  ge += 9
                }
                for (o = 0, a = je.length; a > o; o++) {
                  l = Ge[je[o]];
                  y = te.value[l.a];
                  T = te.value[l.b];
                  R = te.value[l.c];
                  x = te.value[l.d];
                  te.array[ge] = y[Qe[0]];
                  te.array[ge + 1] = y[Qe[1]];
                  te.array[ge + 2] = y[Qe[2]];
                  te.array[ge + 3] = T[Qe[0]];
                  te.array[ge + 4] = T[Qe[1]];
                  te.array[ge + 5] = T[Qe[2]];
                  te.array[ge + 6] = R[Qe[0]];
                  te.array[ge + 7] = R[Qe[1]];
                  te.array[ge + 8] = R[Qe[2]];
                  te.array[ge + 9] = x[Qe[0]];
                  te.array[ge + 10] = x[Qe[1]];
                  te.array[ge + 11] = x[Qe[2]];
                  ge += 12
                }
              } else if ("faces" === te.boundTo) {
                for (o = 0, a = Ie.length; a > o; o++) {
                  ee = te.value[Ie[o]];
                  y = ee;
                  T = ee;
                  R = ee;
                  te.array[ge] = y[Qe[0]];
                  te.array[ge + 1] = y[Qe[1]];
                  te.array[ge + 2] = y[Qe[2]];
                  te.array[ge + 3] = T[Qe[0]];
                  te.array[ge + 4] = T[Qe[1]];
                  te.array[ge + 5] = T[Qe[2]];
                  te.array[ge + 6] = R[Qe[0]];
                  te.array[ge + 7] = R[Qe[1]];
                  te.array[ge + 8] = R[Qe[2]];
                  ge += 9
                }
                for (o = 0, a = je.length; a > o; o++) {
                  ee = te.value[je[o]];
                  y = ee;
                  T = ee;
                  R = ee;
                  x = ee;
                  te.array[ge] = y[Qe[0]];
                  te.array[ge + 1] = y[Qe[1]];
                  te.array[ge + 2] = y[Qe[2]];
                  te.array[ge + 3] = T[Qe[0]];
                  te.array[ge + 4] = T[Qe[1]];
                  te.array[ge + 5] = T[Qe[2]];
                  te.array[ge + 6] = R[Qe[0]];
                  te.array[ge + 7] = R[Qe[1]];
                  te.array[ge + 8] = R[Qe[2]];
                  te.array[ge + 9] = x[Qe[0]];
                  te.array[ge + 10] = x[Qe[1]];
                  te.array[ge + 11] = x[Qe[2]];
                  ge += 12
                }
              } else if ("faceVertices" === te.boundTo) {
                for (o = 0, a = Ie.length; a > o; o++) {
                  ee = te.value[Ie[o]];
                  y = ee[0];
                  T = ee[1];
                  R = ee[2];
                  te.array[ge] = y[Qe[0]];
                  te.array[ge + 1] = y[Qe[1]];
                  te.array[ge + 2] = y[Qe[2]];
                  te.array[ge + 3] = T[Qe[0]];
                  te.array[ge + 4] = T[Qe[1]];
                  te.array[ge + 5] = T[Qe[2]];
                  te.array[ge + 6] = R[Qe[0]];
                  te.array[ge + 7] = R[Qe[1]];
                  te.array[ge + 8] = R[Qe[2]];
                  ge += 9
                }
                for (o = 0, a = je.length; a > o; o++) {
                  ee = te.value[je[o]];
                  y = ee[0];
                  T = ee[1];
                  R = ee[2];
                  x = ee[3];
                  te.array[ge] = y[Qe[0]];
                  te.array[ge + 1] = y[Qe[1]];
                  te.array[ge + 2] = y[Qe[2]];
                  te.array[ge + 3] = T[Qe[0]];
                  te.array[ge + 4] = T[Qe[1]];
                  te.array[ge + 5] = T[Qe[2]];
                  te.array[ge + 6] = R[Qe[0]];
                  te.array[ge + 7] = R[Qe[1]];
                  te.array[ge + 8] = R[Qe[2]];
                  te.array[ge + 9] = x[Qe[0]];
                  te.array[ge + 10] = x[Qe[1]];
                  te.array[ge + 11] = x[Qe[2]];
                  ge += 12
                }
              }
            } else if (4 === te.size)
              if (void 0 === te.boundTo || "vertices" === te.boundTo) {
                for (o = 0, a = Ie.length; a > o; o++) {
                  l = Ge[Ie[o]];
                  y = te.value[l.a];
                  T = te.value[l.b];
                  R = te.value[l.c];
                  te.array[ge] = y.x;
                  te.array[ge + 1] = y.y;
                  te.array[ge + 2] = y.z;
                  te.array[ge + 3] = y.w;
                  te.array[ge + 4] = T.x;
                  te.array[ge + 5] = T.y;
                  te.array[ge + 6] = T.z;
                  te.array[ge + 7] = T.w;
                  te.array[ge + 8] = R.x;
                  te.array[ge + 9] = R.y;
                  te.array[ge + 10] = R.z;
                  te.array[ge + 11] = R.w;
                  ge += 12
                }
                for (o = 0, a = je.length; a > o; o++) {
                  l = Ge[je[o]];
                  y = te.value[l.a];
                  T = te.value[l.b];
                  R = te.value[l.c];
                  x = te.value[l.d];
                  te.array[ge] = y.x;
                  te.array[ge + 1] = y.y;
                  te.array[ge + 2] = y.z;
                  te.array[ge + 3] = y.w;
                  te.array[ge + 4] = T.x;
                  te.array[ge + 5] = T.y;
                  te.array[ge + 6] = T.z;
                  te.array[ge + 7] = T.w;
                  te.array[ge + 8] = R.x;
                  te.array[ge + 9] = R.y;
                  te.array[ge + 10] = R.z;
                  te.array[ge + 11] = R.w;
                  te.array[ge + 12] = x.x;
                  te.array[ge + 13] = x.y;
                  te.array[ge + 14] = x.z;
                  te.array[ge + 15] = x.w;
                  ge += 16
                }
              } else if ("faces" === te.boundTo) {
              for (o = 0, a = Ie.length; a > o; o++) {
                ee = te.value[Ie[o]];
                y = ee;
                T = ee;
                R = ee;
                te.array[ge] = y.x;
                te.array[ge + 1] = y.y;
                te.array[ge + 2] = y.z;
                te.array[ge + 3] = y.w;
                te.array[ge + 4] = T.x;
                te.array[ge + 5] = T.y;
                te.array[ge + 6] = T.z;
                te.array[ge + 7] = T.w;
                te.array[ge + 8] = R.x;
                te.array[ge + 9] = R.y;
                te.array[ge + 10] = R.z;
                te.array[ge + 11] = R.w;
                ge += 12
              }
              for (o = 0, a = je.length; a > o; o++) {
                ee = te.value[je[o]];
                y = ee;
                T = ee;
                R = ee;
                x = ee;
                te.array[ge] = y.x;
                te.array[ge + 1] = y.y;
                te.array[ge + 2] = y.z;
                te.array[ge + 3] = y.w;
                te.array[ge + 4] = T.x;
                te.array[ge + 5] = T.y;
                te.array[ge + 6] = T.z;
                te.array[ge + 7] = T.w;
                te.array[ge + 8] = R.x;
                te.array[ge + 9] = R.y;
                te.array[ge + 10] = R.z;
                te.array[ge + 11] = R.w;
                te.array[ge + 12] = x.x;
                te.array[ge + 13] = x.y;
                te.array[ge + 14] = x.z;
                te.array[ge + 15] = x.w;
                ge += 16
              }
            } else if ("faceVertices" === te.boundTo) {
              for (o = 0, a = Ie.length; a > o; o++) {
                ee = te.value[Ie[o]];
                y = ee[0];
                T = ee[1];
                R = ee[2];
                te.array[ge] = y.x;
                te.array[ge + 1] = y.y;
                te.array[ge + 2] = y.z;
                te.array[ge + 3] = y.w;
                te.array[ge + 4] = T.x;
                te.array[ge + 5] = T.y;
                te.array[ge + 6] = T.z;
                te.array[ge + 7] = T.w;
                te.array[ge + 8] = R.x;
                te.array[ge + 9] = R.y;
                te.array[ge + 10] = R.z;
                te.array[ge + 11] = R.w;
                ge += 12
              }
              for (o = 0, a = je.length; a > o; o++) {
                ee = te.value[je[o]];
                y = ee[0];
                T = ee[1];
                R = ee[2];
                x = ee[3];
                te.array[ge] = y.x;
                te.array[ge + 1] = y.y;
                te.array[ge + 2] = y.z;
                te.array[ge + 3] = y.w;
                te.array[ge + 4] = T.x;
                te.array[ge + 5] = T.y;
                te.array[ge + 6] = T.z;
                te.array[ge + 7] = T.w;
                te.array[ge + 8] = R.x;
                te.array[ge + 9] = R.y;
                te.array[ge + 10] = R.z;
                te.array[ge + 11] = R.w;
                te.array[ge + 12] = x.x;
                te.array[ge + 13] = x.y;
                te.array[ge + 14] = x.z;
                te.array[ge + 15] = x.w;
                ge += 16
              }
            }
            ze.bindBuffer(ze.ARRAY_BUFFER, te.buffer);
            ze.bufferData(ze.ARRAY_BUFFER, te.array, r)
          }
        }
      if (i) {
        delete e.__inittedArrays;
        delete e.__colorArray;
        delete e.__normalArray;
        delete e.__tangentArray;
        delete e.__uvArray;
        delete e.__uv2Array;
        delete e.__faceArray;
        delete e.__vertexArray;
        delete e.__lineArray;
        delete e.__skinIndexArray;
        delete e.__skinWeightArray
      }
    }
  }

  function R(e, t, r) {
    var i, n, o = e.attributes;
    for (i in o) {
      n = o[i];
      if (n.needsUpdate) {
        if ("index" === i) {
          ze.bindBuffer(ze.ELEMENT_ARRAY_BUFFER, n.buffer);
          ze.bufferData(ze.ELEMENT_ARRAY_BUFFER, n.array, t)
        } else {
          ze.bindBuffer(ze.ARRAY_BUFFER, n.buffer);
          ze.bufferData(ze.ARRAY_BUFFER, n.array, t)
        }
        n.needsUpdate = !1
      }
      r && !n.dynamic && delete n.array
    }
  }

  function x(e) {
    if (!gt[e]) {
      ze.enableVertexAttribArray(e);
      gt[e] = !0
    }
  }

  function w() {
    for (var e in gt)
      if (gt[e]) {
        ze.disableVertexAttribArray(e);
        gt[e] = !1
      }
  }

  function H(e, t, r) {
    var i = e.program.attributes;
    if (-1 !== r.morphTargetBase && i.position >= 0) {
      ze.bindBuffer(ze.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[r.morphTargetBase]);
      x(i.position);
      ze.vertexAttribPointer(i.position, 3, ze.FLOAT, !1, 0, 0)
    } else if (i.position >= 0) {
      ze.bindBuffer(ze.ARRAY_BUFFER, t.__webglVertexBuffer);
      x(i.position);
      ze.vertexAttribPointer(i.position, 3, ze.FLOAT, !1, 0, 0)
    }
    if (r.morphTargetForcedOrder.length)
      for (var n = 0, o = r.morphTargetForcedOrder, a = r.morphTargetInfluences; n < e.numSupportedMorphTargets && n < o.length;) {
        if (i["morphTarget" + n] >= 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[o[n]]);
          x(i["morphTarget" + n]);
          ze.vertexAttribPointer(i["morphTarget" + n], 3, ze.FLOAT, !1, 0, 0)
        }
        if (i["morphNormal" + n] >= 0 && e.morphNormals) {
          ze.bindBuffer(ze.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[o[n]]);
          x(i["morphNormal" + n]);
          ze.vertexAttribPointer(i["morphNormal" + n], 3, ze.FLOAT, !1, 0, 0)
        }
        r.__webglMorphTargetInfluences[n] = a[o[n]];
        n++
      } else {
        var s, l, c = [],
          a = r.morphTargetInfluences,
          h = a.length;
        for (l = 0; h > l; l++) {
          s = a[l];
          s > 0 && c.push([s, l])
        }
        if (c.length > e.numSupportedMorphTargets) {
          c.sort(_);
          c.length = e.numSupportedMorphTargets
        } else c.length > e.numSupportedMorphNormals ? c.sort(_) : 0 === c.length && c.push([0, 0]);
        for (var u, n = 0; n < e.numSupportedMorphTargets;) {
          if (c[n]) {
            u = c[n][1];
            if (i["morphTarget" + n] >= 0) {
              ze.bindBuffer(ze.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[u]);
              x(i["morphTarget" + n]);
              ze.vertexAttribPointer(i["morphTarget" + n], 3, ze.FLOAT, !1, 0, 0)
            }
            if (i["morphNormal" + n] >= 0 && e.morphNormals) {
              ze.bindBuffer(ze.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[u]);
              x(i["morphNormal" + n]);
              ze.vertexAttribPointer(i["morphNormal" + n], 3, ze.FLOAT, !1, 0, 0)
            }
            r.__webglMorphTargetInfluences[n] = a[u]
          } else r.__webglMorphTargetInfluences[n] = 0;
          n++
        }
      }
    null !== e.program.uniforms.morphTargetInfluences && ze.uniform1fv(e.program.uniforms.morphTargetInfluences, r.__webglMorphTargetInfluences)
  }

  function b(e, t) {
    return e.z !== t.z ? t.z - e.z : e.id - t.id
  }

  function _(e, t) {
    return t[0] - e[0]
  }

  function S(e, t, r) {
    if (e.length)
      for (var i = 0, n = e.length; n > i; i++) {
        Xe = null;
        Ke = null;
        tt = -1;
        ot = -1;
        at = -1;
        Je = -1;
        et = -1;
        $e = -1;
        Ye = -1;
        wt = !0;
        e[i].render(t, r, mt, Et);
        Xe = null;
        Ke = null;
        tt = -1;
        ot = -1;
        at = -1;
        Je = -1;
        et = -1;
        $e = -1;
        Ye = -1;
        wt = !0
      }
  }

  function M(e, t, r, i, n, o, a, s) {
    var l, c, h, u, f, p, d;
    if (t) {
      f = e.length - 1;
      p = -1;
      d = -1
    } else {
      f = 0;
      p = e.length;
      d = 1
    }
    for (var m = f; m !== p; m += d) {
      l = e[m];
      if (l.render) {
        c = l.object;
        h = l.buffer;
        if (s) u = s;
        else {
          u = l[r];
          if (!u) continue;
          a && je.setBlending(u.blending, u.blendEquation, u.blendSrc, u.blendDst);
          je.setDepthTest(u.depthTest);
          je.setDepthWrite(u.depthWrite);
          se(u.polygonOffset, u.polygonOffsetFactor, u.polygonOffsetUnits)
        }
        je.setMaterialFaces(u);
        h instanceof THREE.BufferGeometry ? je.renderBufferDirect(i, n, o, u, h, c) : je.renderBuffer(i, n, o, u, h, c)
      }
    }
  }

  function C(e, t, r, i, n, o, a) {
    for (var s, l, c, h = 0, u = e.length; u > h; h++) {
      s = e[h];
      l = s.object;
      if (l.visible) {
        if (a) c = a;
        else {
          c = s[t];
          if (!c) continue;
          o && je.setBlending(c.blending, c.blendEquation, c.blendSrc, c.blendDst);
          je.setDepthTest(c.depthTest);
          je.setDepthWrite(c.depthWrite);
          se(c.polygonOffset, c.polygonOffsetFactor, c.polygonOffsetUnits)
        }
        je.renderImmediateObject(r, i, n, c, l)
      }
    }
  }

  function A(e) {
    var t = e.object,
      r = t.material;
    if (r.transparent) {
      e.transparent = r;
      e.opaque = null
    } else {
      e.opaque = r;
      e.transparent = null
    }
  }

  function L(e) {
    var t, r, i, n = e.object,
      o = e.buffer;
    i = n.material;
    if (i instanceof THREE.MeshFaceMaterial) {
      r = o.materialIndex;
      t = i.materials[r];
      if (t.transparent) {
        e.transparent = t;
        e.opaque = null
      } else {
        e.opaque = t;
        e.transparent = null
      }
    } else {
      t = i;
      if (t)
        if (t.transparent) {
          e.transparent = t;
          e.opaque = null
        } else {
          e.opaque = t;
          e.transparent = null
        }
    }
  }

  function D(e, t) {
    var r, i, n, o, a, s, l = {},
      c = e.morphTargets.length,
      h = e.morphNormals.length,
      u = t instanceof THREE.MeshFaceMaterial;
    e.geometryGroups = {};
    for (r = 0, i = e.faces.length; i > r; r++) {
      n = e.faces[r];
      o = u ? n.materialIndex : 0;
      void 0 === l[o] && (l[o] = {
        hash: o,
        counter: 0
      });
      s = l[o].hash + "_" + l[o].counter;
      void 0 === e.geometryGroups[s] && (e.geometryGroups[s] = {
        faces3: [],
        faces4: [],
        materialIndex: o,
        vertices: 0,
        numMorphTargets: c,
        numMorphNormals: h
      });
      a = n instanceof THREE.Face3 ? 3 : 4;
      if (e.geometryGroups[s].vertices + a > 65535) {
        l[o].counter += 1;
        s = l[o].hash + "_" + l[o].counter;
        void 0 === e.geometryGroups[s] && (e.geometryGroups[s] = {
          faces3: [],
          faces4: [],
          materialIndex: o,
          vertices: 0,
          numMorphTargets: c,
          numMorphNormals: h
        })
      }
      n instanceof THREE.Face3 ? e.geometryGroups[s].faces3.push(r) : e.geometryGroups[s].faces4.push(r);
      e.geometryGroups[s].vertices += a
    }
    e.geometryGroupsList = [];
    for (var f in e.geometryGroups) {
      e.geometryGroups[f].id = Qe++;
      e.geometryGroupsList.push(e.geometryGroups[f])
    }
  }

  function P(e, o) {
    var a, u, f, p;
    if (void 0 === e.__webglInit) {
      e.__webglInit = !0;
      e._modelViewMatrix = new THREE.Matrix4;
      e._normalMatrix = new THREE.Matrix3;
      if (void 0 !== e.geometry && void 0 === e.geometry.__webglInit) {
        e.geometry.__webglInit = !0;
        e.geometry.addEventListener("dispose", Vt)
      }
      u = e.geometry;
      if (void 0 === u);
      else if (u instanceof THREE.BufferGeometry) E(u);
      else if (e instanceof THREE.Mesh) {
        f = e.material;
        void 0 === u.geometryGroups && D(u, f);
        for (a in u.geometryGroups) {
          p = u.geometryGroups[a];
          if (!p.__webglVertexBuffer) {
            n(p);
            h(p, e);
            u.verticesNeedUpdate = !0;
            u.morphTargetsNeedUpdate = !0;
            u.elementsNeedUpdate = !0;
            u.uvsNeedUpdate = !0;
            u.normalsNeedUpdate = !0;
            u.tangentsNeedUpdate = !0;
            u.colorsNeedUpdate = !0
          }
        }
      } else if (e instanceof THREE.Ribbon) {
        if (!u.__webglVertexBuffer) {
          i(u);
          c(u, e);
          u.verticesNeedUpdate = !0;
          u.colorsNeedUpdate = !0;
          u.normalsNeedUpdate = !0
        }
      } else if (e instanceof THREE.Line) {
        if (!u.__webglVertexBuffer) {
          r(u);
          l(u, e);
          u.verticesNeedUpdate = !0;
          u.colorsNeedUpdate = !0;
          u.lineDistancesNeedUpdate = !0
        }
      } else if (e instanceof THREE.ParticleSystem && !u.__webglVertexBuffer) {
        t(u);
        s(u, e);
        u.verticesNeedUpdate = !0;
        u.colorsNeedUpdate = !0
      }
    }
    if (void 0 === e.__webglActive) {
      if (e instanceof THREE.Mesh) {
        u = e.geometry;
        if (u instanceof THREE.BufferGeometry) F(o.__webglObjects, u, e);
        else if (u instanceof THREE.Geometry)
          for (a in u.geometryGroups) {
            p = u.geometryGroups[a];
            F(o.__webglObjects, p, e)
          }
      } else if (e instanceof THREE.Ribbon || e instanceof THREE.Line || e instanceof THREE.ParticleSystem) {
        u = e.geometry;
        F(o.__webglObjects, u, e)
      } else e instanceof THREE.ImmediateRenderObject || e.immediateRenderCallback ? N(o.__webglObjectsImmediate, e) : e instanceof THREE.Sprite ? o.__webglSprites.push(e) : e instanceof THREE.LensFlare && o.__webglFlares.push(e);
      e.__webglActive = !0
    }
  }

  function F(e, t, r) {
    e.push({
      buffer: t,
      object: r,
      opaque: null,
      transparent: null
    })
  }

  function N(e, t) {
    e.push({
      object: t,
      opaque: null,
      transparent: null
    })
  }

  function U(e) {
    var t, r, i, n = e.geometry;
    if (n instanceof THREE.BufferGeometry) R(n, ze.DYNAMIC_DRAW, !n.dynamic);
    else if (e instanceof THREE.Mesh) {
      for (var o = 0, a = n.geometryGroupsList.length; a > o; o++) {
        t = n.geometryGroupsList[o];
        i = u(e, t);
        n.buffersNeedUpdate && h(t, e);
        r = i.attributes && V(i);
        (n.verticesNeedUpdate || n.morphTargetsNeedUpdate || n.elementsNeedUpdate || n.uvsNeedUpdate || n.normalsNeedUpdate || n.colorsNeedUpdate || n.tangentsNeedUpdate || r) && T(t, e, ze.DYNAMIC_DRAW, !n.dynamic, i)
      }
      n.verticesNeedUpdate = !1;
      n.morphTargetsNeedUpdate = !1;
      n.elementsNeedUpdate = !1;
      n.uvsNeedUpdate = !1;
      n.normalsNeedUpdate = !1;
      n.colorsNeedUpdate = !1;
      n.tangentsNeedUpdate = !1;
      n.buffersNeedUpdate = !1;
      i.attributes && z(i)
    } else if (e instanceof THREE.Ribbon) {
      i = u(e, n);
      r = i.attributes && V(i);
      (n.verticesNeedUpdate || n.colorsNeedUpdate || n.normalsNeedUpdate || r) && y(n, ze.DYNAMIC_DRAW);
      n.verticesNeedUpdate = !1;
      n.colorsNeedUpdate = !1;
      n.normalsNeedUpdate = !1;
      i.attributes && z(i)
    } else if (e instanceof THREE.Line) {
      i = u(e, n);
      r = i.attributes && V(i);
      (n.verticesNeedUpdate || n.colorsNeedUpdate || n.lineDistancesNeedUpdate || r) && v(n, ze.DYNAMIC_DRAW);
      n.verticesNeedUpdate = !1;
      n.colorsNeedUpdate = !1;
      n.lineDistancesNeedUpdate = !1;
      i.attributes && z(i)
    } else if (e instanceof THREE.ParticleSystem) {
      i = u(e, n);
      r = i.attributes && V(i);
      (n.verticesNeedUpdate || n.colorsNeedUpdate || e.sortParticles || r) && g(n, ze.DYNAMIC_DRAW, e);
      n.verticesNeedUpdate = !1;
      n.colorsNeedUpdate = !1;
      i.attributes && z(i)
    }
  }

  function V(e) {
    for (var t in e.attributes)
      if (e.attributes[t].needsUpdate) return !0;
    return !1
  }

  function z(e) {
    for (var t in e.attributes) e.attributes[t].needsUpdate = !1
  }

  function B(e, t) {
    e instanceof THREE.Mesh || e instanceof THREE.ParticleSystem || e instanceof THREE.Ribbon || e instanceof THREE.Line ? O(t.__webglObjects, e) : e instanceof THREE.Sprite ? k(t.__webglSprites, e) : e instanceof THREE.LensFlare ? k(t.__webglFlares, e) : (e instanceof THREE.ImmediateRenderObject || e.immediateRenderCallback) && O(t.__webglObjectsImmediate, e);
    delete e.__webglActive
  }

  function O(e, t) {
    for (var r = e.length - 1; r >= 0; r--) e[r].object === t && e.splice(r, 1)
  }

  function k(e, t) {
    for (var r = e.length - 1; r >= 0; r--) e[r] === t && e.splice(r, 1)
  }

  function I(e, t) {
    e.uniforms = THREE.UniformsUtils.clone(t.uniforms);
    e.vertexShader = t.vertexShader;
    e.fragmentShader = t.fragmentShader
  }

  function j(e, t, r, i, n) {
    Ze = 0;
    if (i.needsUpdate) {
      i.program && Gt(i);
      je.initMaterial(i, t, r, n);
      i.needsUpdate = !1
    }
    i.morphTargets && (n.__webglMorphTargetInfluences || (n.__webglMorphTargetInfluences = new Float32Array(je.maxMorphTargets)));
    var o = !1,
      a = i.program,
      s = a.uniforms,
      l = i.uniforms;
    if (a !== Xe) {
      ze.useProgram(a);
      Xe = a;
      o = !0
    }
    if (i.id !== Ye) {
      Ye = i.id;
      o = !0
    }
    if (o || e !== Ke) {
      ze.uniformMatrix4fv(s.projectionMatrix, !1, e.projectionMatrix.elements);
      e !== Ke && (Ke = e)
    }
    if (i.skinning)
      if (At && n.useVertexTexture) {
        if (null !== s.boneTexture) {
          var c = ee();
          ze.uniform1i(s.boneTexture, c);
          je.setTexture(n.boneTexture, c)
        }
      } else null !== s.boneGlobalMatrices && ze.uniformMatrix4fv(s.boneGlobalMatrices, !1, n.boneMatrices);
    if (o) {
      r && i.fog && Y(l, r);
      if (i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshLambertMaterial || i.lights) {
        if (wt) {
          oe(a, t);
          wt = !1
        }
        Q(l, Ht)
      }(i instanceof THREE.MeshBasicMaterial || i instanceof THREE.MeshLambertMaterial || i instanceof THREE.MeshPhongMaterial) && G(l, i);
      if (i instanceof THREE.LineBasicMaterial) W(l, i);
      else if (i instanceof THREE.LineDashedMaterial) {
        W(l, i);
        X(l, i)
      } else if (i instanceof THREE.ParticleBasicMaterial) q(l, i);
      else if (i instanceof THREE.MeshPhongMaterial) $(l, i);
      else if (i instanceof THREE.MeshLambertMaterial) K(l, i);
      else if (i instanceof THREE.MeshDepthMaterial) {
        l.mNear.value = e.near;
        l.mFar.value = e.far;
        l.opacity.value = i.opacity
      } else i instanceof THREE.MeshNormalMaterial && (l.opacity.value = i.opacity);
      n.receiveShadow && !i._shadowPass && Z(l, t);
      te(a, i.uniformsList);
      if ((i instanceof THREE.ShaderMaterial || i instanceof THREE.MeshPhongMaterial || i.envMap) && null !== s.cameraPosition) {
        Rt.getPositionFromMatrix(e.matrixWorld);
        ze.uniform3f(s.cameraPosition, Rt.x, Rt.y, Rt.z)
      }(i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshLambertMaterial || i instanceof THREE.ShaderMaterial || i.skinning) && null !== s.viewMatrix && ze.uniformMatrix4fv(s.viewMatrix, !1, e.matrixWorldInverse.elements)
    }
    J(s, n);
    null !== s.modelMatrix && ze.uniformMatrix4fv(s.modelMatrix, !1, n.matrixWorld.elements);
    return a
  }

  function G(e, t) {
    e.opacity.value = t.opacity;
    je.gammaInput ? e.diffuse.value.copyGammaToLinear(t.color) : e.diffuse.value = t.color;
    e.map.value = t.map;
    e.lightMap.value = t.lightMap;
    e.specularMap.value = t.specularMap;
    if (t.bumpMap) {
      e.bumpMap.value = t.bumpMap;
      e.bumpScale.value = t.bumpScale
    }
    if (t.normalMap) {
      e.normalMap.value = t.normalMap;
      e.normalScale.value.copy(t.normalScale)
    }
    var r;
    t.map ? r = t.map : t.specularMap ? r = t.specularMap : t.normalMap ? r = t.normalMap : t.bumpMap && (r = t.bumpMap);
    if (void 0 !== r) {
      var i = r.offset,
        n = r.repeat;
      e.offsetRepeat.value.set(i.x, i.y, n.x, n.y)
    }
    e.envMap.value = t.envMap;
    e.flipEnvMap.value = t.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1;
    je.gammaInput ? e.reflectivity.value = t.reflectivity : e.reflectivity.value = t.reflectivity;
    e.refractionRatio.value = t.refractionRatio;
    e.combine.value = t.combine;
    e.useRefract.value = t.envMap && t.envMap.mapping instanceof THREE.CubeRefractionMapping
  }

  function W(e, t) {
    e.diffuse.value = t.color;
    e.opacity.value = t.opacity
  }

  function X(e, t) {
    e.dashSize.value = t.dashSize;
    e.totalSize.value = t.dashSize + t.gapSize;
    e.scale.value = t.scale
  }

  function q(e, t) {
    e.psColor.value = t.color;
    e.opacity.value = t.opacity;
    e.size.value = t.size;
    e.scale.value = Ce.height / 2;
    e.map.value = t.map
  }

  function Y(e, t) {
    e.fogColor.value = t.color;
    if (t instanceof THREE.Fog) {
      e.fogNear.value = t.near;
      e.fogFar.value = t.far
    } else t instanceof THREE.FogExp2 && (e.fogDensity.value = t.density)
  }

  function $(e, t) {
    e.shininess.value = t.shininess;
    if (je.gammaInput) {
      e.ambient.value.copyGammaToLinear(t.ambient);
      e.emissive.value.copyGammaToLinear(t.emissive);
      e.specular.value.copyGammaToLinear(t.specular)
    } else {
      e.ambient.value = t.ambient;
      e.emissive.value = t.emissive;
      e.specular.value = t.specular
    }
    t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB)
  }

  function K(e, t) {
    if (je.gammaInput) {
      e.ambient.value.copyGammaToLinear(t.ambient);
      e.emissive.value.copyGammaToLinear(t.emissive)
    } else {
      e.ambient.value = t.ambient;
      e.emissive.value = t.emissive
    }
    t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB)
  }

  function Q(e, t) {
    e.ambientLightColor.value = t.ambient;
    e.directionalLightColor.value = t.directional.colors;
    e.directionalLightDirection.value = t.directional.positions;
    e.pointLightColor.value = t.point.colors;
    e.pointLightPosition.value = t.point.positions;
    e.pointLightDistance.value = t.point.distances;
    e.spotLightColor.value = t.spot.colors;
    e.spotLightPosition.value = t.spot.positions;
    e.spotLightDistance.value = t.spot.distances;
    e.spotLightDirection.value = t.spot.directions;
    e.spotLightAngleCos.value = t.spot.anglesCos;
    e.spotLightExponent.value = t.spot.exponents;
    e.hemisphereLightSkyColor.value = t.hemi.skyColors;
    e.hemisphereLightGroundColor.value = t.hemi.groundColors;
    e.hemisphereLightDirection.value = t.hemi.positions
  }

  function Z(e, t) {
    if (e.shadowMatrix)
      for (var r = 0, i = 0, n = t.length; n > i; i++) {
        var o = t[i];
        if (o.castShadow && (o instanceof THREE.SpotLight || o instanceof THREE.DirectionalLight && !o.shadowCascade)) {
          e.shadowMap.value[r] = o.shadowMap;
          e.shadowMapSize.value[r] = o.shadowMapSize;
          e.shadowMatrix.value[r] = o.shadowMatrix;
          e.shadowDarkness.value[r] = o.shadowDarkness;
          e.shadowBias.value[r] = o.shadowBias;
          r++
        }
      }
  }

  function J(e, t) {
    ze.uniformMatrix4fv(e.modelViewMatrix, !1, t._modelViewMatrix.elements);
    e.normalMatrix && ze.uniformMatrix3fv(e.normalMatrix, !1, t._normalMatrix.elements)
  }

  function ee() {
    var e = Ze;
    e >= bt && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + bt);
    Ze += 1;
    return e
  }

  function te(e, t) {
    var r, i, n, o, a, s, l, c, h, u, f;
    for (h = 0, u = t.length; u > h; h++) {
      o = e.uniforms[t[h][1]];
      if (o) {
        r = t[h][0];
        n = r.type;
        i = r.value;
        if ("i" === n) ze.uniform1i(o, i);
        else if ("f" === n) ze.uniform1f(o, i);
        else if ("v2" === n) ze.uniform2f(o, i.x, i.y);
        else if ("v3" === n) ze.uniform3f(o, i.x, i.y, i.z);
        else if ("v4" === n) ze.uniform4f(o, i.x, i.y, i.z, i.w);
        else if ("c" === n) ze.uniform3f(o, i.r, i.g, i.b);
        else if ("iv1" === n) ze.uniform1iv(o, i);
        else if ("iv" === n) ze.uniform3iv(o, i);
        else if ("fv1" === n) ze.uniform1fv(o, i);
        else if ("fv" === n) ze.uniform3fv(o, i);
        else if ("v2v" === n) {
          void 0 === r._array && (r._array = new Float32Array(2 * i.length));
          for (l = 0, c = i.length; c > l; l++) {
            f = 2 * l;
            r._array[f] = i[l].x;
            r._array[f + 1] = i[l].y
          }
          ze.uniform2fv(o, r._array)
        } else if ("v3v" === n) {
          void 0 === r._array && (r._array = new Float32Array(3 * i.length));
          for (l = 0, c = i.length; c > l; l++) {
            f = 3 * l;
            r._array[f] = i[l].x;
            r._array[f + 1] = i[l].y;
            r._array[f + 2] = i[l].z
          }
          ze.uniform3fv(o, r._array)
        } else if ("v4v" === n) {
          void 0 === r._array && (r._array = new Float32Array(4 * i.length));
          for (l = 0, c = i.length; c > l; l++) {
            f = 4 * l;
            r._array[f] = i[l].x;
            r._array[f + 1] = i[l].y;
            r._array[f + 2] = i[l].z;
            r._array[f + 3] = i[l].w
          }
          ze.uniform4fv(o, r._array)
        } else if ("m4" === n) {
          void 0 === r._array && (r._array = new Float32Array(16));
          i.flattenToArray(r._array);
          ze.uniformMatrix4fv(o, !1, r._array)
        } else if ("m4v" === n) {
          void 0 === r._array && (r._array = new Float32Array(16 * i.length));
          for (l = 0, c = i.length; c > l; l++) i[l].flattenToArrayOffset(r._array, 16 * l);
          ze.uniformMatrix4fv(o, !1, r._array)
        } else if ("t" === n) {
          a = i;
          s = ee();
          ze.uniform1i(o, s);
          if (!a) continue;
          a.image instanceof Array && 6 === a.image.length ? ge(a, s) : a instanceof THREE.WebGLRenderTargetCube ? ve(a, s) : je.setTexture(a, s)
        } else if ("tv" === n) {
          void 0 === r._array && (r._array = []);
          for (l = 0, c = r.value.length; c > l; l++) r._array[l] = ee();
          ze.uniform1iv(o, r._array);
          for (l = 0, c = r.value.length; c > l; l++) {
            a = r.value[l];
            s = r._array[l];
            a && je.setTexture(a, s)
          }
        }
      }
    }
  }

  function re(e, t) {
    e._modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld);
    e._normalMatrix.getNormalMatrix(e._modelViewMatrix)
  }

  function ie(e, t, r, i) {
    e[t] = r.r * r.r * i;
    e[t + 1] = r.g * r.g * i;
    e[t + 2] = r.b * r.b * i
  }

  function ne(e, t, r, i) {
    e[t] = r.r * i;
    e[t + 1] = r.g * i;
    e[t + 2] = r.b * i
  }

  function oe(e, t) {
    var r, i, n, o, a, s, l, c, h, u = 0,
      f = 0,
      p = 0,
      d = Ht,
      m = d.directional.colors,
      E = d.directional.positions,
      g = d.point.colors,
      v = d.point.positions,
      y = d.point.distances,
      T = d.spot.colors,
      R = d.spot.positions,
      x = d.spot.distances,
      w = d.spot.directions,
      H = d.spot.anglesCos,
      b = d.spot.exponents,
      _ = d.hemi.skyColors,
      S = d.hemi.groundColors,
      M = d.hemi.positions,
      C = 0,
      A = 0,
      L = 0,
      D = 0,
      P = 0,
      F = 0,
      N = 0,
      U = 0,
      V = 0,
      z = 0,
      B = 0,
      O = 0;
    for (r = 0, i = t.length; i > r; r++) {
      n = t[r];
      if (!n.onlyShadow) {
        o = n.color;
        l = n.intensity;
        h = n.distance;
        if (n instanceof THREE.AmbientLight) {
          if (!n.visible) continue;
          if (je.gammaInput) {
            u += o.r * o.r;
            f += o.g * o.g;
            p += o.b * o.b
          } else {
            u += o.r;
            f += o.g;
            p += o.b
          }
        } else if (n instanceof THREE.DirectionalLight) {
          P += 1;
          if (!n.visible) continue;
          xt.getPositionFromMatrix(n.matrixWorld);
          Rt.getPositionFromMatrix(n.target.matrixWorld);
          xt.sub(Rt);
          xt.normalize();
          if (0 === xt.x && 0 === xt.y && 0 === xt.z) continue;
          V = 3 * C;
          E[V] = xt.x;
          E[V + 1] = xt.y;
          E[V + 2] = xt.z;
          je.gammaInput ? ie(m, V, o, l * l) : ne(m, V, o, l);
          C += 1
        } else if (n instanceof THREE.PointLight) {
          F += 1;
          if (!n.visible) continue;
          z = 3 * A;
          je.gammaInput ? ie(g, z, o, l * l) : ne(g, z, o, l);
          Rt.getPositionFromMatrix(n.matrixWorld);
          v[z] = Rt.x;
          v[z + 1] = Rt.y;
          v[z + 2] = Rt.z;
          y[A] = h;
          A += 1
        } else if (n instanceof THREE.SpotLight) {
          N += 1;
          if (!n.visible) continue;
          B = 3 * L;
          je.gammaInput ? ie(T, B, o, l * l) : ne(T, B, o, l);
          Rt.getPositionFromMatrix(n.matrixWorld);
          R[B] = Rt.x;
          R[B + 1] = Rt.y;
          R[B + 2] = Rt.z;
          x[L] = h;
          xt.copy(Rt);
          Rt.getPositionFromMatrix(n.target.matrixWorld);
          xt.sub(Rt);
          xt.normalize();
          w[B] = xt.x;
          w[B + 1] = xt.y;
          w[B + 2] = xt.z;
          H[L] = Math.cos(n.angle);
          b[L] = n.exponent;
          L += 1
        } else if (n instanceof THREE.HemisphereLight) {
          U += 1;
          if (!n.visible) continue;
          xt.getPositionFromMatrix(n.matrixWorld);
          xt.normalize();
          if (0 === xt.x && 0 === xt.y && 0 === xt.z) continue;
          O = 3 * D;
          M[O] = xt.x;
          M[O + 1] = xt.y;
          M[O + 2] = xt.z;
          a = n.color;
          s = n.groundColor;
          if (je.gammaInput) {
            c = l * l;
            ie(_, O, a, c);
            ie(S, O, s, c)
          } else {
            ne(_, O, a, l);
            ne(S, O, s, l)
          }
          D += 1
        }
      }
    }
    for (r = 3 * C, i = Math.max(m.length, 3 * P); i > r; r++) m[r] = 0;
    for (r = 3 * A, i = Math.max(g.length, 3 * F); i > r; r++) g[r] = 0;
    for (r = 3 * L, i = Math.max(T.length, 3 * N); i > r; r++) T[r] = 0;
    for (r = 3 * D, i = Math.max(_.length, 3 * U); i > r; r++) _[r] = 0;
    for (r = 3 * D, i = Math.max(S.length, 3 * U); i > r; r++) S[r] = 0;
    d.directional.length = C;
    d.point.length = A;
    d.spot.length = L;
    d.hemi.length = D;
    d.ambient[0] = u;
    d.ambient[1] = f;
    d.ambient[2] = p
  }

  function ae(e) {
    if (e !== ht) {
      ze.lineWidth(e);
      ht = e
    }
  }

  function se(e, t, r) {
    if (st !== e) {
      e ? ze.enable(ze.POLYGON_OFFSET_FILL) : ze.disable(ze.POLYGON_OFFSET_FILL);
      st = e
    }
    if (e && (lt !== t || ct !== r)) {
      ze.polygonOffset(t, r);
      lt = t;
      ct = r
    }
  }

  function le(e) {
    var t, r, i = [];
    for (var n in e) {
      t = e[n];
      if (t !== !1) {
        r = "#define " + n + " " + t;
        i.push(r)
      }
    }
    return i.join("\n")
  }

  function ce(e, t, r, i, n, o, a) {
    var s, l, c, h, u, f = [];
    if (e) f.push(e);
    else {
      f.push(t);
      f.push(r)
    }
    for (c in o) {
      f.push(c);
      f.push(o[c])
    }
    for (s in a) {
      f.push(s);
      f.push(a[s])
    }
    u = f.join();
    for (s = 0, l = Ge.length; l > s; s++) {
      var p = Ge[s];
      if (p.code === u) {
        p.usedTimes++;
        return p.program
      }
    }
    var d = "SHADOWMAP_TYPE_BASIC";
    a.shadowMapType === THREE.PCFShadowMap ? d = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === THREE.PCFSoftShadowMap && (d = "SHADOWMAP_TYPE_PCF_SOFT");
    var m = le(o);
    h = ze.createProgram();
    var E = ["precision " + Ae + " float;", m, Ct ? "#define VERTEX_TEXTURES" : "", je.gammaInput ? "#define GAMMA_INPUT" : "", je.gammaOutput ? "#define GAMMA_OUTPUT" : "", je.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" : "", "#define MAX_DIR_LIGHTS " + a.maxDirLights, "#define MAX_POINT_LIGHTS " + a.maxPointLights, "#define MAX_SPOT_LIGHTS " + a.maxSpotLights, "#define MAX_HEMI_LIGHTS " + a.maxHemiLights, "#define MAX_SHADOWS " + a.maxShadows, "#define MAX_BONES " + a.maxBones, a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.boneTextureWidth ? "#define N_BONE_PIXEL_X " + a.boneTextureWidth.toFixed(1) : "", a.boneTextureHeight ? "#define N_BONE_PIXEL_Y " + a.boneTextureHeight.toFixed(1) : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals ? "#define USE_MORPHNORMALS" : "", a.perPixel ? "#define PHONG_PER_PIXEL" : "", a.wrapAround ? "#define WRAP_AROUND" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + d : "", a.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", a.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "attribute vec2 uv2;", "#ifdef USE_COLOR", "attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "attribute vec3 morphTarget0;", "attribute vec3 morphTarget1;", "attribute vec3 morphTarget2;", "attribute vec3 morphTarget3;", "#ifdef USE_MORPHNORMALS", "attribute vec3 morphNormal0;", "attribute vec3 morphNormal1;", "attribute vec3 morphNormal2;", "attribute vec3 morphNormal3;", "#else", "attribute vec3 morphTarget4;", "attribute vec3 morphTarget5;", "attribute vec3 morphTarget6;", "attribute vec3 morphTarget7;", "#endif", "#endif", "#ifdef USE_SKINNING", "attribute vec4 skinIndex;", "attribute vec4 skinWeight;", "#endif", ""].join("\n"),
      g = ["precision " + Ae + " float;", a.bumpMap || a.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "", m, "#define MAX_DIR_LIGHTS " + a.maxDirLights, "#define MAX_POINT_LIGHTS " + a.maxPointLights, "#define MAX_SPOT_LIGHTS " + a.maxSpotLights, "#define MAX_HEMI_LIGHTS " + a.maxHemiLights, "#define MAX_SHADOWS " + a.maxShadows, a.alphaTest ? "#define ALPHATEST " + a.alphaTest : "", je.gammaInput ? "#define GAMMA_INPUT" : "", je.gammaOutput ? "#define GAMMA_OUTPUT" : "", je.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" : "", a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.metal ? "#define METAL" : "", a.perPixel ? "#define PHONG_PER_PIXEL" : "", a.wrapAround ? "#define WRAP_AROUND" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + d : "", a.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", a.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", ""].join("\n"),
      v = pe("vertex", E + r),
      y = pe("fragment", g + t);
    ze.attachShader(h, v);
    ze.attachShader(h, y);
    ze.linkProgram(h);
    ze.getProgramParameter(h, ze.LINK_STATUS) || console.error("Could not initialise shader\nVALIDATE_STATUS: " + ze.getProgramParameter(h, ze.VALIDATE_STATUS) + ", gl error [" + ze.getError() + "]");
    ze.deleteShader(y);
    ze.deleteShader(v);
    h.uniforms = {};
    h.attributes = {};
    var T, R, x, w;
    T = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "modelMatrix", "cameraPosition", "morphTargetInfluences"];
    a.useVertexTexture ? T.push("boneTexture") : T.push("boneGlobalMatrices");
    for (R in i) T.push(R);
    he(h, T);
    T = ["position", "normal", "uv", "uv2", "tangent", "color", "skinIndex", "skinWeight", "lineDistance"];
    for (w = 0; w < a.maxMorphTargets; w++) T.push("morphTarget" + w);
    for (w = 0; w < a.maxMorphNormals; w++) T.push("morphNormal" + w);
    for (x in n) T.push(x);
    ue(h, T);
    h.id = We++;
    Ge.push({
      program: h,
      code: u,
      usedTimes: 1
    });
    je.info.memory.programs = Ge.length;
    return h
  }

  function he(e, t) {
    var r, i, n;
    for (r = 0, i = t.length; i > r; r++) {
      n = t[r];
      e.uniforms[n] = ze.getUniformLocation(e, n)
    }
  }

  function ue(e, t) {
    var r, i, n;
    for (r = 0, i = t.length; i > r; r++) {
      n = t[r];
      e.attributes[n] = ze.getAttribLocation(e, n)
    }
  }

  function fe(e) {
    for (var t = e.split("\n"), r = 0, i = t.length; i > r; r++) t[r] = r + 1 + ": " + t[r];
    return t.join("\n")
  }

  function pe(e, t) {
    var r;
    "fragment" === e ? r = ze.createShader(ze.FRAGMENT_SHADER) : "vertex" === e && (r = ze.createShader(ze.VERTEX_SHADER));
    ze.shaderSource(r, t);
    ze.compileShader(r);
    if (!ze.getShaderParameter(r, ze.COMPILE_STATUS)) {
      console.error(ze.getShaderInfoLog(r));
      console.error(fe(t));
      return null
    }
    return r
  }

  function de(e) {
    return 0 === (e & e - 1)
  }

  function me(e, t, r) {
    if (r) {
      ze.texParameteri(e, ze.TEXTURE_WRAP_S, we(t.wrapS));
      ze.texParameteri(e, ze.TEXTURE_WRAP_T, we(t.wrapT));
      ze.texParameteri(e, ze.TEXTURE_MAG_FILTER, we(t.magFilter));
      ze.texParameteri(e, ze.TEXTURE_MIN_FILTER, we(t.minFilter))
    } else {
      ze.texParameteri(e, ze.TEXTURE_WRAP_S, ze.CLAMP_TO_EDGE);
      ze.texParameteri(e, ze.TEXTURE_WRAP_T, ze.CLAMP_TO_EDGE);
      ze.texParameteri(e, ze.TEXTURE_MAG_FILTER, xe(t.magFilter));
      ze.texParameteri(e, ze.TEXTURE_MIN_FILTER, xe(t.minFilter))
    }
    if (ke && t.type !== THREE.FloatType && (t.anisotropy > 1 || t.__oldAnisotropy)) {
      ze.texParameterf(e, ke.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, Mt));
      t.__oldAnisotropy = t.anisotropy
    }
  }

  function Ee(e, t) {
    if (e.width <= t && e.height <= t) return e;
    var r = Math.max(e.width, e.height),
      i = Math.floor(e.width * t / r),
      n = Math.floor(e.height * t / r),
      o = document.createElement("canvas");
    o.width = i;
    o.height = n;
    var a = o.getContext("2d");
    a.drawImage(e, 0, 0, e.width, e.height, 0, 0, i, n);
    return o
  }

  function ge(e, t) {
    if (6 === e.image.length)
      if (e.needsUpdate) {
        if (!e.image.__webglTextureCube) {
          e.image.__webglTextureCube = ze.createTexture();
          je.info.memory.textures++
        }
        ze.activeTexture(ze.TEXTURE0 + t);
        ze.bindTexture(ze.TEXTURE_CUBE_MAP, e.image.__webglTextureCube);
        ze.pixelStorei(ze.UNPACK_FLIP_Y_WEBGL, e.flipY);
        for (var r = e instanceof THREE.CompressedTexture, i = [], n = 0; 6 > n; n++) je.autoScaleCubemaps && !r ? i[n] = Ee(e.image[n], St) : i[n] = e.image[n];
        var o = i[0],
          a = de(o.width) && de(o.height),
          s = we(e.format),
          l = we(e.type);
        me(ze.TEXTURE_CUBE_MAP, e, a);
        for (var n = 0; 6 > n; n++)
          if (r)
            for (var c, h = i[n].mipmaps, u = 0, f = h.length; f > u; u++) {
              c = h[u];
              ze.compressedTexImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + n, u, s, c.width, c.height, 0, c.data)
            } else ze.texImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, s, s, l, i[n]);
        e.generateMipmaps && a && ze.generateMipmap(ze.TEXTURE_CUBE_MAP);
        e.needsUpdate = !1;
        e.onUpdate && e.onUpdate()
      } else {
        ze.activeTexture(ze.TEXTURE0 + t);
        ze.bindTexture(ze.TEXTURE_CUBE_MAP, e.image.__webglTextureCube)
      }
  }

  function ve(e, t) {
    ze.activeTexture(ze.TEXTURE0 + t);
    ze.bindTexture(ze.TEXTURE_CUBE_MAP, e.__webglTexture)
  }

  function ye(e, t, r) {
    ze.bindFramebuffer(ze.FRAMEBUFFER, e);
    ze.framebufferTexture2D(ze.FRAMEBUFFER, ze.COLOR_ATTACHMENT0, r, t.__webglTexture, 0)
  }

  function Te(e, t) {
    ze.bindRenderbuffer(ze.RENDERBUFFER, e);
    if (t.depthBuffer && !t.stencilBuffer) {
      ze.renderbufferStorage(ze.RENDERBUFFER, ze.DEPTH_COMPONENT16, t.width, t.height);
      ze.framebufferRenderbuffer(ze.FRAMEBUFFER, ze.DEPTH_ATTACHMENT, ze.RENDERBUFFER, e)
    } else if (t.depthBuffer && t.stencilBuffer) {
      ze.renderbufferStorage(ze.RENDERBUFFER, ze.DEPTH_STENCIL, t.width, t.height);
      ze.framebufferRenderbuffer(ze.FRAMEBUFFER, ze.DEPTH_STENCIL_ATTACHMENT, ze.RENDERBUFFER, e)
    } else ze.renderbufferStorage(ze.RENDERBUFFER, ze.RGBA4, t.width, t.height)
  }

  function Re(e) {
    if (e instanceof THREE.WebGLRenderTargetCube) {
      ze.bindTexture(ze.TEXTURE_CUBE_MAP, e.__webglTexture);
      ze.generateMipmap(ze.TEXTURE_CUBE_MAP);
      ze.bindTexture(ze.TEXTURE_CUBE_MAP, null)
    } else {
      ze.bindTexture(ze.TEXTURE_2D, e.__webglTexture);
      ze.generateMipmap(ze.TEXTURE_2D);
      ze.bindTexture(ze.TEXTURE_2D, null)
    }
  }

  function xe(e) {
    return e === THREE.NearestFilter || e === THREE.NearestMipMapNearestFilter || e === THREE.NearestMipMapLinearFilter ? ze.NEAREST : ze.LINEAR
  }

  function we(e) {
    if (e === THREE.RepeatWrapping) return ze.REPEAT;
    if (e === THREE.ClampToEdgeWrapping) return ze.CLAMP_TO_EDGE;
    if (e === THREE.MirroredRepeatWrapping) return ze.MIRRORED_REPEAT;
    if (e === THREE.NearestFilter) return ze.NEAREST;
    if (e === THREE.NearestMipMapNearestFilter) return ze.NEAREST_MIPMAP_NEAREST;
    if (e === THREE.NearestMipMapLinearFilter) return ze.NEAREST_MIPMAP_LINEAR;
    if (e === THREE.LinearFilter) return ze.LINEAR;
    if (e === THREE.LinearMipMapNearestFilter) return ze.LINEAR_MIPMAP_NEAREST;
    if (e === THREE.LinearMipMapLinearFilter) return ze.LINEAR_MIPMAP_LINEAR;
    if (e === THREE.UnsignedByteType) return ze.UNSIGNED_BYTE;
    if (e === THREE.UnsignedShort4444Type) return ze.UNSIGNED_SHORT_4_4_4_4;
    if (e === THREE.UnsignedShort5551Type) return ze.UNSIGNED_SHORT_5_5_5_1;
    if (e === THREE.UnsignedShort565Type) return ze.UNSIGNED_SHORT_5_6_5;
    if (e === THREE.ByteType) return ze.BYTE;
    if (e === THREE.ShortType) return ze.SHORT;
    if (e === THREE.UnsignedShortType) return ze.UNSIGNED_SHORT;
    if (e === THREE.IntType) return ze.INT;
    if (e === THREE.UnsignedIntType) return ze.UNSIGNED_INT;
    if (e === THREE.FloatType) return ze.FLOAT;
    if (e === THREE.AlphaFormat) return ze.ALPHA;
    if (e === THREE.RGBFormat) return ze.RGB;
    if (e === THREE.RGBAFormat) return ze.RGBA;
    if (e === THREE.LuminanceFormat) return ze.LUMINANCE;
    if (e === THREE.LuminanceAlphaFormat) return ze.LUMINANCE_ALPHA;
    if (e === THREE.AddEquation) return ze.FUNC_ADD;
    if (e === THREE.SubtractEquation) return ze.FUNC_SUBTRACT;
    if (e === THREE.ReverseSubtractEquation) return ze.FUNC_REVERSE_SUBTRACT;
    if (e === THREE.ZeroFactor) return ze.ZERO;
    if (e === THREE.OneFactor) return ze.ONE;
    if (e === THREE.SrcColorFactor) return ze.SRC_COLOR;
    if (e === THREE.OneMinusSrcColorFactor) return ze.ONE_MINUS_SRC_COLOR;
    if (e === THREE.SrcAlphaFactor) return ze.SRC_ALPHA;
    if (e === THREE.OneMinusSrcAlphaFactor) return ze.ONE_MINUS_SRC_ALPHA;
    if (e === THREE.DstAlphaFactor) return ze.DST_ALPHA;
    if (e === THREE.OneMinusDstAlphaFactor) return ze.ONE_MINUS_DST_ALPHA;
    if (e === THREE.DstColorFactor) return ze.DST_COLOR;
    if (e === THREE.OneMinusDstColorFactor) return ze.ONE_MINUS_DST_COLOR;
    if (e === THREE.SrcAlphaSaturateFactor) return ze.SRC_ALPHA_SATURATE;
    if (void 0 !== Ie) {
      if (e === THREE.RGB_S3TC_DXT1_Format) return Ie.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (e === THREE.RGBA_S3TC_DXT1_Format) return Ie.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (e === THREE.RGBA_S3TC_DXT3_Format) return Ie.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (e === THREE.RGBA_S3TC_DXT5_Format) return Ie.COMPRESSED_RGBA_S3TC_DXT5_EXT
    }
    return 0
  }

  function He(e) {
    if (At && e && e.useVertexTexture) return 1024;
    var t = ze.getParameter(ze.MAX_VERTEX_UNIFORM_VECTORS),
      r = Math.floor((t - 20) / 4),
      i = r;
    if (void 0 !== e && e instanceof THREE.SkinnedMesh) {
      i = Math.min(e.bones.length, i);
      i < e.bones.length && console.warn("WebGLRenderer: too many bones - " + e.bones.length + ", this GPU supports just " + i + " (try OpenGL instead of ANGLE)")
    }
    return i
  }

  function be(e) {
    var t, r, i, n, o, a, s;
    n = o = a = s = 0;
    for (t = 0, r = e.length; r > t; t++) {
      i = e[t];
      if (!i.onlyShadow) {
        i instanceof THREE.DirectionalLight && n++;
        i instanceof THREE.PointLight && o++;
        i instanceof THREE.SpotLight && a++;
        i instanceof THREE.HemisphereLight && s++
      }
    }
    return {
      directional: n,
      point: o,
      spot: a,
      hemi: s
    }
  }

  function _e(e) {
    var t, r, i, n = 0;
    for (t = 0, r = e.length; r > t; t++) {
      i = e[t];
      if (i.castShadow) {
        i instanceof THREE.SpotLight && n++;
        i instanceof THREE.DirectionalLight && !i.shadowCascade && n++
      }
    }
    return n
  }

  function Se() {
    try {
      if (!(ze = Ce.getContext("experimental-webgl", {
          alpha: Le,
          premultipliedAlpha: De,
          antialias: Pe,
          stencil: Fe,
          preserveDrawingBuffer: Ne
        }))) throw "Error creating WebGL context."
    } catch (e) {
      console.error(e)
    }
    Be = ze.getExtension("OES_texture_float");
    Oe = ze.getExtension("OES_standard_derivatives");
    ke = ze.getExtension("EXT_texture_filter_anisotropic") || ze.getExtension("MOZ_EXT_texture_filter_anisotropic") || ze.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
    Ie = ze.getExtension("WEBGL_compressed_texture_s3tc") || ze.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || ze.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
    Be || console.log("THREE.WebGLRenderer: Float textures not supported.");
    Oe || console.log("THREE.WebGLRenderer: Standard derivatives not supported.");
    ke || console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");
    Ie || console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");
    void 0 === ze.getShaderPrecisionFormat && (ze.getShaderPrecisionFormat = function() {
      return {
        rangeMin: 1,
        rangeMax: 1,
        precision: 1
      }
    })
  }

  function Me() {
    ze.clearColor(0, 0, 0, 1);
    ze.clearDepth(1);
    ze.clearStencil(0);
    ze.enable(ze.DEPTH_TEST);
    ze.depthFunc(ze.LEQUAL);
    ze.frontFace(ze.CCW);
    ze.cullFace(ze.BACK);
    ze.enable(ze.CULL_FACE);
    ze.enable(ze.BLEND);
    ze.blendEquation(ze.FUNC_ADD);
    ze.blendFunc(ze.SRC_ALPHA, ze.ONE_MINUS_SRC_ALPHA);
    ze.clearColor(Ue.r, Ue.g, Ue.b, Ve)
  }
  console.log("THREE.WebGLRenderer", THREE.REVISION);
  e = e || {};
  var Ce = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
    Ae = void 0 !== e.precision ? e.precision : "highp",
    Le = void 0 !== e.alpha ? e.alpha : !0,
    De = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0,
    Pe = void 0 !== e.antialias ? e.antialias : !1,
    Fe = void 0 !== e.stencil ? e.stencil : !0,
    Ne = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1,
    Ue = new THREE.Color(0),
    Ve = 0;
  if (void 0 !== e.clearColor) {
    console.warn("DEPRECATED: clearColor in WebGLRenderer constructor parameters is being removed. Use .setClearColor() instead.");
    Ue.setHex(e.clearColor)
  }
  if (void 0 !== e.clearAlpha) {
    console.warn("DEPRECATED: clearAlpha in WebGLRenderer constructor parameters is being removed. Use .setClearColor() instead.");
    Ve = e.clearAlpha
  }
  this.domElement = Ce;
  this.context = null;
  this.devicePixelRatio = void 0 !== e.devicePixelRatio ? e.devicePixelRatio : void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1;
  this.autoClear = !0;
  this.autoClearColor = !0;
  this.autoClearDepth = !0;
  this.autoClearStencil = !0;
  this.sortObjects = !0;
  this.autoUpdateObjects = !0;
  this.gammaInput = !1;
  this.gammaOutput = !1;
  this.physicallyBasedShading = !1;
  this.shadowMapEnabled = !1;
  this.shadowMapAutoUpdate = !0;
  this.shadowMapType = THREE.PCFShadowMap;
  this.shadowMapCullFace = THREE.CullFaceFront;
  this.shadowMapDebug = !1;
  this.shadowMapCascade = !1;
  this.maxMorphTargets = 8;
  this.maxMorphNormals = 4;
  this.autoScaleCubemaps = !0;
  this.renderPluginsPre = [];
  this.renderPluginsPost = [];
  this.info = {
    memory: {
      programs: 0,
      geometries: 0,
      textures: 0
    },
    render: {
      calls: 0,
      vertices: 0,
      faces: 0,
      points: 0
    }
  };
  var ze, Be, Oe, ke, Ie, je = this,
    Ge = [],
    We = 0,
    Xe = null,
    qe = null,
    Ye = -1,
    $e = null,
    Ke = null,
    Qe = 0,
    Ze = 0,
    Je = -1,
    et = -1,
    tt = -1,
    rt = -1,
    it = -1,
    nt = -1,
    ot = -1,
    at = -1,
    st = null,
    lt = null,
    ct = null,
    ht = null,
    ut = 0,
    ft = 0,
    pt = 0,
    dt = 0,
    mt = 0,
    Et = 0,
    gt = {},
    vt = new THREE.Frustum,
    yt = new THREE.Matrix4,
    Tt = new THREE.Matrix4,
    Rt = new THREE.Vector3,
    xt = new THREE.Vector3,
    wt = !0,
    Ht = {
      ambient: [0, 0, 0],
      directional: {
        length: 0,
        colors: new Array,
        positions: new Array
      },
      point: {
        length: 0,
        colors: new Array,
        positions: new Array,
        distances: new Array
      },
      spot: {
        length: 0,
        colors: new Array,
        positions: new Array,
        distances: new Array,
        directions: new Array,
        anglesCos: new Array,
        exponents: new Array
      },
      hemi: {
        length: 0,
        skyColors: new Array,
        groundColors: new Array,
        positions: new Array
      }
    };
  Se();
  Me();
  this.context = ze;
  var bt = ze.getParameter(ze.MAX_TEXTURE_IMAGE_UNITS),
    _t = ze.getParameter(ze.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    St = (ze.getParameter(ze.MAX_TEXTURE_SIZE), ze.getParameter(ze.MAX_CUBE_MAP_TEXTURE_SIZE)),
    Mt = ke ? ze.getParameter(ke.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0,
    Ct = _t > 0,
    At = Ct && Be,
    Lt = (Ie ? ze.getParameter(ze.COMPRESSED_TEXTURE_FORMATS) : [], ze.getShaderPrecisionFormat(ze.VERTEX_SHADER, ze.HIGH_FLOAT)),
    Dt = ze.getShaderPrecisionFormat(ze.VERTEX_SHADER, ze.MEDIUM_FLOAT),
    Pt = (ze.getShaderPrecisionFormat(ze.VERTEX_SHADER, ze.LOW_FLOAT), ze.getShaderPrecisionFormat(ze.FRAGMENT_SHADER, ze.HIGH_FLOAT)),
    Ft = ze.getShaderPrecisionFormat(ze.FRAGMENT_SHADER, ze.MEDIUM_FLOAT),
    Nt = (ze.getShaderPrecisionFormat(ze.FRAGMENT_SHADER, ze.LOW_FLOAT), ze.getShaderPrecisionFormat(ze.VERTEX_SHADER, ze.HIGH_INT), ze.getShaderPrecisionFormat(ze.VERTEX_SHADER, ze.MEDIUM_INT), ze.getShaderPrecisionFormat(ze.VERTEX_SHADER, ze.LOW_INT), ze.getShaderPrecisionFormat(ze.FRAGMENT_SHADER, ze.HIGH_INT), ze.getShaderPrecisionFormat(ze.FRAGMENT_SHADER, ze.MEDIUM_INT), ze.getShaderPrecisionFormat(ze.FRAGMENT_SHADER, ze.LOW_INT), Lt.precision > 0 && Pt.precision > 0),
    Ut = Dt.precision > 0 && Ft.precision > 0;
  if ("highp" === Ae && !Nt)
    if (Ut) {
      Ae = "mediump";
      console.warn("WebGLRenderer: highp not supported, using mediump")
    } else {
      Ae = "lowp";
      console.warn("WebGLRenderer: highp and mediump not supported, using lowp")
    }
  if ("mediump" === Ae && !Ut) {
    Ae = "lowp";
    console.warn("WebGLRenderer: mediump not supported, using lowp")
  }
  this.getContext = function() {
    return ze
  };
  this.supportsVertexTextures = function() {
    return Ct
  };
  this.supportsFloatTextures = function() {
    return Be
  };
  this.supportsStandardDerivatives = function() {
    return Oe
  };
  this.supportsCompressedTextureS3TC = function() {
    return Ie
  };
  this.getMaxAnisotropy = function() {
    return Mt
  };
  this.getPrecision = function() {
    return Ae
  };
  this.setSize = function(e, t, r) {
    Ce.width = e * this.devicePixelRatio;
    Ce.height = t * this.devicePixelRatio;
    if (1 !== this.devicePixelRatio && r !== !1) {
      Ce.style.width = e + "px";
      Ce.style.height = t + "px"
    }
    this.setViewport(0, 0, Ce.width, Ce.height)
  };
  this.setViewport = function(e, t, r, i) {
    ut = void 0 !== e ? e : 0;
    ft = void 0 !== t ? t : 0;
    pt = void 0 !== r ? r : Ce.width;
    dt = void 0 !== i ? i : Ce.height;
    ze.viewport(ut, ft, pt, dt)
  };
  this.setScissor = function(e, t, r, i) {
    ze.scissor(e, t, r, i)
  };
  this.enableScissorTest = function(e) {
    e ? ze.enable(ze.SCISSOR_TEST) : ze.disable(ze.SCISSOR_TEST)
  };
  this.setClearColor = function(e, t) {
    Ue.set(e);
    Ve = void 0 !== t ? t : 1;
    ze.clearColor(Ue.r, Ue.g, Ue.b, Ve)
  };
  this.setClearColorHex = function(e, t) {
    console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");
    this.setClearColor(e, t)
  };
  this.getClearColor = function() {
    return Ue
  };
  this.getClearAlpha = function() {
    return Ve
  };
  this.clear = function(e, t, r) {
    var i = 0;
    (void 0 === e || e) && (i |= ze.COLOR_BUFFER_BIT);
    (void 0 === t || t) && (i |= ze.DEPTH_BUFFER_BIT);
    (void 0 === r || r) && (i |= ze.STENCIL_BUFFER_BIT);
    ze.clear(i)
  };
  this.clearTarget = function(e, t, r, i) {
    this.setRenderTarget(e);
    this.clear(t, r, i)
  };
  this.addPostPlugin = function(e) {
    e.init(this);
    this.renderPluginsPost.push(e)
  };
  this.addPrePlugin = function(e) {
    e.init(this);
    this.renderPluginsPre.push(e)
  };
  this.updateShadowMap = function(e, t) {
    Xe = null;
    tt = -1;
    ot = -1;
    at = -1;
    $e = -1;
    Ye = -1;
    wt = !0;
    Je = -1;
    et = -1;
    this.shadowMapPlugin.update(e, t)
  };
  var Vt = function(e) {
      var t = e.target;
      t.removeEventListener("dispose", Vt);
      kt(t);
      je.info.memory.geometries--
    },
    zt = function(e) {
      var t = e.target;
      t.removeEventListener("dispose", zt);
      It(t);
      je.info.memory.textures--
    },
    Bt = function(e) {
      var t = e.target;
      t.removeEventListener("dispose", Bt);
      jt(t);
      je.info.memory.textures--
    },
    Ot = function(e) {
      var t = e.target;
      t.removeEventListener("dispose", Ot);
      Gt(t)
    },
    kt = function(e) {
      e.__webglInit = void 0;
      void 0 !== e.__webglVertexBuffer && ze.deleteBuffer(e.__webglVertexBuffer);
      void 0 !== e.__webglNormalBuffer && ze.deleteBuffer(e.__webglNormalBuffer);
      void 0 !== e.__webglTangentBuffer && ze.deleteBuffer(e.__webglTangentBuffer);
      void 0 !== e.__webglColorBuffer && ze.deleteBuffer(e.__webglColorBuffer);
      void 0 !== e.__webglUVBuffer && ze.deleteBuffer(e.__webglUVBuffer);
      void 0 !== e.__webglUV2Buffer && ze.deleteBuffer(e.__webglUV2Buffer);
      void 0 !== e.__webglSkinIndicesBuffer && ze.deleteBuffer(e.__webglSkinIndicesBuffer);
      void 0 !== e.__webglSkinWeightsBuffer && ze.deleteBuffer(e.__webglSkinWeightsBuffer);
      void 0 !== e.__webglFaceBuffer && ze.deleteBuffer(e.__webglFaceBuffer);
      void 0 !== e.__webglLineBuffer && ze.deleteBuffer(e.__webglLineBuffer);
      void 0 !== e.__webglLineDistanceBuffer && ze.deleteBuffer(e.__webglLineDistanceBuffer);
      if (void 0 !== e.geometryGroups)
        for (var t in e.geometryGroups) {
          var r = e.geometryGroups[t];
          if (void 0 !== r.numMorphTargets)
            for (var i = 0, n = r.numMorphTargets; n > i; i++) ze.deleteBuffer(r.__webglMorphTargetsBuffers[i]);
          if (void 0 !== r.numMorphNormals)
            for (var i = 0, n = r.numMorphNormals; n > i; i++) ze.deleteBuffer(r.__webglMorphNormalsBuffers[i]);
          o(r)
        }
      o(e)
    },
    It = function(e) {
      if (e.image && e.image.__webglTextureCube) ze.deleteTexture(e.image.__webglTextureCube);
      else {
        if (!e.__webglInit) return;
        e.__webglInit = !1;
        ze.deleteTexture(e.__webglTexture)
      }
    },
    jt = function(e) {
      if (e && e.__webglTexture) {
        ze.deleteTexture(e.__webglTexture);
        if (e instanceof THREE.WebGLRenderTargetCube)
          for (var t = 0; 6 > t; t++) {
            ze.deleteFramebuffer(e.__webglFramebuffer[t]);
            ze.deleteRenderbuffer(e.__webglRenderbuffer[t])
          } else {
            ze.deleteFramebuffer(e.__webglFramebuffer);
            ze.deleteRenderbuffer(e.__webglRenderbuffer)
          }
      }
    },
    Gt = function(e) {
      var t = e.program;
      if (void 0 !== t) {
        e.program = void 0;
        var r, i, n, o = !1;
        for (r = 0, i = Ge.length; i > r; r++) {
          n = Ge[r];
          if (n.program === t) {
            n.usedTimes--;
            0 === n.usedTimes && (o = !0);
            break
          }
        }
        if (o === !0) {
          var a = [];
          for (r = 0, i = Ge.length; i > r; r++) {
            n = Ge[r];
            n.program !== t && a.push(n)
          }
          Ge = a;
          ze.deleteProgram(t);
          je.info.memory.programs--
        }
      }
    };
  this.renderBufferImmediate = function(e, t, r) {
    e.hasPositions && !e.__webglVertexBuffer && (e.__webglVertexBuffer = ze.createBuffer());
    e.hasNormals && !e.__webglNormalBuffer && (e.__webglNormalBuffer = ze.createBuffer());
    e.hasUvs && !e.__webglUvBuffer && (e.__webglUvBuffer = ze.createBuffer());
    e.hasColors && !e.__webglColorBuffer && (e.__webglColorBuffer = ze.createBuffer());
    if (e.hasPositions) {
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglVertexBuffer);
      ze.bufferData(ze.ARRAY_BUFFER, e.positionArray, ze.DYNAMIC_DRAW);
      ze.enableVertexAttribArray(t.attributes.position);
      ze.vertexAttribPointer(t.attributes.position, 3, ze.FLOAT, !1, 0, 0)
    }
    if (e.hasNormals) {
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglNormalBuffer);
      if (r.shading === THREE.FlatShading) {
        var i, n, o, a, s, l, c, h, u, f, p, d, m, E, g = 3 * e.count;
        for (E = 0; g > E; E += 9) {
          m = e.normalArray;
          a = m[E];
          c = m[E + 1];
          f = m[E + 2];
          s = m[E + 3];
          h = m[E + 4];
          p = m[E + 5];
          l = m[E + 6];
          u = m[E + 7];
          d = m[E + 8];
          i = (a + s + l) / 3;
          n = (c + h + u) / 3;
          o = (f + p + d) / 3;
          m[E] = i;
          m[E + 1] = n;
          m[E + 2] = o;
          m[E + 3] = i;
          m[E + 4] = n;
          m[E + 5] = o;
          m[E + 6] = i;
          m[E + 7] = n;
          m[E + 8] = o
        }
      }
      ze.bufferData(ze.ARRAY_BUFFER, e.normalArray, ze.DYNAMIC_DRAW);
      ze.enableVertexAttribArray(t.attributes.normal);
      ze.vertexAttribPointer(t.attributes.normal, 3, ze.FLOAT, !1, 0, 0)
    }
    if (e.hasUvs && r.map) {
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglUvBuffer);
      ze.bufferData(ze.ARRAY_BUFFER, e.uvArray, ze.DYNAMIC_DRAW);
      ze.enableVertexAttribArray(t.attributes.uv);
      ze.vertexAttribPointer(t.attributes.uv, 2, ze.FLOAT, !1, 0, 0)
    }
    if (e.hasColors && r.vertexColors !== THREE.NoColors) {
      ze.bindBuffer(ze.ARRAY_BUFFER, e.__webglColorBuffer);
      ze.bufferData(ze.ARRAY_BUFFER, e.colorArray, ze.DYNAMIC_DRAW);
      ze.enableVertexAttribArray(t.attributes.color);
      ze.vertexAttribPointer(t.attributes.color, 3, ze.FLOAT, !1, 0, 0)
    }
    ze.drawArrays(ze.TRIANGLES, 0, e.count);
    e.count = 0
  };
  this.renderBufferDirect = function(e, t, r, i, n, o) {
    if (i.visible !== !1) {
      var a, s, l, c, h, u, f;
      a = j(e, t, r, i, o);
      s = a.attributes;
      l = n.attributes;
      var p = !1,
        d = i.wireframe ? 1 : 0,
        m = 16777215 * n.id + 2 * a.id + d;
      if (m !== $e) {
        $e = m;
        p = !0
      }
      p && w();
      if (o instanceof THREE.Mesh) {
        var E = l.index;
        if (E) {
          var g = n.offsets;
          g.length > 1 && (p = !0);
          for (var v = 0, y = g.length; y > v; v++) {
            var T = g[v].index;
            if (p) {
              for (h in l)
                if ("index" !== h) {
                  u = s[h];
                  c = l[h];
                  f = c.itemSize;
                  if (u >= 0) {
                    ze.bindBuffer(ze.ARRAY_BUFFER, c.buffer);
                    x(u);
                    ze.vertexAttribPointer(u, f, ze.FLOAT, !1, 0, T * f * 4)
                  }
                }
              ze.bindBuffer(ze.ELEMENT_ARRAY_BUFFER, E.buffer)
            }
            ze.drawElements(ze.TRIANGLES, g[v].count, ze.UNSIGNED_SHORT, 2 * g[v].start);
            je.info.render.calls++;
            je.info.render.vertices += g[v].count;
            je.info.render.faces += g[v].count / 3
          }
        } else {
          if (p)
            for (h in l)
              if ("index" !== h) {
                u = s[h];
                c = l[h];
                f = c.itemSize;
                if (u >= 0) {
                  ze.bindBuffer(ze.ARRAY_BUFFER, c.buffer);
                  x(u);
                  ze.vertexAttribPointer(u, f, ze.FLOAT, !1, 0, 0)
                }
              }
          var R = n.attributes.position;
          ze.drawArrays(ze.TRIANGLES, 0, R.numItems / 3);
          je.info.render.calls++;
          je.info.render.vertices += R.numItems / 3;
          je.info.render.faces += R.numItems / 3 / 3
        }
      } else if (o instanceof THREE.ParticleSystem) {
        if (p) {
          for (h in l) {
            u = s[h];
            c = l[h];
            f = c.itemSize;
            if (u >= 0) {
              ze.bindBuffer(ze.ARRAY_BUFFER, c.buffer);
              x(u);
              ze.vertexAttribPointer(u, f, ze.FLOAT, !1, 0, 0)
            }
          }
          var R = l.position;
          ze.drawArrays(ze.POINTS, 0, R.numItems / 3);
          je.info.render.calls++;
          je.info.render.points += R.numItems / 3
        }
      } else if (o instanceof THREE.Line && p) {
        for (h in l) {
          u = s[h];
          c = l[h];
          f = c.itemSize;
          if (u >= 0) {
            ze.bindBuffer(ze.ARRAY_BUFFER, c.buffer);
            x(u);
            ze.vertexAttribPointer(u, f, ze.FLOAT, !1, 0, 0)
          }
        }
        ae(i.linewidth);
        var R = l.position;
        ze.drawArrays(ze.LINE_STRIP, 0, R.numItems / 3);
        je.info.render.calls++;
        je.info.render.points += R.numItems
      }
    }
  };
  this.renderBuffer = function(e, t, r, i, n, o) {
    if (i.visible !== !1) {
      var a, s, l, c, h, u;
      a = j(e, t, r, i, o);
      s = a.attributes;
      var f = !1,
        p = i.wireframe ? 1 : 0,
        d = 16777215 * n.id + 2 * a.id + p;
      if (d !== $e) {
        $e = d;
        f = !0
      }
      f && w();
      if (!i.morphTargets && s.position >= 0) {
        if (f) {
          ze.bindBuffer(ze.ARRAY_BUFFER, n.__webglVertexBuffer);
          x(s.position);
          ze.vertexAttribPointer(s.position, 3, ze.FLOAT, !1, 0, 0)
        }
      } else o.morphTargetBase && H(i, n, o);
      if (f) {
        if (n.__webglCustomAttributesList)
          for (h = 0, u = n.__webglCustomAttributesList.length; u > h; h++) {
            c = n.__webglCustomAttributesList[h];
            if (s[c.buffer.belongsToAttribute] >= 0) {
              ze.bindBuffer(ze.ARRAY_BUFFER, c.buffer);
              x(s[c.buffer.belongsToAttribute]);
              ze.vertexAttribPointer(s[c.buffer.belongsToAttribute], c.size, ze.FLOAT, !1, 0, 0)
            }
          }
        if (s.color >= 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, n.__webglColorBuffer);
          x(s.color);
          ze.vertexAttribPointer(s.color, 3, ze.FLOAT, !1, 0, 0)
        }
        if (s.normal >= 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, n.__webglNormalBuffer);
          x(s.normal);
          ze.vertexAttribPointer(s.normal, 3, ze.FLOAT, !1, 0, 0)
        }
        if (s.tangent >= 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, n.__webglTangentBuffer);
          x(s.tangent);
          ze.vertexAttribPointer(s.tangent, 4, ze.FLOAT, !1, 0, 0)
        }
        if (s.uv >= 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, n.__webglUVBuffer);
          x(s.uv);
          ze.vertexAttribPointer(s.uv, 2, ze.FLOAT, !1, 0, 0)
        }
        if (s.uv2 >= 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, n.__webglUV2Buffer);
          x(s.uv2);
          ze.vertexAttribPointer(s.uv2, 2, ze.FLOAT, !1, 0, 0)
        }
        if (i.skinning && s.skinIndex >= 0 && s.skinWeight >= 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, n.__webglSkinIndicesBuffer);
          x(s.skinIndex);
          ze.vertexAttribPointer(s.skinIndex, 4, ze.FLOAT, !1, 0, 0);
          ze.bindBuffer(ze.ARRAY_BUFFER, n.__webglSkinWeightsBuffer);
          x(s.skinWeight);
          ze.vertexAttribPointer(s.skinWeight, 4, ze.FLOAT, !1, 0, 0)
        }
        if (s.lineDistance >= 0) {
          ze.bindBuffer(ze.ARRAY_BUFFER, n.__webglLineDistanceBuffer);
          x(s.lineDistance);
          ze.vertexAttribPointer(s.lineDistance, 1, ze.FLOAT, !1, 0, 0)
        }
      }
      if (o instanceof THREE.Mesh) {
        if (i.wireframe) {
          ae(i.wireframeLinewidth);
          f && ze.bindBuffer(ze.ELEMENT_ARRAY_BUFFER, n.__webglLineBuffer);
          ze.drawElements(ze.LINES, n.__webglLineCount, ze.UNSIGNED_SHORT, 0)
        } else {
          f && ze.bindBuffer(ze.ELEMENT_ARRAY_BUFFER, n.__webglFaceBuffer);
          ze.drawElements(ze.TRIANGLES, n.__webglFaceCount, ze.UNSIGNED_SHORT, 0)
        }
        je.info.render.calls++;
        je.info.render.vertices += n.__webglFaceCount;
        je.info.render.faces += n.__webglFaceCount / 3
      } else if (o instanceof THREE.Line) {
        l = o.type === THREE.LineStrip ? ze.LINE_STRIP : ze.LINES;
        ae(i.linewidth);
        ze.drawArrays(l, 0, n.__webglLineCount);
        je.info.render.calls++
      } else if (o instanceof THREE.ParticleSystem) {
        ze.drawArrays(ze.POINTS, 0, n.__webglParticleCount);
        je.info.render.calls++;
        je.info.render.points += n.__webglParticleCount
      } else if (o instanceof THREE.Ribbon) {
        ze.drawArrays(ze.TRIANGLE_STRIP, 0, n.__webglVertexCount);
        je.info.render.calls++
      }
    }
  };
  this.render = function(e, t, r, i) {
    if (t instanceof THREE.Camera != !1) {
      var n, o, a, s, l, c = e.__lights,
        h = e.fog;
      Ye = -1;
      wt = !0;
      e.autoUpdate === !0 && e.updateMatrixWorld();
      void 0 === t.parent && t.updateMatrixWorld();
      t.matrixWorldInverse.getInverse(t.matrixWorld);
      yt.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse);
      vt.setFromMatrix(yt);
      this.autoUpdateObjects && this.initWebGLObjects(e);
      S(this.renderPluginsPre, e, t);
      je.info.render.calls = 0;
      je.info.render.vertices = 0;
      je.info.render.faces = 0;
      je.info.render.points = 0;
      this.setRenderTarget(r);
      (this.autoClear || i) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
      l = e.__webglObjects;
      for (n = 0, o = l.length; o > n; n++) {
        a = l[n];
        s = a.object;
        a.id = n;
        a.render = !1;
        if (s.visible && (!(s instanceof THREE.Mesh || s instanceof THREE.ParticleSystem) || !s.frustumCulled || vt.intersectsObject(s))) {
          re(s, t);
          L(a);
          a.render = !0;
          if (this.sortObjects === !0)
            if (null !== s.renderDepth) a.z = s.renderDepth;
            else {
              Rt.getPositionFromMatrix(s.matrixWorld);
              Rt.applyProjection(yt);
              a.z = Rt.z
            }
        }
      }
      this.sortObjects && l.sort(b);
      l = e.__webglObjectsImmediate;
      for (n = 0, o = l.length; o > n; n++) {
        a = l[n];
        s = a.object;
        if (s.visible) {
          re(s, t);
          A(a)
        }
      }
      if (e.overrideMaterial) {
        var u = e.overrideMaterial;
        this.setBlending(u.blending, u.blendEquation, u.blendSrc, u.blendDst);
        this.setDepthTest(u.depthTest);
        this.setDepthWrite(u.depthWrite);
        se(u.polygonOffset, u.polygonOffsetFactor, u.polygonOffsetUnits);
        M(e.__webglObjects, !1, "", t, c, h, !0, u);
        C(e.__webglObjectsImmediate, "", t, c, h, !1, u)
      } else {
        var u = null;
        this.setBlending(THREE.NoBlending);
        M(e.__webglObjects, !0, "opaque", t, c, h, !1, u);
        C(e.__webglObjectsImmediate, "opaque", t, c, h, !1, u);
        M(e.__webglObjects, !1, "transparent", t, c, h, !0, u);
        C(e.__webglObjectsImmediate, "transparent", t, c, h, !0, u);
      }
      S(this.renderPluginsPost, e, t);
      r && r.generateMipmaps && r.minFilter !== THREE.NearestFilter && r.minFilter !== THREE.LinearFilter && Re(r);
      this.setDepthTest(!0);
      this.setDepthWrite(!0)
    } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
  };
  this.renderImmediateObject = function(e, t, r, i, n) {
    var o = j(e, t, r, i, n);
    $e = -1;
    je.setMaterialFaces(i);
    n.immediateRenderCallback ? n.immediateRenderCallback(o, ze, vt) : n.render(function(e) {
      je.renderBufferImmediate(e, o, i)
    })
  };
  this.initWebGLObjects = function(e) {
    if (!e.__webglObjects) {
      e.__webglObjects = [];
      e.__webglObjectsImmediate = [];
      e.__webglSprites = [];
      e.__webglFlares = []
    }
    for (; e.__objectsAdded.length;) {
      P(e.__objectsAdded[0], e);
      e.__objectsAdded.splice(0, 1)
    }
    for (; e.__objectsRemoved.length;) {
      B(e.__objectsRemoved[0], e);
      e.__objectsRemoved.splice(0, 1)
    }
    for (var t = 0, r = e.__webglObjects.length; r > t; t++) {
      var i = e.__webglObjects[t].object;
      if (void 0 === i.__webglInit) {
        void 0 !== i.__webglActive && B(i, e);
        P(i, e)
      }
      U(i)
    }
  };
  this.initMaterial = function(e, t, r, i) {
    e.addEventListener("dispose", Ot);
    var n, o, a, s, l, c, h;
    e instanceof THREE.MeshDepthMaterial ? h = "depth" : e instanceof THREE.MeshNormalMaterial ? h = "normal" : e instanceof THREE.MeshBasicMaterial ? h = "basic" : e instanceof THREE.MeshLambertMaterial ? h = "lambert" : e instanceof THREE.MeshPhongMaterial ? h = "phong" : e instanceof THREE.LineBasicMaterial ? h = "basic" : e instanceof THREE.LineDashedMaterial ? h = "dashed" : e instanceof THREE.ParticleBasicMaterial && (h = "particle_basic");
    h && I(e, THREE.ShaderLib[h]);
    s = be(t);
    c = _e(t);
    l = He(i);
    a = {
      map: !!e.map,
      envMap: !!e.envMap,
      lightMap: !!e.lightMap,
      bumpMap: !!e.bumpMap,
      normalMap: !!e.normalMap,
      specularMap: !!e.specularMap,
      vertexColors: e.vertexColors,
      fog: r,
      useFog: e.fog,
      fogExp: r instanceof THREE.FogExp2,
      sizeAttenuation: e.sizeAttenuation,
      skinning: e.skinning,
      maxBones: l,
      useVertexTexture: At && i && i.useVertexTexture,
      boneTextureWidth: i && i.boneTextureWidth,
      boneTextureHeight: i && i.boneTextureHeight,
      morphTargets: e.morphTargets,
      morphNormals: e.morphNormals,
      maxMorphTargets: this.maxMorphTargets,
      maxMorphNormals: this.maxMorphNormals,
      maxDirLights: s.directional,
      maxPointLights: s.point,
      maxSpotLights: s.spot,
      maxHemiLights: s.hemi,
      maxShadows: c,
      shadowMapEnabled: this.shadowMapEnabled && i.receiveShadow,
      shadowMapType: this.shadowMapType,
      shadowMapDebug: this.shadowMapDebug,
      shadowMapCascade: this.shadowMapCascade,
      alphaTest: e.alphaTest,
      metal: e.metal,
      perPixel: e.perPixel,
      wrapAround: e.wrapAround,
      doubleSided: e.side === THREE.DoubleSide,
      flipSided: e.side === THREE.BackSide
    };
    e.program = ce(h, e.fragmentShader, e.vertexShader, e.uniforms, e.attributes, e.defines, a);
    var u = e.program.attributes;
    if (e.morphTargets) {
      e.numSupportedMorphTargets = 0;
      var f, p = "morphTarget";
      for (o = 0; o < this.maxMorphTargets; o++) {
        f = p + o;
        u[f] >= 0 && e.numSupportedMorphTargets++
      }
    }
    if (e.morphNormals) {
      e.numSupportedMorphNormals = 0;
      var f, p = "morphNormal";
      for (o = 0; o < this.maxMorphNormals; o++) {
        f = p + o;
        u[f] >= 0 && e.numSupportedMorphNormals++
      }
    }
    e.uniformsList = [];
    for (n in e.uniforms) e.uniformsList.push([e.uniforms[n], n])
  };
  this.setFaceCulling = function(e, t) {
    if (e === THREE.CullFaceNone) ze.disable(ze.CULL_FACE);
    else {
      t === THREE.FrontFaceDirectionCW ? ze.frontFace(ze.CW) : ze.frontFace(ze.CCW);
      e === THREE.CullFaceBack ? ze.cullFace(ze.BACK) : e === THREE.CullFaceFront ? ze.cullFace(ze.FRONT) : ze.cullFace(ze.FRONT_AND_BACK);
      ze.enable(ze.CULL_FACE)
    }
  };
  this.setMaterialFaces = function(e) {
    var t = e.side === THREE.DoubleSide,
      r = e.side === THREE.BackSide;
    if (Je !== t) {
      t ? ze.disable(ze.CULL_FACE) : ze.enable(ze.CULL_FACE);
      Je = t
    }
    if (et !== r) {
      r ? ze.frontFace(ze.CW) : ze.frontFace(ze.CCW);
      et = r
    }
  };
  this.setDepthTest = function(e) {
    if (ot !== e) {
      e ? ze.enable(ze.DEPTH_TEST) : ze.disable(ze.DEPTH_TEST);
      ot = e
    }
  };
  this.setDepthWrite = function(e) {
    if (at !== e) {
      ze.depthMask(e);
      at = e
    }
  };
  this.setBlending = function(e, t, r, i) {
    if (e !== tt) {
      if (e === THREE.NoBlending) ze.disable(ze.BLEND);
      else if (e === THREE.AdditiveBlending) {
        ze.enable(ze.BLEND);
        ze.blendEquation(ze.FUNC_ADD);
        ze.blendFunc(ze.SRC_ALPHA, ze.ONE)
      } else if (e === THREE.SubtractiveBlending) {
        ze.enable(ze.BLEND);
        ze.blendEquation(ze.FUNC_ADD);
        ze.blendFunc(ze.ZERO, ze.ONE_MINUS_SRC_COLOR)
      } else if (e === THREE.MultiplyBlending) {
        ze.enable(ze.BLEND);
        ze.blendEquation(ze.FUNC_ADD);
        ze.blendFunc(ze.ZERO, ze.SRC_COLOR)
      } else if (e === THREE.CustomBlending) ze.enable(ze.BLEND);
      else {
        ze.enable(ze.BLEND);
        ze.blendEquationSeparate(ze.FUNC_ADD, ze.FUNC_ADD);
        ze.blendFuncSeparate(ze.SRC_ALPHA, ze.ONE_MINUS_SRC_ALPHA, ze.ONE, ze.ONE_MINUS_SRC_ALPHA)
      }
      tt = e
    }
    if (e === THREE.CustomBlending) {
      if (t !== rt) {
        ze.blendEquation(we(t));
        rt = t
      }
      if (r !== it || i !== nt) {
        ze.blendFunc(we(r), we(i));
        it = r;
        nt = i
      }
    } else {
      rt = null;
      it = null;
      nt = null
    }
  };
  this.setTexture = function(e, t) {
    if (e.needsUpdate) {
      if (!e.__webglInit) {
        e.__webglInit = !0;
        e.addEventListener("dispose", zt);
        e.__webglTexture = ze.createTexture();
        je.info.memory.textures++
      }
      ze.activeTexture(ze.TEXTURE0 + t);
      ze.bindTexture(ze.TEXTURE_2D, e.__webglTexture);
      ze.pixelStorei(ze.UNPACK_FLIP_Y_WEBGL, e.flipY);
      ze.pixelStorei(ze.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha);
      ze.pixelStorei(ze.UNPACK_ALIGNMENT, e.unpackAlignment);
      var r = e.image,
        i = de(r.width) && de(r.height),
        n = we(e.format),
        o = we(e.type);
      me(ze.TEXTURE_2D, e, i);
      var a, s = e.mipmaps;
      if (e instanceof THREE.DataTexture)
        if (s.length > 0 && i) {
          for (var l = 0, c = s.length; c > l; l++) {
            a = s[l];
            ze.texImage2D(ze.TEXTURE_2D, l, n, a.width, a.height, 0, n, o, a.data)
          }
          e.generateMipmaps = !1
        } else ze.texImage2D(ze.TEXTURE_2D, 0, n, r.width, r.height, 0, n, o, r.data);
      else if (e instanceof THREE.CompressedTexture)
        for (var l = 0, c = s.length; c > l; l++) {
          a = s[l];
          ze.compressedTexImage2D(ze.TEXTURE_2D, l, n, a.width, a.height, 0, a.data)
        } else if (s.length > 0 && i) {
          for (var l = 0, c = s.length; c > l; l++) {
            a = s[l];
            ze.texImage2D(ze.TEXTURE_2D, l, n, n, o, a)
          }
          e.generateMipmaps = !1
        } else ze.texImage2D(ze.TEXTURE_2D, 0, n, n, o, e.image);
      e.generateMipmaps && i && ze.generateMipmap(ze.TEXTURE_2D);
      e.needsUpdate = !1;
      e.onUpdate && e.onUpdate()
    } else {
      ze.activeTexture(ze.TEXTURE0 + t);
      ze.bindTexture(ze.TEXTURE_2D, e.__webglTexture)
    }
  };
  this.setRenderTarget = function(e) {
    var t = e instanceof THREE.WebGLRenderTargetCube;
    if (e && !e.__webglFramebuffer) {
      void 0 === e.depthBuffer && (e.depthBuffer = !0);
      void 0 === e.stencilBuffer && (e.stencilBuffer = !0);
      e.addEventListener("dispose", Bt);
      e.__webglTexture = ze.createTexture();
      je.info.memory.textures++;
      var r = de(e.width) && de(e.height),
        i = we(e.format),
        n = we(e.type);
      if (t) {
        e.__webglFramebuffer = [];
        e.__webglRenderbuffer = [];
        ze.bindTexture(ze.TEXTURE_CUBE_MAP, e.__webglTexture);
        me(ze.TEXTURE_CUBE_MAP, e, r);
        for (var o = 0; 6 > o; o++) {
          e.__webglFramebuffer[o] = ze.createFramebuffer();
          e.__webglRenderbuffer[o] = ze.createRenderbuffer();
          ze.texImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, i, e.width, e.height, 0, i, n, null);
          ye(e.__webglFramebuffer[o], e, ze.TEXTURE_CUBE_MAP_POSITIVE_X + o);
          Te(e.__webglRenderbuffer[o], e)
        }
        r && ze.generateMipmap(ze.TEXTURE_CUBE_MAP)
      } else {
        e.__webglFramebuffer = ze.createFramebuffer();
        e.shareDepthFrom ? e.__webglRenderbuffer = e.shareDepthFrom.__webglRenderbuffer : e.__webglRenderbuffer = ze.createRenderbuffer();
        ze.bindTexture(ze.TEXTURE_2D, e.__webglTexture);
        me(ze.TEXTURE_2D, e, r);
        ze.texImage2D(ze.TEXTURE_2D, 0, i, e.width, e.height, 0, i, n, null);
        ye(e.__webglFramebuffer, e, ze.TEXTURE_2D);
        e.shareDepthFrom ? e.depthBuffer && !e.stencilBuffer ? ze.framebufferRenderbuffer(ze.FRAMEBUFFER, ze.DEPTH_ATTACHMENT, ze.RENDERBUFFER, e.__webglRenderbuffer) : e.depthBuffer && e.stencilBuffer && ze.framebufferRenderbuffer(ze.FRAMEBUFFER, ze.DEPTH_STENCIL_ATTACHMENT, ze.RENDERBUFFER, e.__webglRenderbuffer) : Te(e.__webglRenderbuffer, e);
        r && ze.generateMipmap(ze.TEXTURE_2D)
      }
      t ? ze.bindTexture(ze.TEXTURE_CUBE_MAP, null) : ze.bindTexture(ze.TEXTURE_2D, null);
      ze.bindRenderbuffer(ze.RENDERBUFFER, null);
      ze.bindFramebuffer(ze.FRAMEBUFFER, null)
    }
    var a, s, l, c, h;
    if (e) {
      a = t ? e.__webglFramebuffer[e.activeCubeFace] : e.__webglFramebuffer;
      s = e.width;
      l = e.height;
      c = 0;
      h = 0
    } else {
      a = null;
      s = pt;
      l = dt;
      c = ut;
      h = ft
    }
    if (a !== qe) {
      ze.bindFramebuffer(ze.FRAMEBUFFER, a);
      ze.viewport(c, h, s, l);
      qe = a
    }
    mt = s;
    Et = l
  };
  this.shadowMapPlugin = new THREE.ShadowMapPlugin;
  this.addPrePlugin(this.shadowMapPlugin);
  this.addPostPlugin(new THREE.SpritePlugin);
  this.addPostPlugin(new THREE.LensFlarePlugin)
};
THREE.WebGLRenderTarget = function(e, t, r) {
  this.width = e;
  this.height = t;
  r = r || {};
  this.wrapS = void 0 !== r.wrapS ? r.wrapS : THREE.ClampToEdgeWrapping;
  this.wrapT = void 0 !== r.wrapT ? r.wrapT : THREE.ClampToEdgeWrapping;
  this.magFilter = void 0 !== r.magFilter ? r.magFilter : THREE.LinearFilter;
  this.minFilter = void 0 !== r.minFilter ? r.minFilter : THREE.LinearMipMapLinearFilter;
  this.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1;
  this.offset = new THREE.Vector2(0, 0);
  this.repeat = new THREE.Vector2(1, 1);
  this.format = void 0 !== r.format ? r.format : THREE.RGBAFormat;
  this.type = void 0 !== r.type ? r.type : THREE.UnsignedByteType;
  this.depthBuffer = void 0 !== r.depthBuffer ? r.depthBuffer : !0;
  this.stencilBuffer = void 0 !== r.stencilBuffer ? r.stencilBuffer : !0;
  this.generateMipmaps = !0;
  this.shareDepthFrom = null
};
THREE.WebGLRenderTarget.prototype = {
  constructor: THREE.WebGLRenderTarget,
  addEventListener: THREE.EventDispatcher.prototype.addEventListener,
  hasEventListener: THREE.EventDispatcher.prototype.hasEventListener,
  removeEventListener: THREE.EventDispatcher.prototype.removeEventListener,
  dispatchEvent: THREE.EventDispatcher.prototype.dispatchEvent,
  clone: function() {
    var e = new THREE.WebGLRenderTarget(this.width, this.height);
    e.wrapS = this.wrapS;
    e.wrapT = this.wrapT;
    e.magFilter = this.magFilter;
    e.minFilter = this.minFilter;
    e.anisotropy = this.anisotropy;
    e.offset.copy(this.offset);
    e.repeat.copy(this.repeat);
    e.format = this.format;
    e.type = this.type;
    e.depthBuffer = this.depthBuffer;
    e.stencilBuffer = this.stencilBuffer;
    e.generateMipmaps = this.generateMipmaps;
    e.shareDepthFrom = this.shareDepthFrom;
    return e
  },
  dispose: function() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
};
THREE.WebGLRenderTargetCube = function(e, t, r) {
  THREE.WebGLRenderTarget.call(this, e, t, r);
  this.activeCubeFace = 0
};
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.RenderableVertex = function() {
  this.positionWorld = new THREE.Vector3;
  this.positionScreen = new THREE.Vector4;
  this.visible = !0
};
THREE.RenderableVertex.prototype.copy = function(e) {
  this.positionWorld.copy(e.positionWorld);
  this.positionScreen.copy(e.positionScreen)
};
THREE.RenderableFace3 = function() {
  this.v1 = new THREE.RenderableVertex;
  this.v2 = new THREE.RenderableVertex;
  this.v3 = new THREE.RenderableVertex;
  this.centroidModel = new THREE.Vector3;
  this.normalModel = new THREE.Vector3;
  this.normalModelView = new THREE.Vector3;
  this.vertexNormalsLength = 0;
  this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
  this.vertexNormalsModelView = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
  this.color = null;
  this.material = null;
  this.uvs = [
    []
  ];
  this.z = null
};
THREE.RenderableFace4 = function() {
  this.v1 = new THREE.RenderableVertex;
  this.v2 = new THREE.RenderableVertex;
  this.v3 = new THREE.RenderableVertex;
  this.v4 = new THREE.RenderableVertex;
  this.centroidModel = new THREE.Vector3;
  this.normalModel = new THREE.Vector3;
  this.normalModelView = new THREE.Vector3;
  this.vertexNormalsLength = 0;
  this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
  this.vertexNormalsModelView = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
  this.color = null;
  this.material = null;
  this.uvs = [
    []
  ];
  this.z = null
};
THREE.RenderableObject = function() {
  this.object = null;
  this.z = null
};
THREE.RenderableParticle = function() {
  this.object = null;
  this.x = null;
  this.y = null;
  this.z = null;
  this.rotation = null;
  this.scale = new THREE.Vector2;
  this.material = null
};
THREE.RenderableLine = function() {
  this.z = null;
  this.v1 = new THREE.RenderableVertex;
  this.v2 = new THREE.RenderableVertex;
  this.vertexColors = [new THREE.Color, new THREE.Color];
  this.material = null
};
THREE.GeometryUtils = {
  merge: function(e, t, r) {
    var i, n, o = e.vertices.length,
      a = (e.faceVertexUvs[0].length, t instanceof THREE.Mesh ? t.geometry : t),
      s = e.vertices,
      l = a.vertices,
      c = e.faces,
      h = a.faces,
      u = e.faceVertexUvs[0],
      f = a.faceVertexUvs[0];
    void 0 === r && (r = 0);
    if (t instanceof THREE.Mesh) {
      t.matrixAutoUpdate && t.updateMatrix();
      i = t.matrix;
      n = (new THREE.Matrix3).getNormalMatrix(i)
    }
    for (var p = 0, d = l.length; d > p; p++) {
      var m = l[p],
        E = m.clone();
      i && E.applyMatrix4(i);
      s.push(E)
    }
    for (p = 0, d = h.length; d > p; p++) {
      var g, v, y, T = h[p],
        R = T.vertexNormals,
        x = T.vertexColors;
      T instanceof THREE.Face3 ? g = new THREE.Face3(T.a + o, T.b + o, T.c + o) : T instanceof THREE.Face4 && (g = new THREE.Face4(T.a + o, T.b + o, T.c + o, T.d + o));
      g.normal.copy(T.normal);
      n && g.normal.applyMatrix3(n).normalize();
      for (var w = 0, H = R.length; H > w; w++) {
        v = R[w].clone();
        n && v.applyMatrix3(n).normalize();
        g.vertexNormals.push(v)
      }
      g.color.copy(T.color);
      for (var w = 0, H = x.length; H > w; w++) {
        y = x[w];
        g.vertexColors.push(y.clone())
      }
      g.materialIndex = T.materialIndex + r;
      g.centroid.copy(T.centroid);
      i && g.centroid.applyMatrix4(i);
      c.push(g)
    }
    for (p = 0, d = f.length; d > p; p++) {
      for (var b = f[p], _ = [], w = 0, H = b.length; H > w; w++) _.push(new THREE.Vector2(b[w].x, b[w].y));
      u.push(_)
    }
  },
  removeMaterials: function(e, t) {
    for (var r = {}, i = 0, n = t.length; n > i; i++) r[t[i]] = !0;
    for (var o, a = [], i = 0, n = e.faces.length; n > i; i++) {
      o = e.faces[i];
      o.materialIndex in r || a.push(o)
    }
    e.faces = a
  },
  randomPointInTriangle: function(e, t, r) {
    var i, n, o, a = new THREE.Vector3,
      s = THREE.GeometryUtils.__v1;
    i = THREE.GeometryUtils.random();
    n = THREE.GeometryUtils.random();
    if (i + n > 1) {
      i = 1 - i;
      n = 1 - n
    }
    o = 1 - i - n;
    a.copy(e);
    a.multiplyScalar(i);
    s.copy(t);
    s.multiplyScalar(n);
    a.add(s);
    s.copy(r);
    s.multiplyScalar(o);
    a.add(s);
    return a
  },
  randomPointInFace: function(e, t, r) {
    var i, n, o, a;
    if (e instanceof THREE.Face3) {
      i = t.vertices[e.a];
      n = t.vertices[e.b];
      o = t.vertices[e.c];
      return THREE.GeometryUtils.randomPointInTriangle(i, n, o)
    }
    if (e instanceof THREE.Face4) {
      i = t.vertices[e.a];
      n = t.vertices[e.b];
      o = t.vertices[e.c];
      a = t.vertices[e.d];
      var s, l;
      if (r)
        if (e._area1 && e._area2) {
          s = e._area1;
          l = e._area2
        } else {
          s = THREE.GeometryUtils.triangleArea(i, n, a);
          l = THREE.GeometryUtils.triangleArea(n, o, a);
          e._area1 = s;
          e._area2 = l
        }
      else s = THREE.GeometryUtils.triangleArea(i, n, a), l = THREE.GeometryUtils.triangleArea(n, o, a);
      var c = THREE.GeometryUtils.random() * (s + l);
      return s > c ? THREE.GeometryUtils.randomPointInTriangle(i, n, a) : THREE.GeometryUtils.randomPointInTriangle(n, o, a)
    }
  },
  randomPointsInGeometry: function(e, t) {
    function r(e) {
      function t(r, i) {
        if (r > i) return r;
        var n = r + Math.floor((i - r) / 2);
        return p[n] > e ? t(r, n - 1) : p[n] < e ? t(n + 1, i) : n
      }
      var r = t(0, p.length - 1);
      return r
    }
    var i, n, o, a, s, l, c = e.faces,
      h = e.vertices,
      u = c.length,
      f = 0,
      p = [];
    for (n = 0; u > n; n++) {
      i = c[n];
      if (i instanceof THREE.Face3) {
        o = h[i.a];
        a = h[i.b];
        s = h[i.c];
        i._area = THREE.GeometryUtils.triangleArea(o, a, s)
      } else if (i instanceof THREE.Face4) {
        o = h[i.a];
        a = h[i.b];
        s = h[i.c];
        l = h[i.d];
        i._area1 = THREE.GeometryUtils.triangleArea(o, a, l);
        i._area2 = THREE.GeometryUtils.triangleArea(a, s, l);
        i._area = i._area1 + i._area2
      }
      f += i._area;
      p[n] = f
    }
    var d, m, E = [],
      g = {};
    for (n = 0; t > n; n++) {
      d = THREE.GeometryUtils.random() * f;
      m = r(d);
      E[n] = THREE.GeometryUtils.randomPointInFace(c[m], e, !0);
      g[m] ? g[m] += 1 : g[m] = 1
    }
    return E
  },
  triangleArea: function(e, t, r) {
    var i = THREE.GeometryUtils.__v1,
      n = THREE.GeometryUtils.__v2;
    i.subVectors(t, e);
    n.subVectors(r, e);
    i.cross(n);
    return .5 * i.length()
  },
  center: function(e) {
    e.computeBoundingBox();
    var t = e.boundingBox,
      r = new THREE.Vector3;
    r.addVectors(t.min, t.max);
    r.multiplyScalar(-.5);
    e.applyMatrix((new THREE.Matrix4).makeTranslation(r.x, r.y, r.z));
    e.computeBoundingBox();
    return r
  },
  normalizeUVs: function(e) {
    for (var t = e.faceVertexUvs[0], r = 0, i = t.length; i > r; r++)
      for (var n = t[r], o = 0, a = n.length; a > o; o++) {
        1 !== n[o].x && (n[o].x = n[o].x - Math.floor(n[o].x));
        1 !== n[o].y && (n[o].y = n[o].y - Math.floor(n[o].y))
      }
  },
  triangulateQuads: function(e) {
    var t, r, i, n, o = [],
      a = [],
      s = [];
    for (t = 0, r = e.faceUvs.length; r > t; t++) a[t] = [];
    for (t = 0, r = e.faceVertexUvs.length; r > t; t++) s[t] = [];
    for (t = 0, r = e.faces.length; r > t; t++) {
      var l = e.faces[t];
      if (l instanceof THREE.Face4) {
        var c = l.a,
          h = l.b,
          u = l.c,
          f = l.d,
          p = new THREE.Face3,
          d = new THREE.Face3;
        p.color.copy(l.color);
        d.color.copy(l.color);
        p.materialIndex = l.materialIndex;
        d.materialIndex = l.materialIndex;
        p.a = c;
        p.b = h;
        p.c = f;
        d.a = h;
        d.b = u;
        d.c = f;
        if (4 === l.vertexColors.length) {
          p.vertexColors[0] = l.vertexColors[0].clone();
          p.vertexColors[1] = l.vertexColors[1].clone();
          p.vertexColors[2] = l.vertexColors[3].clone();
          d.vertexColors[0] = l.vertexColors[1].clone();
          d.vertexColors[1] = l.vertexColors[2].clone();
          d.vertexColors[2] = l.vertexColors[3].clone()
        }
        o.push(p, d);
        for (i = 0, n = e.faceVertexUvs.length; n > i; i++)
          if (e.faceVertexUvs[i].length) {
            var m = e.faceVertexUvs[i][t],
              E = m[0],
              g = m[1],
              v = m[2],
              y = m[3],
              T = [E.clone(), g.clone(), y.clone()],
              R = [g.clone(), v.clone(), y.clone()];
            s[i].push(T, R)
          }
        for (i = 0, n = e.faceUvs.length; n > i; i++)
          if (e.faceUvs[i].length) {
            var x = e.faceUvs[i][t];
            a[i].push(x, x)
          }
      } else {
        o.push(l);
        for (i = 0, n = e.faceUvs.length; n > i; i++) a[i].push(e.faceUvs[i][t]);
        for (i = 0, n = e.faceVertexUvs.length; n > i; i++) s[i].push(e.faceVertexUvs[i][t])
      }
    }
    e.faces = o;
    e.faceUvs = a;
    e.faceVertexUvs = s;
    e.computeCentroids();
    e.computeFaceNormals();
    e.computeVertexNormals();
    e.hasTangents && e.computeTangents()
  },
  setMaterialIndex: function(e, t, r, i) {
    for (var n = e.faces, o = r || 0, a = i || n.length - 1, s = o; a >= s; s++) n[s].materialIndex = t
  }
};
THREE.GeometryUtils.random = THREE.Math.random16;
THREE.GeometryUtils.__v1 = new THREE.Vector3;
THREE.GeometryUtils.__v2 = new THREE.Vector3;
THREE.ImageUtils = {
  crossOrigin: "anonymous",
  loadTexture: function(e, t, r, i) {
    var n = new Image,
      o = new THREE.Texture(n, t),
      a = new THREE.ImageLoader;
    a.addEventListener("load", function(e) {
      o.image = e.content;
      o.needsUpdate = !0;
      r && r(o)
    });
    a.addEventListener("error", function(e) {
      i && i(e.message)
    });
    a.crossOrigin = this.crossOrigin;
    a.load(e, n);
    o.sourceFile = e;
    return o
  },
  loadCompressedTexture: function(e, t, r, i) {
    var n = new THREE.CompressedTexture;
    n.mapping = t;
    var o = new XMLHttpRequest;
    o.onload = function() {
      var e = o.response,
        t = THREE.ImageUtils.parseDDS(e, !0);
      n.format = t.format;
      n.mipmaps = t.mipmaps;
      n.image.width = t.width;
      n.image.height = t.height;
      n.generateMipmaps = !1;
      n.needsUpdate = !0;
      r && r(n)
    };
    o.onerror = i;
    o.open("GET", e, !0);
    o.responseType = "arraybuffer";
    o.send(null);
    return n
  },
  loadTextureCube: function(e, t, r, i) {
    var n = [];
    n.loadCount = 0;
    var o = new THREE.Texture;
    o.image = n;
    void 0 !== t && (o.mapping = t);
    o.flipY = !1;
    for (var a = 0, s = e.length; s > a; ++a) {
      var l = new Image;
      n[a] = l;
      l.onload = function() {
        n.loadCount += 1;
        if (6 === n.loadCount) {
          o.needsUpdate = !0;
          r && r(o)
        }
      };
      l.onerror = i;
      l.crossOrigin = this.crossOrigin;
      l.src = e[a]
    }
    return o
  },
  loadCompressedTextureCube: function(e, t, r, i) {
    var n = [];
    n.loadCount = 0;
    var o = new THREE.CompressedTexture;
    o.image = n;
    void 0 !== t && (o.mapping = t);
    o.flipY = !1;
    o.generateMipmaps = !1;
    var a = function(e, t) {
      return function() {
        var i = e.response,
          a = THREE.ImageUtils.parseDDS(i, !0);
        t.format = a.format;
        t.mipmaps = a.mipmaps;
        t.width = a.width;
        t.height = a.height;
        n.loadCount += 1;
        if (6 === n.loadCount) {
          o.format = a.format;
          o.needsUpdate = !0;
          r && r(o)
        }
      }
    };
    if (e instanceof Array)
      for (var s = 0, l = e.length; l > s; ++s) {
        var c = {};
        n[s] = c;
        var h = new XMLHttpRequest;
        h.onload = a(h, c);
        h.onerror = i;
        var u = e[s];
        h.open("GET", u, !0);
        h.responseType = "arraybuffer";
        h.send(null)
      } else {
        var u = e,
          h = new XMLHttpRequest;
        h.onload = function() {
          var e = h.response,
            t = THREE.ImageUtils.parseDDS(e, !0);
          if (t.isCubemap) {
            for (var i = t.mipmaps.length / t.mipmapCount, a = 0; i > a; a++) {
              n[a] = {
                mipmaps: []
              };
              for (var s = 0; s < t.mipmapCount; s++) {
                n[a].mipmaps.push(t.mipmaps[a * t.mipmapCount + s]);
                n[a].format = t.format;
                n[a].width = t.width;
                n[a].height = t.height
              }
            }
            o.format = t.format;
            o.needsUpdate = !0;
            r && r(o)
          }
        };
        h.onerror = i;
        h.open("GET", u, !0);
        h.responseType = "arraybuffer";
        h.send(null)
      }
    return o
  },
  parseDDS: function(e, t) {
    function r(e) {
      return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24)
    }

    function i(e) {
      return String.fromCharCode(255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255)
    }
    var n = {
        mipmaps: [],
        width: 0,
        height: 0,
        format: null,
        mipmapCount: 1
      },
      o = 542327876,
      a = 131072,
      s = 512,
      l = 4,
      c = r("DXT1"),
      h = r("DXT3"),
      u = r("DXT5"),
      f = 31,
      p = 0,
      d = 1,
      m = 2,
      E = 3,
      g = 4,
      v = 7,
      y = 20,
      T = 21,
      R = 28,
      x = new Int32Array(e, 0, f);
    if (x[p] !== o) {
      console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header");
      return n
    }
    if (!x[y] & l) {
      console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code");
      return n
    }
    var w, H = x[T];
    switch (H) {
      case c:
        w = 8;
        n.format = THREE.RGB_S3TC_DXT1_Format;
        break;
      case h:
        w = 16;
        n.format = THREE.RGBA_S3TC_DXT3_Format;
        break;
      case u:
        w = 16;
        n.format = THREE.RGBA_S3TC_DXT5_Format;
        break;
      default:
        console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ", i(H));
        return n
    }
    n.mipmapCount = 1;
    x[m] & a && t !== !1 && (n.mipmapCount = Math.max(1, x[v]));
    n.isCubemap = x[R] & s ? !0 : !1;
    n.width = x[g];
    n.height = x[E];
    for (var b = x[d] + 4, _ = n.width, S = n.height, M = n.isCubemap ? 6 : 1, C = 0; M > C; C++) {
      for (var A = 0; A < n.mipmapCount; A++) {
        var L = Math.max(4, _) / 4 * Math.max(4, S) / 4 * w,
          D = new Uint8Array(e, b, L),
          P = {
            data: D,
            width: _,
            height: S
          };
        n.mipmaps.push(P);
        b += L;
        _ = Math.max(.5 * _, 1);
        S = Math.max(.5 * S, 1)
      }
      _ = n.width;
      S = n.height
    }
    return n
  },
  getNormalMap: function(e, t) {
    var r = function(e, t) {
        return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
      },
      i = function(e, t) {
        return [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
      },
      n = function(e) {
        var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
        return [e[0] / t, e[1] / t, e[2] / t]
      };
    t = 1 | t;
    var o = e.width,
      a = e.height,
      s = document.createElement("canvas");
    s.width = o;
    s.height = a;
    var l = s.getContext("2d");
    l.drawImage(e, 0, 0);
    for (var c = l.getImageData(0, 0, o, a).data, h = l.createImageData(o, a), u = h.data, f = 0; o > f; f++)
      for (var p = 0; a > p; p++) {
        var d = 0 > p - 1 ? 0 : p - 1,
          m = p + 1 > a - 1 ? a - 1 : p + 1,
          E = 0 > f - 1 ? 0 : f - 1,
          g = f + 1 > o - 1 ? o - 1 : f + 1,
          v = [],
          y = [0, 0, c[4 * (p * o + f)] / 255 * t];
        v.push([-1, 0, c[4 * (p * o + E)] / 255 * t]);
        v.push([-1, -1, c[4 * (d * o + E)] / 255 * t]);
        v.push([0, -1, c[4 * (d * o + f)] / 255 * t]);
        v.push([1, -1, c[4 * (d * o + g)] / 255 * t]);
        v.push([1, 0, c[4 * (p * o + g)] / 255 * t]);
        v.push([1, 1, c[4 * (m * o + g)] / 255 * t]);
        v.push([0, 1, c[4 * (m * o + f)] / 255 * t]);
        v.push([-1, 1, c[4 * (m * o + E)] / 255 * t]);
        for (var T = [], R = v.length, x = 0; R > x; x++) {
          var w = v[x],
            H = v[(x + 1) % R];
          w = i(w, y);
          H = i(H, y);
          T.push(n(r(w, H)))
        }
        for (var b = [0, 0, 0], x = 0; x < T.length; x++) {
          b[0] += T[x][0];
          b[1] += T[x][1];
          b[2] += T[x][2]
        }
        b[0] /= T.length;
        b[1] /= T.length;
        b[2] /= T.length;
        var _ = 4 * (p * o + f);
        u[_] = (b[0] + 1) / 2 * 255 | 0;
        u[_ + 1] = (b[1] + 1) / 2 * 255 | 0;
        u[_ + 2] = 255 * b[2] | 0;
        u[_ + 3] = 255
      }
    l.putImageData(h, 0, 0);
    return s
  },
  generateDataTexture: function(e, t, r) {
    for (var i = e * t, n = new Uint8Array(3 * i), o = Math.floor(255 * r.r), a = Math.floor(255 * r.g), s = Math.floor(255 * r.b), l = 0; i > l; l++) {
      n[3 * l] = o;
      n[3 * l + 1] = a;
      n[3 * l + 2] = s
    }
    var c = new THREE.DataTexture(n, e, t, THREE.RGBFormat);
    c.needsUpdate = !0;
    return c
  }
};
THREE.SceneUtils = {
  createMultiMaterialObject: function(e, t) {
    for (var r = new THREE.Object3D, i = 0, n = t.length; n > i; i++) r.add(new THREE.Mesh(e, t[i]));
    return r
  },
  detach: function(e, t, r) {
    e.applyMatrix(t.matrixWorld);
    t.remove(e);
    r.add(e)
  },
  attach: function(e, t, r) {
    var i = new THREE.Matrix4;
    i.getInverse(r.matrixWorld);
    e.applyMatrix(i);
    t.remove(e);
    r.add(e)
  }
};
THREE.FontUtils = {
  faces: {},
  face: "helvetiker",
  weight: "normal",
  style: "normal",
  size: 150,
  divisions: 10,
  getFace: function() {
    return this.faces[this.face][this.weight][this.style]
  },
  loadFace: function(e) {
    var t = e.familyName.toLowerCase(),
      r = this;
    r.faces[t] = r.faces[t] || {};
    r.faces[t][e.cssFontWeight] = r.faces[t][e.cssFontWeight] || {};
    r.faces[t][e.cssFontWeight][e.cssFontStyle] = e;
    r.faces[t][e.cssFontWeight][e.cssFontStyle] = e;
    return e
  },
  drawText: function(e) {
    var t, r = this.getFace(),
      i = this.size / r.resolution,
      n = 0,
      o = String(e).split(""),
      a = o.length,
      s = [];
    for (t = 0; a > t; t++) {
      var l = new THREE.Path,
        c = this.extractGlyphPoints(o[t], r, i, n, l);
      n += c.offset;
      s.push(c.path)
    }
    var h = n / 2;
    return {
      paths: s,
      offset: h
    }
  },
  extractGlyphPoints: function(e, t, r, i, n) {
    var o, a, s, l, c, h, u, f, p, d, m, E, g, v, y, T, R, x, w, H = [],
      b = t.glyphs[e] || t.glyphs["?"];
    if (b) {
      if (b.o) {
        l = b._cachedOutline || (b._cachedOutline = b.o.split(" "));
        h = l.length;
        u = r;
        f = r;
        for (o = 0; h > o;) {
          c = l[o++];
          switch (c) {
            case "m":
              p = l[o++] * u + i;
              d = l[o++] * f;
              n.moveTo(p, d);
              break;
            case "l":
              p = l[o++] * u + i;
              d = l[o++] * f;
              n.lineTo(p, d);
              break;
            case "q":
              m = l[o++] * u + i;
              E = l[o++] * f;
              y = l[o++] * u + i;
              T = l[o++] * f;
              n.quadraticCurveTo(y, T, m, E);
              w = H[H.length - 1];
              if (w) {
                g = w.x;
                v = w.y;
                for (a = 1, s = this.divisions; s >= a; a++) {
                  var _ = a / s;
                  THREE.Shape.Utils.b2(_, g, y, m), THREE.Shape.Utils.b2(_, v, T, E)
                }
              }
              break;
            case "b":
              m = l[o++] * u + i;
              E = l[o++] * f;
              y = l[o++] * u + i;
              T = l[o++] * -f;
              R = l[o++] * u + i;
              x = l[o++] * -f;
              n.bezierCurveTo(m, E, y, T, R, x);
              w = H[H.length - 1];
              if (w) {
                g = w.x;
                v = w.y;
                for (a = 1, s = this.divisions; s >= a; a++) {
                  var _ = a / s;
                  THREE.Shape.Utils.b3(_, g, y, R, m), THREE.Shape.Utils.b3(_, v, T, x, E)
                }
              }
          }
        }
      }
      return {
        offset: b.ha * r,
        path: n
      }
    }
  }
};
THREE.FontUtils.generateShapes = function(e, t) {
  t = t || {};
  var r = void 0 !== t.size ? t.size : 100,
    i = void 0 !== t.curveSegments ? t.curveSegments : 4,
    n = void 0 !== t.font ? t.font : "helvetiker",
    o = void 0 !== t.weight ? t.weight : "normal",
    a = void 0 !== t.style ? t.style : "normal";
  THREE.FontUtils.size = r;
  THREE.FontUtils.divisions = i;
  THREE.FontUtils.face = n;
  THREE.FontUtils.weight = o;
  THREE.FontUtils.style = a;
  for (var s = THREE.FontUtils.drawText(e), l = s.paths, c = [], h = 0, u = l.length; u > h; h++) Array.prototype.push.apply(c, l[h].toShapes());
  return c
};
! function(e) {
  var t = 1e-10,
    r = function(e, t) {
      var r = e.length;
      if (3 > r) return null;
      var o, a, s, l = [],
        c = [],
        h = [];
      if (i(e) > 0)
        for (a = 0; r > a; a++) c[a] = a;
      else
        for (a = 0; r > a; a++) c[a] = r - 1 - a;
      var u = r,
        f = 2 * u;
      for (a = u - 1; u > 2;) {
        if (f-- <= 0) {
          console.log("Warning, unable to triangulate polygon!");
          return t ? h : l
        }
        o = a;
        o >= u && (o = 0);
        a = o + 1;
        a >= u && (a = 0);
        s = a + 1;
        s >= u && (s = 0);
        if (n(e, o, a, s, u, c)) {
          var p, d, m, E, g;
          p = c[o];
          d = c[a];
          m = c[s];
          l.push([e[p], e[d], e[m]]);
          h.push([c[o], c[a], c[s]]);
          for (E = a, g = a + 1; u > g; E++, g++) c[E] = c[g];
          u--;
          f = 2 * u
        }
      }
      return t ? h : l
    },
    i = function(e) {
      for (var t = e.length, r = 0, i = t - 1, n = 0; t > n; i = n++) r += e[i].x * e[n].y - e[n].x * e[i].y;
      return .5 * r
    },
    n = function(e, r, i, n, o, a) {
      var s, l, c, h, u, f, p, d, m;
      l = e[a[r]].x;
      c = e[a[r]].y;
      h = e[a[i]].x;
      u = e[a[i]].y;
      f = e[a[n]].x;
      p = e[a[n]].y;
      if (t > (h - l) * (p - c) - (u - c) * (f - l)) return !1;
      var E, g, v, y, T, R, x, w, H, b, _, S, M, C, A;
      E = f - h;
      g = p - u;
      v = l - f;
      y = c - p;
      T = h - l;
      R = u - c;
      for (s = 0; o > s; s++)
        if (s !== r && s !== i && s !== n) {
          d = e[a[s]].x;
          m = e[a[s]].y;
          x = d - l;
          w = m - c;
          H = d - h;
          b = m - u;
          _ = d - f;
          S = m - p;
          A = E * b - g * H;
          M = T * w - R * x;
          C = v * S - y * _;
          if (A >= 0 && C >= 0 && M >= 0) return !1
        }
      return !0
    };
  e.Triangulate = r;
  e.Triangulate.area = i;
  return e
}(THREE.FontUtils);
self._typeface_js = {
  faces: THREE.FontUtils.faces,
  loadFace: THREE.FontUtils.loadFace
};
THREE.typeface_js = self._typeface_js;
THREE.Curve = function() {};
THREE.Curve.prototype.getPoint = function(e) {
  console.log("Warning, getPoint() not implemented!");
  return null
};
THREE.Curve.prototype.getPointAt = function(e) {
  var t = this.getUtoTmapping(e);
  return this.getPoint(t)
};
THREE.Curve.prototype.getPoints = function(e) {
  e || (e = 5);
  var t, r = [];
  for (t = 0; e >= t; t++) r.push(this.getPoint(t / e));
  return r
};
THREE.Curve.prototype.getSpacedPoints = function(e) {
  e || (e = 5);
  var t, r = [];
  for (t = 0; e >= t; t++) r.push(this.getPointAt(t / e));
  return r
};
THREE.Curve.prototype.getLength = function() {
  var e = this.getLengths();
  return e[e.length - 1]
};
THREE.Curve.prototype.getLengths = function(e) {
  e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
  if (this.cacheArcLengths && this.cacheArcLengths.length == e + 1 && !this.needsUpdate) return this.cacheArcLengths;
  this.needsUpdate = !1;
  var t, r, i = [],
    n = this.getPoint(0),
    o = 0;
  i.push(0);
  for (r = 1; e >= r; r++) {
    t = this.getPoint(r / e);
    o += t.distanceTo(n);
    i.push(o);
    n = t
  }
  this.cacheArcLengths = i;
  return i
};
THREE.Curve.prototype.updateArcLengths = function() {
  this.needsUpdate = !0;
  this.getLengths()
};
THREE.Curve.prototype.getUtoTmapping = function(e, t) {
  var r, i = this.getLengths(),
    n = 0,
    o = i.length;
  r = t ? t : e * i[o - 1];
  for (var a, s = 0, l = o - 1; l >= s;) {
    n = Math.floor(s + (l - s) / 2);
    a = i[n] - r;
    if (0 > a) s = n + 1;
    else {
      if (!(a > 0)) {
        l = n;
        break
      }
      l = n - 1
    }
  }
  n = l;
  if (i[n] == r) {
    var c = n / (o - 1);
    return c
  }
  var h = i[n],
    u = i[n + 1],
    f = u - h,
    p = (r - h) / f,
    c = (n + p) / (o - 1);
  return c
};
THREE.Curve.prototype.getTangent = function(e) {
  var t = 1e-4,
    r = e - t,
    i = e + t;
  0 > r && (r = 0);
  i > 1 && (i = 1);
  var n = this.getPoint(r),
    o = this.getPoint(i),
    a = o.clone().sub(n);
  return a.normalize()
};
THREE.Curve.prototype.getTangentAt = function(e) {
  var t = this.getUtoTmapping(e);
  return this.getTangent(t)
};
THREE.LineCurve = function(e, t) {
  this.v1 = e;
  this.v2 = t
};
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.getPoint = function(e) {
  var t = this.v2.clone().sub(this.v1);
  t.multiplyScalar(e).add(this.v1);
  return t
};
THREE.LineCurve.prototype.getPointAt = function(e) {
  return this.getPoint(e)
};
THREE.LineCurve.prototype.getTangent = function(e) {
  var t = this.v2.clone().sub(this.v1);
  return t.normalize()
};
THREE.QuadraticBezierCurve = function(e, t, r) {
  this.v0 = e;
  this.v1 = t;
  this.v2 = r
};
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.getPoint = function(e) {
  var t, r;
  t = THREE.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x);
  r = THREE.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y);
  return new THREE.Vector2(t, r)
};
THREE.QuadraticBezierCurve.prototype.getTangent = function(e) {
  var t, r;
  t = THREE.Curve.Utils.tangentQuadraticBezier(e, this.v0.x, this.v1.x, this.v2.x);
  r = THREE.Curve.Utils.tangentQuadraticBezier(e, this.v0.y, this.v1.y, this.v2.y);
  var i = new THREE.Vector2(t, r);
  i.normalize();
  return i
};
THREE.CubicBezierCurve = function(e, t, r, i) {
  this.v0 = e;
  this.v1 = t;
  this.v2 = r;
  this.v3 = i
};
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.getPoint = function(e) {
  var t, r;
  t = THREE.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  r = THREE.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  return new THREE.Vector2(t, r)
};
THREE.CubicBezierCurve.prototype.getTangent = function(e) {
  var t, r;
  t = THREE.Curve.Utils.tangentCubicBezier(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  r = THREE.Curve.Utils.tangentCubicBezier(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  var i = new THREE.Vector2(t, r);
  i.normalize();
  return i
};
THREE.SplineCurve = function(e) {
  this.points = void 0 == e ? [] : e
};
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.getPoint = function(e) {
  var t, r, i, n = new THREE.Vector2,
    o = [],
    a = this.points;
  t = (a.length - 1) * e;
  r = Math.floor(t);
  i = t - r;
  o[0] = 0 == r ? r : r - 1;
  o[1] = r;
  o[2] = r > a.length - 2 ? a.length - 1 : r + 1;
  o[3] = r > a.length - 3 ? a.length - 1 : r + 2;
  n.x = THREE.Curve.Utils.interpolate(a[o[0]].x, a[o[1]].x, a[o[2]].x, a[o[3]].x, i);
  n.y = THREE.Curve.Utils.interpolate(a[o[0]].y, a[o[1]].y, a[o[2]].y, a[o[3]].y, i);
  return n
};
THREE.EllipseCurve = function(e, t, r, i, n, o, a) {
  this.aX = e;
  this.aY = t;
  this.xRadius = r;
  this.yRadius = i;
  this.aStartAngle = n;
  this.aEndAngle = o;
  this.aClockwise = a
};
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint = function(e) {
  var t = this.aEndAngle - this.aStartAngle;
  this.aClockwise || (e = 1 - e);
  var r = this.aStartAngle + e * t,
    i = this.aX + this.xRadius * Math.cos(r),
    n = this.aY + this.yRadius * Math.sin(r);
  return new THREE.Vector2(i, n)
};
THREE.ArcCurve = function(e, t, r, i, n, o) {
  THREE.EllipseCurve.call(this, e, t, r, r, i, n, o)
};
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype);
THREE.Curve.Utils = {
  tangentQuadraticBezier: function(e, t, r, i) {
    return 2 * (1 - e) * (r - t) + 2 * e * (i - r)
  },
  tangentCubicBezier: function(e, t, r, i, n) {
    return -3 * t * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) - 6 * e * r * (1 - e) + 6 * e * i * (1 - e) - 3 * e * e * i + 3 * e * e * n
  },
  tangentSpline: function(e, t, r, i, n) {
    var o = 6 * e * e - 6 * e,
      a = 3 * e * e - 4 * e + 1,
      s = -6 * e * e + 6 * e,
      l = 3 * e * e - 2 * e;
    return o + a + s + l
  },
  interpolate: function(e, t, r, i, n) {
    var o = .5 * (r - e),
      a = .5 * (i - t),
      s = n * n,
      l = n * s;
    return (2 * t - 2 * r + o + a) * l + (-3 * t + 3 * r - 2 * o - a) * s + o * n + t
  }
};
THREE.Curve.create = function(e, t) {
  e.prototype = Object.create(THREE.Curve.prototype);
  e.prototype.getPoint = t;
  return e
};
THREE.LineCurve3 = THREE.Curve.create(function(e, t) {
  this.v1 = e;
  this.v2 = t
}, function(e) {
  var t = new THREE.Vector3;
  t.subVectors(this.v2, this.v1);
  t.multiplyScalar(e);
  t.add(this.v1);
  return t
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(e, t, r) {
  this.v0 = e;
  this.v1 = t;
  this.v2 = r
}, function(e) {
  var t, r, i;
  t = THREE.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x);
  r = THREE.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y);
  i = THREE.Shape.Utils.b2(e, this.v0.z, this.v1.z, this.v2.z);
  return new THREE.Vector3(t, r, i)
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function(e, t, r, i) {
  this.v0 = e;
  this.v1 = t;
  this.v2 = r;
  this.v3 = i
}, function(e) {
  var t, r, i;
  t = THREE.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  r = THREE.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  i = THREE.Shape.Utils.b3(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z);
  return new THREE.Vector3(t, r, i)
});
THREE.SplineCurve3 = THREE.Curve.create(function(e) {
  this.points = void 0 == e ? [] : e
}, function(e) {
  var t, r, i, n = new THREE.Vector3,
    o = [],
    a = this.points;
  t = (a.length - 1) * e;
  r = Math.floor(t);
  i = t - r;
  o[0] = 0 == r ? r : r - 1;
  o[1] = r;
  o[2] = r > a.length - 2 ? a.length - 1 : r + 1;
  o[3] = r > a.length - 3 ? a.length - 1 : r + 2;
  var s = a[o[0]],
    l = a[o[1]],
    c = a[o[2]],
    h = a[o[3]];
  n.x = THREE.Curve.Utils.interpolate(s.x, l.x, c.x, h.x, i);
  n.y = THREE.Curve.Utils.interpolate(s.y, l.y, c.y, h.y, i);
  n.z = THREE.Curve.Utils.interpolate(s.z, l.z, c.z, h.z, i);
  return n
});
THREE.ClosedSplineCurve3 = THREE.Curve.create(function(e) {
  this.points = void 0 == e ? [] : e
}, function(e) {
  var t, r, i, n = new THREE.Vector3,
    o = [],
    a = this.points;
  t = (a.length - 0) * e;
  r = Math.floor(t);
  i = t - r;
  r += r > 0 ? 0 : (Math.floor(Math.abs(r) / a.length) + 1) * a.length;
  o[0] = (r - 1) % a.length;
  o[1] = r % a.length;
  o[2] = (r + 1) % a.length;
  o[3] = (r + 2) % a.length;
  n.x = THREE.Curve.Utils.interpolate(a[o[0]].x, a[o[1]].x, a[o[2]].x, a[o[3]].x, i);
  n.y = THREE.Curve.Utils.interpolate(a[o[0]].y, a[o[1]].y, a[o[2]].y, a[o[3]].y, i);
  n.z = THREE.Curve.Utils.interpolate(a[o[0]].z, a[o[1]].z, a[o[2]].z, a[o[3]].z, i);
  return n
});
THREE.CurvePath = function() {
  this.curves = [];
  this.bends = [];
  this.autoClose = !1
};
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype);
THREE.CurvePath.prototype.add = function(e) {
  this.curves.push(e)
};
THREE.CurvePath.prototype.checkConnection = function() {};
THREE.CurvePath.prototype.closePath = function() {
  var e = this.curves[0].getPoint(0),
    t = this.curves[this.curves.length - 1].getPoint(1);
  e.equals(t) || this.curves.push(new THREE.LineCurve(t, e))
};
THREE.CurvePath.prototype.getPoint = function(e) {
  for (var t, r, i = e * this.getLength(), n = this.getCurveLengths(), o = 0; o < n.length;) {
    if (n[o] >= i) {
      t = n[o] - i;
      r = this.curves[o];
      var a = 1 - t / r.getLength();
      return r.getPointAt(a)
    }
    o++
  }
  return null
};
THREE.CurvePath.prototype.getLength = function() {
  var e = this.getCurveLengths();
  return e[e.length - 1]
};
THREE.CurvePath.prototype.getCurveLengths = function() {
  if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
  var e, t = [],
    r = 0,
    i = this.curves.length;
  for (e = 0; i > e; e++) {
    r += this.curves[e].getLength();
    t.push(r)
  }
  this.cacheLengths = t;
  return t
};
THREE.CurvePath.prototype.getBoundingBox = function() {
  var e, t, r, i, n, o, a = this.getPoints();
  e = t = Number.NEGATIVE_INFINITY;
  i = n = Number.POSITIVE_INFINITY;
  var s, l, c, h, u = a[0] instanceof THREE.Vector3;
  h = u ? new THREE.Vector3 : new THREE.Vector2;
  for (l = 0, c = a.length; c > l; l++) {
    s = a[l];
    s.x > e ? e = s.x : s.x < i && (i = s.x);
    s.y > t ? t = s.y : s.y < n && (n = s.y);
    u && (s.z > r ? r = s.z : s.z < o && (o = s.z));
    h.add(s)
  }
  var f = {
    minX: i,
    minY: n,
    maxX: e,
    maxY: t,
    centroid: h.divideScalar(c)
  };
  if (u) {
    f.maxZ = r;
    f.minZ = o
  }
  return f
};
THREE.CurvePath.prototype.createPointsGeometry = function(e) {
  var t = this.getPoints(e, !0);
  return this.createGeometry(t)
};
THREE.CurvePath.prototype.createSpacedPointsGeometry = function(e) {
  var t = this.getSpacedPoints(e, !0);
  return this.createGeometry(t)
};
THREE.CurvePath.prototype.createGeometry = function(e) {
  for (var t = new THREE.Geometry, r = 0; r < e.length; r++) t.vertices.push(new THREE.Vector3(e[r].x, e[r].y, e[r].z || 0));
  return t
};
THREE.CurvePath.prototype.addWrapPath = function(e) {
  this.bends.push(e)
};
THREE.CurvePath.prototype.getTransformedPoints = function(e, t) {
  var r, i, n = this.getPoints(e);
  t || (t = this.bends);
  for (r = 0, i = t.length; i > r; r++) n = this.getWrapPoints(n, t[r]);
  return n
};
THREE.CurvePath.prototype.getTransformedSpacedPoints = function(e, t) {
  var r, i, n = this.getSpacedPoints(e);
  t || (t = this.bends);
  for (r = 0, i = t.length; i > r; r++) n = this.getWrapPoints(n, t[r]);
  return n
};
THREE.CurvePath.prototype.getWrapPoints = function(e, t) {
  var r, i, n, o, a, s, l = this.getBoundingBox();
  for (r = 0, i = e.length; i > r; r++) {
    n = e[r];
    o = n.x;
    a = n.y;
    s = o / l.maxX;
    s = t.getUtoTmapping(s, o);
    var c = t.getPoint(s),
      h = t.getNormalVector(s).multiplyScalar(a);
    n.x = c.x + h.x;
    n.y = c.y + h.y
  }
  return e
};
THREE.Gyroscope = function() {
  THREE.Object3D.call(this)
};
THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld = function(e) {
  this.matrixAutoUpdate && this.updateMatrix();
  if (this.matrixWorldNeedsUpdate || e) {
    if (this.parent) {
      this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      this.matrixWorld.decompose(this.translationWorld, this.rotationWorld, this.scaleWorld);
      this.matrix.decompose(this.translationObject, this.rotationObject, this.scaleObject);
      this.matrixWorld.makeFromPositionQuaternionScale(this.translationWorld, this.rotationObject, this.scaleWorld)
    } else this.matrixWorld.copy(this.matrix);
    this.matrixWorldNeedsUpdate = !1;
    e = !0
  }
  for (var t = 0, r = this.children.length; r > t; t++) this.children[t].updateMatrixWorld(e)
};
THREE.Gyroscope.prototype.translationWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.translationObject = new THREE.Vector3;
THREE.Gyroscope.prototype.rotationWorld = new THREE.Quaternion;
THREE.Gyroscope.prototype.rotationObject = new THREE.Quaternion;
THREE.Gyroscope.prototype.scaleWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.scaleObject = new THREE.Vector3;
THREE.Path = function(e) {
  THREE.CurvePath.call(this);
  this.actions = [];
  e && this.fromPoints(e)
};
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype);
THREE.PathActions = {
  MOVE_TO: "moveTo",
  LINE_TO: "lineTo",
  QUADRATIC_CURVE_TO: "quadraticCurveTo",
  BEZIER_CURVE_TO: "bezierCurveTo",
  CSPLINE_THRU: "splineThru",
  ARC: "arc",
  ELLIPSE: "ellipse"
};
THREE.Path.prototype.fromPoints = function(e) {
  this.moveTo(e[0].x, e[0].y);
  for (var t = 1, r = e.length; r > t; t++) this.lineTo(e[t].x, e[t].y)
};
THREE.Path.prototype.moveTo = function(e, t) {
  var r = Array.prototype.slice.call(arguments);
  this.actions.push({
    action: THREE.PathActions.MOVE_TO,
    args: r
  })
};
THREE.Path.prototype.lineTo = function(e, t) {
  var r = Array.prototype.slice.call(arguments),
    i = this.actions[this.actions.length - 1].args,
    n = i[i.length - 2],
    o = i[i.length - 1],
    a = new THREE.LineCurve(new THREE.Vector2(n, o), new THREE.Vector2(e, t));
  this.curves.push(a);
  this.actions.push({
    action: THREE.PathActions.LINE_TO,
    args: r
  })
};
THREE.Path.prototype.quadraticCurveTo = function(e, t, r, i) {
  var n = Array.prototype.slice.call(arguments),
    o = this.actions[this.actions.length - 1].args,
    a = o[o.length - 2],
    s = o[o.length - 1],
    l = new THREE.QuadraticBezierCurve(new THREE.Vector2(a, s), new THREE.Vector2(e, t), new THREE.Vector2(r, i));
  this.curves.push(l);
  this.actions.push({
    action: THREE.PathActions.QUADRATIC_CURVE_TO,
    args: n
  })
};
THREE.Path.prototype.bezierCurveTo = function(e, t, r, i, n, o) {
  var a = Array.prototype.slice.call(arguments),
    s = this.actions[this.actions.length - 1].args,
    l = s[s.length - 2],
    c = s[s.length - 1],
    h = new THREE.CubicBezierCurve(new THREE.Vector2(l, c), new THREE.Vector2(e, t), new THREE.Vector2(r, i), new THREE.Vector2(n, o));
  this.curves.push(h);
  this.actions.push({
    action: THREE.PathActions.BEZIER_CURVE_TO,
    args: a
  })
};
THREE.Path.prototype.splineThru = function(e) {
  var t = Array.prototype.slice.call(arguments),
    r = this.actions[this.actions.length - 1].args,
    i = r[r.length - 2],
    n = r[r.length - 1],
    o = [new THREE.Vector2(i, n)];
  Array.prototype.push.apply(o, e);
  var a = new THREE.SplineCurve(o);
  this.curves.push(a);
  this.actions.push({
    action: THREE.PathActions.CSPLINE_THRU,
    args: t
  })
};
THREE.Path.prototype.arc = function(e, t, r, i, n, o) {
  var a = this.actions[this.actions.length - 1].args,
    s = a[a.length - 2],
    l = a[a.length - 1];
  this.absarc(e + s, t + l, r, i, n, o)
};
THREE.Path.prototype.absarc = function(e, t, r, i, n, o) {
  this.absellipse(e, t, r, r, i, n, o)
};
THREE.Path.prototype.ellipse = function(e, t, r, i, n, o, a) {
  var s = this.actions[this.actions.length - 1].args,
    l = s[s.length - 2],
    c = s[s.length - 1];
  this.absellipse(e + l, t + c, r, i, n, o, a)
};
THREE.Path.prototype.absellipse = function(e, t, r, i, n, o, a) {
  var s = Array.prototype.slice.call(arguments),
    l = new THREE.EllipseCurve(e, t, r, i, n, o, a);
  this.curves.push(l);
  var c = l.getPoint(a ? 1 : 0);
  s.push(c.x);
  s.push(c.y);
  this.actions.push({
    action: THREE.PathActions.ELLIPSE,
    args: s
  })
};
THREE.Path.prototype.getSpacedPoints = function(e, t) {
  e || (e = 40);
  for (var r = [], i = 0; e > i; i++) r.push(this.getPoint(i / e));
  return r
};
THREE.Path.prototype.getPoints = function(e, t) {
  if (this.useSpacedPoints) {
    console.log("tata");
    return this.getSpacedPoints(e, t)
  }
  e = e || 12;
  var r, i, n, o, a, s, l, c, h, u, f, p, d, m, E, g, v, y, T = [];
  for (r = 0, i = this.actions.length; i > r; r++) {
    n = this.actions[r];
    o = n.action;
    a = n.args;
    switch (o) {
      case THREE.PathActions.MOVE_TO:
        T.push(new THREE.Vector2(a[0], a[1]));
        break;
      case THREE.PathActions.LINE_TO:
        T.push(new THREE.Vector2(a[0], a[1]));
        break;
      case THREE.PathActions.QUADRATIC_CURVE_TO:
        s = a[2];
        l = a[3];
        u = a[0];
        f = a[1];
        if (T.length > 0) {
          m = T[T.length - 1];
          p = m.x;
          d = m.y
        } else {
          m = this.actions[r - 1].args;
          p = m[m.length - 2];
          d = m[m.length - 1]
        }
        for (E = 1; e >= E; E++) {
          g = E / e;
          v = THREE.Shape.Utils.b2(g, p, u, s);
          y = THREE.Shape.Utils.b2(g, d, f, l);
          T.push(new THREE.Vector2(v, y))
        }
        break;
      case THREE.PathActions.BEZIER_CURVE_TO:
        s = a[4];
        l = a[5];
        u = a[0];
        f = a[1];
        c = a[2];
        h = a[3];
        if (T.length > 0) {
          m = T[T.length - 1];
          p = m.x;
          d = m.y
        } else {
          m = this.actions[r - 1].args;
          p = m[m.length - 2];
          d = m[m.length - 1]
        }
        for (E = 1; e >= E; E++) {
          g = E / e;
          v = THREE.Shape.Utils.b3(g, p, u, c, s);
          y = THREE.Shape.Utils.b3(g, d, f, h, l);
          T.push(new THREE.Vector2(v, y))
        }
        break;
      case THREE.PathActions.CSPLINE_THRU:
        m = this.actions[r - 1].args;
        var R = new THREE.Vector2(m[m.length - 2], m[m.length - 1]),
          x = [R],
          w = e * a[0].length;
        x = x.concat(a[0]);
        var H = new THREE.SplineCurve(x);
        for (E = 1; w >= E; E++) T.push(H.getPointAt(E / w));
        break;
      case THREE.PathActions.ARC:
        var b, _ = a[0],
          S = a[1],
          M = a[2],
          C = a[3],
          A = a[4],
          L = !!a[5],
          D = A - C,
          P = 2 * e;
        for (E = 1; P >= E; E++) {
          g = E / P;
          L || (g = 1 - g);
          b = C + g * D;
          v = _ + M * Math.cos(b);
          y = S + M * Math.sin(b);
          T.push(new THREE.Vector2(v, y))
        }
        break;
      case THREE.PathActions.ELLIPSE:
        var b, _ = a[0],
          S = a[1],
          F = a[2],
          N = a[3],
          C = a[4],
          A = a[5],
          L = !!a[6],
          D = A - C,
          P = 2 * e;
        for (E = 1; P >= E; E++) {
          g = E / P;
          L || (g = 1 - g);
          b = C + g * D;
          v = _ + F * Math.cos(b);
          y = S + N * Math.sin(b);
          T.push(new THREE.Vector2(v, y))
        }
    }
  }
  var U = T[T.length - 1],
    V = 1e-10;
  Math.abs(U.x - T[0].x) < V && Math.abs(U.y - T[0].y) < V && T.splice(T.length - 1, 1);
  t && T.push(T[0]);
  return T
};
THREE.Path.prototype.toShapes = function() {
  var e, t, r, i, n, o = [],
    a = new THREE.Path;
  for (e = 0, t = this.actions.length; t > e; e++) {
    r = this.actions[e];
    n = r.args;
    i = r.action;
    if (i == THREE.PathActions.MOVE_TO && 0 != a.actions.length) {
      o.push(a);
      a = new THREE.Path
    }
    a[i].apply(a, n)
  }
  0 != a.actions.length && o.push(a);
  if (0 == o.length) return [];
  var s, l, c = [],
    h = !THREE.Shape.Utils.isClockWise(o[0].getPoints());
  if (1 == o.length) {
    s = o[0];
    l = new THREE.Shape;
    l.actions = s.actions;
    l.curves = s.curves;
    c.push(l);
    return c
  }
  if (h) {
    l = new THREE.Shape;
    for (e = 0, t = o.length; t > e; e++) {
      s = o[e];
      if (THREE.Shape.Utils.isClockWise(s.getPoints())) {
        l.actions = s.actions;
        l.curves = s.curves;
        c.push(l);
        l = new THREE.Shape
      } else l.holes.push(s)
    }
  } else {
    for (e = 0, t = o.length; t > e; e++) {
      s = o[e];
      if (THREE.Shape.Utils.isClockWise(s.getPoints())) {
        l && c.push(l);
        l = new THREE.Shape;
        l.actions = s.actions;
        l.curves = s.curves
      } else l.holes.push(s)
    }
    c.push(l)
  }
  return c
};
THREE.Shape = function() {
  THREE.Path.apply(this, arguments);
  this.holes = []
};
THREE.Shape.prototype = Object.create(THREE.Path.prototype);
THREE.Shape.prototype.extrude = function(e) {
  var t = new THREE.ExtrudeGeometry(this, e);
  return t
};
THREE.Shape.prototype.makeGeometry = function(e) {
  var t = new THREE.ShapeGeometry(this, e);
  return t
};
THREE.Shape.prototype.getPointsHoles = function(e) {
  var t, r = this.holes.length,
    i = [];
  for (t = 0; r > t; t++) i[t] = this.holes[t].getTransformedPoints(e, this.bends);
  return i
};
THREE.Shape.prototype.getSpacedPointsHoles = function(e) {
  var t, r = this.holes.length,
    i = [];
  for (t = 0; r > t; t++) i[t] = this.holes[t].getTransformedSpacedPoints(e, this.bends);
  return i
};
THREE.Shape.prototype.extractAllPoints = function(e) {
  return {
    shape: this.getTransformedPoints(e),
    holes: this.getPointsHoles(e)
  }
};
THREE.Shape.prototype.extractPoints = function(e) {
  return this.useSpacedPoints ? this.extractAllSpacedPoints(e) : this.extractAllPoints(e)
};
THREE.Shape.prototype.extractAllSpacedPoints = function(e) {
  return {
    shape: this.getTransformedSpacedPoints(e),
    holes: this.getSpacedPointsHoles(e)
  }
};
THREE.Shape.Utils = {
  removeHoles: function(e, t) {
    var r, i, n, o, a, s, l, c, h, u, f, p, d, m, E, g, v = e.concat(),
      y = v.concat(),
      T = [];
    for (a = 0; a < t.length; a++) {
      l = t[a];
      Array.prototype.push.apply(y, l);
      c = Number.POSITIVE_INFINITY;
      for (s = 0; s < l.length; s++) {
        f = l[s];
        var R = [];
        for (u = 0; u < v.length; u++) {
          p = v[u];
          h = f.distanceToSquared(p);
          R.push(h);
          if (c > h) {
            c = h;
            n = s;
            o = u
          }
        }
      }
      r = o - 1 >= 0 ? o - 1 : v.length - 1;
      i = n - 1 >= 0 ? n - 1 : l.length - 1;
      var x = [l[n], v[o], v[r]],
        w = THREE.FontUtils.Triangulate.area(x),
        H = [l[n], l[i], v[o]],
        b = THREE.FontUtils.Triangulate.area(H),
        _ = 1,
        S = -1,
        M = o,
        C = n;
      o += _;
      n += S;
      0 > o && (o += v.length);
      o %= v.length;
      0 > n && (n += l.length);
      n %= l.length;
      r = o - 1 >= 0 ? o - 1 : v.length - 1;
      i = n - 1 >= 0 ? n - 1 : l.length - 1;
      x = [l[n], v[o], v[r]];
      var A = THREE.FontUtils.Triangulate.area(x);
      H = [l[n], l[i], v[o]];
      var L = THREE.FontUtils.Triangulate.area(H);
      if (w + b > A + L) {
        o = M;
        n = C;
        0 > o && (o += v.length);
        o %= v.length;
        0 > n && (n += l.length);
        n %= l.length;
        r = o - 1 >= 0 ? o - 1 : v.length - 1;
        i = n - 1 >= 0 ? n - 1 : l.length - 1
      }
      d = v.slice(0, o);
      m = v.slice(o);
      E = l.slice(n);
      g = l.slice(0, n);
      var D = [l[n], v[o], v[r]],
        P = [l[n], l[i], v[o]];
      T.push(D);
      T.push(P);
      v = d.concat(E).concat(g).concat(m)
    }
    return {
      shape: v,
      isolatedPts: T,
      allpoints: y
    }
  },
  triangulateShape: function(e, t) {
    var r, i, n, o, a, s, l = THREE.Shape.Utils.removeHoles(e, t),
      c = l.shape,
      h = l.allpoints,
      u = l.isolatedPts,
      f = THREE.FontUtils.Triangulate(c, !1),
      p = {};
    for (r = 0, i = h.length; i > r; r++) {
      a = h[r].x + ":" + h[r].y;
      void 0 !== p[a] && console.log("Duplicate point", a);
      p[a] = r
    }
    for (r = 0, i = f.length; i > r; r++) {
      o = f[r];
      for (n = 0; 3 > n; n++) {
        a = o[n].x + ":" + o[n].y;
        s = p[a];
        void 0 !== s && (o[n] = s)
      }
    }
    for (r = 0, i = u.length; i > r; r++) {
      o = u[r];
      for (n = 0; 3 > n; n++) {
        a = o[n].x + ":" + o[n].y;
        s = p[a];
        void 0 !== s && (o[n] = s)
      }
    }
    return f.concat(u)
  },
  isClockWise: function(e) {
    return THREE.FontUtils.Triangulate.area(e) < 0
  },
  b2p0: function(e, t) {
    var r = 1 - e;
    return r * r * t
  },
  b2p1: function(e, t) {
    return 2 * (1 - e) * e * t
  },
  b2p2: function(e, t) {
    return e * e * t
  },
  b2: function(e, t, r, i) {
    return this.b2p0(e, t) + this.b2p1(e, r) + this.b2p2(e, i)
  },
  b3p0: function(e, t) {
    var r = 1 - e;
    return r * r * r * t
  },
  b3p1: function(e, t) {
    var r = 1 - e;
    return 3 * r * r * e * t
  },
  b3p2: function(e, t) {
    var r = 1 - e;
    return 3 * r * e * e * t
  },
  b3p3: function(e, t) {
    return e * e * e * t
  },
  b3: function(e, t, r, i, n) {
    return this.b3p0(e, t) + this.b3p1(e, r) + this.b3p2(e, i) + this.b3p3(e, n)
  }
};
THREE.AnimationHandler = function() {
  var e = [],
    t = {},
    r = {};
  r.update = function(t) {
    for (var r = 0; r < e.length; r++) e[r].update(t)
  };
  r.addToUpdate = function(t) {
    -1 === e.indexOf(t) && e.push(t)
  };
  r.removeFromUpdate = function(t) {
    var r = e.indexOf(t); - 1 !== r && e.splice(r, 1)
  };
  r.add = function(e) {
    void 0 !== t[e.name] && console.log("THREE.AnimationHandler.add: Warning! " + e.name + " already exists in library. Overwriting.");
    t[e.name] = e;
    n(e)
  };
  r.get = function(e) {
    if ("string" == typeof e) {
      if (t[e]) return t[e];
      console.log("THREE.AnimationHandler.get: Couldn't find animation " + e);
      return null
    }
  };
  r.parse = function(e) {
    var t = [];
    if (e instanceof THREE.SkinnedMesh)
      for (var r = 0; r < e.bones.length; r++) t.push(e.bones[r]);
    else i(e, t);
    return t
  };
  var i = function(e, t) {
      t.push(e);
      for (var r = 0; r < e.children.length; r++) i(e.children[r], t)
    },
    n = function(e) {
      if (e.initialized !== !0) {
        for (var t = 0; t < e.hierarchy.length; t++) {
          for (var r = 0; r < e.hierarchy[t].keys.length; r++) {
            e.hierarchy[t].keys[r].time < 0 && (e.hierarchy[t].keys[r].time = 0);
            if (void 0 !== e.hierarchy[t].keys[r].rot && !(e.hierarchy[t].keys[r].rot instanceof THREE.Quaternion)) {
              var i = e.hierarchy[t].keys[r].rot;
              e.hierarchy[t].keys[r].rot = new THREE.Quaternion(i[0], i[1], i[2], i[3])
            }
          }
          if (e.hierarchy[t].keys.length && void 0 !== e.hierarchy[t].keys[0].morphTargets) {
            for (var n = {}, r = 0; r < e.hierarchy[t].keys.length; r++)
              for (var o = 0; o < e.hierarchy[t].keys[r].morphTargets.length; o++) {
                var a = e.hierarchy[t].keys[r].morphTargets[o];
                n[a] = -1
              }
            e.hierarchy[t].usedMorphTargets = n;
            for (var r = 0; r < e.hierarchy[t].keys.length; r++) {
              var s = {};
              for (var a in n) {
                for (var o = 0; o < e.hierarchy[t].keys[r].morphTargets.length; o++)
                  if (e.hierarchy[t].keys[r].morphTargets[o] === a) {
                    s[a] = e.hierarchy[t].keys[r].morphTargetsInfluences[o];
                    break
                  }
                o === e.hierarchy[t].keys[r].morphTargets.length && (s[a] = 0)
              }
              e.hierarchy[t].keys[r].morphTargetsInfluences = s
            }
          }
          for (var r = 1; r < e.hierarchy[t].keys.length; r++)
            if (e.hierarchy[t].keys[r].time === e.hierarchy[t].keys[r - 1].time) {
              e.hierarchy[t].keys.splice(r, 1);
              r--
            }
          for (var r = 0; r < e.hierarchy[t].keys.length; r++) e.hierarchy[t].keys[r].index = r
        }
        var l = parseInt(e.length * e.fps, 10);
        e.JIT = {};
        e.JIT.hierarchy = [];
        for (var t = 0; t < e.hierarchy.length; t++) e.JIT.hierarchy.push(new Array(l));
        e.initialized = !0
      }
    };
  r.LINEAR = 0;
  r.CATMULLROM = 1;
  r.CATMULLROM_FORWARD = 2;
  return r
}();
THREE.Animation = function(e, t, r) {
  this.root = e;
  this.data = THREE.AnimationHandler.get(t);
  this.hierarchy = THREE.AnimationHandler.parse(e);
  this.currentTime = 0;
  this.timeScale = 1;
  this.isPlaying = !1;
  this.isPaused = !0;
  this.loop = !0;
  this.interpolationType = void 0 !== r ? r : THREE.AnimationHandler.LINEAR;
  this.points = [];
  this.target = new THREE.Vector3
};
THREE.Animation.prototype.play = function(e, t) {
  if (this.isPlaying === !1) {
    this.isPlaying = !0;
    this.loop = void 0 !== e ? e : !0;
    this.currentTime = void 0 !== t ? t : 0;
    var r, i, n = this.hierarchy.length;
    for (r = 0; n > r; r++) {
      i = this.hierarchy[r];
      this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD && (i.useQuaternion = !0);
      i.matrixAutoUpdate = !0;
      if (void 0 === i.animationCache) {
        i.animationCache = {};
        i.animationCache.prevKey = {
          pos: 0,
          rot: 0,
          scl: 0
        };
        i.animationCache.nextKey = {
          pos: 0,
          rot: 0,
          scl: 0
        };
        i.animationCache.originalMatrix = i instanceof THREE.Bone ? i.skinMatrix : i.matrix
      }
      var o = i.animationCache.prevKey,
        a = i.animationCache.nextKey;
      o.pos = this.data.hierarchy[r].keys[0];
      o.rot = this.data.hierarchy[r].keys[0];
      o.scl = this.data.hierarchy[r].keys[0];
      a.pos = this.getNextKeyWith("pos", r, 1);
      a.rot = this.getNextKeyWith("rot", r, 1);
      a.scl = this.getNextKeyWith("scl", r, 1)
    }
    this.update(0)
  }
  this.isPaused = !1;
  THREE.AnimationHandler.addToUpdate(this)
};
THREE.Animation.prototype.pause = function() {
  this.isPaused === !0 ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
  this.isPaused = !this.isPaused
};
THREE.Animation.prototype.stop = function() {
  this.isPlaying = !1;
  this.isPaused = !1;
  THREE.AnimationHandler.removeFromUpdate(this)
};
THREE.Animation.prototype.update = function(e) {
  if (this.isPlaying !== !1) {
    var t, r, i, n, o, a, s, l, c, h, u, f, p, d, m, E = ["pos", "rot", "scl"];
    this.data.JIT.hierarchy;
    this.currentTime += e * this.timeScale;
    f = this.currentTime;
    u = this.currentTime = this.currentTime % this.data.length;
    h = parseInt(Math.min(u * this.data.fps, this.data.length * this.data.fps), 10);
    for (var g = 0, v = this.hierarchy.length; v > g; g++) {
      l = this.hierarchy[g];
      c = l.animationCache;
      for (var y = 0; 3 > y; y++) {
        t = E[y];
        a = c.prevKey[t];
        s = c.nextKey[t];
        if (s.time <= f) {
          if (f > u) {
            if (!this.loop) {
              this.stop();
              return
            }
            a = this.data.hierarchy[g].keys[0];
            s = this.getNextKeyWith(t, g, 1);
            for (; s.time < u;) {
              a = s;
              s = this.getNextKeyWith(t, g, s.index + 1)
            }
          } else
            do {
              a = s;
              s = this.getNextKeyWith(t, g, s.index + 1)
            } while (s.time < u);
          c.prevKey[t] = a;
          c.nextKey[t] = s
        }
        l.matrixAutoUpdate = !0;
        l.matrixWorldNeedsUpdate = !0;
        r = (u - a.time) / (s.time - a.time);
        n = a[t];
        o = s[t];
        if (0 > r || r > 1) {
          console.log("THREE.Animation.update: Warning! Scale out of bounds:" + r + " on bone " + g);
          r = 0 > r ? 0 : 1
        }
        if ("pos" === t) {
          i = l.position;
          if (this.interpolationType === THREE.AnimationHandler.LINEAR) {
            i.x = n[0] + (o[0] - n[0]) * r;
            i.y = n[1] + (o[1] - n[1]) * r;
            i.z = n[2] + (o[2] - n[2]) * r
          } else if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) {
            this.points[0] = this.getPrevKeyWith("pos", g, a.index - 1).pos;
            this.points[1] = n;
            this.points[2] = o;
            this.points[3] = this.getNextKeyWith("pos", g, s.index + 1).pos;
            r = .33 * r + .33;
            p = this.interpolateCatmullRom(this.points, r);
            i.x = p[0];
            i.y = p[1];
            i.z = p[2];
            if (this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) {
              d = this.interpolateCatmullRom(this.points, 1.01 * r);
              this.target.set(d[0], d[1], d[2]);
              this.target.sub(i);
              this.target.y = 0;
              this.target.normalize();
              m = Math.atan2(this.target.x, this.target.z);
              l.rotation.set(0, m, 0)
            }
          }
        } else if ("rot" === t) THREE.Quaternion.slerp(n, o, l.quaternion, r);
        else if ("scl" === t) {
          i = l.scale;
          i.x = n[0] + (o[0] - n[0]) * r;
          i.y = n[1] + (o[1] - n[1]) * r;
          i.z = n[2] + (o[2] - n[2]) * r
        }
      }
    }
  }
};
THREE.Animation.prototype.interpolateCatmullRom = function(e, t) {
  var r, i, n, o, a, s, l, c, h, u = [],
    f = [];
  r = (e.length - 1) * t;
  i = Math.floor(r);
  n = r - i;
  u[0] = 0 === i ? i : i - 1;
  u[1] = i;
  u[2] = i > e.length - 2 ? i : i + 1;
  u[3] = i > e.length - 3 ? i : i + 2;
  s = e[u[0]];
  l = e[u[1]];
  c = e[u[2]];
  h = e[u[3]];
  o = n * n;
  a = n * o;
  f[0] = this.interpolate(s[0], l[0], c[0], h[0], n, o, a);
  f[1] = this.interpolate(s[1], l[1], c[1], h[1], n, o, a);
  f[2] = this.interpolate(s[2], l[2], c[2], h[2], n, o, a);
  return f
};
THREE.Animation.prototype.interpolate = function(e, t, r, i, n, o, a) {
  var s = .5 * (r - e),
    l = .5 * (i - t);
  return (2 * (t - r) + s + l) * a + (-3 * (t - r) - 2 * s - l) * o + s * n + t
};
THREE.Animation.prototype.getNextKeyWith = function(e, t, r) {
  var i = this.data.hierarchy[t].keys;
  this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? r = r < i.length - 1 ? r : i.length - 1 : r %= i.length;
  for (; r < i.length; r++)
    if (void 0 !== i[r][e]) return i[r];
  return this.data.hierarchy[t].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function(e, t, r) {
  var i = this.data.hierarchy[t].keys;
  r = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? r > 0 ? r : 0 : r >= 0 ? r : r + i.length;
  for (; r >= 0; r--)
    if (void 0 !== i[r][e]) return i[r];
  return this.data.hierarchy[t].keys[i.length - 1]
};
THREE.KeyFrameAnimation = function(e, t, r) {
  this.root = e;
  this.data = THREE.AnimationHandler.get(t);
  this.hierarchy = THREE.AnimationHandler.parse(e);
  this.currentTime = 0;
  this.timeScale = .001;
  this.isPlaying = !1;
  this.isPaused = !0;
  this.loop = !0;
  this.JITCompile = void 0 !== r ? r : !0;
  for (var i = 0, n = this.hierarchy.length; n > i; i++) {
    var o = this.data.hierarchy[i].keys,
      a = this.data.hierarchy[i].sids,
      s = this.hierarchy[i];
    if (o.length && a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l],
          h = this.getNextKeyWith(c, i, 0);
        h && h.apply(c)
      }
      s.matrixAutoUpdate = !1;
      this.data.hierarchy[i].node.updateMatrix();
      s.matrixWorldNeedsUpdate = !0
    }
  }
};
THREE.KeyFrameAnimation.prototype.play = function(e, t) {
  if (!this.isPlaying) {
    this.isPlaying = !0;
    this.loop = void 0 !== e ? e : !0;
    this.currentTime = void 0 !== t ? t : 0;
    this.startTimeMs = t;
    this.startTime = 1e7;
    this.endTime = -this.startTime;
    var r, i, n, o = this.hierarchy.length;
    for (r = 0; o > r; r++) {
      i = this.hierarchy[r];
      n = this.data.hierarchy[r];
      i.useQuaternion = !0;
      if (void 0 === n.animationCache) {
        n.animationCache = {};
        n.animationCache.prevKey = null;
        n.animationCache.nextKey = null;
        n.animationCache.originalMatrix = i instanceof THREE.Bone ? i.skinMatrix : i.matrix
      }
      var a = this.data.hierarchy[r].keys;
      if (a.length) {
        n.animationCache.prevKey = a[0];
        n.animationCache.nextKey = a[1];
        this.startTime = Math.min(a[0].time, this.startTime);
        this.endTime = Math.max(a[a.length - 1].time, this.endTime)
      }
    }
    this.update(0)
  }
  this.isPaused = !1;
  THREE.AnimationHandler.addToUpdate(this)
};
THREE.KeyFrameAnimation.prototype.pause = function() {
  this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
  this.isPaused = !this.isPaused
};
THREE.KeyFrameAnimation.prototype.stop = function() {
  this.isPlaying = !1;
  this.isPaused = !1;
  THREE.AnimationHandler.removeFromUpdate(this);
  for (var e = 0; e < this.data.hierarchy.length; e++) {
    var t = this.hierarchy[e],
      r = this.data.hierarchy[e];
    if (void 0 !== r.animationCache) {
      var i = r.animationCache.originalMatrix;
      if (t instanceof THREE.Bone) {
        i.copy(t.skinMatrix);
        t.skinMatrix = i
      } else {
        i.copy(t.matrix);
        t.matrix = i
      }
      delete r.animationCache
    }
  }
};
THREE.KeyFrameAnimation.prototype.update = function(e) {
  if (this.isPlaying) {
    var t, r, i, n, o, a, s, l, c = this.data.JIT.hierarchy;
    this.currentTime += e * this.timeScale;
    s = this.currentTime;
    a = this.currentTime = this.currentTime % this.data.length;
    a < this.startTimeMs && (a = this.currentTime = this.startTimeMs + a);
    o = parseInt(Math.min(a * this.data.fps, this.data.length * this.data.fps), 10);
    l = s > a;
    if (!l || this.loop) {
      if (!(a < this.startTime)) {
        for (var h = 0, u = this.hierarchy.length; u > h; h++) {
          i = this.hierarchy[h];
          n = this.data.hierarchy[h];
          var f = n.keys,
            p = n.animationCache;
          if (this.JITCompile && void 0 !== c[h][o])
            if (i instanceof THREE.Bone) {
              i.skinMatrix = c[h][o];
              i.matrixWorldNeedsUpdate = !1
            } else {
              i.matrix = c[h][o];
              i.matrixWorldNeedsUpdate = !0
            }
          else if (f.length) {
            this.JITCompile && p && (i instanceof THREE.Bone ? i.skinMatrix = p.originalMatrix : i.matrix = p.originalMatrix);
            t = p.prevKey;
            r = p.nextKey;
            if (t && r) {
              if (r.time <= s) {
                if (l && this.loop) {
                  t = f[0];
                  r = f[1];
                  for (; r.time < a;) {
                    t = r;
                    r = f[t.index + 1]
                  }
                } else if (!l)
                  for (var d = f.length - 1; r.time < a && r.index !== d;) {
                    t = r;
                    r = f[t.index + 1]
                  }
                p.prevKey = t;
                p.nextKey = r
              }
              r.time >= a ? t.interpolate(r, a) : t.interpolate(r, r.time)
            }
            this.data.hierarchy[h].node.updateMatrix();
            i.matrixWorldNeedsUpdate = !0
          }
        }
        if (this.JITCompile && void 0 === c[0][o]) {
          this.hierarchy[0].updateMatrixWorld(!0);
          for (var h = 0; h < this.hierarchy.length; h++) this.hierarchy[h] instanceof THREE.Bone ? c[h][o] = this.hierarchy[h].skinMatrix.clone() : c[h][o] = this.hierarchy[h].matrix.clone()
        }
      }
    } else {
      for (var h = 0, u = this.hierarchy.length; u > h; h++) {
        var f = this.data.hierarchy[h].keys,
          m = this.data.hierarchy[h].sids,
          E = f.length - 1,
          g = this.hierarchy[h];
        if (f.length) {
          for (var v = 0; v < m.length; v++) {
            var y = m[v],
              T = this.getPrevKeyWith(y, h, E);
            T && T.apply(y)
          }
          this.data.hierarchy[h].node.updateMatrix();
          g.matrixWorldNeedsUpdate = !0
        }
      }
      this.stop()
    }
  }
};
THREE.KeyFrameAnimation.prototype.getNextKeyWith = function(e, t, r) {
  var i = this.data.hierarchy[t].keys;
  r %= i.length;
  for (; r < i.length; r++)
    if (i[r].hasTarget(e)) return i[r];
  return i[0]
};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function(e, t, r) {
  var i = this.data.hierarchy[t].keys;
  r = r >= 0 ? r : r + i.length;
  for (; r >= 0; r--)
    if (i[r].hasTarget(e)) return i[r];
  return i[i.length - 1]
};
THREE.CubeCamera = function(e, t, r) {
  THREE.Object3D.call(this);
  var i = 90,
    n = 1,
    o = new THREE.PerspectiveCamera(i, n, e, t);
  o.up.set(0, -1, 0);
  o.lookAt(new THREE.Vector3(1, 0, 0));
  this.add(o);
  var a = new THREE.PerspectiveCamera(i, n, e, t);
  a.up.set(0, -1, 0);
  a.lookAt(new THREE.Vector3(-1, 0, 0));
  this.add(a);
  var s = new THREE.PerspectiveCamera(i, n, e, t);
  s.up.set(0, 0, 1);
  s.lookAt(new THREE.Vector3(0, 1, 0));
  this.add(s);
  var l = new THREE.PerspectiveCamera(i, n, e, t);
  l.up.set(0, 0, -1);
  l.lookAt(new THREE.Vector3(0, -1, 0));
  this.add(l);
  var c = new THREE.PerspectiveCamera(i, n, e, t);
  c.up.set(0, -1, 0);
  c.lookAt(new THREE.Vector3(0, 0, 1));
  this.add(c);
  var h = new THREE.PerspectiveCamera(i, n, e, t);
  h.up.set(0, -1, 0);
  h.lookAt(new THREE.Vector3(0, 0, -1));
  this.add(h);
  this.renderTarget = new THREE.WebGLRenderTargetCube(r, r, {
    format: THREE.RGBFormat,
    magFilter: THREE.LinearFilter,
    minFilter: THREE.LinearFilter
  });
  this.updateCubeMap = function(e, t) {
    var r = this.renderTarget,
      i = r.generateMipmaps;
    r.generateMipmaps = !1;
    r.activeCubeFace = 0;
    e.render(t, o, r);
    r.activeCubeFace = 1;
    e.render(t, a, r);
    r.activeCubeFace = 2;
    e.render(t, s, r);
    r.activeCubeFace = 3;
    e.render(t, l, r);
    r.activeCubeFace = 4;
    e.render(t, c, r);
    r.generateMipmaps = i;
    r.activeCubeFace = 5;
    e.render(t, h, r)
  }
};
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype);
THREE.CombinedCamera = function(e, t, r, i, n, o, a) {
  THREE.Camera.call(this);
  this.fov = r;
  this.left = -e / 2;
  this.right = e / 2;
  this.top = t / 2;
  this.bottom = -t / 2;
  this.cameraO = new THREE.OrthographicCamera(e / -2, e / 2, t / 2, t / -2, o, a);
  this.cameraP = new THREE.PerspectiveCamera(r, e / t, i, n);
  this.zoom = 1;
  this.toPerspective()
};
THREE.CombinedCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.CombinedCamera.prototype.toPerspective = function() {
  this.near = this.cameraP.near;
  this.far = this.cameraP.far;
  this.cameraP.fov = this.fov / this.zoom;
  this.cameraP.updateProjectionMatrix();
  this.projectionMatrix = this.cameraP.projectionMatrix;
  this.inPerspectiveMode = !0;
  this.inOrthographicMode = !1
};
THREE.CombinedCamera.prototype.toOrthographic = function() {
  var e = this.fov,
    t = this.cameraP.aspect,
    r = this.cameraP.near,
    i = this.cameraP.far,
    n = (r + i) / 2,
    o = Math.tan(e / 2) * n,
    a = 2 * o,
    s = a * t,
    l = s / 2;
  o /= this.zoom;
  l /= this.zoom;
  this.cameraO.left = -l;
  this.cameraO.right = l;
  this.cameraO.top = o;
  this.cameraO.bottom = -o;
  this.cameraO.updateProjectionMatrix();
  this.near = this.cameraO.near;
  this.far = this.cameraO.far;
  this.projectionMatrix = this.cameraO.projectionMatrix;
  this.inPerspectiveMode = !1;
  this.inOrthographicMode = !0
};
THREE.CombinedCamera.prototype.setSize = function(e, t) {
  this.cameraP.aspect = e / t;
  this.left = -e / 2;
  this.right = e / 2;
  this.top = t / 2;
  this.bottom = -t / 2
};
THREE.CombinedCamera.prototype.setFov = function(e) {
  this.fov = e;
  this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.updateProjectionMatrix = function() {
  if (this.inPerspectiveMode) this.toPerspective();
  else {
    this.toPerspective();
    this.toOrthographic()
  }
};
THREE.CombinedCamera.prototype.setLens = function(e, t) {
  void 0 === t && (t = 24);
  var r = 2 * THREE.Math.radToDeg(Math.atan(t / (2 * e)));
  this.setFov(r);
  return r
};
THREE.CombinedCamera.prototype.setZoom = function(e) {
  this.zoom = e;
  this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.toFrontView = function() {
  this.rotation.x = 0;
  this.rotation.y = 0;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBackView = function() {
  this.rotation.x = 0;
  this.rotation.y = Math.PI;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toLeftView = function() {
  this.rotation.x = 0;
  this.rotation.y = -Math.PI / 2;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toRightView = function() {
  this.rotation.x = 0;
  this.rotation.y = Math.PI / 2;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toTopView = function() {
  this.rotation.x = -Math.PI / 2;
  this.rotation.y = 0;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBottomView = function() {
  this.rotation.x = Math.PI / 2;
  this.rotation.y = 0;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.CircleGeometry = function(e, t, r, i) {
  THREE.Geometry.call(this);
  e = e || 50;
  r = void 0 !== r ? r : 0;
  i = void 0 !== i ? i : 2 * Math.PI;
  t = void 0 !== t ? Math.max(3, t) : 8;
  var n, o = [],
    a = new THREE.Vector3,
    s = new THREE.Vector2(.5, .5);
  this.vertices.push(a);
  o.push(s);
  for (n = 0; t >= n; n++) {
    var l = new THREE.Vector3,
      c = r + n / t * i;
    l.x = e * Math.cos(c);
    l.y = e * Math.sin(c);
    this.vertices.push(l);
    o.push(new THREE.Vector2((l.x / e + 1) / 2, (l.y / e + 1) / 2))
  }
  var h = new THREE.Vector3(0, 0, 1);
  for (n = 1; t >= n; n++) {
    var u = n,
      f = n + 1,
      p = 0;
    this.faces.push(new THREE.Face3(u, f, p, [h, h, h]));
    this.faceVertexUvs[0].push([o[n], o[n + 1], s])
  }
  this.computeCentroids();
  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
};
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CubeGeometry = function(e, t, r, i, n, o) {
  function a(e, t, r, i, n, o, a, l) {
    var c, h, u, f = s.widthSegments,
      p = s.heightSegments,
      d = n / 2,
      m = o / 2,
      E = s.vertices.length;
    if ("x" === e && "y" === t || "y" === e && "x" === t) c = "z";
    else if ("x" === e && "z" === t || "z" === e && "x" === t) {
      c = "y";
      p = s.depthSegments
    } else if ("z" === e && "y" === t || "y" === e && "z" === t) {
      c = "x";
      f = s.depthSegments
    }
    var g = f + 1,
      v = p + 1,
      y = n / f,
      T = o / p,
      R = new THREE.Vector3;
    R[c] = a > 0 ? 1 : -1;
    for (u = 0; v > u; u++)
      for (h = 0; g > h; h++) {
        var x = new THREE.Vector3;
        x[e] = (h * y - d) * r;
        x[t] = (u * T - m) * i;
        x[c] = a;
        s.vertices.push(x)
      }
    for (u = 0; p > u; u++)
      for (h = 0; f > h; h++) {
        var w = h + g * u,
          H = h + g * (u + 1),
          b = h + 1 + g * (u + 1),
          _ = h + 1 + g * u,
          S = new THREE.Face4(w + E, H + E, b + E, _ + E);
        S.normal.copy(R);
        S.vertexNormals.push(R.clone(), R.clone(), R.clone(), R.clone());
        S.materialIndex = l;
        s.faces.push(S);
        s.faceVertexUvs[0].push([new THREE.Vector2(h / f, 1 - u / p), new THREE.Vector2(h / f, 1 - (u + 1) / p), new THREE.Vector2((h + 1) / f, 1 - (u + 1) / p), new THREE.Vector2((h + 1) / f, 1 - u / p)])
      }
  }
  THREE.Geometry.call(this);
  var s = this;
  this.width = e;
  this.height = t;
  this.depth = r;
  this.widthSegments = i || 1;
  this.heightSegments = n || 1;
  this.depthSegments = o || 1;
  var l = this.width / 2,
    c = this.height / 2,
    h = this.depth / 2;
  a("z", "y", -1, -1, this.depth, this.height, l, 0);
  a("z", "y", 1, -1, this.depth, this.height, -l, 1);
  a("x", "z", 1, 1, this.width, this.depth, c, 2);
  a("x", "z", 1, -1, this.width, this.depth, -c, 3);
  a("x", "y", 1, -1, this.width, this.height, h, 4);
  a("x", "y", -1, -1, this.width, this.height, -h, 5);
  this.computeCentroids();
  this.mergeVertices()
};
THREE.CubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry = function(e, t, r, i, n, o) {
  THREE.Geometry.call(this);
  this.radiusTop = e = void 0 !== e ? e : 20;
  this.radiusBottom = t = void 0 !== t ? t : 20;
  this.height = r = void 0 !== r ? r : 100;
  this.radiusSegments = i = i || 8;
  this.heightSegments = n = n || 1;
  this.openEnded = o = void 0 !== o ? o : !1;
  var a, s, l = r / 2,
    c = [],
    h = [];
  for (s = 0; n >= s; s++) {
    var u = [],
      f = [],
      p = s / n,
      d = p * (t - e) + e;
    for (a = 0; i >= a; a++) {
      var m = a / i,
        E = new THREE.Vector3;
      E.x = d * Math.sin(m * Math.PI * 2);
      E.y = -p * r + l;
      E.z = d * Math.cos(m * Math.PI * 2);
      this.vertices.push(E);
      u.push(this.vertices.length - 1);
      f.push(new THREE.Vector2(m, 1 - p))
    }
    c.push(u);
    h.push(f)
  }
  var g, v, y = (t - e) / r;
  for (a = 0; i > a; a++) {
    if (0 !== e) {
      g = this.vertices[c[0][a]].clone();
      v = this.vertices[c[0][a + 1]].clone()
    } else {
      g = this.vertices[c[1][a]].clone();
      v = this.vertices[c[1][a + 1]].clone()
    }
    g.setY(Math.sqrt(g.x * g.x + g.z * g.z) * y).normalize();
    v.setY(Math.sqrt(v.x * v.x + v.z * v.z) * y).normalize();
    for (s = 0; n > s; s++) {
      var T = c[s][a],
        R = c[s + 1][a],
        x = c[s + 1][a + 1],
        w = c[s][a + 1],
        H = g.clone(),
        b = g.clone(),
        _ = v.clone(),
        S = v.clone(),
        M = h[s][a].clone(),
        C = h[s + 1][a].clone(),
        A = h[s + 1][a + 1].clone(),
        L = h[s][a + 1].clone();
      this.faces.push(new THREE.Face4(T, R, x, w, [H, b, _, S]));
      this.faceVertexUvs[0].push([M, C, A, L])
    }
  }
  if (o === !1 && e > 0) {
    this.vertices.push(new THREE.Vector3(0, l, 0));
    for (a = 0; i > a; a++) {
      var T = c[0][a],
        R = c[0][a + 1],
        x = this.vertices.length - 1,
        H = new THREE.Vector3(0, 1, 0),
        b = new THREE.Vector3(0, 1, 0),
        _ = new THREE.Vector3(0, 1, 0),
        M = h[0][a].clone(),
        C = h[0][a + 1].clone(),
        A = new THREE.Vector2(C.u, 0);
      this.faces.push(new THREE.Face3(T, R, x, [H, b, _]));
      this.faceVertexUvs[0].push([M, C, A])
    }
  }
  if (o === !1 && t > 0) {
    this.vertices.push(new THREE.Vector3(0, -l, 0));
    for (a = 0; i > a; a++) {
      var T = c[s][a + 1],
        R = c[s][a],
        x = this.vertices.length - 1,
        H = new THREE.Vector3(0, -1, 0),
        b = new THREE.Vector3(0, -1, 0),
        _ = new THREE.Vector3(0, -1, 0),
        M = h[s][a + 1].clone(),
        C = h[s][a].clone(),
        A = new THREE.Vector2(C.u, 1);
      this.faces.push(new THREE.Face3(T, R, x, [H, b, _]));
      this.faceVertexUvs[0].push([M, C, A])
    }
  }
  this.computeCentroids();
  this.computeFaceNormals()
};
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry = function(e, t) {
  if ("undefined" != typeof e) {
    THREE.Geometry.call(this);
    e = e instanceof Array ? e : [e];
    this.shapebb = e[e.length - 1].getBoundingBox();
    this.addShapeList(e, t);
    this.computeCentroids();
    this.computeFaceNormals()
  } else e = []
};
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.addShapeList = function(e, t) {
  for (var r = e.length, i = 0; r > i; i++) {
    var n = e[i];
    this.addShape(n, t)
  }
};
THREE.ExtrudeGeometry.prototype.addShape = function(e, t) {
  function r(e, t, r) {
    t || console.log("die");
    return t.clone().multiplyScalar(r).add(e)
  }

  function i(e, t, r) {
    return o(e, t, r)
  }

  function n(e, t, r) {
    var i = Math.atan2(t.y - e.y, t.x - e.x),
      n = Math.atan2(r.y - e.y, r.x - e.x);
    i > n && (n += 2 * Math.PI);
    var o = (i + n) / 2,
      a = -Math.cos(o),
      s = -Math.sin(o),
      l = new THREE.Vector2(a, s);
    return l
  }

  function o(e, t, r) {
    var i, o, a, s, l, c, h = THREE.ExtrudeGeometry.__v1,
      u = THREE.ExtrudeGeometry.__v2,
      f = THREE.ExtrudeGeometry.__v3,
      p = THREE.ExtrudeGeometry.__v4,
      d = THREE.ExtrudeGeometry.__v5,
      m = THREE.ExtrudeGeometry.__v6;
    h.set(e.x - t.x, e.y - t.y);
    u.set(e.x - r.x, e.y - r.y);
    i = h.normalize();
    o = u.normalize();
    f.set(-i.y, i.x);
    p.set(o.y, -o.x);
    d.copy(e).add(f);
    m.copy(e).add(p);
    if (d.equals(m)) return p.clone();
    d.copy(t).add(f);
    m.copy(r).add(p);
    a = i.dot(p);
    s = m.sub(d).dot(p);
    if (0 === a) {
      console.log("Either infinite or no solutions!");
      0 === s ? console.log("Its finite solutions.") : console.log("Too bad, no solutions.")
    }
    l = s / a;
    if (0 > l) return n(e, t, r);
    c = i.multiplyScalar(l).add(d);
    return c.sub(e).clone()
  }

  function a() {
    if (R) {
      var e = 0,
        t = X * e;
      for ($ = 0; q > $; $++) {
        W = z[$];
        h(W[2] + t, W[1] + t, W[0] + t, !0)
      }
      e = w + 2 * T;
      t = X * e;
      for ($ = 0; q > $; $++) {
        W = z[$];
        h(W[0] + t, W[1] + t, W[2] + t, !1)
      }
    } else {
      for ($ = 0; q > $; $++) {
        W = z[$];
        h(W[2], W[1], W[0], !0)
      }
      for ($ = 0; q > $; $++) {
        W = z[$];
        h(W[0] + X * w, W[1] + X * w, W[2] + X * w, !1)
      }
    }
  }

  function s() {
    var e = 0;
    l(B, e);
    e += B.length;
    for (A = 0, L = U.length; L > A; A++) {
      C = U[A];
      l(C, e);
      e += C.length
    }
  }

  function l(e, t) {
    var r, i;
    $ = e.length;
    for (; --$ >= 0;) {
      r = $;
      i = $ - 1;
      0 > i && (i = e.length - 1);
      var n = 0,
        o = w + 2 * T;
      for (n = 0; o > n; n++) {
        var a = X * n,
          s = X * (n + 1),
          l = t + r + a,
          c = t + i + a,
          h = t + i + s,
          f = t + r + s;
        u(l, c, h, f, e, n, o, r, i)
      }
    }
  }

  function c(e, t, r) {
    D.vertices.push(new THREE.Vector3(e, t, r))
  }

  function h(r, i, n, o) {
    r += P;
    i += P;
    n += P;
    D.faces.push(new THREE.Face3(r, i, n, null, null, _));
    var a = o ? M.generateBottomUV(D, e, t, r, i, n) : M.generateTopUV(D, e, t, r, i, n);
    D.faceVertexUvs[0].push(a)
  }

  function u(r, i, n, o, a, s, l, c, h) {
    r += P;
    i += P;
    n += P;
    o += P;
    D.faces.push(new THREE.Face4(r, i, n, o, null, null, S));
    var u = M.generateSideWallUV(D, e, a, t, r, i, n, o, s, l, c, h);
    D.faceVertexUvs[0].push(u)
  }
  var f, p, d, m, E, g = void 0 !== t.amount ? t.amount : 100,
    v = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
    y = void 0 !== t.bevelSize ? t.bevelSize : v - 2,
    T = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
    R = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0,
    x = void 0 !== t.curveSegments ? t.curveSegments : 12,
    w = void 0 !== t.steps ? t.steps : 1,
    H = t.extrudePath,
    b = !1,
    _ = t.material,
    S = t.extrudeMaterial,
    M = void 0 !== t.UVGenerator ? t.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator;
  this.shapebb;
  if (H) {
    f = H.getSpacedPoints(w);
    b = !0;
    R = !1;
    p = void 0 !== t.frames ? t.frames : new THREE.TubeGeometry.FrenetFrames(H, w, !1);
    d = new THREE.Vector3;
    m = new THREE.Vector3;
    E = new THREE.Vector3
  }
  if (!R) {
    T = 0;
    v = 0;
    y = 0
  }
  var C, A, L, D = this,
    P = this.vertices.length,
    F = e.extractPoints(x),
    N = F.shape,
    U = F.holes,
    V = !THREE.Shape.Utils.isClockWise(N);
  if (V) {
    N = N.reverse();
    for (A = 0, L = U.length; L > A; A++) {
      C = U[A];
      THREE.Shape.Utils.isClockWise(C) && (U[A] = C.reverse())
    }
    V = !1
  }
  var z = THREE.Shape.Utils.triangulateShape(N, U),
    B = N;
  for (A = 0, L = U.length; L > A; A++) {
    C = U[A];
    N = N.concat(C)
  }
  for (var O, k, I, j, G, W, X = N.length, q = z.length, Y = (B.length, 180 / Math.PI, []), $ = 0, K = B.length, Q = K - 1, Z = $ + 1; K > $; $++, Q++, Z++) {
    Q === K && (Q = 0);
    Z === K && (Z = 0);
    B[$], B[Q], B[Z];
    Y[$] = i(B[$], B[Q], B[Z])
  }
  var J, ee = [],
    te = Y.concat();
  for (A = 0, L = U.length; L > A; A++) {
    C = U[A];
    J = [];
    for ($ = 0, K = C.length, Q = K - 1, Z = $ + 1; K > $; $++, Q++, Z++) {
      Q === K && (Q = 0);
      Z === K && (Z = 0);
      J[$] = i(C[$], C[Q], C[Z])
    }
    ee.push(J);
    te = te.concat(J)
  }
  for (O = 0; T > O; O++) {
    I = O / T;
    j = v * (1 - I);
    k = y * Math.sin(I * Math.PI / 2);
    for ($ = 0, K = B.length; K > $; $++) {
      G = r(B[$], Y[$], k);
      c(G.x, G.y, -j)
    }
    for (A = 0, L = U.length; L > A; A++) {
      C = U[A];
      J = ee[A];
      for ($ = 0, K = C.length; K > $; $++) {
        G = r(C[$], J[$], k);
        c(G.x, G.y, -j)
      }
    }
  }
  k = y;
  for ($ = 0; X > $; $++) {
    G = R ? r(N[$], te[$], k) : N[$];
    if (b) {
      m.copy(p.normals[0]).multiplyScalar(G.x);
      d.copy(p.binormals[0]).multiplyScalar(G.y);
      E.copy(f[0]).add(m).add(d);
      c(E.x, E.y, E.z)
    } else c(G.x, G.y, 0)
  }
  var re;
  for (re = 1; w >= re; re++)
    for ($ = 0; X > $; $++) {
      G = R ? r(N[$], te[$], k) : N[$];
      if (b) {
        m.copy(p.normals[re]).multiplyScalar(G.x);
        d.copy(p.binormals[re]).multiplyScalar(G.y);
        E.copy(f[re]).add(m).add(d);
        c(E.x, E.y, E.z)
      } else c(G.x, G.y, g / w * re)
    }
  for (O = T - 1; O >= 0; O--) {
    I = O / T;
    j = v * (1 - I);
    k = y * Math.sin(I * Math.PI / 2);
    for ($ = 0, K = B.length; K > $; $++) {
      G = r(B[$], Y[$], k);
      c(G.x, G.y, g + j)
    }
    for (A = 0, L = U.length; L > A; A++) {
      C = U[A];
      J = ee[A];
      for ($ = 0, K = C.length; K > $; $++) {
        G = r(C[$], J[$], k);
        b ? c(G.x, G.y + f[w - 1].y, f[w - 1].x + j) : c(G.x, G.y, g + j)
      }
    }
  }
  a();
  s()
};
THREE.ExtrudeGeometry.WorldUVGenerator = {
  generateTopUV: function(e, t, r, i, n, o) {
    var a = e.vertices[i].x,
      s = e.vertices[i].y,
      l = e.vertices[n].x,
      c = e.vertices[n].y,
      h = e.vertices[o].x,
      u = e.vertices[o].y;
    return [new THREE.Vector2(a, s), new THREE.Vector2(l, c), new THREE.Vector2(h, u)]
  },
  generateBottomUV: function(e, t, r, i, n, o) {
    return this.generateTopUV(e, t, r, i, n, o)
  },
  generateSideWallUV: function(e, t, r, i, n, o, a, s, l, c, h, u) {
    var f = e.vertices[n].x,
      p = e.vertices[n].y,
      d = e.vertices[n].z,
      m = e.vertices[o].x,
      E = e.vertices[o].y,
      g = e.vertices[o].z,
      v = e.vertices[a].x,
      y = e.vertices[a].y,
      T = e.vertices[a].z,
      R = e.vertices[s].x,
      x = e.vertices[s].y,
      w = e.vertices[s].z;
    return Math.abs(p - E) < .01 ? [new THREE.Vector2(f, 1 - d), new THREE.Vector2(m, 1 - g), new THREE.Vector2(v, 1 - T), new THREE.Vector2(R, 1 - w)] : [new THREE.Vector2(p, 1 - d), new THREE.Vector2(E, 1 - g), new THREE.Vector2(y, 1 - T), new THREE.Vector2(x, 1 - w)]
  }
};
THREE.ExtrudeGeometry.__v1 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v2 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v3 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v4 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v5 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v6 = new THREE.Vector2;
THREE.ShapeGeometry = function(e, t) {
  THREE.Geometry.call(this);
  e instanceof Array == !1 && (e = [e]);
  this.shapebb = e[e.length - 1].getBoundingBox();
  this.addShapeList(e, t);
  this.computeCentroids();
  this.computeFaceNormals()
};
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ShapeGeometry.prototype.addShapeList = function(e, t) {
  for (var r = 0, i = e.length; i > r; r++) this.addShape(e[r], t);
  return this
};
THREE.ShapeGeometry.prototype.addShape = function(e, t) {
  void 0 === t && (t = {});
  var r, i, n, o = void 0 !== t.curveSegments ? t.curveSegments : 12,
    a = t.material,
    s = void 0 === t.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator,
    l = (this.shapebb, this.vertices.length),
    c = e.extractPoints(o),
    h = c.shape,
    u = c.holes,
    f = !THREE.Shape.Utils.isClockWise(h);
  if (f) {
    h = h.reverse();
    for (r = 0, i = u.length; i > r; r++) {
      n = u[r];
      THREE.Shape.Utils.isClockWise(n) && (u[r] = n.reverse())
    }
    f = !1
  }
  var p = THREE.Shape.Utils.triangulateShape(h, u),
    d = h;
  for (r = 0, i = u.length; i > r; r++) {
    n = u[r];
    h = h.concat(n)
  }
  var m, E, g = h.length,
    v = p.length;
  d.length;
  for (r = 0; g > r; r++) {
    m = h[r];
    this.vertices.push(new THREE.Vector3(m.x, m.y, 0))
  }
  for (r = 0; v > r; r++) {
    E = p[r];
    var y = E[0] + l,
      T = E[1] + l,
      R = E[2] + l;
    this.faces.push(new THREE.Face3(y, T, R, null, null, a));
    this.faceVertexUvs[0].push(s.generateBottomUV(this, e, t, y, T, R))
  }
};
THREE.LatheGeometry = function(e, t, r, i) {
  THREE.Geometry.call(this);
  t = t || 12;
  r = r || 0;
  i = i || 2 * Math.PI;
  for (var n = 1 / (e.length - 1), o = 1 / t, a = 0, s = t; s >= a; a++)
    for (var l = r + a * o * i, c = Math.cos(l), h = Math.sin(l), u = 0, f = e.length; f > u; u++) {
      var p = e[u],
        d = new THREE.Vector3;
      d.x = c * p.x - h * p.y;
      d.y = h * p.x + c * p.y;
      d.z = p.z;
      this.vertices.push(d)
    }
  for (var m = e.length, a = 0, s = t; s > a; a++)
    for (var u = 0, f = e.length - 1; f > u; u++) {
      var E = u + m * a,
        g = E,
        v = E + m,
        c = E + 1 + m,
        y = E + 1;
      this.faces.push(new THREE.Face4(g, v, c, y));
      var T = a * o,
        R = u * n,
        x = T + o,
        w = R + n;
      this.faceVertexUvs[0].push([new THREE.Vector2(T, R), new THREE.Vector2(x, R), new THREE.Vector2(x, w), new THREE.Vector2(T, w)])
    }
  this.mergeVertices();
  this.computeCentroids();
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry = function(e, t, r, i) {
  THREE.Geometry.call(this);
  this.width = e;
  this.height = t;
  this.widthSegments = r || 1;
  this.heightSegments = i || 1;
  var n, o, a = e / 2,
    s = t / 2,
    l = this.widthSegments,
    c = this.heightSegments,
    h = l + 1,
    u = c + 1,
    f = this.width / l,
    p = this.height / c,
    d = new THREE.Vector3(0, 0, 1);
  for (o = 0; u > o; o++)
    for (n = 0; h > n; n++) {
      var m = n * f - a,
        E = o * p - s;
      this.vertices.push(new THREE.Vector3(m, -E, 0))
    }
  for (o = 0; c > o; o++)
    for (n = 0; l > n; n++) {
      var g = n + h * o,
        v = n + h * (o + 1),
        y = n + 1 + h * (o + 1),
        T = n + 1 + h * o,
        R = new THREE.Face4(g, v, y, T);
      R.normal.copy(d);
      R.vertexNormals.push(d.clone(), d.clone(), d.clone(), d.clone());
      this.faces.push(R);
      this.faceVertexUvs[0].push([new THREE.Vector2(n / l, 1 - o / c), new THREE.Vector2(n / l, 1 - (o + 1) / c), new THREE.Vector2((n + 1) / l, 1 - (o + 1) / c), new THREE.Vector2((n + 1) / l, 1 - o / c)])
    }
  this.computeCentroids()
};
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.RingGeometry = function(e, t, r, i, n, o) {
  THREE.Geometry.call(this);
  e = e || 0;
  t = t || 50;
  n = void 0 !== n ? n : 0;
  o = void 0 !== o ? o : 2 * Math.PI;
  r = void 0 !== r ? Math.max(3, r) : 8;
  i = void 0 !== i ? Math.max(3, i) : 8;
  var a, s, l = [],
    c = e,
    h = (t - e) / i;
  for (a = 0; i >= a; a++) {
    for (s = 0; r >= s; s++) {
      var u = new THREE.Vector3,
        f = n + s / r * o;
      u.x = c * Math.cos(f);
      u.y = c * Math.sin(f);
      this.vertices.push(u);
      l.push(new THREE.Vector2((u.x / c + 1) / 2, -(u.y / c + 1) / 2 + 1))
    }
    c += h
  }
  var p = new THREE.Vector3(0, 0, 1);
  for (a = 0; i > a; a++) {
    var d = a * r;
    for (s = 0; r >= s; s++) {
      var f = s + d,
        m = f + a,
        E = f + r + a,
        g = f + r + 1 + a;
      this.faces.push(new THREE.Face3(m, E, g, [p, p, p]));
      this.faceVertexUvs[0].push([l[m], l[E], l[g]]);
      m = f + a;
      E = f + r + 1 + a;
      g = f + 1 + a;
      this.faces.push(new THREE.Face3(m, E, g, [p, p, p]));
      this.faceVertexUvs[0].push([l[m], l[E], l[g]])
    }
  }
  this.computeCentroids();
  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3, c)
};
THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry = function(e, t, r, i, n, o, a) {
  THREE.Geometry.call(this);
  this.radius = e = e || 50;
  this.widthSegments = t = Math.max(3, Math.floor(t) || 8);
  this.heightSegments = r = Math.max(2, Math.floor(r) || 6);
  this.phiStart = i = void 0 !== i ? i : 0;
  this.phiLength = n = void 0 !== n ? n : 2 * Math.PI;
  this.thetaStart = o = void 0 !== o ? o : 0;
  this.thetaLength = a = void 0 !== a ? a : Math.PI;
  var s, l, c = [],
    h = [];
  for (l = 0; r >= l; l++) {
    var u = [],
      f = [];
    for (s = 0; t >= s; s++) {
      var p = s / t,
        d = l / r,
        m = new THREE.Vector3;
      m.x = -e * Math.cos(i + p * n) * Math.sin(o + d * a);
      m.y = e * Math.cos(o + d * a);
      m.z = e * Math.sin(i + p * n) * Math.sin(o + d * a);
      this.vertices.push(m);
      u.push(this.vertices.length - 1);
      f.push(new THREE.Vector2(p, 1 - d))
    }
    c.push(u);
    h.push(f)
  }
  for (l = 0; l < this.heightSegments; l++)
    for (s = 0; s < this.widthSegments; s++) {
      var E = c[l][s + 1],
        g = c[l][s],
        v = c[l + 1][s],
        y = c[l + 1][s + 1],
        T = this.vertices[E].clone().normalize(),
        R = this.vertices[g].clone().normalize(),
        x = this.vertices[v].clone().normalize(),
        w = this.vertices[y].clone().normalize(),
        H = h[l][s + 1].clone(),
        b = h[l][s].clone(),
        _ = h[l + 1][s].clone(),
        S = h[l + 1][s + 1].clone();
      if (Math.abs(this.vertices[E].y) === this.radius) {
        this.faces.push(new THREE.Face3(E, v, y, [T, x, w]));
        this.faceVertexUvs[0].push([H, _, S])
      } else if (Math.abs(this.vertices[v].y) === this.radius) {
        this.faces.push(new THREE.Face3(E, g, v, [T, R, x]));
        this.faceVertexUvs[0].push([H, b, _])
      } else {
        this.faces.push(new THREE.Face4(E, g, v, y, [T, R, x, w]));
        this.faceVertexUvs[0].push([H, b, _, S])
      }
    }
  this.computeCentroids();
  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
};
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TextGeometry = function(e, t) {
  t = t || {};
  var r = THREE.FontUtils.generateShapes(e, t);
  t.amount = void 0 !== t.height ? t.height : 50;
  void 0 === t.bevelThickness && (t.bevelThickness = 10);
  void 0 === t.bevelSize && (t.bevelSize = 8);
  void 0 === t.bevelEnabled && (t.bevelEnabled = !1);
  THREE.ExtrudeGeometry.call(this, r, t)
};
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry = function(e, t, r, i, n) {
  THREE.Geometry.call(this);
  this.radius = e || 100;
  this.tube = t || 40;
  this.radialSegments = r || 8;
  this.tubularSegments = i || 6;
  this.arc = n || 2 * Math.PI;
  for (var o = new THREE.Vector3, a = [], s = [], l = 0; l <= this.radialSegments; l++)
    for (var c = 0; c <= this.tubularSegments; c++) {
      var h = c / this.tubularSegments * this.arc,
        u = l / this.radialSegments * Math.PI * 2;
      o.x = this.radius * Math.cos(h);
      o.y = this.radius * Math.sin(h);
      var f = new THREE.Vector3;
      f.x = (this.radius + this.tube * Math.cos(u)) * Math.cos(h);
      f.y = (this.radius + this.tube * Math.cos(u)) * Math.sin(h);
      f.z = this.tube * Math.sin(u);
      this.vertices.push(f);
      a.push(new THREE.Vector2(c / this.tubularSegments, l / this.radialSegments));
      s.push(f.clone().sub(o).normalize())
    }
  for (var l = 1; l <= this.radialSegments; l++)
    for (var c = 1; c <= this.tubularSegments; c++) {
      var p = (this.tubularSegments + 1) * l + c - 1,
        d = (this.tubularSegments + 1) * (l - 1) + c - 1,
        m = (this.tubularSegments + 1) * (l - 1) + c,
        E = (this.tubularSegments + 1) * l + c,
        g = new THREE.Face4(p, d, m, E, [s[p], s[d], s[m], s[E]]);
      g.normal.add(s[p]);
      g.normal.add(s[d]);
      g.normal.add(s[m]);
      g.normal.add(s[E]);
      g.normal.normalize();
      this.faces.push(g);
      this.faceVertexUvs[0].push([a[p].clone(), a[d].clone(), a[m].clone(), a[E].clone()])
    }
  this.computeCentroids()
};
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry = function(e, t, r, i, n, o, a) {
  function s(e, t, r) {
    return c.vertices.push(new THREE.Vector3(e, t, r)) - 1
  }

  function l(e, t, r, i, n, o) {
    var a = Math.cos(e),
      s = (Math.cos(t), Math.sin(e)),
      l = r / i * e,
      c = Math.cos(l),
      h = n * (2 + c) * .5 * a,
      u = n * (2 + c) * s * .5,
      f = o * n * Math.sin(l) * .5;
    return new THREE.Vector3(h, u, f)
  }
  THREE.Geometry.call(this);
  var c = this;
  this.radius = e || 100;
  this.tube = t || 40;
  this.radialSegments = r || 64;
  this.tubularSegments = i || 8;
  this.p = n || 2;
  this.q = o || 3;
  this.heightScale = a || 1;
  this.grid = new Array(this.radialSegments);
  for (var h = new THREE.Vector3, u = new THREE.Vector3, f = new THREE.Vector3, p = 0; p < this.radialSegments; ++p) {
    this.grid[p] = new Array(this.tubularSegments);
    for (var d = 0; d < this.tubularSegments; ++d) {
      var m, E, g = p / this.radialSegments * 2 * this.p * Math.PI,
        v = d / this.tubularSegments * 2 * Math.PI,
        y = l(g, v, this.q, this.p, this.radius, this.heightScale),
        T = l(g + .01, v, this.q, this.p, this.radius, this.heightScale);
      h.subVectors(T, y);
      u.addVectors(T, y);
      f.crossVectors(h, u);
      u.crossVectors(f, h);
      f.normalize();
      u.normalize();
      m = -this.tube * Math.cos(v);
      E = this.tube * Math.sin(v);
      y.x += m * u.x + E * f.x;
      y.y += m * u.y + E * f.y;
      y.z += m * u.z + E * f.z;
      this.grid[p][d] = s(y.x, y.y, y.z)
    }
  }
  for (var p = 0; p < this.radialSegments; ++p)
    for (var d = 0; d < this.tubularSegments; ++d) {
      var R = (p + 1) % this.radialSegments,
        x = (d + 1) % this.tubularSegments,
        w = this.grid[p][d],
        H = this.grid[R][d],
        b = this.grid[R][x],
        _ = this.grid[p][x],
        S = new THREE.Vector2(p / this.radialSegments, d / this.tubularSegments),
        M = new THREE.Vector2((p + 1) / this.radialSegments, d / this.tubularSegments),
        C = new THREE.Vector2((p + 1) / this.radialSegments, (d + 1) / this.tubularSegments),
        A = new THREE.Vector2(p / this.radialSegments, (d + 1) / this.tubularSegments);
      this.faces.push(new THREE.Face4(w, H, b, _));
      this.faceVertexUvs[0].push([S, M, C, A])
    }
  this.computeCentroids();
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry = function(e, t, r, i, n, o) {
  function a(e, t, r) {
    return S.vertices.push(new THREE.Vector3(e, t, r)) - 1
  }
  THREE.Geometry.call(this);
  this.path = e;
  this.segments = t || 64;
  this.radius = r || 1;
  this.radiusSegments = i || 8;
  this.closed = n || !1;
  o && (this.debug = new THREE.Object3D);
  this.grid = [];
  var s, l, c, h, u, f, p, d, m, E, g, v, y, T, R, x, w, H, b, _, S = this,
    M = this.segments + 1,
    C = new THREE.Vector3,
    A = new THREE.TubeGeometry.FrenetFrames(this.path, this.segments, this.closed),
    L = A.tangents,
    D = A.normals,
    P = A.binormals;
  this.tangents = L;
  this.normals = D;
  this.binormals = P;
  for (m = 0; M > m; m++) {
    this.grid[m] = [];
    h = m / (M - 1);
    d = e.getPointAt(h);
    s = L[m];
    l = D[m];
    c = P[m];
    if (this.debug) {
      this.debug.add(new THREE.ArrowHelper(s, d, r, 255));
      this.debug.add(new THREE.ArrowHelper(l, d, r, 16711680));
      this.debug.add(new THREE.ArrowHelper(c, d, r, 65280))
    }
    for (E = 0; E < this.radiusSegments; E++) {
      u = E / this.radiusSegments * 2 * Math.PI;
      f = -this.radius * Math.cos(u);
      p = this.radius * Math.sin(u);
      C.copy(d);
      C.x += f * l.x + p * c.x;
      C.y += f * l.y + p * c.y;
      C.z += f * l.z + p * c.z;
      this.grid[m][E] = a(C.x, C.y, C.z)
    }
  }
  for (m = 0; m < this.segments; m++)
    for (E = 0; E < this.radiusSegments; E++) {
      g = this.closed ? (m + 1) % this.segments : m + 1;
      v = (E + 1) % this.radiusSegments;
      y = this.grid[m][E];
      T = this.grid[g][E];
      R = this.grid[g][v];
      x = this.grid[m][v];
      w = new THREE.Vector2(m / this.segments, E / this.radiusSegments);
      H = new THREE.Vector2((m + 1) / this.segments, E / this.radiusSegments);
      b = new THREE.Vector2((m + 1) / this.segments, (E + 1) / this.radiusSegments);
      _ = new THREE.Vector2(m / this.segments, (E + 1) / this.radiusSegments);
      this.faces.push(new THREE.Face4(y, T, R, x));
      this.faceVertexUvs[0].push([w, H, b, _])
    }
  this.computeCentroids();
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames = function(e, t, r) {
  function i() {
    p[0] = new THREE.Vector3;
    d[0] = new THREE.Vector3;
    o = Number.MAX_VALUE;
    a = Math.abs(f[0].x);
    s = Math.abs(f[0].y);
    l = Math.abs(f[0].z);
    if (o >= a) {
      o = a;
      u.set(1, 0, 0)
    }
    if (o >= s) {
      o = s;
      u.set(0, 1, 0)
    }
    o >= l && u.set(0, 0, 1);
    m.crossVectors(f[0], u).normalize();
    p[0].crossVectors(f[0], m);
    d[0].crossVectors(f[0], p[0])
  }
  var n, o, a, s, l, c, h, u = (new THREE.Vector3, new THREE.Vector3),
    f = (new THREE.Vector3, []),
    p = [],
    d = [],
    m = new THREE.Vector3,
    E = new THREE.Matrix4,
    g = t + 1,
    v = 1e-4;
  this.tangents = f;
  this.normals = p;
  this.binormals = d;
  for (c = 0; g > c; c++) {
    h = c / (g - 1);
    f[c] = e.getTangentAt(h);
    f[c].normalize()
  }
  i();
  for (c = 1; g > c; c++) {
    p[c] = p[c - 1].clone();
    d[c] = d[c - 1].clone();
    m.crossVectors(f[c - 1], f[c]);
    if (m.length() > v) {
      m.normalize();
      n = Math.acos(f[c - 1].dot(f[c]));
      p[c].applyMatrix4(E.makeRotationAxis(m, n))
    }
    d[c].crossVectors(f[c], p[c])
  }
  if (r) {
    n = Math.acos(p[0].dot(p[g - 1]));
    n /= g - 1;
    f[0].dot(m.crossVectors(p[0], p[g - 1])) > 0 && (n = -n);
    for (c = 1; g > c; c++) {
      p[c].applyMatrix4(E.makeRotationAxis(f[c], n * c));
      d[c].crossVectors(f[c], p[c])
    }
  }
};
THREE.PolyhedronGeometry = function(e, t, r, i) {
  function n(e) {
    var t = e.normalize().clone();
    t.index = h.vertices.push(t) - 1;
    var r = s(e) / 2 / Math.PI + .5,
      i = l(e) / Math.PI + .5;
    t.uv = new THREE.Vector2(r, 1 - i);
    return t
  }

  function o(e, t, r) {
    var i = new THREE.Face3(e.index, t.index, r.index, [e.clone(), t.clone(), r.clone()]);
    i.centroid.add(e).add(t).add(r).divideScalar(3);
    i.normal.copy(i.centroid).normalize();
    h.faces.push(i);
    var n = s(i.centroid);
    h.faceVertexUvs[0].push([c(e.uv, e, n), c(t.uv, t, n), c(r.uv, r, n)])
  }

  function a(e, t) {
    for (var r = Math.pow(2, t), i = (Math.pow(4, t), n(h.vertices[e.a])), a = n(h.vertices[e.b]), s = n(h.vertices[e.c]), l = [], c = 0; r >= c; c++) {
      l[c] = [];
      for (var u = n(i.clone().lerp(s, c / r)), f = n(a.clone().lerp(s, c / r)), p = r - c, d = 0; p >= d; d++) 0 == d && c == r ? l[c][d] = u : l[c][d] = n(u.clone().lerp(f, d / p))
    }
    for (var c = 0; r > c; c++)
      for (var d = 0; 2 * (r - c) - 1 > d; d++) {
        var m = Math.floor(d / 2);
        d % 2 == 0 ? o(l[c][m + 1], l[c + 1][m], l[c][m]) : o(l[c][m + 1], l[c + 1][m + 1], l[c + 1][m])
      }
  }

  function s(e) {
    return Math.atan2(e.z, -e.x)
  }

  function l(e) {
    return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
  }

  function c(e, t, r) {
    0 > r && 1 === e.x && (e = new THREE.Vector2(e.x - 1, e.y));
    0 === t.x && 0 === t.z && (e = new THREE.Vector2(r / 2 / Math.PI + .5, e.y));
    return e.clone()
  }
  THREE.Geometry.call(this);
  r = r || 1;
  i = i || 0;
  for (var h = this, u = 0, f = e.length; f > u; u++) n(new THREE.Vector3(e[u][0], e[u][1], e[u][2]));
  for (var p = this.vertices, d = [], u = 0, f = t.length; f > u; u++) {
    var m = p[t[u][0]],
      E = p[t[u][1]],
      g = p[t[u][2]];
    d[u] = new THREE.Face3(m.index, E.index, g.index, [m.clone(), E.clone(), g.clone()])
  }
  for (var u = 0, f = d.length; f > u; u++) a(d[u], i);
  for (var u = 0, f = this.faceVertexUvs[0].length; f > u; u++) {
    var v = this.faceVertexUvs[0][u],
      y = v[0].x,
      T = v[1].x,
      R = v[2].x,
      x = Math.max(y, Math.max(T, R)),
      w = Math.min(y, Math.min(T, R));
    if (x > .9 && .1 > w) {
      .2 > y && (v[0].x += 1);
      .2 > T && (v[1].x += 1);
      .2 > R && (v[2].x += 1)
    }
  }
  this.mergeVertices();
  for (var u = 0, f = this.vertices.length; f > u; u++) this.vertices[u].multiplyScalar(r);
  this.computeCentroids();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3, r)
};
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry = function(e, t) {
  this.radius = e;
  this.detail = t;
  var r = (1 + Math.sqrt(5)) / 2,
    i = [
      [-1, r, 0],
      [1, r, 0],
      [-1, -r, 0],
      [1, -r, 0],
      [0, -1, r],
      [0, 1, r],
      [0, -1, -r],
      [0, 1, -r],
      [r, 0, -1],
      [r, 0, 1],
      [-r, 0, -1],
      [-r, 0, 1]
    ],
    n = [
      [0, 11, 5],
      [0, 5, 1],
      [0, 1, 7],
      [0, 7, 10],
      [0, 10, 11],
      [1, 5, 9],
      [5, 11, 4],
      [11, 10, 2],
      [10, 7, 6],
      [7, 1, 8],
      [3, 9, 4],
      [3, 4, 2],
      [3, 2, 6],
      [3, 6, 8],
      [3, 8, 9],
      [4, 9, 5],
      [2, 4, 11],
      [6, 2, 10],
      [8, 6, 7],
      [9, 8, 1]
    ];
  THREE.PolyhedronGeometry.call(this, i, n, e, t)
};
THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry = function(e, t) {
  var r = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ],
    i = [
      [0, 2, 4],
      [0, 4, 3],
      [0, 3, 5],
      [0, 5, 2],
      [1, 2, 5],
      [1, 5, 3],
      [1, 3, 4],
      [1, 4, 2]
    ];
  THREE.PolyhedronGeometry.call(this, r, i, e, t)
};
THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TetrahedronGeometry = function(e, t) {
  var r = [
      [1, 1, 1],
      [-1, -1, 1],
      [-1, 1, -1],
      [1, -1, -1]
    ],
    i = [
      [2, 1, 0],
      [0, 3, 2],
      [1, 3, 0],
      [2, 3, 1]
    ];
  THREE.PolyhedronGeometry.call(this, r, i, e, t)
};
THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry = function(e, t, r, i) {
  THREE.Geometry.call(this);
  var n = this.vertices,
    o = this.faces,
    a = this.faceVertexUvs[0];
  i = void 0 === i ? !1 : i;
  var s, l, c, h, u, f = t + 1;
  for (s = 0; r >= s; s++) {
    u = s / r;
    for (l = 0; t >= l; l++) {
      h = l / t;
      c = e(h, u);
      n.push(c)
    }
  }
  var p, d, m, E, g, v, y, T;
  for (s = 0; r > s; s++)
    for (l = 0; t > l; l++) {
      p = s * f + l;
      d = s * f + l + 1;
      m = (s + 1) * f + l;
      E = (s + 1) * f + l + 1;
      g = new THREE.Vector2(l / t, s / r);
      v = new THREE.Vector2((l + 1) / t, s / r);
      y = new THREE.Vector2(l / t, (s + 1) / r);
      T = new THREE.Vector2((l + 1) / t, (s + 1) / r);
      if (i) {
        o.push(new THREE.Face3(p, d, m));
        o.push(new THREE.Face3(d, E, m));
        a.push([g, v, y]);
        a.push([v, T, y])
      } else {
        o.push(new THREE.Face4(p, d, E, m));
        a.push([g, v, T, y])
      }
    }
  this.computeCentroids();
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ConvexGeometry = function(e) {
  function t(t) {
    var i = e[t].clone(),
      a = i.length();
    i.x += a * o();
    i.y += a * o();
    i.z += a * o();
    for (var l = [], c = 0; c < s.length;) {
      var h = s[c];
      if (r(h, i)) {
        for (var u = 0; 3 > u; u++) {
          for (var f = [h[u], h[(u + 1) % 3]], p = !0, d = 0; d < l.length; d++)
            if (n(l[d], f)) {
              l[d] = l[l.length - 1];
              l.pop();
              p = !1;
              break
            }
          p && l.push(f)
        }
        s[c] = s[s.length - 1];
        s.pop()
      } else c++
    }
    for (var d = 0; d < l.length; d++) s.push([l[d][0], l[d][1], t])
  }

  function r(t, r) {
    var n = e[t[0]],
      o = e[t[1]],
      a = e[t[2]],
      s = i(n, o, a),
      l = s.dot(n);
    return s.dot(r) >= l
  }

  function i(e, t, r) {
    var i = new THREE.Vector3,
      n = new THREE.Vector3;
    i.subVectors(r, t);
    n.subVectors(e, t);
    i.cross(n);
    i.normalize();
    return i
  }

  function n(e, t) {
    return e[0] === t[1] && e[1] === t[0]
  }

  function o() {
    return 2 * (Math.random() - .5) * 1e-6
  }

  function a(e) {
    var t = e.length();
    return new THREE.Vector2(e.x / t, e.y / t)
  }
  THREE.Geometry.call(this);
  for (var s = [
      [0, 1, 2],
      [0, 2, 1]
    ], l = 3; l < e.length; l++) t(l);
  for (var c = 0, h = new Array(e.length), l = 0; l < s.length; l++)
    for (var u = s[l], f = 0; 3 > f; f++) {
      if (void 0 === h[u[f]]) {
        h[u[f]] = c++;
        this.vertices.push(e[u[f]])
      }
      u[f] = h[u[f]]
    }
  for (var l = 0; l < s.length; l++) this.faces.push(new THREE.Face3(s[l][0], s[l][1], s[l][2]));
  for (var l = 0; l < this.faces.length; l++) {
    var u = this.faces[l];
    this.faceVertexUvs[0].push([a(this.vertices[u.a]), a(this.vertices[u.b]), a(this.vertices[u.c])])
  }
  this.computeCentroids();
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.ConvexGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.AxisHelper = function(e) {
  e = e || 1;
  var t = new THREE.Geometry;
  t.vertices.push(new THREE.Vector3, new THREE.Vector3(e, 0, 0), new THREE.Vector3, new THREE.Vector3(0, e, 0), new THREE.Vector3, new THREE.Vector3(0, 0, e));
  t.colors.push(new THREE.Color(16711680), new THREE.Color(16755200), new THREE.Color(65280), new THREE.Color(11206400), new THREE.Color(255), new THREE.Color(43775));
  var r = new THREE.LineBasicMaterial({
    vertexColors: THREE.VertexColors
  });
  THREE.Line.call(this, t, r, THREE.LinePieces)
};
THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype);
THREE.ArrowHelper = function(e, t, r, i) {
  THREE.Object3D.call(this);
  void 0 === i && (i = 16776960);
  void 0 === r && (r = 1);
  this.position = t;
  this.useQuaternion = !0;
  var n = new THREE.Geometry;
  n.vertices.push(new THREE.Vector3(0, 0, 0));
  n.vertices.push(new THREE.Vector3(0, 1, 0));
  this.line = new THREE.Line(n, new THREE.LineBasicMaterial({
    color: i
  }));
  this.line.matrixAutoUpdate = !1;
  this.add(this.line);
  var o = new THREE.CylinderGeometry(0, .05, .25, 5, 1);
  o.applyMatrix((new THREE.Matrix4).makeTranslation(0, .875, 0));
  this.cone = new THREE.Mesh(o, new THREE.MeshBasicMaterial({
    color: i
  }));
  this.cone.matrixAutoUpdate = !1;
  this.add(this.cone);
  this.setDirection(e);
  this.setLength(r)
};
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper.prototype.setDirection = function() {
  var e, t = new THREE.Vector3;
  return function(r) {
    if (r.y > .999) this.quaternion.set(0, 0, 0, 1);
    else if (r.y < -.999) this.quaternion.set(1, 0, 0, 0);
    else {
      t.set(r.z, 0, -r.x).normalize();
      e = Math.acos(r.y);
      this.quaternion.setFromAxisAngle(t, e)
    }
  }
}();
THREE.ArrowHelper.prototype.setLength = function(e) {
  this.scale.set(e, e, e)
};
THREE.ArrowHelper.prototype.setColor = function(e) {
  this.line.material.color.setHex(e);
  this.cone.material.color.setHex(e)
};
THREE.BoxHelper = function(e) {
  e = e || 1;
  var t = new THREE.Geometry,
    r = [new THREE.Vector3(e, e, e), new THREE.Vector3(-e, e, e), new THREE.Vector3(-e, -e, e), new THREE.Vector3(e, -e, e), new THREE.Vector3(e, e, -e), new THREE.Vector3(-e, e, -e), new THREE.Vector3(-e, -e, -e), new THREE.Vector3(e, -e, -e)];
  t.vertices.push(r[0], r[1], r[1], r[2], r[2], r[3], r[3], r[0], r[4], r[5], r[5], r[6], r[6], r[7], r[7], r[4], r[0], r[4], r[1], r[5], r[2], r[6], r[3], r[7]);
  this.vertices = r;
  THREE.Line.call(this, t, new THREE.LineBasicMaterial, THREE.LinePieces)
};
THREE.BoxHelper.prototype = Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update = function(e) {
  var t = e.geometry;
  null === t.boundingBox && t.computeBoundingBox();
  var r = t.boundingBox.min,
    i = t.boundingBox.max,
    n = this.vertices;
  n[0].set(i.x, i.y, i.z);
  n[1].set(r.x, i.y, i.z);
  n[2].set(r.x, r.y, i.z);
  n[3].set(i.x, r.y, i.z);
  n[4].set(i.x, i.y, r.z);
  n[5].set(r.x, i.y, r.z);
  n[6].set(r.x, r.y, r.z);
  n[7].set(i.x, r.y, r.z);
  this.geometry.computeBoundingSphere();
  this.geometry.verticesNeedUpdate = !0;
  this.matrixAutoUpdate = !1;
  this.matrixWorld = e.matrixWorld
};
THREE.CameraHelper = function(e) {
  function t(e, t, i) {
    r(e, i);
    r(t, i)
  }

  function r(e, t) {
    i.vertices.push(new THREE.Vector3);
    i.colors.push(new THREE.Color(t));
    void 0 === o[e] && (o[e] = []);
    o[e].push(i.vertices.length - 1)
  }
  THREE.Line.call(this);
  var i = new THREE.Geometry,
    n = new THREE.LineBasicMaterial({
      color: 16777215,
      vertexColors: THREE.FaceColors
    }),
    o = {},
    a = 16755200,
    s = 16711680,
    l = 43775,
    c = 16777215,
    h = 3355443;
  t("n1", "n2", a);
  t("n2", "n4", a);
  t("n4", "n3", a);
  t("n3", "n1", a);
  t("f1", "f2", a);
  t("f2", "f4", a);
  t("f4", "f3", a);
  t("f3", "f1", a);
  t("n1", "f1", a);
  t("n2", "f2", a);
  t("n3", "f3", a);
  t("n4", "f4", a);
  t("p", "n1", s);
  t("p", "n2", s);
  t("p", "n3", s);
  t("p", "n4", s);
  t("u1", "u2", l);
  t("u2", "u3", l);
  t("u3", "u1", l);
  t("c", "t", c);
  t("p", "c", h);
  t("cn1", "cn2", h);
  t("cn3", "cn4", h);
  t("cf1", "cf2", h);
  t("cf3", "cf4", h);
  THREE.Line.call(this, i, n, THREE.LinePieces);
  this.camera = e;
  this.matrixWorld = e.matrixWorld;
  this.matrixAutoUpdate = !1;
  this.pointMap = o;
  this.update()
};
THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update = function() {
  var e = new THREE.Vector3,
    t = new THREE.Camera,
    r = new THREE.Projector;
  return function() {
    function i(i, o, a, s) {
      e.set(o, a, s);
      r.unprojectVector(e, t);
      var l = n.pointMap[i];
      if (void 0 !== l)
        for (var c = 0, h = l.length; h > c; c++) n.geometry.vertices[l[c]].copy(e)
    }
    var n = this,
      o = 1,
      a = 1;
    t.projectionMatrix.copy(this.camera.projectionMatrix);
    i("c", 0, 0, -1);
    i("t", 0, 0, 1);
    i("n1", -o, -a, -1);
    i("n2", o, -a, -1);
    i("n3", -o, a, -1);
    i("n4", o, a, -1);
    i("f1", -o, -a, 1);
    i("f2", o, -a, 1);
    i("f3", -o, a, 1);
    i("f4", o, a, 1);
    i("u1", .7 * o, 1.1 * a, -1);
    i("u2", .7 * -o, 1.1 * a, -1);
    i("u3", 0, 2 * a, -1);
    i("cf1", -o, 0, 1);
    i("cf2", o, 0, 1);
    i("cf3", 0, -a, 1);
    i("cf4", 0, a, 1);
    i("cn1", -o, 0, -1);
    i("cn2", o, 0, -1);
    i("cn3", 0, -a, -1);
    i("cn4", 0, a, -1);
    this.geometry.verticesNeedUpdate = !0
  }
}();
THREE.DirectionalLightHelper = function(e, t) {
  THREE.Object3D.call(this);
  this.matrixAutoUpdate = !1;
  this.light = e;
  var r = new THREE.SphereGeometry(t, 4, 2),
    i = new THREE.MeshBasicMaterial({
      fog: !1,
      wireframe: !0
    });
  i.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.lightSphere = new THREE.Mesh(r, i);
  this.lightSphere.matrixWorld = this.light.matrixWorld;
  this.lightSphere.matrixAutoUpdate = !1;
  this.add(this.lightSphere);
  r = new THREE.Geometry;
  r.vertices.push(this.light.position);
  r.vertices.push(this.light.target.position);
  r.computeLineDistances();
  i = new THREE.LineDashedMaterial({
    dashSize: 4,
    gapSize: 4,
    opacity: .75,
    transparent: !0,
    fog: !1
  });
  i.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.targetLine = new THREE.Line(r, i);
  this.add(this.targetLine)
};
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.update = function() {
  this.lightSphere.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.targetLine.geometry.computeLineDistances();
  this.targetLine.geometry.verticesNeedUpdate = !0;
  this.targetLine.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
};
THREE.GridHelper = function(e, t) {
  for (var r = new THREE.Geometry, i = new THREE.LineBasicMaterial({
      vertexColors: THREE.VertexColors
    }), n = new THREE.Color(4473924), o = new THREE.Color(8947848), a = -e; e >= a; a += t) {
    r.vertices.push(new THREE.Vector3(-e, 0, a));
    r.vertices.push(new THREE.Vector3(e, 0, a));
    r.vertices.push(new THREE.Vector3(a, 0, -e));
    r.vertices.push(new THREE.Vector3(a, 0, e));
    var s = 0 === a ? n : o;
    r.colors.push(s, s, s, s)
  }
  THREE.Line.call(this, r, i, THREE.LinePieces)
};
THREE.GridHelper.prototype = Object.create(THREE.Line.prototype);
THREE.HemisphereLightHelper = function(e, t, r, i) {
  THREE.Object3D.call(this);
  this.light = e;
  var n = new THREE.SphereGeometry(t, 4, 2);
  n.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
  for (var o = 0, a = 8; a > o; o++) n.faces[o].materialIndex = 4 > o ? 0 : 1;
  var s = new THREE.MeshBasicMaterial({
    fog: !1,
    wireframe: !0
  });
  s.color.copy(e.color).multiplyScalar(e.intensity);
  var l = new THREE.MeshBasicMaterial({
    fog: !1,
    wireframe: !0
  });
  l.color.copy(e.groundColor).multiplyScalar(e.intensity);
  this.lightSphere = new THREE.Mesh(n, new THREE.MeshFaceMaterial([s, l]));
  this.lightSphere.position = e.position;
  this.lightSphere.lookAt(new THREE.Vector3);
  this.add(this.lightSphere)
};
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.update = function() {
  this.lightSphere.lookAt(new THREE.Vector3);
  this.lightSphere.material.materials[0].color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.lightSphere.material.materials[1].color.copy(this.light.groundColor).multiplyScalar(this.light.intensity)
};
THREE.PointLightHelper = function(e, t) {
  THREE.Object3D.call(this);
  this.matrixAutoUpdate = !1;
  this.light = e;
  var r = new THREE.SphereGeometry(t, 4, 2),
    i = new THREE.MeshBasicMaterial({
      fog: !1,
      wireframe: !0
    });
  i.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.lightSphere = new THREE.Mesh(r, i);
  this.lightSphere.matrixWorld = this.light.matrixWorld;
  this.lightSphere.matrixAutoUpdate = !1;
  this.add(this.lightSphere)
};
THREE.PointLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.PointLightHelper.prototype.update = function() {
  this.lightSphere.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
};
THREE.SpotLightHelper = function(e, t) {
  THREE.Object3D.call(this);
  this.matrixAutoUpdate = !1;
  this.light = e;
  var r = new THREE.SphereGeometry(t, 4, 2),
    i = new THREE.MeshBasicMaterial({
      fog: !1,
      wireframe: !0
    });
  i.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.lightSphere = new THREE.Mesh(r, i);
  this.lightSphere.matrixWorld = this.light.matrixWorld;
  this.lightSphere.matrixAutoUpdate = !1;
  this.add(this.lightSphere);
  r = new THREE.CylinderGeometry(1e-4, 1, 1, 8, 1, !0);
  r.applyMatrix((new THREE.Matrix4).makeTranslation(0, -.5, 0));
  r.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
  i = new THREE.MeshBasicMaterial({
    fog: !1,
    wireframe: !0,
    opacity: .3,
    transparent: !0
  });
  i.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.lightCone = new THREE.Mesh(r, i);
  this.lightCone.position = this.light.position;
  var n = e.distance ? e.distance : 1e4,
    o = n * Math.tan(e.angle);
  this.lightCone.scale.set(o, o, n);
  this.lightCone.lookAt(this.light.target.position);
  this.add(this.lightCone)
};
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.update = function() {
  var e = this.light.distance ? this.light.distance : 1e4,
    t = e * Math.tan(this.light.angle);
  this.lightCone.scale.set(t, t, e);
  this.lightCone.lookAt(this.light.target.position);
  this.lightSphere.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.lightCone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
};
THREE.ImmediateRenderObject = function() {
  THREE.Object3D.call(this);
  this.render = function(e) {}
};
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare = function(e, t, r, i, n) {
  THREE.Object3D.call(this);
  this.lensFlares = [];
  this.positionScreen = new THREE.Vector3;
  this.customUpdateCallback = void 0;
  void 0 !== e && this.add(e, t, r, i, n)
};
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add = function(e, t, r, i, n, o) {
  void 0 === t && (t = -1);
  void 0 === r && (r = 0);
  void 0 === o && (o = 1);
  void 0 === n && (n = new THREE.Color(16777215));
  void 0 === i && (i = THREE.NormalBlending);
  r = Math.min(r, Math.max(0, r));
  this.lensFlares.push({
    texture: e,
    size: t,
    distance: r,
    x: 0,
    y: 0,
    z: 0,
    scale: 1,
    rotation: 1,
    opacity: o,
    color: n,
    blending: i
  })
};
THREE.LensFlare.prototype.updateLensFlares = function() {
  var e, t, r = this.lensFlares.length,
    i = 2 * -this.positionScreen.x,
    n = 2 * -this.positionScreen.y;
  for (e = 0; r > e; e++) {
    t = this.lensFlares[e];
    t.x = this.positionScreen.x + i * t.distance;
    t.y = this.positionScreen.y + n * t.distance;
    t.wantedRotation = t.x * Math.PI * .25;
    t.rotation += .25 * (t.wantedRotation - t.rotation)
  }
};
THREE.MorphBlendMesh = function(e, t) {
  THREE.Mesh.call(this, e, t);
  this.animationsMap = {};
  this.animationsList = [];
  var r = this.geometry.morphTargets.length,
    i = "__default",
    n = 0,
    o = r - 1,
    a = r / 1;
  this.createAnimation(i, n, o, a);
  this.setAnimationWeight(i, 1)
};
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation = function(e, t, r, i) {
  var n = {
    startFrame: t,
    endFrame: r,
    length: r - t + 1,
    fps: i,
    duration: (r - t) / i,
    lastFrame: 0,
    currentFrame: 0,
    active: !1,
    time: 0,
    direction: 1,
    weight: 1,
    directionBackwards: !1,
    mirroredLoop: !1
  };
  this.animationsMap[e] = n;
  this.animationsList.push(n)
};
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(e) {
  for (var t, r = /([a-z]+)(\d+)/, i = {}, n = this.geometry, o = 0, a = n.morphTargets.length; a > o; o++) {
    var s = n.morphTargets[o],
      l = s.name.match(r);
    if (l && l.length > 1) {
      var c = l[1];
      l[2];
      i[c] || (i[c] = {
        start: 1 / 0,
        end: -(1 / 0)
      });
      var h = i[c];
      o < h.start && (h.start = o);
      o > h.end && (h.end = o);
      t || (t = c)
    }
  }
  for (var c in i) {
    var h = i[c];
    this.createAnimation(c, h.start, h.end, e)
  }
  this.firstAnimation = t
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(e) {
  var t = this.animationsMap[e];
  if (t) {
    t.direction = 1;
    t.directionBackwards = !1
  }
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(e) {
  var t = this.animationsMap[e];
  if (t) {
    t.direction = -1;
    t.directionBackwards = !0
  }
};
THREE.MorphBlendMesh.prototype.setAnimationFPS = function(e, t) {
  var r = this.animationsMap[e];
  if (r) {
    r.fps = t;
    r.duration = (r.end - r.start) / r.fps
  }
};
THREE.MorphBlendMesh.prototype.setAnimationDuration = function(e, t) {
  var r = this.animationsMap[e];
  if (r) {
    r.duration = t;
    r.fps = (r.end - r.start) / r.duration
  }
};
THREE.MorphBlendMesh.prototype.setAnimationWeight = function(e, t) {
  var r = this.animationsMap[e];
  r && (r.weight = t)
};
THREE.MorphBlendMesh.prototype.setAnimationTime = function(e, t) {
  var r = this.animationsMap[e];
  r && (r.time = t)
};
THREE.MorphBlendMesh.prototype.getAnimationTime = function(e) {
  var t = 0,
    r = this.animationsMap[e];
  r && (t = r.time);
  return t
};
THREE.MorphBlendMesh.prototype.getAnimationDuration = function(e) {
  var t = -1,
    r = this.animationsMap[e];
  r && (t = r.duration);
  return t
};
THREE.MorphBlendMesh.prototype.playAnimation = function(e) {
  var t = this.animationsMap[e];
  if (t) {
    t.time = 0;
    t.active = !0
  } else console.warn("animation[" + e + "] undefined")
};
THREE.MorphBlendMesh.prototype.stopAnimation = function(e) {
  var t = this.animationsMap[e];
  t && (t.active = !1);
};
THREE.MorphBlendMesh.prototype.update = function(e) {
  for (var t = 0, r = this.animationsList.length; r > t; t++) {
    var i = this.animationsList[t];
    if (i.active) {
      var n = i.duration / i.length;
      i.time += i.direction * e;
      if (i.mirroredLoop) {
        if (i.time > i.duration || i.time < 0) {
          i.direction *= -1;
          if (i.time > i.duration) {
            i.time = i.duration;
            i.directionBackwards = !0
          }
          if (i.time < 0) {
            i.time = 0;
            i.directionBackwards = !1
          }
        }
      } else {
        i.time = i.time % i.duration;
        i.time < 0 && (i.time += i.duration)
      }
      var o = i.startFrame + THREE.Math.clamp(Math.floor(i.time / n), 0, i.length - 1),
        a = i.weight;
      if (o !== i.currentFrame) {
        this.morphTargetInfluences[i.lastFrame] = 0;
        this.morphTargetInfluences[i.currentFrame] = 1 * a;
        this.morphTargetInfluences[o] = 0;
        i.lastFrame = i.currentFrame;
        i.currentFrame = o
      }
      var s = i.time % n / n;
      i.directionBackwards && (s = 1 - s);
      this.morphTargetInfluences[i.currentFrame] = s * a;
      this.morphTargetInfluences[i.lastFrame] = (1 - s) * a
    }
  }
};
THREE.LensFlarePlugin = function() {
  function e(e, r) {
    var i = t.createProgram(),
      n = t.createShader(t.FRAGMENT_SHADER),
      o = t.createShader(t.VERTEX_SHADER),
      a = "precision " + r + " float;\n";
    t.shaderSource(n, a + e.fragmentShader);
    t.shaderSource(o, a + e.vertexShader);
    t.compileShader(n);
    t.compileShader(o);
    t.attachShader(i, n);
    t.attachShader(i, o);
    t.linkProgram(i);
    return i
  }
  var t, r, i, n = {};
  this.init = function(o) {
    t = o.context;
    r = o;
    i = o.getPrecision();
    n.vertices = new Float32Array(16);
    n.faces = new Uint16Array(6);
    var a = 0;
    n.vertices[a++] = -1;
    n.vertices[a++] = -1;
    n.vertices[a++] = 0;
    n.vertices[a++] = 0;
    n.vertices[a++] = 1;
    n.vertices[a++] = -1;
    n.vertices[a++] = 1;
    n.vertices[a++] = 0;
    n.vertices[a++] = 1;
    n.vertices[a++] = 1;
    n.vertices[a++] = 1;
    n.vertices[a++] = 1;
    n.vertices[a++] = -1;
    n.vertices[a++] = 1;
    n.vertices[a++] = 0;
    n.vertices[a++] = 1;
    a = 0;
    n.faces[a++] = 0;
    n.faces[a++] = 1;
    n.faces[a++] = 2;
    n.faces[a++] = 0;
    n.faces[a++] = 2;
    n.faces[a++] = 3;
    n.vertexBuffer = t.createBuffer();
    n.elementBuffer = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, n.vertexBuffer);
    t.bufferData(t.ARRAY_BUFFER, n.vertices, t.STATIC_DRAW);
    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.elementBuffer);
    t.bufferData(t.ELEMENT_ARRAY_BUFFER, n.faces, t.STATIC_DRAW);
    n.tempTexture = t.createTexture();
    n.occlusionTexture = t.createTexture();
    t.bindTexture(t.TEXTURE_2D, n.tempTexture);
    t.texImage2D(t.TEXTURE_2D, 0, t.RGB, 16, 16, 0, t.RGB, t.UNSIGNED_BYTE, null);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST);
    t.bindTexture(t.TEXTURE_2D, n.occlusionTexture);
    t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 16, 16, 0, t.RGBA, t.UNSIGNED_BYTE, null);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST);
    if (t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS) <= 0) {
      n.hasVertexTexture = !1;
      n.program = e(THREE.ShaderFlares.lensFlare, i)
    } else {
      n.hasVertexTexture = !0;
      n.program = e(THREE.ShaderFlares.lensFlareVertexTexture, i)
    }
    n.attributes = {};
    n.uniforms = {};
    n.attributes.vertex = t.getAttribLocation(n.program, "position");
    n.attributes.uv = t.getAttribLocation(n.program, "uv");
    n.uniforms.renderType = t.getUniformLocation(n.program, "renderType");
    n.uniforms.map = t.getUniformLocation(n.program, "map");
    n.uniforms.occlusionMap = t.getUniformLocation(n.program, "occlusionMap");
    n.uniforms.opacity = t.getUniformLocation(n.program, "opacity");
    n.uniforms.color = t.getUniformLocation(n.program, "color");
    n.uniforms.scale = t.getUniformLocation(n.program, "scale");
    n.uniforms.rotation = t.getUniformLocation(n.program, "rotation");
    n.uniforms.screenPosition = t.getUniformLocation(n.program, "screenPosition")
  };
  this.render = function(e, i, o, a) {
    var s = e.__webglFlares,
      l = s.length;
    if (l) {
      var c = new THREE.Vector3,
        h = a / o,
        u = .5 * o,
        f = .5 * a,
        p = 16 / a,
        d = new THREE.Vector2(p * h, p),
        m = new THREE.Vector3(1, 1, 0),
        E = new THREE.Vector2(1, 1),
        g = n.uniforms,
        v = n.attributes;
      t.useProgram(n.program);
      t.enableVertexAttribArray(n.attributes.vertex);
      t.enableVertexAttribArray(n.attributes.uv);
      t.uniform1i(g.occlusionMap, 0);
      t.uniform1i(g.map, 1);
      t.bindBuffer(t.ARRAY_BUFFER, n.vertexBuffer);
      t.vertexAttribPointer(v.vertex, 2, t.FLOAT, !1, 16, 0);
      t.vertexAttribPointer(v.uv, 2, t.FLOAT, !1, 16, 8);
      t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.elementBuffer);
      t.disable(t.CULL_FACE);
      t.depthMask(!1);
      var y, T, R, x, w;
      for (y = 0; l > y; y++) {
        p = 16 / a;
        d.set(p * h, p);
        x = s[y];
        c.set(x.matrixWorld.elements[12], x.matrixWorld.elements[13], x.matrixWorld.elements[14]);
        c.applyMatrix4(i.matrixWorldInverse);
        c.applyProjection(i.projectionMatrix);
        m.copy(c);
        E.x = m.x * u + u;
        E.y = m.y * f + f;
        if (n.hasVertexTexture || E.x > 0 && E.x < o && E.y > 0 && E.y < a) {
          t.activeTexture(t.TEXTURE1);
          t.bindTexture(t.TEXTURE_2D, n.tempTexture);
          t.copyTexImage2D(t.TEXTURE_2D, 0, t.RGB, E.x - 8, E.y - 8, 16, 16, 0);
          t.uniform1i(g.renderType, 0);
          t.uniform2f(g.scale, d.x, d.y);
          t.uniform3f(g.screenPosition, m.x, m.y, m.z);
          t.disable(t.BLEND);
          t.enable(t.DEPTH_TEST);
          t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0);
          t.activeTexture(t.TEXTURE0);
          t.bindTexture(t.TEXTURE_2D, n.occlusionTexture);
          t.copyTexImage2D(t.TEXTURE_2D, 0, t.RGBA, E.x - 8, E.y - 8, 16, 16, 0);
          t.uniform1i(g.renderType, 1);
          t.disable(t.DEPTH_TEST);
          t.activeTexture(t.TEXTURE1);
          t.bindTexture(t.TEXTURE_2D, n.tempTexture);
          t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0);
          x.positionScreen.copy(m);
          x.customUpdateCallback ? x.customUpdateCallback(x) : x.updateLensFlares();
          t.uniform1i(g.renderType, 2);
          t.enable(t.BLEND);
          for (T = 0, R = x.lensFlares.length; R > T; T++) {
            w = x.lensFlares[T];
            if (w.opacity > .001 && w.scale > .001) {
              m.x = w.x;
              m.y = w.y;
              m.z = w.z;
              p = w.size * w.scale / a;
              d.x = p * h;
              d.y = p;
              t.uniform3f(g.screenPosition, m.x, m.y, m.z);
              t.uniform2f(g.scale, d.x, d.y);
              t.uniform1f(g.rotation, w.rotation);
              t.uniform1f(g.opacity, w.opacity);
              t.uniform3f(g.color, w.color.r, w.color.g, w.color.b);
              r.setBlending(w.blending, w.blendEquation, w.blendSrc, w.blendDst);
              r.setTexture(w.texture, 1);
              t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0)
            }
          }
        }
      }
      t.enable(t.CULL_FACE);
      t.enable(t.DEPTH_TEST);
      t.depthMask(!0)
    }
  }
};
THREE.ShadowMapPlugin = function() {
  function e(e, t) {
    var r = new THREE.DirectionalLight;
    r.isVirtual = !0;
    r.onlyShadow = !0;
    r.castShadow = !0;
    r.shadowCameraNear = e.shadowCameraNear;
    r.shadowCameraFar = e.shadowCameraFar;
    r.shadowCameraLeft = e.shadowCameraLeft;
    r.shadowCameraRight = e.shadowCameraRight;
    r.shadowCameraBottom = e.shadowCameraBottom;
    r.shadowCameraTop = e.shadowCameraTop;
    r.shadowCameraVisible = e.shadowCameraVisible;
    r.shadowDarkness = e.shadowDarkness;
    r.shadowBias = e.shadowCascadeBias[t];
    r.shadowMapWidth = e.shadowCascadeWidth[t];
    r.shadowMapHeight = e.shadowCascadeHeight[t];
    r.pointsWorld = [];
    r.pointsFrustum = [];
    for (var i = r.pointsWorld, n = r.pointsFrustum, o = 0; 8 > o; o++) {
      i[o] = new THREE.Vector3;
      n[o] = new THREE.Vector3
    }
    var a = e.shadowCascadeNearZ[t],
      s = e.shadowCascadeFarZ[t];
    n[0].set(-1, -1, a);
    n[1].set(1, -1, a);
    n[2].set(-1, 1, a);
    n[3].set(1, 1, a);
    n[4].set(-1, -1, s);
    n[5].set(1, -1, s);
    n[6].set(-1, 1, s);
    n[7].set(1, 1, s);
    return r
  }

  function t(e, t) {
    var r = e.shadowCascadeArray[t];
    r.position.copy(e.position);
    r.target.position.copy(e.target.position);
    r.lookAt(r.target);
    r.shadowCameraVisible = e.shadowCameraVisible;
    r.shadowDarkness = e.shadowDarkness;
    r.shadowBias = e.shadowCascadeBias[t];
    var i = e.shadowCascadeNearZ[t],
      n = e.shadowCascadeFarZ[t],
      o = r.pointsFrustum;
    o[0].z = i;
    o[1].z = i;
    o[2].z = i;
    o[3].z = i;
    o[4].z = n;
    o[5].z = n;
    o[6].z = n;
    o[7].z = n
  }

  function r(e, t) {
    var r = t.shadowCamera,
      i = t.pointsFrustum,
      n = t.pointsWorld;
    f.set(1 / 0, 1 / 0, 1 / 0);
    p.set(-(1 / 0), -(1 / 0), -(1 / 0));
    for (var o = 0; 8 > o; o++) {
      var a = n[o];
      a.copy(i[o]);
      THREE.ShadowMapPlugin.__projector.unprojectVector(a, e);
      a.applyMatrix4(r.matrixWorldInverse);
      a.x < f.x && (f.x = a.x);
      a.x > p.x && (p.x = a.x);
      a.y < f.y && (f.y = a.y);
      a.y > p.y && (p.y = a.y);
      a.z < f.z && (f.z = a.z);
      a.z > p.z && (p.z = a.z)
    }
    r.left = f.x;
    r.right = p.x;
    r.top = p.y;
    r.bottom = f.y;
    r.updateProjectionMatrix()
  }

  function i(e) {
    return e.material instanceof THREE.MeshFaceMaterial ? e.material.materials[0] : e.material
  }
  var n, o, a, s, l, c, h = new THREE.Frustum,
    u = new THREE.Matrix4,
    f = new THREE.Vector3,
    p = new THREE.Vector3,
    d = new THREE.Vector3;
  this.init = function(e) {
    n = e.context;
    o = e;
    var t = THREE.ShaderLib.depthRGBA,
      r = THREE.UniformsUtils.clone(t.uniforms);
    a = new THREE.ShaderMaterial({
      fragmentShader: t.fragmentShader,
      vertexShader: t.vertexShader,
      uniforms: r
    });
    s = new THREE.ShaderMaterial({
      fragmentShader: t.fragmentShader,
      vertexShader: t.vertexShader,
      uniforms: r,
      morphTargets: !0
    });
    l = new THREE.ShaderMaterial({
      fragmentShader: t.fragmentShader,
      vertexShader: t.vertexShader,
      uniforms: r,
      skinning: !0
    });
    c = new THREE.ShaderMaterial({
      fragmentShader: t.fragmentShader,
      vertexShader: t.vertexShader,
      uniforms: r,
      morphTargets: !0,
      skinning: !0
    });
    a._shadowPass = !0;
    s._shadowPass = !0;
    l._shadowPass = !0;
    c._shadowPass = !0
  };
  this.render = function(e, t) {
    o.shadowMapEnabled && o.shadowMapAutoUpdate && this.update(e, t)
  };
  this.update = function(f, p) {
    var m, E, g, v, y, T, R, x, w, H, b, _, S, M, C = [],
      A = 0,
      L = null;
    n.clearColor(1, 1, 1, 1);
    n.disable(n.BLEND);
    n.enable(n.CULL_FACE);
    n.frontFace(n.CCW);
    o.shadowMapCullFace === THREE.CullFaceFront ? n.cullFace(n.FRONT) : n.cullFace(n.BACK);
    o.setDepthTest(!0);
    for (m = 0, E = f.__lights.length; E > m; m++) {
      S = f.__lights[m];
      if (S.castShadow)
        if (S instanceof THREE.DirectionalLight && S.shadowCascade)
          for (y = 0; y < S.shadowCascadeCount; y++) {
            var D;
            if (S.shadowCascadeArray[y]) D = S.shadowCascadeArray[y];
            else {
              D = e(S, y);
              D.originalCamera = p;
              var P = new THREE.Gyroscope;
              P.position = S.shadowCascadeOffset;
              P.add(D);
              P.add(D.target);
              p.add(P);
              S.shadowCascadeArray[y] = D;
              console.log("Created virtualLight", D)
            }
            t(S, y);
            C[A] = D;
            A++
          } else {
            C[A] = S;
            A++
          }
    }
    for (m = 0, E = C.length; E > m; m++) {
      S = C[m];
      if (!S.shadowMap) {
        var F = THREE.LinearFilter;
        o.shadowMapType === THREE.PCFSoftShadowMap && (F = THREE.NearestFilter);
        var N = {
          minFilter: F,
          magFilter: F,
          format: THREE.RGBAFormat
        };
        S.shadowMap = new THREE.WebGLRenderTarget(S.shadowMapWidth, S.shadowMapHeight, N);
        S.shadowMapSize = new THREE.Vector2(S.shadowMapWidth, S.shadowMapHeight);
        S.shadowMatrix = new THREE.Matrix4
      }
      if (!S.shadowCamera) {
        if (S instanceof THREE.SpotLight) S.shadowCamera = new THREE.PerspectiveCamera(S.shadowCameraFov, S.shadowMapWidth / S.shadowMapHeight, S.shadowCameraNear, S.shadowCameraFar);
        else {
          if (!(S instanceof THREE.DirectionalLight)) {
            console.error("Unsupported light type for shadow");
            continue
          }
          S.shadowCamera = new THREE.OrthographicCamera(S.shadowCameraLeft, S.shadowCameraRight, S.shadowCameraTop, S.shadowCameraBottom, S.shadowCameraNear, S.shadowCameraFar)
        }
        f.add(S.shadowCamera);
        f.autoUpdate === !0 && f.updateMatrixWorld()
      }
      if (S.shadowCameraVisible && !S.cameraHelper) {
        S.cameraHelper = new THREE.CameraHelper(S.shadowCamera);
        S.shadowCamera.add(S.cameraHelper)
      }
      S.isVirtual && D.originalCamera == p && r(p, S);
      T = S.shadowMap;
      R = S.shadowMatrix;
      x = S.shadowCamera;
      x.position.getPositionFromMatrix(S.matrixWorld);
      d.getPositionFromMatrix(S.target.matrixWorld);
      x.lookAt(d);
      x.updateMatrixWorld();
      x.matrixWorldInverse.getInverse(x.matrixWorld);
      S.cameraHelper && (S.cameraHelper.visible = S.shadowCameraVisible);
      S.shadowCameraVisible && S.cameraHelper.update();
      R.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
      R.multiply(x.projectionMatrix);
      R.multiply(x.matrixWorldInverse);
      u.multiplyMatrices(x.projectionMatrix, x.matrixWorldInverse);
      h.setFromMatrix(u);
      o.setRenderTarget(T);
      o.clear();
      M = f.__webglObjects;
      for (g = 0, v = M.length; v > g; g++) {
        b = M[g];
        _ = b.object;
        b.render = !1;
        if (_.visible && _.castShadow && (!(_ instanceof THREE.Mesh || _ instanceof THREE.ParticleSystem) || !_.frustumCulled || h.intersectsObject(_))) {
          _._modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, _.matrixWorld);
          b.render = !0
        }
      }
      var U, V, z;
      for (g = 0, v = M.length; v > g; g++) {
        b = M[g];
        if (b.render) {
          _ = b.object;
          w = b.buffer;
          U = i(_);
          V = _.geometry.morphTargets.length > 0 && U.morphTargets;
          z = _ instanceof THREE.SkinnedMesh && U.skinning;
          H = _.customDepthMaterial ? _.customDepthMaterial : z ? V ? c : l : V ? s : a;
          w instanceof THREE.BufferGeometry ? o.renderBufferDirect(x, f.__lights, L, H, w, _) : o.renderBuffer(x, f.__lights, L, H, w, _)
        }
      }
      M = f.__webglObjectsImmediate;
      for (g = 0, v = M.length; v > g; g++) {
        b = M[g];
        _ = b.object;
        if (_.visible && _.castShadow) {
          _._modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, _.matrixWorld);
          o.renderImmediateObject(x, f.__lights, L, a, _)
        }
      }
    }
    var B = o.getClearColor(),
      O = o.getClearAlpha();
    n.clearColor(B.r, B.g, B.b, O);
    n.enable(n.BLEND);
    o.shadowMapCullFace === THREE.CullFaceFront && n.cullFace(n.BACK)
  }
};
THREE.ShadowMapPlugin.__projector = new THREE.Projector;
THREE.SpritePlugin = function() {
  function e(e, t) {
    var i = r.createProgram(),
      n = r.createShader(r.FRAGMENT_SHADER),
      o = r.createShader(r.VERTEX_SHADER),
      a = "precision " + t + " float;\n";
    r.shaderSource(n, a + e.fragmentShader);
    r.shaderSource(o, a + e.vertexShader);
    r.compileShader(n);
    r.compileShader(o);
    r.attachShader(i, n);
    r.attachShader(i, o);
    r.linkProgram(i);
    return i
  }

  function t(e, t) {
    return e.z !== t.z ? t.z - e.z : t.id - e.id
  }
  var r, i, n, o = {};
  this.init = function(t) {
    r = t.context;
    i = t;
    n = t.getPrecision();
    o.vertices = new Float32Array(16);
    o.faces = new Uint16Array(6);
    var a = 0;
    o.vertices[a++] = -1;
    o.vertices[a++] = -1;
    o.vertices[a++] = 0;
    o.vertices[a++] = 0;
    o.vertices[a++] = 1;
    o.vertices[a++] = -1;
    o.vertices[a++] = 1;
    o.vertices[a++] = 0;
    o.vertices[a++] = 1;
    o.vertices[a++] = 1;
    o.vertices[a++] = 1;
    o.vertices[a++] = 1;
    o.vertices[a++] = -1;
    o.vertices[a++] = 1;
    o.vertices[a++] = 0;
    o.vertices[a++] = 1;
    a = 0;
    o.faces[a++] = 0;
    o.faces[a++] = 1;
    o.faces[a++] = 2;
    o.faces[a++] = 0;
    o.faces[a++] = 2;
    o.faces[a++] = 3;
    o.vertexBuffer = r.createBuffer();
    o.elementBuffer = r.createBuffer();
    r.bindBuffer(r.ARRAY_BUFFER, o.vertexBuffer);
    r.bufferData(r.ARRAY_BUFFER, o.vertices, r.STATIC_DRAW);
    r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, o.elementBuffer);
    r.bufferData(r.ELEMENT_ARRAY_BUFFER, o.faces, r.STATIC_DRAW);
    o.program = e(THREE.ShaderSprite.sprite, n);
    o.attributes = {};
    o.uniforms = {};
    o.attributes.position = r.getAttribLocation(o.program, "position");
    o.attributes.uv = r.getAttribLocation(o.program, "uv");
    o.uniforms.uvOffset = r.getUniformLocation(o.program, "uvOffset");
    o.uniforms.uvScale = r.getUniformLocation(o.program, "uvScale");
    o.uniforms.rotation = r.getUniformLocation(o.program, "rotation");
    o.uniforms.scale = r.getUniformLocation(o.program, "scale");
    o.uniforms.alignment = r.getUniformLocation(o.program, "alignment");
    o.uniforms.color = r.getUniformLocation(o.program, "color");
    o.uniforms.map = r.getUniformLocation(o.program, "map");
    o.uniforms.opacity = r.getUniformLocation(o.program, "opacity");
    o.uniforms.useScreenCoordinates = r.getUniformLocation(o.program, "useScreenCoordinates");
    o.uniforms.sizeAttenuation = r.getUniformLocation(o.program, "sizeAttenuation");
    o.uniforms.screenPosition = r.getUniformLocation(o.program, "screenPosition");
    o.uniforms.modelViewMatrix = r.getUniformLocation(o.program, "modelViewMatrix");
    o.uniforms.projectionMatrix = r.getUniformLocation(o.program, "projectionMatrix");
    o.uniforms.fogType = r.getUniformLocation(o.program, "fogType");
    o.uniforms.fogDensity = r.getUniformLocation(o.program, "fogDensity");
    o.uniforms.fogNear = r.getUniformLocation(o.program, "fogNear");
    o.uniforms.fogFar = r.getUniformLocation(o.program, "fogFar");
    o.uniforms.fogColor = r.getUniformLocation(o.program, "fogColor");
    o.uniforms.alphaTest = r.getUniformLocation(o.program, "alphaTest")
  };
  this.render = function(e, n, a, s) {
    var l = e.__webglSprites,
      c = l.length;
    if (c) {
      var h = o.attributes,
        u = o.uniforms,
        f = s / a,
        p = .5 * a,
        d = .5 * s;
      r.useProgram(o.program);
      r.enableVertexAttribArray(h.position);
      r.enableVertexAttribArray(h.uv);
      r.disable(r.CULL_FACE);
      r.enable(r.BLEND);
      r.bindBuffer(r.ARRAY_BUFFER, o.vertexBuffer);
      r.vertexAttribPointer(h.position, 2, r.FLOAT, !1, 16, 0);
      r.vertexAttribPointer(h.uv, 2, r.FLOAT, !1, 16, 8);
      r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, o.elementBuffer);
      r.uniformMatrix4fv(u.projectionMatrix, !1, n.projectionMatrix.elements);
      r.activeTexture(r.TEXTURE0);
      r.uniform1i(u.map, 0);
      var m = 0,
        E = 0,
        g = e.fog;
      if (g) {
        r.uniform3f(u.fogColor, g.color.r, g.color.g, g.color.b);
        if (g instanceof THREE.Fog) {
          r.uniform1f(u.fogNear, g.near);
          r.uniform1f(u.fogFar, g.far);
          r.uniform1i(u.fogType, 1);
          m = 1;
          E = 1
        } else if (g instanceof THREE.FogExp2) {
          r.uniform1f(u.fogDensity, g.density);
          r.uniform1i(u.fogType, 2);
          m = 2;
          E = 2
        }
      } else {
        r.uniform1i(u.fogType, 0);
        m = 0;
        E = 0
      }
      var v, y, T, R, x, w = [];
      for (v = 0; c > v; v++) {
        y = l[v];
        T = y.material;
        if (y.visible && 0 !== T.opacity)
          if (T.useScreenCoordinates) y.z = -y.position.z;
          else {
            y._modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, y.matrixWorld);
            y.z = -y._modelViewMatrix.elements[14]
          }
      }
      l.sort(t);
      for (v = 0; c > v; v++) {
        y = l[v];
        T = y.material;
        if (y.visible && 0 !== T.opacity && T.map && T.map.image && T.map.image.width) {
          r.uniform1f(u.alphaTest, T.alphaTest);
          if (T.useScreenCoordinates === !0) {
            r.uniform1i(u.useScreenCoordinates, 1);
            r.uniform3f(u.screenPosition, (y.position.x * i.devicePixelRatio - p) / p, (d - y.position.y * i.devicePixelRatio) / d, Math.max(0, Math.min(1, y.position.z)));
            w[0] = i.devicePixelRatio;
            w[1] = i.devicePixelRatio
          } else {
            r.uniform1i(u.useScreenCoordinates, 0);
            r.uniform1i(u.sizeAttenuation, T.sizeAttenuation ? 1 : 0);
            r.uniformMatrix4fv(u.modelViewMatrix, !1, y._modelViewMatrix.elements);
            w[0] = 1;
            w[1] = 1
          }
          x = e.fog && T.fog ? E : 0;
          if (m !== x) {
            r.uniform1i(u.fogType, x);
            m = x
          }
          R = 1 / (T.scaleByViewport ? s : 1);
          w[0] *= R * f * y.scale.x;
          w[1] *= R * y.scale.y;
          r.uniform2f(u.uvScale, T.uvScale.x, T.uvScale.y);
          r.uniform2f(u.uvOffset, T.uvOffset.x, T.uvOffset.y);
          r.uniform2f(u.alignment, T.alignment.x, T.alignment.y);
          r.uniform1f(u.opacity, T.opacity);
          r.uniform3f(u.color, T.color.r, T.color.g, T.color.b);
          r.uniform1f(u.rotation, y.rotation);
          r.uniform2fv(u.scale, w);
          i.setBlending(T.blending, T.blendEquation, T.blendSrc, T.blendDst);
          i.setDepthTest(T.depthTest);
          i.setDepthWrite(T.depthWrite);
          i.setTexture(T.map, 0);
          r.drawElements(r.TRIANGLES, 6, r.UNSIGNED_SHORT, 0)
        }
      }
      r.enable(r.CULL_FACE)
    }
  }
};
THREE.DepthPassPlugin = function() {
  function e(e) {
    return e.material instanceof THREE.MeshFaceMaterial ? e.material.materials[0] : e.material
  }
  this.enabled = !1;
  this.renderTarget = null;
  var t, r, i, n, o, a, s = new THREE.Frustum,
    l = new THREE.Matrix4;
  this.init = function(e) {
    t = e.context;
    r = e;
    var s = THREE.ShaderLib.depthRGBA,
      l = THREE.UniformsUtils.clone(s.uniforms);
    i = new THREE.ShaderMaterial({
      fragmentShader: s.fragmentShader,
      vertexShader: s.vertexShader,
      uniforms: l
    });
    n = new THREE.ShaderMaterial({
      fragmentShader: s.fragmentShader,
      vertexShader: s.vertexShader,
      uniforms: l,
      morphTargets: !0
    });
    o = new THREE.ShaderMaterial({
      fragmentShader: s.fragmentShader,
      vertexShader: s.vertexShader,
      uniforms: l,
      skinning: !0
    });
    a = new THREE.ShaderMaterial({
      fragmentShader: s.fragmentShader,
      vertexShader: s.vertexShader,
      uniforms: l,
      morphTargets: !0,
      skinning: !0
    });
    i._shadowPass = !0;
    n._shadowPass = !0;
    o._shadowPass = !0;
    a._shadowPass = !0
  };
  this.render = function(e, t) {
    this.enabled && this.update(e, t)
  };
  this.update = function(c, h) {
    var u, f, p, d, m, E, g, v = null;
    t.clearColor(1, 1, 1, 1);
    t.disable(t.BLEND);
    r.setDepthTest(!0);
    c.autoUpdate === !0 && c.updateMatrixWorld();
    h.matrixWorldInverse.getInverse(h.matrixWorld);
    l.multiplyMatrices(h.projectionMatrix, h.matrixWorldInverse);
    s.setFromMatrix(l);
    r.setRenderTarget(this.renderTarget);
    r.clear();
    g = c.__webglObjects;
    for (u = 0, f = g.length; f > u; u++) {
      m = g[u];
      E = m.object;
      m.render = !1;
      if (E.visible && (!(E instanceof THREE.Mesh || E instanceof THREE.ParticleSystem) || !E.frustumCulled || s.intersectsObject(E))) {
        E._modelViewMatrix.multiplyMatrices(h.matrixWorldInverse, E.matrixWorld);
        m.render = !0
      }
    }
    var y, T, R;
    for (u = 0, f = g.length; f > u; u++) {
      m = g[u];
      if (m.render) {
        E = m.object;
        p = m.buffer;
        if (E instanceof THREE.ParticleSystem && !E.customDepthMaterial) continue;
        y = e(E);
        y && r.setMaterialFaces(E.material);
        T = E.geometry.morphTargets.length > 0 && y.morphTargets;
        R = E instanceof THREE.SkinnedMesh && y.skinning;
        d = E.customDepthMaterial ? E.customDepthMaterial : R ? T ? a : o : T ? n : i;
        p instanceof THREE.BufferGeometry ? r.renderBufferDirect(h, c.__lights, v, d, p, E) : r.renderBuffer(h, c.__lights, v, d, p, E)
      }
    }
    g = c.__webglObjectsImmediate;
    for (u = 0, f = g.length; f > u; u++) {
      m = g[u];
      E = m.object;
      if (E.visible) {
        E._modelViewMatrix.multiplyMatrices(h.matrixWorldInverse, E.matrixWorld);
        r.renderImmediateObject(h, c.__lights, v, i, E)
      }
    }
    var x = r.getClearColor(),
      w = r.getClearAlpha();
    t.clearColor(x.r, x.g, x.b, w);
    t.enable(t.BLEND)
  }
};
THREE.ShaderFlares = {
  lensFlareVertexTexture: {
    vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) ) +", "texture2D( occlusionMap, vec2( 0.5, 0.1 ) ) +", "texture2D( occlusionMap, vec2( 0.9, 0.1 ) ) +", "texture2D( occlusionMap, vec2( 0.9, 0.5 ) ) +", "texture2D( occlusionMap, vec2( 0.9, 0.9 ) ) +", "texture2D( occlusionMap, vec2( 0.5, 0.9 ) ) +", "texture2D( occlusionMap, vec2( 0.1, 0.9 ) ) +", "texture2D( occlusionMap, vec2( 0.1, 0.5 ) ) +", "texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility = (       visibility.r / 9.0 ) *", "( 1.0 - visibility.g / 9.0 ) *", "(       visibility.b / 9.0 ) *", "( 1.0 - visibility.a / 9.0 );", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
  },
  lensFlare: {
    vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
    fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a +", "texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a +", "texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a +", "texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
  }
};
THREE.ShaderSprite = {
  sprite: {
    vertexShader: ["uniform int useScreenCoordinates;", "uniform int sizeAttenuation;", "uniform vec3 screenPosition;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 alignment;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position + alignment;", "vec2 rotatedPosition;", "rotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;", "rotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;", "vec4 finalPosition;", "if( useScreenCoordinates != 0 ) {", "finalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );", "} else {", "finalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition * ( sizeAttenuation == 1 ? 1.0 : finalPosition.z );", "}", "gl_Position = finalPosition;", "}"].join("\n"),
    fragmentShader: ["uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")
  }
};
(function() {
  var e;
  null == (e = window.GitHub).DDD && (e.DDD = {})
}).call(this);
(function() {
  var e, t = function(e, t) {
      function i() {
        this.constructor = e
      }
      for (var n in t) r.call(t, n) && (e[n] = t[n]);
      i.prototype = t.prototype;
      e.prototype = new i;
      e.__super__ = t.prototype;
      return e
    },
    r = {}.hasOwnProperty,
    i = [].slice;
  e = window.GitHub.DDD;
  e.Utils = {
    defer: function(e) {
      return setTimeout(function(t) {
        return function() {
          return e()
        }
      }(this), 0)
    }
  };
  window.GitHub.DDD.Error = function(e) {
    function r(e) {
      this.message = e;
      r.__super__.constructor.call(this, this.message)
    }
    t(r, e);
    return r
  }(Error);
  THREE.EventDispatcher.prototype.once = function(t, r) {
    var n;
    n = function(o) {
      return function() {
        var a;
        a = 1 <= arguments.length ? i.call(arguments, 0) : [];
        r.apply(null, a);
        return e.Utils.defer(function() {
          return o.removeEventListener(t, n)
        })
      }
    }(this);
    return this.addEventListener(t, n)
  }
}).call(this);
(function() {
  var e, t = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    r = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) i.call(t, n) && (e[n] = t[n]);
      r.prototype = t.prototype;
      e.prototype = new r;
      e.__super__ = t.prototype;
      return e
    },
    i = {}.hasOwnProperty,
    n = [].slice;
  e = window.GitHub.DDD;
  e.Viewer = function(o) {
    function a(r, i, o) {
      var s, l;
      this.container = r;
      null == i && (i = {});
      null == o && (o = function() {});
      this.$ = t(this.$, this);
      this.selectRenderer = t(this.selectRenderer, this);
      this.updateGrid = t(this.updateGrid, this);
      this.updateLight = t(this.updateLight, this);
      this.objectLoadHandler = t(this.objectLoadHandler, this);
      this.init = t(this.init, this);
      this.watchdog = t(this.watchdog, this);
      this.resize = t(this.resize, this);
      this.height = t(this.height, this);
      this.width = t(this.width, this);
      this.destructor = t(this.destructor, this);
      this.load = t(this.load, this);
      this.draw = t(this.draw, this);
      a.__super__.constructor.call(this);
      if (this.$().length && !this.$().data("bound")) {
        i instanceof Function && (l = [{}, i], i = l[0], o = l[1]);
        this.doctor = new window.Render.Doctor(this.container);
        this.status = new window.Render.Status("solid");
        this.objects = {};
        this.once("loaded", function(e) {
          return function() {
            return e.draw(!0)
          }
        }(this));
        this.addEventListener("loaded", this.objectLoadHandler);
        this.addEventListener("load", s = function(e) {
          return function(t) {
            var r;
            r = t.data;
            return "error" === r || "error:fatal" === r ? e.status.set(r) : "finish" === r ? e.removeEventListener("load", s) : void 0
          }
        }(this));
        this.once("error", function(t) {
          return function(r) {
            t.status.set("error");
            throw new e.Error(r)
          }
        }(this));
        this.once("loaded", this.resize);
        $(window).on("resize", this.resize);
        this.init(i, function(e) {
          return function() {
            var t;
            t = 1 <= arguments.length ? n.call(arguments, 0) : [];
            e.$container.data("bound", !0);
            return o.call.apply(o, [e].concat(n.call(t)))
          }
        }(this))
      }
    }
    r(a, o);
    a.prototype.draw = function(e) {
      var t, r;
      r = function(e) {
        return function(t) {
          e.dispatchEvent({
            type: "tick",
            data: t
          });
          e.updateLight(e.camera.position);
          return e.renderer.render(e.scene, e.camera)
        }
      }(this);
      t = function(e) {
        return function(i) {
          null == i && (i = 0);
          r(i);
          return e.running ? requestAnimationFrame(t) : void 0
        }
      }(this);
      if (e === !1) return this.running = !1;
      if (e === !0) {
        if (this.running) return;
        this.running = !0;
        return t()
      }
      return r()
    };
    a.prototype.load = function(t, r) {
      var n, o, a, s;
      null == r && (r = {});
      a = {};
      for (n in r)
        if (i.call(r, n)) {
          s = r[n];
          a[n] = s
        }
      null == a.url && (a.url = t);
      null == a.name && (a.name = t);
      null == a.center && (a.center = !0);
      null == a.autoscale && (a.autoscale = !1);
      this.dispatchEvent({
        type: "load",
        data: "start"
      });
      o = e.GenericLoader.loaderForUrl(this.status, t);
      a.side = o.side();
      o.addEventListener("load", function(t) {
        return function(r) {
          t.dispatchEvent({
            type: "load",
            data: "finish"
          });
          return t.dispatchEvent({
            type: "loaded",
            object: new e.Renderable(r.content, a)
          })
        }
      }(this));
      o.addEventListener("error", function(e) {
        return function(t) {
          e.dispatchEvent({
            type: "load",
            data: "error"
          });
          return debug("Load Error:", t)
        }
      }(this));
      o.addEventListener("error:fatal", function(e) {
        return function(t) {
          e.dispatchEvent({
            type: "load",
            data: "error:fatal"
          });
          return debug("Load Error:", t)
        }
      }(this));
      return o.load(t)
    };
    a.prototype.destructor = function() {
      return this.draw(!1)
    };
    a.prototype.width = function() {
      return (window.parent === window ? $(window).innerWidth() : void 0) || this.$().width() || $(window).width() || 500
    };
    a.prototype.height = function() {
      return (window.parent === window ? $(window).innerHeight() : void 0) || (this.$().height() || $(window).height() || 500) - $(".js-render-bar").outerHeight()
    };
    a.prototype.resize = function() {
      var e, t, r;
      t = [this.width(), this.height()], r = t[0], e = t[1];
      if (r && e) {
        this.camera.aspect = r / e;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(r, e);
        this.dispatchEvent({
          type: "resize",
          data: {
            width: r,
            height: e
          }
        });
        return debug("Viewport now " + r + "x" + e)
      }
    };
    a.prototype.watchdog = function() {
      var e;
      e = $(this.container).length > 0;
      return e ? $(document).one("pageUpdate", this.watchdog) : this.destructor()
    };
    a.prototype.init = function(t, r) {
      var i, n;
      null == t && (t = {});
      null == r && (r = function(e) {
        return function() {}
      }(this));
      if (!this.$container.data("initialized")) {
        t instanceof Function && (n = [{}, t], t = n[0], r = n[1]);
        i = function(e) {
          return function(t) {
            null == t && (t = "unknown");
            r(t || "unknown", e);
            return e.dispatchEvent({
              type: "error",
              data: t
            })
          }
        }(this);
        this.once("loaded", function(t) {
          return function() {
            return null != t.controls ? t.controls : t.controls = new e.Controls(t)
          }
        }(this));
        this.once("init", function(e) {
          return function() {
            return e.$container.data("initialized", !0)
          }
        }(this));
        this.once("init", this.watchdog);
        this.once("init", this.doctor.updateHealth);
        this.once("init", function(e) {
          return function() {
            return e.resize()
          }
        }(this));
        this.once("init", function(e) {
          return function() {
            return r(!1, e)
          }
        }(this));
        if (!(this.renderer = this.selectRenderer())) return i() && void 0;
        this.renderer.setSize(this.width(), this.height());
        this.$().append(this.renderer.domElement);
        this.scene = new THREE.Scene;
        this.scene.up.set(0, 0, 1);
        this.cameraFOV = 50;
        this.camera = new THREE.PerspectiveCamera(this.cameraFOV, this.width() / this.height(), .01, 1e4);
        this.camera.up.set(0, 0, 1);
        this.scene.add(this.camera);
        this.updateGrid();
        return this.dispatchEvent({
          type: "init",
          data: "finished"
        })
      }
    };
    a.prototype.objectLoadHandler = function(t) {
      var r, i, n, o, a;
      if (t && (o = t.object) && o.name && null == this.objects[o.name]) {
        this.objects[o.name] = o;
        if (1 !== o.info.scale) {
          r = o.info.scale > 1 ? "up" : "down";
          this.doctor.addProblem("Object has been scaled " + r + " to fit the view")
        }
        a = 4 * o.geometry.boundingSphere.radius;
        this.camera.far > a || (this.camera.far = a);
        this.camera.updateProjectionMatrix();
        this.updateGrid(2 * o.geometry.boundingSphere.radius);
        if (/^file\d+$/.test(o.name)) {
          if (null == this.objects.diff && this.objects.file1 && this.objects.file2) {
            i = this.objects.file1;
            n = this.objects.file2;
            new e.Diff(this, i, n, function(e) {
              return function(t) {
                e.objects.diff = t;
                e.scene.add(t);
                e.dispatchEvent({
                  type: "added",
                  data: t
                });
                e.dispatchEvent({
                  type: "diff:ready",
                  data: t
                });
                e.status.set("ready");
                return debug("Loaded diff:", t)
              }
            }(this))
          }
        } else {
          this.scene.add(o);
          this.dispatchEvent({
            type: "added",
            data: o
          });
          this.status.set("ready")
        }
        return debug("Loaded:", o)
      }
    };
    a.prototype.updateLight = function(e) {
      var t, r, i;
      t = e.x;
      r = e.y;
      i = e.z;
      if (null != this.light) return this.light.position.set(t, r, i);
      this.scene.add(new THREE.AmbientLight(4210752));
      this.light = new THREE.DirectionalLight(16777215);
      this.light.position.set(t, r, i);
      return this.scene.add(this.light)
    };
    a.prototype.updateGrid = function(e) {
      var t, r, i, n, o, a, s, l, c;
      null == e && (e = 1);
      r = 10;
      c = 1.1 * e;
      s = Math.ceil(c / r) + 10;
      n = r * s;
      a = (new THREE.Matrix4).makeTranslation(0, 0, -.001);
      i = 100;
      if (s > i) {
        s = i;
        this.doctor.addProblem("The grid is being scaled because your model is too large")
      }
      if (null == this.grid) {
        l = new THREE.PlaneGeometry(n, n, s, s);
        l.applyMatrix(a);
        o = new THREE.MeshBasicMaterial({
          color: 3355443,
          wireframe: !0
        });
        this.grid = new THREE.Mesh(l, o);
        return this.scene.add(this.grid)
      }
      this.grid.geometry.computeBoundingSphere();
      t = this.grid.geometry.boundingSphere.radius;
      if (n > t) {
        l = new THREE.PlaneGeometry(n, n, s, s);
        l.applyMatrix(a);
        o = this.grid.material;
        this.scene.remove(this.grid);
        this.grid.geometry.dispose();
        this.grid = new THREE.Mesh(l, o);
        return this.scene.add(this.grid)
      }
    };
    a.prototype.selectRenderer = function(e) {
      var t;
      null == e && (e = !0);
      if (!e || null == window.WebGLRenderingContext) {
        this.doctor.addProblem("WebGL powered hardware support not available");
        return new THREE.CanvasRenderer
      }
      try {
        return new THREE.WebGLRenderer({
          antialias: !0,
          sortObjects: !1
        })
      } catch (r) {
        t = r;
        debug("Failed to create WebGLRenderer:", t);
        return this.selectRenderer(!1)
      }
    };
    a.prototype.$ = function() {
      return null != this.$container ? this.$container : this.$container = $(this.container)
    };
    return a
  }(THREE.EventDispatcher)
}).call(this);
(function() {
  var e, t = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  e = window.GitHub.DDD;
  e.ControlMode = function() {
    function r(r, i) {
      this.controls = r;
      null == i && (i = !1);
      this.deactivate = t(this.deactivate, this);
      this.activate = t(this.activate, this);
      this.active = !1;
      this.init();
      i && e.Utils.defer(this.activate);
      this.controls.addEventListener("tick", function(e) {
        return function(t) {
          return e.active ? e.tick(t) : void 0
        }
      }(this))
    }
    r.prototype.activate = function() {
      if (!this.active) {
        this.active = !0;
        return this.onActivate()
      }
    };
    r.prototype.deactivate = function() {
      if (this.active) {
        this.active = !1;
        return this.onDeactivate()
      }
    };
    r.prototype.init = function() {
      return "Called when subclasses are created to avoid super()"
    };
    r.prototype.tick = function(e) {
      return "Called every frame if the mode is active"
    };
    r.prototype.onActivate = function() {
      return "Called when the control mode is activated"
    };
    r.prototype.onDeactivate = function() {
      return "Called when the control mode is deactivated"
    };
    return r
  }()
}).call(this);
(function() {
  var e, t = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    r = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) i.call(t, n) && (e[n] = t[n]);
      r.prototype = t.prototype;
      e.prototype = new r;
      e.__super__ = t.prototype;
      return e
    },
    i = {}.hasOwnProperty;
  e = window.GitHub.DDD;
  e.AttractMode = function(e) {
    function i() {
      this.tick = t(this.tick, this);
      return i.__super__.constructor.apply(this, arguments)
    }
    r(i, e);
    i.prototype.delay = 3e3;
    i.prototype.onActivate = function() {
      this.requested = Date.now();
      return this.spinRate = .01
    };
    i.prototype.tick = function(e) {
      if (this.requested + this.delay <= Date.now()) {
        this.controls.orbitRight(this.controls.orbitIncrement / 2 * this.spinRate);
        return this.spinRate < 1 ? this.spinRate *= 1.03 : void 0
      }
    };
    return i
  }(e.ControlMode)
}).call(this);
(function() {
  var e, t = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    r = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) i.call(t, n) && (e[n] = t[n]);
      r.prototype = t.prototype;
      e.prototype = new r;
      e.__super__ = t.prototype;
      return e
    },
    i = {}.hasOwnProperty;
  e = window.GitHub.DDD;
  e.MouseMode = function(e) {
    function i() {
      this.mouseOrbit = t(this.mouseOrbit, this);
      this.mouseTranslate = t(this.mouseTranslate, this);
      this.mouseUp = t(this.mouseUp, this);
      this.mouseMove = t(this.mouseMove, this);
      this.bindHandlers = t(this.bindHandlers, this);
      this.onScroll = t(this.onScroll, this);
      this.mouseDown = t(this.mouseDown, this);
      this.keyChange = t(this.keyChange, this);
      this.release = t(this.release, this);
      this.hold = t(this.hold, this);
      this.init = t(this.init, this);
      return i.__super__.constructor.apply(this, arguments)
    }
    r(i, e);
    i.prototype.init = function() {
      this.translating = !1;
      this.shift = !1;
      this.drag = {
        sensitivity: .4,
        start: new THREE.Vector2,
        end: new THREE.Vector2
      };
      this.controls.$().on("mousewheel DOMMouseScroll", this.onScroll);
      this.controls.$().on("mousedown", this.mouseDown);
      this.controls.$().on("contextmenu", function(e) {
        return e.preventDefault()
      });
      return $(window).on("keydown keyup", this.keyChange)
    };
    i.prototype.hold = function() {
      return "function" == typeof this.onUse ? this.onUse() : void 0
    };
    i.prototype.release = function() {
      return "function" == typeof this.onRelease ? this.onRelease() : void 0
    };
    i.prototype.keyChange = function(e) {
      if (16 === e.keyCode) {
        "keydown" === e.type && (this.shift = this.translating = !0);
        if ("keyup" === e.type) return this.shift = this.translating = !1
      }
    };
    i.prototype.mouseDown = function(e) {
      this.active || "function" == typeof this.onUse && this.onUse();
      e.preventDefault();
      this.bindHandlers(!0);
      this.drag.start.set(e.clientX, e.clientY);
      return 3 === e.which ? this.translating = !0 : void 0
    };
    i.prototype.onScroll = function(e) {
      var t, r;
      this.active || "function" == typeof this.onUse && this.onUse();
      e.stopPropagation();
      e.preventDefault();
      r = e.originalEvent;
      t = r.wheelDelta || -40 * r.detail;
      t > 0 ? this.controls.changeZoom(.1) : this.controls.changeZoom(-.1);
      return this.active && "function" == typeof this.onRelease ? this.onRelease() : void 0
    };
    i.prototype.bindHandlers = function(e) {
      var t;
      null == e && (e = !0);
      t = e === !0 ? "on" : "off";
      this.controls.$()[t]("mousemove", this.mouseMove);
      return this.controls.$()[t]("mouseup", this.mouseUp)
    };
    i.prototype.mouseMove = function(e) {
      return this.translating ? this.mouseTranslate(e) : this.mouseOrbit(e)
    };
    i.prototype.mouseUp = function(e) {
      this.active && "function" == typeof this.onRelease && this.onRelease();
      this.bindHandlers(!1);
      return this.translating && !this.shift ? this.translating = !1 : void 0
    };
    i.prototype.mouseTranslate = function(e) {
      var t;
      t = this.drag.end.set(e.clientX, e.clientY).clone().sub(this.drag.start).multiplyScalar(this.drag.sensitivity);
      this.drag.start.copy(this.drag.end);
      this.controls.translateUp(t.y);
      return this.controls.translateRight(t.x)
    };
    i.prototype.mouseOrbit = function(e) {
      var t;
      t = this.drag.end.set(e.clientX, e.clientY).clone().sub(this.drag.start).multiplyScalar(this.drag.sensitivity);
      this.drag.start.copy(this.drag.end);
      this.controls.orbitUp(this.controls.orbitIncrement * t.y);
      return this.controls.orbitRight(this.controls.orbitIncrement * -t.x)
    };
    return i
  }(e.ControlMode)
}).call(this);
(function() {
  var e, t = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    r = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) i.call(t, n) && (e[n] = t[n]);
      r.prototype = t.prototype;
      e.prototype = new r;
      e.__super__ = t.prototype;
      return e
    },
    i = {}.hasOwnProperty;
  e = window.GitHub.DDD;
  e.Controls = function(n) {
    function o(e) {
      var r;
      this.viewer = e;
      this.updateCenter = t(this.updateCenter, this);
      this.update = t(this.update, this);
      this.translateRight = t(this.translateRight, this);
      this.translateDown = t(this.translateDown, this);
      this.orbitDown = t(this.orbitDown, this);
      this.orbitLeft = t(this.orbitLeft, this);
      this.changeZoom = t(this.changeZoom, this);
      this.translateLeft = t(this.translateLeft, this);
      this.translateUp = t(this.translateUp, this);
      this.orbitUp = t(this.orbitUp, this);
      this.orbitRight = t(this.orbitRight, this);
      this.orbitDistance = t(this.orbitDistance, this);
      this.initModeMenu = t(this.initModeMenu, this);
      this.initControlModes = t(this.initControlModes, this);
      this.selectMode = t(this.selectMode, this);
      this.$ = t(this.$, this);
      this.viewer.addEventListener("added", this.updateCenter);
      this.viewer.addEventListener("tick", this.update);
      this.renderer = this.viewer.renderer;
      this.camera = this.viewer.camera;
      this.center = new THREE.Vector3(0, 0, 0);
      r = this.orbitDistance();
      this.camera.position.set(0, -(r / 2), r).setLength(r);
      this.initModeMenu();
      this.initControlModes();
      this.updateCenter()
    }
    r(o, n);
    o.prototype.orbitIncrement = Math.PI / 180;
    o.prototype.$ = function() {
      return null != this.$container ? this.$container : this.$container = $(this.renderer.domElement)
    };
    o.prototype.selectMode = function(e) {
      var t, r, n, o;
      debug("Switching to " + e + " mode");
      n = this.viewer.objects;
      o = [];
      for (t in n)
        if (i.call(n, t)) {
          r = n[t];
          o.push(r.switchMode(e))
        }
      return o
    };
    o.prototype.initControlModes = function() {
      this.modes = {
        attract: new e.AttractMode(this, !0),
        mouse: new e.MouseMode(this)
      };
      this.modes.mouse.onUse = function(e) {
        return function() {
          var t, r, n;
          n = e.modes;
          for (r in n)
            if (i.call(n, r)) {
              t = n[r];
              t.deactivate()
            }
          return e.modes.mouse.activate()
        }
      }(this);
      return this.modes.mouse.onRelease = function(e) {
        return function() {
          var t, r, n;
          n = e.modes;
          for (r in n)
            if (i.call(n, r)) {
              t = n[r];
              t.deactivate()
            }
          return e.modes.attract.activate()
        }
      }(this)
    };
    o.prototype.initModeMenu = function() {
      return new window.Render.ModeSwitcher(this.selectMode)
    };
    o.prototype.orbitDistance = function() {
      var e, t, r, n, o;
      o = 2.4;
      n = function(e) {
        return e.geometry.boundingSphere.radius || 0
      };
      e = Math.max.apply(Math, function() {
        var e, o;
        e = this.viewer.objects;
        o = [];
        for (t in e)
          if (i.call(e, t)) {
            r = e[t];
            o.push(n(r))
          }
        return o
      }.call(this));
      return e > 0 ? e * o : 100
    };
    o.prototype.withoutOriginOffset = function(e, t, r) {
      e.position.sub(t);
      r();
      return e.position.add(t)
    };
    o.prototype.orbitRight = function(e) {
      return this.withoutOriginOffset(this.camera, this.center, function(t) {
        return function() {
          var r;
          r = new THREE.Vector3(0, 0, 1);
          t.camera.position.applyAxisAngle(r, e);
          return t.camera.up.applyAxisAngle(r, e)
        }
      }(this))
    };
    o.prototype.orbitUp = function(e) {
      return this.withoutOriginOffset(this.camera, this.center, function(t) {
        return function() {
          var r;
          r = t.camera.position.clone().cross(t.camera.up).normalize();
          t.camera.position.applyAxisAngle(r, e);
          return t.camera.up.applyAxisAngle(r, e)
        }
      }(this))
    };
    o.prototype.translateUp = function(e) {
      var t;
      t = this.camera.up.clone().normalize().multiplyScalar(e);
      this.camera.position.add(t);
      return this.center.add(t)
    };
    o.prototype.translateLeft = function(e) {
      var t, r, i;
      i = this.camera.up.clone().normalize();
      t = this.camera.position.clone().normalize();
      r = i.cross(t).multiplyScalar(e);
      this.camera.position.add(r);
      return this.center.add(r)
    };
    o.prototype.changeZoom = function(e) {
      return this.withoutOriginOffset(this.camera, this.center, function(t) {
        return function() {
          return e > 0 ? t.camera.position.multiplyScalar(1.02) : 0 > e ? t.camera.position.multiplyScalar(.98) : void 0
        }
      }(this))
    };
    o.prototype.orbitLeft = function(e) {
      return this.orbitRight(-e)
    };
    o.prototype.orbitDown = function(e) {
      return this.orbitUp(-e)
    };
    o.prototype.translateDown = function(e) {
      return this.translateUp(-e)
    };
    o.prototype.translateRight = function(e) {
      return this.translateLeft(-e)
    };
    o.prototype.update = function() {
      this.camera.lookAt(this.center);
      return this.dispatchEvent({
        type: "tick",
        data: 0
      })
    };
    o.prototype.updateCenter = function() {
      var e;
      e = void 0;
      this.viewer.scene.traverse(function(t) {
        return function(t) {
          var r;
          if (null == t.mesh && null != t.geometry) {
            (r = t.geometry).computeBoundingBox();
            if (null == e) return e = r.boundingBox.clone();
            e.expandByPoint(r.boundingBox.min);
            return e.expandByPoint(r.boundingBox.max)
          }
        }
      }(this));
      null != e && (this.center = e.center().clone());
      return debug("Center updated, now:", this.center)
    };
    return o
  }(THREE.EventDispatcher)
}).call(this);
GitHub.DDD.BinaryReader = function(e) {
  this._buffer = e;
  this._pos = 0
};
GitHub.DDD.BinaryReader.prototype = {
  readInt8: function() {
    return this._decodeInt(8, !0)
  },
  readUInt8: function() {
    return this._decodeInt(8, !1)
  },
  readInt16: function() {
    return this._decodeInt(16, !0)
  },
  readUInt16: function() {
    return this._decodeInt(16, !1)
  },
  readInt32: function() {
    return this._decodeInt(32, !0)
  },
  readUInt32: function() {
    return this._decodeInt(32, !1)
  },
  readFloat: function() {
    return this._decodeFloat(23, 8)
  },
  readDouble: function() {
    return this._decodeFloat(52, 11)
  },
  readChar: function() {
    return this.readString(1)
  },
  readString: function(e) {
    this._checkSize(8 * e);
    var t = this._buffer.substr(this._pos, e);
    this._pos += e;
    return t
  },
  seek: function(e) {
    this._pos = e;
    this._checkSize(0)
  },
  getPosition: function() {
    return this._pos
  },
  getSize: function() {
    return this._buffer.length
  },
  _decodeFloat: function(e, t) {
    var r = e + t + 1,
      i = r >> 3;
    this._checkSize(r);
    var n = Math.pow(2, t - 1) - 1,
      o = this._readBits(e + t, 1, i),
      a = this._readBits(e, t, i),
      s = 0,
      l = 2,
      c = 0;
    do
      for (var h = this._readByte(++c, i), u = e % 8 || 8, f = 1 << u; f >>= 1;) {
        h & f && (s += 1 / l);
        l *= 2
      }
    while (e -= u);
    this._pos += i;
    return a == (n << 1) + 1 ? s ? NaN : o ? -(1 / 0) : +(1 / 0) : (1 + -2 * o) * (a || s ? a ? Math.pow(2, a - n) * (1 + s) : Math.pow(2, -n + 1) * s : 0)
  },
  _decodeInt: function(e, t) {
    var r = this._readBits(0, e, e / 8),
      i = Math.pow(2, e),
      n = t && r >= i / 2 ? r - i : r;
    this._pos += e / 8;
    return n
  },
  _shl: function(e, t) {
    for (++t; --t; e = 1073741824 == (1073741824 & (e %= 2147483648)) ? 2 * e : 2 * (e - 1073741824) + 2147483647 + 1);
    return e
  },
  _readByte: function(e, t) {
    return 255 & this._buffer.charCodeAt(this._pos + t - e - 1)
  },
  _readBits: function(e, t, r) {
    var i = (e + t) % 8,
      n = e % 8,
      o = r - (e >> 3) - 1,
      a = r + (-(e + t) >> 3),
      s = o - a,
      l = this._readByte(o, r) >> n & (1 << (s ? 8 - n : t)) - 1;
    s && i && (l += (this._readByte(a++, r) & (1 << i) - 1) << (s-- << 3) - n);
    for (; s;) l += this._shl(this._readByte(a++, r), (s-- << 3) - n);
    return l
  },
  _checkSize: function(e) {
    if (!(this._pos + Math.ceil(e / 8) < this._buffer.length)) throw new Error("Index out of bound")
  }
};
(function() {
  var e, t = function(e, t) {
      function i() {
        this.constructor = e
      }
      for (var n in t) r.call(t, n) && (e[n] = t[n]);
      i.prototype = t.prototype;
      e.prototype = new i;
      e.__super__ = t.prototype;
      return e
    },
    r = {}.hasOwnProperty;
  e = window.GitHub.DDD;
  e.Diff = function(i) {
    function n(t, i, o, a) {
      var s;
      this.viewer = t;
      n.__super__.constructor.call(this);
      this.slider = new window.Render.Slider({
        mouseDown: function(e) {
          return function() {
            return e.viewer.controls.modes.mouse.hold()
          }
        }(this),
        slide: function(e) {
          return function(t) {
            return e.adjustMaterialOpacity(t / 100)
          }
        }(this),
        mouseUp: function(e) {
          return function() {
            return e.viewer.controls.modes.mouse.release()
          }
        }(this)
      }, {
        percentage: 100
      });
      this.viewer.addEventListener("resize", this.slider.setDragger);
      s = new e.PollingLoader({
        status: this.viewer.status
      });
      s.load({
        added: this.viewer.$().data("added"),
        removed: this.viewer.$().data("removed"),
        unchanged: this.viewer.$().data("unchanged")
      }, function(t) {
        return function(i, n) {
          var o, s, l, c, h;
          if (i) return t.viewer.dispatchEvent({
            type: "error",
            data: null != (c = event.data) ? c : "Load error"
          });
          l = n.parts;
          t.diffModes = {
            highlight: new e.Renderable(l.unchanged.geom, {
              center: !0,
              name: "highlight",
              mode: "wireframe",
              color: 5592405,
              specular: 0,
              parts: [new e.Renderable(l.added.geom, {
                name: "added",
                center: !1,
                color: 65280
              }), new e.Renderable(l.removed.geom, {
                name: "removed",
                center: !1,
                color: 16711680
              })]
            }),
            slider: new e.Renderable(l.unchanged.geom, {
              center: !0,
              name: "slider",
              parts: [new e.Renderable(l.added.geom, {
                name: "added",
                center: !1,
                transparent: !0,
                color: e.DefaultColor
              }), new e.Renderable(l.removed.geom, {
                name: "removed",
                center: !1,
                transparent: !0,
                opacity: 0,
                color: e.DefaultColor
              })],
              color: e.DefaultColor
            })
          };
          h = t.diffModes;
          for (s in h)
            if (r.call(h, s)) {
              o = h[s];
              t.add(o)
            }
          t.switchMode("highlight");
          return a(t)
        }
      }(this))
    }
    t(n, i);
    n.prototype.opacitySlider = function() {
      var e, t, i;
      this.slider.show();
      i = this.diffModes;
      for (t in i)
        if (r.call(i, t)) {
          e = i[t];
          e.toggle(!1)
        }
      return this.diffModes.slider.toggle(!0)
    };
    n.prototype.removeOpacitySlider = function() {
      this.slider.hide();
      return this.diffModes.slider.toggle(!1)
    };
    n.prototype.adjustMaterialOpacity = function(e) {
      var t, r;
      t = .03;
      if (e > 1 - t) {
        this.diffModes.slider.getObjectByName("removed").toggle(!1);
        this.diffModes.slider.getObjectByName("added").toggle(!0);
        return this.diffModes.slider.getObjectByName("added").updateMaterials({
          opacity: 1
        })
      }
      if (t > e) {
        this.diffModes.slider.getObjectByName("added").toggle(!1);
        this.diffModes.slider.getObjectByName("removed").toggle(!0);
        return this.diffModes.slider.getObjectByName("removed").updateMaterials({
          opacity: 1
        })
      }
      this.diffModes.slider.toggle(!0);
      r = e;
      this.diffModes.slider.getObjectByName("removed").updateMaterials({
        opacity: 1 - e
      });
      return this.diffModes.slider.getObjectByName("added").updateMaterials({
        opacity: e
      })
    };
    n.prototype.wireframe = function() {
      var e, t, i;
      i = this.diffModes;
      for (t in i)
        if (r.call(i, t)) {
          e = i[t];
          e.toggle(!1)
        }
      return this.diffModes.highlight.toggle(!0)
    };
    n.prototype.removeWireframe = function() {
      return this.diffModes.highlight.toggle(!1)
    };
    n.prototype.switchMode = function(e) {
      null == e && (e = "highlight");
      switch (e) {
        case "highlight":
          this.removeOpacitySlider();
          return this.wireframe();
        case "slider":
          this.removeWireframe();
          return this.opacitySlider()
      }
    };
    return n
  }(THREE.Object3D)
}).call(this);
(function() {
  var e, t = function(e, t) {
      function i() {
        this.constructor = e
      }
      for (var n in t) r.call(t, n) && (e[n] = t[n]);
      i.prototype = t.prototype;
      e.prototype = new i;
      e.__super__ = t.prototype;
      return e
    },
    r = {}.hasOwnProperty;
  e = window.GitHub.DDD;
  e.GenericLoader = function(r) {
    function i(e) {
      this.status = e;
      i.__super__.constructor.call(this)
    }
    t(i, r);
    i.extensions = {};
    i.loaderForUrl = function(t, r) {
      var i, n, o, a, s;
      a = r.split("?"), o = a[0], i = a[1];
      if (s = o.match(/\.([^\.]*)$/)) {
        n = s[1].toLowerCase();
        if (null != this.extensions[n]) return new this.extensions[n](t)
      }
      if (null == r || "" === r.trim()) return new e.NULLLoader(t);
      throw new Error("No fitting loader for url [" + r + "]")
    };
    i.prototype.calculateNormal = function(e, t, r, i) {
      var n, o;
      n = (new THREE.Vector3).subVectors(e.vertices[t], e.vertices[r]);
      o = (new THREE.Vector3).subVectors(e.vertices[t], e.vertices[i]);
      return (new THREE.Vector3).crossVectors(n, o).normalize()
    };
    i.prototype.side = function() {
      return THREE.BackSide
    };
    i.prototype.load = function(e, t) {
      null == t && (t = {});
      debug("Attempting to load URL: [" + e + "]");
      return this.status.load(e, {
        attempts: t.attempts,
        success: function(e) {
          return function(t, r) {
            var i;
            i = e.parse(t);
            return null != i ? e.dispatchEvent({
              type: "load",
              content: i
            }) : e.dispatchEvent({
              type: "error:fatal",
              message: "Model not valid."
            })
          }
        }(this),
        error: function(t) {
          return function(r, i) {
            var n, o;
            n = i.status;
            o = 403 === n ? "error:fatal" : "error";
            return t.dispatchEvent({
              type: o,
              message: "Could not load URL [" + e + "] [" + n + "]"
            })
          }
        }(this),
        before: function(e) {
          return function(e) {
            return e.overrideMimeType("text/plain; charset=x-user-defined")
          }
        }(this)
      })
    };
    return i
  }(THREE.EventDispatcher)
}).call(this);
(function() {
  var e, t = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    r = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) i.call(t, n) && (e[n] = t[n]);
      r.prototype = t.prototype;
      e.prototype = new r;
      e.__super__ = t.prototype;
      return e
    },
    i = {}.hasOwnProperty;
  e = window.GitHub.DDD;
  e.NULLLoader = function(e) {
    function i() {
      this.parse = t(this.parse, this);
      this.load = t(this.load, this);
      return i.__super__.constructor.apply(this, arguments)
    }
    r(i, e);
    i.prototype.load = function(e, t) {
      return this.dispatchEvent({
        type: "load",
        content: this.parse()
      })
    };
    i.prototype.parse = function(e) {
      var t;
      t = new THREE.Geometry;
      t.computeFaceNormals();
      t.computeCentroids();
      t.computeBoundingBox();
      t.computeBoundingSphere();
      return t
    };
    return i
  }(e.GenericLoader)
}).call(this);
(function() {
  var e, t = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    r = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) i.call(t, n) && (e[n] = t[n]);
      r.prototype = t.prototype;
      e.prototype = new r;
      e.__super__ = t.prototype;
      return e
    },
    i = {}.hasOwnProperty;
  e = window.GitHub.DDD;
  e.OBJLoader = function(e) {
    function i() {
      this.parse = t(this.parse, this);
      return i.__super__.constructor.apply(this, arguments)
    }
    r(i, e);
    i.prototype.side = function() {
      return THREE.BackSide
    };
    i.prototype.parse = function(e) {
      var t, r, i, n, o, a, s, l, c, h;
      t = new THREE.Geometry;
      h = [];
      s = /^(f|g|o|vn|vt|v) +(.*[^ ]) *$/;
      i = {
        f: function(e) {
          return function(r) {
            var i, n, o, a, s, l;
            i = function() {
              var e, t, i, n;
              i = r.split(" ");
              n = [];
              for (e = 0, t = i.length; t > e; e++) {
                a = i[e];
                n.push(a.split("/"))
              }
              return n
            }();
            o = [parseInt(i[0][0]) - 1, parseInt(i[1][0]) - 1, parseInt(i[2][0]) - 1, null != i[3] ? parseInt(i[3][0]) - 1 : void 0];
            l = [parseInt(i[0][1]) - 1, parseInt(i[1][1]) - 1, parseInt(i[2][1]) - 1, null != i[3] ? parseInt(i[3][1]) - 1 : void 0];
            s = e.calculateNormal(t, o[0], o[1], o[2]);
            t.faces.push(new THREE.Face3(o[0], o[1], o[2], s));
            n = null != l[0] && !isNaN(l[0]);
            n && t.faceVertexUvs[0].push([h[l[0]], h[l[1]], h[l[2]]]);
            if (4 === i.length) {
              s = e.calculateNormal(t, o[0], o[2], o[3]);
              t.faces.push(new THREE.Face3(o[2], o[3], o[0], s));
              if (n) return t.faceVertexUvs[0].push([h[l[2]], h[l[3]], h[l[0]]])
            }
          }
        }(this),
        g: function(e) {
          return function(e) {}
        }(this),
        o: function(e) {
          return function(e) {
            return t.name = e
          }
        }(this),
        vn: function(e) {
          return function(e) {}
        }(this),
        vt: function(e) {
          return function(e) {
            var t, r;
            r = function() {
              var r, i, n, o;
              n = e.split(" ");
              o = [];
              for (r = 0, i = n.length; i > r; r++) {
                t = n[r];
                o.push(parseFloat(t))
              }
              return o
            }();
            return h.push(new THREE.Vector2(r[0], r[1]))
          }
        }(this),
        v: function(e) {
          return function(e) {
            var r, i;
            i = function() {
              var t, i, n, o;
              n = e.split(" ");
              o = [];
              for (t = 0, i = n.length; i > t; t++) {
                r = n[t];
                o.push(parseFloat(r))
              }
              return o
            }();
            return t.vertices.push(new THREE.Vector3(i[0], i[2], i[1]))
          }
        }(this)
      };
      l = e.split("\n");
      for (r = 0, n = l.length; n > r; r++) {
        o = l[r];
        if (c = o.match(s)) {
          a = i[c[1]];
          null != a && a(c[2])
        }
      }
      t.computeFaceNormals();
      t.computeCentroids();
      t.computeBoundingBox();
      t.computeBoundingSphere();
      return t
    };
    return i
  }(e.GenericLoader);
  e.GenericLoader.extensions.obj = e.OBJLoader
}).call(this);
(function() {
  var e, t = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    r = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) i.call(t, n) && (e[n] = t[n]);
      r.prototype = t.prototype;
      e.prototype = new r;
      e.__super__ = t.prototype;
      return e
    },
    i = {}.hasOwnProperty;
  e = window.GitHub.DDD;
  e.PollingLoader = function(n) {
    function o(e) {
      null == e && (e = {});
      this.failPart = t(this.failPart, this);
      this.completePart = t(this.completePart, this);
      this.maybeFinished = t(this.maybeFinished, this);
      this.incompleteCount = t(this.incompleteCount, this);
      this.reset = t(this.reset, this);
      this.load = t(this.load, this);
      o.__super__.constructor.call(this);
      this.reset();
      null == e.timeout && (e.timeout = 10);
      null == e.tries && (e.tries = 10);
      null == e.maxLateJobs && (e.maxLateJobs = 1);
      this.timeout = e.timeout, this.tries = e.tries, this.status = e.status, this.maxLateJobs = e.maxLateJobs;
      this.addEventListener("ready", function(e) {
        return function() {
          e.cb(!1, e);
          return e.cb = function() {}
        }
      }(this));
      this.addEventListener("error", function(e) {
        return function() {
          e.cb(!0, e);
          return e.cb = function() {}
        }
      }(this))
    }
    r(o, n);
    o.prototype.load = function(t, r) {
      var n, o, a;
      this.reset();
      null != r && (this.cb = r);
      this.time.start = Date.now();
      this.time.end = void 0;
      o = [];
      for (n in t)
        if (i.call(t, n)) {
          a = t[n];
          o.push(function(t) {
            return function(r, i) {
              var n;
              n = t.parts[r] = {
                name: r,
                url: i,
                geom: void 0,
                loader: e.GenericLoader.loaderForUrl(t.status, i),
                load: function() {
                  return n.loader.load(n.url, {
                    attempts: t.tries
                  })
                }
              };
              n.loader.addEventListener("load", function(e) {
                return t.completePart(n, e.content)
              });
              n.loader.addEventListener("error", function(e) {
                return t.failPart(n)
              });
              n.loader.addEventListener("error:fatal", function(e) {
                return t.failPart(n)
              });
              return n.load()
            }
          }(this)(n, a))
        }
      return o
    };
    o.prototype.reset = function() {
      this.parts = {};
      this.time = {
        start: void 0,
        end: void 0
      };
      return null != this.cb ? this.cb : this.cb = function() {}
    };
    o.prototype.incompleteCount = function() {
      var e, t, r, n, o, a;
      e = 0;
      a = 0;
      o = this.parts;
      t = function(t) {
        return function(t, r) {
          a += 1;
          return null != r.geom ? e += 1 : void 0
        }
      }(this);
      for (r in o)
        if (i.call(o, r)) {
          n = o[r];
          t(r, n)
        }
      return a - e
    };
    o.prototype.maybeFinished = function(e) {
      var t, r, n, o, a;
      null == e && (e = function() {});
      if (Date.now() >= this.time.start + 1e3 * this.timeout && this.incompleteCount() > this.maxLateJobs) return this.dispatchEvent({
        type: "error",
        data: "timeout"
      });
      t = !0;
      a = this.parts;
      r = function(e) {
        return function(e, r) {
          return t = t && !(null == r.geom)
        }
      }(this);
      for (n in a)
        if (i.call(a, n)) {
          o = a[n];
          r(n, o)
        }
      if (t) {
        this.time.end = Date.now();
        debug("All parts Ready");
        return this.dispatchEvent({
          type: "ready",
          info: this
        })
      }
      return e()
    };
    o.prototype.completePart = function(e, t) {
      debug("completePart:", e, t);
      e.geom = t;
      return this.maybeFinished()
    };
    o.prototype.failPart = function(e) {
      debug("failPart():", e);
      return this.dispatchEvent({
        type: "error",
        info: "Too many tries for " + e.url
      })
    };
    return o
  }(THREE.EventDispatcher)
}).call(this);
(function() {
  var e, t = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    r = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) i.call(t, n) && (e[n] = t[n]);
      r.prototype = t.prototype;
      e.prototype = new r;
      e.__super__ = t.prototype;
      return e
    },
    i = {}.hasOwnProperty;
  e = window.GitHub.DDD;
  e.Renderable = function(e) {
    function n(e, r) {
      var i, o, a, s, l, c, h, u, f, p, d, m;
      this.info = null != r ? r : {};
      this.switchMode = t(this.switchMode, this);
      this.center = t(this.center, this);
      this.updateMaterials = t(this.updateMaterials, this);
      this.toggle = t(this.toggle, this);
      n.__super__.constructor.call(this);
      this.geometry = this.info.clone ? e.clone() : e;
      this.url = null != (c = this.info.url) ? c : "x-renderable://" + this.id;
      this.name = null != (h = null != (u = this.info.name) ? u : this.info.url) ? h : "model-" + this.id;
      null == (i = this.info).center && (i.center = !0);
      this.info.scale = 1;
      if (this.info.autoscale) {
        null == (o = this.info).scaleTo && (o.scaleTo = 100);
        this.geometry.computeBoundingSphere();
        if (this.geometry.boundingSphere.radius > this.info.scaleTo) {
          this.info.scale = this.info.scaleTo / this.geometry.boundingSphere.radius;
          m = (new THREE.Matrix4).makeScale(this.info.scale, this.info.scale, this.info.scale);
          this.geometry.applyMatrix(m);
          this.geometry.computeBoundingSphere()
        }
      }
      this.mesh = new THREE.Mesh(this.geometry);
      this.mesh.name = this.name;
      this.add(this.mesh);
      p = null != (f = this.info.parts) ? f : [];
      for (a = 0, s = p.length; s > a; a++) {
        l = p[a];
        this.add(l)
      }
      this.info.center && this.center();
      this.switchMode(null != (d = this.info.mode) ? d : "solid")
    }
    r(n, e);
    n.prototype.toggle = function(e) {
      return this.traverse(function(t) {
        return t.visible = e
      })
    };
    n.prototype.updateMaterials = function(e) {
      return null != e ? this.traverse(function(t) {
        return function(t) {
          var r, n, o, a, s;
          a = [];
          for (r in e)
            if (i.call(e, r)) {
              s = e[r];
              a.push(null != t && null != (n = t.mesh) && null != (o = n.material) ? o[r] = s : void 0)
            }
          return a
        }
      }(this)) : void 0
    };
    n.prototype.center = function() {
      var e, t, r, i, n;
      t = void 0;
      this.traverse(function(e) {
        return function(e) {
          var r;
          if ((r = e.geometry) && r.vertices.length > 0) {
            r.computeBoundingBox();
            if (null != t) {
              t.expandByPoint(r.boundingBox.min);
              return t.expandByPoint(r.boundingBox.max)
            }
            return t = r.boundingBox.clone()
          }
        }
      }(this));
      e = t.clone();
      r = t.center().negate();
      i = t.min.negate();
      debug("Total centering transform: " + r.x + ", " + r.y + ", " + i.z);
      debug("Bounds: ", e);
      n = (new THREE.Matrix4).makeTranslation(r.x, r.y, i.z);
      this.traverse(function(e) {
        return function(e) {
          if (null == e.mesh && null != e.geometry) {
            e.geometry.applyMatrix(n);
            e.geometry.computeCentroids();
            e.geometry.computeBoundingBox();
            return e.geometry.computeBoundingSphere()
          }
        }
      }(this));
      return this
    };
    n.prototype.switchMode = function(e) {
      var t, r, i, n, o;
      null == e && (e = "solid");
      t = {
        color: null != (r = this.info.color) ? r : 16752762,
        specular: null != (i = this.info.specular) ? i : 10066329,
        transparent: null != (n = this.info.transparent) ? n : !1,
        opacity: null != (o = this.info.opacity) ? o : 1
      };
      switch (e) {
        case "wireframe":
          this.mesh.material = new THREE.MeshPhongMaterial(t);
          this.mesh.material.wireframe = !0;
          break;
        case "solid":
          this.mesh.material = new THREE.MeshPhongMaterial(t);
          this.mesh.material.wireframe = !1;
          break;
        case "normal":
          this.mesh.material = new THREE.MeshNormalMaterial(t);
          this.mesh.material.wireframe = !1
      }
      this.mesh.material.side = this.info.side;
      this.mesh.material.needsUpdate = !0;
      this.geometry.buffersNeedUpdate = !0;
      return this.geometry.uvsNeedUpdate = !0
    };
    return n
  }(THREE.Object3D)
}).call(this);
(function() {
  var e, t = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    r = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) i.call(t, n) && (e[n] = t[n]);
      r.prototype = t.prototype;
      e.prototype = new r;
      e.__super__ = t.prototype;
      return e
    },
    i = {}.hasOwnProperty;
  e = window.GitHub.DDD;
  e.STLLoader = function(i) {
    function n() {
      this.parseBinary = t(this.parseBinary, this);
      this.parse = t(this.parse, this);
      return n.__super__.constructor.apply(this, arguments)
    }
    r(n, i);
    n.prototype.side = function() {
      return THREE.FrontSide
    };
    n.prototype.parse = function(t) {
      var r;
      r = function(t) {
        return function(t) {
          var r, i, n, o;
          o = new e.BinaryReader(t);
          o.seek(80);
          i = 50;
          n = o.readUInt32();
          r = 84 + n * i;
          return r === o.getSize()
        }
      }(this);
      return r(t) ? this.parseBinary(t) : this.parseASCII(t)
    };
    n.prototype.parseBinary = function(t) {
      var r, i, n, o, a, s, l, c, h, u, f, p, d, m, E;
      f = new e.BinaryReader(t);
      u = function(e) {
        return function() {
          return [f.readFloat(), f.readFloat(), f.readFloat()]
        }
      }(this);
      f.seek(80);
      l = f.readUInt32();
      n = new THREE.Geometry;
      for (i = o = 0, p = l; p >= 0 ? p > o : o > p; i = p >= 0 ? ++o : --o) {
        E = u();
        h = new THREE.Vector3(E[0], E[1], E[2]);
        for (a = 1; 3 >= a; a++) {
          E = u();
          n.vertices.push(new THREE.Vector3(E[0], E[1], E[2]))
        }
        r = f.readUInt16();
        s = n.vertices.length;
        d = (new THREE.Vector3).subVectors(n.vertices[s - 3], n.vertices[s - 2]);
        m = (new THREE.Vector3).subVectors(n.vertices[s - 3], n.vertices[s - 1]);
        c = (new THREE.Vector3).crossVectors(d, m).normalize();
        n.faces.push(new THREE.Face3(s - 3, s - 2, s - 1, c))
      }
      n.computeCentroids();
      n.computeBoundingBox();
      n.computeBoundingSphere();
      return n
    };
    n.prototype.parseASCII = function(e) {
      var t, r, i, n, o, a, s, l, c, h, u;
      t = new THREE.Geometry;
      o = /facet([\s\S]*?)endfacet/g;
      for (; null != (l = o.exec(e));) {
        c = l[0];
        a = /normal[\s]+([-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+/g;
        for (; null != (l = a.exec(c));) n = new THREE.Vector3(parseFloat(l[1]), parseFloat(l[3]), parseFloat(l[5]));
        s = /vertex[\s]+([-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+/g;
        for (; null != (l = s.exec(c));) t.vertices.push(new THREE.Vector3(parseFloat(l[1]), parseFloat(l[3]), parseFloat(l[5])));
        r = t.vertices.length;
        h = (new THREE.Vector3).subVectors(t.vertices[r - 3], t.vertices[r - 2]);
        u = (new THREE.Vector3).subVectors(t.vertices[r - 3], t.vertices[r - 1]);
        i = (new THREE.Vector3).crossVectors(h, u).normalize();
        i = this.calculateNormal(t, r - 3, r - 2, r - 1);
        t.faces.push(new THREE.Face3(r - 3, r - 2, r - 1, i))
      }
      t.computeCentroids();
      t.computeBoundingBox();
      t.computeBoundingSphere();
      return t
    };
    return n
  }(e.GenericLoader);
  e.GenericLoader.extensions.stl = e.STLLoader
}).call(this);
(function() {
  var e;
  e = window.GitHub.DDD;
  $(function() {
    e.DefaultColor = parseInt($(".render-shell").data("color")) || 4293572;
    debug("Color is: " + e.DefaultColor);
    return new e.Viewer("#solid-viewer", function(t, r) {
      var i, n;
      try {
        i = null != r.$().data("file1");
        if (i) {
          r.load(r.$().data("file1"), {
            name: "file1",
            center: !1,
            color: e.DefaultColor
          });
          return r.load(r.$().data("file2"), {
            name: "file2",
            center: !1,
            color: e.DefaultColor
          })
        }
        return r.load(r.$().data("file"), {
          autoscale: !0,
          scaleTo: 100,
          color: e.DefaultColor
        })
      } catch (o) {
        n = o;
        this.status.set("error");
        throw n
      }
    })
  })
}).call(this);
