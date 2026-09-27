"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7327],
  {
    5041: (t, e, s) => {
      s.d(e, { useMutation: () => h });
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
      function h(t, e) {
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
          h = i.useCallback(
            (t, e) => {
              n.mutate(t, e).catch(o.lQ);
            },
            [n]
          );
        if (a.error && (0, o.GU)(n.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: h, mutateAsync: a.mutate };
      }
    },
    5196: (t, e, s) => {
      s.d(e, { A: () => i });
      let i = (0, s(19946).A)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    24357: (t, e, s) => {
      s.d(e, { A: () => i });
      let i = (0, s(19946).A)("copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    32843: (t, e, s) => {
      s.d(e, { u: () => h });
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
      function h() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: e } = t,
          s = (0, r.U)(t),
          o = {
            mutationFn: (t) => (0, n.Z)(s, t),
            mutationKey: ["disconnect"],
          },
          {
            mutate: h,
            mutateAsync: l,
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
          disconnect: h,
          disconnectAsync: l,
        };
      }
    },
    34560: (t, e, s) => {
      s.d(e, { $: () => o, s: () => a });
      var i = s(7165),
        n = s(57948),
        r = s(6784),
        a = class extends n.k {
          #a;
          #o;
          #u;
          constructor(t) {
            super(),
              (this.mutationId = t.mutationId),
              (this.#o = t.mutationCache),
              (this.#a = []),
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
            this.#a.includes(t) ||
              (this.#a.push(t),
              this.clearGcTimeout(),
              this.#o.notify({
                type: "observerAdded",
                mutation: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            (this.#a = this.#a.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#o.notify({
                type: "observerRemoved",
                mutation: this,
                observer: t,
              });
          }
          optionalRemove() {
            this.#a.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#o.remove(this));
          }
          continue() {
            return this.#u?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            let e = () => {
              this.#c({ type: "continue" });
            };
            this.#u = (0, r.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (t, e) => {
                this.#c({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#c({ type: "pause" });
              },
              onContinue: e,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#o.canRun(this),
            });
            let s = "pending" === this.state.status,
              i = !this.#u.canStart();
            try {
              if (s) e();
              else {
                this.#c({ type: "pending", variables: t, isPaused: i }),
                  await this.#o.config.onMutate?.(t, this);
                let e = await this.options.onMutate?.(t);
                e !== this.state.context &&
                  this.#c({
                    type: "pending",
                    context: e,
                    variables: t,
                    isPaused: i,
                  });
              }
              let n = await this.#u.start();
              return (
                await this.#o.config.onSuccess?.(
                  n,
                  t,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(n, t, this.state.context),
                await this.#o.config.onSettled?.(
                  n,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(n, null, t, this.state.context),
                this.#c({ type: "success", data: n }),
                n
              );
            } catch (e) {
              try {
                throw (
                  (await this.#o.config.onError?.(
                    e,
                    t,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(e, t, this.state.context),
                  await this.#o.config.onSettled?.(
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
                this.#c({ type: "error", error: e });
              }
            } finally {
              this.#o.runNext(this);
            }
          }
          #c(t) {
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
                this.#a.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#o.notify({
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
      s.d(e, { Z: () => i });
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
    },
    39785: (t, e, s) => {
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
    51154: (t, e, s) => {
      s.d(e, { A: () => i });
      let i = (0, s(19946).A)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    53904: (t, e, s) => {
      s.d(e, { A: () => i });
      let i = (0, s(19946).A)("refresh-cw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc",
          },
        ],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        [
          "path",
          {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3",
          },
        ],
        ["path", { d: "M8 16H3v5", key: "1cv678" }],
      ]);
    },
    65521: (t, e, s) => {
      s.d(e, { v: () => o });
      var i = s(12115),
        n = s(12421);
      let r = (t) => t,
        a = (t) => {
          let e = (0, n.y)(t),
            s = (t) =>
              (function (t, e = r) {
                let s = i.useSyncExternalStore(
                  t.subscribe,
                  () => e(t.getState()),
                  () => e(t.getInitialState())
                );
                return i.useDebugValue(s), s;
              })(e, t);
          return Object.assign(s, e), s;
        },
        o = (t) => (t ? a(t) : a);
    },
    80978: (t, e, s) => {
      s.d(e, { A: () => i });
      let i = (0, s(19946).A)("arrow-down-left", [
        ["path", { d: "M17 7 7 17", key: "15tmo1" }],
        ["path", { d: "M17 17H7V7", key: "1org7z" }],
      ]);
    },
  },
]);
