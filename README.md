# graph.js

## Introduction

graph.js is a simple library class for creating graphs. Graphs are for making decisions, storing data and any other clever things you can think of. I should point out that it isn't for making charts and pretty things to put on your website (sorry not R or GNUPlot), it is a graph in the sense of what a computer scientist means when they say graph.

- [Introduction](#introduction)
- [Getting started](#getting-started)
- [Properties](#properties)
	- [Edges](#edges)
	- [Graphs](#graphs)
- [Todo](#todo)
- [Licence](#licence)
- [Further reading](#further-reading)


## Getting started

To get started with graph.js you will need to include graph.js in your html mark up.

```html
<script src="/js/graph.js" type="text/javascript" charset="utf-8" async defer></script>
```

Once you have done this you will probably want to create a JavaScript file for your code and include that in your html mark up as well.

In you JavaScript file you can then use the graph class here is an example.
```javascript
var myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addEdge("A","B", false, 0);// A <-0-> B
myGraph.addEdge("B", "C", true, 0);// A <-0-> B -0-> C
myGraph.addEdge("C", "A", true, 1);// A <-0-> B -0-> C -1-> A
console.log(myGraph);
console.log(myGraph.nextTo("A"))// ["B"]
```
## Properties

### Edges

An Edge object contains point0 (the position of a vertex in the vertices array in a graph), point1, vector a boolean value if true travel along the edge will only be permitted from point0 to point1 and weight this is a value that may be used to choose between two otherwise identical edges (The particle energy levels of computing).

I wish to create an edge outside of a graph for I am a mad mad -or just a clever one.

```javascript
var myEdge = new myEdge(0,1, true, 0);
```
Ok that's great it has a constructor what do you give me with an edge?
> Well here are some things

- Edge.toggleVector (Does what it says)
- Edge.swapVector (changes the direction of the edge, by swapping the values of point0 and point1)
- Edge.matchEdge (See if the instance of Edge is the same as another instance of Edge)

### Graphs

- Graph.clear (Removes everything from a Graph making it clean)
	- `myGraph.clear();`
- Graph.addVertex (pushes an object to Graph.vertices)
	- `myGraph.addVertex("My object");`
- Graph.vertices (Array)
	- `myGraph.vertices.push("My object");`
- Graph.delVertex (Removes and object and edges connected to it from Graph.vertices)
	- `myGraph.delVertex("My object");`
- Graph.addEdge (creates and Edge instance adds it to Graph.edges)
	- `myGraph.addEdge("my object", "My object", false, 55);`
- Graph.edges (Array)
	- `myGraph.edges.push(new Edge("my object", "My object", false, 55));`
- Graph.delEdge (removes Edge instance from Graph.edges)
	- `myGraph.delEdge({v0:"my object", v1:"My object"});`
- Graph.nextTo (returns an array vertices that can be reached directly)
	- `myGraph.nextTo("My object");`

## Todo

List of things I consider a requirement before graph.js is usable/useful.

- [x] Tidy up
	- [x] Graph.delEdge
	- [x] Graph.delVertex
	- [x] Graph.nextTo
- [ ] Documentation
	- [ ] Edge.toggleVector
	- [ ] Edge.swapVector
	- [ ] Edge.matchEdge
	- [ ] Graph.clear
	- [ ] Graph.addVertex
	- [ ] Graph.delVertex
	- [ ] Graph.addEdge
	- [ ] Graph.delEdge
	- [ ] Graph.nextTo
- [ ] Add functionality
	- [ ] Import from adjacency list
	- [ ] Export to Adjacency list
	- [ ] Import from adjacency matrix
	- [ ] Export to adjacency matrix
	- [ ] Plot path
- [ ] Testing
	- [ ] design test.js to test all functionality and conceivable edge cases.
	- [ ] Make the output more human readable

## Licence

All code in this repository is under the [GPLv3](gplv3.txt) licence.

## Further reading

http://en.wikipedia.org/wiki/Graph_theory

[Top](#)