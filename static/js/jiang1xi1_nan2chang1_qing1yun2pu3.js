(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('青云谱区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360104","properties":{"name":"青云谱区","cp":[115.925749,28.621169],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@B@@@AA@@@A@@CBAEA@@@A@@@@@A@@A@A@@@@@@@@AAEA@A@AB@A@@A@C@@@@@BD@@A@@@@B@@@@@@@@@BB@@B@B@D@@A@@@@B@B@B@@A@@@A@C@@@A@A@@BABAB@@@BA@@@A@CBA@@@@@@BB@@@@@AB@B@@@BB@BB@@C@@@@BA@@F@@AB@@AB@@ABA@AF@@@B@BB@@BB@@B@@B@@BB@@BB@BD@@@B@B@B@B@@BBB@@@@BAB@B@B@@@FAD@B@@BB@@@@B@@@B@@@B@B@@@F@@F@B@@D@@@@@AB@@@B@B@B@@@B@@@B@@@@@@@D@@A@@@@D@B@B@@AB@B@@@@@@@@@@B@@@B@@@@@D@D@B@@@B@@@@@@@B@B@B@@@B@B@@@D@@@@@B@@@BBFAD@@@B@H@B@D@B@B@B@@@B@B@@A@@F@B@B@BAB@DADADA@@@@@A@A@@B@@@@@B@@@@@AA@@@@@A@@@@@@A@@@@@@AA@A@@A@@@@AA@@@A@@@AB@@@B@B@@@B@@@@@@A@@@@B@@@AAB@B@@A@@@@B@B@B@B@@@B@@AB@B@@@@@@@@@B@@A@@@@@CA@BCA@@A@A@@@@@ABABC@A@@@@@@A@A@@@@@AA@@@AA@@C@CBEDA@EUAE@@A@ABA@A@@B@@A@@@@@@B@@@@@@A@@@@@A@A@@@A@AA@@@@A@@A@ABA@@@CBA@@@@@@AA@@ABA@@@AA@@@@A@@A@@@@A@@@@@@@@B@B@@@@@DA@AA@@@A@@A@@AABAA@ABA@A@@@@@@@A@@@@AA@@B@@@@@@@@@@C@AB@@A@ABAB@@AB@@C@@BA@@A@@A@@AA@@A@A@A@@A@@@@@@@@BAA@@A@@@@@@@A@"],"encodeOffsets":[[118699,29280]]}}],"UTF8Encoding":true});}));