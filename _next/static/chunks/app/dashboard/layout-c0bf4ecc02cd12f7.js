(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1954],
  {
    5041: (t, e, s) => {
      "use strict";
      s.d(e, { useMutation: () => l });
      var i = s(12115),
        n = s(34560),
        r = s(7165),
        a = s(25910),
        o = s(52020),
        u = class extends a.Q {
          #t;
          #e = void 0;
          #s;
          #i;
          constructor(t, e) {
            super(),
              (this.#t = t),
              this.setOptions(e),
              this.bindMethods(),
              this.#n();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(t) {
            let e = this.options;
            (this.options = this.#t.defaultMutationOptions(t)),
              (0, o.f8)(this.options, e) ||
                this.#t
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#s,
                    observer: this,
                  }),
              e?.mutationKey &&
              this.options.mutationKey &&
              (0, o.EN)(e.mutationKey) !== (0, o.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#s?.state.status === "pending" &&
                  this.#s.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#s?.removeObserver(this);
          }
          onMutationUpdate(t) {
            this.#n(), this.#r(t);
          }
          getCurrentResult() {
            return this.#e;
          }
          reset() {
            this.#s?.removeObserver(this),
              (this.#s = void 0),
              this.#n(),
              this.#r();
          }
          mutate(t, e) {
            return (
              (this.#i = e),
              this.#s?.removeObserver(this),
              (this.#s = this.#t
                .getMutationCache()
                .build(this.#t, this.options)),
              this.#s.addObserver(this),
              this.#s.execute(t)
            );
          }
          #n() {
            let t = this.#s?.state ?? (0, n.$)();
            this.#e = {
              ...t,
              isPending: "pending" === t.status,
              isSuccess: "success" === t.status,
              isError: "error" === t.status,
              isIdle: "idle" === t.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #r(t) {
            r.jG.batch(() => {
              if (this.#i && this.hasListeners()) {
                let e = this.#e.variables,
                  s = this.#e.context;
                t?.type === "success"
                  ? (this.#i.onSuccess?.(t.data, e, s),
                    this.#i.onSettled?.(t.data, null, e, s))
                  : t?.type === "error" &&
                    (this.#i.onError?.(t.error, e, s),
                    this.#i.onSettled?.(void 0, t.error, e, s));
              }
              this.listeners.forEach((t) => {
                t(this.#e);
              });
            });
          }
        },
        c = s(26715);
      function l(t, e) {
        let s = (0, c.useQueryClient)(e),
          [n] = i.useState(() => new u(s, t));
        i.useEffect(() => {
          n.setOptions(t);
        }, [n, t]);
        let a = i.useSyncExternalStore(
            i.useCallback((t) => n.subscribe(r.jG.batchCalls(t)), [n]),
            () => n.getCurrentResult(),
            () => n.getCurrentResult()
          ),
          l = i.useCallback(
            (t, e) => {
              n.mutate(t, e).catch(o.lQ);
            },
            [n]
          );
        if (a.error && (0, o.GU)(n.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: l, mutateAsync: a.mutate };
      }
    },
    6784: (t, e, s) => {
      "use strict";
      s.d(e, { II: () => h, v_: () => u, wm: () => l });
      var i = s(50920),
        n = s(21239),
        r = s(73504),
        a = s(52020);
      function o(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function u(t) {
        return (t ?? "online") !== "online" || n.t.isOnline();
      }
      var c = class extends Error {
        constructor(t) {
          super("CancelledError"),
            (this.revert = t?.revert),
            (this.silent = t?.silent);
        }
      };
      function l(t) {
        return t instanceof c;
      }
      function h(t) {
        let e,
          s = !1,
          l = 0,
          h = !1,
          d = (0, r.T)(),
          f = () =>
            i.m.isFocused() &&
            ("always" === t.networkMode || n.t.isOnline()) &&
            t.canRun(),
          p = () => u(t.networkMode) && t.canRun(),
          y = (s) => {
            h || ((h = !0), t.onSuccess?.(s), e?.(), d.resolve(s));
          },
          v = (s) => {
            h || ((h = !0), t.onError?.(s), e?.(), d.reject(s));
          },
          m = () =>
            new Promise((s) => {
              (e = (t) => {
                (h || f()) && s(t);
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), h || t.onContinue?.();
            }),
          b = () => {
            let e;
            if (h) return;
            let i = 0 === l ? t.initialPromise : void 0;
            try {
              e = i ?? t.fn();
            } catch (t) {
              e = Promise.reject(t);
            }
            Promise.resolve(e)
              .then(y)
              .catch((e) => {
                if (h) return;
                let i = t.retry ?? 3 * !a.S$,
                  n = t.retryDelay ?? o,
                  r = "function" == typeof n ? n(l, e) : n,
                  u =
                    !0 === i ||
                    ("number" == typeof i && l < i) ||
                    ("function" == typeof i && i(l, e));
                if (s || !u) return void v(e);
                l++,
                  t.onFail?.(l, e),
                  (0, a.yy)(r)
                    .then(() => (f() ? void 0 : m()))
                    .then(() => {
                      s ? v(e) : b();
                    });
              });
          };
        return {
          promise: d,
          cancel: (e) => {
            h || (v(new c(e)), t.abort?.());
          },
          continue: () => (e?.(), d),
          cancelRetry: () => {
            s = !0;
          },
          continueRetry: () => {
            s = !1;
          },
          canStart: p,
          start: () => (p() ? b() : m().then(b), d),
        };
      }
    },
    7165: (t, e, s) => {
      "use strict";
      s.d(e, { jG: () => n });
      var i = (t) => setTimeout(t, 0),
        n = (function () {
          let t = [],
            e = 0,
            s = (t) => {
              t();
            },
            n = (t) => {
              t();
            },
            r = i,
            a = (i) => {
              e
                ? t.push(i)
                : r(() => {
                    s(i);
                  });
            },
            o = () => {
              let e = t;
              (t = []),
                e.length &&
                  r(() => {
                    n(() => {
                      e.forEach((t) => {
                        s(t);
                      });
                    });
                  });
            };
          return {
            batch: (t) => {
              let s;
              e++;
              try {
                s = t();
              } finally {
                --e || o();
              }
              return s;
            },
            batchCalls:
              (t) =>
              (...e) => {
                a(() => {
                  t(...e);
                });
              },
            schedule: a,
            setNotifyFunction: (t) => {
              s = t;
            },
            setBatchNotifyFunction: (t) => {
              n = t;
            },
            setScheduler: (t) => {
              r = t;
            },
          };
        })();
    },
    13662: (t, e, s) => {
      Promise.resolve().then(s.bind(s, 17298));
    },
    17298: (t, e, s) => {
      "use strict";
      s.r(e), s.d(e, { default: () => E });
      var i = s(95155),
        n = s(12115),
        r = s(19946);
      let a = (0, r.A)("layout-dashboard", [
          [
            "rect",
            { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
          ],
          [
            "rect",
            {
              width: "7",
              height: "5",
              x: "14",
              y: "3",
              rx: "1",
              key: "16une8",
            },
          ],
          [
            "rect",
            {
              width: "7",
              height: "9",
              x: "14",
              y: "12",
              rx: "1",
              key: "1hutg5",
            },
          ],
          [
            "rect",
            {
              width: "7",
              height: "5",
              x: "3",
              y: "16",
              rx: "1",
              key: "ldoo1y",
            },
          ],
        ]),
        o = (0, r.A)("chart-no-axes-combined", [
          ["path", { d: "M12 16v5", key: "zza2cw" }],
          ["path", { d: "M16 14v7", key: "1g90b9" }],
          ["path", { d: "M20 10v11", key: "1iqoj0" }],
          [
            "path",
            {
              d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",
              key: "1fw8x9",
            },
          ],
          ["path", { d: "M4 18v3", key: "1yp0dc" }],
          ["path", { d: "M8 14v7", key: "n3cwzv" }],
        ]),
        u = (0, r.A)("shopping-cart", [
          ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
          ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
          [
            "path",
            {
              d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
              key: "9zh506",
            },
          ],
        ]);
      var c = s(39785),
        l = s(33109),
        h = s(93550),
        d = s(17580),
        f = s(18186),
        p = s(54416);
      let y = (0, r.A)("log-out", [
          ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
          ["path", { d: "M21 12H9", key: "dn1m92" }],
          [
            "path",
            { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" },
          ],
        ]),
        v = (0, r.A)("menu", [
          ["path", { d: "M4 12h16", key: "1lakjw" }],
          ["path", { d: "M4 18h16", key: "19g7jn" }],
          ["path", { d: "M4 6h16", key: "1o0s65" }],
        ]);
      var m = s(59434),
        b = s(6874),
        g = s.n(b),
        x = s(32843),
        k = s(2145),
        w = s(35695),
        j = s(16453),
        M = s(99708);
      let C = (0, s(74466).F)(
        "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
              destructive:
                "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      function O(t) {
        let { className: e, variant: s, asChild: n = !1, ...r } = t,
          a = n ? M.DX : "span";
        return (0, i.jsx)(a, {
          "data-slot": "badge",
          className: (0, m.cn)(C({ variant: s }), e),
          ...r,
        });
      }
      var S = s(66766);
      let E = (t) => {
        let { children: e } = t,
          [s, r] = (0, n.useState)(!1),
          { disconnect: b } = (0, x.u)(),
          M = (0, w.useRouter)(),
          C = (0, w.usePathname)(),
          E = [
            {
              path: "/dashboard",
              label: "Dashboard",
              icon: (0, i.jsx)(a, { size: 20 }),
            },
            {
              path: "/#tapzi-purchase",
              label: "Presale",
              icon: (0, i.jsx)(o, { size: 20 }),
            },
            {
              path: "/dashboard/orders",
              label: "Orders",
              icon: (0, i.jsx)(u, { size: 20 }),
            },
            {
              path: "/dashboard/wallet",
              label: "Wallet",
              icon: (0, i.jsx)(c.A, { size: 20 }),
            },
            { path: "#", label: "ROI", icon: (0, i.jsx)(l.A, { size: 20 }) },
            {
              path: "/dashboard/holdings",
              label: "Holdings",
              icon: (0, i.jsx)(h.A, { size: 20 }),
            },
            {
              path: "#",
              label: "Referrals",
              icon: (0, i.jsx)(d.A, { size: 20 }),
            },
            {
              path: "/dashboard/leaderboard",
              label: "Leaderboard",
              icon: (0, i.jsx)(f.A, { size: 20 }),
            },
          ],
          { isConnected: N, address: A, isDisconnected: P } = (0, k.F)();
        return (
          (0, n.useEffect)(() => {
            (P || !A) && M.replace("/");
          }, [P, M, A]),
          N
            ? (0, i.jsxs)("div", {
                className: (0, m.cn)("flex h-screen overflow-hidden dark"),
                children: [
                  s &&
                    (0, i.jsx)("div", {
                      className: "fixed inset-0 z-40 bg-black/50 lg:hidden",
                      onClick: () => r(!1),
                    }),
                  (0, i.jsxs)("aside", {
                    className: (0, m.cn)(
                      "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:z-auto",
                      s ? "translate-x-0" : "-translate-x-full",
                      "bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col"
                    ),
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800",
                        children: [
                          (0, i.jsx)("div", {
                            className: "flex items-center space-x-2",
                            children: (0, i.jsx)(S.default, {
                              src: "/logo.webp",
                              alt: "",
                              height: 32,
                              width: 100,
                              className: "h-8 w-auto object-fit-contain",
                            }),
                          }),
                          (0, i.jsx)("button", {
                            className:
                              "lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                            onClick: () => r(!1),
                            children: (0, i.jsx)(p.A, { size: 20 }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "flex-1 overflow-y-auto py-4 px-3",
                        children: (0, i.jsx)("nav", {
                          className: "space-y-1",
                          children: E.map((t) =>
                            (0, i.jsxs)(
                              g(),
                              {
                                href: "#" === t.path ? "" : t.path,
                                onClick: () => {
                                  r(!1);
                                },
                                className: (0, m.cn)(
                                  "flex items-center justify-between px-3 py-2 font-medium rounded-md transition-colors",
                                  C === t.path
                                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400"
                                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                ),
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, i.jsx)("span", {
                                        className: "mr-3",
                                        children: t.icon,
                                      }),
                                      t.label,
                                    ],
                                  }),
                                  "#" === t.path &&
                                    (0, i.jsx)(O, {
                                      className:
                                        "text-[10px] text-yellow-500 border-yellow-500 rounded-full",
                                      variant: "outline",
                                      children: "Coming soon!",
                                    }),
                                ],
                              },
                              t.path
                            )
                          ),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "p-4 border-t border-gray-200 dark:border-gray-800",
                        children: (0, i.jsxs)("button", {
                          onClick: () => {
                            b(),
                              (0, j.deleteCookie)("X-Access-Token"),
                              M.replace("/");
                          },
                          className:
                            "flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900",
                          children: [
                            (0, i.jsx)(y, { size: 16, className: "mr-2" }),
                            "Disconnect Wallet",
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex flex-col flex-1 overflow-hidden",
                    children: [
                      (0, i.jsxs)("header", {
                        className:
                          "h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between px-4 lg:px-6",
                        children: [
                          (0, i.jsx)("button", {
                            className:
                              "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 lg:hidden",
                            onClick: () => r(!0),
                            children: (0, i.jsx)(v, { size: 24 }),
                          }),
                          (0, i.jsx)("div", {
                            className: "flex items-center space-x-4",
                            children: (0, i.jsxs)("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center",
                                  children: (0, i.jsx)(c.A, {
                                    size: 16,
                                    className:
                                      "text-indigo-600 dark:text-indigo-400",
                                  }),
                                }),
                                (0, i.jsxs)("div", {
                                  className: "text-sm",
                                  children: [
                                    (0, i.jsx)("p", {
                                      className:
                                        "font-medium text-gray-700 dark:text-gray-300",
                                      children: (0, m.O)(A || ""),
                                    }),
                                    (0, i.jsx)("p", {
                                      className:
                                        "text-xs text-gray-500 dark:text-gray-400",
                                      children: "Connected",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("main", {
                        className:
                          "flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-800 p-4 lg:p-6",
                        children: e,
                      }),
                    ],
                  }),
                ],
              })
            : null
        );
      };
    },
    17580: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => i });
      let i = (0, s(19946).A)("users", [
        [
          "path",
          { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
        ],
        ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
        ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ]);
    },
    18186: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => i });
      let i = (0, s(19946).A)("trophy", [
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
    21239: (t, e, s) => {
      "use strict";
      s.d(e, { t: () => r });
      var i = s(25910),
        n = s(52020),
        r = new (class extends i.Q {
          #a = !0;
          #o;
          #u;
          constructor() {
            super(),
              (this.#u = (t) => {
                if (!n.S$ && window.addEventListener) {
                  let e = () => t(!0),
                    s = () => t(!1);
                  return (
                    window.addEventListener("online", e, !1),
                    window.addEventListener("offline", s, !1),
                    () => {
                      window.removeEventListener("online", e),
                        window.removeEventListener("offline", s);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#o || this.setEventListener(this.#u);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#o?.(), (this.#o = void 0));
          }
          setEventListener(t) {
            (this.#u = t),
              this.#o?.(),
              (this.#o = t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            this.#a !== t &&
              ((this.#a = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#a;
          }
        })();
    },
    25910: (t, e, s) => {
      "use strict";
      s.d(e, { Q: () => i });
      var i = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    26715: (t, e, s) => {
      "use strict";
      s.r(e),
        s.d(e, {
          QueryClientContext: () => r,
          QueryClientProvider: () => o,
          useQueryClient: () => a,
        });
      var i = s(12115),
        n = s(95155),
        r = i.createContext(void 0),
        a = (t) => {
          let e = i.useContext(r);
          if (t) return t;
          if (!e)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return e;
        },
        o = (t) => {
          let { client: e, children: s } = t;
          return (
            i.useEffect(
              () => (
                e.mount(),
                () => {
                  e.unmount();
                }
              ),
              [e]
            ),
            (0, n.jsx)(r.Provider, { value: e, children: s })
          );
        };
    },
    32843: (t, e, s) => {
      "use strict";
      s.d(e, { u: () => l });
      var i = s(5041),
        n = s(37968),
        r = s(53031),
        a = s(34250);
      let o = [];
      function u(t) {
        let e = [...t.state.connections.values()];
        return "reconnecting" === t.state.status || (0, a.b)(o, e)
          ? o
          : ((o = e), e);
      }
      var c = s(12115);
      function l() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: e } = t,
          s = (0, r.U)(t),
          o = {
            mutationFn: (t) => (0, n.Z)(s, t),
            mutationKey: ["disconnect"],
          },
          {
            mutate: l,
            mutateAsync: h,
            ...d
          } = (0, i.useMutation)({ ...e, ...o });
        return {
          ...d,
          connectors: (function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = (0, r.U)(t);
            return (0, c.useSyncExternalStore)(
              (t) =>
                (function (t, e) {
                  let { onChange: s } = e;
                  return t.subscribe(() => u(t), s, { equalityFn: a.b });
                })(e, { onChange: t }),
              () => u(e),
              () => u(e)
            );
          })({ config: s }).map((t) => t.connector),
          disconnect: l,
          disconnectAsync: h,
        };
      }
    },
    33109: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => i });
      let i = (0, s(19946).A)("trending-up", [
        ["path", { d: "M16 7h6v6", key: "box55l" }],
        ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
      ]);
    },
    34560: (t, e, s) => {
      "use strict";
      s.d(e, { $: () => o, s: () => a });
      var i = s(7165),
        n = s(57948),
        r = s(6784),
        a = class extends n.k {
          #c;
          #l;
          #h;
          constructor(t) {
            super(),
              (this.mutationId = t.mutationId),
              (this.#l = t.mutationCache),
              (this.#c = []),
              (this.state = t.state || o()),
              this.setOptions(t.options),
              this.scheduleGc();
          }
          setOptions(t) {
            (this.options = t), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#c.includes(t) ||
              (this.#c.push(t),
              this.clearGcTimeout(),
              this.#l.notify({
                type: "observerAdded",
                mutation: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            (this.#c = this.#c.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#l.notify({
                type: "observerRemoved",
                mutation: this,
                observer: t,
              });
          }
          optionalRemove() {
            this.#c.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#l.remove(this));
          }
          continue() {
            return this.#h?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            let e = () => {
              this.#d({ type: "continue" });
            };
            this.#h = (0, r.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (t, e) => {
                this.#d({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#d({ type: "pause" });
              },
              onContinue: e,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#l.canRun(this),
            });
            let s = "pending" === this.state.status,
              i = !this.#h.canStart();
            try {
              if (s) e();
              else {
                this.#d({ type: "pending", variables: t, isPaused: i }),
                  await this.#l.config.onMutate?.(t, this);
                let e = await this.options.onMutate?.(t);
                e !== this.state.context &&
                  this.#d({
                    type: "pending",
                    context: e,
                    variables: t,
                    isPaused: i,
                  });
              }
              let n = await this.#h.start();
              return (
                await this.#l.config.onSuccess?.(
                  n,
                  t,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(n, t, this.state.context),
                await this.#l.config.onSettled?.(
                  n,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(n, null, t, this.state.context),
                this.#d({ type: "success", data: n }),
                n
              );
            } catch (e) {
              try {
                throw (
                  (await this.#l.config.onError?.(
                    e,
                    t,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(e, t, this.state.context),
                  await this.#l.config.onSettled?.(
                    void 0,
                    e,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    e,
                    t,
                    this.state.context
                  ),
                  e)
                );
              } finally {
                this.#d({ type: "error", error: e });
              }
            } finally {
              this.#l.runNext(this);
            }
          }
          #d(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    failureCount: t.failureCount,
                    failureReason: t.error,
                  };
                case "pause":
                  return { ...e, isPaused: !0 };
                case "continue":
                  return { ...e, isPaused: !1 };
                case "pending":
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              i.jG.batch(() => {
                this.#c.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#l.notify({
                    mutation: this,
                    type: "updated",
                    action: t,
                  });
              });
          }
        };
      function o() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    35695: (t, e, s) => {
      "use strict";
      var i = s(18999);
      s.o(i, "usePathname") &&
        s.d(e, {
          usePathname: function () {
            return i.usePathname;
          },
        }),
        s.o(i, "useRouter") &&
          s.d(e, {
            useRouter: function () {
              return i.useRouter;
            },
          }),
        s.o(i, "useSearchParams") &&
          s.d(e, {
            useSearchParams: function () {
              return i.useSearchParams;
            },
          });
    },
    37968: (t, e, s) => {
      "use strict";
      async function i(t, e = {}) {
        let s;
        if (e.connector) s = e.connector;
        else {
          let { connections: e, current: i } = t.state,
            n = e.get(i);
          s = n?.connector;
        }
        let n = t.state.connections;
        s &&
          (await s.disconnect(),
          s.emitter.off("change", t._internal.events.change),
          s.emitter.off("disconnect", t._internal.events.disconnect),
          s.emitter.on("connect", t._internal.events.connect),
          n.delete(s.uid)),
          t.setState((t) => {
            if (0 === n.size)
              return {
                ...t,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let e = n.values().next().value;
            return { ...t, connections: new Map(n), current: e.connector.uid };
          });
        {
          let e = t.state.current;
          if (!e) return;
          let s = t.state.connections.get(e)?.connector;
          if (!s) return;
          await t.storage?.setItem("recentConnectorId", s.id);
        }
      }
      s.d(e, { Z: () => i });
    },
    39785: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => i });
      let i = (0, s(19946).A)("wallet", [
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
    50920: (t, e, s) => {
      "use strict";
      s.d(e, { m: () => r });
      var i = s(25910),
        n = s(52020),
        r = new (class extends i.Q {
          #f;
          #o;
          #u;
          constructor() {
            super(),
              (this.#u = (t) => {
                if (!n.S$ && window.addEventListener) {
                  let e = () => t();
                  return (
                    window.addEventListener("visibilitychange", e, !1),
                    () => {
                      window.removeEventListener("visibilitychange", e);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#o || this.setEventListener(this.#u);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#o?.(), (this.#o = void 0));
          }
          setEventListener(t) {
            (this.#u = t),
              this.#o?.(),
              (this.#o = t((t) => {
                "boolean" == typeof t ? this.setFocused(t) : this.onFocus();
              }));
          }
          setFocused(t) {
            this.#f !== t && ((this.#f = t), this.onFocus());
          }
          onFocus() {
            let t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#f
              ? this.#f
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    52020: (t, e, s) => {
      "use strict";
      s.d(e, {
        BH: () => y,
        Cp: () => p,
        EN: () => f,
        Eh: () => c,
        F$: () => d,
        GU: () => O,
        MK: () => l,
        S$: () => i,
        ZM: () => C,
        ZZ: () => j,
        Zw: () => r,
        d2: () => u,
        f8: () => v,
        gn: () => a,
        hT: () => M,
        j3: () => o,
        lQ: () => n,
        nJ: () => h,
        pl: () => k,
        y9: () => w,
        yy: () => x,
      });
      var i = "undefined" == typeof window || "Deno" in globalThis;
      function n() {}
      function r(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function a(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0;
      }
      function o(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function u(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function c(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function l(t, e) {
        let {
          type: s = "all",
          exact: i,
          fetchStatus: n,
          predicate: r,
          queryKey: a,
          stale: o,
        } = t;
        if (a) {
          if (i) {
            if (e.queryHash !== d(a, e.options)) return !1;
          } else if (!p(e.queryKey, a)) return !1;
        }
        if ("all" !== s) {
          let t = e.isActive();
          if (("active" === s && !t) || ("inactive" === s && t)) return !1;
        }
        return (
          ("boolean" != typeof o || e.isStale() === o) &&
          (!n || n === e.state.fetchStatus) &&
          (!r || !!r(e))
        );
      }
      function h(t, e) {
        let { exact: s, status: i, predicate: n, mutationKey: r } = t;
        if (r) {
          if (!e.options.mutationKey) return !1;
          if (s) {
            if (f(e.options.mutationKey) !== f(r)) return !1;
          } else if (!p(e.options.mutationKey, r)) return !1;
        }
        return (!i || e.state.status === i) && (!n || !!n(e));
      }
      function d(t, e) {
        return (e?.queryKeyHashFn || f)(t);
      }
      function f(t) {
        return JSON.stringify(t, (t, e) =>
          b(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, s) => ((t[s] = e[s]), t), {})
            : e
        );
      }
      function p(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            "object" == typeof t &&
            "object" == typeof e &&
            Object.keys(e).every((s) => p(t[s], e[s])))
        );
      }
      function y(t, e) {
        if (t === e) return t;
        let s = m(t) && m(e);
        if (s || (b(t) && b(e))) {
          let i = s ? t : Object.keys(t),
            n = i.length,
            r = s ? e : Object.keys(e),
            a = r.length,
            o = s ? [] : {},
            u = new Set(i),
            c = 0;
          for (let i = 0; i < a; i++) {
            let n = s ? i : r[i];
            ((!s && u.has(n)) || s) && void 0 === t[n] && void 0 === e[n]
              ? ((o[n] = void 0), c++)
              : ((o[n] = y(t[n], e[n])),
                o[n] === t[n] && void 0 !== t[n] && c++);
          }
          return n === a && c === n ? t : o;
        }
        return e;
      }
      function v(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let s in t) if (t[s] !== e[s]) return !1;
        return !0;
      }
      function m(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function b(t) {
        if (!g(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let s = e.prototype;
        return (
          !!g(s) &&
          !!s.hasOwnProperty("isPrototypeOf") &&
          Object.getPrototypeOf(t) === Object.prototype
        );
      }
      function g(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function x(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function k(t, e, s) {
        return "function" == typeof s.structuralSharing
          ? s.structuralSharing(t, e)
          : !1 !== s.structuralSharing
          ? y(t, e)
          : e;
      }
      function w(t, e, s = 0) {
        let i = [...t, e];
        return s && i.length > s ? i.slice(1) : i;
      }
      function j(t, e, s = 0) {
        let i = [e, ...t];
        return s && i.length > s ? i.slice(0, -1) : i;
      }
      var M = Symbol();
      function C(t, e) {
        return !t.queryFn && e?.initialPromise
          ? () => e.initialPromise
          : t.queryFn && t.queryFn !== M
          ? t.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`));
      }
      function O(t, e) {
        return "function" == typeof t ? t(...e) : !!t;
      }
    },
    54416: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => i });
      let i = (0, s(19946).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    57948: (t, e, s) => {
      "use strict";
      s.d(e, { k: () => n });
      var i = s(52020),
        n = class {
          #p;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, i.gn)(this.gcTime) &&
                (this.#p = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ?? (i.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#p && (clearTimeout(this.#p), (this.#p = void 0));
          }
        };
    },
    59434: (t, e, s) => {
      "use strict";
      s.d(e, { O: () => a, cn: () => r });
      var i = s(52596),
        n = s(39688);
      function r() {
        for (var t = arguments.length, e = Array(t), s = 0; s < t; s++)
          e[s] = arguments[s];
        return (0, n.QP)((0, i.$)(e));
      }
      let a = function (t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "...",
          s = t.slice(0, 6);
        return "".concat(s).concat(e).concat(t.slice(-6));
      };
    },
    73504: (t, e, s) => {
      "use strict";
      s.d(e, { T: () => n, b: () => r });
      var i = s(52020);
      function n() {
        let t,
          e,
          s = new Promise((s, i) => {
            (t = s), (e = i);
          });
        function i(t) {
          Object.assign(s, t), delete s.resolve, delete s.reject;
        }
        return (
          (s.status = "pending"),
          s.catch(() => {}),
          (s.resolve = (e) => {
            i({ status: "fulfilled", value: e }), t(e);
          }),
          (s.reject = (t) => {
            i({ status: "rejected", reason: t }), e(t);
          }),
          s
        );
      }
      function r(t) {
        let e;
        if ((t.then((t) => ((e = t), t), i.lQ)?.catch(i.lQ), void 0 !== e))
          return { data: e };
      }
    },
    93550: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => i });
      let i = (0, s(19946).A)("coins", [
        ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
        ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
        ["path", { d: "M7 6h1v4", key: "1obek4" }],
        ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
      ]);
    },
  },
  (t) => {
    var e = (e) => t((t.s = e));
    t.O(0, [2145, 7598, 6874, 5702, 6738, 8441, 1684, 7358], () => e(13662)),
      (_N_E = t.O());
  },
]);
