//	$.ajax({
//		type:"get",
//		url:"data.json",
//		dataType:"json",
//		success:function(res){	
//			var s=JSON.parse(JSON.stringify(res))
//			console.log(s)
//			var str="";
//			console.log(res);
//			for(var attr in res){
//				for(var j=0;j<res[attr].list.length;j++){
//					var pro=res[attr].list[j];
//					str+=`<div class='goods'>
//						<img src='img/con2.jpg' alt='' />
//						<span>${pro.name}</span><br>
//						<i>￥${pro.price}</i>
//						<b></b>
//					</div>`;
//					}
//			}
			
//			$("body").html(str);
//		}
//	});	
	var x=new XMLHttpRequest();
	x.open("get","data.json");
	x.send();
	x.onreadystatechange=function(res){
		if(x.status==200 && x.readyState==4){
			console.log(res.responseText)
			var s=JSON.stringify(res.responseText)
			console.log(s)
		}else{
			console.log(x.readyState)
		}
	}

