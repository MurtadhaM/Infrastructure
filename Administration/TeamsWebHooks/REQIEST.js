

async function get_Request(url) {

    const response =  await fetch(url)
         .then(response => {
         
             return response.text();
         })
       
         .then(data => {
             console.log(data);
             return data;
         }).catch(error => {
             console.log(error);
         })
         .catch(error => console.log(error))
 
     return response;
 }
 
 
 let ip;
 // Public IP Provider
 let url = "http://ident.me/";
 
 const public_ip = get_Request(url).then((data) => {
     console.log(data);
     ip = data;
     return data;
 } ).catch((error) => {
     console.log(error);
 }
 )
 
 
 
 
 
 // Making a request to Teams Webhook
 
 const WebHook = process.env.TEAMS_WEBHOOK;
