module.exports = {
    // typescript 관련 설정 추가
    extends: ['@nuxtjs', '@nuxtjs/eslint-config-typescript', 'prettier'],

    // lint 속도를 향상시키기 위해 root 디렉터리에서만 찾는 설정
    root: true,

    env: {
        browser: true, // 브라우저 Global 환경
        node: true, // node Global 환경
        es2022: true, // ECMAScript 2022 문법 인식
    },
    rules: {
        /**
         * @rule : yoda
         * @desc : 조건문에서 상수먼저 작성 후 비교
         * @example : ( 상수 === x )
         * @ruleLevel : warn - 경고
         * @option : always ( 항상 yoda 문법 )
         * @see https://eslint.org/docs/rules/yoda
         * */
        yoda: ['warn', 'always'],

        /**
         * @rule : spaced-comment
         * @desc // or /* ( 주석 ) 뒤에 공백을 강제
         * @ruleLevel : warn - 경고
         * @option : always ( 항상 주석 첫 공백 없도록 설정 )
         * @see https://eslint.org/docs/rules/spaced-comment
         */
        'spaced-comment': ['warn', 'always'],

        /**
         * @rule : brace-style
         * @desc 중괄호 스타일 설정
         * @example
         * <pre>
         *  - stroustrup
         *  if () {
         *    foo();
         *  }
         *  else {
         *    bar();
         *  }
         *  - allowSingleLine( default : false ) - 시작 블록과 끝 블록이 같은 라인에 있는 것을 허용
         *  if () { foo() } else { bar() }
         * </pre>
         * @ruleLevel : warn - 경고
         * @option : stroustrup , allowSingleLine 허용
         * @see https://eslint.org/docs/rules/brace-style
         * */
        'brace-style': ['warn', 'stroustrup', { allowSingleLine: true }],

        /**
         * @rule : quotes
         * @desc : String quotes 설정. ( '' 사용 )
         * @ruleLevel : warn - 경고
         * @option : single , allowTemplateLiterals 허용
         * <pre>
         *  allowTemplateLiterals : string 의 backticks 사용을 허용
         * </pre>
         * @see https://eslint.org/docs/latest/rules/quotes
         */
        quotes: ['warn', 'single', { allowTemplateLiterals: true }],

        /**
         * @rule : semi
         * @desc : 문장 끝에 세미콜론 사용 여부
         * @ruleLevel : warn - 경고
         * @see https://eslint.org/docs/latest/rules/semi
         */
        semi: ['warn', 'always'],

        /**
         * @rule : space-in-parens
         * @desc : 괄호 다음에 공백 허용
         * @example
         *  console.log( 'Hello, World!' );
         * @ruleLevel : off - 사용하지 않음( prettier 설정 사용 )
         * @see https://eslint.org/docs/latest/rules/space-in-parens
         */
        'space-in-parens': 'off',

        /**
         * @rule : comma-spacing
         * @desc : ,( 콤마 ) 좌우로 띄어쓰기 설정
         * @ruleLevel : off - 사용하지 않음( prettier 설정 사용 )
         * @ruleLevel : warn - 경고
         */
        'comma-spacing': 'off',

        /**
         * @rule : eol-last
         * @desc : 파일 끝에 반드시 줄바꿈 사용 설정
         * @ruleLevel : off - 사용하지 않음
         * @see https://eslint.org/docs/latest/rules/eol-last
         */
        'eol-last': 'off',
    },
};
