module.exports = {
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
              /*
              options: {
                paths: [path.resolve(__dirname, 'node_modules')],
              },
              */
            },
          ],
        },
      ],
    },
  };