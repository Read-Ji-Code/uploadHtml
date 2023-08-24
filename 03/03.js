document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector("footer>div");
    //const bt1 = document.getElementByID("bt1");
    console.log(bt1);

    const bt = document.querySelectorAll("button");
    console.log(bt);


    //변수선언
    //기준선언방법
    console.log(x);
    var x = 10;
    console.log(x);


    //최근선언방법
    //console.log(esx);
    let esx = 10;
    console.log(esx);


    //nodelist 순회
    //1.전통적인 for
    console.log("1.전통적인 for");
    for(let i=0; i < bt.length; i++) {
        console.log(bt[i]);
    }
    //2.for .. in : 키순회
    console.log("2.키순회 for");
    for(let i in bt) {
        console.log(i,bt[i]);
    }
    //3.array순회
    console.log("3.array순회");
    bt.forEach((i) => console.log(i));
    bt.forEach((i, idx) => console.log(idx, i));

    //4. for ..of 순회
    console.log("4. for ..of 순회");
    for(let [idx, i] of bt.entries()) {
        console.log(idx, i);
    }



    console.log("버튼의 캡션 값 가져오기");
    let s = "<ul>";
    console.log(s);
    for(let i of bt) {
        s = s + "<li>" + i.getAttribute("id") + " : " + i.textContent + "</li>";
    }
    console.log(s);
    document.querySelector("#adiv").innerHTML = s + "</ul>";
})