// 1.导入整个模块
import * as myModule from '/modules/my-module.js';

// 2.导入单个接口
import { myExport } from '/modules/my-module.js';

// 3.导入多个接口
import { foo, bar } from '/modules/my-module.js';

// 4.导入带别名接口
import { reallyReallyLongModuleExportName as shortName } from '/modules/my-module.js';

// 5. 导入多个别名接口
import { reallyReallyLongModuleMemberName as shortName, anotherLongModuleName as short } from '/modules/my-module.js';

// 6.导入默认接口
import myDefault from '/modules/my-module.js';

// 7.导入默认接口及其他
import myDefault, * as myModule from '/modules/my-module.js';

import myDefault, { foo, bar } from '/modules/my-module.js';

// 8.导出单个特性
// export let name1, name2, …, nameN; // also var, const
// export let name1 = …, name2 = …, …, nameN; // also var, const
// export function FunctionName() {... }
// export class ClassName {... }

// 9.导出列表
// export { name1, name2, …, nameN };

// 10.重命名导出
// export { variable1 as name1, variable2 as name2, …, nameN };

// 11.默认导出
// export default expression;
// export default function (…) { … } // also class, function*
// export default function name1(…) { … } // also class, function*
// export { name1 as default, … };

// 12.Aggregating modules
// export * from …;
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
// export { default } from …;


/* 处理ajax请求的导出 */
/* a端 */
function getJSON (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        callback(this.responseText)
    };
    xhr.open('GET', url, true);
    xhr.send();
}

export function getUsefulContents (url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
}

/* b端 */
import { getUsefulContents } from '/modules/file.js';

getUsefulContents('http://www.example.com', data => { doSomethingUseful(data); });
