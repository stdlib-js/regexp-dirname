"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=v(function(f,u){
var E=require('@stdlib/assert-contains/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),P=require('@stdlib/regexp-dirname-posix/dist'),R=require('@stdlib/regexp-dirname-windows/dist'),w=require('@stdlib/assert-is-windows/dist'),a=["posix","win32"];function X(r){if(arguments.length>0&&!E(a,r))throw new Error(q('0sH7r',a.join('", "'),r));return r==="win32"||w?R():P()}u.exports=X
});var n=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/regexp-dirname-posix/dist').REGEXP,o=require('@stdlib/regexp-dirname-windows/dist').REGEXP,G=require('@stdlib/assert-is-windows/dist'),i=t(),I=G?o:s;n(i,"REGEXP",I);n(i,"REGEXP_POSIX",s);n(i,"REGEXP_WIN32",o);module.exports=i;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
