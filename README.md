# graflow

[![npm version](https://badge.fury.io/js/graflow.svg)](https://badge.fury.io/js/graflow)
[![Build Status](https://travis-ci.org/pmros/graflow.svg)](https://travis-ci.org/pmros/graflow)

**graflow** is a stream library for Javascript where flow is defined as a graph.

**graflow** is small and has no dependencies.

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
**graflow** is a set of component factories, that is functions that return a new component.

You can think about a component like a blackbox that receive async signals and outputs async signals. It's like a chip in a electric circuit.

A component example:
```js
  import { component, map, filter } from 'graflow'

  const myComponent = component({
    inputs: [ 'from' ]
    , outputs: [ 'item' ]
    , components: {
      inc: map(v => v + 1)
      , limit: filter(v => v <= 5)
    }
    , connections: [
      ['in.from', 'inc']
      , ['inc', 'limit']
      , ['limit', 'out.item']
      , ['limit', 'inc']
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
  import { component } from 'graflow'

  const myComponent = component((v, next) => {
    for(let i = v+1; i<=5; i++) next(i)
  })

  myComponent.outputs.default.on(console.log)
  myComponent.inputs.default.send(2)
```

## API

- [`component({inputs, outputs, components, connections})`](#component1)
- [`component(func)`](#component2)
- [`map(func)`](#map)
- [`filter(func)`](#filter)
- [`mux(...inputs)`](#mux)
- [`demux(...outputs)`](#demux)
- [`chain(...components)`](#chain)
- [`accumulate`](#accumulate)
- [`check(condition)`](#check)
- [`guard`](#guard)
- [`count`](#count)
- [`repeat`](#repeat)
- [`uniq`](#uniq)
- [`periodic`](#periodic)
- [`delay`](#delay)
- [`iterateOnce`](#iterateOnce)
- [`iterateAll`](#iterateAll)
- [`debug`](#debug)
- [`log`](#log)

## TODO
- [ ] Better documentation
- [ ] More component factories
- [ ] More tests
- [ ] Performance tests
