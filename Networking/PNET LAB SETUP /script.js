(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    199: function(e, t, n) {
      var o = n(201);
      "string" == typeof o && (o = [[e.i, o, ""]]);
      var a = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(12)(o, a);
      o.locals && (e.exports = o.locals);
    },
    201: function(e, t, n) {
      var o = n(20);
      (t = e.exports = n(11)(!1)).push([
        e.i,
        "body {\n  background: #eeeeee;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 7px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #c0c0c0;\n  border-radius: 2px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #999;\n}\n\n.lab_item_image {\n  border: solid thin #0000001a;\n  padding: 0px;\n  height: 150px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n  overflow: hidden;\n}\n\n.lab_item_image {\n  position: relative;\n}\n.lab_item_image img {\n  width: 100%;\n}\n.lab_item_image .cover {\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: none;\n}\n.lab_item_image .cover div {\n  border: solid thin rgba(255, 255, 255, 0.5);\n  border-radius: 5px;\n  padding: 7px;\n  color: white;\n  background: rgba(255, 255, 255, 0.2);\n}\n.lab_item_image:hover .cover {\n  display: flex;\n}\n\n.lab_item {\n  padding: 7px;\n  color: #666;\n  display: flex;\n  position: relative;\n}\n.lab_item .box_shadow {\n  background: white;\n}\n.lab_item .lab_item_name {\n  margin-bottom: 5px;\n  color: #17a2b8;\n}\n\n.product_item_discount, .product_widget_discount {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0;\n  background-repeat: no-repeat;\n  background-position: 100% 0;\n  background-size: contain;\n  background-image: url(" +
          o(n(202)) +
          ");\n  width: 36px;\n  height: 36px;\n  color: #ff0;\n  -webkit-box-pack: center;\n  justify-content: center;\n  font-size: 11px;\n}\n\n.lab_article .lab_article_content {\n  transition: all ease-in-out 0.4s;\n  max-height: 400px;\n  overflow: hidden;\n  z-index: 0;\n  position: relative;\n}\n.lab_article .lab_article_button {\n  margin-top: -30px;\n  padding-top: 30px;\n  justify-content: center;\n  background-image: linear-gradient(rgba(255, 255, 255, 0), white, white, white);\n  z-index: 1;\n  position: relative;\n}\n.lab_article .lab_article_button .button {\n  color: #0d274d;\n  font-weight: bold;\n  padding: 7px;\n  border-radius: 5px;\n}\n.lab_article .lab_article_button .button:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.lab_article.expand .lab_article_button {\n  margin-top: 0px;\n  padding-top: 7px;\n}\n.lab_article.expand .lab_article_button .button {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n@media only screen and (min-width: 768px) {\n  .lab_item {\n    width: 12.5%;\n    max-width: 250px;\n    min-width: 200px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .lab_item {\n    width: 50%;\n  }\n}",
        "",
      ]), (t.locals = {
        font_family: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        font_size: "12px",
        font_color: "#333",
        primary_color: "#0d274d",
        dark_color: "#0d274d",
        light_color: "#0d274d",
        menu_top: "60px",
        menu_left: "215px",
      });
    },
    202: function(e, t) {
      e.exports = "/images/discountbg.png?79b85dc6d29f96376a190519a2494007";
    },
    225: function(e, t, n) {
      "use strict";
      var o = n(0),
        a = n.n(o);
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i() {
        return (i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          o,
          a = (function(e, t) {
            if (null == e) return {};
            var n,
              o,
              a = {},
              r = Object.keys(e);
            for (o = 0; o < r.length; o++)
              (n = r[o]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (o = 0; o < r.length; o++)
            (n = r[o]), t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
        }
        return a;
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in
            o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }
      function s(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var d = (function(e) {
        function t(e) {
          var n;
          return (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t), (n = s(this, u(t).call(this, e))).initial(), (n.state = {
            value: get(n.props.value, ""),
          }), n;
        }
        var n, o, r;
        return (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })), t && m(e, t);
        })(t, e), (n = t), (o = [
          {
            key: "initial",
            value: function() {
              var e = this.props,
                t = e.id,
                n = (e.value, e.decoratorOut),
                o = e.decoratorIn,
                a = e.onChange,
                r = l(e, [
                  "id",
                  "value",
                  "decoratorOut",
                  "decoratorIn",
                  "onChange",
                ]);
              (this.id = get(
                t,
                ""
              )), (this.onChange = get(
                a,
                function() {}
              )), (this.decoratorOut = get(n, function(e) {
                return HtmlEncode(e);
              })), (this.decoratorIn = get(o, function(e) {
                return HtmlDecode(e);
              })), (this.rent = r);
            },
          },
          {
            key: "setValue",
            value: function(e) {
              isset(this.decoratorIn) && (e = this.decoratorIn(e)), null == e &&
                (e = ""), this.setState({ value: e });
            },
          },
          {
            key: "getValue",
            value: function() {
              var e = this.state.value;
              return isset(this.decoratorOut) && (e = this.decoratorOut(e)), e;
            },
          },
          {
            key: "revertValue",
            value: function(e) {
              return isset(this.decoratorOut) && (e = this.decoratorOut(e)), e;
            },
          },
          {
            key: "getInput",
            value: function() {
              return this.input;
            },
          },
          {
            key: "render",
            value: function() {
              var e = this;
              return this.initial(), a.a.createElement(
                "textarea",
                i(
                  {
                    value: this.state.value,
                    onChange: function(e) {
                      var t = this;
                      this.setState({ value: e.target.value }, function() {
                        t.onChange();
                      });
                    }.bind(this),
                    ref: function(t) {
                      return (e.input = t);
                    },
                  },
                  this.rent
                )
              );
            },
          },
        ]) && c(n.prototype, o), r && c(n, r), t;
      })(o.Component);
      t.a = d;
    },
    229: function(e, t, n) {
      "use strict";
      var o = n(0),
        a = n.n(o);
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in
            o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }
      function l(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function s(e, t) {
        return (s =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = (function(e) {
        function t(e) {
          var n;
          return (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t), ((n = l(this, c(t).call(this, e))).state = {
            adblock: !0,
            show: !1,
          }), n;
        }
        var o, r, u;
        return (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })), t && s(e, t);
        })(t, e), (o = t), (r = [
          {
            key: "render",
            value: function() {
              return a.a.createElement(
                "div",
                {
                  style: {
                    display:
                      this.state.adblock && this.state.show ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "#00000060",
                    zIndex: 1e3,
                  },
                },
                a.a.createElement(
                  "div",
                  {
                    className: "box_shadow",
                    style: {
                      padding: 30,
                      borderRadius: 10,
                      background: "white",
                      textAlign: "center",
                    },
                  },
                  a.a.createElement(
                    "h3",
                    { style: { color: "red" } },
                    "Please disable Adblock and Reload page"
                  ),
                  a.a.createElement("br", null),
                  a.a.createElement("img", {
                    style: { maxWidth: "100%" },
                    src: n(230),
                  })
                )
              );
            },
          },
          {
            key: "componentDidMount",
            value: function() {
              var e = this;
              setTimeout(function() {
                e.state.adblock &&
                  (
                    e.setState({ show: !0 }),
                    $("body").css("pointer-events", "none")
                  );
              }, 5e3), this.checkAdblock();
            },
          },
          {
            key: "checkAdblock",
            value: function() {
              var e = this;
              return axios
                .request({ url: "/store/advs/check", method: "post" })
                .then(function(t) {
                  (t = t.data).result && e.setState({ adblock: !1 });
                })
                .catch(function(t) {
                  console.log(t), e.setState({ show: !0 });
                });
            },
          },
        ]) && i(o.prototype, r), u && i(o, u), t;
      })(o.Component);
      t.a = u;
    },
    230: function(e, t) {
      e.exports = "/images/disableadvs.png?126f2e6a44516d3bbf7b5585b86c2d05";
    },
    62: function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n(0),
        a = n.n(o),
        r = n(193);
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function l(e, t, n) {
        return t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n), e;
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in
            o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }
      function s(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var d = (function(e) {
        function t(e) {
          var n;
          return (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t), ((n = s(this, u(t).call(this, e))).state = {
            labs: [],
          }), (n.limit = 5), (n.subject = n.props.subject), n;
        }
        var n, o, i;
        return (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })), t && m(e, t);
        })(t, e), (n = t), (o = [
          {
            key: "render",
            value: function() {
              var e = this;
              return a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  "div",
                  {
                    className: "headline box_flex",
                    style: { marginBottom: 15, display: "flex" },
                  },
                  a.a.createElement("div", { className: "title" }, "Similar")
                ),
                a.a.createElement(
                  "div",
                  { className: "", style: { position: "relative" } },
                  a.a.createElement(
                    "div",
                    null,
                    this.state.labs.map(function(t, n) {
                      return t[LAB_ID] == e.props.except
                        ? ""
                        : a.a.createElement(
                            "div",
                            {
                              key: n,
                              className: "box_shadow box_flex",
                              style: {
                                padding: 7,
                                marginBottom: 15,
                                background: "white",
                              },
                            },
                            a.a.createElement(
                              "div",
                              { style: { width: "40%" } },
                              a.a.createElement(
                                r.a,
                                {
                                  to: "/store/labs/detail?id=".concat(
                                    t[LAB_ID]
                                  ),
                                },
                                a.a.createElement(
                                  "div",
                                  {
                                    className: "lab_item_image",
                                    style: { height: 100 },
                                  },
                                  a.a.createElement("img", {
                                    src: file_public(t[LAB_IMG]),
                                  }),
                                  a.a.createElement(
                                    "div",
                                    { className: "cover box_flex" },
                                    a.a.createElement("div", null, "Detail")
                                  )
                                )
                              )
                            ),
                            a.a.createElement(
                              "div",
                              { style: { width: "60%", padding: 7 } },
                              a.a.createElement(
                                r.a,
                                {
                                  to: "/store/labs/detail?id=".concat(
                                    t[LAB_ID]
                                  ),
                                },
                                a.a.createElement(
                                  "b",
                                  {
                                    style: { display: "block" },
                                    className: "lab_item_name box_line",
                                    title: t[LAB_NAME],
                                  },
                                  t[LAB_NAME]
                                )
                              ),
                              a.a.createElement(
                                r.a,
                                {
                                  to: "/store/profile/view?id=".concat(
                                    t[LAB_UID]
                                  ),
                                  style: { fontWeight: "bold" },
                                },
                                a.a.createElement("i", {
                                  className: "fa fa-user-o",
                                }),
                                " ",
                                t[LAB_UNAME]
                              ),
                              a.a.createElement(
                                "p",
                                { className: "lab_item_name" },
                                str_limit(t[LAB_DES], 50)
                              )
                            )
                          );
                    })
                  )
                )
              );
            },
          },
          {
            key: "componentDidMount",
            value: function() {
              this.loadLabs();
            },
          },
          {
            key: "loadLabs",
            value: function() {
              var e,
                t = this;
              if (isset(this.subject) && "" != this.subject)
                return axios
                  .request({
                    url: "/store/labs/getLabsBySubject",
                    method: "post",
                    data: (
                      (e = {}),
                      l(e, LAB_SUBJECT, this.subject),
                      l(e, "limit", this.limit),
                      e
                    ),
                  })
                  .then(function(e) {
                    return (e = e.data).result
                      ? (t.setState({ labs: e.data }), !0)
                      : (error_handle(e), !1);
                  })
                  .catch(function(e) {
                    return console.log(
                      e
                    ), Swal("Error", "Unknow error", "error"), !1;
                  });
            },
          },
        ]) && c(n.prototype, o), i && c(n, i), t;
      })(o.Component);
      n(199);
      function p(e) {
        return (p =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function f() {
        return (f =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function b(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in
            o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }
      function h(e, t) {
        return !t || ("object" !== p(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function _(e) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      o.Component;
      var g = n(225),
        v = n(38);
      function E(e) {
        return (E =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function w(e, t, n) {
        return t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n), e;
      }
      function x(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in
            o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }
      function A(e, t) {
        return !t || ("object" !== E(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function L(e) {
        return (L = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function C(e, t) {
        return (C =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var N = (function(e) {
        function t(e) {
          var n;
          return (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t), ((n = A(this, L(t).call(this, e))).state = {
            reply: "",
            comments: [],
            reply_show: !1,
            editting: !1,
            isLoadMore: !0,
          }), (n.id = "collapse" + makeId()), n;
        }
        var n, o, r;
        return (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })), t && C(e, t);
        })(t, e), (n = t), (o = [
          {
            key: "render",
            value: function() {
              var e = this;
              return (this.comment = this.props.comment), a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  "div",
                  { className: "lab_comment_item" },
                  a.a.createElement(
                    "div",
                    { className: "d-flex" },
                    a.a.createElement(
                      "div",
                      null,
                      a.a.createElement(v.a, {
                        src: this.comment[LAB_CMT_UIMG],
                        style: { width: 30, height: 30, marginRight: 15 },
                      })
                    ),
                    a.a.createElement(
                      "div",
                      { style: { flexGrow: 1 } },
                      a.a.createElement(
                        "div",
                        { className: "lab_comment_uname" },
                        a.a.createElement(
                          "strong",
                          null,
                          this.comment[LAB_CMT_UNAME]
                        )
                      ),
                      a.a.createElement(
                        "div",
                        { className: "lab_comment_time" },
                        moment(this.comment[LAB_CMT_TIME], "X").format("lll")
                      ),
                      this.state.editting
                        ? a.a.createElement(
                            "div",
                            { className: "lab_comment_input box_padding" },
                            a.a.createElement(g.a, {
                              style: { width: "100%" },
                              value: this.comment[LAB_CMT_CONTENT],
                              onBlur: function(t) {
                                e.editComment(t.target.value);
                              },
                            })
                          )
                        : a.a.createElement(
                            "div",
                            { className: "lab_comment_content" },
                            this.comment[LAB_CMT_CONTENT]
                          ),
                      a.a.createElement(
                        "div",
                        { className: "lab_comment_control box_flex" },
                        isAdmin() ||
                        this.comment[LAB_CMT_UID] == App.server.user[AUTHEN_ID]
                          ? a.a.createElement(
                              a.a.Fragment,
                              null,
                              a.a.createElement(
                                "div",
                                {
                                  className: "button",
                                  onClick: function() {
                                    e.delComment();
                                  },
                                },
                                "Delete"
                              ),
                              a.a.createElement(
                                "div",
                                {
                                  className: "button",
                                  onClick: function() {
                                    return e.setState({
                                      editting: !e.state.editting,
                                    });
                                  },
                                },
                                "Edit"
                              )
                            )
                          : "",
                        a.a.createElement(
                          "div",
                          {
                            className: "box_flex",
                            style: { margin: "auto 0px auto auto" },
                          },
                          isset(this.comment[LAB_CMT_REPLY])
                            ? ""
                            : a.a.createElement(
                                "div",
                                {
                                  className: "button box_flex",
                                  title: "Reply",
                                  onClick: function() {
                                    $("#".concat(e.id)).collapse("show"), 0 ==
                                      e.state.comments.length &&
                                      e.loadComments(), e.setState(
                                      { reply_show: !0 },
                                      function() {
                                        e.reply_input.focus();
                                      }
                                    );
                                  },
                                },
                                a.a.createElement("i", {
                                  className: "fa fa-mail-reply",
                                })
                              ),
                          " ",
                          isset(this.comment[LAB_CMT_REPLY_COUNT]) &&
                          this.comment[LAB_CMT_REPLY_COUNT] > 0
                            ? a.a.createElement(
                                "div",
                                {
                                  className: "button box_flex",
                                  "data-toggle": "collapse",
                                  "data-target": "#".concat(this.id),
                                  onClick: function() {
                                    0 == e.state.comments.length &&
                                      e.loadComments();
                                  },
                                },
                                a.a.createElement("i", {
                                  className: "fa fa-commenting-o",
                                }),
                                " ",
                                this.comment[LAB_CMT_REPLY_COUNT]
                              )
                            : "",
                          " ",
                          this.comment[LAB_CMT_EDITED]
                            ? a.a.createElement(
                                "div",
                                {
                                  className: "button",
                                  style: { cursor: "default" },
                                },
                                " Edited "
                              )
                            : ""
                        )
                      ),
                      a.a.createElement(
                        "div",
                        { id: this.id, className: "collapse" },
                        a.a.createElement(
                          "div",
                          null,
                          this.state.comments.map(function(n) {
                            return a.a.createElement(t, {
                              key: n[LAB_CMT_ID],
                              comment: n,
                              parent: e,
                              lid: e.props.lid,
                            });
                          })
                        ),
                        this.state.isLoadMore
                          ? a.a.createElement(
                              "div",
                              {
                                className:
                                  "box_flex box_padding lab_comment_loadmore",
                                onClick: function() {
                                  return e.loadComments();
                                },
                                style: { justifyContent: "center" },
                              },
                              a.a.createElement(
                                "div",
                                { className: "button" },
                                "Load More"
                              )
                            )
                          : "",
                        a.a.createElement(
                          "div",
                          {
                            className: "lab_comment_input box_padding",
                            style: {
                              display: this.state.reply_show ? "block" : "none",
                            },
                          },
                          a.a.createElement("textarea", {
                            ref: function(t) {
                              return (e.reply_input = t);
                            },
                            className: "box_padding",
                            style: { minHeight: 50 },
                            placeholder: isset(App.server.user[AUTHEN_ID])
                              ? "Write your reply"
                              : "Login to reply",
                            disabled: !isset(App.server.user[AUTHEN_ID]),
                            value: this.state.reply,
                            onChange: function(t) {
                              t.target.value.length > 1e3 ||
                                e.setState({ reply: t.target.value });
                            },
                          }),
                          a.a.createElement(
                            "div",
                            {
                              className: "lab_comment_control box_flex",
                              style: {
                                justifyContent: "flex-end",
                                marginTop: 5,
                              },
                            },
                            a.a.createElement(
                              "div",
                              { style: { margin: "auto auto auto 0px" } },
                              this.state.reply.length,
                              "/1000"
                            ),
                            a.a.createElement(
                              "div",
                              {
                                className: "button btn btn-primary",
                                style: { color: "white" },
                                onClick: function() {
                                  e.reply();
                                },
                              },
                              "Reply"
                            )
                          )
                        )
                      )
                    )
                  )
                )
              );
            },
          },
          {
            key: "editComment",
            value: function(e) {
              var t,
                n = this;
              if (e != this.comment[LAB_CMT_CONTENT])
                return App.loading(!0, "Loading..."), axios
                  .request({
                    url: "/store/lab_comments/editComment",
                    method: "post",
                    data: (
                      (t = {}),
                      w(t, LAB_CMT_ID, this.comment[LAB_CMT_ID]),
                      w(t, LAB_CMT_CONTENT, e),
                      t
                    ),
                  })
                  .then(function(e) {
                    return (e =
                      e.data), App.loading(!1), e.result ? (n.props.parent.reloadComments(), n.setState({ editting: !1 }), !0) : (error_handle(e), !1);
                  })
                  .catch(function(e) {
                    return App.loading(
                      !1
                    ), console.log(e), Swal("Error", "Unknow error", "error"), !1;
                  });
              this.setState({ editting: !1 });
            },
          },
          {
            key: "delComment",
            value: function() {
              var e = this;
              return Swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then(function(t) {
                if (t.value)
                  return App.loading(!0, "Loading..."), axios
                    .request({
                      url: "/store/lab_comments/delComment",
                      method: "post",
                      data: w({}, LAB_CMT_ID, e.comment[LAB_CMT_ID]),
                    })
                    .then(function(t) {
                      return App.loading(
                        !1
                      ), (t = t.data).result ? (e.props.parent.reloadComments && e.props.parent.reloadComments(), !0) : (error_handle(t), !1);
                    })
                    .catch(function(e) {
                      return App.loading(
                        !1
                      ), console.log(e), Swal("Error", "Unknow error", "error"), !1;
                    });
              });
            },
          },
          {
            key: "reply",
            value: function() {
              var e,
                t = this;
              return App.loading(!0, "Loading..."), axios
                .request({
                  url: "/store/lab_comments/addComment",
                  method: "post",
                  data: {
                    data: (
                      (e = {}),
                      w(e, LAB_CMT_CONTENT, this.state.reply),
                      w(e, LAB_CMT_LID, this.props.lid),
                      w(e, LAB_CMT_REPLY, this.comment[LAB_CMT_ID]),
                      e
                    ),
                  },
                })
                .then(function(e) {
                  return (e =
                    e.data), App.loading(!1), e.result ? (t.reloadComments(1), t.setState({ reply: "", reply_show: !1 }), !0) : (error_handle(e), !1);
                })
                .catch(function(e) {
                  return App.loading(
                    !1
                  ), console.log(e), Swal("Error", "Unknow error", "error"), !1;
                });
            },
          },
          {
            key: "reloadComments",
            value: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t = this.state.comments.length + e;
              this.loadComments(0, t, !0);
            },
          },
          {
            key: "loadComments",
            value: function() {
              var e,
                t = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 10,
                a =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return null == n && (n = this.state.comments.length), axios
                .request({
                  url: "/store/lab_comments/getLabCommentReply",
                  method: "post",
                  data: (
                    (e = {}),
                    w(e, LAB_CMT_ID, this.comment[LAB_CMT_ID]),
                    w(e, "ready", n),
                    w(e, "limit", o),
                    e
                  ),
                })
                .then(function(e) {
                  if (!(e = e.data).result) return error_handle(e), !1;
                  var n = !0;
                  if ((e.data.length < o && (n = !1), a))
                    t.setState({ comments: e.data, isLoadMore: n });
                  else {
                    var r = t.state.comments,
                      i = e.data;
                    if (r.length > 0) {
                      var l = i.findIndex(function(e) {
                        return e[LAB_CMT_ID] == r[r.length - 1][LAB_CMT_ID];
                      });
                      -1 != l && i.splice(0, l + 1);
                    }
                    t.setState({ comments: r.concat(i), isLoadMore: n });
                  }
                  return !0;
                })
                .catch(function(e) {
                  return console.log(
                    e
                  ), Swal("Error", "Unknow error", "error"), !1;
                });
            },
          },
        ]) && x(n.prototype, o), r && x(n, r), t;
      })(o.Component);
      function k(e) {
        return (k =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function O(e, t, n) {
        return t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n), e;
      }
      function T(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in
            o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }
      function I(e, t) {
        return !t || ("object" !== k(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function S(e) {
        return (S = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function P(e, t) {
        return (P =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var j = (function(e) {
        function t(e) {
          var n;
          return (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t), ((n = I(this, S(t).call(this, e))).state = {
            comment: "",
            comments: [],
            isLoadMore: !0,
          }), n;
        }
        var n, o, r;
        return (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })), t && P(e, t);
        })(t, e), (n = t), (o = [
          {
            key: "render",
            value: function() {
              var e = this;
              return a.a.createElement(
                "div",
                { className: "lab_comments" },
                a.a.createElement(
                  "style",
                  null,
                  "\n                .lab_comment_input textarea{\n                    border-radius: 5px;\n                    width: 100%;\n                    min-height: 50px;\n                }\n                .lab_comment_input textarea:focus ~ .lab_comment_input_control{\n                    height: 30px;\n                }\n                .lab_comment_input textarea ~ .lab_comment_input_control{\n                    height: 0px;\n                }\n                .lab_comment_input_control{\n                    transition: all ease-in-out 0.4s;\n                    overflow:hidden;\n                }\n                .lab_comment_time{\n                    color: #aaa;\n                    font-size: 12px;\n                }\n                .lab_comment_item{\n                    margin-top: 5px;\n                }\n                .lab_comment_control .button{\n                    color: #aaa;\n                    font-size: 12px;\n                    font-weight:bold;  \n                }\n\n                .lab_comment_control .button i{\n                    color: #aaa;\n                    font-size: 12px;\n                    font-weight:bold;  \n                }\n\n                .lab_comment_loadmore .button {\n                    color: #0d274d;\n                    font-weight: bold;\n                    padding: 7px;\n                    border-radius: 5px;\n                }\n                .lab_comment_loadmore .button:hover {\n                    background: rgba(0, 0, 0, 0.1);\n                }\n\n            "
                ),
                a.a.createElement(
                  "div",
                  { className: "lab_comment_input box_padding" },
                  a.a.createElement(
                    "strong",
                    null,
                    "Comments(",
                    get(this.props.total, 0),
                    ")"
                  ),
                  a.a.createElement("textarea", {
                    className: "box_padding",
                    placeholder: isset(App.server.user[AUTHEN_ID])
                      ? "Write your comment"
                      : "Login to comment",
                    disabled: !isset(App.server.user[AUTHEN_ID]),
                    value: this.state.comment,
                    onChange: function(t) {
                      t.target.value.length > 1e3 ||
                        e.setState({ comment: t.target.value });
                    },
                  }),
                  a.a.createElement(
                    "div",
                    {
                      className: "lab_comment_input_control box_flex",
                      style: { justifyContent: "flex-end", marginTop: 5 },
                    },
                    a.a.createElement(
                      "div",
                      { style: { margin: "auto auto auto 0px" } },
                      this.state.comment.length,
                      "/1000"
                    ),
                    a.a.createElement(
                      "div",
                      {
                        className: "button btn btn-primary",
                        onClick: function() {
                          e.comment();
                        },
                      },
                      "Comment"
                    )
                  ),
                  a.a.createElement(
                    "div",
                    { className: "lab_comment_frame" },
                    this.state.comments.map(function(t) {
                      return a.a.createElement(N, {
                        key: t[LAB_CMT_ID],
                        comment: t,
                        parent: e,
                        lid: e.props.lid,
                      });
                    })
                  ),
                  this.state.isLoadMore
                    ? a.a.createElement(
                        "div",
                        {
                          className:
                            "box_flex box_padding lab_comment_loadmore",
                          onClick: function() {
                            return e.loadComments();
                          },
                          style: { justifyContent: "center" },
                        },
                        a.a.createElement(
                          "div",
                          { className: "button" },
                          "Load More"
                        )
                      )
                    : ""
                )
              );
            },
          },
          {
            key: "componentDidMount",
            value: function() {
              this.loadComments();
            },
          },
          {
            key: "comment",
            value: function() {
              var e,
                t = this;
              return App.loading(!0, "Loading..."), axios
                .request({
                  url: "/store/lab_comments/addComment",
                  method: "post",
                  data: {
                    data: (
                      (e = {}),
                      O(e, LAB_CMT_CONTENT, this.state.comment),
                      O(e, LAB_CMT_LID, this.props.lid),
                      e
                    ),
                  },
                })
                .then(function(e) {
                  return (e =
                    e.data), App.loading(!1), e.result ? (t.reloadComments(1), t.setState({ comment: "" }), !0) : (error_handle(e), !1);
                })
                .catch(function(e) {
                  return App.loading(
                    !1
                  ), console.log(e), Swal("Error", "Unknow error", "error"), !1;
                });
            },
          },
          {
            key: "reloadComments",
            value: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t = this.state.comments.length + e;
              this.loadComments(0, t, !0);
            },
          },
          {
            key: "loadComments",
            value: function() {
              var e,
                t = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 5,
                a =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return null == n && (n = this.state.comments.length), axios
                .request({
                  url: "/store/lab_comments/getLabComments",
                  method: "post",
                  data: (
                    (e = {}),
                    O(e, LAB_ID, this.props.lid),
                    O(e, "ready", n),
                    O(e, "limit", o),
                    e
                  ),
                })
                .then(function(e) {
                  if (!(e = e.data).result) return error_handle(e), !1;
                  var n = !0;
                  if ((e.data.length < o && (n = !1), a))
                    t.setState({ comments: e.data, isLoadMore: n });
                  else {
                    var r = t.state.comments,
                      i = e.data;
                    if (r.length > 0) {
                      var l = i.findIndex(function(e) {
                        return e[LAB_CMT_ID] == r[r.length - 1][LAB_CMT_ID];
                      });
                      -1 != l && i.splice(0, l + 1);
                    }
                    t.setState({ comments: r.concat(i), isLoadMore: n });
                  }
                  return !0;
                })
                .catch(function(e) {
                  return console.log(
                    e
                  ), Swal("Error", "Unknow error", "error"), !1;
                });
            },
          },
        ]) && T(n.prototype, o), r && T(n, r), t;
      })(o.Component);
      function M(e) {
        return (M =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function B(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in
            o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }
      function D(e, t) {
        return !t || ("object" !== M(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function U(e) {
        return (U = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function R(e, t) {
        return (R =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var H = (function(e) {
          function t(e) {
            return (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t), D(this, U(t).call(this, e));
          }
          var n, o, r;
          return (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })), t && R(e, t);
          })(t, e), (n = t), (o = [
            {
              key: "render",
              value: function() {
                var e = this.props.tip;
                if (e[TIP_HTML] && "" != e[TIP_HTML])
                  return a.a.createElement(
                    "div",
                    { style: { position: "relative" } },
                    a.a.createElement("div", {
                      className: "box_padding box_shadow",
                      style: {
                        background: "white",
                        textAlign: "center",
                        marginBottom: 15,
                      },
                      dangerouslySetInnerHTML: { __html: e[TIP_HTML] },
                    }),
                    a.a.createElement(
                      "span",
                      {
                        style: {
                          filter:
                            "invert(40%) sepia(13%) saturate(100) hue-rotate(220deg) brightness(100%) contrast(100%)",
                        },
                        className: "product_item_discount box_flex",
                      },
                      "Adv"
                    )
                  );
                var t = "/store/tips/clickTip?id="
                    .concat(e[TIP_ID], "&link=")
                    .concat(encodeURI(e[TIP_LINK])),
                  n = "";
                return e[TIP_IMGLINK] && "" != e[TIP_IMGLINK]
                  ? (n = e[TIP_IMGLINK])
                  : e[TIP_IMG] &&
                    "" != e[TIP_IMG] &&
                    (n = file_public(e[TIP_IMG])), a.a.createElement(
                  "div",
                  {
                    className: "box_padding box_shadow",
                    style: {
                      background: "white",
                      textAlign: "center",
                      marginBottom: 15,
                      position: "relative",
                    },
                  },
                  a.a.createElement(
                    "a",
                    { target: "_blank", href: t },
                    a.a.createElement(
                      "div",
                      {
                        className: "tip_item_image",
                        style: { width: "100%", minHeight: 60 },
                      },
                      "" != n &&
                        a.a.createElement("img", {
                          style: { width: "100%" },
                          src: n,
                        })
                    )
                  ),
                  a.a.createElement(
                    "div",
                    {
                      style: {
                        marginTop: -60,
                        paddingTop: 30,
                        justifyContent: "center",
                        backgroundImage:
                          "linear-gradient(rgba(255, 255, 255, 0), white, white, white)",
                        zIndex: 1,
                        position: "relative",
                        textAlign: "left",
                      },
                    },
                    a.a.createElement(
                      "a",
                      { target: "_blank", href: t },
                      a.a.createElement(
                        "strong",
                        {
                          className: "tip_item_name",
                          title: get(e[TIP_NAME], ""),
                        },
                        get(e[TIP_NAME], "")
                      )
                    ),
                    a.a.createElement(
                      "div",
                      null,
                      a.a.createElement(
                        "i",
                        { style: { color: "#00bcd4" } },
                        str_limit(get(e[TIP_TEXT], ""), 160)
                      )
                    ),
                    a.a.createElement(
                      "div",
                      null,
                      e[TIP_PRICE] &&
                        "" != e[TIP_PRICE] &&
                        a.a.createElement(
                          "div",
                          { style: { color: "orange" } },
                          "Price: ",
                          a.a.createElement("b", null, e[TIP_PRICE])
                        )
                    )
                  ),
                  a.a.createElement(
                    "span",
                    {
                      style: {
                        filter:
                          "invert(40%) sepia(13%) saturate(100) hue-rotate(220deg) brightness(100%) contrast(100%)",
                      },
                      className: "product_item_discount box_flex",
                    },
                    "Adv"
                  )
                );
              },
            },
          ]) && B(n.prototype, o), r && B(n, r), t;
        })(o.Component),
        q = n(229);
      function G(e) {
        return (G =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function z(e, t, n) {
        return t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n), e;
      }
      function F(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function W(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in
            o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }
      function Y(e, t, n) {
        return t && W(e.prototype, t), n && W(e, n), e;
      }
      function J(e, t) {
        return !t || ("object" !== G(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function K(e) {
        return (K = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function X(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })), t && V(e, t);
      }
      function V(e, t) {
        return (V =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Q = (function(e) {
          function t(e) {
            var n;
            return F(this, t), ((n = J(this, K(t).call(this, e))).state = {
              lab: {},
              test: !0,
              expand: !1,
              tips: [],
            }), (n.labId = App.parsed.id), n;
          }
          return X(t, e), Y(t, [
            {
              key: "render",
              value: function() {
                var e = this;
                return a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    "div",
                    { className: "container" },
                    a.a.createElement(
                      "div",
                      { className: "row" },
                      a.a.createElement(
                        "div",
                        { className: "col-md-8" },
                        isset(this.state.lab[LAB_ID])
                          ? a.a.createElement(
                              "div",
                              {
                                className: "box_shadow",
                                style: { background: "white" },
                              },
                              a.a.createElement(
                                "div",
                                { className: "row" },
                                a.a.createElement(
                                  "div",
                                  {
                                    className: "col-4 box_flex",
                                    style: {
                                      flexDirection: "column",
                                      justifyContent: "space-between",
                                      position: "relative",
                                    },
                                  },
                                  a.a.createElement("img", {
                                    src: file_public(this.state.lab[LAB_IMG]),
                                    style: { width: "100%", borderRadius: 5 },
                                  }),
                                  a.a.createElement(
                                    "div",
                                    { style: { width: "80%", marginTop: 7 } },
                                    1 != this.state.lab[LAB_OPEN]
                                      ? a.a.createElement(
                                          a.a.Fragment,
                                          null,
                                          isset(this.state.lab[LICENSE_TIME]) &&
                                          Number(this.state.lab[LICENSE_TIME]) >
                                            Number(moment().format("X"))
                                            ? a.a.createElement(
                                                "button",
                                                {
                                                  title:
                                                    "Remove lab from your account",
                                                  className:
                                                    "button btn btn-danger",
                                                  style: { width: "100%" },
                                                  onClick: function() {
                                                    e.removeLab();
                                                  },
                                                },
                                                "Remove"
                                              )
                                            : a.a.createElement(
                                                "button",
                                                {
                                                  title:
                                                    "Add lab to your account",
                                                  className:
                                                    "button btn btn-info",
                                                  style: { width: "100%" },
                                                  onClick: function() {
                                                    e.getLab();
                                                  },
                                                },
                                                "Get Lab"
                                              )
                                        )
                                      : a.a.createElement(
                                          "button",
                                          {
                                            title: "Download Lab",
                                            className: "button btn btn-info",
                                            style: { width: "100%" },
                                            onClick: function() {
                                              e.downloadOpenLab();
                                            },
                                          },
                                          "Download Lab"
                                        )
                                  ),
                                  1 == this.state.lab[LAB_OPEN]
                                    ? a.a.createElement(
                                        "span",
                                        {
                                          className:
                                            "product_item_discount box_flex",
                                        },
                                        "Open"
                                      )
                                    : ""
                                ),
                                a.a.createElement(
                                  "div",
                                  {
                                    className: "col-8 d-flex",
                                    style: { flexDirection: "column" },
                                  },
                                  a.a.createElement(
                                    "h3",
                                    null,
                                    this.state.lab[LAB_NAME]
                                  ),
                                  a.a.createElement(
                                    "div",
                                    null,
                                    a.a.createElement("i", {
                                      className: "fa fa-calendar",
                                    }),
                                    " ",
                                    a.a.createElement(
                                      "span",
                                      null,
                                      moment(
                                        this.state.lab[LAB_TIME],
                                        "X"
                                      ).format("lll")
                                    )
                                  ),
                                  a.a.createElement(
                                    "div",
                                    null,
                                    a.a.createElement(
                                      r.a,
                                      {
                                        to: "/store/profile/view?id=".concat(
                                          this.state.lab[LAB_UID]
                                        ),
                                        style: { fontWeight: "bold" },
                                      },
                                      a.a.createElement("i", {
                                        className: "fa fa-user-o",
                                      }),
                                      " ",
                                      this.state.lab[LAB_UNAME]
                                    )
                                  ),
                                  a.a.createElement(
                                    "p",
                                    { style: { textAlign: "justify" } },
                                    str_limit(
                                      HtmlDecode(this.state.lab[LAB_DES]),
                                      300
                                    )
                                  ),
                                  a.a.createElement(
                                    "div",
                                    {
                                      className: "box_flex",
                                      style: {
                                        margin: "auto 0px 0px 0px",
                                        paddingTop: 5,
                                      },
                                    },
                                    a.a.createElement(
                                      "div",
                                      null,
                                      0 == this.state.lab[LAB_PRICE]
                                        ? a.a.createElement(
                                            "div",
                                            { style: { color: "green" } },
                                            "Free"
                                          )
                                        : a.a.createElement(
                                            "div",
                                            { style: { color: "orange" } },
                                            this.state.lab[LAB_PRICE],
                                            " $"
                                          )
                                    ),
                                    a.a.createElement(
                                      "div",
                                      {
                                        style: { margin: "auto 7px auto auto" },
                                      },
                                      this.state.lab[LAB_COUNT_DOWNLOADED] > 0
                                        ? a.a.createElement(
                                            "div",
                                            { style: { color: "#616161" } },
                                            this.state.lab[
                                              LAB_COUNT_DOWNLOADED
                                            ],
                                            " ",
                                            a.a.createElement("i", {
                                              className: "fa fa-user",
                                            })
                                          )
                                        : ""
                                    )
                                  )
                                )
                              ),
                              a.a.createElement("hr", null),
                              a.a.createElement(
                                "div",
                                {
                                  className: "lab_article ".concat(
                                    this.state.expand ? "expand" : ""
                                  ),
                                },
                                a.a.createElement(
                                  "div",
                                  {
                                    ref: function(t) {
                                      return (e.lab_art_content = t);
                                    },
                                    className:
                                      "lab_article_content box_padding",
                                  },
                                  a.a.createElement("div", {
                                    className: "ck-content",
                                    dangerouslySetInnerHTML: {
                                      __html: output_secure(
                                        HtmlDecode(this.state.lab[LAB_ARTICLE])
                                      ),
                                    },
                                  })
                                ),
                                a.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "box_flex box_padding lab_article_button",
                                  },
                                  a.a.createElement(
                                    "div",
                                    {
                                      className: "button",
                                      onClick: function() {
                                        e.setState({
                                          expand: !e.state.expand,
                                        }), (e.lab_art_content.style.maxHeight = e
                                          .state.expand
                                          ? "400"
                                          : e.lab_art_content.firstChild
                                              .clientHeight + 100);
                                      },
                                    },
                                    this.state.expand ? "Collapse" : "Read more"
                                  )
                                )
                              ),
                              a.a.createElement(j, {
                                key: this.state.lab[LAB_ID],
                                lid: this.state.lab[LAB_ID],
                                total: this.state.lab[LAB_COUNT_COMMENT],
                              })
                            )
                          : a.a.createElement(
                              "div",
                              {
                                className: "alert alert-warning",
                                role: "alert",
                              },
                              "This is not exist or unpubliced"
                            )
                      ),
                      a.a.createElement(
                        "div",
                        { className: "col-md-4" },
                        this.state.tips[0] &&
                          a.a.createElement(H, { tip: this.state.tips[0] }),
                        a.a.createElement(d, {
                          key: this.state.lab[LAB_SUBJECT],
                          subject: this.state.lab[LAB_SUBJECT],
                          except: this.state.lab[LAB_ID],
                        }),
                        this.state.tips[1] &&
                          a.a.createElement(H, { tip: this.state.tips[1] }),
                        this.state.tips[2] &&
                          a.a.createElement(H, { tip: this.state.tips[2] })
                      )
                    )
                  ),
                  a.a.createElement(Z, {
                    ref: function(t) {
                      return (e.downloadModal = t);
                    },
                    onDownload: function(t) {
                      return window.open(
                        "http://"
                          .concat(
                            t,
                            "/store/public/admin/versions/view?relicense=1&lab_id="
                          )
                          .concat(e.labId, "&lab_name=")
                          .concat(e.state.lab[LAB_NAME])
                      );
                    },
                  }),
                  a.a.createElement(q.a, null)
                );
              },
            },
            {
              key: "componentDidMount",
              value: function() {
                this.loadLab(), this.loadTips();
              },
            },
            {
              key: "componentDidUpdate",
              value: function() {
                this.labId != App.parsed.id &&
                  ((this.labId = App.parsed.id), this.loadLab());
              },
            },
            {
              key: "loadLab",
              value: function() {
                var e = this;
                if (isset(App.server.lab))
                  this.setState({ lab: App.server.lab }, function() {
                    App.server.lab = null;
                  });
                else if ("" != this.labId)
                  return App.loading(!0, "Loading..."), axios
                    .request({
                      url: "/store/labs/getLabInfo",
                      method: "post",
                      data: z({}, LAB_ID, this.labId),
                    })
                    .then(function(t) {
                      return App.loading(
                        !1
                      ), (t = t.data).result ? (e.setState({ lab: t.data }), !0) : (error_handle(t), !1);
                    })
                    .catch(function(e) {
                      return console.log(
                        e
                      ), App.loading(!1), Swal("Error", "Unknow error", "error"), !1;
                    });
              },
            },
            {
              key: "getLab",
              value: function() {
                var e = this;
                if (isLogin()) {
                  if ("" != this.labId)
                    return App.loading(!0, "Loading..."), axios
                      .request({
                        url: "/store/labs/getFreeLab",
                        method: "post",
                        data: z({}, LAB_ID, this.labId),
                      })
                      .then(function(t) {
                        return App.loading(
                          !1
                        ), (t = t.data).result ? (e.loadLab(), App.parsed.href ? (App.parsed.href.includes("?") ? (window.location = "".concat(App.parsed.href, "&relicense=1")) : (window.location = "".concat(App.parsed.href, "?relicense=1"))) : App.server.box ? (window.location = "".concat(App.server.box, "/store/public/admin/versions/view?relicense=1&lab_id=").concat(e.labId, "&lab_name=").concat(e.state.lab[LAB_NAME])) : (e.downloadModal.setText("This lab is added to your account successful. Go to PNETLab Box to download and use it. Fill IP address of your PNETLab:"), e.downloadModal.modal()), !0) : (error_handle(t), !1);
                      })
                      .catch(function(e) {
                        return console.log(
                          e
                        ), App.loading(!1), Swal("Error", "Unknow error", "error"), !1;
                      });
                } else login();
              },
            },
            {
              key: "downloadOpenLab",
              value: function() {
                // If the user has a box, redirect him to the version page
                if (App.server.box) {
                  window.location = ""
                    .concat(
                      App.server.box,
                      "/store/public/admin/versions/view?relicense=1&lab_id="
                    )
                    .concat(this.labId, "&lab_name=")
                    .concat(this.state.lab[LAB_NAME]);
                } else {
                  // If the user doesn't have a box, show a modal asking for the IP address
                  this.downloadModal.setText(
                    "Fill IP address of your PNETLab:"
                  );
                  this.downloadModal.modal();
                }
              },
            },
            {
              key: "removeLab",
              value: function() {
                var e = this;
                if (isLogin()) {
                  if ("" != this.labId)
                    return App.loading(!0, "Loading..."), axios
                      .request({
                        url: "/store/labs/removeLab",
                        method: "post",
                        data: z({}, LICENSE_LID, this.labId),
                      })
                      .then(function(t) {
                        if ((App.loading(!1), (t = t.data).result)) {
                          var n = e.state.lab;
                          return delete n[LICENSE_ID], delete n[
                            LICENSE_LID
                          ], delete n[LICENSE_UID], delete n[
                            LICENSE_TIME
                          ], e.setState({ lab: n }), !0;
                        }
                        return error_handle(t), !1;
                      })
                      .catch(function(e) {
                        return console.log(
                          e
                        ), App.loading(!1), Swal("Error", "Unknow error", "error"), !1;
                      });
                } else login();
              },
            },
            {
              key: "loadTips",
              value: function() {
                var e = this;
                return axios
                  .request({ url: "/store/tips/getLabTips", method: "post" })
                  .then(function(t) {
                    (t = t.data).result && e.setState({ tips: t.data });
                  })
                  .catch(function(e) {
                    console.log(e);
                  });
              },
            },
          ]), t;
        })(o.Component),
        Z = (
          (t.default = Q),
          (function(e) {
            function t(e) {
              var n;
              return F(this, t), ((n = J(this, K(t).call(this, e))).state = {
                box: get(App.box, ""),
                text: "",
              }), (n.id = makeId()), n;
            }
            return X(t, e), Y(t, [
              {
                key: "modal",
                value: function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "show";
                  "hide" == e
                    ? $("#".concat(this.id)).modal("hide")
                    : $("#".concat(this.id)).modal();
                },
              },
              {
                key: "setText",
                value: function(e) {
                  e && this.setState({ text: e });
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this;
                  return a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(
                      "div",
                      { className: "modal fade", id: this.id },
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "modal-dialog modal-lg modal-dialog-centered",
                        },
                        a.a.createElement(
                          "div",
                          { className: "modal-content" },
                          a.a.createElement(
                            "div",
                            { className: "modal-header" },
                            a.a.createElement("h4", {
                              className: "modal-title",
                            }),
                            a.a.createElement(
                              "button",
                              {
                                type: "button",
                                className: "close",
                                "data-dismiss": "modal",
                              },
                              "×"
                            )
                          ),
                          a.a.createElement(
                            "div",
                            { className: "modal-body" },
                            a.a.createElement("b", null, this.state.text),
                            a.a.createElement("input", {
                              style: { width: "100%" },
                              type: "text",
                              className: "input",
                              value: this.state.box,
                              onChange: function(t) {
                                return e.setState({ box: t.target.value });
                              },
                            }),
                            a.a.createElement("br", null),
                            a.a.createElement(
                              "i",
                              null,
                              "If you still do not have PNETLab, please click this ",
                              a.a.createElement(
                                "a",
                                {
                                  href: "https://".concat(
                                    App.server.common.APP_DOMAIN,
                                    "/pages/download"
                                  ),
                                },
                                a.a.createElement("b", null, "Link")
                              ),
                              " to download"
                            )
                          ),
                          a.a.createElement(
                            "div",
                            { className: "modal-footer" },
                            a.a.createElement(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-primary",
                                onClick: function() {
                                  e.onClickHandle();
                                },
                              },
                              "Download"
                            ),
                            a.a.createElement(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-danger",
                                "data-dismiss": "modal",
                              },
                              "Cancel"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
              {
                key: "onClickHandle",
                value: function() {
                  "" != this.state.box &&
                    (
                      (App.box = this.state.box),
                      this.props.onDownload &&
                        this.props.onDownload(this.state.box)
                    );
                    
                },
              },
            ]), t;
          })(o.Component)
        );
    },
  },
]);
