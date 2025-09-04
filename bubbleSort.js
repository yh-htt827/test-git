/**
 * 冒泡排序函数
 * @param {number[]} arr - 需要排序的数字数组
 * @returns {number[]} - 排序后的数组
 */
function bubbleSort(arr) {
    const n = arr.length;
    // 创建数组副本，避免修改原数组
    let sortedArray = [...arr];

    for (let i = 0; i < n - 1; i++) {
        // 优化：如果一轮比较中没有发生交换，说明数组已经有序，可以提前结束
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                // 交换元素
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }

    return sortedArray;
}

// 示例用法
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("原始数组:", numbers);
const sortedNumbers = bubbleSort(numbers);
console.log("排序后数组:", sortedNumbers);