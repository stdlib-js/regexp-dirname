/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var contains = require( '@stdlib/array-base-assert-contains' ).factory;
var format = require( '@stdlib/string-format' );
var posix = require( '@stdlib/regexp-dirname-posix' );
var win32 = require( '@stdlib/regexp-dirname-windows' );
var IS_WINDOWS = require( '@stdlib/assert-is-windows' );


// VARIABLES //

var PLATFORMS = [ 'posix', 'win32' ];
var isPlatform = contains( PLATFORMS );


// MAIN //

/**
* Returns a regular expression to capture a path dirname.
*
* @param {string} [platform] - path platform (`win32` or `posix`)
* @throws {Error} platform must be `win32` or `posix`
* @returns {RegExp} regular expression
*
* @example
* var RE = reDirname();
* var dir = RE.exec( '/foo/bar/index.js' )[ 1 ];
* // returns <string>
*/
function reDirname( platform ) {
	if ( arguments.length > 0 ) {
		if ( !isPlatform( platform ) ) {
			throw new Error( format( 'invalid argument.  Must be one of the following: "%s". Value: `%s`.', PLATFORMS.join( '", "' ), platform ) );
		}
	}
	if ( platform === 'win32' || IS_WINDOWS ) {
		return win32();
	}
	// Case: platform === 'posix'
	return posix();
}


// EXPORTS //

module.exports = reDirname;
