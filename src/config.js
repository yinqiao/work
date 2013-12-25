/**
 * http://g.tbcdn.cn/trip/h5-test/@@version/config.js
 */
(function(){
    KISSY.config('tag', null); //去除?t时间戳

    if (KISSY.Config.debug !== true) {
        if (location.href.indexOf('waptest') > -1 || location.href.indexOf('wapa') > -1) {
            KISSY.Config.daily = true;
        }
    }
	if (KISSY.Config.debug) {
		var srcPath = "../";
		KISSY.config({
			packages:[
				{
					name:"h5-test",
					path:srcPath,
					charset:"utf-8",
					ignorePackageNameInUri:true,
					debug:true
				}
			]
		});
	} else {
		var srcHost = KISSY.Config.daily ? 
				'g.assets.daily.taobao.net' :
				'g.tbcdn.cn';
        KISSY.config({
			combine:true,
            packages: [
                {
                    name: 'h5-test',
                    // 修改 abc.json 中的 version 字段来生成版本号
                    path: 'http://'+srcHost+'/trip/h5-test/@@version',
                    ignorePackageNameInUri: true
                }
            ]
        });
	}
})();
