var xmlhttp;
var trueUrl = "139.155.10.79/cgi-bin/test.cgi";
// 创建一个XMLHttpRequest对象，copy W3school，多种浏览器都支持
function creatXMLDoc()
{
    xmlhttp=null;
    if (window.XMLHttpRequest)
    {// code for all new browsers
        return xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE5 and IE6
        return xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}

// 发出一个异步请求~
function loadXMLDoc(cgi_url)
{
    newXML = creatXMLDoc();
    if(newXML){
        newXML.onreadystatechange = state_Change;        //TODO add function name
        newXML.open("GET", cgi_url, true);              //使用异步方式初始化一个请求。
        newXML.send(null);
    }
    else{
        alert("说你点啥好，使谷歌！");
    }
}

// 按照cgi返回的界面进行对当前页面的修改。
function cgi_change()
{
    //HTML will be change
    if(4 == newXML.readyState){
        alert(newXML.responseText);
    }
    else{
        alert("也不是很秀么！");
    }
}

// 设置函数~
function state_Change()
{
    if (xmlhttp.readyState==4)
    {// 4 = "loaded"
        if (xmlhttp.status==200)
        {// 200 = OK
            // ...our code here...
            cgi_change();
        }
        else
        {
            alert("Problem retrieving XML data");
        }
    }
}

// 把那个输入框给提交上去
var getAddress = document.getElementById("webAddress");
function push_label(e)
{   
    var key_num = window.event ? e.keyCode : e.which;   //不同浏览器返回的键值的unicode编码
    if (13 == key_num){     //说明回车被按下,然后就给他提交了
        // getAddress.method = "GET";
        // getAddress.active = trueUrl;
        // getAddress.submit();
        loadXMLDoc(trueUrl);
    }
    
}