/**
 * 存放项目中工具函数
 */
export function constValToOptions (text, valArr) {
    return valArr.map(item => {
        return {
            label: text[item],
            value: item
        }
    })
}