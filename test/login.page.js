class login {
 get lightBox(){return $("#lightboxModal .primary");}
 get myAcc(){return $("a[title='My Account']");}
 get createAcc() {return $("#createAccountToggle");}
 get fName() {return $("#Register_FirstName");}
 get lName() {return $("#Register_LastName");}
 get eMail() {return $("#Register_UserName");}
 get pWord() {return $("#Register_Password");}
 get smit() {return $("#RegisterSubmit");}
 get loginUname() {return $("#Login_UserName");}
 get loginPassword() {return $("#Login_Password");}
 get loginSubmit() {return $("#Login_Submit");}
 get loggedinName() {return $("#ContentPaddingContainer > div.row > div.columns.large-3 > div > div > dl:nth-child(2) > dd > span");}
 get accDropdown() {return $("#headerFrameSliverContainer > div.columns.header-cart.end.header-frame-upper-right > div > div.large-10.columns > div > div:nth-child(5) > div > section > span.user-name-section");}
 get accDropdownMenu() {return $("#headerFrameSliverContainer > div.columns.header-cart.end.header-frame-upper-right > div > div.large-10.columns > div > div:nth-child(5) > div > section > span.menu");}
 get logout() {return $("#headerFrameSliverContainer > div.columns.header-cart.end.header-frame-upper-right > div > div.large-10.columns > div > div:nth-child(5) > div > section > div > ul > li:nth-child(2) > a");}

 get contactCust() {return $("#ContentPaddingContainer > div.row > div.columns.large-3 > div > div > div.row.my-account-leftnav-group.account-links > ul > li:nth-child(7) > a");}

 get orderInfo() {return $("#rn_ProductCategoryList_MaxIncrease_11 > div.rn_HierList.rn_HierList_23.rn_FloatLeft > h3 > a");} 

 get signOutFromAcc() {return $("#ContentPaddingContainer > div.row > div.columns.large-3 > div > div > div:nth-child(7) > div > a");}

 get trackMyOrder() {return $("#rn_IconList_10 > ul > li:nth-child(1) > a > img");} 



}
module.exports = new login();



