/*
Graphs
*/
//edge
Edge = function(pPoint0, pPoint1, pVector, pWeight){
	this.point0 = pPoint0;
	this.point1 = pPoint1;
	this.vector = pVector; // If true travel is only allowed from point0 -> point1, if false travel is allowed both directions point0 <-> point1
	this.weight = pWeight; // If there is more than one edge for the same direct journey weighting may be use to differentiate them.
};

Edge.prototype.swapVector = function () {
	var tempPoint = this.point0;
	this.point0 = this.point1;
	this.point1 = tempPoint;
};

Edge.prototype.toggleVector = function (){
	this.vector = !this.vector;
};

Edge.prototype.matchEdge = function (pEdge){
	return ( 
		this.point0 == pEdge.point0 &&
		this.point1 == pEdge.point1 &&
		this.weight == pEdge.weight &&
		this.vector == pEdge.vector 
		);
};
//graph
Graph = function (){
	this.vertices=[];
	this.edges=[];
}
Graph.prototype.addEdge = function(pV0, pV1, pVector, pWeight){
	var index0 = this.vertices.indexOf(pV0);
	var index1 = this.vertices.indexOf(pV1);
	var edge = new Edge(index0,index1, pVector, pWeight);
	this.edges.push(edge);
};

//delEdge takes an object with either edgeIndex set, an Edge or the values of two vertices
Graph.prototype.delEdge = function(pObj){
	if (pObj.edgeIndex != null) {//from edgeIndex
		this.edges.splice(pObj.edgeIndex, 1);
		return;
	}

	if (!(pObj.v0 == null && pObj.v1 == null)){//from two values
		var index0 = this.vertices.indexOf(pObj.v0);
		var index1 = this.vertices.indexOf(pObj.v1);

		for (var i = this.edges.length - 1; i >= 0; i--) {
			if (this.edges[i].matchEdge(new Edge(index0, index1))) {
				this.edges.splice(i,1);
			}
		}
		
		return;
		}

		for (var i = this.edges.length - 1; i >= 0; i--) {
			if (this.edges[i].matchEdge(pObj.edge) == true) {
				this.edges.splice(i,1);
			}
		}

};

Graph.prototype.addVertex = function(pV){
	this.vertices.push(pV);
};

Graph.prototype.delVertex = function(pV){
	//find position in vertices
	var index = this.vertices.indexOf(pV);
	//remove all edges connecting the vertex
	for (var i = this.edges.length - 1; i >= 0; i--) {
		var edge = this.edges[i];
		if (edge.point0 == index || edge.point1 == index) {
			this.delEdge({"edgeIndex":i});
		}
	}
	//remove the vertex from array
	this.vertices.splice(index,1);
};

Graph.prototype.nextTo = function(pV){
	var index = this.vertices.indexOf(pV);
	var nextTo = [];
	for (var i = this.edges.length - 1; i >= 0; i--) {
		if(this.edges[i].point0 == index){
			nextTo.push(this.vertices[this.edges[i].point1]);
		}else if (this.edges[i].point1 == index && this.edges[i].vector != true) {
			nextTo.push(this.vertices[this.edges[i].point0]);
		}
	}
	return nextTo;
};
Graph.prototype.clear = function(){
	this.edges = [];
	this.vertices = [];
}