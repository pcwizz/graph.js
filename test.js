// Test graph data type

var myGraph = new Graph();
function output(pV){
	var zone = document.getElementById('outputZone');
	pV.toString();
	var parterns = [[ ',', ',<br>'],[ '{', '{<br>'], [ '[', '[<br>'],[ '}', '<br>}'], [ ']', '<br>]'] ];
	for (var i = parterns.length - 1; i >= 0; i--) {
	 	pV = pV.replace(parterns[i][0], parterns[i][1], "g");
	 }; 
	
	zone.innerHTML = zone.innerHTML + pV + "<br>";
}
output("Create object");
var myGraph = new Graph();
output(JSON.stringify(myGraph));
output("Asign some vertices.");
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
output(JSON.stringify(myGraph));
output("Make some edges.");
myGraph.addEdge("A","B", true);
myGraph.addEdge("A","C", false, 5);
myGraph.addEdge("B","C", true);
output(JSON.stringify(myGraph));
output("What is next to A");
output(JSON.stringify(myGraph.nextTo("A")));
output("What is next to B");
output(JSON.stringify(myGraph.nextTo("B")));
output("What is next to C");
output(JSON.stringify(myGraph.nextTo("C")));
output("vertex index A, B, C " + myGraph.getVertexIndexs("A","B","C"));
output("Delete edges");
output(JSON.stringify(myGraph.edges));
var indexs = myGraph.getVertexIndexs("A","B");
myGraph.delEdge(new Edge(indexs[0],indexs[1], true));
output(JSON.stringify(myGraph.edges));
myGraph.delEdge({v0:"A",v1:"C"});
output(JSON.stringify(myGraph.edges));
myGraph.delEdge({edgeIndex:0});
output(JSON.stringify(myGraph.edges));
output("Delete a vertex.");
myGraph.delVertex("A");
output(JSON.stringify(myGraph));
output("Clear the graph");
myGraph.clear();
output(JSON.stringify(myGraph));
output("make edges outside of the Graph.");
var myEdges = [
	new Edge(1,2,true,1),//0
	new Edge(3,2,true,1),//1
	new Edge(1,4,true,1),//2
	new Edge(1,2,false,1),//3
	new Edge(3,2,false,1),//4
	new Edge(1,4,false,1),//5
	new Edge(1,2,false,9),//6
	new Edge(3,2,true,8),//7
	new Edge(1,4,true,2)//8
];
output(JSON.stringify(myEdges));

for (var i = myEdges.length - 1; i >= 0; i--) {
	output("");
	output(i.toString());
	output("");
	for (var j = myEdges.length - 1; j >= 0; j--) {
		output(j.toString());
		output(JSON.stringify(myEdges[i].matchEdge(myEdges[j])));
	}
}