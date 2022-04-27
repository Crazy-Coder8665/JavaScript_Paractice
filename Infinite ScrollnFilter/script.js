const postCardTemplate = document.querySelector("[data-post-template]");
const postContainer = document.querySelector("[data-posts-container]");
const searchInput = document.querySelector("[data-search]");
let  DOM_posts;

let posts = [];
let scroll_content=5;


searchInput.addEventListener('input',(e)=>{
    const value = e.target.value.toLowerCase();
    console.log(value);
    if(value===''){
        scroll_content=5;
        for(let i=0;i<=posts.length;i++){
            if(i<10){
                posts[i].element.classList.remove('hide');
            }else{
                posts[i].element.classList.add('hide');
            }
        }
    }
    posts.forEach(post =>{
        const isVisible = post.title.toLowerCase().includes(value);
        post.element.classList.toggle("hide", !isVisible);
    });

});

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {
    posts = data.map((post,i) => {
        const card = postCardTemplate.content.cloneNode(true).children[0];
        const tempHeader = card.querySelector("[data-header]");
        const tempBody = card.querySelector("[data-body]");
        tempHeader.textContent = post.title;
        tempBody.textContent = post.body;
        
        postContainer.append(card);
        
        return {title : post.title, body: post.body, element:card};
    });
    for(let i=1;i<=posts.length;i++){
        if(i>10){
            posts[i-1].element.classList.add('hide');
        }
    }

});
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        for(let i=0;i<posts.length;i++){
            if(i<scroll_content+10){
                posts[i].element.classList.remove('hide');
            }
        
    }
    scroll_content+=10;
}
};

