//声明树的结构
/*
* 生成的是搜索二叉树
*/
function BinarySearchTree()
{
	//节点
	var Node = function(key)
	{
		this.key = key;
		this.left = null;
		this.right = null;
	};
	
	//根节点
	var root = null;
	
	//向树插入一个节点
	this.insert = function(key)
	{
		var newNode = new Node(key);
		
		if(root===null){
			root = newNode;
		}
		else{
			insertNode(root,newNode);
		}
	};
	
	var insertNode = function(node,newNode)
	{
	 //如果小于根节点，则向左遍历，在左边找到适合为位置添加节点
	  if(newNode.key<node.key)
	  {
		 if(node.left===null)
		 {
			  node.left = newNode;  
		 }
		 else
		 {
			 //向左遍历
			 insertNode(node.left,newNode);
		 }
	  }			  
	  else
	  {
		  if(node.right===null)
		  {
			  node.right = newNode;
		  }
		  else
		  {
			  //向右遍历
			  insertNode(node.right,newNode);
		  }
	  }
	};
	
	//查找节点
	this.search = function(key)
	{
		return searchNode(root,key);
	};
	
	var searchNode = function(node,key)
	{
		if(node===null)
		{
			return false;
		}
		if(key<node.key)
		{
			return searchNode(node.left,key);
		}else if(key>node.key){
			return searchNode(node.right,key);
		}else
		{
			return true;
		}
	};
	
	//中序遍历树“左中右”
	this.inOrderTraverse = function(callback)
	{
		inOrderTraverseNode(root,callback);
	};
	var inOrderTraverseNode = function(node,callback)
	{
		if(node!==null){
			inOrderTraverseNode(node.left,callback);
			callback(node.key);
			inOrderTraverseNode(node.right,callback);
		}
	};
	
	//先序遍历树“中左右”
	this.preOrderTraverse = function(callback)
	{
		preOrderTraverseNode(root,callback);
	};
	
	var preOrderTraverseNode = function(node,callback)
	{
		if(node!==null){
			callback(node.key);
			preOrderTraverseNode(node.left,callback);
			preOrderTraverseNode(node.right,callback);
		}
	};
	
	//后序遍历树“左右中”
	this.postOrderTraverse = function(callback)
	{
		postOrderTraverseNode(root,callback);
	};
	var postOrderTraverseNode = function(node,callback)
	{
		if(node!==null){
			postOrderTraverseNode(node.left,callback);
			postOrderTraverseNode(node.right,callback);
			callback(node.key);
		}
	};
	//返回最小值
	this.min = function()
	{
		return minNode(root);
	};
	
	var minNode = function(node)
	{
		if(node)
		{
			while(node&&node.left!==null)
			{
				node = node.left;
			}
			return node.key;
		}
		return null;
	};
	
	//返回最大值
	this.max = function()
	{
		return maxNode(root);
	};
	var maxNode = function(node)
	{
		if(node)
		{
			while(node&&node.right!==null)
			{
				node = node.right;
			}
			return node.key;
		}
		return null;
	};
	
	//移除某个节点
	this.remove = function(key)
	{
		root = removeNode(root,key);
	};
	
	var removeNode = function(node,key)
	{
		if(node===null){
			return null;
		}
		if(key<node.key){
			node.left = removeNode(node.left,key);
			return node;
		}
		else if(key>node.key){
			node.right = removeNode(node.right,key);
			return node;
		}
		else{//当找到所要移除的值
		
		   //只有一个叶子节点
		   if(node.left===null&&node.right===null)
		   {
			   node = null;
			   return node;
		   }
		   
		   //只有一个叶子节点
		   if(node.left===null)
		   {
			   node = node.right;
			   return node;
		   }
		   else if(node.right===null){
			   node = node.left;
			   return node;
		   }
		   
		   //有两个叶子节点
		   var aux = findMinNode(node.right);
		   node.key = aux.key;
		   node.right = removeNode(node.right,aux.key);
		   return node;
		   
		}
		
		function findMinNode(node)
		{
			if(node)
	        {
			while(node&&node.left!==null)
			{
				node = node.left;
			}
			return node;
		    }
	
		};
	};
}
function printNode(value)
{
	console.log(value);
}
/*
*测试数据
  
  var tree = new BinarySearchTree();
  tree.insert(11);
  tree.insert(7);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);
  tree.insert(6);
  tree.insert(9);
  tree.insert(8);
  tree.insert(10);
  tree.insert(13);
  tree.insert(12);
  tree.insert(14);
  tree.insert(20);
  tree.insert(18);
  tree.insert(25);
  
 // tree.inOrderTraverse(printNode);
 // tree.preOrderTraverse(printNode);
 // tree.postOrderTraverse(printNode);
*/