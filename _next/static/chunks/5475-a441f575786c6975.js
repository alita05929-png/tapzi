(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5475],
  {
    6046: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => m });
      var n = r(12115),
        i = r(46641),
        a = r(49972),
        o = r(59068),
        l = r(95932),
        c = r(73433),
        s = r(75380),
        u = r(93389),
        f = r(78892),
        d = ["width", "height"];
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      var y = {
          accessibilityLayer: !0,
          layout: "horizontal",
          stackOffset: "none",
          barCategoryGap: "10%",
          barGap: 4,
          margin: { top: 5, right: 5, bottom: 5, left: 5 },
          reverseStackOrder: !1,
          syncMethod: "index",
        },
        v = (0, n.forwardRef)(function (e, t) {
          var r,
            i = (0, u.e)(e.categoricalChartProps, y),
            { width: v, height: h } = i,
            m = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                      if (-1 !== t.indexOf(n)) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    -1 === t.indexOf(r) &&
                      {}.propertyIsEnumerable.call(e, r) &&
                      (i[r] = e[r]);
              }
              return i;
            })(i, d);
          if (!(0, f.F)(v) || !(0, f.F)(h)) return null;
          var {
            chartName: b,
            defaultTooltipEventType: g,
            validateTooltipEventTypes: x,
            tooltipPayloadSearcher: O,
            categoricalChartProps: w,
          } = e;
          return n.createElement(
            a.J,
            {
              preloadedState: {
                options: {
                  chartName: b,
                  defaultTooltipEventType: g,
                  validateTooltipEventTypes: x,
                  tooltipPayloadSearcher: O,
                  eventEmitter: void 0,
                },
              },
              reduxStoreName: null != (r = w.id) ? r : b,
            },
            n.createElement(o.TK, { chartData: w.data }),
            n.createElement(l.s, {
              width: v,
              height: h,
              layout: i.layout,
              margin: i.margin,
            }),
            n.createElement(c.p, {
              accessibilityLayer: i.accessibilityLayer,
              barCategoryGap: i.barCategoryGap,
              maxBarSize: i.maxBarSize,
              stackOffset: i.stackOffset,
              barGap: i.barGap,
              barSize: i.barSize,
              syncId: i.syncId,
              syncMethod: i.syncMethod,
              className: i.className,
            }),
            n.createElement(s.L, p({}, m, { width: v, height: h, ref: t }))
          );
        }),
        h = ["axis"],
        m = (0, n.forwardRef)((e, t) =>
          n.createElement(v, {
            chartName: "LineChart",
            defaultTooltipEventType: "axis",
            validateTooltipEventTypes: h,
            tooltipPayloadSearcher: i.uN,
            categoricalChartProps: e,
            ref: t,
          })
        );
    },
    14986: (e, t) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.toArray = function (e) {
          return Array.isArray(e) ? e : Array.from(e);
        });
    },
    15484: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i, b: () => n });
      var n = r(82661);
      let i = n;
    },
    17580: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("users", [
        [
          "path",
          { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
        ],
        ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
        ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ]);
    },
    19035: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => y });
      var n = r(16377),
        i = r(46605),
        a = r(41643);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class c {
        static create(e) {
          return new c(e);
        }
        get domain() {
          return this.scale.domain;
        }
        get range() {
          return this.scale.range;
        }
        get rangeMin() {
          return this.range()[0];
        }
        get rangeMax() {
          return this.range()[1];
        }
        get bandwidth() {
          return this.scale.bandwidth;
        }
        apply(e) {
          var { bandAware: t, position: r } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 !== e) {
            if (r)
              switch (r) {
                case "start":
                default:
                  return this.scale(e);
                case "middle":
                  var n = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(e) + n;
                case "end":
                  var i = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(e) + i;
              }
            if (t) {
              var a = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(e) + a;
            }
            return this.scale(e);
          }
        }
        isInRange(e) {
          var t = this.range(),
            r = t[0],
            n = t[t.length - 1];
          return r <= n ? e >= r && e <= n : e >= n && e <= r;
        }
        constructor(e) {
          this.scale = e;
        }
      }
      l(c, "EPS", 1e-4);
      var s = function (e) {
        var { width: t, height: r } = e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = ((((n % 180) + 180) % 180) * Math.PI) / 180,
          a = Math.atan(r / t);
        return Math.abs(
          i > a && i < Math.PI - a ? r / Math.sin(i) : t / Math.cos(i)
        );
      };
      function u(e, t, r) {
        if (t < 1) return [];
        if (1 === t && void 0 === r) return e;
        for (var n = [], i = 0; i < e.length; i += t)
          if (void 0 !== r && !0 !== r(e[i])) return;
          else n.push(e[i]);
        return n;
      }
      function f(e, t, r, n, i) {
        if (e * t < e * n || e * t > e * i) return !1;
        var a = r();
        return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
      }
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                var n, i, a;
                (n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function y(e, t, r) {
        var o,
          {
            tick: l,
            ticks: c,
            viewBox: d,
            minTickGap: y,
            orientation: v,
            interval: h,
            tickFormatter: m,
            unit: b,
            angle: g,
          } = e;
        if (!c || !c.length || !l) return [];
        if ((0, n.Et)(h) || a.m.isSsr)
          return null != (o = u(c, ((0, n.Et)(h) ? h : 0) + 1)) ? o : [];
        var x = [],
          O = "top" === v || "bottom" === v ? "width" : "height",
          w =
            b && "width" === O
              ? (0, i.P)(b, { fontSize: t, letterSpacing: r })
              : { width: 0, height: 0 },
          P = (e, n) => {
            var a,
              o = "function" == typeof m ? m(e.value, n) : e.value;
            return "width" === O
              ? ((a = (0, i.P)(o, { fontSize: t, letterSpacing: r })),
                s({ width: a.width + w.width, height: a.height + w.height }, g))
              : (0, i.P)(o, { fontSize: t, letterSpacing: r })[O];
          },
          E = c.length >= 2 ? (0, n.sA)(c[1].coordinate - c[0].coordinate) : 1,
          k = (function (e, t, r) {
            var n = "width" === r,
              { x: i, y: a, width: o, height: l } = e;
            return 1 === t
              ? { start: n ? i : a, end: n ? i + o : a + l }
              : { start: n ? i + o : a + l, end: n ? i : a };
          })(d, E, O);
        return "equidistantPreserveStart" === h
          ? (function (e, t, r, n, i) {
              for (
                var a,
                  o = (n || []).slice(),
                  { start: l, end: c } = t,
                  s = 0,
                  d = 1,
                  p = l;
                d <= o.length;

              )
                if (
                  (a = (function () {
                    var t,
                      a = null == n ? void 0 : n[s];
                    if (void 0 === a) return { v: u(n, d) };
                    var o = s,
                      y = () => (void 0 === t && (t = r(a, o)), t),
                      v = a.coordinate,
                      h = 0 === s || f(e, v, y, p, c);
                    h || ((s = 0), (p = l), (d += 1)),
                      h && ((p = v + e * (y() / 2 + i)), (s += d));
                  })())
                )
                  return a.v;
              return [];
            })(E, k, P, c, y)
          : ("preserveStart" === h || "preserveStartEnd" === h
              ? (function (e, t, r, n, i, a) {
                  var o = (n || []).slice(),
                    l = o.length,
                    { start: c, end: s } = t;
                  if (a) {
                    var u = n[l - 1],
                      d = r(u, l - 1),
                      y = e * (u.coordinate + (e * d) / 2 - s);
                    (o[l - 1] = u =
                      p(
                        p({}, u),
                        {},
                        {
                          tickCoord:
                            y > 0 ? u.coordinate - y * e : u.coordinate,
                        }
                      )),
                      f(e, u.tickCoord, () => d, c, s) &&
                        ((s = u.tickCoord - e * (d / 2 + i)),
                        (o[l - 1] = p(p({}, u), {}, { isShow: !0 })));
                  }
                  for (
                    var v = a ? l - 1 : l,
                      h = function (t) {
                        var n,
                          a = o[t],
                          l = () => (void 0 === n && (n = r(a, t)), n);
                        if (0 === t) {
                          var u = e * (a.coordinate - (e * l()) / 2 - c);
                          o[t] = a = p(
                            p({}, a),
                            {},
                            {
                              tickCoord:
                                u < 0 ? a.coordinate - u * e : a.coordinate,
                            }
                          );
                        } else
                          o[t] = a = p(
                            p({}, a),
                            {},
                            { tickCoord: a.coordinate }
                          );
                        f(e, a.tickCoord, l, c, s) &&
                          ((c = a.tickCoord + e * (l() / 2 + i)),
                          (o[t] = p(p({}, a), {}, { isShow: !0 })));
                      },
                      m = 0;
                    m < v;
                    m++
                  )
                    h(m);
                  return o;
                })(E, k, P, c, y, "preserveStartEnd" === h)
              : (function (e, t, r, n, i) {
                  for (
                    var a = (n || []).slice(),
                      o = a.length,
                      { start: l } = t,
                      { end: c } = t,
                      s = function (t) {
                        var n,
                          s = a[t],
                          u = () => (void 0 === n && (n = r(s, t)), n);
                        if (t === o - 1) {
                          var d = e * (s.coordinate + (e * u()) / 2 - c);
                          a[t] = s = p(
                            p({}, s),
                            {},
                            {
                              tickCoord:
                                d > 0 ? s.coordinate - d * e : s.coordinate,
                            }
                          );
                        } else
                          a[t] = s = p(
                            p({}, s),
                            {},
                            { tickCoord: s.coordinate }
                          );
                        f(e, s.tickCoord, u, l, c) &&
                          ((c = s.tickCoord - e * (u() / 2 + i)),
                          (a[t] = p(p({}, s), {}, { isShow: !0 })));
                      },
                      u = o - 1;
                    u >= 0;
                    u--
                  )
                    s(u);
                  return a;
                })(E, k, P, c, y)
            ).filter((e) => e.isShow);
      }
    },
    33109: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("trending-up", [
        ["path", { d: "M16 7h6v6", key: "box55l" }],
        ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
      ]);
    },
    39785: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("wallet", [
        [
          "path",
          {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6",
          },
        ],
        [
          "path",
          { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" },
        ],
      ]);
    },
    40220: (e, t) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.last = function (e) {
          return e[e.length - 1];
        });
    },
    52071: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => x });
      var n = r(12115),
        i = r(52596),
        a = r(79584),
        o = r(55306),
        l = r(81971),
        c = r(14299),
        s = r(56124),
        u = r(71807),
        f = (e) => {
          var {
              ticks: t,
              label: r,
              labelGapWithTick: n = 5,
              tickSize: i = 0,
              tickMargin: a = 0,
            } = e,
            o = 0;
          if (t) {
            t.forEach((e) => {
              if (e) {
                var t = e.getBoundingClientRect();
                t.width > o && (o = t.width);
              }
            });
            var l = r ? r.getBoundingClientRect().width : 0;
            return Math.round(o + (i + a) + l + (r ? n : 0));
          }
          return 0;
        },
        d = r(60379),
        p = ["dangerouslySetInnerHTML", "ticks"];
      function y(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function v() {
        return (v = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      function h(e) {
        var t = (0, l.j)();
        return (
          (0, n.useEffect)(
            () => (
              t((0, o.cU)(e)),
              () => {
                t((0, o.fR)(e));
              }
            ),
            [e, t]
          ),
          null
        );
      }
      var m = (e) => {
          var t,
            { yAxisId: r, className: y, width: h, label: m } = e,
            b = (0, n.useRef)(null),
            g = (0, n.useRef)(null),
            x = (0, l.G)(s.c2),
            O = (0, u.r)(),
            w = (0, l.j)(),
            P = "yAxis",
            E = (0, l.G)((e) => (0, c.iV)(e, P, r, O)),
            k = (0, l.G)((e) => (0, c.wP)(e, r)),
            j = (0, l.G)((e) => (0, c.KR)(e, r)),
            A = (0, l.G)((e) => (0, c.Zi)(e, P, r, O));
          if (
            ((0, n.useLayoutEffect)(() => {
              if (
                !("auto" !== h || !k || (0, d.Z)(m) || (0, n.isValidElement)(m))
              ) {
                var e,
                  t = b.current,
                  i =
                    null == t || null == (e = t.tickRefs) ? void 0 : e.current,
                  { tickSize: a, tickMargin: l } = t.props,
                  c = f({
                    ticks: i,
                    label: g.current,
                    labelGapWithTick: 5,
                    tickSize: a,
                    tickMargin: l,
                  });
                Math.round(k.width) !== Math.round(c) &&
                  w((0, o.QG)({ id: r, width: c }));
              }
            }, [
              b,
              null == b || null == (t = b.current) || null == (t = t.tickRefs)
                ? void 0
                : t.current,
              null == k ? void 0 : k.width,
              k,
              w,
              m,
              r,
              h,
            ]),
            null == k || null == j)
          )
            return null;
          var { dangerouslySetInnerHTML: S, ticks: C } = e,
            D = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                      if (-1 !== t.indexOf(n)) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    -1 === t.indexOf(r) &&
                      {}.propertyIsEnumerable.call(e, r) &&
                      (i[r] = e[r]);
              }
              return i;
            })(e, p);
          return n.createElement(
            a.u,
            v({}, D, {
              ref: b,
              labelRef: g,
              scale: E,
              x: j.x,
              y: j.y,
              width: k.width,
              height: k.height,
              className: (0, i.$)("recharts-".concat(P, " ").concat(P), y),
              viewBox: x,
              ticks: A,
            })
          );
        },
        b = (e) => {
          var t, r, i, a, o;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(h, {
              interval: null != (t = e.interval) ? t : "preserveEnd",
              id: e.yAxisId,
              scale: e.scale,
              type: e.type,
              domain: e.domain,
              allowDataOverflow: e.allowDataOverflow,
              dataKey: e.dataKey,
              allowDuplicatedCategory: e.allowDuplicatedCategory,
              allowDecimals: e.allowDecimals,
              tickCount: e.tickCount,
              padding: e.padding,
              includeHidden: null != (r = e.includeHidden) && r,
              reversed: e.reversed,
              ticks: e.ticks,
              width: e.width,
              orientation: e.orientation,
              mirror: e.mirror,
              hide: e.hide,
              unit: e.unit,
              name: e.name,
              angle: null != (i = e.angle) ? i : 0,
              minTickGap: null != (a = e.minTickGap) ? a : 5,
              tick: null == (o = e.tick) || o,
              tickFormatter: e.tickFormatter,
            }),
            n.createElement(m, e)
          );
        },
        g = {
          allowDataOverflow: c.cd.allowDataOverflow,
          allowDecimals: c.cd.allowDecimals,
          allowDuplicatedCategory: c.cd.allowDuplicatedCategory,
          hide: !1,
          mirror: c.cd.mirror,
          orientation: c.cd.orientation,
          padding: c.cd.padding,
          reversed: c.cd.reversed,
          scale: c.cd.scale,
          tickCount: c.cd.tickCount,
          type: c.cd.type,
          width: c.cd.width,
          yAxisId: 0,
        };
      class x extends n.Component {
        render() {
          return n.createElement(b, this.props);
        }
      }
      y(x, "displayName", "YAxis"), y(x, "defaultProps", g);
    },
    55868: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("dollar-sign", [
        ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
        [
          "path",
          {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s",
          },
        ],
      ]);
    },
    58080: (e, t, r) => {
      e.exports = r(78359).last;
    },
    60379: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => P, Z: () => m });
      var n = r(12115),
        i = r(52596),
        a = r(79095),
        o = r(70788),
        l = r(16377),
        c = r(25641),
        s = r(97238),
        u = ["offset"],
        f = ["labelRef"];
      function d(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              -1 === t.indexOf(r) &&
                {}.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]);
        }
        return i;
      }
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                var n, i, a;
                (n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function v() {
        return (v = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      var h = (e) => {
          var { value: t, formatter: r } = e,
            n = (0, l.uy)(e.children) ? t : e.children;
          return "function" == typeof r ? r(n) : n;
        },
        m = (e) => null != e && "function" == typeof e,
        b = (e, t) => (0, l.sA)(t - e) * Math.min(Math.abs(t - e), 360),
        g = (e, t, r) => {
          var a,
            o,
            { position: s, viewBox: u, offset: f, className: d } = e,
            {
              cx: p,
              cy: y,
              innerRadius: h,
              outerRadius: m,
              startAngle: g,
              endAngle: x,
              clockWise: O,
            } = u,
            w = (h + m) / 2,
            P = b(g, x),
            E = P >= 0 ? 1 : -1;
          "insideStart" === s
            ? ((a = g + E * f), (o = O))
            : "insideEnd" === s
            ? ((a = x - E * f), (o = !O))
            : "end" === s && ((a = x + E * f), (o = O)),
            (o = P <= 0 ? o : !o);
          var k = (0, c.IZ)(p, y, w, a),
            j = (0, c.IZ)(p, y, w, a + (o ? 1 : -1) * 359),
            A = "M"
              .concat(k.x, ",")
              .concat(k.y, "\n    A")
              .concat(w, ",")
              .concat(w, ",0,1,")
              .concat(+!o, ",\n    ")
              .concat(j.x, ",")
              .concat(j.y),
            S = (0, l.uy)(e.id) ? (0, l.NF)("recharts-radial-line-") : e.id;
          return n.createElement(
            "text",
            v({}, r, {
              dominantBaseline: "central",
              className: (0, i.$)("recharts-radial-bar-label", d),
            }),
            n.createElement(
              "defs",
              null,
              n.createElement("path", { id: S, d: A })
            ),
            n.createElement("textPath", { xlinkHref: "#".concat(S) }, t)
          );
        },
        x = (e) => {
          var { viewBox: t, offset: r, position: n } = e,
            {
              cx: i,
              cy: a,
              innerRadius: o,
              outerRadius: l,
              startAngle: s,
              endAngle: u,
            } = t,
            f = (s + u) / 2;
          if ("outside" === n) {
            var { x: d, y: p } = (0, c.IZ)(i, a, l + r, f);
            return {
              x: d,
              y: p,
              textAnchor: d >= i ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === n)
            return {
              x: i,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === n)
            return {
              x: i,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === n)
            return { x: i, y: a, textAnchor: "middle", verticalAnchor: "end" };
          var { x: y, y: v } = (0, c.IZ)(i, a, (o + l) / 2, f);
          return { x: y, y: v, textAnchor: "middle", verticalAnchor: "middle" };
        },
        O = (e, t) => {
          var { parentViewBox: r, offset: n, position: i } = e,
            { x: a, y: o, width: c, height: s } = t,
            u = s >= 0 ? 1 : -1,
            f = u * n,
            d = u > 0 ? "end" : "start",
            p = u > 0 ? "start" : "end",
            v = c >= 0 ? 1 : -1,
            h = v * n,
            m = v > 0 ? "end" : "start",
            b = v > 0 ? "start" : "end";
          if ("top" === i)
            return y(
              y(
                {},
                {
                  x: a + c / 2,
                  y: o - u * n,
                  textAnchor: "middle",
                  verticalAnchor: d,
                }
              ),
              r ? { height: Math.max(o - r.y, 0), width: c } : {}
            );
          if ("bottom" === i)
            return y(
              y(
                {},
                {
                  x: a + c / 2,
                  y: o + s + f,
                  textAnchor: "middle",
                  verticalAnchor: p,
                }
              ),
              r
                ? { height: Math.max(r.y + r.height - (o + s), 0), width: c }
                : {}
            );
          if ("left" === i) {
            var g = {
              x: a - h,
              y: o + s / 2,
              textAnchor: m,
              verticalAnchor: "middle",
            };
            return y(
              y({}, g),
              r ? { width: Math.max(g.x - r.x, 0), height: s } : {}
            );
          }
          if ("right" === i) {
            var x = {
              x: a + c + h,
              y: o + s / 2,
              textAnchor: b,
              verticalAnchor: "middle",
            };
            return y(
              y({}, x),
              r ? { width: Math.max(r.x + r.width - x.x, 0), height: s } : {}
            );
          }
          var O = r ? { width: c, height: s } : {};
          return "insideLeft" === i
            ? y(
                {
                  x: a + h,
                  y: o + s / 2,
                  textAnchor: b,
                  verticalAnchor: "middle",
                },
                O
              )
            : "insideRight" === i
            ? y(
                {
                  x: a + c - h,
                  y: o + s / 2,
                  textAnchor: m,
                  verticalAnchor: "middle",
                },
                O
              )
            : "insideTop" === i
            ? y(
                {
                  x: a + c / 2,
                  y: o + f,
                  textAnchor: "middle",
                  verticalAnchor: p,
                },
                O
              )
            : "insideBottom" === i
            ? y(
                {
                  x: a + c / 2,
                  y: o + s - f,
                  textAnchor: "middle",
                  verticalAnchor: d,
                },
                O
              )
            : "insideTopLeft" === i
            ? y({ x: a + h, y: o + f, textAnchor: b, verticalAnchor: p }, O)
            : "insideTopRight" === i
            ? y({ x: a + c - h, y: o + f, textAnchor: m, verticalAnchor: p }, O)
            : "insideBottomLeft" === i
            ? y({ x: a + h, y: o + s - f, textAnchor: b, verticalAnchor: d }, O)
            : "insideBottomRight" === i
            ? y(
                {
                  x: a + c - h,
                  y: o + s - f,
                  textAnchor: m,
                  verticalAnchor: d,
                },
                O
              )
            : i &&
              "object" == typeof i &&
              ((0, l.Et)(i.x) || (0, l._3)(i.x)) &&
              ((0, l.Et)(i.y) || (0, l._3)(i.y))
            ? y(
                {
                  x: a + (0, l.F4)(i.x, c),
                  y: o + (0, l.F4)(i.y, s),
                  textAnchor: "end",
                  verticalAnchor: "end",
                },
                O
              )
            : y(
                {
                  x: a + c / 2,
                  y: o + s / 2,
                  textAnchor: "middle",
                  verticalAnchor: "middle",
                },
                O
              );
        },
        w = (e) => "cx" in e && (0, l.Et)(e.cx);
      function P(e) {
        var t,
          { offset: r = 5 } = e,
          c = y({ offset: r }, d(e, u)),
          {
            viewBox: p,
            position: m,
            value: b,
            children: P,
            content: E,
            className: k = "",
            textBreakAll: j,
            labelRef: A,
          } = c,
          S = (0, s.sk)(),
          C = p || S;
        if (
          !C ||
          ((0, l.uy)(b) &&
            (0, l.uy)(P) &&
            !(0, n.isValidElement)(E) &&
            "function" != typeof E)
        )
          return null;
        if ((0, n.isValidElement)(E)) {
          var { labelRef: D } = c,
            N = d(c, f);
          return (0, n.cloneElement)(E, N);
        }
        if ("function" == typeof E) {
          if (((t = (0, n.createElement)(E, c)), (0, n.isValidElement)(t)))
            return t;
        } else t = h(c);
        var I = w(C),
          M = (0, o.J9)(c, !0);
        if (I && ("insideStart" === m || "insideEnd" === m || "end" === m))
          return g(c, t, M);
        var T = I ? x(c) : O(c, C);
        return n.createElement(
          a.E,
          v({ ref: A, className: (0, i.$)("recharts-label", k) }, M, T, {
            breakAll: j,
          }),
          t
        );
      }
      P.displayName = "Label";
      var E = (e) => {
          var {
            cx: t,
            cy: r,
            angle: n,
            startAngle: i,
            endAngle: a,
            r: o,
            radius: c,
            innerRadius: s,
            outerRadius: u,
            x: f,
            y: d,
            top: p,
            left: y,
            width: v,
            height: h,
            clockWise: m,
            labelViewBox: b,
          } = e;
          if (b) return b;
          if ((0, l.Et)(v) && (0, l.Et)(h)) {
            if ((0, l.Et)(f) && (0, l.Et)(d))
              return { x: f, y: d, width: v, height: h };
            if ((0, l.Et)(p) && (0, l.Et)(y))
              return { x: p, y: y, width: v, height: h };
          }
          return (0, l.Et)(f) && (0, l.Et)(d)
            ? { x: f, y: d, width: 0, height: 0 }
            : (0, l.Et)(t) && (0, l.Et)(r)
            ? {
                cx: t,
                cy: r,
                startAngle: i || n || 0,
                endAngle: a || n || 0,
                innerRadius: s || 0,
                outerRadius: u || c || o || 0,
                clockWise: m,
              }
            : e.viewBox
            ? e.viewBox
            : void 0;
        },
        k = (e, t, r) => {
          if (!e) return null;
          var i = { viewBox: t, labelRef: r };
          return !0 === e
            ? n.createElement(P, v({ key: "label-implicit" }, i))
            : (0, l.vh)(e)
            ? n.createElement(P, v({ key: "label-implicit", value: e }, i))
            : (0, n.isValidElement)(e)
            ? e.type === P
              ? (0, n.cloneElement)(e, y({ key: "label-implicit" }, i))
              : n.createElement(P, v({ key: "label-implicit", content: e }, i))
            : m(e)
            ? n.createElement(P, v({ key: "label-implicit", content: e }, i))
            : e && "object" == typeof e
            ? n.createElement(P, v({}, e, { key: "label-implicit" }, i))
            : null;
        };
      (P.parseViewBox = E),
        (P.renderCallByParent = function (e, t) {
          var r =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          if (!e || (!e.children && r && !e.label)) return null;
          var { children: i, labelRef: a } = e,
            l = E(e),
            c = (0, o.aS)(i, P).map((e, r) =>
              (0, n.cloneElement)(e, {
                viewBox: t || l,
                key: "label-".concat(r),
              })
            );
          return r ? [k(e.label, t || l, a), ...c] : c;
        });
    },
    70022: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => eB, l: () => eT });
      var n = r(12115),
        i = r(52596),
        a = r(70688),
        o = r(43597),
        l = r(70788);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      var s = (e) => {
          var { cx: t, cy: r, r: a, className: s } = e,
            u = (0, i.$)("recharts-dot", s);
          return t === +t && r === +r && a === +a
            ? n.createElement(
                "circle",
                c({}, (0, l.J9)(e, !1), (0, o._U)(e), {
                  className: u,
                  cx: t,
                  cy: r,
                  r: a,
                })
              )
            : null;
        },
        u = r(2348),
        f = r(58080),
        d = r.n(f),
        p = r(60379),
        y = r(39827),
        v = r(16377),
        h = ["valueAccessor"],
        m = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
      function b() {
        return (b = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                var n, i, a;
                (n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function O(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              -1 === t.indexOf(r) &&
                {}.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]);
        }
        return i;
      }
      var w = (e) => (Array.isArray(e.value) ? d()(e.value) : e.value);
      function P(e) {
        var { valueAccessor: t = w } = e,
          r = O(e, h),
          { data: i, dataKey: a, clockWise: o, id: c, textBreakAll: s } = r,
          f = O(r, m);
        return i && i.length
          ? n.createElement(
              u.W,
              { className: "recharts-label-list" },
              i.map((e, r) => {
                var i = (0, v.uy)(a) ? t(e, r) : (0, y.kr)(e && e.payload, a),
                  u = (0, v.uy)(c) ? {} : { id: "".concat(c, "-").concat(r) };
                return n.createElement(
                  p.J,
                  b({}, (0, l.J9)(e, !0), f, u, {
                    parentViewBox: e.parentViewBox,
                    value: i,
                    textBreakAll: s,
                    viewBox: p.J.parseViewBox(
                      (0, v.uy)(o) ? e : x(x({}, e), {}, { clockWise: o })
                    ),
                    key: "label-".concat(r),
                    index: r,
                  })
                );
              })
            )
          : null;
      }
      (P.displayName = "LabelList"),
        (P.renderCallByParent = function (e, t) {
          var r,
            i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!e || (!e.children && i && !e.label)) return null;
          var { children: a } = e,
            o = (0, l.aS)(a, P).map((e, r) =>
              (0, n.cloneElement)(e, { data: t, key: "labelList-".concat(r) })
            );
          return i
            ? [
                ((r = e.label),
                r
                  ? !0 === r
                    ? n.createElement(P, { key: "labelList-implicit", data: t })
                    : n.isValidElement(r) || (0, p.Z)(r)
                    ? n.createElement(P, {
                        key: "labelList-implicit",
                        data: t,
                        content: r,
                      })
                    : "object" == typeof r
                    ? n.createElement(
                        P,
                        b({ data: t }, r, { key: "labelList-implicit" })
                      )
                    : null
                  : null),
                ...o,
              ]
            : o;
        });
      var E = r(27119),
        k = r(71807),
        j = ["children"],
        A = () => {},
        S = (0, n.createContext)({ addErrorBar: A, removeErrorBar: A }),
        C = (0, n.createContext)({
          data: [],
          xAxisId: "xAxis-0",
          yAxisId: "yAxis-0",
          dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
          errorBarOffset: 0,
        });
      function D(e) {
        var { children: t } = e,
          r = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]);
            }
            return i;
          })(e, j);
        return n.createElement(C.Provider, { value: r }, t);
      }
      var N = () => (0, n.useContext)(C),
        I = (e) => {
          var {
              children: t,
              xAxisId: r,
              yAxisId: i,
              zAxisId: a,
              dataKey: o,
              data: l,
              stackId: c,
              hide: s,
              type: u,
              barSize: f,
            } = e,
            [d, p] = n.useState([]),
            y = (0, n.useCallback)(
              (e) => {
                p((t) => [...t, e]);
              },
              [p]
            ),
            v = (0, n.useCallback)(
              (e) => {
                p((t) => t.filter((t) => t !== e));
              },
              [p]
            ),
            h = (0, k.r)();
          return n.createElement(
            S.Provider,
            { value: { addErrorBar: y, removeErrorBar: v } },
            n.createElement(E.p, {
              type: u,
              data: l,
              xAxisId: r,
              yAxisId: i,
              zAxisId: a,
              dataKey: o,
              errorBars: d,
              stackId: c,
              hide: s,
              barSize: f,
              isPanorama: h,
            }),
            t
          );
        };
      function M(e) {
        var { addErrorBar: t, removeErrorBar: r } = (0, n.useContext)(S);
        return (
          (0, n.useEffect)(
            () => (
              t(e),
              () => {
                r(e);
              }
            ),
            [t, r, e]
          ),
          null
        );
      }
      var T = r(68234),
        B = r(93389),
        L = r(74460),
        R = [
          "direction",
          "width",
          "dataKey",
          "isAnimationActive",
          "animationBegin",
          "animationDuration",
          "animationEasing",
        ];
      function z(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function G() {
        return (G = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      function _(e) {
        var {
            direction: t,
            width: r,
            dataKey: i,
            isAnimationActive: a,
            animationBegin: o,
            animationDuration: c,
            animationEasing: s,
          } = e,
          f = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]);
            }
            return i;
          })(e, R),
          d = (0, l.J9)(f, !1),
          {
            data: p,
            dataPointFormatter: y,
            xAxisId: v,
            yAxisId: h,
            errorBarOffset: m,
          } = N(),
          b = (0, T.ZI)(v),
          g = (0, T.gi)(h);
        if (
          (null == b ? void 0 : b.scale) == null ||
          (null == g ? void 0 : g.scale) == null ||
          null == p ||
          ("x" === t && "number" !== b.type)
        )
          return null;
        var x = p.map((e) => {
          var l,
            f,
            { x: p, y: v, value: h, errorVal: x } = y(e, i, t);
          if (!x) return null;
          var O = [];
          if ((Array.isArray(x) ? ([l, f] = x) : (l = f = x), "x" === t)) {
            var { scale: w } = b,
              P = v + m,
              E = P + r,
              k = P - r,
              j = w(h - l),
              A = w(h + f);
            O.push({ x1: A, y1: E, x2: A, y2: k }),
              O.push({ x1: j, y1: P, x2: A, y2: P }),
              O.push({ x1: j, y1: E, x2: j, y2: k });
          } else if ("y" === t) {
            var { scale: S } = g,
              C = p + m,
              D = C - r,
              N = C + r,
              I = S(h - l),
              M = S(h + f);
            O.push({ x1: D, y1: M, x2: N, y2: M }),
              O.push({ x1: C, y1: I, x2: C, y2: M }),
              O.push({ x1: D, y1: I, x2: N, y2: I });
          }
          var T = "".concat(p + m, "px ").concat(v + m, "px");
          return n.createElement(
            u.W,
            G(
              {
                className: "recharts-errorBar",
                key: "bar-".concat(
                  O.map((e) =>
                    ""
                      .concat(e.x1, "-")
                      .concat(e.x2, "-")
                      .concat(e.y1, "-")
                      .concat(e.y2)
                  )
                ),
              },
              d
            ),
            O.map((e) => {
              var t = a
                ? { transformOrigin: "".concat(e.x1 - 5, "px") }
                : void 0;
              return n.createElement(
                L.i,
                {
                  from: { transform: "scaleY(0)", transformOrigin: T },
                  to: { transform: "scaleY(1)", transformOrigin: T },
                  begin: o,
                  easing: s,
                  isActive: a,
                  duration: c,
                  key: "line-"
                    .concat(e.x1, "-")
                    .concat(e.x2, "-")
                    .concat(e.y1, "-")
                    .concat(e.y2),
                  style: { transformOrigin: T },
                },
                n.createElement("line", G({}, e, { style: t }))
              );
            })
          );
        });
        return n.createElement(u.W, { className: "recharts-errorBars" }, x);
      }
      var V = (0, n.createContext)(void 0);
      function K(e) {
        var { direction: t, children: r } = e;
        return n.createElement(V.Provider, { value: t }, r);
      }
      var J = {
        stroke: "black",
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        isAnimationActive: !0,
        animationBegin: 0,
        animationDuration: 400,
        animationEasing: "ease-in-out",
      };
      function F(e) {
        var t,
          r,
          i =
            ((t = e.direction),
            (r = (0, n.useContext)(V)),
            null != t ? t : null != r ? r : "x"),
          {
            width: a,
            isAnimationActive: o,
            animationBegin: l,
            animationDuration: c,
            animationEasing: s,
          } = (0, B.e)(e, J);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(M, { dataKey: e.dataKey, direction: i }),
          n.createElement(
            _,
            G({}, e, {
              direction: i,
              width: a,
              isAnimationActive: o,
              animationBegin: l,
              animationDuration: c,
              animationEasing: s,
            })
          )
        );
      }
      class W extends n.Component {
        render() {
          return n.createElement(F, this.props);
        }
      }
      z(W, "defaultProps", J), z(W, "displayName", "ErrorBar");
      var U = r(41643),
        H = r(81971),
        $ = r(20215);
      function Z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(r), !0).forEach(function (t) {
                var n, i, a;
                (n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Z(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Y = (e) => {
        var t,
          {
            point: r,
            childIndex: i,
            mainColor: a,
            activeDot: c,
            dataKey: f,
          } = e;
        if (!1 === c || null == r.x || null == r.y) return null;
        var d = q(
          q(
            {
              index: i,
              dataKey: f,
              cx: r.x,
              cy: r.y,
              r: 4,
              fill: null != a ? a : "none",
              strokeWidth: 2,
              stroke: "#fff",
              payload: r.payload,
              value: r.value,
            },
            (0, l.J9)(c, !1)
          ),
          (0, o._U)(c)
        );
        return (
          (t = (0, n.isValidElement)(c)
            ? (0, n.cloneElement)(c, d)
            : "function" == typeof c
            ? c(d)
            : n.createElement(s, d)),
          n.createElement(u.W, { className: "recharts-active-dot" }, t)
        );
      };
      function X(e) {
        var { points: t, mainColor: r, activeDot: n, itemDataKey: i } = e,
          a = (0, H.G)($.A2),
          o = (0, T.EI)();
        if (null == t || null == o) return null;
        var l = t.find((e) => o.includes(e.payload));
        return (0, v.uy)(l)
          ? null
          : Y({
              point: l,
              childIndex: Number(a),
              mainColor: r,
              dataKey: i,
              activeDot: n,
            });
      }
      var Q = r(56091),
        ee = r(14299);
      function et(e, t) {
        var r,
          n,
          i = (0, H.G)((t) => (0, ee.Rl)(t, e)),
          a = (0, H.G)((e) => (0, ee.sf)(e, t)),
          o =
            null != (r = null == i ? void 0 : i.allowDataOverflow)
              ? r
              : ee.PU.allowDataOverflow,
          l =
            null != (n = null == a ? void 0 : a.allowDataOverflow)
              ? n
              : ee.cd.allowDataOverflow;
        return { needClip: o || l, needClipX: o, needClipY: l };
      }
      function er(e) {
        var { xAxisId: t, yAxisId: r, clipPathId: i } = e,
          a = (0, T.oM)(),
          { needClipX: o, needClipY: l, needClip: c } = et(t, r);
        if (!c) return null;
        var { x: s, y: u, width: f, height: d } = a;
        return n.createElement(
          "clipPath",
          { id: "clipPath-".concat(i) },
          n.createElement("rect", {
            x: o ? s : s - f / 2,
            y: l ? u : u - d / 2,
            width: o ? f : 2 * f,
            height: l ? d : 2 * d,
          })
        );
      }
      var en = r(97238),
        ei = r(68924),
        ea = r(60356),
        eo = (e, t, r, n) => (0, ee.Gx)(e, "xAxis", t, n),
        el = (e, t, r, n) => (0, ee.CR)(e, "xAxis", t, n),
        ec = (e, t, r, n) => (0, ee.Gx)(e, "yAxis", r, n),
        es = (e, t, r, n) => (0, ee.CR)(e, "yAxis", r, n),
        eu = (0, ei.Mz)([en.fz, eo, ec, el, es], (e, t, r, n, i) =>
          (0, y._L)(e, "xAxis") ? (0, y.Hj)(t, n, !1) : (0, y.Hj)(r, i, !1)
        ),
        ef = (0, ei.Mz)([ee.ld, (e, t, r, n, i) => i], (e, t) => {
          if (
            e.some(
              (e) =>
                "line" === e.type &&
                t.dataKey === e.dataKey &&
                t.data === e.data
            )
          )
            return t;
        }),
        ed = (0, ei.Mz)(
          [en.fz, eo, ec, el, es, ef, eu, ea.HS],
          (e, t, r, n, i, a, o, l) => {
            var c,
              { chartData: s, dataStartIndex: u, dataEndIndex: f } = l;
            if (
              null != a &&
              null != t &&
              null != r &&
              null != n &&
              null != i &&
              0 !== n.length &&
              0 !== i.length &&
              null != o
            ) {
              var { dataKey: d, data: p } = a;
              if (
                null !=
                (c =
                  null != p && p.length > 0
                    ? p
                    : null == s
                    ? void 0
                    : s.slice(u, f + 1))
              )
                return eT({
                  layout: e,
                  xAxis: t,
                  yAxis: r,
                  xAxisTicks: n,
                  yAxisTicks: i,
                  dataKey: d,
                  bandSize: o,
                  displayedData: c,
                });
            }
          }
        ),
        ep = r(79020),
        ey = r(39426),
        ev = ["type", "layout", "connectNulls", "needClip"],
        eh = [
          "activeDot",
          "animateNewValues",
          "animationBegin",
          "animationDuration",
          "animationEasing",
          "connectNulls",
          "dot",
          "hide",
          "isAnimationActive",
          "label",
          "legendType",
          "xAxisId",
          "yAxisId",
        ];
      function em(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              -1 === t.indexOf(r) &&
                {}.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]);
        }
        return i;
      }
      function eb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eb(Object(r), !0).forEach(function (t) {
                ex(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eb(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function ex(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function eO() {
        return (eO = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      var ew = (e) => {
        var { dataKey: t, name: r, stroke: n, legendType: i, hide: a } = e;
        return [
          {
            inactive: a,
            dataKey: t,
            type: i,
            color: n,
            value: (0, y.uM)(r, t),
            payload: e,
          },
        ];
      };
      function eP(e) {
        var {
          dataKey: t,
          data: r,
          stroke: n,
          strokeWidth: i,
          fill: a,
          name: o,
          hide: l,
          unit: c,
        } = e;
        return {
          dataDefinedOnItem: r,
          positions: void 0,
          settings: {
            stroke: n,
            strokeWidth: i,
            fill: a,
            dataKey: t,
            nameKey: void 0,
            name: (0, y.uM)(o, t),
            hide: l,
            type: e.tooltipType,
            color: e.stroke,
            unit: c,
          },
        };
      }
      var eE = (e, t) => "".concat(t, "px ").concat(e - t, "px"),
        ek = (e, t, r) => {
          var n = r.reduce((e, t) => e + t);
          if (!n) return eE(t, e);
          for (
            var i = Math.floor(e / n),
              a = e % n,
              o = t - e,
              l = [],
              c = 0,
              s = 0;
            c < r.length;
            s += r[c], ++c
          )
            if (s + r[c] > a) {
              l = [...r.slice(0, c), a - s];
              break;
            }
          var u = l.length % 2 == 0 ? [0, o] : [o];
          return [
            ...(function (e, t) {
              for (
                var r = e.length % 2 != 0 ? [...e, 0] : e, n = [], i = 0;
                i < t;
                ++i
              )
                n = [...n, ...r];
              return n;
            })(r, i),
            ...l,
            ...u,
          ]
            .map((e) => "".concat(e, "px"))
            .join(", ");
        };
      function ej(e) {
        var { clipPathId: t, points: r, props: a } = e,
          { dot: o, dataKey: c, needClip: f } = a;
        if (null == r || (!o && 1 !== r.length)) return null;
        var d = (0, l.y$)(o),
          p = (0, l.J9)(a, !1),
          y = (0, l.J9)(o, !0),
          v = r.map((e, t) => {
            var a,
              l = eg(
                eg(eg({ key: "dot-".concat(t), r: 3 }, p), y),
                {},
                {
                  index: t,
                  cx: e.x,
                  cy: e.y,
                  dataKey: c,
                  value: e.value,
                  payload: e.payload,
                  points: r,
                }
              );
            if (n.isValidElement(o)) a = n.cloneElement(o, l);
            else if ("function" == typeof o) a = o(l);
            else {
              var u = (0, i.$)(
                "recharts-line-dot",
                "boolean" != typeof o ? o.className : ""
              );
              a = n.createElement(s, eO({}, l, { className: u }));
            }
            return a;
          }),
          h = {
            clipPath: f
              ? "url(#clipPath-".concat(d ? "" : "dots-").concat(t, ")")
              : null,
          };
        return n.createElement(
          u.W,
          eO({ className: "recharts-line-dots", key: "dots" }, h),
          v
        );
      }
      function eA(e) {
        var {
            clipPathId: t,
            pathRef: r,
            points: i,
            strokeDasharray: o,
            props: c,
            showLabels: s,
          } = e,
          { type: u, layout: f, connectNulls: d, needClip: p } = c,
          y = em(c, ev),
          v = eg(
            eg({}, (0, l.J9)(y, !0)),
            {},
            {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: p ? "url(#clipPath-".concat(t, ")") : null,
              points: i,
              type: u,
              layout: f,
              connectNulls: d,
              strokeDasharray: null != o ? o : c.strokeDasharray,
            }
          );
        return n.createElement(
          n.Fragment,
          null,
          (null == i ? void 0 : i.length) > 1 &&
            n.createElement(a.I, eO({}, v, { pathRef: r })),
          n.createElement(ej, { points: i, clipPathId: t, props: c }),
          s && P.renderCallByParent(c, i)
        );
      }
      function eS(e) {
        var {
            clipPathId: t,
            props: r,
            pathRef: i,
            previousPointsRef: a,
            longestAnimatedLengthRef: o,
          } = e,
          {
            points: l,
            strokeDasharray: c,
            isAnimationActive: s,
            animationBegin: u,
            animationDuration: f,
            animationEasing: d,
            animateNewValues: p,
            width: y,
            height: h,
            onAnimationEnd: m,
            onAnimationStart: b,
          } = r,
          g = a.current,
          x = (0, ey.n)(r, "recharts-line-"),
          [O, w] = (0, n.useState)(!1),
          P = (0, n.useCallback)(() => {
            "function" == typeof m && m(), w(!1);
          }, [m]),
          E = (0, n.useCallback)(() => {
            "function" == typeof b && b(), w(!0);
          }, [b]),
          k = (function (e) {
            try {
              return (e && e.getTotalLength && e.getTotalLength()) || 0;
            } catch (e) {
              return 0;
            }
          })(i.current),
          j = o.current;
        return n.createElement(
          L.i,
          {
            begin: u,
            duration: f,
            isActive: s,
            easing: d,
            from: { t: 0 },
            to: { t: 1 },
            onAnimationEnd: P,
            onAnimationStart: E,
            key: x,
          },
          (e) => {
            var s,
              { t: u } = e,
              f = Math.min((0, v.Dj)(j, k + j)(u), k);
            if (
              ((s = c
                ? ek(
                    f,
                    k,
                    ""
                      .concat(c)
                      .split(/[,\s]+/gim)
                      .map((e) => parseFloat(e))
                  )
                : eE(k, f)),
              g)
            ) {
              var d = g.length / l.length,
                m =
                  1 === u
                    ? l
                    : l.map((e, t) => {
                        var r = Math.floor(t * d);
                        if (g[r]) {
                          var n = g[r],
                            i = (0, v.Dj)(n.x, e.x),
                            a = (0, v.Dj)(n.y, e.y);
                          return eg(eg({}, e), {}, { x: i(u), y: a(u) });
                        }
                        if (p) {
                          var o = (0, v.Dj)(2 * y, e.x),
                            l = (0, v.Dj)(h / 2, e.y);
                          return eg(eg({}, e), {}, { x: o(u), y: l(u) });
                        }
                        return eg(eg({}, e), {}, { x: e.x, y: e.y });
                      });
              return (
                (a.current = m),
                n.createElement(eA, {
                  props: r,
                  points: m,
                  clipPathId: t,
                  pathRef: i,
                  showLabels: !O,
                  strokeDasharray: s,
                })
              );
            }
            return (
              u > 0 && k > 0 && ((a.current = l), (o.current = f)),
              n.createElement(eA, {
                props: r,
                points: l,
                clipPathId: t,
                pathRef: i,
                showLabels: !O,
                strokeDasharray: s,
              })
            );
          }
        );
      }
      function eC(e) {
        var { clipPathId: t, props: r } = e,
          { points: i, isAnimationActive: a } = r,
          o = (0, n.useRef)(null),
          l = (0, n.useRef)(0),
          c = (0, n.useRef)(null),
          s = o.current;
        return a && i && i.length && s !== i
          ? n.createElement(eS, {
              props: r,
              clipPathId: t,
              previousPointsRef: o,
              longestAnimatedLengthRef: l,
              pathRef: c,
            })
          : n.createElement(eA, {
              props: r,
              points: i,
              clipPathId: t,
              pathRef: c,
              showLabels: !0,
            });
      }
      var eD = (e, t) => ({
        x: e.x,
        y: e.y,
        value: e.value,
        errorVal: (0, y.kr)(e.payload, t),
      });
      class eN extends n.Component {
        render() {
          var e,
            {
              hide: t,
              dot: r,
              points: a,
              className: o,
              xAxisId: c,
              yAxisId: s,
              top: f,
              left: d,
              width: p,
              height: y,
              id: h,
              needClip: m,
              layout: b,
            } = this.props;
          if (t) return null;
          var g = (0, i.$)("recharts-line", o),
            x = (0, v.uy)(h) ? this.id : h,
            { r: O = 3, strokeWidth: w = 2 } =
              null != (e = (0, l.J9)(r, !1)) ? e : { r: 3, strokeWidth: 2 },
            P = (0, l.y$)(r),
            E = 2 * O + w;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              u.W,
              { className: g },
              m &&
                n.createElement(
                  "defs",
                  null,
                  n.createElement(er, {
                    clipPathId: x,
                    xAxisId: c,
                    yAxisId: s,
                  }),
                  !P &&
                    n.createElement(
                      "clipPath",
                      { id: "clipPath-dots-".concat(x) },
                      n.createElement("rect", {
                        x: d - E / 2,
                        y: f - E / 2,
                        width: p + E,
                        height: y + E,
                      })
                    )
                ),
              n.createElement(eC, { props: this.props, clipPathId: x }),
              n.createElement(
                K,
                { direction: "horizontal" === b ? "y" : "x" },
                n.createElement(
                  D,
                  {
                    xAxisId: c,
                    yAxisId: s,
                    data: a,
                    dataPointFormatter: eD,
                    errorBarOffset: 0,
                  },
                  this.props.children
                )
              )
            ),
            n.createElement(X, {
              activeDot: this.props.activeDot,
              points: a,
              mainColor: this.props.stroke,
              itemDataKey: this.props.dataKey,
            })
          );
        }
        constructor() {
          super(...arguments), ex(this, "id", (0, v.NF)("recharts-line-"));
        }
      }
      var eI = {
        activeDot: !0,
        animateNewValues: !0,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease",
        connectNulls: !1,
        dot: !0,
        fill: "#fff",
        hide: !1,
        isAnimationActive: !U.m.isSsr,
        label: !1,
        legendType: "line",
        stroke: "#3182bd",
        strokeWidth: 1,
        xAxisId: 0,
        yAxisId: 0,
      };
      function eM(e) {
        var t = (0, B.e)(e, eI),
          {
            activeDot: r,
            animateNewValues: i,
            animationBegin: a,
            animationDuration: o,
            animationEasing: l,
            connectNulls: c,
            dot: s,
            hide: u,
            isAnimationActive: f,
            label: d,
            legendType: p,
            xAxisId: y,
            yAxisId: v,
          } = t,
          h = em(t, eh),
          { needClip: m } = et(y, v),
          { height: b, width: g, x: x, y: O } = (0, T.oM)(),
          w = (0, en.WX)(),
          P = (0, k.r)(),
          E = (0, n.useMemo)(
            () => ({ dataKey: e.dataKey, data: e.data }),
            [e.dataKey, e.data]
          ),
          j = (0, H.G)((e) => ed(e, y, v, P, E));
        return "horizontal" !== w && "vertical" !== w
          ? null
          : n.createElement(
              eN,
              eO({}, h, {
                connectNulls: c,
                dot: s,
                activeDot: r,
                animateNewValues: i,
                animationBegin: a,
                animationDuration: o,
                animationEasing: l,
                isAnimationActive: f,
                hide: u,
                label: d,
                legendType: p,
                xAxisId: y,
                yAxisId: v,
                points: j,
                layout: w,
                height: b,
                width: g,
                left: x,
                top: O,
                needClip: m,
              })
            );
      }
      function eT(e) {
        var {
          layout: t,
          xAxis: r,
          yAxis: n,
          xAxisTicks: i,
          yAxisTicks: a,
          dataKey: o,
          bandSize: l,
          displayedData: c,
        } = e;
        return c.map((e, c) => {
          var s = (0, y.kr)(e, o);
          return "horizontal" === t
            ? {
                x: (0, y.nb)({
                  axis: r,
                  ticks: i,
                  bandSize: l,
                  entry: e,
                  index: c,
                }),
                y: (0, v.uy)(s) ? null : n.scale(s),
                value: s,
                payload: e,
              }
            : {
                x: (0, v.uy)(s) ? null : r.scale(s),
                y: (0, y.nb)({
                  axis: n,
                  ticks: a,
                  bandSize: l,
                  entry: e,
                  index: c,
                }),
                value: s,
                payload: e,
              };
        });
      }
      class eB extends n.PureComponent {
        render() {
          return n.createElement(
            I,
            {
              type: "line",
              data: this.props.data,
              xAxisId: this.props.xAxisId,
              yAxisId: this.props.yAxisId,
              zAxisId: 0,
              dataKey: this.props.dataKey,
              stackId: void 0,
              hide: this.props.hide,
              barSize: void 0,
            },
            n.createElement(ep.A, { legendPayload: ew(this.props) }),
            n.createElement(Q.r, { fn: eP, args: this.props }),
            n.createElement(eM, this.props)
          );
        }
      }
      ex(eB, "displayName", "Line"), ex(eB, "defaultProps", eI);
    },
    78359: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(40220),
        i = r(14986),
        a = r(68179);
      t.last = function (e) {
        if (a.isArrayLike(e)) return n.last(i.toArray(e));
      };
    },
    79584: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => w });
      var n = r(12115),
        i = r(95672),
        a = r.n(i),
        o = r(52596);
      function l(e, t) {
        for (var r in e)
          if (
            {}.hasOwnProperty.call(e, r) &&
            (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
          )
            return !1;
        for (var n in t)
          if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
            return !1;
        return !0;
      }
      var c = r(2348),
        s = r(79095),
        u = r(60379),
        f = r(16377),
        d = r(43597),
        p = r(70788),
        y = r(19035),
        v = ["viewBox"],
        h = ["viewBox"];
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      function b(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                O(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function x(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              -1 === t.indexOf(r) &&
                {}.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]);
        }
        return i;
      }
      function O(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class w extends n.Component {
        shouldComponentUpdate(e, t) {
          var { viewBox: r } = e,
            n = x(e, v),
            i = this.props,
            { viewBox: a } = i,
            o = x(i, h);
          return !l(r, a) || !l(n, o) || !l(t, this.state);
        }
        getTickLineCoord(e) {
          var t,
            r,
            n,
            i,
            a,
            o,
            {
              x: l,
              y: c,
              width: s,
              height: u,
              orientation: d,
              tickSize: p,
              mirror: y,
              tickMargin: v,
            } = this.props,
            h = y ? -1 : 1,
            m = e.tickSize || p,
            b = (0, f.Et)(e.tickCoord) ? e.tickCoord : e.coordinate;
          switch (d) {
            case "top":
              (t = r = e.coordinate),
                (o = (n = (i = c + !y * u) - h * m) - h * v),
                (a = b);
              break;
            case "left":
              (n = i = e.coordinate),
                (a = (t = (r = l + !y * s) - h * m) - h * v),
                (o = b);
              break;
            case "right":
              (n = i = e.coordinate),
                (a = (t = (r = l + y * s) + h * m) + h * v),
                (o = b);
              break;
            default:
              (t = r = e.coordinate),
                (o = (n = (i = c + y * u) + h * m) + h * v),
                (a = b);
          }
          return { line: { x1: t, y1: n, x2: r, y2: i }, tick: { x: a, y: o } };
        }
        getTickTextAnchor() {
          var e,
            { orientation: t, mirror: r } = this.props;
          switch (t) {
            case "left":
              e = r ? "start" : "end";
              break;
            case "right":
              e = r ? "end" : "start";
              break;
            default:
              e = "middle";
          }
          return e;
        }
        getTickVerticalAnchor() {
          var { orientation: e, mirror: t } = this.props;
          switch (e) {
            case "left":
            case "right":
              return "middle";
            case "top":
              return t ? "start" : "end";
            default:
              return t ? "end" : "start";
          }
        }
        renderAxisLine() {
          var {
              x: e,
              y: t,
              width: r,
              height: i,
              orientation: l,
              mirror: c,
              axisLine: s,
            } = this.props,
            u = g(
              g(g({}, (0, p.J9)(this.props, !1)), (0, p.J9)(s, !1)),
              {},
              { fill: "none" }
            );
          if ("top" === l || "bottom" === l) {
            var f = +(("top" === l && !c) || ("bottom" === l && c));
            u = g(
              g({}, u),
              {},
              { x1: e, y1: t + f * i, x2: e + r, y2: t + f * i }
            );
          } else {
            var d = +(("left" === l && !c) || ("right" === l && c));
            u = g(
              g({}, u),
              {},
              { x1: e + d * r, y1: t, x2: e + d * r, y2: t + i }
            );
          }
          return n.createElement(
            "line",
            m({}, u, {
              className: (0, o.$)(
                "recharts-cartesian-axis-line",
                a()(s, "className")
              ),
            })
          );
        }
        static renderTickItem(e, t, r) {
          var i,
            a = (0, o.$)(t.className, "recharts-cartesian-axis-tick-value");
          if (n.isValidElement(e))
            i = n.cloneElement(e, g(g({}, t), {}, { className: a }));
          else if ("function" == typeof e)
            i = e(g(g({}, t), {}, { className: a }));
          else {
            var l = "recharts-cartesian-axis-tick-value";
            "boolean" != typeof e && (l = (0, o.$)(l, e.className)),
              (i = n.createElement(s.E, m({}, t, { className: l }), r));
          }
          return i;
        }
        renderTicks(e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            {
              tickLine: i,
              stroke: l,
              tick: s,
              tickFormatter: u,
              unit: f,
            } = this.props,
            v = (0, y.f)(g(g({}, this.props), {}, { ticks: r }), e, t),
            h = this.getTickTextAnchor(),
            b = this.getTickVerticalAnchor(),
            x = (0, p.J9)(this.props, !1),
            O = (0, p.J9)(s, !1),
            P = g(g({}, x), {}, { fill: "none" }, (0, p.J9)(i, !1)),
            E = v.map((e, t) => {
              var { line: r, tick: p } = this.getTickLineCoord(e),
                y = g(
                  g(
                    g(
                      g({ textAnchor: h, verticalAnchor: b }, x),
                      {},
                      { stroke: "none", fill: l },
                      O
                    ),
                    p
                  ),
                  {},
                  {
                    index: t,
                    payload: e,
                    visibleTicksCount: v.length,
                    tickFormatter: u,
                  }
                );
              return n.createElement(
                c.W,
                m(
                  {
                    className: "recharts-cartesian-axis-tick",
                    key: "tick-"
                      .concat(e.value, "-")
                      .concat(e.coordinate, "-")
                      .concat(e.tickCoord),
                  },
                  (0, d.XC)(this.props, e, t)
                ),
                i &&
                  n.createElement(
                    "line",
                    m({}, P, r, {
                      className: (0, o.$)(
                        "recharts-cartesian-axis-tick-line",
                        a()(i, "className")
                      ),
                    })
                  ),
                s &&
                  w.renderTickItem(
                    s,
                    y,
                    ""
                      .concat("function" == typeof u ? u(e.value, t) : e.value)
                      .concat(f || "")
                  )
              );
            });
          return E.length > 0
            ? n.createElement(
                "g",
                { className: "recharts-cartesian-axis-ticks" },
                E
              )
            : null;
        }
        render() {
          var {
            axisLine: e,
            width: t,
            height: r,
            className: i,
            hide: a,
          } = this.props;
          if (a) return null;
          var { ticks: l } = this.props;
          return (null != t && t <= 0) || (null != r && r <= 0)
            ? null
            : n.createElement(
                c.W,
                {
                  className: (0, o.$)("recharts-cartesian-axis", i),
                  ref: (e) => {
                    if (e) {
                      var t = e.getElementsByClassName(
                        "recharts-cartesian-axis-tick-value"
                      );
                      this.tickRefs.current = Array.from(t);
                      var r = t[0];
                      if (r) {
                        var n = window.getComputedStyle(r).fontSize,
                          i = window.getComputedStyle(r).letterSpacing;
                        (n !== this.state.fontSize ||
                          i !== this.state.letterSpacing) &&
                          this.setState({
                            fontSize: window.getComputedStyle(r).fontSize,
                            letterSpacing:
                              window.getComputedStyle(r).letterSpacing,
                          });
                      }
                    }
                  },
                },
                e && this.renderAxisLine(),
                this.renderTicks(
                  this.state.fontSize,
                  this.state.letterSpacing,
                  l
                ),
                u.J.renderCallByParent(this.props)
              );
        }
        constructor(e) {
          super(e),
            (this.tickRefs = n.createRef()),
            (this.tickRefs.current = []),
            (this.state = { fontSize: "", letterSpacing: "" });
        }
      }
      O(w, "displayName", "CartesianAxis"),
        O(w, "defaultProps", {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          viewBox: { x: 0, y: 0, width: 0, height: 0 },
          orientation: "bottom",
          ticks: [],
          stroke: "#666",
          tickLine: !0,
          axisLine: !0,
          tick: !0,
          mirror: !1,
          minTickGap: 5,
          tickSize: 6,
          tickMargin: 2,
          interval: "preserveEnd",
        });
    },
    80978: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("arrow-down-left", [
        ["path", { d: "M17 7 7 17", key: "15tmo1" }],
        ["path", { d: "M17 17H7V7", key: "1org7z" }],
      ]);
    },
    82661: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function i(e, t, r) {
        (this.fn = e), (this.context = t), (this.once = r || !1);
      }
      function a(e, t, n, a, o) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var l = new i(n, a || e, o),
          c = r ? r + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], l])
              : e._events[c].push(l)
            : ((e._events[c] = l), e._eventsCount++),
          e
        );
      }
      function o(e, t) {
        0 == --e._eventsCount ? (e._events = new n()) : delete e._events[t];
      }
      function l() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (l.prototype.eventNames = function () {
          var e,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (e = this._events))
            t.call(e, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(e))
            : i;
        }),
        (l.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, a = n.length, o = Array(a); i < a; i++)
            o[i] = n[i].fn;
          return o;
        }),
        (l.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (l.prototype.emit = function (e, t, n, i, a, o) {
          var l = r ? r + e : e;
          if (!this._events[l]) return !1;
          var c,
            s,
            u = this._events[l],
            f = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), f)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, n), !0;
              case 4:
                return u.fn.call(u.context, t, n, i), !0;
              case 5:
                return u.fn.call(u.context, t, n, i, a), !0;
              case 6:
                return u.fn.call(u.context, t, n, i, a, o), !0;
            }
            for (s = 1, c = Array(f - 1); s < f; s++) c[s - 1] = arguments[s];
            u.fn.apply(u.context, c);
          } else {
            var d,
              p = u.length;
            for (s = 0; s < p; s++)
              switch (
                (u[s].once && this.removeListener(e, u[s].fn, void 0, !0), f)
              ) {
                case 1:
                  u[s].fn.call(u[s].context);
                  break;
                case 2:
                  u[s].fn.call(u[s].context, t);
                  break;
                case 3:
                  u[s].fn.call(u[s].context, t, n);
                  break;
                case 4:
                  u[s].fn.call(u[s].context, t, n, i);
                  break;
                default:
                  if (!c)
                    for (d = 1, c = Array(f - 1); d < f; d++)
                      c[d - 1] = arguments[d];
                  u[s].fn.apply(u[s].context, c);
              }
          }
          return !0;
        }),
        (l.prototype.on = function (e, t, r) {
          return a(this, e, t, r, !1);
        }),
        (l.prototype.once = function (e, t, r) {
          return a(this, e, t, r, !0);
        }),
        (l.prototype.removeListener = function (e, t, n, i) {
          var a = r ? r + e : e;
          if (!this._events[a]) return this;
          if (!t) return o(this, a), this;
          var l = this._events[a];
          if (l.fn)
            l.fn !== t ||
              (i && !l.once) ||
              (n && l.context !== n) ||
              o(this, a);
          else {
            for (var c = 0, s = [], u = l.length; c < u; c++)
              (l[c].fn !== t ||
                (i && !l[c].once) ||
                (n && l[c].context !== n)) &&
                s.push(l[c]);
            s.length
              ? (this._events[a] = 1 === s.length ? s[0] : s)
              : o(this, a);
          }
          return this;
        }),
        (l.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && o(this, t))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.addListener = l.prototype.on),
        (l.prefixed = r),
        (l.EventEmitter = l),
        (e.exports = l);
    },
    92138: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    93550: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("coins", [
        ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
        ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
        ["path", { d: "M7 6h1v4", key: "1obek4" }],
        ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
      ]);
    },
    94754: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => I });
      var n = r(12115),
        i = r(675),
        a = r(16377),
        o = r(70788),
        l = r(39827),
        c = r(19035),
        s = r(79584),
        u = r(97238),
        f = r(14299),
        d = r(81971),
        p = r(71807),
        y = r(93389),
        v = ["x1", "y1", "x2", "y2", "key"],
        h = ["offset"],
        m = ["xAxisId", "yAxisId"],
        b = ["xAxisId", "yAxisId"];
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                var n, i, a;
                (n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function O() {
        return (O = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      function w(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              -1 === t.indexOf(r) &&
                {}.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]);
        }
        return i;
      }
      var P = (e) => {
        var { fill: t } = e;
        if (!t || "none" === t) return null;
        var { fillOpacity: r, x: i, y: a, width: o, height: l, ry: c } = e;
        return n.createElement("rect", {
          x: i,
          y: a,
          ry: c,
          width: o,
          height: l,
          stroke: "none",
          fill: t,
          fillOpacity: r,
          className: "recharts-cartesian-grid-bg",
        });
      };
      function E(e, t) {
        var r;
        if (n.isValidElement(e)) r = n.cloneElement(e, t);
        else if ("function" == typeof e) r = e(t);
        else {
          var { x1: i, y1: a, x2: l, y2: c, key: s } = t,
            u = w(t, v),
            f = (0, o.J9)(u, !1),
            { offset: d } = f,
            p = w(f, h);
          r = n.createElement(
            "line",
            O({}, p, { x1: i, y1: a, x2: l, y2: c, fill: "none", key: s })
          );
        }
        return r;
      }
      function k(e) {
        var { x: t, width: r, horizontal: i = !0, horizontalPoints: a } = e;
        if (!i || !a || !a.length) return null;
        var { xAxisId: o, yAxisId: l } = e,
          c = w(e, m),
          s = a.map((e, n) =>
            E(
              i,
              x(
                x({}, c),
                {},
                {
                  x1: t,
                  y1: e,
                  x2: t + r,
                  y2: e,
                  key: "line-".concat(n),
                  index: n,
                }
              )
            )
          );
        return n.createElement(
          "g",
          { className: "recharts-cartesian-grid-horizontal" },
          s
        );
      }
      function j(e) {
        var { y: t, height: r, vertical: i = !0, verticalPoints: a } = e;
        if (!i || !a || !a.length) return null;
        var { xAxisId: o, yAxisId: l } = e,
          c = w(e, b),
          s = a.map((e, n) =>
            E(
              i,
              x(
                x({}, c),
                {},
                {
                  x1: e,
                  y1: t,
                  x2: e,
                  y2: t + r,
                  key: "line-".concat(n),
                  index: n,
                }
              )
            )
          );
        return n.createElement(
          "g",
          { className: "recharts-cartesian-grid-vertical" },
          s
        );
      }
      function A(e) {
        var {
          horizontalFill: t,
          fillOpacity: r,
          x: i,
          y: a,
          width: o,
          height: l,
          horizontalPoints: c,
          horizontal: s = !0,
        } = e;
        if (!s || !t || !t.length) return null;
        var u = c.map((e) => Math.round(e + a - a)).sort((e, t) => e - t);
        a !== u[0] && u.unshift(0);
        var f = u.map((e, c) => {
          var s = u[c + 1] ? u[c + 1] - e : a + l - e;
          if (s <= 0) return null;
          var f = c % t.length;
          return n.createElement("rect", {
            key: "react-".concat(c),
            y: e,
            x: i,
            height: s,
            width: o,
            stroke: "none",
            fill: t[f],
            fillOpacity: r,
            className: "recharts-cartesian-grid-bg",
          });
        });
        return n.createElement(
          "g",
          { className: "recharts-cartesian-gridstripes-horizontal" },
          f
        );
      }
      function S(e) {
        var {
          vertical: t = !0,
          verticalFill: r,
          fillOpacity: i,
          x: a,
          y: o,
          width: l,
          height: c,
          verticalPoints: s,
        } = e;
        if (!t || !r || !r.length) return null;
        var u = s.map((e) => Math.round(e + a - a)).sort((e, t) => e - t);
        a !== u[0] && u.unshift(0);
        var f = u.map((e, t) => {
          var s = u[t + 1] ? u[t + 1] - e : a + l - e;
          if (s <= 0) return null;
          var f = t % r.length;
          return n.createElement("rect", {
            key: "react-".concat(t),
            x: e,
            y: o,
            width: s,
            height: c,
            stroke: "none",
            fill: r[f],
            fillOpacity: i,
            className: "recharts-cartesian-grid-bg",
          });
        });
        return n.createElement(
          "g",
          { className: "recharts-cartesian-gridstripes-vertical" },
          f
        );
      }
      var C = (e, t) => {
          var { xAxis: r, width: n, height: i, offset: a } = e;
          return (0, l.PW)(
            (0, c.f)(
              x(
                x(x({}, s.u.defaultProps), r),
                {},
                {
                  ticks: (0, l.Rh)(r, !0),
                  viewBox: { x: 0, y: 0, width: n, height: i },
                }
              )
            ),
            a.left,
            a.left + a.width,
            t
          );
        },
        D = (e, t) => {
          var { yAxis: r, width: n, height: i, offset: a } = e;
          return (0, l.PW)(
            (0, c.f)(
              x(
                x(x({}, s.u.defaultProps), r),
                {},
                {
                  ticks: (0, l.Rh)(r, !0),
                  viewBox: { x: 0, y: 0, width: n, height: i },
                }
              )
            ),
            a.top,
            a.top + a.height,
            t
          );
        },
        N = {
          horizontal: !0,
          vertical: !0,
          horizontalPoints: [],
          verticalPoints: [],
          stroke: "#ccc",
          fill: "none",
          verticalFill: [],
          horizontalFill: [],
          xAxisId: 0,
          yAxisId: 0,
        };
      function I(e) {
        var t = (0, u.yi)(),
          r = (0, u.rY)(),
          o = (0, u.W7)(),
          l = x(
            x({}, (0, y.e)(e, N)),
            {},
            {
              x: (0, a.Et)(e.x) ? e.x : o.left,
              y: (0, a.Et)(e.y) ? e.y : o.top,
              width: (0, a.Et)(e.width) ? e.width : o.width,
              height: (0, a.Et)(e.height) ? e.height : o.height,
            }
          ),
          {
            xAxisId: c,
            yAxisId: s,
            x: v,
            y: h,
            width: m,
            height: b,
            syncWithTicks: g,
            horizontalValues: w,
            verticalValues: E,
          } = l,
          I = (0, p.r)(),
          M = (0, d.G)((e) => (0, f.ZB)(e, "xAxis", c, I)),
          T = (0, d.G)((e) => (0, f.ZB)(e, "yAxis", s, I));
        if (
          !(0, a.Et)(m) ||
          m <= 0 ||
          !(0, a.Et)(b) ||
          b <= 0 ||
          !(0, a.Et)(v) ||
          v !== +v ||
          !(0, a.Et)(h) ||
          h !== +h
        )
          return null;
        var B = l.verticalCoordinatesGenerator || C,
          L = l.horizontalCoordinatesGenerator || D,
          { horizontalPoints: R, verticalPoints: z } = l;
        if ((!R || !R.length) && "function" == typeof L) {
          var G = w && w.length,
            _ = L(
              {
                yAxis: T ? x(x({}, T), {}, { ticks: G ? w : T.ticks }) : void 0,
                width: t,
                height: r,
                offset: o,
              },
              !!G || g
            );
          (0, i.R)(
            Array.isArray(_),
            "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
              typeof _,
              "]"
            )
          ),
            Array.isArray(_) && (R = _);
        }
        if ((!z || !z.length) && "function" == typeof B) {
          var V = E && E.length,
            K = B(
              {
                xAxis: M ? x(x({}, M), {}, { ticks: V ? E : M.ticks }) : void 0,
                width: t,
                height: r,
                offset: o,
              },
              !!V || g
            );
          (0, i.R)(
            Array.isArray(K),
            "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
              typeof K,
              "]"
            )
          ),
            Array.isArray(K) && (z = K);
        }
        return n.createElement(
          "g",
          { className: "recharts-cartesian-grid" },
          n.createElement(P, {
            fill: l.fill,
            fillOpacity: l.fillOpacity,
            x: l.x,
            y: l.y,
            width: l.width,
            height: l.height,
            ry: l.ry,
          }),
          n.createElement(A, O({}, l, { horizontalPoints: R })),
          n.createElement(S, O({}, l, { verticalPoints: z })),
          n.createElement(
            k,
            O({}, l, { offset: o, horizontalPoints: R, xAxis: M, yAxis: T })
          ),
          n.createElement(
            j,
            O({}, l, { offset: o, verticalPoints: z, xAxis: M, yAxis: T })
          )
        );
      }
      I.displayName = "CartesianGrid";
    },
    94870: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("arrow-up-right", [
        ["path", { d: "M7 7h10v10", key: "1tivn9" }],
        ["path", { d: "M7 17 17 7", key: "1vkiza" }],
      ]);
    },
    96025: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => g });
      var n = r(12115),
        i = r(52596),
        a = r(79584),
        o = r(81971),
        l = r(55306),
        c = r(14299),
        s = r(56124),
        u = r(71807),
        f = ["children"],
        d = ["dangerouslySetInnerHTML", "ticks"];
      function p(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function y() {
        return (y = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      function v(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              -1 === t.indexOf(r) &&
                {}.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]);
        }
        return i;
      }
      function h(e) {
        var t = (0, o.j)(),
          r = (0, n.useMemo)(() => {
            var { children: t } = e;
            return v(e, f);
          }, [e]),
          i = (0, o.G)((e) => (0, c.Rl)(e, r.id)),
          a = r === i;
        return ((0, n.useEffect)(
          () => (
            t((0, l.Vi)(r)),
            () => {
              t((0, l.MC)(r));
            }
          ),
          [r, t]
        ),
        a)
          ? e.children
          : null;
      }
      var m = (e) => {
          var { xAxisId: t, className: r } = e,
            l = (0, o.G)(s.c2),
            f = (0, u.r)(),
            p = "xAxis",
            h = (0, o.G)((e) => (0, c.iV)(e, p, t, f)),
            m = (0, o.G)((e) => (0, c.Zi)(e, p, t, f)),
            b = (0, o.G)((e) => (0, c.Lw)(e, t)),
            g = (0, o.G)((e) => (0, c.L$)(e, t));
          if (null == b || null == g) return null;
          var { dangerouslySetInnerHTML: x, ticks: O } = e,
            w = v(e, d);
          return n.createElement(
            a.u,
            y({}, w, {
              scale: h,
              x: g.x,
              y: g.y,
              width: b.width,
              height: b.height,
              className: (0, i.$)("recharts-".concat(p, " ").concat(p), r),
              viewBox: l,
              ticks: m,
            })
          );
        },
        b = (e) => {
          var t, r, i, a, o;
          return n.createElement(
            h,
            {
              interval: null != (t = e.interval) ? t : "preserveEnd",
              id: e.xAxisId,
              scale: e.scale,
              type: e.type,
              padding: e.padding,
              allowDataOverflow: e.allowDataOverflow,
              domain: e.domain,
              dataKey: e.dataKey,
              allowDuplicatedCategory: e.allowDuplicatedCategory,
              allowDecimals: e.allowDecimals,
              tickCount: e.tickCount,
              includeHidden: null != (r = e.includeHidden) && r,
              reversed: e.reversed,
              ticks: e.ticks,
              height: e.height,
              orientation: e.orientation,
              mirror: e.mirror,
              hide: e.hide,
              unit: e.unit,
              name: e.name,
              angle: null != (i = e.angle) ? i : 0,
              minTickGap: null != (a = e.minTickGap) ? a : 5,
              tick: null == (o = e.tick) || o,
              tickFormatter: e.tickFormatter,
            },
            n.createElement(m, e)
          );
        };
      class g extends n.Component {
        render() {
          return n.createElement(b, this.props);
        }
      }
      p(g, "displayName", "XAxis"),
        p(g, "defaultProps", {
          allowDataOverflow: c.PU.allowDataOverflow,
          allowDecimals: c.PU.allowDecimals,
          allowDuplicatedCategory: c.PU.allowDuplicatedCategory,
          height: c.PU.height,
          hide: !1,
          mirror: c.PU.mirror,
          orientation: c.PU.orientation,
          padding: c.PU.padding,
          reversed: c.PU.reversed,
          scale: c.PU.scale,
          tickCount: c.PU.tickCount,
          type: c.PU.type,
          xAxisId: 0,
        });
    },
  },
]);
