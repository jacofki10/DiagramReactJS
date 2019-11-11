# DiagramReactJS

# Made by: Diego Arnes
# Date: 11/2019

# webpack.config.js #
  -Webpack
    -Babel          -> toolchain used to convert ECMAScript 2015+ code into backwards compatible version of JS
      -browserslistrc -> config to share target browsers
    -coreJS         -> standard library for JS that includes polyfills for ECMAScript up to 2019
    -Bootstrap   -> npm i bootstrap jquerry popper.js
    -Modules
      *Loaders(tell Webpack how to include it in its build process) tell Webpack how to treat the different   modules that we import throughout our app
      -JS    ->  babel-loader
      -CSS -> css-loader, style-loader, sass-loader (node-sass)
    -Plugins
    　-HtmlWebpackPlugin
    　-CleanWebpackPlugin
        -MiniCssExtractPlugin
    -Optimization
       -OptimazeCssAssetsPlugin
       -TerserPlugin

# package.json #
  -npm run build         -> Production
  -npm run dev            -> Development
  -npm run devserver -> Live development

  # Diagram Logic #
10 questions(5 groups)
    -CP
    -NP
    -A
    -FC
    AC

2 answers:
   -yes(0 points)
   -no(1 point)

Points logic:
   Each group 1 digit(sum of both answer points)
    results = 10201(example)
      |->Final result(results + 1) = 21312(example )

9 result Pattern:
  1-12211 ,etc
  2-11111 ,etc
  3-11121 ,etc
  4-21111 ,etc
  5-21121 ,etc
  6-12111 ,etc
  7-11112 ,etc
  8-11211 ,etc
  9-21122 ,etc

