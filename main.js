$(document).ready(function(){
    initTags();
    initAgents();
});

function tagClick(e) {
    let jQe=$(e);
    if(jQe.hasClass("selected")){
        jQe.removeClass("selected");
    }
    else if(jQe.siblings(".selected").length<5){
        jQe.addClass("selected");
    }
}

//tag
//职业：1狙击干员 2术士干员 3先锋干员 4近卫干员 5重装干员 6医疗干员 7辅助干员 8特种干员
//性别：11男性干员 12女性干员
//标签：21近战位 22远程位 23输出 24防护 25生存 26治疗 27支援 28费用回复 29快速复活 30群攻 31召唤 32削弱 33减速 34控场 35位移 36爆发 37新手 38资深干员 39高级资深干员
let agents = [],tags = [];

class Tag{
    constructor(id,name) {
        this.id = id;
        this.name = name;
        this.agents = [];
        tags[id]=this;
        $("#tagPool").append("<div class=\"tag\" onclick=\"tagClick(this)\">"+name+"</div>");
    }
}
function initTags() {
    //职业
    new Tag(1,"狙击干员");new Tag(2,"术士干员");
    new Tag(3,"先锋干员");new Tag(4,"近卫干员");
    new Tag(5,"重装干员");new Tag(6,"医疗干员");
    new Tag(7,"辅助干员");new Tag(8,"特种干员");
//性别
    new Tag(11,"男性干员");new Tag(12,"女性干员");
//其他标签
    new Tag(21,"近战位");new Tag(22,"远程位");
    new Tag(23,"输出");new Tag(24,"防护");
    new Tag(25,"生存");new Tag(26,"治疗");
    new Tag(27,"支援");new Tag(28,"费用回复");
    new Tag(29,"快速复活");new Tag(30,"群攻");
    new Tag(31,"召唤");new Tag(32,"削弱");
    new Tag(33,"减速");new Tag(34,"控场");
    new Tag(35,"位移");new Tag(36,"爆发");
    new Tag(37,"新手");new Tag(38,"资深干员");
    new Tag(39,"高级资深干员");
}

class Agent {
    constructor(name,star,tag) {
        this.name = name;
        this.star = star;
        this.tags = tag;
        tag.forEach(function(e) {
            tags[e].agents.push(agents.length);
        });
        agents.push(this);
    }
}
function initAgents() {
    //六星
    new Agent("能天使",6,[1,12,22,23]);
    new Agent("伊芙利特",6,[2,12,22,30,32]);
    new Agent("推进之王",6,[3,12,21,23,28]);
    new Agent("银灰",6,[4,11,21,23,27]);
    new Agent("星熊",6,[5,12,21,23,24]);
    new Agent("塞雷娅",6,[5,12,21,24,26,27]);
    new Agent("闪灵",6,[6,12,22,26,27]);
    new Agent("夜莺",6,[6,12,22,26,27]);
    //五星
    new Agent("普罗旺斯",5,[1,12,22,23]);
    new Agent("蓝毒",5,[1,12,22,23]);
    new Agent("守林人",5,[1,12,22,23,36]);
    new Agent("白金",5,[1,12,22,23]);
    new Agent("陨星",5,[1,12,22,30,32]);
    new Agent("德克萨斯",5,[3,12,21,28,34]);
    new Agent("凛冬",5,[3,12,21,27,28]);
    new Agent("芙兰卡",5,[4,12,21,23,25]);
    new Agent("幽灵鲨",5,[4,12,21,25,30]);
    new Agent("因陀罗",5,[4,12,21,23,25]);
    new Agent("临光",5,[5,12,21,24,26]);
    new Agent("雷蛇",5,[5,12,21,23,24]);
    new Agent("火神",5,[5,12,21,23,24,25]);
    new Agent("可颂",5,[5,12,21,24,35]);
    new Agent("白面鸮",5,[6,12,22,26,27]);
    new Agent("赫默",5,[6,12,22,26]);
    new Agent("华法琳",5,[6,12,22,26,27]);
    new Agent("初雪",5,[7,12,22,32]);
    new Agent("真理",5,[7,12,22,23,33]);
    new Agent("梅尔",5,[7,12,22,31,34]);
    new Agent("红",5,[8,12,21,29,34]);
    new Agent("狮蝎",5,[8,12,21,23,25]);
    new Agent("崖心",5,[8,12,21,23,35]);
    new Agent("食铁兽",5,[8,12,21,33,35]);
    //四星
    new Agent("白雪",4,[1,12,22,30,33]);
    new Agent("流星",4,[1,12,22,23,32]);
    new Agent("杰西卡",4,[1,12,22,23,25]);
    new Agent("夜烟",4,[2,12,22,23,32]);
    new Agent("远山",4,[2,12,22,30]);
    new Agent("清道夫",4,[3,12,21,23,28]);
    new Agent("红豆",4,[3,12,21,23,28]);
    new Agent("杜宾",4,[4,12,21,23,27]);
    new Agent("艾丝黛尔",4,[4,12,21,25,30]);
    new Agent("慕斯",4,[4,12,21,23]);
    new Agent("霜叶",4,[4,12,21,23,33]);
    new Agent("缠丸",4,[4,12,21,23,25]);
    new Agent("角峰",4,[5,11,21,24]);
    new Agent("蛇屠箱",4,[5,12,21,24]);
    new Agent("古米",4,[5,12,21,24,26]);
    new Agent("末药",4,[6,12,22,26]);
    new Agent("调香师",4,[6,12,22,26]);
    new Agent("地灵",4,[7,12,22,33]);
    new Agent("砾",4,[8,12,21,24,29]);
    new Agent("暗索",4,[8,12,21,35]);
    new Agent("阿消",4,[8,12,21,35]);
    //三星
    new Agent("安德切尔",3,[1,11,22,23]);
    new Agent("克洛丝",3,[1,12,22,23]);
    new Agent("史都华德",3,[2,11,22,23]);
    new Agent("炎熔",3,[2,12,22,30]);
    new Agent("香草",3,[3,12,21,28]);
    new Agent("芬",3,[3,12,21,28]);
    new Agent("翎羽",3,[3,12,21,23,28]);
    new Agent("玫兰莎",3,[4,12,21,23,25]);
    new Agent("米格鲁",3,[5,12,21,24]);
    new Agent("安赛尔",3,[6,11,22,26]);
    new Agent("芙蓉",3,[6,12,22,26]);
    new Agent("梓兰",3,[7,12,22,33]);
    //二星
    new Agent("巡林者",2,[1,11,22,37]);
    new Agent("杜林",2,[2,12,22,37]);
    new Agent("12F",2,[2,11,22,37]);
    new Agent("夜刀",2,[3,12,21,37]);
    new Agent("黑角",2,[5,11,21,37]);
    //一星
    new Agent("Castle-3",1,[4,21,27]);
    new Agent("Lancet-2",1,[6,22,26]);
}

class Combination {
    //有一般标签构造函数
    constructor(selectedTags,fiveStar,sixStar) {
        let possibleAgents=[],maxStar=0,minStar=0,starCount=[0,0,0,0,0,0,0];
        agents.forEach(function(e){
            let match=true;
            match=match&&e.star>2;//剔除两星以下
            selectedTags.forEach(function(f){
                match = match&&e.tags.includes(f);
            });//普通标签契合
            if(match) {
                if(sixStar&&(e.star===6)){
                    possibleAgents.push(e);
                    starCount[6]++;
                    selectedTags=[39];
                    maxStar=6;minStar=6;
                }
                else if (fiveStar&&(e.star===5)){
                    possibleAgents.push(e);
                    starCount[5]++;
                    selectedTags=[38];
                    maxStar=5;minStar=5;
                }
                else if ((!fiveStar&&!sixStar)&&e.star<6) {
                    possibleAgents.push(e);
                    starCount[e.star]++;
                    if(e.star>maxStar||maxStar===0)
                        maxStar=e.star;
                    if(e.star<minStar||minStar===0)
                        minStar=e.star;

                }
            }
        });
        this.possibleAgents=possibleAgents;
        let temp=[];
        selectedTags.forEach(function(e){
            temp.push(e);
        });
        this.selectedTags=temp;
        this.score=-(starCount[3]/possibleAgents.length)+(starCount[4]/possibleAgents.length)+(starCount[5]/possibleAgents.length)*3+(starCount[6]/possibleAgents.length)*100-(temp.length-1)*0.1;
        return this;
    }
}
function calculate() {
    //读入tag
    let givenTags=[];
    $("#tagPool .selected").each(function(i,e){
        tags.forEach(function(f){
            if(e.innerHTML===f.name)
                givenTags.push(f.id)
        });
    });
    let normalTag=[],fiveStarTag=false,sixStarTag=false;
    givenTags.forEach(function(e){
        if(e<38)
            normalTag.push([e,true,true]);
        else if(e===38)
            fiveStarTag = true;
        else if(e===39)
            sixStarTag = true;
    });
    let combinations=[];//初始化标签组合数组
    if(fiveStarTag||sixStarTag){
        combinations.push(new Combination([],fiveStarTag,sixStarTag))
    }
    normalTag.forEach(function(e){
        let t=[];
        normalTag.forEach(function(u){u[1]=true});//重置使用位
        t.push(e[0]);//加入第一个tag
        combinations.push(new Combination(t,fiveStarTag,sixStarTag));//单一般标签情况
        e[1]=false;//可用位置false
        e[2]=false;//顺序可用位置false
        normalTag.forEach(function(f){
            if(f[1]&&f[2]){
                t.push(f[0]);//加入第二个tag
                combinations.push(new Combination(t,fiveStarTag,sixStarTag));//双一般标签情况
                f[1]=false;//可用位置false
                if(!(sixStarTag||fiveStarTag)) {
                    normalTag.forEach(function(g) {
                        if (g[1]&&g[2]) {
                            t.push(g[0]);//加入第三个tag
                            combinations.push(new Combination(t,fiveStarTag,sixStarTag));//三一般标签情况
                            t.pop();//还原
                        }
                    })
                }
                t.pop();//还原
            }
        });
        t.pop();//还原
    });
    //处理得到的组合
    let best=[],highscore=[0,0,0];
    combinations.forEach(function(e){
        let flag=true;
        //和第一名比较
        if (e.score>highscore[0]) {
            highscore[0]=e.score;
            if(best[0]===undefined) {
                best[0]=e;
                flag=false;
            }
            else {
                let t=best[0];
                best[0]=e;
                e=t;
            }
        }
        //和第二名比较
        if (e.score>highscore[1]&&flag) {
            highscore[1]=e.score;
            if(best[1]===undefined) {
                best[1]=e;
                flag=false;
            }
            else {
                let t=best[1];
                best[1]=e;
                e=t;
            }
        }
        //和第三名比较
        if (e.score>highscore[2]&&flag) {
            highscore[2]=e.score;
            best[2]=e;
        }
    });
    $(".result").remove();
    best.forEach(function(e){
        let cell=$("<div class=\"result\"></div>"),
            l1=$("<div class=\"line l1\"><div class=\"label\">&nbsp;推荐标签:</div></div>"),
            l2=$("<div class=\"line l2\"><div class=\"label\">&nbsp;可得干员:</div></div>");
        e.selectedTags.forEach(function(f){
            l1.append("<div class=\"tag recommend\">"+tags[f].name+"</div>");
        });
        e.possibleAgents.forEach(function(f){
            l2.append("<div class=\"agent s"+f.star+"\">"+f.name+"</div>");
        });
        cell.append(l1,l2);
        $("#results").append(cell);
    });
}