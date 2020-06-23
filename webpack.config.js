const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },

    devServer: {
        contentBase: "dist"
    },

    plugins: [
        new miniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),


        new htmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),

        new htmlWebpackPlugin({
            filename: "register.html",
            template: "./src/register.html"
        }),

        new htmlWebpackPlugin({
            filename: "login.html",
            template: "./src/login.html"
        }),
        new htmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html"
        }),

        new htmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/contact.html"
        }),

        new htmlWebpackPlugin({
            filename: 'dashboard.html',
            template: "./src/dashboard.html"
        }),

        new htmlWebpackPlugin({
            filename: "profile.html",
            template: "./src/profile.html"
        }),

        new htmlWebpackPlugin({
            filename: "logout.html",
            template: "./src/logout.html"
        }),
        new htmlWebpackPlugin({
            filename: "users.html",
            template: "./src/users.html"
        }),
        new htmlWebpackPlugin({
            filename: "user.html",
            template: "./src/user.html"
        }),
        new htmlWebpackPlugin({
            filename: "book_appointment.html",
            template: "./src/book_appointment.html"
        }),
        new htmlWebpackPlugin({
            filename: "appointment.html",
            template: "./src/appointment.html"
        }),

        new htmlWebpackPlugin({
            filename: "edit_profile.html",
            template: "./src/edit_profile.html"
        }),

        new htmlWebpackPlugin({
            filename: "view_appointment.html",
            template: "./src/view_appointment.html"
        }),
        new htmlWebpackPlugin({
            filename: "create_account.html",
            template: "./src/create_account.html"
        }),

        // verify account
        new htmlWebpackPlugin({
            filename: "verify_account.html",
            template: "./src/verify_account.html"
        }),


        // doctors
        new htmlWebpackPlugin({
            filename: "doctors.html",
            template: "./src/doctors.html"
        }),

        new htmlWebpackPlugin({
            filename: "patients.html",
            template: "./src/patients.html"
        }),

        new htmlWebpackPlugin({
            filename: "change_profile.html",
            template: "./src/change_profile.html"
        })
    ],

    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}