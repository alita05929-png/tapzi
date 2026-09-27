(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [611],
  {
    1734: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var s = r(45530),
        a = r(95838),
        d = r(23464),
        l = r(16453);
      let i = async () =>
          (
            await d.A.get((0, s.I)("api/get-transactions"), {
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
            queryFn: i,
            enabled: !!e,
          });
        };
    },
    23492: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => k });
      var s = r(95155),
        a = r(12115),
        d = r(54589),
        l = r(40646),
        i = r(14186),
        n = r(19946);
      let c = (0, n.A)("search", [
          ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ]),
        x = (0, n.A)("funnel", [
          [
            "path",
            {
              d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
              key: "sc7q7i",
            },
          ],
        ]);
      var o = r(51154),
        m = r(1734),
        g = r(2296),
        h = r(59434),
        u = r(6874),
        y = r.n(u),
        p = r(88180);
      let j = (e) => {
          switch (e) {
            case "PA":
            case "AL":
              return (0, s.jsx)(l.A, { size: 16, className: "text-green-500" });
            case "PE":
              return (0, s.jsx)(i.A, {
                size: 16,
                className: "text-yellow-500",
              });
            default:
              return null;
          }
        },
        b = () => {
          let [e, t] = (0, a.useState)(""),
            [r, l] = (0, a.useState)("all"),
            { data: i, isLoading: n } = (0, m.A)(),
            [u, b] = (0, a.useState)(i || []);
          (0, a.useEffect)(() => {
            i && b(i);
          }, [i]),
            (0, a.useEffect)(() => {
              i &&
                ("all" !== r ? b(i.filter((e) => e.status === r)) : b(i || []));
            }, [r, i]);
          let k =
              (null == i
                ? void 0
                : i.reduce(
                    (e, t) => (
                      ["AL", "PA"].includes(t.status) &&
                        (e += t.purchase_usd_amount),
                      e
                    ),
                    0
                  )) || 0,
            f =
              (null == i
                ? void 0
                : i.reduce(
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
                children: "All Orders",
              }),
              (0, s.jsx)(d.A, {
                children: (0, s.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "relative flex-1",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                              children: (0, s.jsx)(c, {
                                size: 16,
                                className: "text-gray-400",
                              }),
                            }),
                            (0, s.jsx)("input", {
                              type: "text",
                              value: e,
                              onChange: (e) => t(e.target.value),
                              className:
                                "block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500",
                              placeholder: "Search by order ID",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, s.jsxs)("select", {
                              value: r,
                              onChange: (e) => l(e.target.value),
                              className:
                                "block w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 appearance-none",
                              children: [
                                (0, s.jsx)("option", {
                                  value: "all",
                                  children: "All Status",
                                }),
                                (0, s.jsx)("option", {
                                  value: "PE",
                                  children: "Pending",
                                }),
                                (0, s.jsx)("option", {
                                  value: "PA",
                                  children: "Completed",
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                              children: (0, s.jsx)(x, {
                                size: 16,
                                className: "text-gray-400",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "mt-6",
                      children: [
                        n &&
                          (0, s.jsx)("div", {
                            className: "my-8 flex justify-center",
                            children: (0, s.jsx)(o.A, {
                              className: "animate-spin h-8 w-8",
                            }),
                          }),
                        u.length > 0
                          ? (0, s.jsx)("div", {
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
                                          children: "Click ID",
                                        }),
                                        (0, s.jsx)("th", {
                                          className:
                                            "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                          children: "Date",
                                        }),
                                        (0, s.jsx)("th", {
                                          className:
                                            "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                          children: "Payment Method",
                                        }),
                                        (0, s.jsx)("th", {
                                          className:
                                            "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                          children: "Amount",
                                        }),
                                        (0, s.jsx)("th", {
                                          className:
                                            "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                          children: "Tokens",
                                        }),
                                        (0, s.jsx)("th", {
                                          className:
                                            "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                          children: "Presale Stage",
                                        }),
                                        (0, s.jsx)("th", {
                                          className:
                                            "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                          children: "Status",
                                        }),
                                        (0, s.jsx)("th", {
                                          className:
                                            "px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                          children: "Action",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)("tbody", {
                                    className:
                                      "divide-y divide-gray-200 dark:divide-gray-800",
                                    children: u.map((e) =>
                                      (0, s.jsxs)(
                                        "tr",
                                        {
                                          children: [
                                            (0, s.jsx)("td", {
                                              className:
                                                "px-4 py-3 text-sm font-medium text-gray-900 dark:text-white",
                                              children: (0, h.O)(e.click_id),
                                            }),
                                            (0, s.jsx)("td", {
                                              className:
                                                "px-4 py-3 text-sm text-gray-500 dark:text-gray-400",
                                              children: (0, g.GP)(
                                                new Date(e.created_at),
                                                "dd MMM yyyy, HH:mm"
                                              ),
                                            }),
                                            (0, s.jsxs)("td", {
                                              className:
                                                "px-4 py-3 text-sm text-gray-300 dark:text-gray-400",
                                              children: [
                                                (0, s.jsx)("span", {
                                                  className:
                                                    "font-semibold uppercase",
                                                  children: e.currency,
                                                }),
                                                " ",
                                                "(",
                                                e.chain,
                                                ")",
                                              ],
                                            }),
                                            (0, s.jsxs)("td", {
                                              className:
                                                "px-4 py-3 font-semibold text-gray-900 dark:text-white",
                                              children: [
                                                "$",
                                                e.purchase_usd_amount.toFixed(
                                                  2
                                                ),
                                              ],
                                            }),
                                            (0, s.jsx)("td", {
                                              className:
                                                "px-4 py-3 font-semibold tracking-wider text-gray-900 dark:text-white",
                                              children: e.token_quantity,
                                            }),
                                            (0, s.jsxs)("td", {
                                              className:
                                                "px-4 py-3 text-sm font-medium text-gray-900 dark:text-white",
                                              children: [
                                                "Stage ",
                                                e.round_number,
                                              ],
                                            }),
                                            (0, s.jsx)("td", {
                                              className: "px-4 py-3 text-sm",
                                              children: (0, s.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                  j(e.status),
                                                  (0, s.jsx)("span", {
                                                    className: (0, h.cn)(
                                                      "ml-1.5",
                                                      ["AL", "PA"].includes(
                                                        e.status
                                                      ) &&
                                                        "text-green-600 dark:text-green-400",
                                                      "PE" === e.status &&
                                                        "text-yellow-600 dark:text-yellow-400"
                                                    ),
                                                    children: [
                                                      "AL",
                                                      "PA",
                                                    ].includes(e.status)
                                                      ? "Completed"
                                                      : "Pending",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.txn_hash &&
                                              (0, s.jsx)("td", {
                                                className:
                                                  "px-4 py-3 text-sm text-right",
                                                children: (0, s.jsx)(y(), {
                                                  href: ""
                                                    .concat(p.Ur[e.chain])
                                                    .concat(e.txn_hash),
                                                  className:
                                                    "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 whitespace-nowrap",
                                                  children: "View Details",
                                                }),
                                              }),
                                          ],
                                        },
                                        e.click_id
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            })
                          : (0, s.jsx)("div", {
                              className: "py-8 text-center",
                              children: (0, s.jsx)("p", {
                                className: "text-gray-500 dark:text-gray-400",
                                children:
                                  "No orders found matching your filters.",
                              }),
                            }),
                      ],
                    }),
                  ],
                }),
              }),
              !!i &&
                (0, s.jsxs)("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                  children: [
                    (0, s.jsx)(d.A, {
                      children: (0, s.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "text-sm text-gray-500 dark:text-gray-400",
                            children: "Total Orders",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-2xl font-semibold text-gray-900 dark:text-white mt-1",
                            children: i.length,
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(d.A, {
                      children: (0, s.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "text-sm text-gray-500 dark:text-gray-400",
                            children: "Total Spent",
                          }),
                          (0, s.jsxs)("p", {
                            className:
                              "text-2xl font-semibold text-gray-900 dark:text-white mt-1",
                            children: ["$", k],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(d.A, {
                      children: (0, s.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "text-sm text-gray-500 dark:text-gray-400",
                            children: "Total Tokens",
                          }),
                          (0, s.jsxs)("p", {
                            className:
                              "text-2xl font-semibold text-gray-900 dark:text-white mt-1",
                            children: [f, " $TAPZI"],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              (0, s.jsx)(d.A, {
                title: "Payment Methods",
                children: (0, s.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-sm text-gray-500 dark:text-gray-400",
                      children:
                        "We accept the following payment methods for token purchases:",
                    }),
                    (0, s.jsxs)("div", {
                      className: "grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3",
                              children: (0, s.jsx)("span", {
                                className:
                                  "text-blue-600 dark:text-blue-400 font-bold",
                                children: "E",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: "Ethereum",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "ETH",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3",
                              children: (0, s.jsx)("span", {
                                className:
                                  "text-green-600 dark:text-green-400 font-bold",
                                children: "₮",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: "Tether",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "USDT",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3",
                              children: (0, s.jsx)("span", {
                                className:
                                  "text-blue-600 dark:text-blue-400 font-bold",
                                children: "U",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: "USD Coin",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "USDC",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3",
                              children: (0, s.jsx)("span", {
                                className:
                                  "text-yellow-600 dark:text-yellow-400 font-bold",
                                children: "BNB",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: "Binance Coin",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "BNB",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3",
                              children: (0, s.jsx)("span", {
                                className:
                                  "text-purple-600 dark:text-purple-400 font-bold",
                                children: "POL",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: "Polygon",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "MATIC",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3",
                              children: (0, s.jsx)("span", {
                                className:
                                  "text-indigo-600 dark:text-indigo-400 font-bold",
                                children: "CC",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: "Credit Card",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "Visa/Mastercard",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3",
                              children: (0, s.jsx)("span", {
                                className:
                                  "text-green-600 dark:text-green-400 font-bold",
                                children: "SOL",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: "Solana",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "SOL",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3",
                              children: (0, s.jsx)("span", {
                                className:
                                  "text-red-600 dark:text-red-400 font-bold",
                                children: "T",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white",
                                  children: "Tron",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "TRX",
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
        k = (0, r(62278).r)(() => (0, s.jsx)(b, {}));
    },
    29656: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var s = r(45530),
        a = r(95838),
        d = r(23464),
        l = r(2145);
      let i = async (e) =>
          (
            await d.A.post((0, s.I)("api/create-user-profile-wallet"), {
              wallet_address: e,
            })
          ).data,
        n = () => {
          let { address: e, isConnected: t } = (0, l.F)();
          return (0, a.useQuery)({
            queryKey: ["get-profile", t, e],
            queryFn: () => i(e),
            enabled: t,
          });
        };
    },
    45530: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => s });
      let s = (e) => "".concat("https://api.tapzi.io", "/").concat(e);
    },
    48812: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => s });
      let s = {
        eth: 1,
        bsc: 56,
        polygon: 137,
        arbitrum: 42161,
        avalanche: 43114,
        fantom: 250,
        harmony: 16666e5,
        optimism: 10,
        gnosis: 100,
        heco: 128,
        base: 8453,
      };
    },
    54589: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => d });
      var s = r(95155),
        a = r(59434);
      r(12115);
      let d = (e) => {
        let { title: t, children: r, className: d, footer: l } = e;
        return (0, s.jsxs)("div", {
          className: (0, a.cn)(
            "bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800",
            d
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
            l &&
              (0, s.jsx)("div", {
                className:
                  "px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800 rounded-b-lg",
                children: l,
              }),
          ],
        });
      };
    },
    56011: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 23492));
    },
    59434: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => l, cn: () => d });
      var s = r(52596),
        a = r(39688);
      function d() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, a.QP)((0, s.$)(t));
      }
      let l = function (e) {
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
      r.d(t, { r: () => o });
      var s = r(95155),
        a = r(29656),
        d = r(51154),
        l = r(35695),
        i = r(12115),
        n = r(16453),
        c = r(64368),
        x = r(2145);
      let o = (e) => (t) => {
        let r = (0, l.useRouter)(),
          { isLoading: o, isError: m, data: g } = (0, a.A)(),
          { isDisconnected: h } = (0, x.F)(),
          u = (0, c.k)((e) => e.setUser);
        return ((0, i.useEffect)(() => {
          (h || m) && r.replace("/");
        }, [h, r, m]),
        (0, i.useEffect)(() => {
          (null == g ? void 0 : g.access_token) &&
            (0, n.setCookie)("X-Access-Token", g.access_token),
            (null == g ? void 0 : g.user) && u(g.user);
        }, [g]),
        g)
          ? (0, s.jsx)(e, { ...t })
          : o
          ? (0, s.jsx)("div", {
              className: "h-screen w-full flex items-center justify-center",
              children: (0, s.jsx)(d.A, { className: "h-6 w-6 animate-spin" }),
            })
          : (m && r.replace("/"), null);
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
    88180: (e, t, r) => {
      "use strict";
      r.d(t, {
        Rd: () => i,
        Ur: () => n,
        Xv: () => l,
        _3: () => a,
        qN: () => d,
      });
      var s = r(48812);
      let a = {
          1: "eth",
          56: "bsc",
          137: "polygon",
          42161: "arbitrum",
          8453: "base",
        },
        d = {
          eth: s.t.eth,
          matic: s.t.polygon,
          bnb: s.t.bsc,
          arb: s.t.arbitrum,
          base: s.t.base,
        },
        l = {
          eth: "Ethereum",
          matic: "Polygon",
          bnb: "BSC",
          arb: "Arbitrum",
          base: "Base",
        },
        i = {
          eth: "/image/tokens/eth-round.png",
          matic: "/image/tokens/matic.png",
          bnb: "/image/tokens/bnb.png",
          usdt: "/image/tokens/tether.svg",
          usdc: "/image/tokens/usdc.png",
          card: "/image/tokens/card.svg",
          sol: "/image/tokens/solana.svg",
          trx: "/image/tokens/tron.svg",
          arb: "/image/tokens/arb-round.png",
          base: "/image/tokens/base-round.png",
        },
        n = {
          eth: "https://etherscan.io/tx/",
          bsc: "https://bscscan.com/tx/",
          polygon: "https://polygonscan.com/tx/",
          arbitrum: "https://arbiscan.io/tx/",
          base: "https://basescan.org/tx/",
          solana: "https://solscan.io/tx/",
          tron: "https://tronscan.org/#/transaction/",
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [2145, 7598, 4134, 6874, 4709, 5702, 4181, 8441, 1684, 7358], () =>
      t(56011)
    ),
      (_N_E = e.O());
  },
]);
