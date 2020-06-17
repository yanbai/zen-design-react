let ob = {
  plugins:
    [new VirtualModulesPlugin({
      _staticModules:
      {
        'C:\\work\\workspace_2020\\zen-design-react\\.storybook\\generated-entry.js':
          '\n              import { configure } from \'@storybook/react\';\n              module._StorybookPreserveDecorators = true;\n\n              configure([require.context(\'../src\', true, /^\\.\\/(?:(?:(?!\\.)(?:(?:(?!(?:|[\\\\\\/])\\.).)*?)[\\\\\\/])?(?!\\.)(?=.)[^\\\\\\/]*?\\.stories\\.js[\\\\\\/]?)$/)\n              ], module);\n            '
      }
    }),
    new HtmlWebpackPlugin({
      options:
      {
        template:
          'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\@storybook\\core\\dist\\server\\templates\\index.ejs',
        templateContent: false,
        templateParameters: [Function: templateParameters],
        filename: 'iframe.html',
        hash: false,
        inject: false,
        scriptLoading: 'blocking',
        compile: true,
        favicon: false,
        minify:
        {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: false,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        cache: true,
        showErrors: true,
        chunks: 'all',
        excludeChunks: [],
        chunksSortMode: 'none',
        meta: {},
        base: false,
        title: 'Webpack App',
        xhtml: false,
        alwaysWriteToDisk: true
      },
      childCompilerHash: undefined,
      assetJson: undefined,
      hash: undefined,
      version: 4
    }),
    new DefinePlugin({
      definitions:
      {
        'process.env':
        {
          NODE_ENV: '"development"',
          NODE_PATH: '""',
          PUBLIC_URL: '"."',
          SASS_PATH: '"./node_modules;./src"'
        },
        NODE_ENV: '"development"'
      }
    }),
    new WatchMissingNodeModulesPlugin({
      nodeModulesPath: 'C:\\work\\workspace_2020\\zen-design-react\\node_modules'
    }),
    new HotModuleReplacementPlugin({
      options: {},
      multiStep: undefined,
      fullBuildTimeout: 200,
      requestTimeout: 10000
    }),
    new CaseSensitivePathsPlugin({
      options: {},
      pathCache: {},
      fsOperations: 0,
      primed: false
    }),
    new ProgressPlugin({
      profile: false,
      handler: undefined,
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    }),
    new NormalModuleReplacementPlugin({ resourceRegExp: /core-js/, newResource: [Function] }),
    new InterpolateHtmlPlugin({
      htmlWebpackPlugin:
      {
        [Function, HtmlWebpackPlugin],
        version: 4,
        getHooks: [Function, getHtmlWebpackPluginHooks],
        createHtmlTagObject: [Function, createHtmlTagObject]
      },
      replacements:
      {
        NODE_ENV: 'development',
        PUBLIC_URL: '',
        WDS_SOCKET_HOST: undefined,
        WDS_SOCKET_PATH: undefined,
        WDS_SOCKET_PORT: undefined
      }
    }),
    new ModuleNotFoundPlugin({
      appPath: 'C:\\work\\workspace_2020\\zen-design-react',
      yarnLockFile: undefined,
      useYarnCommand: [Function: bound useYarnCommand],
      getRelativePath: [Function: bound getRelativePath],
      prettierError: [Function: bound prettierError]
    }),
    new ManifestPlugin({
      opts:
      {
        publicPath: '/',
        basePath: '',
        fileName: 'asset-manifest.json',
        transformExtensions: /^(gz|map)$/i,
        writeToFileEmit: false,
        seed: null,
        filter: null,
        map: null,
        generate: [Function: generate],
        sort: null,
        serialize: [Function: serialize]
      }
    }),
    new IgnorePlugin({
      options: { resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ },
      checkIgnore: [Function: bound checkIgnore]
    })],
  module:
  {
    rules:
      [{
        test: /\.md$/,
        use:
          [{
            loader:
              'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\@storybook\\core\\node_modules\\raw-loader\\dist\\cjs.js'
          }]
      },
      { parser: { requireEnsure: false } },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        enforce: 'pre',
        use:
          [{
            options:
            {
              cache: true,
              formatter:
                'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\react-dev-utils\\eslintFormatter.js',
              eslintPath:
                'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\eslint\\lib\\api.js',
              resolvePluginsRelativeTo:
                'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\react-scripts\\config',
              ignore: false,
              baseConfig:
              {
                extends:
                  ['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\eslint-config-react-app\\index.js']
              },
              useEslintrc: false
            },
            loader:
              'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\eslint-loader\\dist\\cjs.js'
          }],
        include:
          ['C:\\work\\workspace_2020\\zen-design-react\\src',
            'C:\\work\\workspace_2020\\zen-design-react\\.storybook']
      },
      {
        oneOf:
          [{
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader:
              'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\url-loader\\dist\\cjs.js',
            options: { limit: 10000, name: 'static/media/[name].[hash:8].[ext]' }
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include:
              ['C:\\work\\workspace_2020\\zen-design-react\\src',
                'C:\\work\\workspace_2020\\zen-design-react\\.storybook'],
            loader:
              'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\babel-loader\\lib\\index.js',
            options:
            {
              customize:
                'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\babel-preset-react-app\\webpack-overrides.js',
              babelrc: false,
              configFile: false,
              presets:
                [['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\@storybook\\core\\node_modules\\@babel\\preset-env\\lib\\index.js',
                  { shippedProposals: true, useBuiltIns: 'usage', corejs: '3' }],
                  'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\@babel\\preset-react\\lib\\index.js',
                  'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\@babel\\preset-flow\\lib\\index.js',
                  'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\babel-preset-react-app\\index.js'],
              cacheIdentifier:
                'development:babel-plugin-named-asset-import@0.3.6:babel-preset-react-app@9.1.2:react-dev-utils@10.2.1:react-scripts@3.4.1',
              plugins:
                ['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\@babel\\plugin-proposal-object-rest-spread\\lib\\index.js',
                  'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\@storybook\\core\\node_modules\\@babel\\plugin-proposal-class-properties\\lib\\index.js',
                  'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\@babel\\plugin-syntax-dynamic-import\\lib\\index.js',
                  ['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\babel-plugin-emotion\\dist\\babel-plugin-emotion.cjs.js',
                    { sourceMap: true, autoLabel: true }],
                  'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\babel-plugin-macros\\dist\\index.js',
                  'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\@babel\\plugin-transform-react-constant-elements\\lib\\index.js',
                  'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\babel-plugin-add-react-displayname\\index.js',
                  ['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\babel-plugin-react-docgen\\lib\\index.js',
                    { DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES' }],
                  ['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\babel-plugin-named-asset-import\\index.js',
                    {
                      loaderMap:
                      {
                        svg:
                          { ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]' }
                      }
                    }]],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false,
              extends: undefined,
              overrides:
                [{
                  test: /\.(mjs|jsx?)$/,
                  plugins:
                    [['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\babel-plugin-react-docgen\\lib\\index.js',
                      { DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES' }]]
                }]
            }
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader:
              'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\babel-loader\\lib\\index.js',
            options:
            {
              babelrc: false,
              configFile: false,
              compact: false,
              presets:
                [['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\babel-preset-react-app\\dependencies.js',
                  { helpers: true }]],
              cacheDirectory: true,
              cacheCompression: false,
              cacheIdentifier:
                'development:babel-plugin-named-asset-import@0.3.6:babel-preset-react-app@9.1.2:react-dev-utils@10.2.1:react-scripts@3.4.1',
              sourceMaps: true,
              inputSourceMap: true
            },
            include: ['C:\\work\\workspace_2020\\zen-design-react\\.storybook']
          },
          {
            test: /\.css$/,
            exclude: [/\.module\.css$/, /@storybook/],
            use:
              ['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\style-loader\\index.js',
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\css-loader\\dist\\cjs.js',
                  options: { importLoaders: 1, sourceMap: false }
                },
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\postcss-loader\\src\\index.js',
                  options:
                  {
                    ident: 'postcss',
                    plugins: [Function: plugins],
                    sourceMap: false
                  }
                }],
            sideEffects: true,
            include: undefined
          },
          {
            test: /\.module\.css$/,
            use:
              ['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\style-loader\\index.js',
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\css-loader\\dist\\cjs.js',
                  options:
                  {
                    importLoaders: 1,
                    sourceMap: false,
                    modules: { getLocalIdent: [Function: getLocalIdent] }
                  }
                },
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\postcss-loader\\src\\index.js',
                  options:
                  {
                    ident: 'postcss',
                    plugins: [Function: plugins],
                    sourceMap: false
                  }
                }]
          },
          {
            test: /\.(scss|sass)$/,
            exclude: /\.module\.(scss|sass)$/,
            use:
              ['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\style-loader\\index.js',
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\css-loader\\dist\\cjs.js',
                  options: { importLoaders: 3, sourceMap: false }
                },
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\postcss-loader\\src\\index.js',
                  options:
                  {
                    ident: 'postcss',
                    plugins: [Function: plugins],
                    sourceMap: false
                  }
                },
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\resolve-url-loader\\index.js',
                  options: { sourceMap: false }
                },
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\sass-loader\\dist\\cjs.js',
                  options: { sourceMap: true }
                }],
            sideEffects: true
          },
          {
            test: /\.module\.(scss|sass)$/,
            use:
              ['C:\\work\\workspace_2020\\zen-design-react\\node_modules\\style-loader\\index.js',
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\css-loader\\dist\\cjs.js',
                  options:
                  {
                    importLoaders: 3,
                    sourceMap: false,
                    modules: { getLocalIdent: [Function: getLocalIdent] }
                  }
                },
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\postcss-loader\\src\\index.js',
                  options:
                  {
                    ident: 'postcss',
                    plugins: [Function: plugins],
                    sourceMap: false
                  }
                },
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\resolve-url-loader\\index.js',
                  options: { sourceMap: false }
                },
                {
                  loader:
                    'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\sass-loader\\dist\\cjs.js',
                  options: { sourceMap: true }
                }]
          },
          {
            loader:
              'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\file-loader\\dist\\cjs.js',
            exclude:
              [/\.(js|mjs|jsx|ts|tsx)$/,
                /\.html$/,
                /\.json$/,
                /\.(ejs|md|mdx)$/],
            options: { name: 'static/media/[name].[hash:8].[ext]' }
          }]
      },
      {
        test: /\.tsx?$/,
        use:
          [{
            loader:
              'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\react-docgen-typescript-loader\\dist\\index.js',
            options: undefined
          }]
      }]
  },
  resolve:
  {
    extensions:
      ['.web.mjs', '.mjs', '.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    modules:
      ['node_modules',
        'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\react-scripts\\node_modules'],
    alias:
    {
      'babel-runtime/core-js/object/assign':
        'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\core-js\\es\\object\\assign.js',
      react:
        'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\react',
      'react-dom':
        'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\react-dom'
    },

    optimization:
    {
      splitChunks: { chunks: 'all' },
      runtimeChunk: true,
      minimizer:
        [TerserPlugin, {
          options:
          {
            test: /\.m?js(\?.*)?$/i,
            chunkFilter: [Function: chunkFilter],
            warningsFilter: [Function: warningsFilter],
            extractComments: true,
            sourceMap: true,
            cache: true,
            cacheKeys: [Function: cacheKeys],
            parallel: true,
            include: undefined,
            exclude: undefined,
            minify: undefined,
            terserOptions: { mangle: false, keep_fnames: true }
          }
        }]
    },
    performance: { hints: false },
    resolveLoader:
    {
      modules:
        ['node_modules',
          'C:\\work\\workspace_2020\\zen-design-react\\node_modules\\react-scripts\\node_modules'],
      plugins: [{ apply: [] }]
    }
  }

}
