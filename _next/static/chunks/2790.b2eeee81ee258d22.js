"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2790],
  {
    52790: (e, t, a) => {
      a.r(t), a.d(t, { TimerItem: () => m, default: () => x });
      var l = a(95155),
        s = a(59434),
        i = a(12115),
        n = a(30285),
        r = a(86608);
      let x = () => {
          let [e, t] = (0, i.useState)(!1),
            {
              d: a,
              h: x,
              m: c,
              s: d,
            } = (0, r.A)(new Date("2025-11-01T23:59:59"));
          return (0, l.jsxs)("section", {
            className: "relative py-7 md:py-10 lg:py-20 my-7 md:my-10 lg:my-20",
            id: "tapzi-beta",
            children: [
              (0, l.jsx)("img", {
                alt: "background-left",
                src: "/image/landing/mobile-demo/gradient-left.svg",
                className:
                  "w-auto h-full object-cover object-center bottom-0 left-0 absolute",
              }),
              (0, l.jsx)("img", {
                alt: "background-left",
                src: "/image/landing/mobile-demo/gradient-right.svg",
                className:
                  "w-auto h-full object-cover object-center absolute right-0 bottom-0",
              }),
              (0, l.jsx)("div", {
                className: "container relative min-h-96 md:mx-auto mx-2",
                children: (0, l.jsxs)("div", {
                  className:
                    "flex items-center relative justify-center gap-10 sm:gap-20 flex-col lg:flex-row",
                  children: [
                    (0, l.jsxs)("div", {
                      className: (0, s.cn)(
                        "transition-all duration-100",
                        e
                          ? "opacity-0 translate-x-1 pointer-events-none absolute"
                          : "opacity-100 translate-x-0"
                      ),
                      children: [
                        (0, l.jsx)("h2", {
                          className:
                            "max-w-[450px] leading-snug text-center text-transparent font-light text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[#BFFEFF] via-[#40EBFF] to-[#578DFF] bg-clip-text",
                          children: "TAPZI BETA v0.1",
                        }),
                        (0, l.jsxs)("div", {
                          className: "mt-4",
                          children: [
                            (0, l.jsx)("h3", {
                              className:
                                "text-center max-w-[450px] leading-snug font-medium text-2xl text-white",
                              children: "Going Live in",
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "flex items-center justify-center mt-2 gap-2",
                              children: [
                                (0, l.jsx)(m, {
                                  className: "bg-[#39FE39]",
                                  value: String(a).padStart(2, "0"),
                                  label: "Days",
                                }),
                                (0, l.jsx)(m, {
                                  className: "text-white",
                                  value: String(x).padStart(2, "0"),
                                  label: "Hours",
                                }),
                                (0, l.jsx)(m, {
                                  className: "text-white",
                                  value: String(c).padStart(2, "0"),
                                  label: "Min",
                                }),
                                (0, l.jsx)(m, {
                                  className: "text-white",
                                  value: String(d).padStart(2, "0"),
                                  label: "Sec",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: (0, s.cn)("w-[85%] sm:w-[330px] relative"),
                      children: [
                        (0, l.jsx)("img", {
                          src: "/image/landing/mobile-demo/mockup.png",
                          alt: "Mockup",
                          className: "h-auto w-full",
                        }),
                        (0, l.jsxs)("div", {
                          className: (0, s.cn)(
                            "absolute inset-0 pt-40 px-6 sm:px-8 space-y-27 sm:space-y-20 transition-all duration-500",
                            e
                              ? "opacity-0 translate-x-8"
                              : "opacity-100 translate-x-0"
                          ),
                          children: [
                            (0, l.jsx)("div", {
                              className: "flex justify-center",
                              children: (0, l.jsx)("img", {
                                src: "/logo.webp",
                                alt: "Logo",
                                className: "w-auto h-14",
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "mt-10 sm:mt-24",
                              children: [
                                (0, l.jsx)("h3", {
                                  className: "text-3xl font-bold max-w-[280px]",
                                  children: "Where Skill Decide the Winner",
                                }),
                                (0, l.jsx)("p", {
                                  className: "mt-4 text-lg sm:text-base",
                                  children:
                                    "Tapzi is a revolutionary decentralized gaming platform bringing authentic competition to Web3.",
                                }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className: "flex justify-center",
                              children: (0, l.jsx)(n.$, {
                                onClick: () => t(!e),
                                className:
                                  "rounded-full bg-[#27E3E4] px-10 h-11 text-lg font-bold hover:bg-[#27E3E4CC] uppercase",
                                children: "Start now",
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: (0, s.cn)(
                            "absolute inset-0 pt-30 sm:pt-40 px-6 sm:px-8 delay-300 transition-all duration-500",
                            e
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-8 -z-1 pointer-events-none"
                          ),
                          children: [
                            (0, l.jsx)("h2", {
                              className:
                                "max-w-[450px] leading-snug text-center text-transparent font-light text-4xl bg-gradient-to-r from-[#BFFEFF] via-[#40EBFF] to-[#578DFF] bg-clip-text",
                              children: "TAPZI BETA v0.1",
                            }),
                            (0, l.jsx)("h3", {
                              className:
                                "text-center max-w-[450px] leading-snug font-medium text-2xl text-white mt-12",
                              children: "Going Live in",
                            }),
                            (0, l.jsxs)("div", {
                              className: "grid grid-cols-4 gap-2 mt-2",
                              children: [
                                (0, l.jsx)(m, {
                                  className: "bg-[#39FE39]",
                                  value: String(a).padStart(2, "0"),
                                  label: "Days",
                                  size: "md",
                                }),
                                (0, l.jsx)(m, {
                                  className: "text-white",
                                  value: String(x).padStart(2, "0"),
                                  label: "Hours",
                                  size: "md",
                                }),
                                (0, l.jsx)(m, {
                                  className: "text-white",
                                  value: String(c).padStart(2, "0"),
                                  label: "Min",
                                  size: "md",
                                }),
                                (0, l.jsx)(m, {
                                  className: "text-white",
                                  value: String(d).padStart(2, "0"),
                                  label: "Sec",
                                  size: "md",
                                }),
                              ],
                            }),
                            (0, l.jsx)("p", {
                              className:
                                "text-center text-2xl md:text-3xl mt-24 font-medium",
                              children: "Coming Soon",
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
        m = (e) => {
          let { className: t, value: a, label: i, size: n = "lg" } = e;
          return (0, l.jsxs)("div", {
            className: (0, s.cn)(
              "text-black rounded-lg bg-[#0E5BF8] py-2 px-4 md:px-6 h-fit",
              t,
              "sm" === n && "py-1 px-2",
              "md" === n && "py-2 px-2 md:px-4",
              "lg" === n && "py-2 px-4 md:px-6"
            ),
            children: [
              (0, l.jsx)("p", {
                className: (0, s.cn)(
                  "text-2xl md:text-3xl text-center font-semibold",
                  "sm" === n && "text-lg",
                  "md" === n && "text-lg md:text-xl",
                  "lg" === n && "text-2xl md:text-3xl"
                ),
                children: a,
              }),
              (0, l.jsx)("p", {
                className: (0, s.cn)(
                  "text-base text-center font-medium",
                  "sm" === n && "text-xs",
                  "md" === n && "text-sm",
                  "lg" === n && "text-base"
                ),
                children: i,
              }),
            ],
          });
        };
    },
    86608: (e, t, a) => {
      a.d(t, { A: () => s });
      var l = a(12115);
      let s = (e) => {
        let [t, a] = (0, l.useState)({ d: 0, h: 0, m: 0, s: 0 });
        return (
          (0, l.useEffect)(() => {
            let l = setInterval(() => {
              let s = new Date().getTime(),
                i = e.getTime() - s;
              if (i <= 0) {
                clearInterval(l), a({ ...t, d: 0, h: 0, m: 0, s: 0 });
                return;
              }
              let n = Math.floor(i / 864e5),
                r = Math.floor((i % 864e5) / 36e5),
                x = Math.floor((i % 36e5) / 6e4),
                m = Math.floor((i % 6e4) / 1e3);
              a({ ...t, d: n, h: r, m: x, s: m });
            }, 1e3);
            return () => clearInterval(l);
          }, [e]),
          { ...t, isExpired: () => new Date().getTime() > e.getTime() }
        );
      };
    },
  },
]);
