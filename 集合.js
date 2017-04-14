function Set()
{
	//用对象表示集合
	var items = {};
	
	//检查值是否存在集合
	this.has = function(value)
	{
		return value in items;
		//return items.hasOwnProperty(value);
	};
	
	//增加集合元素
	this.add = function(value)
	{
		if(!this.has(value))
		{
			items[value] = value;
			return true;
		}
		return false;
	};
	
	//删除集合元素
	this.remove = function(value)
	{
		if(this.has(value))
		{
			delete items[value];
			return true;
		}
		return false;
	};
	
	//清空集合
	this.clear = function()
	{
		items = {};
	};
	
	//遍历集合
	this.show = function()
	{
		for(var prop in items)
		{
			console.log(prop+":"+items[prop]+"\n");
		}
	};
	
	//统计集合元素个数
	this.size = function()
	{
		var count = 0;
		for(var prop in items)
		{
			if(items.hasOwnProperty(prop))++count;
		}
		
		return count;
	};
	
	//使集合属性以数组形式返回
	this.values = function()
	{
		//return Object.keys(items);
		var keys = [];
		for(var key in items)
		{
			keys.push(key);
		}
		return keys;
	};
	
	/*
	* 集合运算
	*/
	//并集
	this.union = function(otherset)
	{
		var unionSet = new Set();
		var values = this.values();
		
		for(var i=0;i<values.length;i++)
		{
			unionSet.add(values[i]);
		}
		
		values = otherset.values();
		for(var i=0;i<values.length;i++)
		{
			unionSet.add(values[i]);
		}
		
		return unionSet;
		
	};
	//交集
	this.intersection = function(otherset)
	{
		var intersectionSet = new Set();
		
		var values = this.values();
		for(var i=0;i<values.length;i++)
		{
			if(otherset.has(values[i]))
			{
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	};
	//差集
	this.difference = function(otherset)
	{
		var differenceSet = new Set();
		
		var values = this.values();
		for(var i=0;i<values.length;i++)
		{
			if(!otherset.has(values[i]))
			{
				differenceSet.add(values[i]);
			}
		}
		return differenceSet;
	};
	//子集
	this.subset = function(otherset)
	{
		if(this.size()>otherset.size())
		{
			return false;
		}
		else
		{
			var values = this.values();
			for(var i=0;i<values.length;i++)
			{
				if(!otherset.has(values[i]))
				{
					return false;
				}
			}
			return true;
		}
	};
};