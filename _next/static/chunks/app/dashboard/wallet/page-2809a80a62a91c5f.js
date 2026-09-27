(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3903],
  {
    1734: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      var r = t(45530),
        a = t(95838),
        i = t(23464),
        l = t(16453);
      let d = async () =>
          (
            await i.A.get((0, r.I)("api/get-transactions"), {
              headers: {
                Authorization: "Bearer ".concat(
                  (0, l.getCookie)("X-Access-Token")
                ),
              },
            })
          ).data.data,
        n = () => {
          let e = (0, l.getCookie)("X-Access-Token");
          return (0, a.useQuery)({
            queryKey: ["get-transactions"],
            queryFn: d,
            enabled: !!e,
          });
        };
    },
    9895: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 25378));
    },
    25378: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => v });
      var r = t(95155),
        a = t(12115),
        i = t(39785),
        l = t(5196),
        d = t(24357),
        n = t(51154),
        c = t(53904),
        o = t(80978),
        x = t(54589),
        m = t(59434),
        u = t(2145),
        h = t(32843),
        g = t(62278),
        y = t(31839),
        j = t(1734),
        f = t(16453),
        b = t(35695),
        p = t(6874),
        k = t.n(p);
      let N = (0, g.r)(() => {
          let [e, s] = (0, a.useState)(!1),
            t = (0, b.useRouter)(),
            { address: g } = (0, u.F)(),
            { disconnect: p } = (0, h.u)(),
            { round: N, fetchRound: v, isLoadingRound: A } = (0, y.A)(),
            { data: w, refetch: _, isLoading: P } = (0, j.A)(),
            T =
              (null == w
                ? void 0
                : w.reduce(
                    (e, s) => (
                      ["AL", "PA"].includes(s.status) &&
                        (e += s.purchase_usd_amount),
                      e
                    ),
                    0
                  )) || 0,
            C =
              (null == w
                ? void 0
                : w.reduce(
                    (e, s) => (
                      ["AL", "PA"].includes(s.status) &&
                        (e += +s.token_quantity),
                      e
                    ),
                    0
                  )) || 0;
          return (0, r.jsxs)("div", {
            className: "space-y-6",
            children: [
              (0, r.jsx)("h1", {
                className: "text-2xl font-bold text-gray-900 dark:text-white",
                children: "Wallet Overview",
              }),
              (0, r.jsx)(x.A, {
                children: (0, r.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row md:items-center md:justify-between",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3",
                          children: (0, r.jsx)(i.A, {
                            size: 20,
                            className: "text-indigo-600 dark:text-indigo-400",
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("p", {
                              className:
                                "text-sm text-gray-500 dark:text-gray-400",
                              children: "Connected Wallet",
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex items-center mt-1",
                              children: [
                                (0, r.jsx)("p", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: (0, m.O)(g || ""),
                                }),
                                (0, r.jsx)("button", {
                                  onClick: () => {
                                    navigator.clipboard.writeText(g || ""),
                                      s(!0),
                                      setTimeout(() => s(!1), 2e3);
                                  },
                                  className:
                                    "ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                                  children: e
                                    ? (0, r.jsx)(l.A, {
                                        size: 16,
                                        className: "text-green-500",
                                      })
                                    : (0, r.jsx)(d.A, { size: 16 }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "mt-4 md:mt-0 flex space-x-2",
                      children: [
                        (0, r.jsxs)("button", {
                          onClick: () => {
                            _(), v();
                          },
                          disabled: A || P,
                          className:
                            "inline-flex items-center px-3 py-1.5 bg-gray-100 cursor-pointer dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
                          children: [
                            A || P
                              ? (0, r.jsx)(n.A, {
                                  className: "animate-spin mr-1",
                                  size: 14,
                                })
                              : (0, r.jsx)(c.A, {
                                  size: 14,
                                  className: "mr-1",
                                }),
                            "Refresh",
                          ],
                        }),
                        (0, r.jsx)("button", {
                          onClick: () => {
                            p(),
                              (0, f.deleteCookie)("X-Access-Token"),
                              t.replace("/");
                          },
                          className:
                            "inline-flex items-center px-3 py-1.5 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-md text-sm font-medium hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors",
                          children: "Disconnect",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [
                  (0, r.jsx)(x.A, {
                    className:
                      "bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-0",
                    children: (0, r.jsxs)("div", {
                      className: "flex flex-col h-full justify-between",
                      children: [
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("p", {
                              className: "text-indigo-200 text-sm",
                              children: "Total Balance",
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-2xl font-bold mt-1",
                              children: [C.toLocaleString(), " $TAPZI"],
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-indigo-200 text-sm mt-1",
                              children: ["≈ $", T.toFixed(2), " USDT"],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mt-4 pt-4 border-t border-indigo-500/30",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex justify-between text-sm",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "text-indigo-200",
                                  children: "Available",
                                }),
                                (0, r.jsx)("span", {
                                  className: "font-medium",
                                  children: "0 $TAPZI",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex justify-between text-sm mt-1",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "text-indigo-200",
                                  children: "Locked",
                                }),
                                (0, r.jsxs)("span", {
                                  className: "font-medium",
                                  children: [C, " $TAPZI"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(x.A, {
                    children: (0, r.jsxs)("div", {
                      className: "flex flex-col h-full",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            (0, r.jsx)("h3", {
                              className:
                                "font-medium text-gray-900 dark:text-white",
                              children: "Deposit",
                            }),
                            (0, r.jsx)(o.A, {
                              size: 18,
                              className: "text-green-500",
                            }),
                          ],
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "text-sm text-gray-500 dark:text-gray-400 mb-4",
                          children:
                            "Add funds to buy more $TAPZI tokens at the current presale price.",
                        }),
                        (0, r.jsx)("div", {
                          className: "mt-auto",
                          children: (0, r.jsx)(k(), {
                            href: "/#tapzi-purchase",
                            className:
                              "w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors cursor-pointer",
                            children: "Buy Tokens",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(x.A, {
                title: "Token Details",
                children: (0, r.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "flex justify-between py-2 border-b border-gray-200 dark:border-gray-800",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-gray-500 dark:text-gray-400",
                          children: "Token Symbol",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "font-medium text-gray-900 dark:text-white",
                          children: "$TAPZI",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "flex justify-between py-2 border-b border-gray-200 dark:border-gray-800",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-gray-500 dark:text-gray-400",
                          children: "Current Price",
                        }),
                        (0, r.jsxs)("span", {
                          className:
                            "font-medium text-gray-900 dark:text-white",
                          children: ["$", N.price],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "flex justify-between py-2 border-b border-gray-200 dark:border-gray-800",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-gray-500 dark:text-gray-400",
                          children: "Next Phase Price",
                        }),
                        (0, r.jsxs)("span", {
                          className:
                            "font-medium text-gray-900 dark:text-white",
                          children: ["$", N.next_price],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "flex justify-between py-2 border-b border-gray-200 dark:border-gray-800",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-gray-500 dark:text-gray-400",
                          children: "Expected Listing Price",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "font-medium text-gray-900 dark:text-white",
                          children: "$0.01",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex justify-between py-2",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-gray-500 dark:text-gray-400",
                          children: "Vesting Period",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "font-medium text-gray-900 dark:text-white",
                          children: "3 months (25% at TGE)",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }),
        v = (0, g.r)(() => (0, r.jsx)(N, {}));
    },
    29656: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      var r = t(45530),
        a = t(95838),
        i = t(23464),
        l = t(2145);
      let d = async (e) =>
          (
            await i.A.post((0, r.I)("api/create-user-profile-wallet"), {
              wallet_address: e,
            })
          ).data,
        n = () => {
          let { address: e, isConnected: s } = (0, l.F)();
          return (0, a.useQuery)({
            queryKey: ["get-profile", s, e],
            queryFn: () => d(e),
            enabled: s,
          });
        };
    },
    31839: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => i });
      var r = t(45530),
        a = t(12115);
      let i = () => {
        let [e, s] = (0, a.useState)({
            round: 1,
            price: 0.0035,
            next_price: 0.0045,
            target: 5e5,
            total_target: 5e5,
            raised: 24612.282670058194,
            raised_till_yesterday: 16902.746853995846,
            percent_increase: 28.57,
          }),
          [t, i] = (0, a.useState)(!1),
          l = async () => {
            i(!0),
              fetch((0, r.I)("api/round"))
                .then((e) => e.json())
                .then((e) => {
                  let { data: t } = e;
                  s(t);
                })
                .catch((e) => {})
                .finally(() => {
                  i(!1);
                });
          };
        return (
          (0, a.useEffect)(() => {
            l();
          }, []),
          { round: e, isLoadingRound: t, fetchRound: l }
        );
      };
    },
    45530: (e, s, t) => {
      "use strict";
      t.d(s, { I: () => r });
      let r = (e) => "".concat("https://api.tapzi.io", "/").concat(e);
    },
    54589: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => i });
      var r = t(95155),
        a = t(59434);
      t(12115);
      let i = (e) => {
        let { title: s, children: t, className: i, footer: l } = e;
        return (0, r.jsxs)("div", {
          className: (0, a.cn)(
            "bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800",
            i
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
            (0, r.jsx)("div", { className: "p-4", children: t }),
            l &&
              (0, r.jsx)("div", {
                className:
                  "px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800 rounded-b-lg",
                children: l,
              }),
          ],
        });
      };
    },
    59434: (e, s, t) => {
      "use strict";
      t.d(s, { O: () => l, cn: () => i });
      var r = t(52596),
        a = t(39688);
      function i() {
        for (var e = arguments.length, s = Array(e), t = 0; t < e; t++)
          s[t] = arguments[t];
        return (0, a.QP)((0, r.$)(s));
      }
      let l = function (e) {
        let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "...",
          t = e.slice(0, 6);
        return "".concat(t).concat(s).concat(e.slice(-6));
      };
    },
    62278: (e, s, t) => {
      "use strict";
      t.d(s, { r: () => x });
      var r = t(95155),
        a = t(29656),
        i = t(51154),
        l = t(35695),
        d = t(12115),
        n = t(16453),
        c = t(64368),
        o = t(2145);
      let x = (e) => (s) => {
        let t = (0, l.useRouter)(),
          { isLoading: x, isError: m, data: u } = (0, a.A)(),
          { isDisconnected: h } = (0, o.F)(),
          g = (0, c.k)((e) => e.setUser);
        return ((0, d.useEffect)(() => {
          (h || m) && t.replace("/");
        }, [h, t, m]),
        (0, d.useEffect)(() => {
          (null == u ? void 0 : u.access_token) &&
            (0, n.setCookie)("X-Access-Token", u.access_token),
            (null == u ? void 0 : u.user) && g(u.user);
        }, [u]),
        u)
          ? (0, r.jsx)(e, { ...s })
          : x
          ? (0, r.jsx)("div", {
              className: "h-screen w-full flex items-center justify-center",
              children: (0, r.jsx)(i.A, { className: "h-6 w-6 animate-spin" }),
            })
          : (m && t.replace("/"), null);
      };
    },
    64368: (e, s, t) => {
      "use strict";
      t.d(s, { k: () => r });
      let r = (0, t(65521).v)()((e) => ({
        user: null,
        setUser: (s) => e({ user: s }),
        rankProfile: null,
        setRankProfile: (s) => e({ rankProfile: s }),
      }));
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [2145, 7598, 4134, 6874, 4709, 5702, 7327, 8441, 1684, 7358], () =>
      s(9895)
    ),
      (_N_E = e.O());
  },
]);
