//global  iables
import {MVCmodel} from './model.js';
import {MVCcontroller} from './controller.js';

export class MVCview {
    constructor(main = null, newsTitlesData=[], newsMatterData=[], newsImage=[], newsDatesData=[], newsMoreMatterData=[], selectedCategory) {
        this.main = main;
        this.selectedCategory=selectedCategory
        this.newsTitlesData = newsTitlesData;
        this.newsMatterData = newsMatterData;
        this.newsImages = newsImage;
        this.newsDatesData = newsDatesData;
        this.newsMoreMatterData = newsMoreMatterData;
        this.createHeader();
        this.controller = new MVCcontroller();
    }

//---------------------------------setters----------------------------------------------------------
set setSelectedCategory(tempCategory)
{
    this.selectedCategory = tempCategory;
}

//---------------------------------getters----------------------------------------------------------

get getMain(){
    return this.main;
}

get getSelectedCategory(){
    return this.selectedCategory;
}

get getNewsTitlesData(){
    return this.newsTitlesData;
}

get getNewsMatterData(){
    return this.newsMatterData;
}

//---------------------------------header(view)-----------------------------------------------------
createHeader = () => {
    const elem1 = document.getElementsByClassName('header')[0];
    if(elem1!=undefined)
    {
        return;
    }
    const para = document.createElement("p");
    const h2 = document.createElement("h2");
    const node1 = document.createTextNode("NEWSFEED");
    const node2 = document.createTextNode("Yet another newsfeed");
    para.appendChild(node2);
    h2.appendChild(node1);
    const div = document.createElement("div");
      div.setAttribute('class','header');
    div.appendChild(h2);
    div.appendChild(para);
    this.getMain.appendChild(div)
    div.style.backgroundColor= '#273852';
    div.style.height= '90px';
    h2.style.fontFamily='sans-serif';
    h2.style.color='white';
    h2.style.display='inline-block';
    h2.style.marginLeft='20px';
    h2.style.marginTop='30px';
    h2.style.fontWeight='550';
    para.style.position='relative';
    para.style.opacity='0.9';
    para.style.bottom='3px';
    para.style.color='#e8e8e8';
    para.style.fontFamily='sans-serif';
    para.style.fontStyle='oblique 50deg';
    para.style.display='inline-block';
    para.style.marginLeft='20px';
    para.style.fontSize='12px';
    para.style.marginBottom='30px';
    }






//-----------------------------------------------footer(view)-----------------------------------------
createFooter = () => {
    const foo = document.createElement('div');
foo.setAttribute('class','footer');
const para = document.createElement("p");
const node = document.createTextNode("@ NewsFeed 2019");
para.appendChild(node);
para.style.display = 'inline';
para.style.fontFamily = 'arial';
para.style.fontSize = '0.6em';
para.style.color = 'white';
para.style.textAlign = 'center';
para.style.marginLeft = '47%';
foo.appendChild(para);
this.getMain.appendChild(foo);
}


//----------------------------------------news heading(view)----------------------------------------------------
createNewsHeading = (headingContent) => {
    const newsHeading =  document.createElement("h2");
    const node1 = document.createTextNode(headingContent);
    newsHeading.appendChild(node1);
    newsHeading.style.color='black';
    newsHeading.style.fontFamily='sans-serif';
    newsHeading.style.margin='0';
    newsHeading.style.padding='0';
    newsHeading.style.fontSize='16px';
    return newsHeading;
}

//--------------------------------------news date(view)-----------------------------------------------------------
createNewsDate = (newsDate) =>
{
    const  node1 = document.createTextNode('Posted on ');
    const  node2 = document.createTextNode(newsDate);
    const  node3 = document.createTextNode(' || Category: ');
    const  node4 = document.createTextNode(this.getSelectedCategory);
    const  para1 = document.createElement("p");
    para1.appendChild(node1);
    para1.style.margin='0';
    para1.style.fontFamily='sans-serif';
    para1.style.marginBottom='1em';
    para1.style.fontSize='0.8em';
    para1.style.color='grey';
    para1.style.display='inline';
    const  para2 = document.createElement("p");
    para2.appendChild(node2);
    para2.style.margin='0';
    para2.style.fontFamily='sans-serif';
    para2.style.marginBottom='1em';
    para2.style.fontSize='0.8em';
    para2.style.color='black';
    para2.style.display='inline';
    const  para3 = document.createElement("p");
    para3.appendChild(node3);
    para3.style.margin='0';
    para3.style.fontFamily='sans-serif';
    para3.style.marginBottom='1em';
    para3.style.fontSize='0.8em';
    para3.style.color='grey';
    para3.style.display='inline';
    const  para4 = document.createElement("p");
    para4.appendChild(node4);
    para4.style.margin='0';
    para4.style.fontFamily='sans-serif';
    para4.style.marginBottom='1em';
    para4.style.fontSize='0.8em';
    para4.style.color='black';
    para4.style.display='inline';
    return [para1, para2, para3, para4];
}


//----------------------------------------------------news matter(view)---------------------------------------------

createNewsMatter = (newsContent) =>
{
    const  node1 = document.createTextNode(newsContent);
    const  para1 = document.createElement("p");
    para1.appendChild(node1);
    para1.style.margin='0';
    para1.style.fontSize='0.8em';
    para1.style.marginTop='1em';
    para1.style.height='40%';
    para1.style.overflow='hidden';
    para1.style.fontFamily='sans-serif';
    return para1;
}

//----------------------------------------------------news extend(view)------------------------------------------------

createNewsExtend = (position) =>
{
    
    const node = document.createTextNode('Continue Reading');
    const button = document.createElement('button');
    button.appendChild(node);
    const _this = this;
    button.addEventListener("click", function(){
        _this.readMore(position);
    });
    button.style.position= 'absolute';
    button.style.backgroundColor='#d25e52';
    button.style.fontFamily='sans-serif';
    button.style.color='white';
    button.style.border='0';
    button.style.margin='0';
    button.style.marginTop='0px';
    button.style.bottom='0';
    button.style.padding='8px 20px';
    button.style.cursor='pointer';
    return button;
}
//-----------------------------------------------news-image(view)-------------------------------------------------------

createNewsImage = (path) =>
{
    const image = document.createElement('img');
    image.style.height='90%';
    image.style.width='20%';
    image.style.backgroundColor='#d0d0d0';
    image.style.float='left';
    image.style.margin='1%';
    image.src=path;
    return image;
}

//-----------------------------------------------content(view)-----------------------------------------------------------

createContent = (title, date, matter, position) =>
{
    const content = document.createElement('div');
    content.style.backgroundColor= 'white';
    content.style.margin='1%';
    content.style.height='90%';
    content.style.width='76%';
    content.style.float='left';
    content.style.overflow='hidden';
    content.style.position='relative';
    const newsheading=this.createNewsHeading(title);
    content.appendChild(newsheading);
    const newsDate=this.createNewsDate(date);
    content.appendChild(newsDate[0]);
    content.appendChild(newsDate[1]);
    content.appendChild(newsDate[2]);
    content.appendChild(newsDate[3]);
    const newsMatter=this.createNewsMatter(matter);
    content.appendChild(newsMatter);
    const newsExtend = this.createNewsExtend(position);
    content.appendChild(newsExtend);
    return content;
}

//------------------------------------------------news(view)----------------------------------------------------

createNews = (title, date, matter, position) =>
{
    const news = document.createElement('div');
    news.style.display='block';
    news.style.height='180px';
    news.style.width='100%';
    news.style.backgroundColor='white';
    news.style.margin='15px';
    const newsImage = this.createNewsImage(this.newsImages[position]);
    news.appendChild(newsImage);
    const content=this.createContent(title, date, matter, position);
    news.appendChild(content);
    return news;
}

//------------------------------------------select-category(view)----------------------------------------------

createSelectCategory = () =>
{
    const info = document.createElement('h5');
    const matter = document.createTextNode('SELECT CATEGORY');
    info.appendChild(matter);
    info.style.fontFamily='sans-serif';
    info.style.fontWeight='800';
    info.style.color='#606060';
    info.style.marginBottom='0';
    return info;
}

//------------------------------------------dropdown(view)--------------------------------------------------------

createDropdown = () =>
{
    const  option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const  option3 = document.createElement('option');
    const option4 = document.createElement('option');
    option1.setAttribute("value","cnn");
    option2.setAttribute("value","wired");
    option3.setAttribute("value","cnbc");
    option4.setAttribute("value","globo");
    option1.setAttribute("class","options");
    option2.setAttribute("class","options");
    option3.setAttribute("class","options");
    option4.setAttribute("class","options");
    const  node1 = document.createTextNode('cnn');
    const node2 = document.createTextNode('wired');
    const node3 = document.createTextNode('cnbc');
    const node4 = document.createTextNode('globo');
    option1.appendChild(node1);
    option2.appendChild(node2);
    option3.appendChild(node3);
    option4.appendChild(node4);
    const select = document.createElement('select');
    select.setAttribute("class","dropdown");
    select.setAttribute("name","category");
    select.addEventListener("change",this.categoryChange);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.value=this.getSelectedCategory;
    return select;

}

//------------------------------------------category-change(view)----------------------------------------

categoryChange = () =>
{
    
    this.setSelectedCategory = (document.getElementsByClassName("dropdown")[0].value) ;
    new MVCmodel(this.getSelectedCategory);
}


//------------------------------------------subscribe(view)----------------------------------------------

createSubscribe = () =>
{
    const info = document.createElement('h5');
    const matter = document.createTextNode('SUBSCRIBE');
    info.appendChild(matter);
    info.style.fontFamily='sans-serif';
    info.style.fontWeight='800';
    info.style.color='#606060';
    info.style.marginBottom='0';
    return info;
}

//------------------------------------------form(view)----------------------------------------------------
createForm = () =>
{
    const input = document.createElement('input');
    const button = document.createElement('button');
    const matter = document.createTextNode('Subscribe');
    const _this = this;
    button.addEventListener('click', function(){
        _this.controller.validateEmail(document.getElementById("email").value);
    });
    button.appendChild(matter);
    input.setAttribute('type','text');
    input.setAttribute('placeholder','Email Address');
    input.setAttribute('id','email');
    button.setAttribute('class','submit');
    const form = document.createElement('form');
    form.appendChild(input);
    form.appendChild(button);
    return form;
}

//----------------------------------------sub(view)---------------------------------------------------------

createSub = () =>
{
    const  sub = document.createElement('div');
    sub.setAttribute('class','subs');
    const one = this.createSelectCategory();
    const two = this.createDropdown();
    const three = this.createSubscribe();
    const  four = this.createForm();
    sub.appendChild(one);
    sub.appendChild(two);
    sub.appendChild(three);
    sub.appendChild(four);
    return sub;
}

//--------------------------------------data(view)----------------------------------------------------------

createData = () =>
{
    let changed=0;
    const elem1 = document.getElementsByClassName('data')[0];
    const elem2 = document.getElementsByClassName('subs')[0];
    const elem3 = document.getElementsByClassName('footer')[0];
    if(elem1!=undefined)
    {
        elem1.parentNode.removeChild(elem1);
        elem2.parentNode.removeChild(elem2);
        elem3.parentNode.removeChild(elem3);
          changed=1;
    }
    const  data = document.createElement('div');
    data.setAttribute('class','data');
    const total=this.newsImages.length;
    for( let position=0;position<total;position++)
    {
        let content = this.createNews(this.getNewsTitlesData[position], this.newsDatesData[position], this.getNewsMatterData[position],position);
        data.appendChild(content);
        if(position+1!=total)
        {
            let  hr = document.createElement('hr');
            data.appendChild(hr);
        }
    }

    return data;
}

//---------------------------------overlaycontent(view)-------------------------------------------

overlayContent = (position) =>
{

    const elem1 = document.getElementsByClassName('overlay')[0];
    if(elem1!=undefined)
    {
        elem1.parentNode.removeChild(elem1);
    }

    const overlay = document.createElement('div');
    overlay.setAttribute('class','overlay');

    const close = document.createElement('a');
    close.setAttribute('class','closenbtn');
    close.addEventListener("click", this.closeNav);
    var text = document.createTextNode('X');
    close.style.fontFamily='arial';
    close.style.cursor='pointer';
    close.appendChild(text);

    const overlaycontent = document.createElement('div');
    overlaycontent.setAttribute('class','overlay-content');

    const heading = document.createElement('h1');
    heading.setAttribute('class','overlay-heading');
    text = document.createTextNode(this.getNewsTitlesData[position]);
    heading.appendChild(text);
    const fulltext = document.createElement('p');
    fulltext.setAttribute('class','extended-content');
    text = document.createTextNode(this.newsMoreMatterData[position]);
    fulltext.appendChild(text);
    overlaycontent.appendChild(heading);
    overlaycontent.appendChild(fulltext);

    overlay.appendChild(close);
    overlay.appendChild(overlaycontent);


    return overlay;

}

//--------------------------------container(view)-------------------------------------------------

createContainer = () =>
{
    const container = document.createElement('div');
    container.setAttribute('class','container');
    const data = this.createData();
    const sub = this.createSub();

    container.appendChild(data);
    container.appendChild(sub);
    this.getMain.appendChild(container);


}


//---------------------------------------user-events(controller)-----------------------------------------
readMore = (position) =>
{   
    const overlay = this.overlayContent(position);
    this.getMain.appendChild(overlay);
    document.getElementsByClassName("overlay")[0].style.width = "100%";

}

closeNav = () => {
    document.getElementsByClassName("overlay")[0].style.width = "0%";
  }


}