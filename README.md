# graflow

[![npm version](https://badge.fury.io/js/graflow.svg)](https://badge.fury.io/js/graflow)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/pmros/graflow.svg)](https://travis-ci.org/pmros/graflow)

**graflow** is a stream library for Javascript where flow is defined as a graph. It's small and has no dependencies.

## Why graflow?

There are many stream libraries for Javascript, for example [RxJS](https://github.com/ReactiveX/RxJS), [most](https://github.com/cujojs/most), [bacon](https://baconjs.github.io). They are very good but most of them don't support cycles in stream flow. So if you need a cycle, you need a proxy or a workaround like that (see [cycle](https://cycle.js.org)). However cycles aren't something strange in **graflow**, since you define stream flow like a graph.

On the other hand, most stream libraries use to define data flow through method chaining. **graflow** defines data flow declaratively, through a data structure: a graph. And you can apply many transformations or opeations to a graph, for example, you could convert the graph into a diagram or apply automatic optimizatins or verifications.

## Installation
**graflow** is packaged as an [UMD module](https://github.com/umdjs/umd) and you can find it at npm repository. It works on node.js and moder browsers.

You can use at node.js
```
npm install graflow
```

or at your browser through bower
```
bower install graflow
```

or loading graph.js or graph.min.js (/dist directory) directly
```html
<script src="graflow.min.js"></script>
```

## Usage
**graflow** is a set of component factories, that is functions that return a new component. By convention, every factory name is capitalized. Don't use `new` keyword with graflow factories.

You can think about a component like a blackbox that receive async signals and outputs async signals. It's like a chip in a electric circuit.

A component example:
```js
  import { Component, Mapper, Filter } from 'graflow'

  const myComponent = Component({
    inputs: ['from'],
    outputs: ['item'],
    components: {
      inc: Mapper(v => v + 1),
      limit: Filter(v => v <= 5)
    },
    connections: [
      ['in.from', 'inc'],
      ['inc', 'limit'],
      ['limit', 'out.item'],
      ['limit', 'inc']
    ]
  })

  myComponent.outputs.item.on(console.log)
  myComponent.inputs.from.send(2)
```

If you run that code, you'll see this result:
```
  3
  4
  5
```

`myComponent` receive an input (from = 2) and emit values up to 5.
It doesn't look awesome, I know. But this is just little example. The important things here are:
- Async inputs/outputs (from, item).
- Cycles easily made (inc->limit->inc).
- Declarative way: a graph (inputs, outputs, components are nodes, connections are edges).
- Easy to compose (map and filter are just components, like myComponent).
- Easy to sketch graphically.

![example01 diagram](https://rawgit.com/pmros/graflow/master/diagrams/example01.svg)

Note that previous example can be coded in a shorter way:
```js
  import Component from 'graflow'

  const myComponent = component((v, next) => {
    for(let i = v+1; i<=5; i++) next(i)
  })

  myComponent.outputs.default.on(console.log)
  myComponent.inputs.default.send(2)
```

## API

- [`Component({inputs, outputs, components, connections})`](#Component1)
- [`Component(func)`](#Component2)
- [`Mapper(func)`](#Mapper)
- [`Filter(func)`](#Filter)
- [`Muxer(...inputs)`](#Muxer)
- [`Demuxer(...outputs)`](#Demuxer)
- [`Chain(...components)`](#Chain)
- [`Accumulator()`](#Accumulator)
- [`Checker(condition)`](#Checker)
- [`Guard(conditions)`](#Guard)
- [`Counter(initial=0)`](#Counter)
- [`Repeater(times)`](#Repeater)
- [`UniqueFilter(initialValue)`](#UniqueFilter)
- [`Ticker(ms, options)`](#Ticker)
- [`Delayer(ms)`](#Delayer)
- [`Iterator(iterable)`](#Iterator)
- [`Serializer()`](#Serializer)
- [`Logger(options={})`](#Logger)
- [`Identity()`](#Identity)

### <a name="Logger"></a> `Logger(options={})`
Creates a component that takes the input (`default` input), logs it and finally outputs it (`default` output).

Arguments:
- `options`:
  - `log`: A function that takes the input value (default: `console.log`).
  - `prefix`: If specified, a value passed to `log` function before the input value.

## Projects using graflow

- [cyclow](https://github.com/pmros/cyclow)

## TODO
- [ ] Better documentation
- [ ] More component factories
- [ ] More tests
- [ ] Performance tests
