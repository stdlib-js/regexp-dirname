// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-dirname-posix@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-dirname-windows@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var d=r,m=n,o=e,l=t,p=i,a=["posix","win32"];var j=function(s){if(arguments.length>0&&!d(a,s))throw new Error(m("invalid argument. Platform must be either `posix` or `win32`. Value: `%s`.",s));return"win32"===s||p?l():o()},h=s,E=e.REGEXP,f=t.REGEXP,x=j;h(x,"REGEXP",i?f:E),h(x,"REGEXP_POSIX",E),h(x,"REGEXP_WIN32",f);var g=x;export{E as REGEXP_POSIX,f as REGEXP_WIN32,g as default};
//# sourceMappingURL=index.mjs.map
