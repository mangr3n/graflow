(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["graflow"] = factory();
	else
		root["graflow"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Component).default;
	  }
	});
	Object.defineProperty(exports, 'Component', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Component).default;
	  }
	});
	
	var _Mapper = __webpack_require__(7);
	
	Object.defineProperty(exports, 'Mapper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Mapper).default;
	  }
	});
	
	var _Filter = __webpack_require__(8);
	
	Object.defineProperty(exports, 'Filter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Filter).default;
	  }
	});
	
	var _Counter = __webpack_require__(9);
	
	Object.defineProperty(exports, 'Counter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Counter).default;
	  }
	});
	
	var _Accumulator = __webpack_require__(10);
	
	Object.defineProperty(exports, 'Accumulator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Accumulator).default;
	  }
	});
	
	var _Memorizer = __webpack_require__(11);
	
	Object.defineProperty(exports, 'Memorizer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Memorizer).default;
	  }
	});
	
	var _Hub = __webpack_require__(16);
	
	Object.defineProperty(exports, 'Hub', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Hub).default;
	  }
	});
	
	var _Muxer = __webpack_require__(17);
	
	Object.defineProperty(exports, 'Muxer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Muxer).default;
	  }
	});
	
	var _Demuxer = __webpack_require__(15);
	
	Object.defineProperty(exports, 'Demuxer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Demuxer).default;
	  }
	});
	
	var _SortedDemuxer = __webpack_require__(12);
	
	Object.defineProperty(exports, 'SortedDemuxer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SortedDemuxer).default;
	  }
	});
	
	var _Iterator = __webpack_require__(18);
	
	Object.defineProperty(exports, 'Iterator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Iterator).default;
	  }
	});
	
	var _Serializer = __webpack_require__(14);
	
	Object.defineProperty(exports, 'Serializer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Serializer).default;
	  }
	});
	
	var _ArraySerializer = __webpack_require__(19);
	
	Object.defineProperty(exports, 'ArraySerializer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ArraySerializer).default;
	  }
	});
	
	var _Repeater = __webpack_require__(20);
	
	Object.defineProperty(exports, 'Repeater', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Repeater).default;
	  }
	});
	
	var _UniqueFilter = __webpack_require__(21);
	
	Object.defineProperty(exports, 'UniqueFilter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_UniqueFilter).default;
	  }
	});
	
	var _Logger = __webpack_require__(22);
	
	Object.defineProperty(exports, 'Logger', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Logger).default;
	  }
	});
	
	var _Chain = __webpack_require__(13);
	
	Object.defineProperty(exports, 'Chain', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Chain).default;
	  }
	});
	
	var _Checker = __webpack_require__(23);
	
	Object.defineProperty(exports, 'Checker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Checker).default;
	  }
	});
	
	var _Guard = __webpack_require__(24);
	
	Object.defineProperty(exports, 'Guard', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Guard).default;
	  }
	});
	
	var _Identity = __webpack_require__(25);
	
	Object.defineProperty(exports, 'Identity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Identity).default;
	  }
	});
	
	var _Delayer = __webpack_require__(26);
	
	Object.defineProperty(exports, 'Delayer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Delayer).default;
	  }
	});
	
	var _Ticker = __webpack_require__(27);
	
	Object.defineProperty(exports, 'Ticker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Ticker).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _utils = __webpack_require__(2);
	
	var _util = __webpack_require__(3);
	
	var _componentId = 0;
	
	var nextId = function nextId() {
	  return _componentId++;
	};
	
	var componentFromFunction = function componentFromFunction(func) {
	  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  var node = toNode(func);
	
	  return {
	    send: function send() {
	      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      return node.send(value);
	    },
	    on: function on(handler) {
	      return node.on(handler);
	    },
	    off: function off(id) {
	      return node.off(id);
	    },
	    inputs: {
	      default: node
	    },
	    outputs: {
	      default: node
	    },
	    id: node.id,
	    name: name
	  };
	};
	
	var toNode = function toNode(arg) {
	  if ((0, _utils.isFunction)(arg)) return node(arg);
	  return arg;
	};
	
	var node = function node(onNext) {
	  var id = nextId();
	  var queue = [];
	  var listeners = {};
	
	  var broadcast = function broadcast(arg) {
	    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    arg.forEach(function (l) {
	      return l.addToQueue(value);
	    });
	    arg.forEach(function (l) {
	      return l.processQueue();
	    });
	  };
	
	  var next = function next(v) {
	    return broadcast(Object.values(listeners), v);
	  };
	
	  var addListener = function addListener(node) {
	    listeners[node.id] = node;
	    return node.id;
	  };
	
	  var removeListener = function removeListener(id) {
	    delete listeners[id];
	  };
	  var on = function on(handler) {
	    if ((0, _util.isObject)(handler)) {
	      return addListener(v);
	    } else {
	      return addListener(toNode(handler));
	    }
	  };
	  var addToQueue = function addToQueue(v) {
	    return queue.push(v);
	  };
	  var processQueue = function processQueue() {
	    return (0, _utils.applyAndEmpty)(queue, function (v) {
	      return onNext(v, next);
	    });
	  };
	  var off = function off(id) {
	    return removeListener(id);
	  };
	
	  var send = function send() {
	    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    addToQueue(value);
	    processQueue();
	  };
	
	  return {
	    on: on,
	    off: off,
	    send: send,
	    addListener: addListener,
	    addToQueue: addToQueue,
	    processQueue: processQueue,
	    id: id
	  };
	};
	
	var selectNode = function selectNode(name, components) {
	  var io = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'inputs';
	
	  var direction = io === 'inputs' ? 'inputs' : 'outputs';
	
	  var _name$split = name.split('.', 2),
	      _name$split2 = _slicedToArray(_name$split, 2),
	      componentName = _name$split2[0],
	      _name$split2$ = _name$split2[1],
	      nodeName = _name$split2$ === undefined ? 'default' : _name$split2$;
	
	  var component = components[componentName];
	  if ((0, _utils.isUndefined)(component)) {
	    throw new Error(componentName + ' component not found!');
	  }
	
	  var nodes = component[direction];
	
	  if ((0, _utils.isUndefined)(nodes) || (0, _utils.isUndefined)(nodes[nodeName])) {
	    throw new Error(name + ' port not found!');
	  }
	
	  return nodes[nodeName];
	};
	
	var componentFromObject = function componentFromObject(obj) {
	  var components = obj.components,
	      _obj$connections = obj.connections,
	      connections = _obj$connections === undefined ? [] : _obj$connections,
	      _obj$inputs = obj.inputs,
	      inputs = _obj$inputs === undefined ? [] : _obj$inputs,
	      _obj$outputs = obj.outputs,
	      outputs = _obj$outputs === undefined ? [] : _obj$outputs,
	      _obj$debug = obj.debug,
	      debug = _obj$debug === undefined ? [] : _obj$debug,
	      _obj$name = obj.name,
	      name = _obj$name === undefined ? '' : _obj$name;
	
	
	  var id = nextId();
	  var inputNames = (0, _utils.unique)(inputs.concat('default'));
	  var outputNames = (0, _utils.unique)(outputs.concat('default'));
	
	  var toNodes = function toNodes(i) {
	    return [i, node(function (v, next) {
	      return next(v);
	    })];
	  };
	  var inNodes = (0, _utils.arrayToObject)(inputNames, toNodes);
	  var outNodes = (0, _utils.arrayToObject)(outputNames, toNodes);
	
	  components.in = {
	    inputs: inNodes,
	    outputs: inNodes
	  };
	  components.out = {
	    inputs: outNodes,
	    outputs: outNodes
	  };
	
	  connections.forEach(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        from = _ref2[0],
	        to = _ref2[1];
	
	    var outNode = selectNode(from, components, 'outputs');
	    var inNode = selectNode(to, components, 'inputs');
	    outNode.on(function (v) {
	      return inNode.send(v);
	    });
	  });
	
	  debug.forEach(function (nodeName) {
	    var debugNode = selectNode(nodeName, components, 'outputs');
	    debugNode.on(function (v) {
	      return console.log('DEBUG Component(' + name + ':' + id + ').' + nodeName + ': ', v);
	    });
	  });
	
	  var on = function on() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _args$splice$reverse = args.splice(0, 2).reverse(),
	        _args$splice$reverse2 = _slicedToArray(_args$splice$reverse, 2),
	        handler = _args$splice$reverse2[0],
	        _args$splice$reverse3 = _args$splice$reverse2[1],
	        nodeName = _args$splice$reverse3 === undefined ? 'default' : _args$splice$reverse3;
	
	    if ((0, _utils.isUndefined)(outNodes[nodeName])) throw new Error('Component(' + name + ':' + id + ')/on: outNodes[' + nodeName + '] not found');
	    return outNodes[nodeName].on(handler);
	  };
	
	  var off = function off() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    var _args$splice$reverse4 = args.splice(0, 2).reverse(),
	        _args$splice$reverse5 = _slicedToArray(_args$splice$reverse4, 2),
	        id = _args$splice$reverse5[0],
	        _args$splice$reverse6 = _args$splice$reverse5[1],
	        nodeName = _args$splice$reverse6 === undefined ? 'default' : _args$splice$reverse6;
	
	    if ((0, _utils.isUndefined)(outNodes[nodeName])) throw new Error('Component(' + name + ':' + id + ')/off: outNodes[' + nodeName + '] not found');
	    return outNodes[nodeName].off(id);
	  };
	
	  var send = function send() {
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    var _args$splice$reverse7 = args.splice(0, 2).reverse(),
	        _args$splice$reverse8 = _slicedToArray(_args$splice$reverse7, 2),
	        _args$splice$reverse9 = _args$splice$reverse8[0],
	        value = _args$splice$reverse9 === undefined ? {} : _args$splice$reverse9,
	        _args$splice$reverse10 = _args$splice$reverse8[1],
	        nodeName = _args$splice$reverse10 === undefined ? 'default' : _args$splice$reverse10;
	
	    if ((0, _utils.isUndefined)(inNodes[nodeName])) throw new Error('Component(' + name + ':' + id + ')/send: inNodes[' + nodeName + '] not found');
	    inNodes[nodeName].send(value);
	  };
	
	  return {
	    send: send,
	    on: on,
	    off: off,
	    inputs: inNodes,
	    outputs: outNodes,
	    id: id,
	    name: name
	  };
	};
	
	var Component = function Component(arg) {
	  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Function';
	
	  if ((0, _utils.isFunction)(arg)) return componentFromFunction(arg, name);
	  return componentFromObject(arg);
	};
	
	exports.default = Component;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var pipe = function pipe() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.reduce(function (f, g) {
	    return function () {
	      return g(f.apply(undefined, arguments));
	    };
	  });
	};
	
	var isFunction = function isFunction(arg) {
	  return typeof arg === 'function';
	};
	var isObject = function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object';
	};
	var isUndefined = function isUndefined(arg) {
	  return arg === undefined;
	};
	
	var pairToObject = function pairToObject(_ref) {
	  var _ref2 = _slicedToArray(_ref, 2),
	      key = _ref2[0],
	      value = _ref2[1];
	
	  return _defineProperty({}, key, value);
	};
	
	var pairsToObject = function pairsToObject(arr) {
	  return arr.reduce(function (obj, pair) {
	    return _extends({}, obj, pairToObject(pair));
	  }, {});
	};
	
	var arrayToObject = function arrayToObject(arr, func) {
	  return pairsToObject(arr.map(func));
	};
	
	var applyAndEmpty = function applyAndEmpty(arr, func) {
	  var values = arr.length;
	  for (var i = 1; i <= values; i++) {
	    func(arr.shift());
	  }
	};
	
	var flatten = function flatten(v) {
	  var _ref4;
	
	  return (_ref4 = []).concat.apply(_ref4, _toConsumableArray(v));
	};
	
	var unique = function unique(arg) {
	  return [].concat(_toConsumableArray(new Set(arg)));
	};
	
	var toArray = function toArray(arg) {
	  return [].concat(arg);
	};
	
	exports.pipe = pipe;
	exports.isFunction = isFunction;
	exports.isObject = isObject;
	exports.isUndefined = isUndefined;
	exports.arrayToObject = arrayToObject;
	exports.pairToObject = pairToObject;
	exports.pairsToObject = pairsToObject;
	exports.applyAndEmpty = applyAndEmpty;
	exports.flatten = flatten;
	exports.unique = unique;
	exports.toArray = toArray;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(5);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(6);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Mapper = function Mapper(f) {
	  return (0, _Component2.default)(function (v, next) {
	    return next(f(v));
	  });
	};
	
	exports.default = Mapper;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Filter = function Filter(cond) {
	  return (0, _Component2.default)(function (v, next) {
	    if (cond(v)) next(v);
	  });
	};
	
	exports.default = Filter;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Counter = function Counter() {
	  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	  var value = initial;
	
	  return (0, _Component2.default)(function (v, next) {
	    value++;
	    next(value);
	  });
	};
	
	exports.default = Counter;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Accumulator = function Accumulator() {
	  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var obj = initial;
	
	  return (0, _Component2.default)(function (v, next) {
	    if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) !== 'object') return;
	    Object.entries(v).forEach(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          k = _ref2[0],
	          v = _ref2[1];
	
	      obj[k] = v;
	    });
	    next(obj);
	  });
	};
	
	exports.default = Accumulator;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Mapper = __webpack_require__(7);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	var _SortedDemuxer = __webpack_require__(12);
	
	var _SortedDemuxer2 = _interopRequireDefault(_SortedDemuxer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Memorizer = function Memorizer() {
	  var memory = void 0;
	
	  return (0, _Component2.default)({
	    inputs: ['memory', 'value'],
	    components: {
	      memory: (0, _Component2.default)(function (v) {
	        memory = v;
	      }),
	      mapper: (0, _Mapper2.default)(function (value) {
	        return { value: value, memory: memory };
	      }),
	      demuxer: (0, _SortedDemuxer2.default)('memory', 'value')
	    },
	    connections: [['in.memory', 'memory'], ['in.value', 'mapper'], ['mapper', 'out'], ['in', 'demuxer'], ['demuxer.memory', 'memory'], ['demuxer.value', 'mapper']]
	  });
	};
	
	exports.default = Memorizer;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Chain = __webpack_require__(13);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Mapper = __webpack_require__(7);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	var _Serializer = __webpack_require__(14);
	
	var _Serializer2 = _interopRequireDefault(_Serializer);
	
	var _Demuxer = __webpack_require__(15);
	
	var _Demuxer2 = _interopRequireDefault(_Demuxer);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SortedDemuxer = function SortedDemuxer() {
	  for (var _len = arguments.length, outputs = Array(_len), _key = 0; _key < _len; _key++) {
	    outputs[_key] = arguments[_key];
	  }
	
	  return (0, _Chain2.default)((0, _Mapper2.default)(function (obj) {
	    return outputs.map(function (k) {
	      return [k, obj[k]];
	    });
	  }), (0, _Serializer2.default)(), (0, _Mapper2.default)(_utils.pairToObject), _Demuxer2.default.apply(undefined, outputs));
	};
	
	exports.default = SortedDemuxer;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// Chain takes a list of Components and chains the inputs to the outputs.
	var Chain = function Chain() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var lastIndex = args.length - 1;
	  var _ref = [args[0], args[lastIndex]],
	      first = _ref[0],
	      last = _ref[1];
	
	
	  var components = args.reduce(function (obj, v, i) {
	    return _extends({}, obj, _defineProperty({}, 'c' + i, v));
	  }, {});
	
	  var inputs = Object.keys(first.inputs);
	  var outputs = Object.keys(last.outputs);
	
	  var connections = [].concat(_toConsumableArray(Array(lastIndex).keys())).map(function (i) {
	    return ['c' + i, 'c' + (i + 1)];
	  }).concat(inputs.map(function (input) {
	    return ['in.' + input, 'c0.' + input];
	  })).concat(outputs.map(function (output) {
	    return ['c' + lastIndex + '.' + output, 'out.' + output];
	  }));
	
	  return (0, _Component2.default)({ components: components, connections: connections, inputs: inputs, outputs: outputs });
	};
	
	exports.default = Chain;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Serializer = function Serializer() {
	  return (0, _Component2.default)(function (iterable, next) {
	    if (iterable[Symbol.iterator]) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var i = _step.value;
	          next(i);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  });
	};
	
	exports.default = Serializer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Demuxer = function Demuxer() {
	  for (var _len = arguments.length, outputs = Array(_len), _key = 0; _key < _len; _key++) {
	    outputs[_key] = arguments[_key];
	  }
	
	  return (0, _Component2.default)({
	    components: outputs.reduce(function (acc, output) {
	      acc[output] = (0, _Component2.default)(function (v, next) {
	        if (v[output] !== undefined) next(v[output]);
	      });
	      return acc;
	    }, {}),
	    outputs: outputs,
	    connections: (0, _utils.flatten)(outputs.map(function (out) {
	      return [['in', out], [out, 'out.' + out]];
	    })).concat([['in', 'out']])
	  });
	};
	
	exports.default = Demuxer;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Mapper = __webpack_require__(7);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Hub = function Hub() {
	  for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
	    inputs[_key] = arguments[_key];
	  }
	
	  var components = {};
	  var connections = [];
	
	  inputs.forEach(function (i) {
	    components[i] = (0, _Mapper2.default)(function (v) {
	      return _defineProperty({}, i, v);
	    });
	    connections.push(['in.' + i, i], [i, 'out'], ['in', 'out']);
	  });
	
	  return (0, _Component2.default)({ components: components, connections: connections, inputs: inputs });
	};
	
	exports.default = Hub;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Chain = __webpack_require__(13);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Hub = __webpack_require__(16);
	
	var _Hub2 = _interopRequireDefault(_Hub);
	
	var _Accumulator = __webpack_require__(10);
	
	var _Accumulator2 = _interopRequireDefault(_Accumulator);
	
	var _Filter = __webpack_require__(8);
	
	var _Filter2 = _interopRequireDefault(_Filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Muxer = function Muxer() {
	  for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
	    inputs[_key] = arguments[_key];
	  }
	
	  return (0, _Chain2.default)(_Hub2.default.apply(undefined, inputs), (0, _Accumulator2.default)(), (0, _Filter2.default)(function (v) {
	    return inputs.every(function (i) {
	      return v[i] !== undefined;
	    });
	  }));
	};
	
	exports.default = Muxer;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Iterator = function Iterator(iterable) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$cyclic = _ref.cyclic,
	      cyclic = _ref$cyclic === undefined ? false : _ref$cyclic;
	
	  var iterator = iterable[Symbol.iterator]();
	
	  return (0, _Component2.default)(function (v, next) {
	    var _iterator$next = iterator.next(),
	        value = _iterator$next.value,
	        done = _iterator$next.done;
	
	    if (done && cyclic) {
	      iterator = iterable[Symbol.iterator]();
	      var _iterator$next2 = iterator.next();
	
	      value = _iterator$next2.value;
	      done = _iterator$next2.done;
	    }
	
	    if (!done) next(value);
	  });
	};
	
	exports.default = Iterator;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Chain = __webpack_require__(13);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Mapper = __webpack_require__(7);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	var _Serializer = __webpack_require__(14);
	
	var _Serializer2 = _interopRequireDefault(_Serializer);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ArraySerializer = function ArraySerializer() {
	  return (0, _Chain2.default)((0, _Mapper2.default)(_utils.toArray), (0, _Serializer2.default)());
	};
	
	exports.default = ArraySerializer;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Repeater = function Repeater(times) {
	  return (0, _Component2.default)(function (v, next) {
	    for (var i = 1; i <= times; i++) {
	      next(v);
	    }
	  });
	};
	
	exports.default = Repeater;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UniqueFilter = function UniqueFilter(initialValue) {
	  var lastValue = initialValue;
	
	  return (0, _Component2.default)(function (v, next) {
	    if (v !== lastValue) {
	      lastValue = v;
	      next(v);
	    }
	  });
	};
	
	exports.default = UniqueFilter;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Logger = function Logger() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      prefix = _ref.prefix,
	      _ref$log = _ref.log,
	      log = _ref$log === undefined ? console.log : _ref$log;
	
	  return (0, _Component2.default)(function (v, next) {
	    if (prefix === undefined) {
	      log(v);
	    } else {
	      log(prefix, v);
	    }
	    next(v);
	  });
	};
	
	exports.default = Logger;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Chain = __webpack_require__(13);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Mapper = __webpack_require__(7);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	var _Demuxer = __webpack_require__(15);
	
	var _Demuxer2 = _interopRequireDefault(_Demuxer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Checker = function Checker(cond) {
	  return (0, _Chain2.default)((0, _Mapper2.default)(function (v) {
	    return cond(v) ? { true: v } : { false: v };
	  }), (0, _Demuxer2.default)('true', 'false'));
	};
	
	exports.default = Checker;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Chain = __webpack_require__(13);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Demuxer = __webpack_require__(15);
	
	var _Demuxer2 = _interopRequireDefault(_Demuxer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Guard = function Guard(conds) {
	  return (0, _Chain2.default)((0, _Component2.default)(function (v, next) {
	    Object.entries(conds).forEach(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          name = _ref2[0],
	          cond = _ref2[1];
	
	      var others = [];
	      var match = false;
	
	      if (cond === 'otherwise') {
	        others.push(name);
	      } else if (typeof cond === 'function' && cond(v)) {
	        next(_defineProperty({}, name, v));
	        match = true;
	      }
	
	      if (!match) others.forEach(function (name) {
	        return next(_defineProperty({}, name, v));
	      });
	    });
	  }), _Demuxer2.default.apply(undefined, _toConsumableArray(Object.keys(conds))));
	};
	
	exports.default = Guard;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Mapper = __webpack_require__(7);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Identity = function Identity() {
	  return (0, _Mapper2.default)(function (v) {
	    return v;
	  });
	};
	
	exports.default = Identity;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Delayer = function Delayer(ms) {
	  return (0, _Component2.default)(function (v, next) {
	    setTimeout(function () {
	      return next(v);
	    }, ms);
	  });
	};
	
	exports.default = Delayer;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Ticker = function Ticker(ms) {
	  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _config$value = config.value,
	      value = _config$value === undefined ? {} : _config$value,
	      _config$initialDelay = config.initialDelay,
	      initialDelay = _config$initialDelay === undefined ? false : _config$initialDelay;
	
	  var running = false;
	  return (0, _Component2.default)(function (v, next) {
	    if (running) return;
	    running = true;
	    if (!initialDelay) next(value);
	    setInterval(function () {
	      return next(value);
	    }, ms);
	  });
	};
	
	exports.default = Ticker;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=graflow.js.map