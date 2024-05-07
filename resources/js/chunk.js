"use strict";
(self.webpackChunkplex_web_client = self.webpackChunkplex_web_client || []).push([
    [6693],
    {
        68672: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(22222),
                n = r(92645),
                a = r(1998);
            function i() {
                return (0, l.P1)(
                    (0, n.Z)(),
                    (e, { sourceDirectoryID: t }) => t,
                    (e, t) => (0, a.Z)(e, t)
                );
            }
        },
        91569: (e, t, r) => {
            r.d(t, { Z: () => d });
            var l = r(67294),
                n = r(71968),
                a = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                s = Object.prototype.propertyIsEnumerable,
                c = (e, t, r) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            function u(e) {
                return l.createElement(
                    n.Z,
                    ((e, t) => {
                        for (var r in t || (t = {})) o.call(t, r) && c(e, r, t[r]);
                        if (i) for (var r of i(t)) s.call(t, r) && c(e, r, t[r]);
                        return e;
                    })({}, e)
                );
            }
            u.defaultProps = { className: "PageHeaderBadge-badge-Odac7M" };
            const d = u;
        },
        37368: (e, t, r) => {
            r.d(t, { Z: () => o });
            var l = r(13469),
                n = r.n(l),
                a = r(11133),
                i = r(20361);
            function o(e) {
                const { getCellHeights: t, overscan: r = 0, outerPaddingTop: l = 0, outerPaddingRight: o = 0, outerPaddingBottom: s = 0, outerPaddingLeft: c = 0 } = e;
                let u, d, m, p, y, v, f, b, Z;
                function h(e) {
                    const t = n().findIndex(y, (t) => t > e),
                        r = y.length - 1;
                    return -1 === t ? r : Math.min(Math.max(0, t - 1), r);
                }
                return {
                    getListStyle: function (e) {
                        const r = `${e.viewportHeight}:${e.viewportWidth}`;
                        if (r === v) return f;
                        (u = e.viewportHeight), (d = e.viewportWidth - (c + o)), (m = t(d)), (y = []);
                        let n = l;
                        return (
                            m.forEach((e) => {
                                y.push(n), (n += e);
                            }),
                                (p = m.reduce((e, t) => e + t, l + s)),
                                (v = r),
                                (f = { height: p, width: d }),
                                f
                        );
                    },
                    getLandmarks: function () {
                        (0, a.Z)(void 0 !== u, "`getListStyle` must be called before `getLandmarks`");
                        const e = `${u}:${p}`;
                        return e === b || ((b = e), (Z = y.map((e, t) => ({ index: t, position: e / p })))), Z;
                    },
                    getPositionForIndex: function (e) {
                        return (0, a.Z)(void 0 !== u, "`getListStyle` must be called before `getPositionForIndex`"), { cellX: c, cellY: y[e], cellWidth: d, cellHeight: m[e] };
                    },
                    getRelativeIndex: function () {
                        (0, a.Z)(!1, "Stacked layouts do not support relative indexing");
                    },
                    getRangesForPosition: function (e, t, l) {
                        (0, a.Z)(void 0 !== u, "`getListStyle` must be called before `getPositionForIndex`");
                        const n = e + u - 1,
                            o = h(e - r * u),
                            s = h(e),
                            c = h(n),
                            d = h(n + r * u);
                        return {
                            visibleStartIndex: (0, i.Z)(s, l),
                            visibleEndIndex: (0, i.Z)(c, l),
                            partiallyVisibleStartIndex: (0, i.Z)(s, l),
                            partiallyVisibleEndIndex: (0, i.Z)(c, l),
                            renderStartIndex: (0, i.Z)(o, l),
                            renderEndIndex: (0, i.Z)(d, l),
                        };
                    },
                };
            }
        },
        92129: (e, t, r) => {
            function l(e, t) {
                if (e && e.pivots) return e.pivots.find((e) => e.key === t);
            }
            r.d(t, { Z: () => l });
        },
        37280: (e, t, r) => {
            r.d(t, { Z: () => y });
            var l = r(67294),
                n = r(2107),
                a = r(66629),
                i = r(99923),
                o = r(27308),
                s = r(52761),
                c = r(13500),
                u = r(25901),
                d = r(26687),
                m = r(47605),
                p = r(39537);
            function y({ type: e }) {
                switch (e) {
                    case p.pG.Movie:
                        return l.createElement(n.default, null);
                    case p.pG.Show:
                    case p.pG.Season:
                    case p.pG.Episode:
                        return l.createElement(a.default, null);
                    case p.pG.Artist:
                        return l.createElement(i.default, null);
                    case p.pG.Album:
                    case p.pG.Track:
                        return l.createElement(o.default, null);
                    case p.pG.Photo:
                    case p.pG.PhotoAlbum:
                        return l.createElement(s.default, null);
                    case p.pG.Clip:
                        return l.createElement(c.default, null);
                    case p.pG.Playlist:
                        return l.createElement(u.default, null);
                    case p.pG.Author:
                    case p.pG.Audiobook:
                    case p.pG.Chapter:
                        return l.createElement(d.default, null);
                    default:
                        return l.createElement(m.default, null);
                }
            }
        },
        76950: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(67294),
                n = r(28216),
                a = r(93788);
            function i(e, t) {
                const r = (0, l.useMemo)(() => (t ? (0, a.Z)(e, t) : () => {}), [t, e]);
                return !!(0, n.v9)(r) || !!(null == t ? void 0 : t.refreshing);
            }
        },
        52026: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(22222),
                n = r(72759),
                a = r(75364);
            const i = function (e, t) {
                return (0, l.P1)((0, a.Z)(e), (e) => e.find((e) => e.type === n.JW && e.Context.identifier === t.identifier));
            };
        },
        93788: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(22222),
                n = r(72759),
                a = r(75364);
            const i = function (e, t) {
                return (0, l.P1)((0, a.Z)(e), (e) => e.find((e) => e.type === n.QX && e.Context.librarySectionID === t.id));
            };
        },
        34581: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(22222),
                n = r(86953),
                a = r(11909);
            const i = (0, r(70617).Z)(function (e, t, r) {
                return (0, l.P1)(a.Z, (l) => {
                    const a = r ? (0, n.Z)({ serverIdentifier: e, providerIdentifier: t, key: r }) : void 0;
                    return a ? l[a] : void 0;
                });
            });
        },
        11909: (e, t, r) => {
            r.d(t, { Z: () => l });
            const l = (0, r(77927).Z)("savedDirectoryListKeys");
        },
        63098: (e, t, r) => {
            r.d(t, { Z: () => p });
            var l = r(94184),
                n = r.n(l),
                a = r(67294),
                i = r(96937),
                o = r(89328);
            var s = Object.defineProperty,
                c = Object.getOwnPropertySymbols,
                u = Object.prototype.hasOwnProperty,
                d = Object.prototype.propertyIsEnumerable,
                m = (e, t, r) => (t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            function p(e) {
                var t = e,
                    { isSelected: r, isSecondary: l, children: s } = t,
                    p = ((e, t) => {
                        var r = {};
                        for (var l in e) u.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && c) for (var l of c(e)) t.indexOf(l) < 0 && d.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(t, ["isSelected", "isSecondary", "children"]);
                return a.createElement(
                    i.Z,
                    ((e, t) => {
                        for (var r in t || (t = {})) u.call(t, r) && m(e, r, t[r]);
                        if (c) for (var r of c(t)) d.call(t, r) && m(e, r, t[r]);
                        return e;
                    })({ className: n()("TabButton-button-KPkGEB Button-button-Eu0WcX Link-link-vSsQW1", r && "TabButton-selected-wnNjlr", l && "TabButton-secondary-qrXAf0"), size: o.Z.Small }, p),
                    s
                );
            }
        },
        93564: (e, t, r) => {
            r.d(t, { Z: () => o });
            var l = r(67294),
                n = r(50465),
                a = r(18763),
                i = r(5562);
            function o({ isAscending: e = !0 }) {
                const t = e ? n.default : a.default;
                return l.createElement("div", { className: "IconTableHeaderSortDirection-sortDirectionIcon-lpcD5T" }, l.createElement(t, { "aria-label": e ? (0, i.Z)("Ascending") : (0, i.Z)("Descending") }));
            }
        },
        99711: (e, t, r) => {
            r.d(t, { Z: () => m });
            var l = r(67294);
            const n = { tableHeader: "TableHeader-tableHeader-DV7Uvw" };
            var a = Object.defineProperty,
                i = Object.defineProperties,
                o = Object.getOwnPropertyDescriptors,
                s = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                u = Object.prototype.propertyIsEnumerable,
                d = (e, t, r) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            function m(e) {
                var t,
                    r = e,
                    { className: a = n.tableHeader } = r,
                    m = ((e, t) => {
                        var r = {};
                        for (var l in e) c.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && s) for (var l of s(e)) t.indexOf(l) < 0 && u.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(r, ["className"]);
                return l.createElement(
                    "div",
                    ((t = ((e, t) => {
                        for (var r in t || (t = {})) c.call(t, r) && d(e, r, t[r]);
                        if (s) for (var r of s(t)) u.call(t, r) && d(e, r, t[r]);
                        return e;
                    })({}, m)),
                        i(t, o({ className: a })))
                );
            }
        },
        81179: (e, t, r) => {
            r.d(t, { Z: () => m });
            var l = r(67294);
            const n = {
                tableHeaderCell: "TableHeaderCell-tableHeaderCell-LXfAh8 TableCell-tableCell-eytlAB",
                activeTableHeaderCell: "TableHeaderCell-activeTableHeaderCell-jjqwYB TableHeaderCell-tableHeaderCell-LXfAh8 TableCell-tableCell-eytlAB",
            };
            var a = Object.defineProperty,
                i = Object.defineProperties,
                o = Object.getOwnPropertyDescriptors,
                s = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                u = Object.prototype.propertyIsEnumerable,
                d = (e, t, r) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            function m(e) {
                var t = e,
                    { className: r = n.tableHeaderCell, activeClassName: a = n.activeTableHeaderCell, children: m, isActive: p = !1 } = t,
                    y = ((e, t) => {
                        var r = {};
                        for (var l in e) c.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && s) for (var l of s(e)) t.indexOf(l) < 0 && u.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(t, ["className", "activeClassName", "children", "isActive"]);
                const v = p ? a : r;
                return l.createElement(
                    "span",
                    ((f = ((e, t) => {
                        for (var r in t || (t = {})) c.call(t, r) && d(e, r, t[r]);
                        if (s) for (var r of s(t)) u.call(t, r) && d(e, r, t[r]);
                        return e;
                    })({}, y)),
                        i(f, o({ className: v }))),
                    m
                );
                var f;
            }
        },
        46620: (e, t, r) => {
            r.d(t, { Z: () => p });
            var l = r(67294),
                n = r(74257);
            const a = { tableHeaderLink: "TableHeaderLink-tableHeaderLink-ZM1qnf Link-link-vSsQW1" };
            var i = Object.defineProperty,
                o = Object.defineProperties,
                s = Object.getOwnPropertyDescriptors,
                c = Object.getOwnPropertySymbols,
                u = Object.prototype.hasOwnProperty,
                d = Object.prototype.propertyIsEnumerable,
                m = (e, t, r) => (t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            function p(e) {
                var t,
                    r = e,
                    { className: i = a.tableHeaderLink, children: p } = r,
                    y = ((e, t) => {
                        var r = {};
                        for (var l in e) u.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && c) for (var l of c(e)) t.indexOf(l) < 0 && d.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(r, ["className", "children"]);
                return l.createElement(
                    n.Z,
                    ((t = ((e, t) => {
                        for (var r in t || (t = {})) u.call(t, r) && m(e, r, t[r]);
                        if (c) for (var r of c(t)) d.call(t, r) && m(e, r, t[r]);
                        return e;
                    })({}, y)),
                        o(t, s({ className: i }))),
                    p
                );
            }
        },
        93965: (e, t, r) => {
            r.d(t, { Z: () => m });
            var l = r(67294);
            const n = { tableHeaderTitle: "TableHeaderTitle-tableHeaderTitle-YBbHuP" };
            var a = Object.defineProperty,
                i = Object.defineProperties,
                o = Object.getOwnPropertyDescriptors,
                s = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                u = Object.prototype.propertyIsEnumerable,
                d = (e, t, r) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            function m(e) {
                var t,
                    r = e,
                    { className: a = n.tableHeaderTitle, children: m } = r,
                    p = ((e, t) => {
                        var r = {};
                        for (var l in e) c.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && s) for (var l of s(e)) t.indexOf(l) < 0 && u.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(r, ["className", "children"]);
                return l.createElement(
                    "span",
                    ((t = ((e, t) => {
                        for (var r in t || (t = {})) c.call(t, r) && d(e, r, t[r]);
                        if (s) for (var r of s(t)) u.call(t, r) && d(e, r, t[r]);
                        return e;
                    })({}, p)),
                        i(t, o({ className: a }))),
                    m
                );
            }
        },
        23201: (e, t, r) => {
            r.d(t, { Z: () => H });
            var l = r(67294),
                n = r(28216),
                a = r(81079),
                i = r(52725),
                o = r(60316),
                s = r(5562),
                c = r(19698),
                u = r(50057),
                d = r(35210),
                m = r(26636),
                p = r(31235),
                y = r(96937),
                v = r(76512),
                f = r(2200),
                b = r(19595),
                Z = r(89186),
                h = r(13517),
                g = r(56077),
                E = r(80367),
                P = r(41768),
                S = r(47124),
                C = r(32498),
                O = r(15397),
                I = r(88346),
                w = r(56146),
                T = r(22222),
                k = r(49228);
            const N = (0, T.P1)(k.Z, (e) => e.directory.hubsList);
            var M = r(93572);
            const D = (0, T.P1)(N, M.Z, (e, t) => e.hubs.map((e) => t[e.sourceURI]).every((e) => !e || (e.isPopulated && 0 === e.totalSize)));
            var R = r(6642),
                j = r(17867),
                A = r(81383),
                x = r(65625);
            function F(e) {
                return !!e && e <= Date.now() - 864e5;
            }
            function L({ children: e, hub: t }) {
                const [, , r] = (0, p.c9)(),
                    { metricsContextTuple: n } = (0, f.Zn)(),
                    a = r && t.key ? (0, c.Z)(t.source, { key: t.key, pageType: m.F6.List, source: r.id, context: (0, f.VJ)(n) }) : void 0;
                return l.createElement(d.Z, { href: a, hub: t }, e);
            }
            function H({ sourceURI: e }) {
                const t = (0, n.I0)(),
                    [r, c, d] = (0, p.c9)(),
                    { lastFetchedAt: m, sourceURI: f, hubs: T, isPopulated: k, error: M } = (0, n.v9)(N),
                    H = (0, n.v9)(a.Z),
                    V = (0, n.v9)(j.Z),
                    z = (0, n.v9)(D),
                    U = (0, o.Z)(e),
                    B = (0, l.useCallback)(() => {
                        t(I.Z.actions.fetchHubsRequested({ server: r, provider: c, contentDirectory: d, sourceURI: e }));
                    }, [d, t, c, r, e]);
                if (
                    ((0, b.Z)({}, k),
                        (0, w.Z)(B),
                        (0, l.useEffect)(() => {
                            k && (F(m) || e !== f) && t(I.Z.actions.resetHubs());
                        }, [t, m, f, e, k]),
                        (0, l.useEffect)(() => {
                            e !== f && t(I.Z.actions.fetchHubsRequested({ server: r, provider: c, contentDirectory: d, sourceURI: e }));
                        }, [d, t, f, r, e]),
                        (0, l.useEffect)(
                            () => (
                                t(I.Z.actions.markHubsStaleCanceled()),
                                    () => {
                                        t(I.Z.actions.markHubsStaleRequested());
                                    }
                            ),
                            [t]
                        ),
                    F(m) || e !== f || (!k && !M))
                )
                    return l.createElement(h.Z, null, l.createElement(P.Z, null));
                if (M) {
                    const { status: e } = M;
                    return 404 === e ? l.createElement(g.Z, null) : l.createElement(E.Z, null, l.createElement(y.Z, { kind: S.Z.Primary, onPress: B }, (0, s.Z)("Retry")));
                }
                return k && z
                    ? (null == d ? void 0 : d.id) === i.nc
                        ? H
                            ? l.createElement(O.Z, null)
                            : l.createElement(A.Z, { onDone: B })
                        : l.createElement(C.Z, { directoryKey: U.key })
                    : l.createElement(
                        l.Fragment,
                        null,
                        V ? l.createElement(R.Z, null) : null,
                        l.createElement(
                            Z.Z,
                            { className: "DirectoryHubsPageContent-pageContentScroller-jceJrG PageContent-pageContentScroller-dvaH3C Scroller-scroller-S6_dko" },
                            l.createElement(x.Z, { className: "DirectoryHubsPageContent-banner-FcMafX ProgramGuideGracenoteMigrationBanner-container-NePMOu", providerEntityID: c.entityID, serverEntityID: r.entityID }),
                            l.createElement(v.Z, { hubComponent: u.Z, hubTitleComponent: L, hubs: T })
                        )
                    );
            }
        },
        31764: (e, t, r) => {
            r.d(t, { Z: () => mi });
            var l = r(67294),
                n = r(28216),
                a = r(52725),
                i = r(86953),
                o = r(70515),
                s = r(54304),
                c = r(27082),
                u = r(84936),
                d = r(12415),
                m = r(10692),
                p = r(41538),
                y = r(76033),
                v = r(31235),
                f = r(26021),
                b = r(46906),
                Z = r(30544),
                h = r(19595),
                g = r(13517),
                E = r(56077),
                P = r(80367),
                S = r(41768),
                C = r(7163),
                O = r(85002),
                I = r(2200),
                w = r(8980),
                T = r(7796),
                k = Object.defineProperty,
                N = Object.getOwnPropertySymbols,
                M = Object.prototype.hasOwnProperty,
                D = Object.prototype.propertyIsEnumerable,
                R = (e, t, r) => (t in e ? k(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            const j = parseInt(T.Z.v4PagePadding, 10);
            function A({ className: e, items: t, totalSize: r, scrollerKey: n, smoothScroll: a, targetScrollIndex: i, onPageRequest: o, onListReady: s }) {
                const c = (0, l.useMemo)(() => (0, O.Z)({ outerPaddingLeft: j }), []),
                    u = (0, l.useCallback)(
                        (e) =>
                            l.createElement(
                                I.ZP,
                                { key: e.key, row: e.row },
                                l.createElement(
                                    C.Z,
                                    ((e, t) => {
                                        for (var r in t || (t = {})) M.call(t, r) && R(e, r, t[r]);
                                        if (N) for (var r of N(t)) D.call(t, r) && R(e, r, t[r]);
                                        return e;
                                    })({}, e)
                                )
                            ),
                        []
                    );
                return l.createElement(w.Z, {
                    autoScroll: !1,
                    cellComponentFactory: u,
                    className: e,
                    items: t,
                    keyPropName: "listItemKey",
                    layout: c,
                    scrollerKey: n,
                    smoothScroll: a,
                    targetScrollIndex: i,
                    totalSize: r,
                    onListReady: s,
                    onPageRequest: o,
                });
            }
            var x = r(39597),
                F = r(26098),
                L = r(19645),
                H = r(54778),
                V = r(92898),
                z = r(50327),
                U = r(46396),
                B = r(94173),
                K = r(52924);
            const G = function (e) {
                switch (e) {
                    case B.oz:
                        return 114;
                    case B.s4:
                        return 64;
                    case B.Zp:
                        return 74;
                }
                (0, K.Z)(!1, `Unknown aspectRatio ${e}`);
            };
            var q = r(85180),
                W = r(74257),
                _ = r(39272),
                Q = r(21917),
                $ = r(77045),
                X = r(48433),
                Y = r(79024);
            function J({ metadataItem: e, style: t, cellIndex: r }) {
                const n = (0, Y.Z)({ key: e.key }),
                    [a, i] = (0, $.Z)(),
                    o = (0, B.ZP)(p.U.Folder),
                    s = (0, q.Z)({ width: G(o), aspectRatio: o });
                return l.createElement(
                    X.Z,
                    { ref: i, isAlternate: !!(r % 2), isHovered: a, style: t },
                    l.createElement(W.Z, { "aria-label": (0, U.Z)(e), className: "MetadataFolderDetailsRow-underlay-aDQzWl Link-link-vSsQW1", to: n }),
                    l.createElement(
                        "div",
                        { className: "MetadataFolderDetailsRow-overlay-J69mWx" },
                        l.createElement(
                            "div",
                            { className: "MetadataFolderDetailsRow-posterContainer-ebw5Z5" },
                            l.createElement(_.Z, { style: s }, l.createElement(Q.Z, { height: s.height, width: s.width }, l.createElement(V.default, null)))
                        ),
                        l.createElement("div", { className: "MetadataFolderDetailsRow-titlesContainer-QAN0LS" }, l.createElement(z.Z, { allowLink: !1, className: "MetadataFolderDetailsRow-doubleTitle-SdFwBk", metadataItem: e }))
                    )
                );
            }
            var ee = Object.getOwnPropertySymbols,
                te = Object.prototype.hasOwnProperty,
                re = Object.prototype.propertyIsEnumerable;
            function le(e) {
                var t = e,
                    { item: r } = t,
                    n = ((e, t) => {
                        var r = {};
                        for (var l in e) te.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && ee) for (var l of ee(e)) t.indexOf(l) < 0 && re.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(t, ["item"]);
                const a = (0, F.Z)(null == r ? void 0 : r.sourceURI),
                    i = (0, H.Z)(n),
                    { cellIndex: o } = n;
                return r ? l.createElement(x.Z, { metadataItem: r, metadataItemState: a }, l.createElement(J, { cellIndex: o, metadataItem: r, style: i.style })) : l.createElement(L.Z, { index: o, style: i.style });
            }
            var ne = Object.defineProperty,
                ae = Object.getOwnPropertySymbols,
                ie = Object.prototype.hasOwnProperty,
                oe = Object.prototype.propertyIsEnumerable,
                se = (e, t, r) => (t in e ? ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
                ce = (e, t) => {
                    for (var r in t || (t = {})) ie.call(t, r) && se(e, r, t[r]);
                    if (ae) for (var r of ae(t)) oe.call(t, r) && se(e, r, t[r]);
                    return e;
                };
            const ue = parseInt(T.Z.v4PagePadding, 10);
            function de({ className: e, items: t, totalSize: r, scrollerKey: n, smoothScroll: a, targetScrollIndex: i, onPageRequest: o, onListReady: s }) {
                const c = (0, l.useMemo)(() => (0, O.Z)({ outerPaddingLeft: ue }), []),
                    u = (0, l.useCallback)((e) => {
                        var t;
                        return l.createElement(I.ZP, { key: e.key, row: e.row }, (null == (t = e.item) ? void 0 : t.isFolder) ? l.createElement(le, ce({}, e)) : l.createElement(C.Z, ce({}, e)));
                    }, []);
                return l.createElement(w.Z, {
                    autoScroll: !1,
                    cellComponentFactory: u,
                    className: e,
                    items: t,
                    keyPropName: "listItemKey",
                    layout: c,
                    scrollerKey: n,
                    smoothScroll: a,
                    targetScrollIndex: i,
                    totalSize: r,
                    onListReady: s,
                    onPageRequest: o,
                });
            }
            var me = r(49223),
                pe = r(40391),
                ye = r(87892),
                ve = r(72089),
                fe = r(75212),
                be = Object.defineProperty,
                Ze = Object.getOwnPropertySymbols,
                he = Object.prototype.hasOwnProperty,
                ge = Object.prototype.propertyIsEnumerable,
                Ee = (e, t, r) => (t in e ? be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
                Pe = (e, t) => {
                    for (var r in t || (t = {})) he.call(t, r) && Ee(e, r, t[r]);
                    if (Ze) for (var r of Ze(t)) ge.call(t, r) && Ee(e, r, t[r]);
                    return e;
                };
            const Se = parseInt(T.Z.v4PagePadding, 10),
                Ce = parseInt(T.Z.v4PagePaddingAlt, 10),
                Oe = parseInt(T.Z.jumpBarGutter, 10);
            function Ie({ className: e, listType: t, subtype: r, items: a, totalSize: i, scrollerKey: o, smoothScroll: s, targetScrollIndex: c, onPageRequest: u, onListReady: m }) {
                const p = (0, n.v9)(fe.Z),
                    { containerMeta: y, listStyle: v } = (0, d.U)(),
                    f = (0, l.useMemo)(
                        () =>
                            (0, ye.Z)({
                                listType: t,
                                subtype: r,
                                columnWidth: p,
                                listStyle: v,
                                displayFields: null == y ? void 0 : y.DisplayFields,
                                displayImages: null == y ? void 0 : y.DisplayImage,
                                outerPaddingTop: Ce,
                                outerPaddingBottom: Ce,
                                outerPaddingRight: Se - Oe,
                            }),
                        [t, r, p, v, null == y ? void 0 : y.DisplayFields, null == y ? void 0 : y.DisplayImage]
                    ),
                    b = (0, l.useCallback)((e) => l.createElement(I.ZP, { key: e.key, column: e.column, row: e.row }, (0, ve.Z)(t) ? l.createElement(me.Z, Pe({}, e)) : l.createElement(pe.Z, Pe({}, e))), [t]);
                return l.createElement(w.Z, {
                    autoScroll: !1,
                    cellComponentFactory: b,
                    className: e,
                    items: a,
                    keyPropName: "listItemKey",
                    layout: f,
                    scrollerKey: o,
                    smoothScroll: s,
                    targetScrollIndex: c,
                    totalSize: i,
                    onListReady: m,
                    onPageRequest: u,
                });
            }
            var we = r(5562),
                Te = r(63696),
                ke = r(26512),
                Ne = r(70271),
                Me = r(37280),
                De = r(38648),
                Re = r(13550);
            function je({ className: e, metadataItem: t }) {
                const r = (0, Re.Z)(t);
                return r ? l.createElement("span", { className: e, title: r }, r) : null;
            }
            var Ae = r(99111),
                xe = r(97541),
                Fe = r(35472),
                Le = r(39537),
                He = r(1811),
                Ve = r(42423);
            function ze({ metadataItem: e, metadataItemState: t, style: r, cellIndex: n }) {
                const [a, i] = (0, v.c9)(),
                    o = (0, xe.Z)(null == e ? void 0 : e.sourceURI),
                    s = (0, Fe.Z)(e, "key"),
                    c = (0, ke.Z)(a, i, null, { key: e.key }),
                    { hoverRef: u, actionsMenuButtonID: d, isHovered: m, isActionsPending: p, isActionsVisible: y, isActionsMenuOpen: f, onActionsMenuClose: b, onActionsMenuCloseComplete: Z, onActionsMenuToggle: h } = (0, Ae.Z)({
                        server: a,
                        provider: i,
                        metadataItem: e,
                        metadataItemState: t,
                    }),
                    { type: g, subtype: E } = e,
                    P = (0, B.ZP)(g, E),
                    S = (0, q.Z)({ width: G(P), aspectRatio: P });
                return l.createElement(
                    X.Z,
                    { ref: u, isAlternate: !!(n % 2), isHovered: m, style: r },
                    (!e.directory && s) || e.directory ? l.createElement(W.Z, { "aria-label": (0, U.Z)(e), className: "MetadataSharedItemRow-underlay-Tqhyu4 Link-link-vSsQW1", to: e.directory ? c : s }) : null,
                    l.createElement(
                        "div",
                        { className: "MetadataSharedItemRow-overlay-pr_MeS" },
                        l.createElement(
                            "div",
                            { className: "MetadataSharedItemRow-summaryContainer-ZBZI2f" },
                            e.directory
                                ? l.createElement(
                                    "div",
                                    { className: "MetadataSharedItemRow-posterContainer-EGv3A4" },
                                    l.createElement(_.Z, { style: S }, l.createElement(Q.Z, { height: S.height, width: S.width }, l.createElement(Me.Z, { type: e.type })))
                                )
                                : l.createElement(
                                    "div",
                                    { className: "MetadataSharedItemRow-playPosterContainer-EXeRJG MetadataSharedItemRow-posterContainer-EGv3A4" },
                                    l.createElement(Ne.Z, {
                                        aspectRatio: P,
                                        height: S.height,
                                        isPlayButtonCard: !0,
                                        isSelectHidden: !0,
                                        metadataItem: e,
                                        metadataItemState: t,
                                        metadataTimelineState: o,
                                        playCircleClassName: "MetadataSharedItemRow-playCircle-nS3hcH MetadataPosterCardActions-playCircle-rOnuVA PlayButton-playCircle-fK1f_v MetadataPosterCardCircle-cardCircle-gBHNQG",
                                        width: S.width,
                                    })
                                ),
                            l.createElement(
                                "div",
                                { className: "MetadataSharedItemRow-titlesContainer-jAtkbB" },
                                l.createElement(
                                    "div",
                                    { className: "MetadataSharedItemRow-titleContainer-LulCGZ" },
                                    l.createElement(je, { className: "MetadataSharedItemRow-doubleTitle-wTKbOt MetadataSharedItemRow-title-v21y4N", metadataItem: e })
                                ),
                                l.createElement(
                                    "div",
                                    { className: "MetadataSharedItemRow-subtitle-Cb0Qkn MetadataSharedItemRow-titleContainer-LulCGZ MetadataSharedItemRow-title-v21y4N" },
                                    l.createElement(
                                        "span",
                                        null,
                                        (function (e) {
                                            if (e.directory)
                                                switch (e.type) {
                                                    case Le.pG.Movie:
                                                        return (0, we.Z)("Movie Library");
                                                    case Le.pG.Show:
                                                        return (0, we.Z)("Show Library");
                                                    case Le.pG.Artist:
                                                        return (0, we.Z)("Music Library");
                                                    case Le.pG.Photo:
                                                        return (0, we.Z)("Photo Library");
                                                }
                                            return (0, He.Z)(e.type, e.subtype);
                                        })(e)
                                    ),
                                    e.editionTitle ? l.createElement(l.Fragment, null, l.createElement(Te.Z, null), l.createElement("span", null, e.editionTitle)) : null
                                )
                            ),
                            y && !e.directory
                                ? l.createElement(
                                    "div",
                                    { className: "MetadataSharedItemRow-actions-s5Cg3A" },
                                    l.createElement(Ve.Z, { className: "MetadataSharedItemRow-actionsButton-M0no3e Link-link-vSsQW1", "data-testid": "sharedItemMoreButton", id: d, isPending: p, onPress: h })
                                )
                                : null
                        )
                    ),
                    l.createElement(De.Z, { actionsOverride: { isPlayVisible: !1, isEditVisible: !1 }, isOpen: f, metadataItem: e, target: d, onMenuClose: b, onMenuCloseComplete: Z })
                );
            }
            var Ue = Object.getOwnPropertySymbols,
                Be = Object.prototype.hasOwnProperty,
                Ke = Object.prototype.propertyIsEnumerable;
            function Ge(e) {
                var t = e,
                    { item: r } = t,
                    n = ((e, t) => {
                        var r = {};
                        for (var l in e) Be.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && Ue) for (var l of Ue(e)) t.indexOf(l) < 0 && Ke.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(t, ["item"]);
                const a = (0, F.Z)(null == r ? void 0 : r.sourceURI),
                    i = (0, H.Z)(n),
                    { cellIndex: o } = n;
                return r ? l.createElement(x.Z, { metadataItem: r, metadataItemState: a }, l.createElement(ze, { cellIndex: o, metadataItem: r, metadataItemState: a, style: i.style })) : l.createElement(L.Z, { index: o, style: i.style });
            }
            var qe = Object.defineProperty,
                We = Object.getOwnPropertySymbols,
                _e = Object.prototype.hasOwnProperty,
                Qe = Object.prototype.propertyIsEnumerable,
                $e = (e, t, r) => (t in e ? qe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            const Xe = parseInt(T.Z.v4PagePadding, 10);
            function Ye({ className: e, items: t, totalSize: r, scrollerKey: n, smoothScroll: a, targetScrollIndex: i, onPageRequest: o, onListReady: s }) {
                const c = (0, l.useMemo)(() => (0, O.Z)({ outerPaddingLeft: Xe }), []),
                    u = (0, l.useCallback)(
                        (e) =>
                            l.createElement(
                                I.ZP,
                                { key: e.key, row: e.row },
                                l.createElement(
                                    Ge,
                                    ((e, t) => {
                                        for (var r in t || (t = {})) _e.call(t, r) && $e(e, r, t[r]);
                                        if (We) for (var r of We(t)) Qe.call(t, r) && $e(e, r, t[r]);
                                        return e;
                                    })({}, e)
                                )
                            ),
                        []
                    );
                return l.createElement(w.Z, {
                    autoScroll: !1,
                    cellComponentFactory: u,
                    className: e,
                    items: t,
                    keyPropName: "listItemKey",
                    layout: c,
                    scrollerKey: n,
                    smoothScroll: a,
                    targetScrollIndex: i,
                    totalSize: r,
                    onListReady: s,
                    onPageRequest: o,
                });
            }
            var Je = r(23381),
                et = r(21480),
                tt = r(76714),
                rt = r(41542),
                lt = r(61313),
                nt = r(4134),
                at = r(94372),
                it = r(75534),
                ot = r(2098),
                st = r(46905),
                ct = r(93564),
                ut = r(99711),
                dt = r(81179),
                mt = r(46620),
                pt = r(93965),
                yt = r(77927),
                vt = r(80594);
            const ft = function (e, t) {
                    return e
                        ? e.reduce((e, r) => {
                            const l = vt.ZP.find((e) => r.key === e.ascKey && r.descKey === e.descKey);
                            return !l || (t && !t.includes(l.key)) || e.push({ sort: r, tableColumn: l }), e;
                        }, [])
                        : [];
                },
                bt = function (e) {
                    return e.active ? (e.activeDirection === ot.Sr.Ascending ? e.descKey : e.key) : e.defaultDirection === ot.Sr.Ascending ? e.key : e.descKey;
                };
            var Zt = r(12038);
            var ht = Object.defineProperty,
                gt = Object.defineProperties,
                Et = Object.getOwnPropertyDescriptors,
                Pt = Object.getOwnPropertySymbols,
                St = Object.prototype.hasOwnProperty,
                Ct = Object.prototype.propertyIsEnumerable,
                Ot = (e, t, r) => (t in e ? ht(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            const It = { placement: "top-start", modifiers: [{ name: "offset", options: { offset: [5] } }] };
            function wt({ className: e = "DirectoryListTableHeader-tableHeader-X1Ukmo TableHeader-tableHeader-DV7Uvw", width: t, activeTableColumnSorts: r, typeKeySourceURI: a, sorts: i }) {
                const o = (0, n.I0)(),
                    s = (0, it.Z)(),
                    m = (0, st.Z)(),
                    { containerKey: p } = (0, d.U)(),
                    y = (0, l.useMemo)(() => ft(i), [i]),
                    v = (0, l.useMemo)(() => (0, yt.Z)("directoryTableColumns"), []),
                    f = (0, n.v9)(v),
                    b = (0, l.useCallback)(
                        (e) => {
                            const t = (function (e, t) {
                                const r = new Set(t.map(({ tableColumn: e }) => e.key));
                                return r.has(e) ? r.delete(e) : r.add(e), Array.from(r);
                            })(e, r);
                            if (t.length < 1) return;
                            const l =
                                ((n = ((e, t) => {
                                    for (var r in t || (t = {})) St.call(t, r) && Ot(e, r, t[r]);
                                    if (Pt) for (var r of Pt(t)) Ct.call(t, r) && Ot(e, r, t[r]);
                                    return e;
                                })({}, f)),
                                    gt(n, Et({ [a]: t })));
                            var n;
                            (0, c.c9)(() => {
                                o((0, nt.LN)({ directoryTableColumns: l }));
                            });
                        },
                        [r, f, a, o]
                    );
                return l.createElement(
                    ut.Z,
                    { className: e, style: { width: t } },
                    l.createElement(
                        "div",
                        { className: "DirectoryListTableHeader-columnMenuButtonContainer-Rcrlrc" },
                        l.createElement(rt.lG, { "aria-label": (0, we.Z)("Change Columns"), id: s, isOpen: m.isOpen, onPress: m.onToggle }, l.createElement(lt.default, null))
                    ),
                    r.map(({ tableColumn: e, sort: t }, r) =>
                        l.createElement(
                            mt.Z,
                            { key: e.key, style: e.style, to: (0, Y.Z)({ key: u.Z.join(null != p ? p : "", { sort: bt(t) }, { parseParams: !0 }) }) },
                            l.createElement(
                                dt.Z,
                                {
                                    activeClassName:
                                        0 === r
                                            ? "DirectoryListTableHeader-firstActiveTableHeaderCell-JngMPB DirectoryListTableHeader-firstTableHeaderCell-spztMG DirectoryListTableHeader-tableHeaderCell-sXoDne TableHeaderCell-tableHeaderCell-LXfAh8 TableCell-tableCell-eytlAB DirectoryListTableHeader-activeTableHeaderCell-w4MUZL DirectoryListTableHeader-tableHeaderCell-sXoDne TableHeaderCell-tableHeaderCell-LXfAh8 TableCell-tableCell-eytlAB"
                                            : "DirectoryListTableHeader-activeTableHeaderCell-w4MUZL DirectoryListTableHeader-tableHeaderCell-sXoDne TableHeaderCell-tableHeaderCell-LXfAh8 TableCell-tableCell-eytlAB",
                                    className:
                                        0 === r
                                            ? "DirectoryListTableHeader-firstTableHeaderCell-spztMG DirectoryListTableHeader-tableHeaderCell-sXoDne TableHeaderCell-tableHeaderCell-LXfAh8 TableCell-tableCell-eytlAB"
                                            : "DirectoryListTableHeader-tableHeaderCell-sXoDne TableHeaderCell-tableHeaderCell-LXfAh8 TableCell-tableCell-eytlAB",
                                    isActive: t.active,
                                },
                                l.createElement(pt.Z, { title: t.title }, t.title),
                                t.active ? l.createElement(ct.Z, { isAscending: t.activeDirection === ot.Sr.Ascending }) : null
                            )
                        )
                    ),
                    l.createElement(dt.Z, { className: "DirectoryListTableHeader-actionsTableHeaderCell-yaC9UL DirectoryListTableHeader-tableHeaderCell-sXoDne TableHeaderCell-tableHeaderCell-LXfAh8 TableCell-tableCell-eytlAB" }),
                    l.createElement(
                        at.Z,
                        { isOpen: m.isOpen, options: It, target: s, onMenuClose: m.onClose },
                        y.map(({ sort: e, tableColumn: t }) => {
                            const n = r.find(({ tableColumn: e }) => e === t);
                            return l.createElement(Zt.Z, { key: t.key, isSelected: !!n, value: t.key, onSelect: b }, e.title);
                        })
                    )
                );
            }
            var Tt = r(22222);
            const kt = function (e, t) {
                return (0, Tt.P1)(
                    (function (e, t) {
                        return (0, Tt.P1)((0, yt.Z)("directoryTableColumns"), (r) => {
                            if (!e) return [];
                            const l = r[e];
                            if (l) return l;
                            switch (t) {
                                case p.U.Movie:
                                    return [vt.TN.key, vt.ty.key];
                                case p.U.Show:
                                    return [vt.TN.key];
                                case p.U.Season:
                                    return [vt.D0.key, vt.Zv.key];
                                case p.U.Episode:
                                    return [vt.TN.key, vt.i4.key];
                                case p.U.Artist:
                                    return [vt.TN.key];
                                case p.U.Album:
                                    return [vt.TN.key, vt.c9.key, vt.ty.key];
                                case p.U.Track:
                                    return [vt.TN.key, vt.Dk.key, vt.vy.key, vt.x9.key];
                            }
                            return [vt.TN.key];
                        });
                    })(e, null == t ? void 0 : t.type),
                    (e) => ((null == t ? void 0 : t.Sort) ? ft(t.Sort, e) : [])
                );
            };
            var Nt = Object.defineProperty,
                Mt = Object.getOwnPropertySymbols,
                Dt = Object.prototype.hasOwnProperty,
                Rt = Object.prototype.propertyIsEnumerable,
                jt = (e, t, r) => (t in e ? Nt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            const At = parseInt(T.Z.v4PagePadding, 10),
                xt = parseInt(T.Z.actionsCellWidth, 10),
                Ft = parseInt(T.Z.playCellWidth, 10);
            function Lt({ className: e, activeType: t, items: r, totalSize: a, smoothScroll: o, scrollerKey: s, targetScrollIndex: c, onPageRequest: u, onListReady: d }) {
                const [m, p] = (0, v.c9)(),
                    y = (0, i.Z)({ serverIdentifier: m.machineIdentifier, providerIdentifier: null == p ? void 0 : p.identifier }),
                    f = t ? `${y}${t.key}` : void 0,
                    b = (0, l.useMemo)(() => kt(f, t), [t, f]),
                    Z = (0, n.v9)(b),
                    h = (0, l.useMemo)(() => Z.reduce((e, { tableColumn: t }) => e + t.style.width, Ft + xt), [Z]),
                    g = (0, l.useMemo)(() => (0, et.Z)({ overscan: 1, outerPaddingRight: 0, rowWidth: h }), [h]),
                    E = (0, l.useCallback)((e) => ((null == t ? void 0 : t.Sort) && f ? l.createElement(wt, { activeTableColumnSorts: Z, sorts: t.Sort, typeKeySourceURI: f, width: Math.max(At + h, e.width) }) : null), [h, t, f, Z]),
                    P = (0, l.useCallback)(
                        (e) =>
                            l.createElement(
                                I.ZP,
                                { key: e.key, row: e.row },
                                l.createElement(
                                    Je.Z,
                                    ((e, t) => {
                                        for (var r in t || (t = {})) Dt.call(t, r) && jt(e, r, t[r]);
                                        if (Mt) for (var r of Mt(t)) Rt.call(t, r) && jt(e, r, t[r]);
                                        return e;
                                    })({ tableColumns: Z.map(({ tableColumn: e }) => e) }, e)
                                )
                            ),
                        [Z]
                    );
                return l.createElement(w.Z, {
                    autoScroll: !1,
                    cellComponentFactory: P,
                    className: e,
                    items: r,
                    keyPropName: "listItemKey",
                    layout: g,
                    renderAboveList: E,
                    scrollDirection: tt.I.Omni,
                    scrollerKey: s,
                    smoothScroll: o,
                    targetScrollIndex: c,
                    totalSize: a,
                    onListReady: d,
                    onPageRequest: u,
                });
            }
            var Ht = r(82913);
            function Vt({ className: e, listType: t, subtype: r, activeType: n, items: a, totalSize: i, scrollerKey: o, smoothScroll: s, targetScrollIndex: c, onPageRequest: u, onListReady: m }) {
                const { listStyle: y } = (0, d.U)(),
                    v = (function (e) {
                        switch (e) {
                            case p.n.Grid:
                                return Ie;
                            case p.n.Details:
                                return A;
                            case p.n.Table:
                                return Lt;
                            case p.n.SharedItems:
                                return Ye;
                            case p.n.Folder:
                                return de;
                        }
                        throw new Error("Failed to  map the directory list style to a list component. Check `selectDirectoryListStyle` for list style options");
                    })(y);
                return l.createElement(
                    Ht.ZP,
                    { items: a },
                    l.createElement(v, { activeType: n, className: e, items: a, listType: t, scrollerKey: o, smoothScroll: s, subtype: r, targetScrollIndex: c, totalSize: i, onListReady: m, onPageRequest: u })
                );
            }
            var zt = r(5513),
                Ut = r(88050),
                Bt = r(7400),
                Kt = r(53851),
                Gt = r(91008);
            const qt = { button: "SplitButton-button-TtyUe6", mainButton: "SplitButton-mainButton-isrwsp", menuButton: "SplitButton-menuButton-VOH5gW" };
            var Wt = Object.defineProperty,
                _t = Object.getOwnPropertySymbols,
                Qt = Object.prototype.hasOwnProperty,
                $t = Object.prototype.propertyIsEnumerable,
                Xt = (e, t, r) => (t in e ? Wt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
                Yt = (e, t) => {
                    for (var r in t || (t = {})) Qt.call(t, r) && Xt(e, r, t[r]);
                    if (_t) for (var r of _t(t)) $t.call(t, r) && Xt(e, r, t[r]);
                    return e;
                };
            const Jt = function (e) {
                const t = e,
                    { className: r = qt.button, ariaLabel: n, label: a, menuSize: i, children: o, onPress: s } = t,
                    c = ((e, t) => {
                        var r = {};
                        for (var l in e) Qt.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && _t) for (var l of _t(e)) t.indexOf(l) < 0 && $t.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(t, ["className", "ariaLabel", "label", "menuSize", "children", "onPress"]),
                    u = n || a,
                    [d] = (0, l.useState)((0, Kt.Z)()),
                    [m, p] = (0, l.useState)(!1),
                    y = (0, l.useCallback)(() => p(!m), [m]),
                    v = l.Children.only(o);
                return l.createElement(
                    "div",
                    { className: r, id: d },
                    l.createElement(Gt.Z, Yt({ "aria-label": u, className: qt.mainButton, onPress: s }, c), a),
                    l.createElement(Gt.Z, Yt({ className: qt.menuButton, onPress: y }, c), l.createElement(Bt.Z, null)),
                    l.createElement(at.Z, { isOpen: m, size: i, target: d, onMenuClose: y }, l.cloneElement(v, { onMenuClose: y, onMenuOpen: y }))
                );
            };
            var er = r(19376),
                tr = r(56724);
            function rr(e) {
                const t = (0, tr.Z)(e.type);
                return t ? (0, er.Z)(t, e.subtype) : void 0;
            }
            var lr = r(17524),
                nr = r(26636),
                ar = r(87803),
                ir = r(79687);
            const or = {
                    [p.U.Movie]: ["isAddToCollectionVisible", "isAddToPlaylistVisible", "isAddToQueueVisible", "isOptimizeVisible", "isPlayVisible", "isShuffleVisible"],
                    [p.U.Show]: ["isAddToCollectionVisible", "isAddToPlaylistVisible", "isAddToQueueVisible", "isOptimizeVisible", "isPlayVisible", "isShuffleVisible"],
                    [p.U.Season]: ["isAddToCollectionVisible", "isAddToPlaylistVisible", "isAddToQueueVisible", "isOptimizeVisible", "isPlayVisible", "isShuffleVisible"],
                    [p.U.Episode]: ["isAddToCollectionVisible", "isAddToPlaylistVisible", "isAddToQueueVisible", "isOptimizeVisible", "isPlayVisible", "isShuffleVisible"],
                    [p.U.Artist]: ["isAddToCollectionVisible", "isAddToPlaylistVisible", "isAddToQueueVisible", "isPlayVisible", "isShuffleVisible"],
                    [p.U.Album]: ["isAddToCollectionVisible", "isAddToPlaylistVisible", "isAddToQueueVisible", "isPlayVisible", "isShuffleVisible"],
                    [p.U.Track]: ["isAddToCollectionVisible", "isAddToPlaylistVisible", "isAddToQueueVisible", "isPlayVisible", "isShuffleVisible"],
                    [p.U.PhotoAlbum]: ["isAddToPlaylistVisible", "isPlayVisible", "isShuffleVisible"],
                    [p.U.Photo]: ["isAddToPlaylistVisible", "isPlayVisible", "isShuffleVisible"],
                    [p.U.Author]: ["isAddToCollectionVisible", "isAddToPlaylistVisible", "isAddToQueueVisible", "isPlayVisible", "isShuffleVisible"],
                    [p.U.Audiobook]: ["isAddToCollectionVisible", "isAddToPlaylistVisible", "isAddToQueueVisible", "isPlayVisible", "isShuffleVisible"],
                    [p.U.Chapter]: ["isAddToCollectionVisible", "isAddToPlaylistVisible", "isAddToQueueVisible", "isPlayVisible", "isShuffleVisible"],
                },
                sr = ({ provider: e }) => !lr.wB(e.identifier, lr.Xp) && !!(0, ar.Z)(e, nr.zW.PlayQueue),
                cr = ({ provider: e }) => !!(0, ar.Z)(e, nr.zW.Playlist),
                ur = ({ provider: e, activeType: t }) => !!(0, ar.Z)(e, nr.zW.Collection) && !!(0, ar.Z)(e, nr.zW.Manage) && (null == t ? void 0 : t.type) !== p.U.Photo,
                dr = {
                    isAddToCollectionVisible: ur,
                    isAddToPlaylistVisible: cr,
                    isAddToQueueVisible: sr,
                    isPlayVisible: sr,
                    isShuffleVisible: sr,
                    isOptimizeVisible: ({ server: e, provider: t }) => (0, ir.Z)(t) && e.isFullOwnedServer && e.transcoderVideo,
                };
            var mr = r(14824),
                pr = r(61759),
                yr = r(72071),
                vr = r(47124),
                fr = r(84320),
                br = r(16509),
                Zr = r(53162),
                hr = r(24464),
                gr = r(9119),
                Er = r(53592),
                Pr = r(19564),
                Sr = r(98923),
                Cr = r(19914);
            const Or = function ({ className: e = "FieldRatingInput-inputContainer-pvLUkv", value: t, onChange: r }) {
                var n;
                const a = (0, l.useCallback)(
                    (e) => {
                        r(0 === e ? "-1" : String(e));
                    },
                    [r]
                );
                return l.createElement("div", { className: e }, l.createElement(Cr.o, { "aria-label": (0, we.Z)("Rate"), value: null != (n = parseInt(t, 10)) ? n : 0, onChange: a }));
            };
            var Ir = r(75750),
                wr = r(89328);
            const Tr = { select: "FilterSelectInput-select-uFKoMy Select-select-cgne0H" };
            var kr = Object.defineProperty,
                Nr = Object.getOwnPropertySymbols,
                Mr = Object.prototype.hasOwnProperty,
                Dr = Object.prototype.propertyIsEnumerable,
                Rr = (e, t, r) => (t in e ? kr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            const jr = function (e) {
                var t = e,
                    { selectClassName: r = Tr.select, size: n = wr.Z.Small } = t,
                    a = ((e, t) => {
                        var r = {};
                        for (var l in e) Mr.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && Nr) for (var l of Nr(e)) t.indexOf(l) < 0 && Dr.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(t, ["selectClassName", "size"]);
                return l.createElement(
                    Ir.Z,
                    ((e, t) => {
                        for (var r in t || (t = {})) Mr.call(t, r) && Rr(e, r, t[r]);
                        if (Nr) for (var r of Nr(t)) Dr.call(t, r) && Rr(e, r, t[r]);
                        return e;
                    })({ selectClassName: r, size: n }, a)
                );
            };
            var Ar = r(77437);
            const xr = { input: "FilterTextInput-input-a_vZGU TextInput-input-vbygwE" };
            var Fr = Object.defineProperty,
                Lr = Object.defineProperties,
                Hr = Object.getOwnPropertyDescriptors,
                Vr = Object.getOwnPropertySymbols,
                zr = Object.prototype.hasOwnProperty,
                Ur = Object.prototype.propertyIsEnumerable,
                Br = (e, t, r) => (t in e ? Fr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
                Kr = (e, t) => {
                    for (var r in t || (t = {})) zr.call(t, r) && Br(e, r, t[r]);
                    if (Vr) for (var r of Vr(t)) Ur.call(t, r) && Br(e, r, t[r]);
                    return e;
                };
            function Gr(e) {
                var t = e,
                    { className: r = xr.input, size: n = wr.Z.Small, initialValue: a, forwardedRef: i, onChange: o, onDebouncedChange: s } = t,
                    c = ((e, t) => {
                        var r = {};
                        for (var l in e) zr.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && Vr) for (var l of Vr(e)) t.indexOf(l) < 0 && Ur.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(t, ["className", "size", "initialValue", "forwardedRef", "onChange", "onDebouncedChange"]);
                const [u, d] = (0, l.useState)(a),
                    m = (0, Ar.Z)(u, 250),
                    p = (0, l.useCallback)(
                        (e) => {
                            null == o || o(e), d(e.target.value);
                        },
                        [o, d]
                    );
                return (
                    (0, l.useEffect)(() => {
                        null == s || s(m);
                    }, [m]),
                        l.createElement(pr.Z, Kr({ ref: i, className: r, size: n, value: u, onChange: p }, c))
                );
            }
            const qr = l.forwardRef((e, t) => {
                    return l.createElement(Gr, ((r = Kr({}, e)), Lr(r, Hr({ forwardedRef: t }))));
                    var r;
                }),
                Wr = /^-?(\d+)([a-z]{1,3})$/,
                _r = function (e = "") {
                    const t = e.match(Wr);
                    if (t) {
                        const [, e, r] = t;
                        return { value: e, suffix: r };
                    }
                    return t;
                },
                Qr = function ({ className: e = "FieldRelativeDateInput-inputContainer-pSVay7", value: t, onChange: r }) {
                    var n, a;
                    const i = (0, l.useMemo)(() => _r(t), [t]),
                        o = null != (n = null == i ? void 0 : i.value) ? n : "0",
                        s = null != (a = null == i ? void 0 : i.suffix) ? a : "s",
                        c = (0, l.useCallback)(
                            (e) => {
                                r(`-${e || "0"}${s}`);
                            },
                            [r, s]
                        ),
                        u = (0, l.useCallback)(
                            (e) => {
                                r(`-${o}${e.target.value}`);
                            },
                            [r, o]
                        );
                    return l.createElement(
                        "div",
                        { className: e },
                        l.createElement(qr, {
                            className: "FieldRelativeDateInput-textInput-YS80gt FilterTextInput-input-a_vZGU TextInput-input-vbygwE",
                            initialValue: "0" === o ? "" : o,
                            min: "0",
                            name: "dateInput",
                            required: !0,
                            step: "1",
                            type: "number",
                            onDebouncedChange: c,
                        }),
                        l.createElement(
                            jr,
                            { className: "FieldRelativeDateInput-selectInput-SfDGml Select-input-HK74_E", name: "suffixInput", value: s, onChange: u },
                            l.createElement("option", { value: "s" }, (0, we.Z)("Seconds")),
                            l.createElement("option", { value: "m" }, (0, we.Z)("Minutes")),
                            l.createElement("option", { value: "h" }, (0, we.Z)("Hours")),
                            l.createElement("option", { value: "d" }, (0, we.Z)("Days")),
                            l.createElement("option", { value: "w" }, (0, we.Z)("Weeks")),
                            l.createElement("option", { value: "mon" }, (0, we.Z)("Months")),
                            l.createElement("option", { value: "y" }, (0, we.Z)("Years"))
                        )
                    );
                };
            var $r = r(94184),
                Xr = r.n($r),
                Yr = r(9683),
                Jr = r(47354),
                el = r(73935),
                tl = r(61935),
                rl = r(19210),
                ll = r(32129),
                nl = r(93502),
                al = r(50875),
                il = r(91169);
            const ol = {
                name: "applyMaxHeight",
                enabled: !0,
                phase: "beforeWrite",
                requires: ["maxSize"],
                fn({ state: e, options: t }) {
                    var r;
                    const l = null != (r = t.offset) ? r : 0,
                        { height: n } = e.modifiersData.maxSize;
                    e.styles.popper.maxHeight = n - l + "px";
                },
            };
            var sl = r(9966);
            const cl = {
                    name: "maxSize",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["offset", "preventOverflow", "flip"],
                    fn({ state: e, name: t, options: r }) {
                        const l = (0, sl.Z)(e, r),
                            { x: n, y: a } = e.modifiersData.preventOverflow || { x: 0, y: 0 },
                            { width: i, height: o } = e.rects.popper,
                            [s] = e.placement.split("-"),
                            c = "left" === s ? "left" : "right",
                            u = "top" === s ? "top" : "bottom";
                        e.modifiersData[t] = { width: i - l[c] - n, height: o - l[u] - a };
                    },
                },
                ul = {
                    name: "sameWidth",
                    enabled: !0,
                    phase: "beforeWrite",
                    requires: ["computeStyles"],
                    fn({ state: e }) {
                        e.styles.popper.width = `${e.rects.reference.width}px`;
                    },
                    effect({ state: e }) {
                        e.elements.popper.style.width = `${e.elements.reference.offsetWidth}px`;
                    },
                };
            var dl = r(49228);
            const ml = (0, Tt.P1)(dl.Z, (e) => e.advancedFilters),
                pl = {
                    searchInputContainer: "FilterOptionInput-searchInputContainer-_9NzP_",
                    button: "FilterOptionInput-button-_W0z52 Link-link-vSsQW1",
                    small: "FilterOptionInput-small-s38pCP",
                    medium: "FilterOptionInput-medium-yAzjl5",
                    large: "FilterOptionInput-large-YAHTkc",
                    isDisabled: "FilterOptionInput-isDisabled-uC1BoB",
                    hasError: "FilterOptionInput-hasError-hvyG03",
                    menuContainer: "FilterOptionInput-menuContainer-jhrBof",
                    menu: "FilterOptionInput-menu-z6FMuR",
                    loadingMenu: "FilterOptionInput-loadingMenu-lTfcWf FilterOptionInput-menu-z6FMuR",
                    scroller: "FilterOptionInput-scroller-kH_tOx Scroller-scroller-S6_dko",
                    input: "FilterOptionInput-input-AUT_hB FilterTextInput-input-a_vZGU TextInput-input-vbygwE",
                    list: "FilterOptionInput-list-VHWEC0",
                    listItem: "FilterOptionInput-listItem-LSwdMk",
                    listItemHighlighted: "FilterOptionInput-listItemHighlighted-tGuS82 FilterOptionInput-listItem-LSwdMk",
                };
            var yl = Object.defineProperty,
                vl = Object.defineProperties,
                fl = Object.getOwnPropertyDescriptors,
                bl = Object.getOwnPropertySymbols,
                Zl = Object.prototype.hasOwnProperty,
                hl = Object.prototype.propertyIsEnumerable,
                gl = (e, t, r) => (t in e ? yl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
                El = (e, t) => {
                    for (var r in t || (t = {})) Zl.call(t, r) && gl(e, r, t[r]);
                    if (bl) for (var r of bl(t)) hl.call(t, r) && gl(e, r, t[r]);
                    return e;
                },
                Pl = (e, t) => vl(e, fl(t));
            const Sl = (0, rl.Z)(ll.Z.menuSpeed) / 1e3,
                Cl = { ease: "easeOut", duration: Sl },
                Ol = { ease: nl.Z.motionEasing, duration: Sl },
                Il = { opacity: Cl, y: Ol, scale: Ol },
                wl = { initial: { opacity: 0, y: -10, scale: 0.95, transition: Il }, animate: { opacity: 1, y: 0, scale: 1, transition: Il }, exit: { opacity: 0, y: 10, scale: 0.95, transition: Il } },
                Tl = function ({
                                   containerClassName: e = pl.searchInputContainer,
                                   disabledClassName: t = pl.isDisabled,
                                   errorClassName: r = pl.hasError,
                                   buttonClassName: a = pl.button,
                                   rule: i,
                                   size: o = wr.Z.Small,
                                   filter: s,
                                   isDisabled: c,
                                   hasError: u,
                                   onChange: d,
                               }) {
                    var m, p, y;
                    const f = (0, n.I0)(),
                        [b, Z] = (0, v.c9)(),
                        h = null != (m = i.valueTitle) ? m : i.value,
                        g = (0, l.useMemo)(() => {
                            return (e = s.key), (0, Tt.P1)(ml, (t) => t.filterOptions[e]);
                            var e;
                        }, [s.key]),
                        E = (0, n.v9)(g),
                        [P, C] = (0, l.useState)(null == E ? void 0 : E.options),
                        O = null != (p = null != P ? P : null == E ? void 0 : E.options) ? p : [],
                        I = (0, l.useRef)(null),
                        w = (0, l.useRef)(null),
                        T = (0, al.Z)(),
                        { styles: k, attributes: N, state: M } = (0, tl.D)(I.current, w.current, {
                            placement: "bottom-start",
                            modifiers: (0, l.useMemo)(() => [{ name: "offset", options: { offset: [0, 5] } }, ul, cl, ol, { name: "applyMaxHeight", options: { offset: 15 } }], []),
                        }),
                        D = (0, l.useCallback)((e) => {
                            var t;
                            return null != (t = null == e ? void 0 : e.title) ? t : "";
                        }, []),
                        { isOpen: R, highlightedIndex: j, getToggleButtonProps: A, getMenuProps: x, getComboboxProps: F, getInputProps: L, getItemProps: H, closeMenu: V } = (0, Yr.Kb)({
                            defaultHighlightedIndex: 0,
                            items: O,
                            itemToString: D,
                            initialInputValue: h,
                            onSelectedItemChange: (0, l.useCallback)(
                                ({ selectedItem: e }) => {
                                    e && d(e.value, e.title);
                                },
                                [d]
                            ),
                            onInputValueChange: (0, l.useCallback)(
                                ({ inputValue: e }) => {
                                    (null == E ? void 0 : E.options) &&
                                    C(
                                        E.options.filter((t) =>
                                            D(t)
                                                .toLowerCase()
                                                .includes(null == e ? void 0 : e.toLocaleLowerCase())
                                        )
                                    );
                                },
                                [null == E ? void 0 : E.options, D]
                            ),
                            stateReducer: (0, l.useCallback)(
                                (e, { changes: t }) => {
                                    var r, l, n;
                                    return e.isOpen && !t.isOpen && (null == (r = t.selectedItem) ? void 0 : r.title) !== e.inputValue
                                        ? Pl(El({}, t), { inputValue: null != (n = null == (l = t.selectedItem) ? void 0 : l.title) ? n : h })
                                        : t;
                                },
                                [h]
                            ),
                        });
                    return (
                        (0, l.useEffect)(() => {
                            (null == E ? void 0 : E.isPopulated) || f(fr.Z.actions.fetchFilterOptionsRequested({ server: b, provider: Z, filter: s }));
                        }, [f, s, null == E ? void 0 : E.isPopulated, R, Z, b]),
                            (0, l.useEffect)(() => {
                                var e;
                                (null == (e = null == M ? void 0 : M.modifiersData.hide) ? void 0 : e.isReferenceHidden) && R && V();
                            }, [V, R, null == (y = null == M ? void 0 : M.modifiersData.hide) ? void 0 : y.isReferenceHidden]),
                            (0, l.useEffect)(() => {
                                (null == E ? void 0 : E.options.length) && C(E.options);
                            }, [null == E ? void 0 : E.options]),
                            l.createElement(
                                l.Fragment,
                                null,
                                l.createElement(
                                    "div",
                                    El({}, F({ ref: I, className: Xr()(e, c && t, u && r) })),
                                    l.createElement(qr, Pl(El({}, L({ className: pl.input, onFocus: T, disabled: c })), { size: o })),
                                    l.createElement(W.Z, Pl(El(El({}, A({ className: Xr()(a, pl[o]), disabled: c })), N.reference), { isDisabled: c }), l.createElement(Bt.Z, { direction: R ? il.Z.Up : il.Z.Down, size: o }))
                                ),
                                el.createPortal(
                                    l.createElement(
                                        "div",
                                        El(El({}, x({ className: pl.menuContainer, style: k.popper, ref: w })), N.popper),
                                        l.createElement(
                                            Jr.M_,
                                            null,
                                            R
                                                ? l.createElement(
                                                    Jr.ww.div,
                                                    { key: "container", animate: wl.animate, className: (null == E ? void 0 : E.isPopulated) ? pl.menu : pl.loadingMenu, exit: wl.exit, initial: wl.initial },
                                                    (null == E ? void 0 : E.isPopulated)
                                                        ? l.createElement(
                                                            tt.Z,
                                                            { className: pl.scroller },
                                                            l.createElement(
                                                                "ul",
                                                                { className: pl.list },
                                                                O.length
                                                                    ? O.map((e, t) => l.createElement("li", El({ key: e.key }, H({ className: j === t ? pl.listItemHighlighted : pl.listItem, index: t, item: e })), e.title))
                                                                    : l.createElement("li", { className: pl.listItem }, (0, we.Z)("No options"))
                                                            )
                                                        )
                                                        : l.createElement(S.Z, null)
                                                )
                                                : null
                                        )
                                    ),
                                    document.body
                                )
                            )
                    );
                };
            var kl = r(30264);
            const Nl = [kl.Z.DoubleEqual, kl.Z.NotDoubleEqual],
                Ml = [kl.Z.Equal, kl.Z.NotEqual],
                Dl = function ({ rule: e, fieldType: t, fieldSubtype: r, filter: n, onChange: a }) {
                    var i;
                    const o = (0, l.useCallback)(
                        (e) => {
                            a(encodeURIComponent(e), e);
                        },
                        [a]
                    );
                    if (r === ot.Pi.Rating) return l.createElement(Or, { value: e.value, onChange: a });
                    if (
                        n &&
                        (function (e, t) {
                            return e === ot.fS.String ? Nl.includes(t.operator) : Ml.includes(t.operator);
                        })(t, e)
                    )
                        return l.createElement(Tl, { filter: n, rule: e, onChange: a });
                    switch (t) {
                        case ot.fS.String:
                            return l.createElement(qr, { initialValue: null != (i = e.valueTitle) ? i : e.value, name: "input", required: !0, type: "text", onDebouncedChange: o });
                        case ot.fS.Integer:
                            return l.createElement(qr, { initialValue: e.value, min: "0", name: "input", required: !0, type: "number", onDebouncedChange: o });
                        case ot.fS.Date:
                            return _r(e.value)
                                ? l.createElement(Qr, { value: e.value, onChange: a })
                                : l.createElement(qr, {
                                    initialValue: e.value,
                                    max: "2999-12-31",
                                    name: "input",
                                    pattern: "[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])",
                                    placeholder: "YYYY-MM-DD",
                                    required: !0,
                                    type: "date",
                                    onDebouncedChange: o,
                                });
                    }
                    return null;
                };
            function Rl(e, t, r = "") {
                return { operator: e, title: t, defaultValue: r };
            }
            const jl = function (e) {
                    switch (e) {
                        case ot.fS.Tag:
                        case ot.fS.AudioLanguage:
                        case ot.fS.SubtitleLanguage:
                            return [Rl(kl.Z.Equal, (0, we.Z)("is")), Rl(kl.Z.NotEqual, (0, we.Z)("is not"))];
                        case ot.fS.Resolution:
                            return [Rl(kl.Z.Equal, (0, we.Z)("is"))];
                        case ot.fS.Boolean:
                            return [Rl(kl.Z.Equal, (0, we.Z)("is true")), Rl(kl.Z.NotEqual, (0, we.Z)("is false"))];
                        case ot.fS.Integer:
                            return [Rl(kl.Z.Equal, (0, we.Z)("is")), Rl(kl.Z.NotEqual, (0, we.Z)("is not")), Rl(kl.Z.GreaterThanGreaterThanOrEqual, (0, we.Z)("is greater than")), Rl(kl.Z.LessThanLessThanOrEqual, (0, we.Z)("is less than"))];
                        case ot.fS.String:
                            return [
                                Rl(kl.Z.Equal, (0, we.Z)("contains")),
                                Rl(kl.Z.NotEqual, (0, we.Z)("does not contain")),
                                Rl(kl.Z.DoubleEqual, (0, we.Z)("is")),
                                Rl(kl.Z.NotDoubleEqual, (0, we.Z)("is not")),
                                Rl(kl.Z.LessThanOrEqual, (0, we.Z)("begins with")),
                                Rl(kl.Z.GreaterThanOrEqual, (0, we.Z)("ends with")),
                            ];
                        case ot.fS.Date:
                            return [
                                Rl(kl.Z.LessThanLessThanOrEqual, (0, we.Z)("is before")),
                                Rl(kl.Z.GreaterThanGreaterThanOrEqual, (0, we.Z)("is after")),
                                Rl(kl.Z.GreaterThanGreaterThanOrEqual, (0, we.Z)("is in the last"), "-0s"),
                                Rl(kl.Z.LessThanLessThanOrEqual, (0, we.Z)("is not in the last"), "-0s"),
                            ];
                    }
                },
                Al = "AdvancedFilterOption-inputContainer-h4Ng07";
            var xl = Object.defineProperty,
                Fl = Object.defineProperties,
                Ll = Object.getOwnPropertyDescriptors,
                Hl = Object.getOwnPropertySymbols,
                Vl = Object.prototype.hasOwnProperty,
                zl = Object.prototype.propertyIsEnumerable,
                Ul = (e, t, r) => (t in e ? xl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
                Bl = (e, t) => {
                    for (var r in t || (t = {})) Vl.call(t, r) && Ul(e, r, t[r]);
                    if (Hl) for (var r of Hl(t)) zl.call(t, r) && Ul(e, r, t[r]);
                    return e;
                },
                Kl = (e, t) => Fl(e, Ll(t));
            const Gl = function ({ rowState: e, rule: t, isRemoveDisabled: r, onChange: n, onRemoveRule: a }) {
                const { type: i, subtype: o } = e.fieldTypesByFieldKey[t.field],
                    s = e.filterKeysByFieldKey[t.field],
                    c = !!_r(t.value),
                    u = (0, l.useMemo)(() => jl(i), [i]),
                    d = (0, l.useMemo)(() => e.allTypeFilters.find(({ key: e }) => e === s), [s, e.allTypeFilters]),
                    m = (0, l.useMemo)(() => {
                        if (i === ot.fS.Date) {
                            const e = u.find((e) => e.operator === t.operator && c && e.defaultValue);
                            if (e) return e;
                        }
                        return u.find((e) => e.operator === t.operator) || u[0];
                    }, [u, t.operator, c, i]),
                    p = (0, l.useMemo)(() => u.indexOf(m), [u, m]),
                    y = (0, l.useCallback)(
                        (r) => {
                            const l = r.target.value,
                                a = e.allTypeFields.find((e) => e.key === l);
                            if (!a) throw new Error(`${l} did not match to any type field`);
                            const i = e.fieldTypesByFieldKey[a.key],
                                [o] = jl(i.type);
                            n(Kl(Bl({}, t), { field: a.key, fieldTitle: a.title, operator: o.operator, value: i.type === ot.fS.Boolean ? "1" : "", valueTitle: void 0 }));
                        },
                        [n, e.allTypeFields, e.fieldTypesByFieldKey, t]
                    ),
                    v = (0, l.useCallback)(
                        (e) => {
                            const r = parseInt(e.target.value, 10),
                                l = u[r];
                            i === ot.fS.Date ? n(Kl(Bl({}, t), { operator: l.operator, value: l.defaultValue, valueTitle: void 0 })) : n(Kl(Bl({}, t), { operator: l.operator }));
                        },
                        [n, u, t, i]
                    ),
                    f = (0, l.useCallback)(
                        (e, r) => {
                            n(Kl(Bl({}, t), { value: e, valueTitle: r }));
                        },
                        [n, t]
                    );
                return l.createElement(
                    Zr.gI,
                    { align: "left", gap: "xs", verticalAlign: "center" },
                    l.createElement(
                        "div",
                        { className: Al },
                        l.createElement(
                            jr,
                            { name: "field", value: t.field, onChange: y },
                            e.allTypeFields.map((e, t) => l.createElement("option", { key: `${e.key}-${t}`, value: e.key }, e.title))
                        )
                    ),
                    l.createElement(
                        "div",
                        { className: Al },
                        l.createElement(
                            jr,
                            { name: "operator", value: String(p), onChange: v },
                            u.map((e, t) => l.createElement("option", { key: t, value: t }, e.title))
                        )
                    ),
                    i !== ot.fS.Boolean ? l.createElement("div", { className: Al }, l.createElement(Dl, { fieldSubtype: o, fieldType: i, filter: d, rule: t, onChange: f })) : null,
                    l.createElement(Er.Z, { icon: Sr.default, isDisabled: r, size: "xs", title: (0, we.Z)("Remove Rule"), onPress: a })
                );
            };
            var ql = r(99382);
            const Wl = function (e) {
                const [t] = e.allTypeFields,
                    [r] = jl(t.type);
                return { field: t.key, fieldTitle: t.title, value: "", operator: r.operator };
            };
            var _l = r(20272),
                Ql = r(84251);
            var $l = Object.defineProperty,
                Xl = Object.defineProperties,
                Yl = Object.getOwnPropertyDescriptors,
                Jl = Object.getOwnPropertySymbols,
                en = Object.prototype.hasOwnProperty,
                tn = Object.prototype.propertyIsEnumerable,
                rn = (e, t, r) => (t in e ? $l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
                ln = (e, t) => {
                    for (var r in t || (t = {})) en.call(t, r) && rn(e, r, t[r]);
                    if (Jl) for (var r of Jl(t)) tn.call(t, r) && rn(e, r, t[r]);
                    return e;
                },
                nn = (e, t) => Xl(e, Yl(t));
            function an(e) {
                const t = (0, _l.su)(Pr.F).find((t) => t === e);
                if (t) return t;
                throw new Error(`'getOperatorValue' received an unknown value '${e}'`);
            }
            const on = function e({ rowState: t, compositeRule: r, onRemoveGroup: n, onChange: a }) {
                    const i = (0, it.Z)(),
                        o = (0, st.Z)(),
                        s = r.Rule.length,
                        c = (0, l.useCallback)(
                            (e) => {
                                a(nn(ln({}, r), { operator: an(e.target.value) }));
                            },
                            [r, a]
                        ),
                        u = (0, l.useCallback)(
                            (e) => () => {
                                const t = Array.from(r.Rule),
                                    [l] = t.splice(e, 1);
                                (t.length < 1 && "composite" !== l.type) || a(nn(ln({}, r), { Rule: t }));
                            },
                            [r, a]
                        ),
                        d = (0, l.useCallback)(() => {
                            const e = Array.from(r.Rule);
                            e.unshift(Wl(t)), a(nn(ln({}, r), { Rule: e }));
                        }, [r, a, t]),
                        m = (0, l.useCallback)(() => {
                            const e = Array.from(r.Rule);
                            e.unshift((0, ql.Jc)([Wl(t)])), a(nn(ln({}, r), { Rule: e }));
                        }, [r, a, t]),
                        p = (0, l.useCallback)(
                            (e) => (t) => {
                                const l = Array.from(r.Rule);
                                l.splice(e, 1, t), a(nn(ln({}, r), { Rule: l }));
                            },
                            [r, a]
                        );
                    return l.createElement(
                        "div",
                        { className: "AdvancedFilterGroup-container-y0pz6J" },
                        l.createElement(
                            Zr.Kq,
                            { gap: "xs" },
                            l.createElement(
                                Zr.gI,
                                { align: "left", gap: "s", verticalAlign: "center" },
                                l.createElement(
                                    "div",
                                    { className: "AdvancedFilterGroup-inputContainer-saNbmR" },
                                    l.createElement(
                                        jr,
                                        { name: "group", value: r.operator, onChange: c },
                                        l.createElement("option", { value: "and" }, (0, we.Z)("Match all of the following")),
                                        l.createElement("option", { value: "or" }, (0, we.Z)("Match any of the following"))
                                    )
                                ),
                                l.createElement(Er.Z, { icon: br.default, size: "xs", title: (0, we.Z)("Add Rule"), onPress: d }),
                                l.createElement(W.Z, { "aria-label": (0, we.Z)("More Actions"), id: i, onPress: o.onToggle }, l.createElement(Ql.Z, null)),
                                l.createElement(
                                    at.Z,
                                    { isOpen: o.isOpen, target: i, onMenuClose: o.onClose },
                                    l.createElement(hr.Z, { onPress: (0, gr.Z)(m, o.onClose) }, (0, we.Z)("Add Rule Group")),
                                    n ? l.createElement(hr.Z, { onPress: (0, gr.Z)(n, o.onClose) }, (0, we.Z)("Remove Rule Group")) : null
                                )
                            ),
                            l.createElement(
                                "div",
                                { className: "AdvancedFilterGroup-rules-RFRfqs" },
                                l.createElement(
                                    Zr.Kq,
                                    { gap: "xs" },
                                    r.Rule.map((n, a) =>
                                        "composite" === n.type
                                            ? l.createElement(e, { key: `${n.operator}-${a}`, compositeRule: n, rowState: t, onChange: p(a), onRemoveGroup: u(a) })
                                            : l.createElement(Gl, { key: `${n.field}-${s}-${a}`, isRemoveDisabled: 1 === r.Rule.length, rowState: t, rule: n, onChange: p(a), onRemoveRule: u(a) })
                                    )
                                )
                            )
                        )
                    );
                },
                sn = new RegExp(`(${["duration", "mediaSize", "mediaBitrate", "show.writer", "show.producer", "show.director"].join("|")})$`),
                cn = function ({ meta: e, rules: t, onChange: r }) {
                    const n = (0, l.useMemo)(() => {
                            var t;
                            return (null != (t = e.Type) ? t : []).reduce((e, t) => (t.Field && e.push(...t.Field.filter((e) => !sn.test(e.key))), e), []);
                        }, [e.Type]),
                        a = (0, l.useMemo)(() => {
                            var t;
                            return (null != (t = e.Type) ? t : []).reduce((e, t) => (t.Filter && e.push(...t.Filter), e), []);
                        }, [e.Type]),
                        i = (0, l.useMemo)(() => {
                            var t;
                            const r = null != (t = e.Type) ? t : [],
                                l = r.filter((e) => e.type !== p.U.Folder).length > 1;
                            return r.reduce(
                                (e, t) => (
                                    t.Filter &&
                                    t.Filter.forEach((r) => {
                                        if (r.filterType !== ot.H_.Boolean) {
                                            const n = l ? `${t.type}.${r.filter}` : r.filter;
                                            e[n] = r.key;
                                        }
                                    }),
                                        e
                                ),
                                {}
                            );
                        }, [e.Type]),
                        o = (0, l.useMemo)(() => n.reduce((e, t) => ((e[t.key] = { type: t.type, subtype: t.subType }), e), {}), [n]),
                        s = (0, l.useMemo)(() => ({ allTypeFilters: a, allTypeFields: n, fieldTypesByFieldKey: o, filterKeysByFieldKey: i }), [n, a, o, i]),
                        c = (0, l.useMemo)(() => (t ? ("composite" !== t.type ? (0, ql.Jc)([t]) : t) : (0, ql.Jc)([Wl(s)])), [t, s]);
                    return l.createElement(on, { compositeRule: c, rowState: s, onChange: r });
                },
                un = (0, Tt.P1)(ml, (e) => e.curatedItem),
                dn = (0, Tt.P1)(ml, (e) => e.queryParse);
            var mn = r(76451),
                pn = r(86945),
                yn = r(60179),
                vn = r(83492),
                fn = r(96338),
                bn = r(94848),
                Zn = r(84893),
                hn = r(17867),
                gn = r(4704),
                En = r(99045);
            const Pn = function ({ className: e = "DirectoryListAdvancedFilters-container-Wr05rs", directoryKey: t, totalSize: r, meta: a }) {
                var s, d, m, p, y, f;
                const Z = (0, n.I0)(),
                    [h, g, E] = (0, v.c9)(),
                    P = (0, i.Z)({ serverIdentifier: h.machineIdentifier, providerIdentifier: g.identifier }),
                    C = (0, l.useMemo)(() => u.Z.parseUri(t), [t]),
                    O = `${P}${t}`,
                    I = (0, n.v9)(hn.Z),
                    { query: w, isPopulated: T } = (0, n.v9)(dn),
                    k = (0, n.v9)(un),
                    N = (0, l.useMemo)(() => (0, bn.Z)(O), [O]),
                    M = (0, n.v9)(N),
                    D = null != (s = null == M ? void 0 : M.isSaving) && s,
                    R = (0, gn.Z)(D),
                    j = (0, Zn.Z)(a),
                    A = (0, b.Z)(),
                    x = A.curatedKey ? o.Z.parseString(A.curatedKey) : void 0,
                    F = (0, yr.Z)({ identifier: g.metricsIdentifier, mode: "list", type: null == j ? void 0 : j.type, itemCount: r }),
                    [L, H] = (0, l.useState)(null != (d = o.Z.parseString(C.params.limit)) ? d : ""),
                    V = (0, Ar.Z)(L, 250),
                    z = (0, st.Z)(),
                    U = (0, st.Z)(),
                    B = (0, st.Z)(),
                    [K, G] = (0, l.useState)(!1),
                    q = j ? (0, tr.Z)(j.type) : void 0,
                    W = j ? rr(j) : void 0,
                    _ = cr({ server: h, provider: g, activeType: j }),
                    Q = ur({ server: h, provider: g, activeType: j }),
                    $ = Q && W === Le.DD.Video,
                    X = (0, l.useCallback)(() => {
                        F({ action: Ut.DK, mode: "shortcut" });
                    }, [F]),
                    J = (0, l.useCallback)(() => {
                        F({ action: Ut.uf, mode: "shortcut" });
                    }, [F]),
                    ee = (0, l.useCallback)(() => {
                        G(!0), z.onOpen();
                    }, [z]),
                    te = (0, l.useCallback)(() => {
                        G(!1), z.onClose();
                    }, [z]),
                    re = (0, l.useCallback)(() => {
                        G(!0), U.onOpen();
                    }, [U]),
                    le = (0, l.useCallback)(() => {
                        G(!1), U.onClose();
                    }, [U]),
                    ne = (0, l.useCallback)(() => {
                        x &&
                        (0, c.c9)(() => {
                            Z(fn.Z.actions.saveRequested({ server: h, provider: g, key: x, sourceURI: O, isSmart: !0 }));
                        });
                    }, [x, Z, g, h, O]),
                    ae = (0, l.useCallback)((e) => {
                        const t = e.target.value;
                        H(t);
                    }, []),
                    ie = (0, l.useCallback)(
                        (e) => {
                            Z(fr.Z.actions.updateQuery({ rules: e }));
                        },
                        [Z]
                    );
                (0, l.useEffect)(() => {
                    var e;
                    if (!(null == w ? void 0 : w.Rule) || ("composite" === (null == (e = null == w ? void 0 : w.Rule) ? void 0 : e.type) && w.Rule.Rule.length < 1)) return;
                    const { type: r, sort: l, group: n, having: a } = C.params,
                        i = { type: r, sort: l, group: n, having: a, limit: V || void 0 },
                        o = u.Z.join(C.pathname, i),
                        s = (0, mn.o)(w.Rule),
                        c = u.Z.join(o, s, { parseParams: !1 });
                    c !== t && Z((0, zt.c4)({ pathname: (0, Y.Z)({ key: c }), replace: !0 }));
                }, [t, C.params, C.pathname, Z, V, w]),
                    (0, l.useEffect)(() => {
                        w || Z(fr.Z.actions.fetchQueryRequested({ server: h, provider: g, key: t.replace("/all", "/query/parse") })), x && Z(fr.Z.actions.fetchCuratedRequested({ server: h, provider: g, key: x }));
                    }, [w, t, x, Z, h]),
                    (0, l.useEffect)(
                        () => () => {
                            Z(fr.Z.actions.reset());
                        },
                        [Z]
                    ),
                    (0, l.useEffect)(() => {
                        var e;
                        if ((null == (e = null == M ? void 0 : M.metadataItem) ? void 0 : e.key) && R && !D && !(null == M ? void 0 : M.saveError)) {
                            const e = M.metadataItem.type === Le.pG.Playlist;
                            Z((0, zt.c4)({ pathname: (0, En.Z)(h, g, M.metadataItem.key, void 0, e ? W : void 0), replace: !0 }));
                        }
                    }, [Z, D, R, W, g, h, null == (m = null == M ? void 0 : M.metadataItem) ? void 0 : m.key, null == (p = null == M ? void 0 : M.metadataItem) ? void 0 : p.type, null == M ? void 0 : M.saveError]);
                let oe = (0, we.Z)("Save As..."),
                    se = $ ? re : ee;
                return (
                    k.item && ((oe = k.item.isPlaylist ? (0, we.Z)("Update Playlist") : (0, we.Z)("Update Collection")), (se = ne)),
                        T && w
                            ? l.createElement(
                                "form",
                                { className: e },
                                l.createElement(
                                    tt.Z,
                                    { autoScroll: !0, className: "DirectoryListAdvancedFilters-scroller-dxJx7G Scroller-scroller-S6_dko", scrollDirection: tt.I.Omni },
                                    k.item ? l.createElement("div", { className: "DirectoryListAdvancedFilters-editHeading-KUrieG" }, k.item.title) : null,
                                    l.createElement(cn, { meta: a, rules: w.Rule, onChange: ie })
                                ),
                                l.createElement(
                                    "div",
                                    { className: "DirectoryListAdvancedFilters-buttonBar-j_0tp0" },
                                    l.createElement(
                                        "div",
                                        null,
                                        l.createElement(mr.Z, { className: "DirectoryListAdvancedFilters-formLabel-IGJ0qU FormLabel-label-jjY3xI", name: "labelValue" }, (0, we.Z)("Limit to")),
                                        l.createElement(pr.Z, { className: "DirectoryListAdvancedFilters-textInput-h7yuRR TextInput-input-vbygwE", min: 0, name: "labelValue", type: "number", value: L, onChange: ae })
                                    ),
                                    l.createElement(
                                        "div",
                                        { className: "DirectoryListAdvancedFilters-buttonCluster-E3LvYL" },
                                        W && q && E && (Q || _)
                                            ? l.createElement(
                                                l.Fragment,
                                                null,
                                                l.createElement(
                                                    Jt,
                                                    { isDisabled: I, kind: vr.Z.Primary, label: oe, onPress: se },
                                                    l.createElement(yn.Z, {
                                                        contentDirectoryID: E.id,
                                                        mediaType: W,
                                                        metadataType: q,
                                                        provider: g,
                                                        server: h,
                                                        sourceURI: O,
                                                        onAddToCollectionPress: Q ? U.onOpen : void 0,
                                                        onAddToPlaylistPress: _ ? z.onOpen : void 0,
                                                        onAddToSmartCollectionPress: re,
                                                        onAddToSmartPlaylistPress: ee,
                                                        onMenuClose: B.onClose,
                                                        onSaveCollectionPress: X,
                                                        onSavePlaylistPress: J,
                                                    })
                                                ),
                                                l.createElement(vn.Z, {
                                                    defaultDestinationSource: P,
                                                    defaultTitle: null != (y = E.title) ? y : (0, we.Z)("New Playlist"),
                                                    isOpen: z.isOpen,
                                                    isSmart: K,
                                                    mediaType: W,
                                                    sourceURI: O,
                                                    onModalClose: te,
                                                    onSaveSuccess: J,
                                                }),
                                                l.createElement(pn.Z, {
                                                    contentDirectoryID: E.id,
                                                    defaultTitle: null != (f = E.title) ? f : (0, we.Z)("New Collection"),
                                                    isOpen: U.isOpen,
                                                    isSmart: K,
                                                    metadataType: q,
                                                    sourceURI: O,
                                                    onModalClose: le,
                                                    onSaveSuccess: X,
                                                })
                                            )
                                            : null
                                    )
                                )
                            )
                            : l.createElement("div", { className: "DirectoryListAdvancedFilters-loadingContainer-skqjtB DirectoryListAdvancedFilters-container-Wr05rs" }, l.createElement(S.Z, null))
                );
            };
            var Sn = r(31247);
            const Cn = function (e) {
                var t;
                return null != (t = null == e ? void 0 : e.find((e) => e.active)) ? t : null == e ? void 0 : e[0];
            };
            var On = Object.defineProperty,
                In = Object.defineProperties,
                wn = Object.getOwnPropertyDescriptors,
                Tn = Object.getOwnPropertySymbols,
                kn = Object.prototype.hasOwnProperty,
                Nn = Object.prototype.propertyIsEnumerable,
                Mn = (e, t, r) => (t in e ? On(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            const Dn = parseInt(T.Z.jumpBarCharacterHeight, 10),
                Rn = parseInt(T.Z.jumpBarMargin, 10);
            function jn({ className: e = "DirectoryListJumpBar-character-S1KzDO Link-link-vSsQW1", scrollIndex: t, children: r, onCharacterPress: n }) {
                const a = (0, l.useCallback)(() => {
                    n(t);
                }, [t, n]);
                return l.createElement(W.Z, { className: e, onPress: a }, r);
            }
            function An({ className: e = "DirectoryListJumpBar-jumpBar-herK_R", activeType: t, viewportHeight: r, listTotalSize: a, onFirstCharacterScroll: i }) {
                const o = Cn(null == t ? void 0 : t.Sort),
                    {
                        firstCharacters: { items: s },
                    } = (0, n.v9)(Sn.Z),
                    c = (0, l.useMemo)(
                        () =>
                            s
                                ? (function (e, t) {
                                    if (t < 1 || !e.length) return [];
                                    const { characters: r } = e.reduce(
                                            (e, t, r) => {
                                                var l, n;
                                                return (
                                                    e.characters.push(
                                                        ((l = ((e, t) => {
                                                            for (var r in t || (t = {})) kn.call(t, r) && Mn(e, r, t[r]);
                                                            if (Tn) for (var r of Tn(t)) Nn.call(t, r) && Mn(e, r, t[r]);
                                                            return e;
                                                        })({}, t)),
                                                            (n = { position: r, scrollIndex: e.scrollIndex }),
                                                            In(l, wn(n)))
                                                    ),
                                                        (e.scrollIndex += t.size),
                                                        e
                                                );
                                            },
                                            { characters: [], scrollIndex: 0 }
                                        ),
                                        l = [r[0], r[r.length - 1]],
                                        n = Array.from(r).sort((e, t) => t.size - e.size);
                                    return Array.from(new Set([...l, ...n]))
                                        .slice(0, t)
                                        .sort((e, t) => e.position - t.position);
                                })(s, Math.floor((r - 2 * Rn) / Dn))
                                : [],
                        [s, r]
                    ),
                    u = !!(null == o ? void 0 : o.firstCharacterKey),
                    d = c.length >= 5;
                return o && s && u && d && a >= 75
                    ? l.createElement(
                        "div",
                        { className: e },
                        c.map((e) => l.createElement(jn, { key: e.key, scrollIndex: e.scrollIndex, onCharacterPress: i }, e.title))
                    )
                    : null;
            }
            var xn = r(32498),
                Fn = r(39374),
                Ln = r(96937),
                Hn = r(55669),
                Vn = r(45697),
                zn = r.n(Vn),
                Un = r(74570);
            function Bn(e) {
                const t = e["aria-label"],
                    r = e.className,
                    n = e.style,
                    a = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 560 560", id: "plex-icon-tidal-logo-560" };
                (a["aria-hidden"] = !t), (a.style = n), (a.className = Un.Z.plexIcon + (r ? " " + r : ""));
                const i = [
                    l.createElement.apply(
                        l,
                        [
                            "path",
                            {
                                d:
                                    "M373.331 186.32l-93.324 93.332-93.337-93.341L280.007 93l93.332 93.309L466.67 93 560 186.318l-93.33 93.341-93.339-93.339zm.01 186.669l-93.334 93.34-93.337-93.34 93.337-93.337 93.334 93.337zm-186.67-186.67l-93.338 93.34L0 186.32 93.333 93l93.337 93.318z",
                            },
                        ].concat([])
                    ),
                ];
                return t && i.unshift(l.createElement("title", null, t)), l.createElement.apply(l, ["svg", a].concat(i));
            }
            Bn.propTypes = { "aria-label": zn().string, className: zn().string, style: zn().object };
            const Kn = Bn;
            function Gn(e) {
                var t, r;
                return (null == (t = null == e ? void 0 : e.id) ? void 0 : t.includes("saved"))
                    ? (0, we.Z)("With a TIDAL subscription you can add Albums, artists, tracks and videos to My TIDAL to keep track of your favorite music.")
                    : (null == (r = null == e ? void 0 : e.id) ? void 0 : r.includes("playlists"))
                        ? (0, we.Z)("Once you have a TIDAL subscription you can add music to My TIDAL Playlists and keep the party going.")
                        : (0, we.Z)("Once you have a TIDAL subscription you can browse TIDAL content in Plex.");
            }
            function qn({ className: e, pivot: t }) {
                const r = (0, yr.Z)(),
                    n = (0, l.useCallback)(() => {
                        r({ action: Ut.J9 });
                    }, [r]);
                return l.createElement(
                    Hn.Z,
                    { className: e, description: Gn(t), icon: l.createElement(Kn, null), title: (0, we.Z)("TIDAL + Plex = music to your ears!") },
                    l.createElement(Ln.Z, { rel: "noopener noreferrer", target: "_blank", to: Fn.YC, onPress: n }, (0, we.Z)("Learn More"))
                );
            }
            var Wn = r(91569),
                _n = r(45498),
                Qn = r(37504),
                $n = r(56329),
                Xn = r(60930),
                Yn = r(79932),
                Jn = r(29414);
            function ea({ className: e = "ActionButtonBar-bar-_jwC59", children: t }) {
                return l.createElement("div", { className: e }, t);
            }
            var ta = r(41834);
            const ra = function (e) {
                    return u.Z.stringifyParams(e, { encoder: (e, t, r, l) => ("value" === l && "boolean" == typeof e ? (e ? "1" : "0") : e) });
                },
                la = function (e, t) {
                    const { strippedKey: r, filterRules: l } = (0, ta.Z)(e, t),
                        n = l.reduce((e, { filter: r, value: l }) => {
                            var n;
                            const { type: a } = t,
                                i = null == (n = t.Field) ? void 0 : n.find((e) => e.key === r.filter || e.key === `${a}.${r.filter}`);
                            return i && (e[i.key] = l), e;
                        }, {});
                    return u.Z.join(r, ra(n));
                },
                na = "DirectoryListActions-menu-oIx0KC Menu-menu-OCzudL";
            function aa({ className: e, activeType: t, selectedPivot: r, totalSize: a, listActions: o, directoryKey: s, advancedFilters: c }) {
                var u, p;
                const y = (0, n.I0)(),
                    [f, b, Z] = (0, v.c9)(),
                    { containerServer: h, containerProvider: g, containerKey: E, containerSourceURI: P } = (0, d.U)(),
                    { metricsPage: S, metricsContextTuple: C } = (0, I.Zn)(),
                    O = (0, yr.Z)({ identifier: b.metricsIdentifier, mode: "list", type: null == t ? void 0 : t.type, itemCount: a }),
                    w = (0, it.Z)(),
                    T = (0, st.Z)(),
                    k = (0, it.Z)(),
                    N = (0, st.Z)(),
                    M = (0, st.Z)(),
                    D = (0, st.Z)(),
                    R = (0, i.Z)({ serverIdentifier: f.machineIdentifier, providerIdentifier: b.identifier }),
                    j = `${R}${E}`,
                    A = t ? rr(t) : void 0,
                    x = t ? (0, tr.Z)(t.type) : void 0,
                    F = (0, l.useMemo)(() => (t ? la(s, t) : s), [t, s]),
                    L = (0, l.useCallback)(
                        (e) => {
                            y(Jn.rr({ server: h, provider: g, containerKey: E, metricsPage: S, metricsProperties: { contextTuple: C }, legacyAction: e }));
                        },
                        [y, h, g, E, S, C]
                    ),
                    H = (0, l.useCallback)(() => {
                        O({ action: Ut.NH }), L(Yn.wA({ options: { type: A } }));
                    }, [O, A, L]),
                    V = (0, l.useCallback)(() => {
                        L(Yn.Em({ options: { type: A } })), O({ action: Ut.cO });
                    }, [O, A, L]),
                    z = (0, l.useCallback)(() => {
                        O({ action: Ut.PR }), L(Yn.tP({ options: { playAll: !0, next: !1, type: A } })), T.onClose();
                    }, [O, T, A, L]),
                    U = (0, l.useCallback)(() => {
                        O({ action: Ut.pe }), L(Yn.tP({ options: { playAll: !0, next: !0, type: A } })), T.onClose();
                    }, [O, T, A, L]),
                    B = (0, l.useCallback)(() => {
                        O({ action: Ut.FH }), L(Jn.$5()), T.onClose();
                    }, [O, T, L]),
                    K = (0, l.useCallback)(() => {
                        P && y(m.Z.actions.throttledRepopulateRequested({ server: h, provider: g, sourceURI: P })), O({ action: Ut.DK, mode: "shortcut" });
                    }, [g, h, P, y, O]),
                    G = (0, l.useCallback)(() => {
                        O({ action: Ut.uf, mode: "shortcut" });
                    }, [O]);
                return l.createElement(
                    ea,
                    { className: e },
                    o.isPlayVisible ? l.createElement(Er.Z, { icon: _n.default, title: (0, we.Z)("Play"), tooltipPlacement: "bottom", onPress: H }) : null,
                    o.isShuffleVisible ? l.createElement(Er.Z, { icon: Qn.default, title: (0, we.Z)("Shuffle"), tooltipPlacement: "bottom", onPress: V }) : null,
                    o.isAddToPlaylistVisible || o.isAddToCollectionVisible ? l.createElement(Er.Z, { icon: $n.default, id: k, title: (0, we.Z)("Add to..."), tooltipPlacement: "bottom", onPress: N.onToggle }) : null,
                    o.isAddToQueueVisible || o.isOptimizeVisible ? l.createElement(Er.Z, { icon: Xn.default, id: w, title: (0, we.Z)("More"), tooltipPlacement: "bottom", onPress: T.onToggle }) : null,
                    l.createElement(
                        at.Z,
                        { className: na, isOpen: T.isOpen, target: w, onMenuClose: T.onClose },
                        o.isAddToQueueVisible ? l.createElement(hr.Z, { onPress: U }, (0, we.Z)("Play Next")) : null,
                        o.isAddToQueueVisible ? l.createElement(hr.Z, { onPress: z }, (0, we.Z)("Add to Queue")) : null,
                        o.isOptimizeVisible ? l.createElement(hr.Z, { onPress: B }, (0, we.Z)("Optimize...")) : null
                    ),
                    (o.isAddToPlaylistVisible || o.isAddToCollectionVisible) && A && x
                        ? l.createElement(
                            at.Z,
                            { className: na, isOpen: N.isOpen, target: k, onMenuClose: N.onClose },
                            l.createElement(yn.Z, {
                                advancedFiltersRoute: r && !c ? (0, Y.Z)({ key: F, advancedFilters: 1 }) : void 0,
                                contentDirectoryID: null == Z ? void 0 : Z.id,
                                mediaType: A,
                                metadataType: x,
                                provider: b,
                                server: f,
                                sourceURI: j,
                                onAddToCollectionPress: o.isAddToCollectionVisible ? M.onOpen : void 0,
                                onAddToPlaylistPress: D.onOpen,
                                onMenuClose: N.onClose,
                                onSaveCollectionPress: K,
                                onSavePlaylistPress: G,
                            })
                        )
                        : null,
                    o.isAddToPlaylistVisible && A
                        ? l.createElement(vn.Z, {
                            defaultDestinationSource: R,
                            defaultTitle: null != (u = null == Z ? void 0 : Z.title) ? u : (0, we.Z)("New Playlist"),
                            isOpen: D.isOpen,
                            mediaType: A,
                            sourceURI: j,
                            onModalClose: D.onClose,
                            onSaveSuccess: G,
                        })
                        : null,
                    o.isAddToCollectionVisible && x && (null == Z ? void 0 : Z.id)
                        ? l.createElement(pn.Z, { contentDirectoryID: Z.id, defaultTitle: null != (p = Z.title) ? p : (0, we.Z)("New Collection"), isOpen: M.isOpen, metadataType: x, sourceURI: j, onModalClose: M.onClose, onSaveSuccess: K })
                        : null
                );
            }
            var ia = r(35166),
                oa = r(53397),
                sa = r(90653),
                ca = r(82378),
                ua = r(79456),
                da = r(60483);
            function ma({ children: e, filter: t, isPending: r, isSelected: n, onFilterSelect: a }) {
                const i = (0, l.useCallback)(() => {
                    a(t);
                }, [t, a]);
                return l.createElement(
                    hr.Z,
                    { className: n ? "DisclosureFilterMenuItem-isSelected-zP_Oat" : void 0, onPress: i },
                    l.createElement(
                        "span",
                        { className: "DisclosureFilterMenuItem-menuItemContainer-EMRm02 SelectedMenuItem-menuItemContainer-PNDPtO" },
                        l.createElement("span", { className: "DisclosureFilterMenuItem-menuLabel-_c64di SelectedMenuItem-menuLabel-nQZtur" }, e),
                        r ? l.createElement(S.Z, { className: "DisclosureFilterMenuItem-spinner-NIkM5c Spinner-spinner-Q4B7Qw spin-spin-H8VRGl", size: wr.Z.Small }) : null,
                        !r && n ? l.createElement("span", { className: "DisclosureFilterMenuItem-selectedIcon-iv3_Sg SelectedMenuItem-selectedIcon-FVHL6f" }, l.createElement(da.Z, { "aria-label": (0, we.Z)("Selected") })) : null
                    )
                );
            }
            var pa = r(88346),
                ya = r(31356);
            const va = (0, Tt.P1)(Sn.Z, (e) => e.filterOptions);
            var fa = r(20090);
            const ba = function (e, t, r) {
                    const l = [...e];
                    for (let r = 0; r < e.length; r++) (e[r].filter.filterType === ot.H_.Boolean) == (t.filterType === ot.H_.Boolean) && l.splice(r, 1);
                    return (0, fa.Z)(l, { filter: t, operator: kl.Z.Equal, value: r });
                },
                Za = function (e, t, r) {
                    return !!e.find((e) => e.filter.filter === t.filter && (null == r || e.value === r));
                },
                ha = function (e, t, r) {
                    return e.filter((e) => !(e.filter.filter === t.filter && (null == r || e.value === r)));
                },
                ga = function (e, t) {
                    const r = t.reduce((e, t) => ((e[t.filter.filter] = t.value), e), {});
                    return u.Z.join(e, ra(r));
                };
            var Ea = r(59398);
            const Pa = "DirectoryListFilterMenu-selectedMenuItem-ix56Fq SelectedMenuItem-menuItemContainer-PNDPtO";
            function Sa({ typeKey: e, directoryKey: t, pendingFilterKey: r, filters: n, activeFilterRules: a, advancedFiltersKey: i, isAdvancedFiltersVisible: o, onClose: s, onFilterSelect: c }) {
                const [u, d] = (function (e) {
                        return e.reduce((e, t) => (t.filterType === ot.H_.Boolean ? e[0].push(t) : e[1].push(t), e), [[], []]);
                    })(n),
                    m = (0, Ea.Z)(s);
                return l.createElement(
                    tt.Z,
                    { autoScroll: !0, className: "DirectoryListFilterMenu-menuScroller-MYVyYd Scroller-scroller-S6_dko" },
                    l.createElement(Zt.Z, { key: "all", isSelected: !a.length, to: (0, Y.Z)({ key: e }), onPress: m }, (0, we.Z)("All")),
                    u.map((e) => {
                        const r = Za(a, e);
                        return l.createElement(Zt.Z, { key: e.key, isSelected: r, to: (0, Y.Z)({ key: ga(t, r ? ha(a, e) : ba(a, e, !0)) }), onPress: m }, e.title);
                    }),
                    u.length && d.length ? l.createElement(oa.Z, null) : null,
                    d.map((e) => l.createElement(ma, { key: e.key, filter: e, isPending: r === e.key, isSelected: Za(a, e), onFilterSelect: c }, e.title)),
                    o ? l.createElement(l.Fragment, null, l.createElement(oa.Z, null), l.createElement(Zt.Z, { to: (0, Y.Z)({ key: i, advancedFilters: 1 }), onPress: m }, (0, we.Z)("Advanced Filters"))) : null
                );
            }
            function Ca({ directoryKey: e, selectedFilter: t, filterOptions: r, activeFilterRules: n, height: a, onFilterDeselect: i, onMenuClose: o }) {
                const [s, c] = (0, l.useState)(""),
                    u = r.find((e) => Za(n, t, e.value)),
                    d = (0, Ea.Z)(o),
                    m = (0, l.useCallback)((e) => {
                        c(e.target.value);
                    }, []);
                return l.createElement(
                    "div",
                    { className: "DirectoryListFilterMenu-filterOptionsContainer-kDSrDz", "data-testid": "secondFiltersList", style: { height: Math.max(a, 356) } },
                    l.createElement(
                        "div",
                        { className: "DirectoryListFilterMenu-headerContainer-vKpGq3" },
                        l.createElement(
                            "div",
                            { className: "DirectoryListFilterMenu-header-aeGx3M", "data-testid": "filterHeader" },
                            l.createElement(
                                "div",
                                { className: "DirectoryListFilterMenu-headerTitle-ZZOh4J" },
                                l.createElement(
                                    W.Z,
                                    { "data-testid": "previousFilters", onPress: i },
                                    l.createElement(ia.default, { align: "baseline", "aria-label": (0, we.Z)("Back") }),
                                    l.createElement("span", { className: "DirectoryListFilterMenu-filterText-GAp8r5" }, t.title)
                                )
                            ),
                            r.length > 12
                                ? l.createElement(pr.Z, {
                                    className: "DirectoryListFilterMenu-searchInput-Oqorls TextInput-input-NqTdW3 input-input-XAtklw",
                                    name: "filterOptionQuery",
                                    placeholder: (0, we.Z)("Filter {filterTitle}", { filterTitle: t.title }),
                                    value: s,
                                    onChange: m,
                                })
                                : null
                        ),
                        l.createElement(oa.Z, null)
                    ),
                    r.length
                        ? l.createElement(
                            tt.Z,
                            { autoScroll: !0, className: "DirectoryListFilterMenu-filterOptionsScroller-GAH_7y DirectoryListFilterMenu-menuScroller-MYVyYd Scroller-scroller-S6_dko" },
                            u ? l.createElement(Zt.Z, { key: u.key, className: Pa, isSelected: !0, to: (0, Y.Z)({ key: ga(e, ha(n, t)) }), onPress: d }, u.title) : null,
                            r.map((r) => {
                                if (r === u || !r.title.toLowerCase().includes(s.toLowerCase())) return null;
                                const a = Za(n, t, r.value);
                                return l.createElement(Zt.Z, { key: r.key, className: Pa, isSelected: a, to: (0, Y.Z)({ key: ga(e, ba(n, t, r.value)) }), onPress: d }, r.title);
                            })
                        )
                        : l.createElement("div", { className: "DirectoryListFilterMenu-emptyText-VvAuTq" }, (0, we.Z)("No options"))
                );
            }
            function Oa({ className: e, directoryKey: t, selectedPivot: r, type: a }) {
                const [i, o] = (0, v.c9)(),
                    s = (0, n.I0)(),
                    [c, u] = (0, l.useState)(),
                    [d, { height: m }] = (0, f.Z)(),
                    p = (0, it.Z)(),
                    { isOpen: y, onToggle: b, onClose: Z } = (0, st.Z)(),
                    h = null == a ? void 0 : a.Filter,
                    g = (0, l.useMemo)(() => (0, ya.Z)(t), [t]),
                    E = (0, n.v9)(g),
                    P = (0, n.v9)(va),
                    S = (0, l.useMemo)(() => (c ? P[c] : void 0), [c, P]),
                    C = (0, l.useMemo)(() => (null == h ? void 0 : h.find((e) => e.key === c)), [c, h]),
                    O = (0, l.useMemo)(() => ({ scrollDirection: sa.Hn }), []),
                    I = (0, l.useMemo)(() => (null == E ? void 0 : E.filterRules.find(({ filter: e }) => e.filterType !== ot.H_.Boolean)), [null == E ? void 0 : E.filterRules]),
                    w = (0, l.useMemo)(() => (I ? P[I.filter.key] : void 0), [I, P]),
                    T = (0, l.useMemo)(
                        () =>
                            null == E
                                ? void 0
                                : E.filterRules
                                    .map((e) => {
                                        var t;
                                        const r = I && I.filter.filter === e.filter.filter ? (null == (t = P[I.filter.key]) ? void 0 : t.options.find((e) => e.value === (null == I ? void 0 : I.value))) : void 0;
                                        return r && r.field === (null == I ? void 0 : I.filter.filter) ? r.title : e.filter.title;
                                    })
                                    .join(", "),
                        [null == E ? void 0 : E.filterRules, P, I]
                    ),
                    k = !!(0, ar.Z)(o, nr.zW.QueryParser),
                    N = (0, l.useMemo)(() => (a ? la(t, a) : t), [a, t]),
                    M = (0, l.useCallback)(
                        (e) => {
                            s(pa.Z.actions.fetchFilterOptionsRequested({ server: i, provider: o, filter: e }));
                        },
                        [s, o, i]
                    ),
                    D = (0, l.useCallback)(
                        (e) => {
                            u(e.key), M(e);
                        },
                        [M]
                    ),
                    R = (0, l.useCallback)(() => {
                        u(void 0);
                    }, []),
                    j = (0, l.useCallback)(() => {
                        Z();
                    }, [Z]);
                if (
                    ((0, l.useEffect)(() => {
                        !I || (null == w ? void 0 : w.isPopulated) || (null == w ? void 0 : w.isPending) || M(I.filter);
                    }, [w, M, I]),
                    !a || !h || !E)
                )
                    return null;
                const { strippedKey: A, filterRules: x } = E;
                return l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(ua.Z, { className: e, direction: y ? il.Z.Up : il.Z.Down, id: p, onPress: b }, T || (0, we.Z)("All")),
                    l.createElement(
                        at.Z,
                        { isOpen: y, scrollerProps: O, size: ca.ln, target: p, onMenuClose: j },
                        l.createElement(
                            "div",
                            { ref: d, className: "DirectoryListFilterMenu-measureContainer-HEql3l" },
                            (null == S ? void 0 : S.isPopulated) && C
                                ? l.createElement(Ca, { activeFilterRules: x, directoryKey: A, filterOptions: S.options, height: m, selectedFilter: C, onFilterDeselect: R, onMenuClose: j })
                                : l.createElement(Sa, {
                                    activeFilterRules: x,
                                    advancedFiltersKey: N,
                                    directoryKey: A,
                                    filters: h,
                                    isAdvancedFiltersVisible: k && !!r,
                                    pendingFilterKey: (null == S ? void 0 : S.isPending) ? c : void 0,
                                    typeKey: a.key,
                                    onClose: j,
                                    onFilterSelect: D,
                                })
                        )
                    )
                );
            }
            var Ia = r(88282),
                wa = r(96923);
            function Ta({ className: e, directoryKey: t, sorts: r }) {
                const n = (0, it.Z)(),
                    { isOpen: a, onToggle: i, onClose: o } = (0, st.Z)(),
                    s = Cn(r),
                    c = (0, Ea.Z)(o);
                return !r || !s || r.length < 2
                    ? null
                    : l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(ua.Z, { className: e, direction: a ? il.Z.Up : il.Z.Down, id: n, onPress: i }, (0, we.Z)("By {sortTitle}", { sortTitle: s.title })),
                        l.createElement(
                            at.Z,
                            { isOpen: a, target: n, onMenuClose: o },
                            r.map((e) =>
                                l.createElement(
                                    Zt.Z,
                                    { key: e.key, iconComponent: e.activeDirection === ot.Sr.Ascending ? Ia.Z : wa.Z, isSelected: e.active, to: (0, Y.Z)({ key: u.Z.join(t, { sort: bt(e) }, { parseParams: !0 }) }), onPress: c },
                                    e.title
                                )
                            )
                        )
                    );
            }
            var ka = r(48505);
            function Na({ className: e, activeType: t, types: r, advancedFilters: n, directoryKey: a }) {
                const i = (0, it.Z)(),
                    { isOpen: o, onToggle: s, onClose: c } = (0, st.Z)(),
                    u = (0, Ea.Z)(c);
                return !r || !t || r.length < 2
                    ? null
                    : l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(ua.Z, { className: e, direction: o ? il.Z.Up : il.Z.Down, id: i, onPress: s }, t.title),
                        l.createElement(
                            at.Z,
                            { isOpen: o, target: i, onMenuClose: c },
                            r.map((e) => {
                                const r = (0, tr.Z)(e.type);
                                return l.createElement(
                                    Zt.Z,
                                    {
                                        key: e.key,
                                        isSelected: t === e && e.active,
                                        to: e.type === p.U.Folder ? (0, Y.Z)({ key: e.key, advancedFilters: void 0 }) : (0, Y.Z)({ key: n && r ? a.replace(/type=\w+/, `type=${(0, ka.Z)(r)}`) : e.key }),
                                        onPress: u,
                                    },
                                    e.title
                                );
                            })
                        )
                    );
            }
            var Ma = r(26065),
                Da = r(92664),
                Ra = r(6469);
            const ja = (0, Tt.P1)(Ra.Z, (e) => (e ? Cn(e.Sort) : void 0)),
                Aa = function ({ className: e = "PageHeaderLeftGutter-container-OCV3jt", innerClassName: t = "PageHeaderLeftGutter-innerContainer-IRyE9_", children: r }) {
                    return l.createElement("div", { className: e }, l.createElement("div", { className: t }, r));
                };
            function xa({ advancedFilters: e }) {
                const { containerKey: t } = (0, d.U)(),
                    r = (0, l.useMemo)(() => (0, ya.Z)(t), [t]),
                    a = (0, n.v9)(r),
                    i = (0, n.v9)(Ra.Z),
                    o = (0, n.v9)(ja),
                    s = (0, Ea.Z)();
                return (null == a ? void 0 : a.filterRules.length) || e
                    ? l.createElement(
                        Aa,
                        { className: "DirectoryToolbarClearFiltersButton-gutter-II6uw0 PageHeaderLeftGutter-container-OCV3jt" },
                        l.createElement(
                            Zr.Kq,
                            { verticalAlign: "center" },
                            l.createElement(
                                Da.u,
                                { tooltip: (0, we.Z)("Clear Filter") },
                                l.createElement(rt.I_, {
                                    href: (0, Y.Z)({ key: i ? u.Z.join(i.key, o ? { sort: o.activeDirection === ot.Sr.Ascending ? o.key : o.descKey } : {}, { parseParams: !0 }) : "", advancedFilters: void 0 }),
                                    icon: Ma.default,
                                    iconSize: "m",
                                    insetFocus: !0,
                                    size: "s",
                                    transparent: !0,
                                    onPress: s,
                                })
                            )
                        )
                    )
                    : null;
            }
            var Fa = r(78958),
                La = r(36656),
                Ha = r(26606);
            const Va = "DirectoryListToolbar-disclosureArrowLink-Gy3s4r DisclosureArrowLink-disclosureArrowLink-BTB_kg Link-link-vSsQW1";
            function za({ className: e = "DirectoryListToolbar-pageHeader-DBpQaA PageHeader-pageHeader-e2k66t", directoryKey: t, meta: r, activeType: n, selectedPivot: a, advancedFilters: i, totalSize: o }) {
                var s, c, u, m, y, f;
                const [b, Z] = (0, v.c9)(),
                    { listStyle: h } = (0, d.U)(),
                    g = (0, l.useMemo)(
                        () =>
                            (function ({ server: e, provider: t, activeType: r }) {
                                const l = r ? or[r.type] : void 0;
                                return l
                                    ? l.reduce((l, n) => {
                                        const a = dr[n];
                                        return (l[n] = !!(e && t && r) && a({ server: e, provider: t, activeType: r })), l;
                                    }, {})
                                    : {};
                            })({ server: b, provider: Z, activeType: n }),
                        [n, Z, b]
                    ),
                    E = (0, l.useMemo)(() => (0, _l.su)(g).some((e) => e), [g]),
                    P = null != (c = null == (s = null == r ? void 0 : r.Type) ? void 0 : s.length) ? c : 0,
                    S = null != (m = null == (u = null == n ? void 0 : n.Filter) ? void 0 : u.length) ? m : 0,
                    C = null != (f = null == (y = null == n ? void 0 : n.Sort) ? void 0 : y.length) ? f : 0;
                return !r || (P <= 1 && S < 1 && C <= 1)
                    ? null
                    : l.createElement(
                        Fa.Z,
                        { className: e },
                        l.createElement(
                            La.Z,
                            null,
                            l.createElement(xa, { advancedFilters: i }),
                            i ? l.createElement("span", { className: "DirectoryListToolbar-infoText-CVhmMp" }, (0, we.Z)("Advanced Filters")) : l.createElement(Oa, { className: Va, directoryKey: t, selectedPivot: a, type: n }),
                            l.createElement(Na, { activeType: n, advancedFilters: i, className: Va, directoryKey: t, types: null == r ? void 0 : r.Type }),
                            h !== p.n.Table ? l.createElement(Ta, { className: Va, directoryKey: t, sorts: null == n ? void 0 : n.Sort }) : null,
                            null != o ? l.createElement(Wn.Z, null, o) : null
                        ),
                        E ? l.createElement(Ha.Z, null, l.createElement(aa, { activeType: n, advancedFilters: i, directoryKey: t, listActions: g, selectedPivot: a, totalSize: o })) : null
                    );
            }
            var Ua = r(30622),
                Ba = r(34581),
                Ka = r(11909),
                Ga = Object.defineProperty,
                qa = Object.defineProperties,
                Wa = Object.getOwnPropertyDescriptors,
                _a = Object.getOwnPropertySymbols,
                Qa = Object.prototype.hasOwnProperty,
                $a = Object.prototype.propertyIsEnumerable,
                Xa = (e, t, r) => (t in e ? Ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
                Ya = (e, t) => {
                    for (var r in t || (t = {})) Qa.call(t, r) && Xa(e, r, t[r]);
                    if (_a) for (var r of _a(t)) $a.call(t, r) && Xa(e, r, t[r]);
                    return e;
                };
            var Ja = r(56146),
                ei = r(38825);
            const ti = (0, r(70617).Z)(function (e) {
                return (0,
                    Tt.P1)(ja, (0, ya.Z)(e), (e, t) => (t && (null == e ? void 0 : e.firstCharacterKey) ? u.Z.join(ga(e.firstCharacterKey, t.filterRules), { sort: e.activeDirection === ot.Sr.Ascending ? e.key : e.descKey, includeCollections: 1, includeExternalMedia: 1 }, { parseParams: !0 }) : void 0));
            });
            var ri = r(6642),
                li = r(81383),
                ni = r(65625);
            var ai = Object.defineProperty,
                ii = Object.defineProperties,
                oi = Object.getOwnPropertyDescriptors,
                si = Object.getOwnPropertySymbols,
                ci = Object.prototype.hasOwnProperty,
                ui = Object.prototype.propertyIsEnumerable,
                di = (e, t, r) => (t in e ? ai(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            function mi({ directorySourceURI: e, directoryKey: t, selectedPivot: r, listStyle: C }) {
                var O, I, w, T, k;
                const N = (0, n.I0)(),
                    [M, D, R] = (0, v.c9)(),
                    j = (0, b.Z)(),
                    A = o.Z.parseBoolean(j.advancedFilters),
                    [x, { height: F }] = (0, f.Z)(),
                    { meta: L, metadataListSourceURI: H, directorySourceURI: V, firstCharacters: z } = (0, n.v9)(Sn.Z),
                    U = (0, Ua.Z)({ machineIdentifier: M.machineIdentifier, providerIdentifier: null != (O = D.providerIdentifier) ? O : D.identifier, directoryKey: t, selectedPivot: r, contentDirectory: R }),
                    B = (0, l.useMemo)(() => {
                        if (U) return M.isCloud ? U : u.Z.join(U, { includeCollections: 1, includeExternalMedia: 1 });
                    }, [U, M.isCloud]),
                    K = (0, l.useMemo)(() => (0, i.Z)({ serverIdentifier: M.machineIdentifier, providerIdentifier: D.providerIdentifier, key: B }), [B, D.providerIdentifier, M.machineIdentifier]),
                    G = (0, l.useMemo)(() => (0, y.Z)(K), [K]),
                    q = (0, n.v9)(G),
                    W = null == q ? void 0 : q.items[0],
                    _ = L ? (0, Zn.Z)(L) : void 0,
                    Q = null != (I = null == _ ? void 0 : _.type) ? I : p.U.Mixed,
                    $ = null != (w = null == _ ? void 0 : _.subtype) ? w : null == W ? void 0 : W.subtype,
                    X = U ? (0, ta.Z)(U, _) : void 0,
                    Y = (0, n.v9)(ti(B)),
                    [J, ee] = (0, l.useState)(),
                    te = (0, l.useMemo)(() => (0, ei.Z)(V), [V]),
                    re = (0, n.v9)(te),
                    le = null != C ? C : re,
                    ne = (0, n.v9)(hn.Z),
                    ae = (null != Y && !(null == z ? void 0 : z.isPopulated) && !(null == z ? void 0 : z.error)) || (!(null == q ? void 0 : q.isPopulated) && !(null == q ? void 0 : q.error)),
                    ie = (0, Z.Z)(ae, !0, 250),
                    oe = (0, l.useCallback)(
                        (e) => {
                            var t;
                            H &&
                            N(
                                m.Z.actions.fetchRangeRequested(
                                    ((t = ((e, t) => {
                                        for (var r in t || (t = {})) ci.call(t, r) && di(e, r, t[r]);
                                        if (si) for (var r of si(t)) ui.call(t, r) && di(e, r, t[r]);
                                        return e;
                                    })({}, e)),
                                        ii(t, oi({ server: M, provider: D, sourceURI: H })))
                                )
                            );
                        },
                        [N, M, D, H]
                    ),
                    se = (0, l.useCallback)(() => {
                        H && N(m.Z.actions.repopulateRangeRequested({ server: M, provider: D, sourceURI: H }));
                    }, [N, H, D, M]),
                    ce = (0, l.useCallback)((e) => {
                        ee(e);
                    }, []);
                if (
                    ((0, h.Z)({}, !!(null == q ? void 0 : q.isPopulated)),
                        (0, Ja.Z)(se),
                        (function ({ machineIdentifier: e, providerIdentifier: t, directoryKey: r, meta: a, activeType: o, selectedPivot: s, metadataList: c, advancedFilters: u }) {
                            const d = (0, n.I0)(),
                                m = (0, n.v9)(Ka.Z),
                                y = (0, n.v9)((0, Ba.Z)(e, t, null == s ? void 0 : s.key)),
                                v = (null == s ? void 0 : s.key) ? (0, i.Z)({ serverIdentifier: e, providerIdentifier: t, key: null == s ? void 0 : s.key }) : void 0;
                            (0, l.useEffect)(() => {
                                var e, t;
                                !(v && r && s && s.type === nr.F6.List && y !== r) ||
                                (s.key === r && null == y) ||
                                !(null == c ? void 0 : c.isPopulated) ||
                                (null == a ? void 0 : a.Pivot) ||
                                ((null == o ? void 0 : o.type) === p.U.Folder && (null == o ? void 0 : o.key) !== r) ||
                                u ||
                                d((0, nt.LN)({ savedDirectoryListKeys: ((e = Ya({}, m)), (t = { [v]: r }), qa(e, Wa(t))) }));
                            }, [null == c ? void 0 : c.isPopulated, r, d, v, y, m, s, null == a ? void 0 : a.Pivot, null == o ? void 0 : o.type, null == o ? void 0 : o.key, u]);
                        })({ machineIdentifier: M.machineIdentifier, providerIdentifier: null != (T = D.providerIdentifier) ? T : D.identifier, directoryKey: U, meta: L, activeType: _, selectedPivot: r, metadataList: q, advancedFilters: A }),
                        (0, l.useEffect)(() => {
                            (0, c.c9)(() => {
                                N(pa.Z.actions.resetMeta());
                            });
                        }, [N, e]),
                        (0, l.useEffect)(
                            () => (
                                B &&
                                (0, c.c9)(() => {
                                    N(pa.Z.actions.initializeListRequested({ server: M, provider: D, sourceURI: K, metadataListSourceURI: H, directorySourceURI: e }));
                                }),
                                    () => {
                                        (0, c.c9)(() => {
                                            H && N(m.Z.actions.reset({ sourceURI: H }));
                                        });
                                    }
                            ),
                            [N, B, H, e, K]
                        ),
                        (0, l.useEffect)(() => {
                            Y && null != (null == q ? void 0 : q.totalSize) && N(pa.Z.actions.fetchFirstCharactersRequested({ server: M, provider: D, key: Y }));
                        }, [N, M, D, Y, null == q ? void 0 : q.totalSize]),
                        (0, l.useEffect)(() => {
                            null != J && ee(void 0);
                        }, [J]),
                        !U)
                )
                    return l.createElement(E.Z, null);
                if (null == q ? void 0 : q.error) {
                    const { status: e } = q.error;
                    return 404 === e ? l.createElement(E.Z, null) : 406 === e ? l.createElement(qn, { pivot: r }) : l.createElement(P.Z, null);
                }
                return V !== e
                    ? l.createElement(g.Z, null, l.createElement(S.Z, null))
                    : (null == R ? void 0 : R.id) !== a.nc || 0 !== (null == q ? void 0 : q.totalSize) || Q !== p.U.Mixed || (null == (k = null == X ? void 0 : X.filterRules) ? void 0 : k.length)
                        ? l.createElement(
                            d.ZP,
                            { containerKey: B, containerMeta: L, containerProvider: D, containerServer: M, containerSourceURI: K, containerSubtype: $, containerType: Q, listStyle: le },
                            ne ? l.createElement(ri.Z, null) : l.createElement(za, { activeType: _, advancedFilters: A, directoryKey: U, meta: L, selectedPivot: r, totalSize: null == q ? void 0 : q.totalSize }),
                            l.createElement(ni.Z, { providerEntityID: D.entityID, serverEntityID: M.entityID }),
                            A && L ? l.createElement(Pn, { directoryKey: U, meta: L, totalSize: null == q ? void 0 : q.totalSize }) : null,
                            null == (null == q ? void 0 : q.totalSize) || ie
                                ? l.createElement(g.Z, null, l.createElement(S.Z, null))
                                : l.createElement(
                                    "div",
                                    { ref: x, className: "DirectoryListPageContent-listContainer-gWP4ft" },
                                    F
                                        ? l.createElement(
                                            l.Fragment,
                                            null,
                                            0 === q.totalSize
                                                ? l.createElement(xn.Z, { directoryKey: U, selectedPivot: r })
                                                : l.createElement(Vt, {
                                                    activeType: _,
                                                    className: "DirectoryListPageContent-pageContentScroller-O3oHlt PageContent-pageContentScroller-dvaH3C Scroller-scroller-S6_dko",
                                                    items: q.items,
                                                    listType: Q,
                                                    scrollerKey: "DirectoryListPage",
                                                    smoothScroll: !(0, s.G6)(),
                                                    subtype: $,
                                                    targetScrollIndex: J,
                                                    totalSize: q.totalSize,
                                                    onPageRequest: oe,
                                                })
                                        )
                                        : null,
                                    _ && F && null != q.totalSize ? l.createElement(An, { activeType: _, listTotalSize: q.totalSize, viewportHeight: F, onFirstCharacterScroll: ce }) : null
                                )
                        )
                        : l.createElement(li.Z, { onDone: se });
            }
        },
        32498: (e, t, r) => {
            r.d(t, { Z: () => I });
            var l = r(67294),
                n = r(28216),
                a = r(2107),
                i = r(34873),
                o = r(23843),
                s = r(76805),
                c = r(21223),
                u = r(17524),
                d = r(5562),
                m = r(37280),
                p = r(41538),
                y = r(56724),
                v = r(76950),
                f = r(52026),
                b = r(31235),
                Z = r(96937),
                h = r(13517),
                g = r(47124),
                E = r(31356),
                P = r(6469),
                S = r(79024),
                C = r(59398),
                O = r(18039);
            function I({ directoryKey: e, selectedPivot: t }) {
                const [r, I, w] = (0, b.c9)(),
                    T = u.wB(I.identifier, u.Ll),
                    k = (0, l.useMemo)(() => (0, f.Z)(r, I), [I, r]),
                    N = !!(0, n.v9)(k),
                    M = (0, v.Z)(r, w),
                    D = (0, l.useMemo)(() => (0, E.Z)(e), [e]),
                    R = (0, n.v9)(P.Z),
                    j = (0, n.v9)(D),
                    A = (0, C.Z)(),
                    x = (null == R ? void 0 : R.type) ? (0, y.Z)(null == R ? void 0 : R.type) : void 0;
                return (null == e ? void 0 : e.startsWith("/library/platforms/"))
                    ? l.createElement(h.Z, { icon: l.createElement(a.default, null), title: (0, d.Z)("There are no items available for this service") })
                    : (null == t ? void 0 : t.id) !== c.N_ || (null == j ? void 0 : j.filterRules.length) || ((null == R ? void 0 : R.type) !== p.U.Movie && (null == R ? void 0 : R.type) !== p.U.Show)
                        ? (null == t ? void 0 : t.id) === c.kW
                            ? l.createElement(h.Z, { icon: l.createElement(o.default, null), title: (0, d.Z)("There are no shared items of this type") })
                            : (null == j ? void 0 : j.filterRules.length)
                                ? l.createElement(
                                    h.Z,
                                    { description: (0, d.Z)("Use the menu above to change the active filter"), icon: x ? l.createElement(m.Z, { type: x }) : void 0, title: (0, d.Z)("The active filter has no matches") },
                                    l.createElement(Z.Z, { kind: g.Z.Primary, to: (0, S.Z)({ key: j.strippedKey }), onPress: A }, (0, d.Z)("Clear filter"))
                                )
                                : T
                                    ? N
                                        ? l.createElement(h.Z, { description: (0, d.Z)("Hang tight while we download all the data for what's on"), icon: l.createElement(s.default, null), title: (0, d.Z)("We're now building your Guide") })
                                        : l.createElement(
                                            h.Z,
                                            { description: (0, d.Z)("Please verify your channel mappings and refresh the Guide"), icon: l.createElement(s.default, null), title: (0, d.Z)("Your Guide is empty") },
                                            l.createElement(Z.Z, { kind: g.Z.Primary, to: (0, O.Z)(r.machineIdentifier, "manage", "dvr") }, (0, d.Z)("Go to DVR Settings"))
                                        )
                                    : M
                                        ? l.createElement(h.Z, {
                                            description: (0, d.Z)("Hang tight while we look for content"),
                                            icon: (null == w ? void 0 : w.type) ? l.createElement(m.Z, { type: w.type }) : void 0,
                                            title: w ? (0, d.Z)('"{directoryTitle}" is currently being updated', { directoryTitle: w.title }) : (0, d.Z)("This page is currently being updated"),
                                        })
                                        : (null == R ? void 0 : R.type) === p.U.Folder
                                            ? l.createElement(h.Z, { description: (0, d.Z)("There are no items in this folder"), icon: (null == w ? void 0 : w.type) ? l.createElement(m.Z, { type: w.type }) : void 0, title: (0, d.Z)("Empty Folder") })
                                            : l.createElement(
                                                h.Z,
                                                {
                                                    description: r.isFullOwnedServer ? (0, d.Z)("Expecting more? Visit the Manage Libraries page to add folders and scan library files.") : null,
                                                    icon: (null == w ? void 0 : w.type) ? l.createElement(m.Z, { type: w.type }) : void 0,
                                                    title: w ? (0, d.Z)('"{directoryTitle}" is empty', { directoryTitle: r.isCloud ? (null == t ? void 0 : t.title) : w.title }) : (0, d.Z)("This page is empty"),
                                                },
                                                r.isFullOwnedServer ? l.createElement(Z.Z, { kind: g.Z.Primary, to: (0, O.Z)(r.machineIdentifier, "manage", "libraries") }, (0, d.Z)("Manage Libraries")) : null
                                            )
                        : l.createElement(h.Z, {
                            description: (0, d.Z)("Use the menu above to change the active type"),
                            icon: l.createElement(i.default, null),
                            title: R.type === p.U.Movie ? (0, d.Z)("There are no Movies in your Watchlist") : (0, d.Z)("There are no Shows in your Watchlist"),
                        });
            }
        },
        15397: (e, t, r) => {
            r.d(t, { Z: () => P });
            var l = r(67294),
                n = r(5562),
                a = r(96937),
                i = r(13517),
                o = r(47124),
                s = r(89328),
                c = r(58593),
                u = r(45697),
                d = r.n(u),
                m = r(74570);
            function p(e) {
                const t = e["aria-label"],
                    r = e.className,
                    n = e.style,
                    a = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 560 361.506", id: "plex-icon-devices" };
                (a["aria-hidden"] = !t), (a.style = n), (a.className = m.Z.plexIcon + (r ? " " + r : ""));
                const i = [
                    l.createElement.apply(
                        l,
                        ["g", { stroke: "#e5a00d", strokeWidth: "2.95" }].concat([
                            l.createElement.apply(
                                l,
                                [
                                    "path",
                                    {
                                        d:
                                            "M429.683 360.028h-128.55c-3.944 0-7.606-1.77-10.045-4.86a12.609 12.609 0 01-2.384-10.87l12.32-50.859h128.774l12.322 50.86c.929 3.818.059 7.783-2.384 10.87a12.729 12.729 0 01-10.053 4.859zm-121.35-57.343l-10.607 43.78c-.345 1.436.263 2.484.655 2.988a3.448 3.448 0 002.753 1.328h128.55c1.483 0 2.366-.83 2.758-1.337.392-.495 1-1.543.655-2.98l-10.607-43.779z",
                                    },
                                ].concat([])
                            ),
                            l.createElement.apply(
                                l,
                                [
                                    "path",
                                    {
                                        d:
                                            "M304.68 302.685h-38.937c-2.566 0-4.642-2.068-4.642-4.623s2.076-4.623 4.642-4.623h38.937c2.564 0 4.641 2.068 4.641 4.623s-2.077 4.623-4.64 4.623zM541.294 302.685H426.146c-2.567 0-4.644-2.065-4.644-4.62s2.077-4.625 4.644-4.625h115.148c4.384 0 7.949-3.548 7.949-7.918v-26.599H265.929c-2.566 0-4.642-2.067-4.642-4.622 0-2.556 2.076-4.623 4.642-4.623h292.596v35.844c0 9.462-7.728 17.163-17.231 17.163z",
                                    },
                                ].concat([])
                            ),
                            l.createElement.apply(
                                l,
                                [
                                    "path",
                                    {
                                        d:
                                            "M553.884 258.922a4.628 4.628 0 01-4.641-4.622V18.63c0-4.361-3.565-7.91-7.949-7.91H189.53c-4.384 0-7.947 3.549-7.947 7.91v58.967c0 2.555-2.076 4.623-4.642 4.623-2.566 0-4.642-2.068-4.642-4.623V18.63c0-9.462 7.729-17.155 17.23-17.155h351.765c9.503 0 17.23 7.693 17.23 17.155V254.3a4.628 4.628 0 01-4.64 4.622zM100.935 360.028H18.04c-9.135 0-16.565-7.403-16.565-16.496v-154.33c0-9.092 7.43-16.495 16.565-16.495h82.895c9.135 0 16.565 7.403 16.565 16.495v154.33c0 9.093-7.43 16.496-16.565 16.496zM18.04 181.952c-4.017 0-7.28 3.25-7.28 7.25v154.33c0 4 3.263 7.249 7.28 7.249h82.895c4.017 0 7.281-3.249 7.281-7.25V189.203c0-4-3.264-7.25-7.28-7.25z",
                                    },
                                ].concat([])
                            ),
                            l.createElement.apply(
                                l,
                                [
                                    "path",
                                    {
                                        d:
                                            "M112.088 206.735H7.777c-2.566 0-4.642-2.068-4.642-4.623s2.076-4.623 4.642-4.623h104.311c2.566 0 4.642 2.068 4.642 4.623s-2.076 4.623-4.642 4.623zM112.088 323.353H7.777c-2.566 0-4.642-2.068-4.642-4.623s2.076-4.624 4.642-4.624h104.311c2.566 0 4.642 2.069 4.642 4.624 0 2.555-2.076 4.623-4.642 4.623zM67.384 194.348H55.462c-2.566 0-4.642-2.067-4.642-4.623 0-2.555 2.076-4.622 4.642-4.622h11.922c2.566 0 4.642 2.067 4.642 4.622 0 2.556-2.076 4.623-4.642 4.623zM59.488 349.359c-6.56 0-11.9-5.32-11.9-11.855 0-6.53 5.34-11.846 11.9-11.846 6.56 0 11.9 5.316 11.9 11.846 0 6.535-5.34 11.855-11.9 11.855zm0-14.458a2.611 2.611 0 00-2.616 2.603 2.618 2.618 0 002.616 2.608 2.618 2.618 0 002.616-2.608 2.611 2.611 0 00-2.616-2.603z",
                                    },
                                ].concat([])
                            ),
                            l.createElement.apply(
                                l,
                                [
                                    "path",
                                    {
                                        d:
                                            "M226.172 360.03h-91.097c-2.566 0-4.642-2.068-4.642-4.623s2.076-4.623 4.642-4.623h91.097c6.85 0 12.42-5.553 12.42-12.369V117.552c0-6.817-5.57-12.37-12.42-12.37H107.536c-6.846 0-12.417 5.553-12.417 12.37v40.277c0 2.555-2.076 4.623-4.642 4.623-2.566 0-4.642-2.068-4.642-4.623v-40.277c0-11.918 9.733-21.615 21.7-21.615h118.637c11.967 0 21.705 9.697 21.705 21.615v220.863c0 11.917-9.738 21.616-21.705 21.616z",
                                    },
                                ].concat([])
                            ),
                            l.createElement.apply(
                                l,
                                [
                                    "path",
                                    {
                                        d:
                                            "M242.129 136.557H92.848c-2.566 0-4.642-2.068-4.642-4.623s2.076-4.623 4.642-4.623h149.28c2.567 0 4.643 2.068 4.643 4.623s-2.076 4.623-4.642 4.623zM242.129 315.593h-106.46c-2.566 0-4.642-2.068-4.642-4.623s2.076-4.623 4.642-4.623h106.46c2.566 0 4.642 2.068 4.642 4.623s-2.076 4.623-4.642 4.623zM178.151 122.94h-17.059c-2.566 0-4.642-2.067-4.642-4.622 0-2.555 2.076-4.623 4.642-4.623h17.06c2.565 0 4.641 2.068 4.641 4.623s-2.076 4.623-4.642 4.623zM166.854 348.158c-8.287 0-15.028-6.715-15.028-14.968 0-8.252 6.741-14.97 15.028-14.97s15.028 6.718 15.028 14.97c0 8.253-6.741 14.968-15.028 14.968zm0-20.695c-3.169 0-5.744 2.567-5.744 5.727s2.575 5.724 5.744 5.724c3.169 0 5.744-2.564 5.744-5.724s-2.575-5.727-5.744-5.727zM380.652 30.415h-30.481a4.628 4.628 0 01-4.641-4.623 4.628 4.628 0 014.64-4.623h30.482a4.628 4.628 0 014.641 4.623 4.628 4.628 0 01-4.64 4.623z",
                                    },
                                ].concat([])
                            ),
                        ])
                    ),
                ];
                return t && i.unshift(l.createElement("title", null, t)), l.createElement.apply(l, ["svg", a].concat(i));
            }
            p.propTypes = { "aria-label": d().string, className: d().string, style: d().object };
            const y = p;
            var v = r(83126);
            function f(e) {
                const t = e["aria-label"],
                    r = e.className,
                    n = e.style,
                    a = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 560 560", id: "plex-icon-parental-controls" };
                (a["aria-hidden"] = !t), (a.style = n), (a.className = m.Z.plexIcon + (r ? " " + r : ""));
                const i = [
                    l.createElement.apply(
                        l,
                        ["g", void 0].concat([
                            l.createElement.apply(
                                l,
                                [
                                    "path",
                                    {
                                        d:
                                            "M548.3 559.273H361.152c-6.456 0-11.696-5.22-11.696-11.657V407.73c0-6.435 5.24-11.657 11.696-11.657H548.3c6.457 0 11.7 5.222 11.7 11.657v139.885c0 6.437-5.243 11.657-11.7 11.657zm-175.451-23.315h163.756v-116.57H372.849z",
                                    },
                                ].concat([])
                            ),
                            l.createElement.apply(
                                l,
                                ["path", { d: "M454.726 512.644c-6.457 0-11.697-5.22-11.697-11.657v-34.97c0-6.435 5.24-11.657 11.697-11.657 6.457 0 11.697 5.222 11.697 11.657v34.97c0 6.438-5.24 11.657-11.697 11.657z" }].concat([])
                            ),
                            l.createElement.apply(
                                l,
                                [
                                    "path",
                                    {
                                        d:
                                            "M454.727 489.33c12.92 0 23.392-10.44 23.392-23.314 0-12.876-10.472-23.314-23.392-23.314s-23.394 10.438-23.394 23.314c0 12.875 10.474 23.314 23.394 23.314zM524.905 419.388c-6.457 0-11.695-5.223-11.695-11.658v-23.314c0-32.127-26.222-58.286-58.484-58.286-32.26 0-58.484 26.159-58.484 58.286v23.314c0 6.435-5.24 11.658-11.697 11.658-6.457 0-11.697-5.223-11.697-11.658v-23.314c0-44.997 36.728-81.6 81.878-81.6 45.152 0 81.879 36.603 81.879 81.6v23.314c0 6.435-5.244 11.658-11.7 11.658zM11.7 559.772c-.936 0-1.872-.114-2.831-.347-6.293-1.565-10.083-7.884-8.516-14.131l14.06-56.002c6.854-27.23 26.856-48.773 53.548-57.632l103.821-34.482c24.4-10.165 35.816-50.429 38.272-65.7-17.919-16.367-34.599-40.987-34.599-63.135 0-8.253-2.456-11.657-3.743-12.287-3.65-.91-5.708-3.217-7.112-6.691-1.286-3.194-12.539-31.778-12.539-50.965 0-.956.117-1.912.352-2.821 1.286-5.106 4.865-12.59 11.345-16.973v-61.807C163.758 68.12 208.253.228 280.727.228c71.584 0 91.048 36.58 93.317 54.672 12.141 8.93 23.65 24.34 23.65 61.9v61.806c6.48 4.383 10.084 11.844 11.347 16.973.234.932.35 1.865.35 2.82 0 19.188-11.228 47.772-12.538 50.966-1.404 3.474-4.375 6.085-8.024 6.97-.351.35-2.83 3.755-2.83 12.008 0 21.1-8.353 32.034-13.358 38.562l-1.755 2.401c-3.603 5.362-10.878 6.761-16.212 3.218-5.38-3.59-6.83-10.818-3.252-16.18.749-1.096 1.638-2.285 2.62-3.591 4.024-5.246 8.562-11.19 8.562-24.41 0-17.416 7.23-27.091 14.083-31.638 3.369-9.139 8.726-25.715 9.264-36.533-.421-.933-.959-1.866-1.333-2.192-6.457 0-10.317-4.78-10.317-11.214v-69.967c0-34.318-11.065-41.313-15.79-44.297-2.831-1.795-7.603-4.803-8.282-11.214-.163-1.376.048-2.961.491-4.546-1.637-9.233-15.673-33.2-69.993-33.2-57.104 0-93.575 55.232-93.575 93.257v69.944c0 6.434-5.24 11.657-11.697 11.657.562 0 .35.792.048 1.678.515 10.842 5.918 27.488 9.264 36.604 6.854 4.57 14.083 14.222 14.083 31.638 0 15.69 15.51 36.673 30.833 49.31a11.633 11.633 0 014.257 8.975c0 14.805-13.498 75.539-53.992 92.349L75.33 453.739c-19.065 6.318-33.383 21.729-38.249 41.172l-14.06 56.002c-1.286 5.339-6.058 8.86-11.322 8.86z",
                                    },
                                ].concat([])
                            ),
                        ])
                    ),
                ];
                return t && i.unshift(l.createElement("title", null, t)), l.createElement.apply(l, ["svg", a].concat(i));
            }
            f.propTypes = { "aria-label": d().string, className: d().string, style: d().object };
            const b = f,
                Z = "PlexAccountUpsellPageContent-panel-odlXDa",
                h = "PlexAccountUpsellPageContent-panelIcon-BWl9px",
                g = "PlexAccountUpsellPageContent-panelTitle-b4qHxx",
                E = "PlexAccountUpsellPageContent-panelDescription-m5JOVh";
            function P() {
                return l.createElement(
                    i.Z,
                    { description: (0, n.Z)("Some benefits to a Plex account:"), title: (0, n.Z)("Sign up for a free account to continue") },
                    l.createElement(
                        "div",
                        { className: "PlexAccountUpsellPageContent-container-P2gjsS" },
                        l.createElement(
                            "div",
                            { className: Z },
                            l.createElement(y, { className: h }),
                            l.createElement("div", { className: g }, (0, n.Z)("One App, Any Device")),
                            l.createElement("div", { className: E }, (0, n.Z)("Pick up whatever you were watching exactly where you left off on any device"))
                        ),
                        l.createElement(
                            "div",
                            { className: Z },
                            l.createElement(v.Z, { className: h }),
                            l.createElement("div", { className: g }, (0, n.Z)("Save Your Favorites")),
                            l.createElement("div", { className: E }, (0, n.Z)("Add a TIDAL subscription to save your favorite music and playlists"))
                        ),
                        l.createElement(
                            "div",
                            { className: Z },
                            l.createElement(b, { className: h }),
                            l.createElement("div", { className: g }, (0, n.Z)("Parental Controls")),
                            l.createElement("div", { className: E }, (0, n.Z)("Enable parental controls to keep things kid-friendly, or create separate accounts for your childish roommates"))
                        )
                    ),
                    l.createElement(c.Z, null, l.createElement(a.Z, { kind: o.Z.Primary, size: s.Z.Large, to: "#!/signUp" }, (0, n.Z)("Sign Up")))
                );
            }
        },
        30622: (e, t, r) => {
            r.d(t, { Z: () => c });
            var l = r(28216),
                n = r(96840),
                a = r(84936),
                i = r(34581),
                o = r(24453);
            function s(e) {
                return e && a.Z.parseUri(e).pathname;
            }
            const c = function ({ machineIdentifier: e, providerIdentifier: t, directoryKey: r, selectedPivot: a, contentDirectory: c }) {
                const u = (0, l.v9)((0, i.Z)(e, t, null == a ? void 0 : a.key)),
                    d = r || (null != u ? u : (0, o.Z)(a)),
                    m = s(d),
                    p = s(null == a ? void 0 : a.key),
                    y = s(null == c ? void 0 : c.key),
                    v = y ? new RegExp(`^${y}(/\\w+)+`) : void 0,
                    f = m && (null == v ? void 0 : v.test(m));
                return p && (null == v ? void 0 : v.test(p)) && !f ? (n.Z.warn(`Unknown directory key ${d}, using pivot instead`), null == a ? void 0 : a.key) : d;
            };
        },
        56146: (e, t, r) => {
            r.d(t, { Z: () => u });
            var l = r(67294),
                n = r(28216),
                a = r(17524),
                i = r(52026),
                o = r(93788),
                s = r(31235),
                c = r(4704);
            const u = function (e) {
                const [t, r, u] = (0, s.c9)(),
                    d = (0, l.useMemo)(
                        () =>
                            (function (e, t, r) {
                                return a.wB(t.identifier, a.Y3) ? (r ? (0, o.Z)(e, r) : () => {}) : a.wB(t.identifier, a.Ll) ? (0, i.Z)(e, t) : () => {};
                            })(t, r, u),
                        [u, r, t]
                    ),
                    m = !(!(0, n.v9)(d) && !(null == u ? void 0 : u.refreshing)),
                    p = (0, c.Z)(m);
                (0, l.useEffect)(() => {
                    let t;
                    return (
                        m
                            ? (t = window.setInterval(() => {
                                null == e || e();
                            }, 1e4))
                            : !m && p && (null == e || e()),
                            () => {
                                window.clearInterval(t);
                            }
                    );
                }, [e, m, p]);
            };
        },
        38825: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(22222),
                n = r(77927),
                a = r(79440);
            const i = function (e) {
                return (0, l.P1)((0, n.Z)("directoryListStyles"), (0, a.Z)(e), (t, r) => {
                    if (!e || !r.length) return;
                    const l = t[e];
                    return l && r.includes(l) ? l : r[0];
                });
            };
        },
        79440: (e, t, r) => {
            r.d(t, { Z: () => s });
            var l = r(22222),
                n = r(36388),
                a = r(41538),
                i = r(92767),
                o = r(84893);
            const s = function (e) {
                return (0, l.P1)(i.Z, (t) => {
                    const r = t ? (0, o.Z)(t) : void 0;
                    if (!r || !e) return [a.n.Grid];
                    if ((0, n.Z)(e)) return [a.n.Grid];
                    if (r.type === a.U.Folder) return [a.n.Folder];
                    switch (r.type) {
                        case a.U.Movie:
                        case a.U.Show:
                        case a.U.Album:
                        case a.U.Episode:
                            return r.Sort ? [a.n.Grid, a.n.Details, a.n.Table] : [a.n.Grid, a.n.Details];
                        case a.U.Artist:
                        case a.U.Season:
                            return r.Sort ? [a.n.Grid, a.n.Table] : [a.n.Grid];
                        case a.U.Track:
                            return [r.Sort ? a.n.Table : a.n.Grid];
                        default:
                            return [a.n.Grid];
                    }
                });
            };
        },
        31356: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(22222),
                n = r(41834),
                a = r(6469);
            const i = function (e) {
                return (0, l.P1)(a.Z, (t) => (e ? (0, n.Z)(e, t) : void 0));
            };
        },
        6469: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(22222),
                n = r(84893),
                a = r(92767);
            const i = (0, l.P1)(a.Z, (e) => (e ? (0, n.Z)(e) : void 0));
        },
        20090: (e, t, r) => {
            r.d(t, { Z: () => d });
            var l = r(2098),
                n = Object.defineProperty,
                a = Object.defineProperties,
                i = Object.getOwnPropertyDescriptors,
                o = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                c = Object.prototype.propertyIsEnumerable,
                u = (e, t, r) => (t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            const d = function (e, t) {
                const r = [...e];
                if (t.filter.filterType === l.H_.Boolean) {
                    const e = r.findIndex((e) => e.filter.filter === t.filter.filter),
                        l = -1 === e ? 0 : e,
                        m =
                            ((n = ((e, t) => {
                                for (var r in t || (t = {})) s.call(t, r) && u(e, r, t[r]);
                                if (o) for (var r of o(t)) c.call(t, r) && u(e, r, t[r]);
                                return e;
                            })({}, t)),
                                (d = { value: "string" == typeof t.value ? "1" === t.value : t.value }),
                                a(n, i(d)));
                    -1 === e ? r.push(m) : r.splice(l, 1, m);
                } else r.find((e) => e.filter.filter === t.filter.filter && e.value === t.value) || r.push(t);
                var n, d;
                return r;
            };
        },
        41834: (e, t, r) => {
            r.d(t, { Z: () => s });
            var l = r(84936),
                n = r(30264),
                a = r(20272),
                i = r(20090);
            function o(e) {
                const t = (0, a._2)(n.Z).find((t) => n.Z[t] === e);
                return t ? n.Z[t] : void 0;
            }
            const s = function (e, t) {
                if (!(null == t ? void 0 : t.Filter)) return { strippedKey: e, filterRules: [] };
                const r = t.Filter,
                    { params: n, pathname: a } = l.Z.parseUri(e, { decoder: (e) => e });
                let s = [];
                for (const e in n)
                    if (n.hasOwnProperty(e)) {
                        let t = s;
                        const l = n[e],
                            a = r.find((t) => e.startsWith(t.filter));
                        if (!a) continue;
                        const c = o(`${e.substr(a.filter.length)}=`);
                        if (!c) continue;
                        "string" == typeof l ? (t = (0, i.Z)(t, { filter: a, operator: c, value: l })) : Array.isArray(l) && (t = l.reduce((e, t) => ("string" != typeof t ? e : (0, i.Z)(e, { filter: a, operator: c, value: t })), t)),
                        s !== t && ((s = t), delete n[e]);
                    }
                return { strippedKey: l.Z.join(a, n, { stringifyOptions: { encode: !1 } }), filterRules: s };
            };
        },
        79024: (e, t, r) => {
            r.d(t, { Z: () => m });
            var l = r(84936),
                n = Object.defineProperty,
                a = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable,
                s = (e, t, r) => (t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
                c = (e, t) => {
                    for (var r in t || (t = {})) i.call(t, r) && s(e, r, t[r]);
                    if (a) for (var r of a(t)) o.call(t, r) && s(e, r, t[r]);
                    return e;
                };
            let u, d;
            function m(e, t = window.location.hash) {
                const r = (function (e) {
                    if (u === e) return d;
                    const t = e.split("?"),
                        r = t.length > 1 ? t[1] : void 0,
                        n = r ? l.Z.parseParams(r) : {};
                    return (u = e), (d = { url: t[0], params: n }), d;
                })(t);
                return l.Z.join(r.url, c(c({}, r.params), e));
            }
        },
        24453: (e, t, r) => {
            r.d(t, { Z: () => a });
            var l = r(26636);
            const n = { [l.GG.HomeWatchlist]: "/library/sections/watchlist/all", [l.GG.SharedItems]: "/library/shared/all" };
            function a(e) {
                if (null == e ? void 0 : e.key) return Object.keys(n).includes(e.key) ? n[e.key] : e.key;
            }
        },
        64780: (e, t, r) => {
            r.d(t, { Z: () => a });
            var l = r(26512),
                n = r(67586);
            const a = function (e, t, r, a) {
                var i;
                if (!r) return;
                if ((0, n.Z)(a)) return;
                const o = (null == (i = r.pivots) ? void 0 : i.includes(a)) ? { pivot: a.id || a.key } : { pageType: a.type, key: a.key };
                return (0, l.Z)(e, t, r, o);
            };
        },
        81383: (e, t, r) => {
            r.d(t, { Z: () => _ });
            var l = r(67294),
                n = r(28216),
                a = r(41542),
                i = r(34873),
                o = r(53162),
                s = r(96940),
                c = r(71594),
                u = r(57358),
                d = r(86953),
                m = r(27082),
                p = r(5562),
                y = r(93021),
                v = r(51977),
                f = r(48571),
                b = r(39537),
                Z = r(94173),
                h = r(85180),
                g = r(86234),
                E = r(10692),
                P = r(41538),
                S = r(76033),
                C = r(87892),
                O = r(31235),
                I = r(46598),
                w = r(77045),
                T = r(65233),
                k = r(54778),
                N = r(13517),
                M = r(75212),
                D = r(8980),
                R = r(41768),
                j = r(31298),
                A = r(30622),
                x = r(51139);
            const F = {
                content: "WatchlistZeroStatePageContent-content-CTxhhf EmptyPageContent-content-soks97",
                icon: "WatchlistZeroStatePageContent-icon-Sxn8N4 EmptyPageContent-icon-F09nMX",
                title: "WatchlistZeroStatePageContent-title-vRbmff",
                description: "WatchlistZeroStatePageContent-description-Hr6JQY",
                scroller: "WatchlistZeroStatePageContent-scroller-E798ge VirtualListScroller-scroller-QR8ROA Scroller-scroller-S6_dko",
                doneContainer: "WatchlistZeroStatePageContent-doneContainer-ptSPXC",
                posterContainer: "WatchlistZeroStatePageContent-posterContainer-gJlKBG",
                hoverTag: "WatchlistZeroStatePageContent-hoverTag-yhL8U5",
                watchlistedTag: "WatchlistZeroStatePageContent-watchlistedTag-EzHKAy",
            };
            var L = Object.defineProperty,
                H = Object.defineProperties,
                V = Object.getOwnPropertyDescriptors,
                z = Object.getOwnPropertySymbols,
                U = Object.prototype.hasOwnProperty,
                B = Object.prototype.propertyIsEnumerable,
                K = (e, t, r) => (t in e ? L(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
                G = (e, t) => {
                    for (var r in t || (t = {})) U.call(t, r) && K(e, r, t[r]);
                    if (z) for (var r of z(t)) B.call(t, r) && K(e, r, t[r]);
                    return e;
                },
                q = (e, t) => H(e, V(t));
            const W = l.forwardRef((e, t) => {
                    var r = e,
                        { item: a, onTogglePress: o } = r,
                        d = ((e, t) => {
                            var r = {};
                            for (var l in e) U.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                            if (null != e && z) for (var l of z(e)) t.indexOf(l) < 0 && B.call(e, l) && (r[l] = e[l]);
                            return r;
                        })(r, ["item", "onTogglePress"]);
                    const [m, y] = (0, O.c9)(),
                        E = (0, n.I0)(),
                        P = (0, k.Z)(d),
                        [S, C] = (0, w.Z)(),
                        N = (0, n.v9)(u.Z),
                        [M, D] = (0, l.useState)(!1),
                        R = (0, l.useMemo)(() => (0, h.Z)({ width: d.cellWidth, aspectRatio: Z.s4 }), [d.cellWidth]),
                        A = (0, I.Z)(q(G({}, R), { server: m, provider: y, url: null == a ? void 0 : a.thumb })),
                        x = (0, l.useCallback)(() => {
                            if (!a) return;
                            const e = !M;
                            E(g.Z.actions.toggleWatchlistRequested({ server: m, provider: y, stableUser: N, sourceURI: a.sourceURI, ratingKey: a.ratingKey, added: e })), D(e), o(e);
                        }, [E, M, a, o, y, m, N]);
                    return a
                        ? l.createElement(
                            "div",
                            { ref: (0, j.Z)(t, P.cellRef), style: P.style },
                            l.createElement(
                                s.Is,
                                { width: d.cellWidth },
                                l.createElement(
                                    "div",
                                    { ref: C, className: F.posterContainer },
                                    l.createElement(
                                        s.Wf,
                                        { width: d.cellWidth },
                                        l.createElement(T.Z, G({ className: F.image, fit: T.k.Cover, src: A }, R)),
                                        l.createElement(
                                            s.qg,
                                            { posterStyle: "portrait", onPress: x },
                                            S
                                                ? l.createElement(
                                                    "div",
                                                    { className: F.hoverTag },
                                                    l.createElement(c.x, { align: "center", as: "div", color: "inherit", level: "caption" }, M ? (0, p.Z)("Remove from Watchlist") : (0, p.Z)("Add to Watchlist"))
                                                )
                                                : null,
                                            M ? l.createElement("div", { className: F.watchlistedTag }, l.createElement(i.default, null)) : null
                                        )
                                    )
                                ),
                                l.createElement(
                                    s.oX,
                                    { posterStyle: "portrait" },
                                    l.createElement(c.x, { color: "inherit", level: "body-2", numberOfLines: 1 }, a.title),
                                    l.createElement(c.x, { color: "muted", level: "body-2", numberOfLines: 1 }, a.type === b.pG.Movie ? l.createElement(f.Z, { metadataItem: a }) : l.createElement(v.Z, { metadataItem: a }))
                                )
                            )
                        )
                        : null;
                }),
                _ = function ({ onDone: e }) {
                    const t = (0, n.I0)(),
                        [r, s] = (0, O.c9)(),
                        u = (0, n.v9)(M.Z),
                        [v, f] = (0, l.useState)(0),
                        [b, Z] = (0, l.useState)(!1),
                        h = (0, x.Z)(y.G.IncludeDiscoverSource),
                        g = (0, A.Z)({ machineIdentifier: r.machineIdentifier, providerIdentifier: s.identifier, directoryKey: "/hubs/sections/home/top_watchlisted" }),
                        I = (0, l.useMemo)(() => (0, d.Z)({ serverIdentifier: r.machineIdentifier, providerIdentifier: s.identifier, key: g }), [g, s.identifier, r.machineIdentifier]),
                        w = (0, l.useMemo)(() => (I ? (0, S.Z)(I) : () => {}), [I]),
                        T = (0, n.v9)(w);
                    (0, l.useEffect)(() => {
                        I &&
                        (0, m.c9)(() => {
                            t(E.Z.actions.added({ metadataItemStates: {}, metadataLists: [{ sourceURI: I, items: [], offset: 0 }] }));
                        });
                    }, [t, I]),
                        (0, l.useEffect)(() => {
                            h && T && !T.isPopulated && !T.isPending && t(E.Z.actions.fetchAllRequested({ server: r, provider: s, sourceURI: T.sourceURI }));
                        }, [t, h, T, s, r]);
                    const k = (0, l.useCallback)(
                            (e) => {
                                f(e ? v + 1 : v - 1);
                            },
                            [v]
                        ),
                        j = (0, l.useCallback)(() => {
                            Z(!0), e();
                        }, [e]),
                        L = (0, l.useCallback)((e) => l.createElement(O.ZP, { key: e.cellIndex, machineIdentifier: r.machineIdentifier, providerIdentifier: s.identifier }, l.createElement(W, q(G({}, e), { onTogglePress: k }))), [
                            k,
                            s.identifier,
                            r.machineIdentifier,
                        ]),
                        H = (0, l.useMemo)(() => (0, C.Z)({ listType: P.U.Movie, listStyle: P.n.Grid, columnWidth: u, titleCount: 2 }), [u]);
                    return !h || ((null == T ? void 0 : T.isPopulated) && 0 === (null == T ? void 0 : T.totalSize))
                        ? l.createElement(N.Z, {
                            contentClassName: F.content,
                            description: l.createElement(
                                c.x,
                                { color: "muted", level: "inherit" },
                                (0, p.Z)("Add movies and shows to your Watchlist to catch up on later. Watching an item in the list or marking it as watched will remove it from the list.")
                            ),
                            descriptionClassName: F.description,
                            icon: l.createElement(i.default, null),
                            iconClassName: F.icon,
                            title: l.createElement(c.x, { color: "primary", level: "heading-1" }, (0, p.Z)("Watchlist")),
                            titleClassName: F.title,
                        })
                        : (null == T ? void 0 : T.isPopulated) && void 0 !== (null == T ? void 0 : T.totalSize)
                            ? l.createElement(
                                N.Z,
                                {
                                    contentClassName: F.content,
                                    description: l.createElement(
                                        c.x,
                                        { color: "muted", level: "inherit" },
                                        (0, p.Z)(
                                            "Add movies and shows to your Watchlist to catch up on later. Watching an item in the list or marking it as watched will remove it from the list. Get started by selecting items below to add to your Watchlist."
                                        )
                                    ),
                                    descriptionClassName: F.description,
                                    icon: l.createElement(i.default, null),
                                    iconClassName: F.icon,
                                    title: l.createElement(c.x, { color: "primary", level: "heading-1" }, (0, p.Z)("Watchlist")),
                                    titleClassName: F.title,
                                },
                                l.createElement(D.Z, { autoScroll: !1, cellComponentFactory: L, className: F.scroller, items: T.items, keyPropName: "key", layout: H, totalSize: T.totalSize }),
                                v > 0 ? l.createElement("div", { className: F.doneContainer }, l.createElement(o.gI, { align: "right" }, l.createElement(a.zx, { color: "accent", isWaiting: b, onPress: j }, (0, p.Z)("Done")))) : null
                            )
                            : l.createElement(N.Z, null, l.createElement(R.Z, null));
                };
        },
        59398: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(67294),
                n = r(28216),
                a = r(5513);
            const i = function (e) {
                const t = (0, n.I0)();
                return (0, l.useCallback)(
                    (r) => {
                        const l = r.currentTarget.getAttribute("href");
                        l && (0 === r.button || r.touches) && (r.stopPropagation(), t((0, a.c4)({ pathname: l, replace: !0 }))), null == e || e(r);
                    },
                    [t, e]
                );
            };
        },
        26606: (e, t, r) => {
            r.d(t, { Z: () => a });
            var l = r(67294);
            function n({ className: e, children: t }) {
                return l.createElement("div", { className: e }, t);
            }
            n.defaultProps = { className: "PageHeaderRight-pageHeaderRight-hBWIio" };
            const a = n;
        },
        8732: (e, t, r) => {
            r.d(t, { Z: () => i });
            var l = r(67294),
                n = r(28216),
                a = r(5513);
            const i = function (e) {
                const { tab: t, component: r, onPress: i } = e,
                    o = (0, n.I0)(),
                    s = (0, l.useCallback)(
                        (e) => {
                            const r = e.currentTarget.getAttribute("href");
                            r && (0 === e.button || e.touches) && (e.stopPropagation(), o((0, a.c4)({ pathname: r, replace: !0 }))), i(t.id);
                        },
                        [t, i, o]
                    );
                return l.createElement(r, { isDisabled: t.isDisabled, isSelected: t.isSelected, to: t.route, onPress: s }, t.title);
            };
        },
        42934: (e, t, r) => {
            r.d(t, { Z: () => u });
            var l = r(67294),
                n = Object.defineProperty,
                a = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable,
                s = (e, t, r) => (t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            function c(e) {
                var t = e,
                    { children: r } = t,
                    n = ((e, t) => {
                        var r = {};
                        for (var l in e) i.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && a) for (var l of a(e)) t.indexOf(l) < 0 && o.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(t, ["children"]);
                return l.createElement(
                    "div",
                    ((e, t) => {
                        for (var r in t || (t = {})) i.call(t, r) && s(e, r, t[r]);
                        if (a) for (var r of a(t)) o.call(t, r) && s(e, r, t[r]);
                        return e;
                    })({}, n),
                    r
                );
            }
            c.defaultProps = { className: "PrimaryPageHeader-pageHeader-SBemrw PageHeader-pageHeader-e2k66t" };
            const u = c;
        },
        48285: (e, t, r) => {
            r.d(t, { Z: () => a });
            var l = r(67294),
                n = r(26606);
            const a = function ({ children: e }) {
                return l.createElement(n.Z, { className: "PrimaryPageHeaderRight-pageHeaderRight-PLi1N6 PageHeaderRight-pageHeaderRight-hBWIio" }, e);
            };
        },
        10241: (e, t, r) => {
            r.d(t, { Z: () => M });
            var l = r(67294),
                n = r(22222),
                a = r(70488),
                i = r(87691),
                o = r(77909),
                s = r(74995),
                c = r(21223),
                u = r(92129),
                d = r(59701),
                m = r(32553);
            const p = (0, n.P1)((0, d.Z)("features"), (e) =>
                (0, m.Z)(
                    e,
                    (e) => e.id,
                    () => !0
                )
            );
            var y = r(64780),
                v = r(28216),
                f = r(93966),
                b = r(5513),
                Z = r(88050),
                h = r(96335),
                g = r(93474),
                E = r(8732);
            const P = (0, v.$j)(null, function (e, t) {
                const { serverEntityID: r, providerEntityID: l, providerMetricsIdentifier: n, sourceDirectory: a, tab: i, metricsPage: o } = t;
                return {
                    onPress(t, s) {
                        s || e((0, b.zt)({ serverEntityID: r, providerEntityID: l, directoryID: a.id, pivotKey: i.pivotKey })),
                            (0, f.DB)("metrics").trackEvent({ event: h.Ip, interaction: !0, properties: { page: o, identifier: n, action: Z.oG, context: i.context, origin: g.zQ } });
                    },
                };
            })(E.Z);
            var S = r(30065),
                C = Object.defineProperty,
                O = Object.defineProperties,
                I = Object.getOwnPropertyDescriptors,
                w = Object.getOwnPropertySymbols,
                T = Object.prototype.hasOwnProperty,
                k = Object.prototype.propertyIsEnumerable,
                N = (e, t, r) => (t in e ? C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            const M = (0, i.Z)(function () {
                return (0, n.P1)(
                    a.Z,
                    (0, n.P1)(
                        (e, { sourceDirectory: t }) => t,
                        (e, { directoryKey: t }) => t,
                        (0, s.Z)(),
                        (0, o.Z)(),
                        p,
                        (e, t, r, l, n) => {
                            const a = (0, u.Z)(e, t);
                            return e.pivots.reduce((t, i) => {
                                if (i.id === c.Ig && i.requires && !n[i.requires]) return t;
                                const o = (0, y.Z)(r, l, e, i);
                                return o ? (t.push({ pivotKey: i.key, title: i.title, route: o, isSelected: !(!a || i.key !== a.key), isDisabled: !i.key, context: i.context }), t) : t;
                            }, []);
                        }
                    ),
                    (e, t) => ({ providerMetricsIdentifier: e.metricsIdentifier, tabs: t })
                );
            })(function (e) {
                return l.createElement(
                    S.Z,
                    ((t = ((e, t) => {
                        for (var r in t || (t = {})) T.call(t, r) && N(e, r, t[r]);
                        if (w) for (var r of w(t)) k.call(t, r) && N(e, r, t[r]);
                        return e;
                    })({}, e)),
                        O(t, I({ component: P })))
                );
                var t;
            });
        },
        30065: (e, t, r) => {
            r.d(t, { Z: () => U });
            var l = r(67294),
                n = r(52354),
                a = r(94184),
                i = r.n(a),
                o = r(91008),
                s = r(82378);
            var c = Object.defineProperty,
                u = Object.getOwnPropertySymbols,
                d = Object.prototype.hasOwnProperty,
                m = Object.prototype.propertyIsEnumerable,
                p = (e, t, r) => (t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            function y(e) {
                const t = e,
                    { className: r, children: n, isSelected: a } = t,
                    c = ((e, t) => {
                        var r = {};
                        for (var l in e) d.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && u) for (var l of u(e)) t.indexOf(l) < 0 && m.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(t, ["className", "children", "isSelected"]);
                return l.createElement(
                    o.Z,
                    ((e, t) => {
                        for (var r in t || (t = {})) d.call(t, r) && p(e, r, t[r]);
                        if (u) for (var r of u(t)) m.call(t, r) && p(e, r, t[r]);
                        return e;
                    })({ className: i()(r, a && "PageHeaderTabButton-isSelected-gqt8tL"), "data-testid": "tabButton", size: s.HC }, c),
                    n
                );
            }
            y.defaultProps = { className: "PageHeaderTabButton-button-aP9Avj Button-button-TxWeuE Link-link-SxPFpG" };
            const v = y;
            var f = r(7400),
                b = r(94372),
                Z = r(21914),
                h = r(12038),
                g = r(24334),
                E = r(7796);
            var P = Object.defineProperty,
                S = Object.defineProperties,
                C = Object.getOwnPropertyDescriptors,
                O = Object.getOwnPropertySymbols,
                I = Object.prototype.hasOwnProperty,
                w = Object.prototype.propertyIsEnumerable,
                T = (e, t, r) => (t in e ? P(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            const k = { placement: "bottom-start", modifiers: [{ name: "offset", options: { offset: [parseInt(E.Z.pageHeaderTabButtonLeftRightMargin, 10)] } }] },
                N = function (e) {
                    const t = e,
                        { tabs: r, component: n, onPress: a } = t,
                        o = ((e, t) => {
                            var r = {};
                            for (var l in e) I.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                            if (null != e && O) for (var l of O(e)) t.indexOf(l) < 0 && w.call(e, l) && (r[l] = e[l]);
                            return r;
                        })(t, ["tabs", "component", "onPress"]),
                        { menuButtonID: s, isMenuOpen: c, onMenuButtonPress: u, onMenuClose: d } = (0, g.Z)(),
                        m = (0, l.useCallback)(
                            (e) => {
                                d(), a && a(e);
                            },
                            [a, d]
                        ),
                        p = r.find((e) => e.isSelected) || r[0];
                    return l.createElement(
                        "div",
                        { className: "PageHeaderTabDropdown-container-s6_y_K", "data-testid": "tabDropDown", id: s },
                        l.createElement(
                            v,
                            { className: "PageHeaderTabDropdown-button-HKmBUj PageHeaderTabButton-button-aP9Avj Button-button-TxWeuE Link-link-SxPFpG", isSelected: p.isSelected, onPress: u },
                            l.createElement(
                                "div",
                                { className: "PageHeaderTabDropdown-buttonContents-X2SPy2" },
                                l.createElement("div", { className: "PageHeaderTabDropdown-title-eSs4os" }, p.title),
                                l.createElement(f.Z, {
                                    className: i()("PageHeaderTabDropdown-disclosureArrow-mFj1jP DisclosureArrow-disclosureArrow-NTDkGd", p.isSelected && "PageHeaderTabDropdown-isSelected-SvXSbi"),
                                    direction: c ? Z.UP : Z.WV,
                                })
                            )
                        ),
                        l.createElement(
                            b.Z,
                            { isOpen: c, options: k, target: s, onMenuClose: d },
                            r.map((e, t) => {
                                return l.createElement(
                                    n,
                                    ((r = ((e, t) => {
                                        for (var r in t || (t = {})) I.call(t, r) && T(e, r, t[r]);
                                        if (O) for (var r of O(t)) w.call(t, r) && T(e, r, t[r]);
                                        return e;
                                    })({}, o)),
                                        (a = { key: t, component: h.Z, tab: e, onPress: m }),
                                        S(r, C(a)))
                                );
                                var r, a;
                            })
                        )
                    );
                };
            var M = r(8732);
            var D = Object.defineProperty,
                R = Object.defineProperties,
                j = Object.getOwnPropertyDescriptors,
                A = Object.getOwnPropertySymbols,
                x = Object.prototype.hasOwnProperty,
                F = Object.prototype.propertyIsEnumerable,
                L = (e, t, r) => (t in e ? D(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
                H = (e, t) => {
                    for (var r in t || (t = {})) x.call(t, r) && L(e, r, t[r]);
                    if (A) for (var r of A(t)) F.call(t, r) && L(e, r, t[r]);
                    return e;
                },
                V = (e, t) => R(e, j(t));
            function z(e) {
                const t = e,
                    { tabs: r, component: a, hideSingleTabs: i } = t,
                    o = ((e, t) => {
                        var r = {};
                        for (var l in e) x.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && A) for (var l of A(e)) t.indexOf(l) < 0 && F.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(t, ["tabs", "component", "hideSingleTabs"]),
                    [s, c] = (0, l.useState)(0),
                    u = (0, l.useCallback)((e) => {
                        c(e.width);
                    }, []),
                    [d, m] = (0, l.useState)(0),
                    p = (0, l.useCallback)((e) => {
                        m(e.width);
                    }, []),
                    y = r.length < 2,
                    f = r.length > 1 && d > s;
                return y && i
                    ? null
                    : l.createElement(
                        n.Z,
                        { className: "TabsPageHeaderCenter-pageHeaderCenter-FVRU4z PageHeaderCenter-pageHeaderCenter-mMF86x", ignoreHeight: !0, onMeasure: u },
                        f
                            ? l.createElement(N, V(H({}, o), { component: a, tabs: r }))
                            : l.createElement(
                                n.Z,
                                { ignoreHeight: !0, onMeasure: p },
                                r.map((e, t) => l.createElement(a, V(H({}, o), { key: t, component: v, tab: e })))
                            )
                    );
            }
            z.defaultProps = { component: M.Z, hideSingleTabs: !0 };
            const U = z;
        },
        65625: (e, t, r) => {
            r.d(t, { Z: () => g });
            var l = r(28216),
                n = r(22222),
                a = r(76249),
                i = r(70488),
                o = r(74253),
                s = r(55885),
                c = r(17524),
                u = r(45399),
                d = r(48523),
                m = r(67294),
                p = r(5562),
                y = r(91008),
                v = r(60528),
                f = r(18039),
                b = r(24164);
            function Z(e) {
                const { className: t, machineIdentifier: r, shouldRender: l, showButton: n } = e;
                return l
                    ? m.createElement(
                        "div",
                        { className: t },
                        m.createElement(
                            "div",
                            { className: "ProgramGuideGracenoteMigrationBanner-messageContainer-MuKgar" },
                            m.createElement(b.Z, { className: "ProgramGuideGracenoteMigrationBanner-icon-bE3jfm" }),
                            m.createElement(
                                "div",
                                { className: "ProgramGuideGracenoteMigrationBanner-message-AoUi6c" },
                                (0, p.Z)("Guide data for this DVR will no longer be updated after January 1, 2021. Please delete and recreate a new DVR and reschedule your recordings to ensure continued coverage.")
                            )
                        ),
                        n ? m.createElement(y.Z, { className: "ProgramGuideGracenoteMigrationBanner-button-VRS8lm Button-button-TxWeuE Link-link-SxPFpG", kind: v.Py, to: (0, f.Z)(r, "manage", "dvr") }, (0, p.Z)("Get Started")) : null
                    )
                    : null;
            }
            Z.defaultProps = { className: "ProgramGuideGracenoteMigrationBanner-container-NePMOu", showButton: !0 };
            const h = Z,
                g = (0, l.$j)(function () {
                    return (0, n.P1)(o.Z, i.Z, (0, s.Z)(u.lY), (e, t, r) => {
                        const l = c.wB(t.identifier, c.Ll),
                            n = e.version && (0, d.Z)(e.version, a.Z.gracenoteAttribution);
                        return { machineIdentifier: e.machineIdentifier, shouldRender: l && n && r && "Plex" === t.epgSource && e.isFullOwnedServer };
                    });
                })(h);
        },
        14838: (e, t, r) => {
            r.d(t, { Z: () => m });
            var l = r(67294),
                n = r(90653),
                a = r(68576),
                i = r(95105),
                o = Object.defineProperty,
                s = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                u = Object.prototype.propertyIsEnumerable,
                d = (e, t, r) => (t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
            const m = function (e) {
                const t = e,
                    { children: r } = t,
                    o = ((e, t) => {
                        var r = {};
                        for (var l in e) c.call(e, l) && t.indexOf(l) < 0 && (r[l] = e[l]);
                        if (null != e && s) for (var l of s(e)) t.indexOf(l) < 0 && u.call(e, l) && (r[l] = e[l]);
                        return r;
                    })(t, ["children"]);
                return l.createElement(
                    a.Z,
                    ((e, t) => {
                        for (var r in t || (t = {})) c.call(t, r) && d(e, r, t[r]);
                        if (s) for (var r of s(t)) u.call(t, r) && d(e, r, t[r]);
                        return e;
                    })({ className: i.Z.innerEmptyPage, contentClassName: i.Z.innerEmptyPageContent, scrollDirection: n.Hn }, o),
                    r
                );
            };
        },
        88282: (e, t, r) => {
            r.d(t, { Z: () => s });
            var l = r(45697),
                n = r.n(l),
                a = r(67294),
                i = r(74570);
            function o(e) {
                const t = e["aria-label"],
                    r = e.className,
                    l = e.style,
                    n = { viewBox: "0 0 560 560", xmlns: "http://www.w3.org/2000/svg", strokeMiterlimit: "1.414", strokeLinejoin: "round", id: "plex-icon-sort-ascending-560" };
                (n["aria-hidden"] = !t), (n.style = l), (n.className = i.Z.plexIcon + (r ? " " + r : ""));
                const o = [a.createElement.apply(a, ["path", { d: "m280 80l-200 200h160v200h80v-200h160l-200-200" }].concat([]))];
                return t && o.unshift(a.createElement("title", null, t)), a.createElement.apply(a, ["svg", n].concat(o));
            }
            o.propTypes = { "aria-label": n().string, className: n().string, style: n().object };
            const s = o;
        },
        96923: (e, t, r) => {
            r.d(t, { Z: () => s });
            var l = r(45697),
                n = r.n(l),
                a = r(67294),
                i = r(74570);
            function o(e) {
                const t = e["aria-label"],
                    r = e.className,
                    l = e.style,
                    n = { viewBox: "0 0 560 560", xmlns: "http://www.w3.org/2000/svg", strokeMiterlimit: "1.414", strokeLinejoin: "round", id: "plex-icon-sort-descending-560" };
                (n["aria-hidden"] = !t), (n.style = l), (n.className = i.Z.plexIcon + (r ? " " + r : ""));
                const o = [a.createElement.apply(a, ["path", { d: "m80 280h160v-200h80v200h160l-200 200-200-200" }].concat([]))];
                return t && o.unshift(a.createElement("title", null, t)), a.createElement.apply(a, ["svg", n].concat(o));
            }
            o.propTypes = { "aria-label": n().string, className: n().string, style: n().object };
            const s = o;
        },
    },
]);
