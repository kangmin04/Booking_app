// craco.config.js
module.exports = {
    webpack: {
      configure: (config) => ({
        ...config,
        module: {
          ...config.module,
          rules: config.module.rules.map((rule) => {
            if (rule.oneOf instanceof Array) {
              // CRA가 .cjs 파일을 Babel로 처리하도록 수정
              rule.oneOf[rule.oneOf.length - 1].exclude = [
                /\.(js|mjs|jsx|cjs|ts|tsx)$/,
                /\.html$/,
                /\.json$/,
              ];
            }
            return rule;
          }),
        },
      }),
    },
  };
  