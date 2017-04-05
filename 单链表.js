function linkedList()
{
	//节点
	var Node = function(element)
	{
		this.element = element;
		this.next = null;
	};
	
	var length = 0;
	var head = null;
	
	/*--------向尾部增加节点--------*/
	this.append = function(element)
	{
		var node = new Node(element);
		var current;
		
		if(head==null)//链表第一个节点
		{
			head = node;
		}
		else
		{
			current = head;
			
			//循环链表，直到最后一项
			while(current.next)
			{
				current = current.next;
			}
			
			current.next = node;
		}
		
		length++;//链表长度加1
	};
	
	/*--------按位置插入节点--------*/
	this.insert = function(position,element)
	{
		//检查是否越界
		if(position>-1&&position<length)
		{
			var node = new Node(element);
			var current = head;
			var previous;
			var index = 0;
			
			if(position==0)
			{
				node.next = head;
				head = node;
			}
			else
			{
				while(index++<position)
				{
					previous = current;
					current = current.next;
				}
				
				previous.next = node;
				node.next = current;
			}
			length++;
			return true;
		}
		else
		{
			return false;
		}
	};
	
	/*--------按位置移除节点--------*/
	this.removeAt = function(position)
	{
		//检查是否越界
		if(position>-1&&position<length)
		{
			var current = head;
		    var previous;
		    var index = 0;
			
			//移除第一项
			if(position==0)
			{
				head = current.next;
			}
			else
			{
				while(index<position)
				{
					previous = current;
					current = current.next;
					index++;
				}
				
				previous.next = current.next;
			}
		     
			length--; 
		}
		else
		{
			return null;
		}
				
	};
	
	/*--------查看节点元素的索引值--------*/
	this.indexOf = function(element)
	{
	
			var current = head;
			var index = 0;
			
			while(current)
			{
				if(current.element==element)return index;
				else
				{
					current = current.next;
					index++;
				}				
			}
			
			return -1;
	};
	
	/*--------查看链表是否为空--------*/
	this.isEmpty = function()
	{
		return length == 0;
	};
	
	/*--------查看链表长度--------*/
	this.size = function()
	{
		return length;
	};
	
	/*--------由于链表使用了Node类，所以重新toString对象，让其输出元素的值--------*/
	this.toString = function()
	{
		//把lickedList转化为字符串
        var current = head;
		var string = "";
		
		while(current)
		{
			string += current.element + " ";
			current = current.next;
		}
		return string;
	};
	
	/*--------按元素值移除元素--------*/
	this.remove = function(element)
	{
		var index = this.indexOf(element);
		return this.removeAt(index);
	};
	
	/*------------元素排序------------------*/
	this.listSort = function(value)
	{
		if(value>0)//升序
		{}
		else//倒序
		{}
	};
}