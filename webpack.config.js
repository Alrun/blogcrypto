const fs = require('fs');
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const PATHS = {
    entry: {
        pages: './src/pages/**/*.html'
    },
    output: {
        css: 'css/',
        js: 'js/',
        dist: path.join(__dirname, './dist')
    }
}

const generatePages = (mode) => {
    return glob.sync(PATHS.entry.pages).filter(item => !/\/_.*\.html/.test(item)).map(page => {
        const fileName = path.basename(page, path.extname(page));

        return new HtmlWebpackPlugin({
            filename: mode === 'development' ? `${fileName}.html`: `../${fileName}.html`,
            template: `src/pages/${fileName}.html`,
            minify: {
                // collapseWhitespace: true,
                // preserveLineBreaks: true,
                removeComments: mode !== 'development'
            },
        })
    });
}

let devServer;

const reloadHtml = () => {
    const cache = {};
    const plugin = { name: 'CustomHtmlReloadPlugin' };

    if (this.hooks) {
        this.hooks.compilation.tapAsync(plugin, compilation => {
            compilation.hooks.htmlWebpackPluginAfterEmit.tap(plugin, data => {
                const orig = cache[data.outputName];
                const html = data.html.source();
                // plugin seems to emit on any unrelated change?
                if (orig && orig !== html) {
                    devServer.sockWrite(devServer.sockets, 'content-changed');
                }
                cache[data.outputName] = html;
            })
        })
    }
};

module.exports = (env, argv) => {
    const defaultConfig = {
        mode: argv.mode,
        // context: path.resolve(__dirname, './'),
        entry: {
            // ...scriptsEntries()
            src: './src/index.js',
        // scripts: './src/pages/**/*.js',
        //     templates: './src/pages/index.html'
        },
        output: {
            filename: 'js/main.js',
            // publicPath: './',
            path: PATHS.output.dist
        },
        resolve: {
            modules: [
                'node_modules'
            ],
            extensions: ['.js']
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [{ loader: MiniCssExtractPlugin.loader },
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('postcss-import')(),
                                    require('cssnano'),
                                    require('autoprefixer')()
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        stats: {
            all: false,
            builtAt: true,
            timings: true,
            version: true,
            modules: false,
            assets: false,
            errors: true,
            warnings: true,
            moduleTrace: true,
            errorDetails: true
        }
    }

    const devConfig = {
        devServer: {
            // contentBase: path.join(__dirname, './dist'),
            // compress: true,
            // hot: true,
            before(app, server) { devServer = server; },
            port: 3000,
            host: '0.0.0.0',
            // public: '192.168.31.49:3000',
            // proxy: {
            //     '/api': 'http://localhost:8080'
            // },
        },
        devtool: 'cheap-module-eval-source-map',
        plugins: [
            ...generatePages(argv.mode),
            reloadHtml,
            new MiniCssExtractPlugin({
                filename: 'css/main.css',
                chunkFilename: '[id].css'
            })
        ]
    };

    const prodConfig = {
        plugins: [
            new CleanWebpackPlugin({
                // dry: true,
                // cleanOnceBeforeBuildPatterns: ['**/*', '../*.html'],
                // dangerouslyAllowCleanPatternsOutsideProject: true
            }),
            ...generatePages(argv.mode),
            new MiniCssExtractPlugin({
                filename: 'css/main.css',
                chunkFilename: '[id].css'
            }),
            new SitemapPlugin('https://blogcrypto.info',
                glob.sync(PATHS.entry.pages).filter(item => !/\/_.*\.html/.test(item)).map(page => path.basename(page)), {
                filename: '../sitemap.xml',
                skipgzip: true,
                lastmod: true,
                changefreq: 'weekly', //'monthly',
                priority: '0.8'
            })
        ]
    };

    return argv.mode !== 'production'
           ? {...defaultConfig, ...devConfig}
           : {...defaultConfig, ...prodConfig};
};
