//get webdriver io object
//set the capabilities
//load browser
// The above two actions are taken care by wdio test runner


//Tests
//close the popup box
//click track order

//declare the variables;
var link = "a[class='HeaderText']";
var search = "#searchquery";
var searchIcon = ".searchIconInverse" ;
var login = require('./login.page.js');

describe('Tests of Fanatics :',function(){
 it('Close the popup box',function(){
    //load url
   browser.url("./");
   login.lightBox.click();
   console.log(browser.getUrl());
   console.log(browser.getTitle());
 })
/*
 it('Create new account: ',function(){
   login.myAcc.click();   
   console.log(browser.getUrl());
   expect(browser.getUrl()).to.contain("login");
   login.createAcc.click();   
   expect(login.fName.isVisible()).to.be.true;
   login.fName.setValue("Shylaja");
   login.lName.setValue("Nagineni");
   login.eMail.setValue("a12@a.com");
   login.pWord.setValue("password123");
   login.smit.click();
expect(browser.getUrl()).to.be.equal("https://www.fanatics.com/account/home");
  })
*/
describe('Sign in Tests',function(){
  beforeEach('Sign in: ',function(){
   browser.url('https://www.fanatics.com/account/login');
   console.log(browser.getUrl());
   expect(browser.getUrl()).to.contain("login");
   login.loginUname.setValue("a12@a.com");
   login.loginPassword.setValue("password123");
   login.loginSubmit.click(); 
   browser.pause(1000);
   expect(login.loggedinName.getText()).to.be.equal("Shylaja Nagineni");
  })


it('Contact Customer : ',function(){
 login.contactCust.click();
 expect(login.orderInfo.isExisting()).to.be.true;
  console.log('Contact customer');
})
it('Signout from Account page : ',function(){
 login.signOutFromAcc.click();
 expect(login.myAcc.isExisting()).to.be.true;
   console.log('Signed out from account page');
})

/*
it('Sign out with name : ',function(){
  login.accDropdown.click();
  login.logout.click();
  expect(login.myAcc.isExisting()).to.be.true;
  console.log('Signed out from name');
})

it('Sign out with menu : ',function(){
  //login.accDropdownMenu.click();
  login.logout.click();
  expect(login.myAcc.isExisting()).to.be.true;
  console.log('Signed out from menu');
})*/

})
})