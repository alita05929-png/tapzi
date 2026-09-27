(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5105],
  {
    1734: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => d });
      var a = s(45530),
        r = s(95838),
        i = s(23464),
        l = s(16453);
      let n = async () =>
          (
            await i.A.get((0, a.I)("api/get-transactions"), {
              headers: {
                Authorization: "Bearer ".concat(
                  (0, l.getCookie)("X-Access-Token")
                ),
              },
            })
          ).data.data,
        d = () => {
          let e = (0, l.getCookie)("X-Access-Token");
          return (0, r.useQuery)({
            queryKey: ["get-transactions"],
            queryFn: n,
            enabled: !!e,
          });
        };
    },
    29656: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => d });
      var a = s(45530),
        r = s(95838),
        i = s(23464),
        l = s(2145);
      let n = async (e) =>
          (
            await i.A.post((0, a.I)("api/create-user-profile-wallet"), {
              wallet_address: e,
            })
          ).data,
        d = () => {
          let { address: e, isConnected: t } = (0, l.F)();
          return (0, r.useQuery)({
            queryKey: ["get-profile", t, e],
            queryFn: () => n(e),
            enabled: t,
          });
        };
    },
    31839: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var a = s(45530),
        r = s(12115);
      let i = () => {
        let [e, t] = (0, r.useState)({
            round: 1,
            price: 0.0035,
            next_price: 0.0045,
            target: 5e5,
            total_target: 5e5,
            raised: 24612.282670058194,
            raised_till_yesterday: 16902.746853995846,
            percent_increase: 28.57,
          }),
          [s, i] = (0, r.useState)(!1),
          l = async () => {
            i(!0),
              fetch((0, a.I)("api/round"))
                .then((e) => e.json())
                .then((e) => {
                  let { data: s } = e;
                  t(s);
                })
                .catch((e) => {})
                .finally(() => {
                  i(!1);
                });
          };
        return (
          (0, r.useEffect)(() => {
            l();
          }, []),
          { round: e, isLoadingRound: s, fetchRound: l }
        );
      };
    },
    33095: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 34268));
    },
    34268: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => L });
      var a = s(95155);
      s(12115);
      var r = s(92138),
        i = s(93550),
        l = s(55868),
        n = s(17580),
        d = s(33109),
        c = s(39785),
        o = s(83540),
        x = s(6046),
        m = s(94754),
        u = s(96025),
        h = s(52071),
        g = s(27086),
        j = s(70022),
        f = s(6874),
        p = s.n(f),
        y = s(59434);
      let v = (e) => {
          let { title: t, value: s, icon: r, change: i, className: l } = e;
          return (0, a.jsxs)("div", {
            className: (0, y.cn)(
              "bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-4",
              l
            ),
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, a.jsx)("p", {
                    className:
                      "text-sm font-medium text-gray-500 dark:text-gray-400",
                    children: t,
                  }),
                  r &&
                    (0, a.jsx)("div", {
                      className: "text-indigo-600 dark:text-indigo-400",
                      children: r,
                    }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "mt-2",
                children: [
                  (0, a.jsx)("p", {
                    className:
                      "text-2xl font-semibold text-gray-900 dark:text-white",
                    children: s,
                  }),
                  !!i &&
                    !!(null == i ? void 0 : i.value) &&
                    (0, a.jsxs)("p", {
                      className: (0, y.cn)(
                        "text-sm mt-1",
                        i.positive
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      ),
                      children: [
                        i.positive ? "+" : "-",
                        i.value,
                        " ",
                        i.positive ? "↑" : "↓",
                      ],
                    }),
                ],
              }),
            ],
          });
        },
        b = (e) => {
          let {
              value: t,
              max: s,
              label: r,
              showValue: i = !0,
              size: l = "md",
              className: n,
            } = e,
            d = Math.min(Math.max(0, (t / s) * 100), 100);
          return (0, a.jsxs)("div", {
            className: n,
            children: [
              (r || i) &&
                (0, a.jsxs)("div", {
                  className: "flex justify-between items-center mb-1",
                  children: [
                    r &&
                      (0, a.jsx)("span", {
                        className:
                          "text-sm font-medium text-gray-700 dark:text-gray-300",
                        children: r,
                      }),
                    i &&
                      (0, a.jsxs)("span", {
                        className:
                          "text-sm font-medium text-gray-500 dark:text-gray-400",
                        children: [
                          t.toLocaleString(),
                          " / ",
                          s.toLocaleString(),
                          " (",
                          d.toFixed(0),
                          "%)",
                        ],
                      }),
                  ],
                }),
              (0, a.jsx)("div", {
                className: (0, y.cn)(
                  "w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                  { sm: "h-1", md: "h-2", lg: "h-3" }[l]
                ),
                children: (0, a.jsx)("div", {
                  className:
                    "bg-indigo-600 dark:bg-indigo-500 transition-all duration-500 ease-out h-full",
                  style: { width: "".concat(d, "%") },
                }),
              }),
            ],
          });
        };
      var N = s(54589),
        k = s(80978),
        w = s(94870),
        A = s(14186),
        _ = s(40646),
        P = s(2296);
      let z = (e) => {
        let {
          type: t,
          amount: s,
          tokenAmount: r,
          date: i,
          status: l,
          className: n,
        } = e;
        return (0, a.jsxs)("div", {
          className: (0, y.cn)(
            "flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-800 last:border-0",
            n
          ),
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-center space-x-3",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center",
                  children: (() => {
                    switch (t) {
                      case "purchase":
                      case "staking":
                        return (0, a.jsx)(k.A, {
                          size: 16,
                          className: "text-green-500",
                        });
                      case "withdrawal":
                        return (0, a.jsx)(w.A, {
                          size: 16,
                          className: "text-red-500",
                        });
                      case "referral":
                        return (0, a.jsx)(k.A, {
                          size: 16,
                          className: "text-blue-500",
                        });
                      default:
                        return null;
                    }
                  })(),
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("p", {
                      className: "font-medium text-gray-900 dark:text-white",
                      children: (() => {
                        switch (t) {
                          case "purchase":
                            return "Token Purchase";
                          case "staking":
                            return "Staking Deposit";
                          case "withdrawal":
                            return "Withdrawal";
                          case "referral":
                            return "Referral Earning";
                          default:
                            return "Transaction";
                        }
                      })(),
                    }),
                    (0, a.jsx)("p", {
                      className: "text-xs text-gray-500 dark:text-gray-400",
                      children: (0, P.GP)(new Date(i), "MMM dd, yyyy, HH:mm"),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col items-end",
              children: [
                (0, a.jsx)("p", {
                  className: "font-medium text-gray-900 dark:text-white",
                  children: s,
                }),
                r &&
                  (0, a.jsxs)("p", {
                    className: "text-xs text-gray-500 dark:text-gray-400",
                    children: [r, " $TAPZI"],
                  }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "flex items-center space-x-1 ml-4",
              children: [
                (() => {
                  switch (l) {
                    case "PE":
                      return (0, a.jsx)(A.A, {
                        size: 16,
                        className: "text-yellow-500",
                      });
                    case "PA":
                      return (0, a.jsx)(_.A, {
                        size: 16,
                        className: "text-green-500",
                      });
                    default:
                      return null;
                  }
                })(),
                (0, a.jsx)("span", {
                  className: "text-xs font-medium",
                  children: (() => {
                    switch (l) {
                      case "PE":
                        return "Pending";
                      case "PA":
                        return "Completed";
                      default:
                        return "";
                    }
                  })(),
                }),
              ],
            }),
          ],
        });
      };
      var C = s(31839),
        E = s(92833),
        T = s(1734),
        I = s(58322),
        $ = s(68856),
        F = s(56671);
      let R = I.Qf.map((e) => ({
        name: "Round ".concat(e.round),
        value: e.price,
      }));
      R.push({ name: "Listing", value: 0.01 });
      let M = () => {
          let { round: e } = (0, C.A)(),
            { data: t, isLoading: s } = (0, T.A)(),
            f =
              (null == t
                ? void 0
                : t.reduce(
                    (e, t) => (
                      ["AL", "PA"].includes(t.status) &&
                        (e += t.purchase_usd_amount),
                      e
                    ),
                    0
                  )) || 0,
            y =
              (null == t
                ? void 0
                : t.reduce(
                    (e, t) => (
                      ["AL", "PA"].includes(t.status) &&
                        (e += +t.token_quantity),
                      e
                    ),
                    0
                  )) || 0,
            k = (((0.01 - e.price) / e.price) * 100).toFixed(0);
          return (0, a.jsxs)("div", {
            className: "space-y-6",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, a.jsx)("h1", {
                    className:
                      "text-2xl font-bold text-gray-900 dark:text-white",
                    children: "Dashboard",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center space-x-2 text-indigo-400",
                    children: [
                      "Current Price :",
                      " ",
                      (0, a.jsxs)("span", {
                        className:
                          "font-semibold text-lg ml-1 text-yellow-500 dark:text-yellow-400",
                        children: ["$", e.price],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(N.A, {
                className:
                  "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row md:items-center md:justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-xl font-semibold mb-2",
                          children: "Welcome to Tapzi Presale",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center space-x-4",
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("p", {
                                  className:
                                    "text-sn text-indigo-100 font-medium",
                                  children: "Total Tokens",
                                }),
                                (0, a.jsxs)("p", {
                                  className: "text-lg font-semibold",
                                  children: [y, " $TAPZI"],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("p", {
                                  className:
                                    "text-sm text-indigo-100 font-medium",
                                  children: "Current Value",
                                }),
                                (0, a.jsxs)("p", {
                                  className: "text-lg font-semibold",
                                  children: ["$", f.toFixed(2)],
                                }),
                              ],
                            }),
                            !!y &&
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-sm text-indigo-200 font-medium",
                                    children: "ROI",
                                  }),
                                  (0, a.jsxs)("p", {
                                    className: "text-lg font-semibold",
                                    children: ["+", k, "%"],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "mt-4 md:mt-0",
                      children: (0, a.jsxs)(p(), {
                        href: "/#tapzi-purchase",
                        className:
                          "inline-flex items-center px-4 py-2 bg-white text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors",
                        children: [
                          "Buy Tokens",
                          (0, a.jsx)(r.A, { size: 16, className: "ml-2" }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                children: [
                  (0, a.jsx)(v, {
                    title: "Total Balance",
                    value: "".concat(y, " $TAPZI"),
                    icon: (0, a.jsx)(i.A, { size: 20 }),
                    change: { value: 0, positive: !0 },
                  }),
                  (0, a.jsx)(v, {
                    title: "Current Value",
                    value: "$".concat(f.toFixed(2)),
                    icon: (0, a.jsx)(l.A, { size: 20 }),
                    change: { value: 0, positive: !0 },
                  }),
                  (0, a.jsx)(v, {
                    title: "Referral Earnings",
                    value: "0 $TAPZI",
                    icon: (0, a.jsx)(n.A, { size: 20 }),
                    change: { value: 0, positive: !0 },
                  }),
                  (0, a.jsx)(v, {
                    title: "ROI",
                    value: "".concat(k, "%"),
                    icon: (0, a.jsx)(d.A, { size: 20 }),
                    change: { value: "".concat(k, "%"), positive: !0 },
                  }),
                ],
              }),
              (0, a.jsx)(N.A, {
                title: "Roadmap Progress",
                children: (0, a.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row md:items-center md:justify-between mb-4",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsxs)("h3", {
                              className:
                                "text-lg font-medium text-gray-900 dark:text-white",
                              children: ["Phase ", e.round, " of 4"],
                            }),
                            (0, a.jsxs)("p", {
                              className:
                                "text-sm text-gray-500 dark:text-gray-400",
                              children: ["Current price : $", e.price],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "mt-2 md:mt-0",
                          children: [
                            (0, a.jsxs)("p", {
                              className:
                                "text-sm text-gray-500 dark:text-gray-400",
                              children: ["Next price : $", e.next_price],
                            }),
                            (0, a.jsxs)("p", {
                              className:
                                "text-sm text-gray-500 dark:text-gray-400",
                              children: ["Listing price : $", 0.01],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(b, {
                      value: +(
                        ((null == e ? void 0 : e.raised) || 0) /
                        ((null == e ? void 0 : e.price) || 1)
                      ).toFixed(0),
                      max: +(0, E.p)(
                        ((null == e ? void 0 : e.total_target) || 0) /
                          ((null == e ? void 0 : e.price) || 1)
                      ),
                      label: "Tokens Sold",
                      size: "lg",
                    }),
                    (0, a.jsxs)("div", {
                      className: "pt-4",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex items-center justify-between text-sm mb-2",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "font-medium text-gray-700 dark:text-gray-300",
                              children: "Price Chart",
                            }),
                            (0, a.jsxs)("span", {
                              className: "text-indigo-600 dark:text-indigo-400",
                              children: ["+", k, "% since presale start"],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "h-48 w-full",
                          children: (0, a.jsx)(o.u, {
                            width: "100%",
                            height: "100%",
                            children: (0, a.jsxs)(x.b, {
                              data: R,
                              children: [
                                (0, a.jsx)(m.d, {
                                  strokeDasharray: "3 3",
                                  stroke: "#374151",
                                  opacity: 0.1,
                                }),
                                (0, a.jsx)(u.W, {
                                  dataKey: "name",
                                  stroke: "#6B7280",
                                  fontSize: 12,
                                  tickLine: !1,
                                  axisLine: !1,
                                }),
                                (0, a.jsx)(h.h, {
                                  stroke: "#6B7280",
                                  fontSize: 12,
                                  tickLine: !1,
                                  axisLine: !1,
                                  tickFormatter: (e) => "$".concat(e),
                                }),
                                (0, a.jsx)(g.m, {
                                  contentStyle: {
                                    backgroundColor: "rgba(11, 10, 10, 1)",
                                    borderRadius: "0.375rem",
                                    border: "1px solid #E5E7EB",
                                    boxShadow:
                                      "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                                  },
                                  formatter: (e) => ["$".concat(e), "Price"],
                                }),
                                (0, a.jsx)(j.N, {
                                  type: "monotone",
                                  dataKey: "value",
                                  stroke: "#4F46E5",
                                  strokeWidth: 2,
                                  dot: { r: 4, strokeWidth: 2 },
                                  activeDot: { r: 6, strokeWidth: 2 },
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(N.A, {
                title: "Recent Transactions",
                footer: (0, a.jsxs)(p(), {
                  href: "/dashboard/orders",
                  className:
                    "text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center",
                  children: [
                    "View all transactions",
                    (0, a.jsx)(r.A, { size: 16, className: "ml-1" }),
                  ],
                }),
                children: (0, a.jsxs)("div", {
                  className: "divide-y divide-gray-200 dark:divide-gray-800",
                  children: [
                    s &&
                      Array.from({ length: 4 }).map((e, t) =>
                        (0, a.jsx)(
                          $.E,
                          { className: "h-16" },
                          "transaction-".concat(t)
                        )
                      ),
                    null == t
                      ? void 0
                      : t
                          .slice(0, 4)
                          .map((e, t) =>
                            (0, a.jsx)(
                              z,
                              {
                                id: e.click_id,
                                type: "purchase",
                                amount: ""
                                  .concat(e.value, " ")
                                  .concat(e.currency),
                                tokenAmount: (+e.token_quantity).toFixed(0),
                                date: e.created_at,
                                status: e.status,
                              },
                              t
                            )
                          ),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [
                  (0, a.jsxs)(N.A, {
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("h3", {
                                className:
                                  "text-lg font-medium text-gray-900 dark:text-white",
                                children: "Buy More Tokens",
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "text-sm text-gray-500 dark:text-gray-400 mt-1",
                                children: ["Current price: $", e.price],
                              }),
                            ],
                          }),
                          (0, a.jsx)(c.A, {
                            size: 24,
                            className: "text-indigo-600 dark:text-indigo-400",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "mt-4",
                        children: (0, a.jsxs)(p(), {
                          href: "/dashboard/wallet",
                          className:
                            "inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors w-full justify-center",
                          children: [
                            "Go to Wallet",
                            (0, a.jsx)(r.A, { size: 16, className: "ml-2" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)(N.A, {
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("h3", {
                                className:
                                  "text-lg font-medium text-gray-900 dark:text-white",
                                children: "Check ROI",
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "text-sm text-gray-500 dark:text-gray-400 mt-1",
                                children: ["Current ROI: +", k, "%"],
                              }),
                            ],
                          }),
                          (0, a.jsx)(d.A, {
                            size: 24,
                            className: "text-indigo-600 dark:text-indigo-400",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "mt-4",
                        children: (0, a.jsxs)("button", {
                          onClick: () =>
                            F.o.warning("Comming soon!", {
                              position: "top-center",
                            }),
                          className:
                            "inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors w-full justify-center",
                          children: [
                            "View ROI Details",
                            (0, a.jsx)(r.A, { size: 16, className: "ml-2" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)(N.A, {
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("h3", {
                                className:
                                  "text-lg font-medium text-gray-900 dark:text-white",
                                children: "Refer Friends",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-sm text-gray-500 dark:text-gray-400 mt-1",
                                children: "Earn 5% on referrals",
                              }),
                            ],
                          }),
                          (0, a.jsx)(n.A, {
                            size: 24,
                            className: "text-indigo-600 dark:text-indigo-400",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "mt-4",
                        children: (0, a.jsxs)("button", {
                          onClick: () =>
                            F.o.warning("Comming soon!", {
                              position: "top-center",
                            }),
                          className:
                            "inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors w-full justify-center",
                          children: [
                            "Manage Referrals",
                            (0, a.jsx)(r.A, { size: 16, className: "ml-2" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        L = (0, s(62278).r)(() => (0, a.jsx)(M, {}));
    },
    45530: (e, t, s) => {
      "use strict";
      s.d(t, { I: () => a });
      let a = (e) => "".concat("https://api.tapzi.io", "/").concat(e);
    },
    54589: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var a = s(95155),
        r = s(59434);
      s(12115);
      let i = (e) => {
        let { title: t, children: s, className: i, footer: l } = e;
        return (0, a.jsxs)("div", {
          className: (0, r.cn)(
            "bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800",
            i
          ),
          children: [
            t &&
              (0, a.jsx)("div", {
                className:
                  "px-4 py-3 border-b border-gray-200 dark:border-gray-800",
                children: (0, a.jsx)("h3", {
                  className:
                    "text-lg font-medium text-gray-900 dark:text-white",
                  children: t,
                }),
              }),
            (0, a.jsx)("div", { className: "p-4", children: s }),
            l &&
              (0, a.jsx)("div", {
                className:
                  "px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800 rounded-b-lg",
                children: l,
              }),
          ],
        });
      };
    },
    58322: (e, t, s) => {
      "use strict";
      s.d(t, {
        $_: () => l,
        EI: () => i,
        IP: () => r,
        Qf: () => d,
        WA: () => a,
        bu: () => n,
      });
      let a = "0xde6ffac93aa6a8cf2307b41a5d8c29ecbfd7f88b",
        r = "0xde6ffac93aa6a8cf2307b41a5d8c29ecbfd7f88b",
        i = "0xdb2b2201e89a3adb897d9a9d60b0b91f663d272e",
        l = "0xde6ffac93aa6a8cf2307b41a5d8c29ecbfd7f88b",
        n = "0xDb2b2201E89a3adb897d9A9d60b0B91F663D272e",
        d = [
          {
            round: 1,
            price: 0.0035,
            next_price: 0.0045,
            target: 5e5,
            total_target: 5e5,
          },
          {
            round: 2,
            price: 0.0045,
            next_price: 0.0055,
            target: 15e5,
            total_target: 2e6,
          },
          {
            round: 3,
            price: 0.0055,
            next_price: 0.0065,
            target: 15e5,
            total_target: 35e5,
          },
          {
            round: 4,
            price: 0.0065,
            next_price: 0.009,
            target: 15e5,
            total_target: 5e6,
          },
        ];
    },
    59434: (e, t, s) => {
      "use strict";
      s.d(t, { O: () => l, cn: () => i });
      var a = s(52596),
        r = s(39688);
      function i() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, r.QP)((0, a.$)(t));
      }
      let l = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "...",
          s = e.slice(0, 6);
        return "".concat(s).concat(t).concat(e.slice(-6));
      };
    },
    62278: (e, t, s) => {
      "use strict";
      s.d(t, { r: () => x });
      var a = s(95155),
        r = s(29656),
        i = s(51154),
        l = s(35695),
        n = s(12115),
        d = s(16453),
        c = s(64368),
        o = s(2145);
      let x = (e) => (t) => {
        let s = (0, l.useRouter)(),
          { isLoading: x, isError: m, data: u } = (0, r.A)(),
          { isDisconnected: h } = (0, o.F)(),
          g = (0, c.k)((e) => e.setUser);
        return ((0, n.useEffect)(() => {
          (h || m) && s.replace("/");
        }, [h, s, m]),
        (0, n.useEffect)(() => {
          (null == u ? void 0 : u.access_token) &&
            (0, d.setCookie)("X-Access-Token", u.access_token),
            (null == u ? void 0 : u.user) && g(u.user);
        }, [u]),
        u)
          ? (0, a.jsx)(e, { ...t })
          : x
          ? (0, a.jsx)("div", {
              className: "h-screen w-full flex items-center justify-center",
              children: (0, a.jsx)(i.A, { className: "h-6 w-6 animate-spin" }),
            })
          : (m && s.replace("/"), null);
      };
    },
    64368: (e, t, s) => {
      "use strict";
      s.d(t, { k: () => a });
      let a = (0, s(65521).v)()((e) => ({
        user: null,
        setUser: (t) => e({ user: t }),
        rankProfile: null,
        setRankProfile: (t) => e({ rankProfile: t }),
      }));
    },
    68856: (e, t, s) => {
      "use strict";
      s.d(t, { E: () => i });
      var a = s(95155),
        r = s(59434);
      function i(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "skeleton",
          className: (0, r.cn)("bg-accent animate-pulse rounded-md", t),
          ...s,
        });
      }
    },
    92833: (e, t, s) => {
      "use strict";
      function a(e) {
        if (0 === e) return 0;
        let t = Math.pow(10, Math.floor(Math.log10(e)) - 1);
        return Math.ceil(e / t) * t;
      }
      s.d(t, { p: () => a });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        2145, 7598, 4134, 6874, 4709, 5702, 6671, 3880, 4181, 5475, 8441, 1684,
        7358,
      ],
      () => t(33095)
    ),
      (_N_E = e.O());
  },
]);
