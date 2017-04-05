
function Stack()
{
	var items = [];
	this.push = function(elements){items.push(elements);}
    this.pop = function(){return items.pop();}
    this.peek = function(){return items[items.length-1];}
    this.isEmpty = function(){return items.length==0;}
    this.clear = function(){items = [];}
    this.print = function(){console.log(items.toString());}
    this.size = function(){return items.length;}
}

//从十进制到二进制
function divideBy2(decNumber)
{
	var numberContainer = new Stack();
	var temp = "";
	
	while(decNumber>0)
	{
		//把余数放入栈中
		numberContainer.push(Math.floor(decNumber%2));
		decNumber = Math.floor(decNumber/2);
	}
	//反向输出余数
	while(!numberContainer.isEmpty())
	{
		temp += numberContainer.pop().toString();
	}
	
	return temp;
}
//从十进制到任意进制
function divideByNumber(decNumber,number)
{
	var numberContainer = new Stack();
	var temp = "";
	var digitals = "0123456789ABCDEF";
	while(decNumber>0)
	{
		//把余数放入栈中
		numberContainer.push(Math.floor(decNumber%number));
		decNumber = Math.floor(decNumber/number);
	}
	//反向输出余数
	while(!numberContainer.isEmpty())
	{
		temp += digitals[numberContainer.pop()];
	}
	
	return temp;
}