import {MVCmodel} from './model.js';

export class MVCcontroller{
localStorageFunction = () =>{
    if (localStorage.getItem("emailList") === null) {
        MVCmodel.emailList=[];
      }
      else{
        MVCmodel.emailList = JSON.parse(localStorage.getItem('emailList'));
      }
    }
  //---------------------------------------------validate email(controller)-----------------------------------------

  validateEmail = (mail) => 
  {
      console.log('entered value is..................', mail);
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        if(MVCmodel.emailList.indexOf(mail) > -1)
        {
          alert('this email is already subscribed!');
        }
        else{
          MVCmodel.emailList.push(mail);
          localStorage.setItem('emailList', JSON.stringify(MVCmodel.emailList));
        }
  
      return (true);
    }
      alert("You have entered an invalid email address!");
      return (false);
  }
}