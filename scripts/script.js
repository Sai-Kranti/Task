//global letiables
let selected_category='cnbc';
let news_titles_data = [];
let news_matter_data = [];
let news_images = [];
let news_dates_data = [];
let news_morematter_data = [];
getAPIData();
function getAPIData(){
console.log('${selected_category}');
fetch(`https://newsapi.org/v2/everything?q=${selected_category}&from=2019-07-01&sortBy=publishedAt&apiKey=fdbb01062df842ca9c8863309f00c5ff`)
.then(response => {
    return response.json();
})
.then(response => {
    return response.articles;
})
.then( response => {
    news_titles_data = [];
    for(let positoin=0; positoin<10; positoin++){
        news_titles_data.push(response[positoin].title);
    }
    return response;
})
.then( response => {
    console.log(response);
    news_matter_data = [];
    for(let positoin=0; positoin<10; positoin++){
        news_matter_data.push(response[positoin].description);
    }
    return response;
})
.then( response => {
    console.log(response);
    news_images=[];
    for(let positoin=0; positoin<10; positoin++){
        news_images.push(response[positoin].urlToImage);
    }
    return response;
})
.then( response => {
    console.log(response);
    news_dates_data=[];
    for(let positoin=0; positoin<10; positoin++){
        news_dates_data.push(response[positoin].publishedAt);
    }
    return response;
})
.then( response => {
    console.log(response);
    news_morematter_data = [];
    for(let positoin=0; positoin<10; positoin++){
        news_morematter_data.push(response[positoin].content);
    }
    return response;
})
.then(response => {
    let elem1 = document.getElementsByClassName('container')[0];
    let elem2 = document.getElementsByClassName('footer')[0];
    if(elem1!=undefined)
    {
        console.log('entered');
        elem1.parentNode.removeChild(elem1);
        elem2.parentNode.removeChild(elem2);
    }
    createContainer();
    createFooter();
    console.log('all over');
});
}
let email_list;

if (localStorage.getItem("email_list") === null) {
    email_list=[];
  }
  else{
    email_list = JSON.parse(localStorage.getItem('email_list'));
  }

//-----------------------------------------------footer-----------------------------------------
function createFooter(){
let foo = document.createElement('div');
foo.setAttribute('class','footer');
let para = document.createElement("p");
let node = document.createTextNode("@ NewsFeed 2019");
para.appendChild(node);
para.style.display = 'inline';
para.style.fontFamily = 'arial';
para.style.fontSize = '0.6em';
para.style.color = 'white';
para.style.textAlign = 'center';
para.style.marginLeft = '47%';
foo.appendChild(para);
let main = document.getElementsByClassName('main')[0];
main.appendChild(foo);
}

//---------------------------------header-----------------------------------------------------
function createHeader(){
let para = document.createElement("p");
let h2 = document.createElement("h2");
let node1 = document.createTextNode("NEWSFEED");
let node2 = document.createTextNode("Yet another newsfeed");
para.appendChild(node2);
h2.appendChild(node1);
let div = document.createElement("div");
div.appendChild(h2);
div.appendChild(para);
let main = document.getElementsByClassName("main")[0];
main.appendChild(div)
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

//----------------------------------------news heading----------------------------------------------------
function createNewsHeading(heading_content){
    let newsHeading =  document.createElement("h2");
    let node1 = document.createTextNode(heading_content);
    newsHeading.appendChild(node1);
    newsHeading.style.color='black';
    newsHeading.style.fontFamily='sans-serif';
    newsHeading.style.margin='0';
    newsHeading.style.padding='0';
    newsHeading.style.fontSize='16px';
    return newsHeading;

}

//--------------------------------------news date-----------------------------------------------------------
function createNewsDate(news_date)
{
    let node1 = document.createTextNode('Posted on ');
    let node2 = document.createTextNode(news_date);
    let node3 = document.createTextNode(' || Category: ');
    let node4 = document.createTextNode(selected_category);
    let para1 = document.createElement("p");
    para1.appendChild(node1);
    para1.style.margin='0';
    para1.style.fontFamily='sans-serif';
    para1.style.marginBottom='1em';
    para1.style.fontSize='0.8em';
    para1.style.color='grey';
    para1.style.display='inline';
    let para2 = document.createElement("p");
    para2.appendChild(node2);
    para2.style.margin='0';
    para2.style.fontFamily='sans-serif';
    para2.style.marginBottom='1em';
    para2.style.fontSize='0.8em';
    para2.style.color='black';
    para2.style.display='inline';
    let para3 = document.createElement("p");
    para3.appendChild(node3);
    para3.style.margin='0';
    para3.style.fontFamily='sans-serif';
    para3.style.marginBottom='1em';
    para3.style.fontSize='0.8em';
    para3.style.color='grey';
    para3.style.display='inline';
    let para4 = document.createElement("p");
    para4.appendChild(node4);
    para4.style.margin='0';
    para4.style.fontFamily='sans-serif';
    para4.style.marginBottom='1em';
    para4.style.fontSize='0.8em';
    para4.style.color='black';
    para4.style.display='inline';
    return [para1, para2, para3, para4];
}


//----------------------------------------------------news matter---------------------------------------------

function createNewsMatter(news_content)
{
    let node1 = document.createTextNode(news_content);
    let para1 = document.createElement("p");
    para1.appendChild(node1);
    para1.style.margin='0';
    para1.style.fontSize='0.8em';
    para1.style.marginTop='1em';
    para1.style.height='40%';
    para1.style.overflow='hidden';
    para1.style.fontFamily='sans-serif';
    return para1;
}

//----------------------------------------------------news extend------------------------------------------------

function createNewsExtend(position)
{
    let cname = `button-${position}`;
    let node = document.createTextNode('Continue Reading');
    let button = document.createElement('button');
    button.appendChild(node);
    button.setAttribute("onclick",`readMore(${position})`);
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
//-----------------------------------------------news-image-------------------------------------------------------

function createNewsImage(path)
{
    let image = document.createElement('img');
    image.style.height='90%';
    image.style.width='20%';
    image.style.backgroundColor='#d0d0d0';
    image.style.float='left';
    image.style.margin='1%';
    image.src=path;
    return image;
}

//-----------------------------------------------content-----------------------------------------------------------

function createContent(title, date, matter, position)
{
    let content = document.createElement('div');
    content.style.backgroundColor= 'white';
    content.style.margin='1%';
    content.style.height='90%';
    content.style.width='76%';
    content.style.float='left';
    content.style.overflow='hidden';
    content.style.position='relative';
    newsheading=createNewsHeading(title);
    content.appendChild(newsheading);
    newsDate=createNewsDate(date);
    content.appendChild(newsDate[0]);
    content.appendChild(newsDate[1]);
    content.appendChild(newsDate[2]);
    content.appendChild(newsDate[3]);
    newsMatter=createNewsMatter(matter);
    content.appendChild(newsMatter);
    newsExtend = createNewsExtend(position);
    content.appendChild(newsExtend);
    return content;
}

//------------------------------------------------news----------------------------------------------------

function createNews(title, date, matter,position)
{
    let news = document.createElement('div');
    news.style.display='block';
    news.style.height='180px';
    news.style.width='100%';
    news.style.backgroundColor='white';
    news.style.margin='15px';
    newsImage = createNewsImage(news_images[position]);
    news.appendChild(newsImage);
    content=createContent(title, date, matter, position);
    news.appendChild(content);
    return news;
}

//------------------------------------------select-category----------------------------------------------

function createSelectCategory()
{
    let info = document.createElement('h5');
    let matter = document.createTextNode('SELECT CATEGORY');
    info.appendChild(matter);
    info.style.fontFamily='sans-serif';
    info.style.fontWeight='800';
    info.style.color='#606060';
    info.style.marginBottom='0';
    return info;
}

//------------------------------------------dropdown--------------------------------------------------------

function createDropdown()
{
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');
    let option4 = document.createElement('option');
    option1.setAttribute("value","cnn");
    option2.setAttribute("value","wired");
    option3.setAttribute("value","cnbc");
    option4.setAttribute("value","globo");
    option1.setAttribute("class","options");
    option2.setAttribute("class","options");
    option3.setAttribute("class","options");
    option4.setAttribute("class","options");
    let node1 = document.createTextNode('cnn');
    let node2 = document.createTextNode('wired');
    let node3 = document.createTextNode('cnbc');
    let node4 = document.createTextNode('globo');
    option1.appendChild(node1);
    option2.appendChild(node2);
    option3.appendChild(node3);
    option4.appendChild(node4);
    let select = document.createElement('select');
    select.setAttribute("class","dropdown");
    select.setAttribute("name","category");
    select.setAttribute("onchange","categoryChange()");
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.value=selected_category;
    return select;

}

//------------------------------------------category-change----------------------------------------

function categoryChange()
{
    
    selected_category = document.getElementsByClassName("dropdown")[0].value;
    console.log(selected_category);
    getAPIData();
}


//------------------------------------------subscribe----------------------------------------------

function createSubscribe()
{
    let info = document.createElement('h5');
    let matter = document.createTextNode('SUBSCRIBE');
    info.appendChild(matter);
    info.style.fontFamily='sans-serif';
    info.style.fontWeight='800';
    info.style.color='#606060';
    info.style.marginBottom='0';
    return info;
}

//------------------------------------------form----------------------------------------------------

function createForm()
{
    let input = document.createElement('input');
    let button = document.createElement('button');
    let matter = document.createTextNode('Subscribe');
    button.setAttribute('onclick','validateEmail()');
    button.appendChild(matter);
    input.setAttribute('type','text');
    input.setAttribute('placeholder','Email Address');
    input.setAttribute('id','email');
    button.setAttribute('class','submit');
    let form = document.createElement('form');
    form.appendChild(input);
    form.appendChild(button);
    return form;
}

//----------------------------------------sub---------------------------------------------------------

function createSub()
{
    let sub = document.createElement('div');
    sub.setAttribute('class','subs');
    let one = createSelectCategory();
    let two = createDropdown();
    let three = createSubscribe();
    let four = createForm();
    sub.appendChild(one);
    sub.appendChild(two);
    sub.appendChild(three);
    sub.appendChild(four);
    return sub;
}

//--------------------------------------data----------------------------------------------------------

function createData()
{
    let changed=0;
    let elem1 = document.getElementsByClassName('data')[0];
    let elem2 = document.getElementsByClassName('subs')[0];
    let elem3 = document.getElementsByClassName('footer')[0];
    if(elem1!=undefined)
    {
        console.log('entered');
        elem1.parentNode.removeChild(elem1);
        elem2.parentNode.removeChild(elem2);
        elem3.parentNode.removeChild(elem3);
        let changed=1;
    }
    let data = document.createElement('div');
    data.setAttribute('class','data');
    if(true)
    {
        let total=news_images.length;
        for(let position=0;position<total;position++)
        {
            let content = createNews(news_titles_data[position], news_dates_data[position], news_matter_data[position],position);
            data.appendChild(content);
            if(position+1!=total)
            {
                let hr = document.createElement('hr');
                data.appendChild(hr);
            }
        }
    }
    return data;

}

//---------------------------------overlaycontent-------------------------------------------

function overlayContent(position)
{
    console.log(`pressed: + ${position}`);

    let elem1 = document.getElementsByClassName('overlay')[0];
    if(elem1!=undefined)
    {
        elem1.parentNode.removeChild(elem1);
    }

    let overlay = document.createElement('div');
    overlay.setAttribute('class','overlay');

    let close = document.createElement('a');
    close.setAttribute('class','closenbtn');
    close.setAttribute('onclick','closeNav()');
    let text = document.createTextNode('X');
    close.style.fontFamily='arial';
    close.style.cursor='pointer';
    close.appendChild(text);

    let overlaycontent = document.createElement('div');
    overlaycontent.setAttribute('class','overlay-content');

    let heading = document.createElement('h1');
    heading.setAttribute('class','overlay-heading');
    text = document.createTextNode(news_titles_data[position]);
    console.log(news_titles_data[position]);
    heading.appendChild(text);
    let fulltext = document.createElement('p');
    fulltext.setAttribute('class','extended-content');
    text = document.createTextNode(news_morematter_data[position]);
    fulltext.appendChild(text);
    overlaycontent.appendChild(heading);
    overlaycontent.appendChild(fulltext);

    overlay.appendChild(close);
    overlay.appendChild(overlaycontent);


    return overlay;

}

//--------------------------------container-------------------------------------------------

function createContainer()
{
    let container = document.createElement('div');
    container.setAttribute('class','container');
    let data = createData();
    let sub = createSub();

    container.appendChild(data);
    container.appendChild(sub);
    let main = document.getElementsByClassName('main')[0];
    main.appendChild(container);


}


//---------------------------------------user-events-----------------------------------------
function readMore(position)
{
    let main = document.getElementsByClassName('main')[0];
    let overlay = overlayContent(position);
    main.appendChild(overlay);
    console.log('appended');
    document.getElementsByClassName("overlay")[0].style.width = "100%";

}

function closeNav() {
    console.log('close nav function called');
    document.getElementsByClassName("overlay")[0].style.width = "0%";
  }


  //---------------------------------------------validate email-----------------------------------------

function validateEmail() 
{
    mail=document.getElementById("email").value;
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
  {
      if(email_list.indexOf(mail) > -1)
      {
        alert('this email is already subscribed!');
      }
      else{
        email_list.push(mail);
        localStorage.setItem('email_list', JSON.stringify(email_list));
      }

    return (true);
  }
    alert("You have entered an invalid email address!");
    return (false);
}
