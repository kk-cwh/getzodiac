function getzodiac(year) {
    var ChineseZodiac = [{
        index: 0,
        en: 'rat',
        cn: '鼠'
    }, {
        index: 1,
        en: 'cow',
        cn: '牛'
    }, {
        index: 2,
        en: 'tiger',
        cn: '虎'
    }, {
        index: 3,
        en: 'rabbit',
        cn: '兔'
    }, {
        index: 4,
        en: 'dragon',
        cn: '龙'
    }, {
        index: 5,
        en: 'snake',
        cn: '蛇'
    }, {
        index: 6,
        en: 'horse',
        cn: '马'
    }, {
        index: 7,
        en: 'sheep',
        cn: '羊'
    }, {
        index: 8,
        en: 'monkey',
        cn: '猴'
    }, {
        index: 9,
        en: 'cock',
        cn: '鸡'
    }, {
        index: 10,
        en: 'dog',
        cn: '狗'
    }, {
        index: 11,
        en: 'pig',
        cn: '猪'
    }];
    var num = parseInt(year);
    if (isNaN(num)) {
        return '';
    }
    var i = (num - 4) % 12;
    i = i < 0 ? (i + 12) : i;
    return ChineseZodiac[i];
}

module.exports = getzodiac;
