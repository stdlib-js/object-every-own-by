"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var a=s(function(w,u){
var f=require('@stdlib/assert-is-object/dist'),o=require('@stdlib/assert-is-function/dist'),v=require('@stdlib/assert-has-own-property/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function m(e,r,t){var n;if(!f(e))throw new TypeError(i('2Od3L',e));if(!o(r))throw new TypeError(i('2Od2H',r));for(n in e)if(v(e,n)&&!r.call(t,e[n],n,e))return!1;return!0}u.exports=m
});var c=a();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
