//蒙层
function modal_hy(){
	var modal=document.createElement('div');
	//location.href ="#top";
	modal.id="b_modal";
	modal.className="modal";
	document.body.appendChild(modal);
}
function bounced(){
	//蒙版层
	modal_hy();
	var modal=document.getElementById('b_modal');
	//活动规则框架
	var bof=document.createElement('div');
	bof.id = "box";
	bof.className = "general";
	var html="<img src='images/guizebg.png'/><a href='javascript:;' id='shut' class='butto'></a><h3>活动规则</h3>"+
		"<div class='inGeneral'><h5>一、活动时间</h5><p>2017年1月23日-2017年2月12日</p>"+
		"<h5>二、参与方式</h5><p>1.活动期间，用户点击主页面任意一张“福”字即有机会获得重庆城送出的新春流量红包或限量心愿牌。<br />"+
		"2.用户中奖后需将中奖页面分享至微信、QQ等社交媒体，方能确认获奖信息，删除无效。<br />"+
		"3.活动期间，个人2017心愿库集齐“告别单身”、“升职加薪”、“颜值爆表”、“瘦身成功”、“吃遍全城”、“玩遍全球”6张心愿牌即可获得城主送出的新春大礼包。<br />"+
		"4.活动期间，同一用户每天仅提供一次翻牌资格。<br />5.活动期间，同一用户仅提供一次兑换新春大礼包资格。<br />"+
		"6.活动期间，每邀请一位好友成功下载安装并登录重庆城，您和被邀请好友都可获得150M重庆移动本地当日通用流量，每位用户每天最多可邀请10位好友。</p>"+
		"<h5>四、奖品及发放</h5><p>重庆移动本地当日流量均当日赠送，流量包将在2小时内配送至礼品盒<br />"+
		"重庆移动本地包月流量、话费将于活动结束后5个工作日内发放。<br />"+
		"备注：所有奖品仅限重庆移动用户领取。如有疑问，请咨询客服热线：4001023008。</p></div><h4>本活动最终解释权归重庆城所有</h4>";
	bof.innerHTML=html;
	document.body.appendChild(bof);
	//选取
	var box=document.getElementById('box');
	var close=document.getElementById('shut');
	modal.style.display="block";
	box.style.display="block";
	close.onclick=function(){
		document.body.removeChild(modal);
		document.body.removeChild(bof);		
	};
};
function absm1(content,txt){
	//蒙版层
	modal_hy();
	var modal=document.getElementById('b_modal');
	//通用框架
	var bof=document.createElement('div');
	bof.id = "box";
	bof.className = "Loseheart";
	var html='<img src="images/sad.png"/><div class="inLoseheart">'+
		'<h3>'+content+'</h3><p>'+txt+'</p></div>'+
		'<a href="javascript:;" class="shut" id="shut">'+
		'</a><a href="javascript:;" class="link" id="link"></a>';
	bof.innerHTML=html;
	document.body.appendChild(bof);
	//选取
	var box=document.getElementById('box');
	var close=document.getElementById('shut');
	var close1=document.getElementById('link');
	modal.style.display="block";
	box.style.display="block";
	//stop();
	close.onclick=function(){
		//move();
		document.body.removeChild(modal);
		document.body.removeChild(bof);		
	};
	close1.onclick=function(){
		//move();
		document.body.removeChild(modal);
		document.body.removeChild(bof);		
	};
};

function absm2(txt){
	//蒙版层
	modal_hy();
	var modal=document.getElementById('b_modal');
	//通用框架
	var bof=document.createElement('div');
	bof.id = "box";
	bof.className = "Losebifa";
	var html='<img src="images/liuliang.png"/><div class="inLosebifa">'+
		'<p>1GB</p>'+txt+'</div><a href="javascript:;" class="shut" id="shut"></a>'+
		'<a href="javascript:;" class="fink" id="link"></a>';
	bof.innerHTML=html;
	document.body.appendChild(bof);
	//选取
	var box=document.getElementById('box');
	var close=document.getElementById('shut');
	var close1=document.getElementById('link');
	modal.style.display="block";
	box.style.display="block";
	//stop();
	close.onclick=function(){
		document.body.removeChild(modal);
		//move();
		document.body.removeChild(bof);		
	};
	close1.onclick=function(){
		//move();
		document.body.removeChild(modal);
		document.body.removeChild(bof);		
	};
};
function absm3(txt){
	//蒙版层
	modal_hy();
	var modal=document.getElementById('b_modal');
	//通用框架
	var bof=document.createElement('div');
	bof.id = "box";
	bof.className = "Losebifa";
	var html='<img src="images/zhufu.png"/><div class="inLosebifa1">'+
		''+txt+'</div><a href="javascript:;" class="shut" id="shut">'+
		'</a><a href="javascript:;" class="fink" id="link"></a>';
	bof.innerHTML=html;
	document.body.appendChild(bof);
	//选取
	var box=document.getElementById('box');
	var close=document.getElementById('shut');
	var close1=document.getElementById('link');
	modal.style.display="block";
	box.style.display="block";
	//stop();
	close.onclick=function(){
		document.body.removeChild(modal);
		//move();
		document.body.removeChild(bof);		
	};
	close1.onclick=function(){
		document.body.removeChild(modal);
		//move();
		document.body.removeChild(bof);		
	};
};

function bouncedy(){
			//蒙版层
			modal_hy();
			var modal=document.getElementById('b_modal');
			//下载体验框架
			var bof=document.createElement('div');
			bof.id = "box";
			bof.className ="xzty";
			var html='<div class="inxzty" id="offb"><img src="images/tishi.png"/></div>';
			bof.innerHTML=html;
			document.body.appendChild(bof);
			//选取
			var box=document.getElementById('box');
			var close=document.getElementById('offb');
			modal.style.display="block";
			box.style.display="block";
			stop();
			close.onclick=function(){
				document.body.removeChild(modal);
				move();
				document.body.removeChild(bof);		
			};
		};	