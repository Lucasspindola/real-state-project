import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root{
    /* --font-family-title: 'Lexend', sans-serif;
    --font-family-text: 'Inter', sans-serif;

    --brand-1: #4529E6;
    --brand-2: #5126EA;
    --brand-3:#B0A6F0;
    --brand-4: #EDEAFD; */

    /* --grey-0: #0B0D0D;
    --grey-1: #212529;
    --grey-2: #495057;
    --grey-3: #868E96;
    --grey-4: #ADB5BD;
    --grey-5: #CED4DA;
    --grey-6: #DEE2E6;
    --grey-7: #E9ECEF;
    --grey-8: #F1F3F5;
    --grey-9: #F8F9FA;
    --grey-10: #FDFDFD;
    --white-fixed: #FFFFFF;

    --alert-1: #CD2B31;
    --alert-2: #FDD8D8;
    --alert-3: #FFE5E5;

    --success-1: #18794E;
    --success-2: #CCEBD7;
    --success-3: #DDF3E4;

    --random-1: #E34D8C;
    --random-2: #E34D8C; */
  
}
`;
