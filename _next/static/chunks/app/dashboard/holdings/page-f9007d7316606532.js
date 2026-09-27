(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5354],
  {
    1734: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => l });
      var s = r(45530),
        a = r(95838),
        n = r(23464),
        i = r(16453);
      let c = async () =>
          (
            await n.A.get((0, s.I)("api/get-transactions"), {
              headers: {
                Authorization: "Bearer ".concat(
                  (0, i.getCookie)("X-Access-Token")
                ),
              },
            })
          ).data.data,
        l = () => {
          let e = (0, i.getCookie)("X-Access-Token");
          return (0, a.useQuery)({
            queryKey: ["get-transactions"],
            queryFn: c,
            enabled: !!e,
          });
        };
    },
    15484: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a, b: () => s });
      var s = r(82661);
      let a = s;
    },
    29656: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => l });
      var s = r(45530),
        a = r(95838),
        n = r(23464),
        i = r(2145);
      let c = async (e) =>
          (
            await n.A.post((0, s.I)("api/create-user-profile-wallet"), {
              wallet_address: e,
            })
          ).data,
        l = () => {
          let { address: e, isConnected: t } = (0, i.F)();
          return (0, a.useQuery)({
            queryKey: ["get-profile", t, e],
            queryFn: () => c(e),
            enabled: t,
          });
        };
    },
    31839: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var s = r(45530),
        a = r(12115);
      let n = () => {
        let [e, t] = (0, a.useState)({
            round: 1,
            price: 0.0035,
            next_price: 0.0045,
            target: 5e5,
            total_target: 5e5,
            raised: 24612.282670058194,
            raised_till_yesterday: 16902.746853995846,
            percent_increase: 28.57,
          }),
          [r, n] = (0, a.useState)(!1),
          i = async () => {
            n(!0),
              fetch((0, s.I)("api/round"))
                .then((e) => e.json())
                .then((e) => {
                  let { data: r } = e;
                  t(r);
                })
                .catch((e) => {})
                .finally(() => {
                  n(!1);
                });
          };
        return (
          (0, a.useEffect)(() => {
            i();
          }, []),
          { round: e, isLoadingRound: r, fetchRound: i }
        );
      };
    },
    32919: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      let s = (0, r(19946).A)("lock", [
        [
          "rect",
          {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1",
          },
        ],
        ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
      ]);
    },
    35695: (e, t, r) => {
      "use strict";
      var s = r(18999);
      r.o(s, "usePathname") &&
        r.d(t, {
          usePathname: function () {
            return s.usePathname;
          },
        }),
        r.o(s, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return s.useRouter;
            },
          }),
        r.o(s, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return s.useSearchParams;
            },
          });
    },
    45530: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => s });
      let s = (e) => "".concat("https://api.tapzi.io", "/").concat(e);
    },
    51154: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      let s = (0, r(19946).A)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    54589: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var s = r(95155),
        a = r(59434);
      r(12115);
      let n = (e) => {
        let { title: t, children: r, className: n, footer: i } = e;
        return (0, s.jsxs)("div", {
          className: (0, a.cn)(
            "bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800",
            n
          ),
          children: [
            t &&
              (0, s.jsx)("div", {
                className:
                  "px-4 py-3 border-b border-gray-200 dark:border-gray-800",
                children: (0, s.jsx)("h3", {
                  className:
                    "text-lg font-medium text-gray-900 dark:text-white",
                  children: t,
                }),
              }),
            (0, s.jsx)("div", { className: "p-4", children: r }),
            i &&
              (0, s.jsx)("div", {
                className:
                  "px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800 rounded-b-lg",
                children: i,
              }),
          ],
        });
      };
    },
    59434: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => i, cn: () => n });
      var s = r(52596),
        a = r(39688);
      function n() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, a.QP)((0, s.$)(t));
      }
      let i = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "...",
          r = e.slice(0, 6);
        return "".concat(r).concat(t).concat(e.slice(-6));
      };
    },
    62278: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => u });
      var s = r(95155),
        a = r(29656),
        n = r(51154),
        i = r(35695),
        c = r(12115),
        l = r(16453),
        d = r(64368),
        o = r(2145);
      let u = (e) => (t) => {
        let r = (0, i.useRouter)(),
          { isLoading: u, isError: x, data: h } = (0, a.A)(),
          { isDisconnected: m } = (0, o.F)(),
          y = (0, d.k)((e) => e.setUser);
        return ((0, c.useEffect)(() => {
          (m || x) && r.replace("/");
        }, [m, r, x]),
        (0, c.useEffect)(() => {
          (null == h ? void 0 : h.access_token) &&
            (0, l.setCookie)("X-Access-Token", h.access_token),
            (null == h ? void 0 : h.user) && y(h.user);
        }, [h]),
        h)
          ? (0, s.jsx)(e, { ...t })
          : u
          ? (0, s.jsx)("div", {
              className: "h-screen w-full flex items-center justify-center",
              children: (0, s.jsx)(n.A, { className: "h-6 w-6 animate-spin" }),
            })
          : (x && r.replace("/"), null);
      };
    },
    64368: (e, t, r) => {
      "use strict";
      r.d(t, { k: () => s });
      let s = (0, r(65521).v)()((e) => ({
        user: null,
        setUser: (t) => e({ user: t }),
        rankProfile: null,
        setRankProfile: (t) => e({ rankProfile: t }),
      }));
    },
    65521: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => c });
      var s = r(12115),
        a = r(12421);
      let n = (e) => e,
        i = (e) => {
          let t = (0, a.y)(e),
            r = (e) =>
              (function (e, t = n) {
                let r = s.useSyncExternalStore(
                  e.subscribe,
                  () => t(e.getState()),
                  () => t(e.getInitialState())
                );
                return s.useDebugValue(r), r;
              })(t, e);
          return Object.assign(r, t), r;
        },
        c = (e) => (e ? i(e) : i);
    },
    69674: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => j });
      var s = r(95155),
        a = r(93550);
      let n = (0, r(19946).A)("lock-open", [
        [
          "rect",
          {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1",
          },
        ],
        ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }],
      ]);
      var i = r(32919),
        c = r(83540),
        l = r(90170),
        d = r(10627),
        o = r(54811),
        u = r(27086),
        x = r(64683),
        h = r(54589),
        m = r(6874),
        y = r.n(m),
        f = r(1734),
        g = r(31839);
      let p = [
          {
            name: "Presale",
            duration: "3-month vest",
            percentage: "25% at TGE",
            vesting: "75% linear vesting",
          },
          {
            name: "Team",
            duration: "12-month cliff",
            percentage: "0% at TGE",
            vesting: "100% after 12 months",
          },
          {
            name: "Liquidity",
            duration: "Locked",
            percentage: "100% unlocked at TGE",
            vesting: "1 year back",
          },
          {
            name: "Treasury",
            duration: "Locked 1 year",
            percentage: "0% at TGE",
            vesting: "locked for ecosystem growth",
          },
        ],
        v = () => {
          let e = [
              { name: "Available", value: 0, color: "#4F46E5" },
              { name: "Locked", value: 100, color: "#9333EA" },
            ],
            { round: t } = (0, g.A)(),
            { data: r } = (0, f.A)(),
            m =
              (null == r
                ? void 0
                : r.reduce(
                    (e, t) => (
                      ["AL", "PA"].includes(t.status) &&
                        (e += t.purchase_usd_amount),
                      e
                    ),
                    0
                  )) || 0,
            v =
              (null == r
                ? void 0
                : r.reduce(
                    (e, t) => (
                      ["AL", "PA"].includes(t.status) &&
                        (e += +t.token_quantity),
                      e
                    ),
                    0
                  )) || 0;
          return (0, s.jsxs)("div", {
            className: "space-y-6",
            children: [
              (0, s.jsx)("h1", {
                className: "text-2xl font-bold text-gray-900 dark:text-white",
                children: "Token Holdings",
              }),
              (0, s.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [
                  (0, s.jsx)(h.A, {
                    className: "md:col-span-2",
                    children: (0, s.jsxs)("div", {
                      className: "flex flex-col h-full",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3",
                                  children: (0, s.jsx)(a.A, {
                                    size: 20,
                                    className:
                                      "text-indigo-600 dark:text-indigo-400",
                                  }),
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("h3", {
                                      className:
                                        "font-medium text-gray-900 dark:text-white",
                                      children: "Total $TAPZI Holdings",
                                    }),
                                    (0, s.jsxs)("p", {
                                      className:
                                        "text-sm text-gray-500 dark:text-gray-400",
                                      children: [
                                        "Current value at $",
                                        t.price,
                                        " per token",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "text-right",
                              children: [
                                (0, s.jsxs)("p", {
                                  className:
                                    "text-2xl font-bold text-gray-900 dark:text-white",
                                  children: [v, " $TAPZI"],
                                }),
                                (0, s.jsxs)("p", {
                                  className:
                                    "text-sm text-gray-500 dark:text-gray-400",
                                  children: ["≈ $", m.toFixed(2), " USD"],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "bg-gray-50 dark:bg-gray-800 rounded-lg p-4",
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "flex items-center mb-2",
                                  children: [
                                    (0, s.jsx)(n, {
                                      size: 16,
                                      className: "text-green-500 mr-2",
                                    }),
                                    (0, s.jsx)("h4", {
                                      className:
                                        "font-medium text-gray-900 dark:text-white",
                                      children: "Available Tokens",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "text-2xl font-semibold text-gray-900 dark:text-white",
                                  children: "0 $TAPZI",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "text-sm text-gray-500 dark:text-gray-400",
                                  children: "≈ $0.00 USDT",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "bg-gray-50 dark:bg-gray-800 rounded-lg p-4",
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "flex items-center mb-2",
                                  children: [
                                    (0, s.jsx)(i.A, {
                                      size: 16,
                                      className: "text-purple-500 mr-2",
                                    }),
                                    (0, s.jsx)("h4", {
                                      className:
                                        "font-medium text-gray-900 dark:text-white",
                                      children: "Locked Tokens",
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("p", {
                                  className:
                                    "text-2xl font-semibold text-gray-900 dark:text-white",
                                  children: [v, " $TAPZI"],
                                }),
                                (0, s.jsxs)("p", {
                                  className:
                                    "text-sm text-gray-500 dark:text-gray-400",
                                  children: ["≈ $", m.toFixed(2), " USDT"],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-between",
                          children: (0, s.jsx)(y(), {
                            href: "/#tapzi-purchase",
                            className:
                              "inline-flex cursor-pointer items-center px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors",
                            children: "Buy More Tokens",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(h.A, {
                    children: (0, s.jsxs)("div", {
                      className: "flex flex-col h-full",
                      children: [
                        (0, s.jsx)("h3", {
                          className:
                            "font-medium text-gray-900 dark:text-white mb-4",
                          children: "Token Distribution",
                        }),
                        (0, s.jsx)("div", {
                          className: "flex-1 flex items-center justify-center",
                          children: (0, s.jsx)("div", {
                            className: "h-48 w-full",
                            children: (0, s.jsx)(c.u, {
                              width: "100%",
                              height: "100%",
                              children: (0, s.jsxs)(l.r, {
                                children: [
                                  (0, s.jsx)(d.F, {
                                    data: e,
                                    cx: "50%",
                                    cy: "50%",
                                    innerRadius: 60,
                                    outerRadius: 80,
                                    paddingAngle: 5,
                                    dataKey: "value",
                                    label: (e) => {
                                      let { value: t } = e;
                                      return "".concat(t, "%");
                                    },
                                    labelLine: !1,
                                    children: e.map((e, t) =>
                                      (0, s.jsx)(
                                        o.f,
                                        { fill: e.color },
                                        "cell-".concat(t)
                                      )
                                    ),
                                  }),
                                  (0, s.jsx)(u.m, {
                                    formatter: (e, t) => [
                                      ""
                                        .concat(t, " - ")
                                        .concat(e.toLocaleString(), "%"),
                                    ],
                                    contentStyle: {
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.9)",
                                      borderRadius: "0.375rem",
                                      border: "1px solid #E5E7EB",
                                      boxShadow:
                                        "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                                    },
                                  }),
                                  (0, s.jsx)(x.s, {}),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsx)(h.A, {
                title: "Vesting Schedule",
                children: (0, s.jsx)("div", {
                  className: "space-y-4",
                  children: (0, s.jsx)("div", {
                    className: "overflow-x-auto",
                    children: (0, s.jsxs)("table", {
                      className:
                        "min-w-full divide-y divide-gray-200 dark:divide-gray-800",
                      children: [
                        (0, s.jsx)("thead", {
                          children: (0, s.jsxs)("tr", {
                            children: [
                              (0, s.jsx)("th", {
                                className:
                                  "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                children: "Name",
                              }),
                              (0, s.jsx)("th", {
                                className:
                                  "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                children: "Duration",
                              }),
                              (0, s.jsx)("th", {
                                className:
                                  "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                children: "Percentage",
                              }),
                              (0, s.jsx)("th", {
                                className:
                                  "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                children: "Vesting",
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("tbody", {
                          className:
                            "divide-y divide-gray-200 dark:divide-gray-800",
                          children: p.map((e, t) =>
                            (0, s.jsxs)(
                              "tr",
                              {
                                children: [
                                  (0, s.jsx)("td", {
                                    className:
                                      "px-4 py-3 text-sm text-gray-900 dark:text-white",
                                    children: e.name,
                                  }),
                                  (0, s.jsx)("td", {
                                    className:
                                      "px-4 py-3 text-sm text-gray-900 dark:text-white",
                                    children: e.duration,
                                  }),
                                  (0, s.jsx)("td", {
                                    className:
                                      "px-4 py-3 text-sm text-gray-900 dark:text-white",
                                    children: e.percentage,
                                  }),
                                  (0, s.jsx)("td", {
                                    className:
                                      "px-4 py-3 text-sm text-gray-900 dark:text-white",
                                    children: e.vesting,
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        };
      var k = r(62278);
      r(12115);
      let j = (0, k.r)(() => (0, s.jsx)(v, {}));
    },
    82661: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        r = "~";
      function s() {}
      function a(e, t, r) {
        (this.fn = e), (this.context = t), (this.once = r || !1);
      }
      function n(e, t, s, n, i) {
        if ("function" != typeof s)
          throw TypeError("The listener must be a function");
        var c = new a(s, n || e, i),
          l = r ? r + t : t;
        return (
          e._events[l]
            ? e._events[l].fn
              ? (e._events[l] = [e._events[l], c])
              : e._events[l].push(c)
            : ((e._events[l] = c), e._eventsCount++),
          e
        );
      }
      function i(e, t) {
        0 == --e._eventsCount ? (e._events = new s()) : delete e._events[t];
      }
      function c() {
        (this._events = new s()), (this._eventsCount = 0);
      }
      Object.create &&
        ((s.prototype = Object.create(null)), new s().__proto__ || (r = !1)),
        (c.prototype.eventNames = function () {
          var e,
            s,
            a = [];
          if (0 === this._eventsCount) return a;
          for (s in (e = this._events))
            t.call(e, s) && a.push(r ? s.slice(1) : s);
          return Object.getOwnPropertySymbols
            ? a.concat(Object.getOwnPropertySymbols(e))
            : a;
        }),
        (c.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            s = this._events[t];
          if (!s) return [];
          if (s.fn) return [s.fn];
          for (var a = 0, n = s.length, i = Array(n); a < n; a++)
            i[a] = s[a].fn;
          return i;
        }),
        (c.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            s = this._events[t];
          return s ? (s.fn ? 1 : s.length) : 0;
        }),
        (c.prototype.emit = function (e, t, s, a, n, i) {
          var c = r ? r + e : e;
          if (!this._events[c]) return !1;
          var l,
            d,
            o = this._events[c],
            u = arguments.length;
          if (o.fn) {
            switch ((o.once && this.removeListener(e, o.fn, void 0, !0), u)) {
              case 1:
                return o.fn.call(o.context), !0;
              case 2:
                return o.fn.call(o.context, t), !0;
              case 3:
                return o.fn.call(o.context, t, s), !0;
              case 4:
                return o.fn.call(o.context, t, s, a), !0;
              case 5:
                return o.fn.call(o.context, t, s, a, n), !0;
              case 6:
                return o.fn.call(o.context, t, s, a, n, i), !0;
            }
            for (d = 1, l = Array(u - 1); d < u; d++) l[d - 1] = arguments[d];
            o.fn.apply(o.context, l);
          } else {
            var x,
              h = o.length;
            for (d = 0; d < h; d++)
              switch (
                (o[d].once && this.removeListener(e, o[d].fn, void 0, !0), u)
              ) {
                case 1:
                  o[d].fn.call(o[d].context);
                  break;
                case 2:
                  o[d].fn.call(o[d].context, t);
                  break;
                case 3:
                  o[d].fn.call(o[d].context, t, s);
                  break;
                case 4:
                  o[d].fn.call(o[d].context, t, s, a);
                  break;
                default:
                  if (!l)
                    for (x = 1, l = Array(u - 1); x < u; x++)
                      l[x - 1] = arguments[x];
                  o[d].fn.apply(o[d].context, l);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (e, t, r) {
          return n(this, e, t, r, !1);
        }),
        (c.prototype.once = function (e, t, r) {
          return n(this, e, t, r, !0);
        }),
        (c.prototype.removeListener = function (e, t, s, a) {
          var n = r ? r + e : e;
          if (!this._events[n]) return this;
          if (!t) return i(this, n), this;
          var c = this._events[n];
          if (c.fn)
            c.fn !== t ||
              (a && !c.once) ||
              (s && c.context !== s) ||
              i(this, n);
          else {
            for (var l = 0, d = [], o = c.length; l < o; l++)
              (c[l].fn !== t ||
                (a && !c[l].once) ||
                (s && c[l].context !== s)) &&
                d.push(c[l]);
            d.length
              ? (this._events[n] = 1 === d.length ? d[0] : d)
              : i(this, n);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && i(this, t))
              : ((this._events = new s()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = r),
        (c.EventEmitter = c),
        (e.exports = c);
    },
    84836: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 69674));
    },
    93550: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      let s = (0, r(19946).A)("coins", [
        ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
        ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
        ["path", { d: "M7 6h1v4", key: "1obek4" }],
        ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [2145, 7598, 4134, 6874, 4709, 5702, 3880, 340, 8441, 1684, 7358],
      () => t(84836)
    ),
      (_N_E = e.O());
  },
]);
