(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('南和县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130527","properties":{"name":"南和县","cp":[114.683863,37.005017],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAGAM@CAAAKHGJGJABC@AACBC@CAIC@@@FE@E@@DCBKB@@C@AH@BG@@@ED@FABC@C@AC@EK@GBCA@IE@@EACE@ECAEDCA@@AACA@@@@@KAA@@CCACAC@O@GBE@EBA@@BGBCBSFEBAB@FAB@BEAA@@AA@GAE@GDALG@EB@BVNFF@JEHEHI@CB@PEA@MA@QAGA@CGACBGF@@BLABALHDD@DDBLJ@@DJ@D@L@@LA@IAE@@LIFEB@AACE@@AA@@CE@ECKBC@@CD@@CGCC@AD@DBDFB@D@FDF@BJ@@BD@@DAFAF@H@DB@DBDBFF@H@DB@@DDBBBH@@D@@FBJA@HAFA@A@BDBBL@BD@B@DC@ABAB@H@DBB@@@B@BBBCD@B@B@DDBL@@DADA@AB@BAL@@@B@D@BAFCB@BDD@@FHB@BBJAD@@DD@B@FFBDDBTBD@@FDD@@@@L@@@BDD@F@@ALCHGB@FB@GCAE@BE@CFADC@A@CD@ACB@P@PBDDBFFBDBHBFCFE@ABKLBD@DADAD@@EH@B@F@F@DA@ADCJ@B@DBF@BDNADABC@@DLDFHJDJFJBDJ@@C@AJ@BBFAF@JAJDDD@BLAD@B@FDBDB@B@ACHAF@AA@GFAJ@F@L@D@@GH@@BBBHABDNABB@@D@PBDABAPAACH@BD@CD@AGL@@@ACCCCCG@AA@AE@A@@AFG@AGA@EAA@@@CH@BFJ@JMBCDC@AG@ACE@AE@@CEKBAM@AEB@@AAAC@A@@AC@IA@A@AI@@BA@ADG@ICIC@A@@@@A@G@CE@C@CQGB@C@AD@@G@ADCLEB@@CB@@DB@FC@@DCHAAA@@AA@CD@@@@ECACC@CCBK@C@ABE@CB@FI@EAAA@CEASDCA@A@CAAA@C@@CI@CA@ADM@AKECAKIMM@ACIAA@@C@IB@AAGE@@@@@AC@@AI"],"encodeOffsets":[[117558,37804]]}}],"UTF8Encoding":true});}));