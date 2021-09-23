
var arr =['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg','./img/5.png'];
var prev = document.getElementsByClassName('prev');
var next = document.getElementsByClassName('next');
var img = document.getElementsByTagName('img');
var a = document.querySelectorAll('.btn>a')
var i = 0;
// console.log(prev);
// console.log(next);
// console.log(img);获得三个伪数组

next[0].onclick = function () {
i++;
if (i>4){
    i=0;
}
    img[0].src=arr[i];
};
prev[0].onclick = function () {
    i--;
    if (i<0){
        i=4;
    }
    img[0].src=arr[i];
};
//第二种方法可以直接让元素绑定函数
    function fn(j){
        for (var i =0;i<arr.length;i++){
            if(j===i){
                img[0].src=arr[j];
                a[i].style.cssText='border-color:rgba(0,0,0,.4);background-color:rgba(255,255,255,.3);'
            }
            else{
                a[i].style.cssText='border-color:rgba(255,255,255,.3);background-color:rgba(255,255,255,.3);'
            }
        }
    }

//改数据之前确认一下这个数据关联了什么，如果没问题就可以改
//一般来说因为代码是从前往后执行的，所以写代码要注意此点，输出尽量放到后面