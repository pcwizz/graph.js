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

- Edge.vector
	- Variable
	- Boolean if true edge is directional from point0 to point1
- Edge.toggleVector
	- Takes no parameters
	- Not of the current value of Edge.vector
	- Returns nothing
- Edge.swapVector
	- Takes no parameters
	- Changes direction of edge
	- Returns nothing
- Edge.matchEdgePoints
	- Takes an edge object
	- Checks if the points of the passed object are the same as the instance in which the method is called
	- Returns true and false if match or no match respectively
- Edge.matchEdge
	- Takes an edge object
	- Checks for match of all properties of the passed object against the instance in which the method is called
	- Returns true and false if match or no match respectively

### Graphs

- Graph.clear
	- Takes no parameters
	- Removes all non method properties from instance
	- Returns nothing
- Graph.vertices
	- Array
	- Stores the values of vertices
- Graph.addVertex
	- Takes an object
	- Pushes object to Graph.vertices
	- Returns nothing
- Graph.delVertex
	- Takes an object
	- Removes vertex containing the object and all edges connected to it
	- Returns nothing
- Graph.edges
	- Array
	- Stores Edge objects
- Graph.addEdge
	- Takes 2 values of vertices, a boolean for vector and a weight value
	- Creates new edge object and pushes it to Graph.edges
	- Returns nothing
- Graph.delEdge
	- Takes an object
	- If object contains edgeIndex the edge at edgeIndex in Graph.edges is sliced out, if it contains pV0 and pV1 then edges that have the values as point0 and point1 respectively will be removed, else the object is assumed to be and Edge then it will be removed if Edge.matchEdge is true
	- Returns nothing
- Graph.nextTo
	- Takes the value of a vertex
	- Creates an array of all direct neighbours taking account of vector
	- Returns created array (values of vertices)

## Todo

List of things I consider a requirement before graph.js is usable/useful.

- [x] Tidy up
	- [x] Graph.delEdge
	- [x] Graph.delVertex
	- [x] Graph.nextTo
- [x] Documentation
	- [x] Edge.toggleVector
	- [x] Edge.swapVector
	- [x] Edge.matchEdge
	- [x] Graph.clear
	- [x] Graph.addVertex
	- [x] Graph.delVertex
	- [x] Graph.addEdge
	- [x] Graph.delEdge
	- [x] Graph.nextTo
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