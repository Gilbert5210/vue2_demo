module.exports = {
    'success': true,
    mock: true,
    'code': 200,
    'message': '',
    'data|1-30': [{
        'produceId': '@id()',
        'username': '@cname()',
        'quantity|1-100': 100,
        'price|1-1000': 1000,
        'buyType|0-1': 1,
        'portfolio': 'Default',
        'dateTime': '@datetime'
    }]
}