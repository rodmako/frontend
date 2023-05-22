window.onload = function(){
    nav_list_make();
    code_pre_className_addRemove();
    htmlCodeToString();  
}

function nav_list_make(){
    const menu = document.querySelector(`[data-type="nav-menu"]`);
    const jump_target = document.querySelectorAll(`[data-target="jump"]`);
    jump_target.forEach((target, index) => {
        const target_title = target.querySelector(`[data-target="jump-title"]`);
        target.id = "jump-id-"+index;
        const jump_link = `<li><a href="#${target.id}">${target_title.innerHTML}</a></li>`;
        menu.innerHTML = menu.innerHTML + jump_link;
    });
}

function code_pre_className_addRemove(){
    const code_pre = document.querySelectorAll(".code-pre");
    code_pre.forEach(target => {
        target.addEventListener("mouseenter",()=>{
            target.classList.add("code-pre-active");
        });
        target.addEventListener("mouseleave",()=>{
            target.classList.remove("code-pre-active");
        });
    });
}

function stringToDecNumRef(){
    target = document.getElementById("stringForDecNum").value;
    text = document.getElementById("stringCopyButton");
    if(target == ""){
        alert("文字を入力してください。");
    }
    target_length = target.length;
    let target_x = "";
    for(let i=0;i<target_length;i++){
        target_x = target_x + "&amp;" + "&num;" + target.charCodeAt(i) + ";";
    }
    text.innerHTML = target_x;
}

function listOnOff(clicked_button){
    const target = document.querySelector(`[data-type="nav-menu"]`);
    if(clicked_button.innerHTML == "List show"){
        clicked_button.innerHTML = "List close";
    }else {
        clicked_button.innerHTML = "List show";
    }
    if(target.classList.contains("header-nav-active")){
        target.classList.remove("header-nav-active");
    }else {
        target.classList.add("header-nav-active");
    }
}

function htmlCodeToString(){
    const nodes = document.querySelectorAll(`[data-type="html-code"]`);
    nodes.forEach(node => {
        const target = node.querySelector(`[data-type="html-outer-text"]`);
        let htmlOuterText = node.outerHTML;
        htmlOuterText = htmlOuterText.replaceAll("<","&lt;");
        htmlOuterText = htmlOuterText.replaceAll(">","&gt;");
        target.innerHTML = htmlOuterText;
    });
}

function logoTextClickToIndexPage(){
    window.location.href = "./index.html";
}