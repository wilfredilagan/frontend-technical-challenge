const product = require('./content/product')

module.exports = {
  siteConfig: {
    header: {
      primary: [
        {
          title: 'Shop',
          link: '/'
        },
        {
          title: 'About',
          link: '/'
        },
        {
          title: 'Visit',
          link: '/'
        }
      ],
      secondary: [
        {
          title: 'Search',
          link: '/'
        },
        {
          title: 'Login',
          link: '/'
        }
      ]
    },
    page: {
      title: 'Collection Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum enim vel dapibus commodo. Suspendisse nec pharetra metus.',
      products: [
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({ sale: true }, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product),
        Object.assign({}, product)
      ]
    }
  }
}
