// main.html's javascript files

// 处理桌面图标。添加超链接元素，并设置图片把超链接图片按照（参考windows桌面的
//   形式）右侧排列好，由于图片可能有大有小，需要考虑到将图片的大小设置为相同。

/* ***************************************************************
 *   配置桌面元素类,使用JS提供的构造函数
 * ***************************************************************
*/

var top_map = new Map();
var count = 0;
var top_arr = [];
class topDesk_mate {
    constructor(app_name, app_icon_addr, app_webside) {
        this.app_name = app_name;
        this.app_icon_addr = app_icon_addr;
        this.app_webside  = app_webside || "https://cn.bing.com/";  //JS默认参数
        //top_map.set(this.app_name, this.app_icon);
        top_arr[count++] = this;
    }
}
  
// 找到桌面的高度&宽度
td_height = window.screen.availHeight;
td_wight  = window.screen.availWidth;
td_height = td_height-30;
var Fbody = document.getElementById("first_body");


/* ***************************************************************
 *   参考以下给topDesk_mate函数添加一个链接元素的样式，就可以出现在桌面上了。
 *   参数1：添加元素信息说明；
 *   参数2：添加元素的图标存储位置；
 *   参数3：如果添加为一个网站的话，填写网址。
 * ***************************************************************
*/
var Tgithub = new topDesk_mate("GitHub", "../picture/github_ico.png", "https://github.com/");

var Tzhihu  = new topDesk_mate("知乎", "../picture/exam_ku.png", "https://www.zhihu.com/");

var googletr= new topDesk_mate("谷歌翻译", "../picture/trslation.png",
                 "https://translate.google.cn/?hl=zh-CN&tab=TT");
                 
var vm_linux= new topDesk_mate("VM_Linux", "../picture/tu_Linux.png", 
        "https://bellard.org/jslinux/vm.html?url=https://bellard.org/jslinux/buildroot-x86.cfg");

var nice_tool = new topDesk_mate("nice_tool", "../picture/change.png", 
        "http://www.alltoall.net/?utm_source=wechat_session&utm_medium=social&utm_oi=783696239152746496");

/* ***************************************************************
 *   函数名：print_icon
 *   功  能：将元素使用JS设置其配置
 *   参  数：前三个参数可见topDesk_mate参数，后两个参数为图标在桌面的绝对位置
 *           最后一个参数Tbody 是这些图标元素的父元素。
 * ***************************************************************
*/ 
function print_icon(Tname, Tdress, Twebside, TLpos, TRpos, Tbody)
{
    // 创建一个链接元素
    var T_ul = document.createElement("a");
    T_ul.style.position = "absolute";
    T_ul.style.left = TLpos+"px";
    T_ul.style.top  = TRpos+"px";

    T_ul.href= Twebside;
    T_ul.setAttribute("target", "_block");
    // 创建一个figure/figcaption 两元素用于显示图与图标题
    // var T_fig    = document.createElement("figure");
    // var T_figcap = document.createElement("figcaption");
    // 设置一个图片的属性
    var T_pic = document.createElement("img");
    T_pic.src = Tdress;
    T_pic.alt = Tname;
    T_pic.height = 50;
    T_pic.width = 50;
    // 找到自己的组织并显示在窗口上
    Tbody.appendChild(T_ul);
    T_ul.appendChild(T_pic);
    // T_fig.appendChild(T_pic);
    // T_fig.appendChild(T_figcap);
}

/* ***************************************************************
 *   函数名：push_icon
 *   功  能：自动按照先竖后横排列图标
 *   参  数：只有一个参数Tbody 是桌面图标元素的父元素。
 * ***************************************************************
*/ 
function push_icon(Tbody)
{
    var mix_row = td_wight;     //行尺寸    
    var mix_col = td_height;    //列尺寸
    console.log(mix_row);
    console.log(mix_col);
    
    TRpos = 0;
    TLpos = 0;
    for(i in top_arr){
        print_icon(top_arr[i].app_name, top_arr[i].app_icon_addr, top_arr[i].app_webside, 
                    TLpos, TRpos, Tbody);
        if(TRpos >= mix_col-80){
            TLpos += 80;
            TRpos = 0;
        }else if(TLpos >= mix_row-60){
            alert("图标过多！整少点");
            return 0;
        }
        TRpos += 80;
    }
}
/* ***************************************************************
 *   add_label()
 *   功  能：获得拖入input元素中的网址
 *   参  数：无！
 * ***************************************************************
*/ 
function add_label()
{   
    // 未来加入判断，用户按的是那个键
    var Tcontent = document.getElementById("appending").value;
    console.log(Tcontent);
    return Tcontent;
}


// ///////////////////////////////////////////////
//                  main
// ///////////////////////////////////////////////
push_icon(Fbody);


