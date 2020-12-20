


!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.dayjs = e()
}(this, function () {
    "use strict";
    var t = "millisecond", e = "second", n = "minute", r = "hour", i = "day", s = "week", u = "month", a = "quarter",
        o = "year", f = "date",
        h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,
        c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, d = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        }, $ = function (t, e, n) {
            var r = String(t);
            return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t
        }, l = {
            s: $, z: function (t) {
                var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
                return (e <= 0 ? "+" : "-") + $(r, 2, "0") + ":" + $(i, 2, "0")
            }, m: function t(e, n) {
                if (e.date() < n.date()) return -t(n, e);
                var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, u), s = n - i < 0,
                    a = e.clone().add(r + (s ? -1 : 1), u);
                return +(-(r + (n - i) / (s ? i - a : a - i)) || 0)
            }, a: function (t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            }, p: function (h) {
                return {
                    M: u,
                    y: o,
                    w: s,
                    d: i,
                    D: f,
                    h: r,
                    m: n,
                    s: e,
                    ms: t,
                    Q: a
                }[h] || String(h || "").toLowerCase().replace(/s$/, "")
            }, u: function (t) {
                return void 0 === t
            }
        }, y = "en", M = {};
    M[y] = d;
    var m = function (t) {
        return t instanceof S
    }, D = function (t, e, n) {
        var r;
        if (!t) return y;
        if ("string" == typeof t) M[t] && (r = t), e && (M[t] = e, r = t); else {
            var i = t.name;
            M[i] = t, r = i
        }
        return !n && r && (y = r), r || !n && y
    }, v = function (t, e) {
        if (m(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new S(n)
    }, g = l;
    g.l = D, g.i = m, g.w = function (t, e) {
        return v(t, {locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset})
    };
    var S = function () {
        function d(t) {
            this.$L = D(t.locale, null, !0), this.parse(t)
        }

        var $ = d.prototype;
        return $.parse = function (t) {
            this.$d = function (t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (g.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match(h);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)
                    }
                }
                return new Date(e)
            }(t), this.$x = t.x || {}, this.init()
        }, $.init = function () {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
        }, $.$utils = function () {
            return g
        }, $.isValid = function () {
            return !("Invalid Date" === this.$d.toString())
        }, $.isSame = function (t, e) {
            var n = v(t);
            return this.startOf(e) <= n && n <= this.endOf(e)
        }, $.isAfter = function (t, e) {
            return v(t) < this.startOf(e)
        }, $.isBefore = function (t, e) {
            return this.endOf(e) < v(t)
        }, $.$g = function (t, e, n) {
            return g.u(t) ? this[e] : this.set(n, t)
        }, $.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
        }, $.valueOf = function () {
            return this.$d.getTime()
        }, $.startOf = function (t, a) {
            var h = this, c = !!g.u(a) || a, d = g.p(t), $ = function (t, e) {
                var n = g.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);
                return c ? n : n.endOf(i)
            }, l = function (t, e) {
                return g.w(h.toDate()[t].apply(h.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h)
            }, y = this.$W, M = this.$M, m = this.$D, D = "set" + (this.$u ? "UTC" : "");
            switch (d) {
                case o:
                    return c ? $(1, 0) : $(31, 11);
                case u:
                    return c ? $(1, M) : $(0, M + 1);
                case s:
                    var v = this.$locale().weekStart || 0, S = (y < v ? y + 7 : y) - v;
                    return $(c ? m - S : m + (6 - S), M);
                case i:
                case f:
                    return l(D + "Hours", 0);
                case r:
                    return l(D + "Minutes", 1);
                case n:
                    return l(D + "Seconds", 2);
                case e:
                    return l(D + "Milliseconds", 3);
                default:
                    return this.clone()
            }
        }, $.endOf = function (t) {
            return this.startOf(t, !1)
        }, $.$set = function (s, a) {
            var h, c = g.p(s), d = "set" + (this.$u ? "UTC" : ""),
                $ = (h = {}, h[i] = d + "Date", h[f] = d + "Date", h[u] = d + "Month", h[o] = d + "FullYear", h[r] = d + "Hours", h[n] = d + "Minutes", h[e] = d + "Seconds", h[t] = d + "Milliseconds", h)[c],
                l = c === i ? this.$D + (a - this.$W) : a;
            if (c === u || c === o) {
                var y = this.clone().set(f, 1);
                y.$d[$](l), y.init(), this.$d = y.set(f, Math.min(this.$D, y.daysInMonth())).$d
            } else $ && this.$d[$](l);
            return this.init(), this
        }, $.set = function (t, e) {
            return this.clone().$set(t, e)
        }, $.get = function (t) {
            return this[g.p(t)]()
        }, $.add = function (t, a) {
            var f, h = this;
            t = Number(t);
            var c = g.p(a), d = function (e) {
                var n = v(h);
                return g.w(n.date(n.date() + Math.round(e * t)), h)
            };
            if (c === u) return this.set(u, this.$M + t);
            if (c === o) return this.set(o, this.$y + t);
            if (c === i) return d(1);
            if (c === s) return d(7);
            var $ = (f = {}, f[n] = 6e4, f[r] = 36e5, f[e] = 1e3, f)[c] || 1, l = this.$d.getTime() + t * $;
            return g.w(l, this)
        }, $.subtract = function (t, e) {
            return this.add(-1 * t, e)
        }, $.format = function (t) {
            var e = this;
            if (!this.isValid()) return "Invalid Date";
            var n = t || "YYYY-MM-DDTHH:mm:ssZ", r = g.z(this), i = this.$locale(), s = this.$H, u = this.$m,
                a = this.$M, o = i.weekdays, f = i.months, h = function (t, r, i, s) {
                    return t && (t[r] || t(e, n)) || i[r].substr(0, s)
                }, d = function (t) {
                    return g.s(s % 12 || 12, t, "0")
                }, $ = i.meridiem || function (t, e, n) {
                    var r = t < 12 ? "AM" : "PM";
                    return n ? r.toLowerCase() : r
                }, l = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: a + 1,
                    MM: g.s(a + 1, 2, "0"),
                    MMM: h(i.monthsShort, a, f, 3),
                    MMMM: h(f, a),
                    D: this.$D,
                    DD: g.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: h(i.weekdaysMin, this.$W, o, 2),
                    ddd: h(i.weekdaysShort, this.$W, o, 3),
                    dddd: o[this.$W],
                    H: String(s),
                    HH: g.s(s, 2, "0"),
                    h: d(1),
                    hh: d(2),
                    a: $(s, u, !0),
                    A: $(s, u, !1),
                    m: String(u),
                    mm: g.s(u, 2, "0"),
                    s: String(this.$s),
                    ss: g.s(this.$s, 2, "0"),
                    SSS: g.s(this.$ms, 3, "0"),
                    Z: r
                };
            return n.replace(c, function (t, e) {
                return e || l[t] || r.replace(":", "")
            })
        }, $.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
        }, $.diff = function (t, f, h) {
            var c, d = g.p(f), $ = v(t), l = 6e4 * ($.utcOffset() - this.utcOffset()), y = this - $, M = g.m(this, $);
            return M = (c = {}, c[o] = M / 12, c[u] = M, c[a] = M / 3, c[s] = (y - l) / 6048e5, c[i] = (y - l) / 864e5, c[r] = y / 36e5, c[n] = y / 6e4, c[e] = y / 1e3, c)[d] || y, h ? M : g.a(M)
        }, $.daysInMonth = function () {
            return this.endOf(u).$D
        }, $.$locale = function () {
            return M[this.$L]
        }, $.locale = function (t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = D(t, e, !0);
            return r && (n.$L = r), n
        }, $.clone = function () {
            return g.w(this.$d, this)
        }, $.toDate = function () {
            return new Date(this.valueOf())
        }, $.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
        }, $.toISOString = function () {
            return this.$d.toISOString()
        }, $.toString = function () {
            return this.$d.toUTCString()
        }, d
    }(), p = S.prototype;
    return v.prototype = p, [["$ms", t], ["$s", e], ["$m", n], ["$H", r], ["$W", i], ["$M", u], ["$y", o], ["$D", f]].forEach(function (t) {
        p[t[1]] = function (e) {
            return this.$g(e, t[0], t[1])
        }
    }), v.extend = function (t, e) {
        return t.$i || (t(e, S, v), t.$i = !0), v
    }, v.locale = D, v.isDayjs = m, v.unix = function (t) {
        return v(1e3 * t)
    }, v.en = M[y], v.Ls = M, v.p = {}, v
});

!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.dayjs_plugin_timezone = e()
}(this, function () {
    "use strict";
    var t = {year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5}, e = {};
    return function (n, i, r) {
        var o, u = r().utcOffset(), a = function (t, n, i) {
            void 0 === i && (i = {});
            var r = new Date(t);
            return function (t, n) {
                void 0 === n && (n = {});
                var i = n.timeZoneName || "short", r = t + "|" + i, o = e[r];
                return o || (o = new Intl.DateTimeFormat("en-US", {
                    hour12: !1,
                    timeZone: t,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZoneName: i
                }), e[r] = o), o
            }(n, i).formatToParts(r)
        }, f = function (e, n) {
            for (var i = a(e, n), o = [], u = 0; u < i.length; u += 1) {
                var f = i[u], s = f.type, m = f.value, c = t[s];
                c >= 0 && (o[c] = parseInt(m, 10))
            }
            var d = o[3], v = 24 === d ? 0 : d,
                h = o[0] + "-" + o[1] + "-" + o[2] + " " + v + ":" + o[4] + ":" + o[5] + ":000", l = +e;
            return (r.utc(h).valueOf() - (l -= l % 1e3)) / 6e4
        }, s = i.prototype;
        s.tz = function (t, e) {
            void 0 === t && (t = o);
            var n = this.utcOffset(), i = this.toDate().toLocaleString("en-US", {timeZone: t}),
                a = Math.round((this.toDate() - new Date(i)) / 1e3 / 60),
                f = r(i).$set("millisecond", this.$ms).utcOffset(u - a, !0);
            if (e) {
                var s = f.utcOffset();
                f = f.add(n - s, "minute")
            }
            return f.$x.$timezone = t, f
        }, s.offsetName = function (t) {
            var e = this.$x.$timezone || r.tz.guess(), n = a(this.valueOf(), e, {timeZoneName: t}).find(function (t) {
                return "timezonename" === t.type.toLowerCase()
            });
            return n && n.value
        };
        var m = s.startOf;
        s.startOf = function (t, e) {
            if (!this.$x || !this.$x.$timezone) return m.call(this, t, e);
            var n = r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
            return m.call(n, t, e).tz(this.$x.$timezone, !0)
        }, r.tz = function (t, e, n) {
            var i = n && e, u = n || e || o, a = f(+r(), u);
            if ("string" != typeof t) return r(t).tz(u);
            var s = function (t, e, n) {
                var i = t - 60 * e * 1e3, r = f(i, n);
                if (e === r) return [i, e];
                var o = f(i -= 60 * (r - e) * 1e3, n);
                return r === o ? [i, r] : [t - 60 * Math.min(r, o) * 1e3, Math.max(r, o)]
            }(r.utc(t, i).valueOf(), a, u), m = s[0], c = s[1], d = r(m).utcOffset(c);
            return d.$x.$timezone = u, d
        }, r.tz.guess = function () {
            return Intl.DateTimeFormat().resolvedOptions().timeZone
        }, r.tz.setDefault = function (t) {
            o = t
        }
    }
});

!function (t, i) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : t.dayjs_plugin_utc = i()
}(this, function () {
    "use strict";
    return function (t, i, e) {
        var s = i.prototype;
        e.utc = function (t) {
            return new i({date: t, utc: !0, args: arguments})
        }, s.utc = function (t) {
            var i = e(this.toDate(), {locale: this.$L, utc: !0});
            return t ? i.add(this.utcOffset(), "minute") : i
        }, s.local = function () {
            return e(this.toDate(), {locale: this.$L, utc: !1})
        };
        var f = s.parse;
        s.parse = function (t) {
            t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), f.call(this, t)
        };
        var n = s.init;
        s.init = function () {
            if (this.$u) {
                var t = this.$d;
                this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds()
            } else n.call(this)
        };
        var u = s.utcOffset;
        s.utcOffset = function (t, i) {
            var e = this.$utils().u;
            if (e(t)) return this.$u ? 0 : e(this.$offset) ? u.call(this) : this.$offset;
            var s = Math.abs(t) <= 16 ? 60 * t : t, f = this;
            if (i) return f.$offset = s, f.$u = 0 === t, f;
            if (0 !== t) {
                var n = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                (f = this.local().add(s + n, "minute")).$offset = s, f.$x.$localOffset = n
            } else f = this.utc();
            return f
        };
        var o = s.format;
        s.format = function (t) {
            var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return o.call(this, i)
        }, s.valueOf = function () {
            var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || (new Date).getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * t
        }, s.isUTC = function () {
            return !!this.$u
        }, s.toISOString = function () {
            return this.toDate().toISOString()
        }, s.toString = function () {
            return this.toDate().toUTCString()
        };
        var r = s.toDate;
        s.toDate = function (t) {
            return "s" === t && this.$offset ? e(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : r.call(this)
        };
        var a = s.diff;
        s.diff = function (t, i, s) {
            if (t && this.$u === t.$u) return a.call(this, t, i, s);
            var f = this.local(), n = e(t).local();
            return a.call(f, n, i, s)
        }
    }
});