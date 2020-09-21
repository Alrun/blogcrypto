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
        main: './src/index.js',
        scripts: './src/pages/**/*.js',
        pages: './src/pages/**/*.pug'
    },
    output: {
        css: 'css/',
        js: 'js/',
        images: 'images/',
        dist: path.join(__dirname, './dist')
    }
}

/**
 * Filter and define files
 * @param {string} entry - Entry files
 * @return [{ [key: string]: string} ] An array with list entries [ {index: 'src/index.js'} ]
 */
const getFiles = (entry) => {
    const ext = entry.split('.').pop(); // get file extension
    const re = new RegExp(`/_.*\.${ ext }`); // get files with _ (e.g. - _file-with-underscore.js)

    return glob.sync(entry).filter(file => !re.test(file)).map(file => {
        const fileName = path.basename(file, path.extname(file));

        return {[fileName]: file};
    });
};

const generatePages = (mode) => {
    return getFiles(PATHS.entry.pages).map(page => {
        const pageName = Object.keys(page)[0];

        return new HtmlWebpackPlugin({
            filename: mode === 'development' ? `${pageName}.html`: `../${pageName}.html`,
            template: Object.values(page)[0],
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: true,
                removeComments: mode !== 'development'
            },
            isDevelopment: mode === 'development'
        })
    });
}

module.exports = (env, argv) => {
    const defaultConfig = {
        mode: argv.mode,
        entry: {
            main: './src/index.js'
        },
        output: {
            filename: 'js/main.js',
            // publicPath: './', // <script src="[publicPath]/[filename]"></script>
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
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.pug$/,
                    loader: 'pug-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: argv.mode !== 'production'
                                    ? 'style-loader'
                                    : MiniCssExtractPlugin.loader
                        },
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

    const defaultPlugins = [
        ...generatePages(argv.mode),
        new webpack.DefinePlugin({
            PROJECT_NAME: JSON.stringify(require('./package.json').config.projectName),
            PROJECT_LOCALE: JSON.stringify(require('./package.json').config.locale),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
            chunkFilename: '[id].css'
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {from: './src/static', to: PATHS.output.dist}
        //     ]
        // }),
    ];

    const devConfig = {
        devServer: {
            // contentBase: path.join(__dirname, './dist'),
            // compress: true,
            hot: true,
            port: 3000,
            host: '0.0.0.0',
            // public: '192.168.31.49:3000',
            // proxy: {
            //     '/api': 'http://localhost:8080'
            // },
        },
        devtool: 'cheap-module-eval-source-map',
        plugins: [
            ...defaultPlugins,
            new webpack.HotModuleReplacementPlugin()
        ]
    };

    const prodConfig = {
        plugins: [
            new CleanWebpackPlugin({
                // dry: true,
                // cleanOnceBeforeBuildPatterns: ['**/*', '../*.html'],
                // dangerouslyAllowCleanPatternsOutsideProject: true
            }),
            ...defaultPlugins,
            new webpack.ContextReplacementPlugin(
                /moment[/\\]locale$/,
                /ru/
            ),
            new SitemapPlugin(require('./package.json').homepage,
                getFiles(PATHS.entry.pages).map(page => Object.keys(page)[0]), {
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
