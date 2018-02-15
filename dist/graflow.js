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
	
	var _Mapper = __webpack_require__(3);
	
	Object.defineProperty(exports, 'Mapper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Mapper).default;
	  }
	});
	
	var _Filter = __webpack_require__(4);
	
	Object.defineProperty(exports, 'Filter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Filter).default;
	  }
	});
	
	var _Counter = __webpack_require__(5);
	
	Object.defineProperty(exports, 'Counter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Counter).default;
	  }
	});
	
	var _Accumulator = __webpack_require__(6);
	
	Object.defineProperty(exports, 'Accumulator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Accumulator).default;
	  }
	});
	
	var _Memorizer = __webpack_require__(7);
	
	Object.defineProperty(exports, 'Memorizer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Memorizer).default;
	  }
	});
	
	var _Hub = __webpack_require__(12);
	
	Object.defineProperty(exports, 'Hub', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Hub).default;
	  }
	});
	
	var _Muxer = __webpack_require__(13);
	
	Object.defineProperty(exports, 'Muxer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Muxer).default;
	  }
	});
	
	var _Demuxer = __webpack_require__(11);
	
	Object.defineProperty(exports, 'Demuxer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Demuxer).default;
	  }
	});
	
	var _SortedDemuxer = __webpack_require__(8);
	
	Object.defineProperty(exports, 'SortedDemuxer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SortedDemuxer).default;
	  }
	});
	
	var _Iterator = __webpack_require__(14);
	
	Object.defineProperty(exports, 'Iterator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Iterator).default;
	  }
	});
	
	var _Serializer = __webpack_require__(10);
	
	Object.defineProperty(exports, 'Serializer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Serializer).default;
	  }
	});
	
	var _ArraySerializer = __webpack_require__(15);
	
	Object.defineProperty(exports, 'ArraySerializer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ArraySerializer).default;
	  }
	});
	
	var _Repeater = __webpack_require__(16);
	
	Object.defineProperty(exports, 'Repeater', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Repeater).default;
	  }
	});
	
	var _UniqueFilter = __webpack_require__(17);
	
	Object.defineProperty(exports, 'UniqueFilter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_UniqueFilter).default;
	  }
	});
	
	var _Logger = __webpack_require__(18);
	
	Object.defineProperty(exports, 'Logger', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Logger).default;
	  }
	});
	
	var _Chain = __webpack_require__(9);
	
	Object.defineProperty(exports, 'Chain', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Chain).default;
	  }
	});
	
	var _Checker = __webpack_require__(19);
	
	Object.defineProperty(exports, 'Checker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Checker).default;
	  }
	});
	
	var _Guard = __webpack_require__(20);
	
	Object.defineProperty(exports, 'Guard', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Guard).default;
	  }
	});
	
	var _Identity = __webpack_require__(21);
	
	Object.defineProperty(exports, 'Identity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Identity).default;
	  }
	});
	
	var _Delayer = __webpack_require__(22);
	
	Object.defineProperty(exports, 'Delayer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Delayer).default;
	  }
	});
	
	var _Ticker = __webpack_require__(23);
	
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
	    return addListener(toNode(function (v) {
	      return handler(v);
	    }));
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
	    id: nextId()
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
	      _obj$name = obj.name,
	      name = _obj$name === undefined ? '' : _obj$name;
	
	
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
	    outNode.addListener(inNode);
	  });
	
	  var on = function on() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _args$splice$reverse = args.splice(0, 2).reverse(),
	        _args$splice$reverse2 = _slicedToArray(_args$splice$reverse, 2),
	        handler = _args$splice$reverse2[0],
	        _args$splice$reverse3 = _args$splice$reverse2[1],
	        name = _args$splice$reverse3 === undefined ? 'default' : _args$splice$reverse3;
	
	    return outNodes[name].on(handler);
	  };
	
	  var off = function off() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    var _args$splice$reverse4 = args.splice(0, 2).reverse(),
	        _args$splice$reverse5 = _slicedToArray(_args$splice$reverse4, 2),
	        id = _args$splice$reverse5[0],
	        _args$splice$reverse6 = _args$splice$reverse5[1],
	        name = _args$splice$reverse6 === undefined ? 'default' : _args$splice$reverse6;
	
	    return outNodes[name].off(id);
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
	        name = _args$splice$reverse10 === undefined ? 'default' : _args$splice$reverse10;
	
	    inNodes[name].send(value);
	  };
	
	  return {
	    send: send,
	    on: on,
	    off: off,
	    inputs: inNodes,
	    outputs: outNodes,
	    id: nextId(),
	    name: name
	  };
	};
	
	var Component = function Component(arg) {
	  if ((0, _utils.isFunction)(arg)) return componentFromFunction(arg);
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Mapper = __webpack_require__(3);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	var _SortedDemuxer = __webpack_require__(8);
	
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Chain = __webpack_require__(9);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Mapper = __webpack_require__(3);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	var _Serializer = __webpack_require__(10);
	
	var _Serializer2 = _interopRequireDefault(_Serializer);
	
	var _Demuxer = __webpack_require__(11);
	
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Mapper = __webpack_require__(3);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Chain = __webpack_require__(9);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Hub = __webpack_require__(12);
	
	var _Hub2 = _interopRequireDefault(_Hub);
	
	var _Accumulator = __webpack_require__(6);
	
	var _Accumulator2 = _interopRequireDefault(_Accumulator);
	
	var _Filter = __webpack_require__(4);
	
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Chain = __webpack_require__(9);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Mapper = __webpack_require__(3);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	var _Serializer = __webpack_require__(10);
	
	var _Serializer2 = _interopRequireDefault(_Serializer);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ArraySerializer = function ArraySerializer() {
	  return (0, _Chain2.default)((0, _Mapper2.default)(_utils.toArray), (0, _Serializer2.default)());
	};
	
	exports.default = ArraySerializer;

/***/ },
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Chain = __webpack_require__(9);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Mapper = __webpack_require__(3);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	var _Demuxer = __webpack_require__(11);
	
	var _Demuxer2 = _interopRequireDefault(_Demuxer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Checker = function Checker(cond) {
	  return (0, _Chain2.default)((0, _Mapper2.default)(function (v) {
	    return cond(v) ? { true: v } : { false: v };
	  }), (0, _Demuxer2.default)('true', 'false'));
	};
	
	exports.default = Checker;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Chain = __webpack_require__(9);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Demuxer = __webpack_require__(11);
	
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Mapper = __webpack_require__(3);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Identity = function Identity() {
	  return (0, _Mapper2.default)(function (v) {
	    return v;
	  });
	};
	
	exports.default = Identity;

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
	
	var Delayer = function Delayer(ms) {
	  return (0, _Component2.default)(function (v, next) {
	    setTimeout(function () {
	      return next(v);
	    }, ms);
	  });
	};
	
	exports.default = Delayer;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Ticker = function Ticker(ms) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$value = _ref.value,
	      value = _ref$value === undefined ? {} : _ref$value,
	      _ref$initialDelay = _ref.initialDelay,
	      initialDelay = _ref$initialDelay === undefined ? false : _ref$initialDelay;
	
	  return (0, _Component2.default)(function (v, next) {
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