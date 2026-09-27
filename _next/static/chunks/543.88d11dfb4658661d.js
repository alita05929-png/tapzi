"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [543],
  {
    90543: (e, t, a) => {
      a.r(t), a.d(t, { Post: () => f, StatItem: () => j, default: () => h });
      var s = a(95155),
        r = a(59434),
        l = a(12115),
        i = a(24944),
        n = a(6874),
        d = a.n(n),
        m = a(82974),
        c = a(31996),
        o = a(34441),
        x = a(30285);
      let p = [
          {
            name: " Tapzi Dev Release #004",
            date: "September 26, 2025",
            post: "Frontend Alpha Online, Matchmaking System Designed",
            url: "https://docs.tapzi.io/tapzi-dev-release/004",
          },
          {
            name: " Tapzi Dev Release #003",
            date: "September 19, 2025",
            post: "Signature Verification Implemented, Chess Server PoC Launched",
            url: "https://docs.tapzi.io/tapzi-dev-release/003",
          },
          {
            name: " Tapzi Dev Release #002",
            date: "September 12, 2025",
            post: "Smart Contract Skeleton and Game Engine Planning Initiated",
            url: "https://docs.tapzi.io/tapzi-dev-release/002",
          },
          {
            name: " Tapzi Dev Release #001",
            date: "September 05, 2025",
            post: "Foundational Infrastructure, System Architecture & Modular Scope Initiated",
            url: "https://docs.tapzi.io/tapzi-dev-release/001",
          },
        ],
        h = () =>
          (0, s.jsxs)("section", {
            className: "container relative z-1 py-10 md:py-14 lg:py-20",
            children: [
              (0, s.jsx)("h2", {
                className:
                  "text-center font-light text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-white to-slate-500 bg-clip-text  text-transparent leading-normal",
                children: "Community + Real Time Momentum",
              }),
              (0, s.jsx)("p", {
                className: "mt-4 text-lg max-w-4xl mx-auto text-center",
                children:
                  "Join our fast-growing community of players and early supporters — where skill, fun, and rewards meet.",
              }),
              (0, s.jsx)(g, {}),
              (0, s.jsxs)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10 md:mt-12 lg:mt-16",
                children: [
                  (0, s.jsx)(u, {
                    className: "md:col-span-2 lg:col-span-3 hidden md:block",
                    title: "Latest Updates",
                    children: (0, s.jsx)("div", {
                      className:
                        "mt-6 flex flex-col gap-4 md:h-[520px] overflow-y-scroll [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                      children: p.map((e) =>
                        (0, s.jsx)(
                          f,
                          {
                            name: e.name,
                            date: e.date,
                            post: e.post,
                            url: e.url,
                          },
                          e.name
                        )
                      ),
                    }),
                  }),
                  (0, s.jsxs)(u, {
                    className: "md:col-span-2",
                    title: "Platform Stats",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "mt-6 flex flex-col gap-4",
                        children: [
                          (0, s.jsx)(j, {
                            name: "Games Played Today",
                            value: 12487,
                            text: "+23% from yesterday",
                            percent: 70,
                          }),
                          (0, s.jsx)(j, {
                            name: "Active Wallets",
                            value: 5342,
                            text: "+23% from yesterday",
                            percent: 55,
                          }),
                          (0, s.jsx)(j, {
                            name: "Global Players Online",
                            value: 2156,
                            text: "Peak hours: 6PM-10PM UTC",
                            percent: 40,
                          }),
                        ],
                      }),
                      (0, s.jsx)("h3", {
                        className:
                          "text-xl md:text-2xl lg:text-3xl font-medium text-primary-green my-6",
                        children: "Join Our Community",
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-4 md:gap-6",
                        children: [
                          (0, s.jsx)(d(), {
                            href: "https://t.me/tapzibnb",
                            target: "_blank",
                            className: "hover:text-primary-green",
                            children: (0, s.jsx)(m.hZ, {
                              className: "h-6 w-6 md:h-7 md:w-7",
                            }),
                          }),
                          (0, s.jsx)(d(), {
                            href: "https://x.com/tapzibnb",
                            target: "_blank",
                            className: "hover:text-primary-green",
                            children: (0, s.jsx)(m.Fi, {
                              className: "h-6 w-6 md:h-7 md:w-7",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        g = () => {
          let e = (0, l.useRef)(null);
          return (0, s.jsxs)("div", {
            className: "mt-6 sm:mt-8 md:mt-12 lg:mt-16 md:hidden block",
            children: [
              (0, s.jsx)("h3", {
                className:
                  "text-2xl md:text-3xl font-medium text-primary-green pb-6",
                children: "Latest Updates",
              }),
              (0, s.jsx)(c.A, {
                ...{
                  dots: !1,
                  infinite: !0,
                  arrows: !1,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
                ref: e,
                children: p.map((e) =>
                  (0, s.jsx)(
                    "div",
                    {
                      children: (0, s.jsx)(f, {
                        bordered: !0,
                        name: e.name,
                        date: e.date,
                        post: e.post,
                        url: e.url,
                      }),
                    },
                    e.name
                  )
                ),
              }),
              (0, s.jsxs)("div", {
                className: "flex justify-center items-center pt-10 gap-4",
                children: [
                  (0, s.jsx)(o.PrevButton, {
                    className: "cursor-pointer",
                    onClick: () => {
                      var t;
                      null == (t = e.current) || t.slickPrev();
                    },
                  }),
                  (0, s.jsx)(o.PrevButton, {
                    className: "rotate-180 cursor-pointer",
                    onClick: () => {
                      var t;
                      null == (t = e.current) || t.slickNext();
                    },
                  }),
                ],
              }),
            ],
          });
        },
        u = (e) => {
          let { title: t, children: a, className: l } = e;
          return (0, s.jsxs)("div", {
            style: {
              background:
                "linear-gradient(#081428, #081428) padding-box, linear-gradient(180deg, #19D4D6 0%, #694DFB 100%) border-box",
              border: "2px solid transparent",
              backdropFilter: "blur(114px)",
            },
            className: (0, r.cn)(
              "rounded-xl py-6 px-4 md:px-5 lg:px-8 w-full",
              l
            ),
            children: [
              (0, s.jsx)("h3", {
                className: "text-lg md:text-2xl font-medium text-primary-green",
                children: t,
              }),
              a,
            ],
          });
        },
        f = (e) => {
          let { name: t, post: a, date: r, url: l, bordered: i } = e,
            n = (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("a", {
                  href: l,
                  target: "_blank",
                  className: "hover:underline",
                  children: (0, s.jsx)("p", {
                    className:
                      "flex gap-1 font-bold items-baseline font-medium text-lg",
                    children: t,
                  }),
                }),
                (0, s.jsx)("p", { className: "mt-2", children: a }),
                (0, s.jsx)("div", {
                  className: "text-muted-foreground pt-4",
                  children: r,
                }),
                // (0, s.jsx)("div", {
                //   className: "flex items-center justify-start gap-10 mt-1",
                //   children: (0, s.jsx)(x.$, {
                //     asChild: !0,
                //     variant: "link",
                //     className: "px-0! text-blue-500",
                //     children: (0, s.jsx)(d(), {
                //       href: l,
                //       target: "_blank",
                //       children: "Read More",
                //     }),
                //   }),
                // }),
              ],
            });
          return i
            ? (0, s.jsx)("div", {
                style: {
                  background:
                    "linear-gradient(#081428, #081428) padding-box, linear-gradient(180deg, #19D4D6 0%, #694DFB 100%) border-box",
                  border: "2px solid transparent",
                  backdropFilter: "blur(114px)",
                },
                className:
                  "rounded-[10px] px-4 py-6 shadow-[0px_0px_90px_0px_#55555533_inset] bg-gradient-to-b from-white/0 to-white/4 shadow-lg mx-1",
                children: n,
              })
            : (0, s.jsx)("div", {
                className:
                  "rounded-[10px] px-4 py-6 shadow-[0px_0px_90px_0px_#55555533_inset] bg-gradient-to-b from-white/0 to-white/4 shadow-lg",
                children: n,
              });
        },
        j = (e) => {
          let { name: t, value: a, percent: r, text: l } = e;
          return (0, s.jsxs)("div", {
            className:
              "bg-gradient-to-b from-white/0 to-white/4 shadow-lg rounded-lg px-4 py-6",
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-center justify-between text-lg",
                children: [
                  (0, s.jsx)("p", { children: t }),
                  (0, s.jsx)("p", {
                    className: "text-xs",
                    children: "Coming soon",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "flex items-center gap-1 my-1",
                children: (0, s.jsx)(i.k, {
                  className: "h-[7px] bg-primary-green/15",
                  indicatorClassName: "bg-primary-green",
                  value: r,
                }),
              }),
              (0, s.jsx)("p", { children: l }),
            ],
          });
        };
    },
  },
]);
