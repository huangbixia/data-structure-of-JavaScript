 function Queue()
  {
    var items = [];
	
	this.enqueue = function(elements)
	{
	   items.push(elements);
	};
	
	this.dequeue = function()
	{
	   return items.shift();
	};
	
	this.front = function()
	{
	   return items[0];
	};
	
	this.isEmpty = function()
	{
	  return items.length==0;
	};
	
	this.size = function()
	{
	   return items.length;
	};
	
	this.print = function()
	{
	   console.log(items.toString());
	};
  }
  
  function hotPotato(nameList,num)
  {
	  var queue = new Queue();
	  
	  for(var i=0;i<nameList.length;i++)
	  {
		  queue.enqueue(nameList[i]);
	  }
	  
	  var eliminated = "";
	  while(queue.size()>1)
	  {
		  for(var j=0;j<num;j++)
		  {
			  queue.enqueue(queue.dequeue());
		  }
		  eliminated = queue.dequeue();//淘汰者
		  console.log(eliminated+"被淘汰。");
	  }
	  
	  return queue.dequeue();//胜利者

  }
  