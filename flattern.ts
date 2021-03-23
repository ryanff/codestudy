/**
 * 数组扁平化
 * 已知如下数组：
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 */
const flattern = () => {
    const arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
    let x = [];
    const generateArr = (data, target) => {
        data.forEach(element => {
            if (Object.prototype.toString.call(element) === '[object Array]') {
                generateArr(element, target)
            } else {
                target.push(element)
            }
        });
    }
    generateArr(arr,x);
    const res = Array.from(new Set(x)).sort((a,b)=>a-b);
    console.log(res);
}