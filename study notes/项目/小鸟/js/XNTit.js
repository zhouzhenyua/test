var oContent = document.getElementById('contentBox');
var oH1 = document.createElement('h1');
oContent.appendChild(oH1);
oH1.className = 'title_big';
var oH2 =document.createElement('h2');
oContent.appendChild(oH2);
var oImg = document.createElement('img');
oContent.appendChild(oImg);
oImg.src ="images/three_points01.png";
var oH1_1 = document.createElement('h1');
oContent.appendChild(oH1_1);
oH1_1.className = "title_list";
//oH1_1.innerHTML = `<span id="articleTitle"></span><span class="pen"></span>`;
var oDiv = document.createElement('div');
oContent.appendChild(oDiv);
oDiv.className = 'auther';
//oDiv.innerHTML = `<span class="date" id="updateTime"></span>&nbsp;&nbsp;<span id="author">管理员</span>`;
var oBottomBox = document.createElement('div');
oContent.appendChild(oBottomBox);
//oBottomBox.className = "article_content";
//oBottomBox.innerHTML =`<!--<div style="margin-bottom:35px;"><img id="cover" src=""></div><div id="contentT"></div> <div class="like_btn_wrap">-->
//            <div class="like_showbox">
//                <div class="like_btn"></div> <!--点击过加上类 like_btn_clicked 即可以有相应样式-->
//                <div class="like_nomber">喜欢（20）</div>
//            </div>
//        </div>`;



/*---------地址解析----------------*/

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var Request = new Object();
Request = GetRequest();
var type = Request['type'];



/*------------------公司理念-------------*/

if(type == "companyIdea"){
    var oCompany = articleData.companyIdea.data;
    typeHtm(oCompany)
}

/*-------------公司文化---------*/
if(type == "companyCulture"){
    var oCulture = articleData.companyCulture.data;
    typeHtm(oCulture)

}

/*------公司氛围---*/
if(type == "companyEnvironment"){
    var oEnvironment = articleData.companyEnvironment.data;
    typeHtm(oEnvironment)
}

/*-------------------人才理念----------------------*/
if(type == "talents"){
    var oTalents = articleData.talents.data;
    typeHtm(oTalents)
}

/*------------------------团队介绍------------------------*/
if(type == "team"){
    var oTeam = articleData.team.data;
    typeHtm(oTeam)
}

/*----------------------招聘信息----------------------*/
if(type == "joinUs"){
    var oJoinUs = articleData.joinUs.data;
    typeHtm(oJoinUs)
}

/*------------------------联系我们------------------------*/
if(type == "telUs"){
    var oTelUs = articleData.telUs.data;
    typeHtm(oTelUs)
}


/*-----------------------图片详情文章----------------------------------*/
if(type == "1"){
    var oNews1 = articleData.xiaoniaoNews1.data;
    typeHtm(oNews1)
}
if(type == "2"){
    var oNews2 = articleData.xiaoniaoNews2.data;
    typeHtm(oNews2)
}
if(type == "3"){
    var oNews3 = articleData.xiaoniaoNews3.data;
    typeHtm(oNews3)
}
if(type == "4"){
    var oNews4 = articleData.xiaoniaoNews4.data;
    typeHtm(oNews4)
}

function typeHtm(cont){
    oH1.innerHTML = cont.typeTitle;
    oH2.innerHTML = cont.typeEntitle;
    articleTitle.innerHTML = cont.title;
    updateTime.innerHTML = cont.updateAt;
    cover.src = cont.coverImg;
    contentT.innerHTML = cont.content;
}
/*--------喜欢------------*/
var oLike = document.getElementsByClassName('like_btn');
oLike[0].onclick = function(){
    this.style.backgroundPositionY ="-73px"
};

/*------------引入头部----------*/
$(".T-header").load("header.html");
$(".T-fooer").load("footer.html");

/*---------------钢笔-------------------*/
var oPen = document.getElementsByClassName('pen')[0];
oPen.onclick = function(){
$(".title_list").animate({"width":172+"px"},0);
$(".title_list").animate({"width":780+"px"},1000)
};
