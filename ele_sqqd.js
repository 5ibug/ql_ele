/**
 * 变量：elmck: 必填，账号cookie
 * cron: 11 0,22 * * *
 * 默认延时 30 秒执行下一个账号，可以通过设置 export sq_wait_time=30 来修改延时时间
 */
const $ = new Env('饿了么社群签到');
const {
  getToken: getToken,
  checkCk: checkCk,
  getCookies: getCookies,
  getUserInfo: getUserInfo,
  wait: wait,
  tryCatchPromise: tryCatchPromise
} = require("./common.js"),
      _0x3954ec = require("request");

const _0x12e4d4 = process.env.sq_wait_time || 3;

function _0x9112a3(_0x52e335) {
  return Object.values(_0x52e335).length === 0;
}

async function sqid(_0xa4cc44, _0x223461) {
  const _0xa51fae = {
    cookie: _0xa4cc44,
    "bx-ua": "303$bfxE95b821ZphIQpexqcS/Ez1qtZFtT1I1zFzFMz32RDGC/zWG8S/lmy7xVK7xEvatk2itmmLFo0t3usT+xYvKNXtfyybw9aiLMeTMgSIeuiF0GV3dDR23N/4XaHza5XK2ikBpS+m4n9FxAy+/i5iNlwxDZBmbueRFinj6hvTrkbm6fflpcJX2DxxlRmW0N1Kw+EkUM2t42LH3Xn9dKyXNn7cxLfFTuVIjn3U/kjv9fsJG6XEp/hhdg0C6C5BSrML4myeBYrsNDY+CCx4i0Beb9vJY4Fq4917gRfjcEVJzatxptFFVI6/Ffdea1fU3NUfiYZ981qhh5V38y6SoFCzas40oLgKi1RMWRZ3TYx3LTYD9mt5nOK2qOk8+cCOVID8Layt9UgSfIc4ywXvkh1oelgvX9Q1AIa8GOUcTpRfXJQDXbA/X/ab6wQ4xXbOaoKYbV3YCcC30v8dLL/94OhAxpfwSWlx4kuesnCMyvtGZVHxHrJoicQ15tfVXQWehzo13xRU7pxL7HMncpDHU1m3YZ1beCG7M58C0sZKASkNmfB6W3Xc8LvUEkdDqjWfcbHZMGDW5qOAJ9+p5BfBZYnwKDQsn09rDjYDd6ba26JC88=",
    "mini-janus": "3%40sxo8F1cg8O%2Fbekp2P8b%2BW138%2B3aTkyDdsAga8MNevV6tw7Fp68hTiCCB64A%3D",
    "x-tap": "wx",
    Referer: "https://servicewechat.com/wxece3a9a4c82f58c9/581/page-frame.html"
  };

  const _0x492053 = _0x223461.split(";")[0];

  const _0x4608b4 = {
    url: "https://waimai-guide.ele.me/h5/mtop.alsc.wechat.biz.api.community.homepage/1.0/4.0/?jsv=2.4.12&appKey=32529321&t=1705627064479&sign=03f61dcc43d6fba747f4c8eecbf32043&c=2d6d23a45cdce02bbcdda5655194284f_1705626888200;39b7f38cf1ba1e3a2210ddc2b526ae12&api=mtop.alsc.wechat.biz.api.community.homepage&dataType=json&method=GET&timeout=10000&v=1.0&type=originaljson&ttid=wxece3a9a4c82f58c9@wechat_ios_11.6.7&accountSite=eleme&data={\"sceneCode\":\"\",\"inviter\":1980788649,\"unionId\":\"o_PVDuIEkRQMf_58WgIX9M0MzWuM\",\"communityType\":0,\"groupEnvironment\":false,\"encryptedData\":\"\",\"iv\":\"\",\"code\":\"\"}&_bx-m=0.0.12",
    method: "GET",
    headers: _0xa51fae
  };
  return new Promise(_0x527ea5 => {
    _0x3954ec(_0x4608b4, async (_0x230981, _0x5de88c, _0x1694d8) => {
      if (!_0x230981 && _0x5de88c.statusCode === 200) {
        try {
          const _0x304b8e = JSON.parse(_0x1694d8);

          if (!_0x9112a3(_0x304b8e.data)) {
            _0x527ea5(_0x304b8e.data);
          } else {
            console.log(_0x304b8e.ret[0]);

            _0x527ea5(null);
          }
        } catch (_0x5c1bf1) {
          console.log(_0x1694d8);

          _0x527ea5(null);
        }
      } else {
        _0x527ea5(null);
      }
    });
  });
}

async function sqdk(_0x16b143, _0x2dc5a4) {
  const _0x4d5433 = {
    referer: "https://servicewechat.com/wxece3a9a4c82f58c9/581/page-frame.html",
    "bx-ua": "303$bdbE95b8yVVA5LcSexTOS/Ez1qtZFtT1I1zFzFMz32RDGCLBWG8S/lmy7xVK7xEvatk2itmmLFo0t3usT+xYvKNXtfyGbTUaiLMeTMgSIeuiF0GV3dDm23N/4XaHza5XK2J14RQw1dcPTP5RSYJfbOxSzTeTAXWbI2cgDKmp1RBnq6hpzHeHlx4vHYRcaDsLpfOBM9onWm/p9XIQDZsx7uD9KiQLmy2HqlR0rgRp7FX/o8a7EjqjSvEXlivr/gMXDGrOQ322iR3JAPCTP0mhocT5kuoHUdgeWqBXQBk45sckj88pFy7quhIxetgF2Qp5CwFG737MnwL5PSlVCWb+AiZICGu+KGZ+AbGFxzhgTV18Kh7gwklYl10lwG7DZtCaJHPWXY44XXKzTZrzOSb9Oc0HqgRlQ08imlk+GvXNBe0dAJAm3w4e8KYwoWD4NL+xEQKp17DaVlpxif4vmoCWYWGRpT2Uc/pG9IK55c+0jMromk7Z40Ix69GXJ/PNy7/4FoBcDfZ3WPa+zBLH6gr+M9fdtGy7ieS4nGbFil/gvJKLRCwqQBcIfpkS85r56K091DAzhNxlqpjeLglaOlm+gXPjmUK6tX7KOxqGSDlRxHMaWdez0CPcblowuPFB1wmerAyTFlMKCR5gDF/51cu112I3da6UfcFkDqFklNCk62aNHbXWAQqJ3XV+Dzo=",
    "mini-janus": "3%40sOX6jfqLMun%2BehO%2Fx%2BKZqiCt1Iy9NBOVXCqRZIDvo%2B1%2B7%2BHYwQPTfOYUP4g5hf%3D%3D",
    "x-tap": "wx",
    Cookie: _0x16b143
  };
  const _0x2306b8 = {
    url: "https://waimai-guide.ele.me/h5/mtop.alsc.wechat.biz.api.checkin/1.0/4.0/?jsv=2.4.12&appKey=32529321&data={\"sceneCode\":\"" + _0x2dc5a4 + "\",\"firstCheckIn\":false}",
    method: "GET",
    headers: _0x4d5433
  };
  return tryCatchPromise(_0x28645b => {
    _0x3954ec(_0x2306b8, async (_0x1cd459, _0x2e710c, _0xcf08c4) => {
      if (!_0x1cd459 && _0x2e710c.statusCode === 200) {
        try {
          const _0x2a9ed9 = JSON.parse(_0xcf08c4);

          !_0x9112a3(_0x2a9ed9.data) ? _0x28645b(_0x2a9ed9.data) : (console.log(_0x2a9ed9.ret[0]), _0x28645b(null));
        } catch (_0x58540f) {
          console.log(_0xcf08c4 || _0x58540f);

          _0x28645b(null);
        }
      } else {
        _0x28645b(null);
      }
    });
  });
}

async function _0x1314ba(_0xcdac9c, _0x44ace7) {
  const _0x1f1c68 = _0x44ace7.communityInfo;

  if (_0x1f1c68.communityName) {
    console.log("绑定的社群为：" + _0x1f1c68.communityName);

    const _0x117ff9 = _0x1f1c68.sceneCode,
          _0x21d847 = await sqdk(_0xcdac9c, _0x117ff9);

    _0x21d847 && console.log(_0x21d847.desc);
  } else {
    console.log("你还没有加入社群，快找社群加入吧！");
  }
}

async function _0x7a4a1c() {
  const _0x49500c = getCookies();

  for (let _0x130209 = 0; _0x130209 < _0x49500c.length; _0x130209++) {
    const _0x317259 = _0x49500c[_0x130209];

    if (!_0x317259) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x582c3d = await checkCk(_0x317259, _0x130209);

        if (!_0x582c3d) {
          continue;
        }

        let _0x2c1282 = await getUserInfo(_0x582c3d);

        if (!_0x2c1282.username) {
          console.log("第", _0x130209 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }

        console.log("******开始【饿了么账号", _0x130209 + 1, "】", _0x2c1282.username, "*********");

        const _0x35c91d = await sqid(_0x582c3d, "2d6d23a45cdce02bbcdda5655194284f_1705626888200;39b7f38cf1ba1e3a2210ddc2b526ae12");

        _0x35c91d.communityInfo ? await _0x1314ba(_0x582c3d, _0x35c91d) : console.log("获取用户信息：" + JSON.stringify(_0x35c91d));
        _0x130209 < _0x49500c.length - 1 && (console.log("延时", _0x12e4d4, "秒继续下一个"), await wait(_0x12e4d4));
      } catch (_0x2711f0) {
        console.log(_0x2711f0);
      }
    }
  }

  process.exit(0);
}

_0x7a4a1c();

function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

  class s {
    constructor(t) {
      this.env = t;
    }

    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }

    get(t) {
      return this.send.call(this.env, t);
    }

    post(t) {
      return this.send.call(this.env, t, "POST");
    }

  }

  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }

    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }

    isQuanX() {
      return "undefined" != typeof $task;
    }

    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }

    isLoon() {
      return "undefined" != typeof $loon;
    }

    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }

    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }

    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);

      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }

      return s;
    }

    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }

    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }

    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
              n = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }

    loaddata() {
      if (!this.isNode()) {
        return {};
      }

      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
              e = this.path.resolve(process.cwd(), this.dataFile),
              s = this.fs.existsSync(t),
              i = !s && this.fs.existsSync(e);

        if (!s && !i) {
          return {};
        }

        {
          const i = s ? t : e;

          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }

    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
              e = this.path.resolve(process.cwd(), this.dataFile),
              s = this.fs.existsSync(t),
              i = !s && this.fs.existsSync(e),
              r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }

    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;

      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }

      return r;
    }

    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }

    getdata(t) {
      let e = this.getval(t);

      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
              r = s ? this.getval(s) : "";

        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }

      return e;
    }

    setdata(t, e) {
      let s = !1;

      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
              o = this.getval(i),
              h = i ? "null" === o ? null : o || "{}" : "{}";

        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }

      return s;
    }

    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }

    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }

    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }

    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }

    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }

    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));

      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));

      return t;
    }

    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }

        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }

        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
                s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }

          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
                s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }

          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };

      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }

    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }

    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }

    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }

    done(t = {}) {
      const e = new Date().getTime(),
            s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }

  }(t, e);
}