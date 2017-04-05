function priorityQueue()
{
	 var items = [];
	
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
	

	
	
	function QueueElement(elements,priority)
	{
		this.element = elements;
		this.priority = priority;
	}
	
	this.enqueue = function(elements,priority)
	{
	   var queueElement = new QueueElement(elements,priority);
	   
	   if(this.isEmpty())
	   {
		   items.push(queueElement);
	   }
	   else
	   {
		   var added = false;
		   for(var i=0;i<items.length;i++)
		   {
			   if(queueElement.priority<items[i].priority)
			   {
				   items.splice(i,0,queueElement);
				   added = true;
				   break;
			   }
		   }
		   if(!added)
		   {
			   items.push(queueElement);
		   }
	   }
	};
	
	
}