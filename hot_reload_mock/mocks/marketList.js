module.exports = {
    'success': true,
    'code': 200,
    'message': '',
    mock: true,
    'data|1-30': [{
        'produceId': '@id()',
        'username': '@cname()',
        'date': '@datetime',
        'portfolio': 'Default',
        'bidSize|1-100': 100,
        'bidPrice|1-1000': 1000,
        'offerSize|1-100': 100,
        'offerPrice|1-1000': 1000
    }]
}