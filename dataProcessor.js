var gk_isXlsx = false;
var gk_xlsxFileLookup = {"results.csv": false};
var gk_fileData = {
    "results.csv": `timeStamp,elapsed,label,responseCode,responseMessage,threadName,dataType,success,failureMessage,bytes,sentBytes,grpThreads,allThreads,URL,Latency,IdleTime,Connect
1752825314013,1786,HTTP Request,200,OK,User 1-3,text,true,,11798,183,23,23,https://dinemore.sufraos.com/,1780,0,154
1752825313919,1898,HTTP Request,200,OK,User 1-2,text,true,,11798,183,23,23,https://dinemore.sufraos.com/,1894,0,206
1752825313820,2064,HTTP Request,200,OK,User 1-1,text,true,,11798,183,22,22,https://dinemore.sufraos.com/,2061,0,302
1752825314121,1988,HTTP Request,200,OK,User 1-4,text,true,,11798,183,24,24,https://dinemore.sufraos.com/,1980,0,171
1752825314206,1964,HTTP Request,200,OK,User 1-5,text,true,,11798,183,23,23,https://dinemore.sufraos.com/,1952,0,156
1752825314307,1940,HTTP Request,200,OK,User 1-6,text,true,,11798,183,23,23,https://dinemore.sufraos.com/,1937,0,159
1752825314407,2080,HTTP Request,200,OK,User 1-7,text,true,,11798,183,24,24,https://dinemore.sufraos.com/,2080,0,165
1752825314606,1931,HTTP Request,200,OK,User 1-9,text,true,,11798,183,24,24,https://dinemore.sufraos.com/,1929,0,177
1752825314507,2046,HTTP Request,200,OK,User 1-8,text,true,,11798,183,23,23,https://dinemore.sufraos.com/,2043,0,175
1752825315408,1149,HTTP Request,200,OK,User 1-17,text,true,,11798,183,22,22,https://dinemore.sufraos.com/,1146,0,169
1752825314707,1886,HTTP Request,200,OK,User 1-10,text,true,,11798,183,21,21,https://dinemore.sufraos.com/,1884,0,170
1752825315506,1144,HTTP Request,200,OK,User 1-18,text,true,,11798,183,21,21,https://dinemore.sufraos.com/,1140,0,163
1752825314908,1842,HTTP Request,200,OK,User 1-12,text,true,,11798,183,21,21,https://dinemore.sufraos.com/,1838,0,162
1752825315008,1798,HTTP Request,200,OK,User 1-13,text,true,,11798,183,20,20,https://dinemore.sufraos.com/,1793,0,149
1752825314812,2039,HTTP Request,200,OK,User 1-11,text,true,,11798,183,20,20,https://dinemore.sufraos.com/,2035,0,140
1752825315207,1787,HTTP Request,200,OK,User 1-15,text,true,,11798,183,20,20,https://dinemore.sufraos.com/,1785,0,147
1752825315108,1960,HTTP Request,200,OK,User 1-14,text,true,,11798,183,20,20,https://dinemore.sufraos.com/,1958,0,165
1752825315308,1765,HTTP Request,200,OK,User 1-16,text,true,,11798,183,19,19,https://dinemore.sufraos.com/,1765,0,163
1752825316209,995,HTTP Request,200,OK,User 1-25,text,true,,11798,183,19,19,https://dinemore.sufraos.com/,991,0,162
1752825315608,1703,HTTP Request,200,OK,User 1-19,text,true,,11798,183,20,20,https://dinemore.sufraos.com/,1698,0,164
1752825316406,1018,HTTP Request,200,OK,User 1-27,text,true,,11798,183,20,20,https://dinemore.sufraos.com/,1006,0,173
1752825315708,1779,HTTP Request,200,OK,User 1-20,text,true,,11798,183,19,19,https://dinemore.sufraos.com/,1774,0,159
1752825316308,1221,HTTP Request,200,OK,User 1-26,text,true,,11798,183,19,19,https://dinemore.sufraos.com/,1216,0,143
1752825315907,1698,HTTP Request,200,OK,User 1-22,text,true,,11798,183,19,19,https://dinemore.sufraos.com/,1680,0,156
1752825315812,1809,HTTP Request,200,OK,User 1-21,text,true,,11798,183,18,18,https://dinemore.sufraos.com/,1808,0,157
1752825316007,1773,HTTP Request,200,OK,User 1-23,text,true,,11798,183,18,18,https://dinemore.sufraos.com/,1760,0,151
1752825316906,1007,HTTP Request,200,OK,User 1-32,text,true,,11798,183,19,19,https://dinemore.sufraos.com/,988,0,163
1752825316106,1827,HTTP Request,200,OK,User 1-24,text,true,,11798,183,18,18,https://dinemore.sufraos.com/,1824,0,176
1752825316706,1257,HTTP Request,200,OK,User 1-30,text,true,,11798,183,17,17,https://dinemore.sufraos.com/,1248,0,162
1752825317207,754,HTTP Request,200,OK,User 1-35,text,true,,11798,183,17,17,https://dinemore.sufraos.com/,753,0,155
1752825317006,975,HTTP Request,200,OK,User 1-33,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,973,0,155
1752825317107,1029,HTTP Request,200,OK,User 1-34,text,true,,11798,183,16,16,https://dinemore.sufraos.com/,1028,0,171
1752825316506,1659,HTTP Request,200,OK,User 1-28,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,1658,0,165
1752825317505,784,HTTP Request,200,OK,User 1-38,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,775,0,167
1752825316606,1722,HTTP Request,200,OK,User 1-29,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,1715,0,146
1752825316813,1724,HTTP Request,200,OK,User 1-31,text,true,,11798,183,16,16,https://dinemore.sufraos.com/,1723,0,163
1752825317606,982,HTTP Request,200,OK,User 1-39,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,978,0,183
1752825317307,1329,HTTP Request,200,OK,User 1-36,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,1284,0,224
1752825317407,1249,HTTP Request,200,OK,User 1-37,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,1244,0,166
1752825317706,1025,HTTP Request,200,OK,User 1-40,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,1025,0,185
1752825318005,840,HTTP Request,200,OK,User 1-43,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,838,0,171
1752825318106,749,HTTP Request,200,OK,User 1-44,text,true,,11798,183,13,13,https://dinemore.sufraos.com/,749,0,166
1752825317905,1017,HTTP Request,200,OK,User 1-42,text,true,,11798,183,13,13,https://dinemore.sufraos.com/,1014,0,170
1752825318306,768,HTTP Request,200,OK,User 1-46,text,true,,11798,183,13,13,https://dinemore.sufraos.com/,753,0,160
1752825317818,1291,HTTP Request,200,OK,User 1-41,text,true,,11798,183,13,13,https://dinemore.sufraos.com/,1287,0,194
1752825318505,809,HTTP Request,200,OK,User 1-48,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,800,0,202
1752825318606,844,HTTP Request,200,OK,User 1-49,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,833,0,246
1752825318705,811,HTTP Request,200,OK,User 1-50,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,809,0,235
1752825318205,1359,HTTP Request,200,OK,User 1-45,text,true,,11798,183,13,13,https://dinemore.sufraos.com/,1293,0,160
1752825318406,1174,HTTP Request,200,OK,User 1-47,text,true,,11798,183,12,12,https://dinemore.sufraos.com/,1173,0,146
1752825318810,779,HTTP Request,200,OK,User 1-51,text,true,,11798,183,11,11,https://dinemore.sufraos.com/,772,0,181
1752825319006,740,HTTP Request,200,OK,User 1-53,text,true,,11798,183,12,12,https://dinemore.sufraos.com/,739,0,180
1752825319108,797,HTTP Request,200,OK,User 1-54,text,true,,11798,183,13,13,https://dinemore.sufraos.com/,768,0,179
1752825319209,832,HTTP Request,200,OK,User 1-55,text,true,,11805,183,13,13,https://dinemore.sufraos.com/,816,0,178
1752825319308,768,HTTP Request,200,OK,User 1-56,text,true,,11798,183,12,12,https://dinemore.sufraos.com/,763,0,181
1752825318906,1254,HTTP Request,200,OK,User 1-52,text,true,,11798,183,12,12,https://dinemore.sufraos.com/,1253,0,184
1752825319408,760,HTTP Request,200,OK,User 1-57,text,true,,11798,183,11,11,https://dinemore.sufraos.com/,755,0,162
1752825319506,798,HTTP Request,200,OK,User 1-58,text,true,,11798,183,11,11,https://dinemore.sufraos.com/,797,0,199
1752825319606,1244,HTTP Request,200,OK,User 1-59,text,true,,11798,183,16,16,https://dinemore.sufraos.com/,1240,0,172
1752825319706,1241,HTTP Request,200,OK,User 1-60,text,true,,11798,183,16,16,https://dinemore.sufraos.com/,1238,0,167
1752825319810,1278,HTTP Request,200,OK,User 1-61,text,true,,11798,183,16,16,https://dinemore.sufraos.com/,1275,0,171
1752825319907,1218,HTTP Request,200,OK,User 1-62,text,true,,11798,183,16,16,https://dinemore.sufraos.com/,1201,0,160
1752825320005,1236,HTTP Request,200,OK,User 1-63,text,true,,11798,183,16,16,https://dinemore.sufraos.com/,1234,0,140
1752825320507,883,HTTP Request,200,OK,User 1-68,text,true,,11798,183,16,16,https://dinemore.sufraos.com/,879,0,179
1752825320615,776,HTTP Request,200,OK,User 1-69,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,775,0,162
1752825320408,1010,HTTP Request,200,OK,User 1-67,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,1007,0,171
1752825320710,750,HTTP Request,200,OK,User 1-70,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,746,0,152
1752825320907,767,HTTP Request,200,OK,User 1-72,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,753,0,153
1752825321006,782,HTTP Request,200,OK,User 1-73,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,769,0,185
1752825320819,1006,HTTP Request,200,OK,User 1-71,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,990,0,161
1752825320106,1739,HTTP Request,200,OK,User 1-64,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,1738,0,159
1752825321108,839,HTTP Request,200,OK,User 1-74,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,838,0,190
1752825320206,1745,HTTP Request,200,OK,User 1-65,text,true,,11798,183,13,13,https://dinemore.sufraos.com/,1740,0,171
1752825320307,1679,HTTP Request,200,OK,User 1-66,text,true,,11798,183,12,12,https://dinemore.sufraos.com/,1674,0,167
1752825321207,806,HTTP Request,200,OK,User 1-75,text,true,,11798,183,12,12,https://dinemore.sufraos.com/,806,0,216
1752825321307,812,HTTP Request,200,OK,User 1-76,text,true,,11798,183,12,12,https://dinemore.sufraos.com/,810,0,204
1752825321509,785,HTTP Request,200,OK,User 1-78,text,true,,11798,183,12,12,https://dinemore.sufraos.com/,773,0,174
1752825321407,953,HTTP Request,200,OK,User 1-77,text,true,,11798,183,12,12,https://dinemore.sufraos.com/,950,0,146
1752825321608,756,HTTP Request,200,OK,User 1-79,text,true,,11798,183,11,11,https://dinemore.sufraos.com/,753,0,169
1752825321707,764,HTTP Request,200,OK,User 1-80,text,true,,11798,183,11,11,https://dinemore.sufraos.com/,762,0,169
1752825321811,848,HTTP Request,200,OK,User 1-81,text,true,,11798,183,12,12,https://dinemore.sufraos.com/,844,0,159
1752825321907,783,HTTP Request,200,OK,User 1-82,text,true,,11798,183,11,11,https://dinemore.sufraos.com/,768,0,194
1752825322007,1006,HTTP Request,200,OK,User 1-83,text,true,,11811,183,14,14,https://dinemore.sufraos.com/,993,0,220
1752825322106,1081,HTTP Request,200,OK,User 1-84,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,1078,0,210
1752825322307,978,HTTP Request,200,OK,User 1-86,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,975,0,147
1752825322508,954,HTTP Request,200,OK,User 1-88,text,true,,11798,183,15,15,https://dinemore.sufraos.com/,949,0,235
1752825322206,1260,HTTP Request,200,OK,User 1-85,text,true,,11798,183,14,14,https://dinemore.sufraos.com/,1256,0,149
1752825322817,794,HTTP Request,200,OK,User 1-91,text,true,,11798,183,13,13,https://dinemore.sufraos.com/,790,0,154
1752825322706,999,HTTP Request,200,OK,User 1-90,text,true,,11798,183,12,12,https://dinemore.sufraos.com/,995,0,177
1752825323007,813,HTTP Request,200,OK,User 1-93,text,true,,11798,183,11,11,https://dinemore.sufraos.com/,798,0,176
1752825323108,877,HTTP Request,200,OK,User 1-94,text,true,,11798,183,10,10,https://dinemore.sufraos.com/,757,0,170
1752825322408,1591,HTTP Request,200,OK,User 1-87,text,true,,11798,183,9,9,https://dinemore.sufraos.com/,1577,0,159
1752825323207,797,HTTP Request,200,OK,User 1-95,text,true,,11798,183,8,8,https://dinemore.sufraos.com/,797,0,161
1752825322607,1427,HTTP Request,200,OK,User 1-89,text,true,,11798,183,7,7,https://dinemore.sufraos.com/,1424,0,214
1752825322907,1205,HTTP Request,200,OK,User 1-92,text,true,,11798,183,6,6,https://dinemore.sufraos.com/,1205,0,150
1752825323408,756,HTTP Request,200,OK,User 1-97,text,true,,11798,183,5,5,https://dinemore.sufraos.com/,752,0,174
1752825323307,992,HTTP Request,200,OK,User 1-96,text,true,,11798,183,4,4,https://dinemore.sufraos.com/,991,0,164
1752825323508,829,HTTP Request,200,OK,User 1-98,text,true,,11798,183,3,3,https://dinemore.sufraos.com/,827,0,180
1752825323608,986,HTTP Request,200,OK,User 1-99,text,true,,11798,183,2,2,https://dinemore.sufraos.com/,981,0,245
1752825323718,919,HTTP Request,200,OK,User 1-100,text,true,,11798,183,1,1,https://dinemore.sufraos.com/,917,0,329`
};

function filledCell(cell) {
    return cell !== '' && cell != null;
}

function loadFileData(filename) {
    if (gk_isXlsx && gk_xlsxFileLookup[filename]) {
        try {
            var workbook = XLSX.read(gk_fileData[filename], { type: 'base64' });
            var firstSheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[firstSheetName];
            var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: false, defval: '' });
            var filteredData = jsonData.filter(row => row.some(filledCell));
            var headerRowIndex = filteredData.findIndex((row, index) =>
                row.filter(filledCell).length >= filteredData[index + 1]?.filter(filledCell).length
            );
            if (headerRowIndex === -1 || headerRowIndex > 25) {
                headerRowIndex = 0;
            }
            var csv = XLSX.utils.aoa_to_sheet(filteredData.slice(headerRowIndex));
            csv = XLSX.utils.sheet_to_csv(csv, { header: 1 });
            return csv;
        } catch (e) {
            console.error(e);
            return "";
        }
    }
    return gk_fileData[filename] || "";
}