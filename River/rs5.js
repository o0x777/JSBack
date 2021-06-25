function WindowProperties() {
    return "function WindowProperties() { [native code] }"
}
function Window() {
    this.PERSISTENT = 1;
    this.TEMPORARY = 0;
    return "function Window() { [native code] }"
}
Window.prototype = WindowProperties;
Window.prototype.constructor = Window;

function Document() {
    Document.prototype.toString = function () {return "function Document() { [native code] }"}
}

Document.prototype.constructor = Object;

document = new Document();

window = new Window();
document.scripts = [0, 1];
window.document = document
function vmProxy(obj){
    var handler = {
        get: function(target, property, receiver){
            /**
             * target: 目标对象
             * property: 被获取的属性名
             * receiver: Proxy或者继承Proxy的对象
            */
             console.log("called: " + property)
             if (property=="name"){
                 return "[object 你也配知道我的名字?]"
             };
            //  console.log(target[property].toString())
            console.log(target[property])
            return target[property]
        },
        set: function(target, property, value, receiver){
            console.log('property set: ' + property + ' = ' + value);
            target[property] = value;
            return true;
        },
        setPrototypeOf: function(target, property){
            console.log("")
            Object.setPrototypeOf(target, property)
        }
    }
    var proxy = new Proxy(obj, handler);
    return proxy;
}

window = vmProxy(window);
document = vmProxy(document);
(function() {
    var _$WW = 0
      , _$xy = [[7, 5, 1, 9, 3, 6, 0, 8, 4, 2], [24, 6, 98, 58, 12, 45, 23, 43, 23, 56, 18, 48, 23, 7, 8, 63, 93, 75, 95, 54, 72, 46, 66, 27, 33, 23, 88, 60, 62, 83, 100, 64, 35, 47, 49, 39, 65, 35, 42, 96, 30, 51, 10, 35, 31, 53, 28, 89, 11, 35, 19, 89, 34, 40, 59, 97, 90, 50, 52, 16, 67, 69, 79, 35, 41, 44, 35, 14, 15, 70, 29, 23, 76, 9, 99, 70, 26, 68, 23, 20, 70, 23, 32, 89, 36, 0, 13, 85, 84, 23, 78, 38, 22, 21, 2, 1, 80, 77, 92, 5, 87, 4, 82, 25, 81, 94, 101, 37, 17, 91, 74, 55, 61, 71, 73, 57, 3, 86, 23], [3, 10, 33, 10, 18, 13, 14, 32, 22, 5, 15, 11, 31, 12, 8, 15, 23, 28, 26, 19, 9, 17, 6, 25, 33, 1, 7, 30, 7, 0, 33, 24, 33, 4, 29, 33, 20, 33, 27, 16, 21, 2, 15], [0, 20, 43, 34, 16, 28, 17, 20, 44, 30, 14, 29, 8, 22, 10, 13, 3, 19, 36, 31, 15, 24, 7, 22, 25, 1, 47, 27, 32, 26, 41, 42, 43, 39, 12, 1, 46, 42, 34, 4, 38, 33, 38, 35, 40, 22, 38, 21, 40, 19, 5, 18, 9, 23, 2, 45, 33, 40, 21, 5, 35, 11, 37, 6, 44], [29, 18, 30, 8, 17, 15, 17, 0, 6, 20, 1, 4, 18, 10, 19, 35, 18, 22, 3, 35, 11, 33, 14, 28, 2, 26, 24, 31, 11, 25, 34, 32, 13, 9, 2, 21, 31, 7, 25, 18, 5, 23, 16, 27, 1, 12, 18]];
    function _$aE(_$P0, _$Zu) {
        return _$e6.Math.abs(_$P0) % _$Zu;
    }
    function _$rn(_$s5) {
        _$s5[12] = _$jO(_$s5);
        _$U2(_$s5);
        var _$Sw = _$wm();
        var _$Sw = _$s5[_$aE(_$cl() + _$US(), 16)];
        var _$Sw = _$3b() - _$s5[_$aE(_$Sz(), 16)];
        _$D1(_$s5);
        return _$4O(_$s5);
    }
    function _$jO(_$s5) {
        var _$mm = _$6a();
        var _$mm = _$cl();
        var _$mm = _$0M();
        var _$p0 = _$VP();
        var _$mm = _$Sz();
        _$s5[_$aE(_$6a(), 16)] = _$cl();
        _$R8(_$s5);
        return _$z3(_$s5);
    }
    function _$6a() {
        return 7
    }
    function _$cl() {
        return 13
    }
    function _$0M() {
        return 14
    }
    function _$VP() {
        return 12
    }
    function _$Sz() {
        return 8
    }
    function _$R8(_$s5) {
        _$s5[9] = _$$s();
        var _$Sw = _$Sz();
        var _$p0 = _$rY();
        _$s5[4] = _$eW();
        var _$p0 = _$0M();
        return _$VP();
    }
    function _$$s() {
        return 15
    }
    function _$rY() {
        return 6
    }
    function _$eW() {
        return 2
    }
    function _$z3(_$s5) {
        var _$Sw = _$6a();
        var _$Sw = _$cl();
        var _$mm = _$0M();
        var _$p0 = _$VP();
        var _$Sw = _$Sz();
        return _$rY();
    }
    function _$U2(_$s5) {
        var _$mm = _$Fi();
        var _$Sw = _$s5[_$aE(_$VP(), 16)];
        _$CZ(_$s5);
        _$y3(_$s5);
        return _$Ri(_$s5);
    }
    function _$Fi() {
        return 9
    }
    function _$CZ(_$s5) {
        var _$Sw = _$6a();
        var _$mm = _$cl();
        var _$mm = _$0M();
        var _$Sw = _$VP();
        _$s5[_$aE(_$J6(), 16)] = _$wm();
        return _$s5[_$aE(_$6R(), 16)];
    }
    function _$J6() {
        return 11
    }
    function _$wm() {
        return 1
    }
    function _$6R() {
        return 4
    }
    function _$y3(_$s5) {
        var _$mm = _$oa();
        if (_$Fi()) {
            var _$p0 = _$Sz();
        }
        var _$Sw = _$Fi();
        var _$mm = _$$s();
        _$7n(_$s5);
        if (_$eW()) {
            _$s5[0] = _$0M();
        }
        if (_$wm()) {
            _$s5[7] = _$cl();
        }
        return _$s5[_$aE(_$VP(), 16)];
    }
    function _$oa() {
        return 10
    }
    function _$7n(_$s5) {
        _$s5[_$aE(_$Sz(), 16)] = _$rY();
        _$s5[4] = _$eW();
        var _$p0 = _$$s();
        var _$p0 = _$3b();
        _$s5[11] = _$wm();
        return _$6a();
    }
    function _$3b() {
        return 5
    }
    function _$Ri(_$s5) {
        var _$mm = _$0M();
        if (_$wm()) {
            _$s5[7] = _$cl();
        }
        var _$Sw = _$wm();
        var _$mm = _$6a();
        _$Rg(_$s5);
        return _$s5[_$aE(_$VP(), 16)];
    }
    function _$Rg(_$s5) {
        _$s5[_$aE(_$Gt(), 16)] = _$0M();
        _$s5[_$aE(_$3b(), 16)] = _$J6();
        _$s5[1] = _$6a();
        _$s5[13] = _$US();
        return _$Fi();
    }
    function _$Gt() {
        return 0
    }
    function _$US() {
        return 3
    }
    function _$D1(_$s5) {
        _$Zy(_$s5);
        var _$Sw = _$J6();
        var _$mm = _$wm();
        _$s5[7] = _$cl();
        _$s5[3] = _$Fi();
        _$s5[15] = _$3b();
        _$s5[_$aE(_$wm() + _$6a(), 16)] = _$kK(_$s5);
        return _$Jb(_$s5);
    }
    function _$Zy(_$s5) {
        _$TX(_$s5);
        _$hr(_$s5);
        _$eQ(_$s5);
        _$s5[15] = _$3b();
        var _$Sw = _$rY();
        var _$Sw = _$6R();
        return _$8o(_$s5);
    }
    function _$TX(_$s5) {
        _$s5[_$aE(_$0M(), 16)] = _$VP();
        _$s5[_$aE(_$J6(), 16)] = _$wm();
        var _$Sw = _$eW();
        var _$p0 = _$Gt();
        _$s5[14] = _$VP();
        return _$oa();
    }
    function _$hr(_$s5) {
        var _$Sw = _$cl();
        var _$mm = _$US();
        _$s5[9] = _$$s();
        var _$mm = _$J6();
        return _$wm();
    }
    function _$eQ(_$s5) {
        var _$p0 = _$Gt();
        var _$mm = _$0M();
        _$s5[12] = _$oa();
        _$s5[_$aE(_$wm(), 16)] = _$6a();
        _$s5[13] = _$US();
        return _$Fi();
    }
    function _$8o(_$s5) {
        var _$mm = _$$s();
        var _$mm = _$3b();
        var _$Sw = _$rY();
        var _$p0 = _$6R();
        var _$mm = _$Gt();
        return _$0M();
    }
    function _$kK(_$s5) {
        _$s5[0] = _$0M();
        _$s5[12] = _$oa();
        _$s5[8] = _$rY();
        return _$6R();
    }
    function _$Jb(_$s5) {
        _$LM(_$s5);
        _$9b(_$s5);
        _$s5[_$aE(_$wm(), 16)] = _$6a();
        var _$mm = _$Gt();
        var _$p0 = _$0M();
        return _$3b() + _$J6();
    }
    function _$LM(_$s5) {
        _$s5[14] = _$VP();
        _$s5[10] = _$Sz();
        _$s5[_$aE(_$6a(), 16)] = _$cl();
        return _$US();
    }
    function _$9b(_$s5) {
        _$s5[15] = _$3b();
        _$s5[11] = _$wm();
        _$s5[7] = _$cl();
        var _$mm = _$0M();
        var _$p0 = _$VP();
        return _$oa();
    }
    function _$4O(_$s5) {
        _$s5[_$aE(_$cl(), 16)] = _$s5[_$aE(_$Gt(), 16)];
        _$s5[14] = _$3b() + _$J6();
        var _$mm = _$cl();
        var _$Sw = _$s5[_$aE(_$Gt(), 16)];
        _$Mb(_$s5);
        _$s5[3] = _$Fi();
        return _$s5[_$aE(_$3b() + _$J6(), 16)];
    }
    function _$Mb(_$s5) {
        var _$Sw = _$J6();
        var _$Sw = _$wm();
        _$bK(_$s5);
        if (_$oa()) {
            _$s5[8] = _$rY();
        }
        if (_$0M()) {
            _$s5[12] = _$oa();
        }
        return _$cl();
    }
    function _$bK(_$s5) {
        var _$p0 = _$Gt();
        var _$p0 = _$0M();
        var _$p0 = _$oa();
        _$s5[8] = _$rY();
        var _$mm = _$US();
        var _$mm = _$Fi();
        return _$$s();
    }
    var _$jD, _$hk, _$e6, _$1p, _$AG, _$rn, _$P5;
    var _$Ma, _$JC, _$6q = _$WW, _$v7 = _$xy[0];
    while (1) {
        _$JC = _$v7[_$6q++];
        if (_$JC < 4) {
            if (_$JC < 1) {
                _$6q += 1;
            } else if (_$JC < 2) {
                _$AG = _$e6['$_ts'];
            } else if (_$JC < 3) {
                _$6q += -3;
            } else {
                if (!_$Ma)
                    _$6q += 1;
            }
        } else if (_$JC < 8) {
            if (_$JC < 5) {
                _$zN(0);
            } else if (_$JC < 6) {
                _$e6 = window,
                _$P5 = String,
                _$1p = Array;
            } else if (_$JC < 7) {
                _$AG = _$e6['$_ts'] = {};
            } else {
                _$jD = [4, 16, 64, 256, 1024, 4096, 16384, 65536];
            }
        } else {
            if (_$JC < 9) {
                return;
            } else {
                _$Ma = !_$AG;
            }
        }
    }
    function _$zN(_$Sw, _$P0) {
        function _$cp() {
            var _$P5 = _$qa.charCodeAt(_$Un++), _$aE;
            if (_$P5 < 128) {
                return _$P5;
            } else if (_$P5 < 251) {
                return _$P5 - 32;
            } else if (_$P5 === 251) {
                return 0;
            } else if (_$P5 === 254) {
                _$P5 = _$qa.charCodeAt(_$Un++);
                if (_$P5 >= 128)
                    _$P5 -= 32;
                _$aE = _$qa.charCodeAt(_$Un++);
                if (_$aE >= 128)
                    _$aE -= 32;
                return _$P5 * 219 + _$aE;
            } else if (_$P5 === 255) {
                _$P5 = _$qa.charCodeAt(_$Un++);
                if (_$P5 >= 128)
                    _$P5 -= 32;
                _$aE = _$qa.charCodeAt(_$Un++);
                if (_$aE >= 128)
                    _$aE -= 32;
                _$P5 = _$P5 * 219 * 219 + _$aE * 219;
                _$aE = _$qa.charCodeAt(_$Un++);
                if (_$aE >= 128)
                    _$aE -= 32;
                return _$P5 + _$aE;
            } else if (_$P5 === 252) {
                _$aE = _$qa.charCodeAt(_$Un++);
                if (_$aE >= 128)
                    _$aE -= 32;
                return -_$aE;
            } else if (_$P5 === 253) {
                _$P5 = _$qa.charCodeAt(_$Un++);
                if (_$P5 >= 128)
                    _$P5 -= 32;
                _$aE = _$qa.charCodeAt(_$Un++);
                if (_$aE >= 128)
                    _$aE -= 32;
                return _$P5 * -219 - _$aE;
            } else {}
        }
        var _$Un, _$qa, _$GC, _$P6, _$P5, _$aE, _$WW, _$6q, _$Ma, _$ex, _$JC, _$v7, _$s5, _$Vr, _$hE, _$p0, _$mm, _$VM, _$YD, _$f9;
        var _$6a, _$0M, _$jO = _$Sw, _$VP = _$xy[1];
        while (1) {
            _$0M = _$VP[_$jO++];
            if (_$0M < 64) {
                if (_$0M < 16) {
                    if (_$0M < 4) {
                        if (_$0M < 1) {
                            _$jO += 2;
                        } else if (_$0M < 2) {
                            _$P0._$B6 = "_$eW";
                        } else if (_$0M < 3) {
                            _$P0._$$1 = "_$rY";
                        } else {
                            _$P0._$Qf = "_$Zo";
                        }
                    } else if (_$0M < 8) {
                        if (_$0M < 5) {
                            _$P0._$VP = "_$wm";
                        } else if (_$0M < 6) {
                            _$P0._$JR = "_$CZ";
                        } else if (_$0M < 7) {
                            _$zN(90, _$AG);
                        } else {
                            var _$P5 = '';
                        }
                    } else if (_$0M < 12) {
                        if (_$0M < 9) {
                            _$P5 += "jDhke61pAGrnP0ZucpqaGCP6UnYDVrVMOplaw8zd$GlvZZ0xchriINnV4QOEBtbmLu1nz88CGkYhxyV$zN6dPTolP5aEWW6qMaexJCv7s5f9hEp0mmSwjO6acl0MVPSzR8$srYeWz3U2FiCZJ6wm6Ry3oa7n3bRiRgGtUSD1ZyTXhreQ8okKJbLM9b4O";
                        } else if (_$0M < 10) {
                            _$P5 = _$P5.replace(RegExp('[\\r\\n\\s]', 'g'), "");
                        } else if (_$0M < 11) {
                            var _$JC = _$cp();
                        } else {
                            _$VM = _$qa.substr(_$Un, _$v7).split(String.fromCharCode(255));
                        }
                    } else {
                        if (_$0M < 13) {
                            _$Un += _$v7;
                        } else if (_$0M < 14) {
                            _$P5 = _$e6.eval;
                        } else if (_$0M < 15) {
                            var _$mm = _$zN(7);
                        } else {
                            _$6a = _$mm - _$P5 > 12000;
                        }
                    }
                } else if (_$0M < 32) {
                    if (_$0M < 20) {
                        if (_$0M < 17) {
                            for (_$hE = 0; _$hE < _$f9; _$hE++) {
                                _$s5.push("}");
                            }
                        } else if (_$0M < 18) {
                            _$P0._$f9 = "ZYhRLC1s1_2U1h_KKia.Lq";
                        } else if (_$0M < 19) {
                            for (_$P5 = 0,
                            _$aE = 0; _$aE < _$WW; _$aE += 2) {
                                _$6q[_$P5++] = _$Ma + _$P0.substr(_$aE, 2);
                            }
                        } else {
                            _$jO += -47;
                        }
                    } else if (_$0M < 24) {
                        if (_$0M < 21) {
                            _$6a = _$P0 === undefined || _$P0 === "";
                        } else if (_$0M < 22) {
                            _$P0._$t$ = "_$J6";
                        } else if (_$0M < 23) {
                            _$P0._$Yh = 1;
                        } else {
                            return;
                        }
                    } else if (_$0M < 28) {
                        if (_$0M < 25) {
                            _$AG._$EN = _$zN(13);
                        } else if (_$0M < 26) {
                            _$P0._$AG = "Efj1S7aDVRq";
                        } else if (_$0M < 27) {
                            return 1;
                        } else {
                            _$P5 += "tS0ORdW0VTT1N0i3x3$AKbyqATM5CRyw$q0lIpCfJaxHl4QbDtqkMMOUdewcaqGiD5dK2WqCmtXBOmUc$6c8N9NDWgMSJE3fVQueY1JtxI$a4Ed0uyIX09yisnUYov5NK9ZD7hDyqA4v5quIX9DLIrzHxB7f_bIziVtzuqkna2i5Ugb$$3PhQHQ0lpErIqnK";
                        }
                    } else {
                        if (_$0M < 29) {
                            _$6a = _$f9 > 0;
                        } else if (_$0M < 30) {
                            _$AG._$FO = 1;
                        } else if (_$0M < 31) {
                            var _$YD = _$cp();
                        } else {
                            _$f9 = _$cp();
                        }
                    }
                } else if (_$0M < 48) {
                    if (_$0M < 36) {
                        if (_$0M < 33) {
                            _$6a = _$e6.execScript;
                        } else if (_$0M < 34) {
                            return _$zN(9, _$P5);
                        } else if (_$0M < 35) {
                            _$zN(26);
                        } else {}
                    } else if (_$0M < 40) {
                        if (_$0M < 37) {
                            ret = _$e6.execScript(_$P0);
                        } else if (_$0M < 38) {
                            _$P0._$1p = _$rn;
                        } else if (_$0M < 39) {
                            _$P0._$e6 = 173;
                        } else {
                            var _$6q = _$qa.length;
                        }
                    } else if (_$0M < 44) {
                        if (_$0M < 41) {
                            _$jO += 1;
                        } else if (_$0M < 42) {
                            _$aE = _$zN(7);
                        } else if (_$0M < 43) {
                            var _$Ma = _$cp();
                        } else {
                            return new Date().getTime();
                        }
                    } else {
                        if (_$0M < 45) {
                            _$zN(79, _$p0);
                        } else if (_$0M < 46) {
                            _$jO += 50;
                        } else if (_$0M < 47) {
                            _$P5 += "Aot3E9ILUQiq_eBwW$Z1Tz95Al31HXKcSfOFcDmvEW8ciFBQBouasJiOO83ObBzhdlLl2c2hR6Ap5ePni6buf6vsMhrA$xQnxXtKxQHdrTZbubqYTFnP8aOL9LG1GL8k00Cmabaw4l_THYg3UbHjxLiR5uQkft9xlmArs1HEtt2M7SoLU$ox0ix4rEvt";
                        } else {
                            var _$P6 = _$AG.aebi = [];
                        }
                    }
                } else {
                    if (_$0M < 52) {
                        if (_$0M < 49) {
                            return _$6q;
                        } else if (_$0M < 50) {
                            var _$WW = _$zN(72);
                        } else if (_$0M < 51) {
                            var _$f9 = _$cp();
                        } else {
                            var _$Vr = _$cp();
                        }
                    } else if (_$0M < 56) {
                        if (_$0M < 53) {
                            for (_$hE = 0; _$hE < _$f9; _$hE++) {
                                _$6d(16, _$hE, _$s5);
                            }
                        } else if (_$0M < 54) {
                            var _$v7 = _$cp();
                        } else if (_$0M < 55) {
                            _$P5 += "v5cQ2g2KSp2lZI6DcSRAAKR4kUnjQV896hWaBHKw8jg$haAfZG21DJSBEXIosx94NJKFICsquB5A116HDqyjGHydG2c_Tu5t0KFv149TBgbbpCAPmMClY2q7L2nqniVfgSqzyf0crgEdxVFLKgRMCLPOUs7zx1dRfDytQuVK6E7FnvSa_74XLSJpsOBS";
                        } else {
                            _$P0._$hE = "_$vY";
                        }
                    } else if (_$0M < 60) {
                        if (_$0M < 57) {
                            var _$P5, _$aE, _$WW = _$P0.length, _$6q = new _$1p(_$WW / 2), _$Ma = '_$';
                        } else if (_$0M < 58) {
                            _$P0._$v7 = "_$$n";
                        } else if (_$0M < 59) {
                            _$jO += 47;
                        } else {
                            _$6d(0);
                        }
                    } else {
                        if (_$0M < 61) {
                            var _$qa = _$AG["f22c526"];
                        } else if (_$0M < 62) {
                            _$P0._$JB = "_$Y1";
                        } else if (_$0M < 63) {
                            _$AG["f22c526"] = _$hk;
                        } else {
                            _$P5 += "MbbKVlyNxAcuidFgZMXqNSSZckdYm16pAzYKNckECk5vcjvISIhBZ4KS9msU0mh1HvgIBIQqNLJs1bTdgWjaP7$Jb64rPuB6$18T6JJRt$TsBcEJKqdbpl4K$B5Mo1fZnoqpw1QgMvPR$nTlasvYku3Wd6Kp9JNrJ9ENGuj$Q4ZciW6Sc48IPUpq5gZ0";
                        }
                    }
                }
            } else {
                if (_$0M < 80) {
                    if (_$0M < 68) {
                        if (_$0M < 65) {
                            var _$aE = _$zN(7);
                        } else if (_$0M < 66) {
                            var _$Un = 0;
                        } else if (_$0M < 67) {
                            _$P5 += "r2EC91mJONRIwfRXje4G$0RLe0MjZtDC98$TTcK8X7ZFDRFWSj5c4hnHMortqn9NTk1ws0w2$ZwqTyvVDlO$tUom7DSyvlfBW1xlCcKxD91cSD_KKrDTRKNGlEmUcUzbnAeXeuU133AUYAYoogq97cY9RPvXooPDloNlqImKxv5Heo9clYrNxNerWMdC";
                        } else {
                            _$s5.push(")();");
                        }
                    } else if (_$0M < 72) {
                        if (_$0M < 69) {
                            return 0;
                        } else if (_$0M < 70) {
                            var _$p0 = _$s5.join('');
                        } else if (_$0M < 71) {
                            if (!_$6a)
                                _$jO += 1;
                        } else {
                            _$P0._$p0 = "_$ku";
                        }
                    } else if (_$0M < 76) {
                        if (_$0M < 73) {
                            _$P5 += "6bTbH$cRuP_W_XSCTLFj5KvcbwxkSLNxXLGIl1Z9CuOdWk_pCBbspQXoWu2qd3vJUfgLb7UZiHhcNkxdCdAsTPKNddsQoYvylwFZ6voz1UzqpIbpp9ofCMUGYHqO_8kw3tY4Y6OKsWmy_J2suUF6i$hWTAxqjJaAMc42m8TqYmT5SeDoKZaC9iUtGMgF";
                        } else if (_$0M < 74) {
                            _$P0._$qR = "_$6o";
                        } else if (_$0M < 75) {
                            _$P0._$ao = "_$wD";
                        } else {
                            _$P5 += "r4OilfD0AWMkjuIhCb4H3p$7oStj9z6ChYHquVuKA68yWt52Ik58ZQRTDfzsWYDrpEsRaNmLeApm5oVDuRFyGyXVQtzToe0V_vKYkeUxDpE4DNibUEqQSV04th8mYScT$mvQHgL1B2w0SYpyDcYQBZuZ1JKkbDcKegi2H0unmocWz5VgzVXgRZ6GxWjA";
                        }
                    } else {
                        if (_$0M < 77) {
                            var _$P5 = _$e6.eval.toString();
                        } else if (_$0M < 78) {
                            _$P0._$8T = "_$U2";
                        } else if (_$0M < 79) {
                            _$P0._$Gk = 26;
                        } else {
                            _$AG._$Ma -= _$zN(7);
                        }
                    }
                } else if (_$0M < 96) {
                    if (_$0M < 84) {
                        if (_$0M < 81) {
                            _$P0._$Ts = "_$z3";
                        } else if (_$0M < 82) {
                            _$P0._$xy = "dk909is_xca";
                        } else if (_$0M < 83) {
                            _$P0._$0M = "_$s5";
                        } else {
                            var _$GC = _$AG._$EN;
                        }
                    } else if (_$0M < 88) {
                        if (_$0M < 85) {
                            return ret;
                        } else if (_$0M < 86) {
                            ret = _$P5.call(_$e6, _$P0);
                        } else if (_$0M < 87) {
                            _$P0._$mm = "_$as";
                        } else {
                            _$P0._$Bc = "_$6R";
                        }
                    } else if (_$0M < 92) {
                        if (_$0M < 89) {
                            _$AG._$Ma = new Date().getTime();
                        } else if (_$0M < 90) {
                            if (!_$6a)
                                _$jO += 2;
                        } else if (_$0M < 91) {
                            var _$s5 = [];
                        } else {
                            _$P0._$d6 = 46;
                        }
                    } else {
                        if (_$0M < 93) {
                            _$P0._$6J = "_$Fi";
                        } else if (_$0M < 94) {
                            _$P5 += "pLGFgaIBkhRhGssA2FtBnQ5BTelqKoFHTMJVbxCyLX4zUA8YR7FOaoJBqRQfHCPddiiuhM8pExDsVUXCt0pWiNHsAXt70An7O_A_iDZ_Zl4dvxqLVnMIQCwu3iPjbWM8r7cGvKhbNpwZxPIFcHbOcBTrgmxz231N6$kZjlI$$8HI9MGleNpUXI8HIHiz";
                        } else if (_$0M < 95) {
                            _$P0._$P0 = "H3o4Xq0B4gUeMyRsm1hg73";
                        } else {
                            _$P5 += "daneiQo7s49SWcI2ls8SpDppwlHtdSZSSuV8MgFV2vfg3k6fCED21BFerX5ZLt8Ek1AnInrq$vXWrLm2B$S_nJta5pEs$DPSAah3fApdmZv8vBf59VSEGZN$ZVK_51tuYp5YpMgxI9hdNyJ1ixOqx_OYvuKMmz0UpKpJmH2_V0TmScqlahIVLySR4CP2";
                        }
                    }
                } else {
                    if (_$0M < 100) {
                        if (_$0M < 97) {
                            var _$ex = _$cp();
                        } else if (_$0M < 98) {
                            _$jO += -50;
                        } else if (_$0M < 99) {
                            _$6a = _$AG["f22c526"];
                        } else {
                            _$6a = _$P5 !== "functioneval(){[nativecode]}";
                        }
                    } else {
                        if (_$0M < 101) {
                            var _$P5 = _$zN(7);
                        } else {
                            _$P0._$lv = "dTjxBFbxuBq";
                        }
                    }
                }
            }
        }
        function _$6d(_$6q, _$Op, _$la) {
            function _$w8() {
                var _$JC = [0];
                Array.prototype.push.apply(_$JC, arguments);
                return _$PT.apply(this, _$JC);
            }
            var _$P5, _$aE, _$WW, _$zd, _$$G, _$lv, _$ZZ, _$0x, _$ch, _$ri, _$IN, _$nV, _$4Q, _$OE, _$Bt, _$bm;
            var _$ex, _$v7, _$Ma = _$6q, _$s5 = _$xy[2];
            while (1) {
                _$v7 = _$s5[_$Ma++];
                if (_$v7 < 16) {
                    if (_$v7 < 4) {
                        if (_$v7 < 1) {
                            var _$4Q = _$6d(11);
                        } else if (_$v7 < 2) {
                            var _$nV = _$6d(11);
                        } else if (_$v7 < 3) {
                            _$PT(9, _$la);
                        } else {
                            var _$P5 = document.scripts.length;
                        }
                    } else if (_$v7 < 8) {
                        if (_$v7 < 5) {
                            var _$P5 = _$6d(11);
                        } else if (_$v7 < 6) {
                            _$zd.send();
                        } else if (_$v7 < 7) {
                            var _$ri = _$cp();
                        } else {
                            _$Ma += -25;
                        }
                    } else if (_$v7 < 12) {
                        if (_$v7 < 9) {
                            return _$aE;
                        } else if (_$v7 < 10) {
                            var _$0x = _$cp();
                        } else if (_$v7 < 11) {
                            _$Ma += 25;
                        } else {
                            var _$P5 = _$cp();
                        }
                    } else {
                        if (_$v7 < 13) {
                            for (_$WW = 0; _$WW < _$P5; _$WW++) {
                                _$aE[_$WW] = _$cp();
                            }
                        } else if (_$v7 < 14) {
                            if (!_$ex)
                                _$Ma += 4;
                        } else if (_$v7 < 15) {
                            _$zd = _$e6.ActiveXObject ? new _$e6.ActiveXObject('Microsoft.XMLHTTP') : new _$e6.XMLHttpRequest();
                        } else {
                            return;
                        }
                    }
                } else if (_$v7 < 32) {
                    if (_$v7 < 20) {
                        if (_$v7 < 17) {
                            var _$bm = [];
                        } else if (_$v7 < 18) {
                            var _$ch = _$cp();
                        } else if (_$v7 < 19) {
                            _$ex = _$aE;
                        } else {
                            var _$ZZ = _$cp();
                        }
                    } else if (_$v7 < 24) {
                        if (_$v7 < 21) {
                            var _$Bt = _$6d(11);
                        } else if (_$v7 < 22) {
                            for (_$WW = 0; _$WW < _$aE; _$WW++) {
                                _$bm[_$WW] = _$6d(11);
                            }
                        } else if (_$v7 < 23) {
                            _$zd.onreadystatechange = _$w8;
                        } else {
                            var _$zd = _$cp();
                        }
                    } else if (_$v7 < 28) {
                        if (_$v7 < 25) {
                            var _$OE = _$6d(11);
                        } else if (_$v7 < 26) {
                            var _$IN = _$cp();
                        } else if (_$v7 < 27) {
                            var _$lv = _$cp();
                        } else {
                            var _$aE = _$cp();
                        }
                    } else {
                        if (_$v7 < 29) {
                            var _$$G = _$cp();
                        } else if (_$v7 < 30) {
                            _$P6[_$Op] = _$P5;
                        } else if (_$v7 < 31) {
                            var _$aE = _$P5 > 1 ? document.scripts[_$P5 - 2].src : _$hk;
                        } else {
                            var _$aE = new Array(_$P5);
                        }
                    }
                } else {
                    if (_$v7 < 33) {
                        _$zd.open('GET', _$aE, false);
                    } else {}
                }
            }
            function _$PT(_$aE, _$Lu) {
                var _$1n, _$P5;
                var _$6q, _$ex, _$WW = _$aE, _$JC = _$xy[3];
                while (1) {
                    _$ex = _$JC[_$WW++];
                    if (_$ex < 16) {
                        if (_$ex < 4) {
                            if (_$ex < 1) {
                                _$6q = _$zd.readyState == 4;
                            } else if (_$ex < 2) {
                                if (!_$6q)
                                    _$WW += 1;
                            } else if (_$ex < 3) {
                                if (!_$6q)
                                    _$WW += 9;
                            } else {
                                _$Lu.push("=$_ts.scj,");
                            }
                        } else if (_$ex < 8) {
                            if (_$ex < 5) {
                                _$Lu.push(_$GC[_$lv]);
                            } else if (_$ex < 6) {
                                _$Lu.push("[");
                            } else if (_$ex < 7) {
                                _$Lu.push("}");
                            } else {
                                _$Lu.push("(");
                            }
                        } else if (_$ex < 12) {
                            if (_$ex < 9) {
                                _$Lu.push("(function(){var ");
                            } else if (_$ex < 10) {
                                _$Lu.push("];");
                            } else if (_$ex < 11) {
                                _$Lu.push("=0,");
                            } else {
                                _$Lu.push("++];");
                            }
                        } else {
                            if (_$ex < 13) {
                                _$6q = _$AG["f22c526"];
                            } else if (_$ex < 14) {
                                _$Lu.push(_$GC[_$YD]);
                            } else if (_$ex < 15) {
                                _$6q = _$Op == 0;
                            } else {
                                _$Lu.push("function ");
                            }
                        }
                    } else if (_$ex < 32) {
                        if (_$ex < 20) {
                            if (_$ex < 17) {
                                _$Lu.push(_$GC[_$4Q[0]]);
                            } else if (_$ex < 18) {
                                _$Lu.push(";");
                            } else if (_$ex < 19) {
                                _$Lu.push(_$Op);
                            } else {
                                _$Lu.push(_$GC[_$Vr]);
                            }
                        } else if (_$ex < 24) {
                            if (_$ex < 21) {
                                _$WW += 30;
                            } else if (_$ex < 22) {
                                _$Lu.push(_$GC[_$IN]);
                            } else if (_$ex < 23) {
                                _$Lu.push(_$GC[_$$G]);
                            } else {
                                _$6q = _$bm.length;
                            }
                        } else if (_$ex < 28) {
                            if (_$ex < 25) {
                                _$Lu.push(_$GC[_$0x]);
                            } else if (_$ex < 26) {
                                _$6q = _$nV.length;
                            } else if (_$ex < 27) {
                                _$ol(40);
                            } else {
                                _$Lu.push("){");
                            }
                        } else {
                            if (_$ex < 29) {
                                for (_$P5 = 1; _$P5 < _$4Q.length; _$P5++) {
                                    _$Lu.push(",");
                                    _$Lu.push(_$GC[_$4Q[_$P5]]);
                                }
                            } else if (_$ex < 30) {
                                if (!_$6q)
                                    _$WW += 8;
                            } else if (_$ex < 31) {
                                var _$P5, _$1n = 4;
                            } else {
                                _$WW += 8;
                            }
                        }
                    } else {
                        if (_$ex < 36) {
                            if (_$ex < 33) {
                                for (_$P5 = 0; _$P5 < _$OE.length; _$P5 += 2) {
                                    _$ol(0, _$OE[_$P5], _$OE[_$P5 + 1], _$Lu);
                                }
                            } else if (_$ex < 34) {
                                _$Lu.push(_$GC[_$ri]);
                            } else if (_$ex < 35) {
                                _$Lu.push("var ");
                            } else {
                                _$Lu.push(_$GC[_$zd]);
                            }
                        } else if (_$ex < 40) {
                            if (_$ex < 37) {
                                _$Lu.push("=$_ts.aebi;");
                            } else if (_$ex < 38) {
                                _$ol(13, 0, _$bm.length);
                            } else if (_$ex < 39) {
                                _$Lu.push(",");
                            } else {
                                _$zN(79, _$zd.responseText);
                            }
                        } else if (_$ex < 44) {
                            if (_$ex < 41) {
                                _$Lu.push("=");
                            } else if (_$ex < 42) {
                                _$6q = _$4Q.length;
                            } else if (_$ex < 43) {
                                _$WW += -30;
                            } else {
                                if (!_$6q)
                                    _$WW += 4;
                            }
                        } else {
                            if (_$ex < 45) {
                                return;
                            } else if (_$ex < 46) {
                                _$Lu.push("while(1){");
                            } else if (_$ex < 47) {
                                _$zN(26);
                            } else {
                                for (_$P5 = 0; _$P5 < _$nV.length; _$P5++) {
                                    _$Lu.push(",");
                                    _$Lu.push(_$GC[_$nV[_$P5]]);
                                }
                            }
                        }
                    }
                }
                function _$ol(_$Ma, _$z8, _$8C, _$Gk) {
                    var _$P5, _$aE, _$WW, _$6q;
                    var _$JC, _$s5, _$ex = _$Ma, _$f9 = _$xy[4];
                    while (1) {
                        _$s5 = _$f9[_$ex++];
                        if (_$s5 < 16) {
                            if (_$s5 < 4) {
                                if (_$s5 < 1) {
                                    _$aE -= _$aE % 2;
                                } else if (_$s5 < 2) {
                                    if (!_$JC)
                                        _$ex += 1;
                                } else if (_$s5 < 3) {
                                    _$aE = "if(";
                                } else {
                                    _$JC = _$6q == 1;
                                }
                            } else if (_$s5 < 8) {
                                if (_$s5 < 5) {
                                    _$Lu.push(_$VM[_$P5[_$aE]]);
                                } else if (_$s5 < 6) {
                                    var _$P5 = _$Bt.length;
                                } else if (_$s5 < 7) {
                                    _$ex += -4;
                                } else {
                                    _$ol(13, _$z8, _$8C);
                                }
                            } else if (_$s5 < 12) {
                                if (_$s5 < 9) {
                                    var _$aE = _$P5.length;
                                } else if (_$s5 < 10) {} else if (_$s5 < 11) {
                                    var _$P5, _$aE, _$WW, _$6q = _$8C - _$z8;
                                } else {
                                    _$ol(2, _$z8);
                                }
                            } else {
                                if (_$s5 < 13) {
                                    _$Lu.push(_$VM[_$Bt[_$P5]]);
                                } else if (_$s5 < 14) {
                                    for (_$P5 = 1; _$P5 < 7; _$P5++) {
                                        if (_$6q <= _$jD[_$P5]) {
                                            _$WW = _$jD[_$P5 - 1];
                                            break;
                                        }
                                    }
                                } else if (_$s5 < 15) {
                                    _$JC = _$6q <= _$1n;
                                } else {
                                    for (k = 0; k < _$aE; k += 2) {
                                        _$Lu.push(_$VM[_$P5[k]]);
                                        _$Lu.push(_$GC[_$P5[k + 1]]);
                                    }
                                }
                            }
                        } else if (_$s5 < 32) {
                            if (_$s5 < 20) {
                                if (_$s5 < 17) {
                                    for (_$aE = 0; _$aE < _$P5; _$aE += 2) {
                                        _$Lu.push(_$VM[_$Bt[_$aE]]);
                                        _$Lu.push(_$GC[_$Bt[_$aE + 1]]);
                                    }
                                } else if (_$s5 < 18) {
                                    _$ex += 2;
                                } else if (_$s5 < 19) {
                                    return;
                                } else {
                                    _$JC = _$6q == 0;
                                }
                            } else if (_$s5 < 24) {
                                if (_$s5 < 21) {
                                    _$JC = _$P5.length != _$aE;
                                } else if (_$s5 < 22) {
                                    for (; _$z8 + _$WW < _$8C; _$z8 += _$WW) {
                                        _$Lu.push(_$aE);
                                        _$Lu.push(_$GC[_$ri]);
                                        _$Lu.push('<');
                                        _$Lu.push(_$z8 + _$WW);
                                        _$Lu.push("){");
                                        _$ol(13, _$z8, _$z8 + _$WW);
                                        _$aE = "}else if(";
                                    }
                                } else if (_$s5 < 23) {
                                    _$ex += 21;
                                } else {
                                    _$P5 -= _$P5 % 2;
                                }
                            } else if (_$s5 < 28) {
                                if (_$s5 < 25) {
                                    for (; _$z8 < _$8C; _$z8++) {
                                        _$Lu.push(_$aE);
                                        _$Lu.push(_$GC[_$ri]);
                                        _$Lu.push('<');
                                        _$Lu.push(_$z8 + 1);
                                        _$Lu.push("){");
                                        _$ol(2, _$z8);
                                        _$aE = "}else if(";
                                    }
                                } else if (_$s5 < 26) {
                                    _$Lu.push("}");
                                } else if (_$s5 < 27) {
                                    _$8C--;
                                } else {
                                    _$JC = _$Bt.length != _$P5;
                                }
                            } else {
                                if (_$s5 < 29) {
                                    if (!_$JC)
                                        _$ex += 7;
                                } else if (_$s5 < 30) {
                                    _$Gk.push(["function ", _$GC[_$z8], "(){var ", _$GC[_$ZZ], "=[", _$8C, "];Array.prototype.push.apply(", _$GC[_$ZZ], ",arguments);return ", _$GC[_$ch], ".apply(this,", _$GC[_$ZZ], ");}"].join(''));
                                } else if (_$s5 < 31) {
                                    var _$P5 = _$bm[_$z8];
                                } else {
                                    _$Lu.push("}else{");
                                }
                            }
                        } else {
                            if (_$s5 < 33) {
                                _$WW = 0;
                            } else if (_$s5 < 34) {
                                _$ex += 17;
                            } else if (_$s5 < 35) {
                                _$ex += 8;
                            } else {
                                if (!_$JC)
                                    _$ex += 2;
                            }
                        }
                    }
                }
            }
        }
    }
}
)()
console.log(window)
console.log(document)