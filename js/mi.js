
    function bannerDh(imgs, dots, widths, rightBth, leftBth, banner, activeClass = "active", delay, flag = true) {
        let next = 0;
        let current = 0;
        imgs[current].style.left = 0 + "px";
        dots[current].classList.add(activeClass);
        let t = setInterval(move, delay);

        function move() {
            next++;
            // console.log(next);
            if (next == imgs.length) {
                next = 0;
            }
            imgs[next].style.left = `${widths}px`;
            animate(imgs[current], {left: -widths});
            animate(imgs[next], {left: 0}, function () {
                flag = true;
            });
            dots[current].classList.remove(activeClass);
            dots[next].classList.add(activeClass);
            current = next;
        }

        function moveL() {
            next--;
            console.log(next);
            if (next == -1) {
                next = imgs.length-1;
            }
            imgs[next].style.left=`${-widths}px`;
            animate(imgs[current], {left: widths});
            animate(imgs[next], {left: 0}, function () {
                flag = true;
            });
            dots[current].classList.remove(activeClass);
            dots[next].classList.add(activeClass);
            current = next;
        }

        leftBth.onclick = function () {
            if (!flag) {
                return;
            }
            flag = false;
            moveL();
        };
        rightBth.onclick = function () {
            if (!flag) {
                return;
            }
            flag = false;
            move();
        };
//bannerBar
        for (let i = 0; i < dots.length; i++) {

            dots[i].onclick = function () {
                if (flag == false) {
                    return;
                }
                flag = false;
                bannerBar();

            };

            function bannerBar() {
                if (i == current) {
                    return;
                } else if (i < current) {
                    imgs[i].style.left = `${-widths}px`;
                    animate(imgs[current], {left: widths});
                    animate(imgs[i], {left: 0}, function () {
                        flag = true;
                    });
                    dots[current].classList.remove(activeClass);
                    dots[i].classList.add(activeClass);
                } else if (i > current) {
                    imgs[i].style.left = `${widths}px`;
                    animate(imgs[current], {left: -widths});
                    animate(imgs[i], {left: 0}, function () {
                        flag = true;
                    });
                    dots[current].classList.remove(activeClass);
                    dots[i].classList.add(activeClass);
                }
                next = current = i;
            }
        }

//窗口获取焦点
        window.onblur = function () {
            clearInterval(t);
        };
        window.onfocus = function () {
            t = setInterval(move, delay);
        };
        banner.onmouseenter = function () {
            clearInterval(t);
        };
        banner.onmouseleave = function () {
            t = setInterval(move, delay);
        };
    }

    //内容轮播函数
    function goods4(cons, bannerBar, widthOne, rightBthOne, leftBthOne, activeClass,flag=true) {
        let next = 0;
        let current = 0;
        cons[current].style.left = 0 + "px";
        bannerBar[current].classList.add(activeClass);

        function move() {
            next++;
            if (next == 3) {
                next = 2;
            }
            cons[next].style.left = `${widthOne}px`;
            animate(cons[current], {left: -widthOne});
            animate(cons[next], {left: 0},function(){
                flag=true;
            });
            bannerBar[current].classList.remove(activeClass);
            bannerBar[next].classList.add(activeClass);
            current = next;
        }

        function moveL() {
            next--;
            if (next == -1) {
                next = 0;
            }
            cons[next].style.left = `${-widthOne}px`;
            animate(cons[current], {left: widthOne});
            animate(cons[next], {left: 0},function(){
                flag=true;
            });
            bannerBar[current].classList.remove(activeClass);
            bannerBar[next].classList.add(activeClass);
            current = next;
        }
        //内容左键
        leftBthOne.onclick = function () {
            if(next==0){
                return;
            }
            if (!flag) {
                return;
            }
            flag = false;
            moveL();
        };
        //内容右键
        rightBthOne.onclick = function () {
            if(next==cons.length-1){
                return;
            }
            if (!flag) {
                return;
            }
            flag = false;
            move();
        };
        // 内容轮波点
        for (let i = 0; i < bannerBar.length; i++){
            bannerBar[i].onclick = function () {
                bannerBars();

            };

            function bannerBars() {
                if (i == current) {
                    return;
                } else if (i < current) {
                    cons[i].style.left = `${-widthOne}px`;
                    animate(cons[current], {left: widthOne});
                    animate(cons[i], {left: 0});
                    bannerBar[current].classList.remove(activeClass);
                    bannerBar[i].classList.add(activeClass);
                } else if (i > current) {
                    cons[i].style.left = `${widthOne}px`;
                    animate(cons[current], {left: -widthOne});
                    animate(cons[i], {left: 0});
                    bannerBar[current].classList.remove(activeClass);
                    bannerBar[i].classList.add(activeClass);
                }
                current =next= i;
                console.log(i);
            }
        }
    }

//    为你推荐 轮播
window.onload=function() {
    let bthL=document.querySelectorAll(".right .leftbth");
    let bthR=document.querySelectorAll(".right .rightbth");
    let contentOne=document.querySelectorAll(".content_one")[0];
    let widthsOne=parseInt(getComputedStyle(contentOne,null).width)/3;
    let contentTwo=document.querySelectorAll(".contentTwo ul")[0];
    let widthsTwo=parseInt(getComputedStyle(contentTwo,null).width)/3;
    let lis=document.querySelectorAll(".aside li");
    let aside=document.querySelectorAll(".aside .card");
    let next=0;
    bthR[0].classList.add("active2");
    bthR[1].classList.add("active2");
        bthR[0].onclick=function(){
            next++;
            if(next==3){
                next=2;
            }
            if(next==2){
                bthR[0].classList.remove("active2");
            }
            console.log(next);
            if(next!=0){
                bthL[0].classList.add("active2");
            }
            contentOne.style.transform=`translate(${-widthsOne*next}px)`;
        };
        bthL[0].onclick=function(){
            next--;
            if(next==-1){
                next=0;
            }
            if(next==0){
                bthL[0].classList.remove("active2");
            }
            if(next!=2){
                bthR[0].classList.add("active2");
            }
            contentOne.style.transform=`translate(${-widthsOne*next}px)`;
        };
        bthR[1].onclick=function(){
            next++;
            if(next==3){
                next=2;
            }
            if(next==2){
                bthR[1].classList.remove("active2");
            }
            if(next!=0){
                bthL[1].classList.add("active2");
            }
            contentTwo.style.transform=`translate(${-widthsTwo*next}px)`;
        };
        bthL[1].onclick=function(){
            next--;
            if(next==-1){
                next=0;
            }
            if(next==0){
                bthL[1].classList.remove("active2");
            }
            if(next!=2){
                bthR[1].classList.add("active2");
            }
            contentTwo.style.transform=`translate(${-widthsTwo*next}px)`;
        };
        lis.forEach((value,index)=>{
            value.onmouseenter=function(){
                aside.forEach((e)=>{
                    e.style.display="none";
                });
                    aside[index].style.display="block";
            };
            value.onmouseleave=function(){
                aside[index].style.display="none";
            }
        });

//    家电选项卡
    let rightUlOnes=document.querySelectorAll(".goods1 .content .rightUl .rightUlOne");
    let hots=document.querySelectorAll(".goods1 .top .right a");

    rightUlOnes[0].style.display="block";
    hots.forEach(function(value,index){
        value.onmouseenter=function(){
                rightUlOnes.forEach(function(v){
                    v.style.display="none";
                });
            rightUlOnes[index].style.display="block";
                hots.forEach(function(v){
                    v.classList.remove("active");
                });
            value.className="active";
            console.log(index);
        }
    });

// 头部选项卡
//    选项卡外层盒子
    let navCard=document.querySelector(".navCard");
    //选项
    let heads=document.querySelectorAll(".head .contain ul .nav");
    // 选项卡内容
    let navCardUls=document.querySelectorAll(".navCard .content .NavCardUl");
    //选项卡外层盒子
    let headBox=document.querySelector(".head .contain ul .idCard");

    heads.forEach((value,index)=>{
        value.onmouseenter=function(){
            navCardUls.forEach((e)=>{
                e.style.display="none"
            });
            navCard.classList.add("activeCard");
            navCardUls[index].style.display="block";
        };
        headBox.onmouseleave=function(){
            navCard.classList.remove("activeCard");
        };
    });
//    浏览器置顶
    let back=document.querySelector(".rightbar .sticky");
    console.log(back);
    window.onscroll=function(){
        let sh=document.documentElement.scrollTop||document.body.scrollTop;
        if(sh>700){
            console.log(sh);
            // back.style.opacity="1";
            animate(back,{opacity:1},200);
        }else{
            // back.style.opacity="0";
            animate(back,{opacity: 0},200);
        }
    };
    back.onclick=function(){
        animate(document.body,{scrollTop:0},600);
        animate(document.documentElement,{scrollTop: 0},600);
    }
};