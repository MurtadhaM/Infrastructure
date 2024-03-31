
// Making a request to Teams Webhook
let teams_Webhook = $('.webhook-url').val()
async function get_Request(url) {
  const response = await fetch(url).then(res => {
    setup_results(res.clone())
  })
}






let API_Results = ''


// Send Webhook Request
async function Submit_Webhook_Rest() {

  let json_parsed = JSON.parse($('.json-content').val());
  const REST_Response = await axios(teams_Webhook,      
    {
      "type":"message",
      "attachments":[
         {
            "contentType":"application/vnd.microsoft.card.adaptive",
            "contentUrl":null,
            "content":{
               json_parsed
            },
            
         }

           

      ]
   
,
      "Access-Control-Allow-Origin": "*",
      Headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        ,
        'Access-Control-Allow-Origin': '*'
      }

    },
    
    
   
   ).then((data) =>{

    console.log(data)
   }).
   
   catch(err => {
    console.log(err)
  })

  console.log(REST_Response)
  return REST_Response
}

async function post_Request(url, parameters) {
  const response = await fetch(url, {
    method: 'POST',

    body: JSON.stringify(parameters)
  })
  return response
}


// SHOW FOR NOW

document.getElementById('webhook-btn').addEventListener('click', function () {
  post_Request(teams_Webhook, JSON.parse($('.json-content').val()));
        
  })
