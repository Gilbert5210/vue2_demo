import {constValToOptions} from '../common/util.js'

let menuVal = {
    marketList: 'market_list',
    historyList: 'history_list'
}

let menuText = {
    [menuVal.marketList]: $t('市场行情窗口'),
    [menuVal.historyList]: $t('历史订单')
}

export const MENU_LIST = {
    value: menuVal,
    text: menuText,
    options: constValToOptions(menuText, [
        menuVal.marketList,
        menuVal.historyList
    ])
}