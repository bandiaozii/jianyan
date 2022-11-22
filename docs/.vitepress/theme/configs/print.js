// export function goPrint() {
//     let ss = document.getElementsByTagName("code");
//     for (var i = 0; i < ss.length; i++) {
//       ss[i].style="border-bottom:1px solid #111111;color:rgba(100, 108, 255, 0)"}
//     location.hash = ''
//     let bodyHtml = window.document.body.innerHTML;
//     let startElement = "<!--startPrint-->";
//     let overElement = "<!--endPrint-->";
//     let printElement = bodyHtml.substr(bodyHtml.indexOf(startElement) + 17);
//     printElement = printElement.substring(0, printElement.indexOf(overElement));
//     window.document.body.innerHTML = printElement;
//     window.print();
//     window.document.body.innerHTML = bodyHtml
//     location.reload()
// }
//
