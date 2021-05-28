function ShowPage(m, f, j) {
    m = Number(m);
    if (nEnable == 0) {
        return
    }
    nPageCount = Math.ceil(m / nPageLength);
    if (nPageCount < 2) {
        return
    }
    var e = _getPageUrl(m);
    var d = "";
    var l = e.match(/CurDBcode=([^&]*)/ig);
    d = l == null ? "" : RegExp.$1;
    if (d == f) {
        GetCurrentPage()
    } else {
        nCurrentPage = 1
    }
    var p = nShowPageNum > nPageCount ? nPageCount : nShowPageNum;
    var n = (nCurrentPage + Math.ceil(p / 2)) > nPageCount ? nPageCount : nCurrentPage + Math.ceil(p / 2);
    var k = n + 1 - p;
    if (k < 1) {
        k = 1;
        n = p - k + 1
    }
    var o = '<a href="{0}" class="{1}">{2}</a>';
    var g = new Array();
    g.push(textCount.format(nPageCount));
    g.push("&nbsp;&nbsp;&nbsp;&nbsp;");
    var a;
    if (nCurrentPage > 1) {
        a = o.format(_getPageUrlCode(1, f), "", textFirstPage);
        g.push(a);
        a = o.format(_getPageUrlCode(nCurrentPage - 1, f), "", textPrePage);
        g.push(a)
    }
    if (nCurrentPage < nPageCount + 1) {
        for (var h = k; h < n + 1; h++) {
            if (h == nCurrentPage) {
                a = o.format(_getPageUrlCode(h, f), j, h)
            } else {
                a = o.format(_getPageUrlCode(h, f), "", h)
            }
            g.push(a)
        }
    }
    if (nCurrentPage < nPageCount) {
        a = o.format(_getPageUrlCode(1 + Math.floor(nCurrentPage), f), "", textNextPage);
        g.push(a);
        a = o.format(_getPageUrlCode(nPageCount, f), "", textLastPage);
        g.push(a)
    }
    var b = document.getElementById(f);
    if (b) {
        var c = "";
        for (var h = 0; h < g.length; h++) {
            c += g[h] + "&nbsp;"
        }
        b.innerHTML = c
    }
}
nEnable=1;
ShowPage('12','WFBREF','Mark');