function banner_lr(imgs,dots,banner,leftBth,rightBth,widths,second=2000,activeClass="active"){
    let next=0;
    let now=0;
    let flag=true;
    imgs[0].style.left=0;
    dots[0].classList.add(activeClass);
    let t =setInterval(move,second);
    function move() {
        next++;
        if(next==imgs.length){
            next=0;
        }
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        dots[now].classList.remove(activeClass);
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[next].classList.add(activeClass);
        now=next;
    }
    function moveL(){
        next--;
        if (next==-1){
            next=imgs.length-1;
        }
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths});
        dots[now].classList.remove(activeClass);
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[next].classList.add(activeClass);
        now=next;
    }
    leftBth.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        moveL();
    };
    rightBth.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        move();
    };
    banner.onmouseover=function () {
        clearInterval(t)
    };
    banner.onmouseout=function(){
        t=setInterval(move,second);
    };

    for(let num=0;num<imgs.length;num++){
        dots[num].onclick=function(){
            for(let i=0;i<imgs.length;i++){
                imgs[i].style.left=widths+"px";
                dots[i].classList.remove(activeClass);
            }
            imgs[num].style.left=0+"px";
            dots[num].classList.add(activeClass);
            now=num;
            next=num;
        }}
    window.onblur=function(){
        clearInterval(t);
    };
    window.onfocus=function(){

    };
}