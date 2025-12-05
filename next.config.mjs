import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  search: {
    codeblocks: false
  }
})

export default withNextra({
  reactStrictMode: true,
})
