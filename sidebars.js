module.exports = {
    typedocSidebar: [
        {
            type: 'category',
            label: 'Typedoc API',
            link: {
                type: 'doc',
                id: 'api/index',
            },
            items: require('./docs/api/typedoc-sidebar.cjs'),
        },
    ],
};