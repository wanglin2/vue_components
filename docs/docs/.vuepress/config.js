const path = require('path');

module.exports = {
    title: '一个小小的组件库',
    themeConfig: {
        nav: [{
            text: '组件',
            link: '/zh/rate/'
        }, {
            text: 'Github',
            link: ''
        }],
        sidebar: [{
            "title": "组件",
            "collapsable": false,
            "children": ['/zh/rate/']
        }]
    },
    chainWebpack: config => {
        const pkgPath = path.resolve(__dirname, '../../../', 'packages');
        config.resolve.modules.add(pkgPath).add('node_modules');
        config.resolve.alias.set('@zf', pkgPath);
    }
};