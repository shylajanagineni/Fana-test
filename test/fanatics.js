describe('Fanatics tests',function(){
  var val
  it('Click NFL',function(){
   browser.url('./');
   //browser.click("#lightboxCloseImg");
   browser.click("#lightboxModal .primary");
   browser.click("#navNFL");
   var ari = $("#navNFL li a[title='Arizona Cardinals']");
   ari.waitForExist(3000);
   ari.click();
   var lad = $("#Shop-For1-disclosable a[title='Ladies']");
   lad.waitForExist(3000);
   lad.click();
  })
})
