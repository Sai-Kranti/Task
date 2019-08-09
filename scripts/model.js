import {MVCview} from './view.js';
import {MVCcontroller} from './controller.js';

export class MVCmodel
{
    constructor(selectedCategory='cnn'){
        this.main = document.getElementsByClassName("main")[0];
        this.selectedCategory=selectedCategory;
        this.newsTitlesData = [];
        this.newsMatterData=[];
        this.newsImages=[];
        this.newsDatesData=[];
        this.newsMoreMatterData=[];
        this.getAPIData();
        this.mvcView = null;
        this.emailList = [];
        this.controller = new MVCcontroller();
        this.controller.localStorageFunction();
    }
//--------------------------------------get data from api (model)---------------------------------
getAPIData = () => {
fetch(`https://newsapi.org/v2/everything?q=${this.selectedCategory}&from=2019-08-01&sortBy=publishedAt&apiKey=fdbb01062df842ca9c8863309f00c5ff`)
.then(response => {
    return response.json();
})
.then(response => {
    return response.articles;
})
.then( response => {
    this.newsTitlesData = [];
    this.newsMatterData=[];
    this.newsImages=[];
    this.newsDatesData=[];
    this.newsMoreMatterData=[];
    for( let  positoin=0; positoin<10; positoin++){
        this.newsTitlesData.push(response[positoin].title);
        this.newsMatterData.push(response[positoin].description);
        this.newsImages.push(response[positoin].urlToImage);
        this.newsDatesData.push(this.dateConversion(response[positoin].publishedAt));
        this.newsMoreMatterData.push(response[positoin].content);
    }
    this.mvcView = new MVCview(this.main, this.newsTitlesData, this.newsMatterData, this.newsImages, this.newsDatesData, this.newsMoreMatterData, this.selectedCategory);
    let elem1 = document.getElementsByClassName('container')[0];
    let elem2 = document.getElementsByClassName('footer')[0];
    if(elem1!=undefined)
    {
        elem1.parentNode.removeChild(elem1);
        elem2.parentNode.removeChild(elem2);
    }
    this.mvcView.createContainer();
    this.mvcView.createFooter();
});
}

//----------------------------------------------Date-Conversion(view)--------------------------------

dateConversion = (rawDate) => {
    //2019-07-30T12:45:15Z    30 July, 2019
    let ret = [];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    ret.push(rawDate.substring(8,10));
    ret.push(months[Number(rawDate.substring(5,7))]);
    ret.push(rawDate.substring(0,4));

    return ret[0] + ' ' + ret[1] + ', ' + ret[2];
}

}

new MVCmodel();