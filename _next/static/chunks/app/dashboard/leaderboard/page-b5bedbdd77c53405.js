(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5601],
  {
    18186: (e, s, a) => {
      "use strict";
      a.d(s, { A: () => r });
      let r = (0, a(19946).A)("trophy", [
        [
          "path",
          {
            d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
            key: "1n3hpd",
          },
        ],
        [
          "path",
          {
            d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
            key: "rfe1zi",
          },
        ],
        ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
        ["path", { d: "M4 22h16", key: "57wxv0" }],
        [
          "path",
          {
            d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
            key: "1mhfuq",
          },
        ],
        ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }],
      ]);
    },
    29656: (e, s, a) => {
      "use strict";
      a.d(s, { A: () => i });
      var r = a(45530),
        t = a(95838),
        l = a(23464),
        d = a(2145);
      let c = async (e) =>
          (
            await l.A.post((0, r.I)("api/create-user-profile-wallet"), {
              wallet_address: e,
            })
          ).data,
        i = () => {
          let { address: e, isConnected: s } = (0, d.F)();
          return (0, t.useQuery)({
            queryKey: ["get-profile", s, e],
            queryFn: () => c(e),
            enabled: s,
          });
        };
    },
    35695: (e, s, a) => {
      "use strict";
      var r = a(18999);
      a.o(r, "usePathname") &&
        a.d(s, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        a.o(r, "useRouter") &&
          a.d(s, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        a.o(r, "useSearchParams") &&
          a.d(s, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          });
    },
    45530: (e, s, a) => {
      "use strict";
      a.d(s, { I: () => r });
      let r = (e) => "".concat("https://api.tapzi.io", "/").concat(e);
    },
    51154: (e, s, a) => {
      "use strict";
      a.d(s, { A: () => r });
      let r = (0, a(19946).A)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    54589: (e, s, a) => {
      "use strict";
      a.d(s, { A: () => l });
      var r = a(95155),
        t = a(59434);
      a(12115);
      let l = (e) => {
        let { title: s, children: a, className: l, footer: d } = e;
        return (0, r.jsxs)("div", {
          className: (0, t.cn)(
            "bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800",
            l
          ),
          children: [
            s &&
              (0, r.jsx)("div", {
                className:
                  "px-4 py-3 border-b border-gray-200 dark:border-gray-800",
                children: (0, r.jsx)("h3", {
                  className:
                    "text-lg font-medium text-gray-900 dark:text-white",
                  children: s,
                }),
              }),
            (0, r.jsx)("div", { className: "p-4", children: a }),
            d &&
              (0, r.jsx)("div", {
                className:
                  "px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800 rounded-b-lg",
                children: d,
              }),
          ],
        });
      };
    },
    57305: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => b });
      var r = a(95155),
        t = a(12115),
        l = a(18186),
        d = a(54589),
        c = a(59434);
      let i = (e) => {
        let {
            rank: s,
            name: a,
            value: t,
            walletAddress: d,
            isCurrentUser: i = !1,
            amount: n,
          } = e,
          x = () => {
            switch (s) {
              case 1:
                return "text-yellow-500";
              case 2:
                return "text-gray-400";
              case 3:
                return "text-amber-600";
              default:
                return "text-gray-700 dark:text-gray-300";
            }
          };
        return (0, r.jsxs)("div", {
          className: (0, c.cn)(
            "flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-800 last:border-0",
            i && "bg-indigo-50 dark:bg-indigo-900/20"
          ),
          children: [
            (0, r.jsxs)("div", {
              className: "flex items-center space-x-3",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center",
                  children:
                    (s <= 3
                      ? (0, r.jsx)(l.A, { size: 16, className: x() })
                      : null) ||
                    (0, r.jsx)("span", {
                      className: (0, c.cn)("font-semibold", x()),
                      children: s,
                    }),
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("p", {
                      className: "font-medium text-gray-900 dark:text-white",
                      children: a,
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "text-sm text-gray-400 font-medium dark:text-gray-400 truncate max-w-[150px]",
                      children: d,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "font-semibold text-gray-900 dark:text-white",
              children: [
                (0, r.jsxs)("p", {
                  className: "text-right",
                  children: [t, " $TAPZI"],
                }),
                (0, r.jsxs)("p", {
                  className: "text-sm font-medium text-right text-gray-400",
                  children: [n.toFixed(2), " USDT"],
                }),
              ],
            }),
          ],
        });
      };
      var n = a(45530),
        x = a(95838),
        m = a(23464),
        o = a(16453);
      let u = async (e) =>
          (
            await m.A.get((0, n.I)("api/get-leaderboard"), {
              headers: {
                Authorization: "Bearer ".concat(
                  (0, o.getCookie)("X-Access-Token")
                ),
              },
              params: {
                page: (null == e ? void 0 : e.page) || 1,
                limit: (null == e ? void 0 : e.limit) || 10,
              },
            })
          ).data,
        h = (e) => {
          let s = (0, o.getCookie)("X-Access-Token");
          return (0, x.useQuery)({
            queryKey: ["get-leaderboard", JSON.stringify(e)],
            queryFn: () => u(e),
            enabled: !!s,
          });
        };
      var y = a(68856);
      let g = () => {
          let [e, s] = (0, t.useState)(1),
            { data: a, isLoading: c } = h({ limit: 10, page: e }),
            n = (null == a ? void 0 : a.data) || [];
          return (0, r.jsxs)("div", {
            className: "space-y-6",
            children: [
              (0, r.jsx)("h1", {
                className: "text-2xl font-bold text-gray-900 dark:text-white",
                children: "Leaderboard & Top Investors",
              }),
              (0, r.jsx)(d.A, {
                children: (0, r.jsx)("div", {
                  className: "space-y-4",
                  children: (0, r.jsxs)("div", {
                    className: "mt-4",
                    children: [
                      (0, r.jsx)("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: (0, r.jsxs)("h3", {
                          className:
                            "font-medium text-gray-900 dark:text-white flex items-center",
                          children: [
                            (0, r.jsx)(l.A, {
                              size: 18,
                              className: "text-yellow-500 mr-2",
                            }),
                            "Top Token Holders",
                          ],
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "space-y-1",
                        children: [
                          c &&
                            Array.from({ length: 10 }).map((e, s) =>
                              (0, r.jsx)(
                                y.E,
                                { className: "h-16" },
                                "transaction-".concat(s)
                              )
                            ),
                          n.map((s, a) =>
                            (0, r.jsx)(
                              i,
                              {
                                rank: (e - 1) * 10 + a + 1,
                                name: "Rank ".concat((e - 1) * 10 + a + 1),
                                walletAddress: s.wallet_address,
                                value: s.total_token_quantity,
                                isCurrentUser: !1,
                                amount: +s.total_purchase_usd,
                              },
                              "investor-".concat((e - 1) * 10 + a + 1)
                            )
                          ),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "text-sm text-gray-500 dark:text-gray-400",
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex space-x-2",
                            children: [
                              (0, r.jsx)("button", {
                                onClick: () => s(e - 1),
                                disabled:
                                  c ||
                                  1 === e ||
                                  !(null == a ? void 0 : a.has_previous_page),
                                className:
                                  "px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer",
                                children: "Previous",
                              }),
                              (0, r.jsx)("button", {
                                onClick: () => s(e + 1),
                                disabled:
                                  c || !(null == a ? void 0 : a.has_next_page),
                                className:
                                  "px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer",
                                children: "Next",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)(d.A, {
                title: "Exclusive Rewards for Top Investors",
                children: (0, r.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    (0, r.jsx)("p", {
                      className: "text-sm text-gray-500 dark:text-gray-400",
                      children:
                        "Top investors and referrers will receive exclusive rewards at the end of the presale period.",
                    }),
                    (0, r.jsxs)("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-4 pt-2",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "border border-yellow-200 dark:border-yellow-900/30 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg p-4",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center mb-3",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3",
                                  children: (0, r.jsx)(l.A, {
                                    size: 16,
                                    className:
                                      "text-yellow-600 dark:text-yellow-400",
                                  }),
                                }),
                                (0, r.jsx)("h4", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: "1st Place",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("ul", {
                              className: "space-y-2 text-sm",
                              children: [
                                (0, r.jsxs)("li", {
                                  className: "flex items-start",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-yellow-600 dark:text-yellow-400 mr-2",
                                      children: "•",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-700 dark:text-gray-300",
                                      children: "10% bonus tokens",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("li", {
                                  className: "flex items-start",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-yellow-600 dark:text-yellow-400 mr-2",
                                      children: "•",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-700 dark:text-gray-300",
                                      children: "Early access to staking",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("li", {
                                  className: "flex items-start",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-yellow-600 dark:text-yellow-400 mr-2",
                                      children: "•",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-700 dark:text-gray-300",
                                      children: "Exclusive reward",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center mb-3",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3",
                                  children: (0, r.jsx)(l.A, {
                                    size: 16,
                                    className:
                                      "text-gray-600 dark:text-gray-400",
                                  }),
                                }),
                                (0, r.jsx)("h4", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: "2nd Place",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("ul", {
                              className: "space-y-2 text-sm",
                              children: [
                                (0, r.jsxs)("li", {
                                  className: "flex items-start",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-600 dark:text-gray-400 mr-2",
                                      children: "•",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-700 dark:text-gray-300",
                                      children: "7% bonus tokens",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("li", {
                                  className: "flex items-start",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-600 dark:text-gray-400 mr-2",
                                      children: "•",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-700 dark:text-gray-300",
                                      children: "Early access to staking",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("li", {
                                  className: "flex items-start",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-600 dark:text-gray-400 mr-2",
                                      children: "•",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-700 dark:text-gray-300",
                                      children: "Limited edition rewards",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "border border-amber-200 dark:border-amber-900/30 bg-amber-50 dark:bg-amber-900/10 rounded-lg p-4",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center mb-3",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3",
                                  children: (0, r.jsx)(l.A, {
                                    size: 16,
                                    className:
                                      "text-amber-600 dark:text-amber-400",
                                  }),
                                }),
                                (0, r.jsx)("h4", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: "3rd Place",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("ul", {
                              className: "space-y-2 text-sm",
                              children: [
                                (0, r.jsxs)("li", {
                                  className: "flex items-start",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-amber-600 dark:text-amber-400 mr-2",
                                      children: "•",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-700 dark:text-gray-300",
                                      children: "5% bonus tokens",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("li", {
                                  className: "flex items-start",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-amber-600 dark:text-amber-400 mr-2",
                                      children: "•",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-700 dark:text-gray-300",
                                      children: "Early access to staking",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("li", {
                                  className: "flex items-start",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-amber-600 dark:text-amber-400 mr-2",
                                      children: "•",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-700 dark:text-gray-300",
                                      children: "Community rewards",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "pt-4 border-t border-gray-200 dark:border-gray-800 mt-4",
                      children: [
                        (0, r.jsx)("h4", {
                          className:
                            "font-medium text-gray-900 dark:text-white mb-3",
                          children: "Top 10 Investors",
                        }),
                        (0, r.jsxs)("ul", {
                          className: "space-y-2 text-sm",
                          children: [
                            (0, r.jsxs)("li", {
                              className: "flex items-start",
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "text-indigo-600 dark:text-indigo-400 mr-2",
                                  children: "•",
                                }),
                                (0, r.jsx)("span", {
                                  className: "text-gray-700 dark:text-gray-300",
                                  children: "3% bonus tokens",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("li", {
                              className: "flex items-start",
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "text-indigo-600 dark:text-indigo-400 mr-2",
                                  children: "•",
                                }),
                                (0, r.jsx)("span", {
                                  className: "text-gray-700 dark:text-gray-300",
                                  children:
                                    "Priority access to future presales",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("li", {
                              className: "flex items-start",
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "text-indigo-600 dark:text-indigo-400 mr-2",
                                  children: "•",
                                }),
                                (0, r.jsx)("span", {
                                  className: "text-gray-700 dark:text-gray-300",
                                  children:
                                    "Exclusive community channel access",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        b = (0, a(62278).r)(() => (0, r.jsx)(g, {}));
    },
    59434: (e, s, a) => {
      "use strict";
      a.d(s, { O: () => d, cn: () => l });
      var r = a(52596),
        t = a(39688);
      function l() {
        for (var e = arguments.length, s = Array(e), a = 0; a < e; a++)
          s[a] = arguments[a];
        return (0, t.QP)((0, r.$)(s));
      }
      let d = function (e) {
        let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "...",
          a = e.slice(0, 6);
        return "".concat(a).concat(s).concat(e.slice(-6));
      };
    },
    62278: (e, s, a) => {
      "use strict";
      a.d(s, { r: () => m });
      var r = a(95155),
        t = a(29656),
        l = a(51154),
        d = a(35695),
        c = a(12115),
        i = a(16453),
        n = a(64368),
        x = a(2145);
      let m = (e) => (s) => {
        let a = (0, d.useRouter)(),
          { isLoading: m, isError: o, data: u } = (0, t.A)(),
          { isDisconnected: h } = (0, x.F)(),
          y = (0, n.k)((e) => e.setUser);
        return ((0, c.useEffect)(() => {
          (h || o) && a.replace("/");
        }, [h, a, o]),
        (0, c.useEffect)(() => {
          (null == u ? void 0 : u.access_token) &&
            (0, i.setCookie)("X-Access-Token", u.access_token),
            (null == u ? void 0 : u.user) && y(u.user);
        }, [u]),
        u)
          ? (0, r.jsx)(e, { ...s })
          : m
          ? (0, r.jsx)("div", {
              className: "h-screen w-full flex items-center justify-center",
              children: (0, r.jsx)(l.A, { className: "h-6 w-6 animate-spin" }),
            })
          : (o && a.replace("/"), null);
      };
    },
    64368: (e, s, a) => {
      "use strict";
      a.d(s, { k: () => r });
      let r = (0, a(65521).v)()((e) => ({
        user: null,
        setUser: (s) => e({ user: s }),
        rankProfile: null,
        setRankProfile: (s) => e({ rankProfile: s }),
      }));
    },
    65521: (e, s, a) => {
      "use strict";
      a.d(s, { v: () => c });
      var r = a(12115),
        t = a(12421);
      let l = (e) => e,
        d = (e) => {
          let s = (0, t.y)(e),
            a = (e) =>
              (function (e, s = l) {
                let a = r.useSyncExternalStore(
                  e.subscribe,
                  () => s(e.getState()),
                  () => s(e.getInitialState())
                );
                return r.useDebugValue(a), a;
              })(s, e);
          return Object.assign(a, s), a;
        },
        c = (e) => (e ? d(e) : d);
    },
    68117: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 57305));
    },
    68856: (e, s, a) => {
      "use strict";
      a.d(s, { E: () => l });
      var r = a(95155),
        t = a(59434);
      function l(e) {
        let { className: s, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "skeleton",
          className: (0, t.cn)("bg-accent animate-pulse rounded-md", s),
          ...a,
        });
      }
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [2145, 7598, 4134, 4709, 5702, 8441, 1684, 7358], () => s(68117)),
      (_N_E = e.O());
  },
]);
