var repeatNumbers = function(data){

  var result = "";


  	for (var i=0; i<data.length; i++)
  	{
      var num = data[i][0];
  		var repeatNum = data[i][1];
  		if (i != 0)
  		{
  			result = result + ", ";
  		}
  		for (var r=0; r<repeatNum; r++)
  		{
  			result = result + num + "";
  		}
  	}

  	return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
