(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS
//
// For some reason, tabs can appear in href protocols and it still works.
// So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
// in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
// so freaky.
//
// Pulling the regular expressions out to the top level gives a slight speed
// boost in small benchmarks (4-10%) but hoisting values to reduce allocation
// can be unpredictable in large programs where JIT may have a harder time with
// functions are not fully self-contained. The benefit is more that the js and
// js_html ones are so weird that I prefer to see them near each other.


var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;


function _VirtualDom_noScript(tag)
{
	return _VirtualDom_RE_script.test(tag) ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return _VirtualDom_RE_on_formAction.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return _VirtualDom_RE_js.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return _VirtualDom_RE_js_html.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlJson(value)
{
	return (typeof _Json_unwrap(value) === 'string' && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
		? _Json_wrap(
			/**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		) : value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}


var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $ianmackenzie$elm_units$Quantity$Quantity = function (a) {
	return {$: 'Quantity', a: a};
};
var $ianmackenzie$elm_units$Quantity$zero = $ianmackenzie$elm_units$Quantity$Quantity(0);
var $MartinSStewart$elm_audio$Audio$audioDefaultConfig = {loop: $elm$core$Maybe$Nothing, playbackRate: 1, startAt: $ianmackenzie$elm_units$Quantity$zero};
var $MartinSStewart$elm_audio$Audio$BasicAudio = function (a) {
	return {$: 'BasicAudio', a: a};
};
var $MartinSStewart$elm_audio$Audio$audioWithConfig = F3(
	function (audioSettings, source, startTime) {
		return $MartinSStewart$elm_audio$Audio$BasicAudio(
			{settings: audioSettings, source: source, startTime: startTime});
	});
var $MartinSStewart$elm_audio$Audio$audio = F2(
	function (source, startTime) {
		return A3($MartinSStewart$elm_audio$Audio$audioWithConfig, $MartinSStewart$elm_audio$Audio$audioDefaultConfig, source, startTime);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $MartinSStewart$elm_audio$Audio$Group = function (a) {
	return {$: 'Group', a: a};
};
var $MartinSStewart$elm_audio$Audio$group = function (audios) {
	return $MartinSStewart$elm_audio$Audio$Group(audios);
};
var $elm$core$Basics$gt = _Utils_gt;
var $elm_community$maybe_extra$Maybe$Extra$join = function (mx) {
	if (mx.$ === 'Just') {
		var x = mx.a;
		return x;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $MartinSStewart$elm_audio$Audio$Effect = function (a) {
	return {$: 'Effect', a: a};
};
var $MartinSStewart$elm_audio$Audio$ScaleVolume = function (a) {
	return {$: 'ScaleVolume', a: a};
};
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $MartinSStewart$elm_audio$Audio$scaleVolume = F2(
	function (scaleBy, audio_) {
		return $MartinSStewart$elm_audio$Audio$Effect(
			{
				audio: audio_,
				effectType: $MartinSStewart$elm_audio$Audio$ScaleVolume(
					{
						scaleBy: A2($elm$core$Basics$max, 0, scaleBy)
					})
			});
	});
var $MartinSStewart$elm_audio$Audio$silence = $MartinSStewart$elm_audio$Audio$group(_List_Nil);
var $author$project$Main$audio = F2(
	function (_v0, model) {
		var maybeplay = function (x) {
			if (x.$ === 'Nothing') {
				return $MartinSStewart$elm_audio$Audio$silence;
			} else {
				var _v3 = x.a;
				var muziek = _v3.a;
				var tijd = _v3.b;
				return A2($MartinSStewart$elm_audio$Audio$audio, muziek, tijd);
			}
		};
		_v1$3:
		while (true) {
			switch (model.$) {
				case 'InGame':
					var status = model.a;
					return $MartinSStewart$elm_audio$Audio$group(
						_List_fromArray(
							[
								maybeplay(
								A3(
									$elm$core$Maybe$map2,
									F2(
										function (x, y) {
											return _Utils_Tuple2(x, y);
										}),
									status.muziek.tik,
									status.recentstetik)),
								maybeplay(
								A2(
									$elm$core$Maybe$andThen,
									function (bel) {
										return A2(
											$elm$core$Maybe$andThen,
											function (psbt) {
												return ((status.questionNumber === 8) && ((_Utils_cmp(
													$elm$time$Time$posixToMillis(status.currentTime),
													30000 + $elm$time$Time$posixToMillis(psbt)) > 0) && (_Utils_cmp(
													$elm$time$Time$posixToMillis(status.currentTime),
													31000 + $elm$time$Time$posixToMillis(psbt)) < 0))) ? $elm$core$Maybe$Just(
													_Utils_Tuple2(
														bel,
														$elm$time$Time$millisToPosix(
															30000 + $elm$time$Time$posixToMillis(psbt)))) : $elm$core$Maybe$Nothing;
											},
											status.paardensprongbegintijd);
									},
									status.muziek.psbel)),
								A2(
								$MartinSStewart$elm_audio$Audio$scaleVolume,
								0.2,
								maybeplay(
									$elm_community$maybe_extra$Maybe$Extra$join(
										A3(
											$elm$core$Maybe$map2,
											F2(
												function (muziek, psbt) {
													return ((status.questionNumber === 8) && (status.searching || (_Utils_cmp(
														$elm$time$Time$posixToMillis(status.currentTime),
														30000 + $elm$time$Time$posixToMillis(psbt)) < 0))) ? $elm$core$Maybe$Just(
														_Utils_Tuple2(muziek, psbt)) : $elm$core$Maybe$Nothing;
												}),
											status.muziek.psmuziek,
											status.paardensprongbegintijd)))),
								maybeplay(
								A3($elm$core$Maybe$map2, $elm$core$Tuple$pair, status.muziek.wikibel, status.recentstebel))
							]));
				case 'Woordraden':
					var status = model.a;
					return $MartinSStewart$elm_audio$Audio$group(
						_List_fromArray(
							[
								A2(
								$MartinSStewart$elm_audio$Audio$scaleVolume,
								0.2,
								maybeplay(status.muziek)),
								maybeplay(status.kooptik)
							]));
				case 'Afrekenen':
					if (model.a.$ === 'Verlies') {
						var info = model.a.a;
						return maybeplay(info.faalstart);
					} else {
						break _v1$3;
					}
				default:
					break _v1$3;
			}
		}
		return $MartinSStewart$elm_audio$Audio$silence;
	});
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Main$audioPortFromJS = _Platform_incomingPort('audioPortFromJS', $elm$json$Json$Decode$value);
var $author$project$Main$audioPortToJS = _Platform_outgoingPort('audioPortToJS', $elm$core$Basics$identity);
var $MartinSStewart$elm_audio$Audio$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioData = function (a) {
	return {$: 'AudioData', a: a};
};
var $MartinSStewart$elm_audio$Audio$audioData = function (_v0) {
	var model = _v0.a;
	return $MartinSStewart$elm_audio$Audio$AudioData(
		{sourceData: model.sourceData});
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $MartinSStewart$elm_audio$Audio$getUserModel = function (_v0) {
	var model = _v0.a;
	return model.userModel;
};
var $MartinSStewart$elm_audio$Audio$Model = function (a) {
	return {$: 'Model', a: a};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $MartinSStewart$elm_audio$Audio$audioSourceBufferId = function (_v0) {
	var audioSource = _v0.a;
	return audioSource.bufferId;
};
var $ianmackenzie$elm_units$Duration$inSeconds = function (_v0) {
	var numSeconds = _v0.a;
	return numSeconds;
};
var $ianmackenzie$elm_units$Duration$inMilliseconds = function (duration) {
	return $ianmackenzie$elm_units$Duration$inSeconds(duration) * 1000;
};
var $elm$core$Basics$round = _Basics_round;
var $ianmackenzie$elm_units$Duration$addTo = F2(
	function (time, duration) {
		return $elm$time$Time$millisToPosix(
			$elm$time$Time$posixToMillis(time) + $elm$core$Basics$round(
				$ianmackenzie$elm_units$Duration$inMilliseconds(duration)));
	});
var $MartinSStewart$elm_audio$Audio$audioStartTime = function (audio_) {
	return A2($ianmackenzie$elm_units$Duration$addTo, audio_.startTime, audio_.offset);
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $MartinSStewart$elm_audio$Audio$encodeBufferId = function (_v0) {
	var bufferId = _v0.a;
	return $elm$json$Json$Encode$int(bufferId);
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $MartinSStewart$elm_audio$Audio$encodeDuration = A2($elm$core$Basics$composeR, $ianmackenzie$elm_units$Duration$inMilliseconds, $elm$json$Json$Encode$float);
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $MartinSStewart$elm_audio$Audio$encodeLoopConfig = function (maybeLoop) {
	if (maybeLoop.$ === 'Just') {
		var loop = maybeLoop.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'loopStart',
					$MartinSStewart$elm_audio$Audio$encodeDuration(loop.loopStart)),
					_Utils_Tuple2(
					'loopEnd',
					$MartinSStewart$elm_audio$Audio$encodeDuration(loop.loopEnd))
				]));
	} else {
		return $elm$json$Json$Encode$null;
	}
};
var $MartinSStewart$elm_audio$Audio$encodeTime = A2($elm$core$Basics$composeR, $elm$time$Time$posixToMillis, $elm$json$Json$Encode$int);
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $mgold$elm_nonempty_list$List$Nonempty$toList = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	return A2($elm$core$List$cons, x, xs);
};
var $MartinSStewart$elm_audio$Audio$encodeVolumeTimeline = function (volumeTimeline) {
	return A2(
		$elm$json$Json$Encode$list,
		function (_v0) {
			var time = _v0.a;
			var volume = _v0.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'time',
						$MartinSStewart$elm_audio$Audio$encodeTime(time)),
						_Utils_Tuple2(
						'volume',
						$elm$json$Json$Encode$float(volume))
					]));
		},
		$mgold$elm_nonempty_list$List$Nonempty$toList(volumeTimeline));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $mgold$elm_nonempty_list$List$Nonempty$Nonempty = F2(
	function (a, b) {
		return {$: 'Nonempty', a: a, b: b};
	});
var $mgold$elm_nonempty_list$List$Nonempty$map = F2(
	function (f, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return A2(
			$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
			f(x),
			A2($elm$core$List$map, f, xs));
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $MartinSStewart$elm_audio$Audio$volumeTimelines = function (audio_) {
	return A2(
		$elm$core$List$map,
		$mgold$elm_nonempty_list$List$Nonempty$map(
			$elm$core$Tuple$mapFirst(
				function (a) {
					return A2($ianmackenzie$elm_units$Duration$addTo, a, audio_.offset);
				})),
		audio_.volumeTimelines);
};
var $MartinSStewart$elm_audio$Audio$encodeStartSound = F2(
	function (nodeGroupId, audio_) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('startSound')),
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'bufferId',
					$MartinSStewart$elm_audio$Audio$encodeBufferId(
						$MartinSStewart$elm_audio$Audio$audioSourceBufferId(audio_.source))),
					_Utils_Tuple2(
					'startTime',
					$MartinSStewart$elm_audio$Audio$encodeTime(
						$MartinSStewart$elm_audio$Audio$audioStartTime(audio_))),
					_Utils_Tuple2(
					'startAt',
					$MartinSStewart$elm_audio$Audio$encodeDuration(audio_.startAt)),
					_Utils_Tuple2(
					'volume',
					$elm$json$Json$Encode$float(audio_.volume)),
					_Utils_Tuple2(
					'volumeTimelines',
					A2(
						$elm$json$Json$Encode$list,
						$MartinSStewart$elm_audio$Audio$encodeVolumeTimeline,
						$MartinSStewart$elm_audio$Audio$volumeTimelines(audio_))),
					_Utils_Tuple2(
					'loop',
					$MartinSStewart$elm_audio$Audio$encodeLoopConfig(audio_.loop)),
					_Utils_Tuple2(
					'playbackRate',
					$elm$json$Json$Encode$float(audio_.playbackRate))
				]));
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $ianmackenzie$elm_units$Quantity$plus = F2(
	function (_v0, _v1) {
		var y = _v0.a;
		var x = _v1.a;
		return $ianmackenzie$elm_units$Quantity$Quantity(x + y);
	});
var $MartinSStewart$elm_audio$Audio$flattenAudio = function (audio_) {
	switch (audio_.$) {
		case 'Group':
			var group_ = audio_.a;
			return $elm$core$List$concat(
				A2($elm$core$List$map, $MartinSStewart$elm_audio$Audio$flattenAudio, group_));
		case 'BasicAudio':
			var source = audio_.a.source;
			var startTime = audio_.a.startTime;
			var settings = audio_.a.settings;
			return _List_fromArray(
				[
					{loop: settings.loop, offset: $ianmackenzie$elm_units$Quantity$zero, playbackRate: settings.playbackRate, source: source, startAt: settings.startAt, startTime: startTime, volume: 1, volumeTimelines: _List_Nil}
				]);
		default:
			var effect = audio_.a;
			var _v1 = effect.effectType;
			switch (_v1.$) {
				case 'ScaleVolume':
					var scaleVolume_ = _v1.a;
					return A2(
						$elm$core$List$map,
						function (a) {
							return _Utils_update(
								a,
								{volume: scaleVolume_.scaleBy * a.volume});
						},
						$MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio));
				case 'ScaleVolumeAt':
					var volumeAt = _v1.a.volumeAt;
					return A2(
						$elm$core$List$map,
						function (a) {
							return _Utils_update(
								a,
								{
									volumeTimelines: A2($elm$core$List$cons, volumeAt, a.volumeTimelines)
								});
						},
						$MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio));
				default:
					var duration = _v1.a;
					return A2(
						$elm$core$List$map,
						function (a) {
							return _Utils_update(
								a,
								{
									offset: A2($ianmackenzie$elm_units$Quantity$plus, duration, a.offset)
								});
						},
						$MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio));
			}
	}
};
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $MartinSStewart$elm_audio$Audio$encodeSetLoopConfig = F2(
	function (nodeGroupId, loop) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setLoopConfig')),
					_Utils_Tuple2(
					'loop',
					$MartinSStewart$elm_audio$Audio$encodeLoopConfig(loop))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate = F2(
	function (nodeGroupId, playbackRate) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setPlaybackRate')),
					_Utils_Tuple2(
					'playbackRate',
					$elm$json$Json$Encode$float(playbackRate))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeSetVolume = F2(
	function (nodeGroupId, volume) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setVolume')),
					_Utils_Tuple2(
					'volume',
					$elm$json$Json$Encode$float(volume))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeSetVolumeAt = F2(
	function (nodeGroupId, volumeTimelines_) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setVolumeAt')),
					_Utils_Tuple2(
					'volumeAt',
					A2($elm$json$Json$Encode$list, $MartinSStewart$elm_audio$Audio$encodeVolumeTimeline, volumeTimelines_))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeStopSound = function (nodeGroupId) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'action',
				$elm$json$Json$Encode$string('stopSound')),
				_Utils_Tuple2(
				'nodeGroupId',
				$elm$json$Json$Encode$int(nodeGroupId))
			]));
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $MartinSStewart$elm_audio$Audio$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $MartinSStewart$elm_audio$Audio$removeAt = F2(
	function (index, l) {
		if (index < 0) {
			return l;
		} else {
			var tail = $elm$core$List$tail(
				A2($elm$core$List$drop, index, l));
			var head = A2($elm$core$List$take, index, l);
			if (tail.$ === 'Nothing') {
				return l;
			} else {
				var t = tail.a;
				return A2($elm$core$List$append, head, t);
			}
		}
	});
var $MartinSStewart$elm_audio$Audio$updateAudioState = F2(
	function (_v0, _v1) {
		var nodeGroupId = _v0.a;
		var audioGroup = _v0.b;
		var flattenedAudio = _v1.a;
		var audioState = _v1.b;
		var json = _v1.c;
		var validAudio = A2(
			$elm$core$List$filter,
			function (_v7) {
				var a = _v7.b;
				return _Utils_eq(a.source, audioGroup.source) && (_Utils_eq(
					$MartinSStewart$elm_audio$Audio$audioStartTime(a),
					$MartinSStewart$elm_audio$Audio$audioStartTime(audioGroup)) && _Utils_eq(a.startAt, audioGroup.startAt));
			},
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, flattenedAudio));
		var _v2 = A2(
			$MartinSStewart$elm_audio$Audio$find,
			function (_v3) {
				var a = _v3.b;
				return _Utils_eq(a, audioGroup);
			},
			validAudio);
		if (_v2.$ === 'Just') {
			var _v4 = _v2.a;
			var index = _v4.a;
			return _Utils_Tuple3(
				A2($MartinSStewart$elm_audio$Audio$removeAt, index, flattenedAudio),
				audioState,
				json);
		} else {
			if (validAudio.b) {
				var _v6 = validAudio.a;
				var index = _v6.a;
				var a = _v6.b;
				var encodeValue = F2(
					function (getter, encoder) {
						return _Utils_eq(
							getter(audioGroup),
							getter(a)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
							A2(
								encoder,
								nodeGroupId,
								getter(a)));
					});
				var effects = A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					_List_fromArray(
						[
							A2(
							encodeValue,
							function ($) {
								return $.volume;
							},
							$MartinSStewart$elm_audio$Audio$encodeSetVolume),
							A2(
							encodeValue,
							function ($) {
								return $.loop;
							},
							$MartinSStewart$elm_audio$Audio$encodeSetLoopConfig),
							A2(
							encodeValue,
							function ($) {
								return $.playbackRate;
							},
							$MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate),
							A2(encodeValue, $MartinSStewart$elm_audio$Audio$volumeTimelines, $MartinSStewart$elm_audio$Audio$encodeSetVolumeAt)
						]));
				return _Utils_Tuple3(
					A2($MartinSStewart$elm_audio$Audio$removeAt, index, flattenedAudio),
					A3($elm$core$Dict$insert, nodeGroupId, a, audioState),
					_Utils_ap(effects, json));
			} else {
				return _Utils_Tuple3(
					flattenedAudio,
					A2($elm$core$Dict$remove, nodeGroupId, audioState),
					A2(
						$elm$core$List$cons,
						$MartinSStewart$elm_audio$Audio$encodeStopSound(nodeGroupId),
						json));
			}
		}
	});
var $MartinSStewart$elm_audio$Audio$diffAudioState = F3(
	function (nodeGroupIdCounter, audioState, newAudio) {
		var _v0 = A3(
			$elm$core$List$foldl,
			$MartinSStewart$elm_audio$Audio$updateAudioState,
			_Utils_Tuple3(
				$MartinSStewart$elm_audio$Audio$flattenAudio(newAudio),
				audioState,
				_List_Nil),
			$elm$core$Dict$toList(audioState));
		var newAudioLeft = _v0.a;
		var newAudioState = _v0.b;
		var json2 = _v0.c;
		var _v1 = A3(
			$elm$core$List$foldl,
			F2(
				function (audioLeft, _v2) {
					var counter = _v2.a;
					var audioState_ = _v2.b;
					var json_ = _v2.c;
					return _Utils_Tuple3(
						counter + 1,
						A3($elm$core$Dict$insert, counter, audioLeft, audioState_),
						A2(
							$elm$core$List$cons,
							A2($MartinSStewart$elm_audio$Audio$encodeStartSound, counter, audioLeft),
							json_));
				}),
			_Utils_Tuple3(nodeGroupIdCounter, newAudioState, json2),
			newAudioLeft);
		var newNodeGroupIdCounter = _v1.a;
		var newAudioState2 = _v1.b;
		var json3 = _v1.c;
		return _Utils_Tuple3(newAudioState2, newNodeGroupIdCounter, json3);
	});
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest = F2(
	function (index, audioLoad) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'audioUrl',
					$elm$json$Json$Encode$string(audioLoad.audioUrl)),
					_Utils_Tuple2(
					'requestId',
					$elm$json$Json$Encode$int(index))
				]));
	});
var $MartinSStewart$elm_audio$Audio$flattenAudioCmd = function (audioCmd) {
	if (audioCmd.$ === 'AudioLoadRequest') {
		var data = audioCmd.a;
		return _List_fromArray(
			[data]);
	} else {
		var list = audioCmd.a;
		return $elm$core$List$concat(
			A2($elm$core$List$map, $MartinSStewart$elm_audio$Audio$flattenAudioCmd, list));
	}
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $MartinSStewart$elm_audio$Audio$encodeAudioCmd = F2(
	function (_v0, audioCmd) {
		var model = _v0.a;
		var flattenedAudioCmd = $MartinSStewart$elm_audio$Audio$flattenAudioCmd(audioCmd);
		var newPendingRequests = A2(
			$elm$core$List$indexedMap,
			F2(
				function (index, request) {
					return _Utils_Tuple2(model.requestCount + index, request);
				}),
			flattenedAudioCmd);
		return _Utils_Tuple2(
			$MartinSStewart$elm_audio$Audio$Model(
				_Utils_update(
					model,
					{
						pendingRequests: A2(
							$elm$core$Dict$union,
							model.pendingRequests,
							$elm$core$Dict$fromList(newPendingRequests)),
						requestCount: model.requestCount + $elm$core$List$length(flattenedAudioCmd)
					})),
			A2(
				$elm$json$Json$Encode$list,
				$elm$core$Basics$identity,
				A2(
					$elm$core$List$map,
					function (_v1) {
						var index = _v1.a;
						var value = _v1.b;
						return A2($MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest, index, value);
					},
					newPendingRequests)));
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $MartinSStewart$elm_audio$Audio$initHelper = F3(
	function (audioPort, audioFunc, _v0) {
		var model = _v0.a;
		var cmds = _v0.b;
		var audioCmds = _v0.c;
		var _v1 = A3(
			$MartinSStewart$elm_audio$Audio$diffAudioState,
			0,
			$elm$core$Dict$empty,
			A2(
				audioFunc,
				$MartinSStewart$elm_audio$Audio$AudioData(
					{sourceData: $elm$core$Dict$empty}),
				model));
		var audioState = _v1.a;
		var newNodeGroupIdCounter = _v1.b;
		var json = _v1.c;
		var initialModel = $MartinSStewart$elm_audio$Audio$Model(
			{audioState: audioState, nodeGroupIdCounter: newNodeGroupIdCounter, pendingRequests: $elm$core$Dict$empty, requestCount: 0, samplesPerSecond: $elm$core$Maybe$Nothing, sourceData: $elm$core$Dict$empty, userModel: model});
		var _v2 = A2($MartinSStewart$elm_audio$Audio$encodeAudioCmd, initialModel, audioCmds);
		var initialModel2 = _v2.a;
		var audioRequests = _v2.b;
		var portMessage = $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'audio',
					A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, json)),
					_Utils_Tuple2('audioCmds', audioRequests)
				]));
		return _Utils_Tuple2(
			initialModel2,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						A2($elm$core$Platform$Cmd$map, $MartinSStewart$elm_audio$Audio$UserMsg, cmds),
						audioPort(portMessage)
					])));
	});
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $MartinSStewart$elm_audio$Audio$FromJSMsg = function (a) {
	return {$: 'FromJSMsg', a: a};
};
var $MartinSStewart$elm_audio$Audio$JsonParseError = function (a) {
	return {$: 'JsonParseError', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioLoadFailed = function (a) {
	return {$: 'AudioLoadFailed', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioLoadSuccess = function (a) {
	return {$: 'AudioLoadSuccess', a: a};
};
var $MartinSStewart$elm_audio$Audio$InitAudioContext = function (a) {
	return {$: 'InitAudioContext', a: a};
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $MartinSStewart$elm_audio$Audio$BufferId = function (a) {
	return {$: 'BufferId', a: a};
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $MartinSStewart$elm_audio$Audio$decodeBufferId = A2($elm$json$Json$Decode$map, $MartinSStewart$elm_audio$Audio$BufferId, $elm$json$Json$Decode$int);
var $MartinSStewart$elm_audio$Audio$FailedToDecode = {$: 'FailedToDecode'};
var $MartinSStewart$elm_audio$Audio$NetworkError = {$: 'NetworkError'};
var $MartinSStewart$elm_audio$Audio$UnknownError = {$: 'UnknownError'};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $MartinSStewart$elm_audio$Audio$decodeLoadError = A2(
	$elm$json$Json$Decode$andThen,
	function (value) {
		switch (value) {
			case 'NetworkError':
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$NetworkError);
			case 'MediaDecodeAudioDataUnknownContentType':
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$FailedToDecode);
			case 'DOMException: The buffer passed to decodeAudioData contains an unknown content type.':
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$FailedToDecode);
			default:
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$UnknownError);
		}
	},
	$elm$json$Json$Decode$string);
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $ianmackenzie$elm_units$Duration$seconds = function (numSeconds) {
	return $ianmackenzie$elm_units$Quantity$Quantity(numSeconds);
};
var $MartinSStewart$elm_audio$Audio$decodeFromJSMsg = A2(
	$elm$json$Json$Decode$andThen,
	function (value) {
		switch (value) {
			case 0:
				return A3(
					$elm$json$Json$Decode$map2,
					F2(
						function (requestId, error) {
							return $MartinSStewart$elm_audio$Audio$AudioLoadFailed(
								{error: error, requestId: requestId});
						}),
					A2($elm$json$Json$Decode$field, 'requestId', $elm$json$Json$Decode$int),
					A2($elm$json$Json$Decode$field, 'error', $MartinSStewart$elm_audio$Audio$decodeLoadError));
			case 1:
				return A4(
					$elm$json$Json$Decode$map3,
					F3(
						function (requestId, bufferId, duration) {
							return $MartinSStewart$elm_audio$Audio$AudioLoadSuccess(
								{
									bufferId: bufferId,
									duration: $ianmackenzie$elm_units$Duration$seconds(duration),
									requestId: requestId
								});
						}),
					A2($elm$json$Json$Decode$field, 'requestId', $elm$json$Json$Decode$int),
					A2($elm$json$Json$Decode$field, 'bufferId', $MartinSStewart$elm_audio$Audio$decodeBufferId),
					A2($elm$json$Json$Decode$field, 'durationInSeconds', $elm$json$Json$Decode$float));
			case 2:
				return A2(
					$elm$json$Json$Decode$map,
					function (samplesPerSecond) {
						return $MartinSStewart$elm_audio$Audio$InitAudioContext(
							{samplesPerSecond: samplesPerSecond});
					},
					A2($elm$json$Json$Decode$field, 'samplesPerSecond', $elm$json$Json$Decode$int));
			default:
				return $elm$json$Json$Decode$succeed(
					$MartinSStewart$elm_audio$Audio$JsonParseError(
						{
							error: 'Type ' + ($elm$core$String$fromInt(value) + ' not handled.')
						}));
		}
	},
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$int));
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $MartinSStewart$elm_audio$Audio$fromJSPortSub = function (json) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $MartinSStewart$elm_audio$Audio$decodeFromJSMsg, json);
	if (_v0.$ === 'Ok') {
		var value = _v0.a;
		return $MartinSStewart$elm_audio$Audio$FromJSMsg(value);
	} else {
		var error = _v0.a;
		return $MartinSStewart$elm_audio$Audio$FromJSMsg(
			$MartinSStewart$elm_audio$Audio$JsonParseError(
				{
					error: $elm$json$Json$Decode$errorToString(error)
				}));
	}
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $MartinSStewart$elm_audio$Audio$subscriptions = F2(
	function (app, _v0) {
		var model = _v0.a;
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					A2(
					$elm$core$Platform$Sub$map,
					$MartinSStewart$elm_audio$Audio$UserMsg,
					A2(
						app.subscriptions,
						$MartinSStewart$elm_audio$Audio$audioData(
							$MartinSStewart$elm_audio$Audio$Model(model)),
						model.userModel)),
					app.audioPort.fromJS($MartinSStewart$elm_audio$Audio$fromJSPortSub)
				]));
	});
var $MartinSStewart$elm_audio$Audio$File = function (a) {
	return {$: 'File', a: a};
};
var $MartinSStewart$elm_audio$Audio$flip = F3(
	function (func, a, b) {
		return A2(func, b, a);
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $mgold$elm_nonempty_list$List$Nonempty$head = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	return x;
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $MartinSStewart$elm_audio$Audio$rawBufferId = function (_v0) {
	var bufferId = _v0.a;
	return bufferId;
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $MartinSStewart$elm_audio$Audio$updateHelper = F4(
	function (audioPort, audioFunc, userUpdate, _v0) {
		var model = _v0.a;
		var audioData_ = $MartinSStewart$elm_audio$Audio$audioData(
			$MartinSStewart$elm_audio$Audio$Model(model));
		var _v1 = A2(userUpdate, audioData_, model.userModel);
		var newUserModel = _v1.a;
		var userCmd = _v1.b;
		var audioCmds = _v1.c;
		var _v2 = A3(
			$MartinSStewart$elm_audio$Audio$diffAudioState,
			model.nodeGroupIdCounter,
			model.audioState,
			A2(audioFunc, audioData_, newUserModel));
		var audioState = _v2.a;
		var newNodeGroupIdCounter = _v2.b;
		var json = _v2.c;
		var newModel = $MartinSStewart$elm_audio$Audio$Model(
			_Utils_update(
				model,
				{audioState: audioState, nodeGroupIdCounter: newNodeGroupIdCounter, userModel: newUserModel}));
		var _v3 = A2($MartinSStewart$elm_audio$Audio$encodeAudioCmd, newModel, audioCmds);
		var newModel2 = _v3.a;
		var audioRequests = _v3.b;
		var portMessage = $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'audio',
					A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, json)),
					_Utils_Tuple2('audioCmds', audioRequests)
				]));
		return _Utils_Tuple2(
			newModel2,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						A2($elm$core$Platform$Cmd$map, $MartinSStewart$elm_audio$Audio$UserMsg, userCmd),
						audioPort(portMessage)
					])));
	});
var $MartinSStewart$elm_audio$Audio$update = F3(
	function (app, msg, _v0) {
		var model = _v0.a;
		if (msg.$ === 'UserMsg') {
			var userMsg = msg.a;
			return A4(
				$MartinSStewart$elm_audio$Audio$updateHelper,
				app.audioPort.toJS,
				app.audio,
				A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
				$MartinSStewart$elm_audio$Audio$Model(model));
		} else {
			var response = msg.a;
			switch (response.$) {
				case 'AudioLoadSuccess':
					var requestId = response.a.requestId;
					var bufferId = response.a.bufferId;
					var duration = response.a.duration;
					var _v3 = A2($elm$core$Dict$get, requestId, model.pendingRequests);
					if (_v3.$ === 'Just') {
						var pendingRequest = _v3.a;
						var sourceData = A3(
							$elm$core$Dict$insert,
							$MartinSStewart$elm_audio$Audio$rawBufferId(bufferId),
							{duration: duration},
							model.sourceData);
						var source = $elm$core$Result$Ok(
							$MartinSStewart$elm_audio$Audio$File(
								{bufferId: bufferId}));
						var maybeUserMsg = A2(
							$MartinSStewart$elm_audio$Audio$find,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Tuple$first,
								$elm$core$Basics$eq(source)),
							$mgold$elm_nonempty_list$List$Nonempty$toList(pendingRequest.userMsg));
						if (maybeUserMsg.$ === 'Just') {
							var _v5 = maybeUserMsg.a;
							var userMsg = _v5.b;
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests),
											sourceData: sourceData
										})));
						} else {
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2(
									$MartinSStewart$elm_audio$Audio$flip,
									app.update,
									$mgold$elm_nonempty_list$List$Nonempty$head(pendingRequest.userMsg).b),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests),
											sourceData: sourceData
										})));
						}
					} else {
						return _Utils_Tuple2(
							$MartinSStewart$elm_audio$Audio$Model(model),
							$elm$core$Platform$Cmd$none);
					}
				case 'AudioLoadFailed':
					var requestId = response.a.requestId;
					var error = response.a.error;
					var _v6 = A2($elm$core$Dict$get, requestId, model.pendingRequests);
					if (_v6.$ === 'Just') {
						var pendingRequest = _v6.a;
						var a = $elm$core$Result$Err(error);
						var b = A2(
							$MartinSStewart$elm_audio$Audio$find,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Tuple$first,
								$elm$core$Basics$eq(a)),
							$mgold$elm_nonempty_list$List$Nonempty$toList(pendingRequest.userMsg));
						if (b.$ === 'Just') {
							var _v8 = b.a;
							var userMsg = _v8.b;
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests)
										})));
						} else {
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2(
									$MartinSStewart$elm_audio$Audio$flip,
									app.update,
									$mgold$elm_nonempty_list$List$Nonempty$head(pendingRequest.userMsg).b),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests)
										})));
						}
					} else {
						return _Utils_Tuple2(
							$MartinSStewart$elm_audio$Audio$Model(model),
							$elm$core$Platform$Cmd$none);
					}
				case 'InitAudioContext':
					var samplesPerSecond = response.a.samplesPerSecond;
					return _Utils_Tuple2(
						$MartinSStewart$elm_audio$Audio$Model(
							_Utils_update(
								model,
								{
									samplesPerSecond: $elm$core$Maybe$Just(samplesPerSecond)
								})),
						$elm$core$Platform$Cmd$none);
				default:
					var error = response.a.error;
					return _Utils_Tuple2(
						$MartinSStewart$elm_audio$Audio$Model(model),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $ianmackenzie$elm_units$Duration$milliseconds = function (numMilliseconds) {
	return $ianmackenzie$elm_units$Duration$seconds(0.001 * numMilliseconds);
};
var $MartinSStewart$elm_audio$Audio$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $MartinSStewart$elm_audio$Audio$offsetBy = F2(
	function (offset_, audio_) {
		return $MartinSStewart$elm_audio$Audio$Effect(
			{
				audio: audio_,
				effectType: $MartinSStewart$elm_audio$Audio$Offset(offset_)
			});
	});
var $MartinSStewart$elm_audio$Audio$withAudioOffset = function (app) {
	return _Utils_update(
		app,
		{
			audio: F2(
				function (audioData_, model) {
					return A2(
						$MartinSStewart$elm_audio$Audio$offsetBy,
						$ianmackenzie$elm_units$Duration$milliseconds(50),
						A2(app.audio, audioData_, model));
				})
		});
};
var $MartinSStewart$elm_audio$Audio$elementWithAudio = A2(
	$elm$core$Basics$composeR,
	$MartinSStewart$elm_audio$Audio$withAudioOffset,
	function (app) {
		return $elm$browser$Browser$element(
			{
				init: A2(
					$elm$core$Basics$composeR,
					app.init,
					A2($MartinSStewart$elm_audio$Audio$initHelper, app.audioPort.toJS, app.audio)),
				subscriptions: $MartinSStewart$elm_audio$Audio$subscriptions(app),
				update: $MartinSStewart$elm_audio$Audio$update(app),
				view: function (model) {
					return A2(
						$elm$html$Html$map,
						$MartinSStewart$elm_audio$Audio$UserMsg,
						A2(
							app.view,
							$MartinSStewart$elm_audio$Audio$audioData(model),
							$MartinSStewart$elm_audio$Audio$getUserModel(model)));
				}
			});
	});
var $author$project$Main$HomeScreen = function (a) {
	return {$: 'HomeScreen', a: a};
};
var $author$project$Main$Setup = {$: 'Setup'};
var $author$project$Types$Tick = function (a) {
	return {$: 'Tick', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioCmdGroup = function (a) {
	return {$: 'AudioCmdGroup', a: a};
};
var $MartinSStewart$elm_audio$Audio$cmdNone = $MartinSStewart$elm_audio$Audio$AudioCmdGroup(_List_Nil);
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $author$project$Main$encodeVideoEvent = function (event) {
	switch (event.$) {
		case 'Setup':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('setup'))
					]));
		case 'Play':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('play'))
					]));
		case 'Pause':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('pause'))
					]));
		case 'Stop':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('stop'))
					]));
		case 'Restart':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('restart'))
					]));
		case 'Mute':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('mute'))
					]));
		case 'Unmute':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('unmute'))
					]));
		case 'VolumeDown':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('volumedown'))
					]));
		case 'VolumeUp':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('volumeup'))
					]));
		default:
			var position = event.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('seekto')),
						_Utils_Tuple2(
						'position',
						$elm$json$Json$Encode$float(position))
					]));
	}
};
var $author$project$Main$videoEventStream = _Platform_outgoingPort('videoEventStream', $elm$core$Basics$identity);
var $author$project$Main$pushVideoEvent = function (event) {
	return $author$project$Main$videoEventStream(
		$author$project$Main$encodeVideoEvent(event));
};
var $author$project$Types$DataReceived = function (a) {
	return {$: 'DataReceived', a: a};
};
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $elm$http$Http$Header = F2(
	function (a, b) {
		return {$: 'Header', a: a, b: b};
	});
var $elm$http$Http$header = $elm$http$Http$Header;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $author$project$Utils$twelve = _List_fromArray(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
var $elm_community$list_extra$List$Extra$zip = $elm$core$List$map2($elm$core$Tuple$pair);
var $author$project$Database$f = A2(
	$elm$core$Basics$composeL,
	$elm$core$Dict$fromList,
	$elm_community$list_extra$List$Extra$zip($author$project$Utils$twelve));
var $author$project$Utils$cmpmb = F2(
	function (a, b) {
		var _v0 = _Utils_Tuple2(a, b);
		if (_v0.a.$ === 'Nothing') {
			var _v1 = _v0.a;
			return $elm$core$Basics$LT;
		} else {
			if (_v0.b.$ === 'Nothing') {
				var _v2 = _v0.b;
				return $elm$core$Basics$GT;
			} else {
				var x = _v0.a.a;
				var y = _v0.b.a;
				return A2($elm$core$Basics$compare, x, y);
			}
		}
	});
var $author$project$Utils$on = F4(
	function (bf, uf, x, y) {
		return A2(
			bf,
			uf(x),
			uf(y));
	});
var $elm$core$List$sortWith = _List_sortWith;
var $author$project$Database$maakvolgorde = A2(
	$elm$core$Basics$composeL,
	A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			A2(
				$elm$core$Basics$composeL,
				$elm$core$Dict$fromList,
				$elm_community$list_extra$List$Extra$zip($author$project$Utils$twelve)),
			$elm$core$List$map($elm$core$Tuple$first)),
		$elm$core$List$sortWith(
			A2($author$project$Utils$on, $author$project$Utils$cmpmb, $elm$core$Tuple$second))),
	$elm_community$list_extra$List$Extra$zip($author$project$Utils$twelve));
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $elm_community$list_extra$List$Extra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $elm$core$String$toFloat = _String_toFloat;
var $elm_community$maybe_extra$Maybe$Extra$cons = F2(
	function (item, list) {
		if (item.$ === 'Just') {
			var v = item.a;
			return A2($elm$core$List$cons, v, list);
		} else {
			return list;
		}
	});
var $elm_community$maybe_extra$Maybe$Extra$values = A2($elm$core$List$foldr, $elm_community$maybe_extra$Maybe$Extra$cons, _List_Nil);
var $author$project$Database$tovraagsheet = A2(
	$elm$core$Basics$composeR,
	$elm$core$List$tail,
	$elm$core$Maybe$map(
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$map(
				function (row) {
					var _v0 = A2($elm_community$list_extra$List$Extra$splitAt, 27, row);
					if (_v0.a.b && _v0.a.b.b) {
						var _v1 = _v0.a;
						var naam = _v1.a;
						var _v2 = _v1.b;
						var woord = _v2.a;
						var vragenantwoordenvolgorde = _v0.b;
						var _v3 = A2($elm_community$list_extra$List$Extra$splitAt, 12, vragenantwoordenvolgorde);
						var vragen = _v3.a;
						var antwoordenvolgorde = _v3.b;
						var _v4 = A2($elm_community$list_extra$List$Extra$splitAt, 12, antwoordenvolgorde);
						var antwoorden = _v4.a;
						var volgorde = _v4.b;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(
								naam,
								{
									antwoorden: $author$project$Database$f(antwoorden),
									paardsprongrng: function () {
										var _v5 = A2(
											$elm$core$List$map,
											A2(
												$elm$core$Basics$composeL,
												$elm$core$String$toFloat,
												A2($elm$core$String$replace, ',', '.')),
											volgorde);
										if (((_v5.b && (_v5.a.$ === 'Just')) && _v5.b.b) && (_v5.b.a.$ === 'Just')) {
											var n1 = _v5.a.a;
											var _v6 = _v5.b;
											var n2 = _v6.a.a;
											return _Utils_Tuple2(
												(n1 < 0.5) ? (-1) : 1,
												$elm$core$Basics$ceiling(8 * n2));
										} else {
											return _Utils_Tuple2(1, 8);
										}
									}(),
									volgorde: $author$project$Database$maakvolgorde(
										A2(
											$elm$core$List$map,
											A2(
												$elm$core$Basics$composeL,
												$elm$core$String$toFloat,
												A2($elm$core$String$replace, ',', '.')),
											volgorde)),
									vragen: $author$project$Database$f(vragen),
									woord: woord
								}));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}),
			A2($elm$core$Basics$composeR, $elm_community$maybe_extra$Maybe$Extra$values, $elm$core$Dict$fromList))));
var $author$project$Database$parse = A2(
	$elm$json$Json$Decode$field,
	'values',
	A2(
		$elm$json$Json$Decode$map,
		$author$project$Database$tovraagsheet,
		$elm$json$Json$Decode$list(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $author$project$Database$url = function (sheet) {
	return 'https://sheets.googleapis.com/v4/spreadsheets/1_CbSNxoK-esYMFhj2kq7c7QIF6sJxCs1caYO8NgZso0/values/' + sheet;
};
var $author$project$Database$readSpreadsheet = function (oauth) {
	return $elm$http$Http$request(
		{
			body: $elm$http$Http$emptyBody,
			expect: A2($elm$http$Http$expectJson, $author$project$Types$DataReceived, $author$project$Database$parse),
			headers: _List_fromArray(
				[
					A2($elm$http$Http$header, 'Authorization', 'Bearer ' + oauth)
				]),
			method: 'GET',
			timeout: $elm$core$Maybe$Nothing,
			tracker: $elm$core$Maybe$Nothing,
			url: $author$project$Database$url('mensen')
		});
};
var $author$project$Main$staatdespreadsheetaan = true;
var $author$project$Main$init = function (oauthtoken) {
	return _Utils_Tuple3(
		$author$project$Main$HomeScreen(
			{
				introstart: $elm$core$Maybe$Nothing,
				muziek: {faal: $elm$core$Maybe$Nothing, psbel: $elm$core$Maybe$Nothing, psmuziek: $elm$core$Maybe$Nothing, raden: $elm$core$Maybe$Nothing, tik: $elm$core$Maybe$Nothing, tune: $elm$core$Maybe$Nothing, wikibel: $elm$core$Maybe$Nothing},
				now: $elm$time$Time$millisToPosix(0),
				oauth: oauthtoken,
				thesheet: $elm$core$Maybe$Nothing,
				username: '',
				waiting: false
			}),
		$elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					A2($elm$core$Task$perform, $author$project$Types$Tick, $elm$time$Time$now),
					$author$project$Main$pushVideoEvent($author$project$Main$Setup),
					$author$project$Main$staatdespreadsheetaan ? $author$project$Database$readSpreadsheet(oauthtoken) : $elm$core$Platform$Cmd$none
				])),
		$MartinSStewart$elm_audio$Audio$cmdNone);
};
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 'Every', a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {processes: processes, taggers: taggers};
	});
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 'Nothing') {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.processes;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(_Utils_Tuple0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.taggers);
		if (_v0.$ === 'Nothing') {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $author$project$Main$subscriptions = F2(
	function (_v0, _v1) {
		return A2($elm$time$Time$every, 50, $author$project$Types$Tick);
	});
var $author$project$Main$Afrekenen = function (a) {
	return {$: 'Afrekenen', a: a};
};
var $author$project$Main$Highscore = function (a) {
	return {$: 'Highscore', a: a};
};
var $author$project$Main$InGame = function (a) {
	return {$: 'InGame', a: a};
};
var $author$project$Main$Nakijken = function (a) {
	return {$: 'Nakijken', a: a};
};
var $author$project$Main$Play = {$: 'Play'};
var $author$project$Types$StartStopWiki = {$: 'StartStopWiki'};
var $author$project$Types$Submit = {$: 'Submit'};
var $author$project$Afrekenen$Verlies = function (a) {
	return {$: 'Verlies', a: a};
};
var $author$project$Types$Vijftien = {$: 'Vijftien'};
var $author$project$Main$VolumeDown = {$: 'VolumeDown'};
var $author$project$Afrekenen$Win = function (a) {
	return {$: 'Win', a: a};
};
var $author$project$Letters$Wit = {$: 'Wit'};
var $author$project$Main$Woordraden = function (a) {
	return {$: 'Woordraden', a: a};
};
var $author$project$Types$UserAdded = function (a) {
	return {$: 'UserAdded', a: a};
};
var $author$project$Database$adduserjson = function (name) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'range',
				$elm$json$Json$Encode$string('usernames!A1')),
				_Utils_Tuple2(
				'majorDimension',
				$elm$json$Json$Encode$string('ROWS')),
				_Utils_Tuple2(
				'values',
				A2(
					$elm$json$Json$Encode$list,
					function (x) {
						return A2(
							$elm$json$Json$Encode$list,
							$elm$json$Json$Encode$string,
							_List_fromArray(
								[x]));
					},
					_List_fromArray(
						[name])))
			]));
};
var $elm$http$Http$expectBytesResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'arraybuffer',
			_Http_toDataView,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$expectWhatever = function (toMsg) {
	return A2(
		$elm$http$Http$expectBytesResponse,
		toMsg,
		$elm$http$Http$resolve(
			function (_v0) {
				return $elm$core$Result$Ok(_Utils_Tuple0);
			}));
};
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $author$project$Database$adduser = F2(
	function (name, oauth) {
		return $elm$http$Http$request(
			{
				body: $elm$http$Http$jsonBody(
					$author$project$Database$adduserjson(name)),
				expect: $elm$http$Http$expectWhatever($author$project$Types$UserAdded),
				headers: _List_fromArray(
					[
						A2($elm$http$Http$header, 'Authorization', 'Bearer ' + oauth)
					]),
				method: 'POST',
				timeout: $elm$core$Maybe$Nothing,
				tracker: $elm$core$Maybe$Nothing,
				url: $author$project$Database$url('usernames!A1:append?valueInputOption=RAW')
			});
	});
var $MartinSStewart$elm_audio$Audio$cmdBatch = function (audioCmds) {
	return $MartinSStewart$elm_audio$Audio$AudioCmdGroup(audioCmds);
};
var $author$project$Main$confetti = _Platform_outgoingPort('confetti', $elm$core$Basics$identity);
var $author$project$Types$NaarWoordraden = {$: 'NaarWoordraden'};
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Basics$not = _Basics_not;
var $author$project$Hoofdspel$hoofdupdate = F2(
	function (msg, status) {
		switch (msg.$) {
			case 'Tick':
				var newtime = msg.a;
				var nieuwetik = function () {
					var _v2 = status.recentstetik;
					if (_v2.$ === 'Nothing') {
						return true;
					} else {
						var rt = _v2.a;
						return ($elm$time$Time$posixToMillis(status.currentTime) - $elm$time$Time$posixToMillis(rt)) >= 2000;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						status,
						{
							currentTime: newtime,
							punten: (status.searching && nieuwetik) ? (status.punten - 1) : status.punten,
							recentstetik: (status.searching && nieuwetik) ? $elm$core$Maybe$Just(status.currentTime) : status.recentstetik
						}),
					(_Utils_cmp(
						$elm$time$Time$posixToMillis(status.timeTheGameEnds) - $elm$time$Time$posixToMillis(status.currentTime),
						(2 * 60) * 1000) < 1) ? A2(
						$elm$core$Task$perform,
						function (_v1) {
							return $author$project$Types$NaarWoordraden;
						},
						$elm$core$Task$succeed(_Utils_Tuple0)) : $elm$core$Platform$Cmd$none);
			case 'StartStopWiki':
				return _Utils_Tuple2(
					_Utils_update(
						status,
						{
							recentstebel: status.searching ? $elm$core$Maybe$Just(status.currentTime) : $elm$core$Maybe$Nothing,
							searched: A2($elm$core$Set$insert, status.questionNumber, status.searched),
							searching: !status.searching
						}),
					$elm$core$Platform$Cmd$none);
			case 'Answer':
				var answer = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						status,
						{
							gegevenantwoorden: A3($elm$core$Dict$insert, status.questionNumber, answer, status.gegevenantwoorden)
						}),
					$elm$core$Platform$Cmd$none);
			case 'PreviousQ':
				return _Utils_Tuple2(
					_Utils_update(
						status,
						{questionNumber: status.questionNumber - 1}),
					$elm$core$Platform$Cmd$none);
			case 'NextQ':
				return (status.questionNumber === 7) ? _Utils_Tuple2(
					_Utils_update(
						status,
						{
							lastQuestion: A2($elm$core$Basics$max, status.lastQuestion, status.questionNumber + 1),
							paardensprongbegintijd: $elm$core$Maybe$Just(status.currentTime),
							questionNumber: 8
						}),
					$elm$core$Platform$Cmd$none) : _Utils_Tuple2(
					_Utils_update(
						status,
						{
							lastQuestion: A2($elm$core$Basics$max, status.lastQuestion, status.questionNumber + 1),
							questionNumber: status.questionNumber + 1
						}),
					$elm$core$Platform$Cmd$none);
			case 'Logged':
				var i = msg.a;
				if (i.$ === 'Ok') {
					var ix = i.a;
					return _Utils_Tuple2(
						_Utils_update(
							status,
							{logindex: ix}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(status, $elm$core$Platform$Cmd$none);
				}
			default:
				return _Utils_Tuple2(status, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$intro = true;
var $MartinSStewart$elm_audio$Audio$AudioLoadRequest = function (a) {
	return {$: 'AudioLoadRequest', a: a};
};
var $MartinSStewart$elm_audio$Audio$ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage = {$: 'ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage'};
var $MartinSStewart$elm_audio$Audio$enumeratedResults = A2(
	$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
	$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage),
	_Utils_ap(
		_List_fromArray(
			[
				$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$FailedToDecode),
				$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$NetworkError),
				$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$UnknownError)
			]),
		A2(
			$elm$core$List$map,
			function (bufferId) {
				return $elm$core$Result$Ok(
					$MartinSStewart$elm_audio$Audio$File(
						{
							bufferId: $MartinSStewart$elm_audio$Audio$BufferId(bufferId)
						}));
			},
			A2($elm$core$List$range, 0, 1000))));
var $MartinSStewart$elm_audio$Audio$loadAudio = F2(
	function (userMsg, url) {
		return $MartinSStewart$elm_audio$Audio$AudioLoadRequest(
			{
				audioUrl: url,
				userMsg: A2(
					$mgold$elm_nonempty_list$List$Nonempty$map,
					function (results) {
						return _Utils_Tuple2(
							results,
							userMsg(results));
					},
					$MartinSStewart$elm_audio$Audio$enumeratedResults)
			});
	});
var $author$project$Types$Logged = function (a) {
	return {$: 'Logged', a: a};
};
var $waratuman$elm_iso8601_date_strings$Iso8601$fromMonth = function (month) {
	switch (month.$) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.start, posixMinutes) < 0) {
					return posixMinutes + era.offset;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2($elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		day: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		month: month,
		year: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).day;
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			24,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var $elm$time$Time$toMillis = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			1000,
			$elm$time$Time$posixToMillis(time));
	});
var $elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2($elm$time$Time$toAdjustedMinutes, zone, time));
	});
var $elm$time$Time$Apr = {$: 'Apr'};
var $elm$time$Time$Aug = {$: 'Aug'};
var $elm$time$Time$Dec = {$: 'Dec'};
var $elm$time$Time$Feb = {$: 'Feb'};
var $elm$time$Time$Jan = {$: 'Jan'};
var $elm$time$Time$Jul = {$: 'Jul'};
var $elm$time$Time$Jun = {$: 'Jun'};
var $elm$time$Time$Mar = {$: 'Mar'};
var $elm$time$Time$May = {$: 'May'};
var $elm$time$Time$Nov = {$: 'Nov'};
var $elm$time$Time$Oct = {$: 'Oct'};
var $elm$time$Time$Sep = {$: 'Sep'};
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).month;
		switch (_v0) {
			case 1:
				return $elm$time$Time$Jan;
			case 2:
				return $elm$time$Time$Feb;
			case 3:
				return $elm$time$Time$Mar;
			case 4:
				return $elm$time$Time$Apr;
			case 5:
				return $elm$time$Time$May;
			case 6:
				return $elm$time$Time$Jun;
			case 7:
				return $elm$time$Time$Jul;
			case 8:
				return $elm$time$Time$Aug;
			case 9:
				return $elm$time$Time$Sep;
			case 10:
				return $elm$time$Time$Oct;
			case 11:
				return $elm$time$Time$Nov;
			default:
				return $elm$time$Time$Dec;
		}
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $waratuman$elm_iso8601_date_strings$Iso8601$toPaddedString = F2(
	function (digits, time) {
		return A3(
			$elm$core$String$padLeft,
			digits,
			_Utils_chr('0'),
			$elm$core$String$fromInt(time));
	});
var $elm$time$Time$toSecond = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				1000));
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).year;
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $waratuman$elm_iso8601_date_strings$Iso8601$fromTime = function (time) {
	return A2(
		$waratuman$elm_iso8601_date_strings$Iso8601$toPaddedString,
		4,
		A2($elm$time$Time$toYear, $elm$time$Time$utc, time)) + ('-' + (A2(
		$waratuman$elm_iso8601_date_strings$Iso8601$toPaddedString,
		2,
		$waratuman$elm_iso8601_date_strings$Iso8601$fromMonth(
			A2($elm$time$Time$toMonth, $elm$time$Time$utc, time))) + ('-' + (A2(
		$waratuman$elm_iso8601_date_strings$Iso8601$toPaddedString,
		2,
		A2($elm$time$Time$toDay, $elm$time$Time$utc, time)) + ('T' + (A2(
		$waratuman$elm_iso8601_date_strings$Iso8601$toPaddedString,
		2,
		A2($elm$time$Time$toHour, $elm$time$Time$utc, time)) + (':' + (A2(
		$waratuman$elm_iso8601_date_strings$Iso8601$toPaddedString,
		2,
		A2($elm$time$Time$toMinute, $elm$time$Time$utc, time)) + (':' + (A2(
		$waratuman$elm_iso8601_date_strings$Iso8601$toPaddedString,
		2,
		A2($elm$time$Time$toSecond, $elm$time$Time$utc, time)) + ('.' + (A2(
		$waratuman$elm_iso8601_date_strings$Iso8601$toPaddedString,
		3,
		A2($elm$time$Time$toMillis, $elm$time$Time$utc, time)) + 'Z'))))))))))));
};
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $author$project$Database$logstartgamejson = F3(
	function (va, naam, now) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'range',
					$elm$json$Json$Encode$string('log!A1:P1')),
					_Utils_Tuple2(
					'majorDimension',
					$elm$json$Json$Encode$string('ROWS')),
					_Utils_Tuple2(
					'values',
					A2(
						$elm$json$Json$Encode$list,
						function (x) {
							return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, x);
						},
						_List_fromArray(
							[
								_Utils_ap(
								_List_fromArray(
									[
										naam,
										$waratuman$elm_iso8601_date_strings$Iso8601$fromTime(now),
										'',
										va.woord
									]),
								$elm$core$Dict$values(
									function () {
										var _v0 = A2($elm$core$Dict$get, 8, va.antwoorden);
										if (_v0.$ === 'Nothing') {
											return va.vragen;
										} else {
											var p = _v0.a;
											return A3($elm$core$Dict$insert, 8, p, va.vragen);
										}
									}()))
							])))
				]));
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Database$parselogfeedback = A2(
	$elm$json$Json$Decode$field,
	'updates',
	A2(
		$elm$json$Json$Decode$field,
		'updatedRange',
		A2(
			$elm$json$Json$Decode$map,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$String$split(':'),
				A2(
					$elm$core$Basics$composeR,
					$elm$core$List$tail,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$andThen($elm$core$List$head),
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Maybe$map(
								function (x) {
									return A3(
										$elm$core$String$slice,
										1,
										$elm$core$String$length(x),
										x);
								}),
							$elm$core$Maybe$andThen($elm$core$String$toInt))))),
			$elm$json$Json$Decode$string)));
var $author$project$Database$logstartgame = F4(
	function (va, naam, now, oauth) {
		return $elm$http$Http$request(
			{
				body: $elm$http$Http$jsonBody(
					A3($author$project$Database$logstartgamejson, va, naam, now)),
				expect: A2($elm$http$Http$expectJson, $author$project$Types$Logged, $author$project$Database$parselogfeedback),
				headers: _List_fromArray(
					[
						A2($elm$http$Http$header, 'Authorization', 'Bearer ' + oauth)
					]),
				method: 'POST',
				timeout: $elm$core$Maybe$Nothing,
				tracker: $elm$core$Maybe$Nothing,
				url: $author$project$Database$url('log!A1:P1:append?valueInputOption=USER_ENTERED')
			});
	});
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $author$project$Letters$Opgezocht = function (a) {
	return {$: 'Opgezocht', a: a};
};
var $author$project$Letters$Streepje = {$: 'Streepje'};
var $author$project$Letters$UitHetHoofd = function (a) {
	return {$: 'UitHetHoofd', a: a};
};
var $author$project$Letters$Zwart = {$: 'Zwart'};
var $elm_community$basics_extra$Basics$Extra$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$core$String$filter = _String_filter;
var $elm$core$String$foldl = _String_foldl;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $kuon$elm_string_normalize$String$Normalize$Diacritics$lookupList = _List_fromArray(
	[
		_Utils_Tuple2(
		_Utils_chr('Ⓐ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ａ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('À'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Á'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Â'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ầ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ấ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ẫ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ẩ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ã'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ā'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ă'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ằ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ắ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ẵ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ẳ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ȧ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ǡ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ä'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ǟ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ả'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Å'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ǻ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ǎ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ȁ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ȃ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ạ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ậ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ặ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ḁ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ą'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ⱥ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ɐ'),
		'A'),
		_Utils_Tuple2(
		_Utils_chr('Ꜳ'),
		'AA'),
		_Utils_Tuple2(
		_Utils_chr('Æ'),
		'AE'),
		_Utils_Tuple2(
		_Utils_chr('Ǽ'),
		'AE'),
		_Utils_Tuple2(
		_Utils_chr('Ǣ'),
		'AE'),
		_Utils_Tuple2(
		_Utils_chr('Ꜵ'),
		'AO'),
		_Utils_Tuple2(
		_Utils_chr('Ꜷ'),
		'AU'),
		_Utils_Tuple2(
		_Utils_chr('Ꜹ'),
		'AV'),
		_Utils_Tuple2(
		_Utils_chr('Ꜻ'),
		'AV'),
		_Utils_Tuple2(
		_Utils_chr('Ꜽ'),
		'AY'),
		_Utils_Tuple2(
		_Utils_chr('Ⓑ'),
		'B'),
		_Utils_Tuple2(
		_Utils_chr('Ｂ'),
		'B'),
		_Utils_Tuple2(
		_Utils_chr('Ḃ'),
		'B'),
		_Utils_Tuple2(
		_Utils_chr('Ḅ'),
		'B'),
		_Utils_Tuple2(
		_Utils_chr('Ḇ'),
		'B'),
		_Utils_Tuple2(
		_Utils_chr('Ƀ'),
		'B'),
		_Utils_Tuple2(
		_Utils_chr('Ƃ'),
		'B'),
		_Utils_Tuple2(
		_Utils_chr('Ɓ'),
		'B'),
		_Utils_Tuple2(
		_Utils_chr('Ⓒ'),
		'C'),
		_Utils_Tuple2(
		_Utils_chr('Ｃ'),
		'C'),
		_Utils_Tuple2(
		_Utils_chr('Ć'),
		'C'),
		_Utils_Tuple2(
		_Utils_chr('Ĉ'),
		'C'),
		_Utils_Tuple2(
		_Utils_chr('Ċ'),
		'C'),
		_Utils_Tuple2(
		_Utils_chr('Č'),
		'C'),
		_Utils_Tuple2(
		_Utils_chr('Ç'),
		'C'),
		_Utils_Tuple2(
		_Utils_chr('Ḉ'),
		'C'),
		_Utils_Tuple2(
		_Utils_chr('Ƈ'),
		'C'),
		_Utils_Tuple2(
		_Utils_chr('Ȼ'),
		'C'),
		_Utils_Tuple2(
		_Utils_chr('Ꜿ'),
		'C'),
		_Utils_Tuple2(
		_Utils_chr('Ⓓ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ｄ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ḋ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ď'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ḍ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ḑ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ḓ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ḏ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Đ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ƌ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ɗ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ɖ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ꝺ'),
		'D'),
		_Utils_Tuple2(
		_Utils_chr('Ǳ'),
		'DZ'),
		_Utils_Tuple2(
		_Utils_chr('Ǆ'),
		'DZ'),
		_Utils_Tuple2(
		_Utils_chr('ǲ'),
		'Dz'),
		_Utils_Tuple2(
		_Utils_chr('ǅ'),
		'Dz'),
		_Utils_Tuple2(
		_Utils_chr('Ⓔ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ｅ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('È'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('É'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ê'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ề'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ế'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ễ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ể'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ẽ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ē'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ḕ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ḗ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ĕ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ė'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ë'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ẻ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ě'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ȅ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ȇ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ẹ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ệ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ȩ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ḝ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ę'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ḙ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ḛ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ɛ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ǝ'),
		'E'),
		_Utils_Tuple2(
		_Utils_chr('Ⓕ'),
		'F'),
		_Utils_Tuple2(
		_Utils_chr('Ｆ'),
		'F'),
		_Utils_Tuple2(
		_Utils_chr('Ḟ'),
		'F'),
		_Utils_Tuple2(
		_Utils_chr('Ƒ'),
		'F'),
		_Utils_Tuple2(
		_Utils_chr('Ꝼ'),
		'F'),
		_Utils_Tuple2(
		_Utils_chr('Ⓖ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ｇ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ǵ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ĝ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ḡ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ğ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ġ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ǧ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ģ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ǥ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ɠ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ꞡ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ᵹ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ꝿ'),
		'G'),
		_Utils_Tuple2(
		_Utils_chr('Ⓗ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ｈ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ĥ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ḣ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ḧ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ȟ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ḥ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ḩ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ḫ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ħ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ⱨ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ⱶ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ɥ'),
		'H'),
		_Utils_Tuple2(
		_Utils_chr('Ⓘ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ｉ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ì'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Í'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Î'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ĩ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ī'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ĭ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('İ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ï'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ḯ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ỉ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ǐ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ȉ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ȋ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ị'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Į'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ḭ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ɨ'),
		'I'),
		_Utils_Tuple2(
		_Utils_chr('Ⓙ'),
		'J'),
		_Utils_Tuple2(
		_Utils_chr('Ｊ'),
		'J'),
		_Utils_Tuple2(
		_Utils_chr('Ĵ'),
		'J'),
		_Utils_Tuple2(
		_Utils_chr('Ɉ'),
		'J'),
		_Utils_Tuple2(
		_Utils_chr('Ⓚ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ｋ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ḱ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ǩ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ḳ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ķ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ḵ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ƙ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ⱪ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ꝁ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ꝃ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ꝅ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ꞣ'),
		'K'),
		_Utils_Tuple2(
		_Utils_chr('Ⓛ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ｌ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ŀ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ĺ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ľ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ḷ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ḹ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ļ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ḽ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ḻ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ł'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ƚ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ɫ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ⱡ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ꝉ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ꝇ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ꞁ'),
		'L'),
		_Utils_Tuple2(
		_Utils_chr('Ǉ'),
		'LJ'),
		_Utils_Tuple2(
		_Utils_chr('ǈ'),
		'Lj'),
		_Utils_Tuple2(
		_Utils_chr('Ⓜ'),
		'M'),
		_Utils_Tuple2(
		_Utils_chr('Ｍ'),
		'M'),
		_Utils_Tuple2(
		_Utils_chr('Ḿ'),
		'M'),
		_Utils_Tuple2(
		_Utils_chr('Ṁ'),
		'M'),
		_Utils_Tuple2(
		_Utils_chr('Ṃ'),
		'M'),
		_Utils_Tuple2(
		_Utils_chr('Ɱ'),
		'M'),
		_Utils_Tuple2(
		_Utils_chr('Ɯ'),
		'M'),
		_Utils_Tuple2(
		_Utils_chr('Ⓝ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ｎ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ǹ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ń'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ñ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ṅ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ň'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ṇ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ņ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ṋ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ṉ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ƞ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ɲ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ꞑ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ꞥ'),
		'N'),
		_Utils_Tuple2(
		_Utils_chr('Ǌ'),
		'NJ'),
		_Utils_Tuple2(
		_Utils_chr('ǋ'),
		'Nj'),
		_Utils_Tuple2(
		_Utils_chr('Ⓞ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ｏ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ò'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ó'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ô'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ồ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ố'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ỗ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ổ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Õ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ṍ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ȭ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ṏ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ō'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ṑ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ṓ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ŏ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ȯ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ȱ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ö'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ȫ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ỏ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ő'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ǒ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ȍ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ȏ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ơ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ờ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ớ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ỡ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ở'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ợ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ọ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ộ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ǫ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ǭ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ø'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ǿ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ɔ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ɵ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ꝋ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ꝍ'),
		'O'),
		_Utils_Tuple2(
		_Utils_chr('Ƣ'),
		'OI'),
		_Utils_Tuple2(
		_Utils_chr('Ꝏ'),
		'OO'),
		_Utils_Tuple2(
		_Utils_chr('Ȣ'),
		'OU'),
		_Utils_Tuple2(
		_Utils_chr('\u008C'),
		'OE'),
		_Utils_Tuple2(
		_Utils_chr('Œ'),
		'OE'),
		_Utils_Tuple2(
		_Utils_chr('\u009C'),
		'oe'),
		_Utils_Tuple2(
		_Utils_chr('œ'),
		'oe'),
		_Utils_Tuple2(
		_Utils_chr('Ⓟ'),
		'P'),
		_Utils_Tuple2(
		_Utils_chr('Ｐ'),
		'P'),
		_Utils_Tuple2(
		_Utils_chr('Ṕ'),
		'P'),
		_Utils_Tuple2(
		_Utils_chr('Ṗ'),
		'P'),
		_Utils_Tuple2(
		_Utils_chr('Ƥ'),
		'P'),
		_Utils_Tuple2(
		_Utils_chr('Ᵽ'),
		'P'),
		_Utils_Tuple2(
		_Utils_chr('Ꝑ'),
		'P'),
		_Utils_Tuple2(
		_Utils_chr('Ꝓ'),
		'P'),
		_Utils_Tuple2(
		_Utils_chr('Ꝕ'),
		'P'),
		_Utils_Tuple2(
		_Utils_chr('Ⓠ'),
		'Q'),
		_Utils_Tuple2(
		_Utils_chr('Ｑ'),
		'Q'),
		_Utils_Tuple2(
		_Utils_chr('Ꝗ'),
		'Q'),
		_Utils_Tuple2(
		_Utils_chr('Ꝙ'),
		'Q'),
		_Utils_Tuple2(
		_Utils_chr('Ɋ'),
		'Q'),
		_Utils_Tuple2(
		_Utils_chr('Ⓡ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ｒ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ŕ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ṙ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ř'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ȑ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ȓ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ṛ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ṝ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ŗ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ṟ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ɍ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ɽ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ꝛ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ꞧ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ꞃ'),
		'R'),
		_Utils_Tuple2(
		_Utils_chr('Ⓢ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ｓ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('ẞ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ś'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ṥ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ŝ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ṡ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Š'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ṧ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ṣ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ṩ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ș'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ş'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ȿ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ꞩ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ꞅ'),
		'S'),
		_Utils_Tuple2(
		_Utils_chr('Ⓣ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ｔ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ṫ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ť'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ṭ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ț'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ţ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ṱ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ṯ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ŧ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ƭ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ʈ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ⱦ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ꞇ'),
		'T'),
		_Utils_Tuple2(
		_Utils_chr('Ꜩ'),
		'TZ'),
		_Utils_Tuple2(
		_Utils_chr('Ⓤ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ｕ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ù'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ú'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Û'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ũ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ṹ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ū'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ṻ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ŭ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ü'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ǜ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ǘ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ǖ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ǚ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ủ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ů'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ű'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ǔ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ȕ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ȗ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ư'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ừ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ứ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ữ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ử'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ự'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ụ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ṳ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ų'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ṷ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ṵ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ʉ'),
		'U'),
		_Utils_Tuple2(
		_Utils_chr('Ⓥ'),
		'V'),
		_Utils_Tuple2(
		_Utils_chr('Ｖ'),
		'V'),
		_Utils_Tuple2(
		_Utils_chr('Ṽ'),
		'V'),
		_Utils_Tuple2(
		_Utils_chr('Ṿ'),
		'V'),
		_Utils_Tuple2(
		_Utils_chr('Ʋ'),
		'V'),
		_Utils_Tuple2(
		_Utils_chr('Ꝟ'),
		'V'),
		_Utils_Tuple2(
		_Utils_chr('Ʌ'),
		'V'),
		_Utils_Tuple2(
		_Utils_chr('Ꝡ'),
		'VY'),
		_Utils_Tuple2(
		_Utils_chr('Ⓦ'),
		'W'),
		_Utils_Tuple2(
		_Utils_chr('Ｗ'),
		'W'),
		_Utils_Tuple2(
		_Utils_chr('Ẁ'),
		'W'),
		_Utils_Tuple2(
		_Utils_chr('Ẃ'),
		'W'),
		_Utils_Tuple2(
		_Utils_chr('Ŵ'),
		'W'),
		_Utils_Tuple2(
		_Utils_chr('Ẇ'),
		'W'),
		_Utils_Tuple2(
		_Utils_chr('Ẅ'),
		'W'),
		_Utils_Tuple2(
		_Utils_chr('Ẉ'),
		'W'),
		_Utils_Tuple2(
		_Utils_chr('Ⱳ'),
		'W'),
		_Utils_Tuple2(
		_Utils_chr('Ⓧ'),
		'X'),
		_Utils_Tuple2(
		_Utils_chr('Ｘ'),
		'X'),
		_Utils_Tuple2(
		_Utils_chr('Ẋ'),
		'X'),
		_Utils_Tuple2(
		_Utils_chr('Ẍ'),
		'X'),
		_Utils_Tuple2(
		_Utils_chr('Ⓨ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ｙ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ỳ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ý'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ŷ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ỹ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ȳ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ẏ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ÿ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ỷ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ỵ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ƴ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ɏ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ỿ'),
		'Y'),
		_Utils_Tuple2(
		_Utils_chr('Ⓩ'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ｚ'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ź'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ẑ'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ż'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ž'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ẓ'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ẕ'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ƶ'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ȥ'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ɀ'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ⱬ'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('Ꝣ'),
		'Z'),
		_Utils_Tuple2(
		_Utils_chr('ⓐ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ａ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ẚ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('à'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('á'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('â'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ầ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ấ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ẫ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ẩ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ã'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ā'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ă'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ằ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ắ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ẵ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ẳ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ȧ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ǡ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ä'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ǟ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ả'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('å'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ǻ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ǎ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ȁ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ȃ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ạ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ậ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ặ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ḁ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ą'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ⱥ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ɐ'),
		'a'),
		_Utils_Tuple2(
		_Utils_chr('ꜳ'),
		'aa'),
		_Utils_Tuple2(
		_Utils_chr('æ'),
		'ae'),
		_Utils_Tuple2(
		_Utils_chr('ǽ'),
		'ae'),
		_Utils_Tuple2(
		_Utils_chr('ǣ'),
		'ae'),
		_Utils_Tuple2(
		_Utils_chr('ꜵ'),
		'ao'),
		_Utils_Tuple2(
		_Utils_chr('ꜷ'),
		'au'),
		_Utils_Tuple2(
		_Utils_chr('ꜹ'),
		'av'),
		_Utils_Tuple2(
		_Utils_chr('ꜻ'),
		'av'),
		_Utils_Tuple2(
		_Utils_chr('ꜽ'),
		'ay'),
		_Utils_Tuple2(
		_Utils_chr('ⓑ'),
		'b'),
		_Utils_Tuple2(
		_Utils_chr('ｂ'),
		'b'),
		_Utils_Tuple2(
		_Utils_chr('ḃ'),
		'b'),
		_Utils_Tuple2(
		_Utils_chr('ḅ'),
		'b'),
		_Utils_Tuple2(
		_Utils_chr('ḇ'),
		'b'),
		_Utils_Tuple2(
		_Utils_chr('ƀ'),
		'b'),
		_Utils_Tuple2(
		_Utils_chr('ƃ'),
		'b'),
		_Utils_Tuple2(
		_Utils_chr('ɓ'),
		'b'),
		_Utils_Tuple2(
		_Utils_chr('ⓒ'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('ｃ'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('ć'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('ĉ'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('ċ'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('č'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('ç'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('ḉ'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('ƈ'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('ȼ'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('ꜿ'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('ↄ'),
		'c'),
		_Utils_Tuple2(
		_Utils_chr('ⓓ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ｄ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ḋ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ď'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ḍ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ḑ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ḓ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ḏ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('đ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ƌ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ɖ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ɗ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ꝺ'),
		'd'),
		_Utils_Tuple2(
		_Utils_chr('ǳ'),
		'dz'),
		_Utils_Tuple2(
		_Utils_chr('ǆ'),
		'dz'),
		_Utils_Tuple2(
		_Utils_chr('ⓔ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ｅ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('è'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('é'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ê'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ề'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ế'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ễ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ể'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ẽ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ē'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ḕ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ḗ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ĕ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ė'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ë'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ẻ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ě'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ȅ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ȇ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ẹ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ệ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ȩ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ḝ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ę'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ḙ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ḛ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ɇ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ɛ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ǝ'),
		'e'),
		_Utils_Tuple2(
		_Utils_chr('ⓕ'),
		'f'),
		_Utils_Tuple2(
		_Utils_chr('ｆ'),
		'f'),
		_Utils_Tuple2(
		_Utils_chr('ḟ'),
		'f'),
		_Utils_Tuple2(
		_Utils_chr('ƒ'),
		'f'),
		_Utils_Tuple2(
		_Utils_chr('ꝼ'),
		'f'),
		_Utils_Tuple2(
		_Utils_chr('ⓖ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ｇ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ǵ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ĝ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ḡ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ğ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ġ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ǧ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ģ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ǥ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ɠ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ꞡ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ᵹ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ꝿ'),
		'g'),
		_Utils_Tuple2(
		_Utils_chr('ⓗ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ｈ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ĥ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ḣ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ḧ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ȟ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ḥ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ḩ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ḫ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ẖ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ħ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ⱨ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ⱶ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ɥ'),
		'h'),
		_Utils_Tuple2(
		_Utils_chr('ƕ'),
		'hv'),
		_Utils_Tuple2(
		_Utils_chr('ⓘ'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ｉ'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ì'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('í'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('î'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ĩ'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ī'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ĭ'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ï'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ḯ'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ỉ'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ǐ'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ȉ'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ȋ'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ị'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('į'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ḭ'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ɨ'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ı'),
		'i'),
		_Utils_Tuple2(
		_Utils_chr('ⓙ'),
		'j'),
		_Utils_Tuple2(
		_Utils_chr('ｊ'),
		'j'),
		_Utils_Tuple2(
		_Utils_chr('ĵ'),
		'j'),
		_Utils_Tuple2(
		_Utils_chr('ǰ'),
		'j'),
		_Utils_Tuple2(
		_Utils_chr('ɉ'),
		'j'),
		_Utils_Tuple2(
		_Utils_chr('ⓚ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ｋ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ḱ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ǩ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ḳ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ķ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ḵ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ƙ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ⱪ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ꝁ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ꝃ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ꝅ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ꞣ'),
		'k'),
		_Utils_Tuple2(
		_Utils_chr('ⓛ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ｌ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ŀ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ĺ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ľ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ḷ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ḹ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ļ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ḽ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ḻ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ſ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ł'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ƚ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ɫ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ⱡ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ꝉ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ꞁ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ꝇ'),
		'l'),
		_Utils_Tuple2(
		_Utils_chr('ǉ'),
		'lj'),
		_Utils_Tuple2(
		_Utils_chr('ⓜ'),
		'm'),
		_Utils_Tuple2(
		_Utils_chr('ｍ'),
		'm'),
		_Utils_Tuple2(
		_Utils_chr('ḿ'),
		'm'),
		_Utils_Tuple2(
		_Utils_chr('ṁ'),
		'm'),
		_Utils_Tuple2(
		_Utils_chr('ṃ'),
		'm'),
		_Utils_Tuple2(
		_Utils_chr('ɱ'),
		'm'),
		_Utils_Tuple2(
		_Utils_chr('ɯ'),
		'm'),
		_Utils_Tuple2(
		_Utils_chr('ⓝ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ｎ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ǹ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ń'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ñ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ṅ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ň'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ṇ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ņ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ṋ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ṉ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ƞ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ɲ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ŉ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ꞑ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ꞥ'),
		'n'),
		_Utils_Tuple2(
		_Utils_chr('ǌ'),
		'nj'),
		_Utils_Tuple2(
		_Utils_chr('ⓞ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ｏ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ò'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ó'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ô'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ồ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ố'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ỗ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ổ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('õ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ṍ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ȭ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ṏ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ō'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ṑ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ṓ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ŏ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ȯ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ȱ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ö'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ȫ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ỏ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ő'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ǒ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ȍ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ȏ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ơ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ờ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ớ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ỡ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ở'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ợ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ọ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ộ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ǫ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ǭ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ø'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ǿ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ɔ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ꝋ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ꝍ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ɵ'),
		'o'),
		_Utils_Tuple2(
		_Utils_chr('ƣ'),
		'oi'),
		_Utils_Tuple2(
		_Utils_chr('ȣ'),
		'ou'),
		_Utils_Tuple2(
		_Utils_chr('ꝏ'),
		'oo'),
		_Utils_Tuple2(
		_Utils_chr('ⓟ'),
		'p'),
		_Utils_Tuple2(
		_Utils_chr('ｐ'),
		'p'),
		_Utils_Tuple2(
		_Utils_chr('ṕ'),
		'p'),
		_Utils_Tuple2(
		_Utils_chr('ṗ'),
		'p'),
		_Utils_Tuple2(
		_Utils_chr('ƥ'),
		'p'),
		_Utils_Tuple2(
		_Utils_chr('ᵽ'),
		'p'),
		_Utils_Tuple2(
		_Utils_chr('ꝑ'),
		'p'),
		_Utils_Tuple2(
		_Utils_chr('ꝓ'),
		'p'),
		_Utils_Tuple2(
		_Utils_chr('ꝕ'),
		'p'),
		_Utils_Tuple2(
		_Utils_chr('ⓠ'),
		'q'),
		_Utils_Tuple2(
		_Utils_chr('ｑ'),
		'q'),
		_Utils_Tuple2(
		_Utils_chr('ɋ'),
		'q'),
		_Utils_Tuple2(
		_Utils_chr('ꝗ'),
		'q'),
		_Utils_Tuple2(
		_Utils_chr('ꝙ'),
		'q'),
		_Utils_Tuple2(
		_Utils_chr('ⓡ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ｒ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ŕ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ṙ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ř'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ȑ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ȓ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ṛ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ṝ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ŗ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ṟ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ɍ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ɽ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ꝛ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ꞧ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ꞃ'),
		'r'),
		_Utils_Tuple2(
		_Utils_chr('ⓢ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ｓ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ß'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ś'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ṥ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ŝ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ṡ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('š'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ṧ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ṣ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ṩ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ș'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ş'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ȿ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ꞩ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ꞅ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ẛ'),
		's'),
		_Utils_Tuple2(
		_Utils_chr('ⓣ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ｔ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ṫ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ẗ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ť'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ṭ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ț'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ţ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ṱ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ṯ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ŧ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ƭ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ʈ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ⱦ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ꞇ'),
		't'),
		_Utils_Tuple2(
		_Utils_chr('ꜩ'),
		'tz'),
		_Utils_Tuple2(
		_Utils_chr('ⓤ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ｕ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ù'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ú'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('û'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ũ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ṹ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ū'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ṻ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ŭ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ü'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ǜ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ǘ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ǖ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ǚ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ủ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ů'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ű'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ǔ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ȕ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ȗ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ư'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ừ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ứ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ữ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ử'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ự'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ụ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ṳ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ų'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ṷ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ṵ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ʉ'),
		'u'),
		_Utils_Tuple2(
		_Utils_chr('ⓥ'),
		'v'),
		_Utils_Tuple2(
		_Utils_chr('ｖ'),
		'v'),
		_Utils_Tuple2(
		_Utils_chr('ṽ'),
		'v'),
		_Utils_Tuple2(
		_Utils_chr('ṿ'),
		'v'),
		_Utils_Tuple2(
		_Utils_chr('ʋ'),
		'v'),
		_Utils_Tuple2(
		_Utils_chr('ꝟ'),
		'v'),
		_Utils_Tuple2(
		_Utils_chr('ʌ'),
		'v'),
		_Utils_Tuple2(
		_Utils_chr('ꝡ'),
		'vy'),
		_Utils_Tuple2(
		_Utils_chr('ⓦ'),
		'w'),
		_Utils_Tuple2(
		_Utils_chr('ｗ'),
		'w'),
		_Utils_Tuple2(
		_Utils_chr('ẁ'),
		'w'),
		_Utils_Tuple2(
		_Utils_chr('ẃ'),
		'w'),
		_Utils_Tuple2(
		_Utils_chr('ŵ'),
		'w'),
		_Utils_Tuple2(
		_Utils_chr('ẇ'),
		'w'),
		_Utils_Tuple2(
		_Utils_chr('ẅ'),
		'w'),
		_Utils_Tuple2(
		_Utils_chr('ẘ'),
		'w'),
		_Utils_Tuple2(
		_Utils_chr('ẉ'),
		'w'),
		_Utils_Tuple2(
		_Utils_chr('ⱳ'),
		'w'),
		_Utils_Tuple2(
		_Utils_chr('ⓧ'),
		'x'),
		_Utils_Tuple2(
		_Utils_chr('ｘ'),
		'x'),
		_Utils_Tuple2(
		_Utils_chr('ẋ'),
		'x'),
		_Utils_Tuple2(
		_Utils_chr('ẍ'),
		'x'),
		_Utils_Tuple2(
		_Utils_chr('ⓨ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ｙ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ỳ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ý'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ŷ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ỹ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ȳ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ẏ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ÿ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ỷ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ẙ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ỵ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ƴ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ɏ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ỿ'),
		'y'),
		_Utils_Tuple2(
		_Utils_chr('ⓩ'),
		'z'),
		_Utils_Tuple2(
		_Utils_chr('ｚ'),
		'z'),
		_Utils_Tuple2(
		_Utils_chr('ź'),
		'z'),
		_Utils_Tuple2(
		_Utils_chr('ẑ'),
		'z'),
		_Utils_Tuple2(
		_Utils_chr('ż'),
		'z'),
		_Utils_Tuple2(
		_Utils_chr('ž'),
		'z'),
		_Utils_Tuple2(
		_Utils_chr('ẓ'),
		'z'),
		_Utils_Tuple2(
		_Utils_chr('ẕ'),
		'z'),
		_Utils_Tuple2(
		_Utils_chr('ƶ'),
		'z')
	]);
var $kuon$elm_string_normalize$String$Normalize$Diacritics$lookupTable = $elm$core$Dict$fromList($kuon$elm_string_normalize$String$Normalize$Diacritics$lookupList);
var $kuon$elm_string_normalize$String$Normalize$Diacritics$maxUnicode = 1114111;
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $kuon$elm_string_normalize$String$Normalize$Diacritics$maxCode = A2(
	$elm$core$Maybe$withDefault,
	$kuon$elm_string_normalize$String$Normalize$Diacritics$maxUnicode,
	$elm$core$List$maximum(
		A2(
			$elm$core$List$map,
			$elm$core$Char$toCode,
			A2($elm$core$List$map, $elm$core$Tuple$first, $kuon$elm_string_normalize$String$Normalize$Diacritics$lookupList))));
var $kuon$elm_string_normalize$String$Normalize$Diacritics$lookupArray = $elm$core$Array$fromList(
	A2(
		$elm$core$List$map,
		function (i) {
			var _v0 = A2(
				$elm$core$Dict$get,
				$elm$core$Char$fromCode(i),
				$kuon$elm_string_normalize$String$Normalize$Diacritics$lookupTable);
			if (_v0.$ === 'Nothing') {
				return $elm$core$String$fromChar(
					$elm$core$Char$fromCode(i));
			} else {
				var str = _v0.a;
				return str;
			}
		},
		A2($elm$core$List$range, 0, $kuon$elm_string_normalize$String$Normalize$Diacritics$maxCode)));
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $kuon$elm_string_normalize$String$Normalize$Diacritics$minCode = A2(
	$elm$core$Maybe$withDefault,
	0,
	$elm$core$List$minimum(
		A2(
			$elm$core$List$map,
			$elm$core$Char$toCode,
			A2($elm$core$List$map, $elm$core$Tuple$first, $kuon$elm_string_normalize$String$Normalize$Diacritics$lookupList))));
var $kuon$elm_string_normalize$String$Normalize$removeDiacritics = function (str) {
	var replace = F2(
		function (c, result) {
			if (_Utils_cmp(
				$elm$core$Char$toCode(c),
				$kuon$elm_string_normalize$String$Normalize$Diacritics$minCode) < 0) {
				return _Utils_ap(
					result,
					$elm$core$String$fromChar(c));
			} else {
				var _v0 = A2(
					$elm$core$Array$get,
					$elm$core$Char$toCode(c),
					$kuon$elm_string_normalize$String$Normalize$Diacritics$lookupArray);
				if (_v0.$ === 'Just') {
					var candidate = _v0.a;
					return _Utils_ap(result, candidate);
				} else {
					return _Utils_ap(
						result,
						$elm$core$String$fromChar(c));
				}
			}
		});
	return A3($elm$core$String$foldl, replace, '', str);
};
var $elm_community$list_extra$List$Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$findIndex = $elm_community$list_extra$List$Extra$findIndexHelp(0);
var $elm_community$list_extra$List$Extra$elemIndex = function (x) {
	return $elm_community$list_extra$List$Extra$findIndex(
		$elm$core$Basics$eq(x));
};
var $elm_community$maybe_extra$Maybe$Extra$isJust = function (m) {
	if (m.$ === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var $author$project$Utils$removestopwords = function (str) {
	removestopwords:
	while (true) {
		var _v0 = A2($elm$core$String$split, ' ', str);
		if (_v0.b) {
			var start = _v0.a;
			var rest = _v0.b;
			if ($elm_community$maybe_extra$Maybe$Extra$isJust(
				A2(
					$elm_community$list_extra$List$Extra$elemIndex,
					start,
					_List_fromArray(
						['de', 'het', 'van', 'een', 'der', 'den', 'a', 'the', 'le', 'la', 'du', 'der', 'die', 'das', 'von'])))) {
				var $temp$str = A2($elm$core$String$join, ' ', rest);
				str = $temp$str;
				continue removestopwords;
			} else {
				return str;
			}
		} else {
			return '';
		}
	}
};
var $elm$core$String$toLower = _String_toLower;
var $author$project$Utils$testcorrect = function () {
	var sanitize = A2(
		$elm$core$Basics$composeR,
		$elm$core$String$toLower,
		A2(
			$elm$core$Basics$composeR,
			$kuon$elm_string_normalize$String$Normalize$removeDiacritics,
			A2(
				$elm$core$Basics$composeR,
				$author$project$Utils$removestopwords,
				$elm$core$String$filter($elm$core$Char$isAlpha))));
	return A2($author$project$Utils$on, $elm$core$Basics$eq, sanitize);
}();
var $author$project$Nakijken$mkNakijk = F3(
	function (data, gegeven, opgezocht) {
		var f = function (_v0) {
			var _v1 = _v0.a;
			var ix = _v1.a;
			var vraag = _v1.b;
			var _v2 = _v0.b;
			var _v3 = _v2.a;
			var correct = _v3.b;
			var _v4 = _v2.b;
			var poging = _v4.b;
			return _Utils_Tuple2(
				ix,
				{
					correct: correct,
					gegeven: poging,
					show: A2($author$project$Utils$testcorrect, correct, poging) ? (A2($elm$core$Set$member, ix, opgezocht) ? $author$project$Letters$Opgezocht(poging) : $author$project$Letters$UitHetHoofd(poging)) : ((poging === '') ? $author$project$Letters$Streepje : $author$project$Letters$Zwart),
					vraag: vraag
				});
		};
		var biglist = A2(
			$elm_community$list_extra$List$Extra$zip,
			$elm$core$Dict$toList(data.vragen),
			A2(
				$elm_community$list_extra$List$Extra$zip,
				$elm$core$Dict$toList(data.antwoorden),
				$elm$core$Dict$toList(
					A2(
						$elm$core$Dict$union,
						gegeven,
						$elm$core$Dict$fromList(
							A2(
								$elm$core$List$map,
								A2($elm_community$basics_extra$Basics$Extra$flip, $elm$core$Tuple$pair, ''),
								$author$project$Utils$twelve))))));
		return $elm$core$Dict$fromList(
			A2($elm$core$List$map, f, biglist));
	});
var $author$project$Letters$Vraagteken = {$: 'Vraagteken'};
var $author$project$Hoofdspel$naarWoordRaden = F2(
	function (status, i) {
		var _v0 = A2($elm$core$Dict$get, i, status.gegevenantwoorden);
		if (_v0.$ === 'Nothing') {
			return _Utils_Tuple3(
				$author$project$Letters$Streepje,
				A2(
					$elm$core$Maybe$withDefault,
					0,
					A2($elm$core$Dict$get, i, status.data.volgorde)),
				false);
		} else {
			var gegevenantwoord = _v0.a;
			var _v1 = A2(
				$elm$core$Dict$get,
				i,
				$elm$core$Dict$fromList(
					A2(
						$elm$core$List$map,
						function (_v2) {
							var _v3 = _v2.a;
							var k = _v3.a;
							var a = _v3.b;
							var _v4 = _v2.b;
							var ix = _v4.b;
							return _Utils_Tuple2(
								k,
								_Utils_Tuple2(a, ix));
						},
						A2(
							$elm_community$list_extra$List$Extra$zip,
							$elm$core$Dict$toList(status.data.antwoorden),
							$elm$core$Dict$toList(status.data.volgorde)))));
			if (_v1.$ === 'Nothing') {
				return _Utils_Tuple3($author$project$Letters$Vraagteken, 0, false);
			} else {
				var _v5 = _v1.a;
				var antwoord = _v5.a;
				var index = _v5.b;
				return _Utils_Tuple3(
					A2($elm$core$Set$member, i, status.searched) ? $author$project$Letters$Opgezocht(gegevenantwoord) : $author$project$Letters$UitHetHoofd(gegevenantwoord),
					index,
					A2($author$project$Utils$testcorrect, gegevenantwoord, antwoord));
			}
		}
	});
var $author$project$Types$HighscoreReceived = function (a) {
	return {$: 'HighscoreReceived', a: a};
};
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $elm_community$list_extra$List$Extra$rowsLength = function (listOfLists) {
	if (!listOfLists.b) {
		return 0;
	} else {
		var x = listOfLists.a;
		return $elm$core$List$length(x);
	}
};
var $elm_community$list_extra$List$Extra$transpose = function (listOfLists) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$List$map2($elm$core$List$cons),
		A2(
			$elm$core$List$repeat,
			$elm_community$list_extra$List$Extra$rowsLength(listOfLists),
			_List_Nil),
		listOfLists);
};
var $author$project$Database$parsehighscores = A2(
	$elm$json$Json$Decode$field,
	'values',
	A2(
		$elm$json$Json$Decode$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$tail,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$andThen(
					A2(
						$elm$core$Basics$composeR,
						$elm$core$List$tail,
						$elm$core$Maybe$andThen(
							A2(
								$elm$core$Basics$composeR,
								$elm$core$List$take(5),
								A2(
									$elm$core$Basics$composeR,
									$elm_community$list_extra$List$Extra$transpose,
									A2(
										$elm$core$Basics$composeR,
										$elm$core$List$tail,
										$elm$core$Maybe$andThen(
											function (x) {
												if (((((x.b && x.b.b) && x.b.b.b) && x.b.b.b.b) && x.b.b.b.b.b) && x.b.b.b.b.b.b) {
													var n16 = x.a;
													var _v1 = x.b;
													var s16 = _v1.a;
													var _v2 = _v1.b;
													var n15 = _v2.a;
													var _v3 = _v2.b;
													var s15 = _v3.a;
													var _v4 = _v3.b;
													var n14 = _v4.a;
													var _v5 = _v4.b;
													var s14 = _v5.a;
													var empty = _v5.b;
													return $elm$core$Maybe$Just(
														$elm$core$Dict$fromList(
															_List_fromArray(
																[
																	_Utils_Tuple2(
																	16,
																	A2(
																		$elm_community$list_extra$List$Extra$zip,
																		n16,
																		A2(
																			$elm$core$List$map,
																			A2(
																				$elm$core$Basics$composeL,
																				$elm$core$Maybe$withDefault(0),
																				$elm$core$String$toInt),
																			s16))),
																	_Utils_Tuple2(
																	15,
																	A2(
																		$elm_community$list_extra$List$Extra$zip,
																		n15,
																		A2(
																			$elm$core$List$map,
																			A2(
																				$elm$core$Basics$composeL,
																				$elm$core$Maybe$withDefault(0),
																				$elm$core$String$toInt),
																			s15))),
																	_Utils_Tuple2(
																	14,
																	A2(
																		$elm_community$list_extra$List$Extra$zip,
																		n14,
																		A2(
																			$elm$core$List$map,
																			A2(
																				$elm$core$Basics$composeL,
																				$elm$core$Maybe$withDefault(0),
																				$elm$core$String$toInt),
																			s14)))
																])));
												} else {
													return $elm$core$Maybe$Nothing;
												}
											}))))))),
				$elm$core$Maybe$withDefault($elm$core$Dict$empty))),
		$elm$json$Json$Decode$list(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
var $author$project$Database$readHighscores = function (oauth) {
	return $elm$http$Http$request(
		{
			body: $elm$http$Http$emptyBody,
			expect: A2($elm$http$Http$expectJson, $author$project$Types$HighscoreReceived, $author$project$Database$parsehighscores),
			headers: _List_fromArray(
				[
					A2($elm$http$Http$header, 'Authorization', 'Bearer ' + oauth)
				]),
			method: 'GET',
			timeout: $elm$core$Maybe$Nothing,
			tracker: $elm$core$Maybe$Nothing,
			url: $author$project$Database$url('highscores!A1:G7')
		});
};
var $author$project$Database$schrijfscorejson = F2(
	function (punten, ix) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'range',
					$elm$json$Json$Encode$string(
						'log!C' + $elm$core$String$fromInt(ix))),
					_Utils_Tuple2(
					'majorDimension',
					$elm$json$Json$Encode$string('ROWS')),
					_Utils_Tuple2(
					'values',
					A2(
						$elm$json$Json$Encode$list,
						$elm$json$Json$Encode$list($elm$json$Json$Encode$string),
						_List_fromArray(
							[
								_List_fromArray(
								[
									$elm$core$String$fromInt(punten)
								])
							])))
				]));
	});
var $author$project$Database$schrijfscore = F3(
	function (punten, idx, oauth) {
		if (idx.$ === 'Nothing') {
			return $elm$core$Platform$Cmd$none;
		} else {
			var ix = idx.a;
			return $elm$http$Http$request(
				{
					body: $elm$http$Http$jsonBody(
						A2($author$project$Database$schrijfscorejson, punten, ix)),
					expect: $elm$http$Http$expectWhatever($author$project$Types$UserAdded),
					headers: _List_fromArray(
						[
							A2($elm$http$Http$header, 'Authorization', 'Bearer ' + oauth)
						]),
					method: 'PUT',
					timeout: $elm$core$Maybe$Nothing,
					tracker: $elm$core$Maybe$Nothing,
					url: $author$project$Database$url(
						'log!C' + ($elm$core$String$fromInt(ix) + '?valueInputOption=USER_ENTERED'))
				});
		}
	});
var $elm$core$Process$sleep = _Process_sleep;
var $author$project$Types$SoundLoaded = function (a) {
	return {$: 'SoundLoaded', a: a};
};
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $author$project$Types$soundloaded = function (str) {
	return A2(
		$elm$core$Basics$composeL,
		$author$project$Types$SoundLoaded,
		$elm$core$Result$map(
			function (x) {
				return _Utils_Tuple2(x, str);
			}));
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $author$project$Hoofdspel$startgame = F4(
	function (now, info, oauth, adios) {
		return {
			currentTime: $elm$time$Time$millisToPosix(
				$elm$time$Time$posixToMillis(now) + 1000),
			data: info,
			gegevenantwoorden: $elm$core$Dict$empty,
			lastQuestion: 1,
			logindex: $elm$core$Maybe$Nothing,
			muziek: adios,
			oauth: oauth,
			paardensprongbegintijd: $elm$core$Maybe$Nothing,
			punten: 500,
			questionNumber: 1,
			recentstebel: $elm$core$Maybe$Nothing,
			recentstetik: $elm$core$Maybe$Nothing,
			searched: $elm$core$Set$empty,
			searching: false,
			timeTheGameEnds: $elm$time$Time$millisToPosix(
				($elm$time$Time$posixToMillis(now) + ((15 * 60) * 1000)) + 1000)
		};
	});
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $author$project$Types$Veertien = {$: 'Veertien'};
var $author$project$Types$Zestien = {$: 'Zestien'};
var $author$project$Highscores$updatehs = F2(
	function (status, msg) {
		return _Utils_update(
			status,
			{
				huidig: function () {
					switch (msg.$) {
						case 'PreviousQ':
							var _v1 = status.huidig;
							switch (_v1.$) {
								case 'Veertien':
									return $author$project$Types$Veertien;
								case 'Vijftien':
									return $author$project$Types$Veertien;
								default:
									return $author$project$Types$Vijftien;
							}
						case 'NextQ':
							var _v2 = status.huidig;
							switch (_v2.$) {
								case 'Veertien':
									return $author$project$Types$Vijftien;
								case 'Vijftien':
									return $author$project$Types$Zestien;
								default:
									return $author$project$Types$Zestien;
							}
						default:
							return status.huidig;
					}
				}()
			});
	});
var $author$project$Utils$index = F2(
	function (l, i) {
		index:
		while (true) {
			if (!l.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var a = l.a;
				var b = l.b;
				if (!i) {
					return $elm$core$Maybe$Just(a);
				} else {
					var $temp$l = b,
						$temp$i = i - 1;
					l = $temp$l;
					i = $temp$i;
					continue index;
				}
			}
		}
	});
var $author$project$Letters$Paars = {$: 'Paars'};
var $elm_community$list_extra$List$Extra$updateAt = F3(
	function (index, fn, list) {
		if (index < 0) {
			return list;
		} else {
			var tail = A2($elm$core$List$drop, index, list);
			if (tail.b) {
				var x = tail.a;
				var xs = tail.b;
				return _Utils_ap(
					A2($elm$core$List$take, index, list),
					A2(
						$elm$core$List$cons,
						fn(x),
						xs));
			} else {
				return list;
			}
		}
	});
var $author$project$Woordraden$woordupdate2 = F5(
	function (status, i, letter, correct, target) {
		return _Utils_eq(i, -1) ? status : _Utils_update(
			status,
			{
				gekocht: A3(
					$elm_community$list_extra$List$Extra$updateAt,
					target - 1,
					function (old) {
						if (old.$ === 'Wit') {
							if (correct) {
								switch (letter.$) {
									case 'Opgezocht':
										var str = letter.a;
										return $author$project$Letters$Opgezocht(str);
									case 'UitHetHoofd':
										var str = letter.a;
										return $author$project$Letters$Opgezocht(str);
									default:
										return $author$project$Letters$Vraagteken;
								}
							} else {
								return $author$project$Letters$Vraagteken;
							}
						} else {
							return old;
						}
					},
					status.gekocht),
				koopbaar: A3(
					$elm_community$list_extra$List$Extra$updateAt,
					i,
					function (_v2) {
						return _Utils_Tuple3(
							function () {
								if (correct) {
									switch (letter.$) {
										case 'Opgezocht':
											return $author$project$Letters$Wit;
										case 'UitHetHoofd':
											return $author$project$Letters$Paars;
										default:
											return $author$project$Letters$Vraagteken;
									}
								} else {
									return $author$project$Letters$Zwart;
								}
							}(),
							0,
							false);
					},
					status.koopbaar),
				kooptik: A2(
					$elm$core$Maybe$map,
					function (_v4) {
						var m = _v4.a;
						return _Utils_Tuple2(m, status.currentTime);
					},
					status.kooptik),
				punten: status.punten - 10
			});
	});
var $author$project$Woordraden$woordupdate = F2(
	function (msg, status) {
		switch (msg.$) {
			case 'LetterKopen':
				var j = msg.a;
				var i = j - 1;
				var _v1 = A2($author$project$Utils$index, status.koopbaar, i);
				if (_v1.$ === 'Nothing') {
					return status;
				} else {
					var _v2 = _v1.a;
					var letter = _v2.a;
					var target = _v2.b;
					var correct = _v2.c;
					switch (letter.$) {
						case 'Wit':
							return status;
						case 'Paars':
							return status;
						case 'Vraagteken':
							return status;
						case 'Streepje':
							return status;
						case 'Zwart':
							return status;
						default:
							return A5($author$project$Woordraden$woordupdate2, status, i, letter, correct, target);
					}
				}
			case 'Answer':
				var answer = msg.a;
				return _Utils_update(
					status,
					{woord: answer});
			default:
				return status;
		}
	});
var $author$project$Main$update = F3(
	function (_v0, msg, model) {
		switch (model.$) {
			case 'HomeScreen':
				var status = model.a;
				switch (msg.$) {
					case 'StartGame':
						var _v3 = status.username;
						if (_v3 === '') {
							return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
						} else {
							var naam = _v3;
							var _v4 = status.thesheet;
							if (_v4.$ === 'Nothing') {
								return $author$project$Main$staatdespreadsheetaan ? _Utils_Tuple3(
									model,
									$author$project$Database$readSpreadsheet(status.oauth),
									$MartinSStewart$elm_audio$Audio$cmdNone) : _Utils_Tuple3(
									$author$project$Main$InGame(
										A4(
											$author$project$Hoofdspel$startgame,
											status.now,
											{
												antwoorden: $elm$core$Dict$empty,
												paardsprongrng: _Utils_Tuple2(1, 1),
												volgorde: $elm$core$Dict$empty,
												vragen: $elm$core$Dict$empty,
												woord: ''
											},
											status.oauth,
											status.muziek)),
									$elm$core$Platform$Cmd$none,
									$MartinSStewart$elm_audio$Audio$cmdNone);
							} else {
								var sheet = _v4.a;
								var _v5 = A2($elm$core$Dict$get, naam, sheet);
								if (_v5.$ === 'Nothing') {
									return _Utils_Tuple3(
										$author$project$Main$HomeScreen(
											_Utils_update(
												status,
												{waiting: true})),
										A2($author$project$Database$adduser, naam, status.oauth),
										$MartinSStewart$elm_audio$Audio$cmdNone);
								} else {
									var info = _v5.a;
									return _Utils_Tuple3(
										$author$project$Main$InGame(
											A4($author$project$Hoofdspel$startgame, status.now, info, status.oauth, status.muziek)),
										A4($author$project$Database$logstartgame, info, naam, status.now, status.oauth),
										$MartinSStewart$elm_audio$Audio$cmdNone);
								}
							}
						}
					case 'Tick':
						var newtime = msg.a;
						return _Utils_Tuple3(
							$author$project$Main$HomeScreen(
								_Utils_update(
									status,
									{now: newtime})),
							$elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone);
					case 'DataReceived':
						var result = msg.a;
						if (result.$ === 'Ok') {
							var data = result.a;
							return _Utils_Tuple3(
								$author$project$Main$HomeScreen(
									_Utils_update(
										status,
										{thesheet: data})),
								$elm$core$Platform$Cmd$none,
								$MartinSStewart$elm_audio$Audio$cmdNone);
						} else {
							return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
						}
					case 'UserAdded':
						var r = msg.a;
						if (r.$ === 'Ok') {
							return _Utils_Tuple3(
								$author$project$Main$HomeScreen(status),
								function (_v8) {
									return $author$project$Database$readSpreadsheet(status.oauth);
								}(
									$elm$core$Process$sleep(1000)),
								$MartinSStewart$elm_audio$Audio$cmdNone);
						} else {
							var e = r.a;
							return _Utils_Tuple3(
								$author$project$Main$HomeScreen(
									_Utils_update(
										status,
										{username: 'Error adding user'})),
								$elm$core$Platform$Cmd$none,
								$MartinSStewart$elm_audio$Audio$cmdNone);
						}
					case 'Answer':
						var naam = msg.a;
						return _Utils_Tuple3(
							$author$project$Main$HomeScreen(
								_Utils_update(
									status,
									{username: naam})),
							$elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone);
					case 'PlayAudio':
						return _Utils_Tuple3(
							$author$project$Main$HomeScreen(
								_Utils_update(
									status,
									{
										introstart: $elm$core$Maybe$Just(status.now)
									})),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										$author$project$Main$pushVideoEvent($author$project$Main$Play),
										A2(
										$elm$core$Task$perform,
										function (_v9) {
											return $author$project$Types$StartStopWiki;
										},
										$elm$core$Process$sleep(
											$author$project$Main$intro ? 16000 : 0))
									])),
							$MartinSStewart$elm_audio$Audio$cmdBatch(
								_List_fromArray(
									[
										A2(
										$MartinSStewart$elm_audio$Audio$loadAudio,
										$author$project$Types$soundloaded('tune'),
										'https://maartjevdkoppel.github.io/audio/tune.mp3'),
										A2(
										$MartinSStewart$elm_audio$Audio$loadAudio,
										$author$project$Types$soundloaded('tik'),
										'https://maartjevdkoppel.github.io/audio/tik.mp3'),
										A2(
										$MartinSStewart$elm_audio$Audio$loadAudio,
										$author$project$Types$soundloaded('raden'),
										'https://maartjevdkoppel.github.io/audio/woordraad.mp3'),
										A2(
										$MartinSStewart$elm_audio$Audio$loadAudio,
										$author$project$Types$soundloaded('faal'),
										'https://maartjevdkoppel.github.io/audio/woord-faal.mp3'),
										A2(
										$MartinSStewart$elm_audio$Audio$loadAudio,
										$author$project$Types$soundloaded('psmuziek'),
										'https://maartjevdkoppel.github.io/audio/paardensprong-muziek.mp3'),
										A2(
										$MartinSStewart$elm_audio$Audio$loadAudio,
										$author$project$Types$soundloaded('psbel'),
										'https://maartjevdkoppel.github.io/audio/paardensprong-tijd-op.mp3'),
										A2(
										$MartinSStewart$elm_audio$Audio$loadAudio,
										$author$project$Types$soundloaded('wikibel'),
										'https://maartjevdkoppel.github.io/audio/stop-zoeken.mp3')
									])));
					case 'SoundLoaded':
						var result = msg.a;
						if (result.$ === 'Ok') {
							var _v11 = result.a;
							var sound = _v11.a;
							var id = _v11.b;
							var x = status.muziek;
							return _Utils_Tuple3(
								$author$project$Main$HomeScreen(
									_Utils_update(
										status,
										{
											muziek: function () {
												switch (id) {
													case 'tune':
														return _Utils_update(
															x,
															{
																tune: $elm$core$Maybe$Just(sound)
															});
													case 'tik':
														return _Utils_update(
															x,
															{
																tik: $elm$core$Maybe$Just(sound)
															});
													case 'raden':
														return _Utils_update(
															x,
															{
																raden: $elm$core$Maybe$Just(sound)
															});
													case 'faal':
														return _Utils_update(
															x,
															{
																faal: $elm$core$Maybe$Just(sound)
															});
													case 'psmuziek':
														return _Utils_update(
															x,
															{
																psmuziek: $elm$core$Maybe$Just(sound)
															});
													case 'psbel':
														return _Utils_update(
															x,
															{
																psbel: $elm$core$Maybe$Just(sound)
															});
													case 'wikibel':
														return _Utils_update(
															x,
															{
																wikibel: $elm$core$Maybe$Just(sound)
															});
													default:
														return status.muziek;
												}
											}()
										})),
								$elm$core$Platform$Cmd$none,
								$MartinSStewart$elm_audio$Audio$cmdNone);
						} else {
							return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
						}
					case 'StartStopWiki':
						return _Utils_Tuple3(
							model,
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										$author$project$Main$pushVideoEvent($author$project$Main$VolumeDown),
										$author$project$Main$pushVideoEvent($author$project$Main$VolumeDown),
										$author$project$Main$pushVideoEvent($author$project$Main$VolumeDown),
										$author$project$Main$pushVideoEvent($author$project$Main$VolumeDown),
										$author$project$Main$pushVideoEvent($author$project$Main$VolumeDown)
									])),
							$MartinSStewart$elm_audio$Audio$cmdNone);
					case 'GetHighscores':
						return _Utils_Tuple3(
							model,
							$author$project$Database$readHighscores(status.oauth),
							$MartinSStewart$elm_audio$Audio$cmdNone);
					case 'HighscoreReceived':
						var result = msg.a;
						if (result.$ === 'Ok') {
							var alle = result.a;
							return _Utils_Tuple3(
								$author$project$Main$Highscore(
									{alle: alle, huidig: $author$project$Types$Vijftien, jouw: $elm$core$Maybe$Nothing, muziek: status.muziek, oauth: status.oauth}),
								$elm$core$Platform$Cmd$none,
								$MartinSStewart$elm_audio$Audio$cmdNone);
						} else {
							return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
						}
					default:
						return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
				}
			case 'InGame':
				var status = model.a;
				switch (msg.$) {
					case 'NaarWoordraden':
						return _Utils_Tuple3(
							$author$project$Main$Woordraden(
								{
									adios: status.muziek,
									correctwoord: status.data.woord,
									currentTime: $elm$time$Time$millisToPosix(
										$elm$time$Time$posixToMillis(status.currentTime) + 1000),
									faal: status.muziek.faal,
									gekocht: A2($elm$core$List$repeat, 12, $author$project$Letters$Wit),
									koopbaar: A2(
										$elm$core$List$map,
										$author$project$Hoofdspel$naarWoordRaden(status),
										_List_fromArray(
											[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])),
									kooptik: A2(
										$elm$core$Maybe$map,
										function (x) {
											return _Utils_Tuple2(
												x,
												$elm$time$Time$millisToPosix(0));
										},
										status.muziek.tik),
									logindex: status.logindex,
									muziek: A2(
										$elm$core$Maybe$map,
										function (x) {
											return _Utils_Tuple2(x, status.currentTime);
										},
										status.muziek.raden),
									nakijkinfo: A3($author$project$Nakijken$mkNakijk, status.data, status.gegevenantwoorden, status.searched),
									oauth: status.oauth,
									punten: status.punten,
									timeTheGameEnds: $elm$time$Time$millisToPosix(
										($elm$time$Time$posixToMillis(status.currentTime) + ((1000 * 60) * 2)) + 1000),
									woord: ''
								}),
							$elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone);
					case 'SoundLoaded':
						var result = msg.a;
						if (result.$ === 'Ok') {
							var _v16 = result.a;
							var sound = _v16.a;
							var id = _v16.b;
							var x = status.muziek;
							return _Utils_Tuple3(
								$author$project$Main$InGame(
									_Utils_update(
										status,
										{
											muziek: function () {
												switch (id) {
													case 'tune':
														return _Utils_update(
															x,
															{
																tune: $elm$core$Maybe$Just(sound)
															});
													case 'tik':
														return _Utils_update(
															x,
															{
																tik: $elm$core$Maybe$Just(sound)
															});
													case 'raden':
														return _Utils_update(
															x,
															{
																raden: $elm$core$Maybe$Just(sound)
															});
													case 'faal':
														return _Utils_update(
															x,
															{
																faal: $elm$core$Maybe$Just(sound)
															});
													case 'psmuziek':
														return _Utils_update(
															x,
															{
																psmuziek: $elm$core$Maybe$Just(sound)
															});
													case 'psbel':
														return _Utils_update(
															x,
															{
																psbel: $elm$core$Maybe$Just(sound)
															});
													case 'wikibel':
														return _Utils_update(
															x,
															{
																wikibel: $elm$core$Maybe$Just(sound)
															});
													default:
														return status.muziek;
												}
											}()
										})),
								$elm$core$Platform$Cmd$none,
								$MartinSStewart$elm_audio$Audio$cmdNone);
						} else {
							return _Utils_Tuple3(
								$author$project$Main$InGame(status),
								$elm$core$Platform$Cmd$none,
								$MartinSStewart$elm_audio$Audio$cmdNone);
						}
					default:
						var _v18 = A2($author$project$Hoofdspel$hoofdupdate, msg, status);
						var status2 = _v18.a;
						var cmd2 = _v18.b;
						return _Utils_Tuple3(
							$author$project$Main$InGame(status2),
							cmd2,
							$MartinSStewart$elm_audio$Audio$cmdNone);
				}
			case 'Woordraden':
				var status = model.a;
				switch (msg.$) {
					case 'Tick':
						var newtime = msg.a;
						return _Utils_Tuple3(
							$author$project$Main$Woordraden(
								_Utils_update(
									status,
									{currentTime: newtime})),
							(_Utils_cmp(
								$elm$time$Time$posixToMillis(newtime),
								$elm$time$Time$posixToMillis(status.timeTheGameEnds)) > 0) ? A2(
								$elm$core$Task$perform,
								function (_v20) {
									return $author$project$Types$Submit;
								},
								$elm$core$Task$succeed(_Utils_Tuple0)) : $elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone);
					case 'Submit':
						var uithethoofd = $elm$core$List$sum(
							A2(
								$elm$core$List$map,
								function (_v22) {
									var l1 = _v22.a;
									var b = _v22.c;
									switch (l1.$) {
										case 'UitHetHoofd':
											return b ? 1 : 0;
										case 'Paars':
											return 1;
										default:
											return 0;
									}
								},
								status.koopbaar));
						var fout = $elm$core$List$length(
							A2(
								$elm$core$List$filter,
								function (_v21) {
									var b = _v21.c;
									return !b;
								},
								status.koopbaar));
						var punten = A2($author$project$Utils$testcorrect, status.woord, status.correctwoord) ? (((status.punten + (10 * uithethoofd)) + 100) - (25 * A2($elm$core$Basics$min, 4, fout))) : 0;
						var door = {
							focus: $elm$core$Maybe$Nothing,
							info: status.nakijkinfo,
							muziek: status.adios,
							oauth: status.oauth,
							punten: punten,
							tijdover: $elm$time$Time$posixToMillis(status.timeTheGameEnds) - $elm$time$Time$posixToMillis(status.currentTime)
						};
						return A2($author$project$Utils$testcorrect, status.woord, status.correctwoord) ? _Utils_Tuple3(
							$author$project$Main$Afrekenen(
								$author$project$Afrekenen$Win(
									{basis: status.punten, door: door, fout: fout, uithethoofd: uithethoofd})),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										$author$project$Main$confetti($elm$json$Json$Encode$null),
										A3($author$project$Database$schrijfscore, punten, status.logindex, status.oauth)
									])),
							$MartinSStewart$elm_audio$Audio$cmdNone) : _Utils_Tuple3(
							$author$project$Main$Afrekenen(
								$author$project$Afrekenen$Verlies(
									{
										door: door,
										faalstart: A2(
											$elm$core$Maybe$map,
											function (f) {
												return _Utils_Tuple2(f, status.currentTime);
											},
											status.faal),
										woord: status.correctwoord
									})),
							A3($author$project$Database$schrijfscore, 0, status.logindex, status.oauth),
							$MartinSStewart$elm_audio$Audio$cmdNone);
					default:
						return _Utils_Tuple3(
							$author$project$Main$Woordraden(
								A2($author$project$Woordraden$woordupdate, msg, status)),
							$elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone);
				}
			case 'Afrekenen':
				var status = model.a;
				if (msg.$ === 'Submit') {
					var door = function () {
						if (status.$ === 'Win') {
							var info = status.a;
							return info.door;
						} else {
							var info = status.a;
							return info.door;
						}
					}();
					return _Utils_Tuple3(
						$author$project$Main$Nakijken(door),
						$elm$core$Platform$Cmd$none,
						$MartinSStewart$elm_audio$Audio$cmdNone);
				} else {
					return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
				}
			case 'Highscore':
				var status = model.a;
				if (msg.$ === 'Submit') {
					return _Utils_Tuple3(
						$author$project$Main$HomeScreen(
							{
								introstart: $elm$core$Maybe$Just(
									$elm$time$Time$millisToPosix(0)),
								muziek: status.muziek,
								now: $elm$time$Time$millisToPosix(100000),
								oauth: status.oauth,
								thesheet: $elm$core$Maybe$Nothing,
								username: '',
								waiting: false
							}),
						$author$project$Main$staatdespreadsheetaan ? $author$project$Database$readSpreadsheet(status.oauth) : $elm$core$Platform$Cmd$none,
						$MartinSStewart$elm_audio$Audio$cmdNone);
				} else {
					return _Utils_Tuple3(
						$author$project$Main$Highscore(
							A2($author$project$Highscores$updatehs, status, msg)),
						$elm$core$Platform$Cmd$none,
						$MartinSStewart$elm_audio$Audio$cmdNone);
				}
			default:
				var status = model.a;
				switch (msg.$) {
					case 'LetterKopen':
						var i = msg.a;
						return _Utils_Tuple3(
							$author$project$Main$Nakijken(
								_Utils_update(
									status,
									{
										focus: $elm$core$Maybe$Just(i)
									})),
							$elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone);
					case 'GetHighscores':
						return _Utils_Tuple3(
							model,
							$author$project$Database$readHighscores(status.oauth),
							$MartinSStewart$elm_audio$Audio$cmdNone);
					case 'HighscoreReceived':
						var result = msg.a;
						if (result.$ === 'Ok') {
							var data = result.a;
							return _Utils_Tuple3(
								$author$project$Main$Highscore(
									{
										alle: data,
										huidig: $author$project$Types$Vijftien,
										jouw: $elm$core$Maybe$Just(
											_Utils_Tuple2($author$project$Types$Vijftien, status.punten)),
										muziek: status.muziek,
										oauth: status.oauth
									}),
								$elm$core$Platform$Cmd$none,
								$MartinSStewart$elm_audio$Audio$cmdNone);
						} else {
							return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
						}
					default:
						return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
				}
		}
	});
var $author$project$Types$PlayAudio = {$: 'PlayAudio'};
var $author$project$Types$Answer = function (a) {
	return {$: 'Answer', a: a};
};
var $author$project$Types$GetHighscores = {$: 'GetHighscores'};
var $author$project$Types$StartGame = {$: 'StartGame'};
var $elm$html$Html$br = _VirtualDom_node('br');
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$Utils$centeringstuff = _List_fromArray(
	[
		A2($elm$html$Html$Attributes$style, 'top', '50%'),
		A2($elm$html$Html$Attributes$style, 'left', '50%'),
		A2($elm$html$Html$Attributes$style, 'position', 'relative'),
		A2($elm$html$Html$Attributes$style, 'transform', 'translate(-50%, -50%)')
	]);
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $author$project$Utils$cols = function (xs) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var i = _v0.a;
			var r = _v0.b;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('column'),
						A2($elm$html$Html$Attributes$style, 'float', 'left'),
						A2(
						$elm$html$Html$Attributes$style,
						'flex',
						$elm$core$String$fromInt(i) + '%'),
						A2($elm$html$Html$Attributes$style, 'height', '100%')
					]),
				r);
		},
		xs);
};
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $author$project$Utils$rows = function (xs) {
	return A2(
		$elm$core$List$intersperse,
		A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'clear', 'both'),
					A2($elm$html$Html$Attributes$style, 'display', 'table')
				]),
			_List_Nil),
		A2(
			$elm$core$List$map,
			function (_v0) {
				var i = _v0.a;
				var s = _v0.b;
				var r = _v0.c;
				return A2(
					$elm$html$Html$div,
					_Utils_ap(
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('row'),
								A2(
								$elm$html$Html$Attributes$style,
								'height',
								$elm$core$String$fromInt(i) + '%'),
								A2($elm$html$Html$Attributes$style, 'width', '100%'),
								A2($elm$html$Html$Attributes$style, 'display', 'flex')
							]),
						s),
					r);
			},
			xs));
};
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$Main$beginmenu = function (status) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/leeg.jpeg\')'),
				A2($elm$html$Html$Attributes$style, 'background-size', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '100%')
			]),
		$author$project$Utils$rows(
			_List_fromArray(
				[
					_Utils_Tuple3(15, _List_Nil, _List_Nil),
					_Utils_Tuple3(
					5,
					_List_Nil,
					$author$project$Utils$cols(
						_List_fromArray(
							[
								_Utils_Tuple2(38, _List_Nil),
								_Utils_Tuple2(
								10,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick($author$project$Types$GetHighscores),
												A2($elm$html$Html$Attributes$style, 'height', '100%'),
												A2($elm$html$Html$Attributes$style, 'width', '100%'),
												A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(88, 88, 88, 1)'),
												A2($elm$html$Html$Attributes$style, 'color', 'white'),
												A2($elm$html$Html$Attributes$style, 'border', 'none'),
												A2($elm$html$Html$Attributes$style, 'border-radius', '1cqh'),
												A2($elm$html$Html$Attributes$style, 'font-size', '3cqh'),
												A2($elm$html$Html$Attributes$style, 'font-family', 'Lucida Sans'),
												A2($elm$html$Html$Attributes$style, 'box-shadow', '1px 9px #888888')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Highscores')
											]))
									])),
								_Utils_Tuple2(45, _List_Nil)
							]))),
					_Utils_Tuple3(20, _List_Nil, _List_Nil),
					_Utils_Tuple3(
					20,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', 'white'),
							A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder'),
							A2($elm$html$Html$Attributes$style, 'font-size', '3.5cqh'),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'width', '100%'),
							A2($elm$html$Html$Attributes$style, 'text-shadow', '2px 2px 4px #000000')
						]),
					$author$project$Utils$cols(
						_List_fromArray(
							[
								_Utils_Tuple2(10, _List_Nil),
								_Utils_Tuple2(
								80,
								_List_fromArray(
									[
										$elm$html$Html$text('Goeienavond, hartelijk welkom bij 2 voor 12.'),
										A2($elm$html$Html$br, _List_Nil, _List_Nil),
										$elm$html$Html$text('Wil je je voorstellen?')
									])),
								_Utils_Tuple2(10, _List_Nil)
							]))),
					_Utils_Tuple3(
					10,
					_List_Nil,
					$author$project$Utils$cols(
						_List_fromArray(
							[
								_Utils_Tuple2(38, _List_Nil),
								_Utils_Tuple2(
								7,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$input,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$placeholder('naam'),
												$elm$html$Html$Attributes$value(status.username),
												$elm$html$Html$Events$onInput($author$project$Types$Answer),
												A2($elm$html$Html$Attributes$style, 'height', '100%'),
												A2($elm$html$Html$Attributes$style, 'padding', '0cqh 2cqh'),
												A2($elm$html$Html$Attributes$style, 'font-size', '3cqh')
											]),
										_List_Nil)
									])),
								_Utils_Tuple2(3, _List_Nil),
								_Utils_Tuple2(
								14,
								function () {
									var styles = _Utils_ap(
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick($author$project$Types$StartGame),
												A2($elm$html$Html$Attributes$style, 'height', '70%'),
												A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(227, 7, 20)'),
												A2($elm$html$Html$Attributes$style, 'color', 'white'),
												A2($elm$html$Html$Attributes$style, 'border', 'none'),
												A2($elm$html$Html$Attributes$style, 'border-radius', '1cqh'),
												A2($elm$html$Html$Attributes$style, 'font-size', '3cqh'),
												A2($elm$html$Html$Attributes$style, 'font-family', 'Lucida Sans'),
												A2($elm$html$Html$Attributes$style, 'box-shadow', '1px 9px #888888')
											]),
										$author$project$Utils$centeringstuff);
									return (status.username === '') ? _List_fromArray(
										[
											$elm$html$Html$text('')
										]) : ($elm_community$maybe_extra$Maybe$Extra$isJust(
										A2(
											$elm$core$Maybe$andThen,
											$elm$core$Dict$get(status.username),
											status.thesheet)) ? _List_fromArray(
										[
											A2(
											$elm$html$Html$button,
											styles,
											_List_fromArray(
												[
													$elm$html$Html$text('\u00A0Begin het spel!\u00A0')
												]))
										]) : (status.waiting ? _List_fromArray(
										[
											$elm$html$Html$text('Je staat op de wachtrij, er zijn nog 3586 kandidaten voor je. (Dit kan 10-20 seconden duren)')
										]) : _List_fromArray(
										[
											A2(
											$elm$html$Html$button,
											styles,
											_List_fromArray(
												[
													$elm$html$Html$text('\u00A0Schrijf je in!\u00A0')
												]))
										])));
								}()),
								_Utils_Tuple2(38, _List_Nil)
							])))
				])));
};
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$html$Html$source = _VirtualDom_node('source');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$video = _VirtualDom_node('video');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$foreignObject = $elm$svg$Svg$trustedNode('foreignObject');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $author$project$Afrekenen$viewAfrekenen = function (status) {
	if (status.$ === 'Win') {
		var info = status.a;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/astrid.jpg\')'),
					A2($elm$html$Html$Attributes$style, 'background-size', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					$elm$html$Html$Events$onClick($author$project$Types$Submit)
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$svg,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$height('100%'),
							$elm$svg$Svg$Attributes$width('100%'),
							$elm$svg$Svg$Attributes$viewBox('0 0 100% 100%')
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$rect,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$fill('rgba(237, 230, 214, 0.9)'),
									$elm$svg$Svg$Attributes$x('5%'),
									$elm$svg$Svg$Attributes$y('15%'),
									$elm$svg$Svg$Attributes$height('70%'),
									$elm$svg$Svg$Attributes$width('35%')
								]),
							_List_Nil),
							A2(
							$elm$svg$Svg$foreignObject,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$x('8%'),
									$elm$svg$Svg$Attributes$y('25%'),
									$elm$svg$Svg$Attributes$height('60%'),
									$elm$svg$Svg$Attributes$width('30%')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'font-size', '4cqh'),
											A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(
											'Je hebt ' + ($elm$core$String$fromInt(info.basis) + ' punten.')),
											A2($elm$html$Html$br, _List_Nil, _List_Nil),
											A2($elm$html$Html$br, _List_Nil, _List_Nil),
											$elm$html$Html$text(
											'Plus ' + ($elm$core$String$fromInt(10 * info.uithethoofd) + ' bonus voor de vragen uit het hoofd.')),
											A2($elm$html$Html$br, _List_Nil, _List_Nil),
											A2($elm$html$Html$br, _List_Nil, _List_Nil),
											$elm$html$Html$text(
											'Daar komt nog ' + ($elm$core$String$fromInt(
												100 - (25 * A2($elm$core$Basics$min, 4, info.fout))) + (' bonus bij voor ' + ($elm$core$String$fromInt(info.fout) + ' fouten.')))),
											A2($elm$html$Html$br, _List_Nil, _List_Nil),
											A2($elm$html$Html$br, _List_Nil, _List_Nil),
											$elm$html$Html$text(
											'Dan komen we uit op ' + ($elm$core$String$fromInt(
												((info.basis + (10 * info.uithethoofd)) + 100) - (25 * A2($elm$core$Basics$min, 4, info.fout))) + ' in totaal.'))
										]))
								]))
						]))
				]));
	} else {
		var info = status.a;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/astrid.jpg\')'),
					A2($elm$html$Html$Attributes$style, 'background-size', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					$elm$html$Html$Events$onClick($author$project$Types$Submit)
				]),
			$author$project$Utils$rows(
				_List_fromArray(
					[
						_Utils_Tuple3(70, _List_Nil, _List_Nil),
						_Utils_Tuple3(
						15,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(237, 230, 214, 0.9)'),
								A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder'),
								A2($elm$html$Html$Attributes$style, 'font-size', '4cqh')
							]),
						$author$project$Utils$cols(
							_List_fromArray(
								[
									_Utils_Tuple2(0, _List_Nil),
									_Utils_Tuple2(
									100,
									$author$project$Utils$rows(
										_List_fromArray(
											[
												_Utils_Tuple3(33, _List_Nil, _List_Nil),
												_Utils_Tuple3(
												34,
												_List_Nil,
												$author$project$Utils$cols(
													_List_fromArray(
														[
															_Utils_Tuple2(
															100,
															_List_fromArray(
																[
																	A2(
																	$elm$html$Html$div,
																	_List_fromArray(
																		[
																			A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
																			A2($elm$html$Html$Attributes$style, 'width', '100%')
																		]),
																	_List_fromArray(
																		[
																			$elm$html$Html$text('Helaas! Het woord was \'' + (info.woord + '\'. Gelukkig mag ik je wel de pennenset meegeven.'))
																		]))
																]))
														]))),
												_Utils_Tuple3(33, _List_Nil, _List_Nil)
											]))),
									_Utils_Tuple2(0, _List_Nil)
								]))),
						_Utils_Tuple3(15, _List_Nil, _List_Nil)
					])));
	}
};
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $author$project$Letters$klokje = F2(
	function (cx, millisdiff) {
		var second = A2($elm$core$Basics$modBy, 60, (millisdiff / 1000) | 0);
		var secondstr = (second > 9) ? $elm$core$String$fromInt(second) : ('0' + $elm$core$String$fromInt(second));
		var minute = (((millisdiff / 1000) | 0) / 60) | 0;
		var minutestr = (minute > 9) ? $elm$core$String$fromInt(minute) : ('0' + $elm$core$String$fromInt(minute));
		return _List_fromArray(
			[
				A2(
				$elm$svg$Svg$circle,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$cx('calc(' + (cx + ')')),
						$elm$svg$Svg$Attributes$cy('50%'),
						$elm$svg$Svg$Attributes$r('7.5cqh'),
						$elm$svg$Svg$Attributes$fill('rgb(227, 7, 20)')
					]),
				_List_Nil),
				A2(
				$elm$svg$Svg$circle,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$cx('calc(' + (cx + ')')),
						$elm$svg$Svg$Attributes$cy('50%'),
						$elm$svg$Svg$Attributes$r('6.5cqh'),
						$elm$svg$Svg$Attributes$stroke('#ffffff'),
						$elm$svg$Svg$Attributes$strokeWidth('0.7cqh'),
						$elm$svg$Svg$Attributes$fill('none')
					]),
				_List_Nil),
				A2(
				$elm$svg$Svg$foreignObject,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$x('calc(' + (cx + ' - 7.5cqh)')),
						$elm$svg$Svg$Attributes$y('0'),
						$elm$svg$Svg$Attributes$width('15cqh'),
						$elm$svg$Svg$Attributes$height('100%')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_Utils_ap(
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'white'),
									A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
									A2($elm$html$Html$Attributes$style, 'font-size', '3.8cqh')
								]),
							$author$project$Utils$centeringstuff),
						_List_fromArray(
							[
								$elm$html$Html$text(minutestr + (':' + secondstr))
							]))
					]))
			]);
	});
var $author$project$Utils$svgfullsize = _List_fromArray(
	[
		$elm$svg$Svg$Attributes$width('100%'),
		$elm$svg$Svg$Attributes$height('100%'),
		$elm$svg$Svg$Attributes$viewBox('0 0 100% 100%')
	]);
var $author$project$Letters$klok = function (millisdiff) {
	return A2(
		$elm$svg$Svg$svg,
		$author$project$Utils$svgfullsize,
		A2(
			$elm$core$List$cons,
			A2(
				$elm$svg$Svg$rect,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$x('0'),
						$elm$svg$Svg$Attributes$y('0'),
						$elm$svg$Svg$Attributes$width('calc(100% - 7.5cqh)'),
						$elm$svg$Svg$Attributes$height('100%'),
						$elm$svg$Svg$Attributes$fill('rgb(227, 7, 20)')
					]),
				_List_Nil),
			A2($author$project$Letters$klokje, '100% - 7.5cqh', millisdiff)));
};
var $author$project$Hoofdspel$getBeginLetter = F2(
	function (status, i) {
		var _v0 = A2($elm$core$Dict$get, i, status.gegevenantwoorden);
		if (_v0.$ === 'Nothing') {
			return ((_Utils_cmp(i, status.lastQuestion) > 0) || A2($elm$core$Set$member, i, status.searched)) ? $author$project$Letters$Wit : $author$project$Letters$Paars;
		} else {
			var letter = _v0.a;
			return A2($elm$core$Set$member, i, status.searched) ? $author$project$Letters$Opgezocht(letter) : $author$project$Letters$UitHetHoofd(letter);
		}
	});
var $elm$html$Html$td = _VirtualDom_node('td');
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $author$project$Letters$numbersbelow = function (lastQuestion) {
	if (lastQuestion.$ === 'Nothing') {
		return _List_Nil;
	} else {
		var lq = lastQuestion.a;
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$tr,
				_List_Nil,
				A2(
					$elm$core$List$intersperse,
					A2($elm$html$Html$td, _List_Nil, _List_Nil),
					A2(
						$elm$core$List$map,
						function (i) {
							return A2(
								$elm$html$Html$td,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'font-size', '1.2cqh'),
										A2(
										$elm$html$Html$Attributes$style,
										'color',
										(_Utils_cmp(i, lq) > 0) ? 'black' : 'rgb(227, 7, 20)')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromInt(i))
									]));
						},
						_List_fromArray(
							[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))))
			]);
	}
};
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$th = _VirtualDom_node('th');
var $elm$core$String$toUpper = _String_toUpper;
var $author$project$Letters$letters = F3(
	function (lastQuestion, ls, onclick) {
		return A2(
			$elm$html$Html$table,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'scale', '200%'),
					A2($elm$html$Html$Attributes$style, 'position', 'relative'),
					A2($elm$html$Html$Attributes$style, 'left', '50%'),
					A2($elm$html$Html$Attributes$style, 'top', '50%'),
					A2($elm$html$Html$Attributes$style, 'transform', 'translate(-25%, -15%)'),
					A2($elm$html$Html$Attributes$style, 'text-align', 'center')
				]),
			A2(
				$elm$core$List$cons,
				A2(
					$elm$html$Html$tr,
					_List_Nil,
					A2(
						$elm$core$List$intersperse,
						A2(
							$elm$html$Html$th,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '0.5cqh'),
									A2($elm$html$Html$Attributes$style, 'width', '0.5cqh')
								]),
							_List_Nil),
						A2(
							$elm$core$List$map,
							function (_v0) {
								var i = _v0.a;
								var l = _v0.b;
								var event = function () {
									if (onclick.$ === 'Nothing') {
										return _List_Nil;
									} else {
										var f = onclick.a;
										return _List_fromArray(
											[
												$elm$html$Html$Events$onClick(
												f(i))
											]);
									}
								}();
								var styles = _Utils_ap(
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'background-size', '100% 100%'),
											A2($elm$html$Html$Attributes$style, 'font-size', '3cqh'),
											A2($elm$html$Html$Attributes$style, 'opacity', '100%'),
											A2($elm$html$Html$Attributes$style, 'height', '4cqh'),
											A2($elm$html$Html$Attributes$style, 'width', '3cqh')
										]),
									event);
								switch (l.$) {
									case 'Opgezocht':
										var letter = l.a;
										return A2(
											$elm$html$Html$th,
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$Attributes$style, 'background-color', 'white'),
												styles),
											_List_fromArray(
												[
													$elm$html$Html$text(
													A2(
														$elm$core$Basics$composeL,
														A2(
															$elm$core$Basics$composeL,
															A2(
																$elm$core$Basics$composeL,
																A2(
																	$elm$core$Basics$composeL,
																	$elm$core$String$toUpper,
																	A2($elm$core$String$slice, 0, 1)),
																$author$project$Utils$removestopwords),
															$kuon$elm_string_normalize$String$Normalize$removeDiacritics),
														$elm$core$String$toLower)(letter))
												]));
									case 'UitHetHoofd':
										var letter = l.a;
										return A2(
											$elm$html$Html$th,
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/uithethoofd.jpg\')'),
												styles),
											_List_fromArray(
												[
													$elm$html$Html$text(
													A2(
														$elm$core$Basics$composeL,
														A2(
															$elm$core$Basics$composeL,
															A2(
																$elm$core$Basics$composeL,
																A2(
																	$elm$core$Basics$composeL,
																	$elm$core$String$toUpper,
																	A2($elm$core$String$slice, 0, 1)),
																$author$project$Utils$removestopwords),
															$kuon$elm_string_normalize$String$Normalize$removeDiacritics),
														$elm$core$String$toLower)(letter))
												]));
									case 'Paars':
										return A2(
											$elm$html$Html$th,
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/uithethoofd.jpg\')'),
												styles),
											_List_Nil);
									case 'Wit':
										return A2(
											$elm$html$Html$th,
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$Attributes$style, 'background-color', 'white'),
												styles),
											_List_Nil);
									case 'Vraagteken':
										return A2(
											$elm$html$Html$th,
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$Attributes$style, 'background-color', 'white'),
												styles),
											_List_fromArray(
												[
													$elm$html$Html$text('?')
												]));
									case 'Streepje':
										return A2(
											$elm$html$Html$th,
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$Attributes$style, 'background-color', 'black'),
												A2(
													$elm$core$List$cons,
													A2($elm$html$Html$Attributes$style, 'color', 'white'),
													styles)),
											_List_fromArray(
												[
													$elm$html$Html$text('-')
												]));
									default:
										return A2(
											$elm$html$Html$th,
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$Attributes$style, 'background-color', 'black'),
												styles),
											_List_Nil);
								}
							},
							A2(
								$elm_community$list_extra$List$Extra$zip,
								_List_fromArray(
									[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
								ls)))),
				$author$project$Letters$numbersbelow(lastQuestion)));
	});
var $author$project$Hoofdspel$letterbalk = function (status) {
	return A3(
		$author$project$Letters$letters,
		$elm$core$Maybe$Just(status.lastQuestion),
		A2(
			$elm$core$List$map,
			$author$project$Hoofdspel$getBeginLetter(status),
			_List_fromArray(
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])),
		$elm$core$Maybe$Nothing);
};
var $author$project$Letters$punten = function (x) {
	return A2(
		$elm$svg$Svg$svg,
		_Utils_ap(
			$author$project$Utils$svgfullsize,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'opacity', '100%')
				])),
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$rect,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$x('7.5cqh'),
						$elm$svg$Svg$Attributes$y('0'),
						$elm$svg$Svg$Attributes$width('calc(100% - 7.5cqh)'),
						$elm$svg$Svg$Attributes$height('100%'),
						$elm$svg$Svg$Attributes$fill('rgb(227, 7, 20)')
					]),
				_List_Nil),
				A2(
				$elm$svg$Svg$circle,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$cx('7.5cqh'),
						$elm$svg$Svg$Attributes$cy('50%'),
						$elm$svg$Svg$Attributes$r('7.5cqh'),
						$elm$svg$Svg$Attributes$fill('rgb(227, 7, 20)')
					]),
				_List_Nil),
				A2(
				$elm$svg$Svg$circle,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$cx('7.5cqh'),
						$elm$svg$Svg$Attributes$cy('50%'),
						$elm$svg$Svg$Attributes$r('6.5cqh'),
						$elm$svg$Svg$Attributes$stroke('#ffffff'),
						$elm$svg$Svg$Attributes$strokeWidth('0.7cqh'),
						$elm$svg$Svg$Attributes$fill('none')
					]),
				_List_Nil),
				A2(
				$elm$svg$Svg$foreignObject,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$x('0'),
						$elm$svg$Svg$Attributes$y('0'),
						$elm$svg$Svg$Attributes$width('15cqh'),
						$elm$svg$Svg$Attributes$height('100%')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_Utils_ap(
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'white'),
									A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
									A2($elm$html$Html$Attributes$style, 'font-size', '3.8cqh')
								]),
							$author$project$Utils$centeringstuff),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$elm$core$String$fromInt(x))
							]))
					]))
			]));
};
var $author$project$Types$NextQ = {$: 'NextQ'};
var $author$project$Types$PreviousQ = {$: 'PreviousQ'};
var $elm$svg$Svg$image = $elm$svg$Svg$trustedNode('image');
var $elm$svg$Svg$Attributes$opacity = _VirtualDom_attribute('opacity');
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$svg$Svg$Attributes$xlinkHref = function (value) {
	return A3(
		_VirtualDom_attributeNS,
		'http://www.w3.org/1999/xlink',
		'xlink:href',
		_VirtualDom_noJavaScriptUri(value));
};
var $author$project$Hoofdspel$vraagbox = function (status) {
	return $author$project$Utils$rows(
		_List_fromArray(
			[
				_Utils_Tuple3(5, _List_Nil, _List_Nil),
				_Utils_Tuple3(
				90,
				_List_Nil,
				$author$project$Utils$cols(
					_List_fromArray(
						[
							_Utils_Tuple2(5, _List_Nil),
							_Utils_Tuple2(
							90,
							_List_fromArray(
								[
									A2(
									$elm$svg$Svg$svg,
									$author$project$Utils$svgfullsize,
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$rect,
											A2(
												$elm$core$List$cons,
												$elm$svg$Svg$Attributes$fill('#ffffff'),
												$author$project$Utils$svgfullsize),
											_List_Nil),
											A2(
											$elm$svg$Svg$image,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$x('0%'),
													$elm$svg$Svg$Attributes$y('30%'),
													$elm$svg$Svg$Attributes$width('100%'),
													$elm$svg$Svg$Attributes$height('100%'),
													$elm$svg$Svg$Attributes$xlinkHref('images/vraagbox.jpg'),
													$elm$svg$Svg$Attributes$opacity('50%')
												]),
											_List_Nil),
											A2(
											$elm$svg$Svg$foreignObject,
											$author$project$Utils$svgfullsize,
											$author$project$Utils$rows(
												_List_fromArray(
													[
														_Utils_Tuple3(5, _List_Nil, _List_Nil),
														_Utils_Tuple3(
														20,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$elm$html$Html$div,
																$author$project$Utils$centeringstuff,
																_List_fromArray(
																	[
																		A2(
																		$elm$html$Html$button,
																		_List_fromArray(
																			[
																				$elm$html$Html$Events$onClick($author$project$Types$PreviousQ),
																				$elm$html$Html$Attributes$id('btn__back'),
																				A2($elm$html$Html$Attributes$style, 'height', '0%'),
																				A2($elm$html$Html$Attributes$style, 'width', '0%'),
																				A2($elm$html$Html$Attributes$style, 'position', 'relative'),
																				A2(
																				$elm$html$Html$Attributes$style,
																				'top',
																				((status.questionNumber < 2) || status.searching) ? '-500%' : '-50%'),
																				A2($elm$html$Html$Attributes$style, 'right', '10%')
																			]),
																		_List_Nil),
																		A2(
																		$elm$svg$Svg$svg,
																		_List_fromArray(
																			[
																				$elm$svg$Svg$Attributes$height('15cqh'),
																				$elm$svg$Svg$Attributes$width('15cqh')
																			]),
																		_List_fromArray(
																			[
																				A2(
																				$elm$svg$Svg$circle,
																				_List_fromArray(
																					[
																						$elm$svg$Svg$Attributes$cx('50%'),
																						$elm$svg$Svg$Attributes$cy('50%'),
																						$elm$svg$Svg$Attributes$r('50%'),
																						$elm$svg$Svg$Attributes$fill('rgb(227, 7, 20)')
																					]),
																				_List_Nil),
																				A2(
																				$elm$svg$Svg$circle,
																				_List_fromArray(
																					[
																						$elm$svg$Svg$Attributes$cx('50%'),
																						$elm$svg$Svg$Attributes$cy('50%'),
																						$elm$svg$Svg$Attributes$r('45%'),
																						$elm$svg$Svg$Attributes$stroke('#ffffff'),
																						$elm$svg$Svg$Attributes$strokeWidth('0.7cqh'),
																						$elm$svg$Svg$Attributes$fill('none')
																					]),
																				_List_Nil),
																				A2(
																				$elm$svg$Svg$foreignObject,
																				$author$project$Utils$svgfullsize,
																				_List_fromArray(
																					[
																						A2(
																						$elm$html$Html$div,
																						_Utils_ap(
																							_List_fromArray(
																								[
																									A2($elm$html$Html$Attributes$style, 'color', 'white'),
																									A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
																									A2($elm$html$Html$Attributes$style, 'font-size', '3.8cqh')
																								]),
																							$author$project$Utils$centeringstuff),
																						_List_fromArray(
																							[
																								$elm$html$Html$text(
																								$elm$core$String$fromInt(status.questionNumber))
																							]))
																					]))
																			])),
																		A2(
																		$elm$html$Html$button,
																		_List_fromArray(
																			[
																				$elm$html$Html$Events$onClick($author$project$Types$NextQ),
																				$elm$html$Html$Attributes$id('btn__forward'),
																				A2($elm$html$Html$Attributes$style, 'height', '0%'),
																				A2($elm$html$Html$Attributes$style, 'width', '0%'),
																				A2($elm$html$Html$Attributes$style, 'position', 'relative'),
																				A2(
																				$elm$html$Html$Attributes$style,
																				'top',
																				((status.questionNumber > 11) || status.searching) ? '-500%' : '-50%'),
																				A2($elm$html$Html$Attributes$style, 'left', '10%')
																			]),
																		_List_Nil)
																	]))
															])),
														_Utils_Tuple3(
														45,
														_List_Nil,
														$author$project$Utils$cols(
															_List_fromArray(
																[
																	_Utils_Tuple2(5, _List_Nil),
																	_Utils_Tuple2(
																	90,
																	_List_fromArray(
																		[
																			A2(
																			$elm$html$Html$p,
																			_List_fromArray(
																				[
																					A2($elm$html$Html$Attributes$style, 'width', '95%')
																				]),
																			_List_fromArray(
																				[
																					$elm$html$Html$text(
																					(status.questionNumber === 8) ? 'Vraag 8 is de paardensprong, daar willen jullie misschien samen naar kijken...' : A2(
																						$elm$core$Maybe$withDefault,
																						'error: geen vraag ' + $elm$core$String$fromInt(status.questionNumber),
																						A2($elm$core$Dict$get, status.questionNumber, status.data.vragen)))
																				]))
																		]))
																]))),
														_Utils_Tuple3(
														15,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$elm$html$Html$input,
																_Utils_ap(
																	$author$project$Utils$centeringstuff,
																	_List_fromArray(
																		[
																			A2($elm$html$Html$Attributes$style, 'height', '100%'),
																			A2($elm$html$Html$Attributes$style, 'width', '60%'),
																			A2($elm$html$Html$Attributes$style, 'font-size', '3cqh'),
																			A2($elm$html$Html$Attributes$style, 'padding', '0cqh 2cqh'),
																			$elm$html$Html$Attributes$placeholder('antwoord'),
																			$elm$html$Html$Attributes$value(
																			A2(
																				$elm$core$Maybe$withDefault,
																				'',
																				A2($elm$core$Dict$get, status.questionNumber, status.gegevenantwoorden))),
																			$elm$html$Html$Events$onInput($author$project$Types$Answer)
																		])),
																_List_Nil)
															])),
														_Utils_Tuple3(5, _List_Nil, _List_Nil),
														_Utils_Tuple3(
														10,
														_List_Nil,
														_List_fromArray(
															[
																A2($elm$html$Html$div, $author$project$Utils$centeringstuff, _List_Nil)
															]))
													])))
										]))
								]))
						])))
			]));
};
var $elm$html$Html$embed = _VirtualDom_node('embed');
var $author$project$Hoofdspel$paardensprong = function (status) {
	var startplek = status.data.paardsprongrng.b;
	var sprongwoord = $elm$core$String$toUpper(
		function () {
			var _v1 = A2($elm$core$Dict$get, 8, status.data.antwoorden);
			if (_v1.$ === 'Nothing') {
				return 'Error';
			} else {
				var str = _v1.a;
				return str;
			}
		}());
	var klokmee = status.data.paardsprongrng.a;
	var f = function (i) {
		var ix = ((8 + startplek) + (i * klokmee)) - 1;
		return A3(
			$elm$core$String$slice,
			ix,
			ix + 1,
			_Utils_ap(
				sprongwoord,
				_Utils_ap(sprongwoord, sprongwoord)));
	};
	return _List_fromArray(
		[
			A2(
			$elm$svg$Svg$svg,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$width('62cqh'),
						$elm$svg$Svg$Attributes$height('62cqh'),
						$elm$svg$Svg$Attributes$viewBox('0 0 62cqh 62cqh')
					]),
				$author$project$Utils$centeringstuff),
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						$elm$svg$Svg$image,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$x('0'),
								$elm$svg$Svg$Attributes$y('0'),
								$elm$svg$Svg$Attributes$width('100%'),
								$elm$svg$Svg$Attributes$height('100%'),
								$elm$svg$Svg$Attributes$xlinkHref('images/paardensprong.jpeg')
							]),
						_List_Nil),
						A2(
						$elm$svg$Svg$foreignObject,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$x('10.5%'),
								$elm$svg$Svg$Attributes$y('9%'),
								$elm$svg$Svg$Attributes$width('23.5%'),
								$elm$svg$Svg$Attributes$height('23.5%')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$Attributes$style, 'font-size', '10cqh'),
									A2(
										$elm$core$List$cons,
										A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder'),
										A2(
											$elm$core$List$cons,
											A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
											$author$project$Utils$centeringstuff))),
								_List_fromArray(
									[
										$elm$html$Html$text(
										f(1))
									]))
							])),
						A2(
						$elm$svg$Svg$foreignObject,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$x('38%'),
								$elm$svg$Svg$Attributes$y('9%'),
								$elm$svg$Svg$Attributes$width('23.5%'),
								$elm$svg$Svg$Attributes$height('23.5%')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$Attributes$style, 'font-size', '10cqh'),
									A2(
										$elm$core$List$cons,
										A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder'),
										A2(
											$elm$core$List$cons,
											A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
											$author$project$Utils$centeringstuff))),
								_List_fromArray(
									[
										$elm$html$Html$text(
										f(4))
									]))
							])),
						A2(
						$elm$svg$Svg$foreignObject,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$x('66%'),
								$elm$svg$Svg$Attributes$y('9%'),
								$elm$svg$Svg$Attributes$width('23.5%'),
								$elm$svg$Svg$Attributes$height('23.5%')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$Attributes$style, 'font-size', '10cqh'),
									A2(
										$elm$core$List$cons,
										A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder'),
										A2(
											$elm$core$List$cons,
											A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
											$author$project$Utils$centeringstuff))),
								_List_fromArray(
									[
										$elm$html$Html$text(
										f(7))
									]))
							])),
						A2(
						$elm$svg$Svg$foreignObject,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$x('10.5%'),
								$elm$svg$Svg$Attributes$y('37%'),
								$elm$svg$Svg$Attributes$width('23.5%'),
								$elm$svg$Svg$Attributes$height('23.5%')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$Attributes$style, 'font-size', '10cqh'),
									A2(
										$elm$core$List$cons,
										A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder'),
										A2(
											$elm$core$List$cons,
											A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
											$author$project$Utils$centeringstuff))),
								_List_fromArray(
									[
										$elm$html$Html$text(
										f(6))
									]))
							])),
						A2(
						$elm$svg$Svg$foreignObject,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$x('66%'),
								$elm$svg$Svg$Attributes$y('37%'),
								$elm$svg$Svg$Attributes$width('23.5%'),
								$elm$svg$Svg$Attributes$height('23.5%')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$Attributes$style, 'font-size', '10cqh'),
									A2(
										$elm$core$List$cons,
										A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder'),
										A2(
											$elm$core$List$cons,
											A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
											$author$project$Utils$centeringstuff))),
								_List_fromArray(
									[
										$elm$html$Html$text(
										f(2))
									]))
							])),
						A2(
						$elm$svg$Svg$foreignObject,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$x('10.5%'),
								$elm$svg$Svg$Attributes$y('65%'),
								$elm$svg$Svg$Attributes$width('23.5%'),
								$elm$svg$Svg$Attributes$height('23.5%')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$Attributes$style, 'font-size', '10cqh'),
									A2(
										$elm$core$List$cons,
										A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder'),
										A2(
											$elm$core$List$cons,
											A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
											$author$project$Utils$centeringstuff))),
								_List_fromArray(
									[
										$elm$html$Html$text(
										f(3))
									]))
							])),
						A2(
						$elm$svg$Svg$foreignObject,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$x('38%'),
								$elm$svg$Svg$Attributes$y('65%'),
								$elm$svg$Svg$Attributes$width('23.5%'),
								$elm$svg$Svg$Attributes$height('23.5%')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$Attributes$style, 'font-size', '10cqh'),
									A2(
										$elm$core$List$cons,
										A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder'),
										A2(
											$elm$core$List$cons,
											A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
											$author$project$Utils$centeringstuff))),
								_List_fromArray(
									[
										$elm$html$Html$text(
										f(8))
									]))
							])),
						A2(
						$elm$svg$Svg$foreignObject,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$x('66%'),
								$elm$svg$Svg$Attributes$y('65%'),
								$elm$svg$Svg$Attributes$width('23.5%'),
								$elm$svg$Svg$Attributes$height('23.5%')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$Attributes$style, 'font-size', '10cqh'),
									A2(
										$elm$core$List$cons,
										A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder'),
										A2(
											$elm$core$List$cons,
											A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
											$author$project$Utils$centeringstuff))),
								_List_fromArray(
									[
										$elm$html$Html$text(
										f(5))
									]))
							]))
					]),
				function () {
					var _v0 = status.paardensprongbegintijd;
					if (_v0.$ === 'Nothing') {
						return _List_Nil;
					} else {
						var psbt = _v0.a;
						return (($elm$time$Time$posixToMillis(status.currentTime) - $elm$time$Time$posixToMillis(psbt)) >= 30000) ? _List_Nil : A2(
							$author$project$Letters$klokje,
							'50%',
							($elm$time$Time$posixToMillis(psbt) + 30000) - $elm$time$Time$posixToMillis(status.currentTime));
					}
				}()))
		]);
};
var $elm_community$maybe_extra$Maybe$Extra$unwrap = F3(
	function (_default, f, m) {
		if (m.$ === 'Nothing') {
			return _default;
		} else {
			var a = m.a;
			return f(a);
		}
	});
var $author$project$Hoofdspel$wiki = function (status) {
	return $author$project$Utils$rows(
		_List_fromArray(
			[
				_Utils_Tuple3(
				10,
				_List_Nil,
				$author$project$Utils$rows(
					_List_fromArray(
						[
							_Utils_Tuple3(
							30,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'height', '100%')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$button,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick($author$project$Types$StartStopWiki),
												A2($elm$html$Html$Attributes$style, 'height', '70%'),
												A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(227, 7, 20)'),
												A2($elm$html$Html$Attributes$style, 'color', 'white'),
												A2($elm$html$Html$Attributes$style, 'border', 'none'),
												A2($elm$html$Html$Attributes$style, 'border-radius', '1cqh'),
												A2($elm$html$Html$Attributes$style, 'font-size', '3cqh'),
												A2($elm$html$Html$Attributes$style, 'font-family', 'Lucida Sans'),
												A2($elm$html$Html$Attributes$style, 'box-shadow', '1px 9px #888888')
											]),
										_Utils_ap(
											$author$project$Utils$centeringstuff,
											((status.questionNumber === 8) && A3(
												$elm_community$maybe_extra$Maybe$Extra$unwrap,
												false,
												function (psbt) {
													return ($elm$time$Time$posixToMillis(status.currentTime) - $elm$time$Time$posixToMillis(psbt)) <= 30000;
												},
												status.paardensprongbegintijd)) ? _List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'opacity', '0%')
												]) : _List_Nil)),
									status.searching ? _List_fromArray(
										[
											$elm$html$Html$text('\u00A0\uD83D\uDD14\u00A0Bellen!\u00A0\uD83D\uDD14\u00A0')
										]) : ((status.questionNumber === 8) ? _List_fromArray(
										[
											$elm$html$Html$text('\u00A0Paardensprong bekijken\u00A0')
										]) : _List_fromArray(
										[
											$elm$html$Html$text('\u00A0Dat zoeken we op!\u00A0')
										])))
								])),
							_Utils_Tuple3(
							30,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'height', '100%')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$button,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick($author$project$Types$NaarWoordraden),
												A2($elm$html$Html$Attributes$style, 'height', '70%'),
												A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(227, 7, 20)'),
												A2($elm$html$Html$Attributes$style, 'color', 'white'),
												A2($elm$html$Html$Attributes$style, 'border', 'none'),
												A2($elm$html$Html$Attributes$style, 'border-radius', '1cqh'),
												A2($elm$html$Html$Attributes$style, 'font-size', '3cqh'),
												A2($elm$html$Html$Attributes$style, 'font-family', 'Lucida Sans'),
												A2($elm$html$Html$Attributes$style, 'box-shadow', '1px 9px #888888')
											]),
										$author$project$Utils$centeringstuff),
									_List_fromArray(
										[
											$elm$html$Html$text('\u00A0Beginnen met het woord\u00A0')
										]))
								]))
						]))),
				_Utils_Tuple3(
				85,
				_List_Nil,
				$author$project$Utils$cols(
					_List_fromArray(
						[
							_Utils_Tuple2(5, _List_Nil),
							_Utils_Tuple2(
							90,
							function () {
								if (status.questionNumber === 8) {
									var _v0 = _Utils_Tuple2(status.searching, status.paardensprongbegintijd);
									if (_v0.a) {
										return $author$project$Hoofdspel$paardensprong(status);
									} else {
										if (_v0.b.$ === 'Nothing') {
											var _v1 = _v0.b;
											return _List_Nil;
										} else {
											var psbt = _v0.b.a;
											return (($elm$time$Time$posixToMillis(status.currentTime) - $elm$time$Time$posixToMillis(psbt)) <= 30000) ? $author$project$Hoofdspel$paardensprong(status) : _List_Nil;
										}
									}
								} else {
									if (status.searching) {
										return _List_fromArray(
											[
												A2(
												$elm$svg$Svg$svg,
												$author$project$Utils$svgfullsize,
												_List_fromArray(
													[
														A2(
														$elm$svg$Svg$rect,
														_Utils_ap(
															$author$project$Utils$svgfullsize,
															_List_fromArray(
																[
																	$elm$svg$Svg$Attributes$fill('#ffffff')
																])),
														_List_Nil),
														A2(
														$elm$svg$Svg$foreignObject,
														$author$project$Utils$svgfullsize,
														_List_fromArray(
															[
																A2(
																$elm$html$Html$embed,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$type_('text/html'),
																		$elm$html$Html$Attributes$src('https://nl.wikipedia.org'),
																		A2($elm$html$Html$Attributes$style, 'width', '100%'),
																		A2($elm$html$Html$Attributes$style, 'height', '100%')
																	]),
																_List_Nil)
															]))
													]))
											]);
									} else {
										return _List_Nil;
									}
								}
							}()),
							_Utils_Tuple2(5, _List_Nil)
						])))
			]));
};
var $author$project$Hoofdspel$viewGame = function (status) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/astrid.jpg\')'),
				A2($elm$html$Html$Attributes$style, 'background-size', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '100%')
			]),
		$author$project$Utils$rows(
			_List_fromArray(
				[
					_Utils_Tuple3(
					80,
					_List_Nil,
					$author$project$Utils$cols(
						_List_fromArray(
							[
								_Utils_Tuple2(
								25,
								$author$project$Hoofdspel$vraagbox(status)),
								_Utils_Tuple2(
								70,
								$author$project$Hoofdspel$wiki(status))
							]))),
					_Utils_Tuple3(
					15,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(237, 230, 214, 0.9)'),
							A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder')
						]),
					$author$project$Utils$cols(
						_List_fromArray(
							[
								_Utils_Tuple2(
								10,
								_List_fromArray(
									[
										$author$project$Letters$klok(
										$elm$time$Time$posixToMillis(status.timeTheGameEnds) - $elm$time$Time$posixToMillis(status.currentTime))
									])),
								_Utils_Tuple2(
								80,
								_List_fromArray(
									[
										$author$project$Hoofdspel$letterbalk(status)
									])),
								_Utils_Tuple2(
								10,
								_List_fromArray(
									[
										$author$project$Letters$punten(status.punten)
									]))
							]))),
					_Utils_Tuple3(5, _List_Nil, _List_Nil)
				])));
};
var $author$project$Types$fromSpelduur = function (x) {
	switch (x.$) {
		case 'Zestien':
			return 16;
		case 'Vijftien':
			return 15;
		default:
			return 14;
	}
};
var $author$project$Highscores$tablebody = $elm$core$List$indexedMap(
	F2(
		function (ix, _v0) {
			var nm = _v0.a;
			var scr = _v0.b;
			return A2(
				$elm$html$Html$tr,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$td,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'text-align', 'left')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$elm$core$String$fromInt(ix + 1))
							])),
						A2(
						$elm$html$Html$td,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'text-align', 'left')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(nm)
							])),
						A2(
						$elm$html$Html$td,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'text-align', 'center')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$elm$core$String$fromInt(scr))
							]))
					]));
		}));
var $author$project$Highscores$tableheaders = A2(
	$elm$html$Html$tr,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$elm$html$Html$th,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'text-align', 'left')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('\u00A0\u00A0\u00A0')
				])),
			A2(
			$elm$html$Html$th,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'text-align', 'left')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('Naam\u00A0\u00A0\u00A0')
				])),
			A2(
			$elm$html$Html$th,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'text-align', 'center')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('\u00A0Score\u00A0')
				]))
		]));
var $author$project$Highscores$viewHighscore = function (info) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/leeg.jpeg\')'),
				A2($elm$html$Html$Attributes$style, 'background-size', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '100%'),
				A2($elm$html$Html$Attributes$style, 'color', 'white'),
				A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder'),
				A2($elm$html$Html$Attributes$style, 'font-size', '5cqh'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
				A2($elm$html$Html$Attributes$style, 'width', '100%'),
				A2($elm$html$Html$Attributes$style, 'text-shadow', '2px 2px 4px #000000'),
				$elm$html$Html$Events$onClick($author$project$Types$Submit)
			]),
		$author$project$Utils$rows(
			_List_fromArray(
				[
					_Utils_Tuple3(
					20,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$svg,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$height('100%'),
									$elm$svg$Svg$Attributes$width('0')
								]),
							_List_Nil)
						])),
					_Utils_Tuple3(
					40,
					_List_Nil,
					$author$project$Utils$cols(
						_List_fromArray(
							[
								_Utils_Tuple2(37, _List_Nil),
								_Utils_Tuple2(
								20,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$table,
										_List_Nil,
										A2(
											$elm$core$List$cons,
											$author$project$Highscores$tableheaders,
											$author$project$Highscores$tablebody(
												A2(
													$elm$core$Maybe$withDefault,
													_List_Nil,
													A2(
														$elm$core$Dict$get,
														$author$project$Types$fromSpelduur(info.huidig),
														info.alle)))))
									])),
								_Utils_Tuple2(43, _List_Nil)
							]))),
					_Utils_Tuple3(10, _List_Nil, _List_Nil),
					_Utils_Tuple3(
					30,
					_List_Nil,
					$author$project$Utils$cols(
						_List_fromArray(
							[
								_Utils_Tuple2(37, _List_Nil),
								_Utils_Tuple2(
								20,
								function () {
									var content = function () {
										var _v0 = info.jouw;
										if (_v0.$ === 'Nothing') {
											return _List_Nil;
										} else {
											var _v1 = _v0.a;
											var d = _v1.a;
											var p = _v1.b;
											return _List_fromArray(
												[
													$elm$html$Html$text(
													'Jouw score: ' + $elm$core$String$fromInt(p))
												]);
										}
									}();
									return _List_fromArray(
										[
											A2(
											$elm$html$Html$div,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'text-align', 'center')
												]),
											content)
										]);
								}()),
								_Utils_Tuple2(43, _List_Nil)
							])))
				])));
};
var $author$project$Types$LetterKopen = function (a) {
	return {$: 'LetterKopen', a: a};
};
var $author$project$Nakijken$letterbalk = function (status) {
	return A3(
		$author$project$Letters$letters,
		$elm$core$Maybe$Just(12),
		A2(
			$elm$core$List$map,
			function ($) {
				return $.show;
			},
			$elm$core$Dict$values(status.info)),
		$elm$core$Maybe$Just($author$project$Types$LetterKopen));
};
var $author$project$Nakijken$viewfocus = function (status) {
	return A2(
		$elm$svg$Svg$svg,
		$author$project$Utils$svgfullsize,
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$rect,
				A2(
					$elm$core$List$cons,
					$elm$svg$Svg$Attributes$fill('rgba(237, 230, 214, 0.9)'),
					$author$project$Utils$svgfullsize),
				_List_Nil),
				A2(
				$elm$svg$Svg$foreignObject,
				$author$project$Utils$svgfullsize,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'padding', '5cqh 5cqh')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'font-size', '2.5cqh')
									]),
								function () {
									var _v0 = A2(
										$elm$core$Maybe$andThen,
										A2($elm_community$basics_extra$Basics$Extra$flip, $elm$core$Dict$get, status.info),
										status.focus);
									if (_v0.$ === 'Nothing') {
										return _List_fromArray(
											[
												$elm$html$Html$text('Klik op een letter om de vraag en het antwoord te bekijken.')
											]);
									} else {
										var info = _v0.a;
										return _List_fromArray(
											[
												$elm$html$Html$text(info.vraag),
												A2($elm$html$Html$br, _List_Nil, _List_Nil),
												A2($elm$html$Html$br, _List_Nil, _List_Nil),
												$elm$html$Html$text('Gegeven antwoord: ' + info.gegeven),
												A2($elm$html$Html$br, _List_Nil, _List_Nil),
												A2($elm$html$Html$br, _List_Nil, _List_Nil),
												$elm$html$Html$text('Juiste antwoord: ' + info.correct)
											]);
									}
								}())
							]))
					]))
			]));
};
var $author$project$Nakijken$viewNakijk = function (status) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/astrid.jpg\')'),
				A2($elm$html$Html$Attributes$style, 'background-size', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '100%')
			]),
		$author$project$Utils$rows(
			_List_fromArray(
				[
					_Utils_Tuple3(15, _List_Nil, _List_Nil),
					_Utils_Tuple3(
					50,
					_List_Nil,
					$author$project$Utils$cols(
						_List_fromArray(
							[
								_Utils_Tuple2(5, _List_Nil),
								_Utils_Tuple2(
								45,
								_List_fromArray(
									[
										$author$project$Nakijken$viewfocus(status)
									])),
								_Utils_Tuple2(30, _List_Nil),
								_Utils_Tuple2(
								15,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'position', 'relative'),
												A2($elm$html$Html$Attributes$style, 'top', '40%'),
												$elm$html$Html$Events$onClick($author$project$Types$GetHighscores),
												A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(227, 7, 20)'),
												A2($elm$html$Html$Attributes$style, 'color', 'white'),
												A2($elm$html$Html$Attributes$style, 'border', 'none'),
												A2($elm$html$Html$Attributes$style, 'border-radius', '1cqh'),
												A2($elm$html$Html$Attributes$style, 'font-size', '3cqh'),
												A2($elm$html$Html$Attributes$style, 'font-family', 'Lucida Sans'),
												A2($elm$html$Html$Attributes$style, 'box-shadow', '1px 9px #888888'),
												A2($elm$html$Html$Attributes$style, 'height', '6cqh')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('\u00A0Naar highscores\u00A0')
											]))
									])),
								_Utils_Tuple2(5, _List_Nil)
							]))),
					_Utils_Tuple3(15, _List_Nil, _List_Nil),
					_Utils_Tuple3(
					15,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(237, 230, 214, 0.9)'),
							A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder')
						]),
					$author$project$Utils$cols(
						_List_fromArray(
							[
								_Utils_Tuple2(
								10,
								_List_fromArray(
									[
										$author$project$Letters$klok(status.tijdover)
									])),
								_Utils_Tuple2(
								80,
								_List_fromArray(
									[
										$author$project$Nakijken$letterbalk(status)
									])),
								_Utils_Tuple2(
								10,
								_List_fromArray(
									[
										$author$project$Letters$punten(status.punten)
									]))
							]))),
					_Utils_Tuple3(5, _List_Nil, _List_Nil)
				])));
};
var $author$project$Utils$first = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	var c = _v0.c;
	return a;
};
var $author$project$Woordraden$viewWoord = function (status) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/astrid.jpg\')'),
				A2($elm$html$Html$Attributes$style, 'background-size', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '100%')
			]),
		$author$project$Utils$rows(
			_List_fromArray(
				[
					_Utils_Tuple3(55, _List_Nil, _List_Nil),
					_Utils_Tuple3(
					15,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(237, 230, 214, 0.9)'),
							A2($elm$html$Html$Attributes$style, 'font-weight', 'bolder')
						]),
					$author$project$Utils$cols(
						_List_fromArray(
							[
								_Utils_Tuple2(
								10,
								_List_fromArray(
									[
										$author$project$Letters$klok(
										$elm$time$Time$posixToMillis(status.timeTheGameEnds) - $elm$time$Time$posixToMillis(status.currentTime))
									])),
								_Utils_Tuple2(
								80,
								$author$project$Utils$rows(
									_List_fromArray(
										[
											_Utils_Tuple3(0, _List_Nil, _List_Nil),
											_Utils_Tuple3(
											10,
											_List_Nil,
											_List_fromArray(
												[
													A3(
													$author$project$Letters$letters,
													$elm$core$Maybe$Just(13),
													A2($elm$core$List$map, $author$project$Utils$first, status.koopbaar),
													$elm$core$Maybe$Just($author$project$Types$LetterKopen))
												])),
											_Utils_Tuple3(72, _List_Nil, _List_Nil),
											_Utils_Tuple3(
											5,
											_List_Nil,
											_List_fromArray(
												[
													A3($author$project$Letters$letters, $elm$core$Maybe$Nothing, status.gekocht, $elm$core$Maybe$Nothing)
												])),
											_Utils_Tuple3(0, _List_Nil, _List_Nil)
										]))),
								_Utils_Tuple2(
								10,
								_List_fromArray(
									[
										$author$project$Letters$punten(status.punten)
									]))
							]))),
					_Utils_Tuple3(10, _List_Nil, _List_Nil),
					_Utils_Tuple3(
					10,
					_List_Nil,
					$author$project$Utils$cols(
						_List_fromArray(
							[
								_Utils_Tuple2(30, _List_Nil),
								_Utils_Tuple2(
								30,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$input,
										A2(
											$elm$core$List$cons,
											A2($elm$html$Html$Attributes$style, 'height', '100%'),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$Attributes$style, 'width', '100%'),
												A2(
													$elm$core$List$cons,
													A2($elm$html$Html$Attributes$style, 'font-size', '3cqh'),
													A2(
														$elm$core$List$cons,
														A2($elm$html$Html$Attributes$style, 'padding', '0cqh 2cqh'),
														A2(
															$elm$core$List$cons,
															$elm$html$Html$Attributes$placeholder('antwoord'),
															A2(
																$elm$core$List$cons,
																$elm$html$Html$Attributes$value(status.woord),
																A2(
																	$elm$core$List$cons,
																	$elm$html$Html$Events$onInput($author$project$Types$Answer),
																	$author$project$Utils$centeringstuff))))))),
										_List_Nil)
									])),
								_Utils_Tuple2(5, _List_Nil),
								_Utils_Tuple2(
								5,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$button,
										_Utils_ap(
											_List_fromArray(
												[
													$elm$html$Html$Events$onClick($author$project$Types$Submit),
													A2($elm$html$Html$Attributes$style, 'height', '70%'),
													A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(227, 7, 20)'),
													A2($elm$html$Html$Attributes$style, 'color', 'white'),
													A2($elm$html$Html$Attributes$style, 'border', 'none'),
													A2($elm$html$Html$Attributes$style, 'border-radius', '1cqh'),
													A2($elm$html$Html$Attributes$style, 'font-size', '3cqh'),
													A2($elm$html$Html$Attributes$style, 'font-family', 'Lucida Sans'),
													A2($elm$html$Html$Attributes$style, 'box-shadow', '1px 9px #888888')
												]),
											$author$project$Utils$centeringstuff),
										_List_fromArray(
											[
												$elm$html$Html$text('\u00A0Klaar\u00A0')
											]))
									])),
								_Utils_Tuple2(30, _List_Nil)
							]))),
					_Utils_Tuple3(10, _List_Nil, _List_Nil)
				])));
};
var $author$project$Main$view = F2(
	function (_v0, model) {
		switch (model.$) {
			case 'InGame':
				var status = model.a;
				return $author$project$Hoofdspel$viewGame(status);
			case 'Woordraden':
				var status = model.a;
				return $author$project$Woordraden$viewWoord(status);
			case 'Afrekenen':
				var status = model.a;
				return $author$project$Afrekenen$viewAfrekenen(status);
			case 'HomeScreen':
				var status = model.a;
				var _v2 = status.introstart;
				if (_v2.$ === 'Nothing') {
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/leeg.jpeg\')'),
								A2($elm$html$Html$Attributes$style, 'background-size', '100%'),
								A2($elm$html$Html$Attributes$style, 'height', '100%')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$video,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$id('media-video'),
										A2($elm$html$Html$Attributes$style, 'width', '100%'),
										$elm$html$Html$Events$onClick($author$project$Types$PlayAudio)
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$source,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$src('video/intro.mp4'),
												$elm$html$Html$Attributes$type_('video/mp4')
											]),
										_List_Nil)
									])),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'left', '50%'),
										A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
										A2($elm$html$Html$Attributes$style, 'transform', 'translate(-50%, -70cqh)'),
										A2($elm$html$Html$Attributes$style, 'font-size', '5cqh'),
										$elm$html$Html$Events$onClick($author$project$Types$PlayAudio)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Klik om te beginnen')
									]))
							]));
				} else {
					var ms = _v2.a;
					var millisdiff = $elm$time$Time$posixToMillis(status.now) - $elm$time$Time$posixToMillis(ms);
					return (_Utils_cmp(
						millisdiff,
						$author$project$Main$intro ? 18000 : 10) < 1) ? A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/leeg.jpeg\')'),
								A2($elm$html$Html$Attributes$style, 'background-size', '100%'),
								A2($elm$html$Html$Attributes$style, 'height', '100%')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$video,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$id('media-video'),
										$elm$html$Html$Events$onClick($author$project$Types$PlayAudio),
										A2($elm$html$Html$Attributes$style, 'width', '100%'),
										A2(
										$elm$html$Html$Attributes$style,
										'opacity',
										$elm$core$String$fromInt(
											A2(
												$elm$core$Basics$max,
												((16000 - A2($elm$core$Basics$max, 15000, millisdiff)) / 10) | 0,
												0)) + '%')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$source,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$src('video/intro.mp4'),
												$elm$html$Html$Attributes$type_('video/mp4')
											]),
										_List_Nil)
									]))
							])) : $author$project$Main$beginmenu(status);
				}
			case 'Highscore':
				var status = model.a;
				return $author$project$Highscores$viewHighscore(status);
			default:
				var status = model.a;
				return $author$project$Nakijken$viewNakijk(status);
		}
	});
var $author$project$Main$main = $MartinSStewart$elm_audio$Audio$elementWithAudio(
	{
		audio: $author$project$Main$audio,
		audioPort: {fromJS: $author$project$Main$audioPortFromJS, toJS: $author$project$Main$audioPortToJS},
		init: $author$project$Main$init,
		subscriptions: $author$project$Main$subscriptions,
		update: $author$project$Main$update,
		view: $author$project$Main$view
	});
_Platform_export({'Main':{'init':$author$project$Main$main($elm$json$Json$Decode$string)(0)}});}(this));