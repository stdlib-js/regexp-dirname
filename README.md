<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Dirname

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Regular expression][regexp] to capture a path [dirname][dirname].



<section class="usage">

## Usage

To use in Observable,

```javascript
reDirname = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-dirname@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var reDirname = require( 'path/to/vendor/umd/regexp-dirname/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/regexp-dirname@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.reDirname;
})();
</script>
```

#### reDirname( \[platform] )

Returns a [regular expression][regexp] to capture a path [dirname][dirname].

```javascript
var RE = reDirname();
// returns <RegExp>

RE = reDirname( 'posix' );
// returns <RegExp>

var dir = RE.exec( '/foo/bar/index.js' )[ 1 ];
// returns '/foo/bar'

RE = reDirname( 'win32' );
// returns <RegExp>

dir = RE.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns 'C:\\foo\\bar'
```

#### reBasename.REGEXP

[Regular expression][regexp] to capture a path dirname.

```javascript
var bool = ( reDirname.REGEXP.toString() === reDirname().toString() );
// returns true
```

#### reDirname.REGEXP_POSIX

[Regular expression][@stdlib/regexp/dirname-posix] to capture a [POSIX][posix] path dirname. 

```javascript
var dir = reDirname.REGEXP_POSIX.exec( '/foo/bar/index.js' )[ 1 ];
// returns '/foo/bar'
```

#### reDirname.REGEXP_WIN32

[Regular expression][@stdlib/regexp/dirname-windows] to capture a Windows path dirname. 

```javascript
var dir = reDirname.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns 'C:\\foo\\bar'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The as `REGEXP` exported [regular expression][regexp] is [platform][@stdlib/assert/is-windows]-dependent. If the current process is running on Windows, `REGEXP === REGEXP_WIN32`; otherwise, `REGEXP === REGEXP_POSIX`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/regexp-dirname@umd/browser.js"></script>
<script type="text/javascript">
(function () {
var RE_DIRNAME = reDirname();
var dir;

// Assuming a POSIX platform...
dir = RE_DIRNAME.exec( '/foo/bar/index.js' )[ 1 ];
// returns '/foo/bar'

dir = reDirname.REGEXP_POSIX.exec( '/foo/bar/home.html' )[ 1 ];
// returns '/foo/bar'

dir = reDirname.REGEXP_WIN32.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
// returns 'C:\\foo\\bar'

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp/dirname-posix`][@stdlib/regexp/dirname-posix]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture a POSIX path dirname.</span>
-   <span class="package-name">[`@stdlib/regexp/dirname-windows`][@stdlib/regexp/dirname-windows]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture a Windows path dirname.</span>
-   <span class="package-name">[`@stdlib/utils/dirname`][@stdlib/utils/dirname]</span><span class="delimiter">: </span><span class="description">return a directory name.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-dirname.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-dirname

[test-image]: https://github.com/stdlib-js/regexp-dirname/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/regexp-dirname/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-dirname/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-dirname?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-dirname.svg
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-dirname/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp-dirname/tree/deno
[umd-url]: https://github.com/stdlib-js/regexp-dirname/tree/umd
[esm-url]: https://github.com/stdlib-js/regexp-dirname/tree/esm
[branches-url]: https://github.com/stdlib-js/regexp-dirname/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-dirname/main/LICENSE

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[dirname]: https://en.wikipedia.org/wiki/Dirname

[posix]: https://en.wikipedia.org/wiki/POSIX

[@stdlib/assert/is-windows]: https://github.com/stdlib-js/assert-is-windows/tree/umd

<!-- <related-links> -->

[@stdlib/regexp/dirname-posix]: https://github.com/stdlib-js/regexp-dirname-posix/tree/umd

[@stdlib/regexp/dirname-windows]: https://github.com/stdlib-js/regexp-dirname-windows/tree/umd

[@stdlib/utils/dirname]: https://github.com/stdlib-js/utils-dirname/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
