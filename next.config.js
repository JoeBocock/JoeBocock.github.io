const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/joebocock.com/`
  basePath = `/joebocock.com`
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export'
}

module.exports = nextConfig
