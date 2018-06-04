(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('临洮县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"621124","properties":{"name":"临洮县","cp":[103.859565,35.394988],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@AAA@AAAA@@A@@AAAA@@@@A@@@@A@@@A@@AA@AAA@@@@A@@@@AA@A@@@A@@A@@A@A@A@A@A@@A@AA@@B@AA@@A@@A@@A@@A@@@@@@@@@AA@@@@BAA@B@@AAA@A@@@A@@@@@@@AA@@@@@@A@@AA@A@@A@@@@A@@@A@G@A@AA@@ABA@ABCBA@@@@B@@@BAB@B@@@AA@AC@AACAAA@@@AA@@EBCBA@A@@@ELADABAB@BAB@BA@CB@BAF@B@B@BAB@@CDA@@@ADAD@@@@@@@B@@AB@BAB@D@D@DAD@@AB@B@@@B@D@@@D@@@BA@@@@@AB@@@BBB@@BBBD@@@B@@@@@B@@@@@@AB@@@BABA@AB@@@@A@@@A@A@A@A@@@A@@B@@@@@@A@@B@@@@@BA@@@@@@@@@@B@@A@A@@@AB@@A@@@A@@@CD@@@@A@A@@@A@A@A@AA@@@@A@@@E@A@C@A@CACBC@A@CAA@A@@AACAA@A@AAAA@CC@@CAAAA@@@AA@@AA@@@A@AB@@A@A@@BCBADADA@ABABAC@A@C@AAC@A@@@A@@@CAA@A@@@ABABA@@@CAC@@@A@CBABABA@A@A@@BE@A@CAA@AAA@@@C@C@@@@@BAB@@A@@CCAEA@@A@AB@DCBAB@@@DD@BBAF@@AB@@@BB@@@@BB@@@D@@BB@@BBB@B@@@@@B@@@B@@A@@@@@AB@@A@@@G@A@@AAAC@@@A@@@@@A@@A@ABC@A@ABCBC@A@C@CAA@A@@A@@AC@AA@AAEACA@A@@@AB@BADCB@BA@@FE@@@@@ACC@AAG@@A@@A@@@@@AAA@@@A@@@A@@@A@A@A@@@A@A@@@AB@@@@A@A@CBA@@@@BA@@@AB@@A@@AA@@@CAA@@@AA@@A@A@@AA@A@A@EB@@@@A@@AA@@A@AAA@AAA@EEA@@A@@DADAACAA@@A@AAAAAAAA@@@A@EA@@AAAA@@ACA@AACAA@AAA@A@A@@AAA@@AA@AC@C@A@@AAA@AAA@A@ABA@A@ABCD@@AB@@C@@@A@AAA@C@ABA@A@@BA@@@@@AA@A@A@A@A@ABA@@BA@@@@AAA@A@A@A@GBA@A@@AA@A@A@ABA@IRA@A@A@A@A@A@AAAA@@AA@A@@CB@@CDABA@@@@@CACA@@AC@@EA@@A@E@@@CBAB@@A@@A@A@@@A@@AA@ABA@E@A@@BA@@@ABA@A@CBA@AHABABABA@@@C@A@@BAB@BA@@BA@A@@EEAAAA@@@AB@BCBADADABA@@@@@A@@@C@@BC@AAA@@C@A@EC@@@A@@@A@AB@BA@@@ABA@C@A@ABCBA@@@@A@A@EBA@A@@@@@AA@@E@A@A@A@AB@@@B@@ABCBCD@@A@C@@@ABABA@ABC@@@ABCD@@C@CBA@@@AB@@AB@BED@BA@@B@DAD@@AFAB@@AB@@AAC@@@E@@BCDABCBCDEFA@ABA@@@@B@@@@@BDB@@@BBB@@@DAB@@@B@@BB@@@@BBDBD@BBB@BBB@@@@@@B@@ABAD@DA@@BB@@@@B@@@@@B@@G@A@@@AB@@@B@@ABA@ABA@CBCBABA@ADA@@@A@AACA@@AA@AAA@AAAAA@@@@A@@B@BABA@CD@@AB@@BB@@AD@@BD@@@D@BA@@@@B@DAD@@@D@B@@@BA@AB@B@B@B@@@BB@DDB@BB@@@B@B@@BBB@B@@B@@@@@BA@@@@@@B@B@B@B@@AB@@@B@@@@BBBBBBA@AFCDA@@B@BAD@BABAD@@@B@BAD@@@BBB@@BBB@BBB@@BB@@@BB@@@BB@BB@@@@B@@B@@@B@B@BA@@@E@A@A@@@AAAA@@C@ABA@AAA@C@AAAAA@A@A@@@AB@@ABAD@B@@E@E@CBC@A@@BADBB@B@@ABABA@@BBBB@DBHB@@BBA@@BA@@@@B@@AB@@@B@@ADA@@@BD@@@D@BB@@BB@@@@B@@B@@BBB@B@@@@BBB@@@@B@BB@BB@@BB@@BB@B@@BB@BBBBB@BBD@@BB@B@B@BBB@@@@@BBBBD@B@@BD@BBBBB@BBB@@@@BB@B@@B@BBB@@@BB@@@@@B@@@@@BB@@B@B@B@BB@BB@@BB@BB@@@B@@@BBB@BBBBB@@@B@B@@B@@BB@@B@BBBB@@@B@@@@@B@@@@@@@BB@@@AB@BA@@@@B@@BD@B@B@B@B@@@@AB@@@B@@@@BB@@@@AB@D@@@B@@AB@@@@@BBB@@@@B@@B@@@@@BB@BB@@@B@@@@@@@@@B@@@B@@@@@B@@B@DB@@@@@B@B@@CF@B@@@B@@@B@BBBBB@@@@B@B@B@B@@@B@BA@AB@@@D@D@BB@@BBB@@@@B@BBDDBBB@BBB@@@D@@AB@@@@@@@@ABB@@BA@BBABB@@@@BBBBB@@B@BB@@BB@D@@@BBB@@@BB@@B@B@@BB@@B@@B@@@@@BB@@@@@@@@@BB@@B@@B@@@@B@BB@@BBB@@@@BB@BBB@@@@@BB@@@@@@@@BBBB@@@B@B@BAD@BBB@D@@BB@@@@@BB@@B@B@BBB@BDDBB@B@@@BC@@B@D@F@D@BBB@BAB@B@D@@@B@@FD@@@BB@@BB@B@@@D@B@B@B@DBB@@@BBDDFDDBB@@@@@BEBA@C@@BAB@@BBBB@B@BBB@B@BB@D@B@B@B@B@H@@FF@@@@@BA@@B@@@@@@ABB@@@@B@@@@ABBB@@@@@@@B@@@@@@@BA@AB@DAB@@AB@@@BAB@B@@@@A@@BA@@@@B@@A@@@@@@BCBABA@ABA@@B@B@@@@@B@@AB@B@BBB@B@@D@@@BB@BBB@@B@DBBBB@B@D@B@BAB@@@D@D@@@B@@@BBB@@BBDB@@BDD@BBB@B@D@BBB@B@@BD@B@@@B@BBB@@BD@@DD@@BBBBB@@@BB@B@@@BB@BBD@@@DDB@BBB@@@@B@@B@@@B@BA@A@@@@BB@@@BA@@B@@@@@B@@B@@@BB@@B@@@@@AB@D@B@@B@@B@@AB@B@B@@BB@BBB@B@BBBBBDDB@BB@B@@@B@@@@EBGBE@A@@@A@@A@AAC@@AAA@A@@@A@EB@BABADAD@BABABEB@BAB@DIZCF@B@@@BCFADEBA@ABABAAC@A@A@A@@BAB@B@BABCFAFCBADA@@BADABABABAB@D@B@BAB@BCDAB@@ABA@AB@B@@@B@@@BB@BB@@@B@BA@@BABAB@B@B@D@B@D@B@BAJAD@BAD@@@FAFADAB@@ABA@@BABA@AD@B@B@DAB@BABAB@BCBCD@BCD@BCBABA@C@C@C@A@A@ABABAB@BAB@BA@ADABABA@ABADA@AB@@AB@@CBABA@@BA@@B@@@B@@ADABC@A@@@AB@BAB@@@BA@ABA@CB@B@@@B@@@BAB@B@@ABA@A@@@A@EB@BABCDA@ABABGB@BA@A@A@@BA@AB@@@BA@ABA@C@A@A@@BA@ABAB@@CDA@CB@@ABABAD@@ABGDA@E@@BCBA@@BAB@@@BA@AD@BA@@BA@@BA@ABCBAD@@@BABABABADA@@B@@AB@@ABABABABA@GDA@CBABADCD@D@D@B@B@D@B@F@@ADCBABA@CB@@CDA@CBABEBCB@BAB@@@D@D@BBD@@ADADA@ABA@E@A@CBA@EDA@G@A@@@AA@@AAAAC@A@A@@@ABCDAB@@A@@B@B@B@B@B@BBB@D@@BB@@@B@@@B@@@B@B@B@BB@@B@B@@@BAB@@CBAB@BABABABAB@BABABA@@B@@BB@@@@@B@B@B@@ABABA@A@@@C@@@A@A@A@C@CB@BC@CDCB@BAB@@@B@B@BBD@D@BAB@@A@ABABA@A@@AA@AAAEA@@AAAA@CA@@CAA@@@AB@@A@@B@DA@@BAB@FABABADABEDCBCB@@ABAB@H@@AD@DA@@BA@G@@@ABA@@BABADAB@D@D@BAB@B@@CBABAD@BAB@BABAB@@AB@@ABA@@@CBEFABA@@@CAAA@@A@@@EDCDEDABEDA@@B@@ABADAB@BA@@@@BC@@@CBA@C@GBAB@@AB@@@BA@AB@@C@@BB@BBB@@B@B@@@@@B@@@B@BBBBB@@BB@BB@@@@B@@@@@B@B@@@B@@@BCB@@@D@BA@@B@@@BA@BB@BBD@@@BAB@B@BA@@B@@BB@@@B@BAB@@@@@BBB@@@@AB@B@@BBB@BDB@@@B@@@B@DA@ABCBABABABAB@@@@@@@@B@D@B@@@@@@@@@@B@B@@@B@@@@B@@@@@BB@@@B@@B@@BBBBB@@BB@@@@BB@@BB@@@BB@@@@BB@@@B@@B@@B@@B@@@BBB@@B@@@@B@@@BB@@BBBBBBBDB@@B@@@B@B@B@@@@BB@@@BBBB@@@BB@@@BB@@B@@@@B@DBB@B@@@@@B@@@@@B@@@@@@@B@@@BA@@@@B@@BB@@@@@@AB@@A@@@@B@@@B@@@@@B@@@@@B@@@@A@@B@@@@@@@@@B@BA@@@@@@@@@@B@@@B@@@B@@@@@@@@A@@@@BA@@@@@A@@@A@@@AB@@@@@B@BA@@B@B@BAB@B@@@@@B@BBD@DABAD@@AB@@A@@@AAE@A@A@A@@BA@A@AB@BA@A@ABC@ABCBEBE@CBA@@B@@@B@D@@@D@B@HAB@B@BAB@@A@@@@B@@@D@@@BBB@@@@@B@B@@@@@B@@@@BBBBAB@@B@@BA@@@BB@@@@@@@@@B@BBBBB@@@BBB@D@BBB@@@D@@@D@@@@@@BBB@@@B@@@@@@@BB@B@@@@BB@@@BBBBB@A@B@@@@BB@@@@B@@@B@@AB@@@B@B@@BF@B@@@BA@@B@B@@@B@@BBBBBB@@BBB@D@B@B@B@D@D@@@@@@@@BBB@@@D@@DABAB@DA@@BA@AB@D@@BB@BADA@@D@DADB@@B@BAD@@@@@BABABA@@DAB@@A@ABA@@BADCBA@@BA@AB@@C@@B@BA@@@AB@BA@@@@B@@@@@@@B@@@@@@@@@@B@@@B@@@@@@@BB@@@@@@@@B@@@@@BB@@B@@@B@@@B@@@@@@B@@@@@B@@@BA@@BB@@B@B@@@B@@@@@B@@@@@@@@@B@@@B@@@B@@@B@@@@@@@@@B@@B@@@B@@@@BBB@@@@BB@@@BB@@@@@@@@@@B@@@BA@@B@@@@@B@BA@@B@B@@AB@@@BABA@@@@B@@@B@@BB@BB@@BB@@@@B@BB@@@@B@@B@@@@@@B@@B@@BB@@B@@@DCBAB@BAD@FADA@@B@@A@AA@AAAA@@@CBA@A@A@CBA@@B@@ADA@@@@B@@@B@@@BBBB@@D@@@B@BCB@FE@AFA@@BA@@@A@AB@@@D@B@D@@@FAB@@@@A@@@AFC@AFA@@B@@@BBBB@@BAFCBA@@B@DBB@@@B@BABA@ABA@@B@B@BBB@@B@BBBBB@@@@@BBB@@B@BBB@@@B@@@BA@@@@BAB@@@BA@A@A@@@AB@@AB@@@@A@A@@AA@A@A@@AE@@@ACC@@@@@ABA@AA@@AAAB@@C@A@@@A@A@A@@@AB@D@B@@@@A@@@A@A@@AC@A@ABG@GBE@A@@@@@@B@BB@@D@B@BB@@B@DBBBB@B@@@@@DADG@A@A@CAA@CB@@A@@@@BB@B@@B@@B@@B@BBB@@@@@B@B@B@@BB@B@B@BB@@B@@ABBB@D@B@@@D@@BDA@@@ABB@@BA@@D@@@B@B@B@B@@@B@BADABAB@B@BA@A@E@A@@@A@@@ABA@@BABA@@B@@A@ABA@@@@@@@@ACAAA@@@@AAA@AA@@AAC@@@@BA@@@BB@@@@ABA@@@@DC@@D@B@DA@@BA@A@A@C@@BABABAA@@A@CB@@A@C@C@A@A@AAA@A@A@A@A@A@@@A@C@AB@@@@AAA@@@@@@@@@AAA@@@@@@@AA@@A@@@@@@@@@@@@B@BB@@@@@AB@@@@A@A@@A@@AD@BBB@@@BB@@@@@B@B@DB@@BBBBBBBFFBDB@DDBBB@DBB@B@@@FCB@B@FCLK@ABA@A@ADCBABAB@BAD@D@DAFA@@D@@@DADAB@DGDCBAB@DAD@BABCBA@EBGB@BAB@DAD@DAD@FCFAF@D@J@BAD@DCBA@AB@@A@@@AD@@@BABAFCDADAB@DAD@F@DA@@FB@BB@D@B@DADAB@B@@@@CBABA@ADCBCBCB@@ADADABCBABAFED@@@DBB@B@DD@@B@DADAB@F@B@@@@A@ABABCDC@@B@BA@@B@@E@C@E@@@@B@HCDA@@BABCBAFE@@BA@@F@D@DADA@@B@B@@BBAHA@AB@BABCBABA@CBCFCDC@@BC@AAE@ABABAB@DCF@B@B@@@BA@@@A@@HAB@B@B@DA@@B@B@BA@@BAB@@@B@B@@A@CBA@@@ABA@@@C@@@@BA@@@@BA@ABC@@@A@AB@@@BABA@AB@@A@@BA@@@BB@B@B@B@@@B@@BBDB@BAB@B@BAB@BAFCBABCBAB@@@@@@A@A@@B@BA@@BA@@@@FC@@BCBADC@@B@@@BAD@@@D@@@@@B@@@@@BD@B@@@@@@@B@B@@BB@@DB@BBBB@@@@DB@BB@@@@@B@BBDA@B@BBBB@@B@@@B@@@@@B@DB@@BBB@@BBBBBB@BB@@@B@@A@@BAD@BADAB@@BB@@B@B@B@@@BADA@A@A@@@@@C@@A@@A@A@@@@@@D@D@B@@@DBBBBB@@BBBB@@F@@@D@BA@AB@B@BA@ABADA@A@A@@@@BA@A@A@A@@BCDCB@BA@A@@DADCBABA@@@A@AB@BAB@@CB@BC@A@ABA@A@A@ABA@@B@H@D@@@@A@A@@AAAAAAAAA@AAA@CA@A@@A@@CA@@AAAA@@@@A@@@ABC@AB@BAB@B@BBD@DBD@B@@@@ABADC@@DA@AB@B@D@B@B@DBB@B@BBB@BAB@BA@@BC@@@AEAAACA@@A@@A@@@@@ABAB@D@B@BB@@B@@@BABABAB@BA@@F@@@BB@@B@@@BABA@@@A@A@A@A@@ACAAA@ACA@@AAA@@@ABABE@A@ABCB@@ABC@C@@AA@AA@@@A@C@AAA@G@A@@@A@@@@A@CBA@A@AAE@AAA@ABABABC@@@@@C@AB@@EBA@A@AAC@AA@@C@AB@@A@@AAAA@@A@@@EA@@CACAC@@A@@ACA@@A@@@AACA@@AAA@@A@@@@AB@D@D@@@B@BBBABBBA@@DABABAD@@AFADAB@@A@@F@D@B@B@B@@@@@@A@@BABABA@@@A@@@ABABABA@@@AAAA@@@@AB@B@@@@CB@@@@ABA@@@A@CB@BA@A@@@@@C@@@A@@BA@A@@BCB@@@B@BA@@BA@@@A@@@A@A@A@@B@F@DA@@B@B@@@B@DA@@B@@@B@B@DAB@B@@A@@B@@@@C@@BA@@B@BA@@B@B@BABAB@BA@A@@@CBABA@A@A@AD@B@BAB@@@@ABBDBDBBBB@@@DB@@B@B@DBDABABA@A@@B@@@BBB@B@@BDBDDB@HFBB@B@@@@@A@C@CAA@@@A@@@@@A@A@@A@BAA@BC@A@@@ABAB@B@@ABABABABA@@A@A@@@A@AAC@@@@@AC@@@@AA@@@A@@AA@A@@AAECAA@@C@AC@@AA@A@@@A@@BC@G@@BCBA@A@A@@@A@E@@B@@A@C@AAA@@AA@A@A@@A@@ACA@AA@@@@@A@@@@@@AB@@A@ABCAA@A@A@AAE@@BA@ABCA@@A@A@@@AB@A@@AA@A@@@@CB@@@@AB@@@@A@@AA@@A@@@@@@@@A@@@A@@@@BA@@A@@AB@@@B@@@AA@@@@A@A@@@@@@@BA@@@A@@@@AA@@@@@AA@@@@A@@B@@@@@B@AA@@@@@A@@@@@@BAA@IBCBA@@BAD@BC@C@@@@AA@@AA@A@A@@@A@@AAB@@AB@B@@@@@B@@@@A@@@@@A@@B@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@B@@@B@@@@@@@@@B@@@@A@@B@@@@A@@@@@@B@@@@@@@@@B@@A@BBA@AF@@@@@@@@A@@@CAAA@@A@A@A@@@@@@@@@@BA@@@@@AB@@@@@@@@A@@@@B@@ABA@@@@@AA@@@@A@@@@B@@@@@@@@@@@@@DA@@@@@A@@@@@@@@@@@A@@B@@@@@@A@@@@@@@@@AB@@@@@@@B@@A@@BA@@B@@@@AB@@@@ABA@ABCBAB@@@BCD@@@@AACCCCCCA@@@A@@@A@A@@@@AA@@@@@@AA@@@@@ACA@@@AAA@@@A@AAA@AA@@AD@BA@@@@BA@BB@B@B@@@B@B@@BF@BA@AB@B@@AB@F@D@B@B@@@B@B@B@@@@@BA@ABABA@ADCD@BADA@@@@@ABAA@@C@A@E@@@AE@@@AA@AA@@@@@@@AA@ACA@@AA@@AA@@A@@@@A@@@AA@@@@AA@@AA@@@@AACAAAACAA@A@E@@AC@@@@AAA@A@A@KB@BCB@@@BA@@@@BA@@B@@@@A@@B@@@@A@@@@B@@AA@@@E@@AA@AAA@@AA@A@@AEAC@@@@C@@@ABEB@@@@AB@@A@A@ACA@A@@@C@AB@@CF@B@@AB@@A@A@ACA@AAA@@@A@C@A@@@@@AAAAAA@C@A@A@@@A@A@C@ABA@ABA@@@C@AAA@ACCAA@@B@@@BA@@@@@C@@BAB@BA@@AAAAAC@AACAA@ABAHEBA@A@@@A@@BE@A@C@C@@@A@@BAB@BA@@@@B@D@BC@@D@D@B@BB@@@@@AAA@@@@@AA@@A@@@AA@@@@A@@AA@@A@@AA@A@@A@@@@@@A@@@@AA@AAA@A@@@A@@AAB@@@A@@AA@AA@@@@@@@A@AA@@AA@@A@AA@@@A@@@@A@@B@@A@A@@AA@@B@@AA@@A@@B@@C@@@A@@A@@A@@B@@@@@A@@A@ABAA@@@@@@A@@@@@A@@@A@@A@@A@@@A@@A@@AA@@B@A@@@@@AA@@A@@@@@A@@A@@@@@@AAA@@@B@@A@ADC@@@A@@@@@@BA@@@AB@@@@A@@B@@AB@@@@@AACA@AAA@@@@@A@@A@@AAAAA@@@@@BAB@BA@@AAA@ACAAA@A@AB@@ABA@@@AA@A@A@@@BABA@@BA@@@AAC@ABA@@@@AA@@B@@A@@BA@A@@C@@A@@@@@A@@@@@@@A@A@A@AA@@@AA@@A@C@@@@@@@@@@BA@@@A@@@@@A@@@A@@@A@@@AA@@@@A@@@A@@@@A@@@@FA@@@GBA@AA@A@@@B@@AB@@A@@AA@AGG@AAACCCA@A@AA@@BA@@BA@@@@A@AAA@@@@CA@@@@@ABA@@@@@@AAA@@AA@BA@@@@@A@@AAAA@@ACCC@@AC@AA@@@@A@@BA@@AAC@AAAAA@@@A@A@@@@@A@@C@@@@A@A@A@A@@AA@AA@@@@A@@@AAAAAA@A@@AA@AB@A@@@A@AB@@AA@@AB@@@@A@@@A@A@C@CB@@@@A@"],["@@BDDBDDB@B@B@BA@ADK@AAACCAAC@CFABABAB@B@B"]],"encodeOffsets":[[[106544,36060]],[[106384,36046]]]}}],"UTF8Encoding":true});}));