onStartLogin = function(e, n) {
    t.loginBtnTxt = "\u6b63\u5728\u767b\u5f55...";
    var a = void 0;
    (0, G.Loading)(function() {
        return j.default.async(function(i) {
            for (; ; )
                switch (i.prev = i.next) {
                    case 0:
                        if (t.loginInfo.userAccount = (0, A.trim)(t.loginInfo.userAccount), 2 != t.remember) {
                            i.next = 8;
                            break
                        }
                        return i.next = 4, j.default.awrap((0, V.UserLogin)(t.loginInfo, !1));
                    case 4:
                        a = i.sent,
                            t.cleartext = !0,
                            i.next = 13;
                        break;
                    case 8:
                        if (1 != t.remember) {
                            i.next = 13;
                            break
                        }
                        return i.next = 11,
                            j.default.awrap((0, V.UserLogin)(t.loginInfo, !0));
                    case 11:
                        a = i.sent,
                            t.cleartext = !1;
                    case 13:
                        1 === a.status ? (t.isVerifiName = !1,
                        t.loginInfo.userAccount.toLowerCase() === t.loginInfo.userPassword.toLowerCase() && G.MessageBox.confirm("\u5f53\u524d\u8d26\u53f7\u548c\u5bc6\u7801\u76f8\u540c,\u4e3a\u4e86\u4fdd\u62a4\u8d26\u6237\u5b89\u5168\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u5bc6\u7801!").then(n.onToMySecurityCenterView).catch(function() {}),
                            e.changeLogin(),
                            e.checkUserLoginStatus(),
                            localStorage.setItem(t.shareName, a.data.bundleVersionId),
                            (0,
                                D.setUserInfo)(a.data),
                            (0,
                                D.setHasPhone)(a.data.hasPhone),
                            (0,
                                A.ToBackPage)(n.popToRootView),
                            (0,
                                G.Toast)({
                                msg: "\u767b\u5f55\u6210\u529f"
                            })) : 0 === a.status ? ((0,
                            G.Alert)({
                            msg: a.msg
                        }),
                            (0,
                                D.clearKeyPsw)()) : 996 === a.status ? (t.isVerifiName && (0,
                            G.Toast)({
                            msg: a.msg
                        }),
                            t.loginInfo.userName = "",
                            t.isVerifiName = !0) : -13 == a.status ? n.onToLEBindPhoneView() : -12 == a.status ? n.onToLEVertifyLoginView() : -11 == a.status ? (e.setExceptionPop(!0),
                            e.setExceptionData(B({}, a.data, {
                                hasBindPhone: !0,
                                loginInfo: t.loginInfo,
                                hasRememberPwd: 1 == t.remember,
                                validCodeEnable: t.validCodeEnable
                            }))) : -10 == a.status ? (e.setExceptionPop(!0),
                            e.setExceptionData(B({}, a.data, {
                                hasBindPhone: !1,
                                loginInfo: t.loginInfo,
                                hasRememberPwd: 1 == t.remember,
                                validCodeEnable: t.validCodeEnable
                            }))) : (0,
                            G.Alert)({
                            msg: a.msg
                        }),
                            t.loginBtnTxt = "\u767b\u5f55";
                    case 15:
                    case "end":
                        return i.stop()
                }
        }, null, t)
    })
}