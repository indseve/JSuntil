// 解析pathName中的参数，输出对象
function getQueryObject(pathname) {
    pathname = pathname == null ? window.location.pathname : pathname;
    var search = pathname.substring(1);
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg,  (rs, $1, $2) => {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);
        val = String(val);
        obj[name] = val;    
    });    
    return obj;
 }
